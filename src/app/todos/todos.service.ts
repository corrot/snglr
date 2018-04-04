import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from '@rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodosService {

  constructor(private http: Http) { }

  getTodosApi(): Observable<any> {
    return this.http.get('http://localhost:3000/todos')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Unspecified Server Error'));
  }

}
