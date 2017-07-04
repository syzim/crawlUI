import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'
import { IJob } from './job';




@Injectable()
export class JobApiService {

  private baseUrl = "https://jobsdatabase-f76ad.firebaseio.com";
  constructor(private http: Http) { }

  getAllJobs():Observable<IJob[]> {
    console.log("made it");
    return this.http.get(`${this.baseUrl}/jobs.json`)
                .map((res:Response) => <IJob[]>res.json())


  }

};
