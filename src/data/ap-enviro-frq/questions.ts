/**
 * AP Environmental Science Free-Response Questions
 * Built to the May 2027 exam (2026-27 CED clarifications): Section II is three typed FRQs,
 * 10 points each, 70 minutes.
 *   Q1 Design an Investigation
 *   Q2 Analyze and Interpret Quantitative Data
 *   Q3 Analyze an Environmental Problem Doing Calculations
 * Two questions per type (two complete exams). Every rubric line is worth one point, as on the
 * official scoring guidelines; calculation parts score one point for the setup and one for the
 * answer with units. Point split per part follows src/data/ap-enviro-practice/frqs.ts:
 *   Q1 a 3, b 3, c 1, d 1, e 2   Q2 a 2, b 2, c 2, d 1, e 1, f 2   Q3 a 2, b 2, c 2, d 2, e 1, f 1
 * Units follow the CED: 1 Ecosystems, 2 Biodiversity, 3 Populations, 4 Earth Systems and Resources,
 * 5 Land and Water Use, 6 Energy Resources and Consumption, 7 Atmospheric Pollution,
 * 8 Aquatic and Terrestrial Pollution, 9 Global Change.
 */

import { shuffleArray } from '@/lib/shuffle-options'

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

export type APESFRQType = 'design-investigation' | 'quantitative-data' | 'calculations'

/** Exam order, labels, points, and suggested minutes for the three real FRQ types. */
export const APES_FRQ_TYPES: { type: APESFRQType; label: string; short: string; points: number; minutes: number }[] = [
  { type: 'design-investigation', label: 'Design an Investigation', short: 'Q1', points: 10, minutes: 23 },
  { type: 'quantitative-data', label: 'Analyze and Interpret Quantitative Data', short: 'Q2', points: 10, minutes: 23 },
  { type: 'calculations', label: 'Analyze an Environmental Problem Doing Calculations', short: 'Q3', points: 10, minutes: 24 },
]

export interface APESFRQ {
  id: string
  type: APESFRQType
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
  dataTableHtml?: string
}

