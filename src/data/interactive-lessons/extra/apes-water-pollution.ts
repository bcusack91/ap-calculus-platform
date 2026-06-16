import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Water Pollution (AP Environmental Science).
 * Registry key / DB Topic.slug: 'apes-water-pollution'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot
 * and the sibling apes-air-pollution lesson: teach (text) → interactive check
 * (multiple-choice / dropdown-select / input-boxes) → worked applications → Exit Quiz.
 * Concept-forward (non-math topic), so checks favor multiple-choice + dropdown, with a
 * few quantitative input-boxes (dissolved oxygen, dilution, biomagnification, % removal,
 * MCL arithmetic). LaTeX uses DOUBLED backslashes (template-literal strings); chemical
 * formulas use Unicode subscripts to match the existing APES lessons.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'apes-water-pollution',
    sections: [
      {
        id: 'apewp1-intro',
        type: 'text' as const,
        content: `# 💧 Water Pollution

**Part 1 of 7 — Sources, Categories & the Point/Nonpoint Distinction**

---

### Topics in This Part

| Section |
|---------|
| What Counts as Water Pollution |
| The Major Categories of Pollutants |
| Point vs. Nonpoint Sources |
| Surface Water vs. Groundwater |

> 🔑 **Key Concept:** Water pollution is any physical, chemical, or biological change in water that harms organisms or makes the water unfit for a desired use. The exam rewards you for knowing **where each pollutant comes from**, **what it does**, and whether its source is **point or nonpoint** — because that determines how we regulate it.`,
      },
      {
        id: 'apewp1-categories',
        type: 'text' as const,
        content: `## The Major Categories of Water Pollutants

Memorize this table — it organizes the entire unit. Each later part drills into one of these rows.

| Category | Examples | Main Source |
|----------|----------|-------------|
| **Plant nutrients** | Nitrate (NO₃⁻), phosphate (PO₄³⁻) | Fertilizer runoff, sewage, detergents |
| **Oxygen-demanding wastes** | Organic matter (sewage, manure, food waste) | Sewage, feedlots, food processing |
| **Pathogens** | Bacteria, viruses, protozoa (*E. coli*, cholera) | Untreated human/animal waste |
| **Toxic chemicals** | Heavy metals (Hg, Pb, As), pesticides, PCBs | Mining, industry, agriculture |
| **Sediment** | Soil, silt (suspended solids) | Erosion, construction, deforestation |
| **Thermal pollution** | Heated water (not a substance!) | Power-plant & factory cooling water |
| **Petroleum** | Crude oil, gasoline | Spills, runoff, leaking tanks |
| **Plastics / debris** | Microplastics, trash | Litter, runoff, fishing gear |

> 💡 **Two of these are "absences," not additions.** Thermal pollution adds *heat* (which lowers dissolved oxygen), and oxygen-demanding wastes don't poison anything directly — they *remove dissolved oxygen* as bacteria decompose them. Keep that nuance; it's a frequent exam trap.`,
      },
      {
        id: 'apewp1-q-categories',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A factory discharges heated water into a river, raising its temperature. This is BEST classified as:',
              options: ['Thermal pollution', 'Nutrient pollution', 'Sediment pollution', 'Pathogenic pollution'],
              correctAnswer: 0,
              explanation: 'Adding heat — not a chemical substance — is thermal pollution. Warmer water holds less dissolved oxygen and stresses aquatic life, even though nothing toxic was added.',
            },
            {
              question: 'Which pollutant category is responsible for waterborne diseases such as cholera and dysentery?',
              options: ['Pathogens (disease-causing organisms)', 'Plant nutrients', 'Sediment', 'Thermal pollution'],
              correctAnswer: 0,
              explanation: 'Pathogens — bacteria, viruses, and protozoa from untreated sewage — cause waterborne illnesses like cholera, dysentery, and typhoid. They are the leading water-pollution killer worldwide.',
            },
          ],
        },
      },
      {
        id: 'apewp1-point-nonpoint',
        type: 'text' as const,
        content: `## Point vs. Nonpoint Sources

| Source Type | Definition | Examples |
|-------------|------------|----------|
| **Point source** | A single, identifiable origin you could point to | A factory discharge pipe, a sewage-treatment outfall, an oil tanker spill |
| **Nonpoint source** | Diffuse runoff with no single origin | Fertilizer/pesticide runoff from farms, urban street runoff, suburban lawns |

The key test: **could you point to one pipe or location?** If yes, it's a point source. If the pollution washes in from a broad area, it's nonpoint.

> ⚠️ **The single most-tested idea in this unit:** **Nonpoint-source pollution — especially agricultural runoff — is the leading cause of water pollution in the U.S.**, and it is the *hardest* to regulate. A point source has one pipe you can permit and monitor; nonpoint runoff comes from millions of acres, so it can't be fixed with a single device.`,
      },
      {
        id: 'apewp1-dd-classify',
        type: 'dropdown-select' as const,
        content: `**Classify Each Source** 🔽

Decide whether each is a **point source** (single identifiable origin) or a **nonpoint source** (diffuse runoff).`,
        exercise: {
          dropdowns: [
            { label: 'A pipe discharging wastewater from a paper mill:', options: ['Point source', 'Nonpoint source'] },
            { label: 'Fertilizer washing off thousands of acres of cornfields:', options: ['Point source', 'Nonpoint source'] },
            { label: 'Oil leaking from a single ruptured tanker:', options: ['Point source', 'Nonpoint source'] },
            { label: 'Pesticides and oil washing off city streets in a storm:', options: ['Point source', 'Nonpoint source'] },
          ],
          correctAnswers: ['Point source', 'Nonpoint source', 'Point source', 'Nonpoint source'],
          hint1: 'If you can point to one pipe, vessel, or location, it is a point source.',
          hint2: 'If pollution washes in from a broad area (farms, streets), it is nonpoint.',
          hint3: 'Pipe and tanker = point; field runoff and street runoff = nonpoint.',
          explanation: 'A discharge pipe and a single tanker are identifiable point sources. Runoff spread across farmland or city streets has no single origin → nonpoint. Nonpoint runoff is the leading and hardest-to-control water-pollution source.',
        },
      },
      {
        id: 'apewp1-surface-ground',
        type: 'text' as const,
        content: `## Surface Water vs. Groundwater

Pollution behaves very differently depending on **where** the water is.

| Feature | Surface Water (rivers, lakes) | Groundwater (aquifers) |
|---------|-------------------------------|------------------------|
| Movement | Flows quickly; flushes and dilutes | Moves very slowly (sometimes cm/day) |
| Recovery | Can recover in months–years once the source stops | May take **decades–centuries** to recover |
| Oxygen / microbes | Plenty → pollutants break down faster | Little O₂, few microbes → pollutants persist |
| Cleanup | Visible and accessible | Hidden underground; extremely hard to clean |

> 🔑 **Setting up the arc:** Groundwater pollution is so dangerous precisely because it is **slow to move, slow to recover, and hard to detect** — we'll return to it in Part 6. First, Part 2 tackles the most exam-heavy surface-water problem: **nutrient pollution and eutrophication**.`,
      },
      {
        id: 'apewp1-q-ground',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why is groundwater (aquifer) pollution generally MORE difficult to address than surface-water pollution?',
              options: [
                'Groundwater moves slowly, has few microbes and little oxygen, so pollutants persist for decades and are hard to detect or remove',
                'Groundwater is always more toxic than surface water',
                'Groundwater flushes itself clean within days',
                'Groundwater contains no dissolved oxygen, so no pollutant can survive in it',
              ],
              correctAnswer: 0,
              explanation: 'Aquifers move slowly and lack the oxygen and microbial activity that break pollutants down in rivers. Contaminants persist for decades to centuries, are hidden underground, and are extremely costly to remediate.',
            },
            {
              question: 'In the United States, the LEADING cause of surface-water pollution is:',
              options: [
                'Nonpoint-source runoff, especially from agriculture',
                'A single large oil-tanker spill each year',
                'Thermal discharge from power plants',
                'Volcanic eruptions',
              ],
              correctAnswer: 0,
              explanation: 'Diffuse nonpoint runoff — fertilizers, pesticides, sediment, and animal waste washing off farmland and developed land — is the largest and hardest-to-regulate source of U.S. water pollution.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'apes-water-pollution',
    sections: [
      {
        id: 'apewp2-intro',
        type: 'text' as const,
        content: `# 💧 Water Pollution

**Part 2 of 7 — Nutrient Pollution & Eutrophication**

---

> 🔑 **The Idea:** Add too much **nitrogen and phosphorus** to a body of water and you trigger a chain reaction — algae explode, then die, then bacteria decomposing them strip the **oxygen** out of the water, suffocating fish. This is **cultural eutrophication**, and it is the most-tested process in the whole unit.`,
      },
      {
        id: 'apewp2-eutroph',
        type: 'text' as const,
        content: `## The Eutrophication Cascade

The limiting nutrients in most freshwater are **phosphorus (P)** and **nitrogen (N)**. Dump extra in, and here is the step-by-step collapse:

1. **Nutrient enrichment** — N and P pour in from fertilizer runoff, sewage, and detergents.
2. **Algal bloom** — algae and cyanobacteria grow explosively, forming a green mat on the surface.
3. **Blocked light** — the surface mat shades out submerged plants, which die.
4. **Mass die-off** — the algae themselves run out of nutrients/light and die in huge numbers.
5. **Decomposition** — aerobic bacteria decompose the dead algae and plants, **consuming dissolved oxygen (DO)**.
6. **Hypoxia → fish kill** — DO crashes, creating a low-oxygen "dead zone" where fish and invertebrates suffocate.

$$\\text{Excess N + P} \\rightarrow \\text{algal bloom} \\rightarrow \\text{die-off} \\rightarrow \\text{bacterial decay} \\rightarrow \\text{O}_2 \\downarrow \\rightarrow \\text{fish kill}$$

> ⚠️ **The crucial twist:** the nutrients don't kill the fish — **the bacteria do**, by stripping out the oxygen as they decompose the dead algae. Eutrophication is ultimately an *oxygen* problem, not a toxicity problem.`,
      },
      {
        id: 'apewp2-q-cascade',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In cultural eutrophication, what is the IMMEDIATE cause of the fish kill?',
              options: [
                'Bacteria decomposing the dead algae use up the dissolved oxygen, suffocating the fish',
                'The nitrogen and phosphorus directly poison the fish',
                'The algae physically strangle the fish',
                'The water becomes too acidic for fish to survive',
              ],
              correctAnswer: 0,
              explanation: 'Excess N and P fuel an algal bloom; when the algae die, aerobic bacteria decompose them and consume dissolved oxygen. The resulting hypoxia (low O₂) is what kills the fish — not the nutrients themselves.',
            },
            {
              question: 'The two nutrients most responsible for triggering eutrophication are:',
              options: ['Nitrogen and phosphorus', 'Carbon and sulfur', 'Sodium and chlorine', 'Oxygen and hydrogen'],
              correctAnswer: 0,
              explanation: 'Nitrogen (as nitrate) and phosphorus (as phosphate) are the limiting nutrients in aquatic systems. Adding them in excess — from fertilizer, sewage, and detergents — drives the algal blooms that start eutrophication.',
            },
          ],
        },
      },
      {
        id: 'apewp2-dd-order',
        type: 'dropdown-select' as const,
        content: `**Order the Eutrophication Steps** 🔽

Put the cascade in sequence by choosing what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'It all begins with an excess input of:', options: ['Nitrogen and phosphorus', 'Dissolved oxygen', 'Heavy metals', 'Sediment only'] },
            { label: 'Those nutrients trigger a rapid:', options: ['Algal bloom', 'Fish population boom', 'Drop in water temperature', 'Increase in oxygen'] },
            { label: 'When the algae die, decomposers (bacteria):', options: ['Consume dissolved oxygen', 'Release oxygen', 'Add phosphorus', 'Cool the water'] },
            { label: 'The final result for fish is:', options: ['Suffocation from low oxygen (hypoxia)', 'A population explosion', 'Faster reproduction', 'Immunity to disease'] },
          ],
          correctAnswers: ['Nitrogen and phosphorus', 'Algal bloom', 'Consume dissolved oxygen', 'Suffocation from low oxygen (hypoxia)'],
          hint1: 'Start with the nutrients that pour in from runoff.',
          hint2: 'Too many nutrients → too many algae.',
          hint3: 'Decomposing the dead algae uses oxygen, so the fish suffocate.',
          explanation: 'Excess N + P → algal bloom → die-off → bacterial decomposition consumes O₂ → hypoxia → fish suffocate. The oxygen crash is the lethal step.',
        },
      },
      {
        id: 'apewp2-bod-do',
        type: 'text' as const,
        content: `## BOD and Dissolved Oxygen (DO)

Two key measurements describe an oxygen problem:

| Term | Meaning | What high/low values mean |
|------|---------|----------------------------|
| **Dissolved Oxygen (DO)** | Amount of O₂ dissolved in the water (mg/L) | **High DO = healthy** water; low DO = stressed/dead |
| **Biochemical Oxygen Demand (BOD)** | O₂ bacteria need to decompose the organic waste present | **High BOD = lots of waste** → oxygen will be depleted |

A river badly polluted with sewage or dead algae has **high BOD** (lots of organic matter to break down) and ends up with **low DO** (the bacteria used it up). They move in **opposite** directions.

> 💡 **Temperature matters too:** **warm water holds less dissolved oxygen** than cold water. That's why thermal pollution (Part 5) makes oxygen problems worse, and why summer is the worst season for fish kills.

> 🔑 **Rule of thumb:** healthy aquatic life generally needs DO above ~5–6 mg/L. Below ~2 mg/L the water is "hypoxic" and most fish cannot survive.`,
      },
      {
        id: 'apewp2-input-do',
        type: 'input-boxes' as const,
        content: `**Dissolved Oxygen Math** 🧮

A stream sample contains dissolved oxygen as follows. Use the rule that healthy fish generally need DO above ~5 mg/L, and water below ~2 mg/L is hypoxic.

**1)** Upstream of a sewage outfall, DO is 9 mg/L. Downstream it falls to 3 mg/L. By how many mg/L did the dissolved oxygen drop? (enter the number)
**2)** A second downstream site reads 1.5 mg/L. Enter 1 if this site is hypoxic (below 2 mg/L), or 0 if it is not.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '1'],
          hint1: 'Drop = upstream DO − downstream DO.',
          hint2: '9 − 3 = the decrease in mg/L.',
          hint3: 'Hypoxic means DO below ~2 mg/L; 1.5 is below 2, so enter 1.',
          explanation: '1) DO dropped 9 − 3 = 6 mg/L below the outfall as bacteria consumed oxygen decomposing the organic waste. 2) 1.5 mg/L is below the ~2 mg/L hypoxia threshold, so enter 1 — most fish cannot survive there.',
        },
      },
      {
        id: 'apewp2-deadzone',
        type: 'text' as const,
        content: `## From Local Bloom to Coastal Dead Zone

Eutrophication scales all the way up to the ocean. The **Gulf of Mexico "dead zone"** forms every summer where the **Mississippi River** delivers fertilizer-rich runoff from the vast Midwest farm belt into the Gulf. The nutrients fuel algal blooms; decomposition strips oxygen from bottom waters, creating a hypoxic zone thousands of square kilometers in size where shrimp and fish cannot live.

> ⚠️ This is **nonpoint-source pollution at continental scale**: no single pipe is to blame — the nitrogen and phosphorus wash off millions of acres of farmland across the whole Mississippi watershed. That's exactly why it's so hard to fix.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'apes-water-pollution',
    sections: [
      {
        id: 'apewp3-intro',
        type: 'text' as const,
        content: `# 💧 Water Pollution

**Part 3 of 7 — Pathogens, Sewage & Wastewater Treatment**

---

> 🔑 **The Idea:** Worldwide, the deadliest water pollutant isn't a toxic chemical — it's **disease-causing organisms (pathogens)** from untreated human and animal waste. Understanding how we **treat sewage** is the flip side of the same coin.`,
      },
      {
        id: 'apewp3-pathogens',
        type: 'text' as const,
        content: `## Pathogens & Waterborne Disease

When sewage contaminates drinking water, it carries pathogens that cause major waterborne diseases:

| Disease | Pathogen type | Source |
|---------|---------------|--------|
| **Cholera** | Bacterium | Fecal contamination of water |
| **Typhoid fever** | Bacterium | Contaminated water/food |
| **Dysentery** | Bacteria/protozoa | Fecal contamination |
| **Hepatitis A** | Virus | Sewage-contaminated water |

We can't easily count every pathogen, so scientists test for an **indicator species** instead: **fecal coliform bacteria**, especially ***Escherichia coli* (*E. coli*)**.

> 🔑 **Why *E. coli*?** *E. coli* lives in the intestines of warm-blooded animals. Most strains aren't dangerous, but their **presence in water signals fecal contamination** — meaning more dangerous pathogens may be present too. A high fecal-coliform count means: *do not drink*.

> 💡 **Development link:** Waterborne disease is overwhelmingly a problem of **developing nations** that lack sewage treatment and clean drinking water. It is one of the leading causes of death in young children globally.`,
      },
      {
        id: 'apewp3-q-pathogens',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Water-quality tests measure fecal coliform bacteria (*E. coli*) mainly because their presence:',
              options: [
                'Indicates fecal contamination, signaling that dangerous pathogens may also be present',
                'Directly proves the water contains heavy metals',
                'Means the water has too much dissolved oxygen',
                'Shows the water is too warm for aquatic life',
              ],
              correctAnswer: 0,
              explanation: '*E. coli* is an indicator species. Most strains are harmless, but finding them shows the water has been contaminated with feces — so disease-causing pathogens (cholera, typhoid, hepatitis) may be present too.',
            },
            {
              question: 'Worldwide, the leading cause of human illness and death from water pollution is:',
              options: [
                'Pathogens from untreated sewage',
                'Mercury from coal plants',
                'Thermal pollution from factories',
                'Microplastics from packaging',
              ],
              correctAnswer: 0,
              explanation: 'Disease-causing organisms (bacteria, viruses, protozoa) from untreated human and animal waste cause far more illness and death globally than any chemical pollutant, especially in developing nations lacking sanitation.',
            },
          ],
        },
      },
      {
        id: 'apewp3-treatment',
        type: 'text' as const,
        content: `## How a Sewage Treatment Plant Works

Municipal wastewater treatment removes pollutants in **stages**:

| Stage | What it does | How |
|-------|--------------|-----|
| **Primary** | Removes **solids** physically | Screens + settling tanks let solids sink out (mechanical) |
| **Secondary** | Removes **dissolved organic waste / lowers BOD** | Aerobic bacteria digest organic matter (biological) |
| **Tertiary** (advanced) | Removes **nutrients (N, P)** & remaining contaminants | Chemical/biological treatment; not always present |
| **Disinfection** | Kills **pathogens** before discharge | Chlorine, UV light, or ozone |

The order matters: **physical (primary) → biological (secondary) → chemical/advanced (tertiary) → disinfection**.

> ⚠️ **Common trap:** *primary* treatment is purely physical (settling) and does NOT remove dissolved organic waste — that's *secondary* treatment's job (the bacteria). And ordinary treatment often does NOT remove nitrogen and phosphorus, which is why treated-sewage outfalls can still drive eutrophication.`,
      },
      {
        id: 'apewp3-dd-treatment',
        type: 'dropdown-select' as const,
        content: `**Match the Treatment Stage** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Physically settles out solids:', options: ['Primary treatment', 'Secondary treatment', 'Disinfection', 'Tertiary treatment'] },
            { label: 'Uses aerobic bacteria to digest organic waste (lowers BOD):', options: ['Secondary treatment', 'Primary treatment', 'Disinfection', 'Sedimentation'] },
            { label: 'Removes nitrogen and phosphorus:', options: ['Tertiary (advanced) treatment', 'Primary treatment', 'Screening', 'Secondary treatment'] },
            { label: 'Kills pathogens with chlorine or UV before release:', options: ['Disinfection', 'Primary treatment', 'Secondary treatment', 'Tertiary treatment'] },
          ],
          correctAnswers: ['Primary treatment', 'Secondary treatment', 'Tertiary (advanced) treatment', 'Disinfection'],
          hint1: 'Settling tanks = the physical first step.',
          hint2: 'Bacteria eating organic waste = the biological second step.',
          hint3: 'Nutrient removal is advanced (tertiary); killing germs at the end is disinfection.',
          explanation: 'Primary = physical solids removal; secondary = biological (bacteria lower BOD); tertiary = nutrient/chemical removal; disinfection (chlorine/UV/ozone) kills pathogens just before discharge.',
        },
      },
      {
        id: 'apewp3-input-removal',
        type: 'input-boxes' as const,
        content: `**Treatment Efficiency Math** 🧮

**1)** Raw sewage enters a plant with a BOD of 300 mg/L. After secondary treatment removes 90% of the BOD, what is the BOD of the water leaving the plant? (enter the number, in mg/L)
**2)** A plant receives 2,000 kg of suspended solids per day and removes 1,500 kg of them. What percent of the solids did it remove? (enter just the number, e.g. 40 for 40%)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['30', '75'],
          hint1: 'Removing 90% leaves 10%: $300 \\times 0.10$.',
          hint2: 'Percent removed = (amount removed ÷ amount entering) × 100.',
          hint3: '1,500 ÷ 2,000 × 100.',
          explanation: '1) 10% of 300 remains = 30 mg/L BOD leaving the plant. 2) (1,500 / 2,000) × 100 = 75% of the suspended solids removed.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'apes-water-pollution',
    sections: [
      {
        id: 'apewp4-intro',
        type: 'text' as const,
        content: `# 💧 Water Pollution

**Part 4 of 7 — Toxic Pollution, Bioaccumulation & Biomagnification**

---

> 🔑 **The Idea:** Some pollutants — **heavy metals, certain pesticides, PCBs** — are toxic, persistent, and **fat-soluble**. They don't just dilute away. They build up inside organisms (**bioaccumulation**) and concentrate up the food chain (**biomagnification**), so the top predator gets the worst dose.`,
      },
      {
        id: 'apewp4-toxics',
        type: 'text' as const,
        content: `## Persistent Toxic Pollutants

| Pollutant | Source | Effect |
|-----------|--------|--------|
| **Mercury (Hg)** | Coal burning, gold mining; becomes **methylmercury** in water | Neurotoxin; damages brain/nervous system (esp. fetuses) |
| **Lead (Pb)** | Old pipes, paint, industry | Neurotoxin; lowers IQ; harms children's development |
| **Arsenic (As)** | Natural rock, mining, pesticides | Cancer; skin and organ damage |
| **PCBs** | Old electrical equipment, coolants | Carcinogen; persistent; biomagnifies |
| **DDT** | Banned pesticide (still studied) | Biomagnifies; thinned bird eggshells (eagles, pelicans) |

What makes these especially dangerous is that they are **persistent** (don't break down) and often **fat-soluble** (stored in fatty tissue instead of being excreted).

> 💡 **Mercury's twist:** in water, bacteria convert inorganic mercury into **methylmercury**, the organic form that is far more toxic and far more readily absorbed and biomagnified — which is why fish-consumption advisories warn about mercury in large predatory fish like tuna and swordfish.`,
      },
      {
        id: 'apewp4-bioaccum',
        type: 'text' as const,
        content: `## Bioaccumulation vs. Biomagnification

These two terms are constantly confused — learn the distinction precisely:

| Term | What builds up | Where |
|------|----------------|-------|
| **Bioaccumulation** | Toxin builds up **within a single organism** over its lifetime | One individual (it can't excrete the fat-soluble toxin) |
| **Biomagnification** | Toxin concentration **increases at each higher trophic level** | Up the food chain (predator > prey) |

Put simply:
- **Bioaccumulation** = *over time, in one body.*
- **Biomagnification** = *up the food chain, body to body.*

$$\\text{producers (low)} \\rightarrow \\text{primary consumers} \\rightarrow \\text{secondary} \\rightarrow \\text{top predator (highest concentration)}$$

> ⚠️ **Why the top predator suffers most:** each predator eats many contaminated prey, inheriting all of *their* accumulated toxin. So concentrations multiply at every step, and apex predators — eagles, ospreys, large fish, humans — carry the highest loads. This is exactly what nearly wiped out **bald eagles** via DDT.`,
      },
      {
        id: 'apewp4-q-biomag',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement correctly distinguishes bioaccumulation from biomagnification?',
              options: [
                'Bioaccumulation is buildup within one organism over time; biomagnification is increasing concentration at each higher trophic level',
                'They are two words for exactly the same process',
                'Bioaccumulation happens up the food chain; biomagnification happens in one organism',
                'Both describe how pollutants are diluted as they move through an ecosystem',
              ],
              correctAnswer: 0,
              explanation: 'Bioaccumulation = a persistent toxin building up in a single organism over its lifetime. Biomagnification = that toxin becoming MORE concentrated at each higher trophic level as predators eat contaminated prey.',
            },
            {
              question: 'In a food chain (algae → zooplankton → small fish → osprey), the HIGHEST concentration of a fat-soluble toxin like DDT is found in the:',
              options: ['Osprey (top predator)', 'Algae (producer)', 'Zooplankton', 'It is equal at every level'],
              correctAnswer: 0,
              explanation: 'Biomagnification concentrates fat-soluble toxins up the chain, so the top predator (osprey) carries the highest load. DDT biomagnification thinned the eggshells of top-predator birds like eagles and ospreys.',
            },
          ],
        },
      },
      {
        id: 'apewp4-input-biomag',
        type: 'input-boxes' as const,
        content: `**Biomagnification Math** 🧮

A fat-soluble toxin biomagnifies so that its concentration multiplies by **10×** at each higher trophic level.

The producers (algae) have a concentration of **0.05 ppm**.

**1)** Primary consumers (zooplankton) are one level up. What is their concentration, in ppm? (decimal is fine)
**2)** The top predator is **three** levels above the algae. What is its concentration, in ppm?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0.5', '50'],
          hint1: 'One level up = ×10: $0.05 \\times 10$.',
          hint2: 'Three levels up = ×10 three times = ×1000.',
          hint3: '$0.05 \\times 10 \\times 10 \\times 10 = 0.05 \\times 1000$.',
          explanation: '1) One trophic level up: 0.05 × 10 = 0.5 ppm. 2) Three levels up: 0.05 × 10³ = 0.05 × 1000 = 50 ppm. The top predator carries a 1000× heavier dose than the producers.',
        },
      },
      {
        id: 'apewp4-dd-toxics',
        type: 'dropdown-select' as const,
        content: `**Match the Toxic Pollutant** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Neurotoxin from coal burning that becomes methylmercury in water:', options: ['Mercury', 'Arsenic', 'PCBs', 'Sediment'] },
            { label: 'Pesticide that biomagnified and thinned bald-eagle eggshells:', options: ['DDT', 'Mercury', 'Lead', 'Nitrate'] },
            { label: 'Process where a toxin gets more concentrated at each higher trophic level:', options: ['Biomagnification', 'Eutrophication', 'Disinfection', 'Sedimentation'] },
            { label: 'Property that lets these toxins persist and accumulate in tissue:', options: ['Fat-soluble and not easily broken down', 'Water-soluble and quickly excreted', 'Radioactive and short-lived', 'Volatile and quickly evaporated'] },
          ],
          correctAnswers: ['Mercury', 'DDT', 'Biomagnification', 'Fat-soluble and not easily broken down'],
          hint1: 'Coal → Hg → methylmercury.',
          hint2: 'DDT is the famous eggshell-thinning pesticide.',
          hint3: 'Fat-soluble + persistent = stored in tissue and magnified up the chain.',
          explanation: 'Mercury from coal becomes toxic methylmercury; DDT biomagnified and thinned raptor eggshells; biomagnification concentrates toxins up trophic levels; fat-soluble, persistent toxins accumulate in tissue instead of being excreted.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'apes-water-pollution',
    sections: [
      {
        id: 'apewp5-intro',
        type: 'text' as const,
        content: `# 💧 Water Pollution

**Part 5 of 7 — Oil, Plastic, Sediment & Thermal Pollution**

---

> 🔑 **The Idea:** Not every water pollutant is a dissolved chemical. This part covers four "physical" pollutants the exam loves: **oil spills, plastics/microplastics, sediment, and heat**. Each harms aquatic ecosystems in a distinct mechanical or physical way.`,
      },
      {
        id: 'apewp5-oil',
        type: 'text' as const,
        content: `## Oil Pollution

Most ocean oil pollution actually comes from **nonpoint runoff and small chronic leaks** (urban runoff, used motor oil, bilge discharge), not the dramatic tanker spills — though big spills cause acute local devastation.

| Effect of an oil spill | Mechanism |
|------------------------|-----------|
| Coats birds & mammals | Destroys waterproofing/insulation of feathers and fur → hypothermia, drowning |
| Blocks sunlight & gas exchange | Surface slick reduces photosynthesis and O₂ exchange |
| Smothers organisms | Coats gills, shellfish, marsh plants |
| Toxic to eggs/larvae | Hydrocarbons poison developing organisms |

**Cleanup methods:** containment **booms** (float to corral oil), **skimmers** (scoop it up), **dispersants** (break the slick into droplets — but these can be toxic themselves), and **bioremediation** (bacteria that digest oil).

> 💡 **Counterintuitive fact:** the steady drip of nonpoint oil pollution (street runoff, improperly disposed motor oil) adds up to more oil entering the oceans over time than the headline-grabbing tanker disasters.`,
      },
      {
        id: 'apewp5-q-oil',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An oil spill kills many seabirds primarily because the oil:',
              options: [
                'Coats their feathers, destroying waterproofing and insulation so they lose buoyancy and warmth',
                'Raises the water temperature too high',
                'Adds excess nitrogen that they cannot process',
                'Makes the water too acidic to swim in',
              ],
              correctAnswer: 0,
              explanation: 'Oil mats feathers, ruining their waterproofing and insulation. Birds lose buoyancy and body heat (hypothermia), and they ingest toxic oil while trying to preen — a major cause of death in spills.',
            },
            {
              question: 'Which cleanup method uses oil-eating bacteria to break down a spill?',
              options: ['Bioremediation', 'Containment booms', 'Skimmers', 'Dispersants'],
              correctAnswer: 0,
              explanation: 'Bioremediation uses microorganisms (bacteria) to metabolize and break down the hydrocarbons in oil. Booms corral oil, skimmers scoop it, and dispersants break it into droplets.',
            },
          ],
        },
      },
      {
        id: 'apewp5-plastic-sediment',
        type: 'text' as const,
        content: `## Plastics, Microplastics & Sediment

**Plastic pollution** persists for centuries because plastics don't biodegrade — they only fragment into ever-smaller **microplastics** (< 5 mm). These are ingested by plankton, fish, and seabirds, can carry toxins, and accumulate in vast ocean **gyres** (the "Great Pacific Garbage Patch").

**Sediment pollution** (suspended soil/silt from erosion, construction, and deforestation) is one of the most widespread pollutants by volume:

| Effect of sediment | Mechanism |
|--------------------|-----------|
| Cloudy water (high **turbidity**) | Blocks sunlight → less photosynthesis by aquatic plants |
| Smothers habitat | Buries fish eggs, bottom organisms, and coral reefs |
| Clogs gills | Physically harms fish and filter feeders |
| Carries other pollutants | Nutrients and toxins hitch a ride on soil particles |

> 💡 **Turbidity link:** sediment doesn't poison the water — it makes it **cloudy (high turbidity)**, which blocks light for photosynthesis and physically smothers organisms. It is mostly a **nonpoint** pollutant from eroding land.`,
      },
      {
        id: 'apewp5-thermal',
        type: 'text' as const,
        content: `## Thermal Pollution

**Thermal pollution** is the discharge of heated water — most often **cooling water from power plants and factories**. No chemical is added, yet it harms ecosystems:

$$\\text{Warmer water} \\;\\Rightarrow\\; \\text{less dissolved O}_2 \\;\\Rightarrow\\; \\text{stressed/suffocating aquatic life}$$

| Effect | Why |
|--------|-----|
| Lower dissolved oxygen | **Warm water holds less O₂** — the core mechanism |
| Faster metabolism | Fish need *more* oxygen just as there is *less* available |
| Disrupted breeding/migration | Temperature cues are thrown off |
| Thermal shock | Sudden temperature change can kill organisms outright |

> ⚠️ **Don't forget the reverse:** releasing very **cold** water (e.g., from the bottom of a deep reservoir below a dam) is *also* thermal pollution — any human-caused temperature change that harms the ecosystem counts.`,
      },
      {
        id: 'apewp5-dd-physical',
        type: 'dropdown-select' as const,
        content: `**Match Pollutant to Its Main Harm** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Heated cooling water lowers this in the river:', options: ['Dissolved oxygen', 'Phosphorus', 'Turbidity', 'pH'] },
            { label: 'Eroded soil makes water cloudy, measured as:', options: ['Turbidity', 'Salinity', 'Hardness', 'Alkalinity'] },
            { label: 'Spilled oil kills birds mainly by:', options: ['Destroying feather waterproofing/insulation', 'Adding nutrients', 'Cooling the water', 'Raising dissolved oxygen'] },
            { label: 'Plastic that has fragmented to under 5 mm is called:', options: ['Microplastic', 'Sediment', 'Effluent', 'Methylmercury'] },
          ],
          correctAnswers: ['Dissolved oxygen', 'Turbidity', 'Destroying feather waterproofing/insulation', 'Microplastic'],
          hint1: 'Warm water holds less O₂.',
          hint2: 'Cloudiness from suspended particles = turbidity.',
          hint3: 'Oil ruins feathers; tiny plastic fragments are microplastics.',
          explanation: 'Thermal pollution lowers dissolved oxygen; sediment raises turbidity (cloudiness) and blocks light; oil destroys feather waterproofing; plastic fragments under 5 mm are microplastics.',
        },
      },
      {
        id: 'apewp5-input-thermal',
        type: 'input-boxes' as const,
        content: `**Dilution & Thermal Math** 🧮

**1)** A power plant discharges hot water. Mixed with the river, warm water holds less oxygen: upstream DO is 8 mg/L, and the warmed downstream water holds only 6 mg/L. By what percent did the dissolved oxygen decrease? (enter just the number, e.g. 25 for 25%)
**2)** A factory releases 400 kg of a pollutant into a river. To meet a safe concentration, it must be diluted into 8,000,000 liters of water. What is the resulting concentration in mg/L? (Note: 400 kg = 400,000,000 mg.) (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['25', '50'],
          hint1: 'Percent decrease = (decrease ÷ original) × 100 = (8 − 6)/8 × 100.',
          hint2: 'Concentration = mass ÷ volume = mg ÷ liters.',
          hint3: '400,000,000 mg ÷ 8,000,000 L.',
          explanation: '1) (8 − 6)/8 × 100 = 2/8 × 100 = 25% drop in DO. 2) 400,000,000 mg ÷ 8,000,000 L = 50 mg/L. Dilution lowers concentration but the total mass of pollutant is unchanged.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'apes-water-pollution',
    sections: [
      {
        id: 'apewp6-intro',
        type: 'text' as const,
        content: `# 💧 Water Pollution

**Part 6 of 7 — Groundwater & Drinking Water**

---

> 🔑 **The Idea:** About half of Americans rely on **groundwater** for drinking water. Once an aquifer is polluted it can stay contaminated for **decades to centuries**, and a few specific contaminants — **nitrate, arsenic, and leaking-tank chemicals** — dominate the exam.`,
      },
      {
        id: 'apewp6-aquifer',
        type: 'text' as const,
        content: `## How Groundwater Gets Polluted

Groundwater sits in **aquifers** — underground layers of permeable rock and sediment. Pollutants reach it by **leaching** down through the soil (percolation) or being injected/dumped:

| Source | Contaminant |
|--------|-------------|
| Fertilizer & septic systems | **Nitrate (NO₃⁻)** |
| Leaking underground storage tanks (gas stations) | Gasoline, MTBE, hydrocarbons |
| Landfills (leachate) | Mixed toxics, heavy metals |
| Industrial injection / spills | Solvents, heavy metals |
| Saltwater intrusion (over-pumping coastal aquifers) | Salt (makes water undrinkable) |
| Natural rock | **Arsenic (As)** |

> ⚠️ **Why groundwater pollution is so feared:** aquifers move slowly, have little oxygen, and few microbes — so pollutants are **not broken down or flushed out**. Cleanup is hidden, slow, and extremely expensive. Prevention is far cheaper than remediation.

> 💡 **Saltwater intrusion:** over-pumping a coastal aquifer drops the freshwater pressure and lets seawater seep in, contaminating wells with salt. It's a pollution problem caused by *overuse*, not dumping.`,
      },
      {
        id: 'apewp6-q-ground',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A coastal town over-pumps its aquifer and its wells turn salty. This is:',
              options: [
                'Saltwater intrusion — seawater seeps in as freshwater pressure drops',
                'Eutrophication of the aquifer',
                'Thermal pollution of groundwater',
                'Biomagnification of salt up the food chain',
              ],
              correctAnswer: 0,
              explanation: 'Pumping freshwater out faster than it recharges lowers the water table and freshwater pressure, allowing denser seawater to move inland into the aquifer — saltwater intrusion. It is driven by overuse of the resource.',
            },
            {
              question: 'A leaking underground gasoline storage tank at an old gas station most directly threatens:',
              options: [
                'The groundwater / aquifer that supplies nearby drinking-water wells',
                'The stratospheric ozone layer',
                'Surface-water dissolved oxygen only',
                'Atmospheric particulate levels',
              ],
              correctAnswer: 0,
              explanation: 'Fuel leaking from a buried tank percolates down into the aquifer, contaminating groundwater that feeds drinking-water wells. Leaking underground storage tanks are a classic point source of groundwater pollution.',
            },
          ],
        },
      },
      {
        id: 'apewp6-nitrate-arsenic',
        type: 'text' as const,
        content: `## Two Headline Drinking-Water Contaminants

**Nitrate (NO₃⁻):** runs off from fertilizer and seeps from septic systems into wells. In infants under 6 months, nitrate interferes with the blood's ability to carry oxygen, causing **methemoglobinemia ("blue baby syndrome")**. The EPA's drinking-water limit (MCL) for nitrate is **10 mg/L (as nitrogen)**.

**Arsenic (As):** dissolves naturally from rock into groundwater in many regions (and from mining/pesticides). Chronic exposure causes **cancer** and skin/organ damage. The EPA's drinking-water limit for arsenic is **10 ppb (0.010 mg/L)**.

| Contaminant | Health effect | EPA limit (MCL) |
|-------------|---------------|-----------------|
| **Nitrate** | Blue baby syndrome (infants) | **10 mg/L** (as N) |
| **Arsenic** | Cancer, organ damage | **10 ppb** (0.010 mg/L) |
| **Lead** | Neurotoxin (from old pipes) | Action level 15 ppb |

> 🔑 An **MCL (Maximum Contaminant Level)** is the legal limit a contaminant may reach in public drinking water, set under the **Safe Drinking Water Act** (Part 7). If a sample exceeds the MCL, the water is unsafe and must be treated.`,
      },
      {
        id: 'apewp6-input-mcl',
        type: 'input-boxes' as const,
        content: `**Compare to the MCL** 🧮

The EPA nitrate MCL is **10 mg/L**. The arsenic MCL is **10 ppb**.

**1)** A well tests at 14 mg/L nitrate. By how many mg/L does it EXCEED the nitrate MCL? (enter the number)
**2)** A well tests at 4 ppb arsenic. Enter 1 if this is SAFE (at or below the MCL), or 0 if it is unsafe.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '1'],
          hint1: 'Exceedance = measured value − MCL.',
          hint2: '14 − 10 = how far over the limit.',
          hint3: 'Arsenic MCL is 10 ppb; 4 ppb is below 10, so the water is safe → enter 1.',
          explanation: '1) 14 − 10 = 4 mg/L over the nitrate MCL — unsafe, especially for infants. 2) 4 ppb is below the 10 ppb arsenic MCL, so the water meets the standard → enter 1.',
        },
      },
      {
        id: 'apewp6-dd-ground',
        type: 'dropdown-select' as const,
        content: `**Groundwater Concepts** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Underground layer of permeable rock holding groundwater:', options: ['Aquifer', 'Watershed', 'Estuary', 'Gyre'] },
            { label: 'Contaminant that causes "blue baby syndrome" in infants:', options: ['Nitrate', 'Arsenic', 'Mercury', 'Sediment'] },
            { label: 'Process by which surface pollutants percolate down into groundwater:', options: ['Leaching', 'Evaporation', 'Biomagnification', 'Disinfection'] },
            { label: 'The legal limit for a contaminant in drinking water is called the:', options: ['Maximum Contaminant Level (MCL)', 'Biochemical Oxygen Demand', 'Turbidity index', 'Trophic level'] },
          ],
          correctAnswers: ['Aquifer', 'Nitrate', 'Leaching', 'Maximum Contaminant Level (MCL)'],
          hint1: 'Groundwater is stored in an aquifer.',
          hint2: 'Nitrate → methemoglobinemia (blue baby syndrome).',
          hint3: 'Pollutants leach (percolate) downward; the legal limit is the MCL.',
          explanation: 'An aquifer holds groundwater; nitrate causes blue baby syndrome; leaching carries pollutants down into the aquifer; and the MCL is the legal drinking-water limit set under the Safe Drinking Water Act.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'apes-water-pollution',
    sections: [
      {
        id: 'apewp7-intro',
        type: 'text' as const,
        content: `# 💧 Water Pollution

**Part 7 of 7 — Laws, Cleanup & Mastery Check**

---

You now know the pollutant categories, eutrophication, pathogens and sewage treatment, toxics and biomagnification, the physical pollutants, and groundwater. This final part covers the **laws** that fight water pollution and a few cleanup tools — then a mixed review and an Exit Quiz.`,
      },
      {
        id: 'apewp7-laws',
        type: 'text' as const,
        content: `## Key U.S. Water Laws

| Law (year) | What It Does | Covers |
|------------|--------------|--------|
| **Clean Water Act (1972)** | Regulates **point-source** discharges into surface waters via **NPDES permits**; sets water-quality standards; goal of "fishable/swimmable" waters | **Surface water** |
| **Safe Drinking Water Act (1974)** | Sets enforceable **MCLs** for contaminants in public drinking water | **Drinking water (incl. groundwater)** |
| **CERCLA / "Superfund" (1980)** | Funds cleanup of abandoned hazardous-waste sites; "polluter pays" | Toxic/hazardous sites |

The **Clean Water Act** is the cornerstone for surface water: any point source must get an **NPDES permit** limiting what it discharges. Notably, the CWA was strongest on **point sources** — diffuse **nonpoint** runoff (agriculture) remained much harder to regulate, which is why it's still the leading cause of water pollution.

> 🔑 **Don't mix them up:**
> - **Clean Water Act** → regulates *pollution discharged into surface waters* (rivers, lakes).
> - **Safe Drinking Water Act** → regulates *the quality of water coming out of your tap* (sets MCLs), including groundwater.`,
      },
      {
        id: 'apewp7-q-laws',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A factory wants to discharge treated wastewater into a river. Under which law must it obtain an NPDES permit limiting its discharge?',
              options: [
                'The Clean Water Act',
                'The Safe Drinking Water Act',
                'The Montreal Protocol',
                'The Endangered Species Act',
              ],
              correctAnswer: 0,
              explanation: 'The Clean Water Act (1972) regulates point-source discharges into surface waters and requires NPDES permits that limit what a facility may release. The Safe Drinking Water Act instead governs the quality of public drinking water.',
            },
            {
              question: 'The Clean Water Act has been LEAST effective at controlling which type of pollution, which remains the leading U.S. water-pollution source?',
              options: [
                'Nonpoint-source runoff from agriculture',
                'Discharge from a single factory pipe',
                'A municipal sewage outfall',
                'An industrial smokestack',
              ],
              correctAnswer: 0,
              explanation: 'The CWA is built around permitting identifiable point sources. Diffuse nonpoint runoff — fertilizer, pesticide, sediment, and manure washing off farmland — has no single pipe to permit, so it remains the largest and least-controlled source of U.S. water pollution.',
            },
          ],
        },
      },
      {
        id: 'apewp7-solutions',
        type: 'text' as const,
        content: `## Prevention & Cleanup Solutions

The cheapest, most effective approach is **prevention** — stopping pollution before it reaches the water:

| Approach | Example |
|----------|---------|
| **Reduce nutrient runoff** | Buffer strips/wetlands, no-till farming, precise fertilizer use |
| **Treat sewage** | Build/upgrade wastewater plants (primary→secondary→tertiary) |
| **Reduce toxics** | Ban/phase out persistent toxics (e.g., **DDT** banned in U.S. 1972) |
| **Protect groundwater** | Replace leaking tanks; cap landfills; prevent over-pumping |
| **Restore wetlands** | Natural filters that trap sediment and absorb nutrients |

> 💡 **Wetlands are nature's water filter:** they trap sediment, absorb excess nitrogen and phosphorus, and break down some pollutants before water reaches rivers and aquifers. Protecting and restoring wetlands is one of the most cost-effective water-quality tools.

> ⚠️ As with air pollution: **prevention beats cleanup.** Treating a contaminated aquifer can take decades and millions of dollars; keeping the pollutant out costs far less.`,
      },
      {
        id: 'apewp7-dd-solutions',
        type: 'dropdown-select' as const,
        content: `**Match the Solution** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Law requiring NPDES permits for point-source discharge to rivers:', options: ['Clean Water Act', 'Safe Drinking Water Act', 'Montreal Protocol', 'CERCLA'] },
            { label: 'Law that sets MCLs for contaminants in tap water:', options: ['Safe Drinking Water Act', 'Clean Water Act', 'Clean Air Act', 'NEPA'] },
            { label: 'Natural ecosystem that filters sediment and absorbs nutrients:', options: ['Wetland', 'Desert', 'Gyre', 'Aquifer'] },
            { label: 'Best general strategy for protecting groundwater:', options: ['Prevent contamination at the source', 'Wait for the aquifer to flush itself', 'Add chlorine to the aquifer', 'Heat the groundwater'] },
          ],
          correctAnswers: ['Clean Water Act', 'Safe Drinking Water Act', 'Wetland', 'Prevent contamination at the source'],
          hint1: 'CWA = surface water / point-source permits.',
          hint2: 'SDWA = the water from your tap (MCLs).',
          hint3: 'Wetlands filter water; prevention is cheaper than remediation.',
          explanation: 'Clean Water Act → NPDES permits for surface-water point sources; Safe Drinking Water Act → MCLs for drinking water; wetlands act as natural filters; and preventing contamination is far cheaper than cleaning a slow-recovering aquifer.',
        },
      },
      {
        id: 'apewp7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Concept | Key fact |
|---------|----------|
| Leading U.S. water-pollution source | **Nonpoint** runoff (agriculture) |
| Point vs. nonpoint | Point = one identifiable pipe/source; nonpoint = diffuse runoff |
| Eutrophication | Excess **N + P** → algal bloom → die-off → bacteria use O₂ → fish kill |
| DO vs. BOD | High BOD (waste) → low DO (oxygen); warm water holds less O₂ |
| Pathogens | Indicator = **fecal coliform / *E. coli***; cause cholera, typhoid |
| Sewage treatment | Primary (physical) → secondary (bacteria/BOD) → tertiary (N,P) → disinfection |
| Bioaccumulation vs. biomagnification | In one organism over time vs. up the food chain (top predator worst) |
| Groundwater | Slow to recover; nitrate (blue baby), arsenic (cancer), leaking tanks |
| Clean Water Act (1972) | Point-source discharge to **surface water**; NPDES permits |
| Safe Drinking Water Act (1974) | Sets **MCLs** for drinking water |

> ⚠️ Top traps: in eutrophication, **bacteria** (not nutrients) kill fish by using up oxygen; **primary** treatment is only physical settling; **biomagnification** ≠ bioaccumulation; the **Clean Water Act** is for surface water while the **Safe Drinking Water Act** sets tap-water MCLs.`,
      },
      {
        id: 'apewp7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A lake receives heavy fertilizer runoff. Which sequence correctly describes what follows?',
              options: [
                'Algal bloom → algae die → bacteria decompose them and use up oxygen → fish suffocate',
                'Oxygen rises → algae die off → fish thrive',
                'Water cools → algae freeze → ecosystem stabilizes',
                'Mercury biomagnifies → fish eggshells thin → birds die',
              ],
              correctAnswer: 0,
              explanation: 'Fertilizer adds N and P → algal bloom → die-off → aerobic bacteria decompose the dead algae and consume dissolved oxygen → hypoxia kills the fish. This is cultural eutrophication.',
            },
            {
              question: 'A test finds high fecal coliform (*E. coli*) counts in a stream. The best interpretation is that the water:',
              options: [
                'Is contaminated with sewage/feces and may carry disease-causing pathogens',
                'Has dangerously high dissolved oxygen',
                'Contains too much arsenic',
                'Is suffering from thermal pollution',
              ],
              correctAnswer: 0,
              explanation: '*E. coli* is an indicator of fecal contamination. High counts mean the water has been polluted with sewage, so pathogens that cause cholera, typhoid, and dysentery may be present — it is unsafe to drink.',
            },
          ],
        },
      },
      {
        id: 'apewp7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which is the LEADING and hardest-to-regulate source of water pollution in the United States?',
              options: [
                'Nonpoint-source runoff, especially from agriculture',
                'A single industrial discharge pipe',
                'Municipal sewage-treatment outfalls',
                'Oil-tanker spills',
              ],
              correctAnswer: 0,
              explanation: 'Diffuse nonpoint runoff (fertilizer, pesticides, sediment, manure) has no single origin to permit or monitor, making it the largest and most difficult-to-control U.S. water-pollution source.',
            },
            {
              question: 'A fat-soluble toxin like DDT reaches its HIGHEST concentration in a top predator because of:',
              options: [
                'Biomagnification — concentration increases at each higher trophic level',
                'Eutrophication of the predator',
                'Dilution as it moves up the food chain',
                'Disinfection by chlorine',
              ],
              correctAnswer: 0,
              explanation: 'Persistent, fat-soluble toxins biomagnify: each predator inherits the accumulated toxin of all its prey, so concentrations multiply up the chain and peak in the apex predator (e.g., DDT in bald eagles).',
            },
            {
              question: 'Which law-and-target pairing is CORRECT?',
              options: [
                'Clean Water Act → regulates point-source discharges into surface waters',
                'Safe Drinking Water Act → bans CFCs to protect stratospheric ozone',
                'Clean Water Act → sets the MCL for tap-water arsenic',
                'Safe Drinking Water Act → controls thermal pollution from power plants',
              ],
              correctAnswer: 0,
              explanation: 'The Clean Water Act (1972) regulates point-source discharges into surface waters via NPDES permits. The Safe Drinking Water Act sets MCLs for drinking water (not CFCs or thermal discharge); the Montreal Protocol handles CFCs.',
            },
          ],
        },
      },
    ],
  },
]
