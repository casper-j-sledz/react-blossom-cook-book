"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { DemoAnchor } from "./demos";
import { RecipeGrid } from "./recipe-grid.component";

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
      <RecipeGrid/>
      {/* <DemoAnchor/> */}
    </main>
  );
}
