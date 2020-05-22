import { configure, addDecorator } from '@storybook/react'
import { addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import withGlobalStyling from '../src/utils/storybook-decorators/withGlobalStyling'
import withThemeProvider from '../src/utils/storybook-decorators/withThemeProvider'

const NEW_VIEWPORTS = {
  desktop1080: {
    name: 'Desktop 1080',
    styles: {
      width: '1080px',
      height: '768px',
    },
  },
  responsive: {
    name: 'responsive',
    styles: {
      width: '100%',
      height: '100vh',
    },
  },
}

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...NEW_VIEWPORTS,
    },
  },
})

addDecorator(withGlobalStyling)

addDecorator(withThemeProvider)

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ''
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}

configure(loadStories, module)
