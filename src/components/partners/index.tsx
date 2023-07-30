import Image from "next/image";
import { partnersLogoList } from "./data";
import styles from "./index.module.css";

export default function Partners() {
  return (
    <div className="pb-[80px] mt-[10px] relative">
      <div className={styles.backgroundPartners}></div>
      <div className="max-w-[1200px] px-[15px] mx-auto">
        <p className="headingPrimary !text-white !pt-[150px] mb-[30px]">
          Insurance Direct Billing
        </p>

        <p className="leading-[20px] text-[16px] text-white mb-[10px]">
          We've partnered with 40+ insurance carriers in order to provide our
          patients with affordable access to our care services.
        </p>

        <div className="flex flex-wrap">
          {partnersLogoList.map((partnerLogo, index) => (
            <div className="mt-[15px] mx-[7px] w-[177px] h-[100px]" key={index}>
              <div className="w-full h-full bg-white flex items-center justify-center rounded-[10px]">
                <Image
                  src={partnerLogo}
                  alt={"Partner Logo " + index}
                  width={0}
                  height={0}
                  sizes="10vw"
                  className="h-[70px] w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
