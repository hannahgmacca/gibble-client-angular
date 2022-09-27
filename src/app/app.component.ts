import { Component } from '@angular/core';
import { WORKOUT_STRENGTH } from './mock-data/mock-workout';
import { Workout } from './workout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  workout: Workout = WORKOUT_STRENGTH;
  title = 'Gibble';
}
