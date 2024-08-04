import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemporadaPage } from './temporada.page';

describe('TemporadaPage', () => {
  let component: TemporadaPage;
  let fixture: ComponentFixture<TemporadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
