import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemsDataComponent } from './gems-data.component';

describe('GemsDataComponent', () => {
  let component: GemsDataComponent;
  let fixture: ComponentFixture<GemsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
