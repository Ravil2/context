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
      <main className="max-w-4xl mx-auto pt-20 pb-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/context-page" element={<ContextPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
