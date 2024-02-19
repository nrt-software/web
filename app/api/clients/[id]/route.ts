import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("req", req);
  if (req.method === "PUT") {
    const { client } = req.body;

    const res = await fetch(
      `${process.env.NEXT_API_URL}/clients/${client.id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );

    try {
      // save todo item to database
    } catch (error) {
      // handle error
    }
  } else {
    // handle req.methong != POST
  }
}
