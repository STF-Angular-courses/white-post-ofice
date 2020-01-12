import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Client from '../common/contracts/client.contract';
import {ClientService} from '../common/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  @Output() clientDetail = new EventEmitter<Client>();
  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clients = this.clientService.clientList;
  }
  showDetail(item: Client) {
    this.clientDetail.emit(item);
  }
}
