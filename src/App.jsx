import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { LoaderOne } from './components/ui/loader'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const ComingSoon = lazy(() => import('./pages/ComingSoon'))
const NotFound = lazy(() => import('./pages/NotFound'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'))

// Simple Suspense Fallback
const SuspenseLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
    <LoaderOne />
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SuspenseLoader />}>
        <Routes>
          {/* <Route path="/" element={<ComingSoon />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
