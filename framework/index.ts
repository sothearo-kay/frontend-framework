import type { Element } from "./element";

export const init = (selector: string, component: Element) => {
  const app = document.querySelector(selector)!;
  const newElement = document.createElement(component.type);
  const newTextContent = document.createTextNode(component.template);

  newElement.append(newTextContent);
  app.append(newElement);
};
