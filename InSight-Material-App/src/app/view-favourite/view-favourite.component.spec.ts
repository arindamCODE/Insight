import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFavouriteComponent } from './view-favourite.component';

describe('ViewFavouriteComponent', () => {
  let component: ViewFavouriteComponent;
  let fixture: ComponentFixture<ViewFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFavouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
