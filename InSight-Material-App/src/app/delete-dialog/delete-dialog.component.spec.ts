import { MatDialogRef } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteDialogComponent } from './delete-dialog.component';
import { MatCardModule } from "@angular/material/card";
import { MAT_DIALOG_DATA } from '@angular/material';


fdescribe('DeleteDialogComponent', () => {
  let component: DeleteDialogComponent;
  let fixture: ComponentFixture<DeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
     providers:[MatDialogRef],
      declarations: [ DeleteDialogComponent ],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get() method should work', () => {
      const result = component.compute(2);
      expect(result).toBe(3);
  });

  //Arrange
  

  //Act

  //Assert



});
