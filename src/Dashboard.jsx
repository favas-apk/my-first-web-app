
import { useState } from 'react'
import { supabase } from './supabaseClient'
import './Dashboard.css'

function Dashboard({ session }) {
  const [activeMenu, setActiveMenu] = useState('Dashboard')

  const menuItems = [
    { name: 'Dashboard', icon: '⌂' },
    { name: 'New Case', icon: '+' },
    { name: 'All Patients', icon: '♙' },
    { name: 'Recent', icon: '◷' },
    { name: 'Pharmacy', icon: '✚' },
  ]

  async function handleLogout() {
    await supabase.auth.signOut()
  }

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon">A</div>
          <div>
            <h2>arokya</h2>
            <span>HOMOEOPATHY</span>
          </div>
        </div>

        <p className="menu-label">MAIN MENU</p>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`menu-item ${
                activeMenu === item.name ? 'active' : ''
              }`}
              onClick={() => setActiveMenu(item.name)}
            >
              <span className="menu-icon">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <p>Clinic Management System</p>
          <button onClick={handleLogout}>↪ Sign Out</button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>{activeMenu}</h1>
            <p>Welcome to Arokya Homoeopathy</p>
          </div>
          <div className="user-info">
            <div className="user-avatar">A</div>
            <span>{session?.user?.email}</span>
          </div>
        </header>

        {activeMenu === 'Dashboard' ? (
          <>
            <section className="welcome-card">
              <div>
                <h2>Welcome back!</h2>
                <p>Here's what's happening at your clinic today.</p>
              </div>
              <span className="welcome-icon">✚</span>
            </section>

            <section className="stats-grid">
              <div className="stat-card">
                <span>Total Patients</span>
                <h2>0</h2>
                <p>Registered patients</p>
              </div>
              <div className="stat-card">
                <span>Today's Cases</span>
                <h2>0</h2>
                <p>Cases created today</p>
              </div>
              <div className="stat-card">
                <span>Recent Visits</span>
                <h2>0</h2>
                <p>Recent patient visits</p>
              </div>
              <div className="stat-card">
                <span>Medicines</span>
                <h2>0</h2>
                <p>Items in pharmacy</p>
              </div>
            </section>

            <section className="dashboard-content-card">
              <h3>Quick Actions</h3>
              <div className="quick-actions">
                <button onClick={() => setActiveMenu('New Case')}>
                  <span>＋</span>
                  <strong>New Case</strong>
                  <small>Register a new patient case</small>
                </button>
                <button onClick={() => setActiveMenu('All Patients')}>
                  <span>♙</span>
                  <strong>All Patients</strong>
                  <small>View patient records</small>
                </button>
                <button onClick={() => setActiveMenu('Pharmacy')}>
                  <span>✚</span>
                  <strong>Pharmacy</strong>
                  <small>Manage medicines</small>
                </button>
              </div>
            </section>
          </>
        ) : (
          <section className="dashboard-content-card section-placeholder">
            <h2>{activeMenu}</h2>
            <p>
              The {activeMenu} section will be developed next.
            </p>
          </section>
        )}
      </main>
    </div>
  )
}

export default Dashboard
