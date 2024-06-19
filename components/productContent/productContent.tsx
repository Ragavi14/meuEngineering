import React, { useState, useEffect, useRef } from "react";
import styles from './productContent.module.scss';
import { ApiService } from '../../services/api.service';
import ReactPaginate from 'react-paginate';
import Pagination from './pagination';

export default function ProductContent(products: any) {
    const baseUrl = new ApiService();
// console.log('Prodd=',products);
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 12;

    const indexOfLastProduct = (currentPage + 1) * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.products.products.slice(indexOfFirstProduct, indexOfLastProduct);
    const dropdownRef = useRef(null);

    // const handlePageChange = (pageNumber: any) => {
    //     setCurrentPage(pageNumber);
    // };
    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber.selected);
    };

    const [filter, setFilter] = useState('');
    const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown visibility

    // const filteredProducts = products.products.products.filter((product: any) =>
    //     product.name.toLowerCase().includes(filter.toLowerCase())
    // );
    const handleFilterChange = (event: any) => {
        setFilter(event.target.value);
        setShowDropdown(true); // Show dropdown when filter changes
    };

    const handleSearchFocus = () => {
        // setShowDropdown(true); // Show dropdown when search input is focused
        setShowDropdown(!showDropdown);
        setHoveredTitleIndex(null);
        setHoveredSubTitleIndex(null);
    };

    const handleDropdownChange = (selectedProduct: string) => {
        setFilter(selectedProduct);
        setShowDropdown(false);
        setCurrentPage(0);
    };
    
    const [titleMenu, setTitleMenu] = useState(" d-none");
    const [subTitleMenu, setSubTitleMenu] = useState(" d-none");
    const [hoveredTitleIndex, setHoveredTitleIndex] = useState(null);
    const [hoveredSubTitleIndex, setHoveredSubTitleIndex] = useState(null);
    const hideMenu = (event: any) => {
        // setTitleMenu(" d-none");
        // setSubTitleMenu(" d-none");
        setHoveredTitleIndex(null);
        setHoveredSubTitleIndex(null);
    }
    const showServiceMenu = (index: any) => setHoveredTitleIndex(index);
    const hideServiceMenu = () => setHoveredTitleIndex(null);

    const showSolutionsMenu = (index: any) => setHoveredSubTitleIndex(index);
    const hideSolutionsMenu = () => setHoveredSubTitleIndex(null);

//     const filteredProducts = products.products.products.filter((product: any) =>
//          product.name.toLowerCase().includes(filter.toLowerCase())
//      );

        // const filteredProducts = products.products.products.filter((product: any) => {
        //     const filterWords = filter.toLowerCase().split(' ');
        //     return filterWords.every(word => product.name.toLowerCase().includes(word));
        // });

        // const filteredProducts = products.products.products.filter((product: any) => {
        //     const filterWords = filter.toLowerCase().split(' ').filter(word => word);
        //     const matchCount = filterWords.reduce((count, word) => {
        //         return product.name.toLowerCase().includes(word) ? count + 1 : count;
        //     }, 0);
        //     return matchCount >= 4; // Change this to >= 3 if you want to match at least 3 words
        // });

        // const filteredProducts = products.products.products.filter((product: any) => {
        //     const filterWords = filter.toLowerCase().split(' ').filter(word => word);
        //     const productWords = product.name.toLowerCase().split(' ');
        //     return filterWords.every(word => productWords.includes(word));
        // });

        const filteredProducts = products.products.products.filter((product: any) => {
            const filterWords = filter.toLowerCase().split(' ').filter(word => word);
            const productName = product.name.toLowerCase();
            return filterWords.every(word => productName.includes(word));
        });
        

    const renderProducts = filter ? filteredProducts : currentProducts;

   

    return (
        <div className={styles.productContent}>
            <div className={`container`}>
                <div className={styles.filter}>
                    <input type="text" value={filter} onChange={handleFilterChange} onFocus={handleSearchFocus} 
                        placeholder="Search products..." onClick={() => setShowDropdown(!showDropdown)}/>
                         {showDropdown && (
                        <div className={styles.filterContent}>
                            {products.products.filter.map((element: any, index: any) => (
                                <div key={index}>
                                    <h3 onMouseOver={() => showServiceMenu(index)}>{element.title}</h3>
                                    {hoveredTitleIndex === index && (
                                        <div className={`${styles.dropdown} dropBG`} onMouseLeave={hideMenu}>
                                            {element.sub_title.map((ele: any, ind: any) => (
                                                <div key={ind}>
                                                    <h5 onMouseOver={() => showSolutionsMenu(ind)}> {ele.sub_title_name} </h5>
                                                    {hoveredSubTitleIndex === ind && (
                                                        <div className={`${styles.dropdown} dropBG`} onMouseLeave={hideMenu}>
                                                            {ele.products.map((product: any, productIndex: any) => (
                                                                <p key={productIndex} onClick={() => handleDropdownChange(product.products_name)}>
                                                                    {product.products_name}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className={styles.productList}>
                    <div className={`row`}>
                        {renderProducts.length > 0 ? (
                            renderProducts.map((ele: any, ind: any) => (
                                <div className={`col-md-3`} key={ind}>
                                    <div className={styles.imgCard}>
                                        <a href={baseUrl.getSiteUrl() + 'products/' + ele.link}>
                                            <img src={ele.img} alt={ele.name} />
                                            <p>{ele.name}</p>
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>No products found</div>
                        )}
                    </div>
                </div>
            </div>
            {!filter && (
                <Pagination
                    totalItems={filter ? filteredProducts.length : products.products.products.length}
                    itemsPerPage={productsPerPage}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    )
}
