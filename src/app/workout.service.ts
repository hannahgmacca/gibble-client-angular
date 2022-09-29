import { Injectable } from '@angular/core';
import { WORKOUT_STRENGTH } from './mock-data/mock-workout';
import { Workout } from './domain/models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  getWorkout(): Workout {
    return WORKOUT_STRENGTH;
  }

  constructor() { }
}
