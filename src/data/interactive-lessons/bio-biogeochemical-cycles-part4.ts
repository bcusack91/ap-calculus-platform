export const bioBiogeochemicalCyclesPart4Data = {
  topicSlug: 'biogeochemical-cycles',
  sections: [
    {
      id: 'bgc4-intro',
      type: 'text' as const,
      content: `# The Phosphorus Cycle 🦴

Phosphorus (P) is essential for **DNA**, **RNA**, **ATP**, **phospholipids** (cell membranes), and **bone/teeth** (hydroxyapatite). Unlike carbon and nitrogen, the phosphorus cycle has **no significant gas phase** — phosphorus moves primarily through rock, water, soil, and organisms.

## Why Phosphorus Is Unique

| Feature | Phosphorus Cycle | Carbon/Nitrogen Cycles |
|---------|-----------------|----------------------|
| **Gas phase** | ❌ No significant gas phase | ✅ Major atmospheric component |
| **Speed** | Very slow (geological time) | Faster (biological cycling) |
| **Primary source** | Weathering of rocks | Atmosphere |
| **Limiting nutrient** | Often in freshwater | Less often limiting |
| **Chemical form** | $PO_{4}^{3-}$ (phosphate) | $CO_{2}$, $N_{2}$, $NH_{4}^{+}$, $NO_{3}^{-}$ |

> 🔬 **AP Key Point:** Because phosphorus has no gas phase, it cycles much more slowly than carbon or nitrogen. It is often the **limiting nutrient** in freshwater ecosystems.`
    },
    {
      id: 'bgc4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Phosphorus Basics** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What makes the phosphorus cycle fundamentally different from the carbon and nitrogen cycles?',
            options: [
              'Phosphorus is not needed by living organisms',
              'Phosphorus has no significant gas phase',
              'Phosphorus cycles faster than any other nutrient',
              'Phosphorus is only found in marine environments'
            ],
            correctAnswer: 1,
            explanation: 'The phosphorus cycle lacks a significant atmospheric/gas phase. Phosphorus moves through rocks, water, soil, and organisms but not through the atmosphere. This makes it cycle much more slowly and limits long-distance transport compared to carbon $(CO_{2})$ or nitrogen $(N_{2})$.'
          },
          {
            question: 'Which biological molecules contain phosphorus?',
            options: [
              'Only DNA and RNA',
              'Only ATP',
              'DNA, RNA, ATP, and phospholipids',
              'Proteins and carbohydrates'
            ],
            correctAnswer: 2,
            explanation: 'Phosphorus is a component of nucleic acids (DNA/RNA — in the sugar-phosphate backbone), ATP (adenosine triphosphate — the energy currency), and phospholipids (the major structural component of cell membranes). It is NOT a component of most proteins or carbohydrates.'
          }
        ]
      }
    },
    {
      id: 'bgc4-content2',
      type: 'text' as const,
      content: `## The Phosphorus Cycle Step by Step 🔄

<div class="my-8 rounded-2xl border border-green-200/80 dark:border-green-700/60 bg-gradient-to-br from-green-50 via-white to-teal-50 dark:from-green-950/30 dark:via-gray-900 dark:to-teal-950/30 p-6 shadow-lg">
  <p class="m-0 text-base md:text-lg font-semibold text-green-900 dark:text-green-100">
    Quick frame: phosphorus has no major atmospheric phase, so geological and biological transfer steps dominate the cycle.
  </p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
  <div class="rounded-2xl border border-stone-200 dark:border-stone-700/60 bg-gradient-to-br from-stone-50 to-amber-50 dark:from-stone-950/30 dark:to-amber-950/30 p-5 shadow-md">
    <h3 class="mt-0 mb-2 text-xl font-extrabold text-stone-900 dark:text-stone-100">1) Weathering of Phosphate Rocks</h3>
    <ul class="my-0 space-y-1.5 text-stone-900 dark:text-stone-100">
      <li>Phosphorus begins in apatite-rich rocks</li>
      <li>Weathering releases $PO_{4}^{3-}$ into soil and water</li>
      <li>This is the rate-limiting step on geologic time scales</li>
    </ul>
  </div>

  <div class="rounded-2xl border border-lime-200 dark:border-lime-700/60 bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-950/30 dark:to-green-950/30 p-5 shadow-md">
    <h3 class="mt-0 mb-2 text-xl font-extrabold text-lime-900 dark:text-lime-100">2) Soil Absorption and Plant Uptake</h3>
    <ul class="my-0 space-y-1.5 text-lime-900 dark:text-lime-100">
      <li>Plants absorb dissolved $PO_{4}^{3-}$ through roots</li>
      <li>Availability depends strongly on soil pH</li>
      <li>pH 6-7 generally maximizes uptake</li>
    </ul>
  </div>

  <div class="rounded-2xl border border-cyan-200 dark:border-cyan-700/60 bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-950/30 dark:to-sky-950/30 p-5 shadow-md">
    <h3 class="mt-0 mb-2 text-xl font-extrabold text-cyan-900 dark:text-cyan-100">3) Biological Incorporation</h3>
    <ul class="my-0 space-y-1.5 text-cyan-900 dark:text-cyan-100">
      <li>Plants build DNA, ATP, and phospholipids from phosphate</li>
      <li>Animals acquire phosphorus through feeding</li>
      <li>Phosphorus flows through food webs as organic matter</li>
    </ul>
  </div>

  <div class="rounded-2xl border border-emerald-200 dark:border-emerald-700/60 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-5 shadow-md">
    <h3 class="mt-0 mb-2 text-xl font-extrabold text-emerald-900 dark:text-emerald-100">4) Decomposition and Return</h3>
    <ul class="my-0 space-y-1.5 text-emerald-900 dark:text-emerald-100">
      <li>Decomposers return $PO_{4}^{3-}$ to soils and waters</li>
      <li>Waste products (including guano) are phosphorus-rich</li>
    </ul>
  </div>

  <div class="md:col-span-2 rounded-2xl border border-indigo-200 dark:border-indigo-700/60 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 p-5 shadow-md">
    <h3 class="mt-0 mb-2 text-xl font-extrabold text-indigo-900 dark:text-indigo-100">5) Sedimentation and Long-Term Storage</h3>
    <ul class="my-0 space-y-1.5 text-indigo-900 dark:text-indigo-100">
      <li>Phosphate enters rivers and oceans</li>
      <li>Marine biomass transfers phosphorus to deep sediments</li>
      <li>Sedimentation + lithification eventually form new phosphate rock</li>
    </ul>
  </div>
</div>

> 🔄 **Full cycle time:** Tens of millions to hundreds of millions of years for a complete geological phosphorus cycle.`
    },
    {
      id: 'bgc4-content3',
      type: 'text' as const,
      content: `## Phosphorus as a Limiting Nutrient 🚫

### Liebig's Law of the Minimum

The growth of organisms is limited by whichever essential nutrient is in **shortest supply** relative to demand. In many ecosystems, that nutrient is phosphorus.

| Ecosystem Type | Typical Limiting Nutrient | Why? |
|---------------|--------------------------|------|
| **Freshwater lakes** | Phosphorus | $N_{2}$ fixation adds nitrogen; no P gas phase |
| **Open ocean** | Nitrogen (or iron) | Phosphorus supplied by river/upwelling |
| **Tropical soils** | Phosphorus | Heavy rainfall leaches P from soil |
| **Temperate soils** | Nitrogen | P released from weathering is adequate |

### Eutrophication: When Phosphorus Becomes Too Available

When excess phosphorus enters waterways (from fertilizer, sewage, detergents):

1. **Algal bloom** — algae proliferate rapidly
2. **Light blocked** — submerged plants die
3. **Algae die** — massive organic matter accumulation
4. **Decomposers consume $O_{2}$** — dissolved oxygen plummets
5. **Hypoxia/anoxia** — fish and invertebrates die
6. **Dead zone** — ecosystem collapse

> ⚠️ **AP Connection:** Adding phosphorus to a phosphorus-limited lake causes eutrophication. This is why many regions have banned phosphorus in laundry detergents.`
    },
    {
      id: 'bgc4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Phosphorus Dynamics** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Phosphorus is typically the limiting nutrient in freshwater ecosystems because:',
            options: [
              'Plants cannot absorb phosphorus from water',
              'There is no atmospheric reservoir, and nitrogen-fixing bacteria can add nitrogen from the air',
              'Phosphorus is only needed in trace amounts',
              'Freshwater organisms do not require phosphorus'
            ],
            correctAnswer: 1,
            explanation: 'In freshwater systems, cyanobacteria can fix atmospheric $N_{2}$ to meet nitrogen demands, but there is no equivalent process for phosphorus. Since phosphorus has no gas phase and enters primarily through slow rock weathering, it tends to be the nutrient in shortest supply relative to biological demand.'
          },
          {
            question: 'The rate-limiting step of the phosphorus cycle is:',
            options: [
              'Decomposition of organic matter',
              'Absorption by plant roots',
              'Weathering of phosphate rocks',
              'Sedimentation in the ocean'
            ],
            correctAnswer: 2,
            explanation: 'Weathering of phosphate-containing rocks is the primary input of new phosphorus into the biologically active portion of the cycle. This process occurs over geological time scales (millions of years), making it the slowest and rate-limiting step.'
          }
        ]
      }
    },
    {
      id: 'bgc4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Phosphorus Cycle** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The biologically usable form of phosphorus is ___ ions',
            options: ['$PO_{4}^{3-}$ (phosphate)', '$NO_{3}^{-}$ (nitrate)', '$SO_{4}^{2-}$ (sulfate)', '$CO_{3}^{2-}$ (carbonate)']
          },
          {
            label: 'Phosphorus is often the limiting nutrient in ___ ecosystems',
            options: ['marine', 'freshwater', 'desert', 'tundra']
          },
          {
            label: 'The primary natural source of phosphorus entering the cycle is ___',
            options: ['atmospheric deposition', 'volcanic eruptions', 'weathering of rocks', 'lightning fixation']
          },
          {
            label: 'Excess phosphorus in waterways causes ___, leading to oxygen depletion',
            options: ['desertification', 'eutrophication', 'acidification', 'salinization']
          }
        ],
        correctAnswers: ['$PO_{4}^{3-}$ (phosphate)', 'freshwater', 'weathering of rocks', 'eutrophication'],
        hint1: 'Phosphorus is absorbed by plants in its oxidized ionic form.',
        hint2: 'Freshwater systems lack nitrogen fixation balance — phosphorus limits growth.',
        hint3: 'No gas phase means no atmospheric source — rocks are the origin.',
        explanation: 'Phosphate $(PO_{4}^{3-})$ is the biologically available form of phosphorus. It is typically limiting in freshwater because nitrogen fixation can compensate for N shortages but nothing compensates for P shortages. Rock weathering is the primary natural source. Excess P causes eutrophication — algal blooms followed by oxygen depletion and ecosystem collapse.'
      }
    }
  ]
};
