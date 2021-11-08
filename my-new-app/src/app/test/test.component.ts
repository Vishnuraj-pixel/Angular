import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  employees = [
    {
      "id": 1, "name": "Andrew", "age": 30
    },
    {
      "id": 2, "name": "Brandon", "age": 25
    },
    {
      "id": 3, "name": "Christina", "age": 26
    },
    {
      "id": 4, "name": "Elena", "age": 28
    }
  ];
  public name_1 = "codevolution";
  message = "Welcome to Angular!";
    
  person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  date = new Date();

  @Input("parentData") public name: any;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent() {
    this.childEvent.emit('Hey Codevolution'); 
  }

}

