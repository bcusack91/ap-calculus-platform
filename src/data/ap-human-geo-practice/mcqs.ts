import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * 60 stimulus-based AP Human Geography MCQs modeled on the College Board
 * AP Human Geography practice exam (2025-26 CED).
 *
 * Distribution by CB unit:
 *   Unit 1 (Thinking Geographically)         6
 *   Unit 2 (Population & Migration)          9
 *   Unit 3 (Cultural Patterns & Processes)   9
 *   Unit 4 (Political Patterns & Processes)  9
 *   Unit 5 (Agriculture & Rural Land Use)    9
 *   Unit 6 (Cities & Urban Land Use)        10
 *   Unit 7 (Industrial & Economic Dev.)      8
 */
export const MCQS: MCQItem[] = [
  /* ============== UNIT 1: THINKING GEOGRAPHICALLY (6) ============== */
  {
    type: 'mcq',
    topic: 'unit-1-thinking-geographically',
    question:
      'A neighborhood pizzeria sends every order out from its one storefront kitchen and delivers only to addresses within 4 miles of that storefront.\n\nThe delivery area is best classified as which type of region?',
    options: [
      'A functional region organized around a single central node',
      'A formal region whose residents all share one measurable characteristic',
      'A perceptual region whose boundary exists mainly in residents\' minds',
      'A physical region bounded by landforms and climate zones',
    ],
    correctAnswer: 0,
    explanation:
      'A functional (nodal) region is defined by interaction with a central point, here the storefront from which every delivery goes out. A formal region would instead be defined by a trait shared across the area, such as a language or a crop, that exists independently of any hub.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-thinking-geographically',
    question:
      'A world wall map is drawn at a scale of 1:50,000,000, while a hiking map of a single county is drawn at 1:24,000.\n\nCompared with the hiking map, the world map is',
    options: [
      'a small-scale map showing less detail over a larger area',
      'a large-scale map showing less detail over a larger area',
      'a large-scale map showing more detail over a smaller area',
      'a small-scale map showing more detail of the same area',
    ],
    correctAnswer: 0,
    explanation:
      'The larger the denominator of a representative fraction, the smaller the scale, so 1:50,000,000 is a small-scale map that covers a vast area with little detail. Calling it large-scale reverses the convention; large-scale maps such as the 1:24,000 hiking map show small areas in fine detail.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-thinking-geographically',
    question:
      'Thousands of runners upload GPS-tagged routes from a fitness app, and city planners combine the routes into a heat map to decide where to build new bike lanes.\n\nThe route data are best described as',
    options: [
      'volunteered geographic information collected from the public',
      'census data gathered through a mandatory government household survey',
      'remote-sensing data captured by satellites orbiting above the city',
      'field-observation data recorded on site by trained planning staff',
    ],
    correctAnswer: 0,
    explanation:
      'Data that ordinary people create and share, such as geotagged runs, is volunteered geographic information, a growing input to GIS analysis. Remote sensing is the tempting alternative, but it means data gathered from a distance by satellites or aircraft, not GPS traces uploaded by users on the ground.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-thinking-geographically',
    question:
      '"Cultural traits diffuse outward from a hearth such that the most innovative ideas are first adopted in the largest cities and only later in smaller towns."\n— Geographer\'s description of one diffusion process\n\nThe pattern described is best characterized as',
    options: [
      'hierarchical diffusion, in which a trait moves down a ranked network of places',
      'contagious diffusion, in which a trait spreads to adjacent people by contact',
      'stimulus diffusion, in which the idea spreads but its form is modified',
      'relocation diffusion, in which migrants carry the trait to new places',
    ],
    correctAnswer: 0,
    explanation:
      'Hierarchical diffusion follows a ranking of places or people, so innovations reach the largest, best-connected cities first and later trickle down to smaller towns. Contagious diffusion would instead spread outward to nearby places regardless of their size, like a wave moving out from the hearth.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-thinking-geographically',
    question:
      'Distance decay describes the principle that',
    options: [
      'interaction between places declines as distance between them grows',
      'map projections distort shape and area more severely toward the poles',
      'the time needed to travel a fixed distance has shrunk with new technology',
      'places far apart grow more alike as communication networks expand',
    ],
    correctAnswer: 0,
    explanation:
      'Distance decay holds that the farther apart two places are, the less they interact, because the friction of distance raises the cost and effort of contact. Shrinking travel time over a fixed distance describes time-space compression, which weakens distance decay but is a different concept.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-thinking-geographically',
    question:
      'An online navigation service used by shipping firms plotting routes between ports displays its maps on a Mercator projection.\n\nThe Mercator projection suits this purpose because it',
    options: [
      'shows lines of constant compass bearing as straight lines',
      'keeps the relative sizes of landmasses accurate at all latitudes',
      'minimizes distortion of shape, area, distance, and direction at once',
      'centers the map on the North Pole for polar routes',
    ],
    correctAnswer: 0,
    explanation:
      'On a Mercator projection, rhumb lines (paths of constant compass bearing) plot as straight lines, so a navigator can read a steady heading directly off the map. The price is severe area distortion toward the poles, which is why Greenland looks about as large as Africa, and no flat map preserves shape, area, distance, and direction at once.',
  },

  /* ============== UNIT 2: POPULATION & MIGRATION (9) ============== */
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      'Population pyramid (described): A country\'s pyramid has a very wide base and sides that narrow quickly toward a small top; the 0–4 cohort is the largest, and few people are over 65. Over the past 30 years its crude death rate has fallen by about half, while its crude birth rate has stayed near 40 per 1,000.\n\nThe country is most likely in which stage of the demographic transition model?',
    options: [
      'Stage 2, with high birth rates and rapidly falling death rates',
      'Stage 1, with high birth and death rates and little natural increase',
      'Stage 3, with falling birth rates and low death rates',
      'Stage 4, with low birth and death rates and an aging population',
    ],
    correctAnswer: 0,
    explanation:
      'A very wide base with few elderly, combined with a death rate that has dropped sharply while births stay high, marks the rapid natural increase of Stage 2. Stage 3 would show birth rates already falling, which would begin to pinch the base of the pyramid.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      'Country A has an arithmetic density of 350 people per square kilometer but a physiological density of 1,800 people per square kilometer.\n\nThe difference between Country A\'s two density measures is best explained by which of the following?',
    options: [
      'Only a small fraction of the country\'s land is suitable for farming.',
      'Most residents live in a handful of large coastal cities.',
      'Most of the food its farms produce is exported abroad.',
      'The country\'s total area is large compared with its neighbors.',
    ],
    correctAnswer: 0,
    explanation:
      'Physiological density divides population by arable land only, so it greatly exceeds arithmetic density when little of the territory can be farmed, as in Egypt. Concentration in coastal cities affects where people live but not the ratio of people to farmland, which is what separates the two measures.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      '"In the late nineteenth century, most migrants moved short distances; long-distance migrants headed primarily to large cities; each migration produced a counter-flow; and women dominated short-distance migration while men dominated long-distance migration."\n— Paraphrase of E. G. Ravenstein, "The Laws of Migration," 1885\n\nRavenstein\'s "laws" most directly support which of the following claims about migration?',
    options: [
      'Nearby moves outnumber distant ones, and each stream of movers prompts a return stream.',
      'Long-distance migrants tend to settle in rural farming areas rather than in cities.',
      'Women tend to make longer moves than men, especially toward large industrial cities.',
      'Rural areas tend to gain more migrants from cities than they lose to the cities.',
    ],
    correctAnswer: 0,
    explanation:
      'Ravenstein\'s laws hold that most migrants move only short distances and that every migration current produces a counter-current. The claim that women make longer moves reverses his finding; in his data women dominated short-distance migration and men long-distance migration.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      'Between 2011 and 2020, more than five million Syrians fled the civil war by crossing into Turkey, Lebanon, Jordan, and Europe.\n\nUnder international law, these Syrians are best classified as',
    options: [
      'refugees forced across a national border by armed conflict',
      'internally displaced persons forced from their homes by the war',
      'economic migrants who left voluntarily to find better-paying work',
      'step migrants moving through a series of Syrian towns',
    ],
    correctAnswer: 0,
    explanation:
      'Refugees are people forced to flee across an international border by conflict or persecution, which describes Syrians who left during the civil war. Internally displaced persons are also forced migrants, but they remain inside their own country, so the term does not fit people who reached Turkey, Lebanon, Jordan, or Europe.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      'In 1798 Thomas Malthus argued that population grows geometrically while food supply grows only arithmetically, so famine and other checks would periodically reduce population.\n\nWhich of the following best explains why global food production kept pace with population growth through the twentieth century, contrary to Malthus\'s prediction?',
    options: [
      'Advances in agricultural technology sharply raised the yield of each acre.',
      'Famines and epidemics held world population growth well below his forecast.',
      'Farmers cleared vast new farmland while yields per acre stayed about the same.',
      'World birth rates dropped sharply beginning early in the twentieth century.',
    ],
    correctAnswer: 0,
    explanation:
      'Mechanization, high-yield seeds, synthetic fertilizer, and irrigation (the Second and Third Agricultural Revolutions) let food output grow faster than Malthus thought possible. Famines did not hold population down; world population nearly quadrupled during the twentieth century, so the gap was closed by higher yields rather than by Malthusian checks.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      'Country B has a total fertility rate of 1.3, a median age of 47, and more residents over age 65 than under age 15.\n\nThis demographic profile most likely creates which of the following challenges?',
    options: [
      'Rising pension and elder-care costs as the workforce shrinks',
      'Food shortages as population grows faster than farm output',
      'A brain drain as most young adults emigrate to find work abroad',
      'Rapid urban growth that outpaces water and sewer infrastructure',
    ],
    correctAnswer: 0,
    explanation:
      'A fertility rate far below the replacement level of about 2.1 and a median age of 47 mark an aging population, so fewer workers support a growing number of retirees, as in Japan and Italy. Problems of rapid growth, such as food shortages or overloaded infrastructure, belong to countries with high fertility, the opposite of this profile, and nothing in the data points to large-scale emigration.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      '"As economies move from agricultural through industrial to service-based economies, women\'s labor-force participation rises and family size declines."\n\nWhich of the following statistical patterns most directly supports the claim above?',
    options: [
      'Lower fertility rates in places where more women work for wages',
      'Rising fertility in countries as their service sectors expand',
      'Similar family sizes in agricultural and service-based economies',
      'More women in paid work in farm economies than in service economies',
    ],
    correctAnswer: 0,
    explanation:
      'The claim links rising female employment with smaller families, so the supporting evidence is a negative relationship: where more women work for wages, fertility is lower. Similar family sizes across agricultural and service economies would show no relationship, which contradicts the claim.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      'Between 1910 and 1970, about six million African Americans moved from the rural South to cities in the North and West.\n\nThis migration is best explained by',
    options: [
      'southern push factors like Jim Crow laws and northern pull factors like factory jobs',
      'northern push factors like crowded tenements and southern pull factors like cheap farmland',
      'a federal resettlement program that assigned southern families to jobs in northern cities',
      'chain migration of farm families toward new homesteads on the Great Plains',
    ],
    correctAnswer: 0,
    explanation:
      'The Great Migration was driven by southern push factors, including Jim Crow segregation, racial violence, and sharecropping debt, together with pull factors in northern and western cities, especially industrial jobs during the two world wars. No federal program relocated these families; the movement was voluntary and spread through networks of kin and community.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      'A guest-worker program brings young men from Country X to Country Y on 2- to 4-year construction contracts; when the contracts end, most go back to Country X.\n\nThe arrangement described above is best classified as',
    options: [
      'circular migration in which laborers return home after a period of work abroad',
      'chain migration in which early arrivals sponsor relatives to settle permanently',
      'forced migration caused by armed conflict in Country X',
      'internal migration between regions of a single country',
    ],
    correctAnswer: 0,
    explanation:
      'Temporary, contract-based moves that end with a return home are circular migration, the pattern of guest workers in the Persian Gulf states or in postwar West Germany. Chain migration involves migrants drawing relatives to join them for good, which is the opposite of the return pattern described.',
  },

  /* ============== UNIT 3: CULTURAL PATTERNS & PROCESSES (9) ============== */
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'A coffee chain founded in Seattle now operates more than 35,000 stores in more than 75 countries and adapts its menus to local tastes, for example selling matcha drinks in Japan and masala chai in India.\n\nThe chain\'s expansion best illustrates',
    options: [
      'glocalization, tailoring a global brand to local markets',
      'assimilation, as local food cultures disappear into one global menu',
      'relocation diffusion carried by Americans who have moved overseas',
      'contagious diffusion through face-to-face contact between neighbors',
    ],
    correctAnswer: 0,
    explanation:
      'Glocalization is the adaptation of a globally diffused product to local cultural preferences, exactly what the menu changes in Japan and India show. Assimilation would mean local food traditions disappearing into a single standardized menu, whereas here the chain is the one adjusting.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'Indo-European, Sino-Tibetan, Niger-Congo, and Afro-Asiatic are examples of',
    options: [
      'language families, each descended from a common ancestral language',
      'language branches within the single Indo-European family',
      'lingua francas used for trade between speakers of different languages',
      'creole languages that grew out of colonial-era pidgins',
    ],
    correctAnswer: 0,
    explanation:
      'Indo-European, Sino-Tibetan, Niger-Congo, and Afro-Asiatic are language families, the broadest grouping of languages that share a common ancestral proto-language. Branches are subdivisions within one family, such as Germanic or Romance within Indo-European, so these four cannot be branches of a single family.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'Buddhism, Christianity, and Islam are commonly classified as universalizing religions, while Hinduism and Judaism are classified as ethnic religions.\n\nThe primary distinction between universalizing and ethnic religions rests on',
    options: [
      'whether the religion actively seeks converts from all cultures worldwide',
      'whether the religion\'s sacred texts are written in a classical language',
      'whether the religion has more than one hundred million adherents',
      'whether the religion recognizes one god or many gods',
    ],
    correctAnswer: 0,
    explanation:
      'Universalizing religions such as Christianity, Islam, and Buddhism seek converts from any culture, while ethnic religions such as Hinduism and Judaism are tied to a particular people and place and rarely seek converts. The number of gods does not separate the two groups, since Judaism, Christianity, and Islam are all monotheistic yet fall on different sides of the line.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'Researchers asked residents of several U.S. states to outline the "Bible Belt" on a blank map. Most drawings covered much of the Southeast, but no two outlines shared the same boundary, and none followed state or county lines.\n\nThe Bible Belt, as described above, is best classified as',
    options: [
      'a perceptual (vernacular) region based on people\'s mental images',
      'a formal (uniform) region with a measured, clearly bounded religious trait',
      'a functional (nodal) region organized around a single church headquarters',
      'a political (administrative) region with legally defined state borders',
    ],
    correctAnswer: 0,
    explanation:
      'A perceptual or vernacular region exists in people\'s minds, so its boundaries vary from person to person, exactly as the inconsistent outlines show. A formal region would require a measured trait with a definite boundary, such as a county-level share of evangelical Protestants, rather than impressions that differ by respondent.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'Hip-hop originated in the Bronx in the 1970s. Within a few decades, artists in Lagos were rapping in Yoruba and Nigerian Pidgin over beats built from Afrobeat and highlife rhythms.\n\nThe Lagos style best illustrates which of the following?',
    options: [
      'Syncretism, blending traits from two cultures to create a distinct new form',
      'Assimilation, as local artists abandon their own culture for an American one',
      'Relocation diffusion, carried to Lagos by Bronx residents who moved there',
      'Reverse hierarchical diffusion, rising from small towns to major cities',
    ],
    correctAnswer: 0,
    explanation:
      'Syncretism is the blending of cultural traits from different sources into something new, here American hip-hop fused with Yoruba lyrics and West African rhythms. Assimilation would mean Lagos artists abandoning their own language and musical traditions, but the example shows those traditions kept and combined.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'A neighborhood in San Francisco contains a Chinese-language daily newspaper, more than 50 Cantonese restaurants, a Buddhist temple, and several traditional herbal pharmacies.\n\nThe neighborhood best illustrates',
    options: [
      'an ethnic enclave sustained by chain migration and community institutions',
      'a gentrified district where new residents have replaced the original community',
      'a placeless landscape that looks the same as neighborhoods anywhere',
      'an ethnic homeland where the group has held the territory for centuries',
    ],
    correctAnswer: 0,
    explanation:
      'An ethnic enclave is a concentration of one ethnic group in a distinct area within a larger city, kept alive by chain migration and by institutions such as newspapers, temples, and shops serving the group. Gentrification would bring in higher-income newcomers and displace those institutions, the reverse of what the description shows.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'In the late 1800s and early 1900s, French colonial authorities in West Africa required schools to teach only in French and discouraged instruction in local languages. Today French remains an official language in Senegal and Côte d\'Ivoire.\n\nThe persistence of French in these countries is best explained by',
    options: [
      'colonial rule that spread the colonizer\'s language through education and government',
      'contagious diffusion of French from neighboring trading states in North Africa',
      'the use of French as a trade language among precolonial West African merchants',
      'mass migration of French colonists, who became most of the population',
    ],
    correctAnswer: 0,
    explanation:
      'Colonialism is a major historical cause of language diffusion: French spread through colonial schools, courts, and administration, and it remained in use after independence as a language of government and education. It was not a precolonial lingua franca, and French settlers were never more than a small minority in West Africa.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'A folk-dance festival held in a small Andean town for centuries now draws tens of thousands of international tourists each year, and organizers have added a paid grandstand and corporate sponsors.\n\nThis development best illustrates',
    options: [
      'commodification, as the folk tradition is packaged for sale',
      'placelessness, as the festival loses its ties to its location',
      'isolation that protects the festival from outside influence',
      'contagious diffusion of the dance to surrounding rural villages',
    ],
    correctAnswer: 0,
    explanation:
      'Commodification turns cultural practices into goods or experiences sold in a market, as when a folk festival adds paid seating and corporate sponsors to serve tourists. The festival has not been cut off from outside influence; the change comes from greater contact with global tourism, which can both fund and alter the tradition.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'A building on Brick Lane in London was built in 1743 as a church for French Protestant (Huguenot) refugees. In the 1800s it served Methodists; in 1898 it became a synagogue for Jewish immigrants from Eastern Europe; and since 1976 it has been a mosque serving the area\'s Bangladeshi community.\n\nThe history of the building best illustrates which of the following concepts?',
    options: [
      'Sequent occupance, as successive groups leave their imprint on a place',
      'Placelessness, as the building loses any tie to its local surroundings',
      'Hierarchical diffusion of religion from larger to smaller places',
      'Ethnocentrism, as each group judges the others by its own culture',
    ],
    correctAnswer: 0,
    explanation:
      'Sequent occupance describes how successive groups occupying the same place each leave cultural imprints that layer on one another, here a single building used in turn by Huguenot, Methodist, Jewish, and Bangladeshi Muslim communities. Placelessness refers to landscapes that lose local distinctiveness and look alike everywhere, whereas this building\'s history is tightly bound to its neighborhood.',
  },

  /* ============== UNIT 4: POLITICAL PATTERNS & PROCESSES (9) ============== */
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'In 1884–85, European powers met at the Berlin Conference and divided the African continent into colonial territories whose boundaries paid little attention to existing ethnic, linguistic, or religious distributions.\n\nThe long-term political consequences of the boundaries drawn at the Berlin Conference most directly include which of the following?',
    options: [
      'Civil wars and secession movements in states that grouped rival ethnic groups',
      'A sharp fall in trade between African states after independence',
      'A federation uniting the newly independent states by 1970',
      'Redrawing of borders to match ethnic homelands at independence',
    ],
    correctAnswer: 0,
    explanation:
      'Superimposed colonial boundaries split some ethnic groups across states and bundled rival groups within one, fueling civil wars, secessionist movements, and weak national identity after independence. African states did not redraw their borders along ethnic lines; in 1964 the Organization of African Unity committed its members to keep the inherited colonial boundaries.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'The United Kingdom has devolved significant legislative authority to the Scottish Parliament, the Welsh Senedd, and the Northern Ireland Assembly while retaining overall sovereignty in Westminster.\n\nThe arrangement described above best illustrates',
    options: [
      'devolution of power within a unitary state',
      'a federal system in which devolved units hold equal sovereignty',
      'a confederation of four independent sovereign countries',
      'centralization that strips power from regional governments',
    ],
    correctAnswer: 0,
    explanation:
      'The UK is a unitary state in which Parliament at Westminster has delegated, or devolved, powers to Scotland, Wales, and Northern Ireland but could legally alter or reclaim them. In a federal system, by contrast, the constitution guarantees subnational units their own powers, which the devolved bodies lack.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'Map (described): For about 2,000 kilometers, the boundary between the United States and Canada runs as a straight east-west line along 49°N.\n\nThis section of the boundary is best classified as',
    options: [
      'a geometric boundary that follows a line of latitude',
      'a physical boundary following a mountain range or river',
      'a relic boundary that no longer has any political function',
      'a consequent boundary dividing ethnic groups',
    ],
    correctAnswer: 0,
    explanation:
      'A boundary drawn as a straight line or along a parallel of latitude, without regard to physical or cultural features, is geometric. It is not a relic boundary, since it still functions as an active international border.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'In 1648, European states signed the Peace of Westphalia, which ended the Thirty Years\' War and established the principle of sovereignty over a defined territory and noninterference in the internal affairs of other states.\n\nThe Peace of Westphalia is best understood as',
    options: [
      'the starting point of the modern system of independent self-ruling states',
      'the creation of a single supranational government over all European states',
      'the first settlement to draw Europe\'s borders along ethnic and national lines',
      'the peace settlement that restored a balance of power after Napoleon\'s defeat',
    ],
    correctAnswer: 0,
    explanation:
      'The Peace of Westphalia is the conventional starting point of the modern state system, in which each state holds sovereignty over its territory and others do not interfere in its internal affairs. It did not draw borders along ethnic lines; many of its states ruled several peoples, and national self-determination became a guiding principle only after World War I.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'A state whose territory includes a long, narrow corridor extending outward from its main body, as Namibia\'s Caprivi Strip does, is best described as a(n)',
    options: [
      'prorupted state',
      'fragmented state',
      'perforated state',
      'elongated state',
    ],
    correctAnswer: 0,
    explanation:
      'A prorupted state is mostly compact but has a long arm of territory extending from its core, such as Namibia\'s Caprivi Strip (renamed the Zambezi Region in 2013) or Thailand\'s southern peninsula. An elongated state such as Chile is long and narrow throughout, not a compact core with a single extension.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'Data (described): A state has five equal-population congressional districts, and Party A wins about 50 percent of the statewide vote. After redistricting, Party A\'s voters make up 85 percent of District 1 but only 41 percent of each of the other four districts.\n\nThe way District 1 was drawn best illustrates',
    options: [
      'packing, concentrating one party\'s voters into a single district',
      'cracking, splitting one party\'s voters thinly across many districts',
      'reapportionment, shifting House seats among states after the census',
      'majority-minority districting required by the Voting Rights Act',
    ],
    correctAnswer: 0,
    explanation:
      'Packing crowds the opposing party\'s voters into as few districts as possible so their extra votes are wasted, which is why Party A wins District 1 by a landslide but only one of five seats despite about half the statewide vote. Cracking describes the other four districts, where Party A\'s voters are spread thinly enough to fall short everywhere.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'In 2014 Russia annexed Crimea, a region of Ukraine with an ethnic-Russian majority, after a referendum that the UN General Assembly declared invalid.\n\nRussia\'s justification of the annexation as protecting ethnic Russians best illustrates',
    options: [
      'irredentism, claiming land inhabited by ethnic kin abroad',
      'devolution, transferring power to an ethnic region within a state',
      'decolonization, a colony gaining independence from its ruler',
      'supranationalism, pooling sovereignty with neighboring states',
    ],
    correctAnswer: 0,
    explanation:
      'Irredentism is a state\'s claim to territory in a neighboring state because people of its own ethnicity live there, the rationale Russia gave for annexing Crimea. Devolution would be a voluntary transfer of power within Ukraine, not the seizure of a region by another state.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'The European Union, the African Union, the United Nations, and ASEAN are all examples of',
    options: [
      'supranational organizations of states that cooperate toward shared goals',
      'federal states composed of semi-autonomous provinces',
      'confederations whose members have given up their own armies',
      'multinational states that contain several distinct nations',
    ],
    correctAnswer: 0,
    explanation:
      'Supranational organizations are alliances of three or more states that cooperate on economic, political, or security goals, sometimes yielding part of their sovereignty, as EU members do on trade. A multinational state is a single country containing several nations, not an association of separate countries.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'Map (described): Uzbekistan is a landlocked country in Central Asia bordered by five states, none of which has a coastline on the open ocean.\n\nUzbekistan\'s location most directly creates which of the following challenges?',
    options: [
      'Costly exports that must cross foreign territory to reach a seaport',
      'Exposure to naval blockades by distant maritime powers',
      'Frequent boundary disputes over control of offshore fishing zones',
      'Population crowding along a narrow coastal plain',
    ],
    correctAnswer: 0,
    explanation:
      'A landlocked state must ship goods across neighbors\' territory to reach the sea, so it depends on transit agreements and pays higher transport costs; Uzbekistan is doubly landlocked, so its seaborne trade must cross at least two borders. Offshore fishing zones and coastal crowding presuppose a coastline it does not have.',
  },

  /* ============== UNIT 5: AGRICULTURE & RURAL LAND USE (9) ============== */
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      'Shifting cultivation using slash-and-burn methods is most commonly practiced in',
    options: [
      'tropical rainforests, where soils lose fertility after a few harvests',
      'temperate grasslands, where deep soils need periodic burning to stay fertile',
      'Mediterranean climates, where farmers clear hillsides for olive groves',
      'semiarid steppes, where herders move seasonally with their livestock',
    ],
    correctAnswer: 0,
    explanation:
      'Slash-and-burn (swidden) farming dominates in tropical rainforests, where heavy rain leaches nutrients and the ash from burned vegetation fertilizes a plot for only a few years before farmers move on. Temperate grasslands have deep, fertile soils that support permanent commercial grain farming instead, and seasonal movement with herds is pastoral nomadism, not shifting cultivation.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      '"As distance from the central market increases, land-extensive uses such as livestock ranching replace land-intensive uses such as dairying and market gardening."\n— Paraphrase of an early-19th-century agricultural land-use model\n\nThis model is most closely associated with',
    options: [
      'von Thünen',
      'Christaller',
      'Ravenstein',
      'Weber',
    ],
    correctAnswer: 0,
    explanation:
      'Johann Heinrich von Thünen\'s 1826 model arranges agricultural activities in rings around a market according to transportation costs and the perishability and land intensity of products. Christaller\'s central place theory also involves distance to markets, but it explains the spacing and hierarchy of settlements, not rural land use.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      'The Green Revolution of the mid-20th century introduced high-yielding varieties of wheat, rice, and maize, along with chemical fertilizers, pesticides, and irrigation.\n\nA significant criticism of the Green Revolution\'s impact in developing countries is that it',
    options: [
      'raised yields but favored farmers able to afford costly inputs',
      'raised yields but needed less water and fertilizer than older varieties',
      'raised yields mostly for export crops such as coffee and cotton',
      'spread mainly through sub-Saharan Africa rather than Asia',
    ],
    correctAnswer: 0,
    explanation:
      'Green Revolution seeds raised grain output dramatically in South Asia and Mexico, but they required fertilizer, pesticides, and irrigation that wealthier farmers could more easily afford, widening rural inequality. The new varieties were staple grains that needed more water and fertilizer, not less, and they had little impact in sub-Saharan Africa.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      'Rural settlement (described): Farmhouses stand side by side in a small village, and each morning farmers walk out to work strips of land in the open fields that surround it.\n\nThis settlement pattern is best described as',
    options: [
      'clustered, with homes grouped close together',
      'dispersed, with each farmhouse standing on its own fields',
      'linear, with homes strung along a road, river, or canal',
      'township and range, with homes on square survey lots',
    ],
    correctAnswer: 0,
    explanation:
      'In a clustered (nucleated) settlement, farm families live together in a village and travel out to their fields, as in the open-field villages of medieval Europe. In a dispersed pattern, by contrast, each family lives on its own farmstead amid its fields, as on the rectangular farms of the U.S. Midwest.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      'Between 1990 and 2020, soybean farming for export expanded across Brazil\'s Cerrado, a tropical savanna, clearing millions of hectares of native vegetation.\n\nThis expansion is best understood as an example of',
    options: [
      'commercial agriculture converting natural ecosystems into cropland',
      'subsistence farming by Indigenous families clearing small plots',
      'intensive urban agriculture supplying nearby Brazilian cities',
      'a Green Revolution program bringing high-yield rice to smallholders',
    ],
    correctAnswer: 0,
    explanation:
      'Large export-oriented soybean farms are commercial agriculture, and their spread into the Cerrado converts native savanna into cropland, with losses in biodiversity and stored carbon. Subsistence farmers clear small plots to feed their own households, not millions of hectares to supply world markets.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      'Vertical farms, hydroponic warehouses, and rooftop greenhouses in large cities best represent which of the following?',
    options: [
      'Urban agriculture that shortens the distance from farm to consumer',
      'Subsistence farming that has replaced commercial food supply in cities',
      'Plantation agriculture producing cash crops for export markets',
      'Extensive agriculture that requires large areas of cheap land',
    ],
    correctAnswer: 0,
    explanation:
      'Vertical farms, hydroponics, and rooftop greenhouses are forms of urban agriculture that grow food close to city consumers, cutting transport distance and making intensive use of small spaces. They are commercial ventures that supplement rather than replace the conventional food supply, so they are not subsistence farming.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      '"Genetically modified (GM) crops engineered for herbicide resistance and insect resistance accounted for more than 90 percent of soybean and cotton acreage in the United States by 2020."\n\nWhich of the following is a concern most often raised by critics of these crops?',
    options: [
      'Weeds that evolve to survive years of heavy spraying',
      'Lower yields than conventional crops in nearly every growing season',
      'A requirement that farmers save and replant their own seed each year',
      'The inability of GM varieties to grow outside tropical climates',
    ],
    correctAnswer: 0,
    explanation:
      'Critics point to weeds and insects evolving resistance after years of reliance on the same traits and to a few corporations controlling patented seed. Seed patents are the reverse of a save-and-replant requirement, since licensing agreements generally bar farmers from replanting saved GM seed.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      'The Second Agricultural Revolution, which accompanied the Industrial Revolution in Europe and North America, is most closely associated with',
    options: [
      'new machinery and crop rotation that freed labor for factory work',
      'the first domestication of plants and animals in several hearths',
      'high-yield seed varieties spread to South Asia and Latin America',
      'genetically engineered seeds planted using satellite-guided tractors',
    ],
    correctAnswer: 0,
    explanation:
      'The Second Agricultural Revolution brought mechanization, better crop rotation, and improved fertilizers and breeding, raising output per worker and freeing rural labor to move into industrial cities. High-yield seed varieties spreading to Asia and Latin America belong to the Third Agricultural Revolution, the Green Revolution of the mid-twentieth century.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      'Map (described): A choropleth map of the contiguous United States shades each county by the share of its farmland planted in corn and soybeans. Counties in Iowa, Illinois, Indiana, Minnesota, and Nebraska are the most heavily shaded.\n\nThe pattern shown most directly reflects',
    options: [
      'regional specialization in commercial grain and feed production',
      'subsistence farming of corn for household consumption',
      'plantation agriculture worked by a large hired labor force',
      'extensive livestock ranching on dry, unirrigated grassland',
    ],
    correctAnswer: 0,
    explanation:
      'The Corn Belt is a region of commercial agricultural specialization, where favorable climate, deep prairie soils, and access to markets support intensive corn and soybean production for livestock feed, ethanol, and export. These are large mechanized family and corporate farms selling into national and global markets, not subsistence plots or plantations.',
  },

  /* ============== UNIT 6: CITIES & URBAN LAND USE (10) ============== */
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'Data table (described): The four largest cities in Country Z have populations of 8.0 million, 4.3 million, 2.7 million, and 2.0 million.\n\nThe city-size distribution in Country Z most closely follows',
    options: [
      'the rank-size rule',
      'the primate city rule',
      'Christaller\'s central place theory',
      'the gravity model',
    ],
    correctAnswer: 0,
    explanation:
      'Under the rank-size rule, the nth-largest city has about 1/n the population of the largest, so 8.0, 4.3, 2.7, and 2.0 million sit close to the expected 8.0, 4.0, 2.7, and 2.0. Under the primate city rule, the largest city would be more than twice the size of the second-largest and would dwarf the rest of the urban system, but here it is less than twice the size of the next city.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      '"A primate city is so disproportionately large and economically dominant that no other city in the country approaches its population or economic influence."\n\nWhich of the following pairs is the best example of a primate city and its country?',
    options: [
      'Buenos Aires and Argentina',
      'New York City and the United States',
      'Mumbai and India',
      'Berlin and Germany',
    ],
    correctAnswer: 0,
    explanation:
      'Greater Buenos Aires holds roughly a third of Argentina\'s population and is many times larger than the second city, Córdoba, making it a textbook primate city. New York is the largest U.S. city, but Los Angeles, Chicago, and other metropolitan areas are large enough that the U.S. urban system is closer to the rank-size pattern.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'Walter Christaller\'s central place theory predicts that',
    options: [
      'a few large centers will supply high-order goods to wide market areas',
      'every central place will grow to the same size over time',
      'the largest settlements will be packed closest to one another',
      'small towns will provide the most specialized goods and services',
    ],
    correctAnswer: 0,
    explanation:
      'Central place theory predicts a hierarchy: many small settlements provide low-order goods with small thresholds and ranges, while fewer, larger, more widely spaced places provide high-order goods to large market areas. Specialized goods need a large threshold population, so they are found in large central places, not small towns.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'Model (described): A diagram of a North American city places the CBD at the center, with a wedge of high-income housing extending outward along a boulevard and a wedge of industry and low-income housing extending outward along a rail line.\n\nThe diagram best matches which urban model?',
    options: [
      'The Hoyt sector model',
      'The Burgess concentric zone model',
      'The Harris and Ullman multiple-nuclei model',
      'The galactic city (peripheral) model',
    ],
    correctAnswer: 0,
    explanation:
      'Homer Hoyt\'s sector model arranges land uses in wedges that radiate from the CBD along transportation routes, so high-income housing follows a desirable corridor and industry follows the rail line. The Burgess concentric zone model would arrange the same uses in rings around the CBD rather than in wedges.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'In many Latin American cities, lower-income residents live in unplanned squatter settlements on the urban periphery, while wealthier residents live near the city core and along a commercial corridor leading out from it.\n\nThe spatial pattern described above is best modeled by which of the following?',
    options: [
      'The Griffin-Ford model',
      'The Burgess concentric zone model',
      'The McGee Southeast Asian city model',
      'The de Blij African city model',
    ],
    correctAnswer: 0,
    explanation:
      'The Griffin-Ford model describes Latin American cities in which wealth is concentrated near the center and along an elite spine, while the poorest residents live in squatter settlements at the edge. The Burgess concentric zone model predicts the opposite gradient, with income rising toward the outer commuter zone.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'Between 2000 and 2020, average rents in a U.S. central-city neighborhood tripled, many longtime residents moved out, and coffee shops, art galleries, and condominiums replaced older businesses and rental units.\n\nThe process described above is best identified as',
    options: [
      'gentrification driven by reinvestment and higher-income newcomers',
      'suburbanization pulling middle-class families out of the central city',
      'filtering, as housing passes down to successively poorer households',
      'urban renewal, with government clearing blighted blocks for public housing',
    ],
    correctAnswer: 0,
    explanation:
      'Gentrification is the reinvestment in and renovation of older central-city neighborhoods by higher-income newcomers, which raises rents and displaces longtime residents. Filtering runs the other way: housing passes down to lower-income households as the original occupants move out and the neighborhood declines.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'Rapid suburban growth in the United States after World War II is most directly associated with which of the following federal policies?',
    options: [
      'Federally insured home mortgages and interstate highway construction',
      'Urban renewal grants that rebuilt downtown shopping districts',
      'Federal funding to expand streetcar and commuter rail lines',
      'Tax credits for restoring historic downtown commercial buildings',
    ],
    correctAnswer: 0,
    explanation:
      'FHA and VA mortgage insurance made it cheap to buy new single-family homes, and the Federal-Aid Highway Act of 1956 funded the interstates that let commuters live far from work, together fueling postwar suburbanization. Rail transit would have concentrated growth along fixed lines, and postwar federal transportation money went overwhelmingly to highways instead.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'A region in which a series of interconnected metropolitan areas form a continuously developed urban corridor, such as the area extending from Boston through New York and Philadelphia to Washington, D.C., is best termed a(n)',
    options: [
      'megalopolis',
      'edge city',
      'primate city',
      'world city',
    ],
    correctAnswer: 0,
    explanation:
      'A megalopolis is a chain of metropolitan areas that have grown together into one continuous urbanized corridor; Jean Gottmann coined the term in 1961 for the Boston-to-Washington region. An edge city is a single suburban node of offices and retail within one metropolitan area, far smaller in scale.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      '"New Urbanism" planning principles include mixed-use zoning, walkable street grids, transit-oriented development, and traditional neighborhood design.\n\nThese principles are best understood as a response to which of the following postwar U.S. trends?',
    options: [
      'Car-dependent, low-density sprawl separating homes from shops',
      'Gentrification that displaced longtime inner-city residents',
      'Deindustrialization that left vacant factories in central cities',
      'Rapid construction of high-rise public housing in downtown areas',
    ],
    correctAnswer: 0,
    explanation:
      'New Urbanism promotes compact, walkable, mixed-use neighborhoods as an alternative to the postwar pattern of single-use zoning, automobile dependence, and low-density sprawl. Gentrification and deindustrialization are real urban problems, but New Urbanism\'s design principles target sprawl and car dependence rather than displacement or vacant factories.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'In 1900, about 15 percent of the world\'s people lived in urban areas; by 2020, about 56 percent did.\n\nWhich of the following has contributed most to this trend in developing countries since 1950?',
    options: [
      'Rural-to-urban migration driven by push and pull factors',
      'Counterurbanization as residents leave big cities for the countryside',
      'Government programs that resettled urban families on new farmland',
      'Higher birth rates in cities than in the surrounding rural areas',
    ],
    correctAnswer: 0,
    explanation:
      'The share of people living in cities rises mainly when people move from the countryside to cities, pushed by rural poverty and land shortages and pulled by urban jobs and services. Birth rates are generally higher in rural areas than in cities, so natural increase alone would not raise the urban share, and counterurbanization would lower it.',
  },

  /* ============== UNIT 7: INDUSTRIAL & ECONOMIC DEVELOPMENT (8) ============== */
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'Walt Rostow\'s "stages of economic growth" model proposes that countries pass through five stages from a traditional society to an "age of high mass consumption."\n\nA significant critique of Rostow\'s model is that it',
    options: [
      'assumes all nations follow one Western path to development',
      'predicts that poor countries will stay poor indefinitely',
      'treats colonial exploitation as the main cause of poverty',
      'applies only to societies that were never colonized by Europe',
    ],
    correctAnswer: 0,
    explanation:
      'Critics argue that Rostow\'s model treats the Western European and North American experience as a universal, linear path and ignores how colonialism and global trade relationships constrain poorer countries. Treating colonial exploitation as the cause of poverty is the dependency and world-system view, the very perspective critics say Rostow overlooks.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'Immanuel Wallerstein\'s world-system theory divides countries into core, semi-periphery, and periphery on the basis of',
    options: [
      'their role in the global division of labor and production',
      'their stage in Rostow\'s model of economic growth',
      'their population size and rate of natural increase',
      'their latitude and distance from former colonial powers',
    ],
    correctAnswer: 0,
    explanation:
      'Wallerstein classified countries by their function in the capitalist world economy: core states specialize in high-skill, high-profit production, the periphery supplies raw materials and low-wage labor, and the semi-periphery mixes both. Rostow\'s stages describe a linear path of development within each country, which is a different model.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'The Human Development Index (HDI) combines which of the following indicators?',
    options: [
      'Life expectancy, years of schooling, and income per person',
      'Literacy rate, infant mortality, and gross domestic product',
      'Fertility rate, life expectancy, and energy use per person',
      'Income per person, unemployment, and access to clean water',
    ],
    correctAnswer: 0,
    explanation:
      'The HDI combines three dimensions: a long and healthy life (life expectancy at birth), knowledge (mean and expected years of schooling), and standard of living (gross national income per capita). Infant mortality, fertility, and energy use are useful development indicators, but none is a component of the HDI.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'Maquiladoras along the U.S.–Mexico border are foreign-owned factories that import components duty-free, assemble or manufacture goods using Mexican labor, and export the finished products to the United States.\n\nThe maquiladora system is best understood as an example of',
    options: [
      'outsourcing production to a lower-wage country near a major market',
      'import substitution, protecting new domestic industries with tariffs',
      'agglomeration of an industry\'s assembly plants in one global city',
      'Fordist mass production run by state-owned Mexican firms',
    ],
    correctAnswer: 0,
    explanation:
      'Maquiladoras let foreign firms split production geographically, shipping components to Mexico for assembly by lower-wage workers and selling finished goods in the nearby U.S. market, a core example of outsourcing and the new international division of labor. Import substitution is the opposite strategy, using tariffs to shield domestic industries rather than inviting duty-free foreign assembly for export.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'Alfred Weber\'s least cost theory of industrial location identifies three primary cost factors that influence where a manufacturer chooses to locate.\n\nThose three factors are best identified as',
    options: [
      'transportation, labor, and agglomeration',
      'land rent, climate, and soil fertility',
      'threshold, range, and market area',
      'market size, distance, and population',
    ],
    correctAnswer: 0,
    explanation:
      'Weber\'s least cost theory holds that a manufacturer chooses the site that minimizes transportation and labor costs, adjusted for the savings from agglomeration with related firms. Threshold, range, and market area belong to Christaller\'s central place theory, which explains the location of services rather than factories.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'Microloans of about \\$50 to \\$500 made to low-income borrowers who lack collateral, many of them women, are most directly associated with',
    options: [
      'bottom-up development that helps people start small businesses',
      'structural adjustment imposed by the IMF and World Bank',
      'free-trade agreements that lower tariffs among wealthy economies',
      'import substitution policies that protect large domestic factories',
    ],
    correctAnswer: 0,
    explanation:
      'Microcredit, pioneered by Bangladesh\'s Grameen Bank, is a bottom-up strategy that lends small sums to poor entrepreneurs, often women, so they can start or expand small businesses. Structural adjustment programs are top-down conditions attached to IMF and World Bank loans to national governments, the opposite approach.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'A "post-Fordist" production system is best characterized by',
    options: [
      'flexible, just-in-time production spread across global supply chains',
      'mass production of standardized goods on a single assembly line',
      'handcraft production by skilled artisans working without machinery',
      'state-directed output targets set in a national five-year plan',
    ],
    correctAnswer: 0,
    explanation:
      'Post-Fordism replaced rigid mass production with flexible, smaller-batch production, just-in-time inventory, and supply chains spread across many countries. Mass production of standardized goods on a single assembly line is Fordism itself, the system post-Fordism moved away from.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'The Gender Inequality Index (GII) measures gender-based disadvantages across reproductive health, empowerment, and labor-market participation.\n\nA country with a high GII relative to its peers most likely shows which of the following patterns?',
    options: [
      'High maternal mortality and few women in parliament or paid work',
      'High female schooling and universal access to reproductive care',
      'Equal shares of men and women in parliament and the labor force',
      'A high Human Development Index and a low adolescent birth rate',
    ],
    correctAnswer: 0,
    explanation:
      'A high GII signals large gaps between women and men, reflected in high maternal mortality and adolescent birth rates, few parliamentary seats held by women, and low female educational attainment and labor-force participation. Universal reproductive care and high female schooling describe a low-GII, more equal country.',
  },
]
