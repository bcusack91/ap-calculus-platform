#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for ACT English Rhetorical Skills.
Output directory: src/data/interactive-lessons/
File pattern:    act-act-english-rhetorical-act-part{1..7}.ts
"""

import os, re, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "act-english-rhetorical-act"


def _fix_ts_apostrophes(body: str) -> str:
    """Escape apostrophes inside single-quoted TypeScript strings.

    Scans character-by-character to correctly track backtick template
    literals (where apostrophes are fine) vs. single-quoted strings
    (where mid-word apostrophes must be escaped).

    A quote character is a mid-string apostrophe IFF it appears between
    two word characters (e.g. paragraph's, doesn't, Curie's).
    """
    chars = list(body)
    result: list[str] = []
    i = 0
    n = len(chars)
    in_backtick = False

    while i < n:
        ch = chars[i]

        # Toggle backtick template literal mode
        if ch == '`' and (i == 0 or chars[i - 1] != '\\'):
            in_backtick = not in_backtick
            result.append(ch)
            i += 1
            continue

        # Inside a template literal — pass through unchanged
        if in_backtick:
            result.append(ch)
            i += 1
            continue

        # Start of a single-quoted string
        if ch == "'":
            # Collect the entire single-quoted string
            buf = ["'"]
            i += 1
            while i < n and chars[i] != '\n':
                c = chars[i]
                if c == '\\' and i + 1 < n:
                    # Already-escaped character — keep as-is
                    buf.append(c)
                    buf.append(chars[i + 1])
                    i += 2
                    continue
                if c == "'":
                    # Mid-string apostrophe: word char before AND after
                    prev_char = chars[i - 1] if i > 0 else ''
                    next_char = chars[i + 1] if i + 1 < n else ''
                    if prev_char.isalpha() and next_char.isalpha():
                        # This is a contraction/possessive — escape it
                        buf.append("\\'")
                        i += 1
                        continue
                    else:
                        # This is the closing quote
                        buf.append("'")
                        i += 1
                        break
                buf.append(c)
                i += 1
            result.extend(buf)
            continue

        result.append(ch)
        i += 1

    return ''.join(result)


def write(n: int, body: str):
    body = _fix_ts_apostrophes(body)
    path = os.path.join(OUT_DIR, f"act-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Strategy Questions ──────────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const actRhetoricalPart1Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-rh1-intro',
      type: 'text' as const,
      content: `
# 🎯 Strategy Questions

**Part 1 of 7 — Adding, Deleting & Revising Sentences; Purpose of a Phrase**

Strategy questions ask you to think about **why** a writer makes certain choices rather than just fixing grammar. They typically come in three flavours:

| Question Type | What It Asks |
|---------------|-------------|
| **Add / Delete** | Should this sentence be added or deleted from the passage? |
| **Purpose of a phrase** | Why did the author include this specific detail? |
| **Revision for effect** | Which revision best accomplishes a stated goal? |

These make up roughly **12–15 questions** on every ACT English test — about one-fifth of the section!

**Golden Rule:** Always consider the **main idea** of the paragraph. Any addition must *support* that main idea; any deletion should be justified by whether the sentence is *relevant* to the paragraph's focus.
      `
    },
    {
      id: 'act-rh1-adding',
      type: 'text' as const,
      content: `
## Adding & Deleting Sentences

**When to ADD a sentence:**
- It provides a specific detail that **supports** the paragraph's main idea.
- It creates a **smooth transition** between existing ideas.
- It gives an **example or evidence** that strengthens the argument.

**When to DELETE a sentence:**
- It is **off-topic** — it doesn't relate to the paragraph's focus.
- It **repeats** information already stated.
- It **contradicts** the tone or purpose of the passage.

**Worked Example:**

*Paragraph about the benefits of urban gardens:*
> "Urban gardens provide fresh produce to communities that lack grocery stores. They also create green spaces that reduce heat in cities. [1] The first urban garden in the U.S. was established in Detroit in 1893."

Should sentence [1] be kept or deleted?

**Answer: Deleted.** While the historical fact is interesting, it doesn't support the paragraph's focus on the *benefits* of urban gardens. It shifts attention to history rather than maintaining the argument about advantages.

**ACT Strategy:** When the question says "the writer is considering adding," always check whether the new sentence *matches the paragraph's purpose*. A true-but-irrelevant fact is still a wrong addition.
      `
    },
    {
      id: 'act-rh1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Adding & Deleting Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A paragraph discusses how recycling reduces landfill waste. The writer wants to add: "Recycling aluminium cans saves 95% of the energy needed to make new ones." Should this sentence be added?',
            options: [
              'Yes — it provides a specific, relevant benefit of recycling.',
              'Yes — it introduces an interesting historical detail.',
              'No — it shifts the focus away from landfill reduction.',
              'No — it repeats information already in the paragraph.'
            ],
            correctAnswer: 0,
            explanation: 'The sentence supports the paragraph's focus on recycling's benefits with a concrete statistic. Even though it highlights energy savings rather than landfill reduction, it still reinforces the overall pro-recycling argument.'
          },
          {
            question: 'A passage about Marie Curie's scientific achievements includes: "Pierre Curie enjoyed cycling in his spare time." A question asks whether this sentence should be kept. What is the best reasoning for deleting it?',
            options: [
              'It contradicts the passage's claims about Marie Curie.',
              'It is irrelevant to the paragraph's focus on scientific achievements.',
              'It repeats information stated earlier in the passage.',
              'It uses an informal tone inconsistent with the passage.'
            ],
            correctAnswer: 1,
            explanation: 'Pierre's hobby is off-topic. The paragraph focuses on Marie Curie's scientific work, so a detail about Pierre's leisure activities doesn't belong, regardless of whether it is true.'
          }
        ]
      }
    },
    {
      id: 'act-rh1-purpose',
      type: 'text' as const,
      content: `
## Purpose of a Phrase or Detail

These questions ask: *"The writer includes this detail primarily to …"*

**Common purposes on the ACT:**
- **Illustrate** a general claim with a specific example.
- **Provide evidence** for an argument.
- **Establish** the setting, tone, or mood.
- **Transition** between ideas or paragraphs.
- **Qualify** or **limit** a broad statement.

**Example:**

*"Although solar energy is often praised as endlessly renewable, the manufacturing of solar panels requires significant amounts of rare-earth minerals."*

The underlined clause primarily serves to:
- ✅ **Qualify** the preceding claim about solar energy.
- ❌ Contradict the author's thesis. (It doesn't say solar is bad — just adds nuance.)
- ❌ Provide historical context. (No history is mentioned.)

**Tip:** Eliminate answers that are too extreme. The ACT rarely picks "completely undermines" or "proves beyond doubt."
      `
    },
    {
      id: 'act-rh1-input1',
      type: 'input-boxes' as const,
      content: `
**Strategy Vocabulary** 📝

Fill in the missing key term for each description.

1) A sentence that is off-topic and should be removed is called __________ (one word: "irrelevant" or "redundant"? Pick the one that means "not related").
2) When a phrase limits or softens a broad claim, it __________ the claim (one word, starts with "q").
3) A sentence that restates something already said is called __________ (one word, starts with "r").
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['irrelevant', 'qualifies', 'redundant'],
        hint1: 'Off-topic means not related to the paragraph — not "saying it again."',
        hint2: 'Think of adding nuance or conditions: "q_______s" the claim.',
        hint3: 'Repeating the same idea = r________.',
        explanation: '"Irrelevant" means unrelated to the topic. "Qualifies" means to limit or add conditions to a statement. "Redundant" means unnecessarily repetitive.'
      }
    },
    {
      id: 'act-rh1-revision',
      type: 'text' as const,
      content: `
## Revision for Effect

Some questions give you a **goal** and ask which revision best achieves it:

*"Which choice most effectively emphasises the narrator's surprise?"*

**Steps:**
1. **Identify the goal** stated in the question stem.
2. **Eliminate** choices that don't address the goal at all.
3. Among remaining choices, pick the one that is most **specific and vivid**.

**Example:**

Goal: *Emphasise the size of the crowd.*

- (A) "People attended the concert." — Too vague.
- (B) "Many people came." — Slightly better but still generic.
- (C) "Over ten thousand fans packed the stadium, filling every seat." — ✅ Specific and vivid.
- (D) "The concert was a success." — Doesn't mention size at all.

**ACT Trap:** An answer can be well-written and grammatically perfect but still wrong if it doesn't achieve the specific stated goal.
      `
    },
    {
      id: 'act-rh1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Match the Strategy** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A sentence that supports the main idea with a specific statistic should be …',
            options: ['added — it strengthens the argument', 'deleted — it is off-topic', 'deleted — it is redundant', 'revised for tone']
          },
          {
            label: 'A true but unrelated historical fact in a paragraph about modern benefits should be …',
            options: ['added — historical context helps', 'deleted — it is irrelevant to the focus', 'kept — facts are always useful', 'moved to the introduction']
          },
          {
            label: 'When a question asks for the "primary purpose" of a phrase, you should focus on …',
            options: ['whether it is grammatically correct', 'how it relates to the paragraph's main idea', 'whether it uses formal language', 'the length of the phrase']
          }
        ],
        correctAnswers: ['added — it strengthens the argument', 'deleted — it is irrelevant to the focus', 'how it relates to the paragraph's main idea'],
        hint1: 'A specific statistic that supports the main point is valuable evidence.',
        hint2: 'Relevance to the paragraph's focus is what matters, not whether the fact is true.',
        hint3: 'Purpose questions are about function — what role the phrase plays in the argument.',
        explanation: 'Add sentences that provide supporting evidence, remove true-but-irrelevant details, and evaluate purpose by asking how a phrase serves the paragraph's main idea.'
      }
    }
  ]
};
"""))


