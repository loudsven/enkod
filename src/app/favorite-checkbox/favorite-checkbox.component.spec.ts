import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCheckboxComponent } from './favorite-checkbox.component';

describe('FavoriteCheckboxComponent', () => {
	let component: FavoriteCheckboxComponent;
	let fixture: ComponentFixture<FavoriteCheckboxComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FavoriteCheckboxComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(FavoriteCheckboxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
