export function Experience() {
  const experiences = [
    {
      role: 'Android Developer Intern',
      company: 'Robonist Tech Solutions Pvt. Ltd.',
      period: 'December 2024 - March 2025',
      location: 'Hybrid (Pune, India)',
      description: '',
      highlights: [
        'Developed and tested scalable android applications using Kotlin and Java, resulting in a 30% increase in app stability and user engagement.',
        'Collaborated with UX/UI designers to streamline mobile application interfaces, leading to a 25% improvement in user satisfaction.',
        'Integrated CI/CD pipelines using Jenkins, reducing app deployment time by 50% and enhancing overall development efficiency during tenure at Robonist Tech Solutions.',
      ],
    },
    {
      role: 'Software Developer Intern',
      company: 'Nataraj Services',
      period: 'January 2023 - March 2023',
      location: 'Chhatrapati Sambhajinagar, India',
      description: '',
      highlights: [
        'Developed a scalable backend architecture using Node.js and Express.js, handling up to 10,000 daily users with minimal downtime.',
        'Managed and optimized a MongoDB database with over 50,000 records, improving query performance by 35% and ensuring 100% data accuracy during transactions.',
        'Enhanced website performance by ensuring 95% uptime, significantly boosting user satisfaction and operational efficiency.',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 md:pt-60 pb-10 md:pb-12">
      <div className="mb-10">
        <h1 className="font-mono text-2xl md:text-5xl font-normal tracking-normal text-[rgb(131,98,63)] dark:text-[rgb(235,209,183)] mb-3">
          Experience
        </h1>
        
      </div>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <article key={index} className="relative group">
            <div className="border-l-2 border-neutral-300 dark:border-neutral-800 pl-6 md:pl-8 pb-10 md:pb-12 transition-colors duration-200 group-hover:border-neutral-400 dark:group-hover:border-neutral-700">
              <div className="absolute left-0 top-0 w-2 h-2 -ml-[5px] bg-neutral-900 dark:bg-neutral-50 rounded-full" />

              <div className="mb-4">
                <h2 className="font-mono text-xl md:text-2xl text-neutral-900 dark:text-neutral-50 mb-2">
                  {exp.role}
                </h2>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 font-mono text-sm text-neutral-600 dark:text-neutral-400">
                  <span>{exp.company}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{exp.period}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {exp.description && (
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>
              )}

              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-neutral-600 dark:text-neutral-400 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-neutral-400 dark:before:text-neutral-600 break-words"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
