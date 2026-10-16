/**
 * Entrance Quiz — Introduction to Geography (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Geographic Thinking: site vs situation, distance decay, time-space convergence
  {
    id: 'hg-intro-geography-ent-1a',
    question: "A historian explains that Chicago grew rapidly in the 1800s because it sat where Great Lakes shipping met the railroads heading west to the farm belt. This explanation rests mainly on Chicago's:",
    options: ["site, the physical land on which the city was built", "situation, its position relative to other places and routes", "absolute location, its latitude and longitude", "sense of place, the meaning residents attach to it"],
    correctIndex: 1,
    explanation: "The argument is about how Chicago connected to other places (lake shipping and western rail lines), which is situation. Site would refer to the city's own physical land, such as its soil or terrain.",
    partNumber: 1,
    partTitle: "Geographic Thinking",
  },
  {
    id: 'hg-intro-geography-ent-1b',
    question: "Visits to a regional hospital are highest from nearby neighborhoods and drop off steadily in neighborhoods farther away. After a new expressway halves driving times from outlying towns, visits from those towns rise. Which pair of concepts describes the original pattern and then the change?",
    options: ["Time-space convergence, then distance decay", "Spatial autocorrelation, then relocation diffusion", "Distance decay, then time-space convergence", "Friction of distance, then hierarchical diffusion"],
    correctIndex: 2,
    explanation: "Interaction falling as places get farther away is distance decay; faster travel that makes the outlying towns effectively closer is time-space convergence. Reversing the pair mislabels both, and nothing in the scenario involves people carrying a trait or spread through a hierarchy.",
    partNumber: 1,
    partTitle: "Geographic Thinking",
  },
  // Part 2 — Maps and Spatial Data: thematic map choice, projection trade-offs
  {
    id: 'hg-intro-geography-ent-2a',
    question: "A geographer wants to compare the total number of international tourists who visited each of 20 major world cities last year. Which map type fits these data best?",
    options: ["A choropleth shading each city's country by its rate", "An isoline map joining places with equal tourist numbers", "A flow-line map with arrows from each city to its neighbors", "A graduated symbol map with circles scaled to each count"],
    correctIndex: 3,
    explanation: "Totals at point locations call for graduated (proportional) symbols, with each symbol's size scaled to the number of visitors. Choropleths shade areas by rates, isolines show continuous surfaces, and flow lines show movement.",
    partNumber: 2,
    partTitle: "Maps and Spatial Data",
  },
  {
    id: 'hg-intro-geography-ent-2b',
    question: "A world map shows Greenland about as large as Africa, although Africa is roughly 14 times larger. Which statement best explains why mapmakers still use this projection?",
    options: ["It keeps shapes and compass directions true, which suits navigation.", "It keeps the relative areas of landmasses true, which suits size comparisons.", "It keeps distances from one central point true, which suits polar air routes.", "It spreads small errors evenly across the map, which suits general reference."],
    correctIndex: 0,
    explanation: "The map described is the Mercator projection, which inflates high-latitude areas but preserves shape and direction, so a line of constant compass bearing is straight. An equal-area projection would show Africa's true size.",
    partNumber: 2,
    partTitle: "Maps and Spatial Data",
  },
  // Part 3 — Regions and Regionalization: region types, scale and aggregation
  {
    id: 'hg-intro-geography-ent-3a',
    question: "A geographer needs an example of a region that is held together by people's regular trips to and from one central place. Which area should she choose?",
    options: ["The states in which most residents attend weekly religious services", "The area that most people in a survey call \"the Midwest\"", "The towns from which commuters ride a city's commuter rail line", "The countries whose average income falls below a set threshold"],
    correctIndex: 2,
    explanation: "A functional region is organized around a node and the interaction that flows to it; a rail system's commuter shed is tied together by daily trips to the city. Shared attendance rates and income thresholds define formal regions, and a survey-based \"Midwest\" is perceptual.",
    partNumber: 3,
    partTitle: "Regions and Regionalization",
  },
  {
    id: 'hg-intro-geography-ent-3b',
    question: "Mapped by precinct, an election shows many neighborhoods where Party A won large majorities. When the same votes are added up by county, Party B wins every county. What does this comparison best illustrate?",
    options: ["Voter preferences spreading outward by contagious diffusion", "Grouping data into bigger units can hide local patterns", "County boundaries being perceptual rather than formal lines", "Precinct maps being a kind of cartogram that distorts area"],
    correctIndex: 1,
    explanation: "The votes did not change, only the units they were grouped into, which is the modifiable areal unit problem: aggregation to larger units smooths away local concentrations. Nothing in the data shows a trait spreading or a map distorting area.",
    partNumber: 3,
    partTitle: "Regions and Regionalization",
  },
  // Part 4 — Spatial Concepts: three densities, density vs concentration and pattern
  {
    id: 'hg-intro-geography-ent-4a',
    question: "Country X and Country Y each have 50 million people and 500,000 km² of land. Country X has 25,000 km² of arable land; Country Y has 200,000 km². Which statement is supported by these data?",
    options: ["Country X has the higher arithmetic density, and their physiological densities are equal.", "Physiological density is equal, but Country Y has the higher arithmetic density.", "Country X has the higher agricultural density, so its farms are more mechanized.", "Arithmetic density is equal, but Country X has a far higher physiological density."],
    correctIndex: 3,
    explanation: "Equal people and equal total land give equal arithmetic density (100 per km²). Dividing by arable land gives 2,000 per km² for X and 250 for Y, so X's farmland is under far more pressure. The data give no count of farmers, so agricultural density cannot be judged.",
    partNumber: 4,
    partTitle: "Spatial Concepts",
  },
  {
    id: 'hg-intro-geography-ent-4b',
    question: "A rural clinic sits at the end of a long unpaved road, while a city clinic sits beside a subway station and a highway exit. Which spatial concept best describes the difference between them?",
    options: ["Arithmetic density", "Placelessness", "Accessibility", "Physiological density"],
    correctIndex: 2,
    explanation: "Accessibility is how easy it is to reach a place; a clinic beside transit and a highway exit is far easier to reach than one at the end of a dirt road. Density measures people per unit of area, and placelessness describes standardized landscapes.",
    partNumber: 4,
    partTitle: "Spatial Concepts",
  },
  // Part 5 — Diffusion Patterns: classifying diffusion
  {
    id: 'hg-intro-geography-ent-5a',
    question: "Seeing how popular American hamburger chains had become, an entrepreneur in South Korea opened a fast-food chain that sells burgers made with rice patties and bulgogi beef, keeping the quick-service format but none of the American menu. This is best classified as:",
    options: ["relocation diffusion, because a business moved to Korea", "hierarchical diffusion, because it began in a large city", "stimulus diffusion, because the idea spread in a new form", "contagious diffusion, because it passed between neighbors"],
    correctIndex: 2,
    explanation: "The fast-food idea spread, but the chain reinvented the product around local food, which is stimulus diffusion. No one migrated with the trait, and nothing shows the spread moving through a hierarchy of places or between neighbors.",
    partNumber: 5,
    partTitle: "Diffusion Patterns",
  },
  {
    id: 'hg-intro-geography-ent-5b',
    question: "Which situation is an example of relocation diffusion?",
    options: ["Vietnamese immigrants open pho restaurants after settling in Houston.", "A new phone model goes on sale in capital cities before small towns.", "A dance craze passes from student to student across a high school.", "A café abroad reworks an American coffee drink to suit local tastes."],
    correctIndex: 0,
    explanation: "In relocation diffusion people physically move and bring the trait with them, as the immigrants brought their cuisine to Houston. The phone launch is hierarchical, the dance craze contagious and the reworked drink stimulus diffusion.",
    partNumber: 5,
    partTitle: "Diffusion Patterns",
  },
  // Part 6 — Problem-Solving Workshop: task verbs, using the stimulus, data reading
  {
    id: 'hg-intro-geography-ent-6a',
    question: "A free-response question shows a table of total fertility rates (TFR): Country A 5.1, Country B 3.4, Country C 2.3, Country D 1.8. It asks students to describe the difference between Country A and Country D. Which response earns the point?",
    options: ["Country A has a higher TFR because many women there have limited schooling.", "Country A's TFR of 5.1 is nearly three times Country D's rate of 1.8.", "TFR is the average number of children a woman has in her lifetime.", "Country D's TFR of 1.8 sits below the replacement level of 2.1."],
    correctIndex: 1,
    explanation: "A describe task asks for what the stimulus shows, using its data; the response citing 5.1 and 1.8 does that. Giving a cause answers an explain task, a definition answers a define task, and the statement about Country D alone never compares the two countries.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'hg-intro-geography-ent-6b',
    question: "A table lists city populations in 2000 and 2020: City A grew from 1.0 million to 1.5 million, City B from 2.0 million to 2.6 million, and City C from 0.5 million to 0.9 million. Which city had the fastest growth rate?",
    options: ["City B, because it added the most people", "City A, which grew by 50 percent", "City B, which grew by 60 percent", "City C, which grew by 80 percent"],
    correctIndex: 3,
    explanation: "Growth rate is change divided by the starting value: City C grew 0.4 million on 0.5 million, or 80 percent, versus 50 percent for City A and 30 percent for City B. City B added the most people, but that is absolute change, not rate.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  // Part 7 — AP Review: combining Unit 1 concepts
  {
    id: 'hg-intro-geography-ent-7a',
    question: "A port city grew where a deep, sheltered harbor lies at the mouth of a river that drains a large farming region. Which pairing correctly classifies these two advantages?",
    options: ["Its harbor is a site factor; the river link to farmland is a situation factor.", "The harbor is a situation factor; the river link to farmland is a site factor.", "Both the harbor and the river link to farmland are site factors.", "Each of the two advantages, harbor and river link, is a situation factor."],
    correctIndex: 0,
    explanation: "The harbor is a physical feature of the place itself (site), while the river's connection to a farming hinterland describes the city's relation to other places (situation). Strong answers name both.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'hg-intro-geography-ent-7b',
    question: "Over several centuries a language spread from one valley to neighboring villages, then to the villages beyond them. Today the villages where it is the main language form an area that can be mapped with a clear boundary. Which pair of terms fits best?",
    options: ["Hierarchical diffusion, and a functional region", "Relocation diffusion, and a perceptual region", "Stimulus diffusion, and a functional region", "Contagious diffusion, and a formal region"],
    correctIndex: 3,
    explanation: "Spread from place to adjacent place is contagious diffusion, and an area defined by a shared, measurable trait (the main language) is a formal region. No hierarchy, migration or node is involved.",
    partNumber: 7,
    partTitle: "AP Review",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Geographic Thinking" },
    { partNumber: 2, partTitle: "Maps and Spatial Data" },
    { partNumber: 3, partTitle: "Regions and Regionalization" },
    { partNumber: 4, partTitle: "Spatial Concepts" },
    { partNumber: 5, partTitle: "Diffusion Patterns" },
    { partNumber: 6, partTitle: "Problem-Solving Workshop" },
    { partNumber: 7, partTitle: "AP Review" },
  ]
}
