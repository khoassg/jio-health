import Image from "next/image";
import styles from "./index.module.css";

export interface HealthResourceType {
  iconUrl: string;
  name: string;
  topics: string;
}
interface HealthResourceCardProps {
  item: HealthResourceType;
}
export default function HealthResourceCard({ item }: HealthResourceCardProps) {
  return (
    <div className={styles.healthResourceCardWrapper}>
      <div className="flex flex-wrap gap-2">
        <div className="outline-0 flex items-center justify-center flex-[0_0_auto] w-auto max-w-[100%]">
          <Image
            src={item.iconUrl}
            width={0}
            height={0}
            sizes="10vw"
            className="w-[30px] h-auto"
            alt={item.name}
          />
        </div>

        <div className="flex items-center justify-center">
          <div>
            <p className="text-[#4a4a4a] font-bold text-[16px]">{item.name}</p>
            <p className="text-[#999] font-bold text-[14px]">{item.topics}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
