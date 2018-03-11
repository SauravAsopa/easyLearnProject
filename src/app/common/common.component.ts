import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  toggleSignUpFlag = false;
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    this.commonService.toggleSIgnUpSubject.subscribe(
      (toggleSignUpFlag: boolean) => {
        this.toggleSignUpFlag = toggleSignUpFlag;
      }
    )
  }
  btnClick(){
    this.router.navigateByUrl('/register');
    }
    btnClick1(){
      this.router.navigateByUrl('/register/student');
    }

}
