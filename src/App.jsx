import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Examples from './pages/Examples'
import ContextPage from './pages/ContextPage'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Examples />} />
        <Route path="/context-page" element={<ContextPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
