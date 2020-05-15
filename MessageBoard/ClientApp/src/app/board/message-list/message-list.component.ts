import { Component, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { IMessage } from "../models/message";

@Component({
  selector: 'message-list',
  templateUrl: "message-list.component.html",
  styles: [`
    .mat-standard {
      width: 50%;
      padding-top: 10px;
    }
`]
})
export class MessageListComponent {

  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns: string[] = ['comment', 'user', 'created'];
  data: IMessage[] = [];

  //@Input() vms: IMessage[] = [];
  @Input() set vms(messages: IMessage[]) {
    if (!messages) {
      return;
    }

    this.data = messages;
  }
}
