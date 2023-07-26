import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import { TaskInfo } from '../model/task.model';
import { PageChangeInfo } from '../model/page-change-info.model';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnChanges, AfterViewInit, OnDestroy {

  @Input() taskList!: TaskInfo[] | null;
  @Input() pageSize!: number | null;
  @Input() totalElements!: number | null;
  @Input() errorMessage!: string | null;

  @Output() pageChanged = new EventEmitter<PageChangeInfo>();
  @Output() onCreate = new EventEmitter<void>();
  @Output() view = new EventEmitter<string>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  sub!: Subscription;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.taskList)
  }

  ngAfterViewInit(): void {

    this.sub = this.paginator.page.pipe(
      tap(() =>

        this.pageChanged.emit({
          pageIndex: this.paginator.pageIndex,
          pageSize: this.paginator.pageSize
        } as PageChangeInfo)

      )
    ).subscribe();

  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();

  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  create(): void {
    this.onCreate.emit()
  }


}
