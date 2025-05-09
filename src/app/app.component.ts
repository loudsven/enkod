import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@Component({
	selector: 'app-root',
	imports: [RouterModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	constructor() {
		RouterModule.forRoot(routes);
	}
}
