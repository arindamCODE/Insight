import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectOneComponent } from './redirect-one.component';

describe('RedirectOneComponent', () => {
  let component: RedirectOneComponent;
  let fixture: ComponentFixture<RedirectOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
