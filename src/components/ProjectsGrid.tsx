export default function ProjectsGrid() {
  const projects = [
    {
      title: "DeFi Protocol Dashboard",
      summary: "Real-time on-chain analytics with wallet auth and streaming charts.",
      tags: ["Next.js", "TypeScript", "Web3"],
      href: "#",
      gradient: "from-sky-500/20 via-fuchsia-500/10 to-violet-500/20",
    },
    {
      title: "AI Trade Assistant",
      summary: "LLM-driven agent that summarizes market signals and risks.",
      tags: ["Node.js", "Python", "LLM"],
      href: "#",
      gradient: "from-emerald-500/20 via-cyan-500/10 to-blue-500/20",
    },
    {
      title: "NFT Minting DApp",
      summary: "Optimized mint flow with gas estimation and fail-safe retries.",
      tags: ["Solidity", "Ethers.js", "Graph"],
      href: "#",
      gradient: "from-amber-500/20 via-rose-500/10 to-red-500/20",
    },
    {
      title: "On-chain Indexer Service",
      summary: "Rust+TS pipeline indexing events into Postgres with GraphQL.",
      tags: ["Rust", "TypeScript", "Postgres"],
      href: "#",
      gradient: "from-purple-500/20 via-indigo-500/10 to-blue-500/20",
    },
    {
      title: "Realtime Payments API",
      summary: "PCI-friendly facade with idempotency, retries, and webhooks.",
      tags: ["Node.js", "Kafka", "Redis"],
      href: "#",
      gradient: "from-teal-500/20 via-emerald-500/10 to-lime-500/20",
    },
    {
      title: "Vision Fraud Detector",
      summary: "Edge model scoring with batching and feature store sync.",
      tags: ["Python", "ONNX", "Vector DB"],
      href: "#",
      gradient: "from-rose-500/20 via-orange-500/10 to-amber-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <a
          key={p.title}
          href={p.href}
          className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-tr ${p.gradient} p-5 transition-transform hover:-translate-y-0.5`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-1 text-sm text-foreground/80">{p.summary}</p>
            </div>
            <span className="shrink-0 rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-foreground/70">Case</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-md bg-black/20 px-2 py-1 text-xs text-foreground/80 ring-1 ring-inset ring-white/10">
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
