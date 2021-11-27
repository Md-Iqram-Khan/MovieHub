import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../SingleContent/SingleContent";
import "./trending.css";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();

  const fetchTrendingMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    // console.log(data);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchTrendingMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, numOfPages]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} Pages={numOfPages} />
    </div>
  );
};

export default Trending;
