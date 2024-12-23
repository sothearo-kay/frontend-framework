import { init } from "./framework";
import { div } from "./framework/element";

const firstName = "Kay";
const lastName = "Sothearo";

init("#app", div`Hello ${firstName} ${lastName} !`);
