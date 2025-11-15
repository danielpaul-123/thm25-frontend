import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'

// Example page components (create these files separately)
function About() {
  return <div><h1>About Page</h1></div>
}

function Contact() {
  return <div><h1>Contact Page</h1></div>
}

function NotFound() {
  return <div><h1>404 - Page Not Found</h1></div>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
