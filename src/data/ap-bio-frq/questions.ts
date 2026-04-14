/**
 * AP Biology FRQ Practice Questions
 * Based on College Board AP Biology FRQ format:
 * - 2 long FRQs (8-10 pts each, ~25 min each)
 * - 4 short FRQs (4 pts each, ~10 min each)
 * Topics span all 8 units
 */

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export interface BioFRQ {
  id: string
  type: 'long' | 'short'
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
  dataTableHtml?: string
}

// ─── Long FRQs (8-10 points each, ~25 minutes) ────────────────────

const longFRQs: BioFRQ[] = [
  {
    id: 'bio-long-1',
    type: 'long',
    unit: 3,
    title: 'Cellular Energetics: Photosynthesis & Respiration',
    prompt: `A researcher is studying the relationship between photosynthesis and cellular respiration in spinach leaf disks. When leaf disks are placed in a sodium bicarbonate solution and exposed to light, they float as oxygen gas accumulates in the intercellular spaces. In the dark, the disks sink.

The researcher measured the number of floating leaf disks over time under three conditions:

| Time (min) | Condition A: Bright light | Condition B: Dim light | Condition C: Dark |
|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 0 |
| 5 | 3 | 1 | 0 |
| 10 | 7 | 3 | 0 |
| 15 | 10 | 5 | 0 |
| 20 | 10 | 7 | 0 |`,
    totalPoints: 10,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Explain why the leaf disks float in the light but not in the dark. Include the relevant metabolic processes and the specific gas involved.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Identifies photosynthesis as the source of oxygen production in light', keywords: ['photosynthesis', 'light reactions', 'photolysis', 'water splitting'] },
          { points: 1, description: 'Explains that O₂ gas accumulates in intercellular spaces, making disks buoyant', keywords: ['oxygen', 'O2', 'gas', 'buoyant', 'intercellular', 'float'] },
          { points: 1, description: 'Explains that in the dark, only cellular respiration occurs, consuming O₂ and producing CO₂ (which dissolves), so disks remain dense', keywords: ['respiration', 'dark', 'consume', 'CO2', 'dissolve', 'no photosynthesis'] },
        ],
        sampleAnswer: 'In the light, photosynthesis occurs in the chloroplasts. The light reactions split water molecules, producing O₂ as a byproduct. This O₂ gas accumulates in the intercellular spaces of the leaf disks, reducing their density and causing them to float.\n\nIn the dark, photosynthesis cannot occur (no light energy to drive photosystem II). Only cellular respiration takes place, consuming O₂ and producing CO₂, which dissolves readily in the bicarbonate solution. Without net O₂ production, the disks remain dense and sink.',
      },
      {
        label: '(b)',
        prompt: 'Explain the difference in the rate of floating between Condition A (bright light) and Condition B (dim light). Use the concept of the light-dependent reactions in your answer.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'States that higher light intensity increases the rate of light-dependent reactions', keywords: ['light intensity', 'rate', 'light-dependent', 'photosystems'] },
          { points: 1, description: 'Explains that more photons excite more electrons in photosystems, increasing ATP and NADPH production', keywords: ['photon', 'electron', 'ATP', 'NADPH', 'photosystem'] },
          { points: 1, description: 'Connects increased ATP/NADPH to faster Calvin cycle and greater net O₂ output', keywords: ['Calvin cycle', 'carbon fixation', 'oxygen', 'net', 'faster'] },
        ],
        sampleAnswer: 'In Condition A (bright light), more photons are available to excite electrons in Photosystem II and Photosystem I. This drives a faster rate of electron transport, producing more ATP (via chemiosmosis) and NADPH.\n\nWith more ATP and NADPH available, the Calvin cycle fixes CO₂ faster. The higher rate of light reactions also means more water is split, producing O₂ more rapidly. The net rate of photosynthesis exceeds the rate of cellular respiration by a greater margin in bright light than in dim light, so disks float sooner.',
      },
      {
        label: '(c)',
        prompt: 'The researcher adds DCMU, an herbicide that blocks electron flow from Photosystem II, to a new set of leaf disks under bright light. Predict and justify whether the disks will float or sink.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Predicts that the disks will NOT float (will sink)', keywords: ['sink', 'not float', 'will not', 'no floating'] },
          { points: 1, description: 'Justifies by explaining that blocking PSII stops water splitting and thus O₂ production', keywords: ['PSII', 'photosystem II', 'electron', 'block', 'water splitting', 'no oxygen', 'no O2'] },
        ],
        sampleAnswer: 'The disks will sink. DCMU blocks electron flow from Photosystem II. Without electron transport from PSII, water molecules are no longer split (photolysis is halted), so no O₂ is produced. Without O₂ accumulation in the intercellular spaces, the disks cannot become buoyant. Additionally, cellular respiration will continue to consume any remaining O₂, ensuring the disks stay dense and sink.',
      },
      {
        label: '(d)',
        prompt: 'Design a controlled experiment to determine the compensation point (the light intensity at which the rate of photosynthesis equals the rate of cellular respiration) for the spinach leaf disks. Include your independent variable, dependent variable, and at least two controlled variables.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Correctly identifies the independent variable as light intensity and the dependent variable as net O₂ production (or floating rate)', keywords: ['independent', 'light intensity', 'dependent', 'floating', 'oxygen', 'rate'] },
          { points: 1, description: 'Identifies at least two controlled variables (e.g., temperature, CO₂ concentration, leaf disk size, number of disks) and describes how to find the compensation point', keywords: ['controlled', 'constant', 'temperature', 'CO2', 'compensation', 'equal'] },
        ],
        sampleAnswer: 'Set up multiple groups of leaf disks (same species, same size, same number per group) in sodium bicarbonate solution at constant temperature. Expose each group to a different light intensity (e.g., 0, 50, 100, 200, 400, 800 lux). Measure the time for 50% of disks to float in each group.\n\nIndependent variable: Light intensity. Dependent variable: Time for 50% of disks to float (a proxy for net O₂ production rate). Controlled variables: Temperature, NaHCO₃ concentration, disk diameter, number of disks per replicate.\n\nThe compensation point is the light intensity at which no disks float (net gas exchange is zero — photosynthesis rate equals respiration rate).',
      },
    ],
  },
  {
    id: 'bio-long-2',
    type: 'long',
    unit: 5,
    title: 'Gene Expression & Regulation: The Lac Operon',
    prompt: `In *E. coli*, the lac operon encodes enzymes needed to metabolize lactose. The operon is regulated by a repressor protein encoded by the *lacI* gene and by the catabolite activator protein (CAP) in response to glucose levels.

A researcher creates four bacterial strains with different mutations and grows them in media containing various carbon sources. The table shows whether β-galactosidase (the product of *lacZ*) is produced:

| Strain | Mutation | Glucose only | Lactose only | Glucose + Lactose |
|:---:|:---|:---:|:---:|:---:|
| Wild type | None | – | + | – |
| Strain 1 | *lacI* (constitutive repressor) | – | – | – |
| Strain 2 | Operator constitutive ($O^c$) | + | + | + |
| Strain 3 | *lacZ* deletion | – | – | – |`,
    totalPoints: 10,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Explain why the wild-type strain produces β-galactosidase in lactose-only medium but not in glucose-only medium. Include the roles of the repressor and CAP.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Explains that lactose (allolactose) binds the repressor, causing it to release from the operator, allowing transcription', keywords: ['allolactose', 'repressor', 'operator', 'release', 'inactivate', 'inducer'] },
          { points: 1, description: 'Explains that without glucose, cAMP levels are high, allowing CAP-cAMP to bind the promoter and enhance transcription', keywords: ['cAMP', 'CAP', 'glucose', 'promoter', 'enhance', 'activate'] },
          { points: 1, description: 'Explains that glucose represses the operon (catabolite repression) — when glucose is present, cAMP is low, CAP does not bind', keywords: ['catabolite repression', 'glucose present', 'low cAMP', 'preferred', 'no CAP'] },
        ],
        sampleAnswer: 'In lactose-only medium:\n1. Allolactose (an isomer of lactose) binds to the lac repressor, causing a conformational change that releases the repressor from the operator.\n2. Without glucose, adenylyl cyclase is active, so cAMP levels are high. CAP-cAMP complex binds upstream of the promoter, enhancing RNA polymerase binding and increasing transcription of lacZ.\n\nIn glucose-only medium:\n1. No lactose means no allolactose, so the repressor remains bound to the operator, physically blocking RNA polymerase.\n2. Even if the repressor were removed, glucose keeps cAMP low, so CAP cannot activate transcription. This is catabolite repression — E. coli preferentially uses glucose.',
      },
      {
        label: '(b)',
        prompt: 'Explain the results observed for Strain 1 (*lacI* constitutive repressor mutation) across all three media conditions.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Explains that a constitutive (super) repressor cannot bind allolactose and therefore cannot be removed from the operator', keywords: ['constitutive', 'super repressor', 'cannot bind', 'allolactose', 'always bound'] },
          { points: 1, description: 'Concludes that the operon is permanently repressed regardless of carbon source', keywords: ['permanently', 'always repressed', 'never transcribed', 'no expression', 'all conditions'] },
        ],
        sampleAnswer: 'Strain 1 has a constitutive repressor (sometimes called a "super repressor"). This mutant repressor protein cannot bind allolactose, so it cannot undergo the conformational change needed to release from the operator. The repressor remains permanently bound to the operator in all three conditions, blocking RNA polymerase from transcribing lacZ. Therefore, β-galactosidase is never produced, regardless of whether lactose or glucose is present.',
      },
      {
        label: '(c)',
        prompt: 'Explain why Strain 2 ($O^c$ mutation) produces β-galactosidase even in glucose-only medium. How does this differ from wild-type regulation?',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Explains that the Oc mutation changes the operator so the repressor cannot bind to it', keywords: ['operator', 'mutant', 'cannot bind', 'repressor cannot', 'Oc'] },
          { points: 1, description: 'States that transcription occurs constitutively because the operator is always "open"', keywords: ['constitutive', 'always', 'transcription', 'open', 'continuous'] },
          { points: 1, description: 'Explains that this differs from wild type because wild-type expression requires inducer (lactose) and absence of glucose', keywords: ['wild type', 'requires', 'inducer', 'lactose', 'glucose'] },
        ],
        sampleAnswer: 'The $O^c$ mutation alters the operator DNA sequence so that the repressor protein can no longer bind to it. Without repressor binding, RNA polymerase can always access the promoter and transcribe the structural genes.\n\nThis means the operon is constitutively expressed — β-galactosidase is produced regardless of whether lactose is present. Even in glucose-only medium, transcription proceeds because the operator is permanently "open."\n\nThis differs from wild-type regulation, where expression requires: (1) lactose to inactivate the repressor AND (2) absence of glucose to allow CAP activation. The Oc mutation bypasses the repressor-mediated control entirely.',
      },
      {
        label: '(d)',
        prompt: 'Predict the phenotype of a strain with both the $O^c$ mutation AND a *lacI* deletion. Would this strain produce β-galactosidase? Justify your answer.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Correctly predicts constitutive expression (β-galactosidase will be produced)', keywords: ['yes', 'produced', 'constitutive', 'will produce'] },
          { points: 1, description: 'Justifies that with Oc the repressor cannot bind anyway, and lacI deletion just removes the repressor entirely — both mutations independently ensure the operon stays on', keywords: ['Oc', 'repressor cannot bind', 'lacI deletion', 'no repressor', 'both', 'same effect'] },
        ],
        sampleAnswer: 'Yes, this strain would constitutively produce β-galactosidase. With the *lacI* deletion, no repressor protein is produced at all, so there is nothing to bind the operator. Additionally, the $O^c$ mutation means even if a repressor were present, it could not bind. Either mutation alone is sufficient to make the operon constitutive. Together, they ensure constant expression regardless of carbon source. The only limitation would be reduced expression in glucose-containing media if CAP activation is still required for maximum transcription.',
      },
    ],
  },
]

