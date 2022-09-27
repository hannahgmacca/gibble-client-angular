import { Exercise } from "./exercise";
import { Workout } from "./workout";
import { Routine } from "./routine";
import { Goal } from "./goal";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    weightKg: number;
    weightLbs: number;
    goals: Array<Goal>;
    activeWorkout: Workout;
    exercises: Array<Exercise>;
    routines: Array<Routine>;
  }