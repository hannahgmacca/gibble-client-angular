import { ExerciseModel } from './exercise.model';
import { SetModel } from './set.model';
import { TimerModel } from './timer.model';

export interface RoundModel {
    id: string;
    dateStarted: Date;
    isActive: boolean;
    dateCompleted?: Date;
    isSuperSet?: boolean;
    isHiit?: boolean;
    exerciseList: Array<ExerciseModel>;
    setList?: Array<SetModel>;
    restTimer?: TimerModel;
    activeTimer?: TimerModel;
  }