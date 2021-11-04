import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePage, pageCount }) => {
  const handleChange = ({ selected }) => {
    handlePage(selected + 1);
  };

  return (
    <>
      <ReactPaginate
        initialPage={0}
        previousLabel={String.fromCharCode(8672)}
        nextLabel={String.fromCharCode(8674)}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handleChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </>
  );
};

export default Pagination;
