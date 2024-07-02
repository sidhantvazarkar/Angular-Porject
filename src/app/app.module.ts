import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { CoinchartComponent } from './dashboard/coinchart/coinchart.component';
import { MapComponent } from './dashboard/coinchart/map/map.component';
import { RewardsComponent } from './dashboard/coinchart/rewards/rewards.component';
import { TransactionsComponent } from './dashboard/coinchart/transactions/transactions.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BalanceComponent } from './dashboard/coinchart/balance/balance.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { RewardsService } from './dashboard/coinchart/rewards/rewards.service';
import { SupriseComponent } from './components/suprise/suprise.component';
import { BitcoinComponent } from './components/bitcoin/bitcoin.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReferComponent } from './components/refer/refer.component';
import { BuyPageComponent } from './components/buy-page/buy-page.component';
import { MatSelectModule } from '@angular/material/select';
import { TransactionService } from './dashboard/coinchart/transactions/transaction.service';
import { BalanceService } from './dashboard/coinchart/balance/balance.service';
import { AiTipsComponent } from './dashboard/coinchart/balance/ai-tips/ai-tips.component';
import { AiTipsService } from './dashboard/coinchart/balance/ai-tips/ai-tips.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    DashboardComponent,
    FooterComponent,
    LoginComponent,
    CoinchartComponent,
    MapComponent,
    RewardsComponent,
    TransactionsComponent,
    BalanceComponent,
    NotificationComponent,
    ButtonComponent,
    SupriseComponent,
    BitcoinComponent,
    ReferComponent,
    BuyPageComponent,
    ButtonComponent,
    LoginComponent,
    SupriseComponent,
    BitcoinComponent,
    AiTipsComponent


  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,

  ],
  providers: [
    provideAnimationsAsync(),
    RewardsService,
    TransactionService,
    BalanceService,
    AiTipsService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
