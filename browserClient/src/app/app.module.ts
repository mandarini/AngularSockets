import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ChatService} from "./chat.service";
import { WebsocketService } from "./websocket.service";
// import { SceneComponent } from './scene/scene.component';


@NgModule({
  declarations: [
    AppComponent,
    // SceneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ChatService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
