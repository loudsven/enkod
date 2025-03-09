import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import {
	ReactiveFormsModule,
	FormGroup,
	FormControl,
	Validators,
} from '@angular/forms';
import { CityService } from '../services/city.service';
import { City } from '../models/city.model';

@Component({
	selector: 'app-add-city',
	imports: [RouterModule, ReactiveFormsModule, HeaderComponent],
	templateUrl: './add-city.component.html',
	styleUrl: './add-city.component.css',
})
export class AddCityComponent {
	submitted = false;
	cityForm = new FormGroup({
		name: new FormControl('', [Validators.required]),
		image: new FormControl('', [
			Validators.required,
			Validators.pattern('https?://.+'),
		]),
		description: new FormControl('', [Validators.required]),
	});

	constructor(private cityService: CityService, private router: Router) {}

	onSubmit() {
		this.submitted = true;
		if (this.cityForm.valid) {
			this.cityService.addCity(this.cityForm.value as City);
			this.router.navigate(['/']);
		}
	}
}
