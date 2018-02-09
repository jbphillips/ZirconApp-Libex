import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemsOverviewComponent } from './gems-overview.component';

describe('GemsOverviewComponent', () => {
  let component: GemsOverviewComponent;
  let fixture: ComponentFixture<GemsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
