import { Injectable } from '@angular/core';
import Client from '../contracts/client.contract';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientList: Client[] = [
    new Client(
      'HB0001',
      'male',
      'Ivan Ivanov',
      'Zavodska str, 4/1, Khmelnytskyi, Ukraine',
      'HB0000',
      0.06,
      'assets/person1.jpg',
      '093-102-120-11-11',
      [],
      [''],
      ['']
    ),
    new Client(
      'HB0002',
      'male',
      'Petrov Sidiriv',
      'Trudova str, 14, Khmelnytskyi, Ukraine',
      '055-155-177-16-551',
      0.02,
      'assets/person2.jpg',
      '',
      [''],
      ['', ''],
      []
    ),
    new Client(
      'HB0003',
      'male',
      'Sergiy Ivanovych',
      'Tovstogo str, 38/2, Khmelnytskyi, Ukraine',
      '045-178-157-11-50',
      0.04,
      'assets/person3.jpg',
      'Description',
      [],
      [],
      ['', '']
    ),
    new Client(
      'CC0001',
      'company',
      'Some IT Company',
      'Karaganda, Some Country',
      '666-666-666',
      0.1,
      'assets/microsoft.png',
      'Description',
      [],
      [],
      [],
    )
  ];
  add(client?: Client): void {
    if (!client) {
      this.clientList.push(
        new Client(
          'CC0001',
          'corporate client',
          'Some IT Company',
          'Karaganda, Some Country',
          '666-666-666',
          0.11,
          'assets/microsoft.png',
          'Some it company. Client from long time',
          [],
          [],
          []
        )
      );
      return;
    }
    this.clientList.push(client);
  }
  remove(client?: Client): void {
    if (client) {
      try {
        const index = this.clientList.indexOf(client);
        this.clientList.splice(index, 1);
        return;
      } catch  {
        console.log('Item not found');
      }
    }
    if (!client) {
      try {
        this.clientList.splice(this.clientList.length - 1, 1);
      } catch   {
        console.log('Error');
      }
    }
  }
}
