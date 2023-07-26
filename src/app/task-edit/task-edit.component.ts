import { ChangeDetectionStrategy, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../model/task-info.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEditComponent implements OnChanges, OnInit {

  taskForm!: FormGroup;

  @Output() createOutput = new EventEmitter<any>();


  constructor(private fb: FormBuilder,
     private readonly location: Location) {}

  ngOnInit(): void {
    this.initForCreate();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  initForCreate() {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required],
      taskPosition: ['', Validators.required],
    });
  }

  onBack() {
    this.location.back();
  }

  save() {
    // const taskInfo: Task = { ...this.taskForm.value };
    // console.log(taskInfo)
    this.createOutput.emit(this.taskForm.value);
  }

  get taskName() {
    return this.taskForm.controls['taskName'];
  }
  get taskPosition() {
    return this.taskForm.controls['taskPosition'];
  }
}
