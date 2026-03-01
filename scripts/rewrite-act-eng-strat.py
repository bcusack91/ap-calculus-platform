#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for ACT English Strategy.
Output directory: src/data/interactive-lessons/
File pattern:    act-act-english-strategy-act-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "act-english-strategy-act"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"act-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: ACT English Overview ────────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const actEnglishStratPart1Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es1-intro',
      type: 'text' as const,
      content: `
# 📝 ACT English Overview

**Part 1 of 7 — Format, Timing & Question Types**

The ACT English section tests your ability to revise and edit passages. Here's the snapshot:

| Detail | Value |
|--------|-------|
| Total questions | **75** |
| Time limit | **45 minutes** |
| Passages | **5** (15 questions each) |
| Time per question | **36 seconds** |

Questions fall into two broad categories:

1. **Usage / Mechanics** (~40 questions) — grammar, punctuation, sentence structure.
2. **Rhetorical Skills** (~35 questions) — strategy, organization, style.

Every question is **passage-based**: an underlined portion in the text is followed by answer choices that offer revisions (or "NO CHANGE").
      `
    },
    {
      id: 'act-es1-breakdown',
      type: 'text' as const,
      content: `
## Question-Type Breakdown

### Usage / Mechanics
- **Punctuation** (10–15 Qs) — commas, apostrophes, colons, semicolons, dashes.
- **Grammar & Usage** (12–15 Qs) — subject-verb agreement, pronoun case, verb tense.
- **Sentence Structure** (15–18 Qs) — fragments, run-ons, parallelism, modifiers.

### Rhetorical Skills
- **Strategy** (10–12 Qs) — adding/deleting sentences, purpose of a detail.
- **Organization** (10–12 Qs) — sentence/paragraph order, transitions.
- **Style** (10–12 Qs) — wordiness, tone, word choice.

**Key Insight:** About 55% of the section is mechanics (concrete rules you can learn) and 45% is rhetoric (judgment calls requiring context). Practicing both equally is critical.
      `
    },
    {
      id: 'act-es1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Format Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many passages are on the ACT English section, and how many questions accompany each passage?',
            options: [
              '4 passages, 18 questions each',
              '5 passages, 15 questions each',
              '6 passages, 12 questions each',
              '5 passages, 20 questions each'
            ],
            correctAnswer: 1,
            explanation: 'The ACT English section has 5 passages with 15 questions each, totalling 75 questions in 45 minutes.'
          },
          {
            question: 'Which category contains MORE questions on the ACT English section?',
            options: [
              'Rhetorical Skills (~35 Qs)',
              'Usage / Mechanics (~40 Qs)',
              'They are split evenly at 37–38 each',
              'It varies from test to test with no pattern'
            ],
            correctAnswer: 1,
            explanation: 'Usage / Mechanics accounts for roughly 40 of the 75 questions, slightly more than Rhetorical Skills (~35).'
          }
        ]
      }
    },
    {
      id: 'act-es1-scoring',
      type: 'text' as const,
      content: `
## Scoring & Why It Matters

- Your English score is reported on a **1–36 scale**.
- There is **no penalty for guessing** — always fill in an answer.
- English is often the **easiest section to improve** because the rules are finite and learnable.
- A strong English score can **raise your composite** significantly since it's one of the four sections averaged.

**Pro Tip:** Because questions follow passage order, you can pace yourself by knowing where you should be after each passage:

| After Passage | Question # | Elapsed Time Target |
|---------------|-----------|---------------------|
| 1 | 15 | ~9 min |
| 2 | 30 | ~18 min |
| 3 | 45 | ~27 min |
| 4 | 60 | ~36 min |
| 5 | 75 | 45 min |
      `
    },
    {
      id: 'act-es1-input1',
      type: 'input-boxes' as const,
      content: `
**Quick Recall** 📝

1) How many total questions are on the ACT English section? __________
2) How many seconds per question does 75 Qs in 45 min give you? __________
3) The two broad categories are Usage/Mechanics and __________ Skills.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['75', '36', 'Rhetorical'],
        hint1: 'The total is the product of 5 passages × 15 questions each.',
        hint2: '45 minutes = 2,700 seconds. Divide by 75.',
        hint3: 'The "judgment-call" category that covers strategy, organization, and style.',
        explanation: '75 questions in 45 minutes gives 36 seconds per question. The two categories are Usage/Mechanics and Rhetorical Skills.'
      }
    },
    {
      id: 'act-es1-nochange',
      type: 'text' as const,
      content: `
## The "NO CHANGE" Option

Almost every question offers **"NO CHANGE"** as choice (A) or (F). Key facts:

- "NO CHANGE" is correct about **25%** of the time — it's a real answer, not a trick.
- Don't pick it just because the original "sounds fine." Actively check for errors.
- Don't avoid it out of suspicion either — sometimes the passage is already correct.

**Strategy:** Treat "NO CHANGE" like any other option. Read all four choices before deciding.
      `
    },
    {
      id: 'act-es1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Match** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Punctuation, grammar, and sentence structure questions fall under …',
            options: ['Usage / Mechanics', 'Rhetorical Skills', 'Reading Comprehension', 'Science Reasoning']
          },
          {
            label: '"NO CHANGE" is the correct answer approximately … of the time.',
            options: ['10%', '25%', '50%', '75%']
          },
          {
            label: 'The ACT English section gives you about … per question.',
            options: ['15 seconds', '36 seconds', '1 minute', '2 minutes']
          }
        ],
        correctAnswers: ['Usage / Mechanics', '25%', '36 seconds'],
        hint1: 'Grammar and punctuation are concrete rules — that's the mechanics side.',
        hint2: 'It's roughly one out of every four questions.',
        hint3: '2,700 seconds ÷ 75 questions.',
        explanation: 'Punctuation, grammar, and sentence structure are Usage/Mechanics. "NO CHANGE" is correct ~25% of the time. You have about 36 seconds per question.'
      }
    }
  ]
};
"""))


# ── Part 2: Passage Reading Strategy ────────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const actEnglishStratPart2Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es2-intro',
      type: 'text' as const,
      content: `
# 📖 Passage Reading Strategy

**Part 2 of 7 — How to Read ACT English Passages Efficiently**

Should you read the whole passage first or jump straight to the questions? The answer depends on your skill level, but one approach consistently works best:

**The "Read-As-You-Go" Method:**
1. Start reading from the beginning of the passage.
2. When you hit an underlined portion, pause and answer that question.
3. Continue reading and answering in sequence.

This works because ACT English questions are **ordered by their position** in the passage. You never need to jump around.

**Why NOT skim first?** Unlike ACT Reading, English questions test *local* grammar and style. Skimming wastes time because you'll have to re-read when you reach the questions anyway.
      `
    },
    {
      id: 'act-es2-context',
      type: 'text' as const,
      content: `
## Using Context Clues

Many questions require you to understand the **surrounding sentences** — not just the underlined portion.

**When to read beyond the underline:**
- **Transition questions** — you need to know what comes before AND after.
- **Pronoun reference** — check what noun the pronoun replaces.
- **Verb tense** — the rest of the paragraph establishes the tense.
- **Add/delete questions** — you must understand the paragraph's main idea.

**Example:**

> "The ancient Romans built aqueducts to transport water over long distances. \\[Underlined: They was\\] engineering marvels that lasted for centuries."

You need the previous sentence to realise "They" refers to "aqueducts" (plural) and the verb must be "were," not "was."

**Rule of Thumb:** Always read at least the sentence before and after the underlined section.
      `
    },
    {
      id: 'act-es2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Reading Strategy Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the recommended approach for reading ACT English passages?',
            options: [
              'Skim the entire passage, then answer all 15 questions.',
              'Read the questions first, then search for answers in the passage.',
              'Read the passage from the start and answer each question as you reach the underlined portion.',
              'Read only the underlined portions and ignore the rest.'
            ],
            correctAnswer: 2,
            explanation: 'The "Read-As-You-Go" method is most efficient: read sequentially and answer questions as you encounter the underlined portions.'
          },
          {
            question: 'Why is context important for pronoun-reference questions?',
            options: [
              'Pronouns are always incorrect on the ACT.',
              'You need to identify the noun the pronoun replaces, which is usually in a nearby sentence.',
              'Context helps you guess the passage topic.',
              'The ACT penalises you for wrong answers, so context reduces risk.'
            ],
            correctAnswer: 1,
            explanation: 'You must find the antecedent (the noun the pronoun replaces) in the surrounding text to check agreement in number and person.'
          }
        ]
      }
    },
    {
      id: 'act-es2-nochange',
      type: 'text' as const,
      content: `
## Navigating the "NO CHANGE" Trap

Students fall into two traps with "NO CHANGE":

**Trap 1 — Always picking it:** If the original sounds okay, they select "NO CHANGE" without checking the other options. This leads to missed errors.

**Trap 2 — Never picking it:** Some students assume there must always be an error. They change things that are already correct, introducing new mistakes.

**How to handle it:**
1. Read the underlined portion and **actively look for an error**.
2. If you spot one, find the choice that fixes ONLY that error.
3. If you don't spot an error, compare all remaining choices — if they all introduce new problems, "NO CHANGE" is correct.

**Stat:** On a typical ACT, "NO CHANGE" is correct for roughly **18–20 out of 75 questions**. If you're picking it much more or less often, recalibrate.
      `
    },
    {
      id: 'act-es2-input1',
      type: 'input-boxes' as const,
      content: `
**Strategy Recall** 📝

1) The recommended reading method is called "Read-As-You-__________."
2) For pronoun questions, check the __________ (the noun the pronoun replaces).
3) "NO CHANGE" is correct for roughly __________–20 out of 75 questions.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Go', 'antecedent', '18'],
        hint1: 'Read as you … (short word meaning "proceed").',
        hint2: 'The grammar term for the noun a pronoun refers back to.',
        hint3: 'It's close to 25% of 75, which is about 18 or 19.',
        explanation: '"Read-As-You-Go" means answering questions sequentially. The antecedent is the noun a pronoun replaces. "NO CHANGE" is correct ~18–20 times per test.'
      }
    },
    {
      id: 'act-es2-detail',
      type: 'text' as const,
      content: `
## Questions That Ask About the Whole Passage

A few questions (usually the last one for each passage) ask about the passage **as a whole**:

- *"Suppose the writer's goal had been to write an essay about X. Would this essay successfully fulfil that goal?"*
- *"Which choice would most effectively conclude the essay?"*

**Strategy:** You absorb the passage's overall purpose naturally if you use the Read-As-You-Go method. By the time you reach question 15, you already have a strong sense of the passage's main idea and tone.

**Common Mistake:** Answering "Yes" or "No" correctly but choosing the wrong *reason*. Always check that the explanation matches the passage's actual content.
      `
    },
    {
      id: 'act-es2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Approach Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When you encounter a transition question, you should read …',
            options: ['only the underlined word', 'the sentence before AND after the transition', 'the entire passage again', 'just the question stem']
          },
          {
            label: 'A student who picks "NO CHANGE" for 40 out of 75 questions is likely …',
            options: ['performing well — "NO CHANGE" is usually right', 'over-selecting it — the expected rate is ~18–20', 'under-selecting it — they should pick it more', 'within normal range']
          },
          {
            label: 'The last question for each passage typically asks about …',
            options: ['a specific comma placement', 'the passage as a whole', 'vocabulary definitions', 'the title only']
          }
        ],
        correctAnswers: ['the sentence before AND after the transition', 'over-selecting it — the expected rate is ~18–20', 'the passage as a whole'],
        hint1: 'Transitions connect ideas — you need to know what's on both sides.',
        hint2: '40 out of 75 is over 53%, far above the expected ~25%.',
        hint3: 'These "big picture" questions come after you've read the full passage.',
        explanation: 'Transition questions need surrounding context. "NO CHANGE" should be selected ~25% of the time (18–20 out of 75). The final question often addresses the passage as a whole.'
      }
    }
  ]
};
"""))


# ── Part 3: Usage / Mechanics Approach ──────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const actEnglishStratPart3Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es3-intro',
      type: 'text' as const,
      content: `
# 🔧 Usage / Mechanics Approach

**Part 3 of 7 — Identifying Error Types, Agreement & Punctuation Rules**

Usage/Mechanics questions have **definite right answers** based on grammar rules. Your approach should be systematic:

**Step 1 — Identify the error type:**
Look at what's underlined. Does it contain a verb? A pronoun? Punctuation? This tells you what rule is being tested.

**Step 2 — Apply the relevant rule:**
- **Verb** → check subject-verb agreement and tense consistency.
- **Pronoun** → check antecedent agreement and case (subjective vs. objective).
- **Punctuation** → check comma rules, apostrophe usage, semicolons.
- **Sentence structure** → check for fragments, run-ons, parallelism.

**Step 3 — Pick the choice that fixes the error without creating a new one.**
      `
    },
    {
      id: 'act-es3-agreement',
      type: 'text' as const,
      content: `
## Subject-Verb Agreement

The #1 grammar rule tested on the ACT. The subject and verb must match in number.

**Common traps:**
- **Prepositional phrase between subject and verb:**
  "The box **of chocolates** ~~are~~ → **is** on the table."
  (Subject = "box," not "chocolates.")

- **Inverted sentence order:**
  "Near the lake ~~stands~~ → **stand** three old oak trees."
  (Subject = "trees," which is plural.)

- **Compound subjects:**
  "Neither the teacher **nor the students** ~~was~~ → **were** ready."
  (With "neither…nor," the verb agrees with the nearer subject: "students.")

**ACT Strategy:** Cross out prepositional phrases mentally. Find the true subject, then check the verb.
      `
    },
    {
      id: 'act-es3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Agreement Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '"The collection of rare stamps ______ displayed in the museum." Which verb is correct?',
            options: [
              'are',
              'is',
              'were',
              'have been'
            ],
            correctAnswer: 1,
            explanation: 'The subject is "collection" (singular), not "stamps." The correct verb is "is." The prepositional phrase "of rare stamps" is a distractor.'
          },
          {
            question: '"Each of the students ______ required to submit a portfolio." Which verb is correct?',
            options: [
              'are',
              'is',
              'were',
              'have been'
            ],
            correctAnswer: 1,
            explanation: '"Each" is always singular, so the verb must be "is." Don't be fooled by "students" in the prepositional phrase.'
          }
        ]
      }
    },
    {
      id: 'act-es3-punctuation',
      type: 'text' as const,
      content: `
## Punctuation Rules

### Commas — The Big Four Uses
1. **Lists:** "I bought apples, oranges, and bananas."
2. **Introductory elements:** "After the movie, we went home."
3. **Non-essential clauses:** "My sister, who lives in Boston, is visiting."
4. **Compound sentences (with FANBOYS):** "I studied hard, but the test was tough."

**Never use a comma to:**
- Separate a subject from its verb: ~~"The dog, ran away."~~
- Join two independent clauses without a conjunction (that's a **comma splice**).

### Semicolons
- Join two **independent clauses** without a conjunction: "I studied hard; the test was still tough."
- Both sides must be complete sentences.

### Colons
- Introduce a list, explanation, or elaboration after an **independent clause**: "She had one goal: win the championship."

### Apostrophes
- **Possession:** "the dog's bone" / "the dogs' bones."
- **Contractions:** "it's" = "it is." "Its" (no apostrophe) = possessive.
      `
    },
    {
      id: 'act-es3-input1',
      type: 'input-boxes' as const,
      content: `
**Punctuation Quick Check** 📝

1) Two independent clauses joined by a comma alone is called a comma __________.
2) "It's" with an apostrophe is short for "it __________."
3) A colon must follow an __________ clause (a clause that can stand alone as a sentence).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['splice', 'is', 'independent'],
        hint1: 'This common comma error "splices" two sentences together incorrectly.',
        hint2: 'The apostrophe signals a contraction — "it" + a short verb.',
        hint3: 'The clause before a colon must be able to stand on its own.',
        explanation: 'A comma splice joins two independent clauses with only a comma. "It\'s" = "it is." A colon follows an independent clause.'
      }
    },
    {
      id: 'act-es3-structure',
      type: 'text' as const,
      content: `
## Sentence Structure Issues

**Fragments:** A group of words that lacks a subject, a verb, or a complete thought.
- ~~"Running through the park on a sunny afternoon."~~ (No subject or main verb.)
- Fix: "She was running through the park on a sunny afternoon."

**Run-on sentences:** Two independent clauses joined without proper punctuation or a conjunction.
- ~~"I love hiking I go every weekend."~~
- Fix: "I love hiking; I go every weekend." OR "I love hiking, and I go every weekend."

**Parallelism:** Items in a list or comparison must have the same grammatical form.
- ~~"She enjoys reading, to swim, and hiking."~~
- Fix: "She enjoys reading, swimming, and hiking."

**Misplaced modifiers:** A descriptive phrase placed next to the wrong noun.
- ~~"Covered in chocolate, the children devoured the cake."~~
- Fix: "The children devoured the cake, which was covered in chocolate."
      `
    },
    {
      id: 'act-es3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Error Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The team of players are ready." — The error type is …',
            options: ['subject-verb agreement', 'pronoun case', 'comma splice', 'misplaced modifier']
          },
          {
            label: '"I went to the store, I bought milk." — This is a …',
            options: ['fragment', 'comma splice', 'misplaced modifier', 'parallelism error']
          },
          {
            label: '"She likes dancing, to sing, and painting." — This is a … error.',
            options: ['verb tense', 'comma usage', 'parallelism', 'pronoun reference']
          }
        ],
        correctAnswers: ['subject-verb agreement', 'comma splice', 'parallelism'],
        hint1: '"Team" is singular but "are" is plural — that's an agreement problem.',
        hint2: 'Two complete sentences joined by just a comma.',
        hint3: 'The items in the list aren't in the same grammatical form.',
        explanation: '"Team … are" is a subject-verb agreement error (should be "is"). Joining two independent clauses with only a comma is a comma splice. Mixing gerunds and infinitives in a list is a parallelism error.'
      }
    }
  ]
};
"""))


