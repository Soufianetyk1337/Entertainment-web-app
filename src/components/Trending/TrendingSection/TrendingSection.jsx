import React from "react";
import TrendingVideo from "../TrendingVideo/TrendingVideo";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useBreakpoint from "@/hooks/useBreakpoints";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/css/effect-fade";
import "./TrendingSection.scss";
const slidesCount = (width) => {
  let count = 0;
  switch (width) {
    case "xs":
    case "sm":
      count = 1;
      break;
    case "md":
      count = 2;
      break;
    case "lg":
      count = 3;
      break;
    default:
      break;
  }
  return count;
};
const TrendingSection = ({ videos }) => {
  const breakpoint = useBreakpoint();
  return (
    <section className="trending">
      <h2 className="trending__title">Trending</h2>

      <div className="trending__videos" role="tablist">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          // slidesPerView={3}
          slidesPerView={slidesCount(breakpoint)}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          effect="fade"
          role="tab"
        >
          {videos.map((video) => {
            return (
              <SwiperSlide key={video.title}>
                <article key={video.title} className="trending__video">
                  <TrendingVideo video={video} />
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendingSection;
