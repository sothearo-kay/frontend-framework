import { div } from "@framework/element";
import { onClick } from "@framework/event";

interface Props {
  firstName: string;
  lastName: string;
}

export const User = ({ firstName, lastName }: Props) =>
  div`${onClick(() => console.log(firstName))} Hello ${firstName} ${lastName} !`;
