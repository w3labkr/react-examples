import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { TailwindIndicator } from '@/components/tailwind-indicator'

export default function Layout() {
  return (
    <>
      <div>
        <header></header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
      <TailwindIndicator />
    </>
  )
}
