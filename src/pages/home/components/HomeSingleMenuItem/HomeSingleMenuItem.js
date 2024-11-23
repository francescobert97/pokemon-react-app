import React, { useEffect, useRef, useState } from "react";
import styles from "./HomeSingleMenuItem.module.css";
import { layoutImgs } from "../../../../utils/types-map";
import { Link } from "react-router-dom";

const HomeSingleMenuItem = ({ homeContents, updateScroll }) => {
    console.log(updateScroll[0])
  const [isBiggerScreen, setIsBiggerScreen] = useState(true);
  const scrollDivRef = useRef(null);
  const scroller = useRef(null);

  useEffect(() => {
    setContentsDependingOnWidthScreen();
    window.addEventListener("resize", () =>
      setContentsDependingOnWidthScreen()
    );
    const scrollDiv = scrollDivRef.current;

    scrollDivRef.current.addEventListener("wheel", switchContent);
    window.addEventListener("keydown", scrollContentByArrowKeys);
    scrollDivRef.current.addEventListener("click", handleClick);
    return () => {
      scrollDiv.removeEventListener("click", handleClick);
    };
  }, []);
  const handleClick = (e) =>
    e.clientX > scrollDivRef.current.offsetWidth / 2
      ? updateScroll[1]((prevState) => (prevState + 1) % homeContents.length)
      : updateScroll[1]((prevState) =>
          prevState > 0 ? prevState - 1 : homeContents.length - 1
        );

  const scrollContentByArrowKeys = (e) => {
    if (e.key === "ArrowRight")
      updateScroll[1]((prevState) => (prevState + 1) % homeContents.length);
    if (e.key === "ArrowLeft")
      updateScroll[1]((prevState) =>
        prevState > 0 ? prevState - 1 : homeContents.length - 1
      );
  };
  const setContentsDependingOnWidthScreen = () =>
    window.innerWidth > 768
      ? setIsBiggerScreen(true)
      : setIsBiggerScreen(false);
  const switchContent = (e) => {
    const delta = e.deltaY;
    const roundedDelta = Math.round(Math.abs(delta) * 10) / 10;

    if (roundedDelta > 3) return;

    if (scroller.current) {
      return;
    }
    if (!scroller.current) {
      scroller.current = setTimeout(() => {
        scroller.current = null;
        delta > 0
          ? updateScroll[1](
              (prevState) => (prevState + 1) % homeContents.length
            )
          : updateScroll[1]((prevState) =>
              prevState > 0 ? prevState - 1 : homeContents.length - 1
            );
      }, 1000);
    }
  };

  return (
    <div
      ref={scrollDivRef}
      className={`${styles.scrollHomeMenu} no-bar w-100  d-flex flex-column flex-md-row align-items-center justify-content-evenly`}
    >
      <div className="position-relative">
        <div className={`${styles.ring}`}>
          <img className="w-100 h-100" src={layoutImgs.ring} alt="ring-image" />
        </div>
        <img
          className="absolute-center-element"
          src={layoutImgs[homeContents[updateScroll[0]].bg]}
          alt="icon home menù"
        />
      </div>

      <div
        className={`${styles.contentInfoBox} d-flex flex-column flex-md-row position-relative gap-5 text-dark`}
      >
        <img
          src={
            isBiggerScreen
              ? layoutImgs.pokemonTitlebarLarge
              : layoutImgs.pokemonTitlebar
          }
          alt="custom box"
        />
        <div className="position-absolute w-25 d-flex flex-column ">
          <h1 className="custom-text-shadow fs-l-1 fs-4 fs-md-3 mb-l-3">
            {homeContents[updateScroll[0]]?.nameSection}
          </h1>
          {isBiggerScreen && (
            <p className=" custom-text-shadow ">
              {homeContents[updateScroll[0]]?.description}
            </p>
          )}
        </div>

     
      </div>
    </div>
  );
};

export default HomeSingleMenuItem;

