import * as React from 'react'
import {
  createRoutesFromElements,
  createHashRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
import NotFound from './not-found'
import RootLayout from './pages/layout'
import Home from './pages/home'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      <Route path="" element={<Home />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
