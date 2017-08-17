import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { PlacesPage } from '../places/places';

@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;

  constructor() {
    this.tab1Root = MapPage;
    this.tab2Root = PlacesPage;
  }
}
