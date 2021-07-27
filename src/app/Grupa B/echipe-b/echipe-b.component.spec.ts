import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchipeBComponent } from './echipe-b.component';

describe('EchipeBComponent', () => {
  let component: EchipeBComponent;
  let fixture: ComponentFixture<EchipeBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchipeBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchipeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
