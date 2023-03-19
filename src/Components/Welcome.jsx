import React from "react";
import { Link } from "react-router-dom";
import cal from "../Assets/calendar.png";

const Welcome = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-stone-800 via-slate-600 to-purple-900 p-5 mt-10 sm:mx-[-32px] mx-[-16px] lg:flex  text-white lg:justify-between lg:items-center overflow-hidden">
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="lg:w-3/6 w-full"
        >
          <h3 className="text-xl">
            Welcome to the new{" "}
            <span className="text-yellow-500 font-extrabold">Pic Chai</span>
          </h3>
          <p className="text-2xl mt-3">
            <span className="text-yellow-500 font-extrabold">
              All celebrations and events
            </span>{" "}
            are at your fingertips
          </p>
          <div className="mt-5">
            <Link
              to={"/showcase"}
              className=" p-3 rounded-lg font-bold bg-slate-600"
            >
              Showcase
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="lg:w-2/6 w-full flex justify-center"
        >
          <img src={cal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
