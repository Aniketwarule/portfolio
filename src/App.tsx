import { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Blog } from './pages/Blog';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

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
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors duration-200">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="max-w-[900px] mx-auto px-6 md:px-12">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
