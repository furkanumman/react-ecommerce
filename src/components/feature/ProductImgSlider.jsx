import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Button from "@/components/base/Button";
import { useState } from "react";

const ProductImgSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    drag: true,
    slides: {
      perView: 1,
      spacing: 8,
    },
    slideChanged(e) {
      setCurrentSlide(e?.track?.details?.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const handlePrev = () => {
    instanceRef.current?.prev();
  };
  const handleNext = () => {
    instanceRef.current?.next();
  };

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {images?.map((item, index) => (
          <div className="keen-slider__slide shrink-0" key={index}>
            <img width={384} src={item} alt="" />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex gap-4">
          <Button size="sm" variant="light" onClick={handlePrev}>
            Geri
          </Button>
          <Button size="sm" variant="light" onClick={handleNext}>
            İleri
          </Button>
        </div>
      )}
    </>
  );
};

export default ProductImgSlider;
