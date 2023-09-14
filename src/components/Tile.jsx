import React from "react";
import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const Tile = ({ type, data }) => {
  switch (type) {
    default:
    case "featured":
      return (
        <div className="bg-neutral-100 h-full shadow-none rounded-lg border border-neutral-400 flex flex-col cursor-pointer transition-all hover:border-neutral-900 hover:shadow-xl">
          <div className="grow py-8 px-12 grid place-items-center">
            <img
              className={`${
                data.range && "rounded-lg shadow-sm"
              } w-full h-full object-cover`}
              src={data.image}
              alt={`${data.title} logo`}
            />
          </div>
          <span className="h-px w-full bg-neutral-400" />
          <div className="p-6 flex flex-col gap-3">
            <p className="text-color-600">{data.brand}</p>
            <p className="font-bold">
              {data.range}
              {data.ratio}
            </p>
          </div>
        </div>
      );
      break;
    case "money":
      return (
        <TileAnimationWrapper>
          <div className="bg-neutral-100 cursor-pointer w-full h-full flex flex-col rounded-2xl overflow-hidden transition-shadow duration-300 shadow-none hover:shadow-md">
            <img
              src={data.image}
              alt={`${data.title} thumbnail`}
              className="h-[218px] overflow-hidden object-cover"
            />
            <div className="py-4 px-6 font-bold grow text-center grid place-items-center">
              {data.title}
            </div>
          </div>
        </TileAnimationWrapper>
      );
  }
};

function TileAnimationWrapper({ children }) {
  const [hover, setHover] = useState(false);
  const { y } = useSpring({
    y: hover ? 7.5 : 0,
    config: {
      mass: .5,
      tension: 200,
      friction: 18,
    }
  });
  return (
    <animated.div className={"w-full h-full"}
      style={{
        transform: y.to((value) => `translateY(-${value}%)`),
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      {children}
    </animated.div>
  );
}

export default Tile;
