import React, { useState } from "react";

import classes from "./Navbar.module.css";
import logo from "../assets/logo.svg";
import search from "../assets/icons8-search.svg";
import data from "../assets/stays.json";

export default function Navbar(props) {
  const [query, setQuery] = useState("");
  const [popSearch, setPopSearch] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const cityData = data.map((item) => item.city + ", Finland");
  const nonRepeatCityData = [...new Set(cityData)];

  const handleClick = () => {
    setPopSearch((prevState) => !prevState);
    props.dropSearch(popSearch);
  };

  return (
    <header className={classes.header}>
      <nav>
        <img src={logo} alt="img" />
      </nav>

      <div onClick={handleClick} className={classes.searchCont}>
        <select value={query} onChange={handleInputChange}>
          {nonRepeatCityData.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <input type="text" readOnly placeholder="Add Guests" />
        <button type="submit">
          <img src={search} alt="search-icon" />
        </button>
      </div>
    </header>
  );
}
