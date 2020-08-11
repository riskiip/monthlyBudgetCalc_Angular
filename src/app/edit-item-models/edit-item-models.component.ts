import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.models';

@Component({
  selector: 'app-edit-item-models',
  templateUrl: './edit-item-models.component.html',
  styleUrls: ['./edit-item-models.component.scss']
})
export class EditItemModelsComponent implements OnInit {
  @Input() item: BudgetItem[];

  constructor() { }

  ngOnInit() {
  }

  onSubmitted(updatedItem: BudgetItem) {

  }

}
