# Onevia — Design System

## Product Context
**Onevia** is an "Everything as a Service" (XaaS) platform — one unified provider for every operational layer a modern company needs. Positioning: *"One company. Every service. One via."*

**Service catalog (the "aaS" stack):**
- **SaaS** — Software as a Service
- **BaaS** — Backend as a Service
- **QAaaS** — Quality Assurance as a Service
- **DevOpsaaS** — DevOps as a Service
- **SREaaS** — Site Reliability Engineering as a Service
- **AIaaS** — AI as a Service
- **BAaaS** — Business Analytics as a Service
- (extensible: SecurityaaS, DataaaS, etc.)

**Jobs To Be Done:** Teams want to stop stitching together a dozen vendors. Onevia converges every "as-a-service" layer into one contract, one dashboard, one SLA, one bill.

**Target audience:** CTOs, engineering leaders, startup founders, platform teams.

## Site Architecture (Full Site)
1. **Home** — hero, service grid, terminal/CLI section, "how it works", stats, testimonials, pricing, CTA, footer
2. **Services / Solutions** — overview of all aaS offerings in the bento/grid style
3. **Service Detail pages** — SaaS, BaaS, QAaaS, DevOpsaaS, SREaaS, AIaaS, BAaaS (templated)
4. **Pricing** — Starter / Pro / Enterprise tiers
5. **About** — mission, team, story
6. **Resources / Blog** — article index
7. **Careers** — open roles
8. **Contact** — form + waitlist

---

## PRIMARY THEME — "Red Noir" (dark, cinematic, tech)

This is the dominant style across the entire site. Based on the user-provided reference implementation.

