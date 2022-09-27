import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule,  } from '@angular/forms'; // <-- NgModel lives here
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundComponent } from './round/round.component';
import { SetComponent } from './set/set.component';
import { WorkoutComponent } from './workout/workout.component';
import { ExerciseSearchComponent } from './exercise-search/exercise-search.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundComponent,
    SetComponent,
    WorkoutComponent,
    ExerciseSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
