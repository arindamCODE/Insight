import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectFiveDialogComponent } from './redirect-five-dialog.component';

describe('RedirectFiveDialogComponent', () => {
  let component: RedirectFiveDialogComponent;
  let fixture: ComponentFixture<RedirectFiveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectFiveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectFiveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
