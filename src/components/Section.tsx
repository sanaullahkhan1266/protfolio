type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="section py-24 opacity-0 animate-fade-up [animation-delay:260ms]">
      <h2 className="mb-6 text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="prose prose-invert max-w-none">
        {children}
      </div>
    </section>
  );
}
