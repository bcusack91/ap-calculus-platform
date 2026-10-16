/**
 * Entrance Quiz — Spatial Concepts & Geographic Data (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Location & Place: site vs situation in real cities
  {
    id: 'hg-spatial-concepts-ent-1a',
    question: "A trading city's island setting and harbor have not changed in 600 years, yet the city lost much of its commercial importance after new sea routes let merchants bypass it. Which statement best explains the decline?",
    options: ["Its site changed even though its situation stayed the same.", "Its situation changed even though its site stayed the same.", "Its absolute location shifted as the trade routes moved.", "Its sense of place faded as residents left the islands."],
    correctIndex: 1,
    explanation: "The physical setting (site) is unchanged; what changed is the city's position relative to trade routes (situation). Absolute location cannot shift, and the decline is about connections, not residents' attachment to the place.",
    partNumber: 1,
    partTitle: "Location & Place",
  },
  {
    id: 'hg-spatial-concepts-ent-1b',
    question: "A town was founded on a high bluff above a river bend: floods never reached the bluff, the bend made the spot easy to defend, and the river supplied fresh water. Later the river became a shipping route to ports on the coast. Which feature is part of the town's situation?",
    options: ["Its bluff above the reach of floodwaters", "Its defensible position inside a river bend", "Its supply of fresh drinking water", "Its downstream trade link to other harbors"],
    correctIndex: 3,
    explanation: "Situation is a place's connection to other places, so the river as a route to coastal ports is situation. The bluff, the defensible bend and the water supply are features of the spot itself, which makes them site.",
    partNumber: 1,
    partTitle: "Location & Place",
  },
  // Part 2 — Location, Distance and Spatial Patterns: relative distance, time-space compression
  {
    id: 'hg-spatial-concepts-ent-2a',
    question: "Two mountain towns are each 40 km from the regional hospital. One is linked to it by a new four-lane highway, a 30-minute drive; the other only by a winding pass road, a 90-minute drive. Which statement best describes the two towns?",
    options: ["Their relative distance is equal, but the highway town is closer in kilometers.", "Each town's absolute distance differs, because their travel times are not equal.", "Their absolute distance is equal, but the highway town is relatively closer.", "Their relative direction differs, because one lies along a new highway."],
    correctIndex: 2,
    explanation: "Both are 40 km away, so absolute distance is the same; measured in time, the highway town is much closer, which is relative distance. Travel time does not change absolute distance.",
    partNumber: 2,
    partTitle: "Location, Distance and Spatial Patterns",
  },
  {
    id: 'hg-spatial-concepts-ent-2b',
    question: "After a high-speed rail line links two large cities, the small towns between them that have no station receive fewer visitors than before. This best illustrates that time-space compression:",
    options: ["shrinks the absolute distance between places along a route", "is uneven and can leave bypassed places relatively more remote", "strengthens distance decay equally for every place on a line", "affects only communication rather than the movement of people"],
    correctIndex: 1,
    explanation: "Faster links bring the connected cities closer in relative terms, while places without access are left behind, so the compression is uneven. Absolute distance never changes, and the effect is not equal for every place.",
    partNumber: 2,
    partTitle: "Location, Distance and Spatial Patterns",
  },
  // Part 3 — Maps, Map Types and Projections: map scale, matching data to map type
  {
    id: 'hg-spatial-concepts-ent-3a',
    question: "Two villages are 8 cm apart on a map drawn at 1:200,000. On a second map of the same area, the two villages are 16 cm apart. Which statement is correct?",
    options: ["They are 16 km apart, and the second map is smaller in scale.", "They are 160 km apart, and the second map is larger in scale.", "They are 16 km apart, and the second map is larger in scale.", "They are 1.6 km apart, and the second map is smaller in scale."],
    correctIndex: 2,
    explanation: "8 cm times 200,000 is 1,600,000 cm, or 16 km. Showing those 16 km as 16 cm makes the second map 1:100,000, a larger fraction, so it is the larger-scale map with more detail.",
    partNumber: 3,
    partTitle: "Maps, Map Types and Projections",
  },
  {
    id: 'hg-spatial-concepts-ent-3b',
    question: "Which pairing of data with a thematic map type is the most appropriate?",
    options: ["Total population of each city, on a choropleth map", "Number of hospitals in each country, on a flow-line map", "Average temperature across a region, on a cartogram", "Elevation across a mountain range, on an isoline map"],
    correctIndex: 3,
    explanation: "Elevation is a continuous surface, which isolines (contour lines) are built to show. A city total belongs on a graduated symbol map, a cartogram resizes areas rather than showing a surface, and flow lines show movement.",
    partNumber: 3,
    partTitle: "Maps, Map Types and Projections",
  },
  // Part 4 — Geographic Data and Its Power: data sources, geospatial technologies
  {
    id: 'hg-spatial-concepts-ent-4a',
    question: "A city wants to find vacant lots that are within a quarter mile of a bus stop, outside the flood zone, and zoned for housing. Which tool is designed for this task?",
    options: ["GPS, which fixes the absolute location of a receiver on the ground", "Remote sensing, which records images of the surface from above", "GIS, which overlays data layers to find where conditions coincide", "A cartogram, which resizes each lot in proportion to its value"],
    correctIndex: 2,
    explanation: "Combining several criteria means stacking layers (bus stops, flood zones, zoning, vacancy) and finding where they overlap, which is what a GIS does. GPS and remote sensing collect data but do not overlay and analyze it.",
    partNumber: 4,
    partTitle: "Geographic Data and Its Power",
  },
  {
    id: 'hg-spatial-concepts-ent-4b',
    question: "A researcher wants to learn how longtime residents of a gentrifying neighborhood feel about rising rents and new businesses. Which source fits best, and what kind of data does it yield?",
    options: ["Census housing tables, yielding quantitative data", "Field photographs, yielding quantitative data", "Satellite imagery, yielding qualitative data", "Personal interviews, yielding qualitative data"],
    correctIndex: 3,
    explanation: "Feelings and perceptions are best captured by talking with residents, which produces qualitative data. Census tables can show that rents rose but not how people feel about it.",
    partNumber: 4,
    partTitle: "Geographic Data and Its Power",
  },
  // Part 5 — Scale of Analysis and Human-Environment Interaction: possibilism, sustainability
  {
    id: 'hg-spatial-concepts-ent-5a',
    question: "Two dry valleys on either side of a border have nearly identical climates and soils. Farmers in one valley dig canals and grow irrigated vegetables; herders in the other use the land as open grazing pasture. Which idea best accounts for the difference?",
    options: ["Possibilism, since the environment limits but does not dictate choices", "Environmental determinism, since the climate dictates how land is used", "Time-space compression, since canals shrink the distance to markets", "Distance decay, since people interact less across the border"],
    correctIndex: 0,
    explanation: "The same environment supported two different land uses, so culture and choice, not climate alone, decided the outcome. That is possibilism; a determinist account would predict the same use in both valleys.",
    partNumber: 5,
    partTitle: "Scale of Analysis and Human-Environment Interaction",
  },
  {
    id: 'hg-spatial-concepts-ent-5b',
    question: "Groundwater is classed as a renewable resource, yet wells in a farming region are running dry. How can both statements be true?",
    options: ["Aquifers turn into nonrenewable resources once pumping begins.", "Renewable resources run out only in hot and arid climate zones.", "The water is pumped out faster than rain refills it.", "Groundwater is replaced on a geologic time scale, like oil."],
    correctIndex: 2,
    explanation: "A renewable resource can still be overused when people draw it down faster than it is replenished, which is the sustainability problem with heavily pumped aquifers. Groundwater does not become nonrenewable, and it is not formed over geologic time like oil.",
    partNumber: 5,
    partTitle: "Scale of Analysis and Human-Environment Interaction",
  },
  // Part 6 — AP Exam Practice: task verbs and map-design reasoning
  {
    id: 'hg-spatial-concepts-ent-6a',
    question: "A free-response question shows a map on which hospitals are dense along a country's coast and rare in its dry interior. It asks students to explain the pattern. Which response earns the point?",
    options: ["Hospitals cluster along the coast and are rare across the interior.", "The dry interior has few residents, so it cannot support many hospitals.", "Physical geography has an effect on where hospitals are located.", "A hospital is a central service that needs a large number of patients."],
    correctIndex: 1,
    explanation: "Explain requires a cause linked to its effect: aridity limits settlement, so too few patients live in the interior to sustain hospitals. Restating the pattern is a description, the vague claim names no mechanism, and the definition does not address this map.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Maps, Data and Scale",
  },
  {
    id: 'hg-spatial-concepts-ent-6b',
    question: "A student shades each county darker the more residents aged 65 and over it has, hoping to show where the population is oldest. Big-city counties come out darkest. Which change would make the map show what the student intends?",
    options: ["Divide each count by the number of people living in that county", "Combine the counties into larger regions so patterns are clearer", "Shade by each county's total land area in square miles instead", "Redraw the map on a Mercator projection to keep shapes true"],
    correctIndex: 0,
    explanation: "Shading by a raw count mostly shows where many people live; a choropleth should use a rate, such as the percentage aged 65 and over. Larger units would hide local variation, and land area or projection does not address the problem.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Maps, Data and Scale",
  },
  // Part 7 — Synthesis Review: combining concepts
  {
    id: 'hg-spatial-concepts-ent-7a',
    question: "A food bank choosing where to open a new pantry rates each neighborhood by how many minutes the bus ride to the nearest pantry takes, then uses software to stack maps of household income, bus routes and existing pantries. Which pair of concepts is the food bank using?",
    options: ["Absolute distance and remote sensing", "Absolute location and a GPS unit", "Relative distance and GIS", "Relative direction and a cartogram"],
    correctIndex: 2,
    explanation: "Measuring access in bus-ride minutes is relative distance (time rather than miles), and stacking map layers to find where conditions coincide is GIS analysis. No images are gathered from above and no coordinates or resized areas are involved.",
    partNumber: 7,
    partTitle: "Synthesis Review: Thinking Spatially",
  },
  {
    id: 'hg-spatial-concepts-ent-7b',
    question: "Which statement correctly distinguishes two commonly confused terms?",
    options: ["A small-scale map shows a small area in great detail, unlike a large-scale map.", "Concentration counts the features per unit of area, while density describes their spacing.", "Remote sensing stores and overlays layers, while GIS collects images from satellites.", "A cartogram resizes areas by a variable, while a choropleth shades areas by a value."],
    correctIndex: 3,
    explanation: "A cartogram changes the size of each area to match the data, while a choropleth keeps true areas and shades them. The other three statements reverse their pairs: large-scale maps show small areas, density is per area, and GIS (not remote sensing) overlays layers.",
    partNumber: 7,
    partTitle: "Synthesis Review: Thinking Spatially",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Location & Place" },
    { partNumber: 2, partTitle: "Location, Distance and Spatial Patterns" },
    { partNumber: 3, partTitle: "Maps, Map Types and Projections" },
    { partNumber: 4, partTitle: "Geographic Data and Its Power" },
    { partNumber: 5, partTitle: "Scale of Analysis and Human-Environment Interaction" },
    { partNumber: 6, partTitle: "AP Exam Practice: Maps, Data and Scale" },
    { partNumber: 7, partTitle: "Synthesis Review: Thinking Spatially" },
  ]
}
