"use client";

import { Component } from "react";
import styles from "./page.module.css";

export interface ITile {
  href: string, 
  title: string, 
  description: string,
}

export function Anchor(props: ITile) {
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

export function FunctionAnchor(props: ITile) {
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

export class ClassAnchor extends Component<ITile> {
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