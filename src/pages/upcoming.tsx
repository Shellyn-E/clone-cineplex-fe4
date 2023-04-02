/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";

const ExampleLayout = ({ children }: any) => {
  return (
    <>
      <title>CINEMA 21 - We Are The Largest Cinema Chain in Indonesia</title>
      <div className=" object-top  w-full bg-white h-[110px] p-6 border-b"></div>
      <div className="flex z-40 w-full bg-teal-800 h-[90px] p-5 border border-b">
        <img
          src="images/logo.png"
          width={300}
          alt="Logo"
          style={{ marginLeft: "50px" }}
        />
        <div className="w-2/3 absolute{60} ">
          <input
            style={{
              float: "right",
              margin: " 0.5rem -7rem 8rem 3rem",
            }}
            className="z-50 bg-zinc-200 rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-4 py-2 w-96 italic text-sm font-light"
            type="text"
            placeholder="Search teathers, movies..."
          />
        </div>
      </div>
      <div className="w-full bg-grey-400 h-[60px] p-5 border border-b navbar">
        <ul>
          <a href="/" style={{ margin: "4rem 0rem 2rem 4rem" }}>
            Now Playing
          </a>
          <a href="/upcoming">Upcoming</a>
          <a href="/theaters">Theaters</a>
          <a href="/promotion">Promotions</a>
          <a href="/info21">Info 21</a>
          <a href="https://21cineplex.com/imax">
            <Image
              src="/images/imax.png"
              height={18}
              width={80}
              alt=""
              style={{ margin: "-1.5rem 0rem 2rem 47rem" }}
            ></Image>
          </a>
          <a href="https://21cineplex.com/dolby-atmos">
            <Image
              src="/images/dolby.png"
              alt=""
              height={18}
              width={120}
              style={{ margin: "-4.7rem 0rem 2rem 56rem" }}
            ></Image>
          </a>
          <a href="https://mtix.21cineplex.com/?mod=mtix">
            <Image
              src="/images/mtix.png"
              alt=""
              height={18}
              width={82}
              style={{ margin: "-4.9rem 0rem 2rem 67.5rem" }}
            ></Image>
          </a>
        </ul>
      </div>
      <img
        style={{ margin: "35px 100px" }}
        src="/images/iklan.jpg"
        alt="iklan"
        width={865}
        height={100}
      />
      <div className="z-50 w-full bg-teal-800 h-[145px] p-5 font-semibold">
        <ul>
          <a
            href="#"
            style={{
              margin: "4rem 0rem 2rem 4rem",
            }}
            className="p-3 text-gray-200 font-normal"
          >
            Profile
          </a>
          <a href="#" className="p-3 text-gray-200 font-normal">
            |
          </a>
          <a href="#" className="p-3 text-gray-200 font-normal">
            Terms Of use
          </a>
          <a href="#" className="p-3 text-gray-200 font-normal">
            |
          </a>
          <a href="#" className="p-3 text-gray-200 font-normal">
            Advertising
          </a>
          <p
            style={{
              fontSize: 12,
              margin: "2rem 0rem 2rem 5rem",
              color: "white",
            }}
          >
            © 1999-2012 21Cineplex.com. All materials and contents (texts,
            graphics, and every attributes) of 21Cineplex or 21Cineplex.com
            website are copyrights and trademarks of PT Nusantara Sejahtera
            Raya. Any commercial usage of the materials and contents is
            forbidden without prior permission from PT Nusantara Sejahtera Raya.
            There is no other institutions/agencies outside. PT Nusantara
            Sejahtera Raya allowed to use www.21Cineplex.com (21Cineplex
            website) without prior permission from PT Nusantara Sejahtera Raya.
          </p>
        </ul>
      </div>
      @shellyneu
    </>
  );
};

export default ExampleLayout;
