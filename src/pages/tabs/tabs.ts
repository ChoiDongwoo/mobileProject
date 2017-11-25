import { Component } from '@angular/core';
import { ParkListPage } from '../park-list/park-list';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = ParkListPage;

  constructor() {}
}
