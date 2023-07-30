"use client";
import Image from "next/image";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { ClinicalSpecialties } from "./data";
import styles from "./index.module.css";

export default function DropdownHealthPlans() {
  const [isShowHPDropdown, setIsShowHPDropdown] = useState(false);
  return (
    <div className="relative">
      <div
        className={`${styles.navItemContainer} ${
          isShowHPDropdown && styles.active
        }`}
        onMouseEnter={() => setIsShowHPDropdown(true)}
        onMouseLeave={() => setIsShowHPDropdown(false)}
      >
        <p className={styles.navItem}>Health Plans</p>
        <MdExpandMore className={styles.navItem} />
      </div>

      {isShowHPDropdown && (
        <div
          className={styles.dropdownContainer}
          onMouseEnter={() => setIsShowHPDropdown(true)}
          onMouseLeave={() => setIsShowHPDropdown(false)}
        >
          <div className={styles.dropdownBox}>
            <div className="flex flex-col">
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
      )}
    </div>
  );
}
