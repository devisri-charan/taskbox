// Toast.stories.js
import { Toast } from './Toast';

export default {
  title: 'Example/Toast',
  component: Toast,
  argTypes: {
    backgroundColor: { control: 'color' },
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    hasIcon: { control: 'boolean' },
    hasDivider: { control: 'boolean' },
    hasAction: { control: 'boolean' },
    message: { control: 'text' },
    actionText: { control: 'text' },
  },
};

export const Info = {
  args: {
    type: 'info',
    message: 'This is an info message',
  },
};

export const Success = {
  args: {
    type: 'success',
    message: 'This is a success message',
  },
};

export const Warning = {
  args: {
    type: 'warning',
    message: 'This is a warning message',
  },
};

export const Error = {
  args: {
    type: 'error',
    message: 'This is an error message',
  },
};
