"use client";

import Image from "next/image";
import Button from "@/components/Button";

const WhyJoinUs = () => {
  return (
    <section className="flex w-full flex-col items-center pt-4 pb-14 bg-white lg:bg-off-yellow lg:px-20 lg:py-40 lg:block">
      <div className="mx-4 flex flex-col max-w-[360px] justify-center items-center gap-6 bg-white py-8 shadow-2xl text-black rounded-[1.875rem] shadow-black/20 lg:flex-row lg:justify-between lg:mx-auto lg:px-20 lg:py-[4.5rem] lg:max-w-[88vw] lg:max-h-[496px] lg:[88vw]">
        <div className="flex flex-col items-center gap-6 lg:items-start lg:justify-center">
          <h2 className="text-center text-[2rem] font-bold leading-none px-4 lg:text-[3.5rem] lg:px-0 lg:text-left">
            Why join us
          </h2>
          <ul className="flex flex-col items-start gap-2 px-4 lg:px-0">
            <li className="flex items-center gap-2 lg:text-xl lg:leading-9">
              <span className="inline-block bg-[url('/join-us/icon/check.svg')] bg-no-repeat w-6 h-6"></span>
              Est et in pharetra magna adipiscing ornare aliquam.
            </li>
            <li className="flex items-center gap-2 lg:text-xl lg:leading-9">
              <span className="inline-block bg-[url('/join-us/icon/check.svg')] bg-no-repeat w-6 h-6"></span>
              Tellus arcu sed consequat ac velit ut eu blandit.
            </li>
            <li className="flex items-center gap-2 lg:text-xl lg:leading-9">
              <span className="inline-block bg-[url('/join-us/icon/check.svg')] bg-no-repeat w-6 h-6"></span>
              Ullamcorper ornare in et egestas dolor orci.
            </li>
          </ul>

          <Button
            label="Sign up now"
            onClick={() => (window.location.href = "#")}
            size="md"
            variant="outline"
            customClasses="max-w-[180px] mx-auto relative z-10 lg:mx-0"
          />
        </div>
        <div className="lg:max-w-[520px] lg:w-full">
          <div className="relative mx-auto grid w-full place-items-center bg-transparent -mt-20 lg:-mt-12">
            <Image
              src="/join-us/m-deco-video.svg"
              alt=""
              width={440}
              height={386}
              className=" max-h-[600px] lg:hidden lg:invisible max-w-[100vw] w-[100vw] pb-4"
            />
            <Image
              src="/join-us/deco-video.svg"
              alt=""
              width={713}
              height={620}
              className="invisible hidden lg:visible lg:block max-w-[100vw] w-[713px] pb-4 -ml-16"
            />
          </div>
          <div className="relative mx-4 -mt-[350px] rounded-[20px]  bg-white shadow-video-shadow lg:-mt-[25rem]">
            <div className="bg-white rounded-[1.25rem]">
              <Image src="/join-us/topbar.svg" alt="" width={520} height={41} />
            </div>
            <Image
              src="/join-us/video.png"
              alt="Why join us image"
              width={361}
              height={220}
              className="w-full h-full -mt-4 rounded-b-[1.25rem] px-1 pb-1 lg:hidden lg:invisible"
            />
            <Image
              src="/join-us/video.png"
              alt="Why join us image"
              width={520}
              height={310}
              className="w-full h-full invisible hidden rounded-b-[1.25rem] px-1 pb-1 -mt-4 lg:block lg:visible"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
