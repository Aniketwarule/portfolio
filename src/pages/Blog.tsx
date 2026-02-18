export function Blog() {
  return (
    <div className="min-h-screen pt-32 md:pt-60 pb-10 md:pb-12">
      <div className="mb-10">
        <h1 className="font-mono text-2xl md:text-5xl font-normal tracking-normal text-[rgb(131,98,63)] dark:text-[rgb(235,209,183)] mb-3">
          Blog
        </h1>
      </div>

      <div className="border border-neutral-300 dark:border-neutral-800 p-6 md:p-8">
        <div className="flex items-center gap-2 font-mono text-xl md:text-2xl text-neutral-900 dark:text-neutral-50">
          <span>Coming soon</span>
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 dark:bg-neutral-400 animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 dark:bg-neutral-400 animate-pulse [animation-delay:200ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 dark:bg-neutral-400 animate-pulse [animation-delay:400ms]" />
        </div>
        <p className="mt-4 text-neutral-500 dark:text-neutral-500 leading-relaxed max-w-2xl">
          New technical write-ups are on the way.
        </p>
      </div>
    </div>
  );
}
