import dbConnect from "@/app/utils/dbConnect"
import Product from "@/models/product"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    try {
        await dbConnect()

        const packages = await Product.aggregate([
            {
                $group: {
                    _id: "$category", // Group by category
                    products: {
                        $push: { // Create an array of products within each category
                            name: "$name",
                            description: "$description",
                            features: "$features",
                            price: "$price"
                        }
                    }
                }
            },
            {
                $project: { // Rename _id to category for better readability
                    _id: 0,
                    category: "$_id",
                    products: 1
                }
            }
        ])

        return NextResponse.json(packages, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}