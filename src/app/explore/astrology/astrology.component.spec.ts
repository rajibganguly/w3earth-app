import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologyComponent } from './astrology.component';

describe('AstrologyComponent', () => {
  let component: AstrologyComponent;
  let fixture: ComponentFixture<AstrologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstrologyComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
