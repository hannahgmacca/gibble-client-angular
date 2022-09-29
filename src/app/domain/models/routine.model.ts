import { RoundModel } from "./round.model";

export interface RoutineModel {
    id: string;
    name: string;
    type: string;
    rounds: Array<RoundModel>
  }