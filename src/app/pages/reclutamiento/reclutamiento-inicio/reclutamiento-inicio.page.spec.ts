import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReclutamientoInicioPage } from './reclutamiento-inicio.page';

describe('ReclutamientoInicioPage', () => {
  let component: ReclutamientoInicioPage;
  let fixture: ComponentFixture<ReclutamientoInicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclutamientoInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
