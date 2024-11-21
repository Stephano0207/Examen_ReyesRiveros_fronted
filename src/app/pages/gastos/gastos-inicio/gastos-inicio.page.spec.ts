import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GastosInicioPage } from './gastos-inicio.page';

describe('GastosInicioPage', () => {
  let component: GastosInicioPage;
  let fixture: ComponentFixture<GastosInicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
