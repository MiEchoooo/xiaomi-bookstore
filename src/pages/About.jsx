import React from "react";
import Navbar from "../components/Navbar";
import aboutDataArray from "../data/aboutDataArray";

function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="mx-10 my-5">
        {aboutDataArray.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center m-5"
          >
            {index % 2 === 0 ? (
              <>
                <div className="grid grid-cols-2 item-center mb-5">
                  <div className=" flex justify-center item-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-48 h-48 md:mr-4 mb-4 md:mb-0"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-2xl font-bold mb-8">{item.title}</h2>
                    <p className="text-justify">{item.text}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 item-center mb-5">
                  <div className="p-4 md:order-2">
                    <h2 className="text-2xl font-bold mb-8">{item.title}</h2>
                    <p className="text-justify">{item.text}</p>
                  </div>
                  <div className=" flex justify-center item-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-48 h-48 md:ml-4 mb-4 md:mb-0"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
