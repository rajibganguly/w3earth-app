import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprocessComponent } from './myprocess.component';

describe('MyprocessComponent', () => {
  let component: MyprocessComponent;
  let fixture: ComponentFixture<MyprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprocessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
