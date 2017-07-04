import { Component,Injectable,OnInit} from '@angular/core';
import { JobApiService } from './job-api.service';
import { IJob } from './job';
import { ICount } from './ICount';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';




import { AngularFire,AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  pipes: [ReversePipe]


})
export class AppComponent implements OnInit {
  constructor(private jobApiService: JobApiService,
    private af: AngularFire) { }
  title: 'Job Crawl ';
  returnedJobs: IJob[] = [];
  jobs$: FirebaseListObservable<any>;
    keyWords$: FirebaseListObservable<any[]>;
    keyWordCount: ICount[]=[];
    sorted: ICount []=[];
    watchList: FirebaseListObservable<any[]>;
    mapped: any[]=[];
    jobCount: number;






addToWatchList(keyword){
this.af.database.object('/watchlist/'+ keyword).set({isKeyword:true});
console.log(keyword);

}

 ngOnInit() {
   {



    this.keyWords$ = this.af.database.list("keywords"
      // query:{
      // // orderByChild:'isWatchList',
      // // equalTo:true
      // orderByChild:'members_count'
      //
      //
      //
      //
      //
      // }


    );

    this.jobs$ = this.af.database.list("jobs")
    this.jobs$
      .map(jobs=>jobs.length)
      .subscribe(length=>this.jobCount=length)


   // value => console.log(value)

this.watchList =this.af.database.list("watchlist");

}}
  }
