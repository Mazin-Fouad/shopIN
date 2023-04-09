import { Component } from '@angular/core';
import { StoreData } from 'src/app/models/viewModels/store-data';

@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.scss'],
})
export class LandingSectionComponent {
  storeInfo: StoreData;

  constructor() {
    this.storeInfo = new StoreData('shopIN', 'https://fakeimg.pl/300/', ['Karlsruhe', ' Bruchsal', ' Heidlberg']);
  }
}
