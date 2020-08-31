import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  moment: moment.Moment = moment(new Date());
  time: Observable<string> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.time = interval(1000).pipe(
      // why you need 1s interval with HH:mm time format simply update it every minute not every second.
      map(() => {
        this.moment = moment(new Date());
        // you need the value of now not the value of the initialized time.
        return this.moment.format('MMMM DD YYYY, h:mm:ss A');
      }),
    );
  }

}
