import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const nevigate = useNavigate();
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (value === 0) nevigate("/");
    else if (value === 1) nevigate("/movies");
    else if (value === 2) nevigate("/series");
    else if (value === 3) nevigate("/search");
  }, [value, nevigate]);

  return (
    <BottomNavigation
      style={{ backgroundColor: "#71DFE7" }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        style={{ color: "black" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "black" }}
        label="Movies"
        icon={<MovieFilterIcon />}
      />
      <BottomNavigationAction
        style={{ color: "black" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "black" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
