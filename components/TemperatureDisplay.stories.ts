import type { Meta, StoryObj } from '@storybook/react';

import {TemperatureDisplay} from '../components/TemperatureDisplay'

const meta = {
    title: 'Display/Temperature',
    component: TemperatureDisplay,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
  } satisfies Meta<typeof TemperatureDisplay>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
  export const Default: Story = {
    args: {
      temperature: 0,
      unit: "°C",
    },
  };
  
  export const Farenheit: Story = {
    args: {
        temperature: 34,
        unit: '°F'
    },
  };
  

  