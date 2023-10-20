import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

// All files under app are server side rendered by default using app router

export default function Home() {
  return (
    <main className="">
      <h1 className="text-black">Hello World</h1>
      {/* client side navigation  */}
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
