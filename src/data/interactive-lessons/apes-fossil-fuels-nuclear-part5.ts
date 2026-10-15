export const apesFossilFuelsNuclearPart5Data = {
  topicSlug: 'apes-fossil-fuels-nuclear',
  sections: [
    {
      id: 'apesfoss5-intro',
      type: 'text' as const,
      content: `
# 🛢️ Fossil Fuels & Nuclear Energy

**Part 5 of 7 — Comparing Sources: Data, Calculations and Misconceptions**

---

| Section |
|---------|
| 📖 Four Nonrenewable Sources Side by Side |
| Direct Versus Life-Cycle Emissions |
| How Long Will It Last? Reserves and Production |
| Sulfur Calculations |
| Common Misconceptions |

> 🔑 **Key Concept:** Exam questions rarely ask about one fuel in isolation. They ask you to **compare** sources using data, to calculate emissions or lifetimes, and to evaluate claims. This part builds those skills on top of Parts 2–4.
      `
    },
    {
      id: 'apesfoss5-compare',
      type: 'text' as const,
      content: `
## 📖 Four Nonrenewable Sources Side by Side

| | **Coal** | **Oil** | **Natural gas** | **Nuclear** |
|---|---|---|---|---|
| Main use | Electricity, steel | Transportation fuels, petrochemicals | Electricity, home heating, industry, fertilizer | Electricity |
| Extraction impacts | Strip and mountaintop mining, acid mine drainage, subsidence | Drilling, spills, tar sands mining | Fracking: groundwater risk, VOCs, induced quakes, methane leaks | Uranium mining and mill tailings |
| Main releases in use | Most $CO_{2}$ per kWh; $SO_{2}$, $NO_{x}$, PM, mercury, ash | $CO_{2}$, $NO_{x}$, VOCs, CO from vehicles | About half of coal's $CO_{2}$ per kWh; $NO_{x}$ | No combustion gases; thermal pollution |
| Solid waste | Coal ash | Refinery wastes | Fracking wastewater | Radioactive spent fuel |
| Big risk | Air pollution and climate | Spills and climate | Methane leakage and climate | Accidents and long-term waste |

## Direct Versus Life-Cycle Emissions

The ~1,000 g/kWh for coal in Part 1 counts only what comes out of the smokestack. A **life-cycle** estimate also counts mining, processing, transport, plant construction and decommissioning. The IPCC's 2014 median life-cycle estimates, in grams of $CO_{2}$-equivalent per kWh, are:

| Source | Life-cycle g $CO_{2}$-eq/kWh (median) |
|---|---|
| Coal | 820 |
| Natural gas (combined cycle) | 490 |
| Solar PV (utility scale) | 48 |
| Hydroelectric | 24 |
| Nuclear | 12 |
| Onshore wind | 11 |

Life-cycle numbers are the fair way to compare a fuel with a technology that burns nothing. Nuclear and wind are not zero, because building plants, mining and processing uranium, and making steel and concrete all release emissions, but they are far below fossil fuels.

### Worked Example 1: Replacing Coal With Nuclear

A utility replaces **1 billion kWh** ($10^{9}$ kWh) per year of coal generation with nuclear.

$$\\text{Savings per kWh} = 820 - 12 = 808\\ \\text{g}$$
$$808\\ \\text{g} \\times 10^{9} = 8.08 \\times 10^{11}\\ \\text{g} = 8.08 \\times 10^{5}\\ \\text{t of } CO_{2}\\text{-eq per year}$$

(1 t = $10^{6}$ g, so divide grams by $10^{6}$.)
      `
    },
    {
      id: 'apesfoss5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why is a life-cycle emissions figure more useful than smokestack emissions for comparing coal with nuclear power?',
            options: [
              'It covers each stage from mining the fuel to taking the plant apart',
              'It counts only the emissions released while the plant is producing power',
              'It leaves out mining so that every type of plant is judged by its output',
              'It adds the emissions of every appliance that uses the plant\'s electricity'
            ],
            correctAnswer: 0,
            explanation: 'A nuclear plant has no smokestack emissions, so only a life-cycle measure captures the emissions from uranium mining, enrichment and construction. Counting every stage puts all sources on the same footing.'
          },
          {
            question: 'Using the life-cycle table, about how many times more $CO_{2}$-equivalent does coal release per kWh than utility solar PV?',
            options: [
              'About 17 times',
              'About 4 times',
              'About 1.7 times',
              'About 77 times'
            ],
            correctAnswer: 0,
            explanation: '820 ÷ 48 ≈ 17. About 77 is roughly the coal-to-onshore-wind ratio (820 ÷ 11 ≈ 75), and 1.7 is roughly coal compared with natural gas.'
          }
        ]
      }
    },
    {
      id: 'apesfoss5-reserves',
      type: 'text' as const,
      content: `
## How Long Will It Last? Reserves and Production

A **resource** is the total amount of a fuel thought to exist. A **reserve** is the part that is known and can be extracted profitably with current technology. Reserves are always much smaller than resources.

The **reserves-to-production (R/P) ratio** estimates how many years a reserve would last at the current rate of use:

$$\\text{R/P (years)} = \\frac{\\text{reserves}}{\\text{annual production}}$$

### Worked Example 2: Years Remaining (illustrative data)

A country has **12 billion barrels** of proven oil reserves and produces **400 million barrels** a year.

$$\\frac{12 \\times 10^{9}}{4 \\times 10^{8}} = 30\\ \\text{years}$$

### Why the answer keeps changing

| Factor | Effect on the years remaining |
|---|---|
| New discoveries | Increase reserves → more years |
| Higher prices or new technology (such as fracking) | Make more of the resource profitable → reserves grow → more years |
| Rising consumption | Faster use → fewer years than the ratio predicts |

So the R/P ratio is a snapshot, not a countdown. For climate, the binding limit is not running out of fossil fuels, but how much carbon can be released.

## Sulfur Calculations

Coal contains sulfur, which burns to $SO_{2}$: $S + O_{2} \\rightarrow SO_{2}$. A sulfur atom (32) becomes an $SO_{2}$ molecule (64), so **each tonne of sulfur yields 2 tonnes of $SO_{2}$**.

### Worked Example 3: A Year of Sulfur Dioxide (illustrative data)

A plant burns **1,000,000 t** of coal that is **2% sulfur**, and its **scrubbers** remove **95%** of the $SO_{2}$.

**Step 1.** Sulfur burned: $1{,}000{,}000 \\times 0.02 = 20{,}000$ t

**Step 2.** $SO_{2}$ formed: $20{,}000 \\times 2 = 40{,}000$ t

**Step 3.** $SO_{2}$ released after scrubbing: $40{,}000 \\times (1 - 0.95) = 2{,}000$ t

Switching to a 0.5% sulfur coal would cut the uncontrolled $SO_{2}$ to a quarter, because $0.5 \\div 2 = 0.25$. (How $SO_{2}$ forms acid deposition is covered in the Atmospheric Pollution lessons.)
      `
    },
    {
      id: 'apesfoss5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A gas field holds reserves of 600 billion cubic meters, and production is 20 billion cubic meters a year. What is the R/P ratio in years?

2) A plant burns 500,000 t of coal containing 3% sulfur. How many tonnes of $SO_{2}$ form before any scrubbing?

