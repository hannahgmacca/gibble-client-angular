import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Exercise } from '../exercise';

import { Round } from '../round';
import { Workout } from '../workout';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})

export class WorkoutComponent implements OnInit {
  classNames: string;
  @Input() workout?: Workout;

  constructor() { 
    this.classNames = this.getClassNames();
  }

  onWorkoutComplete() {
    if (this.workout) {
      this.workout.isActive = false;
  
      if (this.workout.activeRound) {
        this.workout.activeRound.isActive = false;
        this.workout.completedRounds.push(this.workout.activeRound);
      }

    }
  }

  completeRound(round: Round) {
    if (this.workout && this.workout.activeRound) {
      this.workout.activeRound.isActive = false;
      this.workout.completedRounds.push(round);
    }
    
    this.emptyActiveRound();
  }

  onAddExercise(exerciseValue: string | Exercise) {
    if (this.workout) {
      if (typeof exerciseValue === "string") {
        this.addNewExercise(exerciseValue)
      } else {
        this.addNewRound(exerciseValue)
      }
    }
  }

  addNewRound(exercise: Exercise) {

  }

  addNewExercise(exercise: string) {

  }

  activateRound(round: Round) {
    let newActiveRound = round;

    if (this.workout && this.workout.activeRound) {

      let currentActiveRound = this.workout.activeRound;

      currentActiveRound.isActive = false;

      this.workout.completedRounds.push(currentActiveRound);
    }
  
    this.removeFromCompletedRounds(newActiveRound);
    newActiveRound.isActive = true;
    this.addActiveRound(newActiveRound);
  }

  removeFromCompletedRounds(round: Round) { 
    if (this.workout) {
        this.workout.completedRounds = this.workout.completedRounds.filter(function(ele) { 
          return ele.id != round.id; 
        });
    }
  }

  emptyActiveRound() {
    if (this.workout) {
      delete this.workout.activeRound
    }
  }

  addActiveRound(round: Round) {
    if (this.workout) {
      this.workout.activeRound = round;
    }
  }

  getClassNames() {
    let classNames = "";

    return classNames;
  }
  
  ngOnInit(): void {
  }

}
