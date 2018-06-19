import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomobservableComponent } from './customobservable.component';

describe('CustomobservableComponent', () => {
  let component: CustomobservableComponent;
  let fixture: ComponentFixture<CustomobservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomobservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
