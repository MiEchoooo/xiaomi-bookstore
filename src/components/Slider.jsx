import React from "react";
import slideOne from "../assets/images/Adventures_of_Sherlock_Holmes-transformed.jpeg";
import slideTwo from "../assets/images/Animal_Farm-transformed.jpeg";
import slideThree from "../assets/images/NineteenEightyFour.jpg";
import "../styles/slider.css";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  return (
    <>
      <section id="hero-section" className="hero-section">
        <Swiper
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true, type: "progressbar" }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <div
              id="slide-one"
              className="bg-gray-950 rounded-3xl grid grid-cols-2 items-center justify-center py-10 mx-20 my-5"
            >
              <div
                id="slide-one-text"
                className="h-full flex flex-col justify-end pl-20"
              >
                <div
                  id="slide-one-title"
                  className="flex flex-col title mb-5 text-xl font-bold"
                >
                  <span className="mb-2 b1">The Adventures of</span>
                  <span>Sherlock Holmes</span>
                </div>
                <div>
                  <p
                    id="slide-one-description"
                    className="text-sm text-gray-600"
                    style={{ width: "28rem" }}
                  >
                    In Conan Doyle's tales, Sherlock Holmes, with Watson by his
                    side, solves intricate mysteries with unparalleled wit and
                    deduction, captivating readers with each thrilling case.
                  </p>
                </div>
              </div>
              <div
                id="slide-one-image"
                className="flex justify-center items-center"
              >
                <div className="img-div">
                  <img src={slideOne} alt="AdventuresofSherlockHolmes" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              id="slide-two"
              className="bg-gray-950 rounded-3xl grid grid-cols-2 items-center justify-center py-10 mx-20 my-5"
            >
              <div
                id="slide-two-text"
                className="h-full flex flex-col justify-end pl-20"
              >
                <div
                  id="slide-two-title"
                  className="flex flex-col title mb-5 text-xl font-bold"
                >
                  <span className="b2">Animal Farm</span>
                </div>
                <div>
                  <p
                    id="slide-two-description"
                    className="text-sm text-gray-600"
                    style={{ width: "28rem" }}
                  >
                    In Orwell's "Animal Farm," a group of farm animals overthrow
                    their human oppressors, only to discover that the quest for
                    equality leads to a new form of tyranny, unveiling the
                    timeless allegory of power and corruption.
                  </p>
                </div>
              </div>
              <div
                id="slide-two-image"
                className="flex justify-center items-center"
              >
                <div className="img-div">
                  <img src={slideTwo} alt="Animal Farm" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              id="slide-three"
              className="bg-gray-950 rounded-3xl grid grid-cols-2 items-center justify-center py-10 mx-20 my-5"
            >
              <div
                id="slide-three-text"
                className="h-full flex flex-col justify-end pl-20"
              >
                <div
                  id="slide-three-title"
                  className="flex flex-col title mb-5 text-xl font-bold"
                >
                  <span className="b1">1984</span>
                </div>
                <div>
                  <p
                    id="slide-three-description"
                    className="text-sm text-gray-600"
                    style={{ width: "28rem" }}
                  >
                    In Orwell's "1984," Winston Smith rebels against the Party's
                    pervasive surveillance, seeking to reclaim his individuality
                    in a world of manipulated reality and oppression. His
                    defiance sparks a desperate struggle for freedom against the
                    relentless grip of Big Brother's regime.
                  </p>
                </div>
              </div>
              <div
                id="slide-three-image"
                className="flex justify-center items-center"
              >
                <div className="img-div">
                  <img src={slideThree} alt="1984" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Slider;
