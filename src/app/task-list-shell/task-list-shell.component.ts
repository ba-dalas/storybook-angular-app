import { Component, OnInit } from '@angular/core';
import { TaskInfo } from '../model/task.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PageChangeInfo } from '../model/page-change-info.model';

@Component({
  selector: 'app-task-list-shell',
  templateUrl: './task-list-shell.component.html',
  styleUrls: ['./task-list-shell.component.css']
})
export class TaskListShellComponent implements OnInit {

  private taskListSubject = new BehaviorSubject<TaskInfo[]>([]);
  private pageSizeSubject = new BehaviorSubject<number>(0);
  private totalElementsSubject = new BehaviorSubject<number>(0);
  private errorMessageSubject = new BehaviorSubject<string>('');

  taskInfoList$: Observable<TaskInfo[]> = this.taskListSubject.asObservable();
  pageSize$: Observable<number> = this.pageSizeSubject.asObservable();
  totalElements$: Observable<number> = this.totalElementsSubject.asObservable();
  errorMessage$: Observable<string> = this.errorMessageSubject.asObservable();
  pageSize = 10;
  totalElements: number = 0;
  errorMessage = '';
  searchText!:string;


  constructor(
     private readonly router: Router,
     private readonly route: ActivatedRoute
    ) {


  }

  ngOnInit(): void {
    // this.gettask(0, 10);

  }

  createBtnOwnAcListWithSerial(content: TaskInfo[]): TaskInfo[] {
    let i = 0;
    return content.map(btnOwnAcList => {
      i++;
      return ({
        ...btnOwnAcList,
        serialNo: i
      } as TaskInfo)
    });
  }

  getTask(pageIndex: number, pageSize: number) {



  }

  onPageChanged(pageChangeInfo: PageChangeInfo): void {

  }



  createTask(): void {
    this.router.navigate(['task', '0', 'edit'], { relativeTo: this.route.parent });
  }

  viewTask(currentFundTransferId: string): void {
    console.log(`updateBetweenOwnAccountFundTransfer: ${currentFundTransferId}`)
  }




}
