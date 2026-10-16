/**
 * Entrance Quiz — Ozone Depletion & Indoor Air Quality
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — The Ozone Layer and the UV That Reaches You
 *  2 — How Scientists Found the Problem
 *  3 — Ozone-Depleting Substances and Their Replacements
 *  4 — The Montreal Protocol: Why It Worked
 *  5 — Indoor Air Pollutants: Sources and Mechanisms
 *  6 — Ventilation, Sick Buildings and Cleaner Stoves
 *  7 — AP Exam Practice and Synthesis
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ═══════════════════════════════════════════════════
  // Part 1: The Ozone Layer and the UV That Reaches You
  // ═══════════════════════════════════════════════════
  {
    id: 'aeozi-ent-1a',
    question: "The October ozone column above a station falls from 300 Dobson units to 255 Dobson units. What is the percent decrease?",
    options: [
      "15%",
      "85%",
      "45%",
      "18%",
    ],
    correctIndex: 0,
    explanation: "Percent decrease = (300 − 255) ÷ 300 × 100 = 15%. 45 is the raw drop in Dobson units, 85% is the share remaining, and 18% divides by the new value.",
    partNumber: 1,
    partTitle: "The Ozone Layer and the UV That Reaches You",
  },

  {
    id: 'aeozi-ent-1b',
    question: "At the same latitude, Southern Hemisphere summers receive somewhat more surface UV than Northern Hemisphere summers. Which factor helps explain this?",
    options: [
      "The Southern Hemisphere has a thicker ozone layer",
      "Earth is closest to the sun in early January",
      "Southern Hemisphere air carries more pollution haze",
      "The sun is lower in the sky in southern summers",
    ],
    correctIndex: 1,
    explanation: "Earth reaches its closest point to the sun in early January, during the southern summer, and southern air also carries less haze, so slightly more UV reaches the ground. Summer ozone columns there are naturally a bit lower, not thicker.",
    partNumber: 1,
    partTitle: "The Ozone Layer and the UV That Reaches You",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: How Scientists Found the Problem
  // ═══════════════════════════════════════════════════
  {
    id: 'aeozi-ent-2a',
    question: "A station's mean October ozone fell from 320 Dobson units in 1970 to 208 Dobson units in 1990. What was the average rate of change?",
    options: [
      "−35 DU per year",
      "−5.6 DU per year",
      "−112 DU per year",
      "−10.4 DU per year",
    ],
    correctIndex: 1,
    explanation: "Rate = (208 − 320) ÷ (1990 − 1970) = −112 ÷ 20 = −5.6 DU per year. −112 is the total change, −35 confuses the 35% decrease with a rate, and −10.4 divides the final value by the years.",
    partNumber: 2,
    partTitle: "How Scientists Found the Problem",
  },

  {
    id: 'aeozi-ent-2b',
    question: "The United States banned CFCs in most nonessential aerosol sprays in 1978, years before the Antarctic ozone hole was discovered. What was the ban based on?",
    options: [
      "Satellite images showing a hole over Antarctica",
      "Rising skin cancer rates already linked to CFC sprays",
      "A lab prediction of chlorine damage",
      "Aircraft measurements of chlorine over the South Pole",
    ],
    correctIndex: 2,
    explanation: "In 1974 Molina and Rowland reasoned from laboratory chemistry that long-lived CFCs would reach the stratosphere and free ozone-destroying chlorine, and that prediction drove the early ban. The hole was reported in 1985 and the aircraft measurements came in 1987.",
    partNumber: 2,
    partTitle: "How Scientists Found the Problem",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: Ozone-Depleting Substances and Their Replacements
  // ═══════════════════════════════════════════════════
  {
    id: 'aeozi-ent-3a',
    question: "Over its life, a car's air conditioner leaks 0.8 kg of the refrigerant HFC-134a, which has a global warming potential of about 1,430. What is the CO₂-equivalent of the leak?",
    options: [
      "1,430 kg",
      "1,788 kg",
      "1,144 kg",
      "11.4 kg",
    ],
    correctIndex: 2,
    explanation: "CO₂-equivalent = mass × GWP = 0.8 kg × 1,430 = 1,144 kg. 1,430 kg ignores the mass leaked, 1,788 kg divides by 0.8 instead of multiplying, and 11.4 kg slips two decimal places.",
    partNumber: 3,
    partTitle: "Ozone-Depleting Substances and Their Replacements",
  },

  {
    id: 'aeozi-ent-3b',
    question: "Car makers are replacing the refrigerant HFC-134a with HFO-1234yf. What is the main environmental benefit of the switch?",
    options: [
      "It removes CFCs from the stratosphere",
      "It lowers the engine's fuel use",
      "It cuts smog from car exhaust",
      "It warms far less if leaked",
    ],
    correctIndex: 3,
    explanation: "HFC-134a has no ozone effect but a global warming potential of about 1,430, while HFO-1234yf breaks down quickly and has a GWP under 5, so leaks add almost no warming. No refrigerant removes CFCs or repairs lost ozone, and the switch targets leaks, not fuel use or tailpipe smog.",
    partNumber: 3,
    partTitle: "Ozone-Depleting Substances and Their Replacements",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: The Montreal Protocol: Why It Worked
  // ═══════════════════════════════════════════════════
  {
    id: 'aeozi-ent-4a',
    question: "A country used 120,000 t of CFCs in its base year and committed to a 50% cut. A few years later it was using 78,000 t. How many more tonnes must it cut to reach the target?",
    options: [
      "42,000 t",
      "60,000 t",
      "18,000 t",
      "39,000 t",
    ],
    correctIndex: 2,
    explanation: "The target is 0.50 × 120,000 = 60,000 t, so the country must still cut 78,000 − 60,000 = 18,000 t. 42,000 t is the amount already cut, 60,000 t is the target itself, and 39,000 t takes half of the current use instead of the base year.",
    partNumber: 4,
    partTitle: "The Montreal Protocol: Why It Worked",
  },

  {
    id: 'aeozi-ent-4b',
    question: "The 1987 Montreal Protocol required only a 50% cut in CFCs, yet within a few years the parties required a complete phase-out. How was this possible without writing a new treaty?",
    options: [
      "The United Nations ordered a phase-out without the parties",
      "Each country passed its own ban, so no treaty change was needed",
      "CFC makers agreed to stop once substitutes became cheaper",
      "Its schedules could be tightened as the science improved",
    ],
    correctIndex: 3,
    explanation: "The treaty built in regular scientific assessments and let the parties adjust schedules, so amendments in 1990 and 1992 moved to a full phase-out. The change came from the parties themselves, not from a UN order, separate national bans or a deal among producers.",
    partNumber: 4,
    partTitle: "The Montreal Protocol: Why It Worked",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Indoor Air Pollutants: Sources and Mechanisms
  // ═══════════════════════════════════════════════════
  {
    id: 'aeozi-ent-5a',
    question: "A sealed radon test kit read 6 pCi/L when it was analyzed 7.6 days after it was sealed. Radon-222 has a half-life of 3.8 days. What was the radon level when the kit was sealed?",
    options: [
      "24 pCi/L",
      "12 pCi/L",
      "1.5 pCi/L",
      "48 pCi/L",
    ],
    correctIndex: 0,
    explanation: "7.6 days is two half-lives, so the original level halved twice to reach 6: working back, 6 × 2 × 2 = 24 pCi/L. 12 pCi/L reverses only one half-life, 1.5 pCi/L decays forward instead of working back, and 48 pCi/L reverses three.",
    partNumber: 5,
    partTitle: "Indoor Air Pollutants: Sources and Mechanisms",
  },

  {
    id: 'aeozi-ent-5b',
    question: "Why is carbon monoxide classified as an asphyxiant?",
    options: [
      "It coats the lungs with fine particles of soot",
      "It binds hemoglobin and blocks oxygen delivery",
      "It damages lung cells with alpha radiation",
      "It irritates the eyes and throat like a solvent",
    ],
    correctIndex: 1,
    explanation: "Carbon monoxide binds to hemoglobin about 200 times more strongly than oxygen, so the blood carries less oxygen to the brain and heart. Soot is a particulate, alpha radiation comes from radon's decay products, and irritation describes VOCs such as formaldehyde.",
    partNumber: 5,
    partTitle: "Indoor Air Pollutants: Sources and Mechanisms",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: Ventilation, Sick Buildings and Cleaner Stoves
  // ═══════════════════════════════════════════════════
  {
    id: 'aeozi-ent-6a',
    question: "A family replaces an open indoor cooking fire with a vented improved stove, and kitchen PM2.5 falls from 900 µg/m³ to 270 µg/m³. What is the percent reduction?",
    options: [
      "70%",
      "30%",
      "233%",
      "3.3%",
    ],
    correctIndex: 0,
    explanation: "Percent reduction = (900 − 270) ÷ 900 × 100 = 70%. 30% is the share that remains, 233% divides the drop by the new value, and 3.3 is the ratio 900 ÷ 270.",
    partNumber: 6,
    partTitle: "Ventilation, Sick Buildings and Cleaner Stoves",
  },

  {
    id: 'aeozi-ent-6b',
    question: "An office has headaches and eye irritation linked to new furniture and low ventilation. Which step should indoor air professionals usually take first?",
    options: [
      "Cut the pollutant sources",
      "Run high-efficiency air filters in every room",
      "Seal the windows to block outdoor air",
      "Add exhaust fans to dilute the air",
    ],
    correctIndex: 0,
    explanation: "Source control comes first because it stops the pollutant where it starts, without the energy cost of extra ventilation; ventilation is second and air cleaning third. HEPA filters remove particles, not gases such as VOCs, and sealing windows makes buildup worse.",
    partNumber: 6,
    partTitle: "Ventilation, Sick Buildings and Cleaner Stoves",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: AP Exam Practice and Synthesis
  // ═══════════════════════════════════════════════════
  {
    id: 'aeozi-ent-7a',
    question: "A store's freezer system holds 300 kg of HCFC-22 (GWP about 1,810) and leaks 12% of its charge each year. What is the CO₂-equivalent of the yearly leak, in metric tons? (1 t = 1,000 kg)",
    options: [
      "543 t",
      "1.98 t",
      "65,160 t",
      "65.2 t",
    ],
    correctIndex: 3,
    explanation: "Leak = 300 × 0.12 = 36 kg, and 36 × 1,810 = 65,160 kg = 65.2 t CO₂e. 543 t uses the whole charge instead of the leak, 65,160 is the answer in kilograms, and 1.98 multiplies by the ozone depletion potential instead of the GWP.",
    partNumber: 7,
    partTitle: "AP Exam Practice and Synthesis",
  },

  {
    id: 'aeozi-ent-7b',
    question: "A university is removing an old chiller that still holds 500 kg of CFC-12, even though CFC production ended years ago. Why must the refrigerant be recovered rather than vented?",
    options: [
      "CFC-12 acts mainly as a smog-forming VOC near the ground",
      "Venting it would raise acid rain levels near the campus",
      "Venting is banned mainly because CFC-12 is flammable",
      "The CFC would destroy ozone for decades and add strong warming",
    ],
    correctIndex: 3,
    explanation: "CFC-12 lasts about a century in the atmosphere, so a vented bank keeps releasing ozone-destroying chlorine for decades, and it is also a greenhouse gas thousands of times stronger than CO₂. CFCs are stable and nonflammable, so they do not form smog or acid rain near the ground.",
    partNumber: 7,
    partTitle: "AP Exam Practice and Synthesis",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "The Ozone Layer and the UV That Reaches You" },
    { partNumber: 2, partTitle: "How Scientists Found the Problem" },
    { partNumber: 3, partTitle: "Ozone-Depleting Substances and Their Replacements" },
    { partNumber: 4, partTitle: "The Montreal Protocol: Why It Worked" },
    { partNumber: 5, partTitle: "Indoor Air Pollutants: Sources and Mechanisms" },
    { partNumber: 6, partTitle: "Ventilation, Sick Buildings and Cleaner Stoves" },
    { partNumber: 7, partTitle: "AP Exam Practice and Synthesis" },
  ]
}
