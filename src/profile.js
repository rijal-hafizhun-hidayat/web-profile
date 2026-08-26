export const profile = {
  name: 'Rijal Hafizhun Hidayat',
  role: 'Full Stack Developer',
  location: 'Bandung, Jawa Barat, Indonesia',
  // Currently employed per the CV — flip to true to show the status dot.
  available: false,
  bio: `I build web applications end to end — REST APIs on the backend,
        and interfaces that stay fast and quiet on the front. Mostly
        working in the public-sector space these days.`,
  email: 'rijal.1344@gmail.com',
  phone: '+62 813 9378 4144',
}

export const links = [
  { label: 'GitHub', href: 'https://github.com/rijal-hafizhun-hidayat' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rijal-hafizhun-hidayat' },
  { label: 'Email', href: `mailto:${profile.email}` },
]

export const work = [
  {
    role: 'Full Stack Developer',
    org: 'PT Mitra Sinerji Teknoindo',
    context: 'Government web systems for national ministries',
    period: 'Feb 2025 — Now',
    highlights: [
      {
        problem:
          'Reporting screens backed by DataTables were issuing a query per row, so the N+1 access pattern degraded as the underlying tables grew.',
        solution:
          'Reworked the reporting queries to fetch in bulk rather than per row, removing the N+1 pattern from those paths.',
      },
      {
        problem:
          'A ministry gratuity-reporting system was running on PHP 7 and CodeIgniter 4.1, carrying open dependency advisories, and a web shell was found on the host.',
        solution:
          'Led the upgrade to PHP 8.3 and CodeIgniter 4.7, cleared the flagged dependencies, and remediated the compromised host.',
      },
      {
        problem:
          'A ministry telecoms licensing platform was being replaced by a next-generation rewrite, but the certification application built on top of it was coupled to the shape of the legacy API. A direct migration meant rewriting its client code.',
        solution:
          'Designed an aggregation endpoint that unified the legacy and next-generation services behind one contract, so the certification application migrated by changing only its host URL — no client-side changes.',
      },
      {
        problem:
          'Report lifecycle events had to push notifications through the ministry’s notification API, but calling it inline would have put a third-party dependency inside core database transactions.',
        solution:
          'Built the OAuth2 integration as a non-blocking, best-effort path with cached client-credentials tokens, so all six lifecycle events dispatch without a notification failure touching the transaction.',
      },
      {
        problem:
          'Vendor documentation for the ministry-wide OpenID Connect provider did not match its live behaviour, particularly around logout, which blocked the SSO integration.',
        solution:
          'Implemented the authorization code flow against observed provider behaviour rather than the docs — just-in-time provisioning, role assignment by employee ID, and a popup-based logout the documented flow did not cover.',
      },
      {
        problem:
          'Rolling out the ministry’s audit supervision system meant moving hierarchical audit data on Oracle while keeping existing sequences consistent.',
        solution:
          'Handled the schema migration and sequence synchronisation during rollout.',
      },
    ],
  },
  {
    role: 'Full Stack Developer',
    org: 'Signal99 Studio',
    context: 'Software agency serving business technology needs',
    period: 'Jul 2023 — Jul 2024',
    highlights: [
      {
        problem:
          'Each internal application at BBLKM Palembang held its own credential store, so staff identity was duplicated across systems with no shared source of truth.',
        solution:
          'Built a single sign-on service in Laravel and moved the existing applications onto one credential store.',
      },
    ],
  },
]

export const projects = [
  {
    group: 'Freelance',
    items: [
      {
        name: 'Internship assessment platform',
        client: 'Universitas Ahmad Dahlan',
        role: 'Web Developer',
        period: 'Jun 2023 — Oct 2023',
        stack: ['Laravel', 'Vue'],
        problem:
          'The Faculty of Education assessed interns on separate paper forms — one for supervising teachers, one for interns — so grading was split across documents and had to be consolidated by hand.',
        solution:
          'Built a single assessment platform covering both roles, consolidating grading into one workflow and removing the paper step entirely.',
      },
      {
        name: 'Asset management system refactor',
        client: 'PWM DIY',
        role: 'Web Developer',
        period: 'Dec 2021 — Aug 2022',
        stack: ['CodeIgniter'],
        problem:
          'The regional asset management system had drifted from the requirements the office actually worked to, and the existing codebase was difficult to change.',
        solution:
          'Refactored the system back to the requirements the office set.',
      },
      {
        name: 'Village information and complaint portal',
        client: 'Desa Jatitujuh',
        role: 'Back End Developer',
        period: 'Apr 2021 — Jun 2021',
        stack: ['CodeIgniter'],
        problem:
          'The village had no digital channel for public information or complaints — submissions and their administrative review were handled off-system.',
        solution:
          'Built the back end for the portal, covering submission handling and the administrative review path.',
      },
    ],
  },
  {
    group: 'Personal',
    items: [
      {
        name: 'Video sharing platform',
        role: 'Web Developer',
        period: 'Nov 2024 — Dec 2024',
        stack: ['Nuxt', 'Express', 'Bun', 'PostgreSQL'],
        href: 'https://mim.bebs.cloud',
        problem:
          'Wanted a video sharing platform that accepted uploads without forcing account creation, while still keeping content organised and browsable.',
        solution:
          'Designed and shipped it end to end — a Nuxt front end and an Express/Bun TypeScript API on PostgreSQL, handling anonymous uploads and content categorisation.',
      },
    ],
  },
]

export const stack = [
  { label: 'Languages', items: ['PHP', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'] },
  { label: 'Frameworks', items: ['Laravel', 'CodeIgniter', 'React', 'Vue', 'Nuxt', 'Node.js', 'Express', 'Bun', 'Bootstrap'] },
  { label: 'Databases', items: ['PostgreSQL', 'Oracle', 'MySQL', 'MariaDB'] },
  { label: 'Tools & Practices', items: ['Git', 'GitLab CI/CD', 'Nginx', 'Linux (Ubuntu)', 'REST API design', 'OAuth2', 'OpenID Connect'] },
]

export const education = [
  {
    org: 'Universitas Ahmad Dahlan',
    role: 'Bachelor of Informatics',
    context: 'Yogyakarta',
    period: '2019 — 2023',
  },
  {
    org: 'Universitas Ahmad Dahlan',
    role: 'Student Employee',
    context: 'Vocational Education in Automotive Technology',
    period: '2022 — 2023',
  },
]
