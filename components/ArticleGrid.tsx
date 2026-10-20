import Link from "next/link";
import { type Article, coverImage, topics } from "@/content/insights";

export function TopicChips({ current }: { current?: string }) {
  return (
    <nav aria-label="Blog topics" className="chips">
      <Link href="/insights" className={!current ? "chip active" : "chip"} aria-current={!current ? "page" : undefined}>
        All topics
      </Link>
      {topics.map((t) => (
        <Link
          key={t.slug}
          href={`/insights/topic/${t.slug}`}
          className={current === t.slug ? "chip active" : "chip"}
          aria-current={current === t.slug ? "page" : undefined}
        >
          {t.title}
        </Link>
      ))}
    </nav>
  );
}

export default function ArticleGrid({ items }: { items: Article[] }) {
  return (
    <div className="posts">
      {items.map((a) => (
        <Link key={a.slug} href={`/insights/${a.slug}`} className="post">
          <img src={coverImage(a)} alt="" width={1200} height={630} loading="lazy" />
          <div className="post-body">
            <span className="post-cat">{a.category}</span>
            <h3>{a.title}</h3>
            <p>{a.summary}</p>
            <span className="post-meta">Updated {a.updated} · Read article →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
