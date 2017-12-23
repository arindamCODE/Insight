import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectFourDialogComponent } from './redirect-four-dialog.component';

describe('RedirectFourDialogComponent', () => {
  let component: RedirectFourDialogComponent;
  let fixture: ComponentFixture<RedirectFourDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectFourDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectFourDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
