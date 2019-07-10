import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-evntemitter',
  templateUrl: './evntemitter.component.html',
  styleUrls: ['./evntemitter.component.css']
})
export class EvntemitterComponent implements OnInit {
  @Input()  count = 0;
  @Output() result = new EventEmitter<number>();

  increment() {
    this.count++;
    this.result.emit(this.count);
  }
  
  constructor() { }

  ngOnInit() {
  }

}