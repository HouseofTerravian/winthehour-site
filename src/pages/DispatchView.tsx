import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function renderMarkdown(md: string) {
  return md.split("\n\n").map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed === "---") {
      return <hr key={i} className="border-steel my-10" />;
    }

    if (trimmed.startsWith("# ")) {
      return (
        <h1 key={i} className="text-4xl sm:text-5xl font-bold mb-6">
          {trimmed.slice(2)}
        </h1>
      );
    }

    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-molten">
          {trimmed.slice(3)}
        </h2>
      );
    }

    return (
      <div key={i} className="mb-6">
        {trimmed.split("\n").map((line, j) => {
          const formatted = line
            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(.+?)\*/g, "<em>$1</em>")
            .replace(/&copy;/g, "\u00A9")
            .replace(/&trade;/g, "\u2122");

          return (
            <p
              key={j}
              className="text-white/80 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: formatted }}
            />
          );
        })}
      </div>
    );
  });
}

export default function DispatchView() {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/dispatches/dispatch_${id?.padStart(3, "0")}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then(setContent)
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return (
      <section className="pt-32 pb-28 px-6 bg-charcoal min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Dispatch Not Found</h1>
          <p className="text-white/70 text-lg mb-8">This transmission does not exist.</p>
          <Link
            to="/dispatches"
            className="bg-molten text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-molten-dark transition-all"
          >
            Return to Dispatches
          </Link>
        </div>
      </section>
    );
  }

  if (!content) {
    return (
      <section className="pt-32 pb-28 px-6 bg-charcoal min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/50 text-lg">Loading transmission...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-28 px-6 bg-charcoal min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/dispatches"
          className="inline-flex items-center gap-2 text-white/50 hover:text-molten transition-colors mb-10"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          All Dispatches
        </Link>

        <article>{renderMarkdown(content)}</article>
      </div>
    </section>
  );
}
