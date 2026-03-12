export const precalcLawSinesCosinesPart3Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'precalc-law-of-sines-cosines-precalc-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Law of Sines and Cosines: Ambiguous SSA case
      
      **Part 3 of 7**
      
      This part focuses on analyzing whether SSA has 0, 1, or 2 triangles. Keep notation precise and connect each symbolic step to geometric or functional meaning.
      
      ### Core definitions
      - **included angle**: angle between two known sides
      - **SSA ambiguity**: data set that may produce two, one, or zero triangles
      - **triangle area**: can be found with two sides and included angle
      
      
      ### Worked Example
      Given $a=8$, $b=6$, and included angle $C=60^\circ$, find $c$.
      
      $$c^2 = a^2+b^2-2ab\cos C = 8^2+6^2-2(8)(6)\cos 60^\circ = 52$$
      
      So $c=\sqrt{52}=2\sqrt{13}$. This setup uses side-side-angle data with the included angle, so the Law of Cosines is the clean choice.
      `
    },
    {
      id: 'precalc-law-of-sines-cosines-precalc-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Multiple-choice check (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the most accurate definition of included angle.',
            options: [
              'data set that may produce two, one, or zero triangles',
              'angle between two known sides',
              'direction measured from north or east references',
              'can be found with two sides and included angle'
            ],
            correctAnswer: 1,
            explanation: 'included angle is defined as: angle between two known sides.'
          },
          {
            question: 'In analyzing whether SSA has 0, 1, or 2 triangles, which expression is the best starting model?',
            options: [
              '$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$',
              '$K=\\frac12 ab\\sin C$',
              '$c^2=a^2+b^2-2ab\\cos C$',
              '$A+B+C=180^\\circ$'
            ],
            correctAnswer: 1,
            explanation: 'Use $K=\\frac12 ab\\sin C$ first, then substitute known quantities from the prompt.'
          }
        ]
      }
    },
    {
      id: 'precalc-law-of-sines-cosines-precalc-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive: formulas and decision rules
      
      Use this table to pick the right expression before computing.
      
      | Tool | Formula | Best use |
      |---|---|---|
      | Area formula | $K=\frac12 ab\sin C$ | two sides + included angle |
      | Angle sum | $A+B+C=180^\circ$ | triangle closure check |
      | Law of Sines | $\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}$ | AAS/ASA/SSA contexts |
      | Law of Cosines | $c^2=a^2+b^2-2ab\cos C$ | SAS/SSS contexts |
      
      ### Common pitfalls
      - Carry angle mode consistency (degrees vs radians) on calculators.
      - Do not use the Law of Sines first when only sides are known.
      - SSA can create a second valid triangle; test geometry constraints.
      
      ### Precision checks
      1. Identify givens and unknowns before selecting a formula.
      2. Keep exact values through symbolic simplification when possible.
      3. Verify units, angle mode, or domain constraints before finalizing.
      `
    },
    {
      id: 'precalc-law-of-sines-cosines-precalc-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — Non-Right Triangles**
      
      1) In a triangle, $a=10$, $A=30^\circ$, $B=30^\circ$. Find $b$.
      2) If $a=6$, $b=8$, and included angle $C=90^\circ$, find $c$.
      3) Compute area with $a=6$, $b=10$, $C=30^\circ$ using $K=
      rac12 ab\sin C$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '10', '15'],
        hint1: 'Equal opposite angles imply equal opposite sides via Law of Sines.',
        hint2: 'Law of Cosines reduces to Pythagorean form when $C=90^\\circ$.',
        hint3: 'Substitute directly into $\\rac12 ab\\sin C$.',
        explanation: 'Symmetry gives $b=10$, cosine law gives $c=10$, and area evaluates to 15.'
      }
    },
    {
      id: 'precalc-law-of-sines-cosines-precalc-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown-select practice (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'included angle',
            options: ['data set that may produce two, one, or zero triangles', 'direction measured from north or east references', 'can be found with two sides and included angle', 'angle between two known sides']
          },
          {
            label: 'SSA ambiguity',
            options: ['triangle requiring generalized trig methods', 'can be found with two sides and included angle', 'data set that may produce two, one, or zero triangles', 'direction measured from north or east references']
          },
          {
            label: 'triangle area',
            options: ['triangle requiring generalized trig methods', 'can be found with two sides and included angle', 'direction measured from north or east references', 'verifying solved lengths and angles agree']
          }
        ],
        correctAnswers: ['angle between two known sides', 'data set that may produce two, one, or zero triangles', 'can be found with two sides and included angle'],
        hint1: 'Match each term to the full definition, not just a keyword.',
        hint2: 'Use elimination by checking whether each definition captures the right dependency.',
        hint3: 'Read the label and option together as one complete mathematical sentence.',
        explanation: 'Correct mapping: included angle, SSA ambiguity, and triangle area align with their exact definitions used in this part.'
      }
    },
    {
      id: 'precalc-law-of-sines-cosines-precalc-p3-s6-strategy',
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
      
      Tie each step to included angle, SSA ambiguity, and triangle area so your reasoning is explicit and checkable.
      `
    },
    {
      id: 'precalc-law-of-sines-cosines-precalc-p3-s7-mcq-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied mixed questions (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'A student is analyzing whether SSA has 0, 1, or 2 triangles. Which term best anchors the next reasoning step if the key idea is: direction measured from north or east references?',
            options: [
              'included angle',
              'triangle area',
              'bearing',
              'SSA ambiguity'
            ],
            correctAnswer: 2,
            explanation: 'bearing matches that description and keeps the model-to-interpretation chain consistent.'
          },
          {
            question: 'A student is solving a mixed law of sines and cosines prompt. Which term best anchors the next reasoning step if the key idea is: triangle requiring generalized trig methods?',
            options: [
              'bearing',
              'consistency check',
              'non-right triangle',
              'triangle area'
            ],
            correctAnswer: 2,
            explanation: 'non-right triangle matches that description and keeps the model-to-interpretation chain consistent.'
          }
        ]
      }
    }
  ]
};
