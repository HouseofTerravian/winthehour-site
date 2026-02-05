import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WinTheHourLanding from './components/WinTheHourLanding'
import CampusLanding from './pages/CampusLanding'
import RemoteLanding from './pages/RemoteLanding'
import FoundersLanding from './pages/FoundersLanding'
import FocusModeLanding from './pages/FocusModeLanding'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WinTheHourLanding />} />
        <Route path="/campus" element={<CampusLanding />} />
        <Route path="/remote" element={<RemoteLanding />} />
        <Route path="/founders" element={<FoundersLanding />} />
        <Route path="/focusmode" element={<FocusModeLanding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
