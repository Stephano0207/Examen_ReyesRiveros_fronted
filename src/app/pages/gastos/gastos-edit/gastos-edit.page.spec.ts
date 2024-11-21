import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GastosEditPage } from './gastos-edit.page';

describe('GastosEditPage', () => {
  let component: GastosEditPage;
  let fixture: ComponentFixture<GastosEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
