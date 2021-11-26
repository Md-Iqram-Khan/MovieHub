import React from "react";
import Pagination from "@mui/material/Pagination";

const CustomPagination = ({ setPage, Pages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <Pagination
        count={Pages}
        variant="outlined"
        color="primary"
        onChange={(e) => handlePageChange(e.target.textContent)}
      />
    </div>
  );
};

export default CustomPagination;
