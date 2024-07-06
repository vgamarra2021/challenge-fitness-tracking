import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessLayoutComponent } from './fitness-layout.component';

describe('FitnessLayoutComponent', () => {
  let component: FitnessLayoutComponent;
  let fixture: ComponentFixture<FitnessLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FitnessLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
