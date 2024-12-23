import { init as initPatch } from "snabbdom";
import type { Element } from "./element";

const patch = initPatch([]);

export const init = (selector: string, component: Element) => {
  const app = document.querySelector(selector);
  if (!app) {
    throw new Error(`No element found for selector: ${selector}`);
  }

  patch(app, component.template);
};
