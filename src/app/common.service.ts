import { Injectable } from '@angular/core';

interface City{
  id:number,
  name:string,
  population:number
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  cities:City[]=[
    {
      id:101,
      name:'Surat',
      population:1000000
    },
    {
      id:102,
      name:'Vadodara',
      population:2000000
    },
    {
      id:103,
      name:'Ahamdabad',
      population:5000000
    },
    {
      id:104,
      name:'Gandhinagar',
      population:6000000
    },
    {
      id:105,
      name:'Rajkot',
      population:500000
    }
  ]

  constructor() { }
}
