import { client } from '@/sanity/lib/client';
import ProductListing from '../components/ProductListing';
import Link from 'next/link';

// Fetch products from Sanity
async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    _id,
    name,
    "imageUrl": image.asset->url,
    price,
    description,
    "slug": slug.current,
    category,
    stockLevel,
    isFeaturedProduct,
    discountPercentage
  }`;
  const products = await client.fetch(query);
  return products;
}

const Page = async () => {
  const products = await fetchProducts();

  return (
    <div>
      {/* Add a link to the shop page */}
      <Link href="/shop" className="text-blue-500 underline">
        Go to Shop
      </Link>

      {/* Pass the full products array to ProductListing */}
      <ProductListing products={products} />
    </div>
  );
};

export default Page;

