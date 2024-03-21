# Toast Component

This is a custom Toast notification component for React applications, which can be viewed and tested using Storybook.

## Prerequisites

Before you begin, ensure you have installed:

- Node.js (version 12 or newer)
- npm (usually comes with Node.js)

## Installation

Follow these steps to set up the project locally:

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:
   ```bash
   cd path-to-your-project
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

4. Start the Storybook server:
   ```bash
   npm run storybook
   ```

After running the above command, Storybook will start and open in your default web browser. If it doesn't automatically open, you can manually visit the URL provided in the terminal output (typically `http://localhost:6006/`).

## Viewing the Toast Component

Once Storybook is running, you can view the Toast component by navigating to the "Example/Toast" section in the Storybook sidebar. Here you will find different variants of the Toast component, such as `Info`, `Success`, `Warning`, and `Error`.

You can interact with the component's props via the 'Controls' panel to see how it behaves with different settings. For example, you can change the message, toggle the icon, and test the close functionality.

## Customizing the Component

The Toast component can be customized with various props:

- `message`: The message text displayed on the toast.
- `hasIcon`: Boolean indicating whether an icon should be displayed.
- `actionText`: Text for the action button.
- `backgroundColor`: The background color of the toast.

You can modify these props directly in the Storybook interface to test different configurations.

Thank you for using the Toast component!