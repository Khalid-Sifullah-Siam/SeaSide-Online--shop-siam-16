import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const {id, image, name, rating, price } = product;

  return (
    <div className="bg-white rounded-2xl shadow-2xl hover:shadow-xl transition duration-300 overflow-hidden group w-full">

      {/* Image */}
      <div className="relative w-full h-88 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          quality={80}
          className="object-cover group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        {/* Name */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
          {name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 font-semibold">
            ⭐ {rating}
          </span>
          <span className="text-sm text-gray-500">
            (Customer rating)
          </span>
        </div>

        {/* Price */}
        <p className="text-xl font-extrabold text-red-600">
          ${price}
        </p>

        {/* Button */}
        <button className="w-full mt-2 bg-orange-500 text-white py-2 rounded-xl font-semibold hover:bg-orange-600 transition">
          <Link href={`/all-products/${id}`}>
          View Details
          </Link>
        </button>

      </div>

    </div>
  );
};

export default ProductCard;
