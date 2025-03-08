import { Component, Input } from '@angular/core';
import { City } from '../models/city.model';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() cities: City[] = [];
  @Input() onToggleFavorite!: (cityId: number) => void;
}
