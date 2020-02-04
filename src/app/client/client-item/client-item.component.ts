import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Client from '../common/contracts/client.contract';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss']
})
export class ClientItemComponent  {
  @Input() client: Client;
}
