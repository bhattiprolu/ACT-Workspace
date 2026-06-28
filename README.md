# ACT Prep System

AI-powered ACT tutor built for Claude Code. Generates original questions, gives instant feedback, tracks errors, and adapts difficulty to your performance — all from a single chat session.

---

## Why use this instead of a prep book or tutoring app?

**It adapts to you in real time.** Most prep resources give everyone the same questions in the same order. This agent tracks every miss, identifies your patterns, and steers questions toward your specific weak spots. If you keep missing punctuation questions, you get more punctuation questions — not another passage on a topic you already know.

**You always know your score trajectory.** After every session you see an estimated score for that section, your weekly average, and a projection to test day — not just a raw count of right/wrong. Official practice tests feed into the same tracker so drill estimates and real test scores stay in one picture.

**Feedback explains the *why*, not just the answer.** Every answer — right or wrong — shows the rule, the deliberate ACT trap, and why the other choices fail. You learn the pattern, not just that answer choice B was correct this time.

**Pacing is enforced, not optional.** You log your time with every answer (`B — 31 sec`). The agent calls out pacing drift before it becomes a test-day problem — the ACT is as much a speed test as a knowledge test.

**Parents can check in without interrupting.** Type `Parent digest` to get a plain-English weekly summary — estimated scores with trend arrows, on-track verdict, top weaknesses, and next week's focus — without having to sit through a session.

**It works for any student, any timeline.** First-time setup takes 2 minutes. The agent builds a week-by-week plan from your baseline scores, target, and days until the test. Everything personal stays in a gitignored file on your machine.

---

## Quick Start

### 1. Clone

```bash
git clone https://github.com/bhattiprolu/ACT-Workspace.git
cd ACT-Workspace/claude
```

### 2. Set up your student profile

```bash
cp student-config.example.md student-config.md
```

Open `student-config.md` and fill in your name, test date, baseline scores, target, and daily time. This file is gitignored — your personal data never leaves your machine.

**Don't have baseline scores yet?** Skip this step. Type `I'm new here` on first run and the agent walks you through setup interactively.

### 3. Open in Claude Code

From inside the `claude/` directory:

```bash
claude
```

Claude Code reads `claude.md` as its system instructions automatically. On Linux, rename `claude.md` → `CLAUDE.md` first (macOS handles case-insensitivity automatically).

### 4. Start a session

```
Start English
Start Reading
Start Science
Start Math
```

---

## How It Works

Answer one question at a time. Format: `B — 31 sec` (letter + seconds).

After every answer you get:
- The rule that applies, the deliberate ACT trap, and why your answer was right or wrong
- Running score estimate: `Est. score: ~30–31  |  Week avg: ~29`
- Error logged automatically by section and question type

Every session ends with an estimated section score, difficulty level reached, breakdown by question type, and error log lines to copy into `error-log.md`.

**Adaptive difficulty** — Questions step up after 3 correct in a row. Two misses on the same type triggers a targeted mini-drill before moving on. Never drops below Medium once you're in regular practice.

**Score estimates** — Drill accuracy maps to an estimated ACT score (±2 pts) after each session. Official practice tests give more reliable numbers — track those in `claude/tests/`.

---

## Commands

| Command | What it does |
|---------|-------------|
| `Start English / Reading / Science / Math` | Daily drill session |
| `Start full ACT` | All 4 sections (~3 hrs), scores at the end |
| `Start [section] blitz` | No preamble, straight to Q1 |
| `Show my progress` | Scores vs. baseline vs. target |
| `Parent digest` | Weekly summary — scores, trend, on-track verdict |
| `End session` | Stop early and get the session report |
| `Show error log` | All misses logged this conversation |
| `Explain that again` | Re-explain the last rule differently |

---

## For Parents

Type `Parent digest` at any time for a plain-English summary:
- Days studied and total time this week
- Estimated score per section with trend vs. last week
- Official practice test scores (from `claude/tests/results/`)
- On-track verdict and projected composite by test day
- Top 3 weaknesses and what to focus on next week

---

## Official Practice Tests

Print from ACT.org or The Official ACT Prep Guide. Take under strict timed conditions. Save scores to `claude/tests/results/test-[DATE].md`, then paste into chat:

```
Analyze my practice test results from [DATE].
English: X · Math: X · Reading: X · Science: X
```

See [`claude/tests/README.md`](claude/tests/README.md) for section timing, scoring charts, and the full logging template.

---

## Sample Session

Here's what a live English drill looks like — question, student answer, and the feedback that follows.

**The agent asks:**

> Which of the following corrects the underlined portion of the sentence?
>
> *After climbing for three hours, **the summit came into view.***
>
> A) the summit came into view
> B) the view of the summit became clear
> C) the climbers finally saw the summit
> D) the summit was finally visible

**Student:** `A — 45 sec`

**Agent responds:**

```
WRONG — You chose A. Answer: C.

RULE: A participial phrase ("After climbing for three hours") must modify the
subject of the main clause. In choice A, the subject is "the summit" — summits
don't climb. The phrase needs to modify the climbers, so the main clause must
start with them.

