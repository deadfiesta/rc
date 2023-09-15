import React, { useEffect } from "react";

const ChangeFavIcon = () => {
  const faviconEl = document.querySelector("link[rel='icon']");
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function themeChange(event) {
    event.matches
      ? faviconEl.setAttribute("href", "/ascenda-light.svg")
      : faviconEl.setAttribute("href", "/ascenda-dark.svg");
  }

  useEffect(() => {
    mediaQuery.addEventListener("change", themeChange);
    return () => mediaQuery.removeEventListener("change", themeChange);
  }, []);

  return;
};

export default ChangeFavIcon;
