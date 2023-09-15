import { useState, useEffect, useRef, useMemo } from "react";
import { animated, useSpring, useTransition } from "@react-spring/web";
import AscendaLogo from "../assets/AscendaLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "./Container";
import Button from "./Button";
import Link from "./Link";
import Scrium from "./Scrium";
import {
  faBars,
  faCircleUser,
  faPlaneDeparture,
  faGift,
  faMoneyBill1,
  faLeaf,
  faWallet,
  faTags,
  faArrowRightToBracket,
  faChevronDown,
  faXmark,
  faSuitcaseRolling,
} from "@fortawesome/free-solid-svg-icons";
import Data from "./Data.json";

const { menu, redeem, offers, footer } = Data;

const products = [redeem, offers];
const faIcons = [
  [
    <FontAwesomeIcon icon={faPlaneDeparture} />,
    <FontAwesomeIcon icon={faSuitcaseRolling} />,
    <FontAwesomeIcon icon={faGift} />,
    <FontAwesomeIcon icon={faMoneyBill1} />,
    <FontAwesomeIcon icon={faLeaf} />,
    <FontAwesomeIcon icon={faWallet} />,
  ],
  [<FontAwesomeIcon icon={faTags} />],
];

const account = {
  points: "[0,000,000]",
  currency: "[rewards_cur]",
};

const Navbar = () => {
  //Content
  const getPoints = useMemo(() => {
    return generateRandomNumbers();
  }, []);

  //States
  const [openMenu, setOpenMenu] = useState(false);
  const [showMyAccount, setShowMyAccount] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(0);
  const [hover, setHover] = useState(false);
  const [style, api] = useSpring(() => ({
    opacity: 0,
    left: 0,
    width: 1,
  }));

  //Refs
  const modal = useRef(null);
  const myAccount = useRef(null);

  //Transitions
  const secondaryNavTransitions = useTransition(hover, {
    from: { opacity: 0, y: -16 },
    enter: { opacity: 1, y: 0 },
    leave: {
      opacity: 0,
      y: -16,
    },
    config: {
      mass: 0.5,
      friction: 14,
    },
  });
  const myAccountTransition = useTransition(showMyAccount, {
    from: { opacity: 0, y: -16 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -16 },
    config: {
      mass: 0.3,
      friction: 9,
    },
  });

  const handleClickOutside = (event) => {
    if (
      modal.current &&
      !modal.current.contains(event.target) &&
      !myAccount.current.contains(event.target)
    ) {
      setShowMyAccount(false);
    }
  }; //Close my account on click outside

  useEffect(() => {
    let hovered = document.querySelector(".menu").childNodes[hoveredTab];
    hovered !== null &&
      api.start({
        opacity: hover ? 1 : 0,
        left: hovered.offsetLeft,
        width: hovered.offsetWidth,
      });
    if (hover) {
      setShowMyAccount(false);
    }
  }, [hover, hoveredTab]); //Animate navigation underline

  useEffect(() => {
    document.body.classList.toggle("overflow-y-hidden", openMenu);
  }, [openMenu]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="h-[73px]">
        <div className="fixed z-50 w-full top-o left-0">
          <div className="relative border-b border-neutral-400 bg-neutral-100 z-50 h-[73px] flex items-center">
            <Container css="w-full">
              <div className="flex gap-16 ">
                <div className="flex gap-6 items-center text-xl">
                  <div
                    onClick={() => setOpenMenu(!openMenu)}
                    className="lg:hidden cursor-pointer"
                  >
                    <Button type="icon" icon={faBars} />
                  </div>
                  <AscendaLogo />
                </div>
                <ul
                  className="menu relative hidden lg:flex gap-4"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  {menu.map(({ title }, i) => (
                    <li key={title} onMouseEnter={() => setHoveredTab(i)}>
                      <NavMenu>{title}</NavMenu>
                    </li>
                  ))}
                  <animated.li
                    style={style}
                    className="absolute left-0 opacity-0 bottom-0 w-0 h-0.5 bg-neutral-900"
                  ></animated.li>
                </ul>
                <div className="flex gap-6 items-center grow justify-end">
                  <div className="hidden sm:flex gap-1">
                    <span className="whitespace-nowrap">You have:</span>
                    <span className="whitespace-nowrap font-bold">
                      {getPoints} {account.currency}
                    </span>
                  </div>
                  <span className="hidden sm:block w-px h-6 bg-neutral-400 text-primary-500" />
                  <div
                    ref={myAccount}
                    className="cursor-pointer"
                    onClick={() => setShowMyAccount(!showMyAccount)}
                  >
                    <Button type="icon" icon={faCircleUser} />
                  </div>
                </div>
              </div>
            </Container>
          </div>
          {/** Secondary navigation transition */}
          {secondaryNavTransitions((style, hover) =>
            hover ? (
              <animated.div
                className="hidden absolute z-1 shadow-elevation-md lg:block z-40"
                style={style}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <SecondaryNav iconSet={faIcons[hoveredTab]} products={products[hoveredTab]} />
              </animated.div>
            ) : (
              ""
            )
          )}
          {/** Secondary my account transition */}
          {myAccountTransition((style, click) =>
            click ? (
              <>
                <Container css="hidden sm:block relative">
                  <div className="absolute px-1 right-0 z-50 flex justify-end">
                    <animated.div ref={modal} style={style}>
                      <MyAccount />
                    </animated.div>
                  </div>
                </Container>
                <MobileSideDrawer
                  show={showMyAccount}
                  setShow={setShowMyAccount}
                  screen="sm:hidden"
                >
                  <MyAccount
                    sm
                    points={getPoints}
                    currency={account.currency}
                  />
                </MobileSideDrawer>
              </>
            ) : (
              ""
            )
          )}
          {/** Mobile menu transition */}
          <MobileNav
            show={openMenu}
            setShow={setOpenMenu}
            menu={menu}
            products={products}
          />
        </div>
      </nav>
    </>
  );
};

