/**
 * AP Human Geography Free-Response Questions
 * Built to the May 2027 exam: Section II is three FRQs in 75 minutes, 7 points each,
 * every question with seven one-point parts, A through G.
 *   Q1 no stimulus
 *   Q2 one stimulus (data, a map, or an image)
 *   Q3 two stimuli
 * Two questions per type (two complete exams). Parts use the exam's task verbs (identify,
 * define, describe, explain, compare, explain the degree to which, explain a limitation), and
 * every rubric line is worth one point, as on the official scoring guidelines. Maps and images
 * are described in text. Units follow the CED: 1 Thinking Geographically, 2 Population and
 * Migration, 3 Cultural Patterns and Processes, 4 Political Patterns and Processes,
 * 5 Agriculture and Rural Land-Use, 6 Cities and Urban Land-Use, 7 Industrial and Economic
 * Development.
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

export type HumanGeoFRQType = 'no-stimulus' | 'one-stimulus' | 'two-stimuli'

/** Exam order, labels, points, and suggested minutes for the three real FRQ types. */
export const HUMAN_GEO_FRQ_TYPES: { type: HumanGeoFRQType; label: string; short: string; points: number; minutes: number }[] = [
  { type: 'no-stimulus', label: 'No Stimulus', short: 'Q1', points: 7, minutes: 25 },
  { type: 'one-stimulus', label: 'One Stimulus', short: 'Q2', points: 7, minutes: 25 },
  { type: 'two-stimuli', label: 'Two Stimuli', short: 'Q3', points: 7, minutes: 25 },
]

export interface HumanGeoFRQ {
  id: string
  type: HumanGeoFRQType
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
  dataTableHtml?: string
}

/** Builds a one-point part (every Human Geography FRQ part is worth exactly one point). */
function part(
  label: string,
  prompt: string,
  description: string,
  keywords: string[],
  sampleAnswer: string
): FRQPart {
  return { label, prompt, maxPoints: 1, rubric: [{ points: 1, description, keywords }], sampleAnswer }
}

