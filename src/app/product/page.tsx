import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <div className="perfume container bg-orange-100 mx-auto p-8">
      <h1 className="text-3xl font-semibold text-gray-900">Eau de Parfum</h1>
      <img className="w-80 h-90 object-cover mt-4" src="/perfume14.png" alt="Perfume" />

      <p className="mt-4 text-lg text-gray-700">
        Experience the essence of elegance with our exclusive Eau de Parfum. Perfect for any occasion.
      </p>
      <button className="mt-4 bg-red-400 text-black px-6 py-2 rounded-full hover:bg-green-400 transition">Add to Cart</button>

      <h2 className="text-2xl font-semibold mt-12">Another Variant</h2>
      <Image className="mt-4" src="/perfume2.png" alt="Another Perfume Variant" width={500} height={500} />
      <p className="mt-4 text-lg text-gray-700">Discover a new scent with our additional perfume variant. Ideal for those who want something different.</p>
      <span className="text-2xl font-bold text-gray-900 mt-4">$89.99</span>
      <button className="mt-4 bg-red-400 text-black px-6 py-2 rounded-full hover:bg-green-400 transition">Add to Cart</button>

      <h2 className="text-2xl font-semibold mt-12">Limited Edition</h2>
      <Image className="mt-4" src="/perfume4.png" alt="Limited Edition Perfume" width={500} height={500} />
      <p className="mt-4 text-lg text-gray-700">Celebrate a special occasion with our limited edition perfume.</p>
      <span className="text-2xl font-bold text-gray-900 mt-4">$99.99</span>
      <button className="mt-4 bg-red-400 text-black px-6 py-2 rounded-full hover:bg-green-400 transition">Add to Cart</button>
    </div>
  );
};

export default Product;
