import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectThreeDialogComponent } from './redirect-three-dialog.component';

describe('RedirectThreeDialogComponent', () => {
  let component: RedirectThreeDialogComponent;
  let fixture: ComponentFixture<RedirectThreeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectThreeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectThreeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
