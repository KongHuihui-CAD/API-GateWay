import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomApiComponent } from './atom-api.component';

describe('AtomApiComponent', () => {
  let component: AtomApiComponent;
  let fixture: ComponentFixture<AtomApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
