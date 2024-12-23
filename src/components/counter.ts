import { button } from "@framework/element";
import { onClick } from "@framework/event";
import { createComponent } from "@framework/index";

interface State {
  count: number;
}

interface Props extends State {
  methods: {
    increment: () => void;
  };
}

const initialState: State = { count: 0 };

const methods = {
  increment: (state: State) => ({ ...state, count: state.count + 1 }),
};

const template = ({ count, methods }: Props) =>
  button`${onClick(() => methods.increment())} Count: ${count.toString()}`;

export const Counter = createComponent({ template, methods, initialState });
