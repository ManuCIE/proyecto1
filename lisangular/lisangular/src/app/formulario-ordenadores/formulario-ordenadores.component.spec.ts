import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioOrdenadoresComponent } from './formulario-ordenadores.component';

describe('FormularioOrdenadoresComponent', () => {
  let component: FormularioOrdenadoresComponent;
  let fixture: ComponentFixture<FormularioOrdenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioOrdenadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioOrdenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
