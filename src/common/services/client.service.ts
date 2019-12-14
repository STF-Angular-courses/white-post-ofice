import { Injectable } from '@angular/core';
import Person from '../contracts/person';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientList = [
    new Person(
      'Ivan Ivanov',
      'HB0001',
      33,
      'individual',
      'Zavodska str, 4/1, Khmelnytskyi, Ukraine',
      '093-102-120-11-11',
      0.03,
      'assets/person1.jpg',
      'Person #1 description'
    ),
    new Person(
      'Petrov Sidiriv',
      'HB0002',
      43,
      'individual',
      'Trudova str, 14, Khmelnytskyi, Ukraine',
      '055-155-177-16-551',
      0.05,
      'assets/person2.jpg',
      'Person #2 description'
    ), new Person(
      'Sergiy Ivanovych',
      'HB0003',
      23,
      'individual',
      'Tovstogo str, 38/2, Khmelnytskyi, Ukraine',
      '045-178-157-11-50',
      0.055,
      'assets/person3.jpg',
      'Person #3 description'
    )
  ];
  constructor() { }
  add(client: Person): void {
    this.clientList.push(client);
  }
  remove(client: Person): void {
    try {
      const index = this.clientList.indexOf(client);
      this.clientList.splice(index, 1);
    } catch  {
      console.log('Item not found');
    }
  }
}
