import { Injectable } from '@angular/core';
import Person from '../contracts/person';
import {IClient} from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientList: IClient[] = [
    new Person(
      'Ivan Ivanov',
      'HB0001',
      33,
      'HB0000',
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
      'HB0001',
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
      'HB0002',
      'individual',
      'Tovstogo str, 38/2, Khmelnytskyi, Ukraine',
      '045-178-157-11-50',
      0.055,
      'assets/person3.jpg',
      'Person #3 description'
    )
  ];
  constructor() { }
  add(client: IClient): void {
    this.clientList.push(client);
  }
  remove(client?: IClient): void {
    if (client) {
      try {
        const index = this.clientList.indexOf(client);
        this.clientList.splice(index, 1);
      } catch  {
        console.log('Item not found');
      }
    } else {
      try {
        this.clientList.splice(this.clientList.length - 1, 1);
      } catch   {
        console.log('Error');
      }
    }
  }
}
