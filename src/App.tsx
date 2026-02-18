import { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Blog } from './pages/Blog';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const mouseGlowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frameId: number | null = null;

    const handleMouseMove = (event: MouseEvent) => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        if (mouseGlowRef.current) {
          mouseGlowRef.current.style.setProperty('--mx', `${event.clientX}px`);
          mouseGlowRef.current.style.setProperty('--my', `${event.clientY}px`);
          mouseGlowRef.current.style.opacity = '1';
        }
        frameId = null;
      });
    };

    const handleMouseLeave = () => {
      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'blog':
        return <Blog />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors duration-200">
      <div
        ref={mouseGlowRef}
        className="fixed inset-0 pointer-events-none z-[1] opacity-0 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(236, 72, 153, 0.08), transparent 60%)',
        }}
      />
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
