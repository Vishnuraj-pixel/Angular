import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:  `
  <h2>
  Welcome {{name}}
  </h2> 
  <input [id]= "myId" type = "text" value = "Vishwas">
  <input [isDisabled] = "isDisabled" id = "{{myId}}" type= "text" value = "Vishwas">  
`, 
  styles:[]
})
export class AppComponent {
  title = 'my-dream-app';
  name = "testId";
  isDiabled = false;


}
