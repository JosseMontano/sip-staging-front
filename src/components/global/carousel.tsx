import { useRef, useState } from "react";
import styled from "@/styles/global/carousel.module.css";

interface Params {
  slide: any;
  children: JSX.Element;
}

function Carousel({ slide, children }: Params) {
  const slidesContainer = useRef<HTMLDivElement>(null);
  const metSlide = (operation: string) => {
    const slideWidth = slide.current?.clientWidth;
    if (operation == "-") {
      slidesContainer.current!.scrollLeft -= slideWidth!;
      return;
    }
    slidesContainer.current!.scrollLeft += slideWidth!;
  };

  const handlePrev = () => metSlide("-");
  const handleNext = () => metSlide("+");

  const JSXBtn = [
    {
      click: handlePrev,
      id: "prev",
      txt: "<",
    },
    {
      click: handleNext,
      id: "next",
      txt: ">",
    },
  ];

  return (
    <div className={styled.container}>
      {JSXBtn.map((v) => (
        <button className={styled.btn} onClick={v.click} id={v.id} key={v.id}>
          <span>{v.txt}</span>
        </button>
      ))}
      <div className={styled.container_slide} ref={slidesContainer}>
        {children}
      </div>
    </div>
  );
}

export default Carousel;
