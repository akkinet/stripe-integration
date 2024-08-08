import dbConnect from "@/app/utils/dbConnect";
import Product from "@/models/product";

export const POST = async (req, { params }) => {
    try {
        const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
        const stripeProduct = await stripe.products.retrieve(params.product);
        const stripePrice = await stripe.prices.retrieve(stripeProduct.default_price);
        await dbConnect()
        await Product.create({
            name: stripeProduct.name,
            category: stripeProduct.metadata.category,
            description: stripeProduct.description,
            features: stripeProduct.marketing_features.map(f => f.name),
            price: stripePrice.unit_amount_decimal
        })

        return new Response(JSON.stringify({ success: true }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}