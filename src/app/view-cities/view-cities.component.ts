import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ListComponent } from '../list/list.component';
import { TilesComponent } from '../tiles/tiles.component';
import { TabsComponent } from '../tabs/tabs.component';
import { City } from '../models/city.model';
import { CityService } from '../services/city.service';
import { RouterModule } from '@angular/router';

interface ViewMode {
  value: string;
  label: string;
}

const ViewModes: ViewMode[] = [
  { value: 'list', label: 'Список' },
  { value: 'tile', label: 'Плитка' },
];
@Component({
  selector: 'app-view-cities',
  imports: [
    RouterModule,
    HeaderComponent,
    ListComponent,
    TilesComponent,
    TabsComponent,
  ],
  templateUrl: './view-cities.component.html',
  styleUrl: './view-cities.component.css',
})
export class ViewCitiesComponent {
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
