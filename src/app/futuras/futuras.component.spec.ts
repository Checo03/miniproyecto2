import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturasComponent } from './futuras.component';

describe('FuturasComponent', () => {
  let component: FuturasComponent;
  let fixture: ComponentFixture<FuturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuturasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
