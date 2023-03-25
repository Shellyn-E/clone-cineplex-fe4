/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";

const ExampleLayout = ({ children }: any) => {
  return (
    <>
      <div className="flex z-40 w-full bg-teal-800 h-[90px] p-5 border border-b">
        <img src="images/logo.png" width={300} alt="Logo" />
        <div className="w-4/5 absolute{90} pt-[10px]">
          <input
            style={{ float: "right", margin: "center" }}
            className="bg-white rounded-full border-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:border-transparent px-4 py-2 w-64"
            type="text"
            placeholder="Search teathers, movies..."
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-4"
          ></button>
        </div>
      </div>
      <div className="w-full bg-grey-400 h-[60px] p-5 border border-b navbar">
        <img
          src="images/imax.png"
          width={125}
          alt="Image"
          style={{ float: "right", margin: "center" }}
          className="pl-[50px]"
        />
        <img
          src="images/dolby.png"
          width={125}
          alt="Image"
          style={{ float: "right", margin: "center" }}
          className="pl-[50px] pt-[5px]"
        />
        <img
          src="images/mtix.png"
          width={125}
          alt="Image"
          style={{ float: "right", margin: "center" }}
          className="pl-[50px]"
        />
        <ul>
          <a href="#">Now Playing</a>
          <a href="#">Upcoming</a>
          <a href="#">Theaters</a>
          <a href="#">Promotions</a>
          <a href="#">Info 21</a>
        </ul>
      </div>
      <div className="pt-[88px] pb-4 px-2 md:px-5">{children}</div>
      <div className="w-full bg-gray-50 h-[100px] pb-[48px] md:pb-0 px-2 md:px-5">
        Footer
      </div>
    </>
  );
};

export default ExampleLayout;
