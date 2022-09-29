import { User } from '../domain/models/user.model';
import {EXERCISES} from './mock-exercises'

export const USER_ARM: User =
    {
        id: "1",
        firstName: "Armstrong",
        lastName: "Ashton-Lewis",
        email: "ausiarm@gmail.com",
        weightKg: 80,
        goals: [],
        exercises: EXERCISES
    }



