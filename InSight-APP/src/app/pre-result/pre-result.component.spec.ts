import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreResultComponent } from './pre-result.component';

describe('PreResultComponent', () => {
  let component: PreResultComponent;
  let fixture: ComponentFixture<PreResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
