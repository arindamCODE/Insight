import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFavComponent } from './remove-fav.component';

describe('RemoveFavComponent', () => {
  let component: RemoveFavComponent;
  let fixture: ComponentFixture<RemoveFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
