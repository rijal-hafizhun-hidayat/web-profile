# web-profile

Minimalist personal profile — Bun + Vue 3 + Tailwind CSS v4.

```bash
bun install
bun dev      # http://localhost:5173
bun run build && bun run preview
```

## Editing

All page content lives in `src/profile.js` — bio, links, experience,
projects, stack, education — sourced from `CV_Rijal_Hafizhun_Hidayat.pdf`.
The components read from it, so you shouldn't need to touch markup to
change what the page says.

Entries are titled by what the system does, not by its internal acronym
— `SIMAM`, `E-PLP` and `EMAWAS` mean nothing to a reader outside the
organisation, so a project carries a descriptive `name` plus the
`client` it was built for. Keep that shape when you add entries.

Two deliberate defaults in there, both one-line changes:

- `profile.available` is `false` (the CV shows you currently employed).
  Set it to `true` to show the green "Available for work" dot.
- `profile.phone` exists but is **not** in `links` — a phone number on a
  public page attracts spam. Add it to the array if you want it shown.

## Files

- `src/App.vue` — page layout and sections
- `src/components/Entry.vue` — the period-in-left-gutter row shared by
  experience, projects and education
- `src/components/Section.vue` — section heading wrapper
- `src/components/ThemeToggle.vue` — light/dark switch (persists to localStorage)
- `src/style.css` — Tailwind entry, fonts, `.rise` entrance animation

Dark mode is class-based (`.dark` on `<html>`), set by an inline script in
`index.html` before first paint so there's no theme flash on load.
