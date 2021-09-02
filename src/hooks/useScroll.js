import { useEffect, useState } from "react";

export default function useHeader() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  function handleScroll() {
    let currentPosition = window.pageYOffset;

    if (currentPosition > scrollY) {
      setScrollActive(true); //위
    } else {
      setScrollActive(false); //아래
    }

    setScrollY(currentPosition <= 0 ? 0 : currentPosition);
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return { scrollY, scrollActive };
}
