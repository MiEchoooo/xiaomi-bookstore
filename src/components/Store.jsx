import React, { useState, useEffect } from "react";
import booksData from "../data/books";
import StoreCart from "./StoreCart"; // Import StoreCart component

function Store() {
  const [books, setBooks] = useState(booksData);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    let sortedBooks = [...books];
    if (filter === "atoz") {
      sortedBooks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter === "price") {
      sortedBooks.sort((a, b) => a.price - b.price);
    } else if (filter === "ratings") {
      sortedBooks.sort((a, b) => b.ratings - a.ratings);
    }
    setBooks(sortedBooks);
  }, [filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleHeartIconMouseEnter = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].isHeartHovered = true;
    setBooks(updatedBooks);
  };

  const handleHeartIconMouseLeave = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].isHeartHovered = false;
    setBooks(updatedBooks);
  };

  const handleBagIconMouseEnter = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].isBagHovered = true;
    setBooks(updatedBooks);
  };

  const handleBagIconMouseLeave = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].isBagHovered = false;
    setBooks(updatedBooks);
  };

  return (
    <>
      <section id="shop">
        <h2
          id="book-heading"
          className="text-2xl text-gray-400 ml-20 mt-24 mb-10 book-heading"
        >
          Books
        </h2>
        <div id="filter-container" className="flex justify-end">
          <select
            id="filter-select"
            className="filter w-40 py-2 px-3 mr-5 text-base rounded-xl bg-gray-900 text-gray-400 mx-20"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="">Select</option>
            <option value="atoz">A-Z</option>
            <option value="price">Price</option>
            <option value="ratings">Ratings</option>
          </select>
        </div>
        <StoreCart
          books={books}
          handleHeartIconMouseEnter={handleHeartIconMouseEnter}
          handleHeartIconMouseLeave={handleHeartIconMouseLeave}
          handleBagIconMouseEnter={handleBagIconMouseEnter}
          handleBagIconMouseLeave={handleBagIconMouseLeave}
        />
      </section>
    </>
  );
}

export default Store;
