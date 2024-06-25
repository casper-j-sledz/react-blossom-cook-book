"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { AddNewRecipeAnchor, Anchor, IAnchor, anchors } from "./anchor-component";

// TODO: 
// ustawienia, język polski, angielski
// łatwe wyszukiwanie przepisów
// responsywna splikacja
// użycie darmowych ikon i obrazów
// tworzenie szybkich list zakupów
// porcje mała duża średnia zdefiniuj własną

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        {anchors.map((anchor: IAnchor) => <Anchor
          key={anchor.title}
          {...anchor} />
        )}
        <AddNewRecipeAnchor />
      </div>
      {/* <DemoAnchor/> */}
    </main>
  );
}
