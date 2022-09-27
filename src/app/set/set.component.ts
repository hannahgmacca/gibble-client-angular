import { Component, OnInit , Input} from '@angular/core';
import { Set } from '../set';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {
  @Input() set?: Set;
  @Input() isActive?: boolean;
  classNames: string;

  constructor() { 
    this.classNames = this.getClassNames();
  }

  getClassNames() {
    let classNames = "";

    return classNames;
  }

  ngOnInit(): void {
  }

}
