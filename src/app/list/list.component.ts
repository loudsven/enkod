import { Component, Input } from '@angular/core';
import { City } from '../models/city.model';
import { FavoriteCheckboxComponent } from '../favorite-checkbox/favorite-checkbox.component';

@Component({
	selector: 'app-list',
	imports: [FavoriteCheckboxComponent],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() cities: City[] = [];
  @Input() onToggleFavorite!: (cityId: number) => void;
}
