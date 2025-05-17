import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvisoFormularioComponent } from './aviso-formulario.component';

describe('AvisoFormularioComponent', () => {
  let component: AvisoFormularioComponent;
  let fixture: ComponentFixture<AvisoFormularioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AvisoFormularioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
