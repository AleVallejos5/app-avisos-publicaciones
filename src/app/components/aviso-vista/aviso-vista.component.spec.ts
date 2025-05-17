import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvisoVistaComponent } from './aviso-vista.component';

describe('AvisoVistaComponent', () => {
  let component: AvisoVistaComponent;
  let fixture: ComponentFixture<AvisoVistaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AvisoVistaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisoVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
