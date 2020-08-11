import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.models';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget = 0;

  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deteleItem(item: BudgetItem) {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent) {
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalBudget += updateEvent.new.amount;
    this.totalBudget -= updateEvent.old.amount;
  }

}
