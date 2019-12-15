import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ClientService} from '../../../common/services/client.service';
import {IClient} from '../../../common/models/client.model';
import Person from '../../../common/contracts/person';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  @Output() clientDetail = new EventEmitter<IClient>();
  clients: IClient[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clients = this.clientService.clientList;
  }
  showDetail(item: IClient) {
    this.clientDetail.emit(item);
  }
  add(): void {
    this.clientService.add(
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
      )
    );
  }
}
