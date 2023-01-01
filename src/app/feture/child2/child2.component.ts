import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  citiDetails:any;
  citieId!:number;
  constructor(private activeRouter:ActivatedRoute,private commonService:CommonService) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((respones:any)=>{
      if(respones){
        this.citieId=respones.id
      }
    });

    this.commonService.cities.find((respons:any)=>{
      if(respons.id == this.citieId){
        this.citiDetails=respons
      }
      console.log('this.citiDetails', this.citiDetails)
    });
  }

}
