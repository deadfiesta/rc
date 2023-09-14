import { useState, useEffect, useRef } from "react";
import { animated, useSpring, useTransition } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import {
  faGift,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Container from "./Container";

const Carousel = ({ type, banners }) => {
  const marketingBanners = [...banners];

  const [init, setInit] = useState(true);
  const banner = useRef(0);
  const [index, set] = useState(0);

  const transition = useTransition(index, {
    from: init ? { x: 0 } : { x: banner.current > index ? -100 : 100 },
    enter: { x: 0 },
    leave: { x: banner.current > index ? 100 : -100 },
    onChange: () => (banner.current = index),
  });

  useEffect(() => {
    setInit(false);
  }, []);

  const getCarouselCss = (type) => {
    switch (type) {
      default:
      case 1:
        return ["h-[480px] sm:h-[424px]", "bg-black"];
        break;
      case 2:
      case 3:
      case 4:
        return ["h-[644px] md:h-[424px]", "bg-neutral-100"];
        break;
      case 5:
        return ["h-[720px] lg:h-[560px]", "bg-neutral-100"];
    }
  };

  return (
    <div
      className={`relative w-full overflow-x-hidden ${getCarouselCss(type)
        .map((css) => `${css}`)
        .join(" ")}`}
    >
      {marketingBanners.length > 1 && type !== 5 ? (
        <>
          <ArrowButton
            type={type}
            left
            click={() => {
              if (index - 1 < 0) {
                set(marketingBanners.length - 1);
              } else {
                set((index - 1) % marketingBanners.length);
              }
            }}
          />
          <ArrowButton
            type={type}
            right
            click={() => set((index + 1) % marketingBanners.length)}
          />
        </>
      ) : type === 5 ? (
        <>
          <Container css="relative">
            <div
              className={`absolute inset-0 w-full ${getCarouselCss(type)[0]}`}
            >
              <ArrowButton
                type={type}
                left
                click={() => {
                  if (index - 1 < 0) {
                    set(marketingBanners.length - 1);
                  } else {
                    set((index - 1) % marketingBanners.length);
                  }
                }}
              />
              <ArrowButton
                type={type}
                right
                click={() => set((index + 1) % marketingBanners.length)}
              />
            </div>
          </Container>
        </>
      ) : (
        ""
      )}
      {transition(({ x }, i) => {
        const slide = marketingBanners[i];
        return (
          <animated.div
            className="absolute w-full h-full"
            style={{ transform: x.to((value) => `translateX(${value}%)`) }}
          >
            <Banner
              i={i}
              banners={marketingBanners}
              type={type}
              title={slide?.title}
              subtitle={slide?.subtitle}
              button={slide?.cta}
              image={slide?.image}
            />
          </animated.div>
        );
      })}
      {marketingBanners.length > 1 ? (
        <ul className="absolute bottom-0 w-full flex gap-2 justify-center pb-4 md:pb-6">
          {marketingBanners.map((item, i) => (
            <li key={`${item}button${i}`}>
              <NavigationButton
                type={type}
                click={set}
                i={i}
                isCurrent={index === i ? true : false}
              />
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

Carousel.defaultProps = {
  type: 1,
};

function Banner({ i, type, image, title, subtitle, button, banners }) {
  const { x, s, r, o } = useSpring({
    from: {
      o: 0,
      x: -10,
      s: 15,
      r: -275,
    },
    to: {
      o: 1,
      x: 0,
      s: 0,
      r: -65,
    },
    config: {
      friction: 32,
    },
  });
  switch (type) {
    default:
    case 1: // Dark mode full spread hero image
      return (
        <div
          className="relative z-20 w-full h-full flex items-center bg-no-repeat bg-center bg-cover
          before:bg-gradient-to-t from-[rgba(0,0,0,.5)] to-[rgba(0,0,0,.15)]
          before:absolute before:inset-0 before:w-full before:h-full before:-z-10"
          style={{ backgroundImage: `url('${image}')` }}
        >
          <div
            className={`flex flex-col gap-6 w-full xl:max-w-7xl px-4 2xl:px-0 xl:mx-auto ${
              banners.length > 1 && "sm:px-20 md:px-24"
            }`}
          >
            <h1 className="text-4xl font-bold text-neutral-100 md:text-6xl max-w-[1008px]">
              {title}
            </h1>
            <p className="font-normal max-w-[1008px] text-neutral-100 sm:text-lg ">
              {subtitle}
            </p>
            {button && (
              <div className="pt-4">
                <Button size="lg" type="secondary">
                  {button}
                </Button>
              </div>
            )}
          </div>
        </div>
      );
      break;
    case 2: // Light Mode Left Image
    case 3: // Light Mode Right Image
    case 4: //Money2020
      return (
        <div
          className={`bg-neutral-100 flex flex-col gap-6 w-full h-full xl:max-w-7xl px-4 2xl:px-0 xl:mx-auto ${
            banners.length > 1 && "sm:px-20 md:px-24"
          }`}
        >
          <div
            className={`w-full h-full flex flex-col-reverse ${
              type === 3 ? "md:flex-row-reverse" : "md:flex-row"
            }  md:gap-8 justify-end xl:gap-16 md:items-center`}
          >
            <div
              className={`${
                type !== 4 ? "md:w-7/12" : ""
              } flex flex-col gap-4 text-primary-700`}
            >
              <h1 className="text-4xl font-bold  lg:text-5xl">{title}</h1>
              <p className="font-normal max-w-[1008px] sm:text-lg ">
                {subtitle}
              </p>
              {button && (
                <div className="pt-4">
                  <Button size="lg" type="secondary">
                    {button}
                  </Button>
                </div>
              )}
            </div>
            {type !== 4 ? (
              <img
                className="w-full md:w-1/2 max-h-[288px] object-cover my-4 rounded"
                src={image}
              />
            ) : (
              <div className="relative flex w-full h-full py-16 md:w-1/2 min-w-[375px] max-h-[480px]">
                <animated.div
                  style={{
                    opacity: o.to((value) => value),
                    transform: x.to((value) => `translateX(${value}%)`),
                  }}
                  className="absolute bottom-16 shadow-xl rounded-2xl w-10/12 h-[208px] overflow-hidden"
                >
                  <img
                    src={image[1]}
                    className="w-full h-full object-cover"
                    alt={title}
                  />
                </animated.div>
                <animated.div
                  style={{
                    opacity: o.to((value) => value),
                    transform: s.to((value) => `translateX(${value}%)`),
                  }}
                  className="absolute top-16 right-0 shadow-md rounded-2xl w-5/12 min-w-[208px] h-[208px] overflow-hidden"
                >
                  <img
                    src={image[0]}
                    className="w-full h-full object-cover"
                    alt={title}
                  />
                </animated.div>
                <div className="absolute bottom-72 left-0 translate-x-6">
                  <animated.div
                    style={{
                      transform: r.to((value) => `rotate(${value}deg)`),
                      opacity: o.to((value) => value),
                    }}
                    className="h-0.5 w-24 bg-[#ED5E6F] -rotate-[65deg]"
                  ></animated.div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
      break;
    case 5: //Standard carousels
      return (
        <>
          <Container css="h-full">
            <div
              className={`flex flex-col lg:flex-row items-center h-full w-full gap-4 lg:gap-14 py-20 sm:px-24`}
            >
              <Money2020 slide={i} />
              <div className="flex flex-col justify-center gap-4 lg:h-full w-full text-primary-700 py-8">
                <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
                <p>{subtitle}</p>
              </div>
            </div>
          </Container>
        </>
      );
  }
}

function Money2020({ slide }) {
  const transition = useTransition(slide, {
    from: { x: -100, y: 100, o: 0, s: 1.5, r: -275 },
    enter: { x: 0, y: 0, o: 1, s: 1, r: -65 },
    leave: { x: 100, y: 100, o: 0, s: 0.5, r: -275 },
    config: { friction: 30 },
  });
  const Wrapper = ({ children, bgColor }) => {
    return (
      <div
        className={`relative ${bgColor} min-w-[480px] w-full h-full grid place-items-center`}
      >
        <div className="relative max-w-[520px] w-full h-full">{children}</div>
      </div>
    );
  };
  switch (slide) {
    default:
    case 0:
      return transition(({ y, o, s }) => (
        <Wrapper bgColor="bg-neutral-200">
          <animated.img
            style={{
              transform: y.to((value) => `translateY(${value / -2}%)`),
              opacity: o.to((value) => value),
            }}
            className="absolute right-8 -top-4 w-64 h-64 object-cover shadow-md rounded-xl"
            src="/images/carousel-1-1.jpg"
            alt=""
          />
          <div className="absolute w-full h-full inset-0 px-8 flex items-end overflow-hidden">
            {/**Phone mockup */}
            <animated.img
              style={{ transform: y.to((value) => `translateY(${value}%)`) }}
              className="h-fit shadow-lg"
              src="/images/carousel-1-2.png"
              alt=""
            />
            <animated.img
              style={{
                transform: s.to((value) => `scale(${value})`),
                opacity: o.to((value) => value),
              }}
              className="absolute bottom-8 right-16 shadow-md"
              src="/images/carousel-1-3.png"
              alt=""
            />
          </div>
        </Wrapper>
      ));
      break;
    case 1:
      return transition(({ x, y, o }) => (
        <Wrapper bgColor="bg-info-200">
          <animated.img
            style={{
              transform: y.to((value) => `translateY(${value / -2}%)`),
              opacity: o.to((value) => value),
            }}
            className="absolute left-12 -top-4 rounded-xl"
            src="/images/carousel-2-1.png"
            alt=""
          />
          <div className="absolute w-full h-full inset-0 px-12 flex justify-end items-end overflow-hidden">
            {/**Phone mockup */}
            <animated.div
              style={{
                opacity: o.to((value) => value),
                transform: x.to((value) => `translateX(${value}%)`),
              }}
              className="shadow-xl z-10 flex mb-16 -mr-10 gap-3 items-center rounded-full bg-primary-500 px-4 py-1 text-xl text-neutral-100"
            >
              <FontAwesomeIcon icon={faGift} /> 30% bonus
            </animated.div>
            <animated.img
              style={{ transform: y.to((value) => `translateY(${value}%)`) }}
              className="h-fit shadow-lg"
              src="/images/carousel-2-2.png"
              alt=""
            />
          </div>
        </Wrapper>
      ));
      break;
    case 2:
      return transition(({ x, y, o, r }) => (
        <Wrapper bgColor="bg-primary-700">
          <animated.img
            style={{
              transform: y.to((value) => `translateY(${value / 2}%)`),
              opacity: o.to((value) => value),
            }}
            className="absolute rounded-xl -right-4 -bottom-4 w-80"
            src="/images/carousel-3-2.jpg"
            alt=""
          />
          <animated.img
            style={{
              transform: y.to((value) => `translateY(${value / -2}%)`),
              opacity: o.to((value) => value),
            }}
            className="absolute -left-4 -top-4 w-72 rounded-xl"
            src="/images/carousel-3-1.jpg"
            alt=""
          />
          <animated.img
            style={{
              opacity: o.to((value) => value),
              transform: x.to((value) => `translateX(${value}%)`),
            }}
            className="absolute top-14 right-8"
            src="/images/carousel-3-3.png"
            alt=""
          />
          <div className="absolute bottom-20 left-40">
            <animated.div
              style={{
                transform: r.to((value) => `rotate(${value}deg)`),
                opacity: o.to((value) => value),
              }}
              className="h-0.5 w-24 bg-[#ED5E6F] -rotate-[65deg]"
            />
          </div>
        </Wrapper>
      ));
  }
}

function ArrowButton({ left, right, type, click }) {
  const style = (type) => {
    switch (type) {
      default:
      case 1:
        return "before:absolute before:transition-opacity before:w-full before:h-full before:-z-10 before:inset-0 before:bg-black before:opacity-40 hover:before:opacity-50 active:before:opacity-75 text-neutral-100 disabled:before:opacity-10 disabled:text-neutral-400";
        break;
      case 2:
      case 3:
      case 4:
        return "bg-neutral-200 text-neutral-900 transition-colors hover:bg-neutral-300 active:bg-neutral-400 disabled:text-neutral-300 disabled:bg-neutral-400";
      case 5:
        return "backdrop-blur-md bg-neutral-100/30 text-primary-500 border border-primary-500 active:border-primary-600 hover:border-primary-400 hover:bg-neutral-400/30 hover:text-primary-400 disabled:border-neutral-400";
    }
  };
  return (
    <div
      className={`absolute ${
        type !== 5 ? "top-0" : "top-1/2 -translate-y-1/2 px-4 xl:px-0"
      } hidden sm:grid ${
        left ? "left-0" : right ? "right-0" : ""
      } z-30 h-full place-items-center pointer-events-none`}
    >
      <button
        onClick={click}
        className={`relative pointer-events-auto z-40 overflow-hidden 
        ${
          left && type !== 5
            ? "rounded-r"
            : right && type !== 5
            ? "rounded-l"
            : "rounded-full"
        } 
        ${type !== 5 ? "h-24 w-14" : "h-14 w-14"} ${style(type)}`}
      >
        {left && <FontAwesomeIcon icon={faChevronLeft} />}
        {right && <FontAwesomeIcon icon={faChevronRight} />}
      </button>
    </div>
  );
}

function NavigationButton({ click, type, isCurrent, i }) {
  const spring = useSpring({
    width: isCurrent ? 16 : 8,
  });
  const themeCss = (type) => {
    switch (type) {
      default:
      case 1:
        return isCurrent
          ? "bg-neutral-100"
          : "w-2 bg-neutral-600 cursor-pointer";
        break;
      case 2:
      case 3:
      case 4:
      case 5:
        return isCurrent
          ? "bg-primary-500"
          : "w-2 bg-primary-300 cursor-pointer";
        break;
    }
  };
  return (
    <animated.div
      onClick={() => click(i)}
      style={spring}
      className={`${themeCss(type)} transition-colors rounded-full h-2`}
    />
  );
}

export default Carousel;
