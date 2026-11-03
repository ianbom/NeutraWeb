"use client";

import { useState } from "react";
import { CaseCard } from "@/components/sections/case-card";
import type { CaseItem } from "@/data/cases";

export function CasesExplorer({ items }: { items: CaseItem[] }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const categories = [...new Set(items.flatMap((item) => item.tags))].filter((tag) => !["Heavy Equipment", "Logistics", "Shipping", "Lifestyle"].includes(tag));
  const query = search.trim().toLowerCase();
  const filtered = items.filter((item) =>
    (category === "All" || item.tags.includes(category)) &&
    [item.title, ...item.tags].some((text) => text.toLowerCase().includes(query))
  );

  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <div className="flex flex-col gap-6">
        <div className="flex justify-end">
          <input
            type="search"
            aria-label="Search projects"
            placeholder="Search Project..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full max-w-64 rounded-full border border-white bg-white/70 px-5 py-3 text-sm text-ink outline-offset-2 placeholder:text-body focus-visible:outline-2 focus-visible:outline-ink"
          />
        </div>
        <div role="group" aria-label="Project categories" className="flex flex-wrap items-center gap-2 md:gap-4">
          {["All", ...categories].map((tag) => (
            <button
              key={tag}
              type="button"
              aria-pressed={category === tag}
              onClick={() => setCategory(tag)}
              className="rounded-full px-4 py-2 text-sm font-medium text-body outline-offset-2 hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-ink aria-pressed:bg-white aria-pressed:text-ink"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      {filtered.length ? (
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 md:gap-y-16">
          {filtered.map((item) => <CaseCard key={item.title} item={item} />)}
        </div>
      ) : (
        <p role="status" className="py-8 text-center text-body">No projects found</p>
      )}
    </div>
  );
}
