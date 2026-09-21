/**
 * The studies behind the generated MCAT figure items (see figure-items.ts).
 *
 * Each entry declares the curve the science actually predicts over its range.
 * Relationships that FALL are re-axed to one that rises, because the question
 * frames describe rising trends:
 *   current vs resistance (falls)      -> current vs applied voltage (Ohm)
 *   cell potential vs log Q (falls)    -> concentration cell vs log ratio (Nernst)
 *   image height vs object distance    -> image height vs object height
 *   allele frequency under DRIFT       -> under directional selection (drift is
 *                                         random, so a smooth curve misteaches it)
 *   O2 uptake as a function of ventilation (backwards at rest)
 *                                      -> ventilation vs O2 uptake in exercise
 *   GFR vs 80-140 mmHg (autoregulated, nearly flat)
 *                                      -> 40-85 mmHg, where it still rises
 *
 * xValues MUST be evenly spaced. Studies never quote a number that would pin
 * down the y-values, since those are synthetic.
 */
import type { FeedbackContext, FigureContext } from './figure-items'

export const FIGURE_DOMAINS: Array<{ domain: string; sourceSlug: string; contexts: FigureContext[] }> = [
  {
    domain: 'gen-chem',
    sourceSlug: 'mcat-general-chemistry',
    contexts: [
      {
        context: 'strong acid titration',
        xLabel: 'Added NaOH volume', xUnit: 'mL', xValues: [5, 10, 15, 20],
        yLabel: 'pH', yUnit: 'pH units',
        // Real pH of a strong acid being neutralized, so the equivalence point
        // a student extrapolates from the data really is where the study says.
        shape: 'accelerating', law: 'titration', yDecimals: 2, yMax: 6.5,
        design: 'experimental', pointNoun: 'addition',
        study: `A student titrated 25.0 mL of a strong acid with sodium hydroxide of the same concentration, recording the pH after each 5 mL addition. All four readings were taken before the equivalence point.`,
      },
      {
        context: 'initial-rate experiment',
        xLabel: 'Initial [A]', xUnit: 'M', xValues: [0.1, 0.2, 0.3, 0.4],
        yLabel: 'Initial rate', yUnit: 'mM/s',
        // Second order in A: rate ∝ [A]², so doubling [A] quadruples the rate.
        shape: 'accelerating', law: 'square', design: 'experimental', pointNoun: 'trial',
        study: `The initial rate of a reaction was measured in four trials that differed only in the starting concentration of reactant A. Temperature and the concentrations of all other species were held constant.`,
      },
      {
        context: 'rigid-flask heating',
        xLabel: 'Temperature', xUnit: 'K', xValues: [280, 300, 320, 340],
        yLabel: 'Pressure', yUnit: 'kPa',
        shape: 'linear', throughOrigin: true, design: 'experimental', pointNoun: 'reading',
        study: `A sealed, rigid flask holding a fixed amount of gas was warmed in 20 K steps, and the pressure inside was recorded at each temperature. The gas behaved ideally throughout.`,
      },
      {
        // Replaces a copper concentration cell: Nernst fixes that slope at
        // 29.6 mV per decade through zero, which synthetic data cannot honor.
        // Beer's law has an unspecified epsilon, so any slope is legitimate.
        context: 'absorbance calibration',
        xLabel: 'Concentration', xUnit: 'µM', xValues: [10, 20, 30, 40],
        // About 0.04-0.5 AU, so even the double-path-length trace stays under ~1 AU.
        yLabel: 'Absorbance', yUnit: 'AU',
        shape: 'linear', throughOrigin: true, yStep: 0.04, yDecimals: 2, design: 'experimental', pointNoun: 'standard',
        // A solvent blank that was never subtracted adds the same absorbance to every reading.
        comparison: { label: 'Unsubtracted solvent blank', kind: 'offset', amount: 2 },
        study: `Solutions of a colored compound at four concentrations were measured in the same cuvette at a fixed wavelength, and the absorbance of each was recorded.`,
      },
    ],
  },
  {
    domain: 'org-chem',
    sourceSlug: 'mcat-organic-chemistry',
    contexts: [
      {
        // Replaces an SN1 solvent series: real solvolysis rates change by orders
        // of magnitude with polarity, so conversion should race toward 100%
        // rather than creep. An SN2 rate is exactly first order in nucleophile.
        context: 'SN2 nucleophile series',
        xLabel: '[Nucleophile]', xUnit: 'mM', xValues: [10, 20, 30, 40],
        yLabel: 'Initial rate', yUnit: 'µM/s',
        shape: 'linear', throughOrigin: true, design: 'experimental', pointNoun: 'trial',
        study: `The initial rate of an SN2 reaction was measured in four trials that differed only in the concentration of the nucleophile. The alkyl halide concentration, solvent and temperature were the same in every trial.`,
      },
      {
        context: 'E2 base series',
        xLabel: 'Conjugate acid pKa', xUnit: 'pKa', xValues: [10, 12, 14, 16],
        yLabel: 'Alkene product', yUnit: '%',
        shape: 'saturating', design: 'experimental', pointNoun: 'base',
        study: `A secondary alkyl bromide was treated with four bases of increasing strength under otherwise identical conditions, and the percentage of alkene product was measured. Each base's strength is given by the pKa of its conjugate acid.`,
      },
      {
        context: 'TLC eluent series',
        xLabel: 'Ethyl acetate in hexane', xUnit: '%', xValues: [10, 20, 30, 40],
        yLabel: 'Spot distance', yUnit: '% of solvent front',
        shape: 'saturating', design: 'experimental', pointNoun: 'eluent',
        study: `A single compound was run on silica TLC plates developed in hexane containing increasing percentages of ethyl acetate. Its spot position was recorded as a percentage of the distance the solvent front traveled.`,
      },
      {
        context: 'ketone reduction series',
        xLabel: 'NaBH4 added', xUnit: 'equiv', xValues: [0.05, 0.1, 0.15, 0.2],
        yLabel: 'Conversion to alcohol', yUnit: '%',
        // Ketone in excess, so hydride is limiting and conversion tracks it.
        shape: 'linear', throughOrigin: true, design: 'experimental', pointNoun: 'trial',
        study: `Cyclohexanone was treated with increasing amounts of sodium borohydride in methanol, and the percentage converted to cyclohexanol was measured once each reaction was complete. The ketone was in excess in every trial.`,
      },
    ],
  },
  {
    domain: 'physics',
    sourceSlug: 'mcat-physics-mechanics',
    contexts: [
      {
        context: 'constant-force cart',
        xLabel: 'Time', xUnit: 's', xValues: [1, 2, 3, 4],
        yLabel: 'Velocity', yUnit: 'm/s',
        // A lab track: under 1 m/s, about 0.15 m/s² (default steps gave 19 m/s).
        shape: 'linear', yStart: 0.3, yStep: 0.1, yDecimals: 2, positiveIntercept: true, design: 'experimental', pointNoun: 'reading',
        // Same force and mass, higher starting speed: parallel velocity lines.
        comparison: { label: 'Identical cart given a head start', kind: 'offset', amount: 2 },
        study: `A cart already moving along a level, low-friction track was pulled by a constant horizontal force. A motion sensor recorded its velocity once per second.`,
      },
      {
        context: 'spring loading',
        xLabel: 'Applied force', xUnit: 'N', xValues: [2, 4, 6, 8],
        yLabel: 'Extension', yUnit: 'mm',
        shape: 'linear', throughOrigin: true, design: 'experimental', pointNoun: 'load',
        comparison: { label: 'Stiffer spring', kind: 'scale', amount: 0.5 },
        study: `Known forces were applied to a steel spring and the extension was measured for each. The spring was never loaded past its elastic limit.`,
      },
      {
        context: 'fixed-resistor circuit',
        xLabel: 'Applied voltage', xUnit: 'V', xValues: [2, 4, 6, 8],
        yLabel: 'Current', yUnit: 'mA',
        shape: 'linear', throughOrigin: true, design: 'experimental', pointNoun: 'voltage setting',
        comparison: { label: 'Resistor of twice the resistance', kind: 'scale', amount: 0.5 },
        study: `A fixed resistor was connected to a variable DC supply, and the current through it was measured at four supply voltages. The resistor's temperature did not change appreciably.`,
      },
      {
        context: 'converging-lens imaging',
        xLabel: 'Object height', xUnit: 'mm', xValues: [10, 20, 30, 40],
        yLabel: 'Image height', yUnit: 'mm',
        // Beyond 2f the real image is reduced, so magnification stays below 1.
        shape: 'linear', throughOrigin: true, yStep: 2.5, design: 'experimental', pointNoun: 'object',
        study: `Objects of four different heights were each placed at the same distance, more than twice the focal length away, in front of a converging lens. The height of each real image was measured on a screen.`,
      },
    ],
  },
  {
    domain: 'biochem-cp',
    sourceSlug: 'mcat-biochemistry',
    contexts: [
      {
        context: 'enzyme substrate series',
        xLabel: '[S]', xUnit: 'mM', xValues: [1, 2, 3, 4],
        yLabel: 'Initial velocity', yUnit: 'µmol/min',
        shape: 'saturating', law: 'hyperbola', design: 'experimental', pointNoun: 'concentration',
        // Noncompetitive: Vmax lowered, Km unchanged, so v falls by the same factor everywhere.
        comparison: { label: 'Noncompetitive inhibitor', kind: 'scale', amount: 0.7 },
        study: `Initial reaction velocities were measured for a purified enzyme at four substrate concentrations. Enzyme concentration, temperature and pH were identical in every assay.`,
      },
      {
        context: 'double-reciprocal plot',
        xLabel: '1/[S]', xUnit: '1/mM', xValues: [0.25, 0.5, 0.75, 1],
        yLabel: '1/Initial velocity', yUnit: 'min/µmol',
        // A Lineweaver-Burk plot is linear by construction.
        // The y-intercept is 1/Vmax, so it must be positive.
        shape: 'linear', positiveIntercept: true, skipOverclaim: true, design: 'experimental', pointNoun: 'point',
        // Uncompetitive: same slope, higher intercept, so the lines run parallel.
        comparison: { label: 'Uncompetitive inhibitor', kind: 'offset', amount: 1 },
        study: `An enzyme's kinetic data were replotted as the reciprocal of initial velocity against the reciprocal of substrate concentration.`,
      },
      {
        context: 'graded cycling workload',
        xLabel: 'Workload', xUnit: 'W/kg', xValues: [1, 2, 3, 4],
        yLabel: 'Muscle ATP turnover', yUnit: 'arb units',
        shape: 'linear', positiveIntercept: true, design: 'experimental', pointNoun: 'stage',
        study: `Trained cyclists exercised at four steady workloads, and muscle ATP turnover was estimated at each once oxygen uptake had stabilized.`,
      },
      {
        context: 'mitochondrial proton-motive force',
        xLabel: 'Proton-motive force', xUnit: 'mV', xValues: [120, 140, 160, 180],
        yLabel: 'ATP synthesis rate', yUnit: 'nmol/min',
        shape: 'accelerating', design: 'experimental', pointNoun: 'setting',
        study: `Isolated mitochondria were clamped at four proton-motive forces, and the rate of ATP synthesis was measured at each.`,
      },
    ],
  },
  {
    domain: 'cell-mol-bio',
    sourceSlug: 'mcat-biology',
    contexts: [
      {
        context: 'cyclin B addition',
        xLabel: 'Cyclin B added', xUnit: 'nM', xValues: [20, 40, 60, 80],
        yLabel: 'Nuclei entering mitosis', yUnit: '%',
        // Mitotic entry is switch-like (sigmoid). Stay on the lower half, where
        // the curve still steepens; past ~50% "the next step is smaller" is defensible.
        shape: 'accelerating', yMax: 50, design: 'experimental', pointNoun: 'dose',
        study: `Increasing amounts of cyclin B were added to frog egg extracts containing sperm nuclei, and the percentage of nuclei that entered mitosis within 60 minutes was scored.`,
      },
      {
        context: 'receptor binding assay',
        xLabel: '[Ligand]', xUnit: 'nM', xValues: [2, 4, 6, 8],
        yLabel: 'Receptors bound', yUnit: '%',
        shape: 'saturating', law: 'hyperbola', design: 'experimental', pointNoun: 'concentration',
        // A competing ligand raises the apparent Kd, so its effect shrinks as [ligand] rises.
        comparison: { label: 'With a competing unlabeled ligand', kind: 'competitive', amount: 3 },
        study: `Cells expressing a single receptor type were incubated with four concentrations of radiolabeled ligand until binding reached equilibrium, and the percentage of receptors occupied was measured.`,
      },
      {
        context: 'inducible gene expression',
        // Minutes, not hours: bacterial mRNA half-lives are a few minutes, so
        // the level reaches steady state quickly. Induction is strong.
        xLabel: 'Time after induction', xUnit: 'min', xValues: [2, 4, 6, 8],
        yLabel: 'Target mRNA', yUnit: 'fold',
        shape: 'saturating', yStart: 5, yStep: 8, design: 'experimental', pointNoun: 'time point',
        study: `An inducible bacterial gene was switched on at time zero, and the abundance of its mRNA was measured every 2 minutes relative to uninduced cells.`,
      },
      {
        context: 'channel expression series',
        xLabel: 'Channel density', xUnit: 'per µm²', xValues: [10, 20, 30, 40],
        yLabel: 'Ion flux', yUnit: 'arb units',
        shape: 'linear', throughOrigin: true, yStep: 20, design: 'experimental', pointNoun: 'oocyte group',
        comparison: { label: 'With channel blocker', kind: 'scale', amount: 0.4 },
        study: `Frog oocytes were injected with different amounts of mRNA for an ion channel, and ion flux was measured under identical voltage and ion gradients. Channel density on each cell was confirmed afterward.`,
      },
    ],
  },
  {
    domain: 'organ-systems',
    sourceSlug: 'mcat-organ-systems',
    contexts: [
      {
        context: 'graded treadmill test',
        // 2-5 METs keeps the next stage (6 METs) far below VO2max, where output
        // levels off. About 0.5-1.5 L/min per MET, so rest works out near 5 L/min.
        xLabel: 'Workload', xUnit: 'METs', xValues: [2, 3, 4, 5],
        yLabel: 'Cardiac output', yUnit: 'L/min',
        shape: 'linear', yStart: 6.5, yStep: 0.5, yDecimals: 1, positiveIntercept: true,
        design: 'experimental', pointNoun: 'stage',
        study: `Healthy adults walked and ran on a treadmill at four increasing workloads, and cardiac output was measured once each stage reached a steady state.`,
      },
      {
        context: 'renal perfusion steps',
        xLabel: 'Renal perfusion pressure', xUnit: 'mmHg', xValues: [55, 65, 75, 85],
        yLabel: 'Glomerular filtration rate', yUnit: 'mL/min',
        // Below the autoregulatory range GFR still rises, flattening as autoregulation engages.
        shape: 'saturating', design: 'experimental', pointNoun: 'pressure step',
        study: `In an anesthetized animal, arterial pressure to one kidney was raised in four steps from a low starting value, and glomerular filtration rate was measured at each.`,
      },
      {
        context: 'graded exercise ventilation',
        xLabel: 'Oxygen uptake', xUnit: 'L/min', xValues: [1, 1.5, 2, 2.5],
        // Relative to rest: absolute values came out physically impossible.
        yLabel: 'Minute ventilation', yUnit: 'fold over rest',
        // Recreationally active adults: ventilatory threshold near 2 L/min,
        // VO2max near 3.5, so the next stage (3 L/min) is still submaximal.
        // About 4x rest at 1 L/min, rising to roughly 7-12x by 2.5 L/min.
        shape: 'accelerating', yStart: 4, yStep: 1, design: 'experimental', pointNoun: 'stage',
        study: `Recreationally active adults completed a graded exercise test, and minute ventilation was recorded at four levels of oxygen uptake extending above the ventilatory threshold.`,
      },
      {
        context: 'hormone dose series',
        xLabel: 'Hormone dose', xUnit: 'ng/mL', xValues: [2, 4, 6, 8],
        yLabel: 'Target-tissue response', yUnit: '% of maximum',
        shape: 'saturating', design: 'experimental', pointNoun: 'dose',
        comparison: { label: 'After receptor downregulation', kind: 'scale', amount: 0.7 },
        study: `A hormone was infused at four doses, and its target tissue's response was measured as a percentage of the largest response that tissue can produce.`,
      },
    ],
  },
  {
    domain: 'genetics',
    sourceSlug: 'mcat-genetics-evolution',
    contexts: [
      {
        context: 'directional selection experiment',
        xLabel: 'Generation', xUnit: 'gen', xValues: [5, 10, 15, 20],
        yLabel: 'Frequency of allele A', yUnit: '%',
        // Exact constant-selection (logistic) model from 3%, kept below the 50%
        // inflection so the curve, and the next point, still steepen.
        shape: 'accelerating', law: 'logistic', yMax: 45, design: 'experimental', pointNoun: 'sample',
        study: `An advantageous allele was introduced at low frequency into a large laboratory population of fruit flies, and its frequency was measured every five generations.`,
      },
      {
        // Replaces a selection-strength series whose shape was wrong: below 50%
        // prevalence the log-odds shift s·t makes the curve ACCELERATE with s.
        context: 'Hardy-Weinberg survey',
        xLabel: 'Frequency of allele a', xUnit: 'proportion', xValues: [0.1, 0.2, 0.3, 0.4],
        yLabel: 'Heterozygotes', yUnit: '%',
        shape: 'saturating', law: 'hardy-weinberg', design: 'observational', pointNoun: 'population',
        study: `Genotypes were surveyed in four large, randomly mating populations that differed in the frequency of allele a, and the percentage of heterozygous individuals in each was recorded.`,
      },
      {
        context: 'recombination mapping',
        xLabel: 'Physical distance from marker', xUnit: 'Mb', xValues: [20, 40, 60, 80],
        yLabel: 'Recombinant offspring', yUnit: '%',
        // Haldane map function: 0% at zero distance, approaching (never reaching) 50%.
        // The real limit is 50%; the law approaches it from below, so no padding is needed.
        shape: 'saturating', law: 'haldane', yMax: 49.5, design: 'experimental', pointNoun: 'gene',
        study: `Recombination frequency was measured in test crosses between a marker gene and four genes lying at increasing physical distances from it on the same chromosome.`,
      },
      {
        // Replaces post-bottleneck heterozygosity, whose recovery was far too
        // fast for mutation and should level off rather than climb linearly.
        context: 'molecular clock comparison',
        xLabel: 'Time since divergence', xUnit: 'Myr', xValues: [10, 20, 30, 40],
        yLabel: 'Sequence difference', yUnit: '%',
        // Kept low: multiple substitutions at one site make divergence
        // saturate, so a clock is only linear while differences are small.
        shape: 'linear', throughOrigin: true, yMax: 20, design: 'observational', pointNoun: 'species pair',
        study: `A neutrally evolving DNA region was sequenced in four pairs of species whose divergence times are known from fossils, and the percentage of sites differing within each pair was recorded.`,
      },
    ],
  },
  {
    domain: 'psych-soc',
    sourceSlug: 'mcat-psychology-sociology',
    contexts: [
      {
        context: 'review spacing experiment',
        xLabel: 'Review spacing', xUnit: 'days', xValues: [1, 2, 3, 4],
        yLabel: 'Final recall score', yUnit: 'points',
        shape: 'saturating', design: 'experimental', pointNoun: 'group',
        comparison: { label: 'Sleep-deprived subgroup', kind: 'scale', amount: 0.8 },
        // Two months, not one week: with a one-week test the research optimum
        // gap is about a day, so longer gaps would LOWER recall.
        study: `Students were randomly assigned to review the same vocabulary list at one of four spacing intervals. Every group took the same recall test two months after its final review.`,
      },
      {
        context: 'perceived stress survey',
        xLabel: 'Perceived stress score', xUnit: 'scale', xValues: [2, 4, 6, 8],
        yLabel: 'Proofreading error rate', yUnit: '%',
        // Lower half of a sigmoid, for the same reason as the cyclin series.
        shape: 'accelerating', yMax: 50, design: 'observational', pointNoun: 'group',
        manipulation: 'a stressful or a neutral task',
        comparison: { label: 'High-resilience subgroup', kind: 'scale', amount: 0.75 },
        study: `Researchers surveyed working adults and grouped them by self-reported perceived stress score. Each group's average error rate on a timed proofreading task was recorded. No participant was assigned a stress level.`,
      },
      {
        context: 'social network survey',
        xLabel: 'Network density', xUnit: 'proportion', xValues: [0.2, 0.4, 0.6, 0.8],
        yLabel: 'Conformity to majority', yUnit: '%',
        shape: 'saturating', design: 'observational', pointNoun: 'group',
        manipulation: 'densely or sparsely connected groups',
        study: `Researchers measured how densely connected the social networks of many community groups were. In a standardized scenario, they recorded how often each group's members conformed to the majority opinion.`,
      },
      {
        context: 'neighborhood resource study',
        xLabel: 'Resource access score', xUnit: 'score', xValues: [1, 2, 3, 4],
        yLabel: 'Health outcome index', yUnit: 'points',
        shape: 'linear', design: 'observational', pointNoun: 'group',
        manipulation: 'new local resources or none',
        study: `Researchers grouped neighborhoods by an index of access to clinics, grocery stores and public transit, and recorded each group's average health outcome index.`,
      },
    ],
  },
]

