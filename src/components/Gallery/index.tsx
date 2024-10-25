import { useEffect, useState } from "react";

import * as s from "./styles";
import "./styles.css";

type GalleryProps = {
  children: React.ReactNode[];
  autoPlay?: boolean;
};

const Gallery: React.FC<GalleryProps> = ({ children, autoPlay = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState<number | null>(null);

  useEffect(() => {
    if (autoPlay && slideDone) {
      setSlideDone(false);
      setTimeID(
        window.setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [autoPlay, slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID && timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (autoPlay && !slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <s.Gallery>
      <div
        className="container__slider"
        onMouseEnter={AutoPlayStop}
        onMouseLeave={AutoPlayStart}
      >
        {children.map((item, index) => {
          return (
            <div
              className={
                "slider__item slider__item-active-" + (activeIndex + 1)
              }
              key={index}
            >
              {item}
            </div>
          );
        })}
        <s.GalleryButton
          prev
          onClick={(e) => {
            e.preventDefault();
            slideNext();
          }}
        />

        <s.GalleryButton
          onClick={(e) => {
            e.preventDefault();
            slidePrev();
          }}
        />
      </div>
    </s.Gallery>
  );
};

export default Gallery;
