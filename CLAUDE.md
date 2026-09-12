# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this project is

Personal engineering site for **Miguel Atencio Vargas** — Backend & Platform
Engineer working in applied AI. Published at
`https://miguel-atencio-vargas.github.io` via GitHub Pages.

This is **not** a portfolio. It is an engineering knowledge hub: a place that
shows how Miguel thinks about systems, not a list of technologies he has
touched. Every change should move the site toward that.

Repository: `github.com/miguel-atencio-vargas/miguel-atencio-vargas.github.io`.
It is a GitHub Pages **user site**, so it is served from the domain root — there
is no project sub-path, which is why `base` in `astro.config.mjs` should not be
set to a relative value (see Known issues).

## Positioning

Miguel is repositioning from "backend developer" toward
**Backend + Platform Engineering + Applied AI**, targeting Staff/Principal
level over the next 5–10 years.

The site should communicate:

- systems thinking and architectural judgment
- automation of operational work
- applied AI on real problems (RAG, agents, LLM integrations, MCP)
- technical decisions justified by explicit trade-offs
- ownership and continuous learning

It should **not** communicate: "knows Node.js", "detail-oriented",
"self-taught", percentage skill bars, or logo grids.

## Canonical facts (the only ones that may be written as fact)

This section exists so that "never invent facts" is actionable. If a claim is
not here, not already in the repo, and not in Miguel's request, it does not go
on the site.

**Professional**

- Software engineer, 3+ years of professional experience.
- Currently at **Cox Automotive – Dealer.com**, Managed Services / Spec Ops
  (CodeRoad team), working remotely.
- Previous employers: **NTG**, **Applaudo Studios**.
- Based in La Paz, Bolivia. Works remotely with distributed teams.
- `TODO(miguel):` confirm the exact public-facing job title to use on the site,
  and whether current employer should be named or described generically.

**Verified figures usable on the site**

- 18% backend efficiency improvement and 30% legacy platform performance
  improvement (Applaudo / LUUK).
- 400+ US veterinary clinics supported (CCW).
- Nothing else. Do not restate these with different numbers, round them, or
  extend them to other contexts.

**Professional stack (claimable as production experience)**

Node.js, TypeScript, JavaScript, NestJS, Hapi.js, MongoDB, PostgreSQL,
Elasticsearch, Redis, RabbitMQ, Docker, Linux, REST APIs, Git/Git Flow,
New Relic, Scrum.

**Applied AI / personal-project stack (claimable, but never as production work)**

Claude API, Claude Code, MCP, Qdrant, LLM integrations, multi-agent
orchestration, Python.

**Currently learning (never present as expertise)**

Kubernetes, Kafka, AWS architecture, UML modeling, DDD, C#. These belong in
`/now` or in blog posts, never in About or Work as capability claims.

## Engineering philosophy (use as source material, do not paraphrase into fluff)

- Software should eliminate repetitive work.
- AI should augment human judgment, not replace thinking.
- Understand the problem before writing code.
- Documentation and architecture are first-class deliverables.
- Build systems that are easy to maintain.
- Technical decisions must be justified through explicit trade-offs.

## Voice and writing rules

- **Language: English.** All site content, commit messages, and PR
  descriptions. (Conversation with Miguel may be in Spanish; the repo is not.)
  Spanish strings in committed files are a bug, not a placeholder.
- Write plainly and specifically. Short sentences. No marketing register.
- Prefer concrete nouns over adjectives: "migrated the search layer from
  Elasticsearch to OpenSearch" beats "passionate about scalable systems".
- First person is fine in blog posts and About. Third person nowhere.
- Never use: "passionate", "ninja", "rockstar", "guru", "cutting-edge",
  "leverage" as a verb, "seamless", "game-changing".
- Trade-offs are the differentiator. If a piece of writing describes a
  decision without naming what was given up, it is not finished.

## Hard content rules

These protect credibility. Do not break them, even if asked in passing.

