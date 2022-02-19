import { useState } from "react";
import Head from "next/head";
import Hero from "../Components/Hero.js";
import CourseCard from "../Components/CoursesCard/CourseCard";
import GetAccessBtn from "../Components/CoursesCard/GetAccessBtn";
import Moodle from "../Components/CoursesCard/Moodle";
import TrustBrands from "../Components/TrustBrands.js";
import styles from "../styles/Courses.module.css";

export default function Index({ data }) {
  const [openstate, setOpenState] = useState();

  return (
    <>
      <Head>
        <title>JSSHOP COURSES</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="jsshop is e-courses lms, JSSHOP COURSES"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="container">
          <Hero />
          <Moodle openstate={openstate} setOpenState={setOpenState} />
          <div className="global_zindex">
            <div className={styles.dashboard}>
              <div className={styles.courses_card_grid}>
                {data?.map((val, index) => (
                  <CourseCard
                    key={index}
                    id={index}
                    languageImg={val.languageImg}
                    authorImg={val.authorImg}
                    courseCover={val.courseCover}
                    courseTitle={val.courseTitle}
                    courseDuration={val.courseDuration}
                    backgroundColor={val.backgroundColor}
                    boxShadow={val.boxShadow}
                    category={val.category}
                    setOpenState={setOpenState}
                    styles={styles}
                  />
                ))}
              </div>
              <GetAccessBtn styles={styles} setOpenState={setOpenState} />
            </div>
          </div>
          <TrustBrands />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const URL = process.env.LOCALHOST_URL || process.env.NEXTSHOP_URL;
  const request = await fetch(`${URL}/api/courses`);
  const data = await request.json();
  return {
    props: {
      data,
    },
  };
}
