import { Subject } from "rxjs/Subject";

export class CommonService {

    toggleSignUpFlag = false;
    toggleSIgnUpSubject = new Subject();

    toggleSignUp() {
        this.toggleSignUpFlag = !this.toggleSignUpFlag;
        this.toggleSIgnUpSubject.next(this.toggleSignUpFlag);
    }

    getToggleSignUp() {
        return this.toggleSignUpFlag;
    }

}