import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

// ✅ IMPORTANTE: mantenha os CSS do Swiper
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

type GalleryCarouselProps = {
  images?: string[];
};

import Picture1 from "/img/elysius/8.png";
import Picture2 from "/img/elysius/9.png";
import Picture3 from "/img/elysius/10.png";
import Picture4 from "/img/elysius/11.png";
import Picture5 from "/img/elysius/12.png";
import Picture6 from "/img/elysius/13.png";
import Picture7 from "/img/elysius/14.png";
import Picture8 from "/img/elysius/1.png";
import Picture9 from "/img/elysius/2.png";
import Picture10 from "/img/elysius/3.png";
import Picture11 from "/img/elysius/4.png";
import Picture12 from "/img/elysius/5.png";
import Picture13 from "/img/elysius/6.png";
import Picture14 from "/img/elysius/7.png";
import Picture15 from "/img/elysius/15.png";
import Picture16 from "/img/elysius/16.png";
import Picture17 from "/img/elysius/17.png";
import Picture18 from "/img/elysius/18.png";
import Picture19 from "/img/elysius/19.png";
import Picture20 from "/img/elysius/20.png";
import Picture21 from "/img/elysius/21.png";
import Picture22 from "/img/elysius/22.png";
import Picture23 from "/img/elysius/23.png";
import adorno from "/img/adorno_galery.svg";

const DEFAULT_IMAGES = [
  Picture1,
  Picture2,
  Picture3,
  Picture4,
  Picture5,
  Picture6,
  Picture7,
  Picture8,
  Picture9,
  Picture10,
  Picture11,
  Picture12,
  Picture13,
  Picture14,
  Picture15,
  Picture16,
  Picture17,
  Picture18,
  Picture19,
  Picture20,
  Picture21,
  Picture22,
  Picture23,
];

export default function Gallery({
  images = DEFAULT_IMAGES,
}: GalleryCarouselProps) {
  return (
    <section id="gallery" className="w-screen  mb-10">
      <div className="w-[100vw] py-28">
        <img src={adorno} className="w-[100vw]" alt="adorno" />
      </div>

      <div className="container flex m-auto px-4 mb-8">
        <h3 className="font-glamore text-[48px]">Galeria</h3>
      </div>

      <div className="px-8">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor
          keyboard={{ enabled: true }}
          breakpoints={{
            769: { slidesPerView: 2, slidesPerGroup: 2 },
          }}
          scrollbar={{ draggable: true }}
          navigation
          pagination={{ clickable: true }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="w-full h-[70vh]">
          {images.map((src, i) => (
            <SwiperSlide
              key={src}
              className="flex items-center justify-center relative gap-4">
              <img
                src={src}
                alt={`slide-${i + 1}`}
                className="block w-full h-full object-contain"
                loading={i === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-[100vw] py-28">
        <img src={adorno} className="w-[100vw]" alt="adorno" />
      </div>
    </section>
  );
}
