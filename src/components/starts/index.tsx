import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

interface Params {
  getAmountStarts: (v: number) => void;
}

const Starts = ({ getAmountStarts }: Params) => {
  const [puntuation, setPuntuation] = useState(0);
  const [hover, setHover] = useState(0);

  const handleHover = (num: number) => {
    setHover(num);
  };

  const handleClick = (num: number) => {
    setPuntuation(num);
    getAmountStarts(num);
  };

  function showStar(v: number) {
    return (
      <label
        key={v}
        onMouseEnter={() => handleHover(v)}
        onMouseLeave={() => handleHover(0)}
        onClick={() => handleClick(v)}
      >
        <AiFillStar />
      </label>
    );
  }

  return (
    <>
      <div>
        <div className="star-widget">
          {[1, 2, 3, 4, 5].map((v) => showStar(v))}
        </div>
      </div>

      <style jsx global>{`
        .star-widget {
          display: flex;
          justify-content: center;
        }
        .star-widget label {
          font-size: 40px;
          color: #444;
          padding: 10px;
          transition: all 0.2 ease;
        }
        label:nth-child(-n + ${hover}) {
          color: #fd4;
          cursor: pointer;
        }
        label:nth-child(-n + ${puntuation}) {
          color: #fd4;
        }
      `}</style>
    </>
  );
};

export default Starts;
