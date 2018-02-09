import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueChainComponent } from './valueChain.component';

describe('HelloComponent', () => {
  let component: ValueChainComponent;
  let fixture: ComponentFixture<ValueChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
