# Question Generation Reference

This file guides Claude's question generation. All questions must be original, ACT-format, and match these exact specs.

---

## ENGLISH Question Specs

### Grammar Topics (Pool of 15+)

1. **Introductory comma** — "Although she studied, she felt nervous" vs "Although she studied she felt nervous"
2. **Comma splice** — "She improved, she felt confident" vs "She improved; she felt confident"
3. **Semicolon usage** — Join independent clauses only; not before dependent clauses
4. **Pronoun-antecedent agreement** — "Everyone should bring **their** ID" (Enhanced ACT: singular they accepted)
5. **Subject-verb agreement** — "The group **is** ready" not "are"; "Neither X nor Y **was** ready"
6. **Pronoun case** — "Between him and me" not "him and I"; "Who did she call?" not "Whom did she call?" — actually "Whom" is correct object; test both
7. **Dangling modifier** — Modifier must describe subject of main clause
8. **Misplaced modifier** — Keep modifiers next to what they modify
9. **Verb tense consistency** — Maintain tense unless logical time shift
10. **Parallelism** — Items in lists must match grammatical form
11. **Apostrophe usage** — Possession: student's, students'; contractions: it's, who's, they're
12. **Sentence fragment** — Missing subject or verb
13. **Run-on sentence** — Two independent clauses without proper junction
14. **Its vs It's** — Possessive vs contraction
15. **Affect vs Effect** — Verb vs noun (usually)

### Rhetoric Topics (Pool of 10+)

1. **Transition — Addition** — "Furthermore," "In addition," "Moreover"
2. **Transition — Contrast** — "However," "On the other hand," "Although"
3. **Transition — Conclusion** — "Therefore," "Thus," "As a result"
4. **Transition — Example** — "For example," "For instance," "Such as"
5. **Transition trap** — Sophisticated-sounding but reverses logic (e.g., "however" when sentences agree)
6. **Organization — Sentence placement** — Where should this sentence logically go?
7. **Organization — Paragraph order** — Should intro be moved after examples?
8. **Redundancy** — "Future plans" (plan = future), "Past history" (history = past), "End result"
9. **Concision** — "Made the decision to" → "Decided"; "In spite of the fact that" → "Although"
10. **Style/tone mismatch** — Informal phrase in formal essay, or vice versa
11. **Relevance/DELETE** — Is this sentence on-topic or a digression?
12. **Strategy** — Does this addition accomplish the stated goal?

### Trap Archetypes

- **Sounds natural** — Common in spoken English but grammatically wrong
- **Sophisticated trap** — Answer sounds more formal/impressive but is incorrect or redundant
- **Scope mismatch** — Detail is correct but scope is wrong (too narrow/broad)
- **False parallel** — Looks parallel but isn't (e.g., mixing "-ing" and infinitive)
- **Emphasis shift** — True statement but emphasizes wrong aspect

---

## READING Question Specs

### Passage Types (Choose 1 per 80–90 line passage)

