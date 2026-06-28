# Practice Tests

This folder is for tracking official ACT practice test results. Use official tests (from ACT.org or your prep materials) for the most accurate score estimates — they're more reliable than drill estimates.

---

## How to Run an Official Practice Test

1. **Print the test** — the ACT is paper-based. Practicing on screen inflates scores.
2. **Simulate real conditions:**
   - Clear desk, no phone
   - Strict section timing (see below)
   - 10-minute break after Math, nothing else
3. **Score each section** using the answer key, then use the scoring chart to convert raw scores to scaled scores (1–36).
4. **Log the results** in `results/` using the template below.
5. **Post-test analysis:** Paste your scores into the chat and say `Analyze my practice test results from [DATE]`.

---

## Official ACT Section Timing

| Section | Questions | Time |
|---------|-----------|------|
| English | 75 | 45 min |
| Math | 60 | 60 min |
| — 10-min break — | | |
| Reading | 40 | 35 min |
| Science | 40 | 35 min |
| (Writing — optional) | 1 essay | 40 min |

**Composite** = average of English + Math + Reading scaled scores (rounded to nearest whole number). Science is a separate STEM score.

---

## Where to Get Official Practice Tests

- **ACT.org** — publishes free official practice tests each year
- **The Official ACT Prep Guide** — includes 5–8 full tests
- Your school counselor or library may have printed copies

---

## Logging Results

After each official test, create a file in `results/` named `test-[DATE].md` (e.g., `test-2026-06-14.md`) using this template:

```markdown
# Practice Test — [DATE]
Type: [Baseline / Bi-weekly #1 / Bi-weekly #2 / Bi-weekly #3 / Unofficial]
Source: [e.g., "Official ACT Prep Guide 2025|2026, Test 1"]

## Raw Scores
| Section | Raw (/total) | Scaled (1–36) |
|---------|-------------|--------------|
| English | /75 | |
| Math | /60 | |
| Reading | /40 | |
| Science | /40 | |
| **Composite** | — | |

## Time Performance
| Section | Finished with time? | Questions left blank |
|---------|--------------------|--------------------|
| English | Yes / No — [X min over] | |
| Math | Yes / No | |
| Reading | Yes / No | |
| Science | Yes / No | |

## Miss Log (paste ERROR LOG UPDATE lines from post-test analysis)
| Section | Question type | Rule violated | Priority |
|---------|--------------|--------------|---------|
| | | | |

## Notes
[Any observations — fatigue in Reading? Rushed Math? Skipped Science passage 3?]
```

---

## Scoring Charts

Use the scoring chart included with your official test. ACT scaling varies slightly by test form. As a rough guide:

**English (75 Q):**
75=36 · 70=34 · 65=32 · 60=30 · 55=28 · 50=26 · 44=24 · 37=22 · 29=20

**Math (60 Q):**
60=36 · 56=34 · 52=32 · 48=30 · 43=28 · 38=26 · 33=24 · 28=22 · 22=20

**Reading (40 Q):**
40=36 · 38=34 · 35=32 · 32=30 · 29=28 · 26=26 · 23=24 · 20=22 · 17=20

**Science (40 Q):**
40=36 · 38=34 · 35=32 · 32=30 · 29=28 · 26=26 · 23=24 · 20=22 · 17=20

Always prefer the official chart when available — these are approximations.

---

## Post-Test Commands

After logging a test, use these in chat:

```
Analyze my practice test results from [DATE].
English: [X] · Math: [X] · Reading: [X] · Science: [X]
Compare to my baseline and give me a priority plan for the next 2 weeks.
```

```
Parent digest — include my [DATE] practice test results.
```