const apesFRQs: APESFRQ[] = [
  // =========================================================================
  // Q1 Design an Investigation 1: rotational vs. continuous grazing (Unit 5)
  // =========================================================================
  {
    id: 'apes-frq-design-1',
    type: 'design-investigation',
    unit: 5,
    title: 'Design an Investigation: Rotational Grazing on a Semi-Arid Rangeland',
    prompt:
      'Cattle ranchers on a semi-arid grassland have noticed bare patches of soil and gullies forming on pastures where cattle graze all season long (continuous grazing). A conservation group claims that rotational grazing, in which the herd is moved among several fenced paddocks so that each paddock rests and regrows between grazing periods, will increase plant ground cover and reduce soil erosion.\n\n' +
      'Researchers have access to 12 pastures of equal size on the same ranch. The pastures have similar soil, slope, and rainfall. They plan a three-year field experiment in which every pasture carries the same number of cattle per hectare (the same stocking rate).',
    totalPoints: 10,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Identify a testable hypothesis for the researchers’ experiment. Then identify the independent variable and the dependent variable.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'A testable hypothesis that links grazing method to a measurable outcome, e.g., "If pastures are grazed rotationally, then they will have greater plant ground cover (or less soil loss) than pastures grazed continuously."',
            keywords: ['if pastures', 'if the pastures', 'if rotational', 'if the rotational', 'rotational grazing will', 'rotationally grazed pastures will', 'will have more ground cover', 'will have greater ground cover', 'will have less erosion', 'will have less soil'],
          },
          {
            points: 1,
            description: 'Independent variable: the grazing method (rotational vs. continuous grazing).',
            keywords: ['independent variable is the grazing', 'independent variable: grazing', 'independent variable is grazing', 'independent variable is the type of grazing', 'independent variable is whether', 'grazing method', 'type of grazing', 'grazing system', 'grazing treatment'],
          },
          {
            points: 1,
            description:
              'Dependent variable: percent plant ground cover, or the amount of soil erosion (soil lost, sediment collected, gully depth).',
            keywords: ['percent ground cover', 'percent cover', 'ground cover', 'plant cover', 'soil loss', 'soil lost', 'amount of erosion', 'sediment'],
          },
        ],
        sampleAnswer:
          'Hypothesis: If pastures are grazed rotationally instead of continuously, then they will have greater percent plant ground cover and lose less soil to erosion after three years.\n\nIndependent variable: the grazing method (rotational or continuous).\n\nDependent variable: the percent of the ground covered by living plants (and the mass of soil eroded).',
      },
      {
        label: '(b)',
        prompt:
          'Identify ONE variable, other than the stocking rate, that the researchers should keep constant. Identify the control group in this experiment. Then describe a method the researchers could use to measure the dependent variable.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'A reasonable controlled variable: slope, soil type or texture, rainfall, plant species present, pasture size, breed or size of cattle, length of the study, season of measurement.',
            keywords: ['slope', 'soil type', 'soil texture', 'rainfall', 'precipitation', 'pasture size', 'size of the pasture', 'breed', 'same plant species', 'same season', 'same time of year'],
          },
          {
            points: 1,
            description: 'Control group: the pastures that are grazed continuously (the current practice).',
            keywords: ['continuously grazed', 'continuous grazing pastures', 'pastures grazed continuously', 'pastures with continuous', 'control group is continuous', 'control is continuous', 'stay under continuous', 'remain under continuous'],
          },
          {
            points: 1,
            description:
              'A valid measurement method: random quadrats or line transects to estimate percent ground cover; or sediment traps, erosion pins, or measuring gully depth to quantify soil loss; repeated at the same time each year.',
            keywords: ['quadrat', 'transect', 'sediment trap', 'erosion pin', 'silt fence', 'measure the depth', 'photograph', 'weigh the sediment', 'randomly placed'],
          },
        ],
        sampleAnswer:
          'Controlled variable: the slope of each pasture (or soil texture, rainfall).\n\nControl group: the six pastures that stay under continuous grazing.\n\nMethod: At the same time each year, place ten 1 m × 1 m quadrats at random locations in each pasture and estimate the percent of each quadrat covered by living plants, then average the quadrats for each pasture. Erosion pins driven into the soil can also show how many centimeters of soil are lost each year.',
      },
      {
        label: '(c)',
        prompt:
          'The researchers assign six pastures to each grazing method instead of one pasture to each. Explain why using several pastures for each treatment improves the investigation.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Replication: several pastures per treatment reduce the effect of chance or natural variation between individual pastures, so the results are more reliable and an average can be compared.',
            keywords: ['replicat', 'reliab', 'natural variation', 'by chance', 'random variation', 'outlier', 'average', 'sample size', 'more valid'],
          },
        ],
        sampleAnswer:
          'Replication makes the results more reliable. One pasture could differ by chance (a wetter spot, a gopher colony), so comparing the average of six pastures per treatment reduces the effect of natural variation between pastures.',
      },
      {
        label: '(d)',
        prompt: 'Explain how overgrazing can lead to desertification in a semi-arid grassland.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Overgrazing removes plant cover faster than it regrows; bare soil is exposed to wind and water erosion and compaction by hooves, so topsoil and its organic matter are lost, the soil holds less water, and the land becomes desert-like and unproductive.',
            keywords: ['erosion', 'erode', 'topsoil', 'bare soil', 'compact', 'roots no longer', 'removes plant cover', 'removes vegetation', 'loses vegetation'],
          },
        ],
        sampleAnswer:
          'When cattle eat plants faster than they can regrow, the roots that hold the soil in place die and the ground is left bare. Wind and rain then erode the topsoil, and hooves compact what remains, so the soil holds less water and fewer plants can grow. Over time the grassland loses its productivity and turns desert-like.',
      },
      {
        label: '(e)',
        prompt:
          'Propose ONE solution, other than rotational grazing, that ranchers could use to restore pastures already damaged by overgrazing. Describe ONE disadvantage of your solution.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'A valid solution: reduce the stocking rate (fewer cattle per hectare); fence off and rest damaged areas; reseed with native perennial grasses; build check dams or contour barriers to slow runoff in gullies.',
            keywords: ['reduce the number of cattle', 'fewer cattle', 'reduce the stocking', 'lower the stocking', 'reseed', 'replant', 'plant native', 'fence off', 'rest the', 'check dam', 'contour'],
          },
          {
            points: 1,
            description:
              'A matching disadvantage: lower income or meat production for the rancher; the cost of seed, fencing, or labor; restoration takes years; reseeded grass may fail in a drought.',
            keywords: ['cost', 'expensive', 'less income', 'less money', 'lower income', 'less meat', 'less profit', 'takes years', 'takes a long time', 'drought', 'labor'],
          },
        ],
        sampleAnswer:
          'Solution: Reduce the stocking rate and reseed the bare areas with native perennial grasses, whose deep roots hold soil and survive dry periods.\n\nDisadvantage: Fewer cattle means less income for the rancher, and the seed and fencing cost money while the pasture takes several years to recover.',
      },
    ],
  },

  // =========================================================================
  // Q1 Design an Investigation 2: thermal pollution below a power plant (Unit 8)
  // =========================================================================
  {
    id: 'apes-frq-design-2',
    type: 'design-investigation',
    unit: 8,
    title: 'Design an Investigation: Thermal Pollution Below a Power Plant',
    prompt:
      'A coal-fired power plant on a river uses once-through cooling: it withdraws river water, uses it to condense steam, and discharges the warmed water back into the river through an outfall pipe. Anglers report fewer trout downstream of the plant.\n\n' +
      'A class plans to study whether the heated discharge lowers dissolved oxygen and changes the community of aquatic macroinvertebrates. They will sample five sites: 500 m upstream of the outfall, at the outfall, and 500 m, 1 km, and 2 km downstream. At each site they will measure water temperature (°C), dissolved oxygen (mg/L), and the macroinvertebrates caught in a kick net.',
    totalPoints: 10,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Identify a testable hypothesis about the effect of the heated discharge on dissolved oxygen. Then identify the independent variable and the dependent variable in the class’s study.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'A testable hypothesis, e.g., "If water temperature is higher near the outfall, then dissolved oxygen will be lower there than at the upstream site."',
            keywords: ['if the water', 'if water', 'then dissolved oxygen', 'then the dissolved oxygen', 'dissolved oxygen will be lower', 'dissolved oxygen will decrease', 'less dissolved oxygen', 'lower dissolved oxygen'],
          },
          {
            points: 1,
            description:
              'Independent variable: the location relative to the outfall (distance from the outfall), or the water temperature.',
            keywords: ['independent variable is the distance', 'independent variable is distance', 'independent variable is the location', 'independent variable is the water temperature', 'independent variable is temperature', 'independent variable: the distance', 'independent variable: distance', 'independent variable: the location', 'independent variable: the water temperature', 'independent variable: water temperature', 'distance from the outfall', 'distance of the sampling site', 'distance of each site', 'distance downstream', 'location of the site'],
          },
          {
            points: 1,
            description:
              'Dependent variable: the dissolved oxygen concentration (mg/L), or the macroinvertebrate diversity or count.',
            keywords: ['dependent variable is dissolved', 'dependent variable is the dissolved', 'dependent variable: dissolved', 'dissolved oxygen concentration', 'mg/l', 'number of macroinvertebrates', 'macroinvertebrate diversity', 'number of taxa'],
          },
        ],
        sampleAnswer:
          'Hypothesis: If the water is warmer near the outfall, then dissolved oxygen will be lower at the outfall and just downstream than at the upstream site.\n\nIndependent variable: the distance of the sampling site from the outfall (which sets the water temperature).\n\nDependent variable: the dissolved oxygen concentration in mg/L.',
      },
      {
        label: '(b)',
        prompt:
          'Explain why the class includes a site 500 m upstream of the outfall. Identify ONE variable the class should keep the same when sampling the five sites. Then describe how the class should collect the macroinvertebrate samples so that the sites can be compared fairly.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'The upstream site is the control or baseline: it shows conditions in the same river without the heated discharge, so differences downstream can be attributed to the discharge.',
            keywords: ['control', 'baseline', 'without the heated', 'unaffected', 'not affected', 'normal conditions'],
          },
          {
            points: 1,
            description:
              'A sampling variable to hold constant: time of day (photosynthesis changes dissolved oxygen through the day), the same day or weather, the same depth, the same equipment or technique, the same habitat type (riffles).',
            keywords: ['time of day', 'same time', 'same day', 'same depth', 'same weather', 'same equipment', 'same kick net', 'same habitat', 'riffle', 'same season'],
          },
          {
            points: 1,
            description:
              'A standardized sampling procedure: kick the same area of streambed for the same length of time at each site (e.g., 1 m² for 60 seconds), repeat several times, then sort, identify, and count the organisms.',
            keywords: ['same area', 'same amount of time', 'same length of time', 'same size area', 'for 60 seconds', 'for 30 seconds', 'for 1 minute', 'for one minute', 'same number of kicks', 'same number of samples'],
          },
        ],
        sampleAnswer:
          'The upstream site is the control. It shows the river’s normal temperature, oxygen, and macroinvertebrates without the heated water, so any differences downstream can be linked to the discharge.\n\nControlled variable: sample all five sites at the same time of day, because photosynthesis raises dissolved oxygen during the afternoon.\n\nMethod: At each site, hold the kick net downstream and disturb a 1 m × 1 m patch of riffle for 60 seconds, three times. Sort the organisms into taxa, identify them with a key, and count them.',
      },
      {
        label: '(c)',
        prompt:
          'Explain why water at the outfall would be expected to contain less dissolved oxygen than water at the upstream site.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Gases are less soluble in warmer water, so warm water holds less dissolved oxygen (warmth also raises the respiration and decomposition rates that use up oxygen).',
            keywords: ['solubility', 'less soluble', 'holds less oxygen', 'holds less dissolved', 'hold less oxygen', 'hold less dissolved', 'warmer water holds less', 'warm water holds less'],
          },
        ],
        sampleAnswer:
          'Oxygen is less soluble in warm water than in cold water, so the heated discharge can hold less dissolved oxygen. Warmer water also speeds up the respiration of organisms and decomposers, which uses up more of the oxygen that is present.',
      },
      {
        label: '(d)',
        prompt:
          'Identify ONE macroinvertebrate whose presence indicates high water quality, and explain why its presence is a useful indicator.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'A pollution-intolerant taxon (stonefly, mayfly, or caddisfly larvae) and the reason: these organisms need high dissolved oxygen and cool water, so they disappear where water quality is poor.',
            keywords: ['stonefl', 'mayfl', 'caddisfl', 'water penny', 'riffle beetle', 'hellgrammite', 'dobsonfl'],
          },
        ],
        sampleAnswer:
          'Stonefly larvae are pollution-intolerant: they need cool water with high dissolved oxygen. Finding many stoneflies at a site indicates good water quality, while their absence near the outfall would suggest oxygen or temperature stress.',
      },
      {
        label: '(e)',
        prompt:
          'Propose ONE change the power plant could make to reduce thermal pollution of the river. Describe ONE disadvantage of the change you proposed.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'A valid change: install cooling towers or a cooling pond so the water cools before it is returned; switch to a closed-loop (recirculating) cooling system; discharge the water more slowly or mix it with cooler water.',
            keywords: ['cooling tower', 'cooling pond', 'closed-loop', 'closed loop', 'recirculat', 'let the water cool', 'cool the water before'],
          },
          {
            points: 1,
            description:
              'A matching disadvantage: high construction cost; water lost to evaporation from towers or ponds; cooling towers use energy to run fans and pumps; ponds require land.',
            keywords: ['cost', 'expensive', 'evaporat', 'uses energy', 'more energy', 'requires land', 'land area', 'space'],
          },
        ],
        sampleAnswer:
          'Change: Build cooling towers so the heated water releases its heat to the air before it is returned to the river (or recirculated in a closed loop).\n\nDisadvantage: Cooling towers are expensive to build, and they lose large volumes of water to evaporation.',
      },
    ],
  },

  // =========================================================================
  // Q2 Analyze and Interpret Quantitative Data 1: CO2 and ocean pH (Unit 9)
  // =========================================================================
  {
    id: 'apes-frq-data-1',
    type: 'quantitative-data',
    unit: 9,
    title: 'Quantitative Data: Atmospheric CO₂ and Ocean pH',
    prompt:
      'The table shows the yearly average concentration of carbon dioxide in the atmosphere and the average pH of surface seawater at an open-ocean monitoring station in the Pacific Ocean. Values are rounded and simplified from long-term records at Mauna Loa Observatory (CO₂) and Station ALOHA, Hawaii (pH).',
    dataTableHtml:
      '<table><tr><th>Year</th><th>Atmospheric CO₂ (ppm)</th><th>Surface seawater pH</th></tr><tr><td>1990</td><td>354</td><td>8.11</td></tr><tr><td>2000</td><td>370</td><td>8.09</td></tr><tr><td>2010</td><td>390</td><td>8.07</td></tr><tr><td>2020</td><td>414</td><td>8.05</td></tr></table>',
    totalPoints: 10,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe the trend in atmospheric CO₂ concentration from 1990 to 2020. Then calculate the percent increase in atmospheric CO₂ from 1990 to 2020. Show your work.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'CO₂ increased in every decade, and the amount added per decade grew (16, then 20, then 24 ppm), so the increase is accelerating.',
            keywords: ['increas', 'rose', 'went up', 'grew'],
          },
          {
            points: 1,
            description: 'Percent increase = (414 − 354) / 354 × 100 ≈ 17% (16.9%).',
            keywords: [' 16.9', '=16.9', '(16.9', '16.95', ' 17%', ' 17 %', '=17%', ' 17 percent', 'about 17', '0.169', '60/354', '60 / 354'],
          },
        ],
        sampleAnswer:
          'Atmospheric CO₂ rose every decade, from 354 ppm in 1990 to 414 ppm in 2020, and each decade added at least as much as the one before (16, 20, then 24 ppm), so the rise is speeding up.\n\nPercent increase = (414 − 354) / 354 × 100 = 60 / 354 × 100 ≈ 16.9%, or about 17%.',
      },
      {
        label: '(b)',
        prompt:
          'Describe the relationship between atmospheric CO₂ concentration and surface seawater pH shown in the data. Explain the chemical process that causes this relationship.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Inverse (negative) relationship: as atmospheric CO₂ increases, seawater pH decreases.',
            keywords: ['inverse', 'negative relationship', 'negative correlation', 'ph decreases', 'ph goes down', 'ph falls', 'ph drops', 'ph decreased', 'lower ph'],
          },
          {
            points: 1,
            description:
              'CO₂ dissolves in seawater and reacts with water to form carbonic acid (H₂CO₃), which releases hydrogen ions (H⁺), lowering pH.',
            keywords: ['carbonic acid', 'h2co3', 'h₂co₃', 'hydrogen ion', 'h+', 'h⁺'],
          },
        ],
        sampleAnswer:
          'The relationship is inverse: as atmospheric CO₂ increased from 354 to 414 ppm, surface pH fell from 8.11 to 8.05.\n\nThe ocean absorbs CO₂ from the air. Dissolved CO₂ reacts with water to form carbonic acid (H₂CO₃), which releases hydrogen ions (H⁺). More hydrogen ions means a lower pH.',
      },
      {
        label: '(c)',
        prompt:
          'Calculate the average change in surface seawater pH per year from 1990 to 2020. Then, assuming this rate continues, calculate the pH of surface seawater in 2050. Show your work.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Rate = (8.05 − 8.11) / (2020 − 1990) = −0.06 / 30 = −0.002 pH units per year.',
            keywords: ['0.002', '-0.06/30', '0.06/30', '0.06 / 30', '2 x 10^-3', '2 × 10^-3'],
          },
          {
            points: 1,
            description: 'pH in 2050 = 8.05 − (0.002 × 30) = 7.99.',
            keywords: ['7.99'],
          },
        ],
        sampleAnswer:
          'Rate = (8.05 − 8.11) / (2020 − 1990) = −0.06 / 30 = −0.002 pH units per year.\n\npH in 2050 = 8.05 + (−0.002 × 30) = 8.05 − 0.06 = 7.99.',
      },
      {
        label: '(d)',
        prompt: 'Explain how the change in pH shown in the data can harm coral reefs or shellfish.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Lower pH reduces the carbonate ions available in seawater, so corals, oysters, clams, and other calcifying organisms struggle to build calcium carbonate shells and skeletons, and existing shells can dissolve.',
            keywords: ['calcium carbonate', 'caco3', 'caco₃', 'carbonate ion', 'carbonate', 'shells dissolve', 'shell to dissolve', 'shells to dissolve', 'build shells', 'build their shells', 'form shells'],
          },
        ],
        sampleAnswer:
          'As pH falls, hydrogen ions combine with carbonate ions, so less carbonate is available. Corals and shellfish need carbonate to build calcium carbonate skeletons and shells, so they grow more slowly, and their existing shells can begin to dissolve.',
      },
      {
        label: '(e)',
        prompt:
          'Sea surface temperatures are also rising. Explain why warmer ocean water would absorb less CO₂ from the atmosphere.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Gases, including CO₂, are less soluble in warmer water, so warmer seawater can hold less dissolved CO₂.',
            keywords: ['solubility', 'less soluble', 'holds less', 'hold less', 'dissolves less', 'less gas can dissolve', 'less co2 can dissolve'],
          },
        ],
        sampleAnswer:
          'The solubility of a gas falls as water temperature rises. Warmer seawater therefore holds less dissolved CO₂, so the ocean absorbs less of the CO₂ in the atmosphere, leaving more in the air to warm the climate.',
      },
      {
        label: '(f)',
        prompt:
          'Propose ONE solution that would slow the decline in ocean pH, and justify how your solution would work.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'A solution that reduces CO₂ emissions or removes CO₂: replace fossil-fuel power with renewable energy (solar, wind), a carbon tax or cap-and-trade, energy conservation, reforestation, carbon capture and storage.',
            keywords: ['renewable', 'solar', 'wind', 'carbon tax', 'cap-and-trade', 'cap and trade', 'reforest', 'plant trees', 'carbon capture', 'fewer fossil fuels', 'reduce fossil fuel', 'burn less', 'conserv'],
          },
          {
            points: 1,
            description:
              'Justification: less CO₂ in the atmosphere means less CO₂ dissolves in the ocean, so less carbonic acid forms and pH falls more slowly.',
            keywords: ['less co2', 'less co₂', 'less carbon dioxide', 'less carbonic acid', 'lower co2', 'reduce co2', 'reduces co2', 'reduce the co2', 'less dissolves'],
          },
        ],
        sampleAnswer:
          'Solution: Replace coal- and natural-gas-fired power plants with wind and solar generation.\n\nJustification: Burning fossil fuels is the main source of the added CO₂. With less CO₂ released, atmospheric CO₂ rises more slowly, less CO₂ dissolves into seawater, and less carbonic acid forms, so the ocean’s pH declines more slowly.',
      },
    ],
  },

  // =========================================================================
  // Q2 Analyze and Interpret Quantitative Data 2: zebra mussel invasion (Unit 9)
  // =========================================================================
  {
    id: 'apes-frq-data-2',
    type: 'quantitative-data',
    unit: 9,
    title: 'Quantitative Data: A Zebra Mussel Invasion',
    prompt:
      'Zebra mussels (*Dreissena polymorpha*), small filter-feeding mollusks native to the Black and Caspian Sea region, were first detected in a large North American lake in 1989. Scientists monitored the lake before and after the invasion. The table shows mean summer values from the same set of sampling stations. (The data are hypothetical but follow the pattern reported for invaded lakes.)',
    dataTableHtml:
      '<table><tr><th>Year</th><th>Zebra mussels (individuals/m²)</th><th>Water clarity: Secchi depth (m)</th><th>Chlorophyll <i>a</i> (µg/L)</th><th>Native mussels (individuals/m²)</th></tr><tr><td>1988</td><td>0</td><td>1.5</td><td>12.0</td><td>8.0</td></tr><tr><td>1992</td><td>1,200</td><td>2.4</td><td>7.5</td><td>4.0</td></tr><tr><td>1996</td><td>4,500</td><td>3.3</td><td>4.0</td><td>0.5</td></tr><tr><td>2000</td><td>4,000</td><td>3.2</td><td>4.2</td><td>0.2</td></tr></table>',
    totalPoints: 10,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe the trend in zebra mussel density from 1988 to 2000. Then calculate the percent decrease in chlorophyll *a* from 1988 to 1996. Show your work.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Density rose from 0 to a peak of 4,500 per m² in 1996, then leveled off or declined slightly to 4,000 per m² in 2000.',
            keywords: ['peak', 'leveled off', 'levelled off', 'level off', 'levels off', 'leveling off', 'stabiliz', 'slightly decreas', 'slight decrease', 'decreased slightly', 'declined slightly', 'dropped slightly', 'then decreased', 'then declined', 'then fell', 'then dropped', 'decreased to 4', 'plateau'],
          },
          {
            points: 1,
            description: 'Percent decrease = (12.0 − 4.0) / 12.0 × 100 ≈ 66.7% (accept 67%).',
            keywords: ['66.7', '66.6', '67%', '67 %', '67 percent', '8/12', '8.0/12', '8 / 12'],
          },
        ],
        sampleAnswer:
          'Zebra mussel density rose rapidly from 0 in 1988 to 1,200 per m² in 1992 and peaked at 4,500 per m² in 1996, then leveled off with a slight decline to 4,000 per m² in 2000.\n\nPercent decrease = (12.0 − 4.0) / 12.0 × 100 = 8.0 / 12.0 × 100 ≈ 66.7%.',
      },
      {
        label: '(b)',
        prompt:
          'Describe the relationship between zebra mussel density and water clarity shown in the data. Explain how zebra mussels cause this change.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Positive (direct) relationship: as zebra mussel density increases, Secchi depth (water clarity) increases.',
            keywords: ['positive', 'direct relationship', 'clarity increases', 'clarity increased', 'clearer', 'secchi depth increases', 'secchi depth increased', 'secchi depth rose'],
          },
          {
            points: 1,
            description:
              'Zebra mussels are filter feeders: they pump large volumes of water and remove phytoplankton and suspended particles, so light passes deeper.',
            keywords: ['filter', 'remove phytoplankton', 'removes phytoplankton', 'remove algae', 'removes algae', 'eat phytoplankton', 'eat algae', 'eating phytoplankton', 'eating algae', 'suspended particles'],
          },
        ],
        sampleAnswer:
          'The relationship is positive: as zebra mussel density rose from 0 to 4,500 per m², the Secchi depth rose from 1.5 m to 3.3 m.\n\nZebra mussels are filter feeders. Each one filters a large volume of water a day, removing phytoplankton and other suspended particles, so the water becomes clearer. The drop in chlorophyll *a* shows the phytoplankton loss.',
      },
      {
        label: '(c)',
        prompt:
          'Calculate the percent decrease in native mussel density from 1988 to 2000. Show your work. Then explain ONE way zebra mussels could cause this decline.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Percent decrease = (8.0 − 0.2) / 8.0 × 100 = 97.5%.',
            keywords: ['97.5', '7.8/8', '7.8 / 8'],
          },
          {
            points: 1,
            description:
              'Zebra mussels attach to native mussel shells and smother them or keep them from opening and feeding; and/or they outcompete native mussels for the phytoplankton both eat.',
            keywords: ['attach', 'smother', 'cover their shells', 'compet', 'outcompete', 'same food', 'food source'],
          },
        ],
        sampleAnswer:
          'Percent decrease = (8.0 − 0.2) / 8.0 × 100 = 7.8 / 8.0 × 100 = 97.5%.\n\nZebra mussels attach in clumps to the shells of native mussels, which smothers them and keeps them from opening to feed. They also outcompete native mussels for phytoplankton, the food source both species filter from the water.',
      },
      {
        label: '(d)',
        prompt: 'Identify ONE characteristic of zebra mussels that makes them a successful invasive species.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'A valid trait: very high reproductive rate (r-selected; one female can release hundreds of thousands to a million eggs a year); free-swimming larvae (veligers) that disperse in currents and ballast water; adults attach to boats and hard surfaces; few natural predators in North America.',
            keywords: ['reproduc', 'r-selected', 'r selected', 'eggs', 'larva', 'veliger', 'no natural predator', 'few natural predator', 'lack of predator', 'no predators', 'attach to boats', 'ballast'],
          },
        ],
        sampleAnswer:
          'Zebra mussels are r-selected: a single female can release hundreds of thousands of eggs a year, and the free-swimming larvae drift to new areas, so the population grows rapidly. They also have few natural predators in North American lakes.',
      },
      {
        label: '(e)',
        prompt:
          'Explain ONE way the change in water clarity shown in the data could change the plant community on the lake bottom.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Clearer water lets sunlight reach greater depths, so submerged aquatic plants and bottom-dwelling (benthic) algae can grow deeper and more abundantly.',
            keywords: ['sunlight', 'light can reach', 'light reaches', 'penetrat', 'photosynth', 'more light', 'deeper water'],
          },
        ],
        sampleAnswer:
          'With the Secchi depth doubling, sunlight penetrates deeper into the lake. Submerged aquatic plants and benthic algae can photosynthesize at greater depths, so they grow more abundantly and spread over more of the lake bottom.',
      },
      {
        label: '(f)',
        prompt:
          'Propose ONE method to prevent zebra mussels from spreading to other lakes, and justify how your method would work.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'A valid method: require boaters to clean, drain, and dry boats and trailers; boat inspection or decontamination stations (hot-water washing); regulations requiring ballast water exchange or treatment; public education.',
            keywords: ['clean, drain', 'clean drain', 'drain and dry', 'inspect', 'decontaminat', 'wash', 'ballast', 'educat'],
          },
          {
            points: 1,
            description:
              'Justification: zebra mussels spread mainly as adults attached to boats and as larvae carried in water (bilges, live wells, ballast), so removing or killing them before a boat enters a new lake stops the introduction.',
            keywords: ['attached to', 'hull', 'cling', 'hitchhik', 'carried in water', 'transported', 'larvae', 'veliger', 'bilge', 'live well', 'kills the', 'removes the mussels', 'removes any mussels', 'before entering'],
          },
        ],
        sampleAnswer:
          'Method: Set up boat inspection and decontamination stations at boat ramps and require boaters to clean, drain, and dry their boats before launching in another lake.\n\nJustification: Zebra mussels spread mainly by hitchhiking on recreational boats, as adults attached to hulls and as larvae carried in bilge water and live wells. Removing attached mussels and draining all water before a boat is moved keeps them from being transported to a new lake.',
      },
    ],
  },

  // =========================================================================
  // Q3 Calculations 1: population growth and irrigation water (Units 3 and 5)
  // =========================================================================
  {
    id: 'apes-frq-calc-1',
    type: 'calculations',
    unit: 3,
    title: 'Calculations: Population Growth and Irrigation Water',
    prompt:
      'In 2025, Country Z has a population of 40 million people, a crude birth rate of 30 births per 1,000 people per year, and a crude death rate of 9 deaths per 1,000 people per year. Net migration is negligible.\n\n' +
      'Country Z withdraws 2.0 × 10¹⁰ m³ of freshwater per year. Of this, 70% is used for agricultural irrigation, all of it currently by flood irrigation. With flood irrigation, 60% of the withdrawn water reaches the crops’ roots; with drip irrigation, 90% does.\n\n' +
      'Show all work for each calculation, including units.',
    totalPoints: 10,
    timeRecommendation: '~24 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Calculate the rate of natural increase (RNI) of Country Z, as a percent.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Correct setup: (crude birth rate − crude death rate) / 10, i.e., (30 − 9) / 10, or 21 per 1,000 converted to a percent.',
            keywords: ['30 - 9', '30-9', '30 − 9', '21/10', '21 / 10', '21 per 1,000', '21 per 1000', '21/1000', '21/1,000'],
          },
          {
            points: 1,
            description: 'Correct answer: RNI = 2.1%.',
            keywords: ['2.1%', '2.1 %', '2.1 percent', 'rni = 2.1', '= 2.1'],
          },
        ],
        sampleAnswer:
          'RNI = (CBR − CDR) / 10 = (30 − 9) / 10 = 21 / 10 = 2.1% per year.\n\n(21 more people per 1,000 each year is 2.1 per 100, or 2.1%.)',
      },
      {
        label: '(b)',
        prompt: 'Use the rule of 70 to calculate the doubling time of Country Z’s population.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Correct setup: doubling time = 70 / growth rate (%) = 70 / 2.1.',
            keywords: ['70/2.1', '70 / 2.1', '70 ÷ 2.1'],
          },
          {
            points: 1,
            description: 'Correct answer: about 33 years (33.3).',
            keywords: ['33.3', '33 years', '33 yr', '≈ 33', '= 33'],
          },
        ],
        sampleAnswer: 'Doubling time = 70 / RNI (%) = 70 / 2.1 ≈ 33.3 years, or about 33 years.',
      },
      {
        label: '(c)',
        prompt:
          'Calculate the number of people Country Z will add in one year at its 2025 RNI. Then, assuming the RNI stays constant, calculate the population of Country Z after two doubling times.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'People added in one year = 40,000,000 × 0.021 = 840,000.',
            keywords: ['840,000', '840000', '840 thousand', '8.4 x 10^5', '8.4 × 10^5', '8.4 × 10⁵'],
          },
          {
            points: 1,
            description: 'After two doubling times (about 67 years): 40 million × 2 × 2 = 160 million.',
            keywords: ['160 million', '160,000,000', '160000000', '1.6 x 10^8', '1.6 × 10^8', '1.6 × 10⁸'],
          },
        ],
        sampleAnswer:
          'People added in one year = 40,000,000 × 0.021 = 840,000 people.\n\nAfter one doubling time: 40 million × 2 = 80 million. After two doubling times (about 67 years): 80 million × 2 = 160 million people.',
      },
      {
        label: '(d)',
        prompt:
          'Calculate the volume of water Country Z withdraws each year for irrigation. Then calculate the volume of water, in m³ per year, that Country Z would save by switching all of its irrigation from flood to drip while delivering the same amount of water to crop roots.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Irrigation withdrawal = 0.70 × 2.0 × 10¹⁰ m³ = 1.4 × 10¹⁰ m³ per year.',
            keywords: ['1.4 x 10^10', '1.4 × 10^10', '1.4 × 10¹⁰', '1.4x10^10', '1.4e10', '14,000,000,000', '14000000000', '14 billion'],
          },
          {
            points: 1,
            description:
              'Water reaching roots = 1.4 × 10¹⁰ × 0.60 = 8.4 × 10⁹ m³; drip withdrawal needed = 8.4 × 10⁹ / 0.90 ≈ 9.3 × 10⁹ m³; savings = 1.4 × 10¹⁰ − 9.3 × 10⁹ ≈ 4.7 × 10⁹ m³ per year.',
            keywords: ['4.7 x 10^9', '4.7 × 10^9', '4.7 × 10⁹', '4.7 x 10⁹', '4.7 x 10 ^9', '4.67', '4.66', '4.7x10^9', '4.7e9', '4,666,666', '4,670,000,000', '4.7 billion'],
          },
        ],
        sampleAnswer:
          'Irrigation withdrawal = 0.70 × (2.0 × 10¹⁰ m³) = 1.4 × 10¹⁰ m³ per year.\n\nWater reaching roots with flood irrigation = 0.60 × (1.4 × 10¹⁰ m³) = 8.4 × 10⁹ m³.\n\nWithdrawal needed with drip to deliver the same water = 8.4 × 10⁹ m³ / 0.90 ≈ 9.3 × 10⁹ m³.\n\nWater saved = 1.4 × 10¹⁰ m³ − 9.3 × 10⁹ m³ ≈ 4.7 × 10⁹ m³ per year.',
      },
      {
        label: '(e)',
        prompt:
          'Explain why Country Z’s population would continue to grow for several decades even if its total fertility rate dropped to replacement level immediately.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Population momentum: a young age structure means a large share of people are children who have not yet reached reproductive age; as they become parents, births stay above deaths for decades even at replacement fertility.',
            keywords: ['momentum', 'young age structure', 'young population', 'not yet reached reproductive age', 'reproductive age', 'childbearing age', 'large number of young', 'wide base', 'many children'],
          },
        ],
        sampleAnswer:
          'This is population momentum. With a crude birth rate of 30, Country Z has a young age structure: a large share of its people are children. Even if each woman has only about two children, the large number of young people who will soon reach reproductive age keeps births above deaths for decades, until the age structure evens out.',
      },
      {
        label: '(f)',
        prompt: 'Describe ONE policy Country Z could adopt to lower its crude birth rate.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'A valid policy with how it lowers births: expand education for girls and women (later marriage, more job opportunities); provide access to family planning and contraception; raise the legal age of marriage; improve women’s employment opportunities; reduce infant mortality so families need fewer births.',
            keywords: ['educat', 'family planning', 'contracepti', 'birth control', 'marriage age', 'age of marriage', 'women’s rights', 'women\'s rights', 'employment for women', 'jobs for women', 'infant mortality'],
          },
        ],
        sampleAnswer:
          'Country Z could expand access to education for girls and women. Women who stay in school longer tend to marry later, enter the workforce, and choose to have fewer children, which lowers the crude birth rate.',
      },
    ],
  },

  // =========================================================================
  // Q3 Calculations 2: dairy CAFO manure and a methane digester (Units 5, 6, 9)
  // =========================================================================
  {
    id: 'apes-frq-calc-2',
    type: 'calculations',
    unit: 5,
    title: 'Calculations: Manure and Methane at a Dairy CAFO',
    prompt:
      'A dairy concentrated animal feeding operation (CAFO) houses 2,500 cows. Each cow produces 68 kg of manure per day, which is stored in an open lagoon. The owner is considering an anaerobic digester that would capture the methane given off by the manure and burn it in a generator to make electricity. Use the following information:\n\n' +
      '- Methane captured: 1.5 m³ per cow per day\n' +
      '- Energy content of methane: 10 kWh per m³\n' +
      '- The generator converts 35% of the methane’s energy into electricity.\n' +
      '- Density of methane: 0.72 kg/m³\n' +
      '- Global warming potential (GWP) of methane: 28 (1 kg of methane has the warming effect of 28 kg of CO₂)\n' +
      '- 1 metric ton = 1,000 kg; 1 year = 365 days\n\n' +
      'Show all work for each calculation, including units.',
    totalPoints: 10,
    timeRecommendation: '~24 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Calculate the mass of manure, in metric tons, that the CAFO produces in one year.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Correct setup: 2,500 cows × 68 kg/cow/day × 365 days ÷ 1,000 kg/metric ton.',
            keywords: ['2,500 x 68', '2500 x 68', '2,500 × 68', '2500 × 68', '2500 * 68', '2500*68', '170,000 kg', '170000 kg', '170,000 x 365', '170,000 × 365'],
          },
          {
            points: 1,
            description: 'Correct answer: 62,050 metric tons per year (6.2 × 10⁴ metric tons).',
            keywords: ['62,050 metric', '62,050 t', '62050 t', '62,050 ton', '62050 metric', '6.2 x 10^4', '6.2 × 10^4', '6.2 × 10⁴', '6.205 x 10^4', '6.205 × 10^4', '6.2x10^4'],
          },
        ],
        sampleAnswer:
          '2,500 cows × 68 kg/cow/day = 170,000 kg/day.\n\n170,000 kg/day × 365 days/year = 62,050,000 kg/year.\n\n62,050,000 kg ÷ 1,000 kg/metric ton = 62,050 metric tons per year (about 6.2 × 10⁴ metric tons).',
      },
      {
        label: '(b)',
        prompt: 'Calculate the electricity, in kWh per day, that the digester and generator would produce.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Correct setup: 2,500 cows × 1.5 m³ = 3,750 m³ of methane per day, × 10 kWh/m³ × 0.35.',
            keywords: ['3,750', '3750', '37,500', '37500', 'x 0.35', '× 0.35', '* 0.35', '35%'],
          },
          {
            points: 1,
            description: 'Correct answer: 13,125 kWh per day.',
            keywords: ['13,125', '13125', '1.3 x 10^4', '1.3 × 10^4', '1.31 x 10^4', '1.31 × 10^4'],
          },
        ],
        sampleAnswer:
          'Methane per day = 2,500 cows × 1.5 m³/cow = 3,750 m³.\n\nEnergy in the methane = 3,750 m³ × 10 kWh/m³ = 37,500 kWh.\n\nElectricity = 37,500 kWh × 0.35 = 13,125 kWh per day.',
      },
      {
        label: '(c)',
        prompt:
          'Calculate the mass of methane, in kg, that the digester would capture in one year. Then calculate the warming effect, in kg of CO₂-equivalent, that this methane would have if it escaped from the lagoon into the atmosphere instead.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Methane mass = 3,750 m³/day × 365 days × 0.72 kg/m³ = 985,500 kg per year (about 9.9 × 10⁵ kg).',
            keywords: ['985,500', '985500', '9.9 x 10^5', '9.9 × 10^5', '9.86 x 10^5', '9.86 × 10^5', '9.855'],
          },
          {
            points: 1,
            description: 'CO₂-equivalent = 985,500 kg × 28 = 27,594,000 kg CO₂e per year (about 2.8 × 10⁷ kg).',
            keywords: ['27,594', '27594', '2.8 x 10^7', '2.8 × 10^7', '2.8 × 10⁷', '2.76', '2.77', '27.6 million', '27.7 million', '27,720,000', '2.7 x 10^7', '2.7 × 10^7'],
          },
        ],
        sampleAnswer:
          'Methane volume per year = 3,750 m³/day × 365 days = 1,368,750 m³.\n\nMethane mass = 1,368,750 m³ × 0.72 kg/m³ = 985,500 kg per year (about 9.9 × 10⁵ kg).\n\nCO₂-equivalent = 985,500 kg × 28 = 27,594,000 kg CO₂e per year (about 2.8 × 10⁷ kg).',
      },
      {
        label: '(d)',
        prompt:
          'Describe ONE environmental problem caused by storing large amounts of manure at a CAFO. Then describe ONE environmental advantage of raising cattle by rotational grazing on pasture instead of in a CAFO.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'A CAFO manure problem: lagoons leak or overflow in heavy rain, sending nitrogen, phosphorus, and fecal bacteria (E. coli) into streams and groundwater, causing eutrophication or contaminating drinking water; ammonia and methane released to the air.',
            keywords: ['eutrophication', 'runoff', 'overflow', 'leak', 'contaminat', 'e. coli', 'e coli', 'fecal', 'groundwater', 'nitrate', 'algal bloom', 'ammonia'],
          },
          {
            points: 1,
            description:
              'A rotational grazing advantage: manure is spread across the pasture at low density, where it fertilizes the soil instead of concentrating in a lagoon; moving the herd lets plants regrow, protecting soil from overgrazing and erosion; less feed grain is needed.',
            keywords: ['spread', 'fertiliz', 'regrow', 'recover', 'prevents overgrazing', 'avoids overgrazing', 'less overgrazing', 'erosion', 'less feed', 'less grain', 'less concentrated'],
          },
        ],
        sampleAnswer:
          'CAFO problem: Manure lagoons can overflow during heavy rain or leak through their liners, washing nitrogen, phosphorus, and fecal bacteria into nearby streams. The nutrients cause eutrophication and algal blooms, and the bacteria and nitrates can contaminate drinking water.\n\nRotational grazing advantage: Cattle on rotated pasture spread their manure across the land at low density, where it fertilizes the soil instead of piling up in a lagoon. Moving the herd also lets the grass regrow, which prevents overgrazing and erosion.',
      },
      {
        label: '(e)',
        prompt: 'Explain why the routine use of antibiotics in CAFOs is a concern for human health.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Routine antibiotic use selects for antibiotic-resistant bacteria, which can spread to people through meat, manure, water, or farm workers, making infections harder to treat.',
            keywords: ['resistan', 'superbug'],
          },
        ],
        sampleAnswer:
          'Giving animals antibiotics routinely kills susceptible bacteria and leaves the resistant ones to survive and reproduce (natural selection). These antibiotic-resistant bacteria can reach people through meat, manure-contaminated water, or farm workers, causing infections that are hard to treat.',
      },
      {
        label: '(f)',
        prompt:
          'Propose ONE solution, other than the anaerobic digester, that would reduce water pollution from the CAFO’s manure.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'A valid solution: line and cover the lagoon or use a sealed storage tank; a nutrient management plan that applies manure to fields only at rates crops can absorb and not before heavy rain; compost the manure; vegetated buffer strips between fields and streams; reduce herd size.',
            keywords: ['line the lagoon', 'lined', 'liner', 'cover the lagoon', 'storage tank', 'nutrient management', 'compost', 'buffer strip', 'riparian buffer', 'fewer cows', 'reduce the herd', 'before rain', 'agronomic'],
          },
        ],
        sampleAnswer:
          'The CAFO could follow a nutrient management plan: store manure in a lined, covered tank and spread it on fields only at the rate crops can absorb, never before heavy rain, so less nitrogen and phosphorus runs off into streams.',
      },
    ],
  },
]

// ============================================================================
// Accessor functions
// ============================================================================

export const apAPESFRQs: APESFRQ[] = apesFRQs

export function getApAPESFRQs(): APESFRQ[] {
  return apesFRQs
}

export function getAPESFRQsByType(type: APESFRQType): APESFRQ[] {
  return apesFRQs.filter((q) => q.type === type)
}

/** One FRQ of each real type, in exam order (Q1, Q2, Q3): 30 points in 70 minutes. */
export function generateFullExamFRQs(): {
  questions: APESFRQ[]
  totalPoints: number
  totalMinutes: number
} {
  const questions = APES_FRQ_TYPES.map(({ type }) => shuffleArray(getAPESFRQsByType(type))[0])
  return {
    questions,
    totalPoints: questions.reduce((sum, q) => sum + q.totalPoints, 0),
    totalMinutes: 70,
  }
}
