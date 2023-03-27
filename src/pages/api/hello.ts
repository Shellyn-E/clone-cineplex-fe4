// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    status: { code: 200 },
    rows: [
      {
        name: "John Wick: Chapter 4",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167706370552494_405x594.jpg",
        umur: "/images/d17.png",
      },
      {
        name: "Dungeons & Dragons: Honor Among Thieves",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167764540494637_290x426.jpg",
        umur: "/images/su.png",
      },
      {
        name: "Mrs. Chatterjee vs. Norway",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167878648415176_290x426.jpg",
        umur: "/images/r13.png",
      },
      {
        name: "Shazam! Fury of the Gods",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167756795914615_290x426.jpg",
        umur: "/images/r13.png",
      },
      {
        name: "Suzume",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167784448479603_290x426.jpg",
        umur: "/images/su.png",
      },
      {
        name: "Jin Qorin",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167755551155249_290x426.jpg",
        umur: "/images/d17.png",
      },
      {
        name: "Hantu Baru",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167755542452152_290x426.jpg",
        umur: "/images/r13.png",
      },
      {
        name: "Losmen Melati",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167775537273660_290x426.jpg",
        umur: "/images/d17.png",
      },
    ],
    total_rows: 10,
    total_page: 2,
  });
}
