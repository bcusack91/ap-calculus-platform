export const oChemAlcoholsPart3Data = {
  topicSlug: 'alcohols-ethers',
  sections: [
    {
      id: 'alcoh3-intro',
      type: 'text' as const,
      content: `
# Alcohol Reactions

**Part 3 of 7 — Alcohol Reactions**

<div class="my-8 rounded-2xl border border-amber-200/80 dark:border-amber-700/60 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-amber-950/30 dark:via-gray-900 dark:to-orange-950/30 p-6 shadow-lg">
  <p class="m-0 text-base md:text-lg font-semibold text-amber-900 dark:text-amber-100">
    Quick frame: alcohol reactivity is mostly about elimination, oxidation, and functional-group conversion pathways.
  </p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
  <div class="rounded-2xl border border-orange-200 dark:border-orange-700/60 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-5 shadow-md">
    <h3 class="mt-0 mb-2 text-xl font-extrabold text-orange-900 dark:text-orange-100">1) Dehydration</h3>
    <p class="mb-3 text-orange-900/90 dark:text-orange-100/90">Strong acid + heat promotes elimination to form alkenes.</p>
    <ul class="my-0 space-y-1.5 text-orange-900 dark:text-orange-100">
      <li><code>H₂SO₄ / heat → alkene</code></li>
      <li>E1 is favored for 3° substrates</li>
      <li>E2 is favored for 1° substrates</li>
    </ul>
  </div>

  <div class="rounded-2xl border border-blue-200 dark:border-blue-700/60 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-5 shadow-md">
    <h3 class="mt-0 mb-2 text-xl font-extrabold text-blue-900 dark:text-blue-100">2) Oxidation</h3>
    <p class="mb-3 text-blue-900/90 dark:text-blue-100/90">Oxidants determine how far oxidation proceeds for primary alcohols.</p>
    <ul class="my-0 space-y-1.5 text-blue-900 dark:text-blue-100">
      <li><code>PCC: 1° → aldehyde</code></li>
      <li><code>Jones / CrO₃: 1° → carboxylic acid</code></li>
      <li><code>Jones / CrO₃: 2° → ketone</code></li>
    </ul>
  </div>

  <div class="rounded-2xl border border-violet-200 dark:border-violet-700/60 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/30 dark:to-fuchsia-950/30 p-5 shadow-md">
    <h3 class="mt-0 mb-2 text-xl font-extrabold text-violet-900 dark:text-violet-100">3) Conversion to Alkyl Halides</h3>
    <p class="mb-3 text-violet-900/90 dark:text-violet-100/90">Alcohols can be transformed into better leaving-group products (alkyl halides).</p>
    <ul class="my-0 space-y-1.5 text-violet-900 dark:text-violet-100">
      <li><code>HX</code></li>
      <li><code>PBr₃</code></li>
      <li><code>SOCl₂</code></li>
    </ul>
  </div>

  <div class="rounded-2xl border border-rose-200 dark:border-rose-700/60 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 p-5 shadow-md">
    <h3 class="mt-0 mb-2 text-xl font-extrabold text-rose-900 dark:text-rose-100">4) 3° Alcohol Limitation</h3>
    <p class="mb-0 text-rose-900 dark:text-rose-100">3° alcohols cannot be oxidized under typical oxidation conditions because they lack the required C-H bond at the carbon bearing OH.</p>
  </div>
</div>
      `
    },
    {
      id: 'alcoh3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Dehydration?',
            options: [
              'H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)',
              '3° alcohols cannot be oxidized',
              'PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)',
              'HX, PBr₃, SOCl₂'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Dehydration: H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Conversion to alkyl halides?',
            options: [
              'HX, PBr₃, SOCl₂',
              'PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)',
              'H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)',
              '3° alcohols cannot be oxidized'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Conversion to alkyl halides: HX, PBr₃, SOCl₂. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alcoh3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Dehydration**: H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)
- **Oxidation**: PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)
- **Conversion to alkyl halides**: HX, PBr₃, SOCl₂
- **3° alcohols cannot be oxidized**
      `
    },
    {
      id: 'alcoh3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to alcohol reactions?',
            options: [
              '3° alcohols cannot be oxidized',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: '3° alcohols cannot be oxidized'
          }
        ]
      }
    },
    {
      id: 'alcoh3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dehydration',
            options: ['PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)', 'H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)', 'HX, PBr₃, SOCl₂', '3° alcohols cannot be oxidized']
          },
          {
            label: 'Oxidation',
            options: ['HX, PBr₃, SOCl₂', 'PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)', '3° alcohols cannot be oxidized', 'H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)']
          },
          {
            label: 'Conversion to alkyl halides',
            options: ['HX, PBr₃, SOCl₂', 'PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)', 'H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)', '3° alcohols cannot be oxidized']
          }
        ],
        correctAnswers: ['H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°)', 'PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone)', 'HX, PBr₃, SOCl₂'],
        hint1: 'Think about what each concept specifically describes in Alcohol Reactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Alcohol Reactions describes a specific idea. Dehydration: H₂SO₄/heat → alkene (E1 for 3°, E2 for 1°). Oxidation: PCC (1° → aldehyde), Jones/CrO₃ (1° → carboxylic acid, 2° → ketone). Conversion to alkyl halides: HX, PBr₃, SOCl₂.'
      }
    }
  ]
}
