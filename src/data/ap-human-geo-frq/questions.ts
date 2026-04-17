/**
 * AP Human Geography FRQ Practice Questions
 * Based on College Board AP Human Geography FRQ format
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

export interface HumanGeoFRQ {
  id: string
  type: 'long' | 'short'
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
}

const longFRQs: HumanGeoFRQ[] = [
  {
    id: 'hg-long-1',
    type: 'long' as const,
    unit: 1,
    title: 'Population & Migration Analysis',
    prompt: `Country X has experienced rapid urbanization over the past 50 years. Its population has shifted from 70% rural to 25% rural. The capital city has become a primate city with 12 million residents, while the second-largest city has only 2 million.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Define primate city and explain how Country X\'s capital qualifies as one.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Defines primate city as a city at least twice as large as the second city, with Country X\'s capital being 6 times larger', keywords: ['primate city', 'twice', 'disproportionately', '6 times', 'largest'] }
        ],
        sampleAnswer: 'A primate city is a city that is at least twice the size of the next largest city in its country. Country X\'s capital (12 million) is six times larger than the second city (2 million), clearly qualifying it as a primate city. This dominance in the urban hierarchy means the capital likely dominates culturally, economically, and politically.',
      },
      {
        label: '(b)',
        prompt: 'Identify TWO pull factors that likely contributed to rural-to-urban migration in Country X.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies one pull factor such as employment opportunities or better services', keywords: ['employment', 'jobs', 'economic opportunity', 'services', 'education', 'healthcare'] },
          { points: 1, description: 'Identifies a second pull factor', keywords: ['infrastructure', 'wages', 'entertainment', 'social mobility', 'amenities'] }
        ],
        sampleAnswer: 'Two pull factors include: (1) greater employment opportunities in urban industries and services compared to subsistence farming, and (2) access to better educational institutions and healthcare facilities that are concentrated in cities.',
      },
      {
        label: '(c)',
        prompt: 'Explain ONE negative consequence of rapid urbanization for Country X.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies a negative consequence such as squatter settlements, traffic, or pollution', keywords: ['squatter', 'slum', 'shantytown', 'pollution', 'traffic', 'congestion', 'overcrowding'] },
          { points: 1, description: 'Explains the consequence in geographic context', keywords: ['infrastructure', 'services', 'strain', 'housing', 'outpace', 'insufficient', 'demand'] }
        ],
        sampleAnswer: 'Rapid urbanization often leads to the growth of squatter settlements (slums) on the outskirts of the primate city. As migration outpaces the city\'s ability to provide adequate housing and infrastructure, informal settlements emerge where residents lack access to clean water, sanitation, and public services.',
      },
      {
        label: '(d)',
        prompt: 'Explain how the Demographic Transition Model relates to Country X\'s urbanization pattern.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Connects DTM stages to urbanization', keywords: ['demographic transition', 'stage', 'death rate', 'birth rate', 'industrialization'] },
          { points: 1, description: 'Explains how declining death rates and eventual declining birth rates relate to urban growth', keywords: ['decline', 'growth', 'natural increase', 'healthcare', 'modernization'] }
        ],
        sampleAnswer: 'As Country X moved from Stage 2 to Stage 3 of the DTM, death rates declined due to improved healthcare and sanitation while birth rates remained high, causing rapid population growth. This natural increase, combined with rural-to-urban migration driven by industrialization, fueled the massive urbanization. As the country continues through Stage 3, birth rates are also declining as urban populations access education and family planning.',
      }
    ],
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'hg-long-2',
    type: 'long' as const,
    unit: 1,
    title: 'Agricultural Change & Globalization',
    prompt: `Region Y has transitioned from subsistence agriculture to commercial farming over the past 30 years, largely due to the influence of transnational corporations (TNCs) investing in export crop production.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Define subsistence agriculture and explain how it differs from commercial agriculture.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Defines subsistence as farming primarily for family consumption vs commercial farming for profit/sale', keywords: ['subsistence', 'family', 'consumption', 'commercial', 'profit', 'sale', 'market'] }
        ],
        sampleAnswer: 'Subsistence agriculture is farming primarily to feed the farmer\'s family, with little surplus for sale. Commercial agriculture produces crops for profit and sale in markets, often using mechanization and focusing on cash crops rather than food crops.',
      },
      {
        label: '(b)',
        prompt: 'Explain TWO ways transnational corporations have changed agricultural practices in Region Y.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies one change such as introduction of monoculture or modern technology', keywords: ['monoculture', 'cash crop', 'technology', 'mechanization', 'chemicals', 'fertilizer', 'pesticide'] },
          { points: 1, description: 'Identifies a second change such as shift to export crops or wage labor', keywords: ['export', 'wage labor', 'market', 'contract farming', 'plantation', 'global supply chain'] }
        ],
        sampleAnswer: 'TNCs have (1) introduced monoculture cash crops like palm oil or soybeans, replacing diverse subsistence crops with single-species plantations using chemical inputs, and (2) shifted labor from family farming to wage labor on corporate plantations, integrating local workers into global supply chains.',
      },
      {
        label: '(c)',
        prompt: 'Identify ONE positive and ONE negative impact of this agricultural transition on Region Y\'s population.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies positive impact such as increased income or modernization', keywords: ['income', 'employment', 'wages', 'infrastructure', 'development', 'economic growth'] },
          { points: 1, description: 'Identifies negative impact such as food insecurity or environmental degradation', keywords: ['food insecurity', 'displacement', 'dependency', 'environmental', 'soil', 'deforestation', 'inequality'] }
        ],
        sampleAnswer: 'Positive: Increased cash income and employment opportunities through wage labor and market integration. Negative: Reduced food security as land formerly used for growing food crops is converted to export crops, making the population dependent on imported food and vulnerable to global price fluctuations.',
      },
      {
        label: '(d)',
        prompt: 'Using Wallerstein\'s World Systems Theory, explain Region Y\'s role in the global economy.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies Region Y as periphery or semi-periphery', keywords: ['periphery', 'semi-periphery', 'core', 'dependent', 'raw materials'] },
          { points: 1, description: 'Explains unequal exchange between Region Y and core countries', keywords: ['unequal exchange', 'exploitation', 'profit', 'value', 'processing', 'manufacturing'] }
        ],
        sampleAnswer: 'In Wallerstein\'s framework, Region Y functions as a periphery country — it supplies raw agricultural materials (cash crops) to core countries but receives manufactured goods and technology in return. This unequal exchange means the value-added processing (and profits) occurs in core countries, while Region Y remains dependent on commodity exports with volatile prices, perpetuating economic inequality.',
      }
    ],
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
  }
]

const shortFRQs: HumanGeoFRQ[] = [
  {
    id: 'hg-short-1',
    type: 'short' as const,
    unit: 1,
    title: 'Diffusion of Fast Food',
    prompt: `McDonald's has expanded to over 100 countries. Its menu varies significantly by location — serving McSpicy Paneer in India, Teriyaki Burger in Japan, and McArabia in the Middle East.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Identify the type of diffusion represented by McDonald\'s global expansion.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies hierarchical expansion diffusion from the US to other developed then developing countries', keywords: ['hierarchical', 'expansion diffusion', 'global', 'spread'] }
        ],
        sampleAnswer: 'McDonald\'s expansion represents hierarchical diffusion — it spread from its origin in the United States first to other wealthy, developed countries and major global cities before reaching smaller cities and developing nations.',
      },
      {
        label: '(b)',
        prompt: 'Explain how the menu variations represent glocalization.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Defines glocalization as adapting a global product to local tastes/culture', keywords: ['glocalization', 'local', 'adapt', 'culture', 'customize', 'modify'] }
        ],
        sampleAnswer: 'Glocalization is the adaptation of a global product or service to fit local cultural preferences. McDonald\'s adapting its menu to include culturally appropriate items (vegetarian in India, halal in the Middle East) demonstrates how a global brand customizes its product to succeed in local markets.',
      },
      {
        label: '(c)',
        prompt: 'Identify ONE criticism of cultural globalization illustrated by this example.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies cultural imperialism, homogenization, or loss of local food culture', keywords: ['cultural imperialism', 'homogenization', 'Americanization', 'local culture', 'traditional', 'displacement'] }
        ],
        sampleAnswer: 'Critics argue that the global spread of American fast food chains represents cultural imperialism — the dominance of Western culture that can displace traditional local food practices and homogenize global food culture.',
      },
      {
        label: '(d)',
        prompt: 'Explain how stimulus diffusion applies to this situation.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Connects stimulus diffusion to the concept spreading but changing in form for local context', keywords: ['stimulus diffusion', 'underlying idea', 'concept', 'modified', 'adapted', 'changed form'] }
        ],
        sampleAnswer: 'Stimulus diffusion occurs when the underlying concept spreads but is modified. The fast-food restaurant concept (quick service, standardized menus) has diffused globally, but the specific products change — the idea of efficient fast food adapts to local cuisines rather than the exact original menu spreading unchanged.',
      }
    ],
    totalPoints: 4,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'hg-short-2',
    type: 'short' as const,
    unit: 1,
    title: 'Urban Models',
    prompt: `The concentric zone model and sector model are two influential models of urban structure in North American cities.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Describe the concentric zone model (Burgess model) and identify who developed it.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Describes concentric rings radiating from CBD, developed by Burgess', keywords: ['concentric', 'rings', 'zones', 'CBD', 'Burgess', 'central business district'] }
        ],
        sampleAnswer: 'The concentric zone model, developed by Ernest Burgess in 1925, describes urban areas as a series of concentric rings radiating outward from the central business district (CBD). Each ring represents a different land use zone, from the CBD to residential suburbs.',
      },
      {
        label: '(b)',
        prompt: 'Explain ONE limitation of the concentric zone model.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies a limitation such as ignoring physical geography, transportation, or being too simplistic', keywords: ['limitation', 'simplistic', 'ignores', 'physical', 'transportation', 'uniform', 'idealized'] }
        ],
        sampleAnswer: 'A key limitation is that the model assumes a flat, featureless plain with uniform transportation access. Real cities have rivers, hills, highways, and rail lines that distort the concentric pattern, making the model too idealized for many real-world applications.',
      },
      {
        label: '(c)',
        prompt: 'Compare how the sector model differs from the concentric zone model.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that Hoyt\'s sector model shows land use in wedge-shaped sectors along transportation routes', keywords: ['sector', 'Hoyt', 'wedge', 'transportation', 'corridor', 'route', 'along'] }
        ],
        sampleAnswer: 'Homer Hoyt\'s sector model shows land use arranged in wedge-shaped sectors extending outward from the CBD along transportation corridors, rather than concentric rings. Similar land uses cluster along major roads and rail lines, so wealthy neighborhoods form sectors rather than rings.',
      },
      {
        label: '(d)',
        prompt: 'Identify which model better explains modern suburbanization and explain why.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Argues for galactic/edge city model or sector model with transportation-based suburban growth', keywords: ['edge city', 'galactic', 'suburban', 'highway', 'automobile', 'peripheral', 'decentralized'] }
        ],
        sampleAnswer: 'The galactic or peripheral model better explains modern suburbanization because it accounts for edge cities — suburban activity centers that develop around highway interchanges, far from the traditional CBD. This reflects the automobile-dependent, decentralized urban growth pattern of modern American cities.',
      }
    ],
    totalPoints: 4,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  }
]

export const apHumanGeoFRQs: HumanGeoFRQ[] = [...longFRQs, ...shortFRQs]

export function getApHumanGeoFRQs(): HumanGeoFRQ[] {
  return apHumanGeoFRQs
}

export function getLongFRQs(): HumanGeoFRQ[] {
  return longFRQs
}

export function getShortFRQs(): HumanGeoFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(): {
  long: HumanGeoFRQ[]
  short: HumanGeoFRQ[]
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
  const selectedShort = shuffle(shortFRQs).slice(0, 2)
  const totalPoints = [...selectedLong, ...selectedShort].reduce((s, f) => s + f.totalPoints, 0)

  return {
    long: selectedLong,
    short: selectedShort,
    totalPoints,
    totalTime: '75 min',
  }
}
