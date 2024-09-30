"use client";

import { useEffect, useRef, useState } from "react";

interface ListItem {
  icon: string;
  label: string;
  image: string;
}

const listData: ListItem[] = [
  {
    icon: "/collection/icon/search.svg",
    label: "Bibendum tellus",
    image: "/collection/image.png",
  },
  {
    icon: "/collection/icon/shield-check.svg",
    label: "Cras eget",
    image: "/collection/image.png",
  },
  {
    icon: "/collection/icon/rocket.svg",
    label: "Dolor pharetra",
    image: "/collection/image.png",
  },
  {
    icon: "/collection/icon/screen.svg",
    label: "Amet, fringilla",
    image: "/collection/image.png",
  },
  {
    icon: "/collection/icon/podcast.svg",
    label: "Amet nibh",
    image: "/collection/image.png",
  },
  {
    icon: "/collection/icon/settings-alt.svg",
    label: "Sed velit",
    image: "/collection/image.png",
  },
];

const CustomListComponent: React.FC<{
  highlightedIndex: number | null;
  setHighlightedIndex: (index: number | null) => void;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}> = ({
  highlightedIndex,
  setHighlightedIndex,
  selectedIndex,
  setSelectedIndex,
}) => {
  return (
    <div className="flex flex-col max-w-full px-5 py-0 gap-4 lg:pb-32 lg:gap-20 lg:flex-row lg:container">
      <div className="flex flex-row overflow-x-auto pb-4 lg:flex-col lg:overflow-x-hidden lg:w-72 lg:pb-0 lg:px-2 hide-scrollbar w-[94vw] gap-2">
        {listData.map((item, index) => (
          <button
            key={index}
            className={`rounded-lg p-4 ease-in-out transition-[300] cursor-pointer min-w-[265px] h-14 flex items-center justify-between gap-2 lg:min-w-0 ${
              selectedIndex === index || highlightedIndex === index
                ? "bg-white shadow-[0px_0px_4px_0px_#00000012,0px_4px_6px_-1px_#0000001a]"
                : ""
            }`}
            onClick={() => setSelectedIndex(index)}
            onMouseEnter={() => setHighlightedIndex(index)}
            onMouseLeave={() => setHighlightedIndex(null)}
          >
            <div className="flex flex-row items-center">
              <img src={item.icon ?? ""} alt={item.label} />
              <p className="px-4 text-[1.25rem] font-medium leading-[1.5rem]">
                {item.label}
              </p>
            </div>

            {selectedIndex === index && (
              <img
                className="invisible hidden lg:block"
                src="/collection/icon/arrow-right.svg"
                alt="Arrow right"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const GrowYourCollection: React.FC = () => {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const tabRef = useRef<HTMLDivElement | null>(null);

  const handleAnimationCompletion = (event: AnimationEvent) => {
    if (event.animationName === "fadeDown") {
      tabRef.current?.classList.remove("inactive");
      tabRef.current?.classList.add("active");
    } else if (event.animationName === "fadeUp") {
      tabRef.current?.classList.remove("active");
    }
  };

  useEffect(() => {
    const tabContainer = tabRef.current;

    if (!tabContainer) return;

    tabContainer.classList.add("inactive");
    tabContainer.addEventListener("animationend", handleAnimationCompletion);

    return () => {
      tabContainer.removeEventListener(
        "animationend",
        handleAnimationCompletion
      );
    };
  }, [selectedIndex]);

  return (
    <div className="relative overflow-y-hidden [background-image:url('/collection/bg.svg')] bg-no-repeat bg-left-bottom lg:bg-right-bottom py-12 px-4 lg:p-20 lg:bg-fit bg-contain lg:bg-off-yellow hide-scrollbar">
      <div className="pb-8 lg:pb-20">
        <div className="flex flex-col gap-8 w-[88vw]">
          <h1 className="text-center lg:text-start lg:text-[56px] lg:font-extrabold text-[32px] font-bold">
            Grow your collection
          </h1>
          <p className="text-center lg:text-start">
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
            amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
            sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
            proin neque placerat at bibendum quam tellus.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row  flex-col items-center">
        <CustomListComponent
          highlightedIndex={highlightedIndex}
          setHighlightedIndex={setHighlightedIndex}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <div
          className="filter drop-shadow-[0px_0px_15px_#00000012] drop-shadow-[0px_25px_50px_#00000040] opacity-1 translate-y-0 transition-opacity ease-[500ms] transform ease-[500ms]"
          ref={tabRef}
        >
          {listData[selectedIndex] && (
            <img
              src={listData[selectedIndex].image}
              className="lg:w-[900px] max-w-[100vw] w-[361px]"
              width={944}
              height={556}
              alt={listData[selectedIndex].label}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GrowYourCollection;
