import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@material-ui/core";

import TableHeader from "../tableHead/TableHeader";
// import { Link } from "react-router-dom";

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const sortedRowInformation = (rowArray, comparator) => {
  const stabilizedRowArray = rowArray.map((i, index) => [i, index]);
  stabilizedRowArray.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedRowArray.map((i) => i[0]);
};

const TableContext = ({ statistical }) => {
  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOderBy] = useState("country");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(1);

  const handleRequestSort = (e, property) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangesRowsPerPage = (e) => {
    setRowsPerPage(+e.target.value, 10);
    setPage(0);
  };

  const rowsPerPageOptions = [];
  const len = statistical
    ? statistical.length >= 9
      ? 5
      : statistical.length
    : 0;
  for (let i = 1; i <= len; i++) {
    rowsPerPageOptions.push(i);
  }

  return (
    <>
      <TableContainer className="table">
        <Table>
          <TableHeader
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          <TableBody>
            {sortedRowInformation(
              statistical ? statistical : [],
              getComparator(orderDirection, valueToOrderBy)
            )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div
                      style={{
                        width: "15px",
                        height: "15px",
                        background: item.color,
                      }}
                    ></div>
                  </TableCell>
                  <TableCell>{item.country}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  {/* <TableCell>
                    <Link to="/home">
                      <i className="fas fa-edit"></i>
                    </Link>
                  </TableCell> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={statistical ? statistical.length : 1}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangesRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default TableContext;
