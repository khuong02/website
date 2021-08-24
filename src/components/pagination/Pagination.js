import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "@material-ui/lab";

const PaginationBox = (props) => {
  const { pagination, onPageChange } = props;
  const { page, totalPage } = pagination;

  const handlePageChange = (e, newPage) => {
    e.preventDefault();
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="pagination">
      <Pagination
        count={totalPage}
        shape="rounded"
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
};

PaginationBox.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

PaginationBox.defaultProps = {
  onPageChange: null,
};

export default PaginationBox;
