import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@/components/base/Button";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductImgSwiper = ({ images }) => {
  const ref = useRef();
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (ref.current = swiper)}
      >
        {images?.map((item, key) => (
          <SwiperSlide key={key}>
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-2">
        <Button
          size="sm"
          variant="light"
          onClick={() => ref.current.slidePrev()}
        >
          Önceki
        </Button>
        <Button
          size="sm"
          variant="light"
          onClick={() => ref.current.slideNext()}
        >
          Sonraki
        </Button>
      </div>
    </>
  );
};

export default ProductImgSwiper;
