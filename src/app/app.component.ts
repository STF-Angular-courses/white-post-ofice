import { Component } from '@angular/core';
import {postItemsData} from '../shared/models/DATA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postItems = postItemsData;
  showPostList = true;
}
