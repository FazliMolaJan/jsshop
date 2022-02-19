import { getProviders, signIn as SignInToSHOP } from "next-auth/react";
import Image from "next/image";
import SVGs from "../../Components/Svgs";
import styles from "../../styles/Signin.module.css";
export default function signIn({ providers }) {
  return (
    <>
      <div className="global_zindex">
        <div className={styles.signin_wrap}>
          <div className={styles.signin_dashboard}>
            <div className={styles.signin_graphics}>
              <Image
                src={SVGs.signinGraphic}
                alt="signin/graphics"
                priority
                decoding="async"
                objectFit="contain"
                width={350}
                height={200}
              />
            </div>
            <h5 className={styles.signin_title}>
              Signin with Your Google Account
            </h5>
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  onClick={() =>
                    SignInToSHOP(provider.id, { callbackUrl: "/" })
                  }
                  className={styles.signin_button}
                >
                  <span className={styles.button_text}>
                    Sign in with {provider.name}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
