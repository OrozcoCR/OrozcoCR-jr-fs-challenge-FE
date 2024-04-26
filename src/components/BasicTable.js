import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function BasicTable({ urls }) {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  const pageCount = Math.ceil(urls.length / rowsPerPage);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const renderRows = () => {
    const startIndex = page * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, urls.length);
    return urls.slice(startIndex, endIndex).map((url, index) => (
      <TableRow key={startIndex + index}>
        <TableCell component="th" scope="row" style={{ minWidth: "200px" }}>
          {url.title}
        </TableCell>
        <TableCell align="left" style={{ minWidth: "200px" }}>
          {url.full_url}
        </TableCell>
        <TableCell align="center" style={{ minWidth: "200px" }}>
          {url.short_code}
        </TableCell>
        <TableCell align="center" style={{ minWidth: "200px" }}>
          {url.click_count}
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <div>
      <TableContainer component={Paper} sx={{ minWidth: "1000px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  minWidth: "200px",
                  backgroundColor: " #1c74d4",
                  color: "white",
                  textAlign: "left",
                }}
              >
                Title
              </TableCell>
              <TableCell
                style={{
                  minWidth: "200px",
                  backgroundColor: " #1c74d4",
                  color: "white",
                  textAlign: "left",
                }}
                align="right"
              >
                Full URL
              </TableCell>
              <TableCell
                style={{
                  minWidth: "200px",
                  backgroundColor: " #1c74d4",
                  color: "white",
                  textAlign: "center",
                }}
                align="right"
              >
                Short Code
              </TableCell>
              <TableCell
                style={{
                  minWidth: "200px",
                  backgroundColor: " #1c74d4",
                  color: "white",
                  textAlign: "center",
                }}
                align="right"
              >
                Click Count
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderRows()}</TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          disabled={page === 0}
          onClick={() => handleChangePage(page - 1)}
        >
          Previous
        </Button>{" "}
        <Button
          variant="contained"
          color="primary"
          disabled={page === pageCount - 1}
          onClick={() => handleChangePage(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
