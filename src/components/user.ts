import { div } from "@framework/element";

interface Props {
  firstName: string;
  lastName: string;
}

export const User = ({ firstName, lastName }: Props) =>
  div`Hello ${firstName} ${lastName} !`;
