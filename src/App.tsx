import Header from './Header'
import Footer from './Footer'
import './App.css'
import { Outlet } from '@tanstack/react-router'

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  )
}

export default App
