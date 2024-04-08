<<<<<<< HEAD
//Next.js API route spport: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
=======

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string
>>>>>>> 8d4fa4fb474b0c21764b9b25e91a4bce773fab84
  timestamp: Date
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const timestamp = new Date()
  res.status(200).json({ name: "John Doe", timestamp });
}
