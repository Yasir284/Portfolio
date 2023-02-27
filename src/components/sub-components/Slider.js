import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCube, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import "swiper/element/css/autoplay";
import "./Slider.css";

export default function Slider({ images }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={200}
      loop={true}
      effect={"cube"}
      grabCursor={true}
      autoplay={{ delay: 5000 }}
      pagination={images?.length > 1 ? { clickable: true } : false}
      keyboard={{ enabled: true }}
      navigation={images?.length > 1 ? true : false}
      modules={[EffectCube, Pagination, Navigation, Autoplay]}
      className="w-80 rounded-md bg-transparent sm:w-96"
    >
      {images &&
        images.map((img, index) => (
          <SwiperSlide key={index} className="w-full rounded-md">
            <div className="flex items-center justify-center">
              <img
                className="mx-auto rounded-md"
                src={img}
                alt={"image " + index}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
