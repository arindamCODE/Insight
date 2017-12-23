import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectTwoComponent } from './redirect-two.component';

describe('RedirectTwoComponent', () => {
  let component: RedirectTwoComponent;
  let fixture: ComponentFixture<RedirectTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
