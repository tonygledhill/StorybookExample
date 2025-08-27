import type { Preview } from '@storybook/vue3-vite'
import { sb } from 'storybook/test'

sb.mock(import('../src/lib/settings.ts'), { spy: true })

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
