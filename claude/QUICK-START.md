# Quick Start Guide — ACT Prep System

Everything you need is in this folder. Here's how it works.

---

## First-Time Setup (New Students)

Before your first session, you need to create your personal config file:

1. **Copy the example config:**
   ```
   cp student-config.example.md student-config.md
   ```
2. **Fill in your details** — open `student-config.md` and replace the placeholders with your name, test date, baseline scores, target, and study schedule.

**Or let the agent do it for you:** Just open a new conversation and say "I'm new here" — the agent will ask you the questions and generate your `student-config.md` content automatically.

`student-config.md` is gitignored so your personal data never gets committed to GitHub.

---

## What You Have

✅ **Full tutor system** (claude.md) — generates questions, gives feedback, tracks progress
✅ **Question generation specs** (questions-reference.md) — ensures quality
✅ **Strategy guides** (grammar-rules.md, rhetoric-guide.md, etc.) — reference material
✅ **Supplemental prompts** (supplemental-prompts.md) — targeted help for weak areas
✅ **Test analysis framework** (test-analysis-framework.md) — extract max learning from tests
✅ **Error tracking** (error-log.md) — log every miss by type
✅ **Score tracking** (score-tracker.md) — monitor composite and section trends
✅ **Your config** (student-config.md) — personal data, gitignored

---

## The System in 30 Seconds

1. **Every day:** Say `Start English` / `Start Reading` / `Start Science` / `Start Math`
   - Claude generates fresh questions
   - You answer, Claude gives RULE · TRAP · LOG feedback
   - Session report auto-generates
   - You copy misses → error-log.md

2. **After misses:** Check error-log.md patterns
   - If a type appears 2+ times, use supplemental-prompts.md to drill it
   - Ask Claude: "Generate 5 similar [type] problems"

3. **After every full test:** Use test-analysis-framework.md
   - Log scores → score-tracker.md
   - Analyze by section and question type
   - Create 2-week priority plan
   - Set next week's focus

4. **Progress tracking:** Say `Show my progress` anytime
   - See where you stand vs baseline and target
   - See what's left for today

---

## Commands to Remember

**Start a session:**
- `Start English` — 45–50 min session (50 Q, 35 min pacing)
- `Start Reading` — 35–40 min session (2 passages, 9 Q each)
- `Start Science` — 20–25 min session (1 passage, ~6 min pacing)
- `Start Math` — 15–20 min session (10 hard problems, 67 sec each)

**Custom sessions:**
- `Start English session with 10 questions focused on transitions`
- `Start Math session, 5 questions, trig only`
- `Begin 5-question science blitz` (no preamble, full feedback)

**Tests:**
- `Start weekly test` (auto-detects which section is due)
- `Start full ACT` (all 4 sections, ~3 hours, full test conditions)

**Control:**
- `Show my progress` — overview anytime
- `Show error log` — see all misses today
- `Show session report` — see last session results
- `Next question` / `Skip this one` — move on
- `End session` — stop early, get report

---

## Pacing Targets (Enhanced ACT — Locked)

| Section | Per question | Full section |
|---------|-------------|-------------|
| English | 42 sec | 50 Q · 35 min |
| Math | 67 sec | 45 Q · 50 min |
| Reading | 67 sec | 36 Q · 40 min · 4 passages |
| Science | 60 sec | 40 Q · 40 min |

Report your time with every answer: `B — 31 sec`

---

## Recommended Study Schedule

| Week | Theme | Milestone |
|------|-------|-----------|
| 1 | Baseline + fundamentals | Baseline full test (Day 1) |
| 2 | Section deep dives | Bi-weekly #1 |
| 3 | Speed & accuracy | — |
| 4 | Peak prep | Bi-weekly #2 |
| 5 | Final polish | Bi-weekly #3 (dress rehearsal) |

Set your exact dates in `student-config.md`.

---

## Workflow Example — One Day

```
1. Start a session:
   "Today is [DATE]. I want to do my English session (45 min).
    So far today I've done: nothing yet."

   Claude generates 35 questions (10 warm-up + 25 drill).
   You answer each one, report your time.
   Full RULE · TRAP · LOG feedback after each.
   After 35 Q: auto-generates SESSION REPORT.

2. Update error log:
   Copy RULE VIOLATED lines from report → error-log.md

3. Check error log:
   "I see I missed pronoun agreement twice this week.
    Relevance/DELETE three times.
    Let me drill these."

4. Use supplemental prompt:
   "Generate 5 similar problems that test pronoun agreement"

5. Next section:
   "Today is [DATE]. I want to do my Reading session (35 min).
    So far today I've done: English (47 min) ✓"
```

---

## Key Principles

**1. Answer within the time budget.**
- English: 42 sec per question
- Math: 67 sec per question
- Reading: 67 sec per question
- Science: 60 sec per question

**2. First answer is final.**
- No edits after submitting
- Mimics real test conditions

**3. Every wrong answer → one follow-up**
- Must answer follow-up correctly before moving on
- Reinforces the concept immediately

**4. Log every miss**
- Type, concept, priority level
- Use error log to spot patterns

**5. Analyze tests deeply**
- Use test-analysis-framework.md after each bi-weekly test
- Identify Red Priority types
- Create 2-week action plans

---

## Files You'll Edit Regularly

1. **student-config.md** — your personal profile (gitignored, never committed)
2. **error-log.md** — copy-paste ERROR LOG UPDATE lines after each session
3. **score-tracker.md** — add scores after section/full tests
4. That's it. Claude handles the rest.

---

## The Error Log System

Every session generates misses. Format:

```
DATE | SECTION | QUESTION TYPE | RULE VIOLATED | PRIORITY
Jun 23 | English | Pronoun agreement | Singular "they" preferred | Med
Jun 23 | English | Relevance/DELETE | Off-topic sentences | High
Jun 23 | Reading | Inference/attitude | Twisted qualifiers | High
```

**Priority levels:**
- **High** = rhetoric, inference, or missed 2+ times this week
- **Med** = concept gap (didn't know the rule)
- **Low** = careless error (knew the rule, made a mistake)

---

## The Score Tracker System

After every section test or full test, log scores:

```
Test | Date | English | Math | Reading | Science | Composite
Baseline | [DATE] | [E] | [M] | [R] | [S] | [C]
Bi-weekly #1 | — | — | — | — | — | —
```

Update score-tracker.md after every practice test.

---

## When You're Stuck

**If you miss a question:**
→ Use supplemental prompt #1 (Math Error Analysis) or #2 (Similar Problem Generation)

**If a concept keeps tripping you up:**
→ Use supplemental prompt #3 (Grammar Deep Dive) or #6 (Science Strategy)

**If you're running out of time:**
→ Use supplemental prompt #5 (Time Management Strategy)

**After a full test:**
→ Use test-analysis-framework.md (complete post-test workflow)

---

## Your Target

**Baseline:** [Set in student-config.md]
**Target:** [Set in student-config.md]

The system works. Trust the process.