1. **Literary Narrative** — Fiction or memoir (tone, character motivation, narrator perspective)
2. **Social Science** — History, anthropology, sociology (author's argument, evidence structure)
3. **Humanities** — Art, music, culture, philosophy (author's interpretation, perspective)
4. **Natural Science** — Biology, chemistry, physics (technical detail, data interpretation)

### Question Distribution (Locked, 9 per passage)

| Type | Count | Key generation rule |
|------|-------|-------------------|
| Detail w/ line ref | 2–3 | Provide 3 lines; embed 1–2 details; wrong answers from other sections |
| Detail w/o line ref | 1–2 | Reader recalls from reading; answer is clear in passage |
| Inference | 2–3 | Evidence in passage; answer requires logical step; trap: too extreme or outside knowledge |
| Main idea/purpose | 1 | Central claim; wrong answers too narrow/broad/distort tone |
| Vocab in context | 1 | Uncommon word; correct answer ≠ dictionary definition |
| Function/author purpose | 1 | Why did author include this? Not what does it say? |
| POV/narrator (Lit only) | 1 | Identify narrator's tone or perspective shift |
| Character/motivation (Lit only) | 1 | Why did character act? What's their attitude? |

### Inference Trap Archetypes

- **Too extreme** — "Always," "never," "completely," "proves" → eliminate
- **Outside knowledge** — True in real world but not in passage
- **Twisted qualifier** — "Complete dismissal" vs "qualified sympathy"; passage tone is nuanced
- **Right detail, wrong scope** — Correct detail but conclusion is too broad
- **Opposite** — Flips author's actual position
- **Almost right** — Matches 90% but misses key modifier

### Vocabulary in Context Trap Archetypes

- **Most common definition** — Word has multiple meanings; most common definition usually wrong
- **Wrong context** — Correct definition for a different context
- **Homophone/similar word** — Confuses related words

---

## READING Passage Generation

### Passage Length (Hard Rule)
- Minimum 80 lines, Maximum 90 lines (verified before every delivery)
- No shorter passages ever

### Passage Structure
1. **Opening** — Hook or context-setting (2–3 sentences)
2. **Body** — Main argument or narrative arc (8–10 paragraphs)
3. **Details for questions** — Embed specific details that will be asked about; obscure slightly so reader can't answer from memory
4. **Conclusion** — Resolution or summary (1–2 sentences)

### Generate with Traps
- Detail w/ line ref: make the correct line clear; embed similar details in other lines
- Inference: provide evidence but require 1 logical step
- Vocab in context: use word in way that differs from common definition

---

## SCIENCE Question Specs

### Passage Types

1. **Data Representation (30–40% of Science)**
   - 2–4 figures (graphs, charts, tables)
   - 5–6 questions
   - No outside knowledge; answer from figure + minimal text

2. **Research Summary (45–55% of Science)**
   - 2–4 experiments described
   - Results shown in figures
   - 6 questions on design, variables, conclusions

3. **Conflicting Viewpoints (15–20% of Science)**
   - 2–3 scientists with competing explanations
   - 7 questions on positions, comparisons, predictions
   - Read ALL viewpoints before answering

### Science Traps

- **Wrong figure** — Question refers to Figure 2 but wrong answer uses Figure 1 data
- **Extrapolation** — Answer requires going beyond data range shown
- **Confusing variables** — Swaps independent/dependent or confused what was controlled
- **Outside knowledge** — Real science fact, not stated in passage
- **Extreme conclusion** — "Proves" instead of "suggests"; "always" instead of "typically"
- **Wrong scientist** — Attributes Scientist 1 claim to Scientist 2

### Figure Quality (Data Rep & Research)

- Clear title (what is being measured?)
- Labeled axes with units
- Legend if multiple data sets
- Realistic trends (no random spikes unless intentional)
- Scale makes sense (y-axis range reasonable for data)

---

## MATH Question Specs

### Problem Difficulty Calibration

**Problems 1–15 (Essential Skills)**
- Basic algebra, geometry, arithmetic
- Time target: 45 sec
- Example topics: solving linear equations, area/perimeter, basic functions

**Problems 16–30 (Foundational)**
- Intermediate algebra, coordinate geometry, basic trigonometry
- Time target: 50 sec
- Example topics: systems of equations, distance formula, basic trig ratios

**Problems 31–45 (Advanced)**
- Advanced trig, logarithms, vectors, conic sections
- Time target: 65 sec
- Example topics: law of sines, exponential equations, matrix operations

**Problems 46–60 (Hard)**
- Combined concepts, optimization, advanced statistics, 3D geometry
- Time target: 75–90 sec
- Example topics: trig identities + geometry, related rates, complex numbers

### Math Traps

- **Wrong variable** — Solves for x when question asks for 2x
- **Sign error** — Distributing negative, or forgetting to flip inequality
- **Careless arithmetic** — Correct method, wrong calculation
- **Units trap** — Mixing inches and feet, or degrees and radians
- **Formula step missed** — Half-correct method
- **"Could be" vs "must be"** — Finding one valid answer when question asks what's always true
- **Misread question** — "Which is NOT..." — missing the NOT

### Word Problem Generation Rules

1. State clearly what is being asked (common student weakness: solving for wrong variable)
2. Provide necessary information; no extraneous details
3. One of the 4 choices is correct; three are trap variations
4. Trap variations: wrong variable solved for, careless arithmetic, common misconception

---

## Pacing Targets (Enhanced ACT — corrected)

| Section | Per-Q target | Context |
|---------|-------------|---------|
| English | 42 sec | 50 Q in 35 min |
| Math | 67 sec | 45 Q in 50 min |
| Reading | 67 sec | 36 Q in 40 min · 9 Q per passage |
| Science | 60 sec | 40 Q in 40 min |

When generating questions, ensure the reading time + solving time fits within the budget.

---

## Topic Weighting (Based on Student's Error Log)

After checking error-log.md, weight generation toward:

**High frequency misses (Red Priority):**
- English: Relevance/DELETE, inference/attitude in Reading
- Reading: Twisted qualifiers, inference traps

**Recent misses (Week 3):**
- English: Organization, Concision, Pronoun agreement
- Reading: Inference/attitude

When generating, use this weighting: 50% recent types, 30% red priorities, 20% other coverage.

---

## Question Quality Checklist

Before presenting any question, it must pass:

- [ ] Correct answer is unambiguous
- [ ] All 4 answer choices are plausible (trap is real, not obviously wrong)
- [ ] Question matches the pacing target (reading time + solving time)
- [ ] Question type matches the distribution (e.g., 2–3 detail w/ line ref per Reading passage)
- [ ] Trap is explicit and can be named clearly in feedback
- [ ] Rule or concept is taught in the guide files
- [ ] Full context provided (sentence, paragraph, passage, or figure)
- [ ] No outside knowledge required (especially Science)
- [ ] Difficulty matches question position (Q1 easier, Q50+ harder)

---

## Format for Generated Questions

**English:**
```
[Question number]/[Total]

[Full sentence or 2–3 sentences with underlined portion]

A) [Choice 1]
B) [Correct choice]
C) [Choice 3]
D) [Choice 4]
```

**Reading:**
```
[Passage intro: type, length, topic]

[80–90 lines of passage]

Q1 of 9: [Question with specific reference if needed]
A) [Choice 1]
B) [Correct choice]
C) [Choice 3]
D) [Choice 4]
```

**Science:**
```
[Passage type: Data Rep / Research / Conflicting Viewpoints]

[Passage text with figures embedded where relevant]

Q1 of [5–7]: [Question]
A) [Choice 1]
B) [Correct choice]
C) [Choice 3]
D) [Choice 4]
```

**Math:**
```
Problem [number]:

[Full problem statement]

A) [Choice 1]
B) [Choice 2]
C) [Correct choice]
D) [Choice 4]

⏱ 67 sec
```
