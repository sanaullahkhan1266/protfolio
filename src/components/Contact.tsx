export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      <div className="md:col-span-2">
        <p className="text-foreground/80">Have a project in mind or want to collaborate? I’d love to hear about it.</p>
        <a
          href="mailto:sanaullah@example.com"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95 transition"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
          Email me
        </a>
      </div>
      <div className="flex gap-4 md:justify-end">
        <a href="https://github.com/sanaullahkhan1266" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg border border-white/10 p-2 hover:bg-white/5 transition">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.42 2.865 8.166 6.839 9.489.5.091.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.952 0-1.093.39-1.988 1.029-2.688-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.696-4.566 4.944.359.31.678.921.678 1.856 0 1.339-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.18 22 16.434 22 12.017 22 6.484 17.523 2 12 2Z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/sanaullah-link/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg border border-white/10 p-2 hover:bg-white/5 transition">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1C12.7 8.9 14.4 8 16.5 8 21 8 22 10.9 22 15.2V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.8h-4V8z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
