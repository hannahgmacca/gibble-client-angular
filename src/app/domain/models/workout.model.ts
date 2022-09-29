import { RoundModel } from "./round.model";

export interface WorkoutModel {
    id: string,
    userId: number,
    name: string,
    type: string,
    isActive: boolean,
    completedRounds: Array<RoundModel>,
    activeRound?: RoundModel,
    caloriesBurnt?: number|null|undefined,
    timeStarted: Date,
    timeEnded?: Date|null|undefined
  }