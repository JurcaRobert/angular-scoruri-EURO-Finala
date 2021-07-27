import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchipeEComponent } from './echipe-e.component';

describe('EchipeEComponent', () => {
  let component: EchipeEComponent;
  let fixture: ComponentFixture<EchipeEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchipeEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchipeEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
