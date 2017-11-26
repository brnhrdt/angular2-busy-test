import {Component} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import "rxjs/add/operator/catch";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  busy: Subscription;

  constructor() {
  }

  wait() {
    this.busy = Observable.of({data: "test"}).delay(5000)
      .subscribe(data => console.log('Data: ', data));
  }
}
