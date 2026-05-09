'use client';

import Image from "next/image";
import { useState } from "react";
import { Star, ShoppingCart, Heart, Share2 } from "lucide-react";
import { toast } from "react-toastify";


const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleCart = () => {
    toast.success(`${quantity} × ${product.name} added to cart!`);
  };

  const handleOrder = () => {
    toast.success(`Order placed successfully for ${quantity} × ${product.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          Home &gt; Shop &gt; <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Section */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="aspect-square overflow-hidden rounded-3xl bg-white shadow-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">
                {product.rating || "4.8"} • 124 reviews
              </span>
            </div>

            {/* Price */}
            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-900">
                ৳{product.price}
              </span>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description ||
                  "Premium quality product designed for maximum comfort and style."}
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="w-12 h-12 rounded-xl border border-gray-300 hover:bg-gray-100 text-3xl font-light transition active:scale-95"
                >
                  −
                </button>

                <span className="w-16 text-center text-2xl font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-12 h-12 rounded-xl border border-gray-300 hover:bg-gray-100 text-3xl font-light transition active:scale-95"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleCart}
                className="flex-1 bg-orange-600 cursor-pointer hover:bg-orange-700 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 transition text-lg shadow-lg shadow-orange-500/30"
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart
              </button>

              <button
                onClick={handleOrder}
                className="flex-1 border-2 cursor-pointer border-gray-900 hover:bg-gray-900 hover:text-white font-semibold py-4 rounded-2xl transition text-lg"
              >
                Order Now
              </button>
            </div>

            {/* Wishlist & Share */}
            <div className="flex gap-6 mt-8">
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition">
                <Heart className="w-5 h-5" /> Wishlist
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
                <Share2 className="w-5 h-5" /> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;