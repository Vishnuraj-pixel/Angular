import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>
    Welcome {{name}}
    </h2>
    <p>{{name.length}}</p>
    <p>{{siteUrl}}</p>
    
    <input id = "{{myId}}" type="text" [value] = "value">
    <input [disabled] = isDisabled id = "{{myId}}" type="text" [value] = "value">
    <input [class.text-danger] = "hasError" bind-id = "myId" type="text" [value] = "value">

    <h2 [ngClass]= "messageClassess">Codevolution</h2>

    <h2 [style.color] = "'orange'">Style Binding</h2>

    <h2 [style.color] = "hasError ? 'red': 'green'">Style Binding 1</h2>

    <h2 [style.color] = "highlightColor">Style Binding 2</h2>
  `,
  styles: [`
   .text-success {
      color: green; 
   }
   .text-danger {
      color: #fcba03;
   } 
   .text-special {
     font-style: italic;
     font-family: 'Courier New', Courier, monospace;
   }
  `
  ]
})
export class AppComponent {

  title = 'my-dream-app';
  value = "Vishnu Rajagopalan"
  name = "Vishnu Rajagopalan";
  siteUrl = window.location.href;
  myId = "testId";
  isDisabled = false;
  hasError = true;
  isSpecial = true;
  messageClassess = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  highlightColor = "Yellow";
}
