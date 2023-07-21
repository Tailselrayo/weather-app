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
        tempUnit: "°C",
        windUnit: "kmh",
        time: Array.from({length: 7}).map((_,index)=> `07/1${index}/2023`),
        onSlideClick: () => {},
        temperature_2m_max: Array.from({length: 7}).map(() => Math.ceil(Math.random()*40)),
        temperature_2m_min: Array.from({length: 7}).map(() => Math.floor(Math.random()*20)),
        weathercode: Array.from({length: 7}).map(() => Math.floor(Math.random()*100)),
        windspeed_10m_max: Array.from({length: 7}).map(()=>Math.floor(Math.random()*300)/10)
    }
  }
