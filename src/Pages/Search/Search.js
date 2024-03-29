import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../SingleContent/SingleContent";

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);
  return (
    <>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <TextField
          style={{ flex: 1 }}
          className="searchbox"
          label="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ marginLeft: 10 }}
          onClick={fetchSearch}
        >
          <SearchIcon />
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{
            paddingBottom: 5,
            width: "800px",
          }}
          aria-label="disabled tabs example"
        >
          <Tab
            style={{ width: "50%", fontWeight: "bold" }}
            label="Search Movies"
          />
          <Tab
            style={{ width: "50%", fontWeight: "bold" }}
            label="Search TV Series"
          />
        </Tabs>
      </div>

      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? (
            <h2 style={{ color: "black" }}>No Series Found</h2>
          ) : (
            <h2 style={{ color: "black" }}>No Movies Found</h2>
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} Pages={numOfPages} />
      )}
    </>
  );
};

export default Search;
