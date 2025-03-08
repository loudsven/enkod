import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { City } from '../models/city.model';
import { cities } from '../data/cities';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private citiesSubject = new BehaviorSubject<City[]>(cities);
  cities$ = this.citiesSubject.asObservable();

  constructor() {}

  toggleFavorite(cityId: number): void {
    const cities = this.citiesSubject.value;
    const city = cities.find((c) => c.id === cityId);
    if (city) {
      city.favorite = !city.favorite;
      this.citiesSubject.next([...cities]);
    }
  }

  addCity(newCity: City): void {
    const cities = this.citiesSubject.value;
    this.citiesSubject.next([
      ...cities,
      { ...newCity, id: cities.length + 1, favorite: false },
    ]);
  }
}
