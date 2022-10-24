import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceAPIComponent } from './advice-api.component';

describe('AdviceAPIComponent', () => {
  let component: AdviceAPIComponent;
  let fixture: ComponentFixture<AdviceAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
