import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Campus from './pages/Campus'
import StudentLife from './pages/StudentLife'
import News from './pages/News'
import Apply from './pages/Apply'
import Contact from './pages/Contact'
import Achievements from './pages/Achievements'
import ChatBot from './components/ChatBot'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/news" element={<News />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
      <ChatBot />
    </BrowserRouter>
  )
}
