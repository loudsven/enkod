import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { City } from './models/city.model';
import { CityService } from './services/city.service';
import { TilesComponent } from './tiles/tiles.component';
import { TabsComponent } from './tabs/tabs.component';

interface ViewMode {
  value: string;
  label: string;
}

const ViewModes: ViewMode[] = [
  { value: 'list', label: 'Список' },
  { value: 'tile', label: 'Плитка' },
];

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ListComponent,
    TilesComponent,
    TabsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cities: City[] = [];
  viewMode: ViewMode = ViewModes[0];
  viewModes: ViewMode[] = ViewModes;
  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.cityService.cities$.subscribe((cities) => {
      this.cities = cities;
    });
  }
  toggleFavorite = (cityId: number): void => {
    this.cityService.toggleFavorite(cityId);
  };

  changeViewMode = (value: string): void => {
    this.viewMode = this.viewModes.find((mode) => mode.value === value)!;
  };
}
