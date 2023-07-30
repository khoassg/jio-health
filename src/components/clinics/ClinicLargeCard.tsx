import Image from "next/image";
import Button from "../common/button";
import styles from "./index.module.css";

export default function ClinicLargeCard() {
  return (
    <div className={styles.clinicLargeCardWrapper}>
      <div className={styles.clinicLargeCardImage}></div>
      <div className={styles.clinicLargeCardContent}>
        <p className={styles.clinicLargeCardTitle}>
          Capital Place Smart Clinic
        </p>
        <div className="flex items-start gap-2 mb-[15px]">
          <Image
            alt="address icon"
            src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/icons/smart-clinic/location.svg"
            width={10}
            height={12}
          />
          <p className="text-[16px] leading-[18px] font-normal text-[#4a4a4a]">
            Basement B1, Capital Place, 29 Lieu Giai, Ngoc Khanh, Ba Dinh, Ha
            Noi
          </p>
        </div>

        <div className="flex items-start gap-2 mb-[15px]">
          <Image
            alt="clock icon"
            src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/icons/smart-clinic/clock.svg"
            width={12}
            height={12}
          />
          <p className="text-[16px] leading-[18px] font-normal text-[#4a4a4a]">
            Everyday, 07:00 - 20:00
          </p>
        </div>

        <div className="bg-lightBlue rounded-[100px] py-[8px] px-[16px] w-max ml-[20px] mb-[20px]">
          <p className="text-[12px] text-primary w-max">
            Next Available Time{" "}
            <span className="font-medium">Today at 12:45</span>
          </p>
        </div>

        <div className="flex gap-4">
          <Button className="bg-[#2320D4] !px-[24px] !py-[12px]">
            <p className="text-[16px] text-white font-medium">Call Now</p>
          </Button>
          <Button className="bg-[#1DCBB6] !px-[24px] !py-[12px]">
            <p className="text-[16px] text-white font-medium">
              Book an Appointment
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}
