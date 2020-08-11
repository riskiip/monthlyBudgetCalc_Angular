import { Component, OnInit, Inject } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-item-models',
  templateUrl: './edit-item-models.component.html',
  styleUrls: ['./edit-item-models.component.scss']
})
export class EditItemModelsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditItemModelsComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem) { }

  ngOnInit() {
  }

  onSubmitted(updatedItem: BudgetItem) {
    this.dialogRef.close(updatedItem);
  }

}
