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
        const visiblePageCount = 3; // Adjust this to change the number of visible page buttons
        const halfVisibleCount = Math.floor(visiblePageCount / 2);
    
        let startPage = currentPage - halfVisibleCount;
        let endPage = currentPage + halfVisibleCount;
    
        if (startPage < 0) {
            startPage = 0;
            endPage = Math.min(visiblePageCount - 1, totalPages - 1);
        }
        if (endPage >= totalPages) {
            endPage = totalPages - 1;
            startPage = Math.max(totalPages - visiblePageCount, 0);
        }
    
        if (startPage > 0) {
            pages.push(
                <li key="previous" className="page-item">
                    <button className="page-link" onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 0}>
                        Previous
                    </button>
                </li>
            );
        }
    
        if (startPage > 1) {
            pages.push(
                <li key="first" className="page-item">
                    <button className="page-link" onClick={() => handlePageClick(0)}>
                        1
                    </button>
                </li>
            );
            if (startPage > 2) {
                pages.push(
                    <li key="ellipsisStart" className="page-item disabled">
                        <span className="page-link">...</span>
                    </li>
                );
            }
        }
    
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <li key={i} className={`page-item`}>
                    <button 
                        className="page-link" 
                        onClick={() => handlePageClick(i)}
                        style={{
                            fontWeight: currentPage === i ? 'bold' : 'normal',
                            color: currentPage === i ? 'blue' : 'black',
                        }}
                    >
                        {i + 1}
                    </button>
                </li>
            );
        }
    
        if (endPage < totalPages - 1) {
            if (endPage < totalPages - 2) {
                pages.push(
                    <li key="ellipsisEnd" className="page-item disabled">
                        <span className="page-link">...</span>
                    </li>
                );
            }
            pages.push(
                <li key="last" className="page-item">
                    <button className="page-link" onClick={() => handlePageClick(totalPages - 1)}>
                        {totalPages}
                    </button>
                </li>
            );
        }
    
        if (endPage < totalPages - 1) {
            pages.push(
                <li key="next" className="page-item">
                    <button className="page-link" onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages - 1}>
                        Next
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
                    {renderPaginationItems()}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
