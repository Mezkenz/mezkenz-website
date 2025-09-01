'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface FormDict {
  name: string;
  company: string;
  email: string;
  message: string;
  send: string;
}

export default function ContactForm({ dict }: { dict: FormDict }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', company: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
      <Input value={form.name} onChange={update('name')} placeholder={dict.name} required />
      <Input value={form.company} onChange={update('company')} placeholder={dict.company} />
      <Input
        type="email"
        value={form.email}
        onChange={update('email')}
        placeholder={dict.email}
        required
        className="md:col-span-2"
      />
      <Textarea
        value={form.message}
        onChange={update('message')}
        placeholder={dict.message}
        required
        className="md:col-span-2"
      />
      <Button type="submit" className="md:col-span-2" disabled={status === 'loading'}>
        {status === 'loading' ? '...' : dict.send}
      </Button>
      {status === 'success' && <p className="md:col-span-2 text-sm text-green-400">Message sent!</p>}
      {status === 'error' && <p className="md:col-span-2 text-sm text-red-400">Failed to send. Try again.</p>}
    </form>
  );
}

