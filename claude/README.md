# ACT Prep System

A Claude-powered personal ACT tutor that generates original questions, gives instant feedback, tracks your errors, and adapts to your weak areas — all from a single chat.

---

## Setup (3 steps)

### Step 1 — Create your student config

Copy the example file and fill in your details:

```
cp student-config.example.md student-config.md
```

Open `student-config.md` and fill in:
- Your name and ACT test date
- Baseline scores (or TBD if you haven't taken a practice test yet)
- Target composite score
- How much time you can study each day

`student-config.md` is gitignored — your personal data never gets committed.

**Alternatively:** Skip this step and let the agent set it up for you. Just open a new conversation and say `I'm new here` — the agent will ask you each question and generate your config file content to paste in.

### Step 2 — Add files to your Claude Project

In Claude.ai, create a new Project and upload all files from this folder. The agent reads `claude.md` automatically as its system instructions and uses `student-config.md` for your personal profile.

### Step 3 — Start

Type `Start English`, `Start Reading`, `Start Science`, or `Start Math` and go.

---

## Your Customized Plan

After setup, the agent builds your study plan around three things from `student-config.md`:

**1. Your baseline scores → section priorities**

The agent compares your section scores against your composite target and automatically weights sessions toward your weakest sections. If English is your biggest gap, it gets the most drilling time and the hardest follow-up questions when you miss.

**2. Your time to test → schedule length and test frequency**

The agent calculates how many weeks you have and spaces your bi-weekly full practice tests accordingly. With 5+ weeks, you get 3 full tests (bi-weekly #1, #2, dress rehearsal). With less time, it compresses the schedule.

**3. Your daily time budget → session targets**

Default plan (recommended):

| Section | Daily target | Why |
|---------|-------------|-----|
| English | 45–50 min | Highest return — most improvable |
| Reading | 35–40 min | Second most improvable |
| Science | 20–25 min | Mainly strategy, less drilling needed |
| Math | 15–20 min | Hard questions only — maintain, don't over-drill |

If you have less than 2 hours, the agent adjusts the ratio based on your score gaps. Say `Show my progress` at any point to see where you stand.

**To generate your personalized plan after setup:**

```
Today is [DATE]. I just set up my student config. Build me a study plan based on my scores and test date.
```

The agent will output a week-by-week schedule with section priorities, practice test dates, and daily targets calibrated to your specific gaps.

---

## How Every Session Works

Each session follows the same loop automatically — no setup needed:

1. **Claude generates a question** — difficulty adapts in real time to your performance (see Adaptive Difficulty below)
2. **You answer** — format: `B — 31 sec` (letter + seconds taken)
3. **Instant feedback every time:**
   ```
   CORRECT — You chose B. Answer: B.

   RULE: Introductory adverbial clauses require a comma before the main clause.

   TRAP: The no-comma version sounds natural because spoken English drops this
         comma constantly. That's the deliberate ACT trap.

   LOG: English | Punctuation | CORRECT | —
   Score: 4/5 (80%) · Grammar: 3/4 · Rhetoric: 1/1 · Level: Hard ↑
   Est. score this session: ~30–31  |  Running week avg: ~29
   ```
4. **Wrong answer** → one follow-up question of the same type before moving on
5. **Every 10 questions** → pacing check
6. **End of session** → full Session Report with estimated section score, difficulty reached, breakdown by type, error log lines, and projected trajectory

**3 rules enforced every session:**
- Answer within the time budget (42 sec English · 67 sec Math/Reading · 60 sec Science)
- First answer is final — no edits after submitting
- Feedback after every answer, right or wrong

### Adaptive Difficulty

Questions get harder as the student performs well and hold steady when they struggle — keeping them in the zone where learning happens fastest:

- **3 correct in a row** → step up to next difficulty level
- **2 misses on same type** → serve 2 more of that exact type before continuing (targeted fix, not a drop)
- Starts at the level matching the student's current estimated score for that section
- Never drops below Medium for a student who has been practising regularly

### Estimated Score After Every Session

The agent converts drill accuracy to an estimated ACT scaled score (1–36) after every session:

```
ESTIMATED SCORE (this session):
  Accuracy 80% → Est. English score: ~30–31  (±2 pts)
  Running week average: ~29  (based on 4 sessions this week)
```

These estimates have ±2 point confidence from drills. **Official practice tests** (in `tests/`) give more reliable scores.

---

## Commands

### Daily sessions
```
Start English
Start Reading
Start Science
Start Math
```

### Custom sessions
```
Start English session with 10 questions focused on transitions
Start Math session, 5 questions, trig only
Begin 5-question science blitz
Give me 10 Reading inference questions
```

`blitz` = no preamble, straight to Q1, still full feedback after each answer.

### Tests
```
Start weekly test              ← agent detects which section is due
Start weekly English test      ← force a specific section
Start full ACT                 ← all 4 sections, ~3 hours, no feedback until the end
```

### Progress and controls
```
Show my progress               ← scores vs baseline vs target, today's completion
Show error log                 ← all misses logged this conversation
Show session report            ← last session summary
End session                    ← stop early, get report for questions done so far
Next question                  ← skip (counts as a miss)
Explain that again             ← re-explain the last rule differently
```

---

## Schedule Structure

The agent adapts this to your actual dates. General 5-week framework:

| Phase | Days | Focus |
|-------|------|-------|
| Week 1 | Days 1–7 | **Baseline full test** → establish gaps, begin daily drills |
| Week 2 | Days 8–14 | Section deep dives · **Bi-weekly #1** at end of week |
| Week 3 | Days 15–22 | Speed and accuracy · fatigue simulation · error pattern analysis |
| Week 4 | Days 23–29 | Peak prep · **Bi-weekly #2** · target-score-level questions only |
| Week 5 | Days 30–39 | Final polish · **Bi-weekly #3 (dress rehearsal)** · confidence drill · rest |

**Key milestones:**
- **Baseline test** → tells you and the agent exactly where to focus
- **Bi-weekly #1, #2** → measures progress, updates priorities for the next block
- **Bi-weekly #3** → full dress rehearsal, ~1 week before test day
- **Day before test** → strategy lock-in, no new questions
- **Night before** → no studying, sleep early

---

## Tracking Progress

**After every session:** Copy the `ERROR LOG UPDATE` lines from the Session Report into `error-log.md`. The session report also shows an estimated section score.

**After every full test:** Update `score-tracker.md` with your section scores.

**Weekly (every Saturday):**
```
Run my weekly error review based on this error log.
```

**After bi-weekly test:**
```
I just finished the bi-weekly test on [DATE].
English: [X] · Math: [X] · Reading: [X] · Science: [X]
Compare to my baseline and tell me my top 3 priorities for the next 2 weeks.
```

---

## For Parents

Say `Parent digest` at any point to get a structured weekly summary that shows:
- Days studied and total time this week
- Estimated score per section (from drill accuracy) with trend vs. last week
- Official practice test scores (from `tests/results/`)
- Whether the student is on track to hit their target by test day
- Score projection to test day
- Top 3 weaknesses and what they mean in plain English
- What to focus on next week

Example: `Parent digest` or `How is my kid doing` or `Weekly summary`

---

## Official Practice Tests

The `tests/` folder is for tracking official ACT practice tests. These give more reliable score estimates than drills.

**To use:**
1. Print an official test (ACT.org or The Official ACT Prep Guide)
2. Take it under strict timed conditions (see `tests/README.md`)
3. Score it and save a results file in `tests/results/test-[DATE].md`
4. Paste your scores into chat: `Analyze my practice test results from [DATE]`

The agent will compare to your baseline, show your score trajectory, project where you'll land on test day, and give you a 2-week priority plan.

---

## File Reference

| File | Purpose |
|------|---------|
| `claude.md` | Agent instructions — all tutor rules, session format, question generation |
| `student-config.md` | Your personal data — gitignored, never committed |
| `student-config.example.md` | Blank template for new students |
| `error-log.md` | Your running miss log — update after every session |
| `score-tracker.md` | Full test scores — update after every practice test |
| `grammar-rules.md` | Quick reference for all English grammar rules |
| `rhetoric-guide.md` | Rhetorical skills and strategy guide |
| `passage-strategy.md` | Reading passage order and timing strategy |
| `passage-types.md` | Science passage types and approach |
| `hard-problems.md` | Math hard-problem types and strategies |
| `supplemental-prompts.md` | Targeted prompts for weak areas |
| `test-analysis-framework.md` | Full post-test analysis workflow |
| `test-day-plan.md` | Test day logistics and strategy card |
| `questions-reference.md` | Internal question generation specs |
