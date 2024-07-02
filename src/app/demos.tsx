"use client";

import mainStyles from "./page.module.scss";
import localStyles from "./demos.module.scss";
import Image, { StaticImageData } from "next/image";
import { Component, Fragment, ReactNode, useState } from "react";
import { styled } from 'styled-components';
import { ScriptProps } from "next/dist/client/script";

const StyledDiv = styled.a`
  padding: 5%;
  color: ${($visited) => $visited ? "purple" : "blue"};
`

export function StyledComponent() {
  return <StyledDiv ></StyledDiv>
  //https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39836036#overview
  //return <StyledDiv $visited={true}></StyledDiv>
}

export function ContentProp(props: ScriptProps) {
  return <button type="button">{props.children}</button>
}

export interface IReactNode {
  children: ReactNode,
}


export function ModernFragmentComponent() {
  return (
    <>
      <div>Element 1</div>
      <div>Element 2</div>
      <div>Element 3</div>
    </>
  );
}

interface IPropsToWrapElement {
  title: string, 
  children: any, //html something
  props: ScriptProps
}

export function PropsToWrapElement({title, children, ...props}: IPropsToWrapElement) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export function FragmentComponent() {
  return (
    <Fragment>
      <div>Element 1</div>
      <div>Element 2</div>
      <div>Element 3</div>
    </Fragment>
  );
}

export function ContentPropNode({children}: IReactNode) {
  return <button type="button">{children}</button>
}

export function ButtonOnClick({children}: IReactNode) {
  const handleClick = () => console.log("ButtonOnClick");
  return <button onClick={handleClick} type="button">{children}</button>
}

export interface IButton {
  children: ReactNode,
  onClick: (args: any) => void
}

export function ButtonOnClickPassedFromParent({children, onClick}: IButton) {
  return <button onClick={onClick} type="button">{children}</button>
}

export function ListButton() {
  const [ content, setValue ] = useState("Default content");
  const handleClick = (buttonId: string) => {
    console.log(buttonId);
    setValue(buttonId);
  };

  const buttons = ["Components", "TSX", "Props"];
  return (
    <div>
      <menu>
        { 
          buttons.map((buttonText: string) => 
            <ButtonChildElement key={buttonText} onClick={() => handleClick(buttonText)}>{buttonText}</ButtonChildElement>) 
        }
      </menu>
      <div>{content}</div>
    </div>
  );
}

export function ButtonChildElement({children, onClick}: IButton) {
  console.log(`Created button child element: ${children}`)
  return (
    <li>
      <button onClick={onClick} type="button">{children}</button>
    </li>
  );
}

export function DisplayIf(display: Boolean) {
  return (
    <div>
      { display && (<p>Display if true</p>) }
    </div>
  );
}

export function DisplayConditional(display: Boolean) {
  return (
    <div>
      { display ? (<p>Display if true</p>) : (<p>Display if false</p>) }
    </div>
  );
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
  src: string | StaticImageData,
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
      {/* <DemoImageWithStyleModule src={pancakeImg} alt={"Pancake image"}></DemoImageWithStyleModule> */}
      <ContentProp>ContentProp</ContentProp>
      <ContentPropNode>ContentPropNode</ContentPropNode>

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

