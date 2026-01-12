import { Component } from '@angular/core';

@Component({
  selector: 'app-components-showcase',
  templateUrl: './components-showcase.page.html',
  styleUrls: ['./components-showcase.page.scss'],
  standalone: false
})
export class ComponentsShowcasePage {
  // Dados para exemplos
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  selectedSegment = 'buttons';
  searchText = '';
  checkboxChecked = false;
  toggleChecked = false;
  rangeValue = 50;
  selectedValue = 'option1';

  constructor() {}

  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
  }

  showAlert(message: string) {
    console.log('Alert:', message);
  }
}
