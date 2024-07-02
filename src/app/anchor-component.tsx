"use client";

import './anchor-component.scss';
import styles from "./page.module.scss";
import Image from "next/image";
import { IAnchor, IImage } from "./recipe-grid.component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBowlFood} from "@fortawesome/free-solid-svg-icons";
//import { faBowlFood } from "@fortawesome/free-regular-svg-icons";

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