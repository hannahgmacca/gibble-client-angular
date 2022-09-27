import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Round } from '../round';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})

export class RoundComponent implements OnInit {
  @Input() round?: Round;
  @Output() completeRoundEvent =  new EventEmitter<Round>();
  @Output() activateRoundEvent = new EventEmitter<Round>();
  @Input() workoutActive?: boolean;
  classNames: string;

  constructor() { 
    this.classNames = this.getClassNames();
  }

  onRoundComplete() {
    if (this.round) {
      this.round.isActive = false;
      this.completeRound()
    }
  }

  onRoundEdit() {
    if (this.round) {
      this.round.isActive = true;
      this.activateRound()
    }
  }

  completeRound() {
    this.completeRoundEvent.emit(this.round);
  }

  activateRound() {
    this.activateRoundEvent.emit(this.round);
  }

  getClassNames() {
    let classNames = "";

    return classNames;
  }

  ngOnInit(): void {
  }

}
