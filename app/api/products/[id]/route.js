const { NextResponse } = require("next/server");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


export const GET = async (req, {params}) => {
  try{
    const product = await stripe.products.retrieve(params.id);
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}