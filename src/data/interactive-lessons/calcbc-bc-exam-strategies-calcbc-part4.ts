export const calcbcExamStrategyPart4Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'calcbcexamstrategy-p4-intro',
      type: 'text' as const,
      content: `
# Bc Exam Strategies

**Part 4 of 7 — Graphs and Interpretation**

This lesson is built to match the interactive gold-standard format: concise theory, worked examples, and SAT/AP-style practice.

## Key Ideas

- Identify the governing concept before computing.
- Keep algebra organized line-by-line.
- Use units and interpretation checks at the end.

## Formula Snapshot

When appropriate, use:

$$
\\text{Rate of Change} = \\frac{\Delta y}{\Delta x},
\quad
\\text{Average Value} = \\frac{1}{b-a}\int_a^b f(x)\,dx
$$

and interpret what the final value means in context.
      `
    },
    {
      id: 'calcbcexamstrategy-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which approach is most reliable when solving a multi-step calculus problem under time pressure?',
            options: [
              'Do mental math and skip writing steps',
              'Write structured steps and verify the final interpretation',
              'Start with answer choices and guess quickly',
              'Memorize only one formula and apply it everywhere'
            ],
            correctAnswer: 1,
            explanation: 'Structured steps reduce errors and make it easier to catch sign mistakes, domain errors, and interpretation issues.'
          },
          {
            question: 'A result has correct algebra but incorrect units. What is most likely true?',
            options: [
              'The result is still fully correct',
              'Units never matter in AP/SAT-style problems',
              'The setup or interpretation step is flawed',
              'Only graphing questions require units'
            ],
            correctAnswer: 2,
            explanation: 'Incorrect units usually indicate a setup mismatch or a misinterpreted quantity (rate vs amount, etc.).'
          }
        ]
      }
    },
    {
      id: 'calcbcexamstrategy-p4-example',
      type: 'text' as const,
      content: `
## Worked Example

Suppose a model is $f(x)=x^2-4x+3$ on $[0,4]$.

1. **Evaluate key values:**
   $f(0)=3$, $f(2)=-1$, $f(4)=3$.
2. **Average rate of change** from 0 to 4:
   $$
   \\frac{f(4)-f(0)}{4-0} = \\frac{3-3}{4} = 0
   $$
3. **Interpretation:** symmetry can produce zero average change even when the function varies in between.

### Common Trap

Students often report only the numeric value and skip interpretation. On AP-style items, interpretation can be required for full credit.
      `
    },
    {
      id: 'calcbcexamstrategy-p4-inputs',
      type: 'input-boxes' as const,
      content: `
**Compute and enter exact values when possible.**

1) For $g(x)=3x-5$, compute $g(6)$.

2) For $h(x)=x^2$, compute average rate of change on $[1,5]$.

3) If $p(x)=2x+1$, solve $p(x)=11$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['13', '6', '5'],
        hint1: 'Substitute x = 6 directly into 3x - 5.',
        hint2: 'Use (h(5)-h(1))/(5-1).',
        hint3: 'Set 2x+1=11 and isolate x.',
        explanation: '1) 3(6)-5=13. 2) (25-1)/4=6. 3) 2x=10 so x=5.'
      }
    },
    {
      id: 'calcbcexamstrategy-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each prompt to the best strategy.**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Question asks for average rate of change on [a,b]',
            options: ['Use difference quotient', 'Use product rule', 'Use chain rule']
          },
          {
            label: 'Question asks for total accumulated change from a to b',
            options: ['Use definite integral', 'Use midpoint only', 'Use slope at one point']
          },
          {
            label: 'Question asks for instantaneous rate at x=c',
            options: ['Use derivative at c', 'Use area formula', 'Use endpoint average']
          }
        ],
        correctAnswers: ['Use difference quotient', 'Use definite integral', 'Use derivative at c'],
        hint1: 'Average rate uses two function values.',
        hint2: 'Accumulation over interval is area/net change.',
        hint3: 'Instantaneous rate = tangent slope.',
        explanation: 'These mappings separate three commonly-confused prompts: average change, accumulated change, and instantaneous change.'
      }
    },
    {
      id: 'calcbcexamstrategy-p4-strategy',
      type: 'text' as const,
      content: `
## Exam Strategy Focus

For **Graphs and Interpretation**, use this checklist:

1. Translate the question into a target quantity.
2. Choose the smallest correct method.
3. Compute carefully with clean algebra.
4. Interpret in sentence form.

If you finish early, do a 10-second validation: sign, magnitude, and units.
      `
    },
    {
      id: 'calcbcexamstrategy-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**AP/SAT-Style Wrap-Up**
      `,
      exercise: {
        questions: [
          {
            question: 'A student gets a negative value for a quantity that represents area. Best immediate action?',
            options: [
              'Keep it negative because calculators are always right',
              'Recheck setup and use absolute value if question asks geometric area',
              'Round heavily until positive',
              'Ignore and move on'
            ],
            correctAnswer: 1,
            explanation: 'Signed integrals can be negative, but geometric area is nonnegative unless explicitly stated otherwise.'
          },
          {
            question: 'Which habit most improves reliability on free-response and multi-step questions?',
            options: [
              'Skipping units to save time',
              'Combining all algebra into one line',
              'Annotating each step with what it computes',
              'Only checking the final digit'
            ],
            correctAnswer: 2,
            explanation: 'Step annotations reduce conceptual drift and make error detection much faster under test conditions.'
          }
        ]
      }
    }
  ]
}
