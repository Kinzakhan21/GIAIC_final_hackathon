import React from "react";

const ProductDetail = ({ product }: { product: Product }) => (
  <div className="max-w-4xl mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    {/* Product Name */}
    <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

    {/* Product Image */}
    <div className="relative w-full h-96 mb-6 overflow-hidden rounded-lg">
      <img
        src={product.imagePath}
        alt={product.name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        style={{ width: '500px', height: '300px' }} // Adjust width and height here
      />
    </div>

    {/* Product Description */}
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      {product.description}
    </p>

    {/* Product Price */}
    <p className="text-2xl font-semibold text-gray-900 mb-6">
      ${product.price}
    </p>

    {/* Call-to-Action Buttons */}
    <div className="flex gap-4">
      <button className="w-48 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
        Add to Cart
      </button>
      <button className="w-48 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300">
        Buy Now
      </button>
    </div>
  </div>
);

export default ProductDetail;