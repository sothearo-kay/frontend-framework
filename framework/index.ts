import { init as initPatch, eventListenersModule } from "snabbdom";
import type { Element } from "./element";

const patch = initPatch([eventListenersModule]);

export const init = (selector: string, component: Element) => {
  const app = document.querySelector(selector);
  if (!app) {
    throw new Error(`No element found for selector: ${selector}`);
  }

  patch(app, component.template);
};

interface ComponentOptions<T, M> {
  template: (props: T & { methods: M }) => Element;
  methods?: {
    [key: string]: (state: T, ...args: any[]) => T;
  };
  initialState: T;
}

export const createComponent = <T, M>({
  template,
  methods = {},
  initialState,
}: ComponentOptions<T, M>) => {
  let state: T;
  let previous: Element;

  const initializeState = (props: T): T => {
    return { ...initialState, ...props };
  };

  // Map methods to update the state and re-render the component
  const mappedMethods = (props: T) =>
    Object.keys(methods).reduce(
      (acc, key) => ({
        ...acc,
        [key]: (...args: any[]) => {
          state = methods[key](state, ...args);
          const nextNode = template({
            ...props,
            ...state,
            methods: mappedMethods(props),
          });

          patch(previous.template, nextNode.template);
          previous = nextNode;
        },
      }),
      {} as M,
    );

  return (props: T) => {
    state = initializeState(props);
    previous = template({
      ...props,
      ...state,
      methods: mappedMethods(props),
    });

    return previous;
  };
};
