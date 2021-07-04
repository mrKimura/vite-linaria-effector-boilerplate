import React, { StrictMode } from 'react'
import { render } from 'react-dom'

import './ui/global/reset.css'
import './ui/global/fonts.css'

import { App } from './App'

export { globals } from './ui/global/global-styles'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
