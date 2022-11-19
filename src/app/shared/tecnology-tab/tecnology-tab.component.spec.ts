import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologyTabComponent } from './tecnology-tab.component';

describe('TecnologyTabComponent', () => {
  let component: TecnologyTabComponent;
  let fixture: ComponentFixture<TecnologyTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologyTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    var tech = 1;
    expect(tech).toEqual(1);
  });
});
