/**
 * AP Environmental Science FRQ Practice Questions
 * Based on College Board AP Environmental Science FRQ format
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

export interface APESFRQ {
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

const longFRQs: APESFRQ[] = [
  {
    id: 'apes-long-1',
    type: 'long' as const,
    unit: 1,
    title: 'Ecosystem Structure Analysis',
    prompt: `A student is studying Ecosystem Structure in AP Environmental Science. Using your knowledge of course concepts, analyze the following scenario and answer the questions below.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Define a key concept related to Ecosystem Structure and explain its significance.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Provides an accurate definition of a concept from Ecosystem Structure', keywords: ['define', 'definition', 'concept', 'means', 'refers to'] },
          { points: 1, description: 'Explains significance or application', keywords: ['significant', 'important', 'because', 'therefore', 'impact', 'effect'] }
        ],
        sampleAnswer: 'A key concept in Ecosystem Structure is [concept]. This concept is significant because it helps explain [application]. Understanding this concept is essential for analyzing broader patterns in AP Environmental Science.',
      },
      {
        label: '(b)',
        prompt: 'Identify TWO specific examples that illustrate Ecosystem Structure.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Provides one relevant example', keywords: ['example', 'instance', 'such as', 'for instance', 'case'] },
          { points: 1, description: 'Provides a second relevant example', keywords: ['another', 'additionally', 'second', 'also', 'furthermore'] }
        ],
        sampleAnswer: 'Two examples of Ecosystem Structure include: (1) [Example 1 with specific details], and (2) [Example 2 with specific details]. Both examples demonstrate the core principles of this topic.',
      },
      {
        label: '(c)',
        prompt: 'Explain how Ecosystem Structure connects to Biogeochemical Cycles.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies a valid connection between Ecosystem Structure and Biogeochemical Cycles', keywords: ['connect', 'relate', 'link', 'influence', 'affect', 'lead to'] },
          { points: 1, description: 'Explains the mechanism of connection', keywords: ['because', 'through', 'by means of', 'resulting in', 'mechanism'] }
        ],
        sampleAnswer: 'Ecosystem Structure connects to Biogeochemical Cycles through shared underlying principles. Specifically, the processes that drive Ecosystem Structure also influence Biogeochemical Cycles because [mechanism]. This interconnection is a key theme in AP Environmental Science.',
      },
      {
        label: '(d)',
        prompt: 'Evaluate the long-term implications of changes in Ecosystem Structure.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Provides a thoughtful evaluation of implications', keywords: ['implication', 'consequence', 'future', 'long-term', 'result', 'outcome', 'trend'] }
        ],
        sampleAnswer: 'Changes in Ecosystem Structure have significant long-term implications including [consequence]. As these trends continue, we can expect [future development], which will require [response or adaptation].',
      }
    ],
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'apes-long-2',
    type: 'long' as const,
    unit: 1,
    title: 'Human Population & Climate Change',
    prompt: `Consider the relationship between Human Population and Climate Change. Using evidence and reasoning from AP Environmental Science, address the following.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Compare and contrast Human Population with Climate Change.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies a valid similarity between Human Population and Climate Change', keywords: ['similar', 'both', 'share', 'common', 'alike'] },
          { points: 1, description: 'Identifies a valid difference between Human Population and Climate Change', keywords: ['differ', 'unlike', 'contrast', 'whereas', 'however', 'but'] }
        ],
        sampleAnswer: 'Human Population and Climate Change are similar in that they both [shared characteristic]. However, they differ in that Human Population focuses on [aspect] while Climate Change emphasizes [different aspect].',
      },
      {
        label: '(b)',
        prompt: 'Explain ONE cause-and-effect relationship within Human Population.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Identifies a valid cause', keywords: ['cause', 'because', 'due to', 'result of', 'driven by'] },
          { points: 1, description: 'Explains the resulting effect', keywords: ['effect', 'result', 'consequence', 'leads to', 'outcome'] }
        ],
        sampleAnswer: 'In Human Population, [cause] leads to [effect]. This cause-and-effect relationship is important because it explains why [pattern or outcome] occurs.',
      },
      {
        label: '(c)',
        prompt: 'Using a specific example, explain how Climate Change has changed over time.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Provides a specific historical or real-world example', keywords: ['example', 'specific', 'instance', 'case', 'historical'] },
          { points: 1, description: 'Explains the change over time', keywords: ['change', 'evolved', 'shifted', 'transformed', 'over time', 'developed'] }
        ],
        sampleAnswer: 'Climate Change has changed significantly over time. For example, [specific case] demonstrates how [aspect] evolved from [earlier state] to [current state] due to [driving factor].',
      },
      {
        label: '(d)',
        prompt: 'Predict how current trends in Climate Change might develop in the future.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Makes a reasonable prediction supported by course concepts', keywords: ['predict', 'future', 'likely', 'expect', 'trend', 'continue', 'may'] }
        ],
        sampleAnswer: 'Based on current trends, Climate Change is likely to [predicted development] because [supporting reasoning from course concepts]. This prediction is supported by [evidence or pattern].',
      }
    ],
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
  }
]

const shortFRQs: APESFRQ[] = [
  {
    id: 'apes-short-1',
    type: 'short' as const,
    unit: 4,
    title: 'Soil Profile & Conservation on a Hillside Farm',
    prompt: `A farmer digs a soil pit on a sloped field that has been plowed up and down the hill for decades. The pit exposes a dark upper layer rich in decomposed plant material, a lighter middle layer, and a dense lower layer. A laboratory texture analysis of the middle layer reports 15% sand, 30% silt, and 55% clay. The farmer has noticed muddy runoff leaving the field after heavy rains and standing water that persists for days after storms.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Identify the soil horizon in which organic matter (humus) accumulates, and describe ONE way that organic matter benefits soil fertility.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies the O horizon and/or A horizon (topsoil) as where humus accumulates, AND describes a valid fertility benefit (retains nutrients, retains moisture, supports decomposers, improves soil structure)', keywords: ['O horizon', 'A horizon', 'topsoil', 'humus', 'nutrients', 'moisture', 'decomposers', 'structure'] }
        ],
        sampleAnswer: 'Organic matter accumulates in the O horizon (the surface layer of leaf litter and humus) and in the A horizon, or topsoil, where decomposed material mixes with minerals. This humus benefits fertility because it holds nutrients such as nitrogen and phosphorus and releases them slowly as decomposers break it down, making them available to plant roots. Humus also improves the soil’s ability to retain moisture.',
      },
      {
        label: '(b)',
        prompt: 'Using the texture data for the middle layer, explain how its high clay content affects the soil’s water-holding capacity and its drainage (porosity/permeability).',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that clay particles are very small, giving high water-holding capacity but small pore spaces and therefore poor drainage/low permeability (accept the reverse framing for sand)', keywords: ['clay', 'small particles', 'water-holding', 'retain', 'pore', 'porosity', 'permeability', 'drainage', 'waterlogged'] }
        ],
        sampleAnswer: 'At 55% clay, this layer is dominated by the smallest soil particles. Because clay particles are tiny and pack tightly, the layer has a very large total surface area that holds water strongly, so its water-holding capacity is high. However, the pore spaces between clay particles are extremely small, so permeability is low and water drains through it very slowly. This explains the standing water the farmer observes: rainwater percolates poorly through the clay-rich layer and the field becomes waterlogged after storms.',
      },
      {
        label: '(c)',
        prompt: 'Explain how plowing up and down the slope contributes to the muddy runoff leaving the field.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that up-and-down furrows channel water downhill, increasing runoff velocity and carrying away exposed topsoil (erosion); tilling also loosens/exposes soil to water erosion', keywords: ['erosion', 'runoff', 'furrows', 'downhill', 'channel', 'topsoil', 'exposed', 'loosen', 'sediment'] }
        ],
        sampleAnswer: 'Plowing up and down the slope creates furrows that run downhill, and these furrows act like channels that speed up the flow of rainwater. Tilling also breaks up and exposes bare topsoil with no plant cover to anchor it. The fast-moving water picks up the loosened topsoil and carries it off the field as sediment, which is why the runoff leaving the field is muddy. Over time this erosion removes the nutrient-rich A horizon and reduces the field’s productivity.',
      },
      {
        label: '(d)',
        prompt: 'Propose ONE agricultural practice the farmer could adopt to reduce soil erosion on this field, and explain how the practice reduces erosion.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Names a valid practice (contour plowing, terracing, no-till farming, cover crops, strip cropping, windbreaks) AND correctly explains its erosion-reducing mechanism (slows water flow, keeps roots/residue anchoring soil, shortens slope length)', keywords: ['contour plowing', 'terracing', 'no-till', 'cover crop', 'strip cropping', 'windbreak', 'slows', 'anchor', 'roots', 'residue'] }
        ],
        sampleAnswer: 'The farmer could switch to contour plowing, tilling in rows that run across the slope rather than up and down it. Each furrow then acts like a small dam that intercepts water flowing downhill, slowing the runoff so it soaks into the soil instead of gaining enough speed to carry topsoil away. (No-till farming would also work: leaving crop residue on the surface and not disturbing the soil keeps roots and residue anchoring the topsoil, so rain cannot easily detach and transport it.)',
      }
    ],
    totalPoints: 4,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'apes-short-2',
    type: 'short' as const,
    unit: 2,
    title: 'Highway Fragmentation of a Forest',
    prompt: `A state transportation department builds a four-lane highway directly through a large, continuous deciduous forest. The highway divides the forest into two smaller patches and, together with new access roads, eventually splits the area into several isolated fragments. Wildlife surveys conducted five years later show that several forest-interior bird species and a population of bobcats have declined sharply in the smaller fragments, while populations of raccoons, brown-headed cowbirds, and invasive plants have increased near the road.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Using the theory of island biogeography, explain why the small, isolated forest fragments support fewer species than the original continuous forest.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Applies island biogeography: smaller "islands" support smaller populations and have higher extinction rates, and isolation reduces immigration/recolonization, so species richness falls', keywords: ['island biogeography', 'smaller', 'isolated', 'extinction', 'immigration', 'recolonization', 'population size', 'species richness', 'habitat area'] }
        ],
        sampleAnswer: 'Island biogeography predicts that species richness depends on habitat area and isolation. The fragments act like small islands in a sea of unsuitable habitat: each fragment has less total area and fewer resources, so it supports only small populations, and small populations are more vulnerable to local extinction from disease, inbreeding, or random events. At the same time, the highway is a barrier that isolates each fragment, so once a species goes locally extinct, individuals from other patches cannot easily immigrate to recolonize it. Lower immigration plus higher extinction means each small fragment settles at a lower number of species than the original continuous forest.',
      },
      {
        label: '(b)',
        prompt: 'Describe what edge effects are, and explain how edge effects could account for the decline of forest-interior bird species in the fragments.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Defines edge effects (changed abiotic/biotic conditions at habitat boundaries: more light, wind, temperature swings, predators/parasites/invasives) AND links them to the loss of interior-adapted species as fragments become mostly edge', keywords: ['edge effect', 'boundary', 'light', 'wind', 'temperature', 'drier', 'predator', 'parasite', 'cowbird', 'interior', 'ratio'] }
        ],
        sampleAnswer: 'Edge effects are the changed conditions that occur along the boundary between a habitat and the surrounding disturbed land. Forest edges are sunnier, windier, hotter, and drier than the interior, and they attract generalist predators, invasive plants, and nest parasites such as brown-headed cowbirds. When the highway fragmented the forest, the total amount of edge increased while the amount of deep interior shrank, so a much larger fraction of each fragment now experiences edge conditions. Forest-interior birds that need cool, shaded, sheltered habitat far from the edge lose the conditions they require, and their nests suffer more predation by raccoons and more parasitism by cowbirds, which explains their sharp decline.',
      },
      {
        label: '(c)',
        prompt: 'The department proposes building a vegetated wildlife overpass connecting the two largest fragments. Explain how this wildlife corridor could help maintain the genetic diversity of the bobcat population.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that the corridor allows individuals to move between fragments, enabling gene flow/interbreeding between otherwise isolated populations, which counteracts inbreeding and genetic drift in small populations', keywords: ['corridor', 'movement', 'gene flow', 'interbreed', 'inbreeding', 'genetic drift', 'genetic diversity', 'connect', 'mates'] }
        ],
        sampleAnswer: 'The vegetated overpass reconnects the two fragments so that bobcats can safely cross the highway instead of being confined to one patch. This movement allows individuals from the two populations to find mates in the other fragment, restoring gene flow between them. Without the corridor, each small, isolated population would lose genetic diversity through inbreeding and genetic drift, raising the risk of inherited defects and lowering the population’s ability to adapt to disease or environmental change. With the corridor, the two patches function genetically as one larger population, maintaining higher genetic diversity and long-term viability.',
      },
      {
        label: '(d)',
        prompt: 'Other than supporting wildlife populations, describe ONE ecosystem service the intact forest provides to nearby human communities that fragmentation could diminish.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Describes a valid ecosystem service (carbon sequestration, water filtration/flood control, air purification, erosion control, pollination, recreation/ecotourism) AND notes that fragmentation/clearing reduces it', keywords: ['ecosystem service', 'carbon', 'sequestration', 'water filtration', 'flood', 'erosion control', 'air quality', 'pollination', 'recreation'] }
        ],
        sampleAnswer: 'The intact forest provides flood control and water filtration for nearby communities: tree canopies intercept rainfall, and forest soils absorb stormwater and filter sediments and pollutants before the water reaches streams and drinking-water supplies. Clearing land for the highway and fragmenting the forest replaces absorbent forest floor with impervious pavement and edge-degraded habitat, so more runoff reaches streams faster, increasing downstream flooding and degrading water quality. (Other acceptable answers include reduced carbon sequestration or loss of recreation and ecotourism value.)',
      }
    ],
    totalPoints: 4,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  }
]

export const apAPESFRQs: APESFRQ[] = [...longFRQs, ...shortFRQs]

export function getApAPESFRQs(): APESFRQ[] {
  return apAPESFRQs
}

export function getLongFRQs(): APESFRQ[] {
  return longFRQs
}

export function getShortFRQs(): APESFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(pool: APESFRQ[] = apAPESFRQs): {
  long: APESFRQ[]
  short: APESFRQ[]
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

  const selectedLong = shuffle(pool.filter((f) => f.type === 'long')).slice(0, 2)
  const selectedShort = shuffle(pool.filter((f) => f.type === 'short')).slice(0, 2)
  const totalPoints = [...selectedLong, ...selectedShort].reduce((s, f) => s + f.totalPoints, 0)

  return {
    long: selectedLong,
    short: selectedShort,
    totalPoints,
    totalTime: '70 min',
  }
}
