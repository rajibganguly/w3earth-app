import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTopicComponent } from './list-of-topic.component';

describe('ListOfTopicComponent', () => {
  let component: ListOfTopicComponent;
  let fixture: ComponentFixture<ListOfTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
