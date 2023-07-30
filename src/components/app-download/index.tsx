import Image from "next/image";
import styles from "./index.module.css";
export default function AppDownload() {
  return (
    <div className="mx-[-20px] mb-[-6px]">
      <div className="w-full relative">
        <div className={styles.getInTouchFooter}>
          <Image
            src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/icons/smart-clinic/virtual-care-icon.svg"
            alt="Virtual care icon"
            width={161}
            height={161}
            className="absolute right-[140px] top-[150px]"
          />

          <Image
            src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/images/smart-clinic/doctor-get-in-touch.png"
            alt="Doctor-get-in-touch"
            width={345}
            height={384}
            className="absolute right-[320px] bottom-0"
          />

          <Image
            src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/icons/smart-clinic/message-icon.svg"
            alt="message-icon"
            width={109}
            height={110}
            className="absolute right-[630px] bottom-[67px]"
          />

          <div className="max-w-[1200px] mx-auto">
            <div className="pl-[103px]">
              <p className="text-white font-bold text-[30px] mb-[30px] w-[60%]">
                Want to explore Jio Health? <br />
                Download now!{" "}
              </p>

              <div className="flex gap-4">
                <Image
                  src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/icons/app-store-en.svg"
                  alt="app store icon"
                  width={160}
                  height={130}
                  className="cursor-pointer"
                />

                <Image
                  src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/icons/google-play-en.svg"
                  alt="google play icon"
                  width={160}
                  height={130}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
