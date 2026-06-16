import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Solid & Hazardous Waste (AP Environmental Science).
 * Registry key / DB Topic.slug: 'apes-solid-hazardous-waste'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot
 * and the sibling apes-air-pollution lesson: teach (text) → interactive check
 * (multiple-choice / dropdown-select / input-boxes) → worked applications → Exit Quiz.
 * Concept-forward (non-math topic), so checks favor multiple-choice + dropdown, with a
 * few quantitative input-boxes (per-capita generation, volume reduction, recycling rates,
 * landfill methane). LaTeX uses DOUBLED backslashes (template-literal strings); chemical
 * formulas use Unicode subscripts to match the existing APES lessons.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'apes-solid-hazardous-waste',
    sections: [
      {
        id: 'apesw1-intro',
        type: 'text' as const,
        content: `# 🗑️ Solid & Hazardous Waste

**Part 1 of 7 — What Is Waste? Streams, Composition & Generation**

---

### Topics in This Part

| Section |
|---------|
| Defining Solid vs. Hazardous Waste |
| The Major Waste Streams |
| What's in Municipal Solid Waste (MSW) |
| Who Generates the Most |

> 🔑 **Key Concept:** "Waste" is just material we have decided has no further value — but that decision is economic and cultural, not physical. The exam rewards you for knowing **where waste comes from**, **what it's made of**, and **how the waste hierarchy ranks our options** for dealing with it.`,
      },
      {
        id: 'apesw1-define',
        type: 'text' as const,
        content: `## Solid Waste vs. Hazardous Waste

| Term | Definition | Examples |
|------|------------|----------|
| **Solid waste** | Any discarded material that is not a liquid or gas (the everyday "trash") | Packaging, food scraps, yard trimmings, paper, old furniture |
| **Municipal solid waste (MSW)** | The fraction of solid waste collected from homes, schools, and businesses | The contents of your curbside bin |
| **Hazardous waste** | Waste that is **ignitable, corrosive, reactive, or toxic** — dangerous to health/environment | Solvents, batteries, pesticides, motor oil, many electronics |
| **E-waste** | Discarded electronics (a fast-growing, often hazardous stream) | Phones, laptops, TVs, circuit boards |

A crucial scale point: **MSW is only a small slice of all waste.** Industrial, mining, and agricultural wastes vastly outweigh household trash by mass — but MSW is the part individuals control directly.

> 💡 **"Solid" is a legal category, not a physical one.** Under U.S. law (RCRA), a "solid waste" can include certain liquids and sludges. For the AP exam, focus on the *function*: solid waste = the discarded materials of everyday life; hazardous waste = the dangerous subset defined by the four characteristics you'll meet in Part 5.`,
      },
      {
        id: 'apesw1-q-define',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement about municipal solid waste (MSW) is correct?',
              options: [
                'MSW is the household, school, and business trash collected at the curb — only a small fraction of all waste generated',
                'MSW is the single largest category of waste by mass in the United States',
                'MSW includes all mining and industrial waste',
                'MSW refers only to hazardous chemical waste',
              ],
              correctAnswer: 0,
              explanation: 'MSW is everyday curbside trash from homes, schools, and businesses. By mass it is far smaller than industrial, mining, and agricultural waste streams — but it is the portion individuals most directly influence.',
            },
            {
              question: 'A waste is legally classified as HAZARDOUS if it is:',
              options: [
                'Ignitable, corrosive, reactive, or toxic',
                'Simply large or heavy',
                'Any material that is wet',
                'Only material that is radioactive',
              ],
              correctAnswer: 0,
              explanation: 'Under RCRA, the four characteristics that define hazardous waste are ignitability, corrosivity, reactivity, and toxicity (you will study these in Part 5). Radioactive waste is regulated separately.',
            },
          ],
        },
      },
      {
        id: 'apesw1-streams',
        type: 'text' as const,
        content: `## The Major Waste Streams

Where does waste actually come from? By mass, most U.S. waste is **never** in your trash can:

| Waste Stream | Source | Relative Mass |
|--------------|--------|---------------|
| **Mining waste** | Tailings, overburden from extracting ore | Largest |
| **Agricultural waste** | Crop residue, manure | Very large |
| **Industrial waste** | Manufacturing byproducts | Large |
| **Municipal solid waste (MSW)** | Homes, schools, businesses | Small (but visible) |

> ⚠️ **Common misconception:** Most people picture "waste" as household garbage, but **mining and agriculture produce far more waste by mass** than all the world's households combined. MSW gets the attention because it's collected publicly and is what consumers can change.`,
      },
      {
        id: 'apesw1-composition',
        type: 'text' as const,
        content: `## What's Inside Municipal Solid Waste

EPA tracks the composition of U.S. MSW *as generated* (before recycling). The biggest categories:

| Material | Approx. share of MSW (by mass) |
|----------|-------------------------------|
| **Paper & paperboard** | ~23% |
| **Food waste** | ~22% |
| **Plastics** | ~13% |
| **Yard trimmings** | ~12% |
| **Metals** | ~9% |
| **Wood** | ~6% |
| **Glass, textiles, rubber, other** | remainder |

> 🔑 **Two key takeaways for the exam:** (1) **Paper** and **food waste** are the two largest components of MSW. (2) A huge share of MSW is **organic** (paper, food, yard trimmings, wood) — material that could be **composted or recycled** instead of buried, which is the central argument of the waste hierarchy in Part 4.`,
      },
      {
        id: 'apesw1-dd-composition',
        type: 'dropdown-select' as const,
        content: `**Sort the Waste Stream** 🔽

Use what you know about MSW composition and waste streams.`,
        exercise: {
          dropdowns: [
            { label: 'The single largest waste stream by mass overall is:', options: ['Mining waste', 'Municipal solid waste', 'E-waste', 'Hazardous solvents'] },
            { label: 'The largest single category within MSW is typically:', options: ['Paper & paperboard', 'Glass', 'Metals', 'Rubber'] },
            { label: 'Food scraps, yard trimmings, and paper are all examples of:', options: ['Organic (compostable/recyclable) waste', 'Hazardous waste', 'Inert mining tailings', 'Radioactive waste'] },
          ],
          correctAnswers: ['Mining waste', 'Paper & paperboard', 'Organic (compostable/recyclable) waste'],
          hint1: 'Household trash is small compared with extracting ore from the ground.',
          hint2: 'Paper and food are the two biggest slices of curbside trash.',
          hint3: 'These come from living things, so they break down and can be composted or recycled.',
          explanation: 'Mining produces the most waste by mass overall. Within MSW, paper & paperboard is the largest category, and a large share of MSW is organic (food, yard trimmings, paper) — material well-suited to composting or recycling rather than burial.',
        },
      },
      {
        id: 'apesw1-percapita',
        type: 'text' as const,
        content: `## How Much Do We Generate?

The United States generates roughly **4.9 pounds of MSW per person per day** — among the highest rates in the world. Generation rises with:

- **Affluence / income** (more buying → more discarding)
- **Industrialization & urbanization**
- **Packaging and single-use culture**

| Country type | Typical per-capita waste |
|--------------|--------------------------|
| Wealthy, industrialized (U.S.) | High |
| Rapidly developing | Rising fast |
| Low-income | Lower (but often poorly managed) |

> 💡 **Affluence cuts both ways.** Wealthier nations *generate* more waste per person, but they also have the resources for sanitary landfills, recycling, and regulation. Poorer nations often generate less per person but lack safe disposal — leading to open dumps and burning.`,
      },
      {
        id: 'apesw1-input-percapita',
        type: 'input-boxes' as const,
        content: `**Per-Capita Math** 🧮

Use the U.S. rate of about **4.9 pounds of MSW per person per day**.

**1)** About how many pounds of MSW does one American generate in a 7-day week? (round to the nearest whole number)
**2)** A town has 10,000 residents. About how many pounds of MSW does the whole town generate in a single day? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['34', '49000'],
          hint1: 'Multiply the daily rate by the number of days or people.',
          hint2: '$4.9 \\times 7 = 34.3$, which rounds to 34 pounds per week.',
          hint3: '$4.9 \\times 10{,}000 = 49{,}000$ pounds per day for the town.',
          explanation: '1) $4.9 \\times 7 = 34.3 \\approx 34$ pounds per person per week. 2) $4.9 \\times 10{,}000 = 49{,}000$ pounds per day. Scaling a per-capita rate up to a population is a classic AP free-response move.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'apes-solid-hazardous-waste',
    sections: [
      {
        id: 'apesw2-intro',
        type: 'text' as const,
        content: `# 🗑️ Solid & Hazardous Waste

**Part 2 of 7 — Sanitary Landfills**

---

> 🔑 **The Idea:** A modern **sanitary landfill** is not a hole full of garbage — it is an engineered containment system designed to keep two things from escaping: **leachate** (toxic liquid) below, and **methane** (explosive greenhouse gas) above.`,
      },
      {
        id: 'apesw2-design',
        type: 'text' as const,
        content: `## Anatomy of a Sanitary Landfill

Garbage is dumped, compacted, and covered with soil **daily**. The whole pile sits inside an engineered "bathtub":

| Component | Job |
|-----------|-----|
| **Clay + plastic (geomembrane) liner** | Bottom barrier that stops liquids from reaching groundwater |
| **Leachate collection system** | Pipes that drain and pump out the toxic liquid for treatment |
| **Methane recovery wells** | Capture the gas produced as buried organics decompose |
| **Daily soil cover** | Reduces odor, pests, and blowing litter |
| **Final cap (clay + soil + vegetation)** | Seals the top when full; sheds rainwater |
| **Monitoring wells** | Test surrounding groundwater for leaks |

> 💡 **The two enemies:** **leachate** going *down* into groundwater, and **methane** coming *up* into the air. Every design feature targets one of these two escapes.`,
      },
      {
        id: 'apesw2-leachate',
        type: 'text' as const,
        content: `## Leachate: The Liquid Threat

**Leachate** is the contaminated liquid that forms when rainwater **percolates down** through the buried waste, dissolving chemicals, heavy metals, and organic compounds along the way.

$$\\text{Rainwater} \\;+\\; \\text{buried waste} \\;\\longrightarrow\\; \\text{leachate (toxic liquid)}$$

If the liner fails, leachate can contaminate the **groundwater / aquifer** below — the most serious landfill pollution risk. That is why a sanitary landfill has:

- A **double liner** (compacted clay plus a plastic geomembrane)
- A **leachate collection** layer of pipes that drains the liquid to be treated
- **Monitoring wells** around the perimeter to detect any leak early

> ⚠️ **Exam favorite:** The primary reason landfills are lined and monitored is to protect **groundwater** from **leachate**. An *open dump* (no liner) lets leachate flow straight into the water table — the key contrast with a sanitary landfill.`,
      },
      {
        id: 'apesw2-q-leachate',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Leachate is best described as:',
              options: [
                'Toxic liquid formed when water percolates down through buried waste',
                'The methane gas released by decomposing garbage',
                'The soil placed over waste each day',
                'Recycled plastic pellets',
              ],
              correctAnswer: 0,
              explanation: 'Leachate is the contaminated liquid produced when rainwater seeps through waste and dissolves pollutants. It is the chief threat to groundwater, which is why landfills are lined and have leachate-collection pipes.',
            },
            {
              question: 'The clay-and-plastic liner at the bottom of a sanitary landfill exists primarily to:',
              options: [
                'Prevent leachate from contaminating the groundwater below',
                'Trap methane so it can be burned for energy',
                'Reduce odor and blowing litter at the surface',
                'Speed up decomposition of the waste',
              ],
              correctAnswer: 0,
              explanation: 'The bottom liner is a barrier against downward-moving leachate, protecting the aquifer. Methane is handled by recovery wells at the top; odor and litter are handled by daily soil cover.',
            },
          ],
        },
      },
      {
        id: 'apesw2-methane',
        type: 'text' as const,
        content: `## Methane: The Gas Threat

As buried organic waste (food, paper, yard trimmings) decomposes **without oxygen** — **anaerobically** — bacteria produce **landfill gas**, which is roughly half **methane (CH₄)** and half **carbon dioxide (CO₂)**.

$$\\text{Organic waste} \\xrightarrow{\\text{anaerobic bacteria}} \\text{CH}_4 \\;+\\; \\text{CO}_2$$

Methane is a problem for two reasons:

1. **Explosion / fire hazard** if it builds up.
2. **Potent greenhouse gas** — methane traps far more heat per molecule than CO₂ (over a ~100-year window, roughly **25–30× stronger**).

The fix: **methane recovery wells** collect the gas. It can then be **flared** (burned off) or, better, **burned to generate electricity** — turning a pollutant into an energy source.

> 🔑 **Best-case outcome:** Captured landfill methane is used as fuel. This both **prevents a potent greenhouse gas** from escaping *and* **produces energy**, which is why landfill-gas-to-energy is considered a win-win.`,
      },
      {
        id: 'apesw2-dd-landfill',
        type: 'dropdown-select' as const,
        content: `**Match Component to Function** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Protects groundwater from toxic liquid:', options: ['Clay + plastic liner', 'Methane recovery well', 'Daily soil cover', 'Monitoring well'] },
            { label: 'Captures CH₄ from decomposing organics:', options: ['Methane recovery well', 'Leachate liner', 'Final cap', 'Scrubber'] },
            { label: 'Reduces odor, pests, and blowing litter:', options: ['Daily soil cover', 'Leachate pipes', 'Geomembrane liner', 'Flare stack'] },
            { label: 'Detects leaks in the surrounding aquifer:', options: ['Monitoring well', 'Methane well', 'Compactor', 'Final cap'] },
          ],
          correctAnswers: ['Clay + plastic liner', 'Methane recovery well', 'Daily soil cover', 'Monitoring well'],
          hint1: 'The bottom barrier stops downward-moving leachate.',
          hint2: 'A dedicated well taps the gas building up inside the pile.',
          hint3: 'Soil spread each day controls surface problems; perimeter wells test the water.',
          explanation: 'Liner → blocks leachate (protects groundwater); methane recovery well → captures CH₄; daily soil cover → controls odor/pests/litter; monitoring wells → detect groundwater contamination.',
        },
      },
      {
        id: 'apesw2-gas-numbers',
        type: 'text' as const,
        content: `## Putting Numbers on Landfill Gas

Engineers size methane-recovery systems using two facts:

- Landfill gas is roughly **half methane, half CO₂** by volume, so the methane you can capture is about **50%** of the total gas collected.
- Each ton of methane that **escapes** carries the warming punch of roughly **25 tons of CO₂** over a century.

Multiplying those out shows why capture is worth the investment — even a modest gas-collection system prevents a large amount of CO₂-equivalent warming.

> 💡 **Setup:** The math below uses the 50% rule and the 25× warming factor. Keep them straight — one is a *volume* split, the other a *warming-potency* multiplier.`,
      },
      {
        id: 'apesw2-input-methane',
        type: 'input-boxes' as const,
        content: `**Landfill Gas Math** 🧮

Landfill gas is roughly **50% methane (CH₄)** and **50% carbon dioxide (CO₂)** by volume.

**1)** A landfill captures 800,000 cubic meters of landfill gas in a year. About how many cubic meters of that are methane? (enter the number)
**2)** Methane traps about 25 times as much heat per unit as CO₂. If 100 tons of methane escape uncaptured, that is equivalent to how many tons of CO₂ in warming potential? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['400000', '2500'],
          hint1: 'Half of the landfill gas is methane.',
          hint2: '$800{,}000 \\times 0.50 = 400{,}000$ cubic meters of CH₄.',
          hint3: 'Multiply the methane mass by its warming factor: $100 \\times 25 = 2500$.',
          explanation: '1) $800{,}000 \\times 0.50 = 400{,}000$ m³ of methane. 2) $100 \\text{ tons} \\times 25 = 2500$ tons of CO₂-equivalent. This is why capturing landfill methane has such a large climate payoff.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'apes-solid-hazardous-waste',
    sections: [
      {
        id: 'apesw3-intro',
        type: 'text' as const,
        content: `# 🗑️ Solid & Hazardous Waste

**Part 3 of 7 — Incineration & Waste-to-Energy**

---

> 🔑 **The Idea:** **Incineration** burns waste. Its great advantage is **drastic volume reduction**; its great cost is **air pollution and toxic ash**. Modern "waste-to-energy" (WTE) plants try to capture the benefit (energy) while controlling the cost (emissions).`,
      },
      {
        id: 'apesw3-incineration',
        type: 'text' as const,
        content: `## How Incineration Works

In **mass burn** incineration, mixed MSW is burned at high temperature. The result:

| Outcome | Detail |
|---------|--------|
| **Volume reduction** | Cuts waste **volume by ~80–90%** and mass by ~75% |
| **Energy recovery (WTE)** | Heat boils water → steam → spins a turbine → electricity |
| **Bottom ash** | Heavier residue left in the furnace (less toxic) |
| **Fly ash** | Light ash trapped by air-pollution controls — **concentrated toxics** (heavy metals, dioxins) |
| **Air emissions** | Without controls: dioxins, heavy metals (e.g., mercury), particulates, acid gases |

> ⚠️ **The ash paradox:** Incineration shrinks the *volume* of waste enormously, but the remaining **fly ash is often hazardous** — it concentrates heavy metals and dioxins and must itself be disposed of carefully (often in a lined hazardous-waste landfill). Burning doesn't make toxics disappear; it concentrates them.`,
      },
      {
        id: 'apesw3-q-incin',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The PRIMARY advantage of incinerating municipal solid waste is that it:',
              options: [
                'Dramatically reduces the volume of waste (and can generate energy)',
                'Completely eliminates all toxic materials with no residue',
                'Produces no air pollution of any kind',
                'Turns waste directly into recyclable plastic',
              ],
              correctAnswer: 0,
              explanation: 'Incineration shrinks waste volume by roughly 80–90% and can recover energy (waste-to-energy). It does not eliminate toxics — they concentrate in the ash and exhaust, which must be controlled.',
            },
            {
              question: 'Why is the FLY ASH from a waste incinerator a particular concern?',
              options: [
                'It concentrates heavy metals and dioxins, making it hazardous',
                'It is pure carbon and harmless',
                'It is the same as ordinary garden compost',
                'It contains no metals because they all burn away',
              ],
              correctAnswer: 0,
              explanation: 'Fly ash is the fine ash captured by pollution-control equipment. Because burning concentrates non-combustible toxics, fly ash holds high levels of heavy metals and dioxins and often must go to a hazardous-waste landfill.',
            },
          ],
        },
      },
      {
        id: 'apesw3-wte',
        type: 'text' as const,
        content: `## Waste-to-Energy (WTE)

A **waste-to-energy** plant is an incinerator that recovers the heat to make electricity:

$$\\text{Waste} \\xrightarrow{\\text{burn}} \\text{heat} \\rightarrow \\text{steam} \\rightarrow \\text{turbine} \\rightarrow \\text{electricity}$$

| Pros of WTE | Cons of WTE |
|-------------|-------------|
| Massive volume reduction (saves landfill space) | Air emissions (require scrubbers, precipitators, filters) |
| Generates electricity | Toxic fly ash must be landfilled |
| Reduces methane that landfilling organics would make | High capital cost to build |
| Can recover metals from ash | May **discourage recycling** (needs a steady fuel supply of trash) |

> 💡 **The recycling tension:** A WTE plant is a big investment that needs a constant stream of burnable trash to pay off. Critics argue this can create a perverse incentive to keep generating waste rather than reduce and recycle it — placing WTE **below** recycling in the waste hierarchy (Part 4).`,
      },
      {
        id: 'apesw3-dd-incin',
        type: 'dropdown-select' as const,
        content: `**Incineration Trade-offs** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'The biggest benefit of incineration is:', options: ['Large reduction in waste volume', 'Zero air pollution', 'It destroys all heavy metals', 'It creates clean drinking water'] },
            { label: 'The most toxic residue left behind is the:', options: ['Fly ash', 'Bottom ash', 'Daily soil cover', 'Leachate'] },
            { label: 'In a waste-to-energy plant, the heat is used to:', options: ['Make steam to spin a turbine for electricity', 'Cool the surrounding city', 'Melt glass into new bottles', 'Compost food scraps'] },
            { label: 'A key criticism of building WTE plants is that they may:', options: ['Discourage recycling by needing constant trash to burn', 'Use no fuel at all', 'Produce more recyclables than they consume', 'Eliminate the need for any landfill'] },
          ],
          correctAnswers: ['Large reduction in waste volume', 'Fly ash', 'Make steam to spin a turbine for electricity', 'Discourage recycling by needing constant trash to burn'],
          hint1: 'Burning shrinks the pile dramatically.',
          hint2: 'The fine ash captured by pollution controls concentrates toxics.',
          hint3: 'WTE is just an incinerator that captures the heat as electricity — but it needs fuel (trash) to run.',
          explanation: 'Incineration\'s headline benefit is volume reduction; its nastiest residue is toxic fly ash. WTE converts the heat to electricity via steam/turbine, but its appetite for burnable trash can compete with recycling.',
        },
      },
      {
        id: 'apesw3-volume-setup',
        type: 'text' as const,
        content: `## How Much Volume Does Burning Save?

The headline number for incineration is **volume reduction**. A modern incinerator typically removes about **90% of the waste volume**, leaving roughly **10%** behind as ash.

$$\\text{Ash volume} \\;\\approx\\; (1 - 0.90) \\times \\text{original volume} \\;=\\; 0.10 \\times \\text{original}$$

That tenfold shrink is why cities short on landfill space turn to incineration despite the air-pollution and ash costs.

> ⚠️ Don't confuse **volume** reduction with making waste *disappear*. The mass shrinks less than the volume (~75% vs. ~90%), and the toxics concentrate into the ash that remains.`,
      },
      {
        id: 'apesw3-input-volume',
        type: 'input-boxes' as const,
        content: `**Volume-Reduction Math** 🧮

Suppose an incinerator reduces waste **volume by 90%**.

**1)** A city sends 5,000 cubic meters of waste to the incinerator. After burning, about how many cubic meters of ash remain? (enter the number)
**2)** That leftover ash is what percent of the original volume? (enter just the number, e.g. 25 for 25%)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['500', '10'],
          hint1: 'Reducing volume by 90% leaves 10% behind.',
          hint2: '$5000 \\times 0.10 = 500$ cubic meters remain.',
          hint3: 'If 90% is gone, the remainder is 100% − 90% = 10%.',
          explanation: '1) 10% of 5000 = 500 m³ of ash remain. 2) That remaining ash is 10% of the original volume. Incineration is unmatched for shrinking waste volume — but the concentrated ash still needs disposal.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'apes-solid-hazardous-waste',
    sections: [
      {
        id: 'apesw4-intro',
        type: 'text' as const,
        content: `# 🗑️ Solid & Hazardous Waste

**Part 4 of 7 — The Waste Hierarchy: Reduce, Reuse, Recycle, Compost**

---

> 🔑 **The Idea:** Not all waste strategies are equal. The **waste-management hierarchy** ranks them from best to worst. The order is the single most important concept in this unit — and the top of the list (**source reduction**) beats everything below it.`,
      },
      {
        id: 'apesw4-hierarchy',
        type: 'text' as const,
        content: `## The Waste Hierarchy (Best → Worst)

| Rank | Strategy | What it means |
|------|----------|---------------|
| **1 (best)** | **Source reduction / Reduce** | Make/buy less; less packaging; durable goods |
| **2** | **Reuse** | Use an item again as-is (refillable bottle, donated furniture) |
| **3** | **Recycle / Compost** | Reprocess materials into new products; compost organics |
| **4** | **Energy recovery** | Waste-to-energy incineration |
| **5 (worst)** | **Disposal** | Landfill or plain incineration |

> 🔑 **Why "reduce" is #1:** The cheapest, cleanest waste is the waste **never created**. Source reduction avoids *all* the downstream costs — collection, processing, emissions, and disposal — at once. Everything below it is just managing waste that already exists.

> 💡 **Memory tool — the 3 Rs in order:** **Reduce → Reuse → Recycle.** They are listed in priority order on purpose. Recycling is good, but it is the *third* choice, not the first.`,
      },
      {
        id: 'apesw4-q-hierarchy',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'According to the waste-management hierarchy, the MOST preferred strategy is to:',
              options: [
                'Reduce waste at the source (generate less in the first place)',
                'Recycle as much as possible',
                'Incinerate waste for energy',
                'Bury waste in a sanitary landfill',
              ],
              correctAnswer: 0,
              explanation: 'Source reduction sits at the top of the hierarchy because preventing waste avoids every downstream cost. Recycling, energy recovery, and landfilling all rank below it because they only manage waste that already exists.',
            },
            {
              question: 'Refilling a glass milk bottle instead of buying a new container each time is an example of:',
              options: ['Reuse', 'Recycling', 'Composting', 'Incineration'],
              correctAnswer: 0,
              explanation: 'Using an item again in its existing form is reuse — the second-ranked strategy. Recycling would mean melting the glass down to make a new product; reuse skips that reprocessing entirely.',
            },
          ],
        },
      },
      {
        id: 'apesw4-recycling',
        type: 'text' as const,
        content: `## Recycling: Closed vs. Open Loop

Recycling reprocesses used materials into new products, saving raw materials and energy. There are two kinds:

| Type | Meaning | Example |
|------|---------|---------|
| **Closed-loop** | Material becomes the **same** product again, repeatedly | Aluminum can → aluminum can |
| **Open-loop (downcycling)** | Material becomes a **different, lower-grade** product | Plastic bottle → carpet fiber or park bench |

**Why recycling helps the environment:**
- Saves **energy** (recycling aluminum uses ~95% less energy than making it from bauxite ore)
- Conserves **raw materials / mineral resources**
- Reduces **landfill volume** and mining/logging impacts

**Why it isn't perfect:**
- **Contamination** (food, wrong materials) ruins batches
- Some materials (most plastics) **degrade** each cycle → only downcyclable
- **Economics:** recycling only happens at scale when there's a **market** for the recovered material

> 💡 **Aluminum is the recycling superstar:** it's **infinitely** closed-loop recyclable and saves ~95% of the energy versus virgin production. Glass and metals recycle well; mixed plastics are the hardest because there are many incompatible resin types.`,
      },
      {
        id: 'apesw4-composting',
        type: 'text' as const,
        content: `## Composting: Recycling for Organics

**Composting** is the controlled **aerobic** (with oxygen) decomposition of organic waste — food scraps, yard trimmings, paper — into a nutrient-rich soil amendment (**humus**).

$$\\text{Organic waste} + \\text{O}_2 \\xrightarrow{\\text{aerobic microbes}} \\text{compost (humus)} + \\text{CO}_2 + \\text{heat}$$

| Benefit of Composting | Why It Matters |
|-----------------------|----------------|
| Diverts organics from landfills | ~30–40% of MSW is compostable organics |
| **Avoids landfill methane** | Aerobic composting makes CO₂, not the worse greenhouse gas CH₄ |
| Returns nutrients to soil | Reduces need for synthetic fertilizer |
| Improves soil water retention | Healthier, more drought-resistant soil |

> ⚠️ **Aerobic vs. anaerobic — a key contrast:** Composting (with oxygen) produces mostly **CO₂**. The *same* organics buried in an oxygen-poor landfill decompose **anaerobically** and produce **methane (CH₄)** — a far stronger greenhouse gas. Composting therefore has a real climate advantage over landfilling food and yard waste.`,
      },
      {
        id: 'apesw4-dd-strategies',
        type: 'dropdown-select' as const,
        content: `**Classify Each Action** 🔽

Match each action to the correct level of the waste hierarchy or recycling type.`,
        exercise: {
          dropdowns: [
            { label: 'Bringing a reusable bag to the store:', options: ['Source reduction', 'Recycling', 'Energy recovery', 'Landfilling'] },
            { label: 'Aluminum can melted to make a new aluminum can:', options: ['Closed-loop recycling', 'Open-loop recycling', 'Composting', 'Incineration'] },
            { label: 'Turning food scraps into humus with oxygen present:', options: ['Composting (aerobic)', 'Anaerobic landfilling', 'Open-loop recycling', 'Source reduction'] },
            { label: 'Plastic bottle reprocessed into carpet fiber:', options: ['Open-loop (downcycling)', 'Closed-loop recycling', 'Reuse', 'Composting'] },
          ],
          correctAnswers: ['Source reduction', 'Closed-loop recycling', 'Composting (aerobic)', 'Open-loop (downcycling)'],
          hint1: 'Using less material in the first place is the top of the hierarchy.',
          hint2: 'Same product again = closed loop; a different, lower-grade product = open loop.',
          hint3: 'Composting needs oxygen and yields humus + CO₂.',
          explanation: 'Reusable bag → source reduction (top of hierarchy). Can → can = closed-loop. Food → humus with O₂ = aerobic composting. Bottle → carpet = open-loop downcycling (a different, lower-grade product).',
        },
      },
      {
        id: 'apesw4-rates-setup',
        type: 'text' as const,
        content: `## Measuring Recycling

Two quick formulas come up constantly on the exam:

$$\\text{Recycling rate} \\;=\\; \\frac{\\text{mass recycled}}{\\text{total MSW generated}} \\times 100\\%$$

$$\\text{Energy saved} \\;=\\; (\\text{fraction saved}) \\times (\\text{energy to make from virgin ore})$$

Recycling aluminum saves about **95%** of the energy needed to make it from raw **bauxite** ore — the single biggest energy savings of any common recyclable, and the reason aluminum cans are so valuable to collect.

> 💡 Watch the denominators: a **recycling rate** divides by *total waste generated*, not by the amount landfilled. Mixing those up is a common free-response error.`,
      },
      {
        id: 'apesw4-input-recycle',
        type: 'input-boxes' as const,
        content: `**Recycling-Rate Math** 🧮

**1)** A city generates 200,000 tons of MSW per year and recycles 60,000 tons of it. What is its recycling rate, as a percent? (enter just the number, e.g. 25 for 25%)
**2)** Recycling 1 ton of aluminum saves about 95% of the energy needed to make it from ore. If making 1 ton from ore takes 200 units of energy, how many units are saved by recycling instead? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['30', '190'],
          hint1: 'Recycling rate = (recycled ÷ total) × 100.',
          hint2: '$60{,}000 \\div 200{,}000 \\times 100 = 30$ percent.',
          hint3: '95% of 200 units = $200 \\times 0.95 = 190$ units saved.',
          explanation: '1) $60{,}000 / 200{,}000 \\times 100 = 30\\%$ recycling rate. 2) $200 \\times 0.95 = 190$ energy units saved — the huge energy savings is why aluminum recycling is so valuable.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'apes-solid-hazardous-waste',
    sections: [
      {
        id: 'apesw5-intro',
        type: 'text' as const,
        content: `# 🗑️ Solid & Hazardous Waste

**Part 5 of 7 — Hazardous Waste, E-Waste & Superfund**

---

> 🔑 **The Idea:** Some waste is too dangerous for an ordinary landfill. **Hazardous waste** is defined by four characteristics and governed by its own laws — **RCRA** (for active, "cradle-to-grave" tracking) and **CERCLA/Superfund** (for cleaning up the toxic sins of the past).`,
      },
      {
        id: 'apesw5-characteristics',
        type: 'text' as const,
        content: `## The Four Characteristics of Hazardous Waste

Under **RCRA**, a waste is hazardous if it shows any of four characteristics. A handy mnemonic is **I-C-R-T**:

| Characteristic | Meaning | Example |
|----------------|---------|---------|
| **I — Ignitable** | Catches fire easily (low flash point) | Gasoline, solvents, alcohol |
| **C — Corrosive** | Strong acid or base (pH ≤ 2 or ≥ 12.5) | Battery acid, drain cleaner |
| **R — Reactive** | Unstable; can explode or release toxic gas | Explosives, some peroxides |
| **T — Toxic** | Harmful or fatal when ingested/absorbed | Heavy metals (lead, mercury), pesticides |

> 💡 **Mnemonic:** **"I See Real Trouble"** = **I**gnitable, **C**orrosive, **R**eactive, **T**oxic. If a waste has even **one** of these, it's legally hazardous and must be handled under special rules.`,
      },
      {
        id: 'apesw5-q-char',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A waste with a pH of 1 (a strong acid) would be classified as hazardous under which characteristic?',
              options: ['Corrosive', 'Ignitable', 'Reactive', 'Toxic'],
              correctAnswer: 0,
              explanation: 'Corrosivity covers strongly acidic (pH ≤ 2) or strongly basic (pH ≥ 12.5) wastes that can eat through containers, metal, or flesh. A pH of 1 is strongly corrosive.',
            },
            {
              question: 'Which of these is one of the four RCRA characteristics that define hazardous waste?',
              options: ['Ignitability', 'Biodegradability', 'Recyclability', 'Compostability'],
              correctAnswer: 0,
              explanation: 'The four characteristics are ignitability, corrosivity, reactivity, and toxicity (I-C-R-T). Biodegradability, recyclability, and compostability are not hazardous-waste criteria.',
            },
          ],
        },
      },
      {
        id: 'apesw5-ewaste',
        type: 'text' as const,
        content: `## E-Waste: A Fast-Growing Hazard

**Electronic waste (e-waste)** — old phones, computers, and TVs — is the **fastest-growing** waste stream in the world. It is a double-edged problem:

| E-Waste Contains... | Concern |
|---------------------|---------|
| **Toxic metals** (lead, mercury, cadmium) | Poison soil and water if dumped/burned |
| **Brominated flame retardants** | Persistent, bioaccumulative toxins |
| **Valuable metals** (gold, copper, rare earths) | Worth recovering — "urban mining" |

The danger is concentrated in **informal recycling**, often in developing nations, where workers **burn or acid-bath** electronics to recover metals — releasing toxic fumes and contaminating local communities.

> ⚠️ **The export problem:** Wealthy nations sometimes ship e-waste to poorer countries where labor is cheap and rules are weak. This shifts the toxic burden onto vulnerable communities — a classic **environmental justice** issue. The **Basel Convention** is the international treaty meant to restrict such hazardous-waste exports.`,
      },
      {
        id: 'apesw5-q-ewaste',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why is electronic waste (e-waste) both a hazard AND a resource?',
              options: [
                'It contains toxic metals (lead, mercury) but also valuable metals (gold, copper) worth recovering',
                'It is completely harmless and has no useful materials',
                'It is purely organic and easily composted',
                'It contains only radioactive material',
              ],
              correctAnswer: 0,
              explanation: 'E-waste holds toxic metals (lead, mercury, cadmium) that poison soil and water if mishandled, yet it also contains recoverable gold, copper, and rare earths — which is why safe "urban mining" of e-waste is valuable.',
            },
            {
              question: 'The greatest health danger from e-waste typically occurs when it is:',
              options: [
                'Burned or acid-bathed in informal recycling operations with little protection',
                'Stored sealed in a certified recycling facility',
                'Recycled in a regulated closed-loop process',
                'Left unopened in its original packaging',
              ],
              correctAnswer: 0,
              explanation: 'Informal recovery — burning plastics off circuit boards or using acid baths to extract metals, often in developing nations — releases toxic fumes and contaminates communities. Regulated recycling is far safer.',
            },
          ],
        },
      },
      {
        id: 'apesw5-laws',
        type: 'text' as const,
        content: `## Two Landmark U.S. Laws

| Law | Nickname | What It Does |
|-----|----------|--------------|
| **RCRA** (1976) | Resource Conservation and Recovery Act | Regulates hazardous waste **"cradle to grave"** — tracks it from generation to disposal at active facilities |
| **CERCLA** (1980) | **Superfund** | Funds **cleanup of abandoned** toxic-waste sites; makes polluters pay |

**RCRA** is *forward-looking*: it manages waste being produced **right now** so it doesn't become tomorrow's disaster. **CERCLA/Superfund** is *backward-looking*: it cleans up **already-abandoned** contaminated sites and can hold responsible parties liable.

> 🔑 **The "polluter pays" principle:** Superfund is built on the idea that those responsible for contamination should pay to clean it up. When no responsible party can be found, a federal trust fund covers the cost — so the public isn't simply left with the bill.`,
      },
      {
        id: 'apesw5-lovecanal',
        type: 'text' as const,
        content: `## Love Canal: The Site That Created Superfund

The **Love Canal** disaster (Niagara Falls, NY) is the textbook case:

- In the 1940s–50s, a company buried ~**21,000 tons of toxic chemical waste** in an old canal, then capped it.
- The land was later sold (for **$1**) and a **school and neighborhood** were built on top.
- By the 1970s, chemicals were **oozing into basements and yards**; residents reported high rates of illness and birth defects.
- President Carter declared a federal emergency; hundreds of families were **evacuated**.
- The outrage led Congress to pass **CERCLA (Superfund) in 1980**, and Love Canal became one of the first sites on the National Priorities List.

> 💡 **Why it matters for the exam:** Love Canal is the standard example linking **improper hazardous-waste disposal** → **public-health crisis** → **the creation of Superfund**. If a question asks why CERCLA exists, Love Canal is the answer.`,
      },
      {
        id: 'apesw5-dd-laws',
        type: 'dropdown-select' as const,
        content: `**Match the Law / Concept** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Tracks hazardous waste "cradle to grave" at active sites:', options: ['RCRA', 'CERCLA (Superfund)', 'Clean Air Act', 'Endangered Species Act'] },
            { label: 'Funds cleanup of abandoned toxic-waste sites:', options: ['CERCLA (Superfund)', 'RCRA', 'Montreal Protocol', 'NEPA'] },
            { label: 'Disaster that led directly to Superfund:', options: ['Love Canal', 'The Dust Bowl', 'Chernobyl', 'The London Smog'] },
            { label: 'Treaty restricting international hazardous-waste exports:', options: ['Basel Convention', 'Kyoto Protocol', 'Clean Water Act', 'Paris Agreement'] },
          ],
          correctAnswers: ['RCRA', 'CERCLA (Superfund)', 'Love Canal', 'Basel Convention'],
          hint1: 'One law manages waste being made now; the other cleans up old messes.',
          hint2: '"Superfund" = the cleanup law (CERCLA).',
          hint3: 'Love Canal triggered Superfund; the Basel Convention governs cross-border hazardous-waste shipments.',
          explanation: 'RCRA = cradle-to-grave management of active hazardous waste; CERCLA/Superfund = cleanup of abandoned sites (born from Love Canal); the Basel Convention restricts international hazardous-waste (including e-waste) exports.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'apes-solid-hazardous-waste',
    sections: [
      {
        id: 'apesw6-intro',
        type: 'text' as const,
        content: `# 🗑️ Solid & Hazardous Waste

**Part 6 of 7 — Plastics, Ocean Pollution & Global Waste**

---

> 🔑 **The Idea:** Waste does not stay where we put it. Plastics in particular **persist for centuries**, break into **microplastics**, and accumulate in the ocean — turning a local disposal choice into a global, transboundary problem.`,
      },
      {
        id: 'apesw6-plastics',
        type: 'text' as const,
        content: `## Why Plastics Are Special

Plastics are cheap, light, and durable — and that **durability** is exactly the problem once they become waste:

| Property | Consequence |
|----------|-------------|
| **Non-biodegradable** | Persists for **hundreds of years**; doesn't rot like paper or food |
| **Photodegrades into fragments** | Sunlight breaks it into ever-smaller **microplastics** (< 5 mm) |
| **Made from fossil fuels** | Production adds to CO₂ and depends on petroleum |
| **Many incompatible resin types** | Hard to recycle; much is downcycled or landfilled |
| **Lightweight & buoyant** | Easily blows/washes into waterways and floats to sea |

> ⚠️ **Microplastics** are the long tail of the plastic problem. Big items break into tiny fragments that are eaten by plankton and fish, **bioaccumulate** up the food chain, and have been found in seafood, salt, drinking water, and human blood.`,
      },
      {
        id: 'apesw6-q-plastics',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why do plastics pose a uniquely persistent waste problem compared with paper or food waste?',
              options: [
                'They are non-biodegradable and can persist for hundreds of years, breaking into microplastics',
                'They decompose within a few weeks like food scraps',
                'They are always composted easily',
                'They dissolve harmlessly in seawater',
              ],
              correctAnswer: 0,
              explanation: 'Unlike organic waste, plastics do not biodegrade. They persist for centuries and photodegrade into microplastics (< 5 mm) that spread through ecosystems and bioaccumulate in food webs.',
            },
            {
              question: 'Microplastics are a concern in marine food webs mainly because they:',
              options: [
                'Are eaten by small organisms and bioaccumulate up the food chain',
                'Provide a nutritious food source for fish',
                'Quickly biodegrade into harmless sugars',
                'Sink instantly and never affect marine life',
              ],
              correctAnswer: 0,
              explanation: 'Microplastics are ingested by plankton and small animals, then concentrate up the food chain (bioaccumulation/biomagnification), ending up in seafood and ultimately in humans.',
            },
          ],
        },
      },
      {
        id: 'apesw6-ocean',
        type: 'text' as const,
        content: `## The Ocean Garbage Patches

Ocean currents (**gyres**) sweep floating debris into massive accumulation zones. The most famous is the **Great Pacific Garbage Patch**, a soup of plastic and microplastics concentrated by the North Pacific gyre.

| Marine Plastic Harm | Mechanism |
|---------------------|-----------|
| **Entanglement** | Animals trapped in nets, six-pack rings, rope |
| **Ingestion** | Turtles eat bags (look like jellyfish); seabirds fill stomachs with plastic |
| **Microplastic uptake** | Plastics enter the base of the food web |
| **Chemical transport** | Plastics adsorb and carry toxins across the ocean |

Most ocean plastic originates on **land** — from littering, mismanaged waste, and rivers carrying trash to sea — not from ships.

> 💡 **Solution direction:** Because most marine plastic comes from land-based mismanaged waste, the most effective fixes are **upstream**: reduce single-use plastics, improve waste collection in coastal nations, and capture trash in rivers **before** it reaches the ocean.`,
      },
      {
        id: 'apesw6-dd-ocean',
        type: 'dropdown-select' as const,
        content: `**Ocean Plastic Logic** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Floating debris collects in ocean regions called:', options: ['Gyres', 'Trenches', 'Estuaries', 'Aquifers'] },
            { label: 'Most ocean plastic originates from:', options: ['Land-based mismanaged waste', 'Deep-sea volcanoes', 'Fish producing it naturally', 'Rainfall'] },
            { label: 'Plastic fragments smaller than 5 mm are called:', options: ['Microplastics', 'Leachate', 'Fly ash', 'Humus'] },
            { label: 'The most effective long-term fix is to:', options: ['Reduce plastic use and improve waste collection on land', 'Wait for plastics to biodegrade naturally', 'Burn all ocean water', 'Bury plastic deeper at sea'] },
          ],
          correctAnswers: ['Gyres', 'Land-based mismanaged waste', 'Microplastics', 'Reduce plastic use and improve waste collection on land'],
          hint1: 'Rotating ocean currents concentrate the debris.',
          hint2: 'The trash mostly comes from people on land, carried by rivers and wind.',
          hint3: '"Micro" = tiny fragments; the best fix is upstream, on land.',
          explanation: 'Gyres concentrate floating plastic into garbage patches; most of it comes from land-based mismanaged waste; fragments under 5 mm are microplastics; and since the source is on land, reducing use and improving collection upstream is the most effective fix.',
        },
      },
      {
        id: 'apesw6-global',
        type: 'text' as const,
        content: `## Global Waste & Environmental Justice

How waste is handled varies enormously by wealth:

| Setting | Typical Disposal | Risk |
|---------|------------------|------|
| **Developed nations** | Sanitary landfills, WTE, formal recycling | Lower direct exposure |
| **Developing nations** | **Open dumps**, open burning, informal recycling | Leachate, smoke, disease, exposure |

An **open dump** is unlined and uncovered — leachate flows freely into groundwater, waste is often burned (releasing dioxins), and people may live and scavenge on the dump itself.

Two equity problems recur:

1. **Exporting waste** (e-waste, plastics) from rich to poor nations shifts the hazard onto those least able to handle it.
2. **Siting** landfills, incinerators, and dumps **near poor and marginalized communities** within a country.

> ⚠️ **Environmental justice:** The burdens of waste disposal frequently fall hardest on **low-income communities and communities of color**, both internationally (waste exports) and domestically (facility siting). The AP exam expects you to recognize this pattern.`,
      },
      {
        id: 'apesw6-q-global',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How does an OPEN DUMP differ from a sanitary landfill?',
              options: [
                'An open dump is unlined and uncovered, so leachate and waste contaminate the surroundings freely',
                'An open dump has a stronger liner and better methane capture',
                'An open dump only accepts recyclable materials',
                'There is no difference between the two',
              ],
              correctAnswer: 0,
              explanation: 'A sanitary landfill is engineered with liners, leachate collection, methane recovery, and daily cover. An open dump has none of these, so leachate seeps into groundwater and waste is often openly burned — common in developing nations.',
            },
            {
              question: 'Shipping hazardous e-waste from wealthy nations to poor nations for cheap, unsafe processing is primarily an example of:',
              options: [
                'An environmental justice problem',
                'Effective closed-loop recycling',
                'Source reduction',
                'A successful application of the waste hierarchy',
              ],
              correctAnswer: 0,
              explanation: 'Exporting toxic waste shifts the health and environmental burden onto vulnerable, lower-income communities that did not generate it — the core of an environmental justice concern, which the Basel Convention aims to restrict.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'apes-solid-hazardous-waste',
    sections: [
      {
        id: 'apesw7-intro',
        type: 'text' as const,
        content: `# 🗑️ Solid & Hazardous Waste

**Part 7 of 7 — Integrated Management, Economics & Mastery Check**

---

You now know the waste streams, landfills, incineration, the waste hierarchy, hazardous waste and Superfund, and the global plastic problem. This final part ties them together with **integrated waste management** and **policy/economics** — then a mixed review and an Exit Quiz.`,
      },
      {
        id: 'apesw7-integrated',
        type: 'text' as const,
        content: `## Integrated Waste Management

No single method solves everything, so real-world systems combine them in **hierarchy order**:

$$\\underbrace{\\text{Reduce} \\rightarrow \\text{Reuse} \\rightarrow \\text{Recycle/Compost}}_{\\text{shrink the stream first}} \\rightarrow \\underbrace{\\text{Energy recovery} \\rightarrow \\text{Landfill}}_{\\text{handle what's left}}$$

The strategy:

1. **Prevent** as much waste as possible (source reduction).
2. **Divert** recyclables and organics (recycling + composting).
3. **Recover energy** from the combustible remainder (WTE).
4. **Landfill** only the final, unavoidable residue.

> 🔑 **The whole unit in one sentence:** Push waste **up** the hierarchy — prevent and divert first, and use disposal (landfill/incineration) only as the **last resort** for what truly can't be reduced, reused, or recycled.`,
      },
      {
        id: 'apesw7-economics',
        type: 'text' as const,
        content: `## Policy Tools & Economics

Why don't people just reduce waste on their own? Often because disposal is **artificially cheap** — the price of throwing something away doesn't include its full environmental cost. Policy tools fix this:

| Tool | How It Works |
|------|--------------|
| **Pay-as-you-throw (PAYT)** | Charge households **by the bag/bin** → strong incentive to reduce & recycle |
| **Bottle bills / deposits** | Refundable deposit on containers → boosts return & recycling rates |
| **Extended Producer Responsibility (EPR)** | Makes **manufacturers** responsible for end-of-life of their products → designs for recyclability |
| **Bans / fees** | Plastic-bag bans, landfill bans on organics/e-waste |
| **Recycling mandates & markets** | Require recycling; support markets for recovered materials |

> 💡 **Why "pay-as-you-throw" works:** When trash is free or flat-rate, there's no reason to generate less. Charging per bag makes the cost of waste **visible** to the person creating it — and people respond by reducing and recycling more. It internalizes the externality.`,
      },
      {
        id: 'apesw7-dd-policy',
        type: 'dropdown-select' as const,
        content: `**Match Policy to Effect** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Charges households per bag of trash to cut waste:', options: ['Pay-as-you-throw', 'Open dumping', 'Superfund', 'Mass burn'] },
            { label: 'Refundable deposit that boosts container returns:', options: ['Bottle bill', 'Catalytic converter', 'TCLP test', 'Gyre'] },
            { label: 'Makes manufacturers handle their products at end-of-life:', options: ['Extended Producer Responsibility', 'Daily soil cover', 'Leachate collection', 'Open-loop recycling'] },
            { label: 'Top priority of integrated waste management:', options: ['Source reduction', 'Landfilling', 'Incineration', 'Exporting waste'] },
          ],
          correctAnswers: ['Pay-as-you-throw', 'Bottle bill', 'Extended Producer Responsibility', 'Source reduction'],
          hint1: 'One charges by the bag to discourage waste.',
          hint2: 'A refundable deposit on bottles/cans is a "bottle bill."',
          hint3: 'EPR shifts end-of-life responsibility to producers; the hierarchy always starts with reducing.',
          explanation: 'Pay-as-you-throw charges per bag; bottle bills use refundable deposits; EPR makes producers responsible for disposal; and integrated management always prioritizes source reduction first.',
        },
      },
      {
        id: 'apesw7-input-payt',
        type: 'input-boxes' as const,
        content: `**Waste-Diversion Math** 🧮

A city of 50,000 people generates 100,000 tons of MSW per year.

**1)** After a pay-as-you-throw program, total generation drops by 20%. How many tons does the city generate now? (enter the number)
**2)** Of that reduced amount, the city recycles and composts 40,000 tons. What is the new diversion (recycling + composting) rate, as a percent of current generation? (enter just the number, e.g. 25 for 25%)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['80000', '50'],
          hint1: 'A 20% drop leaves 80% of the original: $100{,}000 \\times 0.80$.',
          hint2: 'New generation = $100{,}000 \\times 0.80 = 80{,}000$ tons.',
          hint3: 'Diversion rate = $40{,}000 \\div 80{,}000 \\times 100$.',
          explanation: '1) $100{,}000 \\times 0.80 = 80{,}000$ tons after the 20% reduction. 2) $40{,}000 / 80{,}000 \\times 100 = 50\\%$ diverted from disposal. PAYT cut the stream *and* helped raise the diversion rate.',
        },
      },
      {
        id: 'apesw7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Concept | Key fact |
|---------|----------|
| Biggest waste stream (mass) | **Mining**, then agriculture/industry; MSW is small |
| Biggest MSW components | **Paper** and **food waste** (much of MSW is organic) |
| U.S. per-capita MSW | ~**4.9 lb/person/day** |
| Sanitary landfill | Liner + leachate collection (groundwater) + methane wells |
| Leachate | Toxic liquid → threatens **groundwater** |
| Landfill methane | **Anaerobic** decay → CH₄ (potent greenhouse gas; capture for energy) |
| Incineration | ~80–90% **volume** reduction; toxic **fly ash**; WTE makes electricity |
| Waste hierarchy | **Reduce → Reuse → Recycle/Compost → Energy → Landfill** |
| Composting | **Aerobic** → CO₂ + humus (avoids landfill methane) |
| Hazardous waste | **I-C-R-T**: Ignitable, Corrosive, Reactive, Toxic |
| RCRA vs. CERCLA | RCRA = cradle-to-grave (active); CERCLA/Superfund = cleanup of abandoned sites |
| Love Canal | Buried toxics under a neighborhood → created Superfund |
| Plastics | Non-biodegradable → microplastics; ocean gyres; land-based sources |

> ⚠️ Top traps: **reduce** is #1 (not recycle); incineration shrinks **volume** but makes toxic **fly ash**; landfill methane is **anaerobic** (composting is aerobic); RCRA ≠ CERCLA; most ocean plastic comes from **land**.`,
      },
      {
        id: 'apesw7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which sequence correctly ranks waste strategies from MOST to LEAST preferred?',
              options: [
                'Reduce → Reuse → Recycle → Landfill',
                'Landfill → Recycle → Reuse → Reduce',
                'Recycle → Reduce → Landfill → Reuse',
                'Incinerate → Reduce → Landfill → Recycle',
              ],
              correctAnswer: 0,
              explanation: 'The waste hierarchy runs Reduce (best) → Reuse → Recycle/Compost → Energy recovery → Landfill/disposal (worst). Preventing waste beats managing it after the fact.',
            },
            {
              question: 'A sanitary landfill captures methane mainly to:',
              options: [
                'Prevent explosions and a potent greenhouse gas — and ideally burn it for energy',
                'Speed up leachate production',
                'Add nutrients back to nearby soil',
                'Increase the volume of waste it can hold',
              ],
              correctAnswer: 0,
              explanation: 'Anaerobic decomposition produces methane, an explosive and powerful greenhouse gas. Recovery wells capture it; flaring or burning it for electricity turns a hazard into energy.',
            },
          ],
        },
      },
      {
        id: 'apesw7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The biggest concern with leachate from a landfill is that it can:',
              options: [
                'Contaminate groundwater if the liner fails',
                'Float to sea and form a garbage patch',
                'Release CFCs into the stratosphere',
                'Reduce the volume of waste by 90%',
              ],
              correctAnswer: 0,
              explanation: 'Leachate is the toxic liquid that forms as water percolates through waste. Its chief danger is seeping through a failed liner and contaminating the groundwater/aquifer below.',
            },
            {
              question: 'Composting food and yard waste has a climate advantage over landfilling them because composting is:',
              options: [
                'Aerobic, producing mostly CO₂ instead of the stronger greenhouse gas methane',
                'Anaerobic, producing pure oxygen',
                'A form of incineration that destroys all carbon',
                'Identical to landfilling in its emissions',
              ],
              correctAnswer: 0,
              explanation: 'Composting is aerobic (with oxygen) and yields mostly CO₂ plus humus. The same organics buried anaerobically in a landfill generate methane, a far more potent greenhouse gas — so composting reduces climate impact.',
            },
            {
              question: 'Which pairing is correct?',
              options: [
                'CERCLA (Superfund) → cleans up abandoned hazardous-waste sites like Love Canal',
                'RCRA → restricts CFCs to protect the ozone layer',
                'Incineration → eliminates all toxic substances with no residue',
                'Recycling → ranked above source reduction in the waste hierarchy',
              ],
              correctAnswer: 0,
              explanation: 'CERCLA/Superfund (1980) funds cleanup of abandoned toxic sites and grew directly out of Love Canal. RCRA governs active hazardous waste (not CFCs); incineration concentrates toxics in fly ash; and source reduction ranks ABOVE recycling.',
            },
          ],
        },
      },
    ],
  },
]
