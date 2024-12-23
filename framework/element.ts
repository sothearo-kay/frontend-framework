import { h, VNode } from "snabbdom";
import { EventArg, EventHandler } from "./event";

type Argument<T> = T | EventArg;

export interface Element {
  type: string;
  template: VNode;
}

const initialState = {
  template: "",
  on: {},
};

const isEventArg = <T>(arg: Argument<T>): arg is EventArg => {
  return typeof arg === "object" && arg !== null && "type" in arg;
};

const createReducer =
  <T>(args: Argument<T>[]) =>
  (
    acc: { template: string; on: Record<string, EventHandler> },
    currentString: string,
    index: number,
  ) => {
    const currentArg = args[index];

    if (isEventArg(currentArg) && currentArg.type === "event") {
      return { ...acc, on: { click: currentArg.click } };
    }

    return {
      ...acc,
      template: acc.template + currentString + (args[index] || ""),
    };
  };

const createElement =
  (tagName: string) =>
  <T>(strings: TemplateStringsArray, ...args: Argument<T>[]): Element => {
    const { template, on } = strings.reduce(createReducer(args), initialState);

    return {
      type: "element",
      template: h(tagName, { on }, template),
    };
  };

export const div = createElement("div");
export const p = createElement("p");
export const button = createElement("button");

/*
div`Hello ${firstName} ${lastName} !`;
div is what we call a tag. It allows to make some specific computations on the following template literals.
*/
