import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { IMessage } from "../models/message";

@Injectable()
export class MessageService {

  baseUrl = "/api/message";

  constructor(private http: HttpClient) { }

  getAll(): Observable<IMessage[]> {
    return this.http.get<IMessage[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  create(message: IMessage) {
    return this.http.post(this.baseUrl, message)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('server error:', error);

    if (error.error instanceof Error) {
      return throwError(error.error.message);
    }

    return throwError(error || 'Server error');
  }
}
