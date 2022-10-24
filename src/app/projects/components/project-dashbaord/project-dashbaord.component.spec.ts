import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDashbaordComponent } from './project-dashbaord.component';

describe('ProjectDashbaordComponent', () => {
  let component: ProjectDashbaordComponent;
  let fixture: ComponentFixture<ProjectDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDashbaordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
