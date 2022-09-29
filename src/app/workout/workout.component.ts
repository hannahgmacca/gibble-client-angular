import { Component, OnInit, Input } from '@angular/core';
import { ExerciseModel } from '../domain/models/exercise.model';
import { RoundModel } from '../domain/models/round.model';
import { WorkoutModel } from '../domain/models/workout.model';
import { UserModel } from '../domain/models/user.model';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})

export class WorkoutComponent implements OnInit {
  classNames: string;
  @Input() user: UserModel;
  @Input() workout: WorkoutModel;

  constructor(private workoutService: WorkoutService) { 
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

  completeRound(round: RoundModel) {
    if (this.workout && this.workout.activeRound) {
      this.workout.activeRound.isActive = false;
      this.workout.completedRounds.push(round);
    }
    
    this.emptyActiveRound();
  }

  onAddExercise(exerciseValue: string | ExerciseModel | null) {
    if (this.workout && exerciseValue) {
      if (typeof exerciseValue === "string") {
        this.addNewExercise(exerciseValue)
      } else {
        this.addNewRound(exerciseValue)
      }
    }
  }

  addNewRound(exercise: ExerciseModel) {
    if (this.workout && exercise) {
      let firstSet = this.intialiseSet(exercise);

      let Round = {
        id: Math.random.toString(),
        dateStarted: new Date(),
        isActive: true,
        exerciseList: [exercise],
        setList: [firstSet],
      }

      this.workout.activeRound = Round;
    }
    
  }

  addNewExercise(exerciseName: string) {
    if (exerciseName.length > 0) {
      let newExercise = {
        name: exerciseName,
        defaultPrMetric: "weight",
        defaultRepCount: 12,
        defaultWeightIncrease: 5,
        defaultDurationSeconds: 59
      }

      this.user.exercises.push(newExercise);
      this.addNewRound(newExercise);
    } 
  }

  activateRound(round: RoundModel) {
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

  intialiseSet(exerciseIn: ExerciseModel) {

    let setObject = {
      exercise: exerciseIn,
      repCount: exerciseIn.defaultRepCount ? exerciseIn.defaultRepCount : 12,
      durationSeconds: exerciseIn.defaultDurationSeconds ? exerciseIn.defaultDurationSeconds : 12,
      weightKg: 0,
      isPersonalBest: false,
    }

    return setObject;
  }

  removeFromCompletedRounds(round: RoundModel) { 
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

  addActiveRound(round: RoundModel) {
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
