import { Component } from '@angular/core';
import { CryptoDetail } from './dashbard.model';
import { ELEMENT_DATA } from './dashboard.data';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent {


  displayedColumns: string[] = [
    'number',
    'name',
    'price',
    'change',
    'marketCap',
    'supply',
    'progress',
    'nextUnlock',
    'nextUnlockDate'
  ];
  dataSource: CryptoDetail[] = ELEMENT_DATA;
  constructor(private router: Router) {}

  goToCoinChart(element: CryptoDetail) {
    this.router.navigate(['/coinchart'], { state: { data: element } });
  }


}


