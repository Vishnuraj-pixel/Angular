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

    <h2 [ngStyle] = "titleStyles">Style Binding 2</h2>

    <button (click)= "onClick($event)">Greet</button>

    <button (click)= "greeting ='Welcome Vishwas'">Greet</button>

    {{greeting}}
    <br>
    <br>
    sent message to the console
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button>
    <button (click)="logMessage(myInput)">Log</button>

    <br>
    <br>
    <input [(ngModel)]= "name_1" type="text">
    {{name_1}}{{name_1.length}}

    <h2 *ngIf= "displayName else elseblock">Codevolution</h2>

    <ng-template #elseblock>
      <h2>Hidden Name</h2>
    </ng-template>

    <div *ngIf= "displayName then thenBlock; else elseBlock">Hello World</div>
    <ng-template #thenBlock>
    <h2>codevolution</h2>
    </ng-template>

    <ng-template #elseBlock>
    <h2>Name is hidden</h2>
    </ng-template>

    <div [ngSwitch]= "color">
      <div *ngSwitchCase= "'red'">You picked red color!</div>
      <div *ngSwitchCase= "'green'">You picked green color!</div>
      <div *ngSwitchCase= "'blue'">You picked blue color!</div>
      <div *ngSwitchDefault>Pick again!</div>
    </div>


    <div *ngFor="let color of colors; index as i">
     <h2>{{i}}. {{color}}</h2>

    </div>

    <div *ngFor="let color of colors; first as f">
    <h2>{{f}}. {{color}}</h2>

   </div>

   <div *ngFor="let color of colors; last as l">
    <h2>{{l}}. {{color}}</h2>

   </div>

   <div *ngFor="let color of colors; odd as o">
    <h2>{{o}}. {{color}}</h2>

   </div>

   <div *ngFor="let color of colors; even as e">
    <h2>{{e}}. {{color}}</h2>

   </div>
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

  public name_1 = "";
  colors = ['red', 'blue', 'green', 'saffron', 'yellow']
  color = "yellow";
  displayName = true;
  title = 'my-dream-app';
  value = "Vishnu Rajagopalan"
  name = "Vishnu Rajagopalan";
  siteUrl = window.location.href;
  myId = "testId";
  isDisabled = false;
  hasError = true;
  isSpecial = true;
  greeting = "";
  messageClassess = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  titleStyles = {
    color : "blue",
    fontStyle : "italic"
  }

  onClick (event: { type: string; }) {
    console.log(event);
    this.greeting = event.type;
  }

  highlightColor = "yellow";

  logMessage(value: any) {
    console.log(value); 
  }

}
