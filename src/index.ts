import { init } from "../framework";
import { User } from "./components/user";

const firstName = "Kay";
const lastName = "Sothearo";

init("#app", User({ firstName, lastName }));
