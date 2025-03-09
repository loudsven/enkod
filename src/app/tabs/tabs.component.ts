import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-tabs',
	imports: [],
	templateUrl: './tabs.component.html',
	styleUrl: './tabs.component.css',
})
export class TabsComponent {
  @Input() tabs: { value: string; label: string }[] = [];
  @Input() current = '';
  @Output() tabChanged = new EventEmitter<string>();

  onTabClick = (value: string): void => {
  	this.tabChanged.emit(value);
  };
}
