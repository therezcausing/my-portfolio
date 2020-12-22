import React from "react";
import image from "../pexels-madison-inouye-1831234.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="pink fabric"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-pink-600 font-bold cursive leading-none lg:leading-snug home-name">
          Hallo! I'm Maria.
        </h1>
      </section>
    </main>
  );
}
