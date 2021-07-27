import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalaComponent } from './finala.component';

describe('FinalaComponent', () => {
  let component: FinalaComponent;
  let fixture: ComponentFixture<FinalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
