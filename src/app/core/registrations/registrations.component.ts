import { Component, OnInit } from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';
// import {Observable} from 'rxjs';
// import {Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
export class RegistrationsComponent implements OnInit {
  dateIds: string[];
  dateFilterValue$: string;
  experts: string[];
  expertFilterValue$: string;
  supervisors: string[];
  supervisorFilterValue$: string;
  ppds: string[];
  ppdFilterValue$: string;
  categoriesMap: Map<string, string> = new Map<string, string>([['A', 'Спец. розница (GSM)'],
    ['B', 'Неспец. розница (Non-GSM)'],
    ['Інші', 'Cервисные ТТ']]);
  categories: string[] = [...this.categoriesMap.keys()];
  categoriesAB: string[] = ['A', 'B'];
  categoryFilterValue$: string[] = ['A', 'B'];

  constructor() { }

  ngOnInit(): void {
    this.dateIds = ['2020_02', '2020_01'];
  }

  // async getPPDs(dateId: string) {
  //   this.ppdList = await this.rs.getCodesPPD(dateId);
  //   this.getRdmsRegistrationsByArray(this.ppdList.map(value => value.codePPD));
  // }

  getExperts(value: any) {
    console.log(value);
    this.experts = ['Prostapchuk', 'Biloholovka'];
  }

  getSupervisors(value: any) {
    console.log(value);
    this.supervisors = ['Andreichuk', 'Chaban'];
  }

  getPPDs(dateId: string) {
    console.log(dateId);
    this.ppds = ['Shkvarok', 'Hot'];
  }

  getData(value: any) {
    console.log(value);
  }

  filterDataByCategory(value: any) {
    console.log(value);
  }
  isIndeterminate(model, selectedCategories: string[]) {
    return model.value
      && selectedCategories.length
      && model.value.length
      && model.value.length < selectedCategories.length;
  }
  isSelectionChecked(model, selectedCategories: string[]) {
    return model.value
      && selectedCategories.length
      && model.value.length === selectedCategories.length
      && model.value.every(value => selectedCategories.includes(value));
  }
  toggleSelection(change: MatCheckboxChange, model, selectedCategories: string[]) {
    if (change.checked) {
      model.update.emit(selectedCategories);
    } else {
      model.update.emit([]);
    }
    this.filterDataByCategory('toggle');
  }
}
