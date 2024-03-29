import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {
  Meta,
  StoryObj,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { TaskEditComponent } from './task-edit.component';
import { MatButtonModule } from '@angular/material/button';
import { userEvent, within } from '@storybook/testing-library';

export const actionsData = {
  createOutput: action('createOutput'),
};

const meta: Meta<TaskEditComponent> = {
  component: TaskEditComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule
      ],
    }),
    componentWrapperDecorator(
      (story) => `<!doctype html><html lang="en">
    <head><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></head>
    <body class="bg-teal-500 ">${story}</body>
    </html>`
    ),
  ],
  render: (args: TaskEditComponent) => ({
    props: {
      createOutput: actionsData.createOutput,
    },
  }),
};

export default meta;
type Story = StoryObj<TaskEditComponent>;

export const TaskEditPage: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons: HTMLElement[] = canvas.queryAllByRole('button');
    const saveButton= buttons[0];
    await userEvent.click(saveButton);


  },
};


