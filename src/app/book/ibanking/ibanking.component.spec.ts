import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbankingComponent } from './ibanking.component';

describe('IbankingComponent', () => {
  let component: IbankingComponent;
  let fixture: ComponentFixture<IbankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
