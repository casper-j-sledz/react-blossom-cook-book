"use client";

import styles from "./page.module.scss";
import Image, { StaticImageData } from "next/image";
import './anchor-component.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBowlFood} from "@fortawesome/free-solid-svg-icons";
//import { faBowlFood } from "@fortawesome/free-regular-svg-icons";
import pancakeImg from "/public/pictures/pexels-ash-122861-376464.jpg"
import { AddNewRecipeAnchor, Anchor } from "./anchor-component";
import { Input } from "./input-component";
import { useState } from "react";
import { ScriptProps } from "next/script";

export interface IAnchor {
  href: string, 
  title: string, 
  description: string,
  image?: IImage,
}

export interface IImage {
  src?: string | StaticImageData,
  alt?: string,
}

export const anchors: IAnchor[] = [
  {
    href:        "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title:       "Pancake",
    description: "Juicy pancakes in caramel glaze with seasonal fruits.",
    image: { 
      src: pancakeImg,
      alt: "Next.js Logo",
    }
  },
  {
    href:        "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title:       "Example recipe",
    description: "This is a description of example recipe. Yummy! Examples are most delicious.",
  },
];

export function RecipeGrid() {
  const [ inputValue, setSearchResult ] = useState("");
  const handleChange = (value: string) => {
    setSearchResult(value);
  };

  return (
    <>
      <div className={styles.center}>
          <Input value={inputValue} onChange={() => handleChange(inputValue)}/>
      </div>

      <div className={styles.grid}>
        {anchors.map((anchor: IAnchor) => <Anchor
          key={anchor.title}
          {...anchor} />
        )}
        <AddNewRecipeAnchor />
      </div>
    </>
  );
}