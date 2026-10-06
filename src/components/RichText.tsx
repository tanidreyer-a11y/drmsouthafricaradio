import { Fragment } from "react";

// Renders text containing [label](url) links, as used in localNews.
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        const external = /^https?:/.test(m[2]);
        return (
          <a key={i} href={m[2]} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
            {m[1]}
          </a>
        );
      })}
    </>
  );
}

export function plainText(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}
