import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Sustainability & the Future (AP Environmental Science).
 * Registry key / DB Topic.slug: 'apes-sustainability'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot:
 * teach (text) → interactive check (multiple-choice / dropdown-select / input-boxes) →
 * worked applications → Exit Quiz. Concept-forward (non-math topic), so checks favor
 * multiple-choice + dropdown, with a few quantitative input-boxes (footprint arithmetic,
 * payback periods, recycling/efficiency percentages, sustainable-yield math). LaTeX uses
 * DOUBLED backslashes (template-literal strings); chemical formulas use Unicode subscripts
 * to match the existing APES lessons.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'apes-sustainability',
    sections: [
      {
        id: 'apsus1-intro',
        type: 'text' as const,
        content: `# 🌱 Sustainability & the Future

**Part 1 of 7 — What Sustainability Means**

---

### Topics in This Part

| Section |
|---------|
| Defining Sustainability |
| Renewable vs. Nonrenewable Resources |
| Natural Capital & Ecosystem Services |
| The Three Pillars (Environment, Economy, Equity) |

> 🔑 **Key Concept:** **Sustainability** is meeting the needs of the present **without compromising the ability of future generations to meet their own needs**. On the exam, the test is always the same — does the practice let the resource (or the planet) keep providing **indefinitely**?`,
      },
      {
        id: 'apsus1-define',
        type: 'text' as const,
        content: `## Defining Sustainability

A practice is **sustainable** if it can continue **indefinitely** without depleting the resources it depends on or overwhelming the systems that absorb its wastes.

The classic 1987 **Brundtland Report** definition is worth memorizing word-for-word:

> *"Development that meets the needs of the present without compromising the ability of future generations to meet their own needs."*

Two halves matter equally:

| Half of the definition | What it guards against |
|------------------------|------------------------|
| **Meet present needs** | Ignoring people alive today (poverty, hunger) |
| **Don't compromise the future** | Using up resources faster than they regenerate |

> 💡 **Litmus test:** Could everyone on Earth do this, forever, and the resource still be here? If yes, it leans sustainable. If the resource shrinks each year, it does not.`,
      },
      {
        id: 'apsus1-q-define',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which scenario best fits the definition of a SUSTAINABLE practice?',
              options: [
                'Harvesting fish at or below the rate the population can reproduce, so the stock stays steady year after year',
                'Catching as many fish as possible each year until the population collapses',
                'Pumping groundwater out of an aquifer faster than rain can recharge it',
                'Clear-cutting a forest and selling all the timber at once',
              ],
              correctAnswer: 0,
              explanation: 'Sustainability means a resource can keep providing indefinitely. Harvesting at or below the reproduction rate keeps the fish population stable, so it can continue forever. The other choices deplete the resource faster than it regenerates.',
            },
            {
              question: 'The Brundtland Report definition of sustainable development emphasizes meeting present needs WITHOUT:',
              options: [
                'Compromising future generations’ ability to meet their own needs',
                'Using any natural resources at all',
                'Allowing any economic growth',
                'Considering human needs',
              ],
              correctAnswer: 0,
              explanation: 'The Brundtland definition balances present and future: meet today’s needs while preserving the ability of future generations to meet theirs. It does not forbid resource use or economic growth — it forbids depleting the future.',
            },
          ],
        },
      },
      {
        id: 'apsus1-renewable',
        type: 'text' as const,
        content: `## Renewable vs. Nonrenewable Resources

Sustainability hinges on **how fast a resource is replenished** compared with how fast we use it.

| Resource Type | Definition | Examples |
|---------------|------------|----------|
| **Renewable** | Replenished by natural processes on a human timescale | Solar, wind, timber, fish, freshwater (if not overused) |
| **Nonrenewable** | Forms over geologic time; effectively finite | Coal, oil, natural gas, most minerals, fossil aquifers |

A subtle but heavily tested point: a renewable resource can be used **unsustainably**. Timber and fish are renewable, but if you harvest them **faster than they regrow**, you draw the stock down — exactly like mining a nonrenewable resource.

> ⚠️ **Exam trap:** "Renewable" does **not** automatically mean "sustainable." It only means the resource *can* regenerate. Whether you use it sustainably depends on staying at or below that regeneration rate.`,
      },
      {
        id: 'apsus1-dd-classify',
        type: 'dropdown-select' as const,
        content: `**Classify Each Resource** 🔽

Decide whether each resource is **renewable** (replenished on a human timescale) or **nonrenewable** (finite on a human timescale).`,
        exercise: {
          dropdowns: [
            { label: 'Coal:', options: ['Renewable', 'Nonrenewable'] },
            { label: 'Solar energy:', options: ['Renewable', 'Nonrenewable'] },
            { label: 'Copper ore (a metal):', options: ['Renewable', 'Nonrenewable'] },
            { label: 'A forest harvested for timber:', options: ['Renewable', 'Nonrenewable'] },
          ],
          correctAnswers: ['Nonrenewable', 'Renewable', 'Nonrenewable', 'Renewable'],
          hint1: 'Fossil fuels and metals take millions of years to form — they are nonrenewable.',
          hint2: 'Sunlight arrives continuously; it is renewable.',
          hint3: 'A forest regrows on a human timescale, so timber is renewable (though it can still be over-harvested).',
          explanation: 'Coal and copper ore form over geologic time → nonrenewable. Solar energy is continuously supplied and timber regrows within years to decades → renewable. (A renewable forest can still be used unsustainably if cut faster than it regrows.)',
        },
      },
      {
        id: 'apsus1-natural-capital',
        type: 'text' as const,
        content: `## Natural Capital & Ecosystem Services

Economists think of nature as **natural capital** — the planet's stock of resources and living systems — that pays out a continuous "interest" of **ecosystem services**.

| Service Type | Definition | Example |
|--------------|------------|---------|
| **Provisioning** | Goods we extract | Food, timber, freshwater, fiber |
| **Regulating** | Processes that stabilize conditions | Climate regulation, water purification, pollination, flood control |
| **Cultural** | Nonmaterial benefits | Recreation, beauty, spiritual/scientific value |
| **Supporting** | Underpin all the others | Photosynthesis, soil formation, nutrient cycling |

> 🔑 **The sustainability rule of thumb:** Live off the **interest** (ecosystem services and renewable yields), not the **principal** (the natural capital itself). Spend the principal — log the last forest, drain the aquifer — and the interest stops forever.

> 💡 Ecosystem services are often **invisible in the economy** because they are free. A wetland that filters water or buffers a storm provides huge value, but because no one is billed for it, it is easy to destroy for short-term gain.`,
      },
      {
        id: 'apsus1-q-services',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A coastal wetland filters pollutants from water and absorbs storm-surge energy that would otherwise flood a city. These benefits are examples of:',
              options: [
                'Regulating ecosystem services',
                'Provisioning ecosystem services',
                'Nonrenewable resource extraction',
                'Cultural ecosystem services only',
              ],
              correctAnswer: 0,
              explanation: 'Water purification and flood/storm buffering are regulating services — natural processes that stabilize conditions. Provisioning services are extracted goods (food, timber); these are processes, not goods.',
            },
            {
              question: 'Treating natural capital like a savings account, the most sustainable strategy is to:',
              options: [
                'Live off the interest (renewable yields and services) while preserving the principal',
                'Spend the principal as quickly as possible to maximize short-term income',
                'Convert all natural capital into cash immediately',
                'Ignore ecosystem services because they have no value',
              ],
              correctAnswer: 0,
              explanation: 'Sustainability means consuming the renewable "interest" (yields, ecosystem services) without drawing down the "principal" (the underlying natural capital). Spending the principal ends the flow of services permanently.',
            },
          ],
        },
      },
      {
        id: 'apsus1-pillars',
        type: 'text' as const,
        content: `## The Three Pillars of Sustainability

Sustainability is usually drawn as **three overlapping circles** — true sustainability lives where all three meet:

| Pillar | Also called | Core question |
|--------|-------------|---------------|
| **Environmental** | "Planet" | Does it protect ecosystems and resources? |
| **Economic** | "Profit" | Is it financially viable long-term? |
| **Social / Equity** | "People" | Is it fair to people today and in the future? |

A solution that is "green" but bankrupts a community, or profitable but unjust, is **not** truly sustainable. The strongest answers on the exam balance all three.

> 🔑 **Setting up the arc:** Now that you can recognize sustainability, Part 2 measures it — with the **ecological footprint** and **carrying capacity**, the quantitative core of this unit.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'apes-sustainability',
    sections: [
      {
        id: 'apsus2-intro',
        type: 'text' as const,
        content: `# 🌱 Sustainability & the Future

**Part 2 of 7 — Ecological Footprint & Carrying Capacity**

---

> 🔑 **The Idea:** How do we *measure* sustainability? The **ecological footprint** estimates how much productive land and water a person (or nation) needs to supply their resources and absorb their waste. Compare it to what the planet can supply — **biocapacity** — and you can see whether we're living within our means.`,
      },
      {
        id: 'apsus2-footprint',
        type: 'text' as const,
        content: `## The Ecological Footprint

The **ecological footprint** is the area of biologically productive land and water (measured in **global hectares**, gha) required to support a person's consumption and absorb their waste.

$$\\text{Ecological footprint} = \\frac{\\text{resources consumed} + \\text{waste produced}}{\\text{biological productivity per hectare}}$$

Because the demand is divided by how much each hectare can produce, the result is an **area** (global hectares) — the productive land and water it would take to support that consumption. Compare two numbers:

| Term | Meaning |
|------|---------|
| **Ecological footprint** | What we *demand* from nature (gha per person) |
| **Biocapacity** | What nature can *supply* and regenerate (gha per person) |

When the global footprint **exceeds** biocapacity, humanity is in **ecological overshoot** — drawing down natural capital instead of living on its interest.

> 💡 **Earth Overshoot Day** marks the date each year when humanity's demand exceeds what Earth can regenerate that year. The earlier in the year it falls, the deeper the overshoot.`,
      },
      {
        id: 'apsus2-q-footprint',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A nation’s ecological footprint is GREATER than its biocapacity. This means the nation is:',
              options: [
                'In ecological overshoot — demanding more from nature than it can regenerate',
                'Perfectly sustainable with resources to spare',
                'Using only renewable resources',
                'Producing no waste at all',
              ],
              correctAnswer: 0,
              explanation: 'When footprint (demand) exceeds biocapacity (supply), the nation consumes resources faster than they regenerate and produces waste faster than it can be absorbed — ecological overshoot, which draws down natural capital.',
            },
            {
              question: 'Which lifestyle change would MOST reduce an individual’s ecological footprint?',
              options: [
                'Eating less meat, driving less, and consuming fewer manufactured goods',
                'Buying more imported products year-round',
                'Increasing home energy use from fossil fuels',
                'Throwing away more food',
              ],
              correctAnswer: 0,
              explanation: 'Footprint scales with resource consumption and waste. Eating lower on the food chain (less meat), reducing fossil-fuel transport, and consuming/wasting less all shrink the land and water area needed to support a person.',
            },
          ],
        },
      },
      {
        id: 'apsus2-drivers',
        type: 'text' as const,
        content: `## What Drives the Footprint

Footprints vary enormously by country. A useful framework is the **IPAT equation**, which says environmental **Impact** is the product of three factors:

$$I = P \\times A \\times T$$

| Factor | Meaning |
|--------|---------|
| **P** — Population | Number of people |
| **A** — Affluence | Consumption per person |
| **T** — Technology | Environmental impact per unit consumed |

A high-income country can have a large footprint with a *small* population because **affluence (A)** is so high. A low-income country may have a small footprint despite a *large* population because consumption per person is low.

> ⚠️ **Exam trap:** Footprint is **not** just about population. The United States has a far larger per-capita footprint than many far more populous nations — because affluence and resource-intensive technology multiply the impact.`,
      },
      {
        id: 'apsus2-input-footprint',
        type: 'input-boxes' as const,
        content: `**Footprint & Overshoot Math** 🧮

Use $I = P \\times A \\times T$ and footprint-vs-biocapacity reasoning.

**1)** Country X has 10 million people, each with an ecological footprint of 6 global hectares (gha). What is the country's total footprint, in **millions** of gha? (enter just the number)
**2)** Country X's biocapacity is 40 million gha. By how many **millions** of gha does its footprint exceed its biocapacity? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['60', '20'],
          hint1: 'Total footprint = people × per-person footprint = 10 million × 6 gha.',
          hint2: '10 × 6 = 60 million gha of demand.',
          hint3: 'Overshoot = footprint − biocapacity = 60 − 40.',
          explanation: '1) 10 million people × 6 gha = 60 million gha total footprint. 2) 60 − 40 = 20 million gha of overshoot — the nation demands 20 million gha more than its land can regenerate.',
        },
      },
      {
        id: 'apsus2-carrying',
        type: 'text' as const,
        content: `## Carrying Capacity & Overshoot

**Carrying capacity (K)** is the maximum population size an environment can support **indefinitely**, given its resources.

When a population temporarily exceeds K — **overshoot** — it depletes resources, and the population usually **crashes** (a "dieback") back below K, sometimes after K itself has been damaged.

| Pattern | What happens |
|---------|--------------|
| Population **below K** | Resources abundant; population can grow |
| Population **at K** | Births ≈ deaths; stable |
| Population **overshoots K** | Resource depletion → die-off / crash |

Humanity's global ecological footprint exceeding Earth's biocapacity is the planetary-scale version of overshoot: we are temporarily supporting more consumption than the biosphere can regenerate, by drawing down stored natural capital (aquifers, soils, fisheries, forests).

> 💡 **Key distinction:** *Carrying capacity* is a population number; *biocapacity* is an area (gha) of productive land/water. Both express the same idea — there is a ceiling that sustainable use must respect.`,
      },
      {
        id: 'apsus2-dd-carrying',
        type: 'dropdown-select' as const,
        content: `**Footprint, Biocapacity & Overshoot** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'The demand humans place on nature (gha/person) is the:', options: ['Ecological footprint', 'Biocapacity', 'Carrying capacity', 'IPAT factor'] },
            { label: 'What nature can supply and regenerate (gha/person) is the:', options: ['Biocapacity', 'Ecological footprint', 'Affluence', 'Overshoot'] },
            { label: 'When footprint exceeds biocapacity, humanity is in:', options: ['Ecological overshoot', 'Surplus', 'Equilibrium', 'Carrying capacity'] },
            { label: 'In IPAT, a wealthy nation’s large footprint is driven mainly by high:', options: ['Affluence (consumption per person)', 'Biocapacity', 'Rainfall', 'Soil quality'] },
          ],
          correctAnswers: ['Ecological footprint', 'Biocapacity', 'Ecological overshoot', 'Affluence (consumption per person)'],
          hint1: 'Footprint = demand; biocapacity = supply.',
          hint2: 'Demand > supply means overshoot.',
          hint3: 'In I = P × A × T, the "A" (affluence) is consumption per person.',
          explanation: 'Footprint is human demand (gha/person); biocapacity is nature’s supply (gha/person); demand exceeding supply is overshoot; and in IPAT, high affluence (consumption per person) is what makes wealthy nations’ footprints so large.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'apes-sustainability',
    sections: [
      {
        id: 'apsus3-intro',
        type: 'text' as const,
        content: `# 🌱 Sustainability & the Future

**Part 3 of 7 — Renewable Energy & the Energy Transition**

---

> 🔑 **The Idea:** Roughly **80%** of the world's energy still comes from fossil fuels, which are finite and drive climate change. A sustainable future requires shifting to **renewable** sources — solar, wind, hydro, geothermal, and biomass — and using energy far more **efficiently**.`,
      },
      {
        id: 'apsus3-sources',
        type: 'text' as const,
        content: `## The Renewable Energy Toolkit

| Source | How it works | Strength | Limitation |
|--------|--------------|----------|------------|
| **Solar (PV)** | Photovoltaic cells convert sunlight to electricity | No emissions in use; modular; scalable | **Intermittent** (no sun at night); land/material use |
| **Wind** | Turbines convert wind kinetic energy | No emissions in use; cheap per kWh | Intermittent; bird/bat strikes; siting |
| **Hydroelectric** | Dams convert falling water's energy | Reliable; storable | Floods land; blocks fish; disrupts rivers |
| **Geothermal** | Earth's internal heat drives turbines | Steady ("baseload"); small footprint | Location-limited to hot zones |
| **Biomass** | Burning plant matter / biofuels | Uses waste; "carbon-neutral" *in theory* | Emits PM/CO₂; competes with food land |

> 💡 **Carbon-neutral, not carbon-free:** Burning biomass releases CO₂, but regrowing the plants reabsorbs it — so it is roughly **carbon-neutral** over a full cycle, *not* zero-emission. Solar and wind, by contrast, emit essentially nothing while operating.`,
      },
      {
        id: 'apsus3-q-sources',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The biggest challenge of relying on solar and wind power is that they are:',
              options: [
                'Intermittent — output varies with sunlight and wind, so it must be stored or backed up',
                'Nonrenewable and will run out within decades',
                'Major direct emitters of CO₂ during operation',
                'More expensive than fossil fuels in every case',
              ],
              correctAnswer: 0,
              explanation: 'Solar and wind are renewable and nearly emission-free in operation, but their output is intermittent (no sun at night, variable wind). This drives the need for energy storage (batteries) or backup generation to match demand.',
            },
            {
              question: 'Which renewable source provides steady "baseload" power because it taps Earth’s internal heat?',
              options: ['Geothermal', 'Solar photovoltaic', 'Wind', 'Tidal'],
              correctAnswer: 0,
              explanation: 'Geothermal energy uses the constant heat of Earth’s interior, so it provides steady baseload power (unlike intermittent solar and wind). Its main limitation is being restricted to geologically hot regions.',
            },
          ],
        },
      },
      {
        id: 'apsus3-intermittency',
        type: 'text' as const,
        content: `## The Intermittency Problem & Storage

The sun sets and the wind drops, but demand for electricity does not. Bridging that gap is the central engineering challenge of the energy transition. Solutions:

| Approach | How it helps |
|----------|--------------|
| **Battery storage** | Stores midday solar / nighttime wind for later use |
| **Pumped-storage hydro** | Pumps water uphill when supply is high; releases it to generate when needed |
| **Grid interconnection** | Wind in one region covers calm in another |
| **Demand management** | Shifts flexible loads to match supply |

> ⚠️ **Exam framing:** Don't say renewables "can't work because the sun sets." The accurate answer is that intermittency is managed with **storage, a smart grid, and a diverse mix** of sources — it is a solvable design problem, not a dead end.`,
      },
      {
        id: 'apsus3-dd-sources',
        type: 'dropdown-select' as const,
        content: `**Match Source to Trait** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Emission-free in use but intermittent; uses photovoltaic cells:', options: ['Solar', 'Coal', 'Geothermal', 'Biomass'] },
            { label: 'Reliable and storable, but dams flood land and block fish:', options: ['Hydroelectric', 'Wind', 'Solar', 'Nuclear'] },
            { label: 'Roughly carbon-neutral over its cycle but emits PM when burned:', options: ['Biomass', 'Solar', 'Wind', 'Geothermal'] },
            { label: 'Steady baseload power, but limited to geologically hot regions:', options: ['Geothermal', 'Solar', 'Hydroelectric', 'Wind'] },
          ],
          correctAnswers: ['Solar', 'Hydroelectric', 'Biomass', 'Geothermal'],
          hint1: 'Photovoltaic = solar panels.',
          hint2: 'Dams = hydroelectric; their trade-off is flooded land and blocked fish migration.',
          hint3: 'Biomass is burned (so it emits) but regrows (so it is ~carbon-neutral); geothermal needs underground heat.',
          explanation: 'Solar (PV, intermittent), hydroelectric (reliable but ecologically disruptive), biomass (carbon-neutral but emits particulates), and geothermal (steady baseload, location-limited) each have signature strengths and trade-offs.',
        },
      },
      {
        id: 'apsus3-nuclear',
        type: 'text' as const,
        content: `## Where Nuclear Fits

**Nuclear power** is a special case. It is **low-carbon** (almost no CO₂ during operation) and provides steady baseload power, but it is **not renewable** — it relies on finite uranium — and it raises issues of **radioactive waste**, high upfront cost, and accident risk.

| Feature | Nuclear |
|---------|---------|
| Carbon emissions (operation) | Very low ✅ |
| Renewable? | **No** (finite uranium) |
| Reliability | High (baseload) ✅ |
| Key concerns | Long-lived radioactive waste; accidents (Chernobyl, Fukushima); cost |

> 💡 **Classification subtlety:** Nuclear is often grouped with "clean energy" because it is low-carbon, but it is **nonrenewable** — a frequent exam distinction. Low-carbon and renewable are *not* the same category.`,
      },
      {
        id: 'apsus3-q-nuclear',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Nuclear power is best described as:',
              options: [
                'Low-carbon but NONrenewable, with concerns about radioactive waste and accidents',
                'A renewable resource with no waste concerns',
                'A major direct emitter of CO₂ during normal operation',
                'Identical to solar power in every respect',
              ],
              correctAnswer: 0,
              explanation: 'Nuclear emits very little CO₂ during operation (low-carbon) and provides reliable baseload power, but it relies on finite uranium (nonrenewable) and produces long-lived radioactive waste with accident risk. Low-carbon ≠ renewable.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'apes-sustainability',
    sections: [
      {
        id: 'apsus4-intro',
        type: 'text' as const,
        content: `# 🌱 Sustainability & the Future

**Part 4 of 7 — Sustainable Agriculture, Forestry & Fisheries**

---

> 🔑 **The Idea:** Food, wood, and fish are renewable — but only if we harvest at or below their regeneration rate. This part covers how to manage **soil, forests, and fisheries** so they keep producing, centered on the idea of **maximum sustainable yield**.`,
      },
      {
        id: 'apsus4-agriculture',
        type: 'text' as const,
        content: `## Sustainable Agriculture

Industrial agriculture boosts short-term yields but can erode soil, deplete water, and pollute. Sustainable practices protect the **soil** — the foundational natural capital of farming:

| Practice | What it does |
|----------|--------------|
| **Crop rotation** | Alternating crops restores soil nutrients (e.g., legumes fix nitrogen), breaks pest cycles |
| **No-till / conservation tillage** | Leaves residue on fields → less erosion, more soil carbon |
| **Cover crops** | Protect bare soil from erosion; add organic matter |
| **Contour plowing / terracing** | Plowing across slopes slows water runoff and erosion |
| **Integrated Pest Management (IPM)** | Combines biological controls + minimal targeted pesticide use |
| **Agroforestry / polyculture** | Mixing crops/trees mimics natural diversity, reducing inputs |

> 💡 **Why soil is the linchpin:** It takes nature **hundreds of years to build an inch of topsoil**, but poor practices can erode it in a single season. Protecting soil is the clearest example of "don't spend the principal."`,
      },
      {
        id: 'apsus4-q-ag',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why does crop rotation (especially including legumes) support sustainable agriculture?',
              options: [
                'It replenishes soil nutrients (e.g., nitrogen fixation) and disrupts pest cycles, reducing fertilizer and pesticide needs',
                'It guarantees the same crop can be grown forever with no inputs',
                'It permanently removes all pests from a field',
                'It works only on completely flat land',
              ],
              correctAnswer: 0,
              explanation: 'Rotating crops — and including nitrogen-fixing legumes — restores soil fertility and interrupts the life cycles of crop-specific pests, lowering the need for synthetic fertilizer and pesticides. That conserves soil natural capital.',
            },
            {
              question: 'Which practice MOST directly reduces soil erosion on a sloped field?',
              options: [
                'Contour plowing or terracing across the slope',
                'Plowing straight up and down the slope',
                'Leaving the soil bare year-round',
                'Removing all crop residue after harvest',
              ],
              correctAnswer: 0,
              explanation: 'Plowing across (along the contour of) a slope, or building terraces, slows downhill water flow so it cannot carry soil away. Plowing up-and-down or leaving soil bare accelerates erosion.',
            },
          ],
        },
      },
      {
        id: 'apsus4-msy',
        type: 'text' as const,
        content: `## Maximum Sustainable Yield (MSY)

The core idea behind sustainable harvesting of fish, forests, and game is **maximum sustainable yield (MSY)** — the largest amount you can remove **without reducing the resource's ability to replenish itself**.

For a population following logistic growth, the population grows **fastest** at about **half** the carrying capacity:

$$\\text{MSY occurs near } \\frac{K}{2}$$

| Harvest level | Outcome |
|---------------|---------|
| Harvest **< regrowth** | Population stable or grows; sustainable |
| Harvest **= regrowth** | Population steady at a harvestable level |
| Harvest **> regrowth** | Population shrinks → eventual collapse |

> ⚠️ **The danger of MSY:** It is hard to measure regrowth precisely, and harvesting *exactly* at the maximum leaves **no margin for error**. A bad estimate, a drought, or a disease can tip the population into collapse. Many managers deliberately harvest **below** MSY for safety — the **precautionary principle**.`,
      },
      {
        id: 'apsus4-input-msy',
        type: 'input-boxes' as const,
        content: `**Sustainable-Yield Math** 🧮

A renewable population is sustainable to harvest only up to the amount it **regrows** each year.

**1)** A fishery's stock grows by 2,000 tons of new fish per year. What is the largest annual catch (in tons) that keeps the stock from declining? (enter the number)
**2)** A forest of 500,000 trees grows at 4% per year. How many trees per year can be harvested sustainably (i.e., equal to the annual growth)? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2000', '20000'],
          hint1: 'Sustainable harvest = annual regrowth. The fishery regrows 2,000 tons/year.',
          hint2: 'For the forest, sustainable harvest = annual growth = 4% of 500,000.',
          hint3: '0.04 × 500,000 = 20,000 trees per year.',
          explanation: '1) Harvesting up to the 2,000-ton annual regrowth keeps the stock steady. 2) 4% of 500,000 = 0.04 × 500,000 = 20,000 trees/year. Harvest more than the regrowth and the resource declines.',
        },
      },
      {
        id: 'apsus4-fisheries',
        type: 'text' as const,
        content: `## Overfishing & Sustainable Fisheries

Roughly a third of global fish stocks are **overfished**. Sustainable fishery management tools:

| Tool | What it does |
|------|--------------|
| **Catch limits / quotas (ITQs)** | Cap the total catch at sustainable levels |
| **Marine Protected Areas (MPAs)** | "No-take" zones let stocks recover and spill over into fished areas |
| **Gear restrictions / bycatch reduction** | Reduce killing of non-target species and habitat damage |
| **Aquaculture (fish farming)** | Raises fish to relieve pressure on wild stocks (but can pollute and spread disease) |

The collapse of the **Atlantic cod fishery** off Newfoundland in the early 1990s is the textbook cautionary tale: decades of harvesting above the sustainable yield crashed the stock, which has still not fully recovered.

> 💡 **Tragedy of the commons connection:** Open-ocean fish are a shared, unowned resource. Each boat benefits from catching more, but the *cost* of depletion is shared by all — so without rules, the rational individual choice drives collective collapse. (More on this in Part 7.)`,
      },
      {
        id: 'apsus4-dd-management',
        type: 'dropdown-select' as const,
        content: `**Match the Management Tool** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Largest harvest that doesn’t reduce future replenishment:', options: ['Maximum sustainable yield', 'Carrying capacity', 'Biocapacity', 'Ecological footprint'] },
            { label: '"No-take" ocean zone that lets fish stocks recover:', options: ['Marine Protected Area', 'Aquaculture pen', 'Crop rotation', 'Terrace'] },
            { label: 'Leaving crop residue on fields to cut erosion:', options: ['No-till farming', 'Clear-cutting', 'Monoculture', 'Overfishing'] },
            { label: 'Famous 1990s collapse from harvesting above sustainable yield:', options: ['Atlantic cod fishery', 'Geothermal field', 'Solar farm', 'Wind corridor'] },
          ],
          correctAnswers: ['Maximum sustainable yield', 'Marine Protected Area', 'No-till farming', 'Atlantic cod fishery'],
          hint1: 'The harvest concept is "maximum sustainable yield."',
          hint2: '"No-take" ocean zones are Marine Protected Areas.',
          hint3: 'Leaving residue = no-till; the cod fishery collapsed in the early 1990s.',
          explanation: 'MSY is the max harvest that preserves replenishment; MPAs are no-take recovery zones; no-till farming reduces erosion by keeping residue on the soil; and the Atlantic cod collapse is the classic overfishing case study.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'apes-sustainability',
    sections: [
      {
        id: 'apsus5-intro',
        type: 'text' as const,
        content: `# 🌱 Sustainability & the Future

**Part 5 of 7 — Waste, the Circular Economy & the 3 R's**

---

> 🔑 **The Idea:** The traditional **linear economy** is "take → make → dispose." A sustainable **circular economy** redesigns the loop so materials are reused and recycled indefinitely. The guiding hierarchy is the **3 R's** — and their order matters.`,
      },
      {
        id: 'apsus5-hierarchy',
        type: 'text' as const,
        content: `## The Waste Hierarchy (3 R's, in Order)

The 3 R's are ranked **best to worst** — the order is itself an exam favorite:

$$\\textbf{Reduce} \\;>\\; \\textbf{Reuse} \\;>\\; \\textbf{Recycle}$$

| Rank | R | What it means | Why it ranks here |
|------|---|---------------|-------------------|
| 1 (best) | **Reduce** | Use less / make less waste | Prevents the resource use entirely |
| 2 | **Reuse** | Use an item again as-is | No reprocessing energy needed |
| 3 | **Recycle** | Reprocess into new material | Better than landfill, but costs energy and quality degrades |

Below the 3 R's come **recovery** (e.g., composting, waste-to-energy) and, last of all, **disposal** (landfill, incineration without energy recovery).

> ⚠️ **Exam trap:** Recycling is the **least** preferred of the three R's, not the first thing to reach for. **Reducing** consumption is always the most sustainable choice because the most sustainable waste is the waste that is **never created**.`,
      },
      {
        id: 'apsus5-q-hierarchy',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'According to the waste hierarchy, which action is the MOST sustainable?',
              options: [
                'Reducing consumption so less waste is created in the first place',
                'Recycling everything you throw away',
                'Sending sorted waste to a modern landfill',
                'Incinerating waste for energy',
              ],
              correctAnswer: 0,
              explanation: 'The hierarchy is Reduce > Reuse > Recycle. Reducing is best because preventing resource use and waste entirely beats reprocessing or disposing of waste after it exists.',
            },
            {
              question: 'Why is reusing a glass bottle generally more sustainable than recycling it?',
              options: [
                'Reuse requires no energy-intensive reprocessing — the item is used again as-is',
                'Reuse destroys the bottle so it can’t pollute',
                'Recycling is always free of any environmental cost',
                'Reused bottles can never be cleaned',
              ],
              correctAnswer: 0,
              explanation: 'Reuse keeps the item in its current form, avoiding the energy, water, and material losses of melting and remanufacturing. Recycling is valuable but ranks below reuse because reprocessing consumes energy and often degrades material quality.',
            },
          ],
        },
      },
      {
        id: 'apsus5-circular',
        type: 'text' as const,
        content: `## Linear vs. Circular Economy

| Model | Flow | Outcome |
|-------|------|---------|
| **Linear economy** | Take → Make → Use → **Dispose** | Resources depleted; waste accumulates |
| **Circular economy** | Make → Use → **Recover** → Make again | Materials cycle; waste designed out |

A circular economy mimics nature, where there is **no "waste"** — every output becomes an input for something else (nutrient cycling). Strategies include designing products to last, to be repaired, and to be disassembled and recycled.

> 💡 **Composting is circularity in action:** Food and yard "waste" become nutrient-rich soil that grows the next crop — closing the loop instead of burying organic matter in a landfill (where it releases **methane**, a potent greenhouse gas).`,
      },
      {
        id: 'apsus5-input-recycle',
        type: 'input-boxes' as const,
        content: `**Recycling & Diversion Math** 🧮

The **diversion rate** is the percent of waste kept out of the landfill (recycled + composted).

**1)** A town generates 10,000 tons of waste per year and recycles or composts 6,500 tons of it. What is its diversion rate, as a percent? (enter just the number, e.g. 50 for 50%)
**2)** Aluminum recycling uses about 95% less energy than making new aluminum from ore. If new aluminum takes 100 units of energy per can, how many energy units does a recycled can take? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['65', '5'],
          hint1: 'Diversion rate = (diverted ÷ total) × 100 = (6,500 ÷ 10,000) × 100.',
          hint2: '6,500 ÷ 10,000 = 0.65 → 65%.',
          hint3: 'Saving 95% leaves 5%: 100 × 0.05 = 5 energy units.',
          explanation: '1) (6,500 / 10,000) × 100 = 65% diversion. 2) Recycling aluminum uses 5% of the original energy: 100 × 0.05 = 5 units. Aluminum is the poster child for recycling energy savings.',
        },
      },
      {
        id: 'apsus5-disposal',
        type: 'text' as const,
        content: `## When Waste Must Be Disposed

Not everything can be reduced, reused, or recycled. The two main disposal routes:

| Method | Pros | Cons |
|--------|------|------|
| **Sanitary landfill** | Lined to contain leachate; gas can be captured | Takes land; produces **methane**; leachate risk; permanent |
| **Incineration (waste-to-energy)** | Cuts volume ~90%; can generate electricity | Air pollution; toxic **ash**; discourages reduction |

Modern landfills capture **methane** (from anaerobic decomposition) and can burn it for energy. Still, both methods sit at the **bottom** of the hierarchy — they manage waste that better design would have prevented.

> ⚠️ **E-waste warning:** Electronic waste contains valuable metals **and** toxic heavy metals (lead, mercury, cadmium). Improper disposal contaminates soil and water, while proper recycling recovers scarce materials — a sustainability double-win when done right.`,
      },
      {
        id: 'apsus5-dd-waste',
        type: 'dropdown-select' as const,
        content: `**Rank & Match the Waste Concepts** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'The MOST preferred action in the waste hierarchy:', options: ['Reduce', 'Reuse', 'Recycle', 'Landfill'] },
            { label: 'The LEAST preferred of the three R’s:', options: ['Recycle', 'Reduce', 'Reuse', 'Compost'] },
            { label: 'Take → Make → Dispose describes a(n):', options: ['Linear economy', 'Circular economy', 'Closed loop', 'Compost cycle'] },
            { label: 'Greenhouse gas released by organic waste decomposing in landfills:', options: ['Methane (CH₄)', 'Oxygen (O₂)', 'Nitrogen (N₂)', 'Argon'] },
          ],
          correctAnswers: ['Reduce', 'Recycle', 'Linear economy', 'Methane (CH₄)'],
          hint1: 'The order is Reduce > Reuse > Recycle.',
          hint2: 'Recycle is third (least preferred of the three).',
          hint3: '"Take-make-dispose" is the linear model; landfills emit methane.',
          explanation: 'Reduce is best and Recycle is the least preferred of the three R’s. "Take-make-dispose" is the linear economy (vs. circular), and decomposing organic waste in landfills releases methane, a potent greenhouse gas.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'apes-sustainability',
    sections: [
      {
        id: 'apsus6-intro',
        type: 'text' as const,
        content: `# 🌱 Sustainability & the Future

**Part 6 of 7 — Green Solutions: Buildings, Cities & Efficiency**

---

> 🔑 **The Idea:** Sustainability isn't only about energy *sources* — it's about using **less** energy and water to get the same service. **Efficiency** is often the cheapest, fastest "source" of all, and smart **design** of buildings and cities locks in low impact for decades.`,
      },
      {
        id: 'apsus6-efficiency',
        type: 'text' as const,
        content: `## Efficiency: The "First Fuel"

Using energy more efficiently delivers the same comfort or output with less input — cutting both cost and pollution. Examples:

| Measure | Effect |
|---------|--------|
| **LED lighting** | ~75–80% less energy than incandescent bulbs |
| **Insulation & efficient windows** | Less heating/cooling demand |
| **Heat pumps** | Move heat rather than generate it — very high efficiency |
| **Cogeneration (CHP)** | Captures "waste" heat from power generation for heating |
| **Fuel-efficient / electric vehicles** | More distance per unit of energy |

> 💡 **Why efficiency is "the first fuel":** Every unit of energy *not* used needs no power plant, no fuel, and produces no emissions. Efficiency is usually **cheaper** than building new generation of any kind — including renewables.

> ⚠️ **Jevons paradox / rebound effect:** Efficiency gains can be partly offset if people then *use more* (e.g., a fuel-efficient car driven much farther). Real savings require efficiency **plus** mindful consumption.`,
      },
      {
        id: 'apsus6-q-efficiency',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why is energy efficiency often called the cheapest "source" of energy?',
              options: [
                'Energy that is never used requires no new power plant, no fuel, and produces no emissions',
                'Efficiency programs generate brand-new electricity directly',
                'Efficiency only works for fossil-fuel plants',
                'Efficiency increases total energy demand',
              ],
              correctAnswer: 0,
              explanation: 'Saving a unit of energy is usually cheaper than producing one. Avoided demand needs no generation, no fuel, and emits nothing — so efficiency acts like a clean, low-cost "source," often called the "first fuel."',
            },
            {
              question: 'The "rebound effect" (Jevons paradox) describes how efficiency gains can be partly offset when:',
              options: [
                'Cheaper-to-run, efficient technology leads people to use MORE of it',
                'Efficient devices use more energy than inefficient ones',
                'Efficiency is impossible to achieve',
                'Renewable energy replaces all fossil fuels overnight',
              ],
              correctAnswer: 0,
              explanation: 'When a device becomes cheaper to operate, people may use it more (driving an efficient car farther, lighting more rooms), eating into the expected savings. Efficiency works best paired with mindful consumption.',
            },
          ],
        },
      },
      {
        id: 'apsus6-buildings',
        type: 'text' as const,
        content: `## Green Buildings & Smart Cities

Buildings and cities are designed for decades, so good design has an outsized, long-lasting effect.

**Green buildings** (often certified under standards like **LEED**) use:
- Passive solar design, daylighting, and high insulation
- Efficient HVAC, lighting, and appliances
- **Green roofs** (insulation + stormwater capture + habitat)
- Water-saving fixtures and **greywater** reuse

**Sustainable cities** add:
- **Public transit, biking, and walkability** to cut car dependence
- **Mixed-use, higher-density** zoning so destinations are close together
- Urban green space and tree canopy to fight the **urban heat-island** effect

> 💡 **Density is green:** Compact, transit-oriented cities have a **lower per-capita footprint** than sprawling, car-dependent suburbs — shorter trips, shared walls (less heating/cooling), and less land converted per person.`,
      },
      {
        id: 'apsus6-input-payback',
        type: 'input-boxes' as const,
        content: `**Efficiency Payback Math** 🧮

**Payback period** = upfront cost ÷ annual savings. It tells you how many years until an investment pays for itself.

**1)** A homeowner installs solar panels for \\$12,000 and saves \\$1,500 per year on electricity. What is the simple payback period, in years? (enter the number)
**2)** Switching to LED bulbs costs \\$40 and saves \\$10 per year. What is the payback period, in years? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['8', '4'],
          hint1: 'Payback period = cost ÷ annual savings.',
          hint2: 'Solar: \\$12,000 ÷ \\$1,500/yr.',
          hint3: 'LED: \\$40 ÷ \\$10/yr = 4 years.',
          explanation: '1) \\$12,000 ÷ \\$1,500/yr = 8 years. 2) \\$40 ÷ \\$10/yr = 4 years. After payback, the savings are essentially "profit," and the shorter the payback, the more attractive the investment.',
        },
      },
      {
        id: 'apsus6-water',
        type: 'text' as const,
        content: `## Sustainable Water Use

Freshwater is renewable but **finite** locally, and many regions withdraw it faster than it recharges (mining fossil aquifers like the **Ogallala**). Sustainable water strategies:

| Strategy | How it helps |
|----------|--------------|
| **Drip irrigation** | Delivers water to roots; far less evaporation than flood/spray |
| **Xeriscaping** | Native, drought-tolerant landscaping needs little water |
| **Greywater reuse** | Reuses sink/shower water for irrigation |
| **Rainwater harvesting** | Captures runoff for later use |
| **Low-flow fixtures & leak repair** | Cut household demand |

> 🔑 **The recurring theme:** Whether the resource is energy, soil, fish, or water, sustainability is the same move — keep withdrawals **at or below** the renewal rate, and use each unit as **efficiently** as possible.`,
      },
      {
        id: 'apsus6-dd-green',
        type: 'dropdown-select' as const,
        content: `**Match the Green Strategy** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Delivers water straight to crop roots, minimizing evaporation:', options: ['Drip irrigation', 'Flood irrigation', 'Clear-cutting', 'Incineration'] },
            { label: 'Compact, transit-oriented design lowers a city’s:', options: ['Per-capita ecological footprint', 'Biocapacity', 'Rainfall', 'Soil pH'] },
            { label: 'Roof planting that insulates and captures stormwater:', options: ['Green roof', 'Asphalt roof', 'Landfill cap', 'Cooling tower'] },
            { label: 'Efficiency gains offset by increased use is the:', options: ['Rebound effect', 'Carrying capacity', 'Tragedy of the commons', 'Diversion rate'] },
          ],
          correctAnswers: ['Drip irrigation', 'Per-capita ecological footprint', 'Green roof', 'Rebound effect'],
          hint1: 'Drip = water to roots; spray/flood waste more to evaporation.',
          hint2: 'Dense, walkable, transit cities cut the footprint per person.',
          hint3: 'Planted roofs = green roofs; using more after efficiency gains = rebound.',
          explanation: 'Drip irrigation minimizes evaporative loss; compact transit-oriented design lowers per-capita footprint; green roofs insulate and capture stormwater; and the rebound effect (Jevons paradox) is when efficiency gains are offset by greater use.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'apes-sustainability',
    sections: [
      {
        id: 'apsus7-intro',
        type: 'text' as const,
        content: `# 🌱 Sustainability & the Future

**Part 7 of 7 — Policy, the Commons & Mastery Check**

---

You now know what sustainability means, how to measure it (footprint, MSY), and how to pursue it across energy, food, waste, and cities. This final part covers the **economics and policy** that drive change — then a mixed review and an Exit Quiz.`,
      },
      {
        id: 'apsus7-commons',
        type: 'text' as const,
        content: `## The Tragedy of the Commons

Ecologist **Garrett Hardin** described the **tragedy of the commons**: when a shared, unowned resource (a "commons") is open to all, each user gains the **full benefit** of taking more, but the **cost of depletion is spread across everyone**. So each individual rationally over-uses, and the shared resource collapses.

| Commons | Individual incentive | Collective result |
|---------|----------------------|-------------------|
| Ocean fisheries | Catch more fish now | Stock collapses (e.g., cod) |
| Atmosphere | Emit CO₂ for free | Climate change for all |
| Aquifer | Pump more groundwater | Aquifer depletes for everyone |

**Solutions** generally fall into a few categories:
- **Regulation** (catch limits, emission caps, protected areas)
- **Privatization / property rights** (owners protect their own resource)
- **Community management** (local rules, as economist **Elinor Ostrom** showed can work)
- **Pricing the externality** (make polluters pay the true cost)

> 🔑 **Why it matters for sustainability:** Most environmental problems are commons problems. Sustainability requires aligning **individual incentives** with the **collective long-term good** — usually through policy.`,
      },
      {
        id: 'apsus7-q-commons',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The "tragedy of the commons" occurs because, with an open shared resource:',
              options: [
                'Each user reaps the full benefit of overuse while the cost of depletion is shared by all, driving collective collapse',
                'Resources are always protected by their owners',
                'No one ever wants to use the resource',
                'The government automatically prevents all overuse',
              ],
              correctAnswer: 0,
              explanation: 'In a commons, the benefit of taking more is private and immediate, but the cost of depletion is diffuse and shared. Each rational individual over-uses, and the shared resource collapses — the core logic Hardin described.',
            },
            {
              question: 'Which is NOT a standard solution to a tragedy-of-the-commons problem?',
              options: [
                'Leaving the resource completely unregulated and hoping users restrain themselves',
                'Government regulation such as catch limits or emission caps',
                'Assigning property rights so owners protect the resource',
                'Community-based management with enforceable local rules',
              ],
              correctAnswer: 0,
              explanation: 'Leaving the commons unregulated is the very situation that produces the tragedy. Regulation, property rights, and community management (Ostrom) are the recognized ways to align individual incentives with the long-term collective good.',
            },
          ],
        },
      },
      {
        id: 'apsus7-policy',
        type: 'text' as const,
        content: `## Policy Tools: Pricing the Externality

A **negative externality** is a cost of an activity borne by **third parties** (or future generations) rather than the producer — like pollution. Markets ignore externalities, so policy "internalizes" them:

| Tool | How it works |
|------|--------------|
| **Carbon tax** | Charge per ton of CO₂ → makes polluting fuels cost their true price |
| **Cap-and-trade** | Set a total cap; let firms buy/sell emission allowances |
| **Subsidies** | Lower the cost of clean tech (solar, EVs) to speed adoption |
| **Removing fossil-fuel subsidies** | Stop artificially cheapening pollution |
| **Standards & mandates** | Efficiency standards, renewable portfolio standards |

International cooperation is essential for global commons. Key agreements:

| Agreement | Target |
|-----------|--------|
| **Montreal Protocol (1987)** | Phased out **CFCs** to heal the **ozone layer** — the great success story |
| **Kyoto Protocol (1997)** | First binding greenhouse-gas targets (developed nations) |
| **Paris Agreement (2015)** | Nearly all nations pledge to limit warming (voluntary national targets) |

> ⚠️ **Classic distinction:** **Montreal Protocol = CFCs / ozone layer**; **Paris Agreement = CO₂ / climate change**. Don't swap them. Montreal is celebrated because nearly universal participation actually shrank the ozone hole.`,
      },
      {
        id: 'apsus7-input-tax',
        type: 'input-boxes' as const,
        content: `**Carbon-Pricing Math** 🧮

**1)** A carbon tax is set at \\$50 per ton of CO₂. A factory emits 2,000 tons of CO₂ per year. What is its annual carbon-tax bill, in dollars? (enter just the number)
**2)** The factory then cuts emissions by 30%. How many tons of CO₂ does it now emit per year? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['100000', '1400'],
          hint1: 'Tax bill = rate × emissions = \\$50 × 2,000 tons.',
          hint2: '\\$50 × 2,000 = \\$100,000 per year.',
          hint3: 'A 30% cut leaves 70%: 2,000 × 0.70 = 1,400 tons.',
          explanation: '1) \\$50/ton × 2,000 tons = \\$100,000/year — the tax gives the factory a financial reason to cut emissions. 2) Cutting 30% leaves 70%: 2,000 × 0.70 = 1,400 tons. (Their new bill would be \\$50 × 1,400 = \\$70,000.)',
        },
      },
      {
        id: 'apsus7-future',
        type: 'text' as const,
        content: `## Pulling It Together: A Sustainable Future

Every topic in this lesson is one application of a single principle:

> 🔑 **Live on the interest, not the principal — and use each unit as efficiently as possible.**

| Domain | Sustainable move |
|--------|------------------|
| Energy | Shift to renewables + efficiency ("first fuel") |
| Food / soil | Harvest at/below MSY; protect topsoil |
| Water | Withdraw at/below recharge; drip + reuse |
| Materials | Reduce > Reuse > Recycle; circular economy |
| Cities | Density, transit, green buildings |
| Policy | Price externalities; manage the commons |

The encouraging news is that solutions exist and are being deployed: renewable costs have plummeted, the ozone layer is healing, and circular-economy practices are spreading. Sustainability is fundamentally a question of **choices and incentives** — which is why understanding it is the whole point of this course.`,
      },
      {
        id: 'apsus7-dd-policy',
        type: 'dropdown-select' as const,
        content: `**Match Policy to Purpose** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'A cost imposed on third parties, like pollution, is a(n):', options: ['Negative externality', 'Subsidy', 'Ecosystem service', 'Biocapacity'] },
            { label: 'Set a total cap, then let firms trade emission allowances:', options: ['Cap-and-trade', 'Carbon tax', 'Xeriscaping', 'Crop rotation'] },
            { label: 'Treaty that phased out CFCs to heal the ozone layer:', options: ['Montreal Protocol', 'Paris Agreement', 'Clean Water Act', 'Kyoto Protocol'] },
            { label: '2015 treaty where nearly all nations pledged to limit warming:', options: ['Paris Agreement', 'Montreal Protocol', 'Endangered Species Act', 'Brundtland Report'] },
          ],
          correctAnswers: ['Negative externality', 'Cap-and-trade', 'Montreal Protocol', 'Paris Agreement'],
          hint1: 'A pollution cost paid by others is a negative externality.',
          hint2: 'Cap the total, then trade allowances = cap-and-trade.',
          hint3: 'Montreal = CFCs/ozone; Paris (2015) = climate/CO₂.',
          explanation: 'Pollution is a negative externality; cap-and-trade caps total emissions and lets firms trade allowances; the Montreal Protocol phased out CFCs (ozone layer); and the 2015 Paris Agreement is the near-universal climate pledge.',
        },
      },
      {
        id: 'apsus7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Concept | Key fact |
|---------|----------|
| Sustainability | Meet present needs without compromising the future (Brundtland) |
| Renewable vs. nonrenewable | Replenished on human timescale vs. effectively finite |
| Natural capital | Live on the "interest" (services/yields), not the "principal" |
| Ecological footprint | Demand (gha); compare to **biocapacity** (supply) |
| IPAT | Impact = Population × Affluence × Technology |
| Maximum sustainable yield | Harvest ≤ regrowth; peaks near K/2 |
| 3 R's order | **Reduce > Reuse > Recycle** |
| Circular economy | Designs out waste; vs. linear take-make-dispose |
| Efficiency | The cheapest "first fuel"; watch the rebound effect |
| Tragedy of the commons | Shared resource → individual overuse → collapse |
| Externalities | Internalize via carbon tax / cap-and-trade |
| Treaties | Montreal = CFCs/ozone; Paris = CO₂/climate |

> ⚠️ Top traps: renewable ≠ automatically sustainable; nuclear is low-carbon but **nonrenewable**; **Reduce** beats recycle; report the footprint as **demand vs. biocapacity**; Montreal (ozone) ≠ Paris (climate).`,
      },
      {
        id: 'apsus7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A forest is harvested every year at exactly the rate it regrows, leaving the total standing timber unchanged. This is an example of:',
              options: [
                'Sustainable use at the maximum sustainable yield',
                'Ecological overshoot',
                'A nonrenewable resource being depleted',
                'The rebound effect',
              ],
              correctAnswer: 0,
              explanation: 'Harvesting at the rate of regrowth keeps the resource stock constant indefinitely — the definition of sustainable harvesting at (or near) the maximum sustainable yield.',
            },
            {
              question: 'Which correctly pairs an environmental treaty with its target?',
              options: [
                'Montreal Protocol → phased out CFCs to protect the ozone layer',
                'Montreal Protocol → set binding CO₂ targets for climate',
                'Paris Agreement → banned ozone-depleting CFCs',
                'Kyoto Protocol → created Marine Protected Areas',
              ],
              correctAnswer: 0,
              explanation: 'The Montreal Protocol (1987) phased out CFCs to heal the stratospheric ozone layer. The Kyoto Protocol and Paris Agreement target greenhouse gases / climate change, not the ozone layer.',
            },
          ],
        },
      },
      {
        id: 'apsus7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A nation’s ecological footprint exceeds its biocapacity. The best interpretation is that the nation is:',
              options: [
                'In ecological overshoot, consuming resources faster than they can be regenerated',
                'Perfectly sustainable with surplus capacity',
                'Using exclusively renewable resources',
                'Producing zero waste',
              ],
              correctAnswer: 0,
              explanation: 'Footprint (demand) greater than biocapacity (supply) means the nation is in ecological overshoot — drawing down natural capital rather than living on its renewable interest.',
            },
            {
              question: 'According to the waste hierarchy, the single MOST sustainable strategy is to:',
              options: [
                'Reduce — prevent the waste from being created in the first place',
                'Recycle as much as possible',
                'Incinerate waste for energy',
                'Send waste to a lined sanitary landfill',
              ],
              correctAnswer: 0,
              explanation: 'The hierarchy ranks Reduce > Reuse > Recycle, with disposal last. Reducing consumption prevents resource use and waste entirely, which beats reprocessing or disposing of waste that already exists.',
            },
            {
              question: 'The tragedy of the commons predicts that a shared, unregulated ocean fishery will tend to be:',
              options: [
                'Overharvested, because each boat gains from catching more while the cost of depletion is shared by all',
                'Automatically protected by the boats that use it',
                'Left unused because no one owns it',
                'Sustainable without any rules or limits',
              ],
              correctAnswer: 0,
              explanation: 'With a shared, open-access resource, the benefit of overharvesting is private but the cost of depletion is shared — so individuals over-use and the fishery collapses unless regulation, property rights, or community management intervenes.',
            },
          ],
        },
      },
    ],
  },
]
