"use client";

import "./input-component.scss";

export function Input() {
  return (
      <input
        type="text"
        maxLength={124}
        placeholder="Type recipe name"
      />
  );
}