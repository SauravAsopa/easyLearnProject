import { Router } from '@angular/router';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   toggle= false;
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
  }
  onClick(){
    this.commonService.toggleSignUp();
  }

  clickClass(){
    this.router.navigateByUrl('/teacher');
  }

}