1. **Never invent facts.** No metrics, dates, job titles, client names,
   technologies, or outcomes that are not already in the repo, listed under
   Canonical facts, or supplied by Miguel in the request.
2. If a case study or post needs a number Miguel has not provided, leave an
   explicit `TODO(miguel):` marker in the draft. Do not estimate.
3. Do not claim production experience for personal projects, or team
   leadership for solo work.
4. Certifications and courses are only described as **in progress** until
   Miguel confirms a pass. Never write a credential as obtained.
5. Employer-internal work (client names, ticket details, internal tooling) does
   not go on the site unless Miguel explicitly clears it.

## Tech stack and constraints

- **Astro** (currently `^3.0.12` — upgrades are welcome but must be their own PR)
- Plain `.astro` components, scoped `<style>` blocks, no CSS framework
- No React/Vue/Svelte islands unless a change genuinely requires interactivity
- Deployed by `.github/workflows/deploy.yml` on push to `main`
- Keep the site static, dependency-light, and fast. Every new dependency needs
  a justification in the PR description.
- No backend, no CMS, no database, no analytics, no comment system, no
  newsletter. Content is Markdown in the repo. Adding any of these is a
  decision for Miguel, not a side effect of a task.

### Local development

```
npm install
npm run dev      # local preview
npm run build    # must pass before any PR
npm run preview  # verify the built output
```

`TODO(miguel):` pin the Node version (`.nvmrc` or `engines`) so local and CI
builds agree.

### Structural conventions

- Pages in `src/pages/`, layouts in `src/layouts/`, components in
  `src/components/` split by `Desktop/` and `Mobile/`
- Design tokens are CSS custom properties in `BaseLayout.astro` `:root`.
  Use them. Do not hardcode hex colors in components.
- **Internal links must be root-absolute** (`/contact`, not `contact`). Relative
  hrefs break on nested routes — this is a live bug, see Known issues.
- Assets referenced from `public/` resolve at the site root: `/fonts/...`,
  not `/public/fonts/...`.

## Information architecture

Target navigation: **Home · About · Work · Blog · Now · Contact**

Deliberate decision: do **not** create separate top-level sections for AI Lab,
Research, Architecture, Notes, Tools, or Roadmaps. Those are **blog tags**, and
each tag renders its own view (`/blog/tag/ai-lab` is the AI Lab). The site
grows with content, not with empty scaffolding. Four full sections beat
seventeen empty ones.

The canonical route for case studies is `/work`. The existing
`src/pages/projects.astro` predates this decision.
`TODO(miguel):` decide whether `/projects` is deleted or redirected to `/work`.

### The Now page

`/now` is the honest, dated snapshot: what Miguel is working on, what he is
learning, and what is in progress — including the certification track
(Anthropic Developer – Foundations, with Architect – Foundations as a later
step) and the current course priorities (Kubernetes, then Kafka, AWS
architecture, microservices patterns, Redis, zero-trust).

Rules: every entry carries a date, nothing is aspirational, and a stale Now
page is worse than no Now page. If a change makes the Now page contradict
About or Work, fix both in the same PR.

### SEO and metadata

- Every page needs a unique `title` and `description` that match the
  positioning above. "Portfolio" is not a word that belongs in a meta tag.
- Canonical URLs derive from `site` in `astro.config.mjs` — until that value is
  corrected, sitemap and RSS work is blocked.
- Open Graph and Twitter card tags belong in `BaseLayout.astro`, not per page.

## Blog conventions

The blog is the engine of the site and stays central. It is where Miguel
publishes what he learns.

- Posts live as Markdown with this frontmatter shape:
  `title`, `description`, `pubDate`, `tags`, `draft`
- Canonical tags: `architecture`, `ai-lab`, `automation`, `platform`,
  `notes`, `research`. Introducing a new tag requires a reason in the PR.
  The `architecture` tag has its own standards — see Architecture below.
- A post is publishable when it answers: what problem, what was tried, what
  was traded off, what was learned. Tutorials that restate documentation are
  not in scope.
