export type EventHandler = (event: Event) => void;

export interface EventArg {
  type: "event";
  click: EventHandler;
}

export const onClick = (f: EventHandler): EventArg => ({
  type: "event",
  click: f,
});
