import { Component, OnInit } from "@angular/core";
import { IMessage } from "./models/message";
import { MessageService } from "./services/message.service"
import * as signalR from "@microsoft/signalr";

@Component({
  selector: 'board-list',
  template: `
    <h1>Message Board</h1>
    <message [vm]="vm" (save)="save($event)"></message>
    <br/>
    <message-list [vms]="vms"></message-list>
  `
})
export class BoardComponent implements OnInit {

  vm: IMessage;
  vms: IMessage[];
  userId: string;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.initializeVm();

    this.messageService.getAll()
      .subscribe((messages: IMessage[]) => this.vms = messages);

    this.connect();
  }

  connect() {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("/hub")
      .build();

    connection.on("commentAdded", (comment: string, time: string, user: string) => {
      const msg: IMessage = {
        comment: comment,
        time: time,
        user: user
      };

      this.vms = [msg, ...this.vms];
      //this.vms.unshift(msg);
    });

    connection.start()
      .then(() => {
        this.userId = connection.connectionId;
        this.initializeVm();
      })
      .catch(err => console.log(err));
  }

  save(message: IMessage) {
    this.messageService.create(message)
      .subscribe(() => this.initializeVm());
  }

  private initializeVm() {
    this.vm = {} as IMessage;
    this.vm.user = this.userId;
  }
}
