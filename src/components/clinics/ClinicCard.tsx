import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import Button from "../common/button";
import styles from "./index.module.css";

export type ClinicCardType = {
  image: string;
  name: string;
  shortAddress: string;
  fullAddress: string;
  workingTime: string;
  availableTime: string;
};

interface ClinicCardProps {
  clinic: ClinicCardType;
}

export default function ClinicCard({ clinic }: ClinicCardProps) {
  return (
    <div className={styles.clinicCardWrapper}>
      <div
        className={styles.clinicCardImage}
        style={{
          backgroundImage: `url(${clinic.image})`,
        }}
      ></div>
      <div className="flex flex-col px-[22px] pt-[20px] pb-[10px]">
        <div className="flex justify-between items-center mb-2">
          <p className="text-[18px] font-bold text-primary">{clinic.name}</p>
          <div className={styles.clinicShortInfoRow}>
            <div className="w-[30px] h-[30px] rounded-full bg-white grid place-items-center shadow-lg">
              <MdNavigateNext />
            </div>
          </div>
        </div>
        <div className={styles.clinicShortInfoRow}>
          <p className="text-[16px] text-[#4a4a4a] leading-[18px] font-normal">
            {clinic.shortAddress}
          </p>
        </div>

        <div className={styles.clinicInfoRow}>
          <div className="flex items-start gap-2 mb-[10px]">
            <Image
              alt="address icon"
              src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/icons/smart-clinic/location.svg"
              width={10}
              height={12}
            />
            <p className="text-[16px] leading-[18px] font-normal text-[#4a4a4a]">
              {clinic.fullAddress}
            </p>
          </div>

          <div className="flex items-start gap-2 mb-[10px]">
            <Image
              alt="clock icon"
              src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/icons/smart-clinic/clock.svg"
              width={12}
              height={12}
            />
            <p className="text-[16px] leading-[18px] font-normal text-[#4a4a4a]">
              {clinic.workingTime}
            </p>
          </div>

          <div className="bg-lightBlue rounded-[100px] py-[8px] px-[16px] w-max mb-[10px]">
            <p className="text-[12px] text-primary w-max">
              Next Available Time{" "}
              <span className="font-medium">{clinic.availableTime}</span>
            </p>
          </div>

          <div className="flex gap-4">
            <Button className="bg-[#2320D4] !px-[16px] !py-[8px]">
              <p className="text-[14px] text-white">Call Now</p>
            </Button>
            <Button className="bg-[#1DCBB6] !px-[16px] !py-[8px]">
              <p className="text-[14px] text-white">Book an Appointment</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
