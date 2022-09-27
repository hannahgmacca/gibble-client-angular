import { Round } from "./round";

export interface Routine {
    id: string;
    name: string;
    type: string;
    rounds: Array<Round>
  }