/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";

const ExampleLayout = ({ children }: any) => {
  return (
    <>
      <nav>
        <div className="bg-teal-800 max-w-100xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <div className="absolute inset-y-0 flex items-center">
              <a href="#" className="flex-shrink-0 text-white">
                <img
                  src="https://21cineplex.com//theme/v5/assets/img/logo.png"
                  width={200}
                  height={200}
                  alt="Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-green-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
        <ul>
          <a href="#" className="p-3">
            Now Playing
          </a>
          <a href="#" className="p-3">
            Upcoming
          </a>
          <a href="#" className="p-3">
            Theaters
          </a>
          <a href="#" className="p-3">
            Promotion
          </a>
          <a href="#" className="p-3">
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