// ─── Short FRQs (4 points each, ~10 minutes) ──────────────────────

const shortFRQs: BioFRQ[] = [
  {
    id: 'bio-short-1',
    type: 'short',
    unit: 6,
    title: 'Heredity: Chi-Square Analysis',
    prompt: `A genetics student crosses two heterozygous pea plants (Pp × Pp) and expects a 3:1 phenotypic ratio of purple to white flowers. The student observes 72 purple and 28 white offspring (n = 100).`,
    totalPoints: 4,
    timeRecommendation: '~10 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'State the null hypothesis for this chi-square test.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'States that the observed data do not differ significantly from the expected 3:1 ratio', keywords: ['null', 'no significant difference', 'expected', '3:1', 'observed'] },
        ],
        sampleAnswer: 'The null hypothesis is that there is no statistically significant difference between the observed offspring ratio and the expected 3:1 Mendelian ratio for a monohybrid cross of two heterozygous parents.',
      },
      {
        label: '(b)',
        prompt: 'Calculate the chi-square ($\\chi^2$) value for this cross. Show your work.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Correctly calculates expected values: 75 purple, 25 white', keywords: ['75', '25', 'expected'] },
          { points: 1, description: 'Correctly applies χ² formula: (72-75)²/75 + (28-25)²/25 = 0.12 + 0.36 = 0.48', keywords: ['0.48', '0.12', '0.36', 'chi-square'] },
        ],
        sampleAnswer: 'Expected: 100 × 3/4 = 75 purple, 100 × 1/4 = 25 white.\n\n$\\chi^2 = \\frac{(72-75)^2}{75} + \\frac{(28-25)^2}{25} = \\frac{9}{75} + \\frac{9}{25} = 0.12 + 0.36 = 0.48$',
      },
      {
        label: '(c)',
        prompt: 'With 1 degree of freedom and a critical value of 3.84 at p = 0.05, interpret the result. Do you accept or reject the null hypothesis?',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Correctly states that 0.48 < 3.84, so fail to reject the null hypothesis — the data are consistent with a 3:1 ratio', keywords: ['0.48', 'less than', '3.84', 'fail to reject', 'accept', 'consistent'] },
        ],
        sampleAnswer: 'Since $\\chi^2 = 0.48 < 3.84$ (the critical value at p = 0.05 with 1 df), we fail to reject the null hypothesis. The observed data are consistent with the expected 3:1 ratio. The deviation from expected values is likely due to random chance.',
      },
    ],
  },
  {
    id: 'bio-short-2',
    type: 'short',
    unit: 7,
    title: 'Evolution: Hardy-Weinberg Equilibrium',
    prompt: `In a population of 500 organisms, a trait is controlled by a single gene with two alleles. The recessive phenotype (aa) is observed in 80 individuals.`,
    totalPoints: 4,
    timeRecommendation: '~10 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Calculate the frequencies of alleles *a* and *A* in this population using the Hardy-Weinberg equation.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Correctly calculates q² = 80/500 = 0.16, q = 0.4', keywords: ['0.16', 'q²', '0.4', 'q = 0.4'] },
          { points: 1, description: 'Correctly calculates p = 1 - q = 0.6', keywords: ['0.6', 'p = 0.6', '1 - 0.4'] },
        ],
        sampleAnswer: 'Frequency of homozygous recessive: $q^2 = 80/500 = 0.16$\n\n$q = \\sqrt{0.16} = 0.4$\n\n$p = 1 - q = 1 - 0.4 = 0.6$\n\nSo allele A frequency (p) = 0.6 and allele a frequency (q) = 0.4.',
      },
      {
        label: '(b)',
        prompt: 'Calculate the expected number of heterozygous (Aa) individuals in the population.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Correctly calculates 2pq × 500 = 2(0.6)(0.4)(500) = 240', keywords: ['2pq', '0.48', '240'] },
        ],
        sampleAnswer: '$2pq = 2(0.6)(0.4) = 0.48$\n\nExpected heterozygotes: $0.48 \\times 500 = 240$ individuals.',
      },
      {
        label: '(c)',
        prompt: 'Identify TWO conditions that must be met for this population to remain in Hardy-Weinberg equilibrium, and explain how violating one condition would change allele frequencies.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies at least two HW conditions (no selection, no mutation, random mating, large population, no migration) and explains how violating one changes allele frequencies', keywords: ['no selection', 'no mutation', 'random mating', 'large population', 'no migration', 'gene flow', 'genetic drift', 'allele frequency'] },
        ],
        sampleAnswer: 'Two conditions: (1) No natural selection — all genotypes must have equal fitness. (2) Large population size — to prevent random genetic drift.\n\nIf natural selection favored the dominant phenotype, individuals with aa genotype would survive and reproduce less, reducing the frequency of allele a over generations. The population would shift away from HW equilibrium as q decreases.',
      },
    ],
  },
  {
    id: 'bio-short-3',
    type: 'short',
    unit: 4,
    title: 'Cell Communication: Signal Transduction',
    prompt: `Epinephrine (adrenaline) binds to a G-protein coupled receptor (GPCR) on liver cells, triggering a signal transduction cascade that results in glycogen breakdown into glucose.`,
    totalPoints: 4,
    timeRecommendation: '~10 minutes',
    calculatorAllowed: false,
    parts: [
      {
        label: '(a)',
        prompt: 'Describe the three main stages of this cell signaling pathway: reception, transduction, and response.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Correctly describes reception (epinephrine binds GPCR) and transduction (G-protein activates adenylyl cyclase → cAMP → PKA phosphorylation cascade)', keywords: ['epinephrine', 'GPCR', 'G-protein', 'adenylyl cyclase', 'cAMP', 'PKA', 'phosphorylation'] },
          { points: 1, description: 'Correctly describes the response (glycogen phosphorylase activation → glycogen → glucose-1-phosphate → glucose released)', keywords: ['glycogen phosphorylase', 'glycogen', 'glucose', 'breakdown', 'response'] },
        ],
        sampleAnswer: 'Reception: Epinephrine binds to a GPCR on the liver cell membrane, causing a conformational change in the receptor.\n\nTransduction: The activated receptor interacts with a G-protein, which activates adenylyl cyclase. This enzyme converts ATP to cAMP (a second messenger). cAMP activates protein kinase A (PKA), which initiates a phosphorylation cascade.\n\nResponse: The cascade activates glycogen phosphorylase, which cleaves glycogen into glucose-1-phosphate molecules, ultimately releasing glucose into the blood.',
      },
      {
        label: '(b)',
        prompt: 'Explain the role of signal amplification in this pathway and why it is biologically important.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that each step amplifies the signal (one receptor → many G-proteins → many cAMP molecules → many PKA activations → massive glycogen breakdown) and this allows a small amount of hormone to produce a large cellular response', keywords: ['amplification', 'cascade', 'one', 'many', 'small signal', 'large response'] },
        ],
        sampleAnswer: 'At each step in the cascade, the signal is amplified: one epinephrine molecule activates one receptor, which activates multiple G-proteins; each G-protein activates adenylyl cyclase, which produces hundreds of cAMP molecules; each cAMP activates PKA, which phosphorylates many targets. This amplification means a tiny amount of epinephrine can trigger the release of millions of glucose molecules — critical for a rapid fight-or-flight response.',
      },
      {
        label: '(c)',
        prompt: 'Predict what would happen to glucose release if a mutation caused the G-protein to be permanently active (unable to hydrolyze GTP to GDP). Justify your answer.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Predicts that glucose release would be continuously stimulated (constitutive signaling) because adenylyl cyclase stays active, producing cAMP regardless of epinephrine binding', keywords: ['constitutive', 'continuous', 'always active', 'cannot turn off', 'GTP', 'adenylyl cyclase', 'constant'] },
        ],
        sampleAnswer: 'If the G-protein cannot hydrolyze GTP to GDP, it remains permanently in its active conformation. This means adenylyl cyclase is constitutively active, continuously producing cAMP and activating PKA — regardless of whether epinephrine is bound to the receptor. The result would be uncontrolled, continuous glycogen breakdown and glucose release, even in the absence of the hormone signal.',
      },
    ],
  },
  {
    id: 'bio-short-4',
    type: 'short',
    unit: 8,
    title: 'Ecology: Energy Flow & Trophic Levels',
    prompt: `In a grassland ecosystem, researchers measured the energy available at each trophic level:

| Trophic Level | Energy (kcal/m²/yr) |
|:---|:---:|
| Producers (grasses) | 20,000 |
| Primary consumers (grasshoppers) | 2,000 |
| Secondary consumers (frogs) | 200 |
| Tertiary consumers (snakes) | 20 |`,
    totalPoints: 4,
    timeRecommendation: '~10 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Calculate the ecological efficiency between producers and primary consumers. Explain why only a fraction of the energy is transferred.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Correctly calculates efficiency as 2000/20000 = 10%', keywords: ['10%', '2000', '20000', 'efficiency'] },
          { points: 1, description: 'Explains that energy is lost to cellular respiration (heat), incomplete digestion, and excretion at each trophic level', keywords: ['respiration', 'heat', 'metabolic', 'lost', 'second law', 'thermodynamics', 'digestion'] },
        ],
        sampleAnswer: 'Ecological efficiency = Energy at primary consumers / Energy at producers = 2,000 / 20,000 = 10%.\n\nOnly ~10% of energy transfers because at each level, organisms use most energy for cellular respiration (released as heat, per the 2nd law of thermodynamics). Additional losses come from undigested material (feces) and metabolic waste (urine). Only the energy stored in biomass is available to the next trophic level.',
      },
      {
        label: '(b)',
        prompt: 'Using the data, explain why food chains rarely have more than 4-5 trophic levels.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that with ~10% transfer efficiency, energy rapidly diminishes (20,000 → 2,000 → 200 → 20) and by the 5th level there is insufficient energy to support a viable population', keywords: ['10%', 'diminish', 'insufficient', 'not enough', 'support', 'population', 'limit'] },
        ],
        sampleAnswer: 'With only ~10% energy transfer at each level, energy decreases by an order of magnitude per step: 20,000 → 2,000 → 200 → 20. A 5th trophic level would have only ~2 kcal/m²/yr — far too little to sustain a population of apex predators. The progressive energy loss imposes an energetic ceiling on food chain length.',
      },
      {
        label: '(c)',
        prompt: 'If an invasive species eliminated the frog population, predict TWO ecological consequences for this food web.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies two consequences such as: (1) grasshopper population increases (release from predation), (2) snake population declines (loss of prey), potential cascade effects on producers', keywords: ['grasshopper', 'increase', 'snake', 'decline', 'trophic cascade', 'producer', 'overgrazing'] },
        ],
        sampleAnswer: 'Consequence 1: The grasshopper (primary consumer) population would likely increase due to release from predation pressure by frogs, potentially leading to overgrazing of the grass producers.\n\nConsequence 2: The snake (tertiary consumer) population would decline or collapse due to loss of their primary food source, potentially affecting any quaternary consumers as well (trophic cascade).',
      },
    ],
  },
]

// ─── Combined export ───────────────────────────────────────────────

export const apBioFRQs: BioFRQ[] = [...longFRQs, ...shortFRQs]

export function getApBioFRQs(): BioFRQ[] {
  return apBioFRQs
}

export function getLongFRQs(): BioFRQ[] {
  return longFRQs
}

export function getShortFRQs(): BioFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(): {
  long: BioFRQ[]
  short: BioFRQ[]
  totalPoints: number
  totalTime: string
} {
  const shuffle = <T>(arr: T[]): T[] => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  const selectedLong = shuffle(longFRQs).slice(0, 2)
  const selectedShort = shuffle(shortFRQs).slice(0, 4)

  const totalPoints =
    selectedLong.reduce((s, q) => s + q.totalPoints, 0) +
    selectedShort.reduce((s, q) => s + q.totalPoints, 0)

  return { long: selectedLong, short: selectedShort, totalPoints, totalTime: '90 min' }
}
