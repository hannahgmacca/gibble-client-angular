import { ExerciseModel } from "./exercise.model";

export interface SetModel {
    exercise: ExerciseModel;
    repCount: number,
    durationSeconds?: number|null|undefined,
    weightKg: number,
    weightLbs?: number|null|undefined,
    isPersonalBest: boolean,
  }