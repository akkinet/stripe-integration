const { NextResponse } = require("next/server");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const GET = async () => {
  try{
    const prices = await stripe.prices.list();
    return NextResponse.json(prices, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}