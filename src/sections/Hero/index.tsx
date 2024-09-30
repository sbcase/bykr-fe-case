import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="relative px-4 py-12 bg-gradient-hero bg-white lg:bg-gradient-hero-lg lg:p-20">
      <div className="lg:flex lg:items-center lg:justify-between lg:gap-20">
        <div className="lg:flex lg:flex-col lg:items-start lg:gap-8">
          <h2 className="text-center text-[56px] leading-[62px] font-bold !lg:text-left lg:text-[72px] lg:leading-[80px]">
            Collectible Sneakers
          </h2>
          <p className="mt-8 text-lg text-center lg:mt-0 lg:text-left lg:max-w-[44.625rem]">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 mx-auto lg:mt-0 lg:mx-0 lg:justify-start">
            <div className="lg:max-w-[11.25rem]">
              <Button variant="outline" label="Sign up now" size="lg" />
            </div>
            <div className="lg:max-w-[11.25rem]">
              <Button
                variant="link"
                label="Watch Demo"
                icon="/hero/icon/play-circle.svg"
                size="lg"
              />
            </div>
          </div>
        </div>
        <div className="relative mt-8 mx-auto lg:mt-0 lg:mx-0 lg:w-[clamp(15.25rem,calc(15.25rem+((1vw-0.64rem)*58.1731)),30.375rem)] lg:h-[clamp(12.125rem,calc(12.125rem+((1vw-0.64rem)*46.6346)),24.25rem)] isolate">
          <Image
            src="/hero/m-hero.png"
            alt="Hero image"
            sizes="100vw"
            width={361}
            height={288}
            className="absolute z-10 w-full h-full lg:hidden object-cover"
          />
          <Image
            src="/hero/hero.png"
            alt="Hero image"
            sizes="100vw"
            width={486}
            height={388}
            className="absolute z-10 hidden lg:block lg:ml-auto w-full h-full"
          />
          <div className="rounded-[3.125rem] w-[calc(100vw-7.5rem)] h-[calc(100vw-7.5rem)] bg-orange translate-y-8 mx-auto lg:translate-y-11 lg:max-w-[23rem] lg:max-h-[23.25rem] lg:h-[clamp(11.625rem,calc(11.625rem+((1vw-0.64rem)*44.7115)),23.25rem)] lg:w-[clamp(11.5rem,calc(11.5rem+((1vw-0.64rem)*44.2308)),23rem)]"></div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 py-12 mt-12 lg:flex-row lg:gap-20 lg:mt-40 lg:py-0">
        <div className="flex flex-col items-center gap-4 text-center lg:text-left lg:items-start lg:flex-col">
          <Image
            src="/hero/block-1.svg"
            alt="Block 1"
            width={72}
            height={72}
            className="max-w-16 max-h-16 mx-auto lg:mx-0 aspect-square"
          />
          <h3 className="text-xl font-medium leading-5 text-black">
            Nibh viverra
          </h3>
          <p className="text-lg leading-7 text-black max-w-[55vw]">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center lg:text-left lg:items-start lg:flex-col">
          <Image
            src="/hero/block-2.svg"
            alt="Block 2"
            width={72}
            height={72}
            className="max-w-16 max-h-16 mx-auto lg:mx-0 aspect-square"
          />
          <h3 className="text-xl font-medium leading-5 text-black">
            Cursus amet
          </h3>
          <p className="text-lg leading-7 text-black max-w-[55vw]">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center lg:text-left lg:items-start lg:flex-col">
          <Image
            src="/hero/block-3.svg"
            alt="Block 3"
            width={72}
            height={72}
            className="max-w-16 max-h-16 mx-auto lg:mx-0 aspect-square"
          />
          <h3 className="text-xl font-medium leading-5 text-black">
            Ipsum fermentum
          </h3>
          <p className="text-lg leading-7 text-black max-w-[55vw]">
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
