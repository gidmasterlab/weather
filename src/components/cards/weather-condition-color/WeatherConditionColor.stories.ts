import type { Meta, StoryObj } from '@storybook/vue3'
import WeatherConditionColor from './WeatherConditionColor.vue'

type StoryArgs = typeof WeatherConditionColor

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  title: 'Cards/Weather Condition Color',
  // component: WeatherConditionColor,
  argTypes: {
    darken: { control: 'boolean' },
    temperature: { control: 'number' }
  },
  render: (args) => ({
    components: { WeatherConditionColor },
    setup() {
      return { args }
    },
    template: `
      <WeatherConditionColor v-bind="args">
        <div style="width:100%; height: 200px;" />
      </WeatherConditionColor>
    `
  })
}

export default meta
type Story = StoryObj<StoryArgs>

export const Default: Story = {
  args: {
    darken: false,
    temperature: 40
  }
}