function NavMenu({ children }) {
  return <div className="py-6 px-0.5 cursor-pointer menu">{children}</div>;
}

function MobileNav({ show, setShow, menu, products }) {
  const [openAccordion, setOpenAccordion] = useState(false);
  const { afr, ar, bfr, br } = useSpring({
    afr: openAccordion === 0 ? 1 : 0,
    ar: openAccordion === 0 ? 180 : 0,
    bfr: openAccordion === 1 ? 1 : 0,
    br: openAccordion === 1 ? 180 : 0,
    config: {
      mass: 0.35,
      friction: 14,
    },
  });
  useEffect(() => {
    if (!show) {
      setOpenAccordion(false);
    }
  }, [show]);
  return (
    <MobileSideDrawer screen="lg:hidden" show={show} setShow={setShow}>
      <div className="flex flex-col grow gap-4 py-4">
        {menu.map((item, i) => (
          <div key={`${item}${i}`} className="flex flex-col gap-4">
            <div
              className="flex items-center justify-between px-4 cursor-pointer"
              onClick={() =>
                openAccordion !== i
                  ? setOpenAccordion(i)
                  : setOpenAccordion(false)
              }
            >
              {item.title}
              <animated.div
                style={{
                  transform: [ar, br][i].to((value) => `rotate(${value}deg)`),
                }}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </animated.div>
            </div>
            <animated.div
              className="grid"
              style={{
                gridTemplateRows: [afr, bfr][i].to((value) => `${value}fr`),
              }}
            >
              <ul className="overflow-hidden pl-8 pr-4 bg-primary-100 ">
                {products[i].map((product, index) => (
                  <div className="first:pt-4 last:pb-4" key={`${product}${index}secondary`}>
                    <SecondaryNavMenu icon={faIcons[i][index]} product={product} />
                  </div>
                ))}
              </ul>
            </animated.div>
          </div>
        ))}
      </div>
      <ul className="flex flex-col pb-6 gap-4 px-4 before:w-full before:h-px before:bg-neutral-400 before:mb-2">
        {footer.map(({ title, href }, i) => (
          <li key={`${title}${i}`}>
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </MobileSideDrawer>
  );
}

function SecondaryNav({ iconSet, products }) {
  return (
    <>
      <div className="bg-neutral-100 w-screen overflow-x-hidden shadow-md">
        <Container>
          <ul className="py-6 grid grid-cols-3 gap-x-8 gap-y-4 items-stretch">
            {products.map((product, i) => (
              <li key={`${product}${i}`}>
                <SecondaryNavMenu icon={iconSet[i]} product={product} />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
}

function SecondaryNavMenu({ icon, product }) {
  return (
    <>
      <div className="cursor-pointer h-full px-2 py-2 lg:px-6 lg:py-4 rounded flex gap-8 transition-colors lg:hover:bg-primary-100">
        <div className="h-[26px] text-primary-500">{icon}</div>
        <div className="flex flex-col gap-1">
          <div className="font-bold">{product.title}</div>
          <div className="text-neutral-600 font-normal">
            {product.description}
          </div>
        </div>
      </div>
    </>
  );
}

function MobileSideDrawer({ screen, show, setShow, icon, children }) {
  const sideDrawerRef = useRef(null);
  const [overflow, setOverflow] = useState(false);
  const mobileMenuTransition = useTransition(show, {
    from: { x: -100 },
    enter: { x: 0 },
    leave: {
      x: -100,
      pointerEvents: "none",
      config: {
        friction: 14,
      },
    },
    config: {
      mass: 0.4,
      friction: 20,
    },
  });

  function handleScroll(event) {
    sideDrawerRef.current?.scrollTop === 0
      ? setOverflow(false)
      : setOverflow(true);
  }

  useEffect(() => {
    sideDrawerRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      sideDrawerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [show]);
  return mobileMenuTransition(({ x }, on) =>
    on ? (
      <div
        className={`w-screen overflow-x-hidden fixed inset-0 z-50 ${screen}`}
      >
        <animated.div
          className="relative max-w-md z-20"
          style={{ transform: x.to((value) => `translateX(${value}%)`) }}
        >
          <div
            ref={sideDrawerRef}
            className="h-screen overflow-y-auto spacebar-hide bg-neutral-100 shadow-xl flex flex-col"
          >
            <div
              className={`${
                overflow ? "shadow-md" : "shadow-none"
              } transition-shadow duration-300 min-h-[73px] sticky top-0 z-20 bg-neutral-100 flex items-center border-b border-neutral-100`}
            >
              <div
                onClick={() => setShow(false)}
                className="w-fit px-4 text-xl text-primary-500 cursor-pointer"
              >
                <Button type="icon" icon={!icon ? faXmark : icon} />
              </div>
            </div>
            <div className="flex flex-col grow">{children}</div>
          </div>
        </animated.div>
        <Scrium show={show} setShow={setShow} />
      </div>
    ) : (
      ""
    )
  );
}

function MyAccount({ sm, points, currency }) {
  const links = [
    {
      title: "Points Activity",
      href: "",
    },
    {
      title: "My Rewards",
      href: "",
    },
  ];
  return !sm ? (
    <>
      <div className="flex flex-col gap-6 p-8 mt-1 rounded-lg bg-white shadow-elevation-md">
        <ul className="flex flex-col gap-4">
          {links.map(({ href, title }, i) => (
            <li key={`${title}${i}`}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
        <Button
          type="secondary"
          size="md"
          width="w-[240px]"
          icon={faArrowRightToBracket}
        >
          Log out
        </Button>
      </div>
    </>
  ) : (
    <>
      <div className="flex flex-col gap-6 grow pb-8">
        <div className="py-6 px-4 flex flex-col gap-1 bg-primary-100 w-full">
          <p>You have</p>
          <span className="font-bold text-lg">
            {points} {currency}
          </span>
        </div>
        <div className="px-4 flex flex-col grow">
          <ul className="flex flex-col gap-4 grow">
            {links.map(({ href, title }, i) => (
              <li key={`${title}${i}`}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
          <Button
            type="secondary"
            size="md"
            width="w-full"
            icon={faArrowRightToBracket}
          >
            Log out
          </Button>
        </div>
      </div>
    </>
  );
}

function generateRandomNumbers() {
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const firstNumber = generateRandomNumber(1, 9);
  const remainingNumbers = Array.from({ length: 6 }, () =>
    generateRandomNumber(0, 9)
  );
  const allNumbers = [firstNumber, ...remainingNumbers].join("");
  const formattedNumbers = allNumbers.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return formattedNumbers;
}

export default Navbar;
export { menu, account };
