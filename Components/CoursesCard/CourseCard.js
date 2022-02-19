import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

export default function CourseCard({
  id,
  languageImg,
  authorImg,
  courseCover,
  courseTitle,
  courseDuration,
  backgroundColor,
  boxShadow,
  setOpenState,
  styles
}) {
  const { data: session } = useSession();
  return (
    <>
      <div
        className={styles.course_card}
        style={{
          background: `linear-gradient(${backgroundColor})`,
          boxShadow: `${boxShadow}`,
        }}
      >
        <div className={styles.card_content}>
          <span className={styles.card_img}>
            <Image
              objectFit="fill"
              priority
              decoding="async"
              src={courseCover}
              width={200}
              height={160}
              alt={`${id}id/courses/cover/img`}
            />
          </span>
          <div className={styles.card_caption}>
            <span className={styles.caption_img}>
              <Image
                width={37}
                height={37}
                objectFit="fill"
                priority
                decoding="async"
                src={languageImg}
                alt="courses/language/img"
              />
            </span>
            <span className={styles.caption_img}>
              <Image
                width={37}
                height={37}
                objectFit="fill"
                priority
                decoding="async"
                src={authorImg}
                alt="courses/author/img"
              />
            </span>
          </div>
        </div>
        <div className={styles.card_content}>
          <h1 className={styles.title}>{courseTitle}</h1>
          <p className={styles.duration}>{courseDuration}</p>
          <span className={styles.go_to_details}>Per Month</span>
        </div>
        <div className={styles.card_footer}>
          <button
            type="button"
            className={styles.cart_btn}
            onClick={!session ? signIn : () => setOpenState(true)}
          >
            <div className={styles.cart_btn_icon}>
              <svg
                className={styles.icon_svg}
                width={19}
                height={19}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 19H4C3.17 19 2.5 18.33 2.5 17.5V6.5C2.5 5.67 3.17 5 4 5H21C21.83 5 22.5 5.67 22.5 6.5V17.5C22.5 18.33 21.83 19 21 19Z"
                  fill="white"
                  fillOpacity={0.8}
                />
                <path
                  d="M22.5 9H2.5V10H22.5V9Z"
                  fill="white"
                  fillOpacity={0.8}
                />
              </svg>
            </div>
            <span className={styles.cart_btn_text}>Subscribe</span>
          </button>
          <div className={styles.card_star}>$9</div>
        </div>
      </div>
    </>
  );
};