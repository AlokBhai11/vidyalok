import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Layout Components/Header'
import Home from './components/Page Components/Home'


function App() {

  return (
    <>
      <header className="header hero">
        <Header />
      </header>

      <section id="center">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/feature' element={<h1>Hii</h1>}/>
          <Route path='/how-it-works' element={<h1>How it Works</h1>}/>
          <Route path='/pricing' element={<h1>Pricing</h1>}/>
          <Route path='/reviews' element={<h1>Revieews</h1>} />
        </Routes>
      </section>
      
      <footer id="footer"></footer>
    </>
  )
}

export default App
