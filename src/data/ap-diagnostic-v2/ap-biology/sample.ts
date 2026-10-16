/**
 * AP Biology diagnostic v2: sample items (8, including one graph-based
 * stimulus set) that exercise the engine end to end. Authors add unit files
 * beside this one and register them in ./index.ts.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'bio-s001',
    title: 'Effect of temperature on an enzyme-catalyzed reaction',
    kind: 'graph',
    content:
      'Researchers measured the initial rate of product formation for a purified enzyme at six temperatures. Each trial used the same enzyme and substrate concentrations and the same pH. The results are shown in Figure 1.',
    chart: {
      title: 'Figure 1. Initial reaction rate at six temperatures',
      kind: 'line',
      xLabel: 'Temperature',
      xUnit: '°C',
      yLabel: 'Initial rate',
      yUnit: 'µmol product/min',
      xValues: [10, 20, 30, 40, 50, 60],
      yValues: [4, 9, 16, 22, 10, 1],
      seriesLabel: 'Enzyme activity',
    },
  },
]

export const ITEMS: ApDiagV2Item[] = [
  {
    id: 'bio-s001-q1',
    stimulusId: 'bio-s001',
    unit: 'unit-3',
    topicSlug: 'enzymes-metabolism',
    difficulty: 'easy',
    stem: 'Based on Figure 1, at which of the following temperatures does the enzyme show the highest initial rate?',
    options: ['10 °C', '30 °C', '40 °C', '60 °C'],
    correctIndex: 2,
    explanation:
      'The rate peaks at 22 µmol/min at 40 °C, the highest of the six measurements. Of the temperatures tested, 40 °C is the closest to the enzyme’s optimum.',
  },
  {
    id: 'bio-s001-q2',
    stimulusId: 'bio-s001',
    unit: 'unit-3',
    topicSlug: 'enzymes-metabolism',
    difficulty: 'medium',
    stem: 'Which of the following best explains the decrease in initial rate between 40 °C and 60 °C?',
    options: [
      'Heat disrupts the bonds that hold the enzyme in shape, so fewer active sites can bind substrate.',
      'The substrate is used up faster at high temperature, so less of it remains for the enzyme to bind.',
      'Molecules move more slowly at high temperature, so enzyme and substrate collide less often.',
      'Heat breaks the peptide bonds of the enzyme, so it is digested into its individual amino acids.',
    ],
    correctIndex: 0,
    explanation:
      'Above the optimum, heat disrupts the hydrogen bonds and other weak interactions that hold the enzyme’s tertiary structure. The enzyme denatures, the shape of its active site changes, and fewer enzyme–substrate complexes form. Initial rate is measured before much substrate is used up. Molecules move faster, not slower, as temperature rises. Denaturation leaves the peptide bonds intact.',
  },
  {
    id: 'bio-s001-q3',
    stimulusId: 'bio-s001',
    unit: 'unit-3',
    topicSlug: 'enzymes-metabolism',
    difficulty: 'hard',
    stem: 'The researchers repeat the 40 °C trial with twice the substrate concentration and observe the same initial rate. Which conclusion is best supported?',
    options: [
      'Nearly all active sites were already occupied at the original substrate concentration.',
      'The added substrate denatured the enzyme, which cancelled out any gain in reaction rate.',
      'The substrate acts as a competitive inhibitor once it is above a threshold concentration.',
      'The enzyme works fastest at a temperature other than 40 °C when more substrate is added.',
    ],
    correctIndex: 0,
    explanation:
      'If doubling the substrate does not raise the rate, the enzyme is saturated: almost every active site is already bound, so the rate is at its maximum for this enzyme concentration. Nothing in the data suggests that substrate denatures or inhibits the enzyme. Temperature was held at 40 °C, so the trial says nothing about a different optimum.',
  },
  {
    id: 'bio-u1-001',
    unit: 'unit-1',
    topicSlug: 'water-properties',
    difficulty: 'easy',
    stem: 'Coastal areas tend to have milder temperature swings than inland areas. Which property of water is most directly responsible?',
    options: [
      'Its high specific heat, from hydrogen bonds that absorb heat',
      'Its low density as a solid, which lets ice float on the surface',
      'Its strong cohesion, which gives water a high surface tension',
      'Its role as a solvent, which dissolves many ionic compounds',
    ],
    correctIndex: 0,
    explanation:
      'Hydrogen bonds between water molecules must be broken before water’s temperature can rise much. Water therefore absorbs and releases large amounts of heat with only small temperature changes, which moderates coastal climates. The other properties are real but do not buffer temperature.',
  },
  {
    id: 'bio-u5-001',
    unit: 'unit-5',
    topicSlug: 'mendelian-genetics',
    difficulty: 'medium',
    stem: 'Two plants heterozygous for a seed-shape gene (Rr) are crossed. R (round) is completely dominant to r (wrinkled). What fraction of the offspring is expected to be wrinkled?',
    options: ['1/4', '1/2', '3/4', '1/16'],
    correctIndex: 0,
    explanation:
      'An Rr × Rr cross gives RR : Rr : rr in a 1 : 2 : 1 ratio. Only rr plants are wrinkled, so 1/4 of the offspring are expected to be wrinkled. 3/4 is the round fraction, and 1/16 comes from a two-gene cross.',
  },
  {
    id: 'bio-u6-001',
    unit: 'unit-6',
    topicSlug: 'gene-regulation',
    difficulty: 'medium',
    stem: 'In E. coli, the lac operon is transcribed when lactose is present and glucose is absent. Which event allows RNA polymerase to transcribe the lac genes when lactose is present?',
    options: [
      'Allolactose binds the repressor, which then cannot attach to the operator.',
      'Lactose binds RNA polymerase, which then attaches directly to the operator.',
      'Allolactose binds the operator, which then pushes the repressor off the DNA.',
      'Lactose binds the promoter, which then recruits the repressor to the operator.',
    ],
    correctIndex: 0,
    explanation:
      'Allolactose, a lactose isomer, is an inducer. It binds the lac repressor and changes the repressor’s shape so it can no longer bind the operator. RNA polymerase is then free to transcribe the genes. Inducers act on the repressor protein, not on the DNA or on RNA polymerase.',
  },
  {
    id: 'bio-u7-001',
    unit: 'unit-7',
    topicSlug: 'natural-selection',
    difficulty: 'medium',
    stem: 'In a population in Hardy–Weinberg equilibrium, 16% of individuals show a recessive phenotype. What percentage of the population is expected to be heterozygous?',
    options: ['48%', '24%', '36%', '84%'],
    correctIndex: 0,
    explanation:
      'q² = 0.16, so q = 0.4 and p = 0.6. The heterozygote frequency is 2pq = 2(0.6)(0.4) = 0.48, or 48%. 36% is p² (homozygous dominant). 84% is everyone with the dominant phenotype.',
  },
  {
    id: 'bio-u8-001',
    unit: 'unit-8',
    topicSlug: 'ecosystems-energy',
    difficulty: 'easy',
    stem: 'The producers in a food chain capture 10,000 kcal of energy. About how much of this energy is expected to reach the secondary consumers?',
    options: ['100 kcal', '1,000 kcal', '10 kcal', '5,000 kcal'],
    correctIndex: 0,
    explanation:
      'Only about 10% of the energy at one trophic level passes to the next. Producers have 10,000 kcal, primary consumers about 1,000 kcal, and secondary consumers about 100 kcal.',
  },
]
