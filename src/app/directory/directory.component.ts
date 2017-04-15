import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninjas = [
    {name:"Crystal", belt: "Black"},
    {name:"Rayu", belt: "Red"},
    {name:"Yoshi", belt: "Purple"}
  ]
  constructor() {  }

  ngOnInit() {
  }

}
