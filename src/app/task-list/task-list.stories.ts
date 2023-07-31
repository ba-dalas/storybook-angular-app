import { Meta, StoryObj } from "@storybook/angular";
import { TaskListComponent } from "./task-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { moduleMetadata , componentWrapperDecorator } from '@storybook/angular';
import { basicListData } from "./list.test-data";
import { MatButtonModule } from "@angular/material/button";


const meta: Meta<TaskListComponent> = {
  component: TaskListComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule
      ],

    }),

  ],
  // render: (args: TaskListComponent) => ({
  //   props: {
  //     ...args
  //   },
  // }),
}

export default meta;
type Story = StoryObj<TaskListComponent>;

export const TaskListPage: Story = {
  args: {
    taskList: [
      ...basicListData
    ],
    totalElements: 15,
    pageSize: 5

  },
  decorators: [componentWrapperDecorator((story) =>
    `<div class="bg-teal-500 ">
        ${story}
    </div>`
  )],

};

