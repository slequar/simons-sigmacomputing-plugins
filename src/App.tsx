import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Clock from './plugins/clock'
import OnLoad from './plugins/onLoad'


function App() {
  // Get the base URL from import.meta.env.BASE_URL (set by Vite from vite.config.ts)
  const basename = import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/clock" element={<Clock />} />
        <Route path="/onload" element={<OnLoad />} />
        <Route
          path="/"
          element={
            <div className="landing-page">
              <header className="header">
                <h1>Sigma Computing Plugins</h1>
                <p className="subtitle">Simon's Plugin Repository</p>
              </header>
              <main className="main-content">
                <section className="hero">
                  <h2>Welcome</h2>
                  <p>This is a repository for Sigma Computing plugins built with React, TypeScript, and Vite.</p>
                </section>
              </main>
              <footer className="footer">
                <p>&copy; 2025 Simon's Sigma Computing Plugins</p>
              </footer>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
