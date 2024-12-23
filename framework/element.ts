import { h, VNode } from "snabbdom";

export interface Element {
  type: string;
  template: VNode;
}

const createElement =
  (tagName: string) =>
  (strings: TemplateStringsArray, ...args: string[]) => ({
    type: "element",
    template: h(
      tagName,
      {},

      strings.reduce(
        (acc, currentString, index) =>
          acc + currentString + (args[index] || ""),
        "",
      ),
    ),
  });

export const div = createElement("div");
export const p = createElement("p");

/*
div`Hello ${firstName} ${lastName} !`;
div is what we call a tag. It allows to make some specific computations on the following template literals.
*/
