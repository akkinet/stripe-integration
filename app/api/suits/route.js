import dbConnect from "@/app/utils/dbConnect"
import Product from "@/models/product"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    try {
        await dbConnect()

        const suits = await Product.aggregate([
          {
            $group: {
              _id: "$group", 
              totalPrice: { $sum: "$price" },
              descriptions: { $push: "$description" } 
            }
          },
          {
            $project: {
              _id: 0, 
              group: "$_id",
              totalPrice: 1,
              expectedOutput: { $reduce: {
                input: "$descriptions",
                initialValue: "",
                in: { $concat: [ "$$value", { $cond: [ { $eq: [ "$$value", "" ] }, "", ", " ] }, "$$this" ] }
              }}
            }
          }
        ])

        return NextResponse.json(suits, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
} 