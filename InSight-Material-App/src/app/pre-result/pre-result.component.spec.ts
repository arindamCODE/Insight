import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreResultComponent } from './pre-result.component';
import { MatCardModule } from '@angular/material';

describe('PreResultComponent', () => {
  let component: PreResultComponent;
  let fixture: ComponentFixture<PreResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatCardModule],
      providers:[Http,ConnectionBackend,RequestOptions],
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
