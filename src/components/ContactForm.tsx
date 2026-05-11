import { useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;

    try {
      await emailjs.sendForm(
        'service_h7hihel',
        'template_y2xlwup',
        formElement,
        'B6gmlc6A1UqcmfJTn'
      );

      setStatus('success');

      formElement.reset();

      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-500">Name</label>
          <input
            name="name"
            required
            type="text"
            className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 transition-all outline-none text-slate-900 dark:text-white"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-500">Email</label>
          <input
            name="email"
            required
            type="email"
            className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 transition-all outline-none text-slate-900 dark:text-white"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-slate-500">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 transition-all outline-none text-slate-900 dark:text-white"
          placeholder="How can I help you?"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'success'}
        className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] ${
          status === 'success'
            ? 'bg-emerald-600 text-white'
            : status === 'error'
              ? 'bg-red-500 text-white'
              : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20'
        }`}
      >
        {status === 'success'
          ? 'Message Sent! 🚀'
          : status === 'error'
            ? 'Error! 😢'
            : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
