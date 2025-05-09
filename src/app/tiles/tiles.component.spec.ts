import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesComponent } from './tiles.component';

describe('TilesComponent', () => {
	let component: TilesComponent;
	let fixture: ComponentFixture<TilesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TilesComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(TilesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
