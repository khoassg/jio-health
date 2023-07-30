"use client";
import ClinicIcon from "@/assets/images/banner/banner-clinic-icon.svg";
import HeartIcon from "@/assets/images/banner/heart-icon.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import type SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../common/button";
import { slides } from "./data";
import styles from "./index.module.css";

export default function Banner() {
  const swiperRef = useRef<SwiperCore>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (containerRef.current) {
        // Get the width of the container
        const containerWidth = containerRef.current.offsetWidth;

        // Fixed width and height of each slide
        const slideWidth = 1100;

        // Calculate the maximum number of slides that can fit inside the container
        const maxSlidesPerView = containerWidth / (slideWidth + 20);

        // Set the number of slides to be displayed based on the available width
        setSlidesPerView(Math.min(maxSlidesPerView, 3)); // For example, show a maximum of 3 slides
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
    <div className="relative flex justify-end mt-[8px]">
      <div className="h-auto w-11/12 overflow-x-hidden" ref={containerRef}>
        <Swiper
          slidesPerView={slidesPerView}
          modules={[Autoplay, Navigation]}
          loop
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-[30px] w-[1100px] h-[680px] overflow-hidden">
                <Image
                  src={slide}
                  alt={index.toString()}
                  width={1100}
                  height={680}
                />
              </div>
            </SwiperSlide>
          ))}

          <div
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-white absolute top-[50%] z-10 left-[1085px] rounded-full w-[50px] h-[50px] grid place-items-center cursor-pointer translate-y-[-50%]"
          >
            <div className="opacity-50">
              <MdNavigateNext size={35} />
            </div>
          </div>
        </Swiper>
      </div>

      <div className={styles.CTAWrapper}>
        <div className="relative w-max">
          <p className={styles.CTAText}>
            Over 300K Patients <br /> trust Jio Health
          </p>
          <div className="w-max relative">
            <Button className={styles.CTA}>Book Appointment</Button>
          </div>

          <Image
            src={HeartIcon.src}
            width={78}
            height={78}
            alt="Heart Icon"
            className="top-[-100px] left-[-50px] absolute z-100"
          />

          <Image
            src={ClinicIcon.src}
            width={104}
            height={104}
            alt="Clinic Icon"
            className="bottom-[-30px] right-[-90px] absolute z-100"
          />
        </div>
      </div>
    </div>
  );
}
