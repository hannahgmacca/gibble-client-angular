import { Round } from "./round";

export interface Exercise {
    id: string;
    name: string;
    defaultPrMetric?: string|null;
    defaultRepCount?: number|null;
    defaultWeightIncrease?: number|null;
    defaultDurationSeconds?: number|null;
    PeronalBestRound?: Round|null;
    PreviousRound?: Round|null;
  }