### Colors
- `--bg-black: #000000` — primary background
- `--bg-noir: #1a0505` — top gradient origin (deep oxblood → black)
- `--accent-red: #ef233c` — the ONE brand accent (rationed like b-egg's amber: badges, key headlines words, CTAs, pricing highlight, section markers)
- `--accent-red-glow: rgba(239, 35, 60, 0.5)` — glow/shadow
- `--white: #ffffff` — primary text
- `--zinc-400: #a1a1aa` — secondary text
- `--zinc-500: #71717a` — muted labels
- Surfaces: `bg-white/5`, `bg-zinc-900/50`, borders `border-white/10`
- Secondary icon accents (sparingly, feature cards only): blue `#3b82f6`, yellow `#facc15`, purple `#a855f7`

### Typography
- **Display / Headings:** `Manrope` (weights 200,400,600,700,800) — tight tracking (`tracking-tighter`), large editorial scale (hero up to `text-8xl`), stacked flush treatment inspired by b-egg's oversized condensed display
- **Body:** `Inter` (300–600)
- **Mono (terminal + data labels):** `JetBrains Mono`
- Headline treatment: gradient-clip text `from-white via-white to-white/40`; key word in `--accent-red` with a hand-drawn SVG underline swish

### Radius & Shape
- Pills (`9999px`) for nav, badges, CTAs
- `rounded-xl` for bento feature cards
- Buttons: shiny conic-gradient animated border CTA (primary), ghost/outline (secondary)

### Shadows & Effects
- Red glow shadows: `shadow-[0_0_30px_rgba(239,35,60,0.1)]`
- Glassmorphism nav: `bg-black/60 backdrop-blur-xl border border-white/10`
- Top gradient-blur header band

### Signature background system (fixed, behind all content)
- Deep oxblood→black vertical gradient
- Two parallax **star fields** drifting upward (`animStar` keyframe, 50s + 80s)
- Large central red radial glow (`blur-[120px]`)
- Faint 40px dotted/line grid with radial mask fade

---

## SECONDARY THEME — "Terminal CLI" (ONE section only)

Applied to a single, standout section on the Home page (the "How Onevia deploys / provisioning" section) — a deliberate style event, the way b-egg rations its amber band. It must feel like dropping into a live shell.

### Philosophy
Brutally functional, high-contrast, authentically retro hacker/mainframe shell. Clean ZSH/BASH, NOT Matrix rain.

### Colors (within this section)
- Background: `#0a0a0a` (deep black, not OLED pure — allows scanlines)
- Primary: `#33ff00` (bright neon terminal green)
- Secondary: `#ffb000` (amber — warnings/accents)
- Muted/border: `#1f521f` (dimmed green)
- Error: `#ff3333`
- Note: the red noir `--accent-red` may appear only as a tiny `[ONEVIA]` tag to tie it back to brand.

### Typography (this section)
- `JetBrains Mono` everywhere; **ALL CAPS** headers, lowercase for command/body
- Radius `0px`, borders `1px solid/dashed` green to define panes

### Signatures
- Blinking block cursor `█` / underscore `_` (`animate-blink`)
- Shell prompts: `onevia@cloud:~$`, flags `--deploy`, status codes `[OK]` `[ERR]`
- Subtle CRT scanline overlay (`pointer-events-none`), faint
- Text glow: `text-shadow: 0 0 5px rgba(51,255,0,0.5)`
- Typing/typewriter effect on the command lines (`typing-demo`)
- Raw-data viz as ASCII progress bars `[||||||||||.....]` (e.g. "Provisioning SREaaS [||||||||.. 82%]")
- Window/pane cards with title bars: `+--- SYSTEM STATUS ---+`
- Buttons as bracketed text `[ INITIATE DEPLOY ]`, hover = inverted video (green fill, black text)
- ASCII-art ONEVIA wordmark inside the pane

---

## LOGO — Orbit / Convergence Mark (inline SVG, no raster)
Unique mark visualizing **many services converging into one path ("one via")**:
- Concentric orbital rings (2–3) in `--accent-red` with varying opacity
- Several small nodes/dots sitting on the orbits (each = a service: SaaS, BaaS, AI…)
- A single bright solid core dot at center with a red glow — the convergence point
- One node connected to center by a thin "via" line/path
- Pairs with `Onevia` wordmark in Manrope bold
- Rendered as crisp inline SVG so it scales in nav (sm), footer (lg), and the huge footer `text-stroke` wordmark
- In the terminal section, render an ASCII-art version of the mark/wordmark
- NEVER substitute initials/emoji/generic marks

## Motion / Animation Patterns (b-egg.farm inspired)
- **Smooth inertial scroll** feel (Lenis-style) + **scroll-triggered reveals** (GSAP-style): every major band fades/slides in on entry
- `fade-in-up` with staggered `animation-delay` on hero elements
- Conic-gradient **border-spin** on primary CTA (2.5s linear infinite)
- Parallax star fields (continuous upward drift)
- Ping/pulse dot on the "live" status badge
- Oversized footer wordmark with `-webkit-text-stroke` (editorial, b-egg scale)
- Marquee/opacity logo strip of integrated tech partners
- Hover: red radial glow bleeds into bento cards; arrow icons translate-x
- Terminal section: blink cursor, typewriter command lines, animated ASCII progress bars

## Media / Assets
- **Hero key visual + background video loop** (generated separately): cinematic dark abstract network/convergence of red light nodes/orbits over black — leaves negative space for the headline. Video is a slow, looping drift of glowing red particles converging; muted, autoplay, loop, `object-cover`, low opacity under the hero.
- **Logo strip:** OpenAI / AWS / Vercel / Stripe / Figma / Kubernetes style integration marks
- Images composed with CSS/SVG where possible; generated raster only for atmospheric hero/background.

## Layout Strategy
- Max-width containers (`max-w-5xl` nav, `max-w-7xl` content)
- Bento grid for features (b-egg's asymmetric feature rhythm, red-noir chrome)
- Editorial left/center balance; big ragged display headlines
- Full-bleed accent bands (red testimonial band) as rhythm pivots — mirrors b-egg's rationed full-bleed amber band
- Strict character grid inside the terminal section

## Guardrails
- Red (`#ef233c`) is the ONLY brand accent on noir sections — ration it; keep most surfaces black/white/zinc.
- Terminal green (`#33ff00`) stays confined to the single terminal section — do not leak it site-wide.
- Pure-black noir background; never neutral gray.
- Keep Manrope/Inter on noir, JetBrains Mono on terminal — do not introduce other fonts.
- Logo must always be the orbit/convergence SVG mark — never initials/emoji/placeholder.
- No rounded corners inside the terminal section (0px); pills/rounded-xl everywhere else.
