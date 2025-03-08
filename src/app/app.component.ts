import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { City } from './models/city.model';
import { CityService } from './services/city.service';
import { TilesComponent } from './tiles/tiles.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ListComponent, TilesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cities: City[] = [];
  viewMode: 'list' | 'tile' = 'list';
  constructor(private cityService: CityService) {}
  ngOnInit() {
    this.cityService.cities$.subscribe((cities) => {
      this.cities = cities;
    });
  }

  changeViewMode = (mode: 'list' | 'tile'): void => {
    this.viewMode = mode;
  };

  toggleFavorite = (cityId: number): void => {
    this.cityService.toggleFavorite(cityId);
  };
}
