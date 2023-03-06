import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-star',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './page-star.component.html',
  styleUrls: ['./page-star.component.scss']
})
export class PageStarComponent {
  buttons = ['EQUIPO 1', 'EQUIPO 2', 'EQUIPO 3', ' EQUIPO 4'];
  data = [
    { type: 'HOY', percentage: 0.028, value: '0000,00', unit: 'KW', status: false },
    { type: 'SEMANA', percentage: 0.12, value: '0000,00', unit: 'KWh', status: true },
    { type: 'TOTAL', percentage: 0.015, value: '0000,00', unit: 'kwH', status: true }
  ];
  options = [
    { name: 'INFORMATION', icon: 'perm_device_information', color: 'blue' },
    { name: 'WARNING', icon: 'warning_amber', color: 'orange' },
    { name: 'ERROR', icon: 'nearby_error', color: 'red' }
  ]
}