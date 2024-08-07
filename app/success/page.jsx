'use client'
import { useSearchParams } from 'next/navigation'

function page() {
    const searchParams = useSearchParams();
    const session_id = searchParams.get("session_id")

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                </div>
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">Payment Successful!</h1>

                <p className="text-gray-600 text-center mb-6">
                    Your payment has been processed successfully.
                </p>

                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Order Confirmation:</strong>
                    <span className="block sm:inline">
                        Your Checkout Session ID is:
                        <span id="checkoutSessionId" className="font-mono break-words">
                            {session_id}
                        </span>
                    </span>
                </div>

                <div className="flex justify-center">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page