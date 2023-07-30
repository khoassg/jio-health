"use client";

import CoronaVirusBlueIcon from "@/assets/images/header/covid-virus-icon-blue.svg";
import CoronaVirusRedIcon from "@/assets/images/header/covid-virus-icon-red.svg";
import JioHealthLogo from "@/assets/images/header/typo-logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../button";
import DropdownBlog from "./DropdownBlog";
import DropdownCareServices from "./DropdownCareServices";
import DropdownHealthPlans from "./DropdownHealthPlans";
import DropdownLanguages from "./DropdownLanguages";
import styles from "./index.module.css";

export default function Header() {
  const [isChildFixed, setIsChildFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setIsChildFixed(true);
      } else {
        setIsChildFixed(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`relative`}>
      <div className="relative h-[80px] z-1 bg-primary py-[15px] overflow-hidden">
        <div className="flex items-center">
          <div className="w-7/12 px-[15px] text-right">
            <div className=" relative inline-block">
              <p className="text-white text-[30px] font-bold">
                Latest updates on COVID-19
              </p>
              <Image
                src={CoronaVirusRedIcon.src}
                width={68}
                height={66}
                alt="corona-red"
                className="absolute top-[-34px] left-[-83px]"
              />
              <Image
                src={CoronaVirusBlueIcon.src}
                width={105}
                height={105}
                alt="corona-blue"
                className="absolute right-[-42px] bottom-[-69px]"
              />
            </div>
          </div>

          <div className="w-5/12 px-[15px] relative">
            <Button className="bg-[#fff] text-primary">Learn More</Button>

            <Image
              src={CoronaVirusRedIcon.src}
              width={104}
              height={101}
              alt="corona-red"
              className="absolute bottom-[-55px] right-[194px]"
            />
            <Image
              src={CoronaVirusBlueIcon.src}
              width={170}
              height={170}
              alt="corona-blue"
              className="absolute right-[46px] top-[-117px]"
            />
          </div>
        </div>
      </div>

      <div
        className={`${
          isChildFixed && "fixed top-0 left-0 right-0 z-[1000] mb-[70px]"
        }`}
      >
        <header className="h-[70px] px-[20px] bg-white shadow-md">
          <nav className="py-[15px] flex items-center justify-between">
            <a href="/" className="ml-[103px]">
              <Image
                src={JioHealthLogo.src}
                width={186}
                height={27}
                alt="logo"
              />
            </a>

            <div className="w-max flex items-center gap-2">
              <div className={styles.navItemContainer}>
                <p className={styles.navItem}>Home</p>
              </div>

              <DropdownCareServices />

              <div className={styles.navItemContainer}>
                <p className={styles.navItem}>Pharmacy</p>
              </div>

              <DropdownHealthPlans />

              <div className={styles.navItemContainer}>
                <p className={styles.navItem}>Doctors</p>
              </div>

              <DropdownBlog />

              <DropdownLanguages />

              <Button className="bg-[#30b5a1] text-white">Book Now</Button>
              <Button className="bg-[#2320D4] text-white">Download App</Button>
            </div>
          </nav>
        </header>
      </div>
      {isChildFixed && <div className="h-[70px]"></div>}
    </div>
  );
}
