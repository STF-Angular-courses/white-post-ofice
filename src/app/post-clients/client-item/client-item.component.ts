import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IClient} from '../../../common/models/client.model';


@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss']
})
export class ClientItemComponent implements OnInit {
  @Input() client: IClient;
  @Output() clientDetail = new EventEmitter<IClient>();

  constructor() { }

  ngOnInit() {
  }
  viewDetail(): void {
    this.clientDetail.emit(this.client);
  }
}
