import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectOneDialogComponent } from './redirect-one-dialog.component';

describe('RedirectOneDialogComponent', () => {
  let component: RedirectOneDialogComponent;
  let fixture: ComponentFixture<RedirectOneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectOneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectOneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
