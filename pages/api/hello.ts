// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

type Data = {
  name: string;
};

type Message = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Message>
) {
  const session = await getSession({ req });
  if (session) {
    res.status(200).json({ name: `Hello ${session.user?.email}` });
  } else {
    res.status(401).json({ message: "Not authorized" });
  }
}