# ── Part 2: Organization ────────────────────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const actRhetoricalPart2Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-rh2-intro',
      type: 'text' as const,
      content: `
# 🗂️ Organization

**Part 2 of 7 — Logical Order, Transitions, and Topic Sentences**

Organization questions test whether you can tell if sentences and paragraphs are arranged **logically**. You'll see questions like:

- *"For the sake of logic and coherence, Sentence 3 should be placed …"*
- *"Which of the following sentences would best introduce this paragraph?"*
- *"Which sequence of sentences makes this paragraph most logical?"*

**Three Key Principles:**

| Principle | What to Look For |
|-----------|-----------------|
| **Chronological order** | Time words: first, then, later, finally |
| **Cause → Effect** | Because, as a result, consequently |
| **General → Specific** | Topic sentence first, then supporting details |

Approximately **4–6 questions per test** focus on organization and paragraph structure.
      `
    },
    {
      id: 'act-rh2-logical',
      type: 'text' as const,
      content: `
## Logical Sentence Order

When the ACT asks you to move a sentence, follow these steps:

**Step 1:** Read the sentence carefully. Does it introduce a new idea, give a detail, or conclude?

**Step 2:** Look for **transition clues** — words like "this," "that," "these results," "however," or "for example" that point to a preceding idea.

**Step 3:** Find where the sentence fits so that **every pronoun and transition has a clear reference**.

**Worked Example:**

> [1] The museum opened in 1995 and quickly became a local landmark.
> [2] For example, the dinosaur exhibit alone attracted over 50,000 visitors in its first year.
> [3] It was founded by a group of retired teachers who wanted to make science accessible.
> [4] The museum's popularity grew steadily over the following decade.

**Best order:** 3 → 1 → 4 → 2

- Sentence 3 introduces the founding (earliest event).
- Sentence 1 mentions the opening (next chronologically).
- Sentence 4 describes growth over time.
- Sentence 2 gives a specific example of that popularity ("For example" needs something to refer to).
      `
    },
    {
      id: 'act-rh2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Sentence Placement** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"These findings suggest that sleep deprivation significantly impacts memory." Where should this sentence most logically be placed?',
            options: [
              'Before any study details are mentioned',
              'After a paragraph describing a sleep study's results',
              'At the very beginning of the essay as a hook',
              'In a paragraph about exercise and health'
            ],
            correctAnswer: 1,
            explanation: '"These findings" is a demonstrative reference — it must follow a description of the study and its data. Placing it before the study details would leave "these findings" without a referent.'
          },
          {
            question: 'A paragraph begins: "The city council voted to expand the park." Which sentence best follows this opening?',
            options: [
              'Parks are found in many cities around the world.',
              'The expansion would add three acres of walking trails and a new playground.',
              'In 1920, the first public park in America was established.',
              'Swimming pools require regular maintenance and cleaning.'
            ],
            correctAnswer: 1,
            explanation: 'The best follow-up provides specific details about the expansion mentioned in the topic sentence. The other options are either too broad, historically tangential, or completely off-topic.'
          }
        ]
      }
    },
    {
      id: 'act-rh2-topic',
      type: 'text' as const,
      content: `
## Topic Sentences & Paragraph Introductions

A **topic sentence** introduces the main idea of a paragraph. On the ACT, you may be asked to choose the best opening sentence.

**A strong topic sentence:**
- States the paragraph's main point clearly.
- Connects to the previous paragraph (if it's not the first).
- Is neither too broad nor too narrow.

**Example:**

Paragraph discusses how bees pollinate wildflowers, crops, and fruit trees.

Which is the best topic sentence?
- (A) "Bees are insects." — Too broad.
- (B) "Pollination is essential for agriculture." — Doesn't mention bees.
- (C) "Bees play a vital role in pollinating a wide variety of plants." — ✅ Perfect.
- (D) "Honey production is a multi-billion-dollar industry." — Wrong focus.

**Transition Tip for Topic Sentences:** If the previous paragraph discussed threats to bee populations, the topic sentence might begin with "Despite these challenges, bees continue to play a vital role …" to create a bridge.
      `
    },
    {
      id: 'act-rh2-input1',
      type: 'input-boxes' as const,
      content: `
**Organization Concepts** 📝

Fill in the correct term for each description.

1) A sentence that states the main idea of a paragraph is called a __________ sentence (two words).
2) Arranging events by when they happened is called __________ order (one word).
3) "These results," "this approach," and "such methods" are examples of __________ references (one word, starts with "d").
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['topic', 'chronological', 'demonstrative'],
        hint1: 'It "announces" what the paragraph will be about — a ______ sentence.',
        hint2: 'From the Greek word for time: chrono-.',
        hint3: 'Words like "this," "that," "these" are called d_________ pronouns or references.',
        explanation: 'A topic sentence introduces the paragraph's main idea. Chronological order arranges events by time. Demonstrative references (this, that, these, those) point back to previously mentioned ideas.'
      }
    },
    {
      id: 'act-rh2-transitions',
      type: 'text' as const,
      content: `
## Paragraph-Level Transitions

The ACT tests whether the **first sentence of a new paragraph** smoothly connects to the previous paragraph.

**Common transition functions:**

| Function | Example Openers |
|----------|----------------|
| Continuation | "In addition," "Furthermore," "Similarly," |
| Contrast | "However," "On the other hand," "Despite this," |
| Cause/Effect | "As a result," "Consequently," "Therefore," |
| Example | "For instance," "To illustrate," |
| Time shift | "Later that year," "By the 1990s," |

**Red Flag:** If a new paragraph starts with "Also" but the previous paragraph made an opposing point, the transition is wrong — you likely need "However" or "Nevertheless."

**ACT Tip:** Read the **last sentence of the previous paragraph** and the **first sentence of the current one** back-to-back. The connection should feel natural and logical.
      `
    },
    {
      id: 'act-rh2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Organization Strategies** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A sentence with "For example" should be placed …',
            options: ['before the general claim it illustrates', 'after the general claim it illustrates', 'at the beginning of the essay', 'in a different paragraph from the claim']
          },
          {
            label: 'If a paragraph discusses a problem and the next discusses a solution, the best transition word is …',
            options: ['Similarly', 'However', 'Furthermore', 'To address this issue']
          },
          {
            label: '"First … then … finally" signal which type of organization?',
            options: ['Cause and effect', 'Compare and contrast', 'Chronological / sequential', 'Spatial']
          }
        ],
        correctAnswers: ['after the general claim it illustrates', 'To address this issue', 'Chronological / sequential'],
        hint1: 'Examples support claims — they follow them, not precede them.',
        hint2: 'Moving from problem to solution is neither contrast nor addition — it is addressing the issue.',
        hint3: '"First, then, finally" = time/sequence order.',
        explanation: '"For example" introduces supporting evidence after a claim. Problem-to-solution transitions use phrases like "To address this issue." Sequential signal words like "first, then, finally" indicate chronological organization.'
      }
    }
  ]
};
"""))


# ── Part 3: Style & Tone ────────────────────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const actRhetoricalPart3Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-rh3-intro',
      type: 'text' as const,
      content: `
# 🎨 Style & Tone

**Part 3 of 7 — Word Choice, Conciseness, Redundancy & Register**

Style and tone questions ask you to pick the answer that best fits **how** the passage communicates — not just *what* it says. The ACT rewards answers that are:

- **Concise** — no unnecessary words.
- **Consistent in tone** — formal passages stay formal; informal ones stay casual.
- **Precise** — the right word for the context.

**Key Concepts:**

| Concept | Definition |
|---------|-----------|
| **Redundancy** | Saying the same thing twice: "advance forward," "free gift" |
| **Wordiness** | Using more words than necessary: "due to the fact that" → "because" |
| **Register** | Level of formality: academic, conversational, slang |
| **Connotation** | The emotional weight of a word: "thrifty" (positive) vs. "cheap" (negative) |

**ACT Rule of Thumb:** When in doubt, choose the **shortest answer** that preserves the full meaning. The ACT almost always favours conciseness.
      `
    },
    {
      id: 'act-rh3-redundancy',
      type: 'text' as const,
      content: `
## Redundancy — Eliminating Repetition

A **redundant** phrase repeats an idea that is already conveyed:

| Redundant | Why It's Redundant | Fix |
|-----------|-------------------|-----|
| *past history* | History is always in the past | *history* |
| *completely unanimous* | Unanimous already means complete agreement | *unanimous* |
| *each and every* | Each and every mean the same thing | *each* or *every* |
| *basic fundamentals* | Fundamentals are basics | *fundamentals* |
| *revert back* | Revert means to go back | *revert* |

**ACT-Style Example:**

*"The biography tells the story of her life."*

**Problem:** A biography *is* the story of someone's life. Fix: *"The biography covers her achievements and struggles."* Or simply: *"Her biography is fascinating."*

**Watch for "hidden" redundancy:** Sometimes the repeated idea appears in a different sentence. If Sentence 2 says "The building was old," and Sentence 3 says "Having been constructed many decades ago," Sentence 3 is redundant.
      `
    },
    {
      id: 'act-rh3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Conciseness & Redundancy** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which revision eliminates redundancy? Original: "She returned back to the office after lunch."',
            options: [
              '"She returned back to her office after eating lunch."',
              '"She returned to the office after lunch."',
              '"She went and returned back to the office after lunch."',
              '"She returned back to the place where she worked after lunch."'
            ],
            correctAnswer: 1,
            explanation: '"Returned back" is redundant because "returned" already means "went back." Simply "returned to the office" conveys the full meaning concisely.'
          },
          {
            question: 'Which is the most concise way to say "due to the fact that it was raining"?',
            options: [
              '"because of the fact that it was raining"',
              '"owing to the fact that rain was falling"',
              '"because it was raining"',
              '"in light of the rainy conditions that were occurring"'
            ],
            correctAnswer: 2,
            explanation: '"Because it was raining" says the same thing in four words instead of eight. "Due to the fact that" is a classic wordy construction that should almost always be replaced with "because."'
          }
        ]
      }
    },
    {
      id: 'act-rh3-tone',
      type: 'text' as const,
      content: `
## Tone & Register

The ACT tests whether you can maintain **consistent tone** throughout a passage. Most ACT passages use a **moderately formal, academic** tone.

**Formal vs. Informal:**
- ✅ *"The experiment yielded significant results."* (formal)
- ❌ *"The experiment was totally awesome."* (too casual for an academic passage)

**Matching Connotation:**
- *"The politician was stubborn"* — negative connotation
- *"The politician was determined"* — positive connotation
- *"The politician was resolute"* — formal and positive

Choose the word whose connotation matches the passage's attitude toward the subject.

**ACT Trap:** An answer might be grammatically correct and concise, but if it uses slang or overly casual language in a formal passage, it's wrong.

**Quick Test:** Read the sentence with your chosen answer *aloud in your head.* Does it sound like it belongs with the rest of the passage? If it jars, pick a different option.
      `
    },
    {
      id: 'act-rh3-input1',
      type: 'input-boxes' as const,
      content: `
**Fix the Wordiness** 📝

Replace each wordy phrase with a single concise word.

1) "at this point in time" → __________ (one word)
2) "in the event that" → __________ (one word)
3) "has the ability to" → __________ (one word)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['now', 'if', 'can'],
        hint1: '"At this point in time" just means right now.',
        hint2: '"In the event that" introduces a condition — one little word replaces all four.',
        hint3: '"Has the ability to" is a wordy way of saying someone _____ do something.',
        explanation: '"Now" replaces "at this point in time." "If" replaces "in the event that." "Can" replaces "has the ability to." The ACT consistently rewards the most concise phrasing.'
      }
    },
    {
      id: 'act-rh3-precision',
      type: 'text' as const,
      content: `
## Word Choice & Precision

Sometimes the ACT asks you to choose the **most precise** word, not just the shortest:

**Example:** *"The scientist _____ the results."*
- (A) *looked at* — vague
- (B) *analysed* — ✅ precise and appropriate
- (C) *checked out* — too informal
- (D) *observed* — doesn't imply the depth of study

**Precision Checklist:**
- Does the word capture the **exact** action described?
- Is it at the right **formality level**?
- Does it avoid **unnecessary vagueness**? ("things," "stuff," "nice" are usually too vague)

**Common ACT Precision Swaps:**

| Vague | Precise |
|-------|---------|
| *got* | *received, obtained, earned* |
| *things* | *factors, elements, characteristics* |
| *good* | *effective, beneficial, exemplary* |
| *a lot* | *numerous, substantial, considerable* |
      `
    },
    {
      id: 'act-rh3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Style & Tone Decisions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Totally destroyed" in a formal history passage should be revised to …',
            options: ['devastated', 'totally wrecked', 'messed up', 'got rid of']
          },
          {
            label: '"Free gift" is an example of …',
            options: ['a wordy phrase', 'a redundancy', 'an informal register', 'a connotation error']
          },
          {
            label: 'When two ACT answer choices are equally correct grammatically, you should pick the one that is …',
            options: ['longest and most detailed', 'shortest and most concise', 'most informal', 'most complex']
          }
        ],
        correctAnswers: ['devastated', 'a redundancy', 'shortest and most concise'],
        hint1: 'A formal synonym for "totally destroyed" that means the same thing in one word.',
        hint2: 'All gifts are free — the word "free" adds no new information.',
        hint3: 'The ACT rewards brevity when meaning is preserved.',
        explanation: '"Devastated" is formal and precise. "Free gift" is redundant because gifts are inherently free. The ACT favours conciseness — the shortest correct answer is usually best.'
      }
    }
  ]
};
"""))


# ── Part 4: Transitions & Connectors ────────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const actRhetoricalPart4Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-rh4-intro',
      type: 'text' as const,
      content: `
# 🔗 Transitions & Connectors

**Part 4 of 7 — However, Moreover, Therefore — Picking the Right One**

Transition questions are among the **most common** rhetorical skills questions on the ACT. You'll see 3–5 per test asking you to choose the word or phrase that best connects two ideas.

**The Big Three Categories:**

| Relationship | Transitions |
|-------------|------------|
| **Contrast** | however, nevertheless, on the other hand, although, yet, still, conversely |
| **Addition / Continuation** | moreover, furthermore, in addition, also, similarly, likewise |
| **Cause / Effect** | therefore, consequently, as a result, thus, hence, accordingly |

**The Method:**
1. Read the sentence **before** the transition.
2. Read the sentence **after** the transition.
3. Determine the **logical relationship**: Are the ideas agreeing? Disagreeing? Is one causing the other?
4. Pick the transition that matches that relationship.
      `
    },
    {
      id: 'act-rh4-contrast',
      type: 'text' as const,
      content: `
## Contrast Transitions

Use contrast transitions when the second idea **opposes, limits, or surprises** given the first.

**Signal:** If you can insert "but" and it makes sense, you need a contrast transition.

**Examples:**

✅ *"The experiment was expected to fail. **However,** the results exceeded all predictions."*
- Idea 1: Expected failure. Idea 2: Surprising success. → Contrast ✓

❌ *"The experiment was expected to fail. **Moreover,** the results exceeded all predictions."*
- "Moreover" means "in addition" — it doesn't fit because the ideas oppose each other.

**Key Contrast Words:**
- **However** — most common and versatile contrast transition on the ACT.
- **Nevertheless / Nonetheless** — stronger: "despite what was just said."
- **Conversely** — signals an opposite or reverse.
- **On the other hand** — introduces the opposing viewpoint.
- **Although / Even though** — used at the start of a dependent clause, not between two sentences.

**ACT Trap:** "Although" and "however" both signal contrast, but they are **not interchangeable**. "Although" starts a dependent clause; "however" connects two independent sentences. The ACT tests this distinction.
      `
    },
    {
      id: 'act-rh4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Choose the Right Transition** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"The city invested millions in renewable energy. __________, carbon emissions dropped by 30% over the next five years." Which transition fits?',
            options: ['However', 'As a result', 'On the other hand', 'Similarly'],
            correctAnswer: 1,
            explanation: 'The relationship is cause → effect: the investment led to the drop in emissions. "As a result" correctly signals this causal connection.'
          },
          {
            question: '"The novel received harsh reviews from critics. __________, it became a bestseller among general readers." Which transition fits?',
            options: ['Furthermore', 'Therefore', 'Nevertheless', 'In addition'],
            correctAnswer: 2,
            explanation: 'Harsh reviews (negative) vs. bestseller status (positive) — these ideas contrast. "Nevertheless" means "in spite of that," which perfectly captures the surprising turn.'
          }
        ]
      }
    },
    {
      id: 'act-rh4-addition',
      type: 'text' as const,
      content: `
## Addition & Cause-Effect Transitions

**Addition transitions** connect ideas that build on each other:

*"The park offers hiking trails. **Furthermore,** it has a nature centre with educational programs."*
- Both sentences describe park amenities → addition ✓

**Cause-effect transitions** show that one event leads to another:

*"The bridge was structurally unsound. **Consequently,** the city council voted to close it."*
- The structural problem *caused* the closure → cause-effect ✓

**Subtle Distinction — "Similarly" vs. "Furthermore":**
- **Similarly** = the second idea is *parallel or analogous* to the first.
  - *"Birds migrate south in winter. **Similarly,** monarch butterflies travel to Mexico."*
- **Furthermore** = the second idea is an *additional point*, not necessarily parallel.
  - *"The programme improves reading skills. **Furthermore,** it has been shown to reduce absenteeism."*

**ACT Tip:** When two transition words seem to fit, re-read both sentences and ask: "Are these ideas **parallel** (similarly) or just **additional** (furthermore)?"
      `
    },
    {
      id: 'act-rh4-input1',
      type: 'input-boxes' as const,
      content: `
**Transition Categories** 📝

Classify each transition word by writing "contrast," "addition," or "cause-effect."

1) "Nevertheless" → __________
2) "Moreover" → __________
3) "Consequently" → __________
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['contrast', 'addition', 'cause-effect'],
        hint1: '"Nevertheless" means "in spite of that" — it introduces an opposing idea.',
        hint2: '"Moreover" means "in addition to what was just said."',
        hint3: '"Consequently" means "as a result of what was just said."',
        explanation: '"Nevertheless" signals contrast (despite X, Y). "Moreover" signals addition (X and also Y). "Consequently" signals cause-effect (X caused Y).'
      }
    },
    {
      id: 'act-rh4-traps',
      type: 'text' as const,
      content: `
## Common ACT Transition Traps

**Trap 1 — "And" vs. "But" in disguise:**
Many transition questions boil down to whether the ideas agree or disagree. If they agree → addition word. If they disagree → contrast word. It's that simple.

**Trap 2 — "Therefore" after unrelated ideas:**
*"The cafeteria serves pizza on Fridays. Therefore, the library is open until 9 PM."*
There's no causal link here — "therefore" is wrong.

**Trap 3 — Redundant transitions:**
*"Although the weather was bad, however, they still went hiking."*
You can't use BOTH "although" and "however" — they each signal contrast on their own. Pick one.

**Trap 4 — "For example" when there's no general claim to illustrate:**
"For example" must follow a statement that it exemplifies. If there's no general claim before it, "for example" doesn't belong.

**Quick Decision Flowchart:**
- Ideas agree? → **moreover, furthermore, also, in addition**
- Ideas disagree? → **however, nevertheless, on the other hand**
- One idea causes the other? → **therefore, consequently, as a result**
- Second idea illustrates the first? → **for example, for instance**
      `
    },
    {
      id: 'act-rh4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Transition Logic** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"She studied all night. __________, she aced the exam." — The relationship is:',
            options: ['Contrast', 'Cause and effect', 'Addition', 'Example']
          },
          {
            label: '"He loves classical music. __________, he enjoys jazz." — Best transition:',
            options: ['However', 'Similarly', 'Therefore', 'Nevertheless']
          },
          {
            label: 'Using "although" and "however" in the same sentence is an example of:',
            options: ['Correct emphasis', 'A redundant transition', 'Cause-effect signalling', 'Formal register']
          }
        ],
        correctAnswers: ['Cause and effect', 'Similarly', 'A redundant transition'],
        hint1: 'Studying caused the good performance — what kind of relationship is that?',
        hint2: 'Both classical music and jazz are genres he enjoys — the ideas are parallel.',
        hint3: 'Both "although" and "however" signal contrast, so using both is repetitive.',
        explanation: 'Studying → acing the exam is cause-and-effect. Enjoying two similar genres is a parallel relationship (similarly). "Although" and "however" both signal contrast, so using both creates a redundant transition.'
      }
    }
  ]
};
"""))


