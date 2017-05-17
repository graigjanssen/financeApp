import { Component, ViewEncapsulation } from '@angular/core';
import { Operation } from './common/operation.model';
import { State, Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `{{ operations | json }}`
  // styleUrls: ['./app.component.css']
})
export class AppComponent {

  public operations:Array<Operation>;

  constructor(private _store: Store<State<Array<Operation>>>) {
    _store.select('operations').subscribe(state => this.operations = state);
  }
}
