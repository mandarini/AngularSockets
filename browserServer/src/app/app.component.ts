import { Component, OnInit } from '@angular/core';
import {InterfaceService } from './interface.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private interfaceService: InterfaceService){
    window.addEventListener('devicemotion', function(event) {
      let x = event.accelerationIncludingGravity.x;
      let y = event.accelerationIncludingGravity.y;
      let z = event.accelerationIncludingGravity.z;
      interfaceService.sendMsg({
        x: x,
        y: y,
        z: z
      });
    }, true);
  }

  ngOnInit() {
  }

  sendMessage(msg) {
    this.interfaceService.sendMsg("Test Message" + msg);
  }

}
