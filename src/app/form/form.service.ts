import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Form } from '@angular/forms';

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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred.', error.message);
      alert('Oops, a network/client-side error has occurred. Please try again later.');
    }
    else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.message}`);
      alert(`Oops, the server returned an error. Please try again later.\n\nError code: ${error.status}\nError message: ${error.message}`);
    }
    return throwError('Oops, something went wrong!');
  }

  getData() { 
    return this.http.get<FormFace>(this.getUrl).pipe(catchError(this.handleError));
  }

  onSuccess(response) {
    alert('Submitted data successfully!');
    return response;
  }

  sendData(data: string): Observable<FormFace> {
    return this.http.post<FormFace>(this.postUrl, data).pipe(map(this.onSuccess),catchError(this.handleError));
  }
}
