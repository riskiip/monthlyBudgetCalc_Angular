import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.models';
import { MatDialog } from '@angular/material';
import { EditItemModelsComponent } from '../edit-item-models/edit-item-models.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onDelete(item: BudgetItem) {
    this.delete.emit(item);
  }

  onCardClick(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditItemModelsComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe( result => {
      if (result) {
        this.budgetItems[this.budgetItems.indexOf(item)] = result;
      }
    });
  }

}
