import { Exercise } from "./exercise";

export interface Set {
    exercise: Exercise;
    repCount: number,
    durationSeconds?: number|null|undefined,
    weightKg: number,
    weightLbs?: number|null|undefined,
    isPersonalBest: boolean,
  }