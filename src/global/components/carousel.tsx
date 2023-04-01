import { useRef, useState } from "preact/hooks";
import styled from "../styles/carousel.module.css";

interface Params {
  slide: any;
  children: any;
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
    <div class={styled.container}>
      {JSXBtn.map((v) => (
        <button class={styled.btn} onClick={v.click} id={v.id} key={v.id}>
          <span>{v.txt}</span>
        </button>
      ))}
      <div class={styled.container_slide} ref={slidesContainer}>
        {children}
      </div>
    </div>
  );
}

export default Carousel;
