import { Routes } from '@angular/router';
import { AddCityComponent } from './add-city/add-city.component';
import { ViewCitiesComponent } from './view-cities/view-cities.component';

export const routes: Routes = [
	{
		path: '',
		component: ViewCitiesComponent,
	},
	{
		path: 'add',
		component: AddCityComponent,
	},
];
