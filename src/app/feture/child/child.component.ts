import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  // showName(){
  //   this.myName.emit()
  // }

  // increment(value:number){
  //   this.coutNumber.emit(value);
  // }

  // decrement(value:number){
  //   this.coutNumber.emit(value)
  // }

}
