// Simple line icons for the homepage situation cards.
const paths: Record<string, React.ReactNode> = {
  plane: <path d="M10.5 13.5 3 11l1.5-1.5 7 1 4-4.5c.8-.8 2.2-.8 3 0s.8 2.2 0 3l-4.5 4 1 7L14 21.5l-2.5-7.5-3.5 3V20l-1.5 1.5-1-3.5L2 17l1.5-1.5H6.5Z" />,
  people: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14.2c2.9.2 5 2.6 5 5.8" /></>,
  building: <><path d="M4 21V5l8-2v18M12 8h8v13" /><path d="M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2M2 21h20" /></>,
  home: <><path d="M3 11 12 4l9 7" /><path d="M5 10v11h14V10" /><path d="M10 21v-6h4v6" /></>,
  heart: <path d="M12 20s-7.5-4.5-7.5-10A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 3c0 5.5-7.5 10-7.5 10Z" />,
  scroll: <><path d="M7 3h11v15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-1h11v1a3 3 0 0 0 3 3" /><path d="M7 3a2 2 0 0 0-2 2v12M10 8h5M10 12h5" /></>,
  scale: <><path d="M12 3v18M7 21h10M5 7h14" /><path d="m5 7-3 7a3.5 3.5 0 0 0 6 0L5 7ZM19 7l-3 7a3.5 3.5 0 0 0 6 0l-3-7Z" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" /></>,
  arrows: <><path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  shield: <><path d="M12 3 4 6v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
};

export default function Icon({ name }: { name: string }) {
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
