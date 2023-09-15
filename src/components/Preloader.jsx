import React, { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

const Preloader = ({ setIsLoading }) => {
  const { r } = useSpring({
    from: { r: -65 },
    to: { r: 115 },
    config: {
      friction: 36,
    },
    loop: true,
  });
  const imageUrls = [
    "/images/banner-5-1.jpg",
    "/images/banner-5-2.jpg",
    "/images/carousel-1-1.jpg",
    "/images/carousel-1-2.png",
    "/images/carousel-1-3.png",
    "/images/carousel-2-1.png",
    "/images/carousel-2-2.png",
    "/images/carousel-3-1.jpg",
    "/images/carousel-3-2.jpg",
    "/images/carousel-3-3.png",
    "/images/quicklink-1.jpg",
    "/images/quicklink-2.jpg",
    "/images/quicklink-3.jpg",
    "/images/quicklink-4.jpg",
    "/images/quicklink-5.jpg",
    "/images/tile-featured-1.jpg",
    "/images/tile-featured-2.jpg",
    "/images/tile-featured-3.jpg",
    "/images/tile-featured-4.png",
    "/images/tile-featured-5.jpg",
  ];
  function preloadImages(images, callback) {
    const loadedImages = [];
    let loadedCount = 0;

    images.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          callback();
        }
      };
      loadedImages.push(img);
    });
  }

  useEffect(() => {
    preloadImages(imageUrls, () => {
        setIsLoading(false);
    });
  }, []);
  return (
    <div className="absolute inset-0 grid place-items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center gap-16">
        <animated.div
          style={{
            transform: r.to((value) => `rotate(${value}deg)`),
          }}
          className="w-24 h-0.5 bg-[#ED5E6F]"
        />
        <h1 className="text-2xl font-bold text-primary-700">Loading your rewards</h1>
      </div>
    </div>
  );
};

export default Preloader;
