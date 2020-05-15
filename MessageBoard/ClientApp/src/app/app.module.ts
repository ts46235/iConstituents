import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgMatModule } from './material.module';
import { AppComponent } from './app.component';
import { MessageListComponent, MessageComponent, BoardComponent } from './board';
import { MessageService } from "./board/services/message.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MessageComponent,
    MessageListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgMatModule,
    RouterModule.forRoot([
      { path: '', component: BoardComponent, pathMatch: 'full' }
    ]),
    BrowserAnimationsModule
  ],
  providers: [ MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
