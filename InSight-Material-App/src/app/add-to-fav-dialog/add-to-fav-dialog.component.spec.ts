import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToFavDialogComponent } from './add-to-fav-dialog.component';

describe('AddToFavDialogComponent', () => {
  let component: AddToFavDialogComponent;
  let fixture: ComponentFixture<AddToFavDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToFavDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToFavDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
