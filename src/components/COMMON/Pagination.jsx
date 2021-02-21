import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ totalCount, perPage = 6, handlePaginationClick }) => {
    return (
        <ReactPaginate
            previousLabel={"Previous"}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link waves-effect'}
            nextLinkClassName={'page-link waves-effect'}
            nextClassName={'page-item'}
            nextLabel={"Next"}
            pageCount={Math.ceil(totalCount / perPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePaginationClick}
            containerClassName={"pagination custom-pagination pg-blue mb-0 mt-2"}
            activeClassName={"active"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link waves-effect"}
        />
    )
}

export default Pagination
