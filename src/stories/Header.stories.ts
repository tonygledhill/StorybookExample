import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { fn } from 'storybook/test'

import MyHeader from './Header.vue'

import { mocked } from 'storybook/test'

import { getBackgroundColour } from '../lib/settings'

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Example/Header',
  component: MyHeader,
  render: (args: any) => ({
    components: { MyHeader },
    setup() {
      return { args }
    },
    template: '<my-header :user="args.user" />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  beforeEach: () => {
    /*
     * The `trackEvent` function is already a mock!
     * The `mocked` utility is just for proper mock function types
     */
    mocked(getBackgroundColour).mockResolvedValue('pinkyMocked')
  },
  play: async () => {
    // ... interact with the component
    //await expect(trackEvent).toHaveBeenCalledWith('dashboard-viewed')
  },
} satisfies Meta<typeof MyHeader>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
}

export const LoggedOut: Story = {
  args: {
    user: null,
  },
}
