import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockexchangeDetailsComponent } from './stockexchange-details.component';

describe('StockexchangeDetailsComponent', () => {
  let component: StockexchangeDetailsComponent;
  let fixture: ComponentFixture<StockexchangeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockexchangeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockexchangeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
