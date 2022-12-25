import { Component } from '@angular/core';

interface Student{
  id:number,
  name:string,
  course:string,
  age:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  stud:Student[]=[
  {
    id:101,
    name:'Vishal',
    course:'BCA',
    age:20
  },
  {
    id:102,
    name:'Parag',
    course:'BCA',
    age:20
  },
  {
    id:103,
    name:'Devil',
    course:'BCA',
    age:20
  },
  {
    id:104,
    name:'Ram',
    course:'MCA',
    age:20
  },
  {
    id:105,
    name:'Vaibhav',
    course:'BCOM',
    age:20
  },
  {
    id:106,
    name:'Parthiv',
    course:'BA',
    age:20
  },
  {
    id:107,
    name:'Darshan',
    course:'BBA',
    age:20
  },
  {
    id:108,
    name:'Rohit',
    course:'BCOM',
    age:20
  },
  {
    id:109,
    name:'Frenk',
    course:'Engineere',
    age:21
  },
  {
    id:110,
    name:'Gangu',
    course:'BCOM',
    age:23
  }
];

}
