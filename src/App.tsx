import React from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Layout } from './components/Layout'
import { ThemeProvider } from './providers/ThemeProvider'

export const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <>
          <Header />
          <Main />
        </>
      </Layout>
    </ThemeProvider>
  )
}
