import { ROUNDS_BARBELL_PUSHPRESS, ROUNDS_BARBELL_SQUATS, ROUNDS_LEGPRESS } from './mock-rounds';
import { Workout } from '../workout';

export const WORKOUT_STRENGTH: Workout =
    {
        id: "63294d41cb79e39816e0ba4q",
        userId: 1,
        name: "Lower",
        type: "strength",
        isActive: true,
        completedRounds: [ROUNDS_BARBELL_PUSHPRESS, ROUNDS_BARBELL_SQUATS],
        activeRound: ROUNDS_LEGPRESS,
        caloriesBurnt: 300,
        timeStarted: new Date("01/01/2022"),
        timeEnded: new Date("01/01/2024")
    }



