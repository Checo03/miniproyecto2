import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCorreoComponent } from './mostrar-correo.component';

describe('MostrarCorreoComponent', () => {
  let component: MostrarCorreoComponent;
  let fixture: ComponentFixture<MostrarCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarCorreoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
