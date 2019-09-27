import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAtomApiComponent } from './create-atom-api.component';

describe('CreateAtomApiComponent', () => {
  let component: CreateAtomApiComponent;
  let fixture: ComponentFixture<CreateAtomApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAtomApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAtomApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
