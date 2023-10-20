"use client"; //All components inside app folder are server comp by default. This is the new app router way from nextjs. components inside components folder are not publicly accessible unless a page file is inside of it. That means we can co locate components and pages next to each other.

import React from "react";

const AddToCart = () => {
  return (
    <div>
      <h1>Check out here</h1>
      <button className="btn btn-primary" onClick={() => console.log("hi")}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
