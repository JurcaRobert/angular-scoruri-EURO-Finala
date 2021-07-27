import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchipeFComponent } from './echipe-f.component';

describe('EchipeFComponent', () => {
  let component: EchipeFComponent;
  let fixture: ComponentFixture<EchipeFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchipeFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchipeFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
