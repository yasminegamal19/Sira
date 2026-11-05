import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  if (path === '/signup') {
    return <SignupPage />
  }
  if (path === '/login') return <LoginPage />

  return <LandingPage />
}
