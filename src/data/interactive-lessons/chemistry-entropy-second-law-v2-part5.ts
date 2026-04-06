export const chemEntropySecondLawV2Part5Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en5v2-intro',
      type: 'text' as const,
      content: `
# 🔮 Predicting Entropy Changes

**Part 5 of 7 — Qualitative Predictions Without Looking Up Numbers**

On the AP exam, many entropy questions ask you to **predict the sign** of $\\Delta S$ without any data tables. Here's your toolkit.
      `
    },
    {
      id: 'en5v2-rules',
      type: 'text' as const,
      content: `
## The Five Rules for Predicting $\\Delta S$ Sign

### Rule 1: Phase Changes

$$S_{\\text{solid}} < S_{\\text{liquid}} \\ll S_{\\text{gas}}$$

Melting, boiling, sublimation → **positive** $\\Delta S$

### Rule 2: Number of Gas Molecules

More moles of gas in products → **positive** $\\Delta S$

Fewer moles of gas in products → **negative** $\\Delta S$

### Rule 3: Dissolving

Dissolving a solid in water usually → **positive** $\\Delta S$ (ions/molecules spread out)

*Exception:* Some ions strongly organize water molecules around them (hydration), slightly reducing the effect.

### Rule 4: Temperature Increase

Heating anything → **positive** $\\Delta S$ (more energy microstates)

### Rule 5: Mixing

Mixing different substances → **positive** $\\Delta S$ (more positional microstates)
      `
    },
    {
      id: 'en5v2-examples',
      type: 'text' as const,
      content: `
## Worked Examples

| Reaction | Key Change | $\\Delta S$ Sign |
|----------|-----------|----------------|
| $\\text{H}_2\\text{O(l)} \\to \\text{H}_2\\text{O(g)}$ | Liquid → gas | **+** |
| $\\text{2 NO}_2\\text{(g)} \\to \\text{N}_2\\text{O}_4\\text{(g)}$ | 2 mol gas → 1 mol gas | **−** |
| $\\text{NaCl(s)} \\to \\text{Na}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)}$ | Solid dissolves | **+** |
| $\\text{N}_2\\text{(g)} + \\text{3 H}_2\\text{(g)} \\to \\text{2 NH}_3\\text{(g)}$ | 4 mol gas → 2 mol gas | **−** |
| $\\text{CaCO}_3\\text{(s)} \\to \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$ | Solid → solid + gas | **+** |

### The Dominant Factor

When multiple rules conflict, the **gas molecule count** usually dominates because the entropy difference between phases is so large.
      `
    },
    {
      id: 'en5v2-quiz',
      type: 'multiple-choice' as const,
      content: `
**Predict $\\Delta S$** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{CO}_2\\text{(s)} \\to \\text{CO}_2\\text{(g)}$ (dry ice sublimating), $\\Delta S$ is:',
            options: ['Positive', 'Negative', 'Zero', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Sublimation (solid → gas) dramatically increases entropy — the molecules go from fixed positions to freely moving in all directions.'
          },
          {
            question: 'For $\\text{4 Fe(s)} + \\text{3 O}_2\\text{(g)} \\to \\text{2 Fe}_2\\text{O}_3\\text{(s)}$, $\\Delta S$ is:',
            options: ['Positive', 'Negative', 'Zero', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '3 mol of gas is consumed and only solids remain. Losing gas molecules = large entropy decrease.'
          },
          {
            question: 'Which rule is usually the most important for predicting $\\Delta S$ sign?',
            options: [
              'Temperature change',
              'Number of gas molecules',
              'Whether substances dissolve',
              'Number of solid products'
            ],
            correctAnswer: 1,
            explanation: 'Gas molecules have enormously more entropy than any other phase. The change in moles of gas almost always dominates the $\\Delta S$ sign.'
          }
        ]
      }
    },
    {
      id: 'en5v2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Predict the Sign** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\text{Ag}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)} \\to \\text{AgCl(s)}$ — $\\Delta S$ is',
            options: ['positive', 'negative', 'zero', 'unpredictable']
          },
          {
            label: '$\\text{2 H}_2\\text{O}_2\\text{(l)} \\to \\text{2 H}_2\\text{O(l)} + \\text{O}_2\\text{(g)}$ — $\\Delta S$ is',
            options: ['positive', 'negative', 'zero', 'unpredictable']
          },
          {
            label: '$\\text{NH}_3\\text{(g)} + \\text{HCl(g)} \\to \\text{NH}_4\\text{Cl(s)}$ — $\\Delta S$ is',
            options: ['positive', 'negative', 'zero', 'unpredictable']
          },
          {
            label: 'Heating Cu(s) from 25°C to 100°C — $\\Delta S$ is',
            options: ['positive', 'negative', 'zero', 'unpredictable']
          }
        ],
        correctAnswers: ['negative', 'positive', 'negative', 'positive'],
        hint1: 'Aqueous ions (dissolved, spread out) → solid (ordered, compact).',
        hint2: 'Liquid → liquid + gas. A gas is produced!',
        hint3: '2 mol gas → 0 mol gas (solid product).',
        explanation: 'AgCl precipitation: dissolved ions → ordered solid → negative. H₂O₂ decomposition: produces gas → positive. NH₃ + HCl: 2 gases → solid → very negative. Heating: more thermal energy = more microstates → positive.'
      }
    },
    {
      id: 'en5v2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction converts 1 mol solid and 2 mol gas into 3 mol gas. Without any calculations, $\\Delta S$ is most likely:',
            options: [
              'Negative — a solid is consumed',
              'Positive — net gain of 1 mol gas',
              'Zero — changes cancel',
              'Cannot predict without data'
            ],
            correctAnswer: 1,
            explanation: 'Net change: 2 mol gas → 3 mol gas (+1 mol gas). The generation of an additional mole of gas dominates, so $\\Delta S > 0$.'
          }
        ]
      }
    }
  ]
}
