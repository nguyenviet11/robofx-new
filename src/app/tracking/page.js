'use client'
import styles from "./page.module.css";
import circel from "../../../public/R-tron.png";
import image from "../../../public/image.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h3 className={styles.text}>
             Official Site{" "}
          <span
            style={{ transform: "translate(0px)", display: "inline-block" }}
          >
            <Image src={circel} alt="Logo" width={30} height={30} priority />
          </span>
        </h3>
         <p className={styles.text2}>
                  Checking if the site connection is secure
                </p>
                <p className={styles.text3}>
                  We needs to review the security of your connection before proceeding
                </p>
                <div style={{ marginTop: 30 }}>
                  <Image src={image} alt="Logo" className={styles.image2} />
                </div>
                <p className={styles.text4}>Why am I seeing this page?</p>
      </main>
    </div>
  );
}