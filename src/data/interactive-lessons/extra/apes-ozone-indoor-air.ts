import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Ozone Depletion & Indoor Air Quality
 * (AP Environmental Science).
 * Registry key / DB Topic.slug: 'apes-ozone-indoor-air'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square
 * pilot: teach (text) → interactive check (multiple-choice / dropdown-select /
 * input-boxes) → worked applications → Exit Quiz. Concept-forward (non-math topic),
 * so checks favor multiple-choice + dropdown, with a few quantitative input-boxes
 * (UV/altitude, ppb, ACH/dilution, percent reductions). Deliberately distinct from
 * the sibling 'apes-air-pollution' lesson: this one drills the STRATOSPHERIC ozone
 * layer, CFC chemistry, the Antarctic ozone hole, the Montreal Protocol, and a
 * deep, dedicated treatment of INDOOR air quality. LaTeX uses DOUBLED backslashes
 * (template-literal strings); chemical formulas use Unicode subscripts to match the
 * existing APES lessons.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'apes-ozone-indoor-air',
    sections: [
      {
        id: 'apoz1-intro',
        type: 'text' as const,
        content: `# 🛡️ Ozone Depletion & Indoor Air Quality

**Part 1 of 7 — The Ozone Layer: Earth's UV Shield**

---

### Topics in This Part

| Section |
|---------|
| "Good Up High, Bad Nearby" |
| Where the Ozone Layer Lives |
| How Ozone Blocks UV (the Chapman cycle) |
| Why UV Matters for Life |

> 🔑 **Key Concept:** The **same molecule, $O_{3}$,** is a life-saving shield in the **stratosphere** but a harmful pollutant at **ground level**. This entire lesson is about the *good* stratospheric ozone — what destroys it, and how we are repairing it — followed by the air *inside* the buildings where you spend most of your life.`,
      },
      {
        id: 'apoz1-good-bad',
        type: 'text' as const,
        content: `## "Good Up High, Bad Nearby"

Ozone's role flips completely depending on **altitude**:

| Layer | Altitude | Role of $O_{3}$ | Verdict |
|-------|----------|------------|---------|
| **Stratosphere** | ~15–35 km up | Absorbs incoming UV radiation, shielding life | ✅ Good ozone |
| **Troposphere** | Ground level | Smog component; damages lungs and crops | ❌ Bad ozone |

The **stratospheric** ozone layer is sometimes called the "ozone shield." It is what this lesson is about.

> ⚠️ **The #1 exam trap of this whole topic:** *stratospheric ozone depletion* (the "ozone hole," caused by **CFCs**) is a **completely different problem** from *ground-level ozone* (smog, caused by **$NO_{x}$ + VOCs + sunlight**). Fixing one does nothing for the other. Do not confuse them.`,
      },
      {
        id: 'apoz1-q-goodbad',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Stratospheric ozone is considered beneficial because it:',
              options: [
                'Absorbs harmful incoming ultraviolet (UV) radiation before it reaches the surface',
                'Traps heat and warms the planet like a greenhouse gas',
                'Forms photochemical smog that we can see',
                'Provides oxygen for us to breathe',
              ],
              correctAnswer: 0,
              explanation: 'The stratospheric ozone layer absorbs high-energy UV radiation, shielding life at the surface from DNA damage. That protective role is why it is the "good" ozone.',
            },
            {
              question: 'The destruction of the stratospheric ozone layer is a SEPARATE issue from ground-level (tropospheric) ozone smog because:',
              options: [
                'They occur at different altitudes and have different causes (CFCs vs. $NO_{x}$ + VOCs + sunlight)',
                'They are actually the same problem with two names',
                'Both are caused by the same CFC molecules',
                'Stratospheric ozone is man-made while ground-level ozone is natural',
              ],
              correctAnswer: 0,
              explanation: 'Stratospheric depletion is caused by CFCs high in the atmosphere; ground-level ozone is a secondary pollutant formed near the surface from $NO_{x}$ + VOCs + sunlight. Same molecule, different altitudes, different causes.',
            },
          ],
        },
      },
      {
        id: 'apoz1-where',
        type: 'text' as const,
        content: `## Where the Ozone Layer Lives

The atmosphere is layered by how temperature changes with height:

| Layer (bottom → top) | Altitude | Note |
|----------------------|----------|------|
| **Troposphere** | 0–~12 km | Weather; where we live; "bad" ozone |
| **Stratosphere** | ~12–50 km | Holds the **ozone layer** (~15–35 km); temperature *rises* with height |
| **Mesosphere** | ~50–85 km | Meteors burn up |
| **Thermosphere** | ~85+ km | Auroras; very thin air |

The ozone layer's **UV absorption is exactly why the stratosphere warms with altitude** — ozone soaks up UV energy and releases it as heat, creating a stable, non-turbulent layer.

> 💡 **Memory hook:** *strato* = layered/stable. The stratosphere is calm and stratified precisely *because* ozone heats its upper part, putting warm air on top of cool air (the opposite of the weather-making troposphere).`,
      },
      {
        id: 'apoz1-dd-layers',
        type: 'dropdown-select' as const,
        content: `**Locate the Ozone Layer** 🔽

Match each fact to the correct atmospheric layer or idea.`,
        exercise: {
          dropdowns: [
            { label: 'The protective ozone layer is found in the:', options: ['Stratosphere', 'Troposphere', 'Mesosphere', 'Thermosphere'] },
            { label: 'The layer where weather and ground-level "bad" ozone occur:', options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'] },
            { label: 'In the stratosphere, temperature with increasing altitude:', options: ['Rises (because ozone absorbs UV)', 'Falls steadily', 'Stays exactly constant', 'Drops to absolute zero'] },
          ],
          correctAnswers: ['Stratosphere', 'Troposphere', 'Rises (because ozone absorbs UV)'],
          hint1: 'The protective layer sits above the weather layer.',
          hint2: 'We live in the troposphere, where weather happens.',
          hint3: 'Ozone absorbing UV heats the upper stratosphere, so temperature rises with height there.',
          explanation: 'The ozone layer is in the stratosphere (~15–35 km). The troposphere is the lowest layer where weather and smog occur. The ozone layer\'s UV absorption warms the upper stratosphere, so temperature rises with altitude there.',
        },
      },
      {
        id: 'apoz1-chapman',
        type: 'text' as const,
        content: `## How Ozone Blocks UV: The Natural Cycle

Stratospheric ozone is constantly **made and destroyed** by sunlight in a natural balance (the **Chapman cycle**, simplified):

1. UV splits an oxygen molecule into two atoms: $\\text{O}_2 + \\text{UV} \\rightarrow \\text{O} + \\text{O}$
2. Each atom joins an $\\text{O}_2$ to make ozone: $\\text{O} + \\text{O}_2 \\rightarrow \\text{O}_3$
3. Ozone absorbs more UV and breaks apart again: $\\text{O}_3 + \\text{UV} \\rightarrow \\text{O}_2 + \\text{O}$

The crucial point: **steps 1 and 3 absorb UV energy.** That absorbed UV never reaches the ground — which is exactly the protection the layer provides. In an undisturbed atmosphere, creation and destruction stay balanced, keeping a steady "shield."

> 🔑 **Key idea:** Ozone protects us not by sitting still but by *constantly absorbing UV as it cycles*. A pollutant that tips this balance toward destruction thins the shield — that is "ozone depletion."`,
      },
      {
        id: 'apoz1-q-uv',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the natural ozone cycle, how does the ozone layer actually protect life at the surface?',
              options: [
                'By absorbing UV energy during the continuous formation and breakdown of ozone',
                'By reflecting all sunlight back into space',
                'By chemically converting UV light into oxygen we breathe',
                'By physically blocking visible light from reaching the ground',
              ],
              correctAnswer: 0,
              explanation: 'As $O_{2}$ and $O_{3}$ are split by UV (and ozone reforms), the UV photons are absorbed. That absorbed UV energy never reaches the surface, which is the protection the layer provides.',
            },
            {
              question: 'Increased UV-B radiation reaching the surface (from a thinner ozone layer) is harmful mainly because it:',
              options: [
                'Damages DNA, raising rates of skin cancer and cataracts and harming phytoplankton',
                'Directly causes global warming by trapping heat',
                'Makes the air smell like smog',
                'Increases the amount of oxygen in the atmosphere',
              ],
              correctAnswer: 0,
              explanation: 'UV-B damages DNA. More of it at the surface raises human skin cancer and cataract rates, suppresses immune function, and harms producers like phytoplankton and crops — not a warming effect.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'apes-ozone-indoor-air',
    sections: [
      {
        id: 'apoz2-intro',
        type: 'text' as const,
        content: `# 🛡️ Ozone Depletion & Indoor Air Quality

**Part 2 of 7 — CFCs and the Chemistry of Depletion**

---

> 🔑 **The Idea:** The villains are **CFCs** (chlorofluorocarbons). Their downfall is a cruel irony: the very stability that made them *useful* lets them survive long enough to reach the stratosphere, where UV finally frees a **chlorine atom** that destroys ozone *catalytically* — over and over.`,
      },
      {
        id: 'apoz2-cfcs',
        type: 'text' as const,
        content: `## What CFCs Are and Why We Used Them

**CFCs** are synthetic molecules of carbon, chlorine, and fluorine (e.g., Freon, $\\text{CCl}_2\\text{F}_2$). They were prized because they are **nontoxic, nonflammable, and extremely stable** — perfect for:

| Use | Why CFCs were chosen |
|-----|----------------------|
| **Refrigerants** (fridges, A/C) | Cycle through without reacting or burning |
| **Aerosol propellants** | Inert, pushed product out of spray cans |
| **Foam blowing agents** | Made styrofoam and insulation |
| **Solvents / cleaning** | Cleaned electronics without corroding them |

> ⚠️ **The fatal irony:** CFCs are so **unreactive** that nothing in the lower atmosphere breaks them down. So instead of degrading, they **drift intact for decades** all the way up to the stratosphere — where only the strong UV that the rest of us are shielded from is powerful enough to crack them open.`,
      },
      {
        id: 'apoz2-q-cfc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why do stable CFCs end up causing damage in the STRATOSPHERE rather than near the ground?',
              options: [
                'They are so unreactive that they are not broken down in the lower atmosphere and drift intact up to the stratosphere, where intense UV finally splits them',
                'They are heavier than air and sink into the soil',
                'They react instantly with water vapor at ground level',
                'They are emitted directly into the stratosphere by airplanes',
              ],
              correctAnswer: 0,
              explanation: 'CFCs\' chemical stability means nothing breaks them down low in the atmosphere, so they persist for decades and rise to the stratosphere. Only the intense UV there can split off the reactive chlorine atom.',
            },
            {
              question: 'Which historical use was a MAJOR source of CFC emissions?',
              options: [
                'Refrigerants and aerosol-can propellants',
                'Burning coal in power plants',
                'Fertilizing farm fields',
                'Driving gasoline cars',
              ],
              correctAnswer: 0,
              explanation: 'CFCs were widely used as refrigerants (Freon), aerosol propellants, foam-blowing agents, and solvents. Coal, fertilizer, and gasoline are sources of OTHER pollutants, not CFCs.',
            },
          ],
        },
      },
      {
        id: 'apoz2-mechanism',
        type: 'text' as const,
        content: `## The Catalytic Destruction Mechanism

This is the most important chemistry of the unit. Once a CFC reaches the stratosphere:

1. **UV frees a chlorine atom** from the CFC:
$$\\text{CCl}_2\\text{F}_2 + \\text{UV} \\;\\longrightarrow\\; \\text{Cl} + \\text{(rest of molecule)}$$
2. **Chlorine destroys ozone**, producing chlorine monoxide:
$$\\text{Cl} + \\text{O}_3 \\;\\longrightarrow\\; \\text{ClO} + \\text{O}_2$$
3. **Chlorine is regenerated**, freeing it to attack again:
$$\\text{ClO} + \\text{O} \\;\\longrightarrow\\; \\text{Cl} + \\text{O}_2$$

Notice that the **Cl atom comes back** in step 3. It is a **catalyst** — not consumed. A single chlorine atom can destroy on the order of **100,000 ozone molecules** before it is finally removed from the stratosphere.

$$\\text{Cl} + \\text{O}_3 \\rightarrow \\text{ClO} + \\text{O}_2 \\quad\\text{then}\\quad \\text{ClO} + \\text{O} \\rightarrow \\text{Cl} + \\text{O}_2$$
$$\\text{Net: } \\;\\text{O}_3 + \\text{O} \\rightarrow 2\\,\\text{O}_2 \\quad (\\text{Cl unchanged})$$

> 🔑 **Why it's so destructive:** because chlorine is a **catalyst**, one atom keeps recycling. This is why even small amounts of CFCs caused outsized damage. (Bromine from **halons** is even more destructive per atom.)`,
      },
      {
        id: 'apoz2-dd-mechanism',
        type: 'dropdown-select' as const,
        content: `**Order the Depletion Chemistry** 🔽

Walk through how one CFC molecule ends up destroying many ozone molecules.`,
        exercise: {
          dropdowns: [
            { label: 'First, in the stratosphere, UV light:', options: ['Splits a chlorine (Cl) atom off the CFC', 'Turns the CFC into oxygen', 'Bonds two CFCs together', 'Freezes the CFC'] },
            { label: 'The freed chlorine atom then reacts with ozone to form:', options: ['ClO + $O_{2}$', '$O_{3}$ + $Cl_{2}$', '$CO_{2}$ + $H_{2}O$', '$HNO_{3}$'] },
            { label: 'A later step regenerates the chlorine atom, so chlorine acts as a:', options: ['Catalyst (not used up)', 'Reactant that is consumed', 'Greenhouse gas', 'Primary pollutant'] },
            { label: 'Consequently, one chlorine atom destroys:', options: ['Many thousands of ozone molecules', 'Exactly one ozone molecule', 'Zero ozone molecules', 'Only oxygen molecules'] },
          ],
          correctAnswers: ['Splits a chlorine (Cl) atom off the CFC', 'ClO + $O_{2}$', 'Catalyst (not used up)', 'Many thousands of ozone molecules'],
          hint1: 'Intense stratospheric UV is what finally breaks the stable CFC.',
          hint2: 'Cl + $O_{3}$ → ClO + $O_{2}$ is the ozone-destroying step.',
          hint3: 'Because the Cl atom is regenerated, it keeps attacking — a catalyst.',
          explanation: 'UV frees Cl from the CFC; Cl + $O_{3}$ → ClO + $O_{2}$; then ClO + O → Cl + $O_{2}$ regenerates Cl. Because chlorine is regenerated (a catalyst), one atom destroys ~100,000 ozone molecules.',
        },
      },
      {
        id: 'apoz2-other-ods',
        type: 'text' as const,
        content: `## Other Ozone-Depleting Substances (ODS)

CFCs are the headliner, but they are not alone:

| Substance | Notes |
|-----------|-------|
| **CFCs** | Worst historic offender; chlorine-based; phased out |
| **Halons** | Fire extinguishers; release **bromine**, even more destructive per atom |
| **Carbon tetrachloride, methyl chloroform** | Solvents; chlorine sources |
| **HCFCs** | Transitional replacements — *less* damaging but still harmful; being phased out |
| **$N_{2}O$ (nitrous oxide)** | Now a significant remaining ODS (from fertilizer, combustion) |

> 💡 **HCFCs vs. HFCs:** **HCFCs** still contain chlorine (some ozone damage) and were a *temporary* bridge. **HFCs** contain **no chlorine**, so they don't deplete ozone — but many are potent **greenhouse gases**, which is why they too are now being phased down (Kigali Amendment, 2016).`,
      },
      {
        id: 'apoz2-q-ods',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which element released from CFCs is the key catalyst that destroys stratospheric ozone?',
              options: ['Chlorine (Cl)', 'Fluorine (F)', 'Carbon (C)', 'Nitrogen (N)'],
              correctAnswer: 0,
              explanation: 'It is the chlorine atom that catalytically destroys ozone (Cl + $O_{3}$ → ClO + $O_{2}$, then regenerated). Bromine from halons is similar and even more destructive per atom. Fluorine plays little role.',
            },
            {
              question: 'HFCs were adopted as CFC replacements, but they have a remaining downside. What is it?',
              options: [
                'Many are potent greenhouse gases, even though they do not deplete ozone',
                'They deplete ozone even faster than CFCs',
                'They are highly toxic to breathe at any level',
                'They cause acid rain',
              ],
              correctAnswer: 0,
              explanation: 'HFCs contain no chlorine, so they do not harm the ozone layer, but many are strong greenhouse gases. That is why the 2016 Kigali Amendment targets phasing them down.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'apes-ozone-indoor-air',
    sections: [
      {
        id: 'apoz3-intro',
        type: 'text' as const,
        content: `# 🛡️ Ozone Depletion & Indoor Air Quality

**Part 3 of 7 — The Antarctic Ozone Hole**

---

> 🔑 **The Idea:** The ozone "hole" is a dramatic **seasonal thinning** of the layer over **Antarctica** each spring. It is not a literal hole — and its location surprises students: the damage is worst over a pole where almost no CFCs are *emitted*, because of unique **polar cold and clouds**.`,
      },
      {
        id: 'apoz3-hole',
        type: 'text' as const,
        content: `## Why Antarctica, and Why Spring?

Three special conditions over Antarctica make depletion explode there each year:

| Condition | Effect |
|-----------|--------|
| **Polar vortex** | A winter wind that isolates Antarctic air, concentrating ozone-destroyers |
| **Polar stratospheric clouds (PSCs)** | Form only in the extreme winter cold; their ice surfaces let chlorine build up in reactive forms |
| **Return of spring sunlight** | UV suddenly "switches on" the accumulated chlorine, and ozone is destroyed rapidly |

So the timeline is: **dark, frigid winter** (clouds form, chlorine accumulates) → **spring sunrise** (UV triggers mass destruction) → the **hole** appears in **Southern-Hemisphere spring (September–October)**.

> ⚠️ **Exam trap:** the hole is **seasonal** and largest in **Antarctic spring (Sep–Oct)** — *not* permanent and *not* over the equator. The Arctic thins too, but its less-stable vortex usually makes its depletion milder than Antarctica's.`,
      },
      {
        id: 'apoz3-q-hole',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The "ozone hole" is most severe over Antarctica largely because of:',
              options: [
                'Extreme cold that forms polar stratospheric clouds plus a vortex that isolates the air, with destruction triggered by returning spring sunlight',
                'Heavy local CFC emissions from Antarctic factories',
                'Volcanic eruptions unique to the South Pole',
                'The thinning of the troposphere over the pole',
              ],
              correctAnswer: 0,
              explanation: 'Antarctica\'s frigid winter forms polar stratospheric clouds whose surfaces convert chlorine into reactive forms; the polar vortex isolates this air. When spring sunlight returns, UV unleashes rapid ozone destruction. Almost no CFCs are emitted there locally.',
            },
            {
              question: 'When is the Antarctic ozone hole typically at its LARGEST?',
              options: [
                'Southern-Hemisphere spring (September–October)',
                'All year, since it is permanent',
                'Southern-Hemisphere summer (December–January)',
                'Only during total solar eclipses',
              ],
              correctAnswer: 0,
              explanation: 'It is a seasonal feature: chlorine accumulates on polar stratospheric clouds during the dark winter, then returning spring sunlight (Sep–Oct in the Southern Hemisphere) drives rapid ozone loss.',
            },
          ],
        },
      },
      {
        id: 'apoz3-consequences',
        type: 'text' as const,
        content: `## Consequences of a Thinner Shield

Less ozone overhead means **more UV-B** reaches the surface. Effects scale with UV exposure:

| Affected | Consequence of more UV-B |
|----------|---------------------------|
| **Humans** | More **skin cancer**, **cataracts**, weakened immune systems |
| **Phytoplankton** | Damaged — and they are the base of the **marine food web** and major $O_{2}/carbon$ sink |
| **Crops & plants** | Reduced growth and yields |
| **Amphibians** | UV damages eggs; contributes to declines |
| **Materials** | Faster breakdown of plastics, paints, rubber |

> 💡 **Phytoplankton are the sleeper answer.** Because they anchor ocean food webs and draw down $CO_{2}$, UV harm to them ripples through *entire ecosystems* and even the carbon cycle — a favorite free-response connection.`,
      },
      {
        id: 'apoz3-input-uv',
        type: 'input-boxes' as const,
        content: `**UV and Ozone Column** 🧮

A common rule of thumb: each **1% decrease** in ozone column lets roughly **2% more** biologically harmful UV-B reach the surface.

**1)** If the ozone column over a city drops by **5%**, about what percent more UV-B reaches the ground? (enter just the number)
**2)** The total ozone column is often measured in **Dobson Units (DU)**. A "healthy" column is about **300 DU**, while severe ozone-hole readings have dropped near **100 DU**. By how many DU has the column fallen in that severe case? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['10', '200'],
          hint1: 'Multiply the ozone-loss percent by about 2 to get the UV increase.',
          hint2: '5% ozone loss × 2 ≈ 10% more UV-B.',
          hint3: 'For the DU drop, subtract: 300 − 100.',
          explanation: '1) A 5% ozone decrease ≈ 5 × 2 = 10% more UV-B. 2) A drop from 300 DU to 100 DU is a decrease of 300 − 100 = 200 DU — a roughly two-thirds loss of the column.',
        },
      },
      {
        id: 'apoz3-myths',
        type: 'text' as const,
        content: `## Clearing Up Two Common Myths

| Myth | Reality |
|------|---------|
| "The ozone hole causes global warming." | **No.** Ozone depletion (CFCs/UV) and climate change $(CO_{2}/heat trapping)$ are **distinct** problems — though CFCs *also happen to be* greenhouse gases, the depletion mechanism is about UV, not heat. |
| "The hole lets in heat and melts the ice." | **No.** The hole lets in more **UV**, not heat. Warming/ice melt is driven by greenhouse gases. |

> ⚠️ **Keep the two global atmospheric problems straight:**
> • **Ozone depletion** → CFCs → more **UV** → skin cancer, ecosystem harm.
> • **Climate change** → $CO_{2}/CH_{4}$ → trapped **heat** → warming, sea-level rise.
> They overlap only in that some chemicals (CFCs, HFCs) appear in both stories.`,
      },
      {
        id: 'apoz3-dd-distinguish',
        type: 'dropdown-select' as const,
        content: `**Depletion vs. Climate Change** 🔽

For each item, choose which global atmospheric problem it belongs to.`,
        exercise: {
          dropdowns: [
            { label: 'Increased skin cancer and cataracts:', options: ['Ozone depletion', 'Climate change'] },
            { label: 'Caused mainly by $CO_{2}$ and $CH_{4}$ trapping heat:', options: ['Climate change', 'Ozone depletion'] },
            { label: 'Driven by chlorine from CFCs in the stratosphere:', options: ['Ozone depletion', 'Climate change'] },
            { label: 'Rising sea levels from melting ice and thermal expansion:', options: ['Climate change', 'Ozone depletion'] },
          ],
          correctAnswers: ['Ozone depletion', 'Climate change', 'Ozone depletion', 'Climate change'],
          hint1: 'If it involves UV reaching the surface, it is ozone depletion.',
          hint2: 'If it involves trapped heat, it is climate change.',
          hint3: 'CFCs/chlorine → depletion; $CO_{2}/CH_{4}/heat$ → climate change.',
          explanation: 'Ozone depletion = CFC chlorine thins the layer → more UV → skin cancer/cataracts. Climate change = greenhouse gases trap heat → warming and sea-level rise. They are separate problems with separate causes.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'apes-ozone-indoor-air',
    sections: [
      {
        id: 'apoz4-intro',
        type: 'text' as const,
        content: `# 🛡️ Ozone Depletion & Indoor Air Quality

**Part 4 of 7 — The Montreal Protocol: A Policy Success Story**

---

> 🔑 **The Idea:** The **Montreal Protocol (1987)** is the most successful international environmental agreement ever — the rare case where the world identified a global problem, **phased out the cause (CFCs)**, and the ozone layer is now measurably **healing**.`,
      },
      {
        id: 'apoz4-protocol',
        type: 'text' as const,
        content: `## The Montreal Protocol

| Feature | Detail |
|---------|--------|
| **Year** | 1987 (entered force 1989), strengthened by later amendments |
| **Goal** | Phase out **ozone-depleting substances** (CFCs, halons, etc.) |
| **Participation** | **Universally ratified** — every U.N. member country |
| **Mechanism** | Set binding phase-out schedules; gave developing nations more time + a fund |
| **Result** | CFC production collapsed; the ozone layer is projected to **recover to ~1980 levels around the mid-21st century** |

Why did it succeed where many treaties fail?

1. **The science was clear** and the threat (skin cancer, ecosystem harm) was tangible.
2. **Substitutes existed** (HCFCs, then HFCs), so industry could comply at manageable cost.
3. The problem had **a small number of producers** and chemicals to regulate.

> 🔑 **Why the recovery is slow:** CFCs already released have **atmospheric lifetimes of 50–100+ years**. Even after we stopped emitting them, the chlorine already aloft keeps working for decades. We stopped the cause; nature needs time to clear the backlog.`,
      },
      {
        id: 'apoz4-q-protocol',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Montreal Protocol (1987) is considered a landmark success because it:',
              options: [
                'Phased out ozone-depleting substances worldwide, putting the ozone layer on track to recover',
                'Set national limits on the six criteria air pollutants',
                'Capped carbon dioxide emissions to stop global warming',
                'Banned all use of fossil fuels',
              ],
              correctAnswer: 0,
              explanation: 'The Montreal Protocol targeted ozone-depleting substances (CFCs, halons). It is universally ratified, CFC use collapsed, and the ozone layer is now projected to recover. (The Clean Air Act sets U.S. criteria-pollutant limits; the Kyoto/Paris agreements address $CO_{2}$.)',
            },
            {
              question: 'Even though CFC emissions were halted, why is the ozone layer recovering only slowly?',
              options: [
                'CFCs already in the atmosphere persist for many decades, so their chlorine keeps destroying ozone',
                'Countries never actually stopped producing CFCs',
                'New CFCs are constantly created naturally',
                'Ozone cannot reform once it is destroyed',
              ],
              correctAnswer: 0,
              explanation: 'CFCs have atmospheric lifetimes of 50–100+ years. The chlorine already aloft continues catalytic destruction for decades, so full recovery is expected around the mid-21st century even though emissions stopped.',
            },
          ],
        },
      },
      {
        id: 'apoz4-compare-policy',
        type: 'text' as const,
        content: `## Don't Confuse the Major Atmospheric Agreements

The exam frequently mixes these up. Keep them straight:

| Agreement | Targets | Problem addressed |
|-----------|---------|-------------------|
| **Montreal Protocol (1987)** | CFCs / ODS | **Stratospheric ozone** depletion |
| **Kigali Amendment (2016)** | **HFCs** | Climate (HFCs are greenhouse gases) — an *add-on* to Montreal |
| **Clean Air Act (U.S.)** | 6 criteria pollutants | **Ground-level** smog & air quality |
| **Kyoto Protocol / Paris Agreement** | $CO_{2}$ and other GHGs | **Climate change** |

> ⚠️ **Triple trap:** *Montreal = ozone layer/CFCs.* *Clean Air Act = ground-level smog/NAAQS.* *Paris/Kyoto = $climate/CO_{2}$.* The Kigali Amendment is the bridge — it lives *inside* the Montreal framework but fights **climate**, not ozone.`,
      },
      {
        id: 'apoz4-dd-policy',
        type: 'dropdown-select' as const,
        content: `**Match Each Policy to Its Job** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Phased out CFCs to protect the stratospheric ozone layer:', options: ['Montreal Protocol', 'Clean Air Act', 'Paris Agreement', 'Endangered Species Act'] },
            { label: 'Sets U.S. national limits (NAAQS) for criteria pollutants like ground-level ozone:', options: ['Clean Air Act', 'Montreal Protocol', 'Kyoto Protocol', 'Kigali Amendment'] },
            { label: 'Targets $CO_{2}$ and other greenhouse gases to limit climate change:', options: ['Paris Agreement', 'Montreal Protocol', 'Clean Air Act', 'Safe Drinking Water Act'] },
            { label: 'Amendment that phases down HFCs (greenhouse gases) under the ozone treaty:', options: ['Kigali Amendment', 'Clean Air Act', 'Kyoto Protocol', 'NAAQS'] },
          ],
          correctAnswers: ['Montreal Protocol', 'Clean Air Act', 'Paris Agreement', 'Kigali Amendment'],
          hint1: 'CFCs and the ozone layer → Montreal.',
          hint2: 'NAAQS and ground-level smog → Clean Air Act.',
          hint3: '$CO_{2}/climate$ → Paris; HFC phase-down add-on → Kigali.',
          explanation: 'Montreal Protocol → CFCs/ozone layer. Clean Air Act → U.S. criteria pollutants/smog. Paris Agreement → $CO_{2}/climate$. Kigali Amendment → HFC phase-down (climate) under the Montreal framework.',
        },
      },
      {
        id: 'apoz4-phaseout-text',
        type: 'text' as const,
        content: `## Measuring a Phase-Out

A "phase-out" means cutting production toward zero on a schedule. Two numbers describe progress:

- **Remaining fraction** after a cut: a **90% reduction** leaves **10%** still emitted.
- **Percent reduction**: $\\dfrac{\\text{decrease}}{\\text{original}} \\times 100$.

> 💡 These are the same percent-change tools you use everywhere in APES — apply them to CFC tonnages below to see how steep the Montreal cuts were.`,
      },
      {
        id: 'apoz4-input-phaseout',
        type: 'input-boxes' as const,
        content: `**Phase-Out Math** 🧮

**1)** A country emitted **120,000** tonnes of CFCs per year at its peak. Under the Montreal Protocol it cuts emissions by **90%**. How many tonnes per year does it still emit? (enter the number)
**2)** A refrigerant blend is being phased down from **40,000** tonnes to **10,000** tonnes per year. What is the percent reduction? (enter just the number, e.g. 30 for 30%)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['12000', '75'],
          hint1: 'A 90% cut leaves 10% remaining: 120,000 × 0.10.',
          hint2: 'Percent reduction = (decrease ÷ original) × 100.',
          hint3: 'Decrease = 40,000 − 10,000 = 30,000; then 30,000 ÷ 40,000 × 100.',
          explanation: '1) 10% of 120,000 remains = 12,000 tonnes. 2) Reduction = (40,000 − 10,000)/40,000 × 100 = 30,000/40,000 × 100 = 75%.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'apes-ozone-indoor-air',
    sections: [
      {
        id: 'apoz5-intro',
        type: 'text' as const,
        content: `# 🛡️ Ozone Depletion & Indoor Air Quality

**Part 5 of 7 — Indoor Air Quality: The Pollutants**

---

> 🔑 **The Idea:** We now drop from 30 km up to the room you are sitting in. People spend roughly **90% of their time indoors**, where pollutants can reach concentrations **higher than outdoors**. The exam's favorite indoor culprits: **radon, carbon monoxide, VOCs/formaldehyde, asbestos, and biomass-cooking smoke**.`,
      },
      {
        id: 'apoz5-pollutants',
        type: 'text' as const,
        content: `## Major Indoor Air Pollutants

| Pollutant | Source | Effect |
|-----------|--------|--------|
| **Radon-222** | Radioactive gas seeping from **uranium-bearing rock/soil** into basements | #2 cause of **lung cancer** (after smoking) |
| **Carbon monoxide (CO)** | Faulty furnaces, gas stoves, generators, blocked chimneys | Odorless; binds hemoglobin → death |
| **VOCs / formaldehyde** | Paints, adhesives, new carpet, pressed wood, cleaners | Irritation; "sick building syndrome"; some carcinogenic |
| **Asbestos** | Old insulation, ceiling/floor tiles, pipe wrap | Lung scarring; **mesothelioma** |
| **Lead (Pb)** | Old **paint** (pre-1978), contaminated dust | Neurotoxin; lowers IQ in children |
| **Smoke / particulates** | Indoor wood/dung/coal cookfires, tobacco smoke | Respiratory disease; major killer in developing nations |
| **Mold / biological** | Damp surfaces, poor ventilation | Allergies, asthma triggers |

> 💡 **Developing vs. developed split (high-yield):** In **developing** nations the biggest indoor threat is **smoke from indoor cooking and heating fires** (wood, charcoal, dung) burned with poor ventilation. In **developed** nations the headline risks are **radon, CO, and VOCs/formaldehyde** in tightly sealed, energy-efficient buildings.`,
      },
      {
        id: 'apoz5-q-pollutants',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Radon is an especially dangerous indoor pollutant because it:',
              options: [
                'Is an odorless, colorless radioactive gas that seeps from soil/rock into homes and is the #2 cause of lung cancer',
                'Is released by gas stoves and smells like rotten eggs',
                'Is a greenhouse gas that warms buildings',
                'Comes only from new building materials',
              ],
              correctAnswer: 0,
              explanation: 'Radon-222 is a colorless, odorless radioactive gas from uranium decay in soil/rock. It accumulates in basements and is the second-leading cause of lung cancer after smoking.',
            },
            {
              question: 'In many DEVELOPING nations, the leading source of harmful indoor air pollution is:',
              options: [
                'Smoke from indoor cooking and heating fires (wood, charcoal, dung)',
                'Radon from granite countertops',
                'Air-conditioner refrigerant leaks',
                'Stratospheric ozone leaking inside',
              ],
              correctAnswer: 0,
              explanation: 'Burning biomass (wood, dung, charcoal) and coal indoors with poor ventilation produces particulate-laden smoke — a leading cause of respiratory disease and death, especially for women and children.',
            },
          ],
        },
      },
      {
        id: 'apoz5-radon-co',
        type: 'text' as const,
        content: `## Two Silent Killers: Radon and CO

Both are **invisible and odorless**, which is what makes them so deadly — you cannot sense them building up.

**Radon-222**
- A decay product of **uranium** naturally present in many soils and rocks (granite, shale).
- Seeps through foundation cracks and **accumulates in basements** and lower floors.
- Radioactive decay in the lungs damages tissue → lung cancer (worse for smokers).
- Detected with a **radon test kit**; fixed with **sub-slab depressurization** (venting under the foundation) and sealing cracks.

**Carbon monoxide (CO)**
- Produced by **incomplete combustion** — faulty furnaces, gas appliances, generators run indoors, blocked chimneys.
- Binds hemoglobin ~**200× more strongly than $O_{2}$**, starving tissues of oxygen.
- Causes headache, dizziness, and at high levels, death.
- Detected with a **CO alarm**; prevented by appliance maintenance and never running engines indoors.

> ⚠️ **Why "silent":** neither has odor, color, or taste. The defense is a **detector** plus **ventilation** — not your senses.`,
      },
      {
        id: 'apoz5-dd-match',
        type: 'dropdown-select' as const,
        content: `**Match Indoor Pollutant to Source** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Radioactive gas seeping from uranium-bearing soil into basements:', options: ['Radon', 'Asbestos', 'Formaldehyde', 'Carbon monoxide'] },
            { label: 'Off-gasses from new carpet, pressed wood, and paints:', options: ['Formaldehyde / VOCs', 'Radon', 'Asbestos', 'Lead'] },
            { label: 'Old insulation and floor tiles; causes mesothelioma:', options: ['Asbestos', 'Radon', 'Carbon monoxide', 'Mold'] },
            { label: 'Odorless gas from a faulty furnace that binds hemoglobin:', options: ['Carbon monoxide', 'Formaldehyde', 'Radon', 'Lead'] },
            { label: 'Neurotoxin from chipping pre-1978 house paint:', options: ['Lead', 'Radon', 'Asbestos', 'Carbon monoxide'] },
          ],
          correctAnswers: ['Radon', 'Formaldehyde / VOCs', 'Asbestos', 'Carbon monoxide', 'Lead'],
          hint1: 'One pollutant is radioactive and comes from the ground.',
          hint2: 'New building materials off-gas VOCs like formaldehyde.',
          hint3: 'Asbestos = old fibrous insulation/tiles; CO = combustion gas; lead = old paint.',
          explanation: 'Radon (radioactive soil gas), formaldehyde/VOCs (new materials), asbestos (old insulation → mesothelioma), CO (incomplete combustion), and lead (old paint dust) are the classic indoor pollutants and their sources.',
        },
      },
      {
        id: 'apoz5-units-text',
        type: 'text' as const,
        content: `## How Indoor Concentrations Are Measured

Because indoor pollutants are dangerous at tiny amounts, they are reported in **trace-concentration units**:

| Unit | Meaning |
|------|---------|
| **ppm** (parts per million) | 1 molecule of pollutant per 1,000,000 air molecules |
| **ppb** (parts per billion) | 1 per 1,000,000,000 — *1000× smaller* than ppm |

So **1 ppm = 1000 ppb**. For example, a CO level of 35 ppm and a formaldehyde level of 50 ppb are both "small fractions" of the air, yet both matter for health.

> ⚠️ Watch your units on the exam: 0.05 ppm sounds tiny but equals 50 ppb. Always convert before comparing to a standard.`,
      },
      {
        id: 'apoz5-input-ppb',
        type: 'input-boxes' as const,
        content: `**Concentration Units** 🧮

Indoor pollutants are often reported in **parts per million (ppm)** or **parts per billion (ppb)**, where **1 ppm = 1000 ppb**.

**1)** A formaldehyde reading is **0.05 ppm**. Express that in ppb. (enter the number)
**2)** A CO alarm sounds at **70 ppm**. A faulty heater pushes the level to **210 ppm**. The level is how many times the alarm threshold? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['50', '3'],
          hint1: 'Multiply ppm by 1000 to get ppb.',
          hint2: '0.05 ppm × 1000 = ? ppb.',
          hint3: 'For #2 divide: 210 ÷ 70.',
          explanation: '1) 0.05 ppm × 1000 = 50 ppb. 2) 210 ÷ 70 = 3 times the alarm threshold — a dangerous CO level requiring immediate ventilation and exit.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'apes-ozone-indoor-air',
    sections: [
      {
        id: 'apoz6-intro',
        type: 'text' as const,
        content: `# 🛡️ Ozone Depletion & Indoor Air Quality

**Part 6 of 7 — Why Indoor Air Builds Up, and How to Fix It**

---

> 🔑 **The Idea:** Indoor pollutants concentrate for two reasons — **time** (you're inside ~90% of the time) and **confinement** (a small room is poorly diluted). The master fix is **ventilation**: trade stale, polluted indoor air for cleaner outdoor air faster than pollutants accumulate.`,
      },
      {
        id: 'apoz6-why-worse',
        type: 'text' as const,
        content: `## Why Indoor Air Can Beat Outdoor Air for Hazard

Two factors make indoor exposure outsized:

1. **Time.** People spend roughly **90%** of their lives indoors, so even *moderate* concentrations add up to large total exposure.
2. **Confinement / poor dilution.** A room is a small, poorly mixed volume. A pollutant released inside (radon, CO, VOCs) is not diluted by the whole atmosphere — it **concentrates**.

A useful steady-state model mirrors outdoor dilution: indoor concentration depends on how fast a pollutant is **added** versus how fast it is **removed by air exchange**:

$$\\text{Indoor concentration} \\;\\approx\\; \\frac{\\text{Emission rate}}{\\text{Ventilation (air-exchange) rate}}$$

Cut the air-exchange rate in half (a tightly sealed room) and indoor concentration roughly **doubles** for the same emission — the same logic as a thermal inversion, but for a building.

> 💡 **The efficiency trade-off:** modern, **tightly sealed, energy-efficient** buildings save heating/cooling energy but **reduce air exchange**, so indoor pollutants build up. The fix is *deliberate* ventilation (e.g., a heat-recovery ventilator) — you don't have to choose between efficiency and clean air.`,
      },
      {
        id: 'apoz6-input-ach',
        type: 'input-boxes' as const,
        content: `**Air-Exchange & Dilution Math** 🧮

Use $\\text{Indoor concentration} \\approx \\dfrac{\\text{Emission rate}}{\\text{Ventilation rate}}$.

**1)** Emissions stay constant, but sealing a house cuts its ventilation (air-exchange) rate to **one-third** of before. The indoor pollutant concentration becomes how many times larger? (enter the number)
**2)** "Air changes per hour" (ACH) is how many times a room's full air volume is replaced each hour. If a room of volume **60 $m^{3}$** has a ventilation airflow of **120 $m^{3}$ per hour**, what is its ACH? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3', '2'],
          hint1: 'Concentration is inversely proportional to ventilation: cutting it to 1/3 multiplies concentration by 3.',
          hint2: 'ACH = airflow ÷ room volume.',
          hint3: 'ACH = 120 $m^{3}/h$ ÷ 60 $m^{3}$ = ?',
          explanation: '1) Ventilation ÷3 → concentration ×3 for the same emission. 2) ACH = 120 ÷ 60 = 2 air changes per hour. Higher ACH dilutes pollutants faster.',
        },
      },
      {
        id: 'apoz6-sealed-text',
        type: 'text' as const,
        content: `## The Sealed-Building Paradox

The math above explains a real-world surprise: making a building **more energy-efficient** can make its indoor air **worse**.

| Building | Air exchange | Indoor pollutant level |
|----------|--------------|------------------------|
| Old, drafty house | High (lots of leaks) | Lower — pollutants leak out |
| New, tightly sealed house | Low | **Higher** — pollutants accumulate |

Sealing saves energy but throttles the ventilation term in the denominator, so concentration climbs. The solution is not to un-seal the house but to add **controlled** ventilation (such as a heat-recovery ventilator that swaps stale and fresh air without wasting heat).

> ⚠️ This is the single most common indoor-air exam point: tighter sealing → less air exchange → **more** buildup of radon, CO, and VOCs.`,
      },
      {
        id: 'apoz6-q-buildup',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Modern, tightly sealed, energy-efficient buildings can have WORSE indoor air quality because they:',
              options: [
                'Reduce air exchange, allowing pollutants like radon, CO, and VOCs to accumulate',
                'Manufacture radon inside their walls',
                'Are legally required to burn wood for heat',
                'Pull stratospheric ozone down into the rooms',
              ],
              correctAnswer: 0,
              explanation: 'Sealing a building to save energy cuts the rate of air exchange with outside. Without adequate ventilation, indoor pollutants (radon, CO, formaldehyde/VOCs, moisture) build up to higher concentrations.',
            },
            {
              question: 'Indoor pollutant concentration is highest when:',
              options: [
                'Emission rate is high and ventilation (air-exchange) rate is low',
                'Emission rate is low and ventilation rate is high',
                'The outdoor air is unusually clean',
                'The building is large and well-ventilated',
              ],
              correctAnswer: 0,
              explanation: 'Concentration ≈ emission ÷ ventilation. It peaks when a lot is emitted into the room and little fresh air dilutes it — exactly the sealed-room situation.',
            },
          ],
        },
      },
      {
        id: 'apoz6-mitigation',
        type: 'text' as const,
        content: `## Reducing Indoor Air Pollution

Mitigation targets either the **source** or the **air exchange**:

| Strategy | Targets |
|----------|---------|
| **Ventilation** (open windows, exhaust fans, air exchangers) | VOCs, CO, radon, moisture — almost everything |
| **Radon testing & sub-slab venting; seal cracks** | Radon |
| **CO detectors & furnace/appliance maintenance** | Carbon monoxide |
| **Cleaner cookstoves / fuels; vent the stove outside** | Indoor cooking smoke (developing nations) |
| **Low-VOC products; let new materials off-gas before use** | Formaldehyde, VOCs |
| **Control moisture; fix leaks** | Mold / biological |
| **Professional removal/encapsulation** | Asbestos, lead paint |

> 🔑 **The hierarchy:** (1) **prevent** — don't bring the source in (low-VOC paint, no smoking indoors); (2) **source-control** — seal radon entry, vent the stove; (3) **dilute** — ventilate. Plants and air purifiers help a little but are **not** a substitute for ventilation and source control.`,
      },
      {
        id: 'apoz6-dd-fix',
        type: 'dropdown-select' as const,
        content: `**Match the Problem to the Fix** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'High radon in a basement is best addressed by:', options: ['Sub-slab venting and sealing foundation cracks', 'Painting the walls', 'Adding more insulation', 'Lowering the thermostat'] },
            { label: 'The best defense against carbon monoxide is:', options: ['CO detectors plus appliance maintenance', 'A bowl of baking soda', 'Closing all the windows', 'A houseplant'] },
            { label: 'Indoor cooking-fire smoke in developing nations is reduced by:', options: ['Cleaner cookstoves vented to the outside', 'Sealing the home more tightly', 'Burning more wood at once', 'Using a CO detector alone'] },
            { label: 'The most general fix that lowers MOST indoor pollutants at once:', options: ['Improving ventilation / air exchange', 'Adding insulation and sealing tighter', 'Raising the indoor temperature', 'Spraying air freshener'] },
          ],
          correctAnswers: ['Sub-slab venting and sealing foundation cracks', 'CO detectors plus appliance maintenance', 'Cleaner cookstoves vented to the outside', 'Improving ventilation / air exchange'],
          hint1: 'Radon comes up through the slab — vent and seal below the house.',
          hint2: 'CO is invisible — you need a detector, plus working appliances.',
          hint3: 'Ventilation dilutes nearly everything; sealing tighter makes buildup worse.',
          explanation: 'Radon → sub-slab venting + seal cracks. CO → detectors + appliance upkeep. Cookfire smoke → cleaner, vented stoves. And ventilation is the broad fix that dilutes nearly all indoor pollutants — sealing tighter makes buildup worse.',
        },
      },
      {
        id: 'apoz6-q-fix',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The single most general strategy for lowering most indoor air pollutant concentrations is to:',
              options: [
                'Improve ventilation / air exchange',
                'Seal the building more tightly to keep outdoor pollutants out',
                'Raise the indoor temperature',
                'Burn incense to mask odors',
              ],
              correctAnswer: 0,
              explanation: 'Ventilation dilutes and removes indoor pollutants (VOCs, CO, radon, moisture). Sealing tighter or masking odors does not remove the pollutants and usually makes accumulation worse.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'apes-ozone-indoor-air',
    sections: [
      {
        id: 'apoz7-intro',
        type: 'text' as const,
        content: `# 🛡️ Ozone Depletion & Indoor Air Quality

**Part 7 of 7 — Synthesis & Mastery Check**

---

You now command both halves of this topic: the **stratospheric ozone shield** (its UV protection, CFC destruction, the Antarctic hole, and the Montreal Protocol fix) and **indoor air quality** (the key pollutants, why they build up, and how to control them). This final part ties it together with a quick reference, mixed practice, and an Exit Quiz.`,
      },
      {
        id: 'apoz7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Concept | Key fact |
|---------|----------|
| Good vs. bad ozone | Stratospheric $O_{3}$ shields UV (good); ground-level $O_{3}$ is smog (bad) |
| Ozone layer location | Stratosphere, ~15–35 km up |
| Depletion cause | **CFCs** → UV frees **Cl** → catalytic $O_{3}$ destruction |
| Catalyst point | One Cl atom destroys ~100,000 $O_{3}$ molecules |
| Ozone hole | Seasonal thinning over **Antarctica**, worst in **spring (Sep–Oct)** |
| Hole driver | Polar stratospheric clouds + vortex + returning sunlight |
| Effects of more UV-B | Skin cancer, cataracts, harm to phytoplankton/crops |
| Fix (policy) | **Montreal Protocol (1987)** phased out CFCs; layer recovering |
| Slow recovery | CFCs persist 50–100+ years in the atmosphere |
| Indoor "silent killers" | **Radon** (lung cancer) and **CO** (binds hemoglobin) — odorless |
| Developed vs. developing | Radon/CO/VOCs (developed) vs. cookfire smoke (developing) |
| Master indoor fix | **Ventilation** (plus source control) |

> ⚠️ **Top traps:** ozone depletion (CFCs/UV) ≠ ground-level ozone smog ≠ climate change $(CO_{2}/heat)$; the hole is **seasonal** over **Antarctica**; chlorine is a **catalyst**; tightly **sealing** a building makes indoor air *worse*, not better.`,
      },
      {
        id: 'apoz7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which sequence correctly describes stratospheric ozone depletion?',
              options: [
                'CFCs drift to the stratosphere → UV frees Cl → Cl catalytically destroys $O_{3}$',
                '$NO_{x}$ + VOCs + sunlight near the ground → $O_{3}$ destroyed',
                '$CO_{2}$ traps heat → ozone melts',
                'Radon rises into the stratosphere → $O_{3}$ destroyed',
              ],
              correctAnswer: 0,
              explanation: 'Stable CFCs reach the stratosphere, UV splits off a chlorine atom, and that chlorine catalytically destroys ozone (Cl + $O_{3}$ → ClO + $O_{2}$, then Cl is regenerated). The other options describe smog, climate change, or nonsense.',
            },
            {
              question: 'A homeowner in a developed country wants to reduce the two odorless indoor "silent killers." They should prioritize:',
              options: [
                'A radon test (and sub-slab venting if needed) plus CO detectors and furnace maintenance',
                'Sealing every window and door as tightly as possible',
                'Replacing CFCs in the refrigerator',
                'Reducing outdoor ground-level ozone',
              ],
              correctAnswer: 0,
              explanation: 'Radon and CO are the odorless indoor killers. Radon is handled with testing + sub-slab venting; CO with detectors + appliance maintenance. Sealing tighter would make buildup worse, and CFC/ozone issues are unrelated to indoor radon/CO.',
            },
          ],
        },
      },
      {
        id: 'apoz7-dd-synthesis',
        type: 'dropdown-select' as const,
        content: `**Sort Each Statement** 🔽

Decide which problem or fix each item belongs to.`,
        exercise: {
          dropdowns: [
            { label: 'Phased out the chemicals that thin the ozone layer:', options: ['Montreal Protocol', 'Clean Air Act', 'Paris Agreement'] },
            { label: 'More of this reaches the surface when the ozone layer thins:', options: ['UV-B radiation', 'Carbon dioxide', 'Radon'] },
            { label: 'The #2 cause of lung cancer indoors:', options: ['Radon', 'Ground-level ozone', 'CFCs'] },
            { label: 'The broad fix for most indoor pollutants:', options: ['Ventilation', 'Sealing the building tighter', 'A catalytic converter'] },
          ],
          correctAnswers: ['Montreal Protocol', 'UV-B radiation', 'Radon', 'Ventilation'],
          hint1: 'CFC phase-out = Montreal.',
          hint2: 'A thinner shield lets in more UV-B.',
          hint3: 'Radon → lung cancer; ventilation → broad indoor fix.',
          explanation: 'Montreal Protocol phased out ODS; a thinner ozone layer lets in more UV-B; radon is the #2 indoor lung-cancer cause; and ventilation is the general fix for indoor pollutants.',
        },
      },
      {
        id: 'apoz7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A single chlorine atom in the stratosphere can destroy roughly 100,000 ozone molecules because chlorine:',
              options: [
                'Acts as a catalyst — it is regenerated and reused in each destruction cycle',
                'Is permanently consumed after destroying one ozone molecule',
                'Combines with ozone to form a stable, harmless solid',
                'Is continuously re-emitted from car exhaust',
              ],
              correctAnswer: 0,
              explanation: 'Cl + $O_{3}$ → ClO + $O_{2}$, then ClO + O → Cl + $O_{2}$ regenerates the chlorine atom. Because chlorine is a catalyst (not used up), one atom keeps destroying ozone — on the order of 100,000 molecules.',
            },
            {
              question: 'The Antarctic ozone hole is best described as:',
              options: [
                'A severe seasonal thinning of stratospheric ozone, worst in Southern-Hemisphere spring, driven by polar cold and returning sunlight',
                'A permanent literal gap with zero ozone over the South Pole all year',
                'A region of heavy ground-level smog over Antarctica',
                'A buildup of extra ozone caused by CFCs',
              ],
              correctAnswer: 0,
              explanation: 'It is a seasonal thinning (not a literal hole, not permanent) over Antarctica, most severe in spring (Sep–Oct), because polar stratospheric clouds prime the chlorine and returning sunlight triggers rapid destruction.',
            },
            {
              question: 'Which pairing is correct?',
              options: [
                'Montreal Protocol → ozone layer (CFCs); ventilation → indoor air quality',
                'Montreal Protocol → ground-level smog; radon → climate change',
                'Clean Air Act → stratospheric ozone hole; CO → greenhouse warming',
                'Paris Agreement → indoor radon; CFCs → acid rain',
              ],
              correctAnswer: 0,
              explanation: 'The Montreal Protocol phased out CFCs to protect the stratospheric ozone layer, and ventilation is the master strategy for indoor air quality. The other pairings cross-wire unrelated problems and fixes.',
            },
          ],
        },
      },
    ],
  },
]