- `draft: true` posts must not render in production listings.

## Case study format

Every project under `/work` uses this structure, in this order:

1. **Problem** — what was actually broken or missing
2. **Context** — constraints: team, scale, legacy, deadlines
3. **Architecture** — how it was built, with a diagram where it helps; follows
   the notation and vocabulary rules in Architecture below
4. **Decisions** — what was chosen
5. **Trade-offs** — what was given up, and why that was acceptable
6. **Results** — outcomes, honestly scoped
7. **Lessons** — what would be done differently

Current case study candidates. All three are **personal projects** — results
sections must be scoped accordingly (rule 3), and any metric needs a
`TODO(miguel):` marker until Miguel supplies it.

- **Del Iver La Paz** — regional delivery platform for La Paz; NestJS
  event-driven order orchestration
- **Trading Research Agent** — RAG over Qdrant, LLM pattern detection
  (Murphy + Smart Money Concepts frameworks)
- **Multi-agent Docker system** — seven coordinated agents

Source material for these lives outside the repo (Miguel's notes and prior
conversations). Ask for it; do not reconstruct it from the project name.

## Architecture: vocabulary, diagrams, and standards

Architectural judgment is the thing the site is supposed to demonstrate, so
this section is binding on case studies, on `architecture`-tagged posts, and on
every diagram that ships.

### Where the modeling vocabulary comes from

Miguel is working through a structured self-study of UML modeling (HKUST,
Coursera — Modules 1–6: modeling with UML, class relationships, requirements
capture and domain modeling, use case modeling and specification). The stated
goal is to think about design before writing code: take a raw business domain
and produce use case, class, and sequence diagrams a team can implement without
ambiguity.

This is **in progress**, not a credential (rule 4). It belongs in `/now` and in
blog posts. It does not belong in About as a capability claim.

Reference canon, in the order it is actually used:

- Fowler, *UML Distilled* — notation, the "what does this actually mean" layer
- Larman, *Applying UML and Patterns* — responsibility assignment, when a
  diagram earns its place
- Evans, *Domain-Driven Design* — entities, value objects, aggregates; this is
  the bridge from model to code
- Refactoring.Guru / GoF design patterns — pattern vocabulary
- Beck, *Extreme Programming Explained* — process values, not modeling

Use this vocabulary precisely or not at all. "Aggregate", "value object", and
"entity" have definitions; do not use them as synonyms for "object".

### The rule that makes architecture writing credible

A modeling or architectural decision is not finished until the **domain
restriction that justifies it is written down**. Reaching the right conclusion
without naming the constraint behind it is the known failure mode here, and on
a public site it reads as assertion rather than reasoning.

Concretely, in any post or case study:

- Naming a multiplicity requires naming what it counts. Multiplicity counts
  links; it cannot filter by state. "Max 3 active loans" is not a multiplicity.
- Choosing composition over aggregation requires working through the full set
  of criteria, not one. Lifecycle dependency is about object destruction, not
  about the real-world thing ceasing to exist.
- Removing a redundant association requires naming the constraint that makes it
  redundant and the contradiction risk between the remaining paths.

This is the same rule as the trade-off rule in Voice: a decision described
without its justification is unfinished writing.

### Diagram conventions

Diagrams are content, not decoration. Every diagram must be readable at mobile
width and must carry a text description — a diagram without alt text or a
prose equivalent fails accessibility and fails readers on feeds.

Notation errors that must never ship (all previously corrected, do not
reintroduce):

- crow's foot notation in UML class diagrams — use plain UML association lines
- three-dot ranges (`0...3`) — the correct form is `0..3`
- `n` for unbounded multiplicity — the correct symbol is `*`
- uncapitalized class and association names

`TODO(miguel):` decide the diagram toolchain. The constraint is
dependency-light and static: hand-authored inline SVG, or Mermaid rendered at
build time. Pick one and use it everywhere; do not mix.

