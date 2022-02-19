import Image from "next/image";
import styles from "../styles/Hero.module.css";
import { filterBtnAPI } from "./Svgs";

export default function Hero() {
  return (
    <>
      <div className="global_zindex">
        <div className={styles.hero_content}>
          <div className={styles.hero_text}>
            <p className={styles.text_p}>12 HOURS OF COURSES</p>
            <h1 className={styles.text_h1}>Learn best tools and platforms</h1>
            <p className={styles.text_p}>
              We focus on industry leading platforms so that you can be prepared
              for your next level jobs.
            </p>
          </div>
          <div className={styles.hero_filter_buttons}>
            <ul className={styles.filter_button_items}>
              {filterBtnAPI?.map((value, index) => (
                <button
                  role="img"
                  type="button"
                  name="exact_courses"
                  key={index}
                  className={styles.button_item}
                >
                  <Image
                    src={value.filterBtnSvg}
                    alt="course/button/img"
                    objectFit="fill"
                    priority
                    decoding="async"
                    width={45}
                    height={45}
                  />
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
