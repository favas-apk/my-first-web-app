import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'




function TopBar() {
  return (
    <div className="top-bar">
      <div>📍 Wandoor - Pallikunnu Pin 679328</div>
      <div>☎ +91 944 635 6432</div>
      <div>✉ arokyahomoeopathywdr@gmail.com</div>
      <div>f  ♥  ◎  G  in</div>
    </div>
  )
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>arokya</h1>
        <span>HOMOEOPATHY</span>
      </div>

      <div className="nav-links">
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">SERVICE</a>
        <a href="#">BLOG</a>
        <a href="#">CONTACT</a>
      </div>

      <button className="book-btn">BOOK NOW</button>
    </nav>
  )
}

function Header() {
  return (
    <header>
      <TopBar />
      <Navbar />
    </header>
  )
}

function App() {
  return (
    <div>
      <Header />
    </div>
  )
}

export default App

