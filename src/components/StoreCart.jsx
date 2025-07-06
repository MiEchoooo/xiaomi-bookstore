import React from "react";

function StoreCart({
  books,
  handleHeartIconMouseEnter,
  handleHeartIconMouseLeave,
  handleBagIconMouseEnter,
  handleBagIconMouseLeave,
}) {
  return (
    <div
      id="books"
      className="mx-20 p-12 rounded-3xl bg-gray-950 grid grid-cols-3 gap-12"
    >
      {books.map((book, index) => (
        <div className="card-main" key={book.name} id={`book-${index}`}>
          <div className="card p-6 rounded-2xl bg-mate-black flex flex-col justify-center items-center">
            <div className="card-img mb-5">
              <img src={book.imgUrl} alt={book.name} id={`book-img-${index}`} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4
                className="text-lg mb-2 text-center"
                id={`book-name-${index}`}
              >
                {book.name}
              </h4>
              <h5
                className="text-base text-gray-600"
                id={`book-price-${index}`}
              >
                &#8377; {book.price}
              </h5>
              <p
                className="text-sm text-gray-400 mt-2"
                id={`book-ratings-${index}`}
              >
                Ratings: {book.ratings}
              </p>
            </div>
          </div>
          <div className="card-option flex justify-between">
            <span
              className="heart-icon"
              id={`heart-icon-${index}`}
              onMouseEnter={() => handleHeartIconMouseEnter(index)}
              onMouseLeave={() => handleHeartIconMouseLeave(index)}
            >
              <ion-icon
                name={book.isHeartHovered ? "heart" : "heart-outline"}
                style={{
                  color: book.isHeartHovered ? "#DE3163" : "",
                  fontSize: book.isHeartHovered ? "20px" : "",
                  cursor: "pointer",
                }}
              ></ion-icon>
            </span>
            <span
              className="bag-icon"
              id={`bag-icon-${index}`}
              onMouseEnter={() => handleBagIconMouseEnter(index)}
              onMouseLeave={() => handleBagIconMouseLeave(index)}
            >
              <ion-icon
                name={book.isBagHovered ? "bag" : "bag-outline"}
                style={{
                  color: book.isBagHovered ? "#fff" : "",
                  fontSize: book.isBagHovered ? "20px" : "",
                  cursor: "pointer",
                }}
              ></ion-icon>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StoreCart;
