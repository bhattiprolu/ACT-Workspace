# ACT Prep System

AI-powered ACT tutor built for Claude Code. Generates original questions, gives instant feedback, tracks errors, and adapts difficulty to your performance — all from a single chat session.

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
