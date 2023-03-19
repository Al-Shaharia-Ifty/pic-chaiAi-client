import React from "react";
import res from "../Assets/resources.png";

const Quality = () => {
  return (
    <div>
      <div data-aos="zoom-in" data-aso-delay="300" className="mt-10">
        <h1 className="font-extrabold text-[#FFFFFF] text-[32px]">
          The smartest choice for creatives like you
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Whether you're looking for designs or photographs, you'll find the
          perfect asset on Pic Chai.
        </p>
      </div>
      <div className="mt-10 lg:flex lg:justify-between">
        <div className="lg:w-2/6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10">
          <div data-aos="fade-right" data-aso-delay="300" className="flex">
            <div>
              <i className="fa-regular fa-star mt-2 p-4 bg-green-200 text-green-900 rounded-lg text-2xl"></i>
            </div>
            <div className="ml-3 text-gray-500">
              <h3 className="text-xl text-white">High-quality stock content</h3>
              <p>
                Download scroll-stopping images of the best quality to make your
                projects look professional.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" data-aso-delay="300" className="flex">
            <div>
              <i class="fa-regular fa-thumbs-up mt-2 p-4 bg-green-200 text-green-900 rounded-lg text-2xl"></i>
            </div>
            <div className="ml-3 text-gray-500">
              <h3 className="text-xl text-white">Ready-to-use assets</h3>
              <p>
                Access thousands of images and designs ready-to-publish and get
                your project ready double quick.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" data-aso-delay="300" className="flex">
            <div>
              <i class="fa-solid fa-magnifying-glass mt-2 p-4 bg-green-200 text-green-900 rounded-lg text-2xl"></i>
            </div>
            <div className="ml-3 text-gray-500">
              <h3 className="text-xl text-white">Guaranteed search results</h3>
              <p>
                There's an image and style for every project, whatever your
                needs are.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" data-aso-delay="300" className="flex">
            <div>
              <i class="fa-solid fa-arrows-rotate mt-2 p-4 bg-green-200 text-green-900 rounded-lg text-2xl"></i>
            </div>
            <div className="ml-3 text-gray-500">
              <h3 className="text-xl text-white">Fresh content everyday</h3>
              <p>
                Our library is updated on a daily basis so you can find the
                newest and trendiest photos and designs.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="lg:w-3/6 hidden lg:flex lg:items-center"
        >
          <div>
            <img src={res} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
