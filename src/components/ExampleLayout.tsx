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
              <div
                className="absolute{100}"
                style={{
                  position: "absolute",
                  top: 20,
                  bottom: 0,
                  right: 0,
                  left: 1400,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
              ></div>
              <div className="w-2/3 absolute{80}">
                <input
                  style={{ float: "right", margin: "0.5 rem 1rem 5rem 2rem" }}
                  type="text"
                  placeholder="Search teathers, movies..."
                  className="bg-white rounded-full border border-white focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparentpx-4 py-2 w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <ul>
          <a
            href="#"
            className="p-3 ml-4 px-3 py-2 rounded-md text-sm font-medium text-green-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Now Playing
          </a>
          <a
            href="#"
            className="p-3 ml-4 px-3 py-2 rounded-md text-sm font-medium text-green-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Upcoming
          </a>
          <a
            href="#"
            className="p-3 ml-4 px-3 py-2 rounded-md text-sm font-medium text-green-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Theaters
          </a>
          <a
            href="#"
            className="p-3 ml-4 px-3 py-2 rounded-md text-sm font-medium text-green-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Promotion
          </a>
          <a
            href="#"
            className="p-3 ml-4 px-3 py-2 rounded-md text-sm font-medium text-green-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
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
