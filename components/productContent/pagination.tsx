import React, { useState } from 'react';
import styles from './productContent.module.scss';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }: any) => {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageClick = (pageNumber: any) => {
        setCurrentPage(pageNumber);
        onPageChange(pageNumber);
    };

    const renderPaginationItems = () => {
        const pages = [];
        for (let i = 0; i < totalPages; i++) {
            pages.push(
                <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageClick(i)}>
                        {i + 1}
                    </button>
                </li>
            );
        }
        return pages;
    };

    return (
        <div className={styles.pagination}>
            <nav aria-label="Pagination">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => handlePageClick(currentPage - 1)}
                            disabled={currentPage === 0} // Disable if on first page
                        >
                            Previous
                        </button>
                    </li>
                    {renderPaginationItems()}
                    <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => handlePageClick(currentPage + 1)}
                            disabled={currentPage === totalPages - 1} // Disable if on last page
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
