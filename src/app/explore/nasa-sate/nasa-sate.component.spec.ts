import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaSateComponent } from './nasa-sate.component';

describe('NasaSateComponent', () => {
  let component: NasaSateComponent;
  let fixture: ComponentFixture<NasaSateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaSateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaSateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
