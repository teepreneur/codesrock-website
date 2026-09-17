import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Lazy load pages for better initial bundle size
const HomePage = lazy(() => import('./pages/HomePage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const AttendLaunchPage = lazy(() => import('./pages/AttendLaunchPage'));
const StorybookPage = lazy(() => import('./pages/StorybookPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF8F3] via-[#FFFAF5] to-white">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-[#46C5D5] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-[#5D3B98] font-bold">Loading CodesRock Storybooks...</p>
    </div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/attendlaunch" element={<AttendLaunchPage />} />
        <Route path="/storybooks" element={<StorybookPage />} />
        <Route path="/storybooks/*" element={<StorybookPage />} />
        <Route path="/storybook" element={<StorybookPage />} />
        <Route path="/storybook/*" element={<StorybookPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
