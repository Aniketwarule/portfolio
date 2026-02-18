import { useEffect, useState, type ComponentType } from 'react';
import {
  BadgeCheck,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { FaJava, FaXTwitter } from 'react-icons/fa6';
import {
  SiAmazon,
  SiCplusplus,
  SiSharp,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

export function Home() {
  const roles = ['Developer', 'ShitPoster', 'Web3 builder', 'Engineer'];
  const flipCycleMs = 1800;
  const flipMidMs = 260;
  const [roleIndex, setRoleIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    let timeoutId: number | undefined;

    const intervalId = window.setInterval(() => {
      setIsFlipping(true);

      timeoutId = window.setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsFlipping(false);
      }, flipMidMs);
    }, flipCycleMs);

    return () => {
      window.clearInterval(intervalId);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [flipCycleMs, flipMidMs, roles.length]);

  const famousPokemons = [
    {
      name: 'pikachu',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif',
    },
    {
      name: 'charizard',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif',
    },
    {
      name: 'bulbasaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif',
    },
    {
      name: 'squirtle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif',
    },
    {
      name: 'gengar',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif',
    },
    {
      name: 'mew',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/151.gif',
    },
  ];

  const currentPokemon = famousPokemons[pokemonIndex % famousPokemons.length];

  const handleCycleLogo = () => {
    setPokemonIndex((prev) => (prev + 1) % famousPokemons.length);
  };

  const skills: { name: string; Icon: ComponentType<{ className?: string }> }[] = [
    { name: 'Java', Icon: FaJava },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'Python', Icon: SiPython },
    { name: 'C#', Icon: SiSharp },
    { name: 'SQL', Icon: TbSql },
    { name: 'C/C++', Icon: SiCplusplus },
    { name: 'Git', Icon: SiGit },
    { name: 'Docker', Icon: SiDocker },
    { name: 'AWS', Icon: SiAmazon },
    { name: 'Firebase', Icon: SiFirebase },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'React', Icon: SiReact },
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'React Native', Icon: SiReact },
    { name: 'Express.js', Icon: SiExpress },
    { name: 'Next.js', Icon: SiNextdotjs },
  ];

  const achievements = [
    'Winner: AlgoBharat Hackersies 2025',
    'Winner: Hack-Sphere 2025',
    'Runner-up: Innoverse 2025 (PVGCOET)',
    'GATE 2025 Qualified'
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 md:pt-60 pb-10 md:pb-12">
        <div className="space-y-4">
          <div className="space-y-1">
              <h1 className="group font-mono text-2xl md:text-5xl font-normal tracking-normal text-[rgb(131,98,63)] dark:text-[rgb(235,209,183)] transition-transform duration-200 ease-out motion-safe:hover:scale-[1.02] origin-left">
                Aniket Warule
                <BadgeCheck className="inline-block w-5 h-5 md:w-7 md:h-7 align-middle mx-3 text-sky-500 dark:text-sky-400 transition-transform duration-200 ease-out motion-safe:group-hover:scale-110" aria-label="Verified" />
                <span className="font-mono text-base md:text-md font-normal tracking-normal text-neutral-600 dark:text-neutral-400 mt-2"> | 21, Pune IND
                </span>
              </h1>
              <p className="font-mono text-base md:text-md text-neutral-600 dark:text-neutral-400 tracking-tight">
                <span
                  className="inline-block min-w-[12ch] [transform-style:preserve-3d] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
                  style={{  
                    transform: isFlipping
                      ? 'rotateX(90deg) translateY(-6px) scale(0.96)'
                      : 'rotateX(0deg) translateY(0) scale(1)',
                    opacity: isFlipping ? 0.15 : 1,
                    filter: isFlipping ? 'blur(1px)' : 'blur(0px)',
                  }}
                >
                  {roles[roleIndex]}
                </span>{' '}
              </p>
          </div>
          <div className="h-px w-20 bg-neutral-300 dark:bg-neutral-700" />
          <p className="text-base md:text-lg leading-relaxed text-neutral-900 dark:text-neutral-300 max-w-2xl">
            Engineering student who builds, not just studies.
          </p>
          <div className="text-base md:text-lg leading-relaxed text-neutral-500 dark:text-neutral-500 max-w-4xl space-y-2">
            <p>
              Full-stack developer focused on backend architecture and clean frontend execution.
              Building products that move from idea to working software fast.
            </p>
            <p>Experienced in Web and Android development.</p>
            <p>
              Currently<span className="text-neutral-900 dark:text-neutral-300 font-medium">:</span> exploring{' '}
              <span className="text-neutral-900 dark:text-neutral-300 font-medium">Web3</span> with a long-term,
              infrastructure-first mindset.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">   
          <a
            href="https://github.com/aniketwarule"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-all duration-200 ease-out motion-safe:hover:scale-125"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href="https://x.com/aniketwarule1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-all duration-200 ease-out motion-safe:hover:scale-125"
            aria-label="X"
          >
            <FaXTwitter className="w-7 h-7" />
          </a>
          <a
            href="https://linkedin.com/in/aniketwarule"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-all duration-200 ease-out motion-safe:hover:scale-125"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=waruleaniket@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-all duration-200 ease-out motion-safe:hover:scale-125"
            aria-label="Email"
          >
            <Mail className="w-7 h-7" />
          </a>
          <a
            href="https://drive.google.com/file/d/1nkwlqMPpGw20BndJPO7RjWrTDjzVJIEu/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 font-mono text-sm border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-150"
            aria-label="Resume"
          >
            Resume
          </a>
        </div>
      </section>
      <section className="pb-10 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.45fr_0.85fr] gap-8 md:gap-4 items-start">
          <div>
            <h2 className="font-mono text-2xl md:text-xl font-normal tracking-tight text-neutral-900 dark:text-neutral-300 mb-4">
              Skills #
            </h2>
            <div className="flex flex-wrap gap-1">
              {skills.map(({ name, Icon }) => (
                <span
                  key={name}
                  className="group inline-flex items-center gap-1 px-3 py-1.5 font-mono text-sm border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-200 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02]"
                >
                  <Icon className="w-4 h-4 transition-transform duration-200 ease-out motion-safe:group-hover:scale-110" />
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-mono text-2xl md:text-xl font-normal tracking-tight text-neutral-900 dark:text-neutral-300 mb-4">
              Achievements #
            </h2>
            <div className="space-y-1">
              {achievements.map((achievement) => (
                <p key={achievement} className="font-mono text-sm md:text-base text-neutral-500 dark:text-neutral-500 break-words">
                  <span className="text-neutral-900 dark:text-neutral-300 font-medium"> &gt; </span>{achievement}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={handleCycleLogo}
        className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 transition-transform duration-200 hover:scale-110"
        aria-label={`Cycle pokemon logo. Current: ${currentPokemon.name}`}
        title={`Click to switch Pokémon (${currentPokemon.name})`}
      >
        <img
          src={currentPokemon.image}
          alt={currentPokemon.name}
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
          loading="lazy"
        />
      </button>
    </div>
  );
}
