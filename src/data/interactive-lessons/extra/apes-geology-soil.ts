import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Geology & Soil Science (AP Environmental Science).
 * Registry key / DB Topic.slug: 'apes-geology-soil'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot
 * and the sibling apes-air-pollution lesson: teach (text) → interactive check
 * (multiple-choice / dropdown-select / input-boxes) → worked applications → Exit Quiz.
 * Concept-forward (non-math topic), so checks favor multiple-choice + dropdown, with a
 * few quantitative input-boxes (plate-rate, weathering %, soil-texture %, half-life).
 * LaTeX uses DOUBLED backslashes (template-literal strings); chemical formulas use
 * Unicode subscripts to match the existing APES lessons.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'apes-geology-soil',
    sections: [
      {
        id: 'apgs1-intro',
        type: 'text' as const,
        content: `# 🪨 Geology & Soil Science

**Part 1 of 7 — Earth's Structure & Plate Tectonics**

---

### Topics in This Part

| Section |
|---------|
| The Layers of the Earth |
| Convection & the Engine of Plate Tectonics |
| The Three Types of Plate Boundaries |
| Why Tectonics Matters for the Environment |

> 🔑 **Key Concept:** Almost every Earth-surface process the exam tests — earthquakes, volcanoes, mountain building, the soils that grow our food — ultimately traces back to **plate tectonics**, the slow movement of rigid plates riding on a hot, flowing mantle.`,
      },
      {
        id: 'apgs1-layers',
        type: 'text' as const,
        content: `## The Layers of the Earth

Earth is layered by **composition** (what it's made of) and by **physical behavior** (solid vs. flowing):

| Layer | Depth | Key Facts |
|-------|-------|-----------|
| **Crust** | 0–~70 km | Thin, rigid, rocky outer shell; **continental** (thick, granitic, less dense) vs. **oceanic** (thin, basaltic, denser) |
| **Mantle** | ~70–2900 km | Hot solid rock that flows slowly; the upper part convects, driving the plates |
| **Outer core** | 2900–5150 km | **Liquid** iron–nickel; its motion generates Earth's magnetic field |
| **Inner core** | 5150–6371 km | **Solid** iron–nickel (immense pressure keeps it solid despite the heat) |

A second, more useful split for tectonics:

- **Lithosphere** — the rigid outer shell (crust + uppermost mantle); this is what's broken into **plates**.
- **Asthenosphere** — the hot, partially molten, plastic upper mantle the plates *slide on*.

> 💡 **The heat source:** Earth's interior stays hot from leftover heat of formation plus ongoing **radioactive decay** of isotopes like uranium and potassium-40. That heat is what powers the whole tectonic engine.`,
      },
      {
        id: 'apgs1-q-layers',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The rigid outer shell of the Earth that is broken into tectonic plates is the:',
              options: ['Lithosphere', 'Asthenosphere', 'Outer core', 'Inner core'],
              correctAnswer: 0,
              explanation: 'The lithosphere (crust + uppermost, rigid mantle) is the brittle layer that fractures into plates. The plastic asthenosphere beneath it is the layer the plates slide on.',
            },
            {
              question: 'What is the primary internal heat source that keeps the mantle convecting today?',
              options: [
                'Radioactive decay of isotopes like uranium and potassium-40',
                'Sunlight absorbed at the surface',
                'Friction from ocean tides',
                'Combustion of buried fossil fuels',
              ],
              correctAnswer: 0,
              explanation: 'Earth\'s interior heat comes from residual heat of formation plus the ongoing radioactive decay of isotopes. Sunlight only warms the surface and does not reach the deep interior.',
            },
          ],
        },
      },
      {
        id: 'apgs1-convection',
        type: 'text' as const,
        content: `## Convection: The Engine of Plate Tectonics

Heat from the core and from radioactive decay drives **convection currents** in the mantle:

1. Hot mantle rock near the core is **less dense**, so it **rises**.
2. Near the surface it cools, becomes **denser**, and **sinks** back down.
3. This continuous loop drags the lithospheric plates along, like crackers riding on simmering soup.

$$\\text{Heat} \\;\\rightarrow\\; \\text{hot rock rises} \\;\\rightarrow\\; \\text{cools \\& spreads} \\;\\rightarrow\\; \\text{sinks} \\;\\rightarrow\\; \\text{repeat}$$

Plates move only a few centimeters per year — about the rate your **fingernails grow** — but over millions of years that adds up to oceans opening and continents colliding.

> 🔑 **Cause and effect:** Mantle convection is the *cause*; plate motion, earthquakes, volcanoes, and mountains are the *effects*. Keep that chain straight and most of this unit falls into place.`,
      },
      {
        id: 'apgs1-boundaries',
        type: 'text' as const,
        content: `## The Three Types of Plate Boundaries

Where two plates meet, one of three things happens:

| Boundary | Motion | What Forms | Example |
|----------|--------|-----------|---------|
| **Divergent** | Plates move **apart** | New crust; mid-ocean ridges, rift valleys | Mid-Atlantic Ridge; East African Rift |
| **Convergent** | Plates move **together** | Subduction zones, volcanoes, mountains, deep trenches | Andes; Himalayas; Cascades |
| **Transform** | Plates **slide past** sideways | Faults; frequent earthquakes (little/no volcanism) | San Andreas Fault |

At **convergent** boundaries the denser plate (usually oceanic) **subducts** — sinks beneath the other. The descending plate melts, feeding **volcanoes**, and the collision crumples crust into **mountains**.

> 💡 **Memory hook:** **D**ivergent = **D**eparting (crust is *created*). **C**onvergent = **C**ollision (crust is *destroyed* or crumpled). **T**ransform = **T**raffic sliding past (crust is *conserved*, just grinding — hence quakes).`,
      },
      {
        id: 'apgs1-dd-boundaries',
        type: 'dropdown-select' as const,
        content: `**Classify Each Boundary** 🔽

Decide what type of plate boundary each scenario describes.`,
        exercise: {
          dropdowns: [
            { label: 'Two plates pull apart and new ocean floor forms at a mid-ocean ridge:', options: ['Divergent', 'Convergent', 'Transform'] },
            { label: 'An oceanic plate sinks beneath a continent, building a chain of volcanoes:', options: ['Convergent', 'Divergent', 'Transform'] },
            { label: 'Two plates grind sideways past each other along the San Andreas Fault:', options: ['Transform', 'Divergent', 'Convergent'] },
            { label: 'Two continents collide and push up the Himalaya mountains:', options: ['Convergent', 'Divergent', 'Transform'] },
          ],
          correctAnswers: ['Divergent', 'Convergent', 'Transform', 'Convergent'],
          hint1: 'Apart = divergent, together = convergent, sliding = transform.',
          hint2: 'Subduction and mountain building both happen where plates move together.',
          hint3: 'The San Andreas is the textbook transform fault (sliding, frequent quakes).',
          explanation: 'Pulling apart → divergent (new crust). Subduction volcanoes and continental collisions → convergent (crust destroyed/crumpled). Sideways grinding → transform (crust conserved, earthquakes).',
        },
      },
      {
        id: 'apgs1-why',
        type: 'text' as const,
        content: `## Why Tectonics Matters Environmentally

Plate tectonics isn't just trivia — it shapes the resources and hazards humans live with:

- **Hazards:** earthquakes, volcanic eruptions, and tsunamis cluster along plate boundaries (the **"Ring of Fire"** around the Pacific).
- **Resources:** subduction and volcanism concentrate metal **ores**; cooling magma forms valuable mineral deposits.
- **Soils:** volcanic ash and uplifted rock become the **parent material** that eventually weathers into soil — the topic of Parts 2–7.

> 🔑 **Setting up the arc:** Tectonics builds and exposes rock. Next, in Part 2, we break that rock down through **weathering** — the first step in making soil.`,
      },
      {
        id: 'apgs1-q-why',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Most of the world\'s earthquakes and volcanoes are concentrated:',
              options: [
                'Along plate boundaries, such as the Pacific "Ring of Fire"',
                'Randomly scattered across the middle of continents',
                'Only at the North and South Poles',
                'Evenly across every ocean basin',
              ],
              correctAnswer: 0,
              explanation: 'Earthquakes and volcanoes overwhelmingly occur where plates interact. The Pacific is rimmed by so many convergent/transform boundaries that the belt of activity is nicknamed the Ring of Fire.',
            },
            {
              question: 'Which best describes the cause-and-effect chain behind plate tectonics?',
              options: [
                'Interior heat drives mantle convection, which moves the lithospheric plates',
                'Plate motion heats the mantle, which then cools the core',
                'Sunlight melts the crust, which then sinks the plates',
                'Ocean tides push the plates across a solid mantle',
              ],
              correctAnswer: 0,
              explanation: 'Heat (from radioactive decay and formation) drives convection currents in the mantle, and those currents drag the rigid plates along. The motion is the effect, not the cause, of the heat.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'apes-geology-soil',
    sections: [
      {
        id: 'apgs2-intro',
        type: 'text' as const,
        content: `# 🪨 Geology & Soil Science

**Part 2 of 7 — Weathering: Breaking Down Rock**

---

> 🔑 **The Idea:** **Weathering** is the breakdown of rock *in place* by physical and chemical processes. It is the essential first step that turns solid bedrock into the loose mineral fragments that — combined with organic matter — become **soil**.`,
      },
      {
        id: 'apgs2-types',
        type: 'text' as const,
        content: `## Physical vs. Chemical Weathering

There are two fundamental kinds. The key distinction: does the rock's **chemistry change**, or only its **size**?

| Type | What changes | Examples |
|------|-------------|----------|
| **Physical (mechanical)** | Size/shape only — same minerals, just smaller | Freeze–thaw (frost wedging), thermal expansion, abrasion, root pry, exfoliation |
| **Chemical** | The **mineral composition** changes via reactions | Dissolution, hydrolysis, oxidation (rusting), carbonation by acid rain |

**Physical weathering** breaks rock into smaller pieces, which dramatically **increases surface area** — and more surface area speeds up **chemical** weathering. The two work together.

$$\\text{Big rock} \\;\\xrightarrow{\\text{physical}}\\; \\text{smaller pieces (more surface area)} \\;\\xrightarrow{\\text{chemical}}\\; \\text{new minerals + dissolved ions}$$

> 💡 **Classic physical process — frost wedging:** Water seeps into a crack, **freezes, and expands ~9%**, prying the rock apart. Repeated freeze–thaw cycles shatter rock, which is why mountainous, cold climates produce so much loose rubble (talus).`,
      },
      {
        id: 'apgs2-q-types',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which is an example of PHYSICAL (mechanical) weathering?',
              options: [
                'Water freezing in a crack and prying a rock apart (frost wedging)',
                'Acid rain dissolving a limestone statue',
                'Iron in rock rusting to form reddish oxides',
                'Feldspar reacting with water to form clay',
              ],
              correctAnswer: 0,
              explanation: 'Frost wedging breaks rock into smaller pieces without changing its mineral chemistry — that is physical weathering. Dissolving, rusting, and clay formation all change composition, so they are chemical.',
            },
            {
              question: 'Why does physical weathering tend to SPEED UP chemical weathering?',
              options: [
                'Breaking rock into smaller pieces increases the surface area exposed to reactions',
                'It raises the rock\'s temperature permanently',
                'It removes all the water from the rock',
                'It converts the rock into metal',
              ],
              correctAnswer: 0,
              explanation: 'Smaller fragments have far more total surface area for water, acids, and oxygen to react with, so mechanical breakdown accelerates the chemical reactions that follow.',
            },
          ],
        },
      },
      {
        id: 'apgs2-chemical',
        type: 'text' as const,
        content: `## A Closer Look at Chemical Weathering

Chemical weathering reactions need **water**, and many involve **acids**, so they dominate in **warm, wet** climates:

| Process | What Happens | Environmental Link |
|---------|-------------|--------------------|
| **Dissolution / carbonation** | Slightly acidic rainwater (H₂CO₃) dissolves limestone (CaCO₃) | Forms **caves, sinkholes, karst** topography |
| **Hydrolysis** | Water reacts with silicate minerals (feldspar) → **clay** | Produces most of the world's clay-rich soils |
| **Oxidation** | Oxygen reacts with iron minerals → iron oxides (**rust**) | The reddish color of many tropical soils |

The carbonation reaction is the most-tested:

$$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{CO}_3 \\quad\\text{then}\\quad \\text{H}_2\\text{CO}_3 + \\text{CaCO}_3 \\rightarrow \\text{Ca}^{2+} + 2\\,\\text{HCO}_3^{-}$$

> ⚠️ **Acid rain accelerates this.** Extra SO₂ and NOₓ in the air make rainfall more acidic, speeding the dissolution of limestone and marble buildings, statues, and bedrock — a direct link to the Air Pollution unit.`,
      },
      {
        id: 'apgs2-dd-weathering',
        type: 'dropdown-select' as const,
        content: `**Physical or Chemical?** 🔽

Classify each weathering process.`,
        exercise: {
          dropdowns: [
            { label: 'Freeze–thaw (frost wedging) splitting a boulder:', options: ['Physical', 'Chemical'] },
            { label: 'Acidic rainwater dissolving limestone into a cave:', options: ['Chemical', 'Physical'] },
            { label: 'Tree roots growing into and prying open a crack:', options: ['Physical', 'Chemical'] },
            { label: 'Iron-rich rock rusting to a reddish-brown color:', options: ['Chemical', 'Physical'] },
          ],
          correctAnswers: ['Physical', 'Chemical', 'Physical', 'Chemical'],
          hint1: 'If only the size/shape changes (no new minerals), it is physical.',
          hint2: 'Dissolving and rusting create new substances → chemical.',
          hint3: 'Roots and frost are mechanical (physical); acids and oxygen drive chemical reactions.',
          explanation: 'Frost wedging and root pry break rock apart without changing its chemistry → physical. Acid dissolution and rusting (oxidation) form new substances → chemical.',
        },
      },
      {
        id: 'apgs2-climate',
        type: 'text' as const,
        content: `## Climate Controls Weathering Rate

The **same rock** weathers at very different rates depending on climate:

| Climate | Dominant weathering | Why |
|---------|--------------------|-----|
| **Hot & wet** (tropics) | Intense **chemical** | Abundant water + heat speed reactions |
| **Cold** (high latitude/altitude) | Mostly **physical** (frost) | Repeated freeze–thaw; chemistry is slow when cold/frozen |
| **Hot & dry** (desert) | Slow overall | Little water limits chemical reactions |

A useful rule of thumb from chemistry: reaction rates roughly **double for every ~10 °C** rise in temperature. That's why tropical bedrock can weather to great depths while polar rock barely changes.

> 💡 **Tie to soil:** Because weathering is fastest where it's hot and wet, the **deepest, most-weathered soils** form in the tropics — but, as Part 5 will show, those same soils are often surprisingly **nutrient-poor**.`,
      },
      {
        id: 'apgs2-input-rate',
        type: 'input-boxes' as const,
        content: `**Weathering Rate Math** 🧮

Use the rule of thumb that a chemical weathering reaction roughly **doubles** in rate for each **10 °C** increase in temperature.

**1)** A reaction proceeds at a certain rate at 10 °C. At 30 °C (20 °C warmer), it is roughly how many times faster? (enter the number)
**2)** Going from 5 °C to 35 °C is a 30 °C rise. The rate increases by roughly what factor? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '8'],
          hint1: 'Each 10 °C doubles the rate, so count how many 10 °C steps you climb.',
          hint2: '20 °C = two 10 °C steps → $2 \\times 2 = 2^2$.',
          hint3: '30 °C = three 10 °C steps → $2 \\times 2 \\times 2 = 2^3 = 8$.',
          explanation: '1) 20 °C is two doublings: $2^2 = 4\\times$. 2) 30 °C is three doublings: $2^3 = 8\\times$. This is why hot climates weather rock so much faster.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'apes-geology-soil',
    sections: [
      {
        id: 'apgs3-intro',
        type: 'text' as const,
        content: `# 🪨 Geology & Soil Science

**Part 3 of 7 — Erosion, Deposition & Soil Formation**

---

> 🔑 **The Idea:** Weathering breaks rock down *in place*; **erosion** carries the pieces *away*. Where eroded material is dropped (**deposition**) and mixes with decaying organic matter over time, **soil** forms.`,
      },
      {
        id: 'apgs3-erosion',
        type: 'text' as const,
        content: `## Weathering vs. Erosion vs. Deposition

These three words are constantly confused — keep them sharp:

| Term | Definition | Key word |
|------|-----------|----------|
| **Weathering** | Breaking rock down **in place** | *break* |
| **Erosion** | **Transport** of broken material by wind, water, ice, or gravity | *move* |
| **Deposition** | **Dropping** of transported material in a new location | *drop* |

The main agents of erosion:

- **Water** — the single biggest agent; rivers carve valleys and deposit sediment in deltas and floodplains.
- **Wind** — moves fine particles, especially in dry, bare regions (dust storms).
- **Ice (glaciers)** — bulldoze and grind rock, leaving rich glacial deposits.
- **Gravity** — landslides and slumps (mass wasting).

> ⚠️ **Don't confuse them:** Weathering can happen with *no* movement at all; erosion is specifically the **transport**. A rock can be heavily weathered yet never eroded if nothing carries it away.`,
      },
      {
        id: 'apgs3-q-erosion',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A river picks up loose sand and carries it 50 km downstream. This process is best described as:',
              options: ['Erosion', 'Weathering', 'Deposition', 'Subduction'],
              correctAnswer: 0,
              explanation: 'Erosion is the transport of weathered material. The river is moving the sand, not breaking it down (weathering) or dropping it (deposition).',
            },
            {
              question: 'Which is the single most important agent of erosion worldwide?',
              options: ['Flowing water', 'Wind', 'Glacial ice', 'Volcanic gas'],
              correctAnswer: 0,
              explanation: 'Liquid water (rivers, runoff, rainfall) erodes and transports more sediment globally than any other agent, carving valleys and building deltas and floodplains.',
            },
          ],
        },
      },
      {
        id: 'apgs3-formation',
        type: 'text' as const,
        content: `## How Soil Forms: CLORPT

Soil scientists summarize the five factors of soil formation with the acronym **CLORPT**:

| Factor | Role |
|--------|------|
| **CL — Climate** | Temperature & precipitation set weathering and decomposition rates |
| **O — Organisms** | Plants, microbes, worms add and mix organic matter |
| **R — Relief (topography)** | Slope affects erosion, drainage, and sun exposure |
| **P — Parent material** | The rock/sediment the soil forms from sets its mineral content |
| **T — Time** | Soil deepens and develops horizons over hundreds–thousands of years |

**Soil is slow to form.** It can take **hundreds to thousands of years to build a single inch** of topsoil. That is why soil is treated as an essentially **non-renewable** resource on a human timescale — and why erosion that strips it faster than it forms is so serious.

> 💡 **Parent material matters:** Soil from volcanic ash or glacial deposits is often **fertile** and mineral-rich; soil from quartz-rich sandstone tends to be **sandy and nutrient-poor**.`,
      },
      {
        id: 'apgs3-dd-clorpt',
        type: 'dropdown-select' as const,
        content: `**Match the Soil-Forming Factor** 🔽

Each clue describes one of the five CLORPT factors.`,
        exercise: {
          dropdowns: [
            { label: 'Steep slopes erode faster and drain more quickly:', options: ['Relief (topography)', 'Climate', 'Organisms', 'Time'] },
            { label: 'Earthworms and decaying leaves add organic matter:', options: ['Organisms', 'Parent material', 'Relief', 'Climate'] },
            { label: 'The underlying volcanic ash or bedrock the soil develops from:', options: ['Parent material', 'Climate', 'Time', 'Organisms'] },
            { label: 'Temperature and rainfall set how fast weathering occurs:', options: ['Climate', 'Relief', 'Parent material', 'Organisms'] },
          ],
          correctAnswers: ['Relief (topography)', 'Organisms', 'Parent material', 'Climate'],
          hint1: 'Slope = relief; living things = organisms.',
          hint2: 'The rock the soil comes from is the parent material.',
          hint3: 'Temperature + precipitation = climate; the remaining factor (Time) just means how long.',
          explanation: 'CLORPT: Climate (temp/rain), Organisms (life adds organic matter), Relief (slope), Parent material (source rock), Time (how long it has developed). Each clue maps to one factor.',
        },
      },
      {
        id: 'apgs3-organic',
        type: 'text' as const,
        content: `## The Role of Organic Matter & Humus

The difference between lifeless mineral dust and living **soil** is **organic matter**:

- Dead leaves, roots, and organisms are broken down by **decomposers** (bacteria, fungi, earthworms).
- The dark, stable, decomposed organic material left behind is called **humus**.
- Humus holds water and nutrients, improves soil structure, and feeds the soil food web.

$$\\text{Mineral particles} \\;+\\; \\text{humus (organic matter)} \\;+\\; \\text{water + air + organisms} \\;=\\; \\text{soil}$$

> 🔑 **Why topsoil is precious:** The **topsoil (A horizon)** is where humus and biological activity concentrate, making it the most fertile layer. When erosion removes topsoil, it removes exactly the part that took longest to build and that crops depend on.`,
      },
      {
        id: 'apgs3-q-organic',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Humus is best described as:',
              options: [
                'Dark, decomposed organic matter that stores water and nutrients in soil',
                'The solid bedrock at the base of a soil profile',
                'A type of clay mineral formed by hydrolysis',
                'The dissolved oxygen in soil pore spaces',
              ],
              correctAnswer: 0,
              explanation: 'Humus is the stable, dark product of decomposed organic matter. It greatly improves a soil\'s ability to retain water and nutrients and is concentrated in the fertile topsoil.',
            },
            {
              question: 'Why is soil often considered a NON-renewable resource on a human timescale?',
              options: [
                'It can take hundreds to thousands of years to form an inch of topsoil',
                'It is made entirely of fossil fuels',
                'It cannot be moved by wind or water',
                'It forms instantly after every rainfall',
              ],
              correctAnswer: 0,
              explanation: 'Topsoil forms extremely slowly (often centuries per inch), so when it is eroded faster than it regenerates, it is effectively lost for human purposes — hence "non-renewable" on our timescale.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'apes-geology-soil',
    sections: [
      {
        id: 'apgs4-intro',
        type: 'text' as const,
        content: `# 🪨 Geology & Soil Science

**Part 4 of 7 — The Soil Profile & Horizons**

---

> 🔑 **The Idea:** Dig a deep pit and the soil reveals distinct horizontal layers called **horizons**. From top to bottom they tell the story of how a soil formed. The standard sequence is **O – A – E – B – C – R**.`,
      },
      {
        id: 'apgs4-horizons',
        type: 'text' as const,
        content: `## The Soil Horizons (Top to Bottom)

| Horizon | Name | What's There |
|---------|------|--------------|
| **O** | Organic / litter | Leaf litter, decomposing organic matter on the surface |
| **A** | **Topsoil** | Mineral soil + lots of humus; most biological activity; **most fertile** |
| **E** | Eluviation (leaching) | Zone where water washes (leaches) minerals/clay **downward**; pale, sandy |
| **B** | **Subsoil** | Zone of **accumulation** — clay, iron, and minerals leached from above collect here |
| **C** | Parent material | Partially weathered "parent" rock fragments |
| **R** | Bedrock | Solid, unweathered rock at the base |

Two movements define the middle of the profile:

- **Eluviation / leaching** — water dissolves and carries material **out** of the upper horizons (E).
- **Illuviation** — that material is **deposited** lower down, building up the **B horizon**.

> 💡 **Top-down logic:** Material generally moves **downward** with percolating water. So the top is rich in organic matter (O, A), the middle is *stripped* (E), and the subsoil (B) is where the stripped minerals **accumulate**.`,
      },
      {
        id: 'apgs4-dd-horizons',
        type: 'dropdown-select' as const,
        content: `**Identify the Horizon** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Surface layer of leaf litter and decomposing organic matter:', options: ['O horizon', 'A horizon', 'B horizon', 'C horizon'] },
            { label: 'Dark, fertile topsoil rich in humus and biological activity:', options: ['A horizon', 'E horizon', 'B horizon', 'R horizon'] },
            { label: 'Subsoil where leached clay and minerals accumulate:', options: ['B horizon', 'O horizon', 'A horizon', 'E horizon'] },
            { label: 'Solid, unweathered rock at the very bottom:', options: ['R horizon (bedrock)', 'C horizon', 'A horizon', 'O horizon'] },
          ],
          correctAnswers: ['O horizon', 'A horizon', 'B horizon', 'R horizon (bedrock)'],
          hint1: 'Organic litter on top = O; bedrock at the bottom = R.',
          hint2: 'The fertile topsoil is the A horizon.',
          hint3: 'Leached minerals collect in the B (subsoil); solid rock is R.',
          explanation: 'O = surface organic litter, A = humus-rich topsoil, B = subsoil of accumulation, R = solid bedrock. The E horizon (leaching) sits between A and B.',
        },
      },
      {
        id: 'apgs4-leaching',
        type: 'text' as const,
        content: `## Leaching and Its Consequences

**Leaching** is the downward washing of dissolved nutrients and minerals by percolating water. It is a normal part of soil development — but **too much** leaching is a problem:

- In **high-rainfall** regions, heavy leaching strips nutrients from the topsoil, leaving the surface **nutrient-poor**.
- It can mobilize toxic elements (e.g., **aluminum**) and carry nitrates down into **groundwater**, a pollution concern.

This explains a tropical paradox previewed in Part 2: tropical soils are **deeply weathered** yet often **infertile**, because intense rainfall **leaches** nutrients away as fast as they're released.

> ⚠️ **Acid + leaching connection:** Acid deposition (from SO₂/NOₓ) accelerates leaching of base nutrients like calcium and magnesium from forest soils, which is one way acid rain damages ecosystems far from the smokestack.`,
      },
      {
        id: 'apgs4-q-leaching',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Leaching in a soil profile refers to:',
              options: [
                'The downward removal of dissolved nutrients and minerals by percolating water',
                'The upward rise of bedrock toward the surface',
                'The breakdown of organic matter into humus',
                'The sideways transport of soil by wind',
              ],
              correctAnswer: 0,
              explanation: 'Leaching is water dissolving nutrients/minerals in the upper soil and carrying them downward (out of the topsoil). Excessive leaching leaves the surface nutrient-poor.',
            },
            {
              question: 'Why are many tropical rainforest soils surprisingly NUTRIENT-POOR despite lush vegetation above them?',
              options: [
                'Heavy rainfall leaches nutrients out of the soil, and most nutrients are tied up in the living biomass',
                'There are no decomposers in the tropics',
                'Tropical bedrock contains no minerals at all',
                'The soils are permanently frozen',
              ],
              correctAnswer: 0,
              explanation: 'Intense tropical rainfall leaches released nutrients away quickly, and the ecosystem keeps most of its nutrients locked in the rapidly-recycling living biomass rather than stored in the soil.',
            },
          ],
        },
      },
      {
        id: 'apgs4-input-depth',
        type: 'input-boxes' as const,
        content: `**Horizon Depth Math** 🧮

A soil scientist measures the following horizon thicknesses in a pit:
- O horizon: 5 cm
- A horizon: 25 cm
- B horizon: 40 cm
- C horizon: 30 cm

**1)** What is the total depth from the surface down to the bottom of the C horizon? (in cm)
**2)** The fertile organic-rich layers are the O and A horizons. What is their combined thickness? (in cm)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['100', '30'],
          hint1: 'Add the four horizon thicknesses for the total.',
          hint2: '5 + 25 + 40 + 30 for the total depth.',
          hint3: 'O + A = 5 + 25 for the fertile surface layers.',
          explanation: '1) 5 + 25 + 40 + 30 = 100 cm total. 2) O + A = 5 + 25 = 30 cm — and that surface 30 cm is what erosion most threatens.',
        },
      },
      {
        id: 'apgs4-mature',
        type: 'text' as const,
        content: `## Young vs. Mature Soils

Soil horizons develop over time, so a profile's structure reveals its **age**:

| Soil | Horizons | Where |
|------|----------|-------|
| **Young / immature** | Few, poorly developed (maybe just C over R) | Recent volcanic flows, glacial deposits, river floodplains |
| **Mature** | Well-developed O, A, E, B, C | Stable surfaces left undisturbed for thousands of years |

A freshly deposited floodplain or lava flow has no real A or B horizon yet — those take centuries to millennia to differentiate.

> 🔑 **Putting it together:** A thick, dark A horizon over a clay-rich B horizon signals a **mature, fertile** soil. A thin profile of barely-weathered fragments signals a **young** one. Next, Part 5 asks what *makes* a soil good for growing crops.`,
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'apes-geology-soil',
    sections: [
      {
        id: 'apgs5-intro',
        type: 'text' as const,
        content: `# 🪨 Geology & Soil Science

**Part 5 of 7 — Soil Texture, Properties & Fertility**

---

> 🔑 **The Idea:** Not all soil is equal. A soil's **texture** (the mix of sand, silt, and clay) controls how well it holds water, drains, and supplies nutrients — and that determines whether it can grow a crop.`,
      },
      {
        id: 'apgs5-texture',
        type: 'text' as const,
        content: `## Soil Texture: Sand, Silt & Clay

Texture is defined by **particle size**:

| Particle | Size | Behavior |
|----------|------|----------|
| **Sand** | Largest (0.05–2 mm) | Big pore spaces → **drains fast**, low water/nutrient holding |
| **Silt** | Medium | Smooth, intermediate properties; fertile when deposited (e.g., floodplains) |
| **Clay** | Smallest (<0.002 mm) | Tiny pores → **holds water tightly**, can become waterlogged; high nutrient holding |

The "ideal" agricultural soil is **loam** — a roughly balanced mix of sand, silt, and clay. Loam combines good **drainage** (from sand) with good **water and nutrient retention** (from silt and clay).

$$\\text{Sand (drainage)} \\;+\\; \\text{Silt} \\;+\\; \\text{Clay (retention)} \\;\\longrightarrow\\; \\textbf{Loam (best of both)}$$

> 💡 **Two opposite failure modes:** Pure **sand** drains so fast that crops dry out and nutrients wash away. Pure **clay** holds so much water that roots suffocate (poor aeration) and it's hard to till. Loam threads the needle.`,
      },
      {
        id: 'apgs5-q-texture',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which soil type generally has the FASTEST drainage and lowest ability to hold water and nutrients?',
              options: ['Sandy soil', 'Clay soil', 'Loam', 'Silt-rich soil'],
              correctAnswer: 0,
              explanation: 'Sand has the largest particles and largest pore spaces, so water drains through quickly, carrying nutrients with it. Clay (smallest particles) does the opposite — it holds water tightly.',
            },
            {
              question: 'Loam is considered the best soil for most agriculture because it:',
              options: [
                'Balances good drainage with good water and nutrient retention',
                'Is made entirely of clay so it never dries out',
                'Contains no organic matter',
                'Drains faster than pure sand',
              ],
              correctAnswer: 0,
              explanation: 'Loam mixes sand, silt, and clay so it drains well enough to aerate roots (from sand) while still retaining water and nutrients (from silt and clay) — the best of both extremes.',
            },
          ],
        },
      },
      {
        id: 'apgs5-input-texture',
        type: 'input-boxes' as const,
        content: `**Texture Percentages Add to 100%** 🧮

By definition, the percentages of **sand + silt + clay** in a soil's mineral fraction must total **100%**.

**1)** A soil sample is 40% sand and 35% silt. What percent is clay? (enter just the number)
**2)** Another sample is 25% sand and 25% clay. What percent is silt? (enter just the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['25', '50'],
          hint1: 'Sand% + silt% + clay% = 100%.',
          hint2: 'For #1: clay = 100 − 40 − 35.',
          hint3: 'For #2: silt = 100 − 25 − 25.',
          explanation: '1) Clay = 100 − 40 − 35 = 25%. 2) Silt = 100 − 25 − 25 = 50%. The three fractions of the mineral portion always sum to 100%.',
        },
      },
      {
        id: 'apgs5-properties',
        type: 'text' as const,
        content: `## Key Soil Properties

Beyond texture, a few measurable properties decide fertility:

| Property | What It Means | Fertility Link |
|----------|--------------|----------------|
| **Porosity** | % of pore (empty) space | Holds air and water |
| **Permeability** | How fast water flows through | Too low → waterlogging; too high → drought/leaching |
| **Water-holding capacity** | How much water the soil retains | Highest in clay/humus-rich soils |
| **pH** | Acidity/alkalinity | Most crops prefer **slightly acidic to neutral (~6–7)** |
| **Cation Exchange Capacity (CEC)** | Ability to hold positively-charged nutrients (Ca²⁺, K⁺, NH₄⁺) | **High CEC = fertile**; clay and humus give high CEC |

**Cation Exchange Capacity (CEC)** is the key fertility concept: nutrient cations cling to the negatively-charged surfaces of clay and humus particles, then release to plant roots. Sandy, humus-poor soils have **low CEC** and lose nutrients easily.

> ⚠️ **pH controls nutrient availability.** If soil is too acidic, nutrients lock up and toxic aluminum is freed; farmers add **lime (CaCO₃)** to raise pH. If too alkaline, they may add sulfur. Many essential nutrients are most available near pH 6.5.`,
      },
      {
        id: 'apgs5-dd-properties',
        type: 'dropdown-select' as const,
        content: `**Soil Properties & Fertility** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'A soil\'s ability to hold positively-charged nutrients for plant roots:', options: ['Cation exchange capacity (CEC)', 'Permeability', 'Porosity', 'Salinity'] },
            { label: 'Which component gives soil HIGH nutrient-holding capacity?', options: ['Clay and humus', 'Pure sand', 'Gravel', 'Bedrock'] },
            { label: 'Most crops grow best at a soil pH that is:', options: ['Slightly acidic to neutral (~6–7)', 'Strongly acidic (~2–3)', 'Strongly alkaline (~11–12)', 'Exactly 0'] },
            { label: 'To raise the pH of an overly acidic soil, a farmer adds:', options: ['Lime (CaCO₃)', 'Sulfur', 'Table salt', 'Sand'] },
          ],
          correctAnswers: ['Cation exchange capacity (CEC)', 'Clay and humus', 'Slightly acidic to neutral (~6–7)', 'Lime (CaCO₃)'],
          hint1: 'The nutrient-holding property is abbreviated CEC.',
          hint2: 'Negatively-charged clay and humus surfaces grab nutrient cations.',
          hint3: 'Lime (CaCO₃) neutralizes acidity and raises pH.',
          explanation: 'CEC measures nutrient-holding ability, supplied mainly by clay and humus. Most crops prefer pH ~6–7; lime (CaCO₃) raises an acidic soil\'s pH, while sulfur lowers an alkaline one.',
        },
      },
      {
        id: 'apgs5-fertility',
        type: 'text' as const,
        content: `## What Makes a Soil "Fertile"?

Pulling it together, a **fertile** soil generally has:

- **Loam texture** — balanced drainage and retention
- **Abundant organic matter (humus)** — nutrients, water-holding, structure
- **High CEC** — holds nutrient cations against leaching
- **Near-neutral pH (~6–7)** — keeps nutrients available
- **Good structure & aeration** — room for roots, air, and water

> 🔑 **Why some soils win:** This is why **floodplains** (silt deposits, replenished by floods), **volcanic** soils (mineral-rich ash), and **temperate grassland** soils (deep humus-rich A horizons, e.g., the U.S. prairie) are among the most productive farmland on Earth. With fertility understood, Part 6 turns to how humans **degrade and lose** it.`,
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'apes-geology-soil',
    sections: [
      {
        id: 'apgs6-intro',
        type: 'text' as const,
        content: `# 🪨 Geology & Soil Science

**Part 6 of 7 — Soil Degradation & Erosion**

---

> 🔑 **The Idea:** Humans lose soil far faster than nature builds it. **Erosion, nutrient depletion, salinization, and compaction** degrade soils worldwide, threatening food security — and the famous **Dust Bowl** shows how fast it can go wrong.`,
      },
      {
        id: 'apgs6-degradation',
        type: 'text' as const,
        content: `## Forms of Soil Degradation

| Problem | Cause | Result |
|---------|-------|--------|
| **Erosion** | Removing vegetation (plowing, overgrazing, deforestation) | Topsoil stripped by wind/water |
| **Nutrient depletion** | Continuous cropping without replenishment | Falling yields; need for fertilizer |
| **Salinization** | Irrigation in dry climates; water evaporates leaving **salts** | Salt buildup poisons crops |
| **Waterlogging** | Over-irrigation raising the water table | Roots drown; salts rise |
| **Compaction** | Heavy machinery, livestock trampling | Reduced porosity, poor infiltration → more runoff |
| **Desertification** | Degradation in dry regions | Productive land becomes desert-like |

The biggest is **erosion**: when plant cover is removed, the soil-binding roots are gone and wind and rain carry topsoil away. Because topsoil forms so slowly, erosion is effectively a **permanent** loss.

> ⚠️ **Salinization is the classic irrigation trap:** In dry climates, irrigation water evaporates and leaves dissolved **salts** behind in the soil. Over years the salt accumulates until it poisons crops — it has ruined farmland since ancient Mesopotamia.`,
      },
      {
        id: 'apgs6-q-degradation',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Salinization of soil is primarily caused by:',
              options: [
                'Irrigation water evaporating in dry climates and leaving dissolved salts behind',
                'Adding too much organic compost',
                'Excessive freeze–thaw cycles',
                'Planting too many cover crops',
              ],
              correctAnswer: 0,
              explanation: 'In arid regions, irrigation water evaporates from the surface and leaves its dissolved salts in the soil. Repeated over time, the accumulating salt reaches levels that harm or kill crops.',
            },
            {
              question: 'Why is soil erosion considered an especially serious form of degradation?',
              options: [
                'Topsoil forms extremely slowly, so erosion is effectively a permanent loss of fertility',
                'Eroded soil immediately regrows within a few days',
                'Erosion only affects deserts',
                'Erosion increases the amount of topsoil',
              ],
              correctAnswer: 0,
              explanation: 'Topsoil can take centuries to millennia to form. When it is eroded away faster than it regenerates, the lost fertility cannot be recovered on a human timescale.',
            },
          ],
        },
      },
      {
        id: 'apgs6-dustbowl',
        type: 'text' as const,
        content: `## Case Study: The Dust Bowl (1930s)

The American **Dust Bowl** is the textbook example of human-caused soil erosion:

1. Farmers plowed up the deep-rooted **native prairie grasses** across the Great Plains.
2. A severe **drought** hit in the 1930s, and there were no roots left to hold the soil.
3. Strong **winds** lifted the exposed, dried-out topsoil into enormous **dust storms** ("black blizzards").
4. Millions of acres of topsoil blew away; farms failed and families migrated west.

The disaster led directly to the creation of the U.S. **Soil Conservation Service** and a national push for conservation practices.

> 💡 **The root cause:** Removing the vegetation that anchored the soil. Every modern soil-conservation method (Part 7) is essentially a way to **keep the ground covered and the roots in place**.`,
      },
      {
        id: 'apgs6-dd-degradation',
        type: 'dropdown-select' as const,
        content: `**Match Problem to Cause** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Salt buildup that poisons crops:', options: ['Salinization', 'Compaction', 'Leaching', 'Erosion'] },
            { label: 'Heavy machinery squeezing out pore space, reducing infiltration:', options: ['Compaction', 'Salinization', 'Waterlogging', 'Erosion'] },
            { label: 'Wind and water stripping topsoil after vegetation is removed:', options: ['Erosion', 'Compaction', 'Salinization', 'Acidification'] },
            { label: 'Productive dryland turning desert-like from overuse:', options: ['Desertification', 'Eutrophication', 'Subduction', 'Carbonation'] },
          ],
          correctAnswers: ['Salinization', 'Compaction', 'Erosion', 'Desertification'],
          hint1: 'Salt → salinization; squeezing → compaction.',
          hint2: 'Stripping topsoil after clearing plants = erosion.',
          hint3: 'Land becoming desert from degradation = desertification.',
          explanation: 'Salinization = salt accumulation from irrigation; compaction = lost pore space from heavy loads; erosion = topsoil transport after vegetation loss; desertification = drylands degrading toward desert.',
        },
      },
      {
        id: 'apgs6-input-erosion',
        type: 'input-boxes' as const,
        content: `**Erosion vs. Formation Rate** 🧮

Suppose a healthy soil forms new topsoil at about **0.5 mm per year**, but poor farming erodes it at **5 mm per year**.

**1)** The soil is being lost how many times faster than it forms? (enter the number)
**2)** If a field has 200 mm of topsoil and loses a NET 4.5 mm per year (5 lost − 0.5 formed), how many years until the topsoil is gone? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['10', '44.4'],
          hint1: 'For #1, compare the loss rate to the formation rate: 5 ÷ 0.5.',
          hint2: 'For #2, the NET loss is 5 − 0.5 = 4.5 mm/yr.',
          hint3: 'Years = total topsoil ÷ net loss rate = 200 ÷ 4.5.',
          explanation: '1) 5 ÷ 0.5 = 10× faster than it forms. 2) Net loss = 4.5 mm/yr, so 200 ÷ 4.5 ≈ 44.4 years until the topsoil is exhausted — the imbalance is why erosion is treated as permanent.',
        },
      },
      {
        id: 'apgs6-impacts',
        type: 'text' as const,
        content: `## Off-Site Impacts of Eroded Soil

Eroded soil doesn't just hurt the farm it leaves — it harms downstream waters:

- **Sedimentation:** soil washed into rivers and reservoirs **clogs** channels and shortens dam lifespans.
- **Turbidity:** suspended sediment **clouds water**, blocking sunlight for aquatic plants.
- **Nutrient & fertilizer runoff:** eroded soil carries **nitrogen and phosphorus** into waterways, fueling algal blooms and **eutrophication**.

> ⚠️ **Connecting units:** Soil erosion is a major **nonpoint-source water pollution** problem. The phosphorus and nitrogen riding on eroded particles are a leading driver of the dead zones you'll study in the water-pollution unit.`,
      },
      {
        id: 'apgs6-q-impacts',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Beyond losing fertility on the farm, soil erosion harms nearby aquatic ecosystems mainly by:',
              options: [
                'Adding sediment and nutrients (N and P) to waterways, causing turbidity and eutrophication',
                'Permanently increasing the dissolved oxygen of rivers',
                'Making lakes too cold for any life',
                'Removing all the salt from the ocean',
              ],
              correctAnswer: 0,
              explanation: 'Eroded soil carries sediment that clouds water (turbidity) and nutrients (nitrogen and phosphorus) that trigger algal blooms and eutrophication — a classic nonpoint-source water pollution chain.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'apes-geology-soil',
    sections: [
      {
        id: 'apgs7-intro',
        type: 'text' as const,
        content: `# 🪨 Geology & Soil Science

**Part 7 of 7 — Soil Conservation, Management & Mastery Check**

---

You now understand Earth's structure, weathering, soil formation, horizons, fertility, and degradation. This final part covers how we **conserve and rebuild** soil — then a mixed review and an Exit Quiz.`,
      },
      {
        id: 'apgs7-conservation',
        type: 'text' as const,
        content: `## Soil Conservation Methods

Every method works by **keeping soil covered, slowing water, and keeping roots and nutrients in place**:

| Method | How It Helps |
|--------|-------------|
| **Contour plowing** | Plow **across** (along) slopes, not up-and-down, so furrows trap water instead of channeling it downhill |
| **Terracing** | Carve hillsides into level steps that hold water and soil on steep land |
| **No-till / conservation tillage** | Leave crop residue and avoid plowing → roots and cover hold soil |
| **Cover crops** | Plant (e.g., clover, rye) in the off-season so the ground is never bare |
| **Crop rotation** | Alternate crops (esp. **legumes**) to restore nitrogen and break pest cycles |
| **Windbreaks / shelterbelts** | Rows of trees slow wind and reduce wind erosion |
| **Strip cropping** | Alternate strips of crops to slow runoff and catch sediment |

> 💡 **The unifying principle:** *Keep the ground covered and the roots in.* Bare, plowed soil erodes; vegetated, anchored soil stays put. Almost every method above is a variation on that one idea.`,
      },
      {
        id: 'apgs7-dd-conservation',
        type: 'dropdown-select' as const,
        content: `**Match the Conservation Method** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Plowing across a slope so furrows trap water rather than channel it downhill:', options: ['Contour plowing', 'Terracing', 'Crop rotation', 'No-till'] },
            { label: 'Cutting a steep hillside into level steps to hold soil and water:', options: ['Terracing', 'Windbreaks', 'Strip cropping', 'Contour plowing'] },
            { label: 'Rotating in legumes to naturally restore soil nitrogen:', options: ['Crop rotation', 'Terracing', 'Contour plowing', 'Compaction'] },
            { label: 'Rows of trees planted to slow the wind and reduce wind erosion:', options: ['Windbreaks (shelterbelts)', 'Terracing', 'No-till', 'Salinization'] },
          ],
          correctAnswers: ['Contour plowing', 'Terracing', 'Crop rotation', 'Windbreaks (shelterbelts)'],
          hint1: 'Plowing along the contour lines of a slope = contour plowing.',
          hint2: 'Level "steps" on a hillside = terraces.',
          hint3: 'Legumes fix nitrogen; trees block wind.',
          explanation: 'Contour plowing follows slope contours; terracing builds level steps; crop rotation (with nitrogen-fixing legumes) restores fertility; windbreaks/shelterbelts of trees reduce wind erosion.',
        },
      },
      {
        id: 'apgs7-fertility-mgmt',
        type: 'text' as const,
        content: `## Managing Fertility: Restoring What's Lost

| Practice | Effect |
|----------|--------|
| **Crop rotation with legumes** | Legumes host bacteria that **fix nitrogen**, replenishing it naturally |
| **Adding compost / manure (organic fertilizer)** | Restores humus, improves structure and CEC, releases nutrients slowly |
| **Synthetic (inorganic) fertilizer** | Fast nutrient boost, but doesn't add organic matter and can run off into water |
| **Liming** | Raises pH of acidic soils so nutrients become available |

**Organic vs. synthetic fertilizer** is a common exam comparison:

- **Organic** (compost, manure): slow-release, builds long-term soil health and humus, lower runoff risk.
- **Synthetic** (e.g., ammonium nitrate): immediate and concentrated, but high **leaching/runoff** risk that drives eutrophication, and adds no organic matter.

> ⚠️ **Trade-off:** Synthetic fertilizer boosts yields fast but, if over-applied, the excess N and P **run off** into waterways and cause the same algal-bloom problem as eroded soil. Organic methods build the soil itself.`,
      },
      {
        id: 'apgs7-q-fertility',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Rotating a nitrogen-fixing legume (like soybeans or clover) into a field helps the soil because the legume:',
              options: [
                'Hosts bacteria that convert atmospheric nitrogen into a form usable by plants',
                'Removes all the nitrogen from the soil permanently',
                'Adds salt to the soil',
                'Compacts the soil to hold more water',
              ],
              correctAnswer: 0,
              explanation: 'Legumes form a partnership with nitrogen-fixing bacteria in their root nodules, converting atmospheric N₂ into usable nitrogen compounds and naturally replenishing soil nitrogen.',
            },
            {
              question: 'One environmental ADVANTAGE of organic fertilizer (compost/manure) over synthetic fertilizer is that it:',
              options: [
                'Builds soil organic matter and tends to have lower nutrient-runoff risk',
                'Provides an instant, concentrated nutrient spike with no organic matter',
                'Always costs less and works faster',
                'Increases soil salinization',
              ],
              correctAnswer: 0,
              explanation: 'Organic fertilizer adds humus and releases nutrients slowly, improving long-term soil structure and CEC while reducing the runoff that drives eutrophication. Synthetic fertilizer acts fast but adds no organic matter and leaches more readily.',
            },
          ],
        },
      },
      {
        id: 'apgs7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Concept | Key fact |
|---------|----------|
| Earth's layers | Crust, mantle, **liquid** outer core, **solid** inner core; lithosphere = plates, asthenosphere = flows |
| Plate boundaries | Divergent (apart/new crust), Convergent (together/subduction & mountains), Transform (slide/quakes) |
| Weathering | Physical = size change; Chemical = composition change (fastest hot & wet) |
| Erosion vs. weathering | Weathering **breaks** in place; erosion **transports** |
| Soil formation | **CLORPT**: Climate, Organisms, Relief, Parent material, Time |
| Soil horizons | **O–A–E–B–C–R**; A = fertile topsoil, B = zone of accumulation |
| Texture | Sand (drains) + silt + clay (retains) → **loam** is ideal |
| Fertility | Loam, humus, high **CEC**, pH ~6–7 |
| Degradation | Erosion, salinization, compaction, desertification (**Dust Bowl**) |
| Conservation | Contour plow, terrace, no-till, cover crops, rotation, windbreaks |

> ⚠️ Top traps: weathering ≠ erosion; ground-level **leaching** makes tropical soils infertile; **outer** core is liquid / **inner** core is solid; report soil texture as percentages that sum to **100%**; salinization comes from **irrigation evaporation**, not rain.`,
      },
      {
        id: 'apgs7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which pairing of process and outcome is correct?',
              options: [
                'Chemical weathering of limestone by acidic water → caves and sinkholes',
                'Physical weathering → changes the rock\'s mineral composition',
                'Erosion → breaks rock down without moving it',
                'Deposition → carries sediment far downstream',
              ],
              correctAnswer: 0,
              explanation: 'Acidic water dissolving limestone (carbonation) is chemical weathering that forms karst caves and sinkholes. Physical weathering changes size not chemistry; erosion moves material; deposition drops it.',
            },
            {
              question: 'A farmer on a steep hillside wants to reduce soil erosion. The most appropriate method is:',
              options: ['Terracing', 'Leaving the soil bare and plowed up-and-down the slope', 'Increasing irrigation to wash salts away', 'Removing all vegetation'],
              correctAnswer: 0,
              explanation: 'Terracing carves the slope into level steps that hold soil and water in place, dramatically reducing erosion on steep land. Bare, up-and-down plowing and removing vegetation make erosion worse.',
            },
          ],
        },
      },
      {
        id: 'apgs7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'At a CONVERGENT plate boundary where an oceanic plate meets a continental plate, you would most expect:',
              options: [
                'Subduction of the denser oceanic plate, forming volcanoes and a deep trench',
                'New ocean crust forming as the plates spread apart',
                'Two plates sliding past each other with no volcanism',
                'The crust to remain completely unchanged',
              ],
              correctAnswer: 0,
              explanation: 'At a convergent ocean–continent boundary, the denser oceanic plate subducts beneath the continent. The descending plate melts to feed volcanoes, and a deep ocean trench forms at the contact.',
            },
            {
              question: 'Which soil would generally be BEST for growing most crops?',
              options: [
                'Loam — a balanced mix of sand, silt, and clay with abundant humus',
                'Pure sand with no organic matter',
                'Pure compacted clay that stays waterlogged',
                'Bare bedrock',
              ],
              correctAnswer: 0,
              explanation: 'Loam balances drainage (sand) with water and nutrient retention (silt and clay); with humus it has high CEC and good structure — the most productive agricultural soil.',
            },
            {
              question: 'Which statement about the Dust Bowl is correct?',
              options: [
                'Plowing up native prairie grasses removed the roots holding the soil, so drought and wind eroded the exposed topsoil',
                'It was caused by too much vegetation covering the soil',
                'It happened because farmers used too many windbreaks and cover crops',
                'It was a flood that deposited fresh fertile soil across the Plains',
              ],
              correctAnswer: 0,
              explanation: 'The Dust Bowl resulted from plowing up deep-rooted prairie grasses; when drought struck, nothing anchored the soil, and winds blew the dried topsoil away in massive dust storms — prompting modern soil conservation.',
            },
          ],
        },
      },
    ],
  },
]