# ── Part 4: Rhetorical Skills Approach ──────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const actEnglishStratPart4Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es4-intro',
      type: 'text' as const,
      content: `
# 🎨 Rhetorical Skills Approach

**Part 4 of 7 — Adding/Deleting, Transitions, Organization & Style**

Rhetorical Skills questions don't test grammar rules — they test your ability to make **effective writing decisions**. There's no single "rule" to apply; instead you must consider context, purpose, and clarity.

The three sub-categories:
1. **Strategy** — Should a sentence be added or deleted? What is its purpose?
2. **Organization** — Where should a sentence be placed? What transition fits?
3. **Style** — Is the wording concise? Does the tone match?
      `
    },
    {
      id: 'act-es4-adddelete',
      type: 'text' as const,
      content: `
## Adding & Deleting Sentences

**The question pattern:** *"The writer is considering adding/deleting this sentence. Should the writer make this change?"*

**Decision framework:**
- **Add if** the sentence supports the paragraph's main idea with relevant evidence or detail.
- **Delete if** the sentence is off-topic, redundant, or contradicts the paragraph's focus.

**Two-part answers:** These questions always have a Yes/No component AND a reason. You must get BOTH right.

**Example:**

*Paragraph about the health benefits of walking:*
> "Walking 30 minutes daily reduces the risk of heart disease. It also lowers blood pressure and improves mood. [Proposed addition: The first pair of running shoes was made by Nike in 1964.]"

**Answer: No, do not add — it introduces irrelevant historical information about running shoes when the paragraph focuses on health benefits of walking.**

**Trap:** The proposed fact may be true and interesting, but if it doesn't support the paragraph's point, it should not be added.
      `
    },
    {
      id: 'act-es4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Rhetorical Judgment** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A paragraph argues that public libraries are essential community resources. The writer wants to add: "Libraries also offer free Wi-Fi and computer access to residents who cannot afford internet at home." Should it be added?',
            options: [
              'Yes — it provides a relevant, specific example of libraries as community resources.',
              'Yes — it introduces an interesting new topic about technology.',
              'No — it shifts the focus from libraries to internet access.',
              'No — it repeats what was already stated in the paragraph.'
            ],
            correctAnswer: 0,
            explanation: 'Free Wi-Fi and computer access directly support the claim that libraries are essential community resources. It's relevant and specific.'
          },
          {
            question: 'A passage describes the process of photosynthesis. Which transition best connects "Plants absorb sunlight through their leaves" to "Carbon dioxide enters through small pores called stomata"?',
            options: [
              'However,',
              'In conclusion,',
              'Meanwhile,',
              'For example,'
            ],
            correctAnswer: 2,
            explanation: '"Meanwhile" signals that another simultaneous process is occurring. Both absorption of sunlight and intake of CO₂ happen as part of the same process, making "Meanwhile" the best fit.'
          }
        ]
      }
    },
    {
      id: 'act-es4-transitions',
      type: 'text' as const,
      content: `
## Transitions

Transition questions ask you to pick the word or phrase that best connects two ideas. The key is to identify the **relationship** between the ideas:

| Relationship | Transitions |
|-------------|-------------|
| **Addition** | also, furthermore, moreover, in addition |
| **Contrast** | however, nevertheless, on the other hand, despite this |
| **Cause/Effect** | therefore, consequently, as a result, thus |
| **Example** | for instance, for example, specifically |
| **Sequence** | first, next, then, finally, meanwhile |
| **Conclusion** | in conclusion, ultimately, in summary |

**Strategy:**
1. Read the sentence BEFORE and AFTER the transition.
2. Determine the relationship (addition? contrast? cause?).
3. Pick the transition that matches.

**Common Trap:** "However" is the most over-selected transition. Students pick it whenever they're unsure. Only use "however" when there is a genuine **contrast** between the two ideas.
      `
    },
    {
      id: 'act-es4-input1',
      type: 'input-boxes' as const,
      content: `
**Transition Types** 📝

Identify the relationship each transition signals.

1) "Therefore" signals a __________ relationship (cause and …).
2) "On the other hand" signals a __________ between two ideas.
3) "Furthermore" signals that additional __________ is being provided.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['effect', 'contrast', 'information'],
        hint1: '"Therefore" means "because of that" — what follows the cause?',
        hint2: '"On the other hand" introduces the opposite perspective.',
        hint3: '"Furthermore" introduces more of the same kind of content.',
        explanation: '"Therefore" signals cause and effect. "On the other hand" signals contrast. "Furthermore" signals additional information.'
      }
    },
    {
      id: 'act-es4-organization',
      type: 'text' as const,
      content: `
## Organization & Sentence Placement

**Sentence-order questions:**
*"For the sake of the logic and coherence of this paragraph, Sentence 4 should be placed …"*

**Strategy:**
1. Read each sentence and identify **logical links** (pronouns referring back, transitions like "this" or "such," chronological order).
2. A sentence that introduces a concept must come BEFORE sentences that refer to it.
3. A sentence beginning with "This approach" must follow the sentence that describes the approach.

**Paragraph-order questions:**
*"Which of the following sequences of paragraphs makes the essay most logical?"*

**Look for:**
- The **introduction** (broad overview or thesis) goes first.
- **Body paragraphs** should follow a logical flow (chronological, cause-effect, or general-to-specific).
- The **conclusion** (summary or final thought) goes last.
      `
    },
    {
      id: 'act-es4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Rhetorical Skills Strategies** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A proposed addition that is true but off-topic should be …',
            options: ['added — true facts are always helpful', 'deleted — relevance to the paragraph matters more than truth', 'added — variety improves the passage', 'moved to a different paragraph']
          },
          {
            label: 'If Sentence 5 says "This technique…" then it must be placed …',
            options: ['at the beginning of the paragraph', 'after the sentence that describes the technique', 'at the end of the paragraph', 'in a separate paragraph']
          },
          {
            label: 'When two ideas contrast, the best transition is usually …',
            options: ['furthermore', 'for example', 'however', 'in addition']
          }
        ],
        correctAnswers: ['deleted — relevance to the paragraph matters more than truth', 'after the sentence that describes the technique', 'however'],
        hint1: 'The ACT values relevance to the main idea above all.',
        hint2: '"This technique" needs an antecedent — the sentence that names the technique.',
        hint3: '"However" is the classic contrast transition.',
        explanation: 'Off-topic facts should not be added regardless of truth. Sentences with demonstrative references ("This technique") must follow the sentence they refer to. "However" signals contrast.'
      }
    }
  ]
};
"""))


# ── Part 5: Time Management ────────────────────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const actEnglishStratPart5Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es5-intro',
      type: 'text' as const,
      content: `
# ⏱️ Time Management

**Part 5 of 7 — Pacing, Skipping & Guessing Strategy**

With only **36 seconds per question**, the ACT English section rewards efficient test-takers. Good time management can be the difference between a 28 and a 32+.

**The Pacing Goal:**
- Spend about **8–9 minutes per passage** (15 questions each).
- Finish all 75 questions with **1–2 minutes** left for review.

**Reality check:** Not every question takes the same amount of time.
- Grammar fixes (punctuation, agreement) → ~15–20 seconds.
- Rhetorical judgment (add/delete, organization) → ~40–60 seconds.

So you'll naturally move faster through mechanics questions and spend more time on rhetoric.
      `
    },
    {
      id: 'act-es5-pacing',
      type: 'text' as const,
      content: `
## Pacing Checkpoints

Use these benchmarks during the test:

| Checkpoint | Target Time Remaining |
|-----------|----------------------|
| After Passage 1 (Q 15) | ~36 minutes left |
| After Passage 2 (Q 30) | ~27 minutes left |
| After Passage 3 (Q 45) | ~18 minutes left |
| After Passage 4 (Q 60) | ~9 minutes left |
| After Passage 5 (Q 75) | 0 minutes (done!) |

**What if you're behind?**
- Don't panic. Speed up slightly on easy mechanics questions.
- On any question you've spent 60+ seconds on, make your best guess and move on.
- Remember: the last passage has questions worth the same points as the first.
      `
    },
    {
      id: 'act-es5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Pacing Strategy** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If you finish Passage 2 with 30 minutes remaining, you are …',
            options: [
              'Ahead of pace — target is ~27 min remaining after Passage 2.',
              'Right on pace — 30 min remaining is exactly correct.',
              'Behind pace — you should have 33 min remaining.',
              'Way behind — you need to skip the next passage.'
            ],
            correctAnswer: 0,
            explanation: 'The target is ~27 minutes remaining after Passage 2. Having 30 minutes means you are about 3 minutes ahead — in good shape!'
          },
          {
            question: 'Which type of question typically takes the LEAST time?',
            options: [
              'Sentence placement (organization)',
              'Adding/deleting a sentence',
              'Comma or apostrophe fix (punctuation)',
              'Main idea of the passage as a whole'
            ],
            correctAnswer: 2,
            explanation: 'Punctuation fixes are the quickest because they involve applying a concrete rule. Strategy and organization questions require reading more context.'
          }
        ]
      }
    },
    {
      id: 'act-es5-skipping',
      type: 'text' as const,
      content: `
## When to Skip (and Come Back)

**Skip-worthy questions:**
- Questions that require reading a large portion of the passage (e.g., "Which choice most effectively concludes the essay?") — come back after you've read the full passage.
- Organization questions asking where to place a sentence — these are time-consuming and worth saving for last.
- Any question where you can't eliminate even one answer in 20 seconds.

**How to skip effectively:**
1. Mark the question in your test booklet (circle the number).
2. **Bubble in your best guess** — never leave it blank in case you run out of time.
3. After finishing the passage, return to skipped questions.

**Never skip:** Simple punctuation or agreement fixes. These are fast points.
      `
    },
    {
      id: 'act-es5-input1',
      type: 'input-boxes' as const,
      content: `
**Pacing Math** 📝

1) 45 minutes ÷ 5 passages = __________ minutes per passage.
2) If you're at question 45 with 20 minutes left, you are __________ of pace (ahead/behind).
3) When skipping a question, you should still bubble in a __________ answer.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', 'ahead', 'guess'],
        hint1: 'Simple division: 45 ÷ 5.',
        hint2: 'Q 45 is after Passage 3. Target is ~18 min left. You have 20.',
        hint3: 'Never leave a bubble blank — there's no penalty for wrong answers.',
        explanation: '9 minutes per passage. At Q 45 with 20 min left you're ~2 min ahead of the 18 min target. Always bubble a guess when skipping.'
      }
    },
    {
      id: 'act-es5-guessing',
      type: 'text' as const,
      content: `
## When to Guess

**No penalty for guessing!** The ACT does not deduct points for wrong answers, so:
- **Never leave a question blank.**
- If you're running low on time, fill in remaining bubbles with a single letter (e.g., all B/G).

**Strategic guessing vs. random guessing:**
- **Strategic:** Eliminate 1–2 answers, then guess from the remaining options. Going from 4 choices to 2 doubles your odds (25% → 50%).
- **Random:** Pick any letter. Still gives you 25% — better than 0%.

**"Shortest answer" heuristic:** When you must guess blindly on a Usage/Mechanics question, the **shortest answer** is correct more often than chance would predict. Why? Many errors involve wordiness, and the fix is the most concise option.

**Caution:** This is a last-resort heuristic, not a reliable rule. Always try to apply grammar knowledge first.
      `
    },
    {
      id: 'act-es5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Time Management Decisions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'You've spent 50 seconds on a question and can't decide between two answers. You should …',
            options: ['spend another minute thinking carefully', 'pick your best guess and move on', 'leave it blank and come back later', 'change the question topic']
          },
          {
            label: 'With 3 minutes left and 8 questions unanswered, you should …',
            options: ['focus carefully on 3 questions and leave 5 blank', 'bubble in your best guesses for all 8', 'skip to the hardest questions', 'close your test booklet']
          },
          {
            label: 'The "shortest answer" heuristic works best for …',
            options: ['reading comprehension questions', 'wordiness and redundancy questions', 'adding/deleting questions', 'math questions']
          }
        ],
        correctAnswers: ['pick your best guess and move on', 'bubble in your best guesses for all 8', 'wordiness and redundancy questions'],
        hint1: '36 seconds is the target. 50 seconds is already over budget.',
        hint2: 'No penalty for guessing — never leave bubbles blank.',
        hint3: 'Wordiness questions often reward the most concise option.',
        explanation: 'At 50 seconds, make your best guess and move on. With 3 minutes and 8 questions left, bubble guesses for all (no penalty). The shortest-answer heuristic applies to wordiness questions.'
      }
    }
  ]
};
"""))


# ── Part 6: Common Traps & Tricks ──────────────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const actEnglishStratPart6Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es6-intro',
      type: 'text' as const,
      content: `
# ⚠️ Common Traps & Tricks

**Part 6 of 7 — Patterns the ACT Uses to Trick You**

The ACT is a standardised test, which means it uses **predictable patterns** to create wrong answers. Recognising these traps turns difficult questions into easy ones.

**The Big Three Traps:**
1. **Wordiness** — making you choose a long, fancy answer when a short one is better.
2. **"DELETE the underlined portion"** — offering deletion as a choice (and it's often correct!).
3. **"Sounds right" bias** — wrong answers that sound conversational but break grammar rules.

Let's explore each one.
      `
    },
    {
      id: 'act-es6-wordiness',
      type: 'text' as const,
      content: `
## Trap 1: Wordiness

The ACT **loves** testing conciseness. If two choices say the same thing but one uses fewer words, the **shorter one is almost always correct**.

**Examples of wordy traps:**

| Wordy (Wrong) | Concise (Correct) |
|---------------|-------------------|
| "at this point in time" | "now" |
| "due to the fact that" | "because" |
| "in the event that" | "if" |
| "the reason being that" | "because" |
| "has the ability to" | "can" |

**Redundancy** is a sub-category of wordiness:
- ~~"She returned back to the store."~~ → "She returned to the store." ("returned" already means "went back.")
- ~~"The new innovation was groundbreaking."~~ → "The innovation was groundbreaking." ("innovation" already implies "new.")
- ~~"They collaborated together on the project."~~ → "They collaborated on the project."

**Rule:** When in doubt, pick the shortest answer that maintains the original meaning.
      `
    },
    {
      id: 'act-es6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Wordiness & Conciseness** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which is the most concise way to express: "Despite the fact that the weather was bad, they went hiking"?',
            options: [
              'Despite the fact that the weather was bad, they went hiking.',
              'Although the weather was bad, they went hiking.',
              'In spite of the fact that there was bad weather occurring, they went hiking.',
              'Regardless of the fact that the weather turned out to be bad in nature, they went hiking.'
            ],
            correctAnswer: 1,
            explanation: '"Although the weather was bad" conveys the same meaning in fewer words. "Despite the fact that" and similar constructions are unnecessarily wordy.'
          },
          {
            question: 'Which sentence contains a redundancy?',
            options: [
              'The museum displayed artifacts from ancient civilisations.',
              'She cautiously approached the unfamiliar dog.',
              'The consensus of opinion among the group was unanimous.',
              'After the storm, the streets were flooded with water.'
            ],
            correctAnswer: 2,
            explanation: '"Consensus" already means "agreement of opinion," so "of opinion" is redundant. Additionally, "unanimous" repeats the idea of full agreement. The sentence is triply redundant.'
          }
        ]
      }
    },
    {
      id: 'act-es6-delete',
      type: 'text' as const,
      content: `
## Trap 2: "DELETE the Underlined Portion"

On some questions, one choice is **"DELETE the underlined portion."** Students often skip this option because it seems drastic. But:

**DELETE is correct when:**
- The underlined portion is **redundant** (it repeats what's already said).
- The underlined portion is **irrelevant** (it doesn't belong in the sentence or paragraph).
- Removing it makes the sentence **grammatically cleaner**.

**Example:**

> "The tall skyscraper, ~~which was very tall and imposing in its height,~~ dominated the city skyline."

DELETE is correct here — "tall skyscraper" already conveys the idea. The underlined clause is redundant.

**Real ACT data:** DELETE is the correct answer on roughly **30–40%** of the questions where it appears as an option. Don't ignore it!

**Strategy:** Whenever you see DELETE as an option, ask: "Does removing this make the sentence better or worse?" If the sentence reads just as well (or better) without the underlined portion, DELETE is likely correct.
      `
    },
    {
      id: 'act-es6-input1',
      type: 'input-boxes' as const,
      content: `
**Trap Identification** 📝

1) "She returned back home" contains a __________ (the error type where words repeat the same meaning).
2) When DELETE appears as an answer choice, it is correct roughly __________–40% of the time.
3) "Due to the fact that" should be replaced with the single word "__________.".
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['redundancy', '30', 'because'],
        hint1: '"Returned" already means "went back" — the extra word repeats the meaning.',
        hint2: 'It's correct more often than students expect — between 30 and 40 percent.',
        hint3: 'A one-word replacement for "due to the fact that."',
        explanation: '"Returned back" is a redundancy. DELETE is correct 30–40% of the time when offered. "Due to the fact that" = "because."'
      }
    },
    {
      id: 'act-es6-soundsright',
      type: 'text' as const,
      content: `
## Trap 3: "Sounds Right" Bias

Many students rely on their **ear** — "this sounds right to me." But spoken English breaks grammar rules constantly. The ACT tests *written* standard English.

**Common "sounds right" errors:**

- **"Me and my friend went…"** → "My friend and **I** went…" (subjective case for subjects)
- **"Between you and I"** → "Between you and **me**" (objective case after prepositions)
- **"Everyone should bring their book"** → "Everyone should bring **his or her** book" (singular antecedent — though the ACT has become more accepting of singular "they" in recent years)
- **"The data shows"** → "The data **show**" ("data" is technically plural)

**Defence:** Don't trust your ear alone. Apply the grammar rule, then check if the answer sounds right as a final confirmation.

**The "Cross-Out" Test:** For pronoun case, remove the other person from the sentence:
- "Me went to the store" → clearly wrong → use "I"
- "Give it to I" → clearly wrong → use "me"
      `
    },
    {
      id: 'act-es6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Trap Detection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"In the modern world of today" should be shortened to …',
            options: ['"In today's world"', '"In the modern contemporary world"', '"In the world that exists in modern times"', '"In our current modern era of today"']
          },
          {
            label: 'DELETE is the correct answer choice roughly …',
            options: ['5% of the time — it's almost never right', '30–40% of the time when it appears', '75% of the time — always pick it', '50% of the time — it's a coin flip']
          },
          {
            label: '"Between you and I" is incorrect because …',
            options: ['"I" should be capitalised', 'prepositions require the objective case ("me")', '"between" is an informal word', 'the sentence needs a comma']
          }
        ],
        correctAnswers: ['"In today's world"', '30–40% of the time when it appears', 'prepositions require the objective case ("me")'],
        hint1: 'Eliminate the redundant words: "modern" and "of today" say the same thing.',
        hint2: 'It is more common than most students expect.',
        hint3: '"Between" is a preposition, so the pronoun must be in the objective form.',
        explanation: '"In the modern world of today" is redundant — use "In today\'s world." DELETE is correct 30–40% when available. "Between" requires objective case: "between you and me."'
      }
    }
  ]
};
"""))


