import React from "react";
import animalfarm from "../assets/images/Animal_Farm-transformed.jpeg";

function BestSelling() {
  return (
    <>
      <section
        id="best-selling-section"
        className="best-selling-section flex justify-center items-center p-7"
      >
        <div
          id="best-selling-books"
          className="best-selling-books grid grid-cols-2 bg-gray-950 rounded-3xl p-6 py-12 mx-20"
        >
          <div className="flex justify-center items-center">
            <div id="img-div" className="img-div">
              <img src={animalfarm} alt="err" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div id="book-details">
              <h2
                id="best-book-heading"
                className="mb-16 best-book-heading text-3xl text-gray-400"
              >
                Best Selling Book
              </h2>
              <h3 id="book-title" className="mb-5 text-xl">
                Animal Farm
              </h3>
              <p id="book-author" className="mb-5 text-base text-gray-500">
                BY GEORGE ORWELL
              </p>
              <p
                id="book-description"
                className="mb-8 text-sm text-gray-600 best-book-text"
              >
                Animal Farm depicts a farm's uprising, echoing the pitfalls of
                power as animals strive for equality, only to succumb to
                corruption and tyranny. Orwell's novella serves as a stark
                warning, illustrating the dangers of totalitarianism and the
                betrayal of ideals.
              </p>
              <a
                id="shop-now-link"
                href="#"
                className="next-btn text-sm text-gray-700 flex items-center gap-2"
              >
                SHOP IT NOW
                <span className="text-lg font-medium flex justify-center items-center">
                  &#8594;
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BestSelling;
