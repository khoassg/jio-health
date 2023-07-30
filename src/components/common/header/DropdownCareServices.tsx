"use client";
import ClinicServiceIcon from "@/assets/images/header/clinic-service-icon.svg";
import HomeDoctorServiceIcon from "@/assets/images/header/home-visit-service-icon.svg";
import Image from "next/image";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import Button from "../button";
import { ClinicalSpecialties } from "./data";
import styles from "./index.module.css";

export default function DropdownCareServices() {
  const [isShowCSDropdown, setIsShowCSDropdown] = useState(false);
  return (
    <div className="relative">
      <div
        className={`${styles.navItemContainer} ${
          isShowCSDropdown && styles.active
        }`}
        onMouseEnter={() => setIsShowCSDropdown(true)}
        onMouseLeave={() => setIsShowCSDropdown(false)}
      >
        <p className={styles.navItem}>Care Services</p>
        <MdExpandMore className={styles.navItem} />
      </div>

      {isShowCSDropdown && (
        <div
          className={styles.dropdownContainer}
          onMouseEnter={() => setIsShowCSDropdown(true)}
          onMouseLeave={() => setIsShowCSDropdown(false)}
        >
          <div className={styles.dropdownBox}>
            <div className="flex gap-[60px]">
              <div className="flex flex-col gap-[14px]">
                <div className="flex gap-2 items-end">
                  <p className="text-[14px] text-primary leading-[14px]">
                    CLINICAL SPECIALTIES
                  </p>
                  <Image
                    src={ClinicServiceIcon.src}
                    width={15}
                    height={15}
                    alt="clinic service icon"
                  />
                </div>

                <Button className="bg-[#2320D4] text-white text-[14px] px-[20px] py-[10px] w-max">
                  View All Specialties
                </Button>

                <div>
                  {ClinicalSpecialties.map((service, index) => (
                    <div className={styles.wrapService} key={index}>
                      <div className={styles.wrapImg}>
                        <Image
                          src={service.icon}
                          width={23}
                          height={23}
                          alt={service.title}
                        />
                      </div>
                      <p className={styles.serviceTxt}>{service.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[14px]">
                <div className="flex gap-2 items-end">
                  <p className="text-[14px] text-primary leading-[14px]">
                    HOME DOCTOR SERVICES
                  </p>
                  <Image
                    src={HomeDoctorServiceIcon.src}
                    width={15}
                    height={15}
                    alt="home doctor service icon"
                  />
                </div>

                <Button className="bg-[#2320D4] text-white text-[14px] px-[20px] py-[10px] w-max">
                  View All Specialties
                </Button>

                <div>
                  {ClinicalSpecialties.map((service, index) => (
                    <div className={styles.wrapService} key={index}>
                      <div className={styles.wrapImg}>
                        <Image
                          src={service.icon}
                          width={23}
                          height={23}
                          alt={service.title}
                        />
                      </div>
                      <p className={styles.serviceTxt}>{service.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
