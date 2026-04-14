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

[1] In recent years, urban farming has gained popularity in cities around the world. [2] Vacant lots, rooftops, and even abandoned buildings \[A\] **has been** transformed into productive gardens. [3] \[B\] **However,** these urban farms provide far more than fresh produce. [4] They create jobs, build community, and \[C\] **gives residents a sense of** pride and purpose.

[5] One of the most successful examples is the Growing Power project in Milwaukee, Wisconsin. [6] Founded by Will Allen in 1993, the organisation \[D\] **turned a vacant two-acre lot into a thriving farm that produced vegetables, fish, and livestock year-round.** [7] \[E\] **[The writer is considering adding: "Will Allen was a former professional basketball player."]** [8] Allen's approach demonstrated that even small urban spaces could yield a surprising amount of food.

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
            explanation: 'Sentence [3] doesn\'t contrast with sentence [2] — it EXPANDS on the idea that urban farms are valuable. "In fact," signals that what follows goes further than the previous claim.'
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
            options: ['ignore it — deleting is too risky', 'seriously consider it — it\'s correct 30–40% of the time', 'always pick it — shorter is better', 'only pick it for the last question']
          },
          {
            label: 'The best reading strategy for ACT English is …',
            options: ['skim the whole passage, then answer questions', 'read as you go — answer each question when you reach the underline', 'read backwards to check grammar', 'only read the underlined portions']
          }
        ],
        correctAnswers: ['identify the error type (verb, pronoun, punctuation, etc.)', 'seriously consider it — it\'s correct 30–40% of the time', 'read as you go — answer each question when you reach the underline'],
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
