import React from 'react'
import ReactDOM from 'react-dom/client'
import { PbButton } from './components/buttons/PbButton'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <PbButton isTransparent={false} text="Log In" />

    <PbButton isTransparent text="Sign Up" />
  </>,
)
