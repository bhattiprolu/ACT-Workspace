# Practice Test Analysis Framework

Use this after every full ACT practice test (bi-weekly dates from student-config.md) to extract maximum learning.

---

## Post-Test Analysis Workflow

After completing a full practice test, follow these steps:

### Step 1: Immediate Logging (Same day)

```
Test date: [DATE]
Test number: Bi-weekly #[1/2/3]
Total time available: [time]
Total time used: [time]
Finish status: [all sections complete / ran out of time on X]

SCORES:
  English: [X]/50
  Math: [X]/45
  Reading: [X]/36
  Science: [X]/40
  Composite: [X]

Pacing by section:
  English: [time used] / 35 min → [on pace / X min over]
  Math: [time used] / 50 min → [on pace / X min over]
  Reading: [time used] / 40 min → [on pace / X min over]
  Science: [time used] / 40 min → [on pace / X min over]
```

**Action:** Copy this into CLAUDE.md session and log in score-tracker.md immediately.

---

### Step 2: Question-by-Question Error Log (Day of test)

For every question you missed, log:

```
Q[NUMBER] | [SECTION] | [QUESTION TYPE] | [CONCEPT]
Correct: [ANSWER] | You answered: [YOUR ANSWER]
Reason for miss: [Concept gap / Careless error / Timing trap / Misread / Guess]
```

**Action:** Compile all misses and give to Claude for error-log.md entry.

---

### Step 3: Section Breakdown Analysis (24–48 hours after test)

For each section, identify:

**English (50 Q, 35 min)**
```
Grammar misses: [X/50] of which careless [Y], concept gaps [Z]
  Top missed types: [List top 2–3]
  
Rhetoric misses: [X/50] of which careless [Y], concept gaps [Z]
  Top missed types: [List top 2–3]

Grammar trending: [improving / flat / declining] vs last test
Rhetoric trending: [improving / flat / declining] vs last test

Time issue? [No / Mild over-pace / Severe over-pace]
```

**Math (45 Q, 50 min)**
```
Problems 1–15 (Easy): [X]/15 → avg [Y sec/Q]
Problems 16–30 (Medium): [X]/15 → avg [Y sec/Q]
Problems 31–45 (Hard): [X]/15 → avg [Y sec/Q]

Concept gaps: [List which topics: trig, logs, geometry, etc.]
Careless errors: [List common mistakes: sign errors, wrong variable, etc.]

Did you skip any? [None / List problem numbers]
Time pressure? [No / Mild / Severe]
```

**Reading (36 Q, 40 min)**
```
Passage 1 type: [Literary / Social Science / Humanities / Natural Science]
  Score: [X]/9 → [on pace / Y min over]
  Missed types: [inference / detail / main idea / etc.]

Passage 2 type: [Literary / Social Science / Humanities / Natural Science]
  Score: [X]/9 → [on pace / Y min over]
  Missed types: [inference / detail / main idea / etc.]

Passage 3 type: [Literary / Social Science / Humanities / Natural Science]
  Score: [X]/9 → [on pace / Y min over]
  Missed types: [inference / detail / main idea / etc.]

Passage 4 type: [Literary / Social Science / Humanities / Natural Science]
  Score: [X]/9 → [on pace / Y min over]
  Missed types: [inference / detail / main idea / etc.]

Strongest passage type: [which type scored highest]
Weakest passage type: [which type scored lowest]
Pacing pattern: [slow on Passage X, fast on Passage Y]
```

**Science (40 Q, 40 min)**
```
Data Representation: [X]/? → time per passage [Y min]
Research Summary: [X]/? → time per passage [Y min]
Conflicting Viewpoints: [X]/? → time per passage [Y min]

Most common error pattern: [misreading graphs / outside knowledge / wrong scientist / etc.]
Time constraint: [No / Mild / Severe]
```

---

### Step 4: Trend Analysis vs Previous Tests

Compare to baseline and prior bi-weekly tests:

```
COMPOSITE TREND:
  Baseline ([DATE]): [score from student-config.md]
  Bi-weekly #1 ([DATE]): [X or "not yet"]
  Bi-weekly #2 ([DATE]): [X or "not yet"]
  Bi-weekly #3 ([DATE]): [X or "not yet"]
  
  Trajectory: [improving / flat / dropped]
  Gap to 36: [still X points away]

SECTION TRENDS:
  English: [+X from baseline] → [on track / needs push]
  Math: [+X from baseline] → [on track / needs push]
  Reading: [+X from baseline] → [on track / needs push]
  Science: [+X from baseline] → [on track / needs push]
```

---

### Step 5: Priority Setting (48 hours after test)

Rank your weak areas by effort ROI:

