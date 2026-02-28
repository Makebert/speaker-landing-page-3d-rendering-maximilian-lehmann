/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Spline from '@splinetool/react-spline';

import Navbar from './components/Navbar';
import Logos from './components/Logos';
import WorkflowToApp from './components/WorkflowToApp';
import ScrollSection from './components/ScrollSection';
import HoverChips from './components/HoverChips';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-weavy-accent selection:text-black">
      {/* Vercel Metrics */}
      <Analytics />
      <SpeedInsights />

      {/* Spline 3D Background Runtime */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-auto">
        <Spline scene="https://prod.spline.design/MN8DL6sBEvCBDChp/scene.splinecode" />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 pointer-events-none">
        <Navbar />

        {/* Empty space that allows the user to see and interact with the 3D scene */}
        <div className="w-full min-h-screen pointer-events-none"></div>

        {/* Following sections layered on top with solid background */}
        <div className="pointer-events-auto bg-black relative z-20">
          <Logos />
          <WorkflowToApp />
          <ScrollSection />
          <HoverChips />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
