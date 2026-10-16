/**
 * Entrance Quiz — Renewable Energy
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — Solar Energy in Depth
 *  3 — Hydroelectric, Tidal and Geothermal Energy
 *  4 — Wind, Biomass and Hydrogen Fuel Cells
 *  5 — Intermittency, Storage and Trade-offs
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
    id: 'aeren-ent-1a',
    question: "A coastal town wants renewable electricity. It has a very large rise and fall of the sea twice a day at the mouth of its bay, frequent cloud cover and weak, unsteady winds. Which option fits its conditions best?",
    options: [
      "A large rooftop solar program",
      "Underwater tidal turbines",
      "A wind farm on nearby hills",
      "Solar panels with batteries in fields",
    ],
    correctIndex: 1,
    explanation: "A large tidal range is exactly what tidal power needs, and tides are predictable regardless of weather. Frequent clouds reduce solar output, and weak, unsteady winds make a wind farm a poor choice.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aeren-ent-1b',
    question: "Why can a hydroelectric dam raise its output on demand while a solar farm cannot?",
    options: [
      "Solar panels wear out much faster than dam turbines",
      "Dams link to more transmission lines than solar farms",
      "Operators can release stored reservoir water when needed",
      "Water turbines respond faster than solar inverters can",
    ],
    correctIndex: 2,
    explanation: "A storage dam holds water behind it, so operators can open the gates and send more through the turbines within minutes. Solar output is set by the sunlight reaching the panels and cannot be increased at will; wear, transmission links and inverter speed do not change that.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Solar Energy in Depth
  // ═══════════════════════════════════════════════════
  {
    id: 'aeren-ent-2a',
    question: "A home installs 12 solar panels rated at 350 W each at a site averaging 4 peak sun hours per day. About how much electricity does the system produce in a year?",
    options: [
      "6,132 kWh",
      "16.8 kWh",
      "6,132,000 kWh",
      "1,533 kWh",
    ],
    correctIndex: 0,
    explanation: "System power = 12 × 350 W = 4,200 W = 4.2 kW; energy = 4.2 kW × 4 h/day × 365 days = 6,132 kWh per year. 16.8 kWh is one day's output, 6,132,000 forgets to convert watts to kilowatts, and 1,533 kWh leaves out the 4 sun hours.",
    partNumber: 2,
    partTitle: "Solar Energy in Depth",
  },

  {
    id: 'aeren-ent-2b',
    question: "A 6 kW rooftop array produced 10,950 kWh last year, giving it a capacity factor of about 21%. Why is the capacity factor so far below 100%?",
    options: [
      "The panels shut off on warm afternoons to avoid overheating",
      "The array sends much of its power back into the grid",
      "It is dark at night and dim in clouds",
      "Panels lose about a fifth of their rating each year",
    ],
    correctIndex: 2,
    explanation: "Capacity factor compares actual output with output at full rating every hour of the year; solar produces nothing at night and less than full output in mornings, evenings, clouds and winter, so about 20% is normal. Hot panels lose a little efficiency but keep running, power sent to the grid still counts as output, and panels degrade only about 0.5% a year.",
    partNumber: 2,
    partTitle: "Solar Energy in Depth",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Hydroelectric, Tidal and Geothermal Energy
  // ═══════════════════════════════════════════════════
  {
    id: 'aeren-ent-3a',
    question: "A 400 MW hydroelectric dam runs at a 45% capacity factor. If each household uses 10,000 kWh per year, about how many households can it supply? (1 MWh = 1,000 kWh; 1 year = 8,760 h)",
    options: [
      "350,400 households",
      "158 households",
      "157,680 households",
      "1,576,800 households",
    ],
    correctIndex: 2,
    explanation: "Output = 400 MW × 8,760 h × 0.45 = 1,576,800 MWh = 1.5768 × 10⁹ kWh, and ÷ 10,000 kWh = 157,680 households. 350,400 ignores the capacity factor, 158 skips the MWh-to-kWh conversion, and 1,576,800 is the MWh output, not households.",
    partNumber: 3,
    partTitle: "Hydroelectric, Tidal and Geothermal Energy",
  },

  {
    id: 'aeren-ent-3b',
    question: "Water released from the cold, deep bottom of a large reservoir flows into a river whose native fish are adapted to warm water. What is the most likely effect downstream?",
    options: [
      "Native fish grow faster in the cooler flow",
      "Sediment builds up rapidly below the dam",
      "The river becomes saltier than seawater",
      "Colder, low-oxygen flow stresses native species",
    ],
    correctIndex: 3,
    explanation: "Water drawn from the bottom of a deep reservoir is colder and often lower in dissolved oxygen than the natural river, which stresses species adapted to the original conditions. Dams trap sediment in the reservoir, so the river below is usually sediment-starved, not filled.",
    partNumber: 3,
    partTitle: "Hydroelectric, Tidal and Geothermal Energy",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Wind, Biomass and Hydrogen Fuel Cells
  // ═══════════════════════════════════════════════════
  {
    id: 'aeren-ent-4a',
    question: "Ethanol holds about 21 MJ per liter and gasoline about 32 MJ per liter. How many liters of ethanol hold the same energy as 63 L of gasoline?",
    options: [
      "96 L",
      "63 L",
      "41 L",
      "2,016 L",
    ],
    correctIndex: 0,
    explanation: "Gasoline energy = 63 L × 32 MJ/L = 2,016 MJ, and 2,016 MJ ÷ 21 MJ/L = 96 L of ethanol. 41 L inverts the ratio, 63 L ignores the energy difference, and 2,016 is the energy in megajoules, not liters.",
    partNumber: 4,
    partTitle: "Wind, Biomass and Hydrogen Fuel Cells",
  },

  {
    id: 'aeren-ent-4b',
    question: "Which practice most directly reduces bat deaths at a ridge-top wind farm?",
    options: [
      "Painting every tower a bright warning color",
      "Pausing turbines on calm nights",
      "Building the turbines closer together on the ridge",
      "Replacing the towers with shorter ones near the ground",
    ],
    correctIndex: 1,
    explanation: "Bats are most active on calm nights, when turbines produce little power anyway, so pausing them then cuts deaths at small cost. Shorter towers reach slower, less steady winds, and bats do not avoid turbines by color.",
    partNumber: 4,
    partTitle: "Wind, Biomass and Hydrogen Fuel Cells",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Intermittency, Storage and Trade-offs
  // ═══════════════════════════════════════════════════
  {
    id: 'aeren-ent-5a',
    question: "A town needs 25 MW from batteries for the 3 hours after sunset. The batteries have a round-trip efficiency of 80%. How much energy must be stored to meet this need?",
    options: [
      "60 MWh",
      "93.75 MWh",
      "8.3 MWh",
      "75 MWh",
    ],
    correctIndex: 1,
    explanation: "Energy delivered = 25 MW × 3 h = 75 MWh, and stored energy = 75 ÷ 0.80 = 93.75 MWh, because 20% is lost in charging and discharging. 75 MWh ignores the losses, 60 MWh multiplies by the efficiency instead of dividing, and 8.3 divides power by time.",
    partNumber: 5,
    partTitle: "Intermittency, Storage and Trade-offs",
  },

  {
    id: 'aeren-ent-5b',
    question: "How does linking electric grids across a wide region reduce the storage needed for wind power?",
    options: [
      "Calm weather in one area is offset by wind elsewhere",
      "Power lines hold surplus energy until demand rises",
      "Linked grids keep turbines spinning at a steadier speed",
      "Larger grids let each turbine capture stronger winds",
    ],
    correctIndex: 0,
    explanation: "Weather differs from place to place, so long transmission lines let turbines where it is windy supply areas where it is calm, smoothing total output. Power lines lose energy rather than store it, and linking grids does not change the wind reaching each turbine.",
    partNumber: 5,
    partTitle: "Intermittency, Storage and Trade-offs",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aeren-ent-6a',
    question: "A school's solar array generates 250,000 kWh per year, and the regional grid emits 0.45 kg of CO₂ per kWh. How many metric tons of CO₂ does the array avoid each year? (1 t = 1,000 kg)",
    options: [
      "112,500 t",
      "556 t",
      "11.25 t",
      "112.5 t",
    ],
    correctIndex: 3,
    explanation: "CO₂ avoided = 250,000 kWh × 0.45 kg/kWh = 112,500 kg = 112.5 t. 112,500 is the answer in kilograms, 11.25 t slips a decimal place, and 556 t divides by the emission factor instead of multiplying.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aeren-ent-6b',
    question: "A student measures a small solar panel's output at several tilt angles to find the best angle. Which of these should be held constant?",
    options: [
      "The tilt angle of the panel",
      "The number of angles that give high output",
      "The power output of the panel",
      "The time of day of each reading",
    ],
    correctIndex: 3,
    explanation: "Sun height changes through the day, so readings must be taken at the same time to make tilt the only difference. Tilt angle is the independent variable, power output is the dependent variable, and the number of high-output angles is a result.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aeren-ent-7a',
    question: "About how much solar capacity, at a 25% capacity factor, is needed to produce as much electricity over a year as a plant delivering a steady 90 MW?",
    options: [
      "22.5 MW",
      "90 MW",
      "360 MW",
      "112.5 MW",
    ],
    correctIndex: 2,
    explanation: "Average output = nameplate × capacity factor, so nameplate = 90 MW ÷ 0.25 = 360 MW. 22.5 MW multiplies by the capacity factor instead of dividing, and 90 MW assumes the panels run at full rating all the time.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aeren-ent-7b',
    question: "Which statement about renewable energy sources is accurate?",
    options: [
      "Renewables emit more over their life cycle than natural gas",
      "Each has trade-offs, but far lower life-cycle emissions than coal",
      "Batteries are a renewable source that generates electricity",
      "Geothermal plants burn fuel deposits found deep underground",
    ],
    correctIndex: 1,
    explanation: "Every source affects land, wildlife or materials, but solar, wind, hydro and geothermal release a small fraction of coal's or natural gas's greenhouse gases per kWh over their life cycles. Batteries store energy made elsewhere, and geothermal plants tap Earth's internal heat rather than burning fuel.",
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
    { partNumber: 2, partTitle: "Solar Energy in Depth" },
    { partNumber: 3, partTitle: "Hydroelectric, Tidal and Geothermal Energy" },
    { partNumber: 4, partTitle: "Wind, Biomass and Hydrogen Fuel Cells" },
    { partNumber: 5, partTitle: "Intermittency, Storage and Trade-offs" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
