// pagination.tsx
import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './productContent.module.scss';

interface PaginationProps {
    pageCount: number;
    onPageChange: (selectedItem: { selected: number }) => void;
    forcePage: number;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange, forcePage }) => {
    return (
        <div className={styles.paginationContainer}>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={1}
                onPageChange={onPageChange}
                containerClassName={styles.pagination}
                activeClassName={styles.active}
                previousLinkClassName={styles.previous}
                nextLinkClassName={styles.next}
                disabledClassName={styles.disabled}
                forcePage={forcePage}
            />
        </div>
    );
};

export default Pagination;
