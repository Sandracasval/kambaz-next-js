import React, { ReactNode } from "react";
//react components take content in their body and eturn a new version of that 
//content
//making a react component called square that takes a number 
//inside ist body 
//and shows it on screen
//CHILDREN IS THE VARIABLE OF WHATEVER YOU PUT INSIDE THE TAGS!
export default function Square({ children }: { children: ReactNode }) {
  const num = Number(children);
  return <span id="wd-square">{num * num}</span>;
}
