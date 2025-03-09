import { Component, Input } from '@angular/core';
import { City } from '../models/city.model';
import { FavoriteCheckboxComponent } from '../favorite-checkbox/favorite-checkbox.component';

@Component({
	selector: 'app-tiles',
	imports: [FavoriteCheckboxComponent],
	templateUrl: './tiles.component.html',
	styleUrl: './tiles.component.css',
})
export class TilesComponent {
  @Input() cities: City[] = [];
  @Input() onToggleFavorite!: (cityId: number) => void;
}
