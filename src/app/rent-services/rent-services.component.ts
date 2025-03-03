import { Component } from '@angular/core';

@Component({
  selector: 'app-rent-services',
  templateUrl: './rent-services.component.html',
  styleUrl: './rent-services.component.scss'
})
export class RentServicesComponent {

  controlcount: string = '';
  date: string = '';
  selectedPackage: string = '';
  selectedResort: string ='';
  cuponcode: string = '';

  onPackageChange() {
    console.log('Kiválasztott csomag:', this.selectedPackage);
    // Itt kezelheted a kiválasztott csomagot
  }

  onPackageChange2() {
    console.log('Kiválasztott eszköz:', this.selectedResort);
    // Itt kezelheted a kiválasztott csomagot
  }
  

}
