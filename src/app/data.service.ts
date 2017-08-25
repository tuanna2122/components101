import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
    'Lexus', 'Mercedes', 'BMW'
  ];

  myData() {
    return 'This is my data, man!';
  }

}
