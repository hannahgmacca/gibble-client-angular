import { ExerciseModel } from "./exercise.model";
import { WorkoutModel } from "./workout.model";
import { RoutineModel } from "./routine.model";
import { GoalModel } from "./goal.model";

export interface UserModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    weightKg: number;
    weightLbs?: number;
    goals: Array<GoalModel>;
    activeWorkout?: WorkoutModel | null;
    exercises: ExerciseModel[];
    routines?: Array<RoutineModel>;
  }