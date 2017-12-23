import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFromFavDialogComponent } from './remove-from-fav-dialog.component';

describe('RemoveFromFavDialogComponent', () => {
  let component: RemoveFromFavDialogComponent;
  let fixture: ComponentFixture<RemoveFromFavDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveFromFavDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFromFavDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
