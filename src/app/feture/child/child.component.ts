import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
interface Student{
  id:number,
  name:string,
  course:string,
  age:number
}
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input() coutNumber!:number;
  @Input() studDatas:Student[]=[];

  // coutNumber:number = 3;
  // @Output() coutNumber: EventEmitter<number> = new EventEmitter<number>();
  citiesData:any
  constructor(private router:Router, private commonService :CommonService ) { }

  ngOnInit(): void {
    this.citiesData=this.commonService.cities;
  }

  visitCities(citieId:number){
    if(citieId){
      this.router.navigateByUrl(`feture/child2/${citieId}`);
    }
    console.log('citieId', citieId)
  }
}
