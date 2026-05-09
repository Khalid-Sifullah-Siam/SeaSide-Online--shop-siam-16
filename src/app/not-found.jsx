"use client";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-6 text-center">
      {/* Icon */}
      <div className="p-4 bg-orange-100 rounded-full text-orange-500 mb-4">
        <FaExclamationTriangle size={40} />
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Action Buttons */}
    
        <Link
          href="/"
          className="px-6 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
        >
          Go Home
        </Link>
        
      </div>
    
  );
}