# ── Part 7: Full Section Practice ───────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
export const actEnglishStratPart7Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es7-intro',
      type: 'text' as const,
      content: `
# 🎓 Full Section Practice

**Part 7 of 7 — Mini-Passage with Mixed Question Types & Strategy Recap**

Let's put everything together. Below is a short ACT-style passage with questions that test grammar, punctuation, transitions, add/delete, and conciseness — the full range of skills you've learned.

Read the passage and answer each question as you reach it, just like on test day.
      `
    },
    {
      id: 'act-es7-passage',
      type: 'text' as const,
      content: `
## Mini-Passage: The Rise of Urban Farming

[1] In recent years, urban farming has gained popularity in cities around the world. [2] Vacant lots, rooftops, and even abandoned buildings \\[A\\] **has been** transformed into productive gardens. [3] \\[B\\] **However,** these urban farms provide far more than fresh produce. [4] They create jobs, build community, and \\[C\\] **gives residents a sense of** pride and purpose.

[5] One of the most successful examples is the Growing Power project in Milwaukee, Wisconsin. [6] Founded by Will Allen in 1993, the organisation \\[D\\] **turned a vacant two-acre lot into a thriving farm that produced vegetables, fish, and livestock year-round.** [7] \\[E\\] **[The writer is considering adding: "Will Allen was a former professional basketball player."]** [8] Allen's approach demonstrated that even small urban spaces could yield a surprising amount of food.

**Now answer the questions on the following slides.**
      `
    },
    {
      id: 'act-es7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Passage Questions — Grammar & Transitions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '[A]: "Vacant lots, rooftops, and even abandoned buildings has been transformed …" What is the correct verb?',
            options: [
              'has been (NO CHANGE)',
              'have been',
              'was',
              'is being'
            ],
            correctAnswer: 1,
            explanation: 'The subject is the compound list "lots, rooftops, and buildings" — plural, so it requires "have been," not "has been."'
          },
          {
            question: '[B]: The sentence says "However, these urban farms provide far more than fresh produce." Is "However" the best transition here?',
            options: [
              'Yes — NO CHANGE.',
              'No — replace with "In fact," because the sentence expands on the previous idea.',
              'No — replace with "Therefore," because it states a consequence.',
              'No — replace with "For example," because it gives an illustration.'
            ],
            correctAnswer: 1,
            explanation: 'Sentence [3] doesn't contrast with sentence [2] — it EXPANDS on the idea that urban farms are valuable. "In fact," signals that what follows goes further than the previous claim.'
          }
        ]
      }
    },
    {
      id: 'act-es7-conciseness',
      type: 'text' as const,
      content: `
## [C]: Parallelism & Conciseness

Sentence [4]: "They create jobs, build community, and **gives residents a sense of** pride and purpose."

**What's wrong?**
1. **Parallelism error:** The list uses "create … build … gives" — the third verb should match the form of the first two.
2. **Wordiness:** "gives residents a sense of" can be tightened.

**Corrected:** "They create jobs, build community, and **give** residents pride and purpose."

Notice how "give" (not "gives") maintains parallelism with "create" and "build," and removing "a sense of" eliminates unnecessary words.
      `
    },
    {
      id: 'act-es7-input1',
      type: 'input-boxes' as const,
      content: `
**Passage Analysis** 📝

1) In [A], the subject is plural, so the verb should be "__________ been."
2) In [B], the best replacement for "However" is "In __________,"
3) In [C], the verb "gives" should be changed to "__________ " for parallel structure.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['have', 'fact', 'give'],
        hint1: 'Plural subjects take the plural auxiliary verb.',
        hint2: 'This phrase signals expansion or intensification: "In ____,"',
        hint3: 'Match the form of "create" and "build" — all base-form verbs.',
        explanation: '"Have been" agrees with the plural subject. "In fact" replaces "However" to signal expansion. "Give" matches "create" and "build" in parallel structure.'
      }
    },
    {
      id: 'act-es7-adddelete',
      type: 'text' as const,
      content: `
## [E]: Add/Delete Decision

**The writer is considering adding:** *"Will Allen was a former professional basketball player."*

Should this sentence be added at point [E], between sentences [6] and [8]?

**Analysis:**
- The paragraph focuses on **urban farming success** — specifically Growing Power's achievements.
- Will Allen's basketball career is an **interesting biographical detail** but does not support the paragraph's argument about urban farming's impact.
- Adding it would **distract** from the paragraph's focus.

**Answer: No — this sentence should NOT be added because it introduces biographical information that is irrelevant to the paragraph's focus on the success of the urban farming project.**

**Strategy Applied:** When evaluating an add/delete question, always ask: "Does this support the paragraph's main idea?" If not, don't add it.
      `
    },
    {
      id: 'act-es7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Strategy Recap** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For grammar questions, the first step is to …',
            options: ['read the entire passage again', 'identify the error type (verb, pronoun, punctuation, etc.)', 'pick the shortest answer', 'choose NO CHANGE']
          },
          {
            label: 'When you see DELETE as an answer choice, you should …',
            options: ['ignore it — deleting is too risky', 'seriously consider it — it's correct 30–40% of the time', 'always pick it — shorter is better', 'only pick it for the last question']
          },
          {
            label: 'The best reading strategy for ACT English is …',
            options: ['skim the whole passage, then answer questions', 'read as you go — answer each question when you reach the underline', 'read backwards to check grammar', 'only read the underlined portions']
          }
        ],
        correctAnswers: ['identify the error type (verb, pronoun, punctuation, etc.)', 'seriously consider it — it's correct 30–40% of the time', 'read as you go — answer each question when you reach the underline'],
        hint1: 'Knowing the rule being tested tells you exactly what to check.',
        hint2: 'DELETE is more common than students think — evaluate it honestly.',
        hint3: 'ACT English questions are ordered by position in the passage.',
        explanation: 'Step 1 for grammar: identify the error type. DELETE is correct 30–40% when offered. The Read-As-You-Go method is the most efficient approach for ACT English.'
      }
    },
    {
      id: 'act-es7-summary',
      type: 'text' as const,
      content: `
## 🏁 Strategy Summary

**Usage / Mechanics:**
- Identify the error type first (verb → agreement, pronoun → case, punctuation → rule).
- Cross out prepositional phrases to find the true subject.
- Watch for comma splices, fragments, run-ons, and parallelism errors.

**Rhetorical Skills:**
- Add sentences that support the main idea; delete those that are off-topic or redundant.
- Match transitions to the relationship between ideas (addition, contrast, cause/effect).
- For sentence placement, look for logical links (pronouns, transitions).

**Time Management:**
- ~9 minutes per passage, 36 seconds per question.
- Skip time-consuming questions (bubble a guess), return after the passage.
- Never leave a bubble blank — no penalty for guessing.

**Common Traps:**
- Shorter is usually better (wordiness trap).
- DELETE is often correct when offered.
- Don't trust your ear alone — apply the rule.

You now have a complete toolkit for the ACT English section. Practice with real passages and apply these strategies consistently! 🎯
      `
    }
  ]
};
"""))


# ── Main ────────────────────────────────────────────────────────────────────
def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Generating ACT English Strategy lessons …")
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
