import React from 'react';
import Image from 'next/image';
import { ChevronRight, GalleryVertical, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import Card from '../components/card';
import Tag from '../components/infoTag';
import { client } from '@/sanity/lib/client'; // Adjust this import as per your project structure

interface Product {
  category: string;
  id: string;
  price: number;
  description: string;
  stockLevel: number;
  imagePath: string;
  discountPercentage: number;
  isFeaturedProduct: number;
  name: string;
  image: any;
}

// Fetch products from Sanity
async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    category,
    _id,
    price,
    description,
    stockLevel,
    "imagePath": image.asset->url,
    discountPercentage,
    isFeaturedProduct,
    name,
    "image": image.asset._ref
  }`;
  const products = await client.fetch(query);
  return products;
}

const Page = async () => {
  const products = await fetchProducts(); // Fetch the products data from Sanity

  return (
    <div className="mx-auto">
      {/* Top Name Section */}
      <div>
        <div className="bg-[url('/Rectangle-1.png')] bg-cover bg-center h-[400px] my-8 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <Image src={"/Group-55.png"} width={100} height={100} alt="shop" />
            <p className="flex text-xl justify-center items-center">
              <strong>Home</strong>
              <ChevronRight /> Shop
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-palePink py-4 lg:px-20 px-4 flex justify-between">
        <div className="flex lg:gap-x-7 gap-x-4">
          <div className="flex gap-x-4 justify-center items-center">
            <SlidersHorizontal />
            <span className="text-2xl font-semibold font-sans">Filter</span>
          </div>
          <div className="flex justify-center items-center">
            <LayoutGrid />
          </div>
          <div className="flex justify-center items-center">
            <GalleryVertical />
          </div>
          <div className="border-r-2 h-10 border-gray-500" />
          <div className="flex justify-center items-center">
            <p className="lg:text-lg text-sm">Showing 1–16 of 32 results</p>
          </div>
        </div>

        <div className="lg:flex hidden gap-x-8">
          <div className="flex gap-x-4 justify-center items-center">
            <p className="text-lg">Show</p>
            <div className="bg-white px-4 py-3 text-gray-500 ">16</div>
          </div>

          <div className="flex gap-x-4 justify-center items-center">
            <p className="text-lg">Sort by</p>
            <span className="bg-white py-3 pr-16 pl-4 text-gray-500">Default</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex flex-col justify-center items-center">
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-x-10 lg:gap-y-20 gap-y-36 lg:py-20 py-10 px-10">
          {products.map((product: Product, index) => (
            <Card
              key={index} // use product._id if possible for a unique key
              src={product.imagePath || '/default-image.png'} // Fallback image
              alt={product.name}
              description={product.description}
              price={`Rs. ${product.price}`} // Display the price correctly
            />
          ))}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex lg:gap-x-8 gap-x-6 my-8">
        <span className="lg:px-6 px-4 lg:py-4 py-2 rounded-lg text-xl bg-light_skin cursor-pointer">1</span>
        <span className="lg:px-6 px-4 lg:py-4 py-2 rounded-lg text-xl bg-paleSkin cursor-pointer">2</span>
        <span className="lg:px-6 px-4 lg:py-4 py-2 rounded-lg text-xl bg-paleSkin cursor-pointer">3</span>
        <span className="lg:px-7 px-[20px] lg:py-4 py-2 rounded-lg text-xl bg-paleSkin cursor-pointer">Next</span>
      </div>

      <Tag />
    </div>
  );
};

export default Page;


  