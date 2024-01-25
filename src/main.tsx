import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

// error TS2345: Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element | DocumentFragment'.
// Type 'null' is not assignable to type 'Element | DocumentFragment'.
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode></React.StrictMode>
  <App />
)
