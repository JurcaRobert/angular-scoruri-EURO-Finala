import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchipeCComponent } from './echipe-c.component';

describe('EchipeCComponent', () => {
  let component: EchipeCComponent;
  let fixture: ComponentFixture<EchipeCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchipeCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchipeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
