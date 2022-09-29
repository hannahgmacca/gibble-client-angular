import { Component } from '@angular/core';
import { USER_ARM } from './mock-data/mock-user';
import { WORKOUT_STRENGTH } from './mock-data/mock-workout';
import { User } from './domain/models/user.model';
import { Workout } from './domain/models/workout.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  workout: Workout = WORKOUT_STRENGTH;
  user: User = USER_ARM;
  title = 'Gibble';
}
