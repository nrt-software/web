export const dynamic = "force-dynamic"; // defaults to auto

import Stripe from "stripe";

import { NextResponse } from "next/server";

export async function GET() {
  const stripe = new Stripe(process.env.NEXT_STRIPE_API_KEY_SECRET as string);
  const prices = await stripe.prices.list();

  return NextResponse.json(prices.data);
}
