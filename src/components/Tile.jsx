import React from "react";

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
  }
};

export default Tile;
