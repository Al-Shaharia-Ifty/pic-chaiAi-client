import React, { useEffect } from "react";
import { download } from "../Assets";
import { downloadImage } from "../Utils";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Aos from "aos";

const Card = ({ _id, name, prompt, photo }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      className="rounded-xl group relative hover:shadow-2xl hover:shadow-green-600 card overflow-hidden duration-500"
    >
      <PhotoProvider>
        <PhotoView src={photo}>
          <img
            className="w-full h-auto object-cover rounded-xl hover:scale-110 duration-300"
            src={photo}
            alt={prompt}
          />
        </PhotoView>
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
          <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

          <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
                {name[0]}
              </div>
              <p className="text-white text-sm">{name}</p>
            </div>
            <button
              type="button"
              onClick={() => downloadImage(_id, photo)}
              className="outline-none bg-transparent border-none"
            >
              <img
                src={download}
                alt="download"
                className="w-6 h-6 object-contain invert"
              />
            </button>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Card;
