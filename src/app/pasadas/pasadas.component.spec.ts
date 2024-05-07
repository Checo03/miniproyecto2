import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasadasComponent } from './pasadas.component';

describe('PasadasComponent', () => {
  let component: PasadasComponent;
  let fixture: ComponentFixture<PasadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
