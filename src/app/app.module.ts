import { CommonService } from './common.service';
import { DropdownDirective } from './dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {MdMenuModule, MdButtonModule, MdIconModule, MdCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonComponent } from './common/common.component';
import { RouterModule } from '@angular/router';
import { BecomeAteacherComponent } from './become-ateacher/become-ateacher.component';
import { HireAteacherComponent } from './hire-ateacher/hire-ateacher.component';
import { PostYourRequirementComponent } from './post-your-requirement/post-your-requirement.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationStudentComponent } from './registration-student/registration-student.component';
import { RegistrationTeacherComponent } from './registration-teacher/registration-teacher.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { KeyPeopleComponent } from './key-people/key-people.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    CommonComponent,
    BecomeAteacherComponent,
    HireAteacherComponent,
    PostYourRequirementComponent,
    HowItWorksComponent,
    DropdownDirective,
    AboutUsComponent,
    RegistrationComponent,
    RegistrationStudentComponent,
    RegistrationTeacherComponent,
    ContactUsComponent,
    KeyPeopleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: CommonComponent, children: [
        {path:'login', component: LoginComponent}
      ]},
      { path: 'aboutus', component: AboutUsComponent },
      {path: 'register', component: RegistrationComponent, children: [
        {path:'', component: RegistrationTeacherComponent},
        {path:'student', component: RegistrationStudentComponent}
      ]},
      {path: 'keypeople', component: KeyPeopleComponent}

    ])
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
