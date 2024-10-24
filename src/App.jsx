import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage/HomePage'
import DashboardLayout from './components/DashboardLayout'
import PruebaPage from './pages/PruebaPage/PruebaPage'
import AlienPage from './pages/AlienPage/AlienPage'
import HumanPage from './pages/HumanPage/HumanPage'
import CharacterPage from './pages/CharacterPage/CharacterPage'
import AcercaDe from "./pages/AcercaDe/AcercaDe"

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Aliens" element={<AlienPage />} />
          <Route path="/Humans" element={<HumanPage />} />
          <Route path="/CharacterPage/:id" element={<CharacterPage />} />
          <Route path="/Acerca-de" element={<AcercaDe />} />
          <Route path="/Prueba" element={<PruebaPage />} />
        </Routes>
      </DashboardLayout>
    </Router>
  )
}

export default App
