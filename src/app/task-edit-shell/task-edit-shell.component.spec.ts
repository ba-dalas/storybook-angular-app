import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditShellComponent } from './task-edit-shell.component';

describe('TaskEditShellComponent', () => {
  let component: TaskEditShellComponent;
  let fixture: ComponentFixture<TaskEditShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskEditShellComponent]
    });
    fixture = TestBed.createComponent(TaskEditShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
