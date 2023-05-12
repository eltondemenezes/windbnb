import React, { useState } from "react";
import data from "../assets/stays.json";

import Card from "./Card";
import Title from "./Title";
import Form from "./Form";
import Navbar from "./Navbar";

export default function Home() {
  const [filtered, setFiltered] = useState(data);
  const [showModal, setShowModal] = useState(false);

  let cards = filtered.map((item) => (
    <Card
      image={item.photo}
      superhost={item.superHost}
      title={item.title}
      rating={item.rating}
      beds={item.beds}
      type={item.type}
    />
  ));

  const checkSearch = (search) => {
    setShowModal(search);
  };

  const handleSearch = (selectCity, totalCount) => {
    const result = data.filter(
      (item) =>
        item.city + ", Finland" === selectCity && item.maxGuests > totalCount
    );
    setFiltered(result);
    setShowModal((prevState) => !prevState);
  };

  return (
    <main className="container">
      <Navbar dropSearch={checkSearch} />
      {showModal && <Form onSearch={handleSearch} />}
      <Title count={cards.length} />
      <div className="row">
        {cards.length === 0 ? <p>Sorry no rooms</p> : cards}
      </div>
    </main>
  );
}
