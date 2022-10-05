import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergingTechComponent } from './emerging-tech.component';

describe('EmergingTechComponent', () => {
  let component: EmergingTechComponent;
  let fixture: ComponentFixture<EmergingTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergingTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergingTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
