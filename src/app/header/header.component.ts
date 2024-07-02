import { Component } from '@angular/core';
import { NotificationService } from '../components/notification/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  dropdownVisible = false;

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  constructor(private notificationService: NotificationService) {}

  toggleNotifications() {
    this.notificationService.toggleVisibility();
  }





}
