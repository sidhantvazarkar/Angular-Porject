import { Component ,OnInit } from '@angular/core';
import { BalanceService } from './balance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})


export class BalanceComponent implements OnInit {
  coins: any[] = [];
  selectedCoin: any;

  constructor(private balanceService: BalanceService) {}

  ngOnInit(): void {
    this.balanceService.getCoins().subscribe(data => {
      this.coins = data;
      this.selectedCoin = this.coins[0]; // Default to first coin
    });
  }

  onCoinChange(event: any): void {
    const coinId = event.target.value;
    this.selectedCoin = this.coins.find(coin => coin.id == coinId);
  }
}
