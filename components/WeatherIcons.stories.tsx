import type { Meta, StoryObj } from '@storybook/react';

import { WeatherIcons } from "./WeatherIcons";

const meta = {
    title: 'Display/WeatherIcons',
    component: WeatherIcons,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  } satisfies Meta<typeof WeatherIcons>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default : Story = {
    args: {
        weatherCode: 1,
    }
  }

  export const HugeIcon: Story = {
    args: {
        weatherCode: Math.floor(Math.random()*100),
        size: 300,
    }
  }

  export const SmallIcon: Story = {
    args: {
        weatherCode: Math.floor(Math.random()*100),
        size: 10,
    }
  }