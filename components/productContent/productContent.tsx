import React, { useState } from "react";
import styles from './productContent.module.scss';
import { ApiService } from '../../services/api.service';
import Pagination from './pagination';

export default function ProductContent({ products }: any) {
    console.log('proddd=',products);
    const baseUrl = new ApiService();
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 12;

    const handlePageChange = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    };

    const [filter, setFilter] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleFilterChange = (event: any) => {
        setFilter(event.target.value);
        setShowDropdown(true);
        setCurrentPage(0);
    };

    const handleSearchFocus = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDropdownChange = (selectedProduct: string) => {
        setFilter(selectedProduct);
        setShowDropdown(false);
        setCurrentPage(0);
    };
    const [hoveredTitleIndex, setHoveredTitleIndex] = useState(null);
    const [hoveredSubTitleIndex, setHoveredSubTitleIndex] = useState(null);
    const hideMenu = (event: any) => {
               setHoveredTitleIndex(null);
        setHoveredSubTitleIndex(null);
    }
    const showServiceMenu = (index: any) => setHoveredTitleIndex(index);
    const hideServiceMenu = () => setHoveredTitleIndex(null);

    const showSolutionsMenu = (index: any) => setHoveredSubTitleIndex(index);
    const hideSolutionsMenu = () => setHoveredSubTitleIndex(null);

    const filteredProducts = products.products.filter((product: any) => {
        const filterWords = filter.toLowerCase().split(' ').filter(word => word);
        const productName = product.name.toLowerCase();
        return filterWords.every(word => productName.includes(word));
    });

    const paginatedProducts = filter ? filteredProducts : products.products;
    const indexOfLastProduct = (currentPage + 1) * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = paginatedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageCount = Math.ceil(paginatedProducts.length / productsPerPage);
    const renderProducts = filter ? filteredProducts : currentProducts;
    return (
        <div className={styles.productContent}>
            <div className={`container`}>
                <div className={styles.filter}>
                <input type="text" value={filter} onChange={handleFilterChange} onFocus={handleSearchFocus} 
                        placeholder="Search products..." onClick={() => setShowDropdown(!showDropdown)}/>
                    {showDropdown && (
                        <div className={styles.filterContent}>
                            {products.filter.map((element: any, index: any) => (
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
                    {currentProducts.length > 0 ? (
                            currentProducts.map((ele: any, ind: any) => (
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
            {paginatedProducts.length > productsPerPage && (
                <Pagination
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    forcePage={currentPage}
                />
            )}
        </div>
    );
}
