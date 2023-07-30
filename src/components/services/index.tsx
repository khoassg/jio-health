"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { serviceList } from "./data";
import "./index.module.css";
import styles from "./index.module.css";

export default function Services() {
  const swiperRef = useRef<SwiperCore>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (containerRef.current) {
        // Get the width of the container
        const containerWidth = containerRef.current.offsetWidth;

        // Fixed width and height of each slide
        const slideWidth = 312;

        // Calculate the maximum number of slides that can fit inside the container
        const maxSlidesPerView = containerWidth / (slideWidth + 20);
        console.log("maxSlidesPerView: ", maxSlidesPerView);

        // Set the number of slides to be displayed based on the available width
        setSlidesPerView(Math.min(maxSlidesPerView, 5)); // For example, show a maximum of 3 slides
      }
    };

    // Call the function initially and add event listener for window resize
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <div className="w-full relative">
      <div className="relative px-[15px] w-full">
        <div className="flex gap-2 w-full h-[416px]" ref={containerRef}>
          <Swiper
            slidesPerView={slidesPerView}
            modules={[Navigation]}
            onBeforeInit={(swiper) => (swiperRef.current = swiper)}
            centeredSlides
            initialSlide={1}
          >
            {serviceList.map((service, index) => (
              <SwiperSlide key={index}>
                {(params) => (
                  <div
                    className="mx-[10px] p-[30px] rounded-[20px] relative w-[312px] h-[416px] overflow-hidden cursor-pointer"
                    key={index}
                    style={{
                      backgroundColor: `${service.backgroundColor}`,
                      opacity:
                        params.isActive || params.isNext || params.isPrev
                          ? 1
                          : 0.5,
                    }}
                  >
                    <p className="text-primary text-[30px] font-medium">
                      {service.title}
                    </p>
                    <Image
                      alt={service.title}
                      src={service.imageUrl}
                      width={312}
                      height={416}
                      className="absolute top-0 left-0"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div
        className={styles.prevCursor}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <div className="w-[320px] h-[416px] absolute top-0 left-0 z-10"></div>
      </div>

      <div
        className={styles.nextCursor}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <div className="w-[312px] h-[416px] absolute top-0 right-0 z-10"></div>
      </div>
    </div>
  );
}
