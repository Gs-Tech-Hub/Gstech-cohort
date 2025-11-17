'use client'
import React from 'react'

export default function ContactForm() {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = React.useState(false)
  const [status, setStatus] = React.useState<{ ok: boolean; msg: string } | null>(null)

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm(s => ({ ...s, [name]: value }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) setStatus({ ok: true, msg: 'Message sent. We will reply within 48 hours.' })
      else setStatus({ ok: false, msg: 'Failed to send. Please try again later.' })
    } catch {
      setStatus({ ok: false, msg: 'Network error. Please try again.' })
    }

    setLoading(false)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 w-full max-w-full">
      {status && (
        <div
          className={`p-3 rounded ${
            status.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}
        >
          {status.msg}
        </div>
      )}

      <div className="w-full">
        <label className="text-sm block mb-1">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          className="w-full p-3 rounded border"
          placeholder="Your full name"
        />
      </div>

      <div className="w-full">
        <label className="text-sm block mb-1">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          className="w-full p-3 rounded border"
          placeholder="you@company.com"
        />
      </div>

      <div className="w-full">
        <label className="text-sm block mb-1">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          className="w-full p-3 rounded border"
          rows={4}
          placeholder="How can we help?"
        />
      </div>

      <div className="flex justify-end">
        <button
          disabled={loading}
          className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white font-semibold"
        >
          {loading ? 'Sending...' : 'Send message'}
        </button>
      </div>
    </form>
  )
}
