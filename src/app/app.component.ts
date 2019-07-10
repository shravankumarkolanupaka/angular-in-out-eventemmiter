import { Component,OnChanges} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  num = 0;
  parentCount = 0;

  ngOnChange(val: number) {
    this.parentCount = val;
  }
}
