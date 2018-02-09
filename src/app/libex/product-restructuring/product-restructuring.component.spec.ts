import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRestructuringComponent } from './product-restructuring.component';

describe('ProductRestructuringComponent', () => {
  let component: ProductRestructuringComponent;
  let fixture: ComponentFixture<ProductRestructuringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRestructuringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRestructuringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
