import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private chat: ChatService){
  }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log('my msg',msg);
      document.getElementById("x").innerHTML=msg.text.x;
      document.getElementById("y").innerHTML=msg.text.y;
      document.getElementById("z").innerHTML=msg.text.z;
    })
  }

}
