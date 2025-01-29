import React from 'react';
import Image from 'next/image';

interface CardProps {
  src: string;
  alt: string;
  description: string;
  price: string | number;
}

const Card: React.FC<CardProps> = ({ src, alt, description, price }) => {
  return (
    <div className='flex flex-col justify-center items-center p-4 h-[400px] w-[280px] bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
      {/* Image Container */}
      <div className='relative w-full h-48 mb-4 overflow-hidden rounded-lg'>
        <Image
          src={src}
          layout='fill'
          objectFit='cover'
          alt={alt}
          className='hover:scale-105 transition-transform duration-300'
        />
      </div>

      {/* Description and Price */}
      <div className='flex flex-col justify-between flex-grow w-full text-center'>
        <p className='text-sm text-gray-700 line-clamp-2'>{description}</p>
        <h3 className='font-bold text-lg text-gray-900 mt-2'>${price}</h3>
      </div>

      {/* Add to Cart Button (Optional) */}
      <button className='w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300'>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;