import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coinchart',
  templateUrl: './coinchart.component.html',
  styleUrl: './coinchart.component.css'
})
export class CoinchartComponent implements OnInit {
  element: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.element = history.state.data;
    console.log(this.element); // Do something with the element data
  }

}
