import React, { useState } from "react";

import search from "../assets/search-white.svg";
import data from "../assets/stays.json";
import classes from "./Form.module.css";
import Modal from "./Modal";

export default function Form({ onSearch }) {
  const [query, setQuery] = useState("");
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const cityData = data.map((item) => item.city + ", Finland");
  const nonRepeatCityData = [...new Set(cityData)];

  const handleAdultDecrease = () => {
    setAdultCount(adultCount - 1);
  };

  const handleAdultIncrease = () => {
    setAdultCount(adultCount + 1);
  };

  const handleChildDecrease = () => {
    setChildCount(childCount - 1);
  };

  const handleChildIncrease = () => {
    setChildCount(childCount + 1);
  };

  const totalCount = adultCount + childCount;

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(query, totalCount);
    onSearch(query, totalCount);
  };

  return (
    <Modal>
      <form onSubmit={handleSearch} className={classes.form}>
        <select value={query} onChange={handleInputChange}>
          {nonRepeatCityData.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <div className={classes.age}>
          <input type="text" value={totalCount + " guests"} readOnly />
          <div>
            <div className={classes.ageCont}>
              <h2>Adults</h2>
              <p>Ages 13 or above</p>
              <button type="button" onClick={handleAdultDecrease}>
                -
              </button>
              <span>{adultCount}</span>
              <button type="button" onClick={handleAdultIncrease}>
                +
              </button>
            </div>
            <div className={classes.ageCont}>
              <h2>Children</h2>
              <p>Ages 2 - 12</p>
              <button type="button" onClick={handleChildDecrease}>
                -
              </button>
              <span>{childCount}</span>
              <button type="button" onClick={handleChildIncrease}>
                +
              </button>
            </div>
          </div>
        </div>
        <button type="submit" className={classes.button}>
          <img src={search} alt="search-icon" /> Search
        </button>
      </form>
    </Modal>
  );
}
