"use client";
import Image from "next/image";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { ClinicalSpecialties } from "./data";
import styles from "./index.module.css";

export default function DropdownBlog() {
  const [isShowBlogDropdown, setIsShowBlogDropdown] = useState(false);

  return (
    <div className="relative">
      <div
        className={`${styles.navItemContainer} ${
          isShowBlogDropdown && styles.active
        }`}
        onMouseEnter={() => setIsShowBlogDropdown(true)}
        onMouseLeave={() => setIsShowBlogDropdown(false)}
      >
        <p className={styles.navItem}>Blog</p>
        <MdExpandMore className={styles.navItem} />
      </div>

      {isShowBlogDropdown && (
        <div
          className={styles.dropdownContainer}
          onMouseEnter={() => setIsShowBlogDropdown(true)}
          onMouseLeave={() => setIsShowBlogDropdown(false)}
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
