// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("the AUTH0_SECRET env var is set: ", !!process.env.AUTH0_SECRET);
  res.status(200).json({ name: "John Doe" });
}
