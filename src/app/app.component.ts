import { Component } from '@angular/core';
import {clientItemsData, postItemsData} from '../shared/models/DATA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showPostList = false;
  showClientList = false;
  showPackList = false;
  postItems = postItemsData;
  clientItems = clientItemsData;

  showList(event: Event) {
    const target = event.target as HTMLElement;
    switch (target.id) {
      case 'post-btn': this.showPostList = true;
        this.showClientList = false;
        this.showPackList = false;
        break;
      case 'client-btn': this.showClientList = true;
        this.showPackList = false;
        this.showPostList = false;
        break;
      case 'pack-btn': this.showPackList = true;
        this.showClientList = false;
        this.showPostList = false;
        break;
      default: break;
    }
  }
}
