/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Application } from '@splinetool/runtime';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Navbar from './components/Navbar';
import Logos from './components/Logos';
import WorkflowToApp from './components/WorkflowToApp';
import ScrollSection from './components/ScrollSection';
import HoverChips from './components/HoverChips';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const initSpline = async () => {
      const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
      if (!canvas) return;

      try {
        const app = new Application(canvas);
        await app.load('https://prod.spline.design/MN8DL6sBEvCBDChp/scene.splinecode');
      } catch (error) {
        console.error("Failed to load Spline scene:", error);
      }
    };

    initSpline();
  }, []);

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-weavy-accent selection:text-black">
      {/* Vercel Metrics */}
      <Analytics />
      <SpeedInsights />

      {/* Spline 3D Background Runtime */}
      <canvas id="canvas3d" className="fixed inset-0 w-full h-full z-0 pointer-events-auto outline-none" />

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
