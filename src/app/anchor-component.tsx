"use client";

import styles from "./page.module.css";
import Image from "next/image";
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBowlFood} from "@fortawesome/free-solid-svg-icons";
//import { faBowlFood } from "@fortawesome/free-regular-svg-icons";

export interface IAnchor {
  href: string, 
  title: string, 
  description: string,
  image?: IImage,
}

export interface IImage {
  src?: string,
  alt?: string,
}

export const anchors: IAnchor[] = [
  {
    href:        "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title:       "Pancake",
    description: "Juicy pancakes in caramel glaze with seasonal fruits.",
    image: { 
      src: "/pictures/pexels-ash-122861-376464.jpg",
      alt: "Next.js Logo",
    }
  },
  {
    href:        "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title:       "Example recipe",
    description: "This is a description of example recipe. Yummy! Examples are most delicious.",
  },
];

export function Anchor(props: IAnchor) {
  return (
    <a
        href={props.href}
        rel="noopener noreferrer"
      >
      <TryRenderImage {...props.image}/>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}

export function TryRenderImage(props: IImage) {
  return (
      props?.src ? 
        <div className="image-box">
          <Image
              className={styles.logo}
              src={props.src}
              alt={props.alt ? props.alt : ""}
              layout="fill"
              priority
            />
        </div>
      : 
      <div className="image-box">
        <FontAwesomeIcon icon={faBowlFood} />
      </div>
  );
}

export function AddNewRecipeAnchor() {
  return (
    <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
      >
      <div className="image-box">
        <FontAwesomeIcon icon={faPlus} className="svg-box"/>
      </div>
      <h2>New recipe</h2>
      <p>Click to add your new recipe.</p>
    </a>
  );
}