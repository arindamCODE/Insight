import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharewithdialogComponent } from './sharewithdialog.component';

describe('SharewithdialogComponent', () => {
  let component: SharewithdialogComponent;
  let fixture: ComponentFixture<SharewithdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharewithdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharewithdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
