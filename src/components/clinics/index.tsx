"use client";
import { useState } from "react";
import ClinicCard from "./ClinicCard";
import ClinicLargeCard from "./ClinicLargeCard";
import { HCMCClinics, tabOptions } from "./data";
import styles from "./index.module.css";

export default function Clinics() {
  const [activeTab, setActiveTab] = useState(tabOptions[0]);
  return (
    <div className={styles.clinicsWrapper}>
      <div className="w-[1140px] mx-auto">
        <div className="flex items-start justify-between mb-[40px]">
          <p className="headingPrimary">Explore our Smart Clinics</p>

          <div
            className={styles.switchButton}
            style={{
              backgroundPosition: activeTab.activeClass,
            }}
          >
            {tabOptions.map((tabOption, index) => (
              <span
                className={`${
                  tabOption.value === activeTab.value &&
                  `!text-white !font-bold`
                }`}
                key={index}
                onClick={() => setActiveTab(tabOption)}
              >
                {tabOption.label}
              </span>
            ))}
          </div>
        </div>

        {activeTab === tabOptions[0] && (
          <div className="flex gap-5">
            {HCMCClinics.map((clinic, index) => (
              <ClinicCard clinic={clinic} key={index} />
            ))}
          </div>
        )}

        {activeTab === tabOptions[1] && <ClinicLargeCard />}
      </div>
    </div>
  );
}
