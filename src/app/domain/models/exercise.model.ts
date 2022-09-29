import { RoundModel } from "./round.model";

export interface ExerciseModel {
    id?: string;
    name: string;
    defaultPrMetric?: string|null;
    defaultRepCount?: number|null;
    defaultWeightIncrease?: number|null;
    defaultDurationSeconds?: number|null;
    PeronalBestRound?: RoundModel|null;
    PreviousRound?: RoundModel|null;
  }