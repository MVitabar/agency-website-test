"use client";

import Link from "next/link";
import Carousel from "@/app/components/HeroCarroussel";

export default function Hero() {
  return (
    <div>
      <section className="bg-white mt-36 flex flex-col items-center justify-center text-black text-center md:w-2/4 mx-auto">
        <h1 className="text-5xl font-bold">
          Medium length hero headline goes here
        </h1>
        <p className="text-sm mt-6 mx-8">
          Lorem ipsum dolor sit amet, consectetur adiping elit. Suspendisse
          varius eros elementum tristique. Duis cursus, mi quis viverra ornare,
          eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <Link
          href="/home"
          className="block text-center mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-lime-400 hover:bg-lime-500 "
        >
          Read more
        </Link>
      </section>

      <Carousel />
    </div>
  );
}
