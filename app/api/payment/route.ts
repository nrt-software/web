import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.NEXT_STRIPE_API_KEY_SECRET as string);
  let data = await request.json();
  let priceId = data.priceId;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: "http://localhost:3001",
    cancel_url: "http://localhost:3001",
  });

  console.log("server side", session.url);

  return NextResponse.json(session.url);
}
