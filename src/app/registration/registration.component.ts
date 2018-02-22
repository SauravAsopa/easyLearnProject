import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   toggleStudent = false;
   toggleTeacher = true;
  constructor() { }

  toggle(){
    this.toggleStudent = !this.toggleStudent;
    this.toggleTeacher = !this.toggleTeacher;
  }
  ngOnInit() {
  }

}
