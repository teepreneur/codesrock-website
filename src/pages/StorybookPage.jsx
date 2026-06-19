import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { storybookData } from '../data/storybookData';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Play, 
  RotateCcw, 
  Lightbulb,
  MapPin,
  CheckCircle,
  HelpCircle,
  Printer
} from 'lucide-react';

const StorybookPage = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0); // 0 to 10. 10 is the Unplugged Quest spread.
  
  const currentStory = storybookData.stories[currentStoryIndex];
  const totalScenes = currentStory.scenes.length; // Should be 10

  const handleNextPage = () => {
    if (currentSceneIndex < totalScenes) {
      setCurrentSceneIndex(currentSceneIndex + 1);
    } else if (currentStoryIndex < storybookData.stories.length - 1) {
      // Go to next story
      setCurrentStoryIndex(currentStoryIndex + 1);
      setCurrentSceneIndex(0);
    }
  };

  const handlePrevPage = () => {
    if (currentSceneIndex > 0) {
      setCurrentSceneIndex(currentSceneIndex - 1);
    } else if (currentStoryIndex > 0) {
      // Go to previous story's quest page
      setCurrentStoryIndex(currentStoryIndex - 1);
      setCurrentSceneIndex(10);
    }
  };

  const handleStoryChange = (index) => {
    setCurrentStoryIndex(index);
    setCurrentSceneIndex(0);
  };

  // Get current scene data (only if not on quest page)
  const isQuestPage = currentSceneIndex === 10;
  const currentScene = !isQuestPage ? currentStory.scenes[currentSceneIndex] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] via-white to-[#FAF7F2] text-gray-800 font-sans print:bg-white print:p-0">
      
      {/* Top Header / Bar (Hidden on Print) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm px-4 sm:px-6 lg:px-8 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center h-auto py-4 md:h-20 gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group text-gray-500 hover:text-gray-900 transition-colors">
              <div className="bg-gray-100 p-2 rounded-xl group-hover:bg-gray-200 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Home</span>
            </Link>
            <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
            <div>
              <h1 className="text-xl font-extrabold text-gray-900 tracking-tight font-nunito flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#46C5D5]" />
                {storybookData.volumeTitle}
              </h1>
              <p className="text-xs text-gray-500 font-medium">{storybookData.volumeSubtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Story Selector Dropdown */}
            <select 
              value={currentStoryIndex}
              onChange={(e) => handleStoryChange(parseInt(e.target.value))}
              className="bg-gray-50 border border-gray-200 text-gray-700 font-semibold px-4 py-2.5 rounded-xl outline-none focus:border-[#46C5D5] transition-colors cursor-pointer text-sm"
            >
              {storybookData.stories.map((story, index) => (
                <option key={story.id} value={index}>
                  {story.title}
                </option>
              ))}
            </select>

            {/* Print Button */}
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all px-4 py-2.5 rounded-xl cursor-pointer"
              title="Print Storybook Spread"
            >
              <Printer className="w-4 h-4" />
              <span>Print Spread</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Storybook Container */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center print:py-0 print:px-0">
        
        {/* Concept Badge (Hidden on Print) */}
        <div className="mb-6 text-center print:hidden">
          <span className="inline-flex items-center gap-1.5 bg-[#46C5D5]/10 text-[#46C5D5] font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Concept: {currentStory.concept}
          </span>
        </div>

        {/* Spread Layout */}
        <div className="w-full relative max-w-6xl">
          
          {/* Double Page Spread Frame */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-200/60 overflow-hidden grid grid-cols-1 lg:grid-cols-2 relative min-h-[580px] print:shadow-none print:border-none print:rounded-none print:grid print:grid-cols-2 print:min-h-0 print:w-[297mm] print:h-[210mm] print:overflow-visible">
            
            {/* Central spine overlay to simulate a book fold (Desktop only, Hidden on Print) */}
            <div className="absolute top-0 bottom-0 left-1/2 w-16 -ml-8 bg-gradient-to-r from-black/[0.04] via-black/[0.005] to-black/[0.04] pointer-events-none z-10 hidden lg:block print:hidden"></div>
            
            {/* LEFT PAGE: TEXT & PHYSICAL ACTIVITIES */}
            <div className="bg-gradient-to-br from-[#FCFBF8] to-[#F7F5F0] p-8 md:p-12 lg:p-16 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-gray-100 print:bg-white print:p-8 print:border-r print:border-gray-200 print:h-full">
              
              {/* Whimsical Inner Border */}
              <div className="absolute inset-4 border-2 border-dashed border-[#46C5D5]/15 rounded-3xl pointer-events-none print:border-gray-300"></div>

              {!isQuestPage ? (
                // Normal Story Page
                <>
                  {/* Top Header: Scene Number */}
                  <div className="relative z-10 flex justify-between items-center mb-6">
                    <span className="font-nunito font-extrabold text-[#FF7340] text-lg uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF7340]"></span>
                      Scene {currentScene.sceneNumber}
                    </span>
                    <span className="text-xs font-bold text-gray-400 font-mono print:hidden">Left Page</span>
                  </div>

                  {/* Main Narrative Text (Very large, easy to read) */}
                  <div className="relative z-10 my-auto flex-grow flex flex-col justify-center min-h-[160px] print:min-h-0">
                    <p className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-relaxed font-nunito tracking-wide">
                      {currentScene.mainText}
                    </p>
                  </div>

                  {/* Active Play Prompt */}
                  <div className="relative z-10 mt-6 bg-[#FFF4F0] border-2 border-[#FF7340]/20 rounded-2xl p-5 hover:scale-[1.02] active:scale-[0.99] transition-all cursor-default group print:bg-white print:border-gray-300">
                    <div className="flex gap-4 items-start">
                      <div className="bg-[#FF7340] text-white p-2.5 rounded-xl shadow-md shadow-orange-100 group-hover:animate-bounce shrink-0 print:shadow-none">
                        <Play className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <h4 className="font-nunito font-extrabold text-[#FF7340] text-sm uppercase tracking-wider mb-1">Active Play Prompt</h4>
                        <p className="text-base text-gray-700 font-semibold leading-relaxed">
                          {currentScene.activePrompt}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rock's CS Logic Note */}
                  <div className="relative z-10 mt-5 bg-[#ECFEFF] border border-[#46C5D5]/20 rounded-2xl p-5 hover:scale-[1.02] transition-all cursor-default print:bg-white print:border-gray-300">
                    <div className="flex gap-4 items-start">
                      <div className="bg-[#46C5D5] text-white p-2.5 rounded-xl shadow-md shadow-cyan-100 shrink-0 print:shadow-none">
                        <Lightbulb className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-nunito font-extrabold text-[#46C5D5] text-sm uppercase tracking-wider mb-1">Rock's Logic Note</h4>
                        <p className="text-sm text-gray-600 font-medium leading-relaxed">
                          {currentScene.logicNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // Unplugged Quest Page
                <>
                  <div className="relative z-10 flex justify-between items-center mb-6">
                    <span className="font-nunito font-extrabold text-[#5D3B98] text-lg uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#5D3B98]"></span>
                      Unplugged Quest!
                    </span>
                    <span className="text-xs font-bold text-gray-400 font-mono print:hidden">Left Page</span>
                  </div>

                  {/* Quest Body */}
                  <div className="relative z-10 my-auto flex-grow flex flex-col justify-center py-4">
                    <h3 className="text-2xl font-extrabold text-slate-800 mb-4 font-nunito flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-[#5D3B98]" />
                      Quest: {currentStory.quest.title}
                    </h3>
                    
                    <ul className="space-y-4">
                      {currentStory.quest.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="flex items-center justify-center bg-[#5D3B98] text-white text-xs font-bold w-6 h-6 rounded-full shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                            {step}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative z-10 mt-6 bg-[#FAF7FD] border border-[#5D3B98]/20 rounded-2xl p-5 print:bg-white print:border-gray-300">
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-[#5D3B98] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#5D3B98] font-bold leading-relaxed">
                        Quest completed! Once you have finished this game, you are ready to move to the next coding adventure!
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* Bottom Footer with Page Number */}
              <div className="relative z-10 flex justify-between items-center mt-6 pt-4 border-t border-gray-100/60 print:border-gray-200">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-nunito">CodesRock Program</span>
                <span className="font-mono text-sm font-bold text-gray-400">
                  {currentSceneIndex * 2 + 1}
                </span>
              </div>
            </div>

            {/* RIGHT PAGE: THE SCENE ILLUSTRATION */}
            <div className="bg-slate-900 flex items-center justify-center p-6 md:p-10 relative overflow-hidden print:bg-white print:p-8 print:h-full print:border-l print:border-gray-200">
              
              {/* Inner Print Border */}
              <div className="absolute inset-4 border-2 border-dashed border-white/5 rounded-3xl pointer-events-none print:border-gray-300 print:inset-4 z-20"></div>

              {!isQuestPage ? (
                currentScene.imagePath ? (
                  // Real Generated Scene Image
                  <div className="w-full h-full flex items-center justify-center relative rounded-2xl overflow-hidden shadow-lg border border-white/10 print:border-none print:shadow-none print:rounded-none">
                    <img 
                      src={currentScene.imagePath} 
                      alt={`Scene ${currentScene.sceneNumber} - ${currentStory.title}`}
                      className="w-full h-full object-cover max-h-[480px] print:max-h-none print:w-full print:h-full"
                    />
                    
                    {/* Visual Brief Button overlay (Hidden on Print) */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-2.5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-default text-xs text-white leading-relaxed hidden sm:block">
                      <strong>Visual Brief:</strong> {currentScene.visualBrief}
                    </div>
                  </div>
                ) : (
                  // Scene Image Placeholder with Visual Brief
                  <div className="w-full h-full min-h-[300px] flex flex-col justify-between bg-gradient-to-br from-[#1E1B4B] via-[#0F172A] to-[#1E1B4B] rounded-2xl p-8 border border-[#46C5D5]/20 relative overflow-hidden shadow-inner print:bg-white print:border-gray-300 print:text-black">
                    <div className="absolute inset-0 bg-[radial-gradient(#46C5D5_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
                    
                    <div className="relative z-10 flex justify-between items-center mb-4">
                      <span className="inline-flex items-center gap-1.5 bg-[#46C5D5]/10 border border-[#46C5D5]/20 text-[#46C5D5] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Scene {currentScene.sceneNumber} Illustration
                      </span>
                      <span className="text-xs font-bold text-gray-500 font-mono print:hidden">Right Page</span>
                    </div>

                    <div className="relative z-10 my-auto text-center py-6">
                      <HelpCircle className="w-12 h-12 text-[#FF7340]/40 mx-auto mb-4 animate-bounce" />
                      <h4 className="text-white font-nunito font-extrabold text-lg mb-2">Illustration in Progress</h4>
                      <p className="text-gray-400 text-sm font-semibold max-w-sm mx-auto leading-relaxed">
                        Our 3D designers are cooking this scene on Planet Logix. See visual brief below:
                      </p>
                    </div>

                    <div className="relative z-10 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5 text-xs text-gray-300 leading-relaxed font-mono">
                      <strong className="text-[#FF7340]">Visual Brief:</strong> {currentScene.visualBrief}
                    </div>
                  </div>
                )
              ) : (
                // Unplugged Quest Illustration Placeholder
                <div className="w-full h-full min-h-[300px] flex flex-col justify-between bg-gradient-to-br from-[#3B0764] via-[#0F172A] to-[#3B0764] rounded-2xl p-8 border border-[#5D3B98]/20 relative overflow-hidden shadow-inner print:bg-white print:border-gray-300">
                  <div className="absolute inset-0 bg-[radial-gradient(#5D3B98_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
                  
                  <div className="relative z-10 flex justify-between items-center mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#5D3B98]/10 border border-[#5D3B98]/20 text-[#5D3B98] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Quest Map
                    </span>
                    <span className="text-xs font-bold text-gray-500 font-mono print:hidden">Right Page</span>
                  </div>

                  <div className="relative z-10 my-auto text-center py-6">
                    <BookOpen className="w-12 h-12 text-[#5D3B98]/50 mx-auto mb-4" />
                    <h4 className="text-white font-nunito font-extrabold text-lg mb-2">Playtime &amp; Discovery</h4>
                    <p className="text-gray-400 text-sm font-semibold max-w-sm mx-auto leading-relaxed">
                      Now, take your grid mat, cards, and RockBot and complete the challenge. Learn by doing!
                    </p>
                  </div>

                  <div className="relative z-10 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5 text-xs text-gray-300 leading-relaxed font-mono">
                    <strong>Visual Brief:</strong> A colorful layout of the CodesRock mat showing RockBot navigating obstacles to reach the objective, with coding cards lined up at the bottom.
                  </div>
                </div>
              )}

              {/* Bottom Footer with Page Number */}
              <div className="absolute bottom-6 right-8 left-8 flex justify-between items-center pt-4 border-t border-white/5 z-20 print:border-gray-200">
                <span className="font-mono text-sm font-bold text-gray-500 print:text-gray-400">
                  {currentSceneIndex * 2 + 2}
                </span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest font-nunito print:text-gray-400">Planet Logix Map</span>
              </div>
            </div>

          </div>

          {/* PAGE NAVIGATION BUTTONS (Hidden on Print) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-20 hidden xl:block print:hidden">
            <button
              onClick={handlePrevPage}
              disabled={currentStoryIndex === 0 && currentSceneIndex === 0}
              className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center hover:bg-gray-50 hover:scale-110 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 disabled:hover:bg-white transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 group-hover:-translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-20 hidden xl:block print:hidden">
            <button
              onClick={handleNextPage}
              disabled={currentStoryIndex === storybookData.stories.length - 1 && currentSceneIndex === 10}
              className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center hover:bg-gray-50 hover:scale-110 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 disabled:hover:bg-white transition-all cursor-pointer group"
            >
              <ArrowRight className="w-6 h-6 text-gray-600 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* MOBILE & TABLET NAVIGATION CONTROLS (Hidden on Print) */}
        <div className="mt-8 flex items-center justify-center gap-6 print:hidden">
          <button
            onClick={handlePrevPage}
            disabled={currentStoryIndex === 0 && currentSceneIndex === 0}
            className="flex items-center gap-2 bg-white border border-gray-200 shadow-lg px-6 py-3 rounded-full hover:bg-gray-50 active:scale-95 disabled:opacity-40 transition-all font-semibold text-sm text-gray-700 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <span className="font-nunito font-extrabold text-gray-500 text-sm">
            {isQuestPage ? "Quest" : `Scene ${currentSceneIndex + 1} / 10`}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentStoryIndex === storybookData.stories.length - 1 && currentSceneIndex === 10}
            className="flex items-center gap-2 bg-[#FF7340] shadow-lg shadow-orange-100 px-6 py-3 rounded-full hover:bg-[#E65D2D] text-white active:scale-95 disabled:opacity-40 transition-all font-semibold text-sm cursor-pointer"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </main>

      {/* CSS Print Stylesheet overlay directly in component */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body {
            background: white !important;
            color: black !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          header, footer, nav, button, select {
            display: none !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
            max-width: none !important;
            width: 297mm !important;
            height: 210mm !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:bg-white {
            background: white !important;
            background-image: none !important;
          }
          .print\\:border-none {
            border: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:rounded-none {
            border-radius: 0 !important;
          }
          .print\\:border-r {
            border-right: 1px solid #e2e8f0 !important;
          }
          .print\\:border-l {
            border-left: 1px solid #e2e8f0 !important;
          }
          .print\\:p-8 {
            padding: 2rem !important;
          }
          .print\\:h-full {
            height: 100% !important;
          }
          .print\\:w-\\[297mm\\] {
            width: 297mm !important;
          }
          .print\\:h-\\[210mm\\] {
            height: 210mm !important;
          }
          @page {
            size: A4 landscape;
            margin: 0;
          }
        }
      `}} />
    </div>
  );
};

export default StorybookPage;
