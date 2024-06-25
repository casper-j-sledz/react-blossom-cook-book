"use client";

import { Component } from "react";
import styles from "./page.module.css";

export interface IAnchor {
  href: string, 
  title: string, 
  description: string,
}

export const anchors: IAnchor[] = [
  {
    href:        "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title:       "Docs",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href:        "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title:       "Learn",
    description: "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  {
    href:        "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title:       "Templates",
    description: "Explore starter templates for Next.js.",
  },
  {
    href:        "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title:       "Deploy",
    description: "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];

export function DemoAnchor() {
  return (
    <div>
      <div className={styles.grid}>
        {anchors.map((anchor: IAnchor) => <FunctionAnchor
          key={anchor.title}
          {...anchor} />
        )}
      </div>
      <div className={styles.grid}>
        {anchors.map((anchor: IAnchor) => <ClassAnchor
          key={anchor.title}
          href={anchor.href}
          title={anchor.title}
          description={anchor.description} />
        )}
      </div>
    </div>
  );
}

export function FunctionAnchor(props: IAnchor) {
  return (
    <a
        href={props.href}
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
      <h2>{props.title} <span>-&gt;</span></h2>
      <p>{props.description} </p>
    </a>
  );
}

export class ClassAnchor extends Component<IAnchor> {
  render() {
    return (
      <a
          href={this.props.href}
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
        <h2>{this.props.title} <span>-&gt;</span></h2>
        <p>{this.props.description} </p>
      </a>
    );
  }
}