import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmcancelComponent } from './confirmcancel.component';

describe('ConfirmcancelComponent', () => {
  let component: ConfirmcancelComponent;
  let fixture: ComponentFixture<ConfirmcancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmcancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmcancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