```
RED PRIORITY (highest ROI for next 2 weeks):
#1: [Section/Type] — currently [X% accuracy], achievable jump to [Y%] with targeted drill
#2: [Section/Type] — currently [X% accuracy], achievable jump to [Y%] with targeted drill
#3: [Section/Type] — currently [X% accuracy], achievable jump to [Y%] with targeted drill

YELLOW PRIORITY (secondary focus):
  [Section/Type] — maintain; don't over-drill

GREEN PRIORITY (maintenance only):
  [Section/Type] — already strong; only practice if time allows
```

**Action:** Use this ranking to set your daily drill focus for the next 2 weeks.

---

## Specific Analysis by Section

### English Deep Dive

After every English section, ask:

```
"Which is my bigger problem:
  A) Grammar/conventions (punctuation, S-V agreement, pronouns, modifiers)?
  B) Rhetoric/strategy (transitions, organization, concision, relevance)?

Analyze your accuracy:
Grammar accuracy: [X]/[Y] ([Z]%)
Rhetoric accuracy: [X]/[Y] ([Z]%)

Which one is lower?
  → Focus next session on that category.
"
```

If both are equal: pick whichever is lower in raw number of misses.

---

### Reading Deep Dive

After every Reading section, ask:

```
"Which passage type gave me the most trouble?

Accuracy by passage type (if applicable):
Literary: [X]% | Social Science: [X]% | Humanities: [X]% | Natural Science: [X]%

Accuracy by question type:
Inference: [X]% | Detail: [X]% | Main idea: [X]% | Vocab: [X]%

Does one passage type consistently score lower?
  → Drill that type in next Reading session.

Does one question type consistently score lower?
  → Drill that type across all passages.
"
```

---

### Science Deep Dive

After every Science section, ask:

```
"Did passage type or question type cause the misses?

Accuracy by passage type:
Data Rep: [X]% | Research Summary: [X]% | Conflicting Viewpoints: [X]%

Most common error pattern:
  Misread the graph / axes?
  Confused variables?
  Extrapolated beyond data?
  Used outside knowledge?
  Misattributed claims to wrong scientist?

Next session focus:
  → Drill whichever passage type scored lowest.
  → Practice identifying your specific error pattern.
"
```

---

### Math Deep Dive

After every Math section, ask:

```
"Where's the pain point?

By difficulty tier:
Problems 1–15: [X]% → suggests [careless errors / pacing pressure]
Problems 16–30: [X]% → suggests [concept gap / careless errors]
Problems 31–45: [X]% → suggests [concept gap / did you skip?]

By concept (from error log):
Trig: [X]% | Logs: [X]% | Geometry: [X]% | Algebra: [X]%

Next session focus:
  → Drill lowest-scoring difficulty tier for concept review.
  → Drill lowest-scoring concept type for practice problems.
  → Check: did time pressure cause the misses? [Likely if upper tiers all missed]
"
```

---

## Score Improvement Projections

After each test, calculate what's realistic:

```
Current composite: [X]
Target: 36

Improvement needed: [36 – X]

Score improvement breakdown by section:
  If English +2, Math +2, Reading +1, Science +0 → Composite [X+5 = your result]

Most achievable improvements (ranked):
  #1: [Section] — 1–2 points realistic in next 2 weeks
  #2: [Section] — 1 point realistic in next 2 weeks
  #3: [Section] — 0–1 point realistic in next 2 weeks

Questions to ask yourself:
  → "Which section has the most 'easy points' I'm leaving on the table?"
  → "Which section am I closest to target?"
  → "Which section will respond best to targeted drilling?"
```

**Use this to guide your daily focus.**

---

## Red Flags After a Test

If any of these show up, escalate attention:

🚩 **Score dropped from previous test** → Analyze why (bad day? new error pattern?)

🚩 **Consistent over-pacing on one section** → Time management drill needed

🚩 **Same question type missed 3+ times** → Concept review + drill needed

🚩 **Composite not trending toward 36** → May need to shift strategy

🚩 **Large gap between Easy and Hard tiers on Math** → Conceptual gaps, not careless errors

---

## 2-Week Action Plan Template

Based on your analysis, create this plan:

```
Weeks of [DATE] to [DATE] (until next test on [DATE])

Red Priority Focus: [Section/Type]
  Daily: 20 min on [specific concept/question type]
  Weekly test: [Section that includes this type]

Yellow Priority: [Section/Type]
  Daily: 10 min
  Include as 3–4 questions in each session

Green Priority: [Section/Type]
  Maintenance only: 5 min if time allows

Expected outcome: [specific score improvements targeted]
  "By [DATE], I expect:
    English: [current] → [target]
    Math: [current] → [target]
    Reading: [current] → [target]
    Science: [current] → [target]
  "
```

---

## Documentation

After completing all steps, paste your analysis into:
1. `score-tracker.md` — composite and section scores
2. `error-log.md` — all misses by question type
3. Session report (Claude generates) — trends and focus plan
4. Keep your "2-Week Action Plan" and refer to it daily
