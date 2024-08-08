import { NextResponse } from 'next/server'
import mongoose from 'mongoose'

export default async () => {
    try {
        console.log("connecting to db...")
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected to db")
    } catch (err) {
        console.log('err', err)
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}