import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteRuleComponent } from './route-rule.component';

describe('RouteRuleComponent', () => {
  let component: RouteRuleComponent;
  let fixture: ComponentFixture<RouteRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
