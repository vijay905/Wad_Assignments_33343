import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';

  displayname='';
  displayrollno='';
  displaybranch='';
  displayyear='';
 
  getValue(name:string,rollno:string, branch:string, year:string){
   this.displayname=name;
   this.displayrollno=rollno;
   this.displaybranch=branch;
   this.displayyear=year;

  }

}
