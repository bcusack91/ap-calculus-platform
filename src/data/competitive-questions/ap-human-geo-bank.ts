// AP Human Geography question bank for competitive mode

export interface ApHumanGeoQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: ApHumanGeoQuestion[] = [
  {
    id: 1,
    question: 'The ecumene refers to:',
    options: ['Uninhabited wilderness', 'The portion of Earth permanently inhabited by humans', 'Agricultural zones', 'Urban areas only'],
    correctAnswer: 1,
    explanation: 'The ecumene is the permanently inhabited portion of Earth\'s surface.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Which is an example of a functional region?',
    options: ['The Sahara Desert', 'A pizza delivery area', 'The Great Plains', 'The Bible Belt'],
    correctAnswer: 1,
    explanation: 'A pizza delivery area is organized around a central node, making it a functional region.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Arithmetic density is calculated by dividing:',
    options: ['Population by arable land', 'Total population by total land area', 'Farmers by farmland', 'Urban dwellers by city area'],
    correctAnswer: 1,
    explanation: 'Arithmetic density is total population divided by total land area.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'Distance decay means interaction between places:',
    options: ['Increases with distance', 'Decreases as distance increases', 'Is not affected by distance', 'Only occurs between neighbors'],
    correctAnswer: 1,
    explanation: 'Distance decay is the principle that interaction diminishes with increasing distance.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'Expansion diffusion differs from relocation diffusion because:',
    options: ['Ideas spread while remaining strong at origin', 'People physically move', 'Ideas weaken at origin', 'It only applies to religion'],
    correctAnswer: 0,
    explanation: 'In expansion diffusion, ideas spread outward while remaining strong at the point of origin.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'Hierarchical diffusion spreads from:',
    options: ['Rural to urban areas', 'Larger to smaller places or from authority figures', 'Person to person through direct contact', 'One country to another'],
    correctAnswer: 1,
    explanation: 'Hierarchical diffusion follows a hierarchy from important to less important nodes.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'A wide-based population pyramid indicates:',
    options: ['An aging population', 'A youthful population with high birth rates', 'Zero population growth', 'Population decline'],
    correctAnswer: 1,
    explanation: 'A wide base means many young people — typical of high birth rate countries.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'The dependency ratio measures:',
    options: ['Immigration rates', 'Dependents relative to working-age population', 'Total population', 'Economic output'],
    correctAnswer: 1,
    explanation: 'The dependency ratio compares non-working dependents to working-age adults.',
    difficulty: 'easy',
  },
  {
    id: 9,
    question: 'Ravenstein\'s laws of migration state that:',
    options: ['Most migrants move long distances', 'Most migrants move short distances', 'Only men migrate', 'Migration follows no pattern'],
    correctAnswer: 1,
    explanation: 'Ravenstein found that most migration occurs over short distances.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'Chain migration refers to:',
    options: ['Migration along a transportation route', 'Migration following family or community connections', 'Forced migration of prisoners', 'Seasonal agricultural work'],
    correctAnswer: 1,
    explanation: 'Chain migration occurs when migrants follow earlier settlers from the same community.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'The Demographic Transition Model suggests that:',
    options: ['Birth and death rates remain constant', 'Countries pass through stages from high to low birth/death rates', 'Population always grows', 'Only rich countries experience population change'],
    correctAnswer: 1,
    explanation: 'The DTM describes the transition from high birth/death rates to low rates as societies develop.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'A lingua franca is:',
    options: ['A dead language', 'A common language used for trade between different groups', 'The official language of France', 'A creole language'],
    correctAnswer: 1,
    explanation: 'A lingua franca is a common language used for communication between groups with different native languages.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'Centripetal forces in a state:',
    options: ['Pull it apart', 'Unify and strengthen it', 'Cause boundary disputes', 'Lead to devolution'],
    correctAnswer: 1,
    explanation: 'Centripetal forces (shared language, religion, nationalism) unify a state.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'The Green Revolution involved:',
    options: ['Environmental activism', 'Introduction of high-yield crop varieties and modern farming techniques', 'Organic farming movement', 'Reforestation programs'],
    correctAnswer: 1,
    explanation: 'The Green Revolution brought high-yield seeds, irrigation, and chemicals to increase agricultural output.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'A primate city is one that:',
    options: ['Has zoos and wildlife', 'Is at least twice as large as the next largest city in the country', 'Is the oldest city in a country', 'Has the most industry'],
    correctAnswer: 1,
    explanation: 'A primate city dominates a country\'s urban hierarchy, being disproportionately larger than other cities.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'The Von Thünen model predicts:',
    options: ['Industrial location based on transportation costs', 'Agricultural land use patterns based on distance from market', 'Urban growth patterns', 'Migration flows between cities'],
    correctAnswer: 1,
    explanation: 'Von Thünen\'s model shows that perishable/heavy crops are grown nearest the market, with land use varying by transport cost.',
    difficulty: 'medium',
  },
  {
    id: 17,
    question: 'Shatterbelt regions are:',
    options: ['Unified political zones', 'Areas of political fragmentation caught between competing powers', 'Coastal trading zones', 'Agricultural heartlands'],
    correctAnswer: 1,
    explanation: 'Shatterbelt regions are politically fragmented zones caught between rival geopolitical forces.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'The rank-size rule states that the nth-largest city will be:',
    options: ['Equal in size to the largest city', 'The largest city multiplied by n', '1/n the population of the largest city', 'Randomly distributed'],
    correctAnswer: 2,
    explanation: 'The rank-size rule predicts the nth-largest city will have 1/n the population of the largest.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'Gerrymandering involves:',
    options: ['Redrawing district boundaries for political advantage', 'Creating new states', 'Dissolving political boundaries', 'Federal redistribution of resources'],
    correctAnswer: 0,
    explanation: 'Gerrymandering manipulates electoral district boundaries to favor a political party.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'Wallerstein\'s World Systems Theory divides the world into:',
    options: ['Developed and developing countries', 'Core, semi-periphery, and periphery', 'North and South hemispheres', 'Democratic and authoritarian states'],
    correctAnswer: 1,
    explanation: 'World Systems Theory categorizes countries as core (dominant), semi-periphery, and periphery (dependent).',
    difficulty: 'hard',
  },
]

export function getApHumanGeoQuestions(count: number = 10): ApHumanGeoQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
