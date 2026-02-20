import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Features from './pages/Features'
import Manifesto from './pages/Manifesto'
import Membership from './pages/Membership'
import Contact from './pages/Contact'
import Dispatches from './pages/Dispatches'
import DispatchView from './pages/DispatchView'
import Store from './pages/Store'
import Welcome from './pages/Welcome'
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
          <Route path="/dispatches" element={<Dispatches />} />
          <Route path="/dispatches/:id" element={<DispatchView />} />
          <Route path="/store" element={<Store />} />
          <Route path="/welcome" element={<Welcome />} />
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
