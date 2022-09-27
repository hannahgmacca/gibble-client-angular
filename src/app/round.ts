import { Exercise } from './exercise';
import { Set } from './set';
import { Timer } from './timer';

export interface Round {
    id: string;
    dateStarted: Date;
    isActive: boolean;
    dateCompleted: Date;
    isSuperSet: boolean;
    isHiit: boolean;
    exerciseList: Array<Exercise>;
    setList: Array<Set>;
    restTimer: Timer;
  }