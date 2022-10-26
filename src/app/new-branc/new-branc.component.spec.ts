import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBrancComponent } from './new-branc.component';

describe('NewBrancComponent', () => {
  let component: NewBrancComponent;
  let fixture: ComponentFixture<NewBrancComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBrancComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBrancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
