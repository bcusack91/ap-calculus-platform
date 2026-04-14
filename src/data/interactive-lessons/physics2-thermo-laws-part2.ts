export const physics2ThermoLawsPart2Data = {
  topicSlug: 'laws-of-thermodynamics',
  sections: [
    {
      id: 'tl2-intro',
      type: 'text' as const,
      content: `
# ⚡ The First Law of Thermodynamics

**Part 2 of 7 — Energy Conservation for Thermal Systems**

The First Law is simply conservation of energy applied to thermodynamic systems. It connects heat, work, and internal energy in one powerful equation.
      `
    },
    {
      id: 'tl2-first-law',
      type: 'text' as const,
      content: `
## The First Law

$$\\Delta U = Q - W$$

or equivalently:

$$Q = \\Delta U + W$$

where:
- $\\Delta U$ = change in internal energy of the gas
- $Q$ = heat **added to** the gas (positive if heat flows IN)
- $W$ = work done **by** the gas (positive if gas expands)

### What It Says

> The heat added to a system goes into two places: increasing internal energy and doing work.

If you add 500 J of heat and the gas does 200 J of work expanding, then $\\Delta U = 500 - 200 = 300$ J goes into raising the temperature.

### Sign Summary

| Quantity | Positive means... | Negative means... |
|----------|-------------------|-------------------|
| $Q$ | Heat flows INTO gas | Heat flows OUT of gas |
| $W$ | Gas expands (does work on surroundings) | Gas compressed (work done on gas) |
| $\\Delta U$ | Temperature increases | Temperature decreases |
      `
    },
    {
      id: 'tl2-special-processes',
      type: 'text' as const,
      content: `
## First Law Applied to Special Processes

<div class="my-8 rounded-2xl border border-cyan-200/80 dark:border-cyan-700/60 bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-cyan-950/30 dark:via-gray-900 dark:to-blue-950/30 p-6 shadow-lg">
  <p class="m-0 text-base md:text-lg font-semibold text-cyan-900 dark:text-cyan-100">
    Quick frame: every process is still <code>&Delta;U = Q - W</code>. What changes is which term gets locked.
  </p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
  <div class="rounded-2xl border border-amber-200 dark:border-amber-700/60 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-5 shadow-md">
    <h3 class="mt-0 mb-2 text-xl font-extrabold text-amber-900 dark:text-amber-100">1) Isothermal (<em>T</em> constant)</h3>
    <p class="mb-3 text-amber-900/90 dark:text-amber-100/90">Temperature stays fixed, so internal energy does not change.</p>
    <ul class="my-0 space-y-1.5 text-amber-900 dark:text-amber-100">
      <li><code>&Delta;U = 0</code></li>
      <li><code>Q = W</code></li>
      <li>Heat in becomes work out (or vice versa)</li>
    </ul>
  </div>

  <div class="rounded-2xl border border-rose-200 dark:border-rose-700/60 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 p-5 shadow-md">
    <h3 class="mt-0 mb-2 text-xl font-extrabold text-rose-900 dark:text-rose-100">2) Adiabatic (<em>Q</em> = 0)</h3>
    <p class="mb-3 text-rose-900/90 dark:text-rose-100/90">No heat crosses the boundary, so energy change comes entirely from work.</p>
    <ul class="my-0 space-y-1.5 text-rose-900 dark:text-rose-100">
      <li><code>&Delta;U = -W</code></li>
      <li>Expand (<code>W &gt; 0</code>) &rArr; <code>&Delta;U &lt; 0</code> &rArr; gas cools</li>
      <li>Compress (<code>W &lt; 0</code>) &rArr; <code>&Delta;U &gt; 0</code> &rArr; gas warms</li>
    </ul>
  </div>

  <div class="rounded-2xl border border-emerald-200 dark:border-emerald-700/60 bg-gradient-to-br from-emerald-50 to-lime-50 dark:from-emerald-950/30 dark:to-lime-950/30 p-5 shadow-md">
    <h3 class="mt-0 mb-2 text-xl font-extrabold text-emerald-900 dark:text-emerald-100">3) Isochoric (<em>V</em> constant)</h3>
    <p class="mb-3 text-emerald-900/90 dark:text-emerald-100/90">Volume does not change, so the gas cannot do pressure-volume work.</p>
    <ul class="my-0 space-y-1.5 text-emerald-900 dark:text-emerald-100">
      <li><code>W = 0</code></li>
      <li><code>&Delta;U = Q</code></li>
      <li>All added heat changes internal energy (temperature)</li>
    </ul>
  </div>

  <div class="rounded-2xl border border-indigo-200 dark:border-indigo-700/60 bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-indigo-950/30 dark:to-sky-950/30 p-5 shadow-md">
    <h3 class="mt-0 mb-2 text-xl font-extrabold text-indigo-900 dark:text-indigo-100">4) Isobaric (<em>P</em> constant)</h3>
    <p class="mb-3 text-indigo-900/90 dark:text-indigo-100/90">Pressure stays fixed while the system may expand or compress.</p>
    <ul class="my-0 space-y-1.5 text-indigo-900 dark:text-indigo-100">
      <li><code>W = P&Delta;V</code></li>
      <li><code>&Delta;U = Q - P&Delta;V</code></li>
      <li>Heat splits between raising <em>U</em> and doing boundary work</li>
    </ul>
  </div>
</div>

> Memory trick: **isothermal locks $\\Delta U$**, **adiabatic locks $Q$**, **isochoric locks $W$**, and **isobaric locks $P$**.
      `
    },
    {
      id: 'tl2-process-quiz',
      type: 'multiple-choice' as const,
      content: `
**Process Identification** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'During an adiabatic expansion of an ideal gas, the temperature:',
            options: [
              'Increases because the gas does work',
              'Decreases because the gas uses internal energy to do work',
              'Stays the same because no heat is exchanged',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: 'Adiabatic: $Q = 0$, so $\\Delta U = -W$. During expansion $W > 0$, so $\\Delta U < 0$, meaning $T$ decreases. The gas cools because it uses its own internal energy to push the piston.'
          },
          {
            question: 'A gas at constant volume absorbs 800 J of heat. How much work does it do?',
            options: [
              '800 J',
              '400 J',
              '0 J',
              'Cannot determine without knowing pressure'
            ],
            correctAnswer: 2,
            explanation: 'Isochoric (constant volume): $W = P\\Delta V = 0$ because $\\Delta V = 0$. All 800 J goes into internal energy: $\\Delta U = Q = 800$ J.'
          }
        ]
      }
    },
    {
      id: 'tl2-first-law-quiz',
      type: 'multiple-choice' as const,
      content: `
**First Law Application** ⚡
      `,
      exercise: {
        questions: [
          {
            question: 'A gas absorbs 600 J of heat while doing 400 J of work. The change in internal energy is:',
            options: [
              '1000 J',
              '200 J',
              '−200 J',
              '400 J'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta U = Q - W = 600 - 400 = 200$ J. The gas gets hotter because more heat came in than left as work.'
          },
          {
            question: 'During an isothermal expansion, a gas does 350 J of work. How much heat was added?',
            options: [
              '0 J',
              '175 J',
              '350 J',
              '700 J'
            ],
            correctAnswer: 2,
            explanation: 'Isothermal: $\\Delta U = 0$, so $Q = W = 350$ J. The gas must absorb exactly as much heat as the work it does to keep its temperature constant.'
          }
        ]
      }
    },
    {
      id: 'tl2-first-law-drill',
      type: 'input-boxes' as const,
      content: `
**First Law Drill** 🔧

Apply $\\Delta U = Q - W$ to each scenario.

1) $Q = 1200$ J, $W = 500$ J. Find $\\Delta U$ (in J).

2) A gas does 300 J of work while its internal energy decreases by 100 J. Find $Q$ (in J).

3) An adiabatic compression does 600 J of work on the gas ($W = -600$ J by the gas). Find $\\Delta U$ (in J).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['700', '200', '600'],
        hint1: '$\\Delta U = Q - W = 1200 - 500$.',
        hint2: '$Q = \\Delta U + W = (-100) + 300 = 200$ J.',
        hint3: 'Adiabatic: $Q = 0$. $\\Delta U = Q - W = 0 - (-600) = 600$ J. The gas heats up.',
        explanation: 'Apply $\\Delta U = Q - W$ carefully with signs. Work done ON the gas means $W < 0$ (by the gas), so $\\Delta U$ increases.'
      }
    }
  ]
}
