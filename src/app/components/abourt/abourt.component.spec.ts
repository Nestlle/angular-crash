import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbourtComponent } from './abourt.component';

describe('AbourtComponent', () => {
  let component: AbourtComponent;
  let fixture: ComponentFixture<AbourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbourtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
