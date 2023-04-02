import React from 'react'
import { ThemeProvider } from '@providers/index'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout, ContentContainer } from '@wrappers/index'
import { Header, SideThemeSwitch } from '@components/index'
import { MainPage, ContactPage, ProjectsPage } from '@pages/index'

export const App = () => {
  const location = useLocation()
  return (
    <ThemeProvider>
      <Layout>
        <>
          <Header />
          <ContentContainer>
            <>
              <SideThemeSwitch />
              <Routes location={location} key={location.pathname}>
                <Route path='/' element={<MainPage />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/about' element={<div>about</div>} />
                <Route path='/contact' element={<ContactPage />} />
              </Routes>
            </>
          </ContentContainer>
        </>
      </Layout>
    </ThemeProvider>
  )
}
