import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchipeDComponent } from './echipe-d.component';

describe('EchipeDComponent', () => {
  let component: EchipeDComponent;
  let fixture: ComponentFixture<EchipeDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchipeDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchipeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
