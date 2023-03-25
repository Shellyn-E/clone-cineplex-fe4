/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";

const ExampleLayout = ({ children }: any) => {
  return (
    <>
      <nav>
        <div className="bg-teal-800 max-w-100xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative items-center justify-between h-20">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <a href="#" className="flex-shrink-0 text-white">
                <img
                  src="https://21cineplex.com//theme/v5/assets/img/logo.png"
                  width={200}
                  height={200}
                  alt="Logo"
                />
              </a>
              <div>
                <input
                  style={{ float: "right", margin: "0.5 rem 1rem 5rem 2rem" }}
                  type="text"
                  placeholder="Search teathers, movies..."
                  className="bg-white rounded-full border border-white focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparentpx-4 py-2 w-64"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-3 mr-4"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-[15px] w-full h-[55px] pb-3 px-2 md:px-5 absolute{100} flex space-between bg-tiga">
        <ul>
          <a
            href="#"
            className="p-3 ml-4 px-3 py-2 rounded-md text-sm font-medium text-teal-800 hover:text-white hover:bg-teal-800 focus:outline-none focus:text-white focus:bg-teal-800"
          >
            Now Playing
          </a>
          <a
            href="#"
            className="p-3 ml-4 px-3 py-2 rounded-md text-sm font-medium text-teal-800 hover:text-white hover:bg-teal-800 focus:outline-none focus:text-white focus:bg-teal-800"
          >
            Upcoming
          </a>
          <a
            href="#"
            className="p-3 ml-4 px-3 py-2 rounded-md text-sm font-medium text-teal-800 hover:text-white hover:bg-teal-800 focus:outline-none focus:text-white focus:bg-teal-800"
          >
            Theaters
          </a>
          <a
            href="#"
            className="p-3 ml-4 px-3 py-2 rounded-md text-sm font-medium text-teal-800 hover:text-white hover:bg-teal-800 focus:outline-none focus:text-white focus:bg-teal-800"
          >
            Promotion
          </a>
          <a
            href="#"
            className="p-3 ml-4 px-3 py-2 rounded-md text-sm font-medium text-teal-800 hover:text-white hover:bg-teal-800 focus:outline-none focus:text-white focus:bg-teal-800"
          >
            Info 21
          </a>
        </ul>
      </div>
      <div className="full pt-[13px] pb-4 px-2 md:px-5">{children}</div>
      <div className="w-full bg-gray-100 h-[100px] pb-[48px] md:pb-0 px-2 md:px-5">
        Footer
      </div>
    </>
  );
};

export default ExampleLayout;
