import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReclutamientoEditPage } from './reclutamiento-edit.page';

describe('ReclutamientoEditPage', () => {
  let component: ReclutamientoEditPage;
  let fixture: ComponentFixture<ReclutamientoEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclutamientoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
