
import { useState } from 'react'
import { supabase } from './supabaseClient'
import './ContactForm.css'

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const { error } = await supabase
        .from('tbl_messages')
        .insert([form])

      if (error) throw error

      setStatus('Message sent successfully!')

      const whatsappNumber = '919446356432'

const whatsappMessage = `
New Clinic Enquiry

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message}
`

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

window.open(whatsappUrl, '_blank')

      setForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.error('Supabase error:', error.message)
      setStatus('Unable to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact-section">
      <h2>Get in Touch</h2>
      <p>Have a question? Send us a message.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={form.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {status && <p>{status}</p>}
      </form>
    </section>
  )
}

export default ContactForm
