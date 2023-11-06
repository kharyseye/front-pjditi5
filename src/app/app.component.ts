import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
actions : Array<any> = [
  {title:"Articles","route": "/articles", icon:"arrow-down-up"},
  {title:"NewArticle","route": "/newArticle", icon:"plus-circle"}
];
currentAction: any ;

setCurrentAction(action:any){
  this.currentAction = action;
}


}
