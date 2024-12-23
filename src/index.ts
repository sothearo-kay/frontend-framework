import { init } from "@/framework";
import { Counter } from "./components/counter";

init("#app", Counter({ count: 10 }));
