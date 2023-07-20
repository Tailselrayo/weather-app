import type { Meta, StoryObj } from '@storybook/react';

import { WindDisplay } from "./WindDisplay";

const meta = {
    title: 'Display/Windspeed',
    component: WindDisplay,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  } satisfies Meta<typeof WindDisplay>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
  export const Default: Story = {
    args: {
      windspeedValue: 0,
      unit: 'kmh',
    },
  };
  
  export const Miles: Story = {
    args: {
        windspeedValue: 0,
        unit: 'mph',
    },
  };
  
  export const StrongWind: Story = {
    args: {
      windspeedValue: 10000,
      unit: 'ms',
    },
  };
  
