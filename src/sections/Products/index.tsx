"use client";

import Image from "next/image";
import Button from "@/components/Button";

const Products = () => {
  return (
    <section className="px-4 py-12 text-white bg-no-repeat bg-black lg:p-20 lg:[background-image:url('/products/backlights.svg')] lg:[background-position-y:192px] lg:[background-position-x:center] lg:[background-size:95%]  [background-image:url('/products/m-backlights.svg')] bg-contain max-sm:[background-position-x:center] max-sm:[background-position-y:55vh]">
      <div className="flex flex-col gap-8 items-center lg:flex-row lg:gap-20 lg:justify-between">
        <h2 className="text-center text-[2rem] font-bold lg:text-[3.5rem] inline-block">
          The best of the best
        </h2>
        <div className="max-w-[14.625rem] mx-auto lg:mx-0">
          <Button
            label="Sign up now"
            onClick={() => (window.location.href = "#")}
            size="lg"
            variant="outline"
            customClasses="text-white border-white"
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center justify-center mt-8 lg:flex-row lg:gap-12 lg:mt-20">
        <div className="rounded bg-black shadow-card-shadow overflow-hidden">
          <Image
            src="/products/product1.png"
            alt="Photo of a yellow shoe."
            width={394}
            height={220}
            className="w-full h-full rounded-t object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white leading-none">
              Title
            </h3>
            <p className="text-lg mt-4 text-white leading-7">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
            <div className="mt-8">
              <Button
                label="Buy Now"
                onClick={() => (window.location.href = "#")}
                size="md"
                variant="outline"
                icon="/products/icon/shopping-cart.svg"
                customClasses="text-white border-white w-full"
              />
            </div>
          </div>
        </div>

        <div className="rounded-[10px] overflow-hidden bg-black shadow-card-shadow">
          <Image
            src="/products/product2.png"
            alt="Photo of three different shoes."
            width={394}
            height={220}
            className="w-full h-full rounded-t object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold leading-none text-baykar-white">
              Title
            </h3>
            <p className="mt-4 text-lg text-white leading-7">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
            <div className="mt-8">
              <Button
                label="Buy Now"
                onClick={() => (window.location.href = "#")}
                size="md"
                variant="outline"
                icon="/products/icon/shopping-cart.svg"
                customClasses="text-white border-white w-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-black rounded-[10px] shadow-card-shadow overflow-hidden">
          <Image
            src="/products/product3.png"
            alt="Photo of a man wearing white shoes over a yellow background."
            width={394}
            height={220}
            className="rounded-t w-full h-full object-cover"
          />
          <div className="p-8">
            <h3 className="font-bold text-2xl text-baykar-white leading-none">
              Title
            </h3>
            <p className="mt-4 text-lg leading-7 text-baykar-white">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
            <div className="mt-8">
              <Button
                label="Buy Now"
                onClick={() => (window.location.href = "#")}
                size="md"
                variant="outline"
                icon="/products/icon/shopping-cart.svg"
                customClasses="text-white border-white w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
