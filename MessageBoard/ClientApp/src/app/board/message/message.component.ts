import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IMessage } from "../models/message";

@Component({
  selector: 'message',
  styles: [`
    mat-label { 
      color: black;
    }
    .form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }
    .full-width {
      width: 100%;
    }`],
  template: `
    <form class="form">
      <mat-form-field class="full-width">
        <mat-label>Send message</mat-label>
        <input matInput [(ngModel)]="vm.comment" name="comment" [placeholder]="placeholder">
      </mat-form-field>
      <button (click)="save.emit(vm)">Save</button>
    </form>
  `
})
export class MessageComponent {

  placeholder = "Type Comment Here";

  @Input() vm: IMessage;

  @Output() save = new EventEmitter();
}
