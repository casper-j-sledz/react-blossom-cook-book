"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { DemoAnchor } from "./demos";
import { RecipeGrid } from "./recipe-grid.component";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function HomePage() {
  return <h1>Home Page</h1>
}

function ProductsPage() {
  return <h1>Products Page</h1>
}

function Logo() {
  return (
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
  )
}

const router = createBrowserRouter([
  { path: '/', element: <HomePage/>},
  { path: '/products', element: <ProductsPage/>},
  { path: '/recipes', element: <RecipeGrid/>},
  { path: '/demo', element: <DemoAnchor/>},
]);

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo/>
      <RouterProvider router={router}/>
    </main>
  );
}
