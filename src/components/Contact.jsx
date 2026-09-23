import { useState } from 'react';
import { contact } from '../data/site';
import { SectionHeading, Reveal } from './ui';
import { IconMail, IconPhone, IconPin, socialIcons, IconArrowRight } from './Icons';

// Frontend-only contact section — no backend submission.
// To connect a form service later, replace the onSubmit handler below.
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [note, setNote] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend connected yet — clearly communicate status to the visitor.
    setNote(
      'Form is ready for integration. Connect a form service or backend endpoint to start sending messages.'
    );
  };

  const fieldClass =
    'w-full rounded-xl border border-forest-900/10 bg-white px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal-muted/70 transition focus:border-forest-700 focus:outline-none focus:ring-2 focus:ring-gold-300';

  const items = [
    { icon: IconMail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: IconPhone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\D/g, '')}` },
    { icon: IconPin, label: 'Location', value: contact.location, href: null },
  ];

  return (
    <section id="contact" className="section-pad bg-mist">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            intro="[Placeholder] Reach out for engagements, collaborations, and enquiries."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Contact details */}
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-3xl bg-forest-900 p-8 text-white shadow-soft sm:p-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-300">
                Contact details
              </span>
              <p className="mt-4 font-display text-2xl leading-snug">
                Let's start a conversation.
              </p>

              <ul className="mt-8 space-y-5">
                {items.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-forest-100/60">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-0.5 block break-words text-sm text-white transition hover:text-gold-300"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm text-white">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-9 border-t border-white/10 pt-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-forest-100/60">
                  Follow
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {contact.socials.map(({ label, href, icon }) => {
                    const Icon = socialIcons[icon];
                    return (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white transition hover:border-gold-400 hover:bg-white/10 hover:text-gold-300"
                      >
                        {Icon ? <Icon className="h-5 w-5" /> : null}
                      </a>
                    );
                  })}
                </div>
                <p className="mt-4 text-[11px] text-forest-100/50">
                  Social links are placeholders — update in src/data/site.js.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="card h-full rounded-3xl p-8 sm:p-10"
              noValidate={false}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-600">
                Send a message
              </p>
              <p className="mt-3 text-sm text-charcoal-muted">
                Frontend form — ready for future integration with your preferred service.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold text-charcoal-light">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold text-charcoal-light">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-xs font-semibold text-charcoal-light">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={fieldClass}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-xs font-semibold text-charcoal-light">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="submit" className="btn-primary group">
                  Send Message
                  <IconArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {note && (
                  <p className="rounded-xl bg-gold-50 px-4 py-3 text-xs leading-relaxed text-gold-800" role="status">
                    {note}
                  </p>
                )}
              </div>

              <p className="mt-5 text-[11px] text-charcoal-muted">
                Note: messages are not sent yet. Connect an endpoint (e.g. a form service) in{' '}
                <code className="rounded bg-mist px-1.5 py-0.5 text-[10px] text-forest-800">
                  src/components/Contact.jsx
                </code>{' '}
                to enable delivery.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}