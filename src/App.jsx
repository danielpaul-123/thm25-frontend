import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const ComingSoon = lazy(() => import('./pages/ComingSoon'))
const NotFound = lazy(() => import('./pages/NotFound'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'))

// Example page components (create these files separately)
function About() {
  return <div><h1>About Page</h1></div>
}

function Contact() {
  return <div><h1>Contact Page</h1></div>
}

// function NotFound() {
//   return <div><h1>404 - Page Not Found</h1></div>
// }

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
