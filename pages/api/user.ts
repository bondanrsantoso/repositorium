import User from "@/models/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await User.findByPk(1);

  return res.status(200).json(user);
}
