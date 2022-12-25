import { Component, Input, OnInit } from '@angular/core';
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

  @Input() studDatas:Student[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
