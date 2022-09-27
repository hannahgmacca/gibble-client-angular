import { Round } from "./round";

export interface Workout {
    id: string,
    userId: number,
    name: string,
    type: string,
    isActive: boolean,
    completedRounds: Array<Round>,
    activeRound?: Round,
    caloriesBurnt?: number|null|undefined,
    timeStarted: Date,
    timeEnded?: Date|null|undefined
  }