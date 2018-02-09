import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentRoadmapComponent } from './development-roadmap.component';

describe('DevelopmentRoadmapComponent', () => {
  let component: DevelopmentRoadmapComponent;
  let fixture: ComponentFixture<DevelopmentRoadmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentRoadmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
