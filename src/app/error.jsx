"use client";
import { useEffect } from "react";
import Link from "next/link";
import { FaBug } from "react-icons/fa";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-red-100 p-6 text-center">
      {/* Icon */}
      <div className="p-4 bg-red-100 rounded-full text-red-500 mb-4">
        <FaBug size={40} />
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Something went wrong</h1>
      <p className="text-gray-600 mb-6">
        We encountered an unexpected error. Please try again or go back to the homepage.
      </p>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-2 rounded-lg border border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
