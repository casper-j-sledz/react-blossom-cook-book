"use client";

import mainStyles from "./page.module.scss";
import localStyles from "./demo-anchor.module.scss";
import Image from "next/image";
import { Component } from "react";
import { styled } from 'styled-components';

const StyledDiv = styled.a`
  padding: 5%;
`

export function StyledComponent() {
  return <StyledDiv></StyledDiv>
}

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

export interface IImage {
  src: string,
  alt?: string,
}

export function DemoImageWithStyleModule(props: IImage) {
  return (
        <div className={localStyles.imageBox}>
          <Image
              className={mainStyles.logo}
              src={props.src}
              alt={props.alt ? props.alt : ""}
              layout="fill"
              priority
            />
        </div>
  );
}

export function conditionStyleClass(condition: boolean) {
  return <div className={condition ?  mainStyles.grid : undefined}></div>
}

export function multipleStyleClass(condition: boolean) {
  return <div className={`exampleClass ${mainStyles.grid} ${condition ?  mainStyles.center : undefined}`}></div>
}

export function DemoAnchor() {
  return (
    <div>
      <div className={mainStyles.grid}>
        {anchors.map((anchor: IAnchor) => <FunctionAnchor
          key={anchor.title}
          {...anchor} />
        )}
      </div>
      <div className={mainStyles.grid}>
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
        className={mainStyles.card}
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
          className={mainStyles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
        <h2>{this.props.title} <span>-&gt;</span></h2>
        <p>{this.props.description} </p>
      </a>
    );
  }
}