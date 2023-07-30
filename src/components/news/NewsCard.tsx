import Image from "next/image";
import styles from "./index.module.css";
interface NewsCardProps {
  iconUrl: string;
}
export default function NewsCard({ iconUrl }: NewsCardProps) {
  return (
    <div className={styles.newsCardWrapper}>
      <Image
        src={iconUrl}
        alt={iconUrl}
        width={0}
        height={0}
        sizes="20vw"
        className="h-[60px] w-auto"
      />
    </div>
  );
}
