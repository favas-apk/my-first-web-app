
import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import Login from './Login'
import Dashboard from './Dashboard'

function App() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '100px' }}>
      Loading...
    </p>
  }

  return session ? <Dashboard session={session} /> : <Login />
}

export default App
