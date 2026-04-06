export const precalcConicsPart3Data = {
  topicSlug: 'conic-sections-precalc',
  sections: [
    {
      id: 'precalc-conic-sections-precalc-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Conic Sections: Ellipses and major/minor axes
      
      **Part 3 of 7**
      
      This part focuses on tracking orbital approximations with ellipses. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **ellipse**: set of points whose distances to two foci sum to a constant
      - **hyperbola**: set of points whose distances to two foci differ by a constant
      - **vertex**: turning point or endpoint on a principal axis
      
      
      ### Worked Example
      Part 3 uses direct precalculus notation to move from structure to computation.
      
      Start with a model statement, substitute known values, and simplify step by step using exact form first.
      When needed, convert to decimals only after the symbolic setup is complete.
      `
    },
    {
      id: 'precalc-conic-sections-precalc-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of ellipse.',
            options: [
              'set of points whose distances to two foci differ by a constant',
              'set of points whose distances to two foci sum to a constant',
              'turning point or endpoint on a principal axis',
              'reference point used in geometric definitions of conics'
            ],
            correctAnswer: 1,
            explanation: 'ellipse is defined as: set of points whose distances to two foci sum to a constant.'
          },
          {
            question: 'In tracking orbital approximations with ellipses, which expression is the best starting model?',
            options: [
              '$\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$',
              '$(x-h)^2 + (y-k)^2 = r^2$',
              '$(x-h)^2 = 4p(y-k)$',
              '$\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1$'
            ],
            correctAnswer: 0,
            explanation: 'Use $\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-conic-sections-precalc-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Ellipse | $\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$ | sum-of-distances relation |
      | Hyperbola | $\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1$ | difference-of-distances relation |
      | Parabola (vertical) | $(x-h)^2 = 4p(y-k)$ | focus/directrix geometry |
      | Circle | $(x-h)^2 + (y-k)^2 = r^2$ | center-radius modeling |
      
      ### Common pitfalls
      - A parabola has one focus, while ellipse and hyperbola have two.
      - Do not infer the center by reading signs without reversing them in $(x-h)$ and $(y-k)$.
      - For ellipses and hyperbolas, identify the positive term before choosing major axis direction.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-conic-sections-precalc-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — Conic Computations**
      
      Provide exact values when possible.
      
      1) For $(x-1)^2 = 8(y+2)$, find $p$ in $4p=8$.
      2) For $(x-3)^2 + (y+1)^2 = 25$, find the radius.
      3) For $
      rac{x^2}{25}+
      rac{y^2}{9}=1$, compute $c$ where $c^2=a^2-b^2$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '5', '4'],
        hint1: 'Match coefficients in $(x-h)^2=4p(y-k)$.',
        hint2: 'Use $r=\\sqrt{r^2}$ from circle standard form.',
        hint3: 'For the ellipse, use $a=5$, $b=3$, then $c=\\sqrt{25-9}$.',
        explanation: 'The values are $p=2$, radius from $r^2$ in standard form, and $c=4$ from focal relation.'
      }
    },
    {
      id: 'precalc-conic-sections-precalc-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'ellipse',
            options: ['reference point used in geometric definitions of conics', 'set of points whose distances to two foci sum to a constant', 'turning point or endpoint on a principal axis', 'set of points whose distances to two foci differ by a constant']
          },
          {
            label: 'hyperbola',
            options: ['line used with a focus to define a parabola', 'set of points whose distances to two foci differ by a constant', 'reference point used in geometric definitions of conics', 'turning point or endpoint on a principal axis']
          },
          {
            label: 'vertex',
            options: ['ratio that describes how stretched a conic is', 'reference point used in geometric definitions of conics', 'turning point or endpoint on a principal axis', 'line used with a focus to define a parabola']
          }
        ],
        correctAnswers: ['set of points whose distances to two foci sum to a constant', 'set of points whose distances to two foci differ by a constant', 'turning point or endpoint on a principal axis'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: ellipse, hyperbola, and vertex align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-conic-sections-precalc-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### Strategy: graphing, calculator, and exam tactics
      
      **Graphing tactics**
      - Sketch anchor points or intercept behavior before detailed algebra.
      - Use symmetry, domain limits, and asymptotes to verify shape quickly.
      
      **Calculator tactics**
      - Confirm angle mode before trig operations.
      - Store intermediate values to avoid rounded drift.
      - Use table mode to test reasonableness around key inputs.
      
      **Exam tactics**
      - Translate words to symbols first, then choose the matching formula family.
      - Eliminate options that violate domain or structure.
      - If two choices are close, substitute back into the original relationship.
      
      Tie each step to ellipse, hyperbola, and vertex so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-conic-sections-precalc-p3-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is tracking orbital approximations with ellipses. Which term best anchors the next reasoning step if the key idea is: reference point used in geometric definitions of conics?',
            options: [
              'focus',
              'hyperbola',
              'ellipse',
              'vertex'
            ],
            correctAnswer: 0,
            explanation: 'focus matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed conic sections prompt. Which term best anchors the next reasoning step if the key idea is: line used with a focus to define a parabola?',
            options: [
              'directrix',
              'eccentricity',
              'focus',
              'vertex'
            ],
            correctAnswer: 0,
            explanation: 'directrix matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