const humanGeoFRQs: HumanGeoFRQ[] = [
  // =========================================================================
  // Q1 No stimulus 1: the Green Revolution (Unit 5)
  // =========================================================================
  {
    id: 'hg-frq-q1-1',
    type: 'no-stimulus',
    unit: 5,
    title: 'No Stimulus: The Green Revolution',
    prompt:
      'Beginning in the 1940s in Mexico and spreading to South and Southeast Asia in the 1960s, the Green Revolution greatly increased grain yields in many developing countries. Answer parts A through G.',
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      part(
        'A',
        'Define the Green Revolution.',
        'The rapid diffusion of new agricultural technology (high-yield seed varieties, synthetic fertilizers and pesticides, irrigation, mechanization) to developing countries from the mid-twentieth century, greatly increasing crop yields.',
        ['high-yield', 'high yield', 'hyv', 'new seed', 'new technolog', 'agricultural technolog', 'increase crop yields', 'increased crop yields', 'increase yields', 'increased yields'],
        'The Green Revolution was the diffusion of new agricultural technology, especially high-yield varieties of wheat and rice together with synthetic fertilizer, pesticides, and irrigation, to developing countries from the 1940s through the 1970s, which greatly increased grain yields per hectare.'
      ),
      part(
        'B',
        'Describe ONE technology associated with the Green Revolution.',
        'A technology and what it does: high-yield (often dwarf) varieties of wheat and rice that produce more grain per plant; synthetic (chemical) fertilizers; pesticides and herbicides; expanded irrigation (tube wells); mechanization (tractors).',
        ['high-yield', 'high yield', 'hyv', 'dwarf', 'fertiliz', 'pesticide', 'herbicide', 'irrigation', 'tube well', 'tractor', 'mechaniz'],
        'High-yield varieties (HYVs) of wheat and rice were bred to produce more grain per plant and to have short, stiff stalks that do not fall over under a heavy head of grain, as long as they receive enough fertilizer and water.'
      ),
      part(
        'C',
        'Explain how the Green Revolution increased the food supply in South Asia.',
        'Explains the link: HYV seeds plus fertilizer and irrigation raised yields per hectare and allowed double-cropping, so countries such as India and Pakistan produced far more wheat and rice on the same land, reducing famine risk and dependence on food imports.',
        ['more grain per', 'yields per', 'yield per', 'higher yields', 'raised yields', 'increased yields', 'double crop', 'double-crop', 'two crops', 'same amount of land', 'same land', 'self-sufficien', 'less food import'],
        'High-yield wheat and rice, combined with fertilizer and irrigation, produced several times more grain per hectare than traditional varieties and matured faster, so farmers in Punjab could grow two crops a year on the same land. India went from relying on food imports in the mid-1960s to near self-sufficiency in grain.'
      ),
      part(
        'D',
        'Explain ONE negative environmental consequence of the Green Revolution.',
        'An environmental consequence with its mechanism: heavy irrigation depletes aquifers (water tables falling in Punjab) or causes soil salinization; fertilizer runoff causes eutrophication; pesticide use harms nontarget species; planting a few HYVs reduces crop genetic diversity (monoculture).',
        ['aquifer', 'groundwater', 'water table', 'salinization', 'salinisation', 'eutrophication', 'runoff', 'pesticide', 'monoculture', 'genetic diversity', 'biodiversity', 'soil degradation'],
        'Green Revolution crops need large amounts of irrigation water. In Punjab, farmers pump groundwater from tube wells faster than rain recharges it, so the water table has fallen sharply and wells must be dug ever deeper, threatening the region’s future water supply.'
      ),
      part(
        'E',
        'Explain ONE negative social or economic consequence of the Green Revolution for small-scale farmers.',
        'A consequence with its mechanism: HYVs require purchased seed, fertilizer, pesticides, and irrigation each season, so poor farmers who cannot afford the inputs fall behind or go into debt; larger farmers buy out smaller ones; mechanization reduces demand for farm labor, pushing rural-to-urban migration.',
        ['debt', 'afford', 'cost of', 'expensive', 'loan', 'buy seed', 'purchase seed', 'larger farmers', 'large farms', 'lose their land', 'consolidat', 'fewer jobs', 'unemploy', 'rural-to-urban', 'migrate to cities'],
        'HYV seeds must be bought every season and only reach high yields with purchased fertilizer, pesticide, and irrigation. Small farmers who borrowed to pay for these inputs often fell into debt when a harvest failed, and many sold their land to larger, wealthier farmers, widening rural inequality.'
      ),
      part(
        'F',
        'Explain the degree to which the Green Revolution supports OR challenges the population theory of Thomas Malthus.',
        'States a degree and explains it: it largely challenges Malthus, because technology made food supply grow faster than population (geometric population growth did not outrun food as he predicted); it partly supports neo-Malthusian concerns because the gains depend on finite water, soil, and fossil-fuel inputs and have slowed.',
        ['challenge', 'contradict', 'disprove', 'refute', 'proved malthus wrong', 'support', 'neo-malthus', 'neomalthus'],
        'The Green Revolution largely challenges Malthus. Malthus argued that population grows geometrically while food supply grows only arithmetically, so famine would check population. Instead, new technology increased food production faster than population grew in Mexico, India, and much of Asia. It only partly refutes him, though: neo-Malthusians note that these gains depend on finite groundwater and fertile soil, so the theory still raises concerns for the future.'
      ),
      part(
        'G',
        'Explain ONE reason the Green Revolution had less success in sub-Saharan Africa than in Asia.',
        'A valid reason with explanation: research focused on wheat and rice, not African staples such as cassava, sorghum, millet, and yams; little irrigation infrastructure and mostly rain-fed farming; poor roads and markets raised the cost of fertilizer and seed; diverse soils and climates; limited government funding or credit for farmers.',
        ['cassava', 'sorghum', 'millet', 'yam', 'staple', 'rain-fed', 'rainfed', 'irrigation', 'infrastructure', 'roads', 'credit', 'cost of fertilizer'],
        'Green Revolution research concentrated on wheat and rice, but many farmers in sub-Saharan Africa grow other staples, such as cassava, sorghum, millet, and yams, that received far less breeding attention. Most African farms are also rain-fed rather than irrigated, so they could not provide the steady water the new varieties required.'
      ),
    ],
  },

  // =========================================================================
  // Q1 No stimulus 2: devolution (Unit 4)
  // =========================================================================
  {
    id: 'hg-frq-q1-2',
    type: 'no-stimulus',
    unit: 4,
    title: 'No Stimulus: Devolution and the State',
    prompt:
      'Many states face pressure from regions that want more power to govern themselves. Answer parts A through G.',
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      part(
        'A',
        'Define devolution.',
        'The transfer of political power from the central (national) government to regional or local governments.',
        ['transfer', 'from the central', 'from a central', 'from the national', 'to regional', 'to local', 'to subnational', 'to a region', 'to the region'],
        'Devolution is the transfer of political power from a state’s central government to regional or local governments.'
      ),
      part(
        'B',
        'Describe ONE centrifugal force that can lead to demands for devolution.',
        'A force that divides a state, described: ethnic, linguistic, or religious differences concentrated in one region; economic inequality between regions; a history of separate rule; physical distance or barriers from the capital.',
        ['ethnic', 'linguistic', 'language', 'religio', 'economic inequality', 'uneven development', 'wealthier region', 'poorer region', 'history of', 'distance', 'isolat', 'separat'],
        'Ethnic and linguistic differences are a centrifugal force. When a distinct ethnic group that speaks its own language is concentrated in one region, such as Catalans in northeastern Spain, its members may feel a stronger tie to their region than to the state and demand self-government.'
      ),
      part(
        'C',
        'Explain how physical geography can contribute to devolutionary pressures.',
        'Physical features (oceans, mountains, deserts, great distance) separate a region from the capital, which limits interaction and the reach of the central government and helps a separate regional identity develop (e.g., Corsica, Sardinia, Hawaii, Kurdish mountains, Greenland).',
        ['island', 'mountain', 'ocean', 'distance', 'far from', 'isolat', 'separated by', 'remote'],
        'When a region is separated from the core by water or mountains, its people interact less with the rest of the state and the central government has a harder time integrating it. For example, Corsica is an island far from Paris, and its separate history and language have fed demands for autonomy.'
      ),
      part(
        'D',
        'Explain ONE way a state can respond to devolutionary pressures to keep the state together.',
        'A response with how it reduces pressure: grant autonomy or create a federal system with regional parliaments (UK’s Scottish Parliament, 1999; Spain’s autonomous communities); protect minority languages; invest in the region; or, in some states, repress the movement. Must explain why it eases the pressure.',
        ['autonom', 'federal', 'regional parliament', 'scottish parliament', 'regional government', 'self-government', 'official language', 'invest', 'repress', 'military'],
        'A state can grant regional autonomy. The United Kingdom created a Scottish Parliament in 1999 with power over education, health, and other matters, which gave Scots more control over their own affairs and reduced the appeal of full independence; in 2014 Scottish voters rejected independence.'
      ),
      part(
        'E',
        'Explain ONE way economic differences between regions can lead to devolution.',
        'A wealthier region resents subsidizing poorer regions through national taxes and seeks control of its own revenue (Catalonia in Spain, northern Italy, Flanders in Belgium); or a poorer, neglected region demands control over resources and investment.',
        ['wealthier', 'richer', 'tax', 'subsidiz', 'subsidis', 'revenue', 'neglect', 'poorer region', 'resources', 'oil'],
        'A wealthy region may resent that its taxes are used to support poorer parts of the state. Catalonia produces a large share of Spain’s economic output, and many Catalans argue they pay far more in taxes than they receive, which has fueled demands for fiscal control and independence.'
      ),
      part(
        'F',
        'Explain ONE way that membership in a supranational organization, such as the European Union, can encourage devolutionary movements within its member states.',
        'Because the EU provides a common market, free trade, a shared currency, and security, a small region can argue it would be economically viable as an independent state inside the EU; EU regional funding and recognition of regional languages also strengthen regional identity.',
        ['common market', 'single market', 'free trade', 'shared currency', 'euro', 'viable', 'survive', 'regional fund', 'no longer need', 'would still have access'],
        'The EU gives small regions access to a single market and a shared currency, so a region such as Catalonia or Scotland can argue that it would still have free trade with its neighbors and would not need the larger state to survive economically.'
      ),
      part(
        'G',
        'Explain the degree to which devolution leads to the breakup of states. Use an example in your response.',
        'States a degree (it can, but usually does not) and supports it with examples: devolution ended in the breakup of the Soviet Union (1991) and Yugoslavia (1991–1992) and the separation of South Sudan (2011), but more often states survive by granting autonomy, as in Spain, Belgium, and the UK (Scotland voted to stay in 2014).',
        ['soviet union', 'ussr', 'yugoslavia', 'south sudan', 'czechoslovakia', 'scotland', 'quebec', 'catalonia', 'belgium', 'flanders', 'basque'],
        'Devolution leads to breakup only to a limited degree. In some cases it has: the Soviet Union dissolved into 15 states in 1991, and Yugoslavia broke apart in the early 1990s. More often, granting autonomy holds a state together. Spain’s autonomous communities and the UK’s Scottish Parliament gave regions more power, and Scotland voted to remain in the UK in 2014.'
      ),
    ],
  },

  // =========================================================================
  // Q2 One stimulus 1: demographic data for a developing country (Unit 2)
  // =========================================================================
  {
    id: 'hg-frq-q2-1',
    type: 'one-stimulus',
    unit: 2,
    title: 'One Stimulus: Demographic Indicators for Country A',
    prompt:
      'The table shows demographic indicators for Country A, a low-income country, in a recent year. (The country is hypothetical; the values are typical of countries at a similar level of development.) Use the data to answer parts A through G.',
    dataTableHtml:
      '<table><tr><th>Indicator</th><th>Country A</th></tr><tr><td>Crude birth rate (per 1,000 people)</td><td>36</td></tr><tr><td>Crude death rate (per 1,000 people)</td><td>8</td></tr><tr><td>Total fertility rate (children per woman)</td><td>4.8</td></tr><tr><td>Infant mortality rate (per 1,000 live births)</td><td>48</td></tr><tr><td>Population under age 15</td><td>42%</td></tr><tr><td>Population age 65 and over</td><td>3%</td></tr><tr><td>Female literacy rate</td><td>52%</td></tr><tr><td>Urban population</td><td>38%</td></tr></table>',
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      part(
        'A',
        'Using the data, identify the stage of the demographic transition model that best describes Country A.',
        'Stage 2: a high crude birth rate (36) with a much lower crude death rate (8), giving rapid natural increase.',
        ['stage 2', 'stage two', 'second stage', 'stage ii'],
        'Country A is in Stage 2 of the demographic transition model. Its crude birth rate is still high (36 per 1,000) while its crude death rate has already fallen to 8 per 1,000, so the population grows rapidly.'
      ),
      part(
        'B',
        'Using the data, calculate Country A’s rate of natural increase as a percentage.',
        'RNI = (36 − 8) / 10 = 2.8%.',
        ['2.8%', '2.8 %', '2.8 percent'],
        'Rate of natural increase = (CBR − CDR) / 10 = (36 − 8) / 10 = 2.8% per year.'
      ),
      part(
        'C',
        'Using the data, explain the relationship between Country A’s female literacy rate and its total fertility rate.',
        'Low female literacy (52%) is associated with a high TFR (4.8): women with less education tend to marry and begin childbearing earlier, have less access to and knowledge of contraception, and have fewer paid work opportunities, so they have more children.',
        ['marry earlier', 'marry younger', 'marry at a younger', 'earlier marriage', 'contracepti', 'family planning', 'birth control', 'fewer job', 'fewer opportunities', 'work outside the home', 'inverse', 'negative relationship', 'less educat', 'more educat'],
        'Only 52% of women in Country A can read, and the TFR is a high 4.8. Women with little schooling tend to marry and start having children at a younger age, know less about family planning, and have fewer opportunities for paid work outside the home, so they have more children. Raising female literacy is closely linked to lower fertility.'
      ),
      part(
        'D',
        'Describe the shape of the population pyramid for Country A, using the data.',
        'A wide base that narrows quickly toward a small top (a triangle or pyramid shape), because 42% of the population is under 15 and only 3% is 65 or older.',
        ['wide base', 'broad base', 'wide at the bottom', 'wider at the bottom', 'triangle', 'triangular', 'narrow top', 'narrow at the top', 'expansive'],
        'Country A’s pyramid has a very wide base that narrows quickly to a small top, a triangle shape. The wide base reflects the 42% of people under 15, and the narrow top reflects the 3% who are 65 or older.'
      ),
      part(
        'E',
        'Explain ONE challenge that the age structure shown in the data creates for Country A’s government.',
        'A high youth dependency ratio: the government must fund schools, health care, and vaccinations for a large child population and later create enough jobs and housing as they reach working age, with a relatively small working-age tax base.',
        ['dependency', 'school', 'education', 'jobs', 'employment', 'unemploy', 'health care', 'healthcare', 'housing', 'tax base', 'youth bulge'],
        'With 42% of the population under 15, Country A has a high youth dependency ratio. The government must build and staff enough schools and clinics for a huge number of children while the working-age population that pays taxes is comparatively small, and in ten years it must create jobs for a large wave of young workers.'
      ),
      part(
        'F',
        'Explain ONE policy Country A’s government could adopt to lower its total fertility rate.',
        'A policy with its mechanism: expand schooling for girls and adult literacy for women; provide affordable family planning and contraception; improve maternal and child health so fewer births are needed to reach a desired family size; raise the minimum marriage age; antinatalist incentives.',
        ['educat', 'school', 'literacy', 'family planning', 'contracepti', 'birth control', 'marriage age', 'age of marriage', 'antinatalist', 'infant mortality', 'health care'],
        'Country A could expand education for girls. Girls who stay in school longer marry later, are more likely to work outside the home, and learn about family planning, so they tend to have fewer children, which lowers the TFR over time.'
      ),
      part(
        'G',
        'Explain ONE limitation of using the demographic transition model to predict Country A’s future population change.',
        'The DTM is based on the historical experience of Europe and North America and assumes every country follows the same path; it does not account for migration, government policy (pronatalist or antinatalist), cultural or religious factors, or diseases such as HIV/AIDS, and it gives no timeline for moving between stages.',
        ['europe', 'western', 'eurocentric', 'migration', 'government polic', 'culture', 'cultural', 'religio', 'disease', 'hiv', 'pandemic', 'timeline', 'how long', 'time frame', 'timeframe'],
        'The demographic transition model is based on the history of Europe and North America, where birth rates fell as industrialization progressed. It assumes Country A will follow the same path, but it does not account for cultural or religious values, government policies, migration, or disease, and it gives no timeline, so it cannot say when or whether Country A will move to Stage 3.'
      ),
    ],
  },

  // =========================================================================
  // Q2 One stimulus 2: maquiladoras along the U.S.-Mexico border (Unit 7)
  // =========================================================================
  {
    id: 'hg-frq-q2-2',
    type: 'one-stimulus',
    unit: 7,
    title: 'One Stimulus: Maquiladoras on the U.S.–Mexico Border',
    prompt:
      '**Stimulus (map, described).** A map of Mexico shows the locations of maquiladoras, foreign-owned factories that import parts duty-free, assemble them, and export the finished goods, around the year 2000. Most of the plants form a narrow band of clusters along the U.S.–Mexico border, in cities such as Tijuana, Mexicali, Nogales, Ciudad Juárez, Nuevo Laredo, Reynosa, and Matamoros, each located across the border from a U.S. city. Smaller clusters appear in interior industrial cities such as Monterrey and Guadalajara. Very few plants appear in southern Mexico.\n\n' +
      'Use the map description to answer parts A through G.',
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      part(
        'A',
        'Identify the type of economic development zone that maquiladoras represent.',
        'Export processing zone (EPZ), a zone with special tax and tariff rules designed to attract foreign manufacturing for export; a free-trade zone or special economic zone is also accepted.',
        ['export processing zone', 'export-processing zone', 'epz', 'free trade zone', 'free-trade zone', 'special economic zone', 'sez'],
        'Maquiladoras are a type of export processing zone (EPZ): an area where a government offers reduced tariffs and taxes to attract foreign companies that manufacture goods for export.'
      ),
      part(
        'B',
        'Describe the spatial pattern of maquiladoras shown on the map.',
        'Clustered along the U.S.–Mexico border in border cities paired with U.S. cities, with smaller clusters in a few interior industrial cities and very few in the south.',
        ['along the border', 'near the border', 'close to the border', 'clustered', 'concentrated', 'border cities', 'northern mexico', 'north of mexico'],
        'Maquiladoras are clustered in a narrow band along the U.S.–Mexico border, in border cities such as Tijuana and Ciudad Juárez that face U.S. cities. A few smaller clusters lie in interior industrial cities such as Monterrey, and almost none are in southern Mexico.'
      ),
      part(
        'C',
        'Explain ONE reason companies locate maquiladoras in the pattern shown on the map.',
        'Least-cost location: the border sites are close to the U.S. market and to U.S. suppliers, which minimizes transportation costs and time while using lower-wage Mexican labor; border crossings and highways speed shipping (just-in-time delivery).',
        ['transportation cost', 'transport cost', 'shipping cost', 'close to the united states', 'close to the u.s', 'near the united states', 'near the u.s', 'proximity', 'least cost', 'least-cost', 'just-in-time', 'just in time', 'weber'],
        'Companies locate at the border to minimize transportation costs. Parts can be trucked in from U.S. suppliers and finished goods trucked back to U.S. consumers within hours, while the plant still uses lower-wage Mexican labor. This is a least-cost location, as Weber’s model predicts.'
      ),
      part(
        'D',
        'Explain how maquiladoras illustrate the new international division of labor.',
        'Corporations based in core countries keep high-skill, high-wage work (design, research, management) at home and move routine, labor-intensive assembly to lower-wage semi-periphery or periphery countries such as Mexico.',
        ['labor-intensive', 'labor intensive', 'low-wage', 'low wage', 'lower wage', 'cheaper labor', 'cheap labor', 'assembly', 'core countr', 'semi-periphery', 'semiperiphery', 'periphery'],
        'In the new international division of labor, companies from core countries such as the United States keep research, design, and management jobs at home and move labor-intensive assembly to semi-periphery countries with lower wages. A maquiladora in Ciudad Juárez assembling televisions for a U.S. or Asian corporation is this kind of assembly work.'
      ),
      part(
        'E',
        'Explain ONE positive economic effect of maquiladoras on Mexico.',
        'Jobs and wages for many Mexican workers; foreign direct investment; foreign currency from exports; a multiplier effect that supports local businesses; transfer of skills and technology.',
        ['jobs', 'employment', 'foreign direct investment', 'fdi', 'investment', 'multiplier', 'export earnings', 'foreign currency', 'skills', 'technology transfer'],
        'Maquiladoras employ hundreds of thousands of Mexican workers, and those wages are spent at local stores, restaurants, and services, a multiplier effect that adds more jobs in border cities.'
      ),
      part(
        'F',
        'Explain ONE negative effect of maquiladoras on Mexican border cities or workers.',
        'Low wages and poor or unsafe working conditions; weak environmental enforcement leading to air and water pollution; rapid migration to border cities outpacing housing and services, creating informal settlements; vulnerability when plants relocate to lower-wage countries.',
        ['low wage', 'low pay', 'poor working conditions', 'unsafe', 'exploit', 'pollut', 'toxic', 'informal settlement', 'squatter', 'colonias', 'housing shortage', 'relocate', 'move to china', 'moved to china', 'move to asia'],
        'Maquiladora jobs draw migrants from across Mexico to border cities faster than the cities can build housing, water lines, and sewers, so many workers live in informal settlements (colonias) without basic services.'
      ),
      part(
        'G',
        'Explain the degree to which free-trade agreements such as NAFTA (1994) and its replacement, the USMCA (2020), influenced the growth of maquiladoras.',
        'States a degree and explains it: to a large degree, because removing tariffs among the U.S., Mexico, and Canada made Mexican assembly for the U.S. market cheaper and more secure, and the number of maquiladoras and their employment grew rapidly after 1994; but the program began earlier (1965) and growth also depended on wages, the peso, and competition from China.',
        ['tariff', 'free trade', 'duty-free', 'trade barrier', '1965', 'border industrialization', 'grew rapidly', 'grew quickly', 'increased rapidly', 'large degree', 'great degree', 'significant degree'],
        'NAFTA influenced maquiladora growth to a large degree. By removing most tariffs among the United States, Mexico, and Canada starting in 1994, it made assembling goods in Mexico for sale in the U.S. cheaper and more predictable, and maquiladora employment grew rapidly through the late 1990s. It was not the only cause, though: the program began in 1965, and growth later slowed when companies moved assembly to lower-wage China.'
      ),
    ],
  },

  // =========================================================================
  // Q3 Two stimuli 1: urbanization data and an informal settlement (Unit 6)
  // =========================================================================
  {
    id: 'hg-frq-q3-1',
    type: 'two-stimuli',
    unit: 6,
    title: 'Two Stimuli: Urbanization and Informal Settlements',
    prompt:
      '**Stimulus 1 (data).** The table shows the percentage of each region’s population living in urban areas in 1970 and 2020. Data are rounded from the United Nations, *World Urbanization Prospects: The 2018 Revision*.\n\n' +
      '**Stimulus 2 (image, described).** A photograph from São Paulo, Brazil, shows a dense neighborhood of self-built brick and concrete homes, many with unfinished upper floors, packed closely together with narrow lanes. Directly beside it, separated by a wall, stands a high-rise luxury apartment tower with a private swimming pool on each balcony.\n\n' +
      'Use both stimuli to answer parts A through G.',
    dataTableHtml:
      '<table><tr><th>Region</th><th>Urban population, 1970 (%)</th><th>Urban population, 2020 (%)</th></tr><tr><td>Northern America</td><td>74</td><td>83</td></tr><tr><td>Europe</td><td>63</td><td>75</td></tr><tr><td>Latin America and the Caribbean</td><td>57</td><td>81</td></tr><tr><td>Asia</td><td>24</td><td>51</td></tr><tr><td>Africa</td><td>24</td><td>44</td></tr><tr><td>World</td><td>37</td><td>56</td></tr></table>',
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      part(
        'A',
        'Using Stimulus 1, identify the region with the greatest increase in the percentage of its population living in urban areas from 1970 to 2020.',
        'Asia, an increase of 27 percentage points (24% to 51%).',
        ['asia'],
        'Asia had the greatest increase: from 24% urban in 1970 to 51% in 2020, a rise of 27 percentage points.'
      ),
      part(
        'B',
        'Using Stimulus 1, compare the urbanization of more-developed regions (Northern America and Europe) with that of less-developed regions (Asia and Africa) from 1970 to 2020.',
        'More-developed regions were already mostly urban in 1970 and urbanized slowly (9 to 12 points); Asia and Africa started much less urban but urbanized faster (about 20 to 27 points), though they remain less urban.',
        ['already', 'faster', 'more rapidly', 'more quickly', 'slower', 'more slowly', 'started lower', 'started higher', 'less urban', 'more urban'],
        'Northern America and Europe were already mostly urban in 1970 (74% and 63%) and gained only 9 to 12 percentage points by 2020. Asia and Africa started at only 24% urban but urbanized much faster, gaining 27 and 20 points, although both are still less urban than the more-developed regions.'
      ),
      part(
        'C',
        'Explain ONE push or pull factor that accounts for the rapid urbanization of Asia or Africa shown in Stimulus 1.',
        'A push factor (rural poverty, mechanization of agriculture reducing farm jobs, land shortage from population growth, drought or conflict) or a pull factor (jobs in manufacturing and services, higher wages, schools and health care in cities), with how it moves people from rural to urban areas.',
        ['jobs', 'employment', 'wages', 'factory', 'factories', 'manufactur', 'mechaniz', 'rural poverty', 'land shortage', 'drought', 'conflict', 'education', 'schools', 'health care', 'services'],
        'Pull factor: manufacturing jobs. As factories expanded in Chinese and Southeast Asian cities, they offered steady wages far higher than farm incomes, drawing hundreds of millions of rural migrants to cities.'
      ),
      part(
        'D',
        'Using Stimulus 2, identify the type of neighborhood shown beside the apartment tower.',
        'An informal (squatter) settlement, called a favela in Brazil (also slum, shantytown).',
        ['informal settlement', 'squatter', 'favela', 'slum', 'shantytown', 'shanty town'],
        'The neighborhood is an informal settlement (in Brazil, a favela): housing built by residents themselves, often without legal title to the land or formal city services.'
      ),
      part(
        'E',
        'Explain ONE reason settlements like the one in Stimulus 2 develop in rapidly growing cities such as those in Stimulus 1.',
        'Rural-to-urban migration adds people faster than the formal housing market and city infrastructure can grow, and migrants cannot afford formal housing, so they build their own homes on unclaimed or undesirable land.',
        ['afford', 'housing shortage', 'not enough housing', 'lack of affordable', 'faster than', 'rural-to-urban', 'rural to urban', 'migrants', 'build their own', 'unclaimed land', 'cheap'],
        'Cities like São Paulo grew faster than governments and developers could build affordable housing. Rural migrants who could not afford formal apartments built their own homes on vacant or undesirable land, creating informal settlements.'
      ),
      part(
        'F',
        'Explain ONE challenge that informal settlements create for urban sustainability.',
        'Lack of piped water, sewers, and garbage collection pollutes water and spreads disease; homes on steep slopes or floodplains face landslides and floods; no legal title discourages investment; residents lack services; cities lose tax revenue.',
        ['sewer', 'sanitation', 'clean water', 'piped water', 'garbage', 'waste', 'disease', 'landslide', 'flood', 'title', 'tax', 'electricity', 'infrastructure', 'pollut'],
        'Many informal settlements lack sewers, piped water, and garbage collection. Untreated waste flows into streams and open channels, polluting the water supply and spreading disease, a problem that is hard to fix because the streets were never planned for pipes.'
      ),
      part(
        'G',
        'Explain the degree to which upgrading programs, which add roads, water, sewers, and other services to existing informal settlements, address the challenges of these settlements.',
        'States a degree and explains it: to a moderate or large degree, upgrading brings water, sanitation, transport, and legal title to residents without displacing them (e.g., Rio de Janeiro’s Favela-Bairro program, Medellín’s cable cars); but it is limited because it is costly, does not address the poverty, inequality, and housing shortage that cause new settlements, and can raise rents and displace residents.',
        ['favela-bairro', 'favela bairro', 'medell', 'cable car', 'title', 'without displacing', 'without relocating', 'stay in their', 'root cause', 'poverty', 'expensive', 'costly', 'displace', 'gentrif', 'limited degree', 'moderate degree', 'large degree', 'great degree'],
        'Upgrading addresses these challenges to a moderate degree. Programs such as Rio de Janeiro’s Favela-Bairro brought paved streets, water, and sewers to existing favelas, improving health and safety while letting residents keep their homes and social networks. However, upgrading is expensive and does not fix the low wages, inequality, and housing shortage that create informal settlements in the first place, so new ones keep forming.'
      ),
    ],
  },

  // =========================================================================
  // Q3 Two stimuli 2: French in Canada (Units 3 and 4)
  // =========================================================================
  {
    id: 'hg-frq-q3-2',
    type: 'two-stimuli',
    unit: 3,
    title: 'Two Stimuli: The French Language in Canada',
    prompt:
      '**Stimulus 1 (map, described).** A choropleth map of Canada shows the approximate percentage of each province’s and territory’s population whose mother tongue (first language learned) is French, based on a recent Canadian census. Quebec is shaded darkest (more than 70%). New Brunswick, which borders Quebec to the southeast, is the next darkest (about 30%). Every other province and territory is shaded lightest (under 5%).\n\n' +
      '**Stimulus 2 (image, described).** A photograph shows a red octagonal stop sign on a street in Quebec City. The sign reads “ARRÊT” and has no English word on it.\n\n' +
      'Use both stimuli to answer parts A through G.',
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: false,
    parts: [
      part(
        'A',
        'Using Stimulus 1, describe the spatial pattern of French mother-tongue speakers in Canada.',
        'French speakers are concentrated in Quebec and neighboring New Brunswick (in the east, along the St. Lawrence), and form only small minorities everywhere else.',
        ['concentrated in quebec', 'clustered in quebec', 'mostly in quebec', 'majority in quebec', 'quebec and new brunswick', 'in the east', 'eastern canada', 'small minorit', 'few french speakers'],
        'French mother-tongue speakers are concentrated in Quebec, where they are a large majority, and in neighboring New Brunswick in eastern Canada. In every other province and territory they are a small minority of under 5%.'
      ),
      part(
        'B',
        'Explain the historical process that produced the pattern shown in Stimulus 1.',
        'French colonization: France settled New France along the St. Lawrence River (Quebec City, 1608) and Acadia in the Maritimes, so French spread by relocation diffusion; after Britain took control (1763), English-speaking settlers dominated the rest of Canada while French persisted in its original core.',
        ['colon', 'new france', 'french settlers', 'settled by the french', 'france settled', 'acadia', 'relocation diffusion', 'st. lawrence', 'saint lawrence', '1763', '1608'],
        'France colonized New France along the St. Lawrence River, founding Quebec City in 1608, and settled Acadia in the Maritimes. French settlers carried their language there by relocation diffusion. After Britain gained control in 1763, most later settlers in the rest of Canada spoke English, so French remained concentrated in its original colonial core.'
      ),
      part(
        'C',
        'Using Stimulus 2, explain how the sign is an example of the cultural landscape.',
        'The cultural landscape is the visible human imprint on the land; the French-only sign shows how the dominant language and the province’s language laws are expressed in public space, marking the area as francophone.',
        ['cultural landscape', 'visible', 'imprint', 'human modification', 'built environment', 'public space', 'mark', 'identity'],
        'The cultural landscape is the visible imprint that a culture leaves on a place. A French-only stop sign shows that French is the dominant public language in Quebec and that the province’s language laws shape what people see on the street, marking the landscape as francophone.'
      ),
      part(
        'D',
        'Explain why the provincial government of Quebec passed language laws, such as the Charter of the French Language (Bill 101, 1977), that produced landscapes like Stimulus 2.',
        'To preserve French culture and identity against assimilation into the English-speaking majority of Canada and North America: the charter made French the official language of Quebec and required French in government, business, signs, and schooling.',
        ['preserve', 'protect', 'assimilat', 'english-speaking majority', 'surrounded by english', 'dominance of english', 'identity', 'survival'],
        'Quebec’s francophones are a small minority in an English-speaking North America. To protect French from assimilation, the Charter of the French Language made French the official language of Quebec and required it in government, business, public signs, and most schooling.'
      ),
      part(
        'E',
        'Explain ONE way globalization threatens minority languages such as French in North America.',
        'English is the global lingua franca of business, science, the internet, and entertainment, so speakers of minority languages face pressure to use English for jobs and media; over generations children may shift to English (language extinction or assimilation).',
        ['lingua franca', 'english dominates', 'dominance of english', 'internet', 'media', 'movies', 'music', 'social media', 'business', 'assimilat', 'shift to english', 'extinct'],
        'English is the lingua franca of global business and the internet. Young Quebecers consume English music, streaming, and social media, and many jobs reward English, so there is steady pressure to use English instead of French in daily life.'
      ),
      part(
        'F',
        'Explain the degree to which language differences have acted as a centrifugal force in Canada.',
        'States a degree and explains it: to a significant degree, because language-based Quebec nationalism produced independence referendums in 1980 and 1995 (the 1995 “No” side won with about 50.6%); but limited, because both failed and federal bilingualism (Official Languages Act, 1969) and provincial autonomy have kept Quebec in Canada.',
        ['referendum', '1980', '1995', 'sovereignty', 'separatis', 'independence', 'parti québécois', 'parti quebecois', 'bloc'],
        'Language has been a strong centrifugal force, but not one that broke the state. French-speaking nationalism led Quebec to hold independence referendums in 1980 and 1995, and the 1995 vote failed by roughly one percentage point. Both failed, however, and Canada has accommodated Quebec through official bilingualism and wide provincial powers, so the country remains united.'
      ),
      part(
        'G',
        'Explain ONE limitation of Stimulus 1 for understanding where French is used in Canada.',
        'Scale and measure limits: provincial averages hide local concentrations (francophone communities in northern and eastern Ontario, Manitoba’s St. Boniface, Acadian areas); mother tongue does not show bilingual speakers or the language used at home or at work; it shows no change over time.',
        ['scale', 'provincial level', 'province level', 'whole province', 'hides', 'local', 'within provinces', 'ontario', 'bilingual', 'second language', 'spoken at home', 'at work', 'over time', 'mother tongue only'],
        'Stimulus 1 is mapped at the provincial scale, which hides local patterns. Ontario appears to have almost no French speakers, but there are sizable francophone communities in eastern and northern Ontario. It also counts only mother tongue, so it misses the many Canadians who speak French as a second language.'
      ),
    ],
  },
]

// ============================================================================
// Accessor functions
// ============================================================================

export const apHumanGeoFRQs: HumanGeoFRQ[] = humanGeoFRQs

export function getApHumanGeoFRQs(): HumanGeoFRQ[] {
  return humanGeoFRQs
}

export function getHumanGeoFRQsByType(type: HumanGeoFRQType): HumanGeoFRQ[] {
  return humanGeoFRQs.filter((q) => q.type === type)
}

/** One FRQ of each real type, in exam order (Q1, Q2, Q3): 21 points in 75 minutes. */
export function generateFullExamFRQs(): {
  questions: HumanGeoFRQ[]
  totalPoints: number
  totalMinutes: number
} {
  const questions = HUMAN_GEO_FRQ_TYPES.map(({ type }) => shuffleArray(getHumanGeoFRQsByType(type))[0])
  return {
    questions,
    totalPoints: questions.reduce((sum, q) => sum + q.totalPoints, 0),
    totalMinutes: 75,
  }
}
