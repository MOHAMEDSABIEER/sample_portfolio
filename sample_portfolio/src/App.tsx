/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PolicyModal } from './components/PolicyModal';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';

function Shell() {
  const navigate = useNavigate();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'sitemap' | null>(null);
  const [contactSubject, setContactSubject] = useState('');

  // Each of the 8 portfolio types now lives on its own page.
  const handleSelectService = (serviceId: string) => {
    navigate(`/portfolio/${serviceId}`);
  };

  const handleOpenContact = (subject?: string) => {
    if (subject) setContactSubject(subject);
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <div className="min-h-screen bg-[#0b101b] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Navbar onSelectService={handleSelectService} onOpenContact={handleOpenContact} />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                contactSubject={contactSubject}
                onSelectService={handleSelectService}
                onDownloadResume={() => setIsResumeOpen(true)}
              />
            }
          />
          <Route
            path="/portfolio/:serviceId"
            element={<PortfolioPage onInquire={handleOpenContact} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer onOpenPolicy={(type) => setPolicyType(type)} />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
        onSelectService={handleSelectService}
      />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  );
}
