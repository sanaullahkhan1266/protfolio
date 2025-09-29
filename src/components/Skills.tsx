export default function Skills() {
  const stacks = [
    { title: "Blockchain", items: ["Solidity", "Ethers.js", "Hardhat", "Foundry"] },
    { title: "AI", items: ["Python", "LangChain", "OpenAI", "Vector DBs"] },
    { title: "Frontend", items: ["Next.js", "TypeScript", "Tailwind", "R3F"] },
    { title: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "Docker"] },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stacks.map((s) => (
        <div key={s.title} className="rounded-xl border border-white/10 bg-black/20 p-5">
          <h3 className="text-sm font-semibold tracking-wide text-foreground/90">{s.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {s.items.map((item) => (
              <span key={item} className="rounded-md bg-white/5 px-2 py-1 text-xs text-foreground/80 ring-1 ring-inset ring-white/10">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
