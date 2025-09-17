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

import Picture1 from "/public/img/1.jpeg";
import Picture2 from "/public/img/2.jpeg";
import Picture3 from "/public/img/3.jpg";
import Picture4 from "/public/img/4.jpg";
import Picture5 from "/public/img/5.jpg";
import Picture6 from "/public/img/6.jpg";
import Picture7 from "/public/img/7.jpeg";
import adorno from "/public/img/adorno_galery.svg";

const DEFAULT_IMAGES = [
  Picture1,
  Picture2,
  Picture3,
  Picture4,
  Picture5,
  Picture6,
  Picture7,
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

      <div>
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
                className="block w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-[100vw] py-28">
        <img src={adorno} alt="adorno" />
      </div>
    </section>
  );
}
