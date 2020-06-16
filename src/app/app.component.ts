import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  messages
  allMessage=['a','b','c']
  socialMessage=['1','2']
  primaryMessage=['a']

  onClick(contentType){
   this.messages = contentType==='all' ? this.allMessage : contentType==='social' ? this.socialMessage : this.primaryMessage
  }
}
