/**
 * Entrance Quiz — Fossil Fuels & Nuclear Energy
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — Coal and How a Power Plant Makes Electricity
 *  3 — Oil, Natural Gas and Unconventional Sources
 *  4 — Nuclear Power in Depth
 *  5 — Comparing Sources: Data, Calculations and Misconceptions
 *  6 — AP Exam Practice
 *  7 — Synthesis Review
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ═══════════════════════════════════════════════════
  // Part 1: Core Concepts
  // ═══════════════════════════════════════════════════
  {
    id: 'aeffn-ent-1a',
    question: "Which pair correctly gives one advantage and one disadvantage of nuclear power?",
    options: [
      "Renewable fuel supply; high sulfur dioxide emissions",
      "Low construction cost; high CO₂ output while running",
      "No CO₂ from uranium mining; frequent offshore oil spills",
      "Near-zero CO₂ in operation; long-lived radioactive waste",
    ],
    correctIndex: 3,
    explanation: "Fission releases no CO₂ or combustion gases, but spent fuel stays dangerously radioactive for thousands of years. Uranium is mined and finite (and mining uses fossil fuels), nuclear plants are expensive to build, and they emit essentially no sulfur dioxide and cause no offshore oil spills.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aeffn-ent-1b',
    question: "Which environmental impact is most directly caused by injecting large volumes of fracking wastewater into deep disposal wells?",
    options: [
      "Valley streams buried under dumped rock",
      "Earthquakes along stressed faults",
      "Radioactive tailings from milling ore",
      "Oil slicks from an offshore blowout",
    ],
    correctIndex: 1,
    explanation: "Deep wastewater injection raises fluid pressure on faults and has triggered earthquakes in several gas-producing regions. Buried streams come from mountaintop removal mining, tailings from uranium milling, and slicks from offshore drilling accidents.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Coal and How a Power Plant Makes Electricity
  // ═══════════════════════════════════════════════════
  {
    id: 'aeffn-ent-2a',
    question: "A power plant that is 40% efficient burns anthracite containing 30 MJ/kg. How much coal must it burn to deliver 1 kWh (3.6 MJ) of electricity?",
    options: [
      "0.12 kg",
      "0.048 kg",
      "0.30 kg",
      "3.3 kg",
    ],
    correctIndex: 2,
    explanation: "Heat needed = 3.6 MJ ÷ 0.40 = 9.0 MJ, and coal = 9.0 MJ ÷ 30 MJ/kg = 0.30 kg. 0.12 kg ignores the efficiency, 0.048 kg multiplies by it instead of dividing, and 3.3 kg inverts the last division.",
    partNumber: 2,
    partTitle: "Coal and How a Power Plant Makes Electricity",
  },

  {
    id: 'aeffn-ent-2b',
    question: "Which sequence correctly describes how a coal-fired power plant produces electricity?",
    options: [
      "Burning coal spins a generator, which heats water into steam",
      "Coal heat boils water, and steam spins a turbine and generator",
      "Burning coal spins the turbine, and steam cools the generator",
      "Hot coal makes the generator coils glow and give off current",
    ],
    correctIndex: 1,
    explanation: "In every thermal plant, heat boils water into high-pressure steam, the steam spins a turbine, and the turbine turns a generator whose magnet and wire coils produce electricity. Burning coal does not spin anything directly, and the current comes from coils moving past magnets, not from glowing coils.",
    partNumber: 2,
    partTitle: "Coal and How a Power Plant Makes Electricity",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Oil, Natural Gas and Unconventional Sources
  // ═══════════════════════════════════════════════════
  {
    id: 'aeffn-ent-3a',
    question: "An offshore well spill releases 40,000 barrels of crude oil. How many gallons is that? (1 barrel = 42 gallons)",
    options: [
      "952 gal",
      "168,000 gal",
      "1,680,000 gal",
      "16,800,000 gal",
    ],
    correctIndex: 2,
    explanation: "Gallons = 40,000 barrels × 42 gal/barrel = 1,680,000 gal. 952 divides by 42 instead of multiplying, and 168,000 and 16,800,000 misplace the decimal point.",
    partNumber: 3,
    partTitle: "Oil, Natural Gas and Unconventional Sources",
  },

  {
    id: 'aeffn-ent-3b',
    question: "Why does burning natural gas release far less sulfur dioxide and particulate matter than burning coal?",
    options: [
      "Natural gas contains more carbon per molecule than coal",
      "Methane absorbs sulfur dioxide as it burns in the plant",
      "Gas plants burn hotter, which destroys sulfur dioxide",
      "Sulfur is removed in processing, and gas leaves no ash",
    ],
    correctIndex: 3,
    explanation: "Natural gas is mostly methane; its sulfur is stripped out during processing, and a gaseous fuel burns without leaving ash or much soot. Coal contains sulfur and mineral matter that become SO₂, particulates and ash; a hotter flame does not destroy SO₂. Methane actually has less carbon per unit of energy than coal.",
    partNumber: 3,
    partTitle: "Oil, Natural Gas and Unconventional Sources",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Nuclear Power in Depth
  // ═══════════════════════════════════════════════════
  {
    id: 'aeffn-ent-4a',
    question: "After a reactor accident, milk samples contain 64 mg of iodine-131, which has a half-life of 8 days. How much iodine-131 remains after 40 days?",
    options: [
      "4 mg",
      "2 mg",
      "8 mg",
      "1 mg",
    ],
    correctIndex: 1,
    explanation: "40 ÷ 8 = 5 half-lives, so 64 → 32 → 16 → 8 → 4 → 2 mg. 4 mg and 8 mg stop after four and three half-lives, and 1 mg applies a sixth halving.",
    partNumber: 4,
    partTitle: "Nuclear Power in Depth",
  },

  {
    id: 'aeffn-ent-4b',
    question: "Why can a nuclear power reactor not explode like a nuclear bomb, even in a severe accident?",
    options: [
      "Its fuel is only about 3–5% U-235, far too dilute to detonate",
      "Its control rods add neutrons that keep the core stable",
      "Its coolant water turns the uranium into a non-radioactive form",
      "Its containment dome can absorb a nuclear blast",
    ],
    correctIndex: 0,
    explanation: "Reactor fuel is enriched only to about 3–5% U-235, too dilute for a nuclear explosion; accidents instead involve meltdowns, steam or hydrogen explosions and fires. Control rods absorb neutrons rather than adding them, water does not change radioactivity, and a containment building holds in steam and radioactive material, not a nuclear blast.",
    partNumber: 4,
    partTitle: "Nuclear Power in Depth",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Comparing Sources: Data, Calculations and Misconceptions
  // ═══════════════════════════════════════════════════
  {
    id: 'aeffn-ent-5a',
    question: "A plant burns 800,000 t of coal containing 1.5% sulfur, and its scrubbers remove 92% of the SO₂ formed. Each tonne of sulfur forms 2 t of SO₂. How much SO₂ is released?",
    options: [
      "1,920 t",
      "22,080 t",
      "24,000 t",
      "960 t",
    ],
    correctIndex: 0,
    explanation: "Sulfur = 800,000 × 0.015 = 12,000 t; SO₂ formed = 12,000 × 2 = 24,000 t; released = 24,000 × 0.08 = 1,920 t. 960 t forgets to double the mass, 22,080 t is the amount the scrubbers capture, and 24,000 t ignores the scrubbers.",
    partNumber: 5,
    partTitle: "Comparing Sources: Data, Calculations and Misconceptions",
  },

  {
    id: 'aeffn-ent-5b',
    question: "A city advertises its new electric buses as emission-free. Which statement best evaluates this claim?",
    options: [
      "The buses are emission-free because they have no tailpipe",
      "Their impact depends on how the grid's electricity is generated",
      "Battery production outweighs the savings over their life",
      "Electric motors release CO₂ in proportion to their speed",
    ],
    correctIndex: 1,
    explanation: "Electricity is an energy carrier, not a source: the buses have no tailpipe, but a coal-heavy grid emits a lot of CO₂ per kWh while a grid of hydro, nuclear, wind and solar emits very little. Battery manufacturing emissions are usually repaid by operating savings, and electric motors themselves release no CO₂.",
    partNumber: 5,
    partTitle: "Comparing Sources: Data, Calculations and Misconceptions",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aeffn-ent-6a',
    question: "An 800 MW power plant runs at full output 85% of the 8,760 hours in a year. About how much electricity does it generate each year? (1 MW = 1,000 kW)",
    options: [
      "6.0 × 10⁹ kWh",
      "6.0 × 10⁶ kWh",
      "7.0 × 10⁹ kWh",
      "6.0 × 10¹² kWh",
    ],
    correctIndex: 0,
    explanation: "Energy = 800,000 kW × 8,760 h × 0.85 ≈ 5.96 × 10⁹ kWh, about 6.0 × 10⁹ kWh. 7.0 × 10⁹ kWh leaves out the 85% capacity factor, and the other answers mix up megawatt-hours and kilowatt-hours.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aeffn-ent-6b',
    question: "A state's power sector emitted 42 million t of CO₂ while generating 120 billion kWh in a year. What was its average emission per kWh? (1 t = 10⁶ g)",
    options: [
      "0.35 g",
      "3,500 g",
      "2.9 g",
      "350 g",
    ],
    correctIndex: 3,
    explanation: "42 × 10⁶ t × 10⁶ g/t = 4.2 × 10¹³ g, and 4.2 × 10¹³ g ÷ 1.2 × 10¹¹ kWh = 350 g/kWh. 0.35 is the value in kilograms labeled as grams, 2.9 inverts the ratio, and 3,500 g slips a power of ten.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aeffn-ent-7a',
    question: "A city uses 1.5 billion kWh of electricity a year: 70% from natural gas (490 g CO₂/kWh) and 30% from coal (1,000 g CO₂/kWh). About how much CO₂ does its electricity produce per year?",
    options: [
      "9.6 × 10⁵ t",
      "1.5 × 10⁶ t",
      "7.4 × 10⁵ t",
      "9.6 × 10¹¹ t",
    ],
    correctIndex: 0,
    explanation: "Gas: 1.05 × 10⁹ kWh × 490 g = 5.1 × 10¹¹ g; coal: 4.5 × 10⁸ kWh × 1,000 g = 4.5 × 10¹¹ g; total ≈ 9.6 × 10¹¹ g = 9.6 × 10⁵ t. 7.4 × 10⁵ t assumes all gas, 1.5 × 10⁶ t assumes all coal, and 9.6 × 10¹¹ is the answer in grams.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aeffn-ent-7b',
    question: "A coal plant and a nuclear plant of equal output both draw cooling water from the same river. Which environmental impact do the two plants share?",
    options: [
      "Sulfur dioxide that causes acid deposition downwind",
      "Radioactive spent fuel that must be stored on site",
      "Heated outflow that cuts dissolved oxygen",
      "Mercury emitted from the smokestack into the air",
    ],
    correctIndex: 2,
    explanation: "Both are thermal plants that turn only about a third of their heat into electricity and dump much of the rest into cooling water, so both cause thermal pollution. SO₂ and mercury come only from the coal plant, and spent fuel only from the nuclear plant.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Coal and How a Power Plant Makes Electricity" },
    { partNumber: 3, partTitle: "Oil, Natural Gas and Unconventional Sources" },
    { partNumber: 4, partTitle: "Nuclear Power in Depth" },
    { partNumber: 5, partTitle: "Comparing Sources: Data, Calculations and Misconceptions" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
