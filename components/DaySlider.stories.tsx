import type { Meta, StoryObj } from '@storybook/react';

import { DaySlider } from './DaySlider';

const meta = {
    title: 'Home/SlideSelect',
    component: DaySlider,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
  } satisfies Meta<typeof DaySlider>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {
        dates: Array.from({length: 7}).map((_,index)=> `07/1${index}/2023`),
        onSlideClick: () => {},
    }
  }