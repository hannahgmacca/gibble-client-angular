import { Exercise } from '../domain/models/exercise.model';
//import { ROUNDS_BARBELL_SQUATS, ROUNDS_BARBELL_PUSHPRESS, ROUNDS_LEGPRESS } from './mock-rounds';

export const EXERCISES: Exercise[] = [
    {
        id: "1",
        name: "Barbell squat",
        defaultPrMetric: "VolumeKg",
        defaultRepCount: 12,
        defaultWeightIncrease: 5,
        // PeronalBestRound: ROUNDS_BARBELL_SQUATS,
        // PreviousRound: ROUNDS_BARBELL_SQUATS
    },
    {
        id: "2",
        name: "Barbell push-press",
        defaultPrMetric: "VolumeKg",
        defaultRepCount: 12,
        defaultWeightIncrease: 5,
        // PeronalBestRound: ROUNDS_BARBELL_PUSHPRESS,
        // PreviousRound: ROUNDS_BARBELL_PUSHPRESS
    },
    {
        id: "3",
        name: "Leg press",
        defaultPrMetric: "VolumeKg",
        defaultRepCount: 10,
        defaultWeightIncrease: 5,
        // PeronalBestRound: ROUNDS_LEGPRESS,
        // PreviousRound: ROUNDS_LEGPRESS
    }
]