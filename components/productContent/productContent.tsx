import React, {useState} from "react";
import styles from './productContent.module.scss';
import { ApiService } from '../../services/api.service';
import ReactPaginate from 'react-paginate';
import Pagination from './pagination';


export default function ProductContent (products: any) {
    // console.log('Prodd=',products);
    const baseUrl = new ApiService();

    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 12;

    const indexOfLastProduct = (currentPage + 1) * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.products.products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    const [filter, setFilter] = useState('');

    const filteredProducts = products.products.products.filter((product: any) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPage(0); // Reset to first page when filter changes
        setFilter(event.target.value);
    };
    const renderProducts = filter ? filteredProducts : currentProducts;
    return(
        <div className={styles.productContent}>
            <div className={`container`}>
                <div className={styles.filter}>
                    <input type="text" value={filter}
                        onChange={handleFilterChange}
                        placeholder="Search products..." />
                </div>
                    <div className={styles.productList}>
                        <div className={`row`}>
                            {renderProducts.map((ele: any, ind: any)=>(
                                <div className={`col-md-3`} key={ind}>
                                    <div className={styles.imgCard}>
                                        <a href={baseUrl.getSiteUrl() + 'products/' + ele.link} >
                                        <img src={ele.img} />
                                        <p>{ele.name}</p>
                                        </a>
                                    </div>
                                </div>
                            ))}
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