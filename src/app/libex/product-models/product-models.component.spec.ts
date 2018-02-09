import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModelsComponent } from './product-models.component';

describe('ProductModelsComponent', () => {
  let component: ProductModelsComponent;
  let fixture: ComponentFixture<ProductModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
