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
