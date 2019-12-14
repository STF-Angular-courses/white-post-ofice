import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ClientService} from '../../../common/services/client.service';
import {IClient} from '../../../common/models/client.model';

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
}