// No physics entry: in a stable amplifier positive feedback raises the gain but
// keeps the response linear, so "positive feedback predicts growing steps" was
// false there. The remaining systems do show that curvature.
export const FEEDBACK_CONTEXTS: FeedbackContext[] = [
  {
    domain: 'biochem-cp', sourceSlug: 'mcat-biochemistry',
    system: 'enzyme pathway whose end product inhibits its first enzyme',
    context: 'product-inhibited pathway assay',
    xLabel: 'Substrate dose', xUnit: 'arb', xValues: [1, 2, 3, 4],
    yLabel: 'Product formation rate', yUnit: 'units/min',
    // Zero substrate means zero product, so the curve must pass through the origin.
    shape: 'saturating', law: 'hyperbola', design: 'experimental', pointNoun: 'dose',
    study: `In a pathway whose end product inhibits its first enzyme, the rate of product formation was measured at four substrate doses.`,
  },
  {
    domain: 'cell-mol-bio', sourceSlug: 'mcat-biology',
    system: 'receptor-activated signaling cascade',
    context: 'signaling cascade stimulation',
    xLabel: 'Ligand concentration', xUnit: 'nM', xValues: [1, 2, 3, 4],
    yLabel: 'Signal output', yUnit: 'arb units',
    shape: 'accelerating', design: 'experimental', pointNoun: 'concentration',
    study: `Cells were stimulated with four concentrations of a ligand that activates a multistep signaling cascade, and downstream signal output was measured at each.`,
  },
  {
    domain: 'organ-systems', sourceSlug: 'mcat-organ-systems',
    system: 'endocrine axis',
    context: 'hormone challenge protocol',
    xLabel: 'Releasing-hormone infusion', xUnit: 'step', xValues: [1, 2, 3, 4],
    // An absolute unit: a '%' unit carries a 95 ceiling, which would force a
    // stimulated hormone level below its own baseline.
    yLabel: 'Target hormone level', yUnit: 'ng/mL',
    shape: 'saturating', positiveIntercept: true, design: 'experimental', pointNoun: 'infusion step',
    study: `A releasing hormone was infused in four increasing steps, and the plasma level of the downstream target hormone was measured at each.`,
  },
  {
    domain: 'psych-soc', sourceSlug: 'mcat-psychology-sociology',
    system: 'stress and performance system',
    context: 'time-pressure experiment',
    xLabel: 'Time-pressure level', xUnit: 'level', xValues: [1, 2, 3, 4],
    yLabel: 'Error rate', yUnit: '%',
    shape: 'accelerating', design: 'experimental', pointNoun: 'group',
    study: `Participants were randomly assigned to one of four levels of time pressure while completing a proofreading task, and each group's error rate was recorded.`,
  },
  {
    domain: 'genetics', sourceSlug: 'mcat-genetics-evolution',
    system: 'gene-regulatory circuit',
    context: 'transcription factor titration',
    xLabel: 'Activator level', xUnit: 'arb', xValues: [1, 2, 3, 4],
    yLabel: 'Target transcript', yUnit: 'fold',
    shape: 'accelerating', design: 'experimental', pointNoun: 'level',
    study: `A transcriptional activator was expressed at four increasing levels in otherwise identical cells, and the abundance of its target gene's transcript was measured at each.`,
  },
]