3) If scrubbers remove 90% of that $SO_{2}$, how many tonnes are released?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '30000', '3000'],
        hint1: 'Reserves ÷ annual production.',
        hint2: 'Sulfur = 500,000 × 0.03. Then multiply by 2 for sulfur dioxide.',
        hint3: 'Multiply the sulfur dioxide formed by 0.10.',
        explanation: '1) 600 ÷ 20 = 30 years. 2) 15,000 t of sulfur × 2 = 30,000 t of sulfur dioxide. 3) 30,000 × 0.10 = 3,000 t released.'
      }
    },
    {
      id: 'apesfoss5-misconceptions',
      type: 'text' as const,
      content: `
## Common Misconceptions

| Misconception | Correction |
|---|---|
| "The white clouds from a nuclear plant's cooling towers are radioactive smoke." | They are **water vapor** from the cooling water, the same as at many coal plants. The reactor is sealed inside its containment building. |
| "A reactor can blow up like an atomic bomb." | Reactor fuel is only about 3–5% U-235, far too dilute for a nuclear explosion. Reactor accidents involve **meltdowns**, steam or hydrogen explosions and fires. |
| "Natural gas is clean energy." | It is the **cleanest-burning fossil fuel**, but it still releases about half of coal's $CO_{2}$ per kWh, and leaked methane is a powerful greenhouse gas. |
| "Electricity is an energy source." | Electricity is a **carrier**. Its impact depends on the source that generated it. |
| "Nuclear power is renewable because it uses so little fuel." | Uranium is a mined, finite resource, so nuclear power is **nonrenewable**. |
| "We are about to run out of fossil fuels." | Reserves keep growing with discoveries and technology. The pressing limit is the **carbon** that burning them releases. |
| "Higher efficiency means no pollution." | A more efficient plant burns less fuel per kWh, so it pollutes **less**, but not zero. |

> 🔑 **AP Connection:** When an FRQ asks you to **evaluate** an energy claim, use data to support or refute it, then name a trade-off. For example: "Switching from coal to gas cuts smokestack $CO_{2}$ about in half (1,000 vs 490 g/kWh), but methane leaks during fracking reduce the net climate benefit."
      `
    },
    {
      id: 'apesfoss5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A news article says a nation "has only 30 years of oil left" based on its R/P ratio. Which response is most scientifically accurate?',
            options: [
              'The ratio is a snapshot that shifts as new deposits are found',
              'The ratio is exact, because reserves can only shrink as oil is pumped',
              'The ratio overstates supply, because reserves include every barrel in the ground',
              'The ratio is useless, because oil production never changes from year to year'
            ],
            correctAnswer: 0,
            explanation: 'Reserves grow with new discoveries and technology, and consumption changes, so the R/P ratio is not a fixed countdown. Reserves are the profitable, known portion, not every barrel in the ground.'
          },
          {
            question: 'A town objects to a nuclear plant because "the clouds from the towers will spread radiation." Which fact best answers the concern?',
            options: [
              'The plumes are water vapor from cooling',
              'The plumes are filtered by scrubbers',
              'The plumes contain only carbon dioxide',
              'The plumes are blown out to sea daily'
            ],
            correctAnswer: 0,
            explanation: 'Cooling towers release evaporated cooling water, which never passes through the reactor core. Scrubbers remove sulfur dioxide at fossil-fuel plants and have nothing to do with these plumes.'
          },
          {
            question: 'A plant switches from coal with 2.4% sulfur to coal with 0.6% sulfur, burning the same mass. By what percent does its uncontrolled $SO_{2}$ output change?',
            options: [
              'A 75 percent decrease',
              'A 25 percent decrease',
              'A 1.8 percent decrease',
              'A 300 percent decrease'
            ],
            correctAnswer: 0,
            explanation: 'Sulfur dioxide is proportional to sulfur burned: (0.6 − 2.4) ÷ 2.4 × 100 = −75 percent. The new output is 25 percent of the old, which is a 75 percent decrease.'
          }
        ]
      }
    },
    {
      id: 'apesfoss5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Idea | Key fact |
|---|---|
| Comparison | Coal: most $CO_{2}$ and air pollutants; oil: transport and spills; gas: half of coal's $CO_{2}$ plus leaks; nuclear: no combustion gases, radioactive waste |
| Life-cycle emissions | Coal 820, gas 490, solar PV 48, hydro 24, nuclear 12, wind 11 g $CO_{2}$-eq/kWh (IPCC 2014 medians) |
| Reserves | Known, profitable portion of a resource; R/P = reserves ÷ annual production |
| Sulfur | 1 t S → 2 t $SO_{2}$; scrubbers remove most of it |
| Misconceptions | Tower plumes are water vapor; reactors cannot explode like bombs; gas is not carbon-free; electricity is a carrier |

**Next:** Part 6 puts these skills to work on full AP-style free-response questions.
      `
    }
  ]
};
