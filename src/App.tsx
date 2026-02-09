import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Features from './pages/Features'
import Manifesto from './pages/Manifesto'
import Membership from './pages/Membership'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Store from './pages/Store'
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
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/store" element={<Store />} />
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
