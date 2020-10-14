import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface FormFace {
  name: string;
  email: string;
  feedback: string;
  comment: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private http: HttpClient) { }

  getUrl = 'https://cs251-outlab-6.herokuapp.com/initial_values/';
  postUrl = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';

  getData() {
    return this.http.get<FormFace>(this.getUrl);
  }

  sendData(data: string): Observable<FormFace> {
    return this.http.post<FormFace>(this.postUrl, data);
  }
}
