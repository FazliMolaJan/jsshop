import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import SVGs from "./Svgs";

export default function Navbar() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const loading = status === "Loading...";

  return (
    <>
      <nav className={styles.jsshop_nav}>
        <Link href={`/`} passHref>
          <a className={styles.shop_brand} href="/">
            <span className={styles.list_links_img}>
              <Image
                priority
                decoding="async"
                objectFit="contain"
                width={45}
                height={45}
                src={SVGs.shopBrand}
                alt="logo/svg"
              />
            </span>
          </a>
        </Link>
        <ul className={styles.nav_list}>
          <li className={router.pathname == "/" ? "active" : ""}>
            <Link href={`/`} passHref>
              <a className={styles.list_links} href="/">
                <span className={styles.list_links_img}>
                  <Image src={SVGs.courses} alt="logo/svg" />
                </span>
                <span className={styles.link_text}>COURSES</span>
              </a>
            </Link>
          </li>
          {!loading && !session && (
            <li>
              <Link href={`/api/auth/signin`} passHref>
                <a className={styles.list_links} href="/api/auth/signin">
                  <span className={styles.list_links_img}>
                    <Image src={SVGs.signinSvg} alt="logo/svg" />
                  </span>
                  <span className={styles.link_text}>LOGIN</span>
                </a>
              </Link>
            </li>
          )}
          {session && (
            <li>
              <Link href={`#`} passHref>
                <a className={styles.list_links} href="#" onClick={signOut}>
                  <span
                    className={`${styles.list_links_img} ${styles.dynamic_user}`}
                  >
                    <Image
                      src={session?.user.image}
                      alt="logo/svg"
                      width={43}
                      height={43}
                      objectFit="cover"
                      priority
                      decoding="async"
                    />
                  </span>
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
