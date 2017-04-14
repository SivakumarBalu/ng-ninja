import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle: String = "Welcome to the Ninja Directory!";
  myString: String = "I Love Chicken";
  myBoolean: Boolean = true;
  @Input() ninja;
  @Output() onYell = new EventEmitter();
  fireYellEvent(e){
    this.onYell.emit();
  }

  alertMe(val: String): void{
    alert(val);
  }
  constructor() { }

  ngOnInit() {
  }

}
