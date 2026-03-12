export const chemOxidationReductionReactionsPart4Data = {
  topicSlug: 'oxidation-reduction-reactions',
  sections: [
    {
      id: 'or4-intro',
      type: 'text' as const,
      content: `
# ⚡ Balancing Redox in Basic Solution

**Part 4 of 7 — Adding OH⁻ to Neutralize H⁺**

Many redox reactions occur in **basic** (alkaline) solution — for example, in batteries and biological systems. The method is almost identical to the acidic method, with one extra step at the end: we neutralize H⁺ by adding OH⁻.
      `
    },
    {
      id: 'or4-method',
      type: 'text' as const,
      content: `
## The Basic Solution Method

### Strategy: Balance in Acid First, Then Convert

| Step | Action |
|------|--------|
| 1–7 | Balance as if in **acidic** solution (same 7 steps) |
| 8 | Add **OH⁻** to **both sides** — one OH⁻ for each H⁺ |
| 9 | Combine H⁺ + OH⁻ → H₂O on the appropriate side |
| 10 | Cancel any H₂O that appears on both sides |

### Why This Works

In basic solution, free H⁺ ions don\'t exist — they would react with the abundant OH⁻. By adding OH⁻ to neutralize every H⁺, we convert to a form appropriate for basic conditions.

### The Key Conversion

$$\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$$

If there are 6 H⁺ in your acidic-balanced equation, add 6 OH⁻ to **both sides**.
      `
    },
    {
      id: 'or4-worked-example',
      type: 'text' as const,
      content: `
## Worked Example

Balance in **basic** solution:

$$\\text{MnO}_4^- + \\text{Br}^- \\rightarrow \\text{MnO}_2 + \\text{BrO}_3^-$$

### Steps 1–7: Balance in acidic solution first

**Reduction:** $\\text{MnO}_4^- \\rightarrow \\text{MnO}_2$
- Balance O: $\\text{MnO}_4^- \\rightarrow \\text{MnO}_2 + 2\\text{H}_2\\text{O}$
- Balance H: $4\\text{H}^+ + \\text{MnO}_4^- \\rightarrow \\text{MnO}_2 + 2\\text{H}_2\\text{O}$
- Balance charge: $3e^- + 4\\text{H}^+ + \\text{MnO}_4^- \\rightarrow \\text{MnO}_2 + 2\\text{H}_2\\text{O}$

**Oxidation:** $\\text{Br}^- \\rightarrow \\text{BrO}_3^-$
- Balance O: $3\\text{H}_2\\text{O} + \\text{Br}^- \\rightarrow \\text{BrO}_3^-$
- Balance H: $3\\text{H}_2\\text{O} + \\text{Br}^- \\rightarrow \\text{BrO}_3^- + 6\\text{H}^+$
- Balance charge: $3\\text{H}_2\\text{O} + \\text{Br}^- \\rightarrow \\text{BrO}_3^- + 6\\text{H}^+ + 6e^-$

**Equalize electrons:** Multiply reduction by 2:
$$6e^- + 8\\text{H}^+ + 2\\text{MnO}_4^- \\rightarrow 2\\text{MnO}_2 + 4\\text{H}_2\\text{O}$$

**Add:**
$$8\\text{H}^+ + 2\\text{MnO}_4^- + 3\\text{H}_2\\text{O} + \\text{Br}^- \\rightarrow 2\\text{MnO}_2 + 4\\text{H}_2\\text{O} + \\text{BrO}_3^- + 6\\text{H}^+$$

**Simplify H⁺ and H₂O:**
$$2\\text{H}^+ + 2\\text{MnO}_4^- + \\text{Br}^- \\rightarrow 2\\text{MnO}_2 + \\text{H}_2\\text{O} + \\text{BrO}_3^-$$

### Steps 8–10: Convert to basic

Add 2 OH⁻ to both sides (to neutralize 2 H⁺):

$$2\\text{H}_2\\text{O} + 2\\text{MnO}_4^- + \\text{Br}^- \\rightarrow 2\\text{MnO}_2 + \\text{H}_2\\text{O} + \\text{BrO}_3^- + 2\\text{OH}^-$$

Cancel 1 H₂O from both sides:

$$\\text{H}_2\\text{O} + 2\\text{MnO}_4^- + \\text{Br}^- \\rightarrow 2\\text{MnO}_2 + \\text{BrO}_3^- + 2\\text{OH}^-$$

✅ No H⁺ remains — appropriate for basic solution!
      `
    },
    {
      id: 'or4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Basic Solution Balancing Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To convert an acidic-balanced equation to basic, you add _____ to both sides for each H⁺.',
            options: [
              'H₂O',
              'H⁺',
              'OH⁻',
              'e⁻'
            ],
            correctAnswer: 2,
            explanation: 'Add one OH⁻ to both sides for each H⁺ present. On the side with H⁺, the combination H⁺ + OH⁻ → H₂O replaces the H⁺ ions.'
          },
          {
            question: 'After adding OH⁻ to neutralize H⁺, what must you do?',
            options: [
              'Add more electrons',
              'Combine H⁺ + OH⁻ → H₂O and cancel H₂O on both sides',
              'Remove all water molecules',
              'Add more H⁺'
            ],
            correctAnswer: 1,
            explanation: 'After adding OH⁻, combine H⁺ + OH⁻ to form H₂O. Then cancel any H₂O molecules that appear on both sides of the equation.'
          },
          {
            question: 'In basic solution, a properly balanced equation should contain:',
            options: [
              'H⁺ ions',
              'Only H₂O and OH⁻ (no free H⁺)',
              'Neither H₂O nor OH⁻',
              'Equal amounts of H⁺ and OH⁻'
            ],
            correctAnswer: 1,
            explanation: 'In basic solution, free H⁺ doesn\'t exist. A properly balanced equation should have OH⁻ and H₂O but NO H⁺ ions.'
          }
        ]
      }
    },
    {
      id: 'or4-practice-drill',
      type: 'input-boxes' as const,
      content: `
**Basic Solution Conversion** 🧮

An equation balanced in acidic solution is:

$$3\\text{Cu}(s) + 8\\text{H}^+ + 2\\text{NO}_3^- \\rightarrow 3\\text{Cu}^{2+} + 2\\text{NO}(g) + 4\\text{H}_2\\text{O}$$

Convert to basic solution:

1) How many OH⁻ must be added to both sides?

2) How many H₂O molecules appear on the LEFT side after combining H⁺ + OH⁻?

3) After canceling H₂O, how many H₂O remain on the product side? (Hint: 8 H₂O form on the left, 4 H₂O already on right)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '8', '0'],
        hint1: 'There are 8 H⁺ — add one OH⁻ per H⁺.',
        hint2: 'Each H⁺ + OH⁻ → H₂O. So 8 H⁺ produce 8 H₂O on the left.',
        hint3: 'Left: 8 H₂O. Right: 4 H₂O + 8 OH⁻ introduced. Cancel 4 H₂O from both sides. Right side: 4 − 4 = 0 H₂O remaining.',
        explanation: '1) 8 OH⁻ (one per H⁺). 2) 8 H₂O on the left (from 8 H⁺ + 8 OH⁻). 3) Cancel 4 H₂O from both sides: left has 8 − 4 = 4, right has 4 − 4 = 0. Final: 3Cu + 4H₂O + 2NO₃⁻ → 3Cu²⁺ + 2NO + 8OH⁻.'
      }
    },
    {
      id: 'or4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Acidic vs. Basic Balancing** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The first 7 steps for balancing in basic solution are',
            options: ['completely different from acidic', 'identical to the acidic method', 'reversed from acidic', 'not needed']
          },
          {
            label: 'In basic solution, oxygen atoms are ultimately balanced using',
            options: ['H₂O and OH⁻', 'O₂ molecules', 'H₂O₂', 'O²⁻ ions']
          },
          {
            label: 'A correctly balanced basic equation will have',
            options: ['H⁺ on the left', 'H⁺ on the right', 'no H⁺ anywhere', 'equal H⁺ and OH⁻']
          },
          {
            label: 'Batteries in alkaline solution involve redox reactions balanced in',
            options: ['acidic solution', 'basic solution', 'neutral solution', 'no solution needed']
          }
        ],
        correctAnswers: ['identical to the acidic method', 'H₂O and OH⁻', 'no H⁺ anywhere', 'basic solution'],
        hint1: 'We balance in acid first, then convert.',
        hint2: 'H₂O balances O, then OH⁻ replaces H⁺.',
        hint3: 'All H⁺ must be neutralized by OH⁻.',
        explanation: 'Steps 1–7 are identical to acidic. In basic solution, O is balanced by H₂O and OH⁻ (after conversion). No H⁺ remains. Alkaline batteries operate in basic solution.'
      }
    },
    {
      id: 'or4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Balancing Redox in Basic Solution** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Balance in basic solution: Cr(OH)₃(s) + ClO⁻(aq) → CrO₄²⁻(aq) + Cl⁻(aq). What appears in the balanced equation?',
            options: [
              'H⁺ and H₂O',
              'OH⁻ and H₂O',
              'Only H₂O',
              'Neither H₂O nor OH⁻'
            ],
            correctAnswer: 1,
            explanation: 'In basic solution, the balanced equation contains OH⁻ and H₂O (but NO H⁺). After balancing in acid and converting, you\'ll have OH⁻ on one side and H₂O on the other.'
          },
          {
            question: 'If an equation balanced in acid has 4H⁺ on the left and 2H₂O on the right, after converting to basic solution, how many OH⁻ will appear?',
            options: [
              '2',
              '4',
              '6',
              '8'
            ],
            correctAnswer: 1,
            explanation: 'Add 4 OH⁻ to both sides (one per H⁺). Left: 4H⁺ + 4OH⁻ → 4H₂O. Right: 2H₂O + 4OH⁻. Cancel 2 H₂O: Left has 2H₂O, Right has 4OH⁻. The 4 OH⁻ remain on the product side.'
          }
        ]
      }
    }
  ]
}
