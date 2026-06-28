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

## File Reference

| File | Purpose |
|------|---------|
| `claude/claude.md` | All agent logic — tutor rules, question generation, scoring |
| `claude/student-config.md` | Your personal data (gitignored) |
| `claude/student-config.example.md` | Blank template for setup |
| `claude/error-log.md` | Running miss log — update after each session (gitignored) |
| `claude/score-tracker.md` | Full practice test scores (gitignored) |
| `claude/tests/` | Official test tracking — results, scoring charts, workflow |
