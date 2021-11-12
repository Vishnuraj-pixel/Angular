import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;

  userModel = new User('Rob', 'rob@test.com', 555665566, 'default', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService) {}

  validateTopic(value:any) {
    if(value === 'default') {
      this.topicHasError === true;
    }else {
      this .topicHasError === false;
    }
  }

  onSubmit() {
    this._enrollmentService.enroll(this.userModel).subscribe(
      data => console.log('Success! ',data),
      error => console.error('Error! ', error)
    )
  }
}
