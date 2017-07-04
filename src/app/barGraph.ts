import {Component,Input,OnChanges,OnInit} from '@angular/core';

@Component({
  selector:'barGraph',
  template: '<div [style.width.px]="count*10">&nbsp;</div><strong>{{count}} ({{percentage | percent:"1.0-0"}} of jobs)</strong>',
  styles: [`div{background-color:green;color:yellow;display:inline-block;}`]
})
//  [style.width.px]="starWidth"
export class BarGraphComponent implements OnInit{
@Input() count: number;
@Input() totalJobs: number;
percentage: number;

ngOnInit(){
if(this.count !=null && this.totalJobs !=null){
this.percentage = (this.count / this.totalJobs)
}
}
}
