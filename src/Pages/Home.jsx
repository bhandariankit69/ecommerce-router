import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ecommerce-api-ten-jade.vercel.app/api/v1/products")
      .then((res) => {
        console.log(res)
        console.log(res.data.data.items)
        setProducts(res.data.data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setProducts([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6 text-gray-400 dark:text-gray-500">Loading...</p>;

  return (
    <div>
      <Hero />

      <div className="mb-5 flex items-center justify-between px-10">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Featured Products</h2>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          {products.length} items
        </span>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4 px-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
