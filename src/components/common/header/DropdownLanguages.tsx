import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { Languages } from "./data";
import styles from "./index.module.css";

export default function DropdownLanguages() {
  const [selectedLanguage, setSelectedLanguage] = useState(Languages[0]);
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <div
        className="flex gap-1 items-center border-none bg-lightBlue rounded-full px-2 py-1"
        onClick={() => setIsShowDropdown((prev) => !prev)}
      >
        <Image
          src={selectedLanguage.icon}
          alt={selectedLanguage.title}
          width={20}
          height={20}
          className="rounded-full"
        />
        <p className="">{selectedLanguage.value}</p>
        <MdExpandMore className="" />
      </div>

      {isShowDropdown && (
        <div className={styles.dropdownContainer}>
          <div className={styles.languageBox}>
            <div className="flex flex-col">
              {Languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center hover:bg-lightBlue px-4 py-4 cursor-pointer"
                  onClick={() => (
                    setSelectedLanguage(lang), setIsShowDropdown(false)
                  )}
                >
                  <Image
                    src={lang.icon}
                    alt={lang.title}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <p className="text-[14px] font-normal text-primary">
                    {lang.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
