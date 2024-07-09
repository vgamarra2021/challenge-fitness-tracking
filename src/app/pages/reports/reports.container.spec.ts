import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsContainer } from './reports.container';

describe('ReportsContainer', () => {
  let component: ReportsContainer;
  let fixture: ComponentFixture<ReportsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
