import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectTwoDialogComponent } from './redirect-two-dialog.component';

describe('RedirectTwoDialogComponent', () => {
  let component: RedirectTwoDialogComponent;
  let fixture: ComponentFixture<RedirectTwoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectTwoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectTwoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
