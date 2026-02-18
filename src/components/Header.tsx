import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'home', label: 'home' },
    { name: 'projects', label: 'projects' },
    { name: 'experience', label: 'experience' },
    { name: 'blog', label: 'blog' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-neutral-50/85 dark:bg-neutral-900/80 backdrop-blur-md border-neutral-200/70 dark:border-neutral-800/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[900px] mx-auto px-6 md:px-12 py-5">
          <div className="flex items-center justify-center  ">

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className={`font-mono text-lg tracking-tight transition-all duration-150 hover:-translate-y-0.5 ${
                    currentPage === item.name
                      ? 'text-neutral-950 dark:text-neutral-50'
                      : 'text-neutral-600 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={toggleTheme}
                className="p-2 hover:opacity-70 transition-all duration-150"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 hover:opacity-70 transition-all duration-150"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:opacity-70 transition-all duration-150"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300/60 to-transparent dark:via-neutral-700/60" />
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-neutral-50/95 dark:bg-neutral-950/95 backdrop-blur-md pt-20 md:hidden transition-opacity duration-200">
          <nav className="flex flex-col items-center gap-6 p-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.name)}
                className={`font-mono text-lg tracking-tight transition-all duration-150 ${
                  currentPage === item.name
                    ? 'text-neutral-950 dark:text-neutral-50 scale-105'
                    : 'text-neutral-600 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
