# CONTENT-PLAN — AdCraft Blog → "AI Tools Worth Buying"

Working site: https://tgi860324-creator.github.io/ads-blog/

## 1. Niche lock-in: AI tools & automation for small business

Rationale (so future-you doesn't second-guess):

| Factor | Why it wins |
|---|---|
| Advertiser economics | SaaS/tooling advertisers pay top-of-display CPCs (business contracts justify bids). In-content eCPMs in this vertical commonly land 3–5× generic tech blogs. |
| E-E-A-T achievability | Every article can embed *your own test*: screenshots, real costs, honest downsides. That first-hand layer is what AI-generated filler can't fake and what ranking systems reward. |
| Policy safety | Not YMYL (no health/finance claims). No gambling, no adult edge cases. Clean approval path. |
| Search demand | "best X for small business", "X vs Y", "alternative to Z", "is X worth it" — commercial-investigation queries that attract the exact advertisers paying the most. |
| Longevity | Tool landscapes rotate every ~6 months → evergreen refresh engine (update a post, date goes up, crawl spike returns). |

**Editorial voice:** first-person, tests performed, money mentioned plainly
("this cost me $29 and I refunded it in an hour"), no affiliate-farm styling.
One strong opinion per article.

## 2. AdSense application pitch (paste-ready)

> Site Name is a specialist resource for solopreneurs and small-business owners
> evaluating AI software. Every review is based on hands-on testing with real
> paid subscriptions; we publish actual costs, screenshots, and cancellation
> experiences rather than spec-sheet restatements. We currently publish [N]
> in-depth guides organized in 3 clusters (productivity tools, marketing
> automation, business operations), and we update existing posts on every major
> vendor release. The site contains a full privacy policy (including
> third-party advertising disclosures), an About page with the author's testing
> methodology, and an ads.txt file ready for authorization.

Site description (one-liner for any application/text field where asked):
> Hands-on reviews and cost-tested guides for AI software used by small
> businesses — what it's worth, what it costs, and when to skip it.

## 3. The 8 articles (one per week × 8)

Order below is deliberate: two "cluster anchor" posts first so later posts can
internal-link into them the day they ship.

### 1. "I ran my one-person business on AI tools for 30 days: full cost breakdown"
- Target query: `ai tools for small business real cost`
- Intent: informational, price-sensitive → SaaS advertiser magnet
- ~1,800 words. Structure: the stack I picked → weekly hours saved (honest,
  including the two failures) → per-tool monthly totals → what I canceled in
  week 3 → template of the final stack.
- Your first-hand layer: real invoices (redact if any), cancellation emails.
- Links into: 2, 4. Ad note: place `inArticleTop` after the cost table — the
  section readers tabulate is where reading slows (productive pause).

### 2. "Best AI transcription tools for small business (hands-on, 2026)"  ⭐ cluster anchor
- Target query: `best ai transcription software small business`
- Intent: commercial investigation → strongest advertiser competition
- ~2,200 words. Structure: test method (same 12-min real meeting audio, accents
  included) → each tool: price, accuracy %, export formats, dealbreaker →
  comparison table → recommendation ladder by use case (podcaster/interviewer/
  contractor notes).
- E-E-A-T: post the actual accuracy numbers from your test file. Nobody else's
  blog will have that for the 2026 toolset.
- Links in: 1. From: 5, 8 later. Ad note: side-by-side tables slow scroll ---
  keep `inArticleMid` *below* the table, not above.

### 3. "AI scheduling assistants compared: which is worth $10/mo?"
- Target query: `ai scheduling assistant worth it`
- ~1,500 words. Two-way test vs. a plain calendar + a VA hypothesis. Include
  the edge case (double-booking incident) — honest failure = credibility.
- Links in: 1. Ad note: standard positions fine; this is a mid-RPM workhorse.

### 4. "Automating invoices with AI: 5 workflows a non-accountant can run"
- Target query: `automated invoicing small business ai`
- ~1,600 words. Each workflow: trigger → tool → failure mode → time saved/wk.
  Include a spreadsheet snippet screenshot.
- Links into: 2 (OCR notes), 5. High-ops advertiser interest (accounting
  software). Watch claims: describe *your* results, never "this will save you
  $X".

### 5. "AI email assistants for customer support: I graded 200 real replies"
- Target query: `ai customer support small business quality test`
- ~1,900 words. Your grading rubric (accuracy/tone/hallucination) → per-tool
  score → sample reply pairs (tool vs. you). This post's original dataset is
  the citable asset that attracts organic backlinks.
- Ad note: dataset table = high dwell; `inArticleTop` right after the method
  intro.

### 6. "Free vs paid AI image tools for product photography (same shot, 8 tools)"
- Target query: `ai product photography free vs paid`
- ~1,400 words + image strip (label every image with the tool, alt text with
  the tool name — organic image-search traffic is real here).
- Links in: 2 (the photo brief came from the transcription test), 7.

### 7. "Chatbot on your website: what it actually costs (non-engineer's guide)"
- Target query: `website chatbot cost setup`
- ~1,500 words. Layers: hosted widget → framework → custom, with your 1-day
  build example + honest monthly totals where hidden costs surprised you.
- Links in: 2, 6. Ad note: "costs" query traffic = money-minded readers ---
  keep `inArticleTop` early (first section).

### 8. "AI writing assistants tested on real small-business copy (not poetry)"  ⭐ cluster anchor
- Target query: `ai writing tools actual business copy test`
- ~2,000 words. Graded outputs: product page, invoice follow-up, local ad.
  Judge on *business fitness* (accuracy, CTA quality, legal-ish claims
  safety) --- the angle competitors miss.
- Links in: 5, 2. After this one ships, the 3 clusters interlink fully.

## 4. Internal-link map (ship with each post)

```
                     [2 transcription ⭐] --- [8 writing ⭐]
                    /        |                       \
            [1 cost report]  [7 chatbot costs]      [5 support graded]
                    \        |                        /
                     [3 scheduling]          [4 invoicing] --- [6 images]
```
Rules: every new post links to ≥2 older posts from the body (not footer);
update one older post's body to link to each new post (two-way crawl path).

## 5. Publishing + indexing routine (per post, 30 min)

1. Ship post.
2. Search Console → URL Inspection → **Request Indexing** (same hour).
3. Add link from homepage (this repo's `index.html` card row).
4. `sitemap.xml` add `<url>` block, update post's `<lastmod>` if edited.
5. Push → Actions auto-deploys (~20s).
6. Week later: check impressions in GSC;低于预期? → improve `<title>`/first
   paragraph, request indexing again.

## 6. Pre-application checklist (AdSense)

- [ ] ≥6 of the 8 posts live (8 is better), each ≥1,200 words
- [ ] About page updated with your testing methodology + author line
- [ ] Privacy page: site name + contact email replaced (still has
      placeholders)
- [ ] Demo cards on `index.html` linking to unfinished outline posts removed
      (only real posts listed)
- [ ] `assets/js/ads.js`: publisherId still "" until approved ---
      correct as-is
- [ ] `ads.txt`: keep placeholder until AdSense emails the real pub-id
- [ ] GSC sitemap submitted; homepage indexed

## 7. Refresh engine (month 4+)

Every quarter: re-run the tests in the two ⭐ anchors, bump `<lastmod>`, add a
 changelog line at top ("Updated March 2027: tool X dropped to $9/mo"). This
 is the single cheapest RPM motion that exists on a static site.
