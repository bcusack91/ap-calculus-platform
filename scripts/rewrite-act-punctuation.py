#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for ACT English Punctuation.
Output directory: src/data/interactive-lessons/
File pattern:    act-act-english-punctuation-act-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "act-english-punctuation-act"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"act-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Commas ──────────────────────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const actPunctuationPart1Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-pn1-intro',
      type: 'text' as const,
      content: `
# ✏️ Commas

**Part 1 of 7 — Items in a Series, Introductory Elements, Nonessential Clauses & Coordinate Adjectives**

Commas are the most frequently tested punctuation mark on the ACT English section. Approximately **5–8 questions per test** involve comma usage, so mastering these rules gives you a significant scoring advantage.

**The Four Big Comma Rules on the ACT:**

| Rule | Example |
|------|---------|
| Items in a series | *She packed books, snacks, and water.* |
| After introductory elements | *After the lecture, students asked questions.* |
| Around nonessential clauses | *My sister, who lives in Chicago, is visiting.* |
| Between coordinate adjectives | *It was a long, exhausting day.* |

**Why this matters:** The ACT doesn't just test whether you know the rules — it tests whether you can avoid **adding commas where they don't belong**.
      `
    },
    {
      id: 'act-pn1-series',
      type: 'text' as const,
      content: `
## Items in a Series & the Oxford Comma

When you list **three or more items**, place commas between each item. The ACT typically includes the comma before the conjunction (the **Oxford comma**).

**Correct:**
- ✅ *The lab requires goggles, gloves, and a lab coat.*
- ✅ *She studied biology, chemistry, and physics.*

**Incorrect — Missing Comma:**
- ❌ *The lab requires goggles, gloves and a lab coat.*

**Two-Item Lists — No Comma Before "and":**
- ✅ *She studied biology and chemistry.*
- ❌ *She studied biology, and chemistry.* (Don't add a comma with only two items!)

**ACT Trap:** The ACT will sometimes offer an answer that inserts a comma between just two items. Always count the items in the list before choosing.

**Introductory Elements:**

After an introductory word, phrase, or clause, use a comma:
- ✅ *However, the results were inconclusive.*
- ✅ *After running for three miles, she stopped to rest.*
- ✅ *When the bell rang, students rushed to the door.*

**Short introductory phrases** (1–2 words) may sometimes omit the comma, but on the ACT, the safer choice is to include it.
      `
    },
    {
      id: 'act-pn1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Comma Usage — Spot the Correct Version** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence uses commas correctly? (A) The recipe calls for flour, sugar and butter. (B) The recipe calls for flour, sugar, and butter. (C) The recipe calls for flour sugar and butter.',
            options: ['Sentence A', 'Sentence B', 'Sentence C', 'All are correct'],
            correctAnswer: 1,
            explanation: 'Sentence B correctly uses the serial (Oxford) comma. With three items in a series, commas separate each item, including before the conjunction "and."'
          },
          {
            question: '"After reviewing the data the scientists published their findings." What punctuation fix does this sentence need?',
            options: ['A comma after "data"', 'A comma after "scientists"', 'A semicolon after "data"', 'No change needed'],
            correctAnswer: 0,
            explanation: '"After reviewing the data" is an introductory clause. A comma is needed after "data" to separate it from the main clause.'
          }
        ]
      }
    },
    {
      id: 'act-pn1-nonessential',
      type: 'text' as const,
      content: `
## Nonessential (Nonrestrictive) Clauses

A **nonessential clause** adds extra information that can be removed without changing the sentence's meaning. Set it off with **commas on both sides**.

**Nonessential (commas needed):**
- ✅ *My brother, who is a pilot, travels frequently.*
- Removing "who is a pilot" leaves a complete sentence: *My brother travels frequently.*

**Essential (no commas):**
- ✅ *Students who study regularly tend to score higher.*
- Removing "who study regularly" changes the meaning — we no longer know which students.

**The "Which" vs. "That" Shortcut:**
- **Which** → usually nonessential → needs commas: *The car, which was red, sped away.*
- **That** → usually essential → no commas: *The car that was red sped away.*

**Coordinate Adjectives:**

Two adjectives are **coordinate** (equal) when you can swap their order or insert "and" between them:
- ✅ *It was a cold, dreary morning.* (You could say "dreary, cold morning" or "cold and dreary morning.")
- ❌ *She wore a bright red scarf.* ("Red bright scarf" sounds wrong — not coordinate, so no comma.)

**ACT Tip:** Try the swap test. If the adjectives sound natural in either order, use a comma.
      `
    },
    {
      id: 'act-pn1-input1',
      type: 'input-boxes' as const,
      content: `
**Add the Missing Punctuation** ✏️

Type the correct punctuation mark (comma, no comma, two commas) for each sentence.

1) "The museum ___ which was built in 1920 ___ is undergoing renovation." — What punctuation goes in each blank?
2) "Running through the park ___ she noticed a rare bird." — What punctuation goes in the blank?
3) "They brought sandwiches ___ drinks ___ and fruit to the picnic." — What punctuation goes in each blank?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['comma', 'comma', 'comma'],
        hint1: '"Which was built in 1920" is nonessential info — it needs commas on both sides.',
        hint2: '"Running through the park" is an introductory phrase — add a comma after it.',
        hint3: 'This is a list of three items — use commas between each item (serial comma).',
        explanation: '1) Commas on both sides of the nonessential clause. 2) Comma after the introductory participial phrase. 3) Commas between items in a series.'
      }
    },
    {
      id: 'act-pn1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quick-Check: Comma Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A nonessential clause should be …',
            options: ['set off with commas on both sides', 'preceded by a semicolon', 'left without any punctuation', 'followed by a colon']
          },
          {
            label: 'In a list of three items, commas go …',
            options: ['only after the first item', 'between each item including before the conjunction', 'only before the conjunction', 'nowhere — the conjunction is enough']
          },
          {
            label: 'After a long introductory phrase, you should add a …',
            options: ['comma', 'semicolon', 'colon', 'dash']
          }
        ],
        correctAnswers: ['set off with commas on both sides', 'between each item including before the conjunction', 'comma'],
        hint1: 'Nonessential means the info can be removed — the commas signal that.',
        hint2: 'The ACT uses the Oxford/serial comma.',
        hint3: 'Introductory elements are followed by a comma to separate them from the main clause.',
        explanation: 'Nonessential clauses need commas on both sides. Series use commas between all items (Oxford comma). Introductory phrases are followed by a comma.'
      }
    },
    {
      id: 'act-pn1-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Passage Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The town\\'s annual festival which draws thousands of visitors every summer is scheduled for July." Which is the best punctuation? (A) No change. (B) festival, which draws thousands of visitors every summer, is scheduled. (C) festival; which draws thousands of visitors every summer; is scheduled. (D) festival which draws thousands of visitors every summer is scheduled.',
            options: ['A — No change', 'B — Commas around the clause', 'C — Semicolons around the clause', 'D — Remove all punctuation'],
            correctAnswer: 1,
            explanation: '"Which draws thousands of visitors every summer" is a nonessential clause — it provides extra detail about the festival. It must be set off with commas on both sides.'
          },
          {
            question: '"Before the experiment began the researchers calibrated their instruments checked the controls and reviewed the hypothesis." How should this sentence be punctuated?',
            options: ['Comma after "began" only', 'Commas after "began," "instruments," and "controls"', 'Semicolons after "began" and "instruments"', 'No punctuation needed'],
            correctAnswer: 1,
            explanation: 'A comma is needed after the introductory clause "Before the experiment began." Then commas separate the three items in the series: "calibrated their instruments," "checked the controls," and "reviewed the hypothesis."'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 2: Semicolons & Colons ────────────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const actPunctuationPart2Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-pn2-intro',
      type: 'text' as const,
      content: `
# 🔗 Semicolons & Colons

**Part 2 of 7 — Joining Independent Clauses, Introducing Lists & Semicolons vs. Commas**

Semicolons and colons appear on nearly every ACT English section. They look intimidating, but the rules are straightforward once you learn them.

**Key Principle:** Both semicolons and colons **must** be preceded by a complete sentence (independent clause). If the words before the mark can't stand alone, the punctuation is wrong.

| Mark | Primary Use | Example |
|------|------------|---------|
| Semicolon (;) | Joins two related independent clauses | *She studied hard; she earned an A.* |
| Colon (:) | Introduces a list, explanation, or elaboration | *He needed three things: focus, practice, and patience.* |
      `
    },
    {
      id: 'act-pn2-semicolon',
      type: 'text' as const,
      content: `
## The Semicolon

**Rule 1 — Join Two Independent Clauses:**
A semicolon replaces a period between two closely related sentences.
- ✅ *The experiment failed; the researchers adjusted their method.*
- ❌ *The experiment failed; and the researchers adjusted their method.* (Don't use a semicolon + FANBOYS together.)

**Rule 2 — Semicolon with Conjunctive Adverbs:**
When you use words like *however, therefore, moreover, consequently, furthermore*, place a semicolon before and a comma after:
- ✅ *The data was inconclusive; however, the team continued.*
- ❌ *The data was inconclusive, however, the team continued.* (This is a comma splice!)

**Rule 3 — Semicolons in Complex Lists:**
Use semicolons to separate items in a list when the items themselves contain commas:
- ✅ *The team traveled to Austin, Texas; Portland, Oregon; and Miami, Florida.*

**ACT Trap:** The ACT will offer a semicolon between a dependent clause and an independent clause. Remember — **both sides** of a semicolon must be independent clauses.
- ❌ *Although she studied hard; she didn't pass.* ("Although she studied hard" is dependent.)
      `
    },
    {
      id: 'act-pn2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Semicolons — Right or Wrong?** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence uses the semicolon correctly? (A) She ran the experiment; the results surprised everyone. (B) Although the weather was cold; they went hiking. (C) He likes soccer; and basketball.',
            options: ['Sentence A', 'Sentence B', 'Sentence C', 'All are correct'],
            correctAnswer: 0,
            explanation: 'Sentence A correctly joins two independent clauses with a semicolon. Sentence B incorrectly places a semicolon after a dependent clause. Sentence C incorrectly pairs a semicolon with a conjunction for a simple list.'
          },
          {
            question: '"The mayor promised to reduce taxes, however, funding for schools would remain unchanged." What is the error?',
            options: ['No error', 'Comma splice — use a semicolon before "however"', 'Remove the comma after "however"', '"However" should be replaced with "but"'],
            correctAnswer: 1,
            explanation: 'This is a comma splice. "However" is a conjunctive adverb, not a FANBOYS conjunction. The correct punctuation is: "…taxes; however, funding…"'
          }
        ]
      }
    },
    {
      id: 'act-pn2-colon',
      type: 'text' as const,
      content: `
## The Colon

**Rule 1 — Introduce a List (After a Complete Sentence):**
- ✅ *The kit includes the following items: a wrench, pliers, and a screwdriver.*
- ❌ *The kit includes: a wrench, pliers, and a screwdriver.* ("The kit includes" isn't a complete thought when used this way on the ACT — the colon often needs a complete clause.)

**Rule 2 — Introduce an Explanation or Elaboration:**
- ✅ *There was one problem: the bridge had collapsed.*
- ✅ *She had a simple philosophy: work hard, stay humble.*

**Rule 3 — What NOT to Put After a Colon:**
Don't use a colon after a preposition or a verb that directly leads into its object:
- ❌ *She enjoys: reading, hiking, and swimming.*
- ✅ *She enjoys reading, hiking, and swimming.*

**Colon vs. Semicolon Quick Test:**
- **Semicolon** → both sides must be independent clauses
- **Colon** → left side must be an independent clause; right side can be a list, clause, or fragment

**ACT Tip:** If the part before the colon can stand alone as a sentence, the colon is probably correct. If it can't, it's wrong.
      `
    },
    {
      id: 'act-pn2-input1',
      type: 'input-boxes' as const,
      content: `
**Choose the Correct Punctuation** ✏️

Type "semicolon" or "colon" for each blank.

1) "The museum has an impressive collection ___ ancient sculptures, Renaissance paintings, and modern art." — The blank needs a …
2) "She finished her essay early ___ therefore, she had time to review it." — The blank needs a …
3) "He had one goal ___ to finish the marathon." — The blank needs a …
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['colon', 'semicolon', 'colon'],
        hint1: 'A list follows — and the clause before the blank is a complete sentence.',
        hint2: '"Therefore" is a conjunctive adverb. Think about what comes before conjunctive adverbs.',
        hint3: 'The right side explains or elaborates on "one goal."',
        explanation: '1) A colon introduces the list. 2) A semicolon precedes the conjunctive adverb "therefore." 3) A colon introduces the explanation of "one goal."'
      }
    },
    {
      id: 'act-pn2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quick-Check: Semicolons & Colons** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A semicolon can join two …',
            options: ['independent clauses', 'dependent clauses', 'phrases', 'single words']
          },
          {
            label: 'Before a colon, there must be …',
            options: ['a dependent clause', 'a complete sentence', 'a conjunction', 'a comma']
          },
          {
            label: '"She likes hiking, however, she dislikes camping" is an example of …',
            options: ['correct punctuation', 'a comma splice', 'a sentence fragment', 'a run-on with a colon error']
          }
        ],
        correctAnswers: ['independent clauses', 'a complete sentence', 'a comma splice'],
        hint1: 'Both sides of a semicolon must be able to stand alone.',
        hint2: 'The text before a colon must form a complete thought.',
        hint3: '"However" is a conjunctive adverb, not a FANBOYS conjunction.',
        explanation: 'Semicolons join independent clauses. Colons follow complete sentences. Using a comma before "however" instead of a semicolon creates a comma splice.'
      }
    },
    {
      id: 'act-pn2-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Passage Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The research revealed a surprising trend: students who slept more performed better on exams." Is the colon used correctly?',
            options: ['Yes — the colon introduces an explanation after a complete sentence', 'No — a semicolon should replace the colon', 'No — a comma should replace the colon', 'No — the colon should be removed entirely'],
            correctAnswer: 0,
            explanation: 'The clause before the colon ("The research revealed a surprising trend") is a complete sentence. The clause after explains the "surprising trend." The colon is correct.'
          },
          {
            question: '"The committee discussed the budget; and they voted to approve it." What is wrong with this sentence?',
            options: ['Nothing — the sentence is correct', 'The semicolon should be a comma (FANBOYS needs a comma, not a semicolon)', 'The semicolon should be a colon', '"And" should be removed'],
            correctAnswer: 1,
            explanation: 'When joining independent clauses with a FANBOYS conjunction ("and"), use a comma — not a semicolon. Correct: "The committee discussed the budget, and they voted to approve it."'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 3: Apostrophes ────────────────────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const actPunctuationPart3Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-pn3-intro',
      type: 'text' as const,
      content: `
# 🔤 Apostrophes

**Part 3 of 7 — Possessives, Contractions, Its vs. It's & Plural Possessives**

Apostrophe questions appear on virtually every ACT English section. They test two things: **possession** and **contractions**. The ACT's favorite trick is confusing possessive pronouns (which never use apostrophes) with contractions (which always do).

**Two Jobs for Apostrophes:**

| Job | Rule | Example |
|-----|------|---------|
| Possession | Add 's or ' | *the dog's bone, the dogs' bones* |
| Contraction | Replace missing letters | *don't = do not, it's = it is* |

**Critical Rule:** Possessive pronouns — *its, their, your, whose* — **NEVER** take apostrophes.
      `
    },
    {
      id: 'act-pn3-possessives',
      type: 'text' as const,
      content: `
## Possessives — Singular & Plural

**Singular Possessive — Add 's:**
- *the student's essay* (one student)
- *the boss's office* (one boss — yes, add 's even if the word ends in s)
- *James's car* (ACT follows the rule: always add 's for singular)

**Plural Possessive — Add ' after the s:**
- *the students' essays* (multiple students)
- *the teachers' lounge* (multiple teachers)

**Irregular Plurals — Add 's:**
- *the children's toys* (children is already plural)
- *the women's team*
- *the people's choice*

**Quick Decision Tree:**
1. Is the owner singular? → Add **'s** (*the cat's toy*)
2. Is the owner a regular plural (ends in s)? → Add **'** (*the cats' toys*)
3. Is the owner an irregular plural? → Add **'s** (*the children's toys*)

**ACT Trap:** The ACT will offer a plural noun with an apostrophe when no possession is intended.
- ❌ *The student's studied for hours.* (No possession — just a plural: *The students studied for hours.*)
      `
    },
    {
      id: 'act-pn3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Apostrophes — Choose Correctly** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence is correct? (A) The company released it\\'s annual report. (B) The company released its annual report.',
            options: ['Sentence A', 'Sentence B', 'Both are correct', 'Neither is correct'],
            correctAnswer: 1,
            explanation: '"Its" (no apostrophe) is the possessive pronoun. "It\\'s" means "it is." The sentence needs the possessive, so Sentence B is correct.'
          },
          {
            question: '"The three _____ performances were outstanding." Which option correctly fills the blank?',
            options: ["actor's", "actors'", "actors", "actor"],
            correctAnswer: 1,
            explanation: 'There are three actors (plural), and the performances belong to them. The plural possessive of "actors" is "actors\\'." '
          }
        ]
      }
    },
    {
      id: 'act-pn3-contractions',
      type: 'text' as const,
      content: `
## Contractions & Commonly Confused Pairs

**Common Contractions:**
- *it's = it is / it has*
- *they're = they are*
- *you're = you are*
- *who's = who is / who has*
- *there's = there is*

**Possessive Pronouns (NO Apostrophe):**
- *its* → *The dog wagged its tail.*
- *their* → *Their house is on the corner.*
- *your* → *Your grade improved.*
- *whose* → *Whose book is this?*

**The ACT's Big Three Confusion Pairs:**

| Contraction | Possessive | Test (Expand It) |
|-------------|-----------|-------------------|
| it's (it is) | its | *Does "it is" work?* |
| they're (they are) | their | *Does "they are" work?* |
| you're (you are) | your | *Does "you are" work?* |

**Strategy:** Every time you see an apostrophe in a pronoun on the ACT, try expanding it. If "it is" or "they are" doesn't make sense, remove the apostrophe.

**ACT Tip:** The ACT will almost never use the actual contraction in the correct answer. It strongly prefers the possessive pronoun. When in doubt, choose the version without the apostrophe.
      `
    },
    {
      id: 'act-pn3-input1',
      type: 'input-boxes' as const,
      content: `
**It's vs. Its — Type the Correct Word** ✏️

1) "The university announced ___ new admissions policy." — Type "its" or "it's."
2) "___ going to be a challenging semester." — Type "Its" or "It's."
3) "The cat cleaned ___ paws after dinner." — Type "its" or "it's."
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['its', "It's", 'its'],
        hint1: 'The policy belongs to the university — possessive, no apostrophe.',
        hint2: 'Expand it: "It is going to be…" — that works, so use the contraction.',
        hint3: 'The paws belong to the cat — possessive pronoun.',
        explanation: '1) Possessive "its" (the policy belongs to the university). 2) Contraction "It\\'s" = "It is." 3) Possessive "its" (the paws belong to the cat).'
      }
    },
    {
      id: 'act-pn3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quick-Check: Apostrophe Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Possessive pronouns (its, their, your) …',
            options: ['always use apostrophes', 'never use apostrophes', 'sometimes use apostrophes', 'use apostrophes only for emphasis']
          },
          {
            label: 'The plural possessive of "teachers" is …',
            options: ["teacher's", "teachers'", "teachers's", "teachers"]
          },
          {
            label: '"Who\\'s responsible?" uses an apostrophe because …',
            options: ["it shows possession", "it's a contraction of 'who is'", "it's a plural", "it follows a proper noun"]
          }
        ],
        correctAnswers: ['never use apostrophes', "teachers'", "it's a contraction of 'who is'"],
        hint1: 'Possessive pronouns are already possessive — they don\\'t need apostrophes.',
        hint2: '"Teachers" is a regular plural ending in s. Where does the apostrophe go?',
        hint3: 'Try expanding: "Who is responsible?" — does that work?',
        explanation: 'Possessive pronouns never take apostrophes. Regular plural possessives add an apostrophe after the s. "Who\\'s" is a contraction of "who is."'
      }
    },
    {
      id: 'act-pn3-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Passage Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The orchestra, known for it\\'s innovative performances, announced that they\\'re 2026 season will feature works by emerging composers." How many apostrophe errors are there?',
            options: ['Zero', 'One', 'Two', 'Three'],
            correctAnswer: 2,
            explanation: 'Two errors: "it\\'s" should be "its" (possessive — the performances belong to the orchestra) and "they\\'re" should be "their" (possessive — the season belongs to them). Both are possessive pronouns that should not have apostrophes.'
          },
          {
            question: '"Each of the student\\'s projects demonstrated weeks\\' worth of research." Which apostrophe usage is correct?',
            options: ['Both are correct', '"student\\'s" should be "students\\'" (multiple students)', '"weeks\\'" should be "week\\'s"', 'Both apostrophes should be removed'],
            correctAnswer: 1,
            explanation: '"Each of the students\\' projects" — "each" tells us there are multiple students whose projects are being discussed. The plural possessive "students\\'" is needed. "Weeks\\' worth" is correct as-is (plural possessive — the worth of multiple weeks).'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 4: Dashes & Parentheses ───────────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const actPunctuationPart4Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-pn4-intro',
      type: 'text' as const,
      content: `
# — Dashes & Parentheses

**Part 4 of 7 — Em Dashes for Emphasis, Parenthetical Asides & When to Use Which**

Dashes and parentheses both set off extra information in a sentence, but they create different effects. The ACT tests whether you know the rules for each — and whether you can keep them consistent.

**The Big Three Tools for Setting Off Information:**

| Tool | Effect | Example |
|------|--------|---------|
| Commas | Neutral, most common | *My cousin, a doctor, helped.* |
| Parentheses | De-emphasize / aside | *My cousin (a doctor) helped.* |
| Em dashes | Emphasize / dramatic pause | *My cousin — a doctor — helped.* |

**Critical ACT Rule:** When you use **two** dashes or **two** commas or **two** parentheses to set off information, you must use the **same mark on both sides**. You cannot mix them.
- ❌ *The results — which surprised everyone, were published Friday.*
- ✅ *The results — which surprised everyone — were published Friday.*
      `
    },
    {
      id: 'act-pn4-emdash',
      type: 'text' as const,
      content: `
## Em Dashes

**Use 1 — Set Off a Dramatic or Emphatic Aside:**
- *The discovery — one that would change the field forever — was published in a small journal.*
- The dashes emphasize the importance of the clause.

**Use 2 — Introduce an Explanation or List (Like a Colon):**
- *She had one priority — finishing the project on time.*
- *Three states — California, Texas, and Florida — have the largest populations.*

**Use 3 — Indicate a Sudden Break in Thought:**
- *I was about to leave when — wait, did you hear that?*

**The Pair Rule:** If the aside is in the **middle** of a sentence, you need dashes on **both sides**:
- ✅ *The mayor — beloved by residents — announced her retirement.*
- ❌ *The mayor — beloved by residents, announced her retirement.* (Mismatched punctuation!)

If the aside is at the **end** of a sentence, you only need one dash:
- ✅ *She had one dream — to become a scientist.*

**ACT Trap:** The ACT frequently offers one answer with paired dashes and another with mismatched punctuation (one dash + one comma). Always check that pairs match.
      `
    },
    {
      id: 'act-pn4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Dashes — Choose the Correct Version** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"The proposal — which had been debated for months, was finally approved." What is the error?',
            options: ['No error', 'Mismatched punctuation — needs a dash after "months" instead of a comma', 'The dash should be a comma', 'The entire clause should be removed'],
            correctAnswer: 1,
            explanation: 'The aside "which had been debated for months" must be closed with the same punctuation that opened it. Since a dash opens it, a dash must close it: "The proposal — which had been debated for months — was finally approved."'
          },
          {
            question: 'Which sentence correctly uses an em dash? (A) She wanted one thing — to win. (B) She wanted one thing; to win. (C) She wanted one thing, to win.',
            options: ['Sentence A', 'Sentence B', 'Sentence C', 'All are correct'],
            correctAnswer: 0,
            explanation: 'An em dash can introduce an explanation at the end of a sentence, similar to a colon. Sentence A is correct. A semicolon (B) requires an independent clause on both sides. A comma (C) creates a weak connection where emphasis is intended.'
          }
        ]
      }
    },
    {
      id: 'act-pn4-parentheses',
      type: 'text' as const,
      content: `
## Parentheses

Parentheses **de-emphasize** information — they tell the reader, "This is a side note."

**Use 1 — Supplementary Details:**
- *The study (conducted over three years) confirmed earlier findings.*
- *Marie Curie (1867–1934) won two Nobel Prizes.*

**Use 2 — Abbreviations or Acronyms:**
- *The Environmental Protection Agency (EPA) issued new guidelines.*

**Punctuation with Parentheses:**
- Periods and commas go **outside** the closing parenthesis when the parenthetical is part of a larger sentence:
  - ✅ *She passed the exam (with a perfect score), surprising everyone.*
  - ❌ *She passed the exam (with a perfect score,) surprising everyone.*
- If the entire sentence is in parentheses, the period goes **inside**:
  - ✅ *(She passed the exam with a perfect score.)*

**When to Use What — Decision Guide:**
- Need to **emphasize** the aside? → Em dashes
- Need to **de-emphasize** / add a side note? → Parentheses
- Neutral — the most common, default choice? → Commas

**ACT Tip:** The ACT rarely tests parentheses directly, but when it does, it tests whether you can maintain consistent pairing and proper punctuation placement.
      `
    },
    {
      id: 'act-pn4-input1',
      type: 'input-boxes' as const,
      content: `
**Identify the Correct Punctuation** ✏️

Type "dashes," "parentheses," or "commas" for the best choice in each sentence.

1) "The keynote speaker — a Nobel laureate ___ captivated the audience." — What should replace the blank to close the aside?
2) "The festival (held annually in October) ___ attracts visitors from across the country." — What punctuation, if any, goes in the blank?
3) "Three countries ___ France, Germany, and Italy ___ signed the agreement." — What paired punctuation best sets off this list in an emphatic way?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['dash', 'none', 'dashes'],
        hint1: 'The aside opened with a dash, so it must close with the same mark.',
        hint2: 'The parenthetical is already closed with a parenthesis — no extra punctuation is needed before the verb.',
        hint3: 'Setting off a list dramatically favors em dashes.',
        explanation: '1) A dash must close what a dash opens. 2) No extra punctuation — the closing parenthesis ends the aside. 3) Em dashes emphasize the list of countries.'
      }
    },
    {
      id: 'act-pn4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quick-Check: Dashes & Parentheses** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When an em dash opens an aside in the middle of a sentence, it must be closed with …',
            options: ['another em dash', 'a comma', 'a parenthesis', 'a semicolon']
          },
          {
            label: 'Parentheses are best used to …',
            options: ['emphasize important information', 'de-emphasize supplementary details', 'replace commas in all cases', 'introduce a list']
          },
          {
            label: 'Periods go ___ the closing parenthesis when the parenthetical is inside a larger sentence.',
            options: ['inside', 'outside', 'either inside or outside', 'before']
          }
        ],
        correctAnswers: ['another em dash', 'de-emphasize supplementary details', 'outside'],
        hint1: 'Matching pairs — open and close with the same punctuation mark.',
        hint2: 'Parentheses tell the reader this is a side note.',
        hint3: 'The period belongs to the larger sentence, not the parenthetical.',
        explanation: 'Dashes must pair with dashes. Parentheses de-emphasize. When part of a larger sentence, periods go outside the closing parenthesis.'
      }
    },
    {
      id: 'act-pn4-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Passage Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The architect — who had designed several award-winning buildings, unveiled her latest project at the conference." Which revision is correct?',
            options: ['No change needed', 'Replace the comma after "buildings" with an em dash', 'Replace the em dash with a comma', 'Remove both the dash and the comma'],
            correctAnswer: 1,
            explanation: 'The aside "who had designed several award-winning buildings" opens with an em dash but closes with a comma — a mismatch. It must close with an em dash: "The architect — who had designed several award-winning buildings — unveiled her latest project."'
          },
          {
            question: '"The CEO announced that the merger (originally planned for March) would be delayed, and that employees would receive updates — in the coming weeks." What change is needed?',
            options: ['Remove the dash before "in the coming weeks"', 'Replace the parentheses with dashes', 'Add a dash after "delayed"', 'No change needed'],
            correctAnswer: 0,
            explanation: '"In the coming weeks" is not a dramatic aside requiring a dash — it flows naturally from the sentence. Removing the dash creates a cleaner, correct sentence.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 5: End Punctuation & Quotation Marks ──────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const actPunctuationPart5Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-pn5-intro',
      type: 'text' as const,
      content: `
# 📌 End Punctuation & Quotation Marks

**Part 5 of 7 — Periods with Quotes, Question Marks & Exclamation Points**

End punctuation and quotation marks don't appear as often on the ACT as commas, but when they do, the rules are strict. Getting these right is easy — once you know the conventions.

**The Basics:**

| Mark | Use |
|------|-----|
| Period (.) | End a declarative or imperative sentence |
| Question mark (?) | End a direct question |
| Exclamation point (!) | End an exclamatory sentence (rare on the ACT) |

**ACT Approach:** The ACT strongly prefers a **neutral, academic tone**. This means periods are almost always preferred over exclamation points. If an answer choice uses an exclamation point, it's usually wrong.
      `
    },
    {
      id: 'act-pn5-quotes',
      type: 'text' as const,
      content: `
## Quotation Marks & Punctuation Placement

**Rule 1 — Periods and Commas Go INSIDE Quotation Marks (Always in American English):**
- ✅ *She said, "The experiment was a success."*
- ✅ *"The experiment was a success," she said.*
- ❌ *She said, "The experiment was a success".* (Period outside — wrong!)

**Rule 2 — Colons and Semicolons Go OUTSIDE Quotation Marks:**
- ✅ *He described the project as "groundbreaking"; others disagreed.*
- ✅ *She listed her "essentials": water, sunscreen, and a hat.*

**Rule 3 — Question Marks and Exclamation Points — It Depends:**
- If the **quote itself** is a question: *She asked, "Where is the library?"*
- If the **whole sentence** is a question: *Did she really say "I quit"?*
- If **both** are questions, use one question mark inside: *Did she ask, "Where is the library?"*

**Rule 4 — Titles of Short Works:**
Quotation marks enclose titles of short works (articles, poems, short stories, chapters):
- ✅ *She read "The Raven" by Edgar Allan Poe.*
- Longer works (books, films, newspapers) use italics, not quotes.

**ACT Tip:** On the ACT, periods and commas **always** go inside quotation marks. This is a hard rule — no exceptions in American English.
      `
    },
    {
      id: 'act-pn5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quotation Marks — Spot the Error** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence places the period correctly? (A) She called the plan "ambitious." (B) She called the plan "ambitious". (C) She called the plan \\"ambitious\\". ',
            options: ['Sentence A', 'Sentence B', 'Sentence C', 'All are correct'],
            correctAnswer: 0,
            explanation: 'In American English, periods always go inside quotation marks. Sentence A is correct.'
          },
          {
            question: '"Did the teacher really say \\"There will be no homework\\"?" Where should the question mark go?',
            options: ['Inside the quotation marks', 'Outside the quotation marks (as shown)', 'Both inside and outside', 'No question mark is needed'],
            correctAnswer: 1,
            explanation: 'The overall sentence is asking a question, but the quote itself is a statement. The question mark goes outside the quotation marks because it belongs to the larger sentence, not the quote.'
          }
        ]
      }
    },
    {
      id: 'act-pn5-endpunct',
      type: 'text' as const,
      content: `
## End Punctuation — Periods, Question Marks & Exclamation Points

**Periods — The Default:**
Most ACT passages use declarative sentences, so the period is the most common end mark. The ACT tests whether you can avoid creating:
- **Run-on sentences** (two sentences jammed together with no punctuation)
- **Sentence fragments** (ending a dependent clause with a period)

**Run-on:** ❌ *The experiment succeeded the team celebrated.*
**Fragment:** ❌ *Although the experiment succeeded.*
**Correct:** ✅ *The experiment succeeded. The team celebrated.*

**Question Marks:**
- Use for **direct** questions: *What were the results?*
- Do NOT use for **indirect** questions: ✅ *She asked what the results were.* (Period, not a question mark!)

**Exclamation Points:**
- Almost never correct on the ACT. Academic prose maintains a neutral tone.
- If you see an exclamation point in an answer choice, it's almost certainly wrong.

**ACT Tip:** When you see a period underlined, the ACT is testing whether a period is the right choice. Check: Is it a run-on? A fragment? Or a properly punctuated sentence?
      `
    },
    {
      id: 'act-pn5-input1',
      type: 'input-boxes' as const,
      content: `
**End Punctuation Practice** ✏️

What end punctuation mark should close each sentence? Type "period," "question mark," or "exclamation point."

1) "She wondered whether the results would be significant ___" — What goes in the blank?
2) "What factors contributed to the colony\\'s decline ___" — What goes in the blank?
3) "The researchers published their findings in a peer-reviewed journal ___" — What goes in the blank?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['period', 'question mark', 'period'],
        hint1: 'This is an indirect question ("She wondered whether…") — not a direct question.',
        hint2: 'This is a direct question — it begins with "What."',
        hint3: 'This is a standard declarative sentence.',
        explanation: '1) Indirect questions end with a period. 2) Direct questions end with a question mark. 3) Declarative sentences end with a period.'
      }
    },
    {
      id: 'act-pn5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quick-Check: End Punctuation & Quotes** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In American English, periods and commas go ___ quotation marks.',
            options: ['inside', 'outside', 'either inside or outside', 'before']
          },
          {
            label: 'Indirect questions end with a …',
            options: ['question mark', 'period', 'semicolon', 'comma']
          },
          {
            label: 'On the ACT, exclamation points are …',
            options: ['frequently correct', 'almost never correct', 'used for emphasis', 'required after interjections']
          }
        ],
        correctAnswers: ['inside', 'period', 'almost never correct'],
        hint1: 'American English always places periods and commas inside the closing quotation mark.',
        hint2: 'Think about it: "She asked whether…" — is that a direct question?',
        hint3: 'The ACT prefers an academic, neutral tone.',
        explanation: 'Periods and commas go inside quotes in American English. Indirect questions end with periods. Exclamation points are almost never correct on the ACT.'
      }
    },
    {
      id: 'act-pn5-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Passage Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The journalist asked whether the governor planned to seek re-election?" What change, if any, is needed?',
            options: ['No change', 'Replace the question mark with a period', 'Add quotation marks around the question', 'Replace "whether" with "if" and keep the question mark'],
            correctAnswer: 1,
            explanation: 'This is an indirect question (reported speech using "whether"). Indirect questions end with a period, not a question mark.'
          },
          {
            question: '"The reviewer described the film as \\"a masterpiece\\"; however, audiences were divided." Is the semicolon placed correctly?',
            options: ['Yes — semicolons go outside quotation marks', 'No — it should be inside the quotation marks', 'No — it should be a comma', 'No — it should be a colon'],
            correctAnswer: 0,
            explanation: 'Semicolons always go outside quotation marks in American English. The semicolon is correctly placed after the closing quotation mark.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 6: Common ACT Punctuation Traps ───────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const actPunctuationPart6Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-pn6-intro',
      type: 'text' as const,
      content: `
# ⚠️ Common ACT Punctuation Traps

**Part 6 of 7 — Unnecessary Commas, Comma Splices & Run-On Sentences**

The ACT isn't just testing whether you know where to **put** punctuation — it's also testing whether you know where to **leave it out**. Many of the trickiest ACT questions involve punctuation that seems right but is actually wrong.

**The Three Most Common Traps:**

| Trap | What It Looks Like |
|------|--------------------|
| Unnecessary comma | A comma separating things that shouldn't be separated |
| Comma splice | Two independent clauses joined by only a comma |
| Run-on sentence | Two independent clauses with no punctuation at all |

**Why These Are Tricky:** When you read them aloud, they might "sound" okay. The ACT is testing your knowledge of the rules, not your ear.
      `
    },
    {
      id: 'act-pn6-unnecessary',
      type: 'text' as const,
      content: `
## Unnecessary Commas

**Trap 1 — Comma Between Subject and Verb:**
- ❌ *The students in the advanced class, performed exceptionally well.*
- ✅ *The students in the advanced class performed exceptionally well.*
- No comma should separate a subject from its verb.

**Trap 2 — Comma Between Verb and Object:**
- ❌ *She discovered, that the results were inconclusive.*
- ✅ *She discovered that the results were inconclusive.*
- No comma before "that" when it introduces an essential clause.

**Trap 3 — Comma Before/After a Preposition:**
- ❌ *The results were consistent with, the earlier findings.*
- ✅ *The results were consistent with the earlier findings.*

**Trap 4 — Comma in a Compound Predicate (Two Verbs, One Subject):**
- ❌ *She reviewed the data, and published her results.*
- ✅ *She reviewed the data and published her results.*
- This is NOT a compound sentence — there's only one subject. No comma before "and."

**Trap 5 — Comma Between Two Items (Not a Series):**
- ❌ *He studied math, and science.*
- ✅ *He studied math and science.*

**ACT Strategy:** When you see a comma in an underlined section, ask: "What is this comma separating?" If it's separating a subject from its verb, a verb from its object, or two items that don't form a series, it's unnecessary.
      `
    },
    {
      id: 'act-pn6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Unnecessary Commas — Keep or Delete?** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"The professor who teaches biology, is retiring at the end of the year." Should the comma stay or go?',
            options: ['Keep the comma — it separates a clause', 'Delete the comma — it separates the subject from the verb', 'Replace the comma with a semicolon', 'Add another comma before "who"'],
            correctAnswer: 1,
            explanation: 'The comma incorrectly separates the subject ("The professor who teaches biology") from the verb ("is retiring"). "Who teaches biology" is an essential clause — no commas needed.'
          },
          {
            question: '"The team analyzed the results, and then presented their findings to the board." Is the comma correct?',
            options: ['Yes — it separates two independent clauses', 'No — this is a compound predicate (one subject, two verbs)', 'Yes — commas always go before "and"', 'No — a semicolon is needed instead'],
            correctAnswer: 1,
            explanation: 'There is only one subject ("The team") with two actions ("analyzed" and "presented"). This is a compound predicate, not a compound sentence. No comma is needed before "and."'
          }
        ]
      }
    },
    {
      id: 'act-pn6-splices',
      type: 'text' as const,
      content: `
## Comma Splices & Run-On Sentences

**Comma Splice:** Two independent clauses joined by **only a comma**.
- ❌ *The results were surprising, the team decided to repeat the experiment.*
- This is WRONG because both halves are complete sentences.

**Run-On (Fused Sentence):** Two independent clauses with **no punctuation** at all.
- ❌ *The results were surprising the team decided to repeat the experiment.*

**Five Ways to Fix a Comma Splice or Run-On:**

| Fix | Example |
|-----|---------|
| Period | *The results were surprising. The team decided…* |
| Semicolon | *The results were surprising; the team decided…* |
| Comma + FANBOYS | *The results were surprising, so the team decided…* |
| Subordinating conjunction | *Because the results were surprising, the team decided…* |
| Em dash | *The results were surprising — the team decided…* |

**ACT Trap — "However" Is NOT a FANBOYS:**
- ❌ *The sky was clear, however, rain was forecast.* (Comma splice!)
- ✅ *The sky was clear; however, rain was forecast.*
- Words like *however, therefore, moreover, consequently, furthermore* are conjunctive adverbs — they need a semicolon, not a comma.

**ACT Strategy:** When two complete thoughts appear in the same sentence, check the punctuation between them. A comma alone is never enough.
      `
    },
    {
      id: 'act-pn6-input1',
      type: 'input-boxes' as const,
      content: `
**Fix the Error** ✏️

Identify the punctuation error in each sentence. Type "comma splice," "unnecessary comma," or "run-on."

1) "The museum opened in 1985, it has since become one of the city\\'s most popular attractions."
2) "The researchers conducted a thorough analysis, and concluded that the data supported the hypothesis."
3) "The concert was sold out fans lined up for hours hoping to get standing-room tickets."
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['comma splice', 'unnecessary comma', 'run-on'],
        hint1: 'Two complete sentences separated by only a comma.',
        hint2: 'Is this a compound sentence (two subjects) or a compound predicate (one subject, two verbs)?',
        hint3: 'Where does one thought end and the next begin? What punctuation is between them?',
        explanation: '1) Comma splice — two independent clauses joined by just a comma. 2) Unnecessary comma — "The researchers" is the single subject with two verbs ("conducted" and "concluded"), forming a compound predicate. 3) Run-on — two independent clauses with no punctuation between them.'
      }
    },
    {
      id: 'act-pn6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quick-Check: Punctuation Traps** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A comma between a subject and its verb is …',
            options: ['always correct', 'sometimes correct', 'never correct', 'correct only with long subjects']
          },
          {
            label: 'Two independent clauses joined by only a comma is called …',
            options: ['a compound sentence', 'a comma splice', 'a complex sentence', 'a run-on sentence']
          },
          {
            label: '"However" is a ___, not a FANBOYS conjunction.',
            options: ['subordinating conjunction', 'conjunctive adverb', 'preposition', 'relative pronoun']
          }
        ],
        correctAnswers: ['never correct', 'a comma splice', 'conjunctive adverb'],
        hint1: 'Nothing should interrupt the subject-verb connection.',
        hint2: 'A comma alone can\\'t join two independent clauses.',
        hint3: 'Words like "however" and "therefore" belong to a special category.',
        explanation: 'Never place a comma between subject and verb. Two independent clauses joined by only a comma = comma splice. "However" is a conjunctive adverb, requiring a semicolon before it.'
      }
    },
    {
      id: 'act-pn6-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Passage Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The new policy was controversial, many employees felt it was unfair, however, management argued it was necessary for efficiency." How should this sentence be punctuated?',
            options: ['No change', 'controversial. Many employees felt it was unfair; however, management argued…', 'controversial; many employees felt it was unfair, however management argued…', 'controversial, many employees felt it was unfair. However management argued…'],
            correctAnswer: 1,
            explanation: 'The original contains two comma splices. Fix 1: Period after "controversial" (separates independent clauses). Fix 2: Semicolon before "however" (conjunctive adverb rule). The correct version: "The new policy was controversial. Many employees felt it was unfair; however, management argued it was necessary for efficiency."'
          },
          {
            question: '"The lead actress, delivered a powerful performance that moved the audience to tears." What change is needed?',
            options: ['No change', 'Delete the comma after "actress"', 'Add a comma after "performance"', 'Replace the comma with a dash'],
            correctAnswer: 1,
            explanation: 'The comma incorrectly separates the subject ("The lead actress") from the verb ("delivered"). No comma should ever come between a subject and its verb.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 7: Review & Mixed Practice ────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
export const actPunctuationPart7Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-pn7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed Practice

**Part 7 of 7 — Punctuation Rules Cheat Sheet & Mixed ACT-Style Questions**

You've now covered every major punctuation rule tested on the ACT English section. This final lesson reviews the key rules and challenges you with mixed-format questions that mimic real ACT passages.

**ACT English Punctuation — Master Cheat Sheet:**

| Rule | Key Point |
|------|-----------|
| **Commas in a series** | Use commas between 3+ items, including before the conjunction |
| **Introductory elements** | Comma after introductory words, phrases, or clauses |
| **Nonessential clauses** | Commas on both sides (which → commas; that → no commas) |
| **Coordinate adjectives** | Comma between adjectives if they pass the swap/and test |
| **Semicolons** | Join two independent clauses; precede conjunctive adverbs |
| **Colons** | Follow a complete sentence; introduce a list or explanation |
| **Apostrophes** | Possessives (dog's) vs. contractions (it's = it is) |
| **Possessive pronouns** | NEVER use apostrophes (its, their, your, whose) |
| **Dashes** | Emphasize asides; pairs must match |
| **Parentheses** | De-emphasize asides; punctuation goes outside |
| **Periods & commas with quotes** | Always inside quotation marks (American English) |
| **Unnecessary commas** | Never between subject-verb or verb-object |
| **Comma splices** | A comma alone can't join two independent clauses |
      `
    },
    {
      id: 'act-pn7-strategy',
      type: 'text' as const,
      content: `
## ACT Punctuation Strategy Guide

**Step 1 — Identify the Question Type:**
When you see punctuation underlined, categorize the question:
- Is it testing **commas** (series, introductory, nonessential)?
- Is it testing **semicolons/colons** (independent clauses)?
- Is it testing **apostrophes** (possession vs. contraction)?
- Is it testing **matching pairs** (dashes, parentheses)?
- Is it asking you to **remove unnecessary punctuation**?

**Step 2 — Apply the Specific Rule:**
Each question type has a clear rule. Don't go by what "sounds right" — apply the rule mechanically.

**Step 3 — Watch for the Trap Answer:**
The ACT often includes one answer that "sounds" correct but violates a rule. Common traps:
- Comma before "and" in a two-item construction
- Semicolon after a dependent clause
- Apostrophe in a possessive pronoun
- A dash opening an aside with a comma closing it

**The "No Change" Reality:**
About 25% of ACT English answers are "No Change." Don't be afraid to choose it if the original is correct — but always verify by checking every rule that applies.

**Time Management:**
Punctuation questions are usually the fastest to answer on the ACT. You should spend about 30 seconds per punctuation question — identify the rule, apply it, and move on.
      `
    },
    {
      id: 'act-pn7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Identify the Rule** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"The artist\\'s latest exhibition, which features paintings, sculptures, and mixed-media installations, opens next Friday." Is this sentence correctly punctuated?',
            options: ['Yes — commas correctly set off the nonessential clause and items in a series', 'No — the commas around "which…installations" should be dashes', 'No — the semicolons should replace the commas in the series', 'No — the comma after "installations" is unnecessary'],
            correctAnswer: 0,
            explanation: 'The sentence is correct. The nonessential clause "which features paintings, sculptures, and mixed-media installations" is properly set off with commas. The items in the list within the clause are also correctly separated by commas.'
          },
          {
            question: '"Dr. Hernandez — a renowned cardiologist and author, has published over fifty peer-reviewed articles." What correction is needed?',
            options: ['No change', 'Replace the comma after "author" with an em dash', 'Replace the em dash with a comma', 'Remove both the dash and the comma'],
            correctAnswer: 1,
            explanation: 'The aside "a renowned cardiologist and author" opens with an em dash but closes with a comma — mismatched pair. Replace the comma with an em dash: "Dr. Hernandez — a renowned cardiologist and author — has published…"'
          }
        ]
      }
    },
    {
      id: 'act-pn7-passage',
      type: 'text' as const,
      content: `
## Mixed Practice — Mini Passage

Read the following passage and consider the punctuation at each numbered point:

*The Great Barrier Reef [1] which stretches over 1,400 miles along Australia\\'s northeastern coast [2] is the world\\'s largest coral reef system. Scientists have documented its decline over the past several decades [3] rising ocean temperatures, pollution, and overfishing have all contributed to the damage. Despite these challenges [4] conservation efforts have shown promising results [5] researchers recently reported that coral coverage in some areas has increased for the first time in years.*

**Correct punctuation at each point:**
- **[1]** Comma — opens nonessential clause
- **[2]** Comma — closes nonessential clause
- **[3]** Period or semicolon — two independent clauses (comma here = comma splice)
- **[4]** Comma — after introductory phrase ("Despite these challenges")
- **[5]** Period, semicolon, or colon — two independent clauses (the second explains the first, so a colon also works)

This passage tests five rules in a single paragraph — a realistic representation of how the ACT combines punctuation concepts.
      `
    },
    {
      id: 'act-pn7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice — Name the Error** ✏️

Identify the specific punctuation error in each sentence.

1) "The new library — designed by a world-famous architect, will open to the public in September."
2) "Its important to review you\\'re notes before the exam begins."
3) "The coach praised the players hard work, and encouraged them to keep practicing, and studying film."
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['mismatched dashes', 'apostrophe errors', 'unnecessary commas'],
        hint1: 'What opened the aside? What closed it? Do they match?',
        hint2: 'Check each apostrophe: should "Its" have one? Should "you\\'re" keep its?',
        hint3: 'How many items are in this "list"? Does a compound predicate need commas?',
        explanation: '1) The dash opens the aside but a comma closes it — mismatched pair (needs a dash before "will"). 2) "Its" should be "It\\'s" (contraction: "It is important") and "you\\'re" should be "your" (possessive: "your notes"). 3) Two unnecessary commas: "players\\'" needs an apostrophe instead of a comma issue, and the comma before "and studying" breaks a two-item compound.'
      }
    },
    {
      id: 'act-pn7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Final Check: Master Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A comma splice can be fixed by using …',
            options: ['a period, semicolon, or comma + FANBOYS', 'only a period', 'only a semicolon', 'adding another comma']
          },
          {
            label: 'On the ACT, "which" clauses are usually …',
            options: ['essential — no commas', 'nonessential — set off with commas', 'followed by a colon', 'preceded by a semicolon']
          },
          {
            label: 'Possessive pronouns (its, their, your) take …',
            options: ['an apostrophe', 'no apostrophe', 'an apostrophe only for emphasis', 'an apostrophe in formal writing']
          }
        ],
        correctAnswers: ['a period, semicolon, or comma + FANBOYS', 'nonessential — set off with commas', 'no apostrophe'],
        hint1: 'Multiple strategies can fix a comma splice — the key is separating or properly joining the clauses.',
        hint2: '"Which" introduces extra information that is usually nonessential.',
        hint3: 'Possessive pronouns are already possessive — no apostrophe needed.',
        explanation: 'Comma splices can be fixed with a period, semicolon, or comma + FANBOYS. "Which" clauses are typically nonessential and need commas. Possessive pronouns never take apostrophes.'
      }
    },
    {
      id: 'act-pn7-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Mixed Practice — Final Challenge** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The committee — after months of deliberation — released its report, it recommended sweeping changes to the district\\'s transportation infrastructure." What is the primary punctuation error?',
            options: ['The dashes should be commas', 'Comma splice after "report"', '"Its" should be "it\\'s"', 'The apostrophe in "district\\'s" is wrong'],
            correctAnswer: 1,
            explanation: 'The comma after "report" creates a comma splice — two independent clauses joined by only a comma. Fix: "…released its report. It recommended…" or "…released its report; it recommended…" The dashes are correctly paired, "its" is correctly possessive, and "district\\'s" correctly shows possession.'
          },
          {
            question: '"Although the researchers hypothesized that the treatment would be effective, the clinical trial\\'s results; however, suggested that further testing was needed before the drug could be approved." What change is needed?',
            options: ['No change', 'Replace the semicolon before "however" with a comma', 'Remove the comma after "effective" and the semicolons around "however"', 'Replace the semicolon after "results" with a comma, and keep the comma after "however"'],
            correctAnswer: 3,
            explanation: 'The clause from "Although" to "effective" is a full introductory dependent clause (comma is correct). "However" here is an interrupter within a single independent clause — not joining two independent clauses — so it should be set off with commas, not semicolons. Correct: "…the clinical trial\\'s results, however, suggested…"'
          }
        ]
      }
    }
  ]
};
"""))


# ── Main ────────────────────────────────────────────────────────────────────
def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Generating ACT English Punctuation lessons …")
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
