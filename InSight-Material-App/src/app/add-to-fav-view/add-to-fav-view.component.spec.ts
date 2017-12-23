import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToFavViewComponent } from './add-to-fav-view.component';

describe('AddToFavViewComponent', () => {
  let component: AddToFavViewComponent;
  let fixture: ComponentFixture<AddToFavViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToFavViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToFavViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
