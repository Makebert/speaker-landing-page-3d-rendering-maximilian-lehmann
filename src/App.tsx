/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Logos from './components/Logos';
import WorkflowToApp from './components/WorkflowToApp';
import ScrollSection from './components/ScrollSection';
import HoverChips from './components/HoverChips';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-weavy-accent selection:text-black">
      {/* Background fixed Spline Viewer */}
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-0 pointer-events-auto">
        <spline-viewer
          id="spline-viewer"
          url="https://prod.spline.design/JpPoEvISUjbV4S0V/scene.splinecode"
          events-target="global"
          style={{ width: '100vw', height: '100vh', display: 'block', contain: 'strict' }}
        ></spline-viewer>
      </div>

      {/* Foreground Content - pass clicks through empty space */}
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
