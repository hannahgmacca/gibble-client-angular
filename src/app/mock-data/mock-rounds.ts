import { Round } from '../round';
import { SETS_BARBELL_SQUATS, SETS_BARBELL_PUSHPRESS, SETS_LEGPRESS } from './mock-sets';
import {EXERCISES} from './mock-exercises';

export const ROUNDS_BARBELL_SQUATS: Round =
    {
        id: "1",
        dateStarted: new Date("01/01/2022"),
        isActive: false,
        dateCompleted: new Date(),
        isSuperSet: false,
        exerciseList: [EXERCISES[0]],
        setList: SETS_BARBELL_SQUATS,
        isHiit: false,
        restTimer: {
            hours: 0,
            minutes: 1,
            seconds: 0
        }
    }

export const ROUNDS_BARBELL_PUSHPRESS: Round = 
    {
        id: "6",
        dateStarted: new Date("01/01/2022"),
        dateCompleted: new Date(),
        isActive: false,
        isSuperSet: false,
        exerciseList: [EXERCISES[1]],
        setList: SETS_BARBELL_PUSHPRESS,
        isHiit: false,
        restTimer: {
            hours: 0,
            minutes: 1,
            seconds: 0
        }
    }

    export const ROUNDS_LEGPRESS: Round = 
    {
        id: "9",
        dateStarted: new Date("01/01/2022"),
        dateCompleted: new Date(),
        isActive: true,
        isSuperSet: false,
        exerciseList: [EXERCISES[2]],
        setList: SETS_LEGPRESS,
        isHiit: false,
        restTimer: {
            hours: 0,
            minutes: 1,
            seconds: 0
        }
    }

