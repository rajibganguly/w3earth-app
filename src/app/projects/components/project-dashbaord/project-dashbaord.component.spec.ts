import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/data-service.service';

import { ProjectDashbaordComponent } from './project-dashbaord.component';

describe('ProjectDashbaordComponent', () => {
  let component: ProjectDashbaordComponent;
  let fixture: ComponentFixture<ProjectDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDashbaordComponent ],
      providers: [DataService, HttpClient, HttpHandler]
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
