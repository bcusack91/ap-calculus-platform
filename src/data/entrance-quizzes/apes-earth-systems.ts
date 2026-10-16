/**
 * Entrance Quiz — Earth Systems & Resources
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Core Concepts
 *  2 — Plate Tectonics, Soil Formation and Erosion
 *  3 — The Atmosphere and Global Wind Patterns
 *  4 — Solar Radiation, Seasons and Climate Geography
 *  5 — Watersheds and El Niño / La Niña
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
    id: 'aeesy-ent-1a',
    question: "Two plates carrying continents collide, building the highest mountains on Earth and causing frequent earthquakes, but almost no volcanoes form. Which boundary is this?",
    options: [
      "Divergent, with the plates pulling apart",
      "Transform, with the plates sliding past",
      "Convergent, as two buoyant plates crumple",
      "Convergent, with an ocean plate subducting",
    ],
    correctIndex: 2,
    explanation: "When two continental plates collide, neither is dense enough to subduct, so the crust crumples into very high mountains (such as the Himalayas) with earthquakes but little volcanism. Ocean-continent subduction would build a volcanic range beside a trench.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  {
    id: 'aeesy-ent-1b',
    question: "Years of erosion strip the A horizon from a farm field, exposing the layer beneath it. What is the most likely result for the crops?",
    options: [
      "Roots reach a rich layer of humus, and yields rise",
      "Roots are unaffected, since the B horizon is identical",
      "Roots meet bare bedrock, and the crops fail",
      "Roots grow in poorer subsoil, so yields fall",
    ],
    correctIndex: 3,
    explanation: "The A horizon (topsoil) holds most of the organic matter and nutrients and is the main root zone, so losing it leaves crops in the less fertile B horizon (subsoil). Humus lies in the O and A horizons, and bedrock sits much deeper, below the C horizon.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // ═══════════════════════════════════════════════════
  // Part 2: Plate Tectonics, Soil Formation and Erosion
  // ═══════════════════════════════════════════════════
  {
    id: 'aeesy-ent-2a',
    question: "A volcanic island formed over a hotspot 3 million years ago and now lies 240 km from the hotspot's active volcano. About how fast is the plate moving? (1 km = 100,000 cm)",
    options: [
      "0.8 cm/yr",
      "80 cm/yr",
      "8 cm/yr",
      "800 cm/yr",
    ],
    correctIndex: 2,
    explanation: "Rate = 240 km ÷ 3,000,000 yr = 0.00008 km/yr, and 0.00008 × 100,000 cm/km = 8 cm/yr. The other answers come from using the wrong number of centimeters per kilometer, which shifts the decimal point.",
    partNumber: 2,
    partTitle: "Plate Tectonics, Soil Formation and Erosion",
  },

  {
    id: 'aeesy-ent-2b',
    question: "A soil sample is 30% sand and 15% silt, and the rest is clay. What is its clay content, and how will it drain?",
    options: [
      "55% clay, so it drains quickly",
      "55% clay, so it drains slowly",
      "45% clay, so it drains slowly",
      "15% clay, so it drains quickly",
    ],
    correctIndex: 1,
    explanation: "The three percentages add to 100, so clay = 100 − 30 − 15 = 55%. Clay particles leave tiny pores, so a clay-rich soil has low permeability and drains slowly while holding a lot of water.",
    partNumber: 2,
    partTitle: "Plate Tectonics, Soil Formation and Erosion",
  },

  // ═══════════════════════════════════════════════════
  // Part 3: The Atmosphere and Global Wind Patterns
  // ═══════════════════════════════════════════════════
  {
    id: 'aeesy-ent-3a',
    question: "Nitrous oxide makes up about 0.000034% of the atmosphere. What is this concentration in parts per million?",
    options: [
      "0.34 ppm",
      "34 ppm",
      "3.4 ppm",
      "0.0034 ppm",
    ],
    correctIndex: 0,
    explanation: "1% equals 10,000 ppm, so ppm = percent × 10,000 = 0.000034 × 10,000 = 0.34 ppm. Dividing by 10,000 instead gives a far smaller value, and the other answers misplace the decimal point.",
    partNumber: 3,
    partTitle: "The Atmosphere and Global Wind Patterns",
  },

  {
    id: 'aeesy-ent-3b',
    question: "Latitudes near 60° N and 60° S are often wet and stormy. What best explains this pattern?",
    options: [
      "Air is forced upward where polar air meets warmer air",
      "The Coriolis effect stops surface winds near 60°",
      "Dry air from the equator sinks and warms near 60°",
      "Cold polar air sinks there, forming high pressure",
    ],
    correctIndex: 0,
    explanation: "Near 60°, mid-latitude air meets cold polar air and is forced to rise; rising air cools, its water vapor condenses and storms and rain follow. Sinking air (as near 30° and the poles) creates dry, high-pressure zones, and the Coriolis effect bends winds rather than stopping them.",
    partNumber: 3,
    partTitle: "The Atmosphere and Global Wind Patterns",
  },

  // ═══════════════════════════════════════════════════
  // Part 4: Solar Radiation, Seasons and Climate Geography
  // ═══════════════════════════════════════════════════
  {
    id: 'aeesy-ent-4a',
    question: "Sunlight of 400 W/m² falls on grassland with an albedo of 0.25. The grass is paved over with asphalt that has an albedo of 0.05. By what percent does the absorbed energy change?",
    options: [
      "+21%",
      "+80%",
      "+27%",
      "+400%",
    ],
    correctIndex: 2,
    explanation: "Grass absorbs 400 × (1 − 0.25) = 300 W/m²; asphalt absorbs 400 × (1 − 0.05) = 380 W/m². Percent change = (380 − 300) ÷ 300 × 100 ≈ +27%. Dividing by the new value gives +21%, and +80% and +400% compare the albedo values instead of the absorbed energy.",
    partNumber: 4,
    partTitle: "Solar Radiation, Seasons and Climate Geography",
  },

  {
    id: 'aeesy-ent-4b',
    question: "A city on the west coast of a continent at 40° N has cooler summers than a city on the east coast at the same latitude. What best explains this?",
    options: [
      "West-coast cities sit closer to the equator",
      "A cold current flows south along west coasts",
      "West-coast cities lie in a rain shadow",
      "The Gulf Stream warms the west coasts",
    ],
    correctIndex: 1,
    explanation: "Ocean gyres carry cold water toward the equator along the west coasts of continents and warm water poleward along east coasts, so west-coast cities have cooler summers. Both cities share the same latitude, and the Gulf Stream is a warm current off an east coast.",
    partNumber: 4,
    partTitle: "Solar Radiation, Seasons and Climate Geography",
  },

  // ═══════════════════════════════════════════════════
  // Part 5: Watersheds and El Niño / La Niña
  // ═══════════════════════════════════════════════════
  {
    id: 'aeesy-ent-5a',
    question: "A storm drops 2.5 cm of rain on a 40 km² watershed, and 20% of the rain becomes surface runoff. About how much runoff is produced? (1 km² = 1,000,000 m²)",
    options: [
      "1.0 × 10⁶ m³",
      "2.0 × 10⁷ m³",
      "2.0 × 10⁵ m³",
      "2.0 × 10³ m³",
    ],
    correctIndex: 2,
    explanation: "Rain volume = 0.025 m × 4.0 × 10⁷ m² = 1.0 × 10⁶ m³, and 20% of that is 2.0 × 10⁵ m³. 1.0 × 10⁶ m³ is all the rain, 2.0 × 10⁷ m³ forgets to convert centimeters to meters, and 2.0 × 10³ m³ uses the wrong area conversion.",
    partNumber: 5,
    partTitle: "Watersheds and El Niño / La Niña",
  },

  {
    id: 'aeesy-ent-5b',
    question: "During La Niña, the Pacific trade winds blow more strongly than usual. What happens in the waters off the coast of Peru?",
    options: [
      "Upwelling stops, and the anchovy catch collapses",
      "Extra upwelling makes the water cooler and richer in fish",
      "Warm surface water piles up along the coast of Peru",
      "Heavy rains flood Peru while Australia suffers drought",
    ],
    correctIndex: 1,
    explanation: "Stronger trade winds push more surface water west, so more cold, nutrient-rich water wells up off Peru, feeding phytoplankton and the fishery. Suppressed upwelling, warm water off Peru and flooding there while Australia dries out are all El Niño conditions.",
    partNumber: 5,
    partTitle: "Watersheds and El Niño / La Niña",
  },

  // ═══════════════════════════════════════════════════
  // Part 6: AP Exam Practice
  // ═══════════════════════════════════════════════════
  {
    id: 'aeesy-ent-6a',
    question: "In a developing watershed, the fraction of storm rainfall that becomes runoff rose from 0.20 to 0.45. What is the percent change in the runoff fraction?",
    options: [
      "+25%",
      "+56%",
      "+225%",
      "+125%",
    ],
    correctIndex: 3,
    explanation: "Percent change = (0.45 − 0.20) ÷ 0.20 × 100 = +125%. +25% reports the change in percentage points, +56% divides by the new value, and +225% is the ratio 0.45 ÷ 0.20 written as a percent.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  {
    id: 'aeesy-ent-6b',
    question: "Between 1995 and 2025, impervious surface in a coastal watershed rose from 8% to 30%. Why would a strong El Niño winter now cause worse flooding there than it would have in 1995?",
    options: [
      "El Niño winters bring less rain than they did in 1995",
      "El Niño shifts the westerlies so the area gets no rain",
      "Pavement absorbs rainwater faster than forest soil can",
      "Extra rain falls, and a larger share of it now runs off",
    ],
    correctIndex: 3,
    explanation: "Two causes combine: El Niño brings more rain to this coast, and the larger impervious area sends a bigger fraction of that rain straight into streams, faster, raising flood peaks. Pavement blocks infiltration rather than absorbing water.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },

  // ═══════════════════════════════════════════════════
  // Part 7: Synthesis Review
  // ═══════════════════════════════════════════════════
  {
    id: 'aeesy-ent-7a',
    question: "A north–south mountain range sits at about 45° N on the western edge of a continent. Which side of the range is wetter, and why?",
    options: [
      "Eastern slopes, where trade winds bring moist ocean air",
      "Western slopes, where westerlies force moist air upward",
      "Eastern slopes, where air sinking from the westerlies drops moisture",
      "Both slopes equally, since moisture is even at 45° N",
    ],
    correctIndex: 1,
    explanation: "At 45° N the westerlies carry moist ocean air onto the western (windward) slopes, where it rises, cools and drops rain; the air descending the eastern side warms and dries, creating a rain shadow. Trade winds blow between 0° and 30°, and descending air absorbs moisture rather than releasing it.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },

  {
    id: 'aeesy-ent-7b',
    question: "A coastal watershed in Peru normally receives 25 mm of rain in January, but during a strong El Niño it receives 175 mm. What is the percent change?",
    options: [
      "+600%",
      "+86%",
      "+700%",
      "+150%",
    ],
    correctIndex: 0,
    explanation: "Percent change = (175 − 25) ÷ 25 × 100 = +600%. +700% is the ratio 175 ÷ 25 written as a percent, +86% divides by the new value, and +150 is the raw change in millimeters, not a percent.",
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
    { partNumber: 2, partTitle: "Plate Tectonics, Soil Formation and Erosion" },
    { partNumber: 3, partTitle: "The Atmosphere and Global Wind Patterns" },
    { partNumber: 4, partTitle: "Solar Radiation, Seasons and Climate Geography" },
    { partNumber: 5, partTitle: "Watersheds and El Niño / La Niña" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
