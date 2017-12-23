import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmedialoginComponent } from './socialmedialogin.component';

describe('SocialmedialoginComponent', () => {
  let component: SocialmedialoginComponent;
  let fixture: ComponentFixture<SocialmedialoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialmedialoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialmedialoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
