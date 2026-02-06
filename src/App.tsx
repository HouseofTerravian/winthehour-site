import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Features from './pages/Features'
import About from './pages/About'
import Store from './pages/Store'
import Contact from './pages/Contact'
import CampusLanding from './pages/CampusLanding'
import RemoteLanding from './pages/RemoteLanding'
import FoundersLanding from './pages/FoundersLanding'
import FocusModeLanding from './pages/FocusModeLanding'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/campus" element={<CampusLanding />} />
        <Route path="/remote" element={<RemoteLanding />} />
        <Route path="/founders" element={<FoundersLanding />} />
        <Route path="/focus" element={<FocusModeLanding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
