import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Exercise } from '../exercise';
import { EXERCISES } from '../mock-data/mock-exercises';

@Component({
  selector: 'app-exercise-search',
  templateUrl: './exercise-search.component.html',
  styleUrls: ['./exercise-search.component.scss']
})
export class ExerciseSearchComponent implements OnInit {
  exerciseValue = new FormControl<string | Exercise>('');
  options: Exercise[] = EXERCISES;
  filteredOptions: Observable<Exercise[]>;
  @Output() addExerciseEvent =  new EventEmitter<string | Exercise | null>();

  ngOnInit() {
    this.filteredOptions = this.exerciseValue.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(exercise: Exercise): string {
    return exercise && exercise.name ? exercise.name : '';
  }

  addExercise(exercise: string | Exercise | null ) {
    this.addExerciseEvent.emit(exercise);
  }


  private _filter(name: string): Exercise[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
