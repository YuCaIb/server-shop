import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {

  type_pass:string = "password";

  pass_vis():void{
    if (this.type_pass == "password") {
      this.type_pass = "text";
    }
    else{
      this.type_pass = "password";
    }
  }

}
