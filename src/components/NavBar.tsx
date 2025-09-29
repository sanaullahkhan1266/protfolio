export default function NavBar() {
  return (
    <header className="pointer-events-auto fixed inset-x-0 top-0 z-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-6">
          <a href="#home" className="text-[18px] font-medium tracking-wide">Zoe</a>
          <nav className="text-sm">
            <a className="hover:text-sky-400 transition-colors" href="#work">Work</a>
            <span className="mx-2 opacity-60">/</span>
            <a className="hover:text-sky-400 transition-colors" href="#about">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