### Bridge to code

- **C#** is the implementation target for modeling and study artifacts. The
  professional production stack is Node.js/TypeScript/NestJS. Do not blur the
  two — a C# snippet in a post is study material, not work experience.
- DDD is the translation layer between diagram and code, deliberately, because
  the .NET stack tends toward anemic domain models.
- Known UML-to-C# translation losses, and good post material: a `0..3`
  multiplicity constraint disappears into `ICollection<T>` with no type-level
  enforcement; composition lifecycle semantics become invisible under garbage
  collection. Write about what the model promises and the language does not
  keep.
- Miguel's Smalltalk background (message passing, object identity, Pharo) is a
  legitimate conceptual lens and may be written about as such. It is not a
  claimed stack and does not go in a skills list.

### Scope of the `architecture` tag

In scope: modeling decisions with the restriction named, translation losses
between model and language, anti-patterns and when *not* to use a construct,
decision records with explicit trade-offs.

Out of scope: notation tutorials, UML cheat sheets, anything that restates the
documentation or the course material. Course content is licensed; only original
derived work — Miguel's own diagrams, examples, and synthesis — goes on the
site, and course text is never reproduced.

## Visual direction

Minimalist and typographic. Reference points: Stripe, Linear, Vercel,
Anthropic. Generous whitespace. Diagrams over decoration. Subtle motion only.

Explicitly banned: progress bars, skill percentages, "90% JavaScript",
animated gradients, carousels, testimonial sliders.

Accessibility is not optional: semantic HTML, real heading order, visible
focus states, alt text on every image, AA contrast minimum.

## Known issues (fix in dedicated PRs, do not bundle)

Roughly in priority order: routing and asset bugs are live defects, placeholder
copy is a credibility defect, leftovers are cleanup.

- `astro.config.mjs` has `site: 'https://skyfall947.github.io'` — wrong
  domain, breaks canonical URLs and future sitemap/RSS. Also review `base: '.'`.
- `Desktop/HeaderNavigation.astro` and the Mobile equivalent link Contact as
  `href="contact"` — resolves relative, producing `/blog/contact`.
- `BaseLayout.astro` loads the font from `/public/fonts/SFMonoRegular.woff`;
  correct path is `/fonts/SFMonoRegular.woff`. The custom font is not loading.
- Favicon links use relative `./favicon/...` paths.
- `src/pages/blog.astro` contains Spanish placeholder copy
  ("aqui vamos a listar los articulos del blog"); `blog/article-1.md` and
  `article-2.md` are template dummies.
- Home meta description reads "Software developer portfolio" — contradicts
  the positioning above.
- `src/pages/projects.astro` renders only a heading — no content.
- `Postman.astro`, `RequestEditor.astro`, `ResponseData.astro` appear to be
  unused template leftovers.
- `package.json` is still named `client-web-astro`.

## Working agreement

- **One concern per PR.** A bug fix, a content addition, and a refactor are
  three PRs. Miguel reviews diffs on mobile; keep them readable.
- Always run `npm run build` before opening a PR. A build failure is a blocked PR.
- PR description must state: what changed, why, and any trade-off taken.
- Do not restructure directories, rename routes, or upgrade dependencies as a
  side effect of an unrelated task.
- Never commit real contact details beyond what is already public, analytics
  scripts, or tracking pixels without being asked.
- When a request is ambiguous about content that affects positioning, open the
  PR as a draft and ask in the description rather than guessing.

### Definition of done

A change is ready when all of these hold:

1. `npm run build` passes.
2. No invented facts; every claim traces to Canonical facts, the repo, or the
   request. Open questions are `TODO(miguel):` markers, not guesses.
3. Internal links are root-absolute; assets resolve from the site root.
4. Colors and spacing come from the design tokens.
5. Headings are in order, images have alt text, focus states are visible.
   Diagrams carry a text description and use correct UML notation.
6. The diff covers one concern.
7. The PR description names the trade-off.