# ── Part 5: Sentence Combining & Revision ────────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const actRhetoricalPart5Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-rh5-intro',
      type: 'text' as const,
      content: `
# ✂️ Sentence Combining & Revision

**Part 5 of 7 — Combining Short Sentences, Eliminating Wordiness & Improving Flow**

The ACT frequently asks you to **combine short, choppy sentences** into a single, smoothly flowing sentence. It also tests your ability to **eliminate wordiness** without losing meaning.

**Why This Matters:**
- Short, repetitive sentences make writing sound immature.
- Wordy sentences obscure the point and waste the reader's time.
- The ACT rewards clear, fluent writing that communicates efficiently.

**Two Core Skills:**

| Skill | What You Do |
|-------|-------------|
| **Combining** | Merge two or more short sentences into one clear sentence |
| **Trimming** | Remove unnecessary words while keeping the full meaning |

**Combining Methods:**
1. **Subordination** — Make one idea a dependent clause: *"Although the trail was steep, hikers enjoyed the view."*
2. **Coordination** — Join equal ideas with a conjunction: *"The trail was steep, but hikers enjoyed the view."*
3. **Appositive phrases** — Rename a noun inline: *"Dr. Lee, a marine biologist, studies coral reefs."*
4. **Participial phrases** — Use -ing or -ed phrases: *"Running along the shore, she spotted a seal."*
      `
    },
    {
      id: 'act-rh5-combining',
      type: 'text' as const,
      content: `
## Combining Choppy Sentences

**Original (choppy):**
> "The painting is famous. It was created by Monet. It depicts water lilies."

**Combined options:**
- ✅ *"The famous painting by Monet depicts water lilies."* (appositives + trimming)
- ✅ *"Created by Monet, the famous painting depicts water lilies."* (participial phrase)
- ❌ *"The painting is famous and it was created by Monet and it depicts water lilies."* (run-on with repeated "and")

**ACT Approach:**
1. Identify the **main idea** — usually the most important action.
2. Turn the supporting facts into **modifiers**.
3. Check that the combined sentence is **grammatically correct** (no dangling modifiers, no comma splices).

**Another Example:**

**Original:** *"Ada Lovelace was a mathematician. She lived in the 19th century. She is considered the first computer programmer."*

**Best combination:** *"Ada Lovelace, a 19th-century mathematician, is considered the first computer programmer."*

This turns "mathematician" and "19th century" into an appositive phrase, keeping the most important claim ("first computer programmer") as the main clause.
      `
    },
    {
      id: 'act-rh5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Sentence Combining** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which best combines: "The volcano erupted in 1980. It destroyed 230 square miles of forest. It was Mount St. Helens."',
            options: [
              'The volcano erupted in 1980 and it destroyed 230 square miles of forest and it was Mount St. Helens.',
              'Mount St. Helens erupted in 1980, destroying 230 square miles of forest.',
              'In 1980, a volcano that was Mount St. Helens erupted and then 230 square miles of forest was destroyed.',
              'The volcano, Mount St. Helens, it erupted in 1980 and destroyed 230 square miles.'
            ],
            correctAnswer: 1,
            explanation: 'Option B uses a participial phrase ("destroying 230 square miles") and puts the name up front, creating a concise sentence. Option A chains "and" awkwardly. C and D are grammatically clunky.'
          },
          {
            question: 'Which revision best eliminates wordiness? "It is important to note that the experiment demonstrated the fact that the hypothesis was correct."',
            options: [
              'It should be noted that the experiment showed the hypothesis was correct.',
              'The experiment demonstrated the fact that the hypothesis was correct.',
              'The experiment confirmed the hypothesis.',
              'It is important to note the experiment confirmed the hypothesis was correct.'
            ],
            correctAnswer: 2,
            explanation: '"The experiment confirmed the hypothesis" conveys the full meaning in five words. The original uses 18 words with padding phrases like "it is important to note that" and "the fact that."'
          }
        ]
      }
    },
    {
      id: 'act-rh5-wordiness',
      type: 'text' as const,
      content: `
## Eliminating Wordiness

**Common Wordy Constructions & Fixes:**

| Wordy | Concise |
|-------|---------|
| *the reason why is that* | *because* |
| *in order to* | *to* |
| *at the present time* | *now* or *currently* |
| *it is necessary that we* | *we must* |
| *despite the fact that* | *although* |
| *in a situation in which* | *when* |
| *make a decision* | *decide* |
| *come to the conclusion* | *conclude* |

**The ACT "Delete" Option:**

Sometimes the most concise answer is **"DELETE the underlined portion."** This happens when:
- The underlined words are entirely redundant.
- Removing them leaves a grammatically complete and meaningful sentence.

**Example:** *"She was very unique in her own way."*
Best fix: *"She was unique."* — "Very" can't modify "unique" (it's absolute), and "in her own way" is implied.

**ACT Tip:** Don't be afraid of the DELETE option. It's correct roughly **15–20%** of the time when it appears.
      `
    },
    {
      id: 'act-rh5-input1',
      type: 'input-boxes' as const,
      content: `
**Trim the Fat** 📝

Replace each wordy phrase with a single word (or two-word phrase).

1) "in order to achieve" → __________ (one word: "to" + a verb, or just "to")
2) "made the decision to" → __________ (past tense, one word)
3) "despite the fact that" → __________ (one word)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['to achieve', 'decided', 'although'],
        hint1: '"In order to" always simplifies — remove "in order."',
        hint2: '"Made the decision to" = simply performing the decision in one word.',
        hint3: '"Despite the fact that" is a four-word version of a common conjunction.',
        explanation: '"In order to achieve" → "to achieve." "Made the decision to" → "decided." "Despite the fact that" → "although." Each revision cuts words while preserving meaning.'
      }
    },
    {
      id: 'act-rh5-flow',
      type: 'text' as const,
      content: `
## Improving Sentence Flow

Beyond combining and trimming, the ACT tests whether you can **vary sentence structure** for readability.

**Monotonous pattern (all same structure):**
> "The team practiced every day. The team improved their skills. The team won the championship."

**Improved (varied structure):**
> "After practising every day and steadily improving their skills, the team won the championship."

**Techniques for Better Flow:**
- **Vary sentence length:** Mix short punchy sentences with longer, complex ones.
- **Begin sentences differently:** Don't start every sentence with "The" or the same subject.
- **Use parallel structure** when listing actions: *"She planned, rehearsed, and performed."*

**ACT Tip:** If you're torn between two grammatically correct answers, choose the one that **reads more smoothly** when you consider the surrounding sentences.
      `
    },
    {
      id: 'act-rh5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Combining & Revision Strategies** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An appositive phrase is used to …',
            options: ['show contrast between ideas', 'rename or describe a noun inline', 'connect two independent clauses', 'introduce a cause-effect relationship']
          },
          {
            label: 'When two choppy sentences share the same subject, the best approach is usually to …',
            options: ['keep them separate for clarity', 'combine them with a compound predicate', 'add "and" plus repeat the subject', 'insert a semicolon between them']
          },
          {
            label: 'If the ACT offers "DELETE the underlined portion" as an option, it is correct when …',
            options: ['you are unsure of the answer', 'the underlined words are redundant and removal leaves a complete sentence', 'the passage is too short', 'you want to add emphasis']
          }
        ],
        correctAnswers: ['rename or describe a noun inline', 'combine them with a compound predicate', 'the underlined words are redundant and removal leaves a complete sentence'],
        hint1: 'An appositive sits next to a noun and gives more information about it: "Dr. Lee, a biologist, …"',
        hint2: 'Same subject + two actions = compound predicate: "She ran and jumped."',
        hint3: 'DELETE is correct when removing the words leaves the sentence grammatically complete and meaningful.',
        explanation: 'Appositives rename nouns. Sentences with the same subject combine naturally with compound predicates. The DELETE option works when the underlined portion adds no meaning and the sentence stands without it.'
      }
    }
  ]
};
"""))


# ── Part 6: Author's Purpose & Audience ─────────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const actRhetoricalPart6Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-rh6-intro',
      type: 'text' as const,
      content: `
# 📖 Author's Purpose & Audience

**Part 6 of 7 — Why the Author Wrote It, Who the Audience Is & Evaluating Effectiveness**

Some ACT questions zoom out and ask about the **big picture**: why a passage exists, who it's written for, and whether it achieves its goal.

**Three Question Types:**

| Type | Typical Question |
|------|-----------------|
| **Purpose** | "The primary purpose of this passage is to …" |
| **Audience** | "This passage is most likely written for …" |
| **Effectiveness** | "Does this essay successfully accomplish [goal]?" |

**Common Author Purposes:**
- **Inform** — present facts neutrally (news article, textbook)
- **Persuade** — convince the reader of a position (editorial, speech)
- **Entertain** — engage the reader with a story (narrative, memoir)
- **Describe** — paint a vivid picture (travel writing, character sketch)
- **Explain** — break down a process or concept (how-to, science explainer)

**ACT Tip:** Look at the passage's **tone, evidence, and structure** to determine purpose. Persuasive passages use arguments and emotional language; informative passages use neutral facts and data.
      `
    },
    {
      id: 'act-rh6-purpose',
      type: 'text' as const,
      content: `
## Identifying Author's Purpose

**Step 1:** Ask "What is the passage mostly doing?"
- Presenting both sides? → **Informing**
- Arguing one side? → **Persuading**
- Telling a story? → **Entertaining / Narrating**

**Step 2:** Check the language:
- Emotional, urgent, or imperative language → **Persuasion**
- Neutral, factual, data-heavy → **Informing**
- Sensory details, dialogue, first person → **Narrating / Entertaining**

**Example Passage Clues:**

*"Studies show that students who eat breakfast score 20% higher on standardised tests. Schools should therefore implement universal breakfast programmes."*

- Purpose: **Persuade** — the author uses data as evidence for a recommendation ("should implement").

*"The monarch butterfly migrates up to 3,000 miles each autumn, travelling from Canada to central Mexico."*

- Purpose: **Inform** — neutral presentation of a fact, no opinion expressed.

**ACT Nuance:** Some passages **both** inform and persuade. In that case, look at the overall thrust: if the passage ends with a call to action or recommendation, the primary purpose is persuasion, even if it includes informative sections.
      `
    },
    {
      id: 'act-rh6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Purpose & Audience** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A passage describes the chemical process of photosynthesis using technical vocabulary and includes a labelled diagram. The most likely audience is:',
            options: [
              'Young children learning to read',
              'Biology students studying for an exam',
              'Professional chefs looking for recipes',
              'Tourists visiting a national park'
            ],
            correctAnswer: 1,
            explanation: 'Technical vocabulary and diagrams indicate an academic audience. Biology students preparing for an exam would be the most likely readers of such content.'
          },
          {
            question: '"We must act now to protect our oceans. Every plastic bag that enters the sea threatens marine life." The author's primary purpose is to:',
            options: [
              'Entertain readers with an ocean adventure story',
              'Explain the chemical composition of plastic',
              'Persuade readers to take action on ocean pollution',
              'Describe the beauty of marine ecosystems'
            ],
            correctAnswer: 2,
            explanation: 'The imperative "we must act now" and the emotionally charged language ("threatens marine life") signal persuasion. The author wants the reader to change behaviour.'
          }
        ]
      }
    },
    {
      id: 'act-rh6-audience',
      type: 'text' as const,
      content: `
## Identifying the Audience

**Clues to the intended audience:**

| Clue | Likely Audience |
|------|----------------|
| Technical jargon without definitions | **Specialists** in that field |
| Simple language, basic explanations | **General public** or younger readers |
| References to "students" or "exam prep" | **Students** |
| Industry-specific advice | **Professionals** in that industry |
| Casual tone, pop culture references | **Young adults / teens** |

**ACT-Style Example:**

*"For first-time homebuyers, understanding mortgage rates is crucial. A fixed-rate mortgage locks in your interest rate for the entire loan term …"*

Audience: **First-time homebuyers** — the passage directly addresses them and explains concepts they wouldn't already know.

**Effectiveness Questions:**

The ACT sometimes asks: *"Suppose the writer's goal was to [X]. Does this essay achieve that goal?"*

**How to answer:**
1. Identify the stated goal.
2. Check whether the passage's **content, scope, and focus** match that goal.
3. Even if the essay is well-written, it might not achieve the *specific* goal stated in the question.
      `
    },
    {
      id: 'act-rh6-input1',
      type: 'input-boxes' as const,
      content: `
**Purpose Identification** 📝

For each description, write the author's primary purpose (inform, persuade, entertain, describe, or explain).

1) A newspaper article reporting election results with no editorial commentary → __________
2) A speech urging citizens to volunteer at local food banks → __________
3) A step-by-step guide on how to change a car tyre → __________
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['inform', 'persuade', 'explain'],
        hint1: 'Neutral reporting of facts without opinion = presenting information.',
        hint2: 'Urging someone to act = trying to convince them.',
        hint3: 'Step-by-step instructions = breaking down a process.',
        explanation: 'A neutral news report informs. A speech urging action persuades. A how-to guide explains a process. Recognising purpose helps you answer big-picture ACT questions.'
      }
    },
    {
      id: 'act-rh6-effectiveness',
      type: 'text' as const,
      content: `
## Evaluating Effectiveness

**"Does this essay successfully [goal]?"** questions appear at the end of ACT passages.

**Answer "Yes" when:**
- The passage directly addresses the stated goal.
- Most of the content is relevant to that goal.
- The passage provides sufficient detail or evidence.

**Answer "No" when:**
- The passage only *touches on* the goal but focuses on something else.
- The scope is too narrow or too broad for the stated goal.
- Key aspects of the goal are missing.

**Example:**

*Goal: "Describe the cultural impact of jazz music across multiple decades."*

The essay discusses jazz in the 1920s extensively but never mentions any other era.

**Answer: No** — the essay focuses on only one decade, so it doesn't cover "multiple decades" as the goal requires.

**ACT Tip:** Even if you personally think the essay is good, evaluate it **strictly against the stated goal**. Quality and goal-fulfilment are different things.
      `
    },
    {
      id: 'act-rh6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Purpose & Effectiveness** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An essay uses emotional language and ends with "We must act now." The purpose is:',
            options: ['to inform', 'to persuade', 'to entertain', 'to describe']
          },
          {
            label: 'A passage about volcanoes includes diagrams and defines technical terms. The audience is most likely:',
            options: ['professional volcanologists', 'students or general readers', 'young children', 'fiction readers']
          },
          {
            label: 'An essay's goal is to "compare two artists." It discusses only one artist in detail. The essay:',
            options: ['achieves the goal because it is well-written', 'does not achieve the goal because it only covers one artist', 'achieves the goal because one artist is enough', 'does not achieve the goal because it lacks emotional appeal']
          }
        ],
        correctAnswers: ['to persuade', 'students or general readers', 'does not achieve the goal because it only covers one artist'],
        hint1: '"We must act now" is a call to action — that is persuasion.',
        hint2: 'Diagrams + definitions = educational content for learners, not experts.',
        hint3: 'The goal says "compare two" — covering only one fails that specific requirement.',
        explanation: 'Calls to action signal persuasion. Defined terms and diagrams target learners. An essay must match the specific scope of the stated goal to be effective.'
      }
    }
  ]
};
"""))


# ── Part 7: Review & Mixed ──────────────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
export const actRhetoricalPart7Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-rh7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed Practice

**Part 7 of 7 — Cheat Sheet & Mixed ACT Rhetorical Questions**

You've covered all the major rhetorical skills tested on the ACT. Here's your quick-reference cheat sheet:

| Skill | Key Rule |
|-------|---------|
| **Strategy (Add/Delete)** | Add if it supports the main idea; delete if off-topic or redundant |
| **Organisation** | Sentences follow logical order; topic sentences introduce paragraphs |
| **Style & Tone** | Be concise, avoid redundancy, match the passage's register |
| **Transitions** | Match the logical relationship: contrast, addition, or cause-effect |
| **Combining** | Merge choppy sentences; use appositives, participles, coordination |
| **Purpose & Audience** | Identify inform vs. persuade vs. entertain; match content to audience |

**Test-Day Strategy:**
1. Read the full paragraph before answering rhetorical questions.
2. Identify the paragraph's main idea first.
3. For "best accomplishes" questions, focus on the stated goal — not your personal preference.
4. When in doubt, pick the most concise answer that maintains meaning.
      `
    },
    {
      id: 'act-rh7-cheat',
      type: 'text' as const,
      content: `
## Quick Decision Guides

**Add or Delete?**
- Ask: "Does this sentence support the paragraph's main idea?"
- Yes → Keep/Add.  No → Delete.

**Which Transition?**
- Ideas agree → *moreover, furthermore, also*
- Ideas disagree → *however, nevertheless, on the other hand*
- One causes the other → *therefore, consequently, as a result*
- Second illustrates first → *for example, for instance*

**Conciseness Check:**
- Can you say it in fewer words? → Pick the shorter option.
- Does an answer repeat what's already said? → It's redundant.
- Is "DELETE" an option and the sentence works without the underlined portion? → Seriously consider DELETE.

**Tone Matching:**
- Formal passage → no slang, no contractions, precise vocabulary.
- Narrative passage → sensory details, natural dialogue allowed.
- The answer must match the surrounding sentences' level of formality.

**Purpose Identification:**
- Calls to action = persuade.
- Neutral facts and data = inform.
- Story with characters = narrate/entertain.
- Step-by-step process = explain.
      `
    },
    {
      id: 'act-rh7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Rhetorical Skills** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A paragraph about the benefits of reading includes the sentence: "Books are made of paper, which comes from trees." Should this sentence be kept?',
            options: [
              'Yes — it adds important scientific context.',
              'Yes — it provides a relevant detail about books.',
              'No — it is unrelated to the benefits of reading.',
              'No — it contradicts the paragraph's argument.'
            ],
            correctAnswer: 2,
            explanation: 'The paragraph is about the *benefits* of reading. The material composition of books is irrelevant to that topic. It doesn't contradict anything — it's simply off-topic.'
          },
          {
            question: '"The research was funded by a government grant. __________, the findings were published in a peer-reviewed journal." Which transition best fits?',
            options: [
              'However',
              'For example',
              'Subsequently',
              'On the other hand'
            ],
            correctAnswer: 2,
            explanation: 'The sentence describes a sequence: first funding, then publication. "Subsequently" (meaning "after that") correctly signals this chronological relationship. There is no contrast or cause-effect here.'
          }
        ]
      }
    },
    {
      id: 'act-rh7-mixed',
      type: 'text' as const,
      content: `
## Common Mistakes to Avoid

**Mistake 1: Choosing an answer because it "sounds smart."**
A complex-sounding answer that doesn't match the passage's tone is wrong. The ACT penalises unnecessary complexity.

**Mistake 2: Ignoring the specific question being asked.**
If the question asks "which choice most effectively sets up the information that follows," you must look at what follows — not just whether the answer sounds good in isolation.

**Mistake 3: Adding information that's true but irrelevant.**
True ≠ relevant. A fact about photosynthesis doesn't belong in a paragraph about the history of photography, no matter how accurate it is.

**Mistake 4: Picking the longest answer to "be safe."**
On the ACT, length often correlates with wrongness. Extra words usually mean redundancy or wordiness.

**Mistake 5: Skipping the passage context.**
Rhetorical questions can't be answered by looking at the underlined portion alone. You need to understand the whole paragraph's purpose.
      `
    },
    {
      id: 'act-rh7-input1',
      type: 'input-boxes' as const,
      content: `
**Review Challenge** 📝

Answer each question with a single key term.

1) What type of transition would you use between a problem and its solution? (two words, e.g., "cause-effect" or "problem-solution" or similar)
2) If an answer choice contains the phrase "the reason is because," you should flag it as __________ (one word).
3) When the ACT asks whether an essay achieves a specific goal, you should evaluate the essay against the __________ (one word, starts with "g").
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['cause-effect', 'redundant', 'goal'],
        hint1: 'A problem leading to a solution is one thing causing/necessitating another.',
        hint2: '"The reason is because" says "reason" and "because" — which both mean the same thing.',
        hint3: 'The question states a specific g____ — evaluate strictly against it.',
        explanation: 'Problem → solution uses cause-effect transitions. "The reason is because" is redundant (reason = because). Effectiveness questions must be judged against the specific goal stated in the question.'
      }
    },
    {
      id: 'act-rh7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Final Mixed Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which revision is most concise? Original: "It is a fact that is well known that exercise has a positive effect on mental health."',
            options: [
              'It is widely known that exercise positively affects mental health.',
              'Exercise is well known to be positive for mental health.',
              'Exercise improves mental health.',
              'The fact that exercise is beneficial for mental health is well known by many people.'
            ],
            correctAnswer: 2,
            explanation: '"Exercise improves mental health" says everything in four words. The original's "it is a fact that is well known" is pure padding, and "has a positive effect on" is a wordy way of saying "improves."'
          },
          {
            question: 'A passage about climate change is written in formal academic tone. Which sentence fits this passage?',
            options: [
              'Climate change is, like, a really big deal for everyone.',
              'The implications of climate change extend across economic, social, and environmental domains.',
              'Climate change is super scary and we should totally fix it.',
              'Honestly, climate change freaks me out a ton.'
            ],
            correctAnswer: 1,
            explanation: 'Only option B matches a formal academic register. The other options use slang ("like," "totally," "freaks me out") or casual intensifiers that are inappropriate in academic writing.'
          }
        ]
      }
    },
    {
      id: 'act-rh7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Final Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A sentence that repeats information already stated should be:',
            options: ['kept for emphasis', 'deleted as redundant', 'moved to the introduction', 'rewritten in passive voice']
          },
          {
            label: '"She was unique in every possible way" — the best revision is:',
            options: ['She was very unique in every way.', 'She was unique.', 'She was extremely and very unique.', 'She was unique and special in every way.']
          },
          {
            label: 'When an ACT question asks "Which choice best introduces this paragraph?" you should pick the answer that:',
            options: ['is the longest and most detailed', 'states the paragraph's main idea clearly', 'uses the most formal vocabulary', 'includes a quotation']
          }
        ],
        correctAnswers: ['deleted as redundant', 'She was unique.', 'states the paragraph's main idea clearly'],
        hint1: 'Repetition without purpose = redundancy. Remove it.',
        hint2: '"Unique" is an absolute adjective — it cannot be modified by "very" or "extremely."',
        hint3: 'An introductory sentence = a topic sentence. It should preview the main idea.',
        explanation: 'Redundant sentences should be deleted. "Unique" is absolute and needs no modifiers. Paragraph introductions should clearly state the main idea — that is what a topic sentence does.'
      }
    }
  ]
};
"""))


# ── Main ────────────────────────────────────────────────────────────────────
def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Generating ACT English Rhetorical Skills lessons …")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done ✓")


if __name__ == "__main__":
    main()
