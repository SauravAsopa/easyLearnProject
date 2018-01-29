import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  toggleSignUpFlag = false;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.toggleSIgnUpSubject.subscribe(
      (toggleSignUpFlag: boolean) => {
        this.toggleSignUpFlag = toggleSignUpFlag;
      }
    )
  }

}
