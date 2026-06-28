# Supplemental AI Prompts

These prompts complement the main tutoring system in CLAUDE.md. Use these when you need targeted help beyond the standard drills.

---

## 1. Math Error Analysis Prompt

When you miss a Math problem and want to understand *why* you failed, use this:

```
I just missed this ACT Math problem:

[PASTE FULL PROBLEM WITH ANSWER CHOICES]

My answer: [YOUR ANSWER]
Correct answer: [CORRECT ANSWER]

I thought: [WHAT CONFUSED YOU]

Help me understand:
- What concept this tests
- Why my approach was wrong (step-by-step)
- Correct solution with every step explained
- What to watch for on similar problems
- Generate 2 additional practice problems using the same concept

I want to learn from this mistake, not just memorize the answer.
```

**When to use:** After missing a Math problem during a session. Best within 24 hours.

---

## 2. Similar Problem Generation Prompt

When you've struggled with a question type and want unlimited practice of *that exact type*:

```
Generate 5 similar ACT [SECTION] problems that:
- Test the same concept I just missed: [DESCRIBE THE CONCEPT]
- Are different enough to require genuine understanding
- Include complete solutions showing why correct answers work and why each wrong answer is wrong
- Match the difficulty level I'm working at

Topic: [E.g., "pronoun-antecedent agreement" or "inference questions in Reading"]
Difficulty: [Easy / Medium / Hard]

I want to prove I understand the concept, not just this one problem.
```

**When to use:** After a session, when you want to drill a specific weakness multiple times.

---

## 3. Grammar Rule Deep Dive Prompt

When a grammar concept keeps tripping you up, dig deep:

```
I'm preparing for the ACT English section. Explain [GRAMMAR TOPIC: e.g., "comma after introductory clauses"].

For this rule:
- Explain why it works (not just "correct" but "why correct")
- List common exceptions and tricky cases
- Show how it appears on the ACT
- Provide 3 example sentences where I apply the rule
- Show complete explanations for correct and incorrect answers
- Tell me how this rule interacts with other rules

Make it practical for test conditions, not textbook grammar.
```

**When to use:** When a grammar rule confuses you after seeing it in multiple questions.

---

## 4. Reading Strategy Breakthrough Prompt

When you're struggling with a specific Reading question type:

```
I struggle with [IDENTIFY SPECIFIC ISSUE: 
  - finding main idea / 
  - answering evidence questions / 
  - inferring author intent / 
  - timing / 
  - vocabulary in context]
on ACT Reading.

Teach me:
- What to look for when reading the passage (active reading)
- How to distinguish main points from supporting details
- How to approach [SPECIFIC QUESTION TYPE] questions
- Wrong answer patterns to eliminate
- A repeatable strategy I can use every time

Then walk through a sample passage showing how to apply this strategy.
```

**When to use:** When you notice a Reading question type that consistently gives you trouble.

---

## 5. Time Management Strategy Prompt

When pacing is your primary issue:

```
I run out of time on the [SECTION NAME] of the ACT. 
My current approach is: [DESCRIBE WHAT YOU DO NOW]

Help me develop a time management strategy including:
- Target time per question type
- Question priority system (answer first, guess later)
- Warning signs I'm spending too long
- When to guess vs. keep working
- Timing checkpoints to track pace

Make this work under actual test conditions. I'm not looking for tricks — I need a system.
```

**When to use:** After seeing pace issues in multiple sessions.

---

## 6. Science Passage Strategy Prompt

For specific Science passage types that confuse you:

```
I struggle with [DATA REPRESENTATION / RESEARCH SUMMARIES / CONFLICTING VIEWPOINTS] 
passages on ACT Science.

Teach me:
- Strategy for this passage type specifically
- How to identify relevant data vs. distracting information
- Fast graph/table reading techniques [if data rep]
- Common experiment design elements [if research summary]
- How to compare viewpoints efficiently [if conflicting viewpoints]

Walk through 2 Science passages showing how to apply these strategies.
```

**When to use:** After scoring lower on one Science passage type than others.

---

## 7. Full Section Generation Prompt

When you want a fresh full-length section (40+ questions) to practice:

```
Create a complete ACT [ENGLISH / READING / SCIENCE] section with official specifications:

English: 50 questions in 35 min
Reading: 4 passages, 36 questions in 40 min
Science: 40 questions in 40 min

Requirements:
- Match real ACT difficulty and format exactly
- Include the locked question distribution
- Provide complete answer explanations for every option
- Answer key at end

Make this feel like a real practice test.
```

**When to use:** Before a weekly section test, to warm up with fresh material.

---

## 8. Strategic Guessing Prompt

When you want to improve your guessing consistency:

```
I lose points by guessing carelessly on the ACT. 
Sometimes I guess right. Sometimes wrong. I don't feel strategic.

Teach me:
- When guessing is the right call (vs. leaving blank)
- Most common wrong answer patterns to recognize
- Process for eliminating wrong answers before guessing
- My consistent approach for when I genuinely don't know
- Expected value calculation for the ACT system

Include specific techniques for [SECTION] where I struggle most with timing.
```

**When to use:** When you're unsure about guessing strategy.

---

## 9. Concept Review Prompt

Before tackling hard problems, build the foundation:

```
I need to review [TOPIC] for the ACT [SECTION].
I struggle with [SPECIFIC SKILL].
My current level is [BEGINNER / INTERMEDIATE].

For each concept, provide:
- Clear explanation (2-3 paragraphs)
- Why this appears on the test
- Common student mistakes
- Memory shortcut or faster method
- One worked example with step-by-step reasoning

Then create 3 practice problems of increasing difficulty with complete solutions.
```

**When to use:** Before drilling a new topic or concept area.

---

## 10. Score Analysis & Priority Prompt

After a full practice test, use this to identify what to focus on:

```
I just took a full-length ACT practice test. Section scores:
English: [SCORE]
Math: [SCORE]
Reading: [SCORE]
Science: [SCORE]

My target: [from student-config.md] composite.
Weeks until test: [NUMBER]

Analyze:
- Which sections are closest to target
- Which need most improvement
- Score improvement needed per section
- Where to focus study time (effort vs. return)
- Specific skills and question types to target based on my error patterns

Create a prioritized study plan for the next [WEEKS] weeks.
```

**When to use:** After each bi-weekly full practice test (dates from student-config.md).

---

## How to Use These Prompts

1. **Copy-paste exactly** — fill in [BRACKETED SECTIONS] with your specifics
2. **Use within 24 hours of mistakes** — fresh context prevents reinforcing wrong patterns
3. **Combine with timed practice** — these prompts help you understand; practice tests measure progress
4. **Gradually reduce reliance** — start with detailed help, move to "just stuck on this one" questions

---

## Integration with Main System

- These prompts work **alongside** the daily sessions in CLAUDE.md
- Use them when the error log shows a pattern (2+ misses of the same type)
- Report what you learn back to Claude after using these prompts
- Log any new insights in `error-log.md`

**Example:**
```
Today is Jun 23. I used the Similar Problem Generation prompt for "pronoun-antecedent agreement."
Generated 5 problems, got all 5 correct. Feels much clearer now.
Add to error-log: Jun 23 | English | Pronoun agreement | Singular "they" preferred — STRONG
```

---

## Pro Tips

- **Math errors:** Use prompt #1 within 24 hours — retention is 3x better
- **Reading timing:** Use prompt #5 after 2+ sessions where you're over pace
- **Science confusion:** Use prompt #6 for whichever passage type scored lowest
- **Before tests:** Use prompt #7 to warm up with fresh questions
- **After tests:** Use prompt #10 to create your next 2-week focus plan
