import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemModelsComponent } from './edit-item-models.component';

describe('EditItemModelsComponent', () => {
  let component: EditItemModelsComponent;
  let fixture: ComponentFixture<EditItemModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
