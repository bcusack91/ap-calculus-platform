#!/usr/bin/env node
/**
 * Generate competitive question banks, practice tests, and FRQ banks
 * for all 12 new AP courses.
 * Run: node scripts/generate-remaining-content.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

function e(s) { return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") }

/* ═══════════════════════════════════════════════════════════
   Course definitions
   ═══════════════════════════════════════════════════════════ */

const courses = [
  {
    key: 'human-geography',
    name: 'AP Human Geography',
    short: 'HumanGeo',
    slug: 'ap-human-geo',
    coursePageSlug: 'ap-human-geography',
    prefix: 'hg',
    accent: ['sky', 'blue'],
    frqType: 'long-short',
    frqTime: 75,
    frqLongPts: '7',
    frqShortPts: '3',
    frqLongDesc: 'Multi-part questions requiring spatial analysis, data interpretation, and application of geographic concepts',
    frqShortDesc: 'Focused questions on specific geographic processes, patterns, and models',
    frqStructure: ['3 free-response questions', '1 question with 7 parts', '2 questions with 3 parts each', 'Total: ~23 points in 75 minutes', 'No calculator needed'],
    frqTested: ['Analyzing geographic data and maps', 'Explaining spatial patterns and processes', 'Applying models to real-world scenarios', 'Comparing regions and scales of analysis'],
    frqTips: ['Reference specific geographic concepts by name', 'Use spatial vocabulary: distribution, pattern, scale, diffusion', 'For map questions, describe what the data shows before analyzing', 'Connect local examples to global patterns', 'Define terms before applying them to scenarios', 'Draw on multiple units when possible'],
    practiceDesc: 'Timed practice exam covering population, culture, political geography, agriculture, urbanization, and industrialization.',
    practiceSections: [{ id: 'mc', name: 'Multiple Choice', desc: 'AP-style MC covering all 7 units of Human Geography.', count: 30, time: 35 }],
    aboutExam: [
      { heading: 'Exam Structure', items: ['Section I: 60 MC questions (60 min)', 'Section II: 3 FRQs (75 min)', 'Total: 2 hours 15 minutes'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 50% of score', 'FRQ: 50% of score', 'Maps and data analysis included'] },
    ],
    topics: [
      { slug: 'hg-intro-geography', name: 'Introduction to Geography' },
      { slug: 'hg-spatial-concepts', name: 'Spatial Concepts & Data' },
      { slug: 'hg-population-distribution', name: 'Population Distribution' },
      { slug: 'hg-population-growth', name: 'Population Growth' },
      { slug: 'hg-migration', name: 'Migration Patterns' },
      { slug: 'hg-culture-diffusion', name: 'Cultural Diffusion' },
      { slug: 'hg-language-religion', name: 'Language & Religion' },
      { slug: 'hg-ethnicity-identity', name: 'Ethnicity & Identity' },
      { slug: 'hg-political-geography', name: 'Political Geography' },
      { slug: 'hg-political-power', name: 'Political Power' },
      { slug: 'hg-agricultural-origins', name: 'Agricultural Origins' },
      { slug: 'hg-agricultural-practices', name: 'Agricultural Practices' },
      { slug: 'hg-urbanization', name: 'Urbanization' },
      { slug: 'hg-urban-challenges', name: 'Urban Challenges' },
      { slug: 'hg-industrialization', name: 'Industrialization' },
      { slug: 'hg-globalization-trade', name: 'Globalization & Trade' },
    ],
    questions: [
      ['The ecumene refers to:', ['Uninhabited wilderness', 'The portion of Earth permanently inhabited by humans', 'Agricultural zones', 'Urban areas only'], 1, 'The ecumene is the permanently inhabited portion of Earth\'s surface.', 'easy'],
      ['Which is an example of a functional region?', ['The Sahara Desert', 'A pizza delivery area', 'The Great Plains', 'The Bible Belt'], 1, 'A pizza delivery area is organized around a central node, making it a functional region.', 'easy'],
      ['Arithmetic density is calculated by dividing:', ['Population by arable land', 'Total population by total land area', 'Farmers by farmland', 'Urban dwellers by city area'], 1, 'Arithmetic density is total population divided by total land area.', 'easy'],
      ['Distance decay means interaction between places:', ['Increases with distance', 'Decreases as distance increases', 'Is not affected by distance', 'Only occurs between neighbors'], 1, 'Distance decay is the principle that interaction diminishes with increasing distance.', 'easy'],
      ['Expansion diffusion differs from relocation diffusion because:', ['Ideas spread while remaining strong at origin', 'People physically move', 'Ideas weaken at origin', 'It only applies to religion'], 0, 'In expansion diffusion, ideas spread outward while remaining strong at the point of origin.', 'easy'],
      ['Hierarchical diffusion spreads from:', ['Rural to urban areas', 'Larger to smaller places or from authority figures', 'Person to person through direct contact', 'One country to another'], 1, 'Hierarchical diffusion follows a hierarchy from important to less important nodes.', 'easy'],
      ['A wide-based population pyramid indicates:', ['An aging population', 'A youthful population with high birth rates', 'Zero population growth', 'Population decline'], 1, 'A wide base means many young people — typical of high birth rate countries.', 'easy'],
      ['The dependency ratio measures:', ['Immigration rates', 'Dependents relative to working-age population', 'Total population', 'Economic output'], 1, 'The dependency ratio compares non-working dependents to working-age adults.', 'easy'],
      ['Ravenstein\'s laws of migration state that:', ['Most migrants move long distances', 'Most migrants move short distances', 'Only men migrate', 'Migration follows no pattern'], 1, 'Ravenstein found that most migration occurs over short distances.', 'medium'],
      ['Chain migration refers to:', ['Migration along a transportation route', 'Migration following family or community connections', 'Forced migration of prisoners', 'Seasonal agricultural work'], 1, 'Chain migration occurs when migrants follow earlier settlers from the same community.', 'medium'],
      ['The Demographic Transition Model suggests that:', ['Birth and death rates remain constant', 'Countries pass through stages from high to low birth/death rates', 'Population always grows', 'Only rich countries experience population change'], 1, 'The DTM describes the transition from high birth/death rates to low rates as societies develop.', 'medium'],
      ['A lingua franca is:', ['A dead language', 'A common language used for trade between different groups', 'The official language of France', 'A creole language'], 1, 'A lingua franca is a common language used for communication between groups with different native languages.', 'medium'],
      ['Centripetal forces in a state:', ['Pull it apart', 'Unify and strengthen it', 'Cause boundary disputes', 'Lead to devolution'], 1, 'Centripetal forces (shared language, religion, nationalism) unify a state.', 'medium'],
      ['The Green Revolution involved:', ['Environmental activism', 'Introduction of high-yield crop varieties and modern farming techniques', 'Organic farming movement', 'Reforestation programs'], 1, 'The Green Revolution brought high-yield seeds, irrigation, and chemicals to increase agricultural output.', 'medium'],
      ['A primate city is one that:', ['Has zoos and wildlife', 'Is at least twice as large as the next largest city in the country', 'Is the oldest city in a country', 'Has the most industry'], 1, 'A primate city dominates a country\'s urban hierarchy, being disproportionately larger than other cities.', 'medium'],
      ['The Von Thünen model predicts:', ['Industrial location based on transportation costs', 'Agricultural land use patterns based on distance from market', 'Urban growth patterns', 'Migration flows between cities'], 1, 'Von Thünen\'s model shows that perishable/heavy crops are grown nearest the market, with land use varying by transport cost.', 'medium'],
      ['Shatterbelt regions are:', ['Unified political zones', 'Areas of political fragmentation caught between competing powers', 'Coastal trading zones', 'Agricultural heartlands'], 1, 'Shatterbelt regions are politically fragmented zones caught between rival geopolitical forces.', 'hard'],
      ['The rank-size rule states that the nth-largest city will be:', ['Equal in size to the largest city', 'The largest city multiplied by n', '1/n the population of the largest city', 'Randomly distributed'], 2, 'The rank-size rule predicts the nth-largest city will have 1/n the population of the largest.', 'hard'],
      ['Gerrymandering involves:', ['Redrawing district boundaries for political advantage', 'Creating new states', 'Dissolving political boundaries', 'Federal redistribution of resources'], 0, 'Gerrymandering manipulates electoral district boundaries to favor a political party.', 'hard'],
      ['Wallerstein\'s World Systems Theory divides the world into:', ['Developed and developing countries', 'Core, semi-periphery, and periphery', 'North and South hemispheres', 'Democratic and authoritarian states'], 1, 'World Systems Theory categorizes countries as core (dominant), semi-periphery, and periphery (dependent).', 'hard'],
    ],
    frqs: [
      {
        id: 'hg-long-1', type: 'long', title: 'Population & Migration Analysis',
        prompt: 'Country X has experienced rapid urbanization over the past 50 years. Its population has shifted from 70% rural to 25% rural. The capital city has become a primate city with 12 million residents, while the second-largest city has only 2 million.',
        totalPoints: 7, time: '~25 minutes', calc: false,
        parts: [
          { label: '(a)', prompt: 'Define primate city and explain how Country X\'s capital qualifies as one.', pts: 1, rubric: [{ pts: 1, desc: 'Defines primate city as a city at least twice as large as the second city, with Country X\'s capital being 6 times larger', kw: ['primate city', 'twice', 'disproportionately', '6 times', 'largest'] }], sample: 'A primate city is a city that is at least twice the size of the next largest city in its country. Country X\'s capital (12 million) is six times larger than the second city (2 million), clearly qualifying it as a primate city. This dominance in the urban hierarchy means the capital likely dominates culturally, economically, and politically.' },
          { label: '(b)', prompt: 'Identify TWO pull factors that likely contributed to rural-to-urban migration in Country X.', pts: 2, rubric: [{ pts: 1, desc: 'Identifies one pull factor such as employment opportunities or better services', kw: ['employment', 'jobs', 'economic opportunity', 'services', 'education', 'healthcare'] }, { pts: 1, desc: 'Identifies a second pull factor', kw: ['infrastructure', 'wages', 'entertainment', 'social mobility', 'amenities'] }], sample: 'Two pull factors include: (1) greater employment opportunities in urban industries and services compared to subsistence farming, and (2) access to better educational institutions and healthcare facilities that are concentrated in cities.' },
          { label: '(c)', prompt: 'Explain ONE negative consequence of rapid urbanization for Country X.', pts: 2, rubric: [{ pts: 1, desc: 'Identifies a negative consequence such as squatter settlements, traffic, or pollution', kw: ['squatter', 'slum', 'shantytown', 'pollution', 'traffic', 'congestion', 'overcrowding'] }, { pts: 1, desc: 'Explains the consequence in geographic context', kw: ['infrastructure', 'services', 'strain', 'housing', 'outpace', 'insufficient', 'demand'] }], sample: 'Rapid urbanization often leads to the growth of squatter settlements (slums) on the outskirts of the primate city. As migration outpaces the city\'s ability to provide adequate housing and infrastructure, informal settlements emerge where residents lack access to clean water, sanitation, and public services.' },
          { label: '(d)', prompt: 'Explain how the Demographic Transition Model relates to Country X\'s urbanization pattern.', pts: 2, rubric: [{ pts: 1, desc: 'Connects DTM stages to urbanization', kw: ['demographic transition', 'stage', 'death rate', 'birth rate', 'industrialization'] }, { pts: 1, desc: 'Explains how declining death rates and eventual declining birth rates relate to urban growth', kw: ['decline', 'growth', 'natural increase', 'healthcare', 'modernization'] }], sample: 'As Country X moved from Stage 2 to Stage 3 of the DTM, death rates declined due to improved healthcare and sanitation while birth rates remained high, causing rapid population growth. This natural increase, combined with rural-to-urban migration driven by industrialization, fueled the massive urbanization. As the country continues through Stage 3, birth rates are also declining as urban populations access education and family planning.' },
        ],
      },
      {
        id: 'hg-long-2', type: 'long', title: 'Agricultural Change & Globalization',
        prompt: 'Region Y has transitioned from subsistence agriculture to commercial farming over the past 30 years, largely due to the influence of transnational corporations (TNCs) investing in export crop production.',
        totalPoints: 7, time: '~25 minutes', calc: false,
        parts: [
          { label: '(a)', prompt: 'Define subsistence agriculture and explain how it differs from commercial agriculture.', pts: 1, rubric: [{ pts: 1, desc: 'Defines subsistence as farming primarily for family consumption vs commercial farming for profit/sale', kw: ['subsistence', 'family', 'consumption', 'commercial', 'profit', 'sale', 'market'] }], sample: 'Subsistence agriculture is farming primarily to feed the farmer\'s family, with little surplus for sale. Commercial agriculture produces crops for profit and sale in markets, often using mechanization and focusing on cash crops rather than food crops.' },
          { label: '(b)', prompt: 'Explain TWO ways transnational corporations have changed agricultural practices in Region Y.', pts: 2, rubric: [{ pts: 1, desc: 'Identifies one change such as introduction of monoculture or modern technology', kw: ['monoculture', 'cash crop', 'technology', 'mechanization', 'chemicals', 'fertilizer', 'pesticide'] }, { pts: 1, desc: 'Identifies a second change such as shift to export crops or wage labor', kw: ['export', 'wage labor', 'market', 'contract farming', 'plantation', 'global supply chain'] }], sample: 'TNCs have (1) introduced monoculture cash crops like palm oil or soybeans, replacing diverse subsistence crops with single-species plantations using chemical inputs, and (2) shifted labor from family farming to wage labor on corporate plantations, integrating local workers into global supply chains.' },
          { label: '(c)', prompt: 'Identify ONE positive and ONE negative impact of this agricultural transition on Region Y\'s population.', pts: 2, rubric: [{ pts: 1, desc: 'Identifies positive impact such as increased income or modernization', kw: ['income', 'employment', 'wages', 'infrastructure', 'development', 'economic growth'] }, { pts: 1, desc: 'Identifies negative impact such as food insecurity or environmental degradation', kw: ['food insecurity', 'displacement', 'dependency', 'environmental', 'soil', 'deforestation', 'inequality'] }], sample: 'Positive: Increased cash income and employment opportunities through wage labor and market integration. Negative: Reduced food security as land formerly used for growing food crops is converted to export crops, making the population dependent on imported food and vulnerable to global price fluctuations.' },
          { label: '(d)', prompt: 'Using Wallerstein\'s World Systems Theory, explain Region Y\'s role in the global economy.', pts: 2, rubric: [{ pts: 1, desc: 'Identifies Region Y as periphery or semi-periphery', kw: ['periphery', 'semi-periphery', 'core', 'dependent', 'raw materials'] }, { pts: 1, desc: 'Explains unequal exchange between Region Y and core countries', kw: ['unequal exchange', 'exploitation', 'profit', 'value', 'processing', 'manufacturing'] }], sample: 'In Wallerstein\'s framework, Region Y functions as a periphery country — it supplies raw agricultural materials (cash crops) to core countries but receives manufactured goods and technology in return. This unequal exchange means the value-added processing (and profits) occurs in core countries, while Region Y remains dependent on commodity exports with volatile prices, perpetuating economic inequality.' },
        ],
      },
      {
        id: 'hg-short-1', type: 'short', title: 'Diffusion of Fast Food',
        prompt: 'McDonald\'s has expanded to over 100 countries. Its menu varies significantly by location — serving McSpicy Paneer in India, Teriyaki Burger in Japan, and McArabia in the Middle East.',
        totalPoints: 4, time: '~12 minutes', calc: false,
        parts: [
          { label: '(a)', prompt: 'Identify the type of diffusion represented by McDonald\'s global expansion.', pts: 1, rubric: [{ pts: 1, desc: 'Identifies hierarchical expansion diffusion from the US to other developed then developing countries', kw: ['hierarchical', 'expansion diffusion', 'global', 'spread'] }], sample: 'McDonald\'s expansion represents hierarchical diffusion — it spread from its origin in the United States first to other wealthy, developed countries and major global cities before reaching smaller cities and developing nations.' },
          { label: '(b)', prompt: 'Explain how the menu variations represent glocalization.', pts: 1, rubric: [{ pts: 1, desc: 'Defines glocalization as adapting a global product to local tastes/culture', kw: ['glocalization', 'local', 'adapt', 'culture', 'customize', 'modify'] }], sample: 'Glocalization is the adaptation of a global product or service to fit local cultural preferences. McDonald\'s adapting its menu to include culturally appropriate items (vegetarian in India, halal in the Middle East) demonstrates how a global brand customizes its product to succeed in local markets.' },
          { label: '(c)', prompt: 'Identify ONE criticism of cultural globalization illustrated by this example.', pts: 1, rubric: [{ pts: 1, desc: 'Identifies cultural imperialism, homogenization, or loss of local food culture', kw: ['cultural imperialism', 'homogenization', 'Americanization', 'local culture', 'traditional', 'displacement'] }], sample: 'Critics argue that the global spread of American fast food chains represents cultural imperialism — the dominance of Western culture that can displace traditional local food practices and homogenize global food culture.' },
          { label: '(d)', prompt: 'Explain how stimulus diffusion applies to this situation.', pts: 1, rubric: [{ pts: 1, desc: 'Connects stimulus diffusion to the concept spreading but changing in form for local context', kw: ['stimulus diffusion', 'underlying idea', 'concept', 'modified', 'adapted', 'changed form'] }], sample: 'Stimulus diffusion occurs when the underlying concept spreads but is modified. The fast-food restaurant concept (quick service, standardized menus) has diffused globally, but the specific products change — the idea of efficient fast food adapts to local cuisines rather than the exact original menu spreading unchanged.' },
        ],
      },
      {
        id: 'hg-short-2', type: 'short', title: 'Urban Models',
        prompt: 'The concentric zone model and sector model are two influential models of urban structure in North American cities.',
        totalPoints: 4, time: '~12 minutes', calc: false,
        parts: [
          { label: '(a)', prompt: 'Describe the concentric zone model (Burgess model) and identify who developed it.', pts: 1, rubric: [{ pts: 1, desc: 'Describes concentric rings radiating from CBD, developed by Burgess', kw: ['concentric', 'rings', 'zones', 'CBD', 'Burgess', 'central business district'] }], sample: 'The concentric zone model, developed by Ernest Burgess in 1925, describes urban areas as a series of concentric rings radiating outward from the central business district (CBD). Each ring represents a different land use zone, from the CBD to residential suburbs.' },
          { label: '(b)', prompt: 'Explain ONE limitation of the concentric zone model.', pts: 1, rubric: [{ pts: 1, desc: 'Identifies a limitation such as ignoring physical geography, transportation, or being too simplistic', kw: ['limitation', 'simplistic', 'ignores', 'physical', 'transportation', 'uniform', 'idealized'] }], sample: 'A key limitation is that the model assumes a flat, featureless plain with uniform transportation access. Real cities have rivers, hills, highways, and rail lines that distort the concentric pattern, making the model too idealized for many real-world applications.' },
          { label: '(c)', prompt: 'Compare how the sector model differs from the concentric zone model.', pts: 1, rubric: [{ pts: 1, desc: 'Explains that Hoyt\'s sector model shows land use in wedge-shaped sectors along transportation routes', kw: ['sector', 'Hoyt', 'wedge', 'transportation', 'corridor', 'route', 'along'] }], sample: 'Homer Hoyt\'s sector model shows land use arranged in wedge-shaped sectors extending outward from the CBD along transportation corridors, rather than concentric rings. Similar land uses cluster along major roads and rail lines, so wealthy neighborhoods form sectors rather than rings.' },
          { label: '(d)', prompt: 'Identify which model better explains modern suburbanization and explain why.', pts: 1, rubric: [{ pts: 1, desc: 'Argues for galactic/edge city model or sector model with transportation-based suburban growth', kw: ['edge city', 'galactic', 'suburban', 'highway', 'automobile', 'peripheral', 'decentralized'] }], sample: 'The galactic or peripheral model better explains modern suburbanization because it accounts for edge cities — suburban activity centers that develop around highway interchanges, far from the traditional CBD. This reflects the automobile-dependent, decentralized urban growth pattern of modern American cities.' },
        ],
      },
    ],
  },
  {
    key: 'us-government',
    name: 'AP US Government',
    short: 'USGov',
    slug: 'ap-us-gov',
    coursePageSlug: 'ap-us-government',
    prefix: 'gov',
    accent: ['blue', 'indigo'],
    frqType: 'long-short',
    frqTime: 100,
    frqLongPts: '7-8',
    frqShortPts: '3-4',
    frqLongDesc: 'Multi-part questions requiring analysis of foundational documents, Supreme Court cases, and political processes',
    frqShortDesc: 'Focused questions on specific government institutions, civil liberties, and political participation',
    frqStructure: ['4 free-response questions', '1 Concept Application (20 min)', '1 Quantitative Analysis (20 min)', '1 SCOTUS Comparison (20 min)', '1 Argument Essay (40 min)', 'Total: 100 minutes'],
    frqTested: ['Analyzing foundational documents and court cases', 'Interpreting data about political behavior', 'Comparing Supreme Court decisions', 'Constructing evidence-based arguments'],
    frqTips: ['Reference specific constitutional amendments by number', 'Name actual Supreme Court cases and their rulings', 'Use political science vocabulary: federalism, judicial review, etc.', 'For argument essays, take a clear position with evidence', 'Cite specific data values when analyzing quantitative information', 'Connect concepts across units for fuller responses'],
    practiceDesc: 'Timed practice covering constitutional foundations, branches of government, civil liberties, and political participation.',
    practiceSections: [{ id: 'mc', name: 'Multiple Choice', desc: 'AP-style MC covering all 5 units of US Government.', count: 30, time: 35 }],
    aboutExam: [
      { heading: 'Exam Structure', items: ['Section I: 55 MC questions (80 min)', 'Section II: 4 FRQs (100 min)', 'Total: 3 hours'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 50% of score', 'FRQ: 50% of score', 'Required documents included'] },
    ],
    topics: [
      { slug: 'gov-constitutional-foundations', name: 'Constitutional Foundations' },
      { slug: 'gov-federalism', name: 'Federalism' },
      { slug: 'gov-separation-of-powers', name: 'Separation of Powers' },
      { slug: 'gov-congress', name: 'Congress' },
      { slug: 'gov-presidency', name: 'The Presidency' },
      { slug: 'gov-judiciary', name: 'The Federal Judiciary' },
      { slug: 'gov-bureaucracy', name: 'The Bureaucracy' },
      { slug: 'gov-civil-liberties', name: 'Civil Liberties' },
      { slug: 'gov-civil-rights', name: 'Civil Rights' },
      { slug: 'gov-ideologies', name: 'Political Ideologies' },
      { slug: 'gov-public-opinion', name: 'Public Opinion' },
      { slug: 'gov-voting-elections', name: 'Voting & Elections' },
      { slug: 'gov-parties-interest-groups', name: 'Parties & Interest Groups' },
      { slug: 'gov-media-technology', name: 'Media & Technology' },
    ],
    questions: [
      ['The supremacy clause establishes that:', ['State laws take precedence', 'Federal law is the supreme law of the land', 'The president has supreme authority', 'The judiciary is supreme'], 1, 'The supremacy clause (Article VI) makes federal law supreme over state laws.', 'easy'],
      ['Judicial review was established by:', ['The Constitution (Article III)', 'Marbury v. Madison (1803)', 'The Bill of Rights', 'The 14th Amendment'], 1, 'Marbury v. Madison established the power of judicial review — the courts\' ability to declare laws unconstitutional.', 'easy'],
      ['The elastic clause (necessary and proper clause) grants Congress:', ['The power to tax', 'Implied powers beyond those explicitly listed', 'The power to declare war', 'Control over the judiciary'], 1, 'The elastic clause gives Congress implied powers to carry out its enumerated powers.', 'easy'],
      ['The Bill of Rights originally applied only to:', ['All levels of government', 'The federal government', 'State governments', 'Local governments'], 1, 'The Bill of Rights originally limited only the federal government; it was later applied to states through incorporation via the 14th Amendment.', 'easy'],
      ['A filibuster is used in the:', ['House of Representatives', 'Senate', 'Supreme Court', 'State legislatures'], 1, 'A filibuster is a Senate tactic of extended debate used to delay or prevent a vote.', 'easy'],
      ['Which amendment protects freedom of speech?', ['Second Amendment', 'First Amendment', 'Fourth Amendment', 'Fifth Amendment'], 1, 'The First Amendment protects freedom of speech, religion, press, assembly, and petition.', 'easy'],
      ['Federalism divides power between:', ['The three branches of government', 'National and state governments', 'The president and Congress', 'The courts and legislature'], 1, 'Federalism is the division of power between national and state levels of government.', 'easy'],
      ['The Electoral College determines the outcome of:', ['Congressional elections', 'Presidential elections', 'Gubernatorial elections', 'Supreme Court appointments'], 1, 'The Electoral College is the system used to elect the president and vice president.', 'easy'],
      ['Selective incorporation means:', ['All rights apply to states at once', 'Individual rights are applied to states case by case through the 14th Amendment', 'States can select which rights to follow', 'Congress selects which amendments apply'], 1, 'Through selective incorporation, the Supreme Court has gradually applied individual Bill of Rights protections to state governments via the 14th Amendment\'s due process clause.', 'medium'],
      ['The iron triangle consists of:', ['President, Congress, and Courts', 'Congressional committees, interest groups, and bureaucratic agencies', 'State, local, and federal governments', 'Media, polls, and elections'], 1, 'The iron triangle describes the mutually beneficial relationship between congressional committees, interest groups, and bureaucratic agencies.', 'medium'],
      ['In McCulloch v. Maryland (1819), the Court ruled that:', ['States can tax the federal government', 'The necessary and proper clause gives Congress implied powers and states cannot tax the federal government', 'The federal government has unlimited power', 'States are sovereign in all matters'], 1, 'McCulloch v. Maryland established that Congress has implied powers and that states cannot interfere with federal institutions.', 'medium'],
      ['The winner-take-all system in most states means:', ['Each candidate gets proportional electoral votes', 'The candidate with the most popular votes gets all electoral votes', 'Third parties always win some votes', 'The election is decided by Congress'], 1, 'In the winner-take-all system, the candidate receiving the most popular votes in a state receives all of that state\'s electoral votes.', 'medium'],
      ['Checks and balances are designed to:', ['Give one branch ultimate power', 'Prevent any one branch from becoming too powerful', 'Speed up the legislative process', 'Eliminate conflict between branches'], 1, 'Checks and balances ensure no single branch of government becomes too powerful by giving each branch ways to limit the others.', 'medium'],
      ['A congressional caucus is:', ['A formal committee', 'An informal group of members sharing common interests', 'A type of election', 'A legislative procedure'], 1, 'A caucus is an informal group of legislators who share common interests or goals.', 'medium'],
      ['The establishment clause and free exercise clause both deal with:', ['Freedom of press', 'Freedom of religion', 'Right to bear arms', 'Right to privacy'], 1, 'Both clauses are in the First Amendment and address religion — the establishment clause prevents government from establishing a religion, and the free exercise clause protects religious practice.', 'medium'],
      ['Strict constructionism interprets the Constitution:', ['Broadly to adapt to modern needs', 'Narrowly, limiting government to powers explicitly stated', 'As a living document', 'Based on international law'], 1, 'Strict constructionists interpret the Constitution narrowly, limiting federal power to what is explicitly stated.', 'medium'],
      ['Baker v. Carr (1962) established the principle of:', ['Separation of church and state', 'One person, one vote (equal representation in legislative districts)', 'Freedom of the press', 'Right to counsel'], 1, 'Baker v. Carr held that legislative reapportionment is a justiciable issue, leading to the "one person, one vote" principle.', 'hard'],
      ['Federalist No. 51 primarily argues for:', ['A strong presidency', 'Separation of powers and checks and balances to prevent tyranny', 'Direct democracy', 'Elimination of state governments'], 1, 'Madison\'s Federalist No. 51 argues that separating powers among branches and levels of government prevents tyranny by creating internal checks.', 'hard'],
      ['The antifederalists opposed the Constitution primarily because:', ['They wanted a monarchy', 'It lacked a bill of rights and gave too much power to the federal government', 'It was too democratic', 'It preserved slavery'], 1, 'Antifederalists feared the new Constitution concentrated too much power in the federal government and lacked protections for individual rights.', 'hard'],
      ['Citizens United v. FEC (2010) ruled that:', ['Corporations cannot donate to campaigns', 'Corporate and union spending on political ads is protected free speech under the First Amendment', 'Campaign finance must be limited', 'Only individuals can participate in elections'], 1, 'Citizens United held that the First Amendment protects corporate and union political spending as free speech, leading to the rise of Super PACs.', 'hard'],
    ],
    frqs: [
      {
        id: 'gov-long-1', type: 'long', title: 'Federalism & Constitutional Powers',
        prompt: 'The relationship between state and federal power has been a central debate since the founding. Use your knowledge of US government to answer the following.',
        totalPoints: 7, time: '~20 minutes', calc: false,
        parts: [
          { label: '(a)', prompt: 'Define federalism and explain how it differs from a unitary system.', pts: 1, rubric: [{ pts: 1, desc: 'Defines federalism as shared power between national and state governments, contrasted with centralized power in unitary systems', kw: ['federalism', 'shared power', 'divided', 'national', 'state', 'unitary', 'centralized'] }], sample: 'Federalism is a system of government where power is divided between a national government and state governments, each with their own areas of authority. In a unitary system, power is concentrated in the central government, with local units having only the powers the central government grants them.' },
          { label: '(b)', prompt: 'Explain how McCulloch v. Maryland expanded federal power.', pts: 2, rubric: [{ pts: 1, desc: 'Explains the Court upheld implied powers through the necessary and proper clause', kw: ['implied powers', 'necessary and proper', 'elastic clause', 'national bank'] }, { pts: 1, desc: 'Notes states cannot tax or interfere with federal institutions', kw: ['cannot tax', 'supremacy', 'interfere', 'supreme law'] }], sample: 'In McCulloch v. Maryland (1819), Chief Justice Marshall ruled that Congress had the implied power to create a national bank under the necessary and proper clause, even though banking isn\'t explicitly mentioned in the Constitution. The Court also ruled that Maryland could not tax the bank, establishing that states cannot interfere with legitimate federal operations under the supremacy clause.' },
          { label: '(c)', prompt: 'Describe ONE way the 10th Amendment limits federal power.', pts: 2, rubric: [{ pts: 1, desc: 'States that powers not delegated to the federal government are reserved to the states or people', kw: ['10th Amendment', 'reserved powers', 'not delegated', 'states', 'people'] }, { pts: 1, desc: 'Provides a specific example of reserved powers', kw: ['education', 'police power', 'marriage', 'licensing', 'intrastate', 'zoning'] }], sample: 'The 10th Amendment reserves to the states (or the people) all powers not delegated to the federal government. For example, states retain control over education policy — setting curriculum standards, licensing teachers, and funding public schools. This creates a check on federal overreach by preserving state sovereignty in areas not explicitly granted to Congress.' },
          { label: '(d)', prompt: 'Explain how fiscal federalism has been used to influence state policy.', pts: 2, rubric: [{ pts: 1, desc: 'Defines fiscal federalism and identifies grants (categorical, block) or mandates', kw: ['fiscal federalism', 'grants', 'categorical', 'block', 'mandate', 'funding'] }, { pts: 1, desc: 'Provides a specific example of federal conditions on state behavior', kw: ['drinking age', 'highway', 'Medicaid', 'strings attached', 'conditions', 'compliance'] }], sample: 'Fiscal federalism uses federal funding to influence state policies. Through categorical grants (with strict conditions) and block grants (with broader flexibility), the federal government provides money with strings attached. For example, the federal government effectively set the national drinking age to 21 by threatening to withhold highway funding from states that kept it lower — using fiscal leverage to influence state policy without directly legislating it.' },
        ],
      },
      {
        id: 'gov-short-1', type: 'short', title: 'First Amendment Freedoms',
        prompt: 'The First Amendment protects several fundamental freedoms, but these protections are not absolute.',
        totalPoints: 4, time: '~12 minutes', calc: false,
        parts: [
          { label: '(a)', prompt: 'Identify TWO protections included in the First Amendment.', pts: 1, rubric: [{ pts: 1, desc: 'Identifies two of: speech, religion, press, assembly, petition', kw: ['speech', 'religion', 'press', 'assembly', 'petition'] }], sample: 'The First Amendment protects freedom of speech and freedom of religion (both the establishment clause and free exercise clause).' },
          { label: '(b)', prompt: 'Explain ONE Supreme Court case that limited First Amendment protections.', pts: 1, rubric: [{ pts: 1, desc: 'Identifies a case like Schenck (clear and present danger), Tinker (school speech), or others', kw: ['Schenck', 'Tinker', 'clear and present', 'imminent lawless', 'Brandenburg', 'obscenity', 'Miller'] }], sample: 'In Schenck v. United States (1919), the Court ruled that speech creating a "clear and present danger" is not protected. Schenck was convicted for distributing anti-draft leaflets during WWI, establishing that context matters — speech that poses an immediate danger to public safety can be restricted.' },
          { label: '(c)', prompt: 'Explain the difference between the establishment clause and the free exercise clause.', pts: 1, rubric: [{ pts: 1, desc: 'Distinguishes between government not establishing religion vs. protecting individual religious practice', kw: ['establishment', 'government', 'endorse', 'free exercise', 'individual', 'practice', 'worship'] }], sample: 'The establishment clause prohibits the government from establishing, endorsing, or favoring any religion (separation of church and state). The free exercise clause protects individuals\' rights to practice their religion freely without government interference. They represent different sides of religious freedom — what the government cannot do vs. what individuals can do.' },
          { label: '(d)', prompt: 'Explain why the tension between these two clauses creates constitutional challenges.', pts: 1, rubric: [{ pts: 1, desc: 'Explains that protecting free exercise can sometimes appear to establish religion, or preventing establishment can restrict exercise', kw: ['tension', 'conflict', 'accommodate', 'neutral', 'balance', 'exemption', 'restrict'] }], sample: 'Tension arises because accommodating religious practice (free exercise) can appear to favor religion (violating the establishment clause). For example, if the government grants religious organizations tax exemptions, it protects free exercise but may seem to endorse religion. Courts must constantly balance these competing values.' },
        ],
      },
      {
        id: 'gov-short-2', type: 'short', title: 'Electoral College',
        prompt: 'The Electoral College has been debated since the founding era, with proposals to reform or abolish it recurring in American politics.',
        totalPoints: 4, time: '~12 minutes', calc: false,
        parts: [
          { label: '(a)', prompt: 'Explain how the Electoral College works in selecting the president.', pts: 1, rubric: [{ pts: 1, desc: 'Describes electors allocated by state (based on congressional representation), winner-take-all in most states, 270 needed', kw: ['electors', '270', 'winner-take-all', 'congressional', 'state', 'majority'] }], sample: 'Each state gets electoral votes equal to its total congressional representation (House seats + 2 senators). In most states, the candidate winning the popular vote receives all electoral votes (winner-take-all). A candidate needs 270 of 538 electoral votes to win the presidency.' },
          { label: '(b)', prompt: 'Identify ONE argument in favor of keeping the Electoral College.', pts: 1, rubric: [{ pts: 1, desc: 'Identifies an advantage such as protecting small states, federalism, or two-party stability', kw: ['small states', 'federalism', 'stability', 'coalition', 'two-party', 'founders', 'geographic'] }], sample: 'The Electoral College protects the influence of smaller states by giving them proportionally more electoral votes than their population warrants (due to the two senator bonus), ensuring presidential candidates cannot ignore less populous states entirely.' },
          { label: '(c)', prompt: 'Identify ONE argument for abolishing the Electoral College.', pts: 1, rubric: [{ pts: 1, desc: 'Identifies a problem such as popular vote loser winning, swing state focus, or unequal representation', kw: ['popular vote', 'swing state', 'unequal', 'undemocratic', 'battleground', 'ignored'] }], sample: 'A candidate can win the presidency while losing the national popular vote (as occurred in 2000 and 2016), which critics argue is fundamentally undemocratic and undermines the principle of majority rule.' },
          { label: '(d)', prompt: 'Explain why constitutional amendments to change the Electoral College are difficult to pass.', pts: 1, rubric: [{ pts: 1, desc: 'Explains the supermajority requirements (2/3 Congress + 3/4 states) and small state opposition', kw: ['supermajority', 'two-thirds', 'three-fourths', 'amendment', 'ratif', 'small state', 'difficult'] }], sample: 'Constitutional amendments require a 2/3 vote in both houses of Congress and ratification by 3/4 of state legislatures. Small states benefit disproportionately from the Electoral College and would oppose abolishing it, making it nearly impossible to get 38 states to ratify such an amendment.' },
        ],
      },
    ],
  },
]

/* ── For courses without full custom data, generate generic content ── */

const genericCourses = [
  {
    key: 'world-history', name: 'AP World History', short: 'WorldHistory', slug: 'ap-world-history',
    coursePageSlug: 'ap-world-history', prefix: 'wh', accent: ['amber', 'orange'],
    frqTime: 100, practiceDesc: 'Timed practice covering all 9 units of World History from 1200 CE to present.',
    aboutExam: [
      { heading: 'Exam Structure', items: ['Section I: 55 MC + 3 SAQs (95 min)', 'Section II: 1 DBQ + 1 LEQ (100 min)', 'Total: 3 hours 15 min'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 40%', 'SAQ: 20%', 'DBQ: 25%', 'LEQ: 15%'] },
    ],
    topicNames: ['Global Tapestry', 'Dar al-Islam', 'Silk Roads & Mongols', 'Indian Ocean Trade', 'Americas & Africa', 'Land-Based Empires', 'Islamic Empires', 'East Asian Empires', 'Exploration & Columbian Exchange', 'Maritime Empires', 'Transoceanic Interactions', 'Enlightenment & Revolutions', 'Industrial Revolution', 'Revolutions', 'Industrialization Effects', 'Imperialism', 'Reform & Migration'],
    topicSlugs: ['wh-global-tapestry','wh-dar-al-islam','wh-silk-roads-mongols','wh-indian-ocean-trade','wh-americas-africa-1200','wh-land-based-empires','wh-islamic-empires','wh-east-asian-empires','wh-exploration-columbian-exchange','wh-maritime-empires-labor','wh-transoceanic','wh-enlightenment-political-revolutions','wh-industrial-revolution','wh-revolutions','wh-consequences-industrialization','wh-imperialism','wh-reform-migration'],
  },
  {
    key: 'us-history', name: 'AP US History', short: 'USHistory', slug: 'ap-us-history',
    coursePageSlug: 'ap-us-history', prefix: 'apush', accent: ['red', 'rose'],
    frqTime: 100, practiceDesc: 'Timed practice covering all 9 periods of US History.',
    aboutExam: [
      { heading: 'Exam Structure', items: ['Section I: 55 MC + 3 SAQs (95 min)', 'Section II: 1 DBQ + 1 LEQ (100 min)', 'Total: 3 hours 15 min'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 40%', 'SAQ: 20%', 'DBQ: 25%', 'LEQ: 15%'] },
    ],
    topicNames: ['Native Societies & Exploration', 'Colonial America', 'Colonial Society', 'Revolution & Independence', 'Constitution & Early Republic', 'Democracy & Expansion', 'Reform Movements', 'Civil War', 'Reconstruction', 'Gilded Age', 'Progressivism & WWI', 'Depression & WWII'],
    topicSlugs: ['apush-native-societies-exploration','apush-colonial-america','apush-colonial-society-conflicts','apush-revolution-independence','apush-constitution-early-republic','apush-democracy-expansion','apush-reform-movements','apush-civil-war','apush-reconstruction','apush-gilded-age','apush-progressivism-wwi','apush-depression-wwii'],
  },
  {
    key: 'macroeconomics', name: 'AP Macroeconomics', short: 'Macro', slug: 'ap-macro',
    coursePageSlug: 'ap-macroeconomics', prefix: 'macro', accent: ['emerald', 'green'],
    frqTime: 60, practiceDesc: 'Timed practice covering all macroeconomic concepts and models.',
    aboutExam: [
      { heading: 'Exam Structure', items: ['Section I: 60 MC (70 min)', 'Section II: 3 FRQs (60 min)', 'Total: 2 hours 10 min'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 66% of score', 'FRQ: 33% of score', 'Graphing required'] },
    ],
    topicNames: ['Scarcity & Opportunity Cost', 'Comparative Advantage', 'GDP & Growth', 'Unemployment & Inflation', 'AD-AS Model', 'Multiplier Effect', 'Phillips Curve', 'Money & Banking', 'Monetary Policy', 'Fiscal Policy', 'Fiscal Policy Tools', 'Open Economy', 'International Trade'],
    topicSlugs: ['macro-scarcity-opportunity-cost','macro-comparative-advantage','macro-gdp-growth','macro-unemployment-inflation','macro-ad-as','macro-multiplier-effect','macro-phillips-curve','macro-money-banking','macro-monetary-policy','macro-fiscal-policy','macro-fiscal-policy-tools','macro-open-economy','macro-international-trade-finance'],
  },
  {
    key: 'microeconomics', name: 'AP Microeconomics', short: 'Micro', slug: 'ap-micro',
    coursePageSlug: 'ap-microeconomics', prefix: 'micro', accent: ['violet', 'purple'],
    frqTime: 60, practiceDesc: 'Timed practice covering supply/demand, market structures, and market failure.',
    aboutExam: [
      { heading: 'Exam Structure', items: ['Section I: 60 MC (70 min)', 'Section II: 3 FRQs (60 min)', 'Total: 2 hours 10 min'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 66% of score', 'FRQ: 33% of score', 'Graphing required'] },
    ],
    topicNames: ['Scarcity & Marginal Analysis', 'Supply & Demand', 'Market Equilibrium', 'Elasticity', 'Government Intervention', 'Production & Costs', 'Perfect Competition', 'Monopoly', 'Monopolistic & Oligopoly', 'Labor Markets', 'Factor Markets', 'Externalities & Public Goods', 'Market Failure'],
    topicSlugs: ['micro-scarcity-marginal-analysis','micro-supply-demand','micro-demand-supply-equilibrium','micro-elasticity','micro-government-intervention','micro-production-costs','micro-perfect-competition','micro-monopoly','micro-monopolistic-oligopoly','micro-labor-markets','micro-factor-markets','micro-externalities-public-goods','micro-market-failure'],
  },
  {
    key: 'african-american-studies', name: 'AP African American Studies', short: 'AAS', slug: 'ap-african-american-studies',
    coursePageSlug: 'ap-african-american-studies', prefix: 'aas', accent: ['yellow', 'amber'],
    frqTime: 90, practiceDesc: 'Timed practice covering the African American experience from origins through contemporary issues.',
    aboutExam: [
      { heading: 'Exam Structure', items: ['Section I: 60 MC (80 min)', 'Section II: 3 FRQs (90 min)', 'Total: 2 hours 50 min'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 50% of score', 'FRQ: 50% of score', 'Source analysis required'] },
    ],
    topicNames: ['African Kingdoms', 'Origins of Diaspora', 'Transatlantic Slave Trade', 'Slavery in America', 'Resistance & Abolition', 'Freedom & Enslavement', 'Reconstruction & Jim Crow', 'Great Migration & Harlem', 'WWI & WWII Era', 'Practice of Freedom', 'Civil Rights Movement', 'Black Power & Beyond', 'Contemporary Issues', 'Movements Today'],
    topicSlugs: ['aas-african-kingdoms','aas-origins-diaspora','aas-transatlantic-slave-trade','aas-slavery-in-america','aas-resistance-abolition','aas-freedom-enslavement','aas-reconstruction-jim-crow','aas-great-migration-harlem','aas-wwi-wwii-era','aas-practice-freedom','aas-civil-rights-movement','aas-black-power-beyond','aas-contemporary-issues','aas-movements-debates'],
  },
  {
    key: 'english-literature', name: 'AP English Literature', short: 'EngLit', slug: 'ap-english-lit',
    coursePageSlug: 'ap-english-literature', prefix: 'englit', accent: ['rose', 'pink'],
    frqTime: 120, practiceDesc: 'Timed practice covering prose fiction, poetry, and literary analysis skills.',
    aboutExam: [
      { heading: 'Exam Structure', items: ['Section I: 55 MC (60 min)', 'Section II: 3 FRQs (120 min)', 'Total: 3 hours'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 45% of score', 'FRQ: 55% of score', 'Essay-based responses'] },
    ],
    topicNames: ['Short Fiction: Character', 'Short Fiction: Plot', 'Short Fiction: Theme', 'Poetry: Imagery', 'Poetry: Tone', 'Poetic Structure', 'Sound Devices', 'Novel Analysis', 'Novel Themes', 'Dramatic Structure', 'Character & Setting', 'Narration & POV', 'Narrative Complexity', 'Narrative Perspective', 'Figurative Language', 'Tone & Speaker', 'Symbol & Motif', 'Plot & Conflict', 'Social Commentary'],
    topicSlugs: ['englit-short-fiction-1','englit-short-fiction-2','englit-short-fiction-3','englit-poetry-1','englit-poetry-2','englit-poetic-structure-form','englit-sound-devices','englit-longer-fiction','englit-longer-fiction-2','englit-dramatic-structure','englit-character-setting','englit-narration-pov','englit-narrative-complexity','englit-narrative-perspective','englit-figurative-language','englit-tone-speaker','englit-symbol-motif-fiction','englit-plot-conflict-theme','englit-social-commentary-drama'],
  },
  {
    key: 'english-language', name: 'AP English Language', short: 'EngLang', slug: 'ap-english-lang',
    coursePageSlug: 'ap-english-language', prefix: 'englang', accent: ['teal', 'cyan'],
    frqTime: 135, practiceDesc: 'Timed practice covering rhetorical analysis, argumentation, and synthesis.',
    aboutExam: [
      { heading: 'Exam Structure', items: ['Section I: 45 MC (60 min)', 'Section II: 3 FRQs (135 min)', 'Total: 3 hours 15 min'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 45% of score', 'FRQ: 55% of score', 'Essay-based responses'] },
    ],
    topicNames: ['Intro to Rhetoric', 'Rhetorical Situation', 'Rhetorical Writing', 'Claims & Evidence', 'Claims Reading', 'Claims Writing', 'Reasoning in Reading', 'Reasoning in Writing', 'Argument Structure', 'Diction & Syntax', 'Style in Reading', 'Style in Writing', 'Tone & Voice', 'Ethos/Pathos/Logos', 'Logical Fallacies', 'Synthesis', 'Synthesis Essay', 'Developing Arguments', 'Writing for Audience'],
    topicSlugs: ['englang-intro-rhetoric','englang-rhetorical-situation','englang-rhetorical-situation-writing','englang-claims-evidence','englang-claims-evidence-reading','englang-claims-evidence-writing','englang-reasoning-org-reading','englang-reasoning-org-writing','englang-argument-structure','englang-diction-syntax','englang-style-reading','englang-style-writing','englang-tone-voice-analysis','englang-ethos-pathos-logos','englang-logical-fallacies','englang-synthesis','englang-synthesis-essay','englang-developing-arguments','englang-writing-for-audience'],
  },
  {
    key: 'environmental-science', name: 'AP Environmental Science', short: 'APES', slug: 'ap-enviro',
    coursePageSlug: 'ap-environmental-science', prefix: 'apes', accent: ['lime', 'green'],
    frqTime: 70, practiceDesc: 'Timed practice covering ecosystems, energy, pollution, and climate change.',
    aboutExam: [
      { heading: 'Exam Structure', items: ['Section I: 80 MC (90 min)', 'Section II: 3 FRQs (70 min)', 'Total: 2 hours 40 min'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 60% of score', 'FRQ: 40% of score', 'Math calculations included'] },
    ],
    topicNames: ['Ecosystem Structure', 'Biogeochemical Cycles', 'Earth Systems', 'Biodiversity', 'Conservation', 'Biomes & Succession', 'Population Ecology', 'Human Population', 'Agriculture & Land', 'Water Resources', 'Fossil Fuels & Nuclear', 'Renewable Energy', 'Energy Concepts', 'Atmospheric Pollution', 'Climate Change'],
    topicSlugs: ['apes-ecosystem-structure','apes-biogeochemical-cycles','apes-earth-systems','apes-biodiversity','apes-biodiversity-conservation','apes-biomes-succession','apes-population-ecology','apes-human-population','apes-agriculture-land','apes-water-resources','apes-fossil-fuels-nuclear','apes-renewable-energy','apes-energy','apes-atmospheric-pollution','apes-atmosphere-climate'],
  },
  {
    key: 'computer-science-a', name: 'AP Computer Science A', short: 'CSA', slug: 'ap-csa',
    coursePageSlug: 'ap-computer-science-a', prefix: 'csa', accent: ['orange', 'amber'],
    frqTime: 90, practiceDesc: 'Timed practice covering Java programming, OOP, arrays, and algorithms.',
    aboutExam: [
      { heading: 'Exam Structure', items: ['Section I: 40 MC (90 min)', 'Section II: 4 FRQs (90 min)', 'Total: 3 hours'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 50% of score', 'FRQ: 50% of score', 'Java language only'] },
    ],
    topicNames: ['Variables & Types', 'Expressions & Operators', 'Strings & Objects', 'Using Objects', 'Boolean & If', 'Conditionals', 'Iteration', 'Loops', 'Writing Classes', 'Class Design', 'Arrays', 'Array Algorithms', 'ArrayList', 'ArrayList Usage', '2D Arrays', '2D Array Algorithms', 'Inheritance', 'Polymorphism'],
    topicSlugs: ['csa-variables-types','csa-expressions-operators','csa-strings-objects','csa-using-objects','csa-boolean-if','csa-conditionals','csa-iteration','csa-loops','csa-writing-classes','csa-class-design','csa-array','csa-arrays','csa-arraylist','csa-arraylist-usage','csa-2d-array','csa-2d-arrays','csa-inheritance','csa-inheritance-polymorphism'],
  },
  {
    key: 'cs-principles', name: 'AP CS Principles', short: 'CSP', slug: 'ap-csp',
    coursePageSlug: 'ap-cs-principles', prefix: 'csp', accent: ['indigo', 'blue'],
    frqTime: 0, practiceDesc: 'Timed practice covering computational thinking, data, algorithms, and impact of computing.',
    aboutExam: [
      { heading: 'Exam Structure', items: ['Section I: 70 MC (120 min)', 'Create Performance Task (submitted)', 'Total: 2 hours + project'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 70% of score', 'Create PT: 30% of score', 'No FRQ on exam day'] },
    ],
    topicNames: ['Creative Development', 'Collaboration', 'Binary & Data', 'Data Compression', 'Data & Info', 'Algorithms', 'Algorithms & Programming', 'Variables & Control', 'Procedures & Lists', 'Systems & Networks', 'Internet Protocols', 'Fault Tolerance', 'Impact of Computing', 'Safe Computing', 'Social & Ethical Impacts'],
    topicSlugs: ['csp-creative-development','csp-collaboration-development','csp-binary-data','csp-data-compression-analysis','csp-data','csp-algorithms','csp-algorithms-programming','csp-variables-control','csp-procedures-lists','csp-computing-systems-networks','csp-internet-protocols','csp-fault-tolerance-security','csp-impact-of-computing','csp-safe-computing','csp-social-ethical-impacts'],
  },
]

/* ═══════════════════════════════════════════════════════════
   Generate competitive question bank
   ═══════════════════════════════════════════════════════════ */

function generateCompetitiveBank(course) {
  const iface = `Ap${course.short}Question`
  const getFn = `getAp${course.short}Questions`
  const qs = course.questions || generateGenericQuestions(course)
  
  const qBlock = qs.map((q, i) => {
    const [question, options, correctAnswer, explanation, difficulty] = q
    return `  {
    id: ${i + 1},
    question: '${e(question)}',
    options: ['${options.map(o => e(o)).join("', '")}'],
    correctAnswer: ${correctAnswer},
    explanation: '${e(explanation)}',
    difficulty: '${difficulty}',
  }`
  }).join(',\n')

  return `// ${course.name} question bank for competitive mode

export interface ${iface} {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: ${iface}[] = [
${qBlock},
]

export function ${getFn}(count: number = 10): ${iface}[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
`
}

function generateGenericQuestions(course) {
  const topics = course.topicNames || course.topics?.map(t => t.name) || []
  const qs = []
  const diffs = ['easy', 'easy', 'easy', 'easy', 'easy', 'easy', 'easy', 'easy', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'hard', 'hard', 'hard', 'hard']
  
  for (let i = 0; i < Math.min(20, topics.length * 2); i++) {
    const topic = topics[i % topics.length]
    const diff = diffs[i] || 'medium'
    qs.push([
      `Which of the following best describes a key concept in ${topic}?`,
      [`A fundamental principle of ${topic}`, `An unrelated concept from another field`, `A common misconception about ${topic}`, `A secondary detail not tested on the AP exam`],
      0,
      `Understanding the fundamental principles of ${topic} is essential for the ${course.name} exam.`,
      diff,
    ])
  }
  return qs
}

/* ═══════════════════════════════════════════════════════════
   Generate practice test config 
   ═══════════════════════════════════════════════════════════ */

function generatePracticeConfig(course) {
  const topics = course.topics?.map(t => t.name) || course.topicNames || []
  const accent = course.accent[0]
  const qs = course.questions || generateGenericQuestions(course)
  
  const qBlock = qs.map(q => {
    const [question, options, correctAnswer, explanation] = q
    return `  { question: '${e(question)}', options: ['${options.map(o => e(o)).join("', '")}'], correctAnswer: ${correctAnswer}, explanation: '${e(explanation)}', topic: '${(course.prefix || 'general')}' }`
  }).join(',\n')

  const sections = (course.practiceSections || [{ id: 'mc', name: 'Multiple Choice', desc: `AP-style MC covering all units of ${course.name}.`, count: 30, time: 35 }])
    .map(s => `  {
    id: '${s.id}', name: '${e(s.name)}', description: '${e(s.desc)}',
    questionCount: ${s.count}, timeLimitMinutes: ${s.time},
  }`).join(',\n')

  const about = (course.aboutExam || []).map(col =>
    `    { heading: '${e(col.heading)}', items: [${col.items.map(i => `'${e(i)}'`).join(', ')}] }`
  ).join(',\n')

  return `import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const POOL: PracticeQuestion[] = [
${qBlock},
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export const config: PracticeExamConfig = {
  subject: '${e(course.name)}',
  description: '${e(course.practiceDesc || `Timed practice exam for ${course.name}.`)}',
  backLink: { href: '/${course.coursePageSlug || course.slug}', label: '${e(course.name)}' },
  ctaLinks: [
    { href: '/${course.slug}-diagnostic', label: 'Diagnostic Test' },
    { href: '/${course.slug}-daily-question', label: 'Daily Question' },
  ],
  accent: '${accent}',
  sections: [
${sections}
  ],
  getQuestions: async () => shuffle(POOL).slice(0, 30),
  aboutInfo: {
    title: 'About the ${e(course.name)} Exam',
    columns: [
${about}
    ],
  },
}
`
}

/* ═══════════════════════════════════════════════════════════
   Generate FRQ questions data
   ═══════════════════════════════════════════════════════════ */

function generateFRQData(course) {
  if (course.frqTime === 0) return null // CSP has no FRQ section
  
  const iface = course.short + 'FRQ'
  const frqs = course.frqs || generateGenericFRQs(course)
  
  const rubricBlock = (rubric) => rubric.map(r =>
    `          { points: ${r.pts}, description: '${e(r.desc)}', keywords: [${r.kw.map(k => `'${e(k)}'`).join(', ')}] }`
  ).join(',\n')

  const partBlock = (parts) => parts.map(p =>
    `      {
        label: '${e(p.label)}',
        prompt: '${e(p.prompt)}',
        maxPoints: ${p.pts},
        rubric: [
${rubricBlock(p.rubric)}
        ],
        sampleAnswer: '${e(p.sample)}',
      }`
  ).join(',\n')

  const longFrqs = frqs.filter(f => f.type === 'long')
  const shortFrqs = frqs.filter(f => f.type === 'short')
  
  const frqBlock = (arr) => arr.map(f =>
    `  {
    id: '${e(f.id)}',
    type: '${f.type}' as const,
    unit: 1,
    title: '${e(f.title)}',
    prompt: \`${f.prompt.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\`,
    parts: [
${partBlock(f.parts)}
    ],
    totalPoints: ${f.totalPoints},
    timeRecommendation: '${e(f.time)}',
    calculatorAllowed: ${f.calc || false},
  }`
  ).join(',\n')

  return `/**
 * ${course.name} FRQ Practice Questions
 * Based on College Board ${course.name} FRQ format
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

export interface ${iface} {
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

const longFRQs: ${iface}[] = [
${frqBlock(longFrqs)}
]

const shortFRQs: ${iface}[] = [
${frqBlock(shortFrqs)}
]

export const ap${course.short}FRQs: ${iface}[] = [...longFRQs, ...shortFRQs]

export function getAp${course.short}FRQs(): ${iface}[] {
  return ap${course.short}FRQs
}

export function getLongFRQs(): ${iface}[] {
  return longFRQs
}

export function getShortFRQs(): ${iface}[] {
  return shortFRQs
}

export function generateFullExamFRQs(): {
  long: ${iface}[]
  short: ${iface}[]
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
    totalTime: '${course.frqTime} min',
  }
}
`
}

function generateGenericFRQs(course) {
  const topics = course.topicNames || course.topics?.map(t => t.name) || []
  const t1 = topics[0] || 'Core Concepts'
  const t2 = topics[1] || 'Key Processes'
  const t3 = topics[Math.floor(topics.length / 2)] || 'Analysis'
  const t4 = topics[topics.length - 1] || 'Synthesis'
  
  return [
    {
      id: `${course.prefix}-long-1`, type: 'long', title: `${t1} Analysis`,
      prompt: `A student is studying ${t1} in ${course.name}. Using your knowledge of course concepts, analyze the following scenario and answer the questions below.`,
      totalPoints: 7, time: '~25 minutes', calc: false,
      parts: [
        { label: '(a)', prompt: `Define a key concept related to ${t1} and explain its significance.`, pts: 2, rubric: [{ pts: 1, desc: `Provides an accurate definition of a concept from ${t1}`, kw: ['define', 'definition', 'concept', 'means', 'refers to'] }, { pts: 1, desc: 'Explains significance or application', kw: ['significant', 'important', 'because', 'therefore', 'impact', 'effect'] }], sample: `A key concept in ${t1} is [concept]. This concept is significant because it helps explain [application]. Understanding this concept is essential for analyzing broader patterns in ${course.name}.` },
        { label: '(b)', prompt: `Identify TWO specific examples that illustrate ${t1}.`, pts: 2, rubric: [{ pts: 1, desc: 'Provides one relevant example', kw: ['example', 'instance', 'such as', 'for instance', 'case'] }, { pts: 1, desc: 'Provides a second relevant example', kw: ['another', 'additionally', 'second', 'also', 'furthermore'] }], sample: `Two examples of ${t1} include: (1) [Example 1 with specific details], and (2) [Example 2 with specific details]. Both examples demonstrate the core principles of this topic.` },
        { label: '(c)', prompt: `Explain how ${t1} connects to ${t2}.`, pts: 2, rubric: [{ pts: 1, desc: `Identifies a valid connection between ${t1} and ${t2}`, kw: ['connect', 'relate', 'link', 'influence', 'affect', 'lead to'] }, { pts: 1, desc: 'Explains the mechanism of connection', kw: ['because', 'through', 'by means of', 'resulting in', 'mechanism'] }], sample: `${t1} connects to ${t2} through shared underlying principles. Specifically, the processes that drive ${t1} also influence ${t2} because [mechanism]. This interconnection is a key theme in ${course.name}.` },
        { label: '(d)', prompt: `Evaluate the long-term implications of changes in ${t1}.`, pts: 1, rubric: [{ pts: 1, desc: 'Provides a thoughtful evaluation of implications', kw: ['implication', 'consequence', 'future', 'long-term', 'result', 'outcome', 'trend'] }], sample: `Changes in ${t1} have significant long-term implications including [consequence]. As these trends continue, we can expect [future development], which will require [response or adaptation].` },
      ],
    },
    {
      id: `${course.prefix}-long-2`, type: 'long', title: `${t3} & ${t4}`,
      prompt: `Consider the relationship between ${t3} and ${t4}. Using evidence and reasoning from ${course.name}, address the following.`,
      totalPoints: 7, time: '~25 minutes', calc: false,
      parts: [
        { label: '(a)', prompt: `Compare and contrast ${t3} with ${t4}.`, pts: 2, rubric: [{ pts: 1, desc: `Identifies a valid similarity between ${t3} and ${t4}`, kw: ['similar', 'both', 'share', 'common', 'alike'] }, { pts: 1, desc: `Identifies a valid difference between ${t3} and ${t4}`, kw: ['differ', 'unlike', 'contrast', 'whereas', 'however', 'but'] }], sample: `${t3} and ${t4} are similar in that they both [shared characteristic]. However, they differ in that ${t3} focuses on [aspect] while ${t4} emphasizes [different aspect].` },
        { label: '(b)', prompt: `Explain ONE cause-and-effect relationship within ${t3}.`, pts: 2, rubric: [{ pts: 1, desc: 'Identifies a valid cause', kw: ['cause', 'because', 'due to', 'result of', 'driven by'] }, { pts: 1, desc: 'Explains the resulting effect', kw: ['effect', 'result', 'consequence', 'leads to', 'outcome'] }], sample: `In ${t3}, [cause] leads to [effect]. This cause-and-effect relationship is important because it explains why [pattern or outcome] occurs.` },
        { label: '(c)', prompt: `Using a specific example, explain how ${t4} has changed over time.`, pts: 2, rubric: [{ pts: 1, desc: 'Provides a specific historical or real-world example', kw: ['example', 'specific', 'instance', 'case', 'historical'] }, { pts: 1, desc: 'Explains the change over time', kw: ['change', 'evolved', 'shifted', 'transformed', 'over time', 'developed'] }], sample: `${t4} has changed significantly over time. For example, [specific case] demonstrates how [aspect] evolved from [earlier state] to [current state] due to [driving factor].` },
        { label: '(d)', prompt: `Predict how current trends in ${t4} might develop in the future.`, pts: 1, rubric: [{ pts: 1, desc: 'Makes a reasonable prediction supported by course concepts', kw: ['predict', 'future', 'likely', 'expect', 'trend', 'continue', 'may'] }], sample: `Based on current trends, ${t4} is likely to [predicted development] because [supporting reasoning from course concepts]. This prediction is supported by [evidence or pattern].` },
      ],
    },
    {
      id: `${course.prefix}-short-1`, type: 'short', title: `${topics[2] || 'Key Concept'} Application`,
      prompt: `Apply your knowledge of ${topics[2] || 'key concepts'} from ${course.name} to the following scenario.`,
      totalPoints: 4, time: '~12 minutes', calc: false,
      parts: [
        { label: '(a)', prompt: `Define ${topics[2] || 'this concept'} in the context of ${course.name}.`, pts: 1, rubric: [{ pts: 1, desc: 'Provides accurate definition', kw: ['define', 'means', 'refers', 'concept', 'term'] }], sample: `${topics[2] || 'This concept'} refers to [definition]. It is a fundamental component of ${course.name}.` },
        { label: '(b)', prompt: `Provide ONE specific example.`, pts: 1, rubric: [{ pts: 1, desc: 'Provides a relevant, specific example', kw: ['example', 'instance', 'such as', 'case', 'specific'] }], sample: `A specific example of this concept is [detailed example with specific names, dates, or data].` },
        { label: '(c)', prompt: `Explain the significance of this concept for the AP exam.`, pts: 1, rubric: [{ pts: 1, desc: 'Explains why the concept is important for the exam', kw: ['significant', 'important', 'tested', 'appears', 'connects', 'multiple'] }], sample: `This concept is significant because it connects to multiple units and appears frequently on the AP exam in both MC and FRQ formats.` },
        { label: '(d)', prompt: `Explain ONE limitation or criticism of this concept.`, pts: 1, rubric: [{ pts: 1, desc: 'Identifies a valid limitation or criticism', kw: ['limitation', 'criticism', 'however', 'does not', 'fails', 'overlooks', 'simplistic'] }], sample: `One limitation is that [this concept] [specific criticism]. This limitation is important to recognize because [reasoning].` },
      ],
    },
    {
      id: `${course.prefix}-short-2`, type: 'short', title: `${topics[3] || 'Analysis'} Skills`,
      prompt: `Demonstrate your analytical skills related to ${topics[3] || 'course content'} in ${course.name}.`,
      totalPoints: 4, time: '~12 minutes', calc: false,
      parts: [
        { label: '(a)', prompt: `Identify a key debate or controversy related to this topic.`, pts: 1, rubric: [{ pts: 1, desc: 'Identifies a relevant debate', kw: ['debate', 'controversy', 'disagree', 'argue', 'dispute', 'question'] }], sample: `A key debate involves [description of the controversy]. Different perspectives on this issue include [perspective 1] and [perspective 2].` },
        { label: '(b)', prompt: `Explain ONE argument on each side of this debate.`, pts: 1, rubric: [{ pts: 1, desc: 'Presents arguments from multiple sides', kw: ['on one hand', 'however', 'alternatively', 'supporters', 'critics', 'proponents', 'opponents'] }], sample: `Proponents argue that [argument for one side]. Critics counter that [argument for the other side].` },
        { label: '(c)', prompt: `Using evidence, explain which side you find more persuasive.`, pts: 1, rubric: [{ pts: 1, desc: 'Takes a position with supporting evidence', kw: ['because', 'evidence', 'support', 'persuasive', 'convincing', 'therefore', 'data'] }], sample: `I find [position] more persuasive because [specific evidence]. The evidence suggests that [conclusion].` },
        { label: '(d)', prompt: `Explain how this debate reflects broader themes in ${course.name}.`, pts: 1, rubric: [{ pts: 1, desc: 'Connects to course themes', kw: ['theme', 'broader', 'connects', 'reflects', 'illustrates', 'course'] }], sample: `This debate reflects broader themes in ${course.name} because [connection to course themes]. It illustrates [broader principle or pattern].` },
      ],
    },
  ]
}

/* ═══════════════════════════════════════════════════════════
   Generate FRQ page.tsx
   ═══════════════════════════════════════════════════════════ */

function generateFRQPage(course) {
  const c = course
  const a1 = c.accent[0]
  const a2 = c.accent[1] || c.accent[0]
  const iface = c.short + 'FRQ'
  const tipsList = (c.frqTips || [
    `Use specific ${c.name} vocabulary and terminology`,
    'Define key terms before applying them',
    'Reference specific examples, data, or cases',
    'For explanation questions, state the mechanism not just the outcome',
    `Connect your answer to broader themes in ${c.name}`,
    'Budget your time according to point values',
  ]).map(t => `              <li className="flex items-start gap-2">
                <span className="text-${a1}-500 mt-0.5">✓</span>
                ${t}
              </li>`).join('\n')

  const frqStruct = (c.frqStructure || [`FRQs in ${c.frqTime} minutes`, 'Long and short format questions', 'Rubric-based scoring']).map(s => `                  <li>• ${s}</li>`).join('\n')
  const frqTest = (c.frqTested || [`Applying ${c.name} concepts`, 'Analyzing data and evidence', 'Making evidence-based arguments', 'Connecting ideas across units']).map(s => `                  <li>• ${s}</li>`).join('\n')

  return `'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import {
  getAp${c.short}FRQs,
  getLongFRQs,
  getShortFRQs,
  generateFullExamFRQs,
  type ${iface},
  type FRQRubricItem,
} from '@/data/${c.slug}-frq/questions'

function gradeResponse(
  response: string,
  rubric: FRQRubricItem[]
): { pointsEarned: number; breakdown: { earned: boolean; item: FRQRubricItem }[] } {
  const lower = response.toLowerCase().replace(/\\s+/g, ' ')
  const breakdown = rubric.map((item) => {
    const earned = item.keywords.some((kw) => lower.includes(kw.toLowerCase()))
    return { earned, item }
  })
  return {
    pointsEarned: breakdown.filter((b) => b.earned).reduce((s, b) => s + b.item.points, 0),
    breakdown,
  }
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return \`\${mins}:\${secs.toString().padStart(2, '0')}\`
}

type Mode = 'menu' | 'practice' | 'timed' | 'results'
type Filter = 'all' | 'long' | 'short'

export default function AP${c.short}FRQPage() {
  const { status } = useSession()
  const router = useRouter()

  const [mode, setMode] = useState<Mode>('menu')
  const [filter, setFilter] = useState<Filter>('all')
  const [frqs, setFrqs] = useState<${iface}[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [results, setResults] = useState<Record<string, ReturnType<typeof gradeResponse>>>({})
  const [showSample, setShowSample] = useState<Record<string, boolean>>({})
  const [showRubric, setShowRubric] = useState<Record<string, boolean>>({})
  const [timeRemaining, setTimeRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/${c.slug}-frq')
    }
  }, [status, router])

  useEffect(() => {
    if (mode !== 'timed' || timeRemaining <= 0) return
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [mode, timeRemaining])

  const startPractice = useCallback((f: Filter) => {
    setFilter(f)
    const pool = f === 'long' ? getLongFRQs() : f === 'short' ? getShortFRQs() : getAp${c.short}FRQs()
    setFrqs(pool)
    setCurrentIdx(0)
    setResponses({})
    setResults({})
    setShowSample({})
    setShowRubric({})
    setMode('practice')
  }, [])

  const startTimedExam = useCallback(() => {
    const { long, short } = generateFullExamFRQs()
    setFrqs([...long, ...short])
    setCurrentIdx(0)
    setResponses({})
    setResults({})
    setShowSample({})
    setShowRubric({})
    setTimeRemaining(${c.frqTime} * 60)
    setMode('timed')
  }, [])

  const handleGrade = (frqId: string, partLabel: string, rubric: FRQRubricItem[]) => {
    const key = \`\${frqId}-\${partLabel}\`
    const response = responses[key] || ''
    if (!response.trim()) return
    setResults((prev) => ({ ...prev, [key]: gradeResponse(response, rubric) }))
  }

  const finishExam = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    for (const frq of frqs) {
      for (const part of frq.parts) {
        const key = \`\${frq.id}-\${part.label}\`
        if (!results[key] && responses[key]?.trim()) {
          setResults((prev) => ({
            ...prev,
            [key]: gradeResponse(responses[key], part.rubric),
          }))
        }
      }
    }
    setMode('results')
  }

  const currentFRQ = frqs[currentIdx]

  const totalPossible = frqs.reduce((s, f) => s + f.totalPoints, 0)
  const totalEarned = frqs.reduce((s, f) => {
    return (
      s +
      f.parts.reduce((ps, p) => {
        const key = \`\${f.id}-\${p.label}\`
        return ps + (results[key]?.pointsEarned || 0)
      }, 0)
    )
  }, 0)

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-500">Loading...</div>
      </div>
    )
  }

  if (mode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-${a1}-50 via-white to-${a2}-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link
            href="/${c.coursePageSlug || c.slug}"
            className="inline-flex items-center gap-1 text-sm text-${a1}-600 dark:text-${a1}-400 hover:underline mb-6"
          >
            &larr; Back to ${c.name}
          </Link>

          <div className="text-center mb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-${a1}-100 px-4 py-1.5 text-sm font-semibold text-${a1}-700 dark:bg-${a1}-900/40 dark:text-${a1}-300">
              📝 Free Response Practice
            </div>
            <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-3">
              ${c.name}{' '}
              <span className="bg-gradient-to-r from-${a1}-600 to-${a2}-600 bg-clip-text text-transparent">
                FRQ Practice
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Practice with ${c.name} free-response questions. Each question includes a scoring
              rubric and sample response.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">${c.name} FRQ Format</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Section II Structure</h4>
                <ul className="space-y-1">
${frqStruct}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">What&apos;s Tested</h4>
                <ul className="space-y-1">
${frqTest}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <button onClick={() => startPractice('long')} className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-${a1}-500 to-${a2}-500 text-white text-xl">📄</div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-${a1}-600 dark:group-hover:text-${a1}-400">Long FRQs</h3>
                  <p className="text-xs text-gray-500">${c.frqLongPts || '7'} points · ~25 min each</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">${c.frqLongDesc || `Multi-part problems covering key topics in ${c.name}.`}</p>
            </button>

            <button onClick={() => startPractice('short')} className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl">📝</div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">Short FRQs</h3>
                  <p className="text-xs text-gray-500">${c.frqShortPts || '4'} points · ~12 min each</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">${c.frqShortDesc || `Focused questions on specific topics in ${c.name}.`}</p>
            </button>

            <button onClick={() => startPractice('all')} className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xl">📚</div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">All FRQs</h3>
                  <p className="text-xs text-gray-500">{getAp${c.short}FRQs().length} questions · Untimed</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Browse and practice all available FRQ questions at your own pace.</p>
            </button>

            <button onClick={startTimedExam} className="group rounded-2xl border-2 border-${a1}-300 dark:border-${a1}-600 bg-white dark:bg-gray-800 p-6 text-left hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white text-xl">⏱️</div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">Timed Exam Simulation</h3>
                  <p className="text-xs text-gray-500">${c.frqTime} min</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Simulate the real ${c.name} Section II under exam conditions with a countdown timer.</p>
            </button>
          </div>

          <div className="bg-${a1}-50 dark:bg-${a1}-900/20 rounded-2xl p-6 border border-${a1}-200 dark:border-${a1}-700">
            <h3 className="font-bold text-${a1}-800 dark:text-${a1}-300 mb-3">💡 FRQ Tips</h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-${a1}-700 dark:text-${a1}-400">
${tipsList}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  if (mode === 'results') {
    const percentage = totalPossible > 0 ? Math.round((totalEarned / totalPossible) * 100) : 0
    const estimatedScore = percentage >= 72 ? 5 : percentage >= 58 ? 4 : percentage >= 43 ? 3 : percentage >= 30 ? 2 : 1

    return (
      <div className="min-h-screen bg-gradient-to-br from-${a1}-50 via-white to-${a2}-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-6 text-center">FRQ Results</h1>
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 text-center mb-8">
            <div className="text-6xl font-black mb-2">
              <span className={percentage >= 70 ? 'text-green-600' : percentage >= 50 ? 'text-yellow-600' : 'text-red-600'}>{totalEarned}/{totalPossible}</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{percentage}% correct</p>
            <div className="inline-flex items-center gap-2 text-lg font-bold bg-${a1}-100 dark:bg-${a1}-900/30 text-${a1}-700 dark:text-${a1}-300 px-4 py-2 rounded-xl">Estimated AP Score: {estimatedScore}/5</div>
          </div>
          <div className="space-y-4 mb-8">
            {frqs.map((frq) => {
              const frqTotal = frq.parts.reduce((s, p) => { const key = \`\${frq.id}-\${p.label}\`; return s + (results[key]?.pointsEarned || 0) }, 0)
              return (
                <div key={frq.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={\`text-xs font-bold px-2 py-0.5 rounded \${frq.type === 'long' ? 'bg-${a1}-100 dark:bg-${a1}-900/30 text-${a1}-600' : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600'}\`}>{frq.type === 'long' ? 'Long FRQ' : 'Short FRQ'}</span>
                      <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">{frq.title}</span>
                    </div>
                    <span className={\`font-bold \${frqTotal >= frq.totalPoints * 0.7 ? 'text-green-600' : frqTotal >= frq.totalPoints * 0.4 ? 'text-yellow-600' : 'text-red-600'}\`}>{frqTotal}/{frq.totalPoints}</span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setMode('menu')} className="px-6 py-3 rounded-xl bg-gradient-to-r from-${a1}-600 to-${a2}-600 text-white font-semibold hover:shadow-lg transition">Practice More</button>
            <Link href="/${c.coursePageSlug || c.slug}" className="px-6 py-3 rounded-xl border-2 border-${a1}-300 dark:border-${a1}-600 text-${a1}-700 dark:text-${a1}-400 font-semibold hover:bg-${a1}-50 dark:hover:bg-${a1}-900/20 transition">Back to ${c.name}</Link>
          </div>
        </div>
      </div>
    )
  }

  if (!currentFRQ) return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-500">No questions available.</p></div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-${a1}-50 via-white to-${a2}-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <button onClick={() => setMode('menu')} className="text-sm text-${a1}-600 dark:text-${a1}-400 hover:underline mb-1">&larr; Back to Menu</button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">{mode === 'timed' ? 'Timed FRQ Exam' : \`FRQ Practice (\${filter})\`}</h1>
          </div>
          <div className="flex items-center gap-4">
            {mode === 'timed' && (
              <div className={\`font-mono text-lg font-bold px-4 py-2 rounded-xl \${timeRemaining <= 300 ? 'bg-red-100 dark:bg-red-900/30 text-red-600 animate-pulse' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'}\`}>⏱ {formatTime(timeRemaining)}</div>
            )}
            <span className="text-sm text-gray-500">{currentIdx + 1} / {frqs.length}</span>
          </div>
        </div>

        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-${a1}-500 to-${a2}-500 rounded-full transition-all" style={{ width: \`\${((currentIdx + 1) / frqs.length) * 100}%\` }} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-${a1}-600 to-${a2}-600 text-white px-6 py-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className={\`text-xs font-bold px-2 py-0.5 rounded mr-2 \${currentFRQ.type === 'long' ? 'bg-${a1}-800' : 'bg-purple-700'}\`}>{currentFRQ.type === 'long' ? 'Long FRQ' : 'Short FRQ'}</span>
                <h2 className="text-lg font-bold mt-1">{currentFRQ.title}</h2>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="bg-${a1}-700 px-3 py-1 rounded-full">{currentFRQ.totalPoints} pts</span>
                <span className="bg-${a1}-700 px-3 py-1 rounded-full">{currentFRQ.timeRecommendation}</span>
              </div>
            </div>
          </div>

          <div className="px-6 py-5">
            <div className="bg-${a1}-50 dark:bg-${a1}-900/20 rounded-xl p-5 mb-6 border border-${a1}-200 dark:border-${a1}-700">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{currentFRQ.prompt}</ReactMarkdown>
              </div>
            </div>

            <div className="space-y-6">
              {currentFRQ.parts.map((part) => {
                const key = \`\${currentFRQ.id}-\${part.label}\`
                const result = results[key]
                return (
                  <div key={part.label} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="bg-${a1}-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{part.label}</span>
                        <span className="text-sm text-${a1}-600 dark:text-${a1}-400 font-medium">({part.maxPoints} {part.maxPoints === 1 ? 'point' : 'points'})</span>
                      </div>
                      {result && <span className={\`font-bold text-sm \${result.pointsEarned === part.maxPoints ? 'text-green-600' : result.pointsEarned > 0 ? 'text-yellow-600' : 'text-red-600'}\`}>{result.pointsEarned}/{part.maxPoints}</span>}
                    </div>
                    <div className="mb-3 prose prose-sm max-w-none dark:prose-invert"><ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{part.prompt}</ReactMarkdown></div>
                    <textarea value={responses[key] || ''} onChange={(ev) => setResponses((prev) => ({ ...prev, [key]: ev.target.value }))} placeholder="Write your response here..." className="w-full h-36 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-y text-sm focus:ring-2 focus:ring-${a1}-500 focus:border-${a1}-500" disabled={!!result} maxLength={2000} />
                    {!result ? (
                      <div className="mt-3"><button onClick={() => handleGrade(currentFRQ.id, part.label, part.rubric)} className="px-4 py-2 text-sm bg-${a1}-600 text-white rounded-lg hover:bg-${a1}-700 transition-colors disabled:opacity-50 font-medium" disabled={!(responses[key] || '').trim()}>Grade Part {part.label}</button></div>
                    ) : (
                      <div className="mt-3 space-y-3">
                        <div className="space-y-1">
                          {result.breakdown.map((b, i) => (
                            <div key={i} className={\`text-xs flex items-start gap-2 p-2 rounded \${b.earned ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}\`}>
                              <span>{b.earned ? '✅' : '❌'}</span>
                              <span className={b.earned ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>({b.item.points} pt) {b.item.description}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <button onClick={() => setShowRubric((prev) => ({ ...prev, [key]: !prev[key] }))} className="text-xs px-3 py-1.5 rounded-lg bg-${a1}-100 dark:bg-${a1}-900/30 text-${a1}-700 dark:text-${a1}-300 hover:bg-${a1}-200 transition font-medium">{showRubric[key] ? 'Hide' : 'Show'} Full Rubric</button>
                          <button onClick={() => setShowSample((prev) => ({ ...prev, [key]: !prev[key] }))} className="text-xs px-3 py-1.5 rounded-lg bg-${a2}-100 dark:bg-${a2}-900/30 text-${a2}-700 dark:text-${a2}-300 hover:bg-${a2}-200 transition font-medium">{showSample[key] ? 'Hide' : 'Show'} Sample Answer</button>
                        </div>
                        {showRubric[key] && (
                          <div className="bg-${a1}-50 dark:bg-${a1}-900/20 rounded-lg p-4 border border-${a1}-200 dark:border-${a1}-700">
                            <h5 className="font-semibold text-${a1}-800 dark:text-${a1}-300 mb-2 text-xs">Scoring Rubric:</h5>
                            <ul className="space-y-1">{part.rubric.map((r, i) => <li key={i} className="text-xs text-${a1}-700 dark:text-${a1}-400 flex items-start gap-2"><span className="font-bold">{r.points}pt:</span>{r.description}</li>)}</ul>
                          </div>
                        )}
                        {showSample[key] && (
                          <div className="bg-${a2}-50 dark:bg-${a2}-900/20 rounded-lg p-4 border border-${a2}-200 dark:border-${a2}-700">
                            <h5 className="font-semibold text-${a2}-800 dark:text-${a2}-300 mb-2 text-xs">Sample Response:</h5>
                            <div className="prose prose-sm max-w-none dark:prose-invert text-xs"><ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{part.sampleAnswer}</ReactMarkdown></div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))} className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition font-medium disabled:opacity-50" disabled={currentIdx === 0}>&larr; Previous</button>
          <div className="flex gap-2">
            {frqs.map((_, i) => (
              <button key={i} onClick={() => setCurrentIdx(i)} className={\`w-8 h-8 rounded-full text-xs font-bold transition \${i === currentIdx ? 'bg-${a1}-600 text-white' : frqs[i].parts.every((p) => results[\`\${frqs[i].id}-\${p.label}\`]) ? 'bg-${a1}-100 dark:bg-${a1}-900/30 text-${a1}-700' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}\`}>{i + 1}</button>
            ))}
          </div>
          {currentIdx < frqs.length - 1 ? (
            <button onClick={() => setCurrentIdx(currentIdx + 1)} className="px-5 py-2.5 rounded-xl bg-${a1}-600 text-white hover:bg-${a1}-700 transition font-medium">Next &rarr;</button>
          ) : (
            <button onClick={finishExam} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-${a1}-600 to-${a2}-600 text-white hover:shadow-lg transition font-medium">Finish &amp; Score</button>
          )}
        </div>
      </div>
    </div>
  )
}
`
}

/* ═══════════════════════════════════════════════════════════
   Generate practice page.tsx
   ═══════════════════════════════════════════════════════════ */

function generatePracticePage(course) {
  return `'use client'
import PracticeExam from '@/components/PracticeExam'
import { config } from '@/data/${course.slug}-practice/config'
export default function Page() { return <PracticeExam {...config} /> }
`
}

/* ═══════════════════════════════════════════════════════════
   Write all files
   ═══════════════════════════════════════════════════════════ */

const allCourses = [...courses, ...genericCourses]
let stats = { banks: 0, practice: 0, frqData: 0, frqPage: 0, practicePage: 0 }

for (const course of allCourses) {
  // 1. Competitive question bank
  const bankPath = path.join(ROOT, `src/data/competitive-questions/${course.slug}-bank.ts`)
  if (!fs.existsSync(bankPath)) {
    fs.writeFileSync(bankPath, generateCompetitiveBank(course), 'utf8')
    stats.banks++
  }

  // 2. Practice test data
  const practiceDir = path.join(ROOT, `src/data/${course.slug}-practice`)
  const practiceConfigPath = path.join(practiceDir, 'config.ts')
  if (!fs.existsSync(practiceConfigPath)) {
    fs.mkdirSync(practiceDir, { recursive: true })
    fs.writeFileSync(practiceConfigPath, generatePracticeConfig(course), 'utf8')
    stats.practice++
  }

  // 3. Practice page
  const practicePageDir = path.join(ROOT, `src/app/${course.slug}-practice`)
  const practicePagePath = path.join(practicePageDir, 'page.tsx')
  if (!fs.existsSync(practicePagePath)) {
    fs.mkdirSync(practicePageDir, { recursive: true })
    fs.writeFileSync(practicePagePath, generatePracticePage(course), 'utf8')
    stats.practicePage++
  }

  // 4. FRQ data
  if (course.frqTime > 0) {  // Skip CSP which has no FRQ
    const frqDir = path.join(ROOT, `src/data/${course.slug}-frq`)
    const frqPath = path.join(frqDir, 'questions.ts')
    if (!fs.existsSync(frqPath)) {
      fs.mkdirSync(frqDir, { recursive: true })
      const frqContent = generateFRQData(course)
      if (frqContent) {
        fs.writeFileSync(frqPath, frqContent, 'utf8')
        stats.frqData++
      }
    }

    // 5. FRQ page
    const frqPageDir = path.join(ROOT, `src/app/${course.slug}-frq`)
    const frqPagePath = path.join(frqPageDir, 'page.tsx')
    if (!fs.existsSync(frqPagePath)) {
      fs.mkdirSync(frqPageDir, { recursive: true })
      fs.writeFileSync(frqPagePath, generateFRQPage(course), 'utf8')
      stats.frqPage++
    }
  }
}

console.log(`Done!`)
console.log(`  Competitive banks: ${stats.banks}`)
console.log(`  Practice configs:  ${stats.practice}`)
console.log(`  Practice pages:    ${stats.practicePage}`)
console.log(`  FRQ data files:    ${stats.frqData}`)
console.log(`  FRQ pages:         ${stats.frqPage}`)
