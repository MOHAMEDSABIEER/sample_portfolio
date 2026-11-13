import React, { useState } from 'react';
import {
  Send,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Youtube,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject,
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const WHATSAPP_NUMBER = '917871245672';
  const DISPLAY_PHONE = '+91 78712 45672';

  // Update subject if prop changes
  React.useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const generateWhatsAppUrl = (data: typeof formData) => {
    const formattedText = `*New Project Inquiry — Vikram Singh Portfolio*\n\n` +
      `👤 *Name:* ${data.name.trim()}\n` +
      `✉️ *Email:* ${data.email.trim()}\n` +
      `📌 *Subject:* ${data.subject.trim() || 'General Project Collaboration'}\n\n` +
      `💬 *Message / Project Details:*\n${data.message.trim()}`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedText)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields marked with *');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');

    const whatsappUrl = generateWhatsAppUrl(formData);
    setLastWhatsAppUrl(whatsappUrl);

    // Open WhatsApp link
    try {
      const link = document.createElement('a');
      link.href = whatsappUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.location.href = whatsappUrl;
    }

    setTimeout(() => {
      setStatus('success');
    }, 500);
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setLastWhatsAppUrl('');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#0b101b] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Microphone Photo & Headline (4 cols on lg) */}
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden bg-gradient-to-t from-[#0e1628] to-slate-900 border border-slate-800/80 p-6 flex flex-col justify-between min-h-[360px] shadow-2xl">
            {/* Background Studio Mic */}
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src="/assets/portfolio/contact_mic.png"
                alt="Studio condenser microphone"
                className="w-full h-full object-cover object-left"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/assets/portfolio/card3_program_producer.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1628] via-[#0e1628]/70 to-transparent" />
            </div>

            <div className="relative z-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white leading-tight">
                LET'S WRITE THE
                <br />
                NEXT CHAPTER <span className="text-amber-400">TOGETHER</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-normal">
                Have a project in mind? Let's collaborate!
              </p>

              <div className="w-12 h-1 bg-amber-400 rounded-full" />
            </div>

            <div className="relative z-10 pt-8 text-[11px] text-slate-400">
              Direct connection via WhatsApp on <strong className="text-amber-400">{DISPLAY_PHONE}</strong> for instant project scoping and discussions.
            </div>
          </div>

          {/* Middle Column: Interactive WhatsApp Integrated Form (5 cols on lg) */}
          <div className="lg:col-span-5 bg-[#0e1628] rounded-2xl border border-slate-800/80 p-6 sm:p-7 shadow-2xl shadow-black/40">
            {status === 'success' ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white">Opening WhatsApp Chat!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Your project message has been prepared for <strong className="text-amber-400">{DISPLAY_PHONE}</strong>. If WhatsApp did not open automatically, tap the button below:
                </p>

                {lastWhatsAppUrl && (
                  <div className="pt-2">
                    <a
                      href={lastWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 hover:from-emerald-300 hover:to-amber-200 rounded-full shadow-lg shadow-emerald-500/20 transition-all duration-200 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Open WhatsApp Chat Now</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-full cursor-pointer transition-colors"
                  >
                    Edit or Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 text-xs rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 text-xs rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 text-xs rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 text-xs rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{status === 'submitting' ? 'Opening WhatsApp...' : 'Send Message'}</span>
                    <span className="font-bold">➔</span>
                  </button>

                  <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    Connects via WhatsApp to 7871245672
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: GET IN TOUCH Details (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-6 lg:pl-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold tracking-wider text-amber-400 uppercase">
                GET IN TOUCH
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              {/* WhatsApp direct click */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Vikram, I saw your portfolio and would like to discuss a project.")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group hover:text-emerald-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white group-hover:text-emerald-300">7871245672</span>
                  <span className="text-[10px] text-emerald-400">WhatsApp Direct Chat</span>
                </div>
              </a>

              <a
                href="tel:7871245672"
                className="flex items-center gap-3 group hover:text-amber-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <span>7871245672</span>
              </a>

              <a
                href="mailto:hnn@vikramsingh.com"
                className="flex items-center gap-3 group hover:text-amber-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="break-all">hnn@vikramsingh.com</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group hover:text-amber-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>vikram@linkedin.com</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group hover:text-amber-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>@vikramsingh</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-4 text-slate-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors p-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors p-1"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors p-1"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors p-1 font-bold text-sm"
                aria-label="X (Twitter)"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
