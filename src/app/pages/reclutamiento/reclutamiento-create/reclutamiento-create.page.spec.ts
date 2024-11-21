import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReclutamientoCreatePage } from './reclutamiento-create.page';

describe('ReclutamientoCreatePage', () => {
  let component: ReclutamientoCreatePage;
  let fixture: ComponentFixture<ReclutamientoCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclutamientoCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
