import { useState, useEffect, useRef } from 'react';
import { animated, useSpring, useTransition } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const marketingBanners = [
  {
    title: 'A world of rewards awaits',
    subtitle:
      'Earning loyalty points has never been more rewarding. Redeem them for exclusive vacation packages and travel the world in style. Start planning your dream trip now.',
    cta: 'Join Now',
    image:
      'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Rewarding Your Lifestyle Choices',
    subtitle:
      'Whether you love to travel, dine out, shop, or invest, our portal offers rewards that align with your interests. Explore, earn, and indulge!',
    cta: 'Explore Rewards',
    image:
      'https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Sustainability Meets Savings',
    subtitle:
      'Make a positive impact on the environment while enjoying cashback, gift cards, and more. Join us in the journey towards a greener future.',
    cta: 'Join the Green Movement',
    image:
      'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Carousel = ({ type }) => {
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
        return 'h-[480px] sm:h-[424px] bg-black ';
        break;
      case 2:
      case 3:
        return 'h-[644px] md:h-[424px] bg-neutral-100 ';
        break;
    }
  };

  return (
    <div
      className={`relative w-full overflow-x-hidden ${getCarouselCss(type)}`}
    >
      {marketingBanners.length > 1 ? (
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
      ) : (
        ''
      )}
      {transition(({ x }, i) => {
        const slide = marketingBanners[i];
        return (
          <animated.div
            className="absolute w-full h-full"
            style={{ transform: x.to((value) => `translateX(${value}%)`) }}
          >
            <Banner
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
        <ArrowButton
          type={type}
          right
          click={() => set((index + 1) % marketingBanners.length)}
        />
      ) : (
        ''
      )}
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
        ''
      )}
    </div>
  );
};

Carousel.defaultProps = {
  type: 3,
};

function ArrowButton({ left, right, type, click }) {
  const style = (type) => {
    switch (type) {
      default:
      case 1:
        return 'before:absolute before:transition-opacity before:w-full before:h-full before:-z-10 before:inset-0 before:bg-black before:opacity-40 hover:before:opacity-50 active:before:opacity-75 text-neutral-100 disabled:before:opacity-10 disabled:text-neutral-400';
        break;
      case 2:
      case 3:
        return 'bg-neutral-200 text-neutral-900 transition-colors hover:bg-neutral-300 active:bg-neutral-400 disabled:text-neutral-300 disabled:bg-neutral-400';
    }
  };
  return (
    <div
      className={`absolute hidden sm:grid top-0 ${left && 'left-0'} ${
        right && 'right-0'
      } z-30 h-full place-items-center pointer-events-none`}
    >
      <button
        onClick={click}
        className={`relative pointer-events-auto z-40 ${left && 'rounded-r'} ${
          right && 'rounded-l'
        } overflow-hidden h-24 w-14 ${style(type)}`}
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
          ? 'bg-neutral-100'
          : 'w-2 bg-neutral-600 cursor-pointer';
        break;
      case 2:
      case 3:
        return isCurrent
          ? 'bg-primary-500'
          : 'w-2 bg-primary-300 cursor-pointer';
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

function Banner({ type, image, title, subtitle, button }) {
  switch (type) {
    default:
    case 1:
      return (
        <div
          className="relative z-20 w-full h-full flex items-center bg-no-repeat bg-center bg-cover
          before:bg-gradient-to-t from-[rgba(0,0,0,.5)] to-[rgba(0,0,0,.15)]
          before:absolute before:inset-0 before:w-full before:h-full before:-z-10"
          style={{ backgroundImage: `url('${image}')` }}
        >
          <div
            className={`flex flex-col gap-6 w-full xl:max-w-7xl px-4 2xl:px-0 xl:mx-auto ${
              marketingBanners.length > 1 && 'sm:px-20 md:px-24'
            }`}
          >
            <h1 className="text-4xl font-bold text-neutral-100 md:text-6xl">
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
    case 2:
      return (
        <div
          className={`bg-neutral-100 flex flex-col gap-6 w-full h-full xl:max-w-7xl px-4 2xl:px-0 xl:mx-auto ${
            marketingBanners.length > 1 && 'sm:px-20 md:px-24'
          }`}
        >
          <div className="w-full h-full flex flex-col flex-col-reverse sm:gap-8 justify-end md:flex-row xl:gap-16 md:items-center ">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold text-neutral-900 lg:text-5xl">
                {title}
              </h1>
              <p className="font-normal max-w-[1008px] text-neutral-900 sm:text-lg ">
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
            <img
              className="lg:basis-5/12 w-full h-[288px] object-cover my-4 rounded md:h-fit "
              src={image}
            />
          </div>
        </div>
      );
      break;
    case 3:
      return (
        <div
          className={`bg-neutral-100 flex flex-col gap-6 w-full h-full xl:max-w-7xl px-4 2xl:px-0 xl:mx-auto ${
            marketingBanners.length > 1 && 'sm:px-20 md:px-24'
          }`}
        >
          <div className="w-full h-full flex flex-col sm:gap-8 md:flex-row md:items-center xl:gap-16">
            <img
              className="lg:basis-5/12 w-full h-[288px] object-cover my-4 rounded md:h-fit "
              src={image}
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold text-neutral-900 lg:text-5xl">
                {title}
              </h1>
              <p className="font-normal max-w-[1008px] text-neutral-900 sm:text-lg ">
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
        </div>
      );
      break;
  }
}

export default Carousel;
