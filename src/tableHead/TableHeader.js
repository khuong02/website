import React from "react";
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";

const TableHeader = (props) => {
  const { valueToOrderBy, orderDirection, handleRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell key="color">Color</TableCell>
        <TableCell key="country">
          <TableSortLabel
            active={valueToOrderBy === "country"}
            direction={valueToOrderBy === "country" ? orderDirection : "asc"}
            onClick={createSortHandler("country")}
          >
            Country
          </TableSortLabel>
        </TableCell>
        <TableCell key="quantity">
          <TableSortLabel
            active={valueToOrderBy === "quantity"}
            direction={valueToOrderBy === "quantity" ? orderDirection : "asc"}
            onClick={createSortHandler("quantity")}
          >
            Quantity
          </TableSortLabel>
        </TableCell>
        {/* <TableCell>Edit</TableCell> */}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
