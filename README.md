# AdCraft Blog — a monetization-first GitHub Pages site

A lean static blog engineered around the ad placements that consistently raise
**RPM** (revenue per 1,000 views), deployed through a GitHub Actions pipeline
modeled line-for-line on `google/three-live`'s proven Pages workflow.

```
 No build step · No framework · No web fonts · ~10 KB stylesheet
```

---

## 1. Deploy in five minutes

1. Create a **new, public** GitHub repository and push this folder to it
   (e.g. `yourname/ads-blog`).
2. In the repo: **Settings → Pages → Build and deployment → Source: "GitHub Actions"**.
   *One click — the workflow handles the rest.*
3. Push to `main` (or run the workflow manually from the **Actions** tab →
   *Deploy Blog to GitHub Pages* → **Run workflow**).
4. Your site is live at `https://yourname.github.io/ads-blog/`.

The workflow (`.github/workflows/deploy-pages.yml`) reproduces the structure of
[google/three-live's pages.yml](https://github.com/google/three-live/actions/runs/42061953751):

| Behaviors cloned from that run | Why it helps |
|---|---|
| Two jobs: *build + upload artifact* → *deploy-pages* | Small failure blast radius |
| `permissions: contents read / pages write / id-token write` | The trio Pages OIDC needs |
| `concurrency: group "pages", cancel-in-progress` | No racing, failing deploys |
| Uses `gh api repos/${GITHUB_REPOSITORY}/pages` first, and ships the artifact anyway with a `::notice::` if Pages is off | Build never red-herrings; deploy auto-starts the moment you flip the setting |
| Every action pinned to the exact commit SHAs that run used | Supply-chain safe; No floating tags |

---

## 2. Turn the earnings on (AdSense, 3 steps)

**Step 1 — Get approved.** Apply at [adsense.google.com](https://adsense.google.com),
point it at your live Pages URL. The site already contains what reviewers look
for: `about.html` and `privacy.html` with full third-party-cookie disclosures,
a site-wide nav, and (after you add real posts) a content core. Approval rides
on the quality of *your* content — these demo pages are placeholders: **replace
them before applying.**

**Step 2 — Wire up the ad slots.** In `assets/js/ads.js` set:

```js
const AD_CONFIG = {
  publisherId: "ca-pub-XXXXXXXXXXXXXXXX",  // your AdSense client id
  slots: {
    leaderboard:   "1111111111",   // top banner
    inArticleTop:  "2222222222",   // after 1st paragraph — usually highest eCPM
    inArticleMid:  "3333333333",   // ~50% scroll depth
    sidebar:       "4444444444",   // sticky desktop 300×600
    contentFooter: "5555555555",   // before related posts
    inFeed:        "6666666666",   // homepage between card rows
  },
};
```

The tag geometry is already in place on every page — you only paste IDs. While
IDs are empty, each slot shows a labelled placeholder so you can check the
layout without burning real impressions.

**Step 3 — ads.txt.** Replace line in `ads.txt` with the exact value from
AdSense → Account → Settings → ads.txt, e.g.

```
google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
```

It must ship at the site root — which it already does. Unverified `ads.txt` =
gone auction inventory.

---

## 3. Where the units sit (and why)

| # | Slot | Position | Why it pays |
|---|------|----------|-------------|
| 1 | `leaderboard` | Under header, above the fold | Guaranteed first impression |
| 2 | `inArticleTop` | After 1st paragraph | Documented highest in-content eCPM — intent + trust peak |
| 3 | `inArticleMid` | ~50% of article | Harvests the median scroll-depth tail |
| 4 | `sidebar` | Sticky 300×600, desktop | Top viewability — directly priced into auctions |
| 5 | `contentFooter` | End of article, before related reads | Fulfills readers, better targeting |
| 6 | `inFeed` | Between homepage card rows | In-stream for browse-level sessions |
| 7 | `404.html` | Top banner | Even error paths monetize |

Built-in protections that keep RPM high rather than eroding it:

- **CLS-safe**: every slot fixes its min-height in CSS (`data-format` attr) — no
  layout jumping when creatives load, so LCP/CLS stay green while ads pop.
- **Lazy, 300px-ahead**: `ads.js` initializes each unit just before it meets the
  viewport (IntersectionObserver). Early request, render never blocks text.
- **Request cap**: 4-6 units/ page (≈3:1 content-to-ad ratio above policy warnings).
- **One script**: `adsbygoogle.js` loads exactly once, on the first filled slot.
- **Placeholder mode**: empty `publisherId` renders labeled grey boxes instead of dead space, without bloating layout.

---

## 4. Editing content

- Add a post: copy any file in `posts/`, update `<title>`, description,
  canonical, JSON-LD dates, and add it to `sitemap.xml`.
- URLs are **absolute links** in canonical/sitemap; placeholder
  `runnerchhotu-maker.github.io/ads-blog` appears in `index.html`, all posts, `robots.txt`,
  `sitemap.xml`, and page `<link rel=canonical>` — one find-and-replace after
  first deploy.
- Styling lives in `assets/css/style.css` — zero build step.
- Related read cards and in-article slot positions live inside each page's
  markup — move the `<div class="ad-slot">` elements any time and semantics
  stay, since rendering is 100% data-driven via `data-slot`/`data-format`.

## 5. Traffic loop (the other half of revenue)

Traffic × RPM = Earnings. RPM help is laid out above; traffic loop:

1. **Search Console** → add property → submit `sitemap.xml` → *Request Indexing*
   on each new URL — indexing normally within days.
2. **Internal links**: every new post ships linked from `index.html` (crawl paths).
3. One post per week beats ten posts once — crawl cadence learns and follows.
4. Watch Core Web Vitals in Search Console; the theme is already green by design.

## 6. Honest limitations (read once)

- **GitHub's Terms** restrict use of Pages for monetization like "banner
  advertising" in some interpretations; individual in-content display ads on a
  personal blog are widely hosted this way, but **re-read the ToS**, and if your
  plan is a revenue-scale business, move to Cloudflare Pages / Netlify / Vercel
  (same `ads.js` deploys unchanged) — GitHub Pages is not an ad-hosting
  service as a product goal. This repo is site-level, not a business-built
  premise.
- GitHub Pages does **not** support TLS-level `X-Rate-Limit` / server-side
  logic — nothing here needs it. A/B testing nav variants means shipping two
  branches, manually.
- GitHub Pages has a **1 GB artifact** ceiling; negligible for text-as-code
  sites like this one.
- No CSP header control on Pages: AdSense requires `unsafe-inline`-ish script
  loading anyway, so CSP would be advisory only.

## 7. File map

```
ads-blog/
├── index.html                  # Homepage: leaderboard + in-feed + sidebar slots
├── posts/
│   ├── where-to-place-ads.html            # the placement study (in-article slots demo)
│   ├── highest-paying-adsense-niches.html # niche guide (table + slot demo)
│   └── crawl-money.html                    # SEO + Core Web Vitals piece
├── about.html / privacy.html   # trust pages (required class for AdSense review)
├── 404.html                    # error path monetization
├── ads.txt                     # authorized-sellers (fill after approval)
├── robots.txt / sitemap.xml    # the indexing loop
├── .nojekyll                   # bypass Jekyll — byte-exact asset serving
├── assets/
│   ├── css/style.css           # ~8KB theme, CLS-safe ad containers
│   └── js/
│       ├── ads.js              # ⭐ slot engine — publisherId + slot IDs live here
│       └── main.js             # nav current state, footer year
└── .github/workflows/deploy-pages.yml   # ⭐ pages.yml clone (pinned SHAs, 2 jobs)
```

The two ⭐ files are the only ones you'll ever need to edit for monetization.
