import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFromFavViewComponent } from './remove-from-fav-view.component';

describe('RemoveFromFavViewComponent', () => {
  let component: RemoveFromFavViewComponent;
  let fixture: ComponentFixture<RemoveFromFavViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveFromFavViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFromFavViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
