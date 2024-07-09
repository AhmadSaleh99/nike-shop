import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col min-h-screen max-container gap-10 ">
      <div className="relative flex h-screen flex-col justify-center items-start w-full max-xl:padding-x pt-28  xl:w-2/5">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike </span>Shoes
        </h1>
        <p>
          Discover stylish nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
      </div>
    </section>
  );
};

export default Hero;
