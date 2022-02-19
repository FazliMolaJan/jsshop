import Image from "next/image";
import { TBrandsAPI } from "./Svgs";
import styles from "../styles/Brands.module.css";
export default function TrustBrands() {
  return (
    <>
        <div className={styles.trusted_section}>
            <div className={styles.trust_title}>
                <h1 className={styles.title}>TRUSTED BY THE BEST FRONTEND TEAMS</h1>
            </div>
            <div className={styles.trust_brands}>
                {TBrandsAPI.map((val,ind) => (
                    <div key={ind} className={styles.brand_item}>
                        <Image src={val.brandSvg} alt="brands/names" priority decoding="async" width={45} height={45} objectFit="contain" />
                    </div>
                ))}
            </div>
        </div>
    </>
  );
};
