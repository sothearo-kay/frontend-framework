export interface Element {
  type: string;
  template: string;
}

const createElement =
  (tagName: string) =>
  (strings: TemplateStringsArray, ...args: string[]): Element => ({
    type: tagName,
    template: strings.reduce(
      (acc, currentString, index) => acc + currentString + (args[index] || ""),
      "",
    ),
  });

export const div = createElement("div");
export const p = createElement("p");

/*
div`Hello ${firstName} ${lastName} !`;
div is what we call a tag. It allows to make some specific computations on the following template literals.
*/
