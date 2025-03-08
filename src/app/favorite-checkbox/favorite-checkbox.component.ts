import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-checkbox',
  imports: [],
  templateUrl: './favorite-checkbox.component.html',
  styleUrl: './favorite-checkbox.component.css',
})
export class FavoriteCheckboxComponent {
  @Input() checked = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  onCheckboxChange(event: Event): void {
    this.checked = (event.target as HTMLInputElement).checked;
    this.checkedChange.emit(this.checked);
  }
}