TRAP: Choice A sounds natural spoken aloud, which is exactly why the ACT uses
it. Your ear doesn't flag it because conversational English is looser than
written English. ACT English tests written correctness, not spoken comfort.

LOG: English | Modifier Placement | MISS | Priority: High
Score: 2/4 (50%) · English · Grammar: 0/2 · Rhetoric: 2/2 · Level: Medium →
Est. score this session: ~26–27 (low confidence)  |  Running week avg: ~29
```

Since the answer was wrong, the agent immediately serves one follow-up question of the same type (dangling modifier) before continuing to Q5.

---

## Reports

### Session Report

Auto-generated at the end of every session — no command needed.

```
═══════════════════════════════════════════
SESSION REPORT — ENGLISH · Jun 28
═══════════════════════════════════════════

SCORE: 18/25 (72%)
Duration: 38 min / 45 min target
Difficulty reached: Hard

ESTIMATED SCORE (this session):
  Accuracy 72% → Est. English score: ~28–29
  Running week average: ~30  (based on 3 sessions this week)

BREAKDOWN BY TYPE:
  Punctuation:        8/10  (80%)  — Strong
  Modifier Placement: 2/5   (40%)  — Needs work  ← target next session
  Transitions:        5/6   (83%)  — Strong
  Verb Agreement:     3/4   (75%)  — OK

TRAPS HIT: 14 of 25 questions had a trap — fell for 7
  Most common trap: "sounds correct when read aloud" (dangling modifiers)

MISSES THIS SESSION:
  Q4  | Modifier Placement | Dangling participial phrase   | Priority: High
  Q9  | Modifier Placement | Misplaced "only"              | Priority: High
  Q13 | Verb Agreement     | Collective noun, singular     | Priority: Med

ERROR LOG UPDATE:  ← copy these lines into error-log.md
  Jun 28 | English | Modifier Placement | Dangling participial phrase | High
  Jun 28 | English | Modifier Placement | Misplaced "only"            | High
  Jun 28 | English | Verb Agreement     | Collective noun, singular   | Med

DAILY PROGRESS:
  English: 38 min ✓
  Reading: not yet
  Science: not yet
  Math:    not yet

FOCUS FOR NEXT ENGLISH SESSION:
  Priority drill: Modifier Placement (2/5 — biggest gap today)
  Skip: Transitions (5/6 — already strong, no need to over-drill)

═══════════════════════════════════════════
```

### Parent Digest

Type `Parent digest` at any time for a plain-English summary of the week.

```
══════════════════════════════════════════════════
WEEKLY PARENT DIGEST — Week of Jun 23
Alex · Target: 34 composite · Test: Oct 25, 2026
══════════════════════════════════════════════════

STUDY ACTIVITY THIS WEEK
  Days studied:    5 / 7
  Total time:      4 hr 20 min
  Sessions done:   English ×3 · Reading ×2 · Science ×2 · Math ×2
  Missed days:     Mon, Fri  ← no multi-day streak, OK

ESTIMATED SCORES  (from drill accuracy this week)
  English:   ~30   ↑ +2 vs last week
  Math:      ~32   →  flat
  Reading:   ~29   ↑ +1 vs last week
  Science:   ~28   ↓ -1 vs last week
  ──────────────────────────────────────────────
  Composite est.:  ~30   (English + Math + Reading average)
  Confidence: Medium — 2–3 sessions per section this week

OFFICIAL TEST SCORES
  Bi-weekly #1 · Jun 14 → E:28 · M:31 · R:27 · S:29 · Composite: 29

ON TRACK FOR TARGET?
  Target:    34 composite by Oct 25
  Current:   ~30 composite (drill estimate)
  Gap:       4 points · 17 weeks to test
  Trajectory: ON TRACK — needs +0.24 pts/week at current pace
  Projected score on test day: ~32–34

STRENGTHS THIS WEEK
  Best section:     Math — 82% accuracy, est. 32
  Most improved:    English — up 3% from last week
  Highest difficulty reached: Hard (English)

AREAS NEEDING ATTENTION
  #1: English — Modifier Placement · 42% accuracy · 7 misses
      → What it means: Sentences where a describing phrase attaches to the wrong
         word. Easy to fix — 15-min focused drill will close this gap.
  #2: Reading — Inference questions · 55% accuracy · 5 misses
      → What it means: Questions asking what the author implies vs. states.
         Needs to slow down and return to the passage before answering.
  #3: Science — Data Interpretation · 60% accuracy
      → What it means: Reading graphs and tables accurately under time pressure.

RECOMMENDED FOCUS NEXT WEEK
  1. Add one extra English session targeting modifier placement
  2. Reading: 20 seconds back in the passage before answering inference questions
  Next practice test: Bi-weekly #2 due — schedule for this weekend

══════════════════════════════════════════════════
```

---

## File Reference

| File | Purpose |
|------|---------|
| `claude/claude.md` | All agent logic — tutor rules, question generation, scoring |
| `claude/student-config.md` | Your personal data (gitignored) |
| `claude/student-config.example.md` | Blank template for setup |
| `claude/error-log.md` | Running miss log — update after each session (gitignored) |
| `claude/score-tracker.md` | Full practice test scores (gitignored) |
| `claude/tests/` | Official test tracking — results, scoring charts, workflow |
