import React from "react";
import { LiftvidPost, Lft3, Lft2, Ban1 } from "../assets";

const ProductShowcase = () => (
  <div className="flex flex-col items-center">
    <img src={LiftvidPost} alt="Product" className="rounded-lg shadow-lg" />
    <div className="bg-white rounded-lg p-4 mt-5 shadow-md text-center">
      <h2 className="text-2xl font-bold">01-Couch Fress</h2>
      <p className="text-gray-500">Chair with beautiful soft curved lines.</p>
    </div>
  </div>
);

export default ProductShowcase;
