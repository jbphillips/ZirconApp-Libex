import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerValuePropositionComponent } from './customer-value-proposition.component';

describe('CustomerValuePropositionComponent', () => {
  let component: CustomerValuePropositionComponent;
  let fixture: ComponentFixture<CustomerValuePropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerValuePropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerValuePropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
