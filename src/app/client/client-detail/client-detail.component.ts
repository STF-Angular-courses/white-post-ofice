import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../common/services/client.service";
import Client from "../common/contracts/client.contract";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {
  client: Client;
  constructor(private clientService: ClientService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id');
      this.client = this.clientService.getElemById(id);
    });
  }

}
