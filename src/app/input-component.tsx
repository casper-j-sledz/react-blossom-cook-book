"use client";

import { ScriptProps } from "next/script";
import "./input-component.scss";
import { InputHTMLAttributes } from "react";

export interface IInputProps {
  inputProps: ScriptProps,
}

export function Input(inputAttributes: InputHTMLAttributes<HTMLInputElement>) {
  return (
      <input
        type="text"
        maxLength={124}
        placeholder="Type recipe name"
        {...inputAttributes}
      />
  );
}