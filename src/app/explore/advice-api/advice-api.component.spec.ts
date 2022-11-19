import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/data-service.service';

import { AdviceAPIComponent } from './advice-api.component';

describe('AdviceAPIComponent', () => {
  let component: AdviceAPIComponent;
  let fixture: ComponentFixture<AdviceAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceAPIComponent ],
      providers: [DataService, HttpClient, HttpHandler]
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
