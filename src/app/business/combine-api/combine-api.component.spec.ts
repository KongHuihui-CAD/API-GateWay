import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineApiComponent } from './combine-api.component';

describe('CombineApiComponent', () => {
  let component: CombineApiComponent;
  let fixture: ComponentFixture<CombineApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombineApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
