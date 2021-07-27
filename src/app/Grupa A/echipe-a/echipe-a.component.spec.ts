import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchipeAComponent } from './echipe-a.component';

describe('EchipeAComponent', () => {
  let component: EchipeAComponent;
  let fixture: ComponentFixture<EchipeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchipeAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchipeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
