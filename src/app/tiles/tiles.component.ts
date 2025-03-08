import { Component, Input } from '@angular/core';
import { City } from '../models/city.model';

@Component({
  selector: 'app-tiles',
  imports: [],
  templateUrl: './tiles.component.html',
  styleUrl: './tiles.component.css',
})
export class TilesComponent {
  @Input() cities: City[] = [];
  @Input() onToggleFavorite!: (cityId: number) => void;
}
