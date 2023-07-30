import Image from "next/image";
import { ClinicalSpecialties } from "./data";
import styles from "./index.module.css";

export default function DropdownHealthPlans() {
  return (
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
  );
}
