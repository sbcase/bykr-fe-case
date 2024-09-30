"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";
import { Card } from "@/components/Card";

const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="py-12 bg-white lg:py-20 lg:bg-off-yellow">
      <div className="lg:items-center lg:flex lg:px-20 lg:justify-between">
        <h2 className="text-[2rem] text-center font-bold text-baykar-black lg:text-[3.5rem] leading-none lg:text-left">
          Because they love us
        </h2>
        <div className="hidden invisible lg:visible lg:items-center lg:flex lg:gap-6">
          <button
            type="button"
            onClick={() => swiperInstance?.slidePrev()}
            className="appearance-none cursor-pointer rounded-full border-2 border-dark-brown p-3"
          >
            <Image
              src="/users/icon/arrow-left.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>
          <button
            type="button"
            onClick={() => swiperInstance?.slideNext()}
            className="appearance-none cursor-pointer rounded-full border-2 border-dark-brown p-3"
          >
            <Image
              src="/users/icon/arrow-right.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      <div className="relative z-10 lg:mt-20 mt-8">
        <Swiper
          spaceBetween={24}
          slidesPerView={1.25}
          breakpoints={{
            768: {
              slidesPerView: 2.25,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 3000 }}
          onInit={(swiper) => {
            setSwiperInstance(swiper);
          }}
          className="h-auto !pb-6"
          wrapperClass="!h-auto"
        >
          <SwiperSlide className="self-stretch h-auto lg:!w-[384px] lg:!h-[430px] max-sm:!h-[296px]">
            <Card
              companyImage={{
                src: "/users/Logo-grey.png",
                alt: "Zoomer logo",
              }}
              review="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
              reviewAuthor={{
                name: "Hellen Jummy",
                title: "Team Lead",
                image: {
                  src: "/users/3.png",
                  alt: "Photo of Hellen Jummy",
                },
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="self-stretch h-auto lg:!w-[384px] lg:!h-[430px] max-sm:!h-[296px] ">
            <Card
              companyImage={{
                src: "/users/Logo-grey-1.png",
                alt: "Shells logo",
              }}
              review="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
              reviewAuthor={{
                name: "Hellena John",
                title: "Co-founder",
                image: {
                  src: "/users/2.png",
                  alt: "Photo of Hellena John",
                },
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="self-stretch h-auto lg:!w-[384px] lg:!h-[430px] max-sm:!h-[296px] ">
            <Card
              companyImage={{
                src: "/users/Logo-grey-2.png",
                alt: "ArtVenue logo",
              }}
              review="A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed."
              reviewAuthor={{
                name: "David Oshodi",
                title: "Manager",
                image: {
                  src: "/users/5.png",
                  alt: "Photo of David Oshodi",
                },
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="self-stretch h-auto lg:!w-[384px] lg:!h-[430px] max-sm:!h-[296px] ">
            <Card
              companyImage={{
                src: "/users/Logo-grey.png",
                alt: "Zoomer logo",
              }}
              review="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
              reviewAuthor={{
                name: "Hellen Jummy",
                title: "Team Lead",
                image: {
                  src: "/users/4.png",
                  alt: "Photo of Hellen Jummy",
                },
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="self-stretch h-auto lg:!w-[384px] lg:!h-[430px] max-sm:!h-[296px] ">
            <Card
              companyImage={{
                src: "/users/Logo-grey-2.png",
                alt: "Shells logo",
              }}
              review="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
              reviewAuthor={{
                name: "Hellena John",
                title: "Co-founder",
                image: {
                  src: "/users/2.png",
                  alt: "Photo of Hellena John",
                },
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="self-stretch h-auto lg:!w-[384px] lg:!h-[430px] max-sm:!h-[296px] ">
            <Card
              companyImage={{
                src: "/users/Logo-grey-1.png",
                alt: "ArtVenue logo",
              }}
              review="A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed."
              reviewAuthor={{
                name: "David Oshodi",
                title: "Manager",
                image: {
                  src: "/users/4.png",
                  alt: "Photo of David Oshodi",
                },
              }}
            />
          </SwiperSlide>
        </Swiper>
        <div className="absolute -top-4 left-0 w-full h-full bg-gradient-to-b from-pale-yellow from-95% to-white to-95% lg:left-10 lg:w-[calc(100%-5rem)] lg:-top-8"></div>
      </div>
    </section>
  );
};

export default Testimonials;
