'use client'
import React from 'react'

type ApplyFormProps = { program?: string }

type FormState = {
  name: string
  email: string
  phone: string
  program?: string
  role: string
  startupName?: string
  stage?: string
  website?: string
  message: string
  pitchFileName?: string
}

export default function ApplyForm({ program }: ApplyFormProps) {
  const [form, setForm] = React.useState<FormState>({
    name: '',
    email: '',
    phone: '',
    program: program || '',
    role: '',
    startupName: '',
    stage: '',
    website: '',
    message: '',
    pitchFileName: '',
  })
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState<string | null>(null)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (program) setForm(f => ({ ...f, program }))
  }, [program])

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(s => ({ ...s, [name]: value }))
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    // just store filename for UI; actual upload would be to a server/storage
    setForm(s => ({ ...s, pitchFileName: file.name }))
  }

  function validate() {
    if (!form.name.trim()) return 'Please enter your full name.'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email.'
    if (!form.role.trim()) return 'Please state your role (founder, dev, student, etc.).'
    return null
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    const v = validate()
    if (v) {
      setError(v)
      return
    }

    setLoading(true)
    try {
      // Mock submission - replace with your API
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess('Application received. We will review and contact shortlisted candidates.')
        setForm({
          name: '',
          email: '',
          phone: '',
          program: program || '',
          role: '',
          startupName: '',
          stage: '',
          website: '',
          message: '',
          pitchFileName: '',
        })
      } else {
        setError('Submission failed. Please try again later.')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    }
    setLoading(false)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-white dark:bg-[#0b1220] p-6 rounded-xl border border-[var(--primary)]/10 shadow-sm">
      {error && <div className="text-sm text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded">{error}</div>}
      {success && <div className="text-sm text-green-700 bg-green-50 dark:bg-green-900/20 p-3 rounded">{success}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          <div className="text-sm mb-1">Full name</div>
          <input name="name" value={form.name} onChange={onChange} className="w-full p-3 rounded border" placeholder="Name" />
        </label>

        <label className="block">
          <div className="text-sm mb-1">Email</div>
          <input name="email" type="email" value={form.email} onChange={onChange} className="w-full p-3 rounded border" placeholder="you@company.com" />
        </label>

        <label className="block">
          <div className="text-sm mb-1">Phone (optional)</div>
          <input name="phone" value={form.phone} onChange={onChange} className="w-full p-3 rounded border" placeholder="+234 80..." />
        </label>

        <label className="block">
          <div className="text-sm mb-1">Program (preselected)</div>
          <input name="program" value={form.program} onChange={onChange} className="w-full p-3 rounded border bg-gray-50 dark:bg-[#071025]" placeholder="Program" />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label>
          <div className="text-sm mb-1">Role</div>
          <input name="role" value={form.role} onChange={onChange} className="w-full p-3 rounded border" placeholder="Founder / Developer / Student" />
        </label>

        <label>
          <div className="text-sm mb-1">Startup / Project name (optional)</div>
          <input name="startupName" value={form.startupName} onChange={onChange} className="w-full p-3 rounded border" placeholder="My startup" />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label>
          <div className="text-sm mb-1">Stage</div>
          <select name="stage" value={form.stage} onChange={onChange} className="w-full p-3 rounded border">
            <option value="">Select stage</option>
            <option value="idea">Idea / Concept</option>
            <option value="prototype">Prototype</option>
            <option value="trading">Early traction</option>
            <option value="scale">Scaling</option>
          </select>
        </label>

        <label>
          <div className="text-sm mb-1">Website / Portfolio (optional)</div>
          <input name="website" value={form.website} onChange={onChange} className="w-full p-3 rounded border" placeholder="https://..." />
        </label>
      </div>

      <label>
        <div className="text-sm mb-1">Short pitch / message</div>
        <textarea name="message" value={form.message} onChange={onChange} rows={4} className="w-full p-3 rounded border" placeholder="Tell us about your idea, what you want to learn, or the support you need." />
      </label>

      <label className="block">
        <div className="text-sm mb-1">Pitch deck or portfolio (optional)</div>
        <input type="file" accept=".pdf,.doc,.docx,.zip,.png,.jpg" onChange={onFileChange} className="w-full text-sm" />
        {form.pitchFileName && <div className="mt-2 text-sm text-[var(--text-secondary)]">Selected file: {form.pitchFileName}</div>}
      </label>

      <div className="flex items-center justify-between">
        <div className="text-sm text-[var(--text-secondary)]">We respect your privacy. Your data is used only for application review.</div>
        <button type="submit" disabled={loading} className="px-6 py-2 rounded-lg bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary)]/90 transition">
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  )
}
