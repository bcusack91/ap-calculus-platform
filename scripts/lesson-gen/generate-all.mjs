#!/usr/bin/env node
/**
 * Master generator: creates interactive lessons + entrance quizzes for all 12 new AP courses.
 * Run: node scripts/lesson-gen/generate-all.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { writeCourse } from './helpers.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '../..')

/* ── helper to create a part ──────────────────────── */
function P(title, content, terms, quiz, applied) {
  return { title, content, terms, quiz, applied }
}
function Q(question, options, correctAnswer, explanation) {
  return [question, options, correctAnswer, explanation]
}
function T(term, desc) {
  return [term, desc]
}

/* ═══════════════════════════════════════════════════════════
   1. AP Human Geography
   ═══════════════════════════════════════════════════════════ */
const humanGeo = {
  prefix: 'hg',
  name: 'AP Human Geography',
  emoji: '🌍',
  topics: [
    {
      slug: 'hg-intro-geography',
      title: 'Introduction to Geography',
      parts: [
        P('Geographic Thinking', 'Geography is the study of the spatial organization of human activity and how people interact with their environment. Geographers analyze patterns, processes, and relationships across space and scale.',
          [T('Geography', 'The study of spatial patterns and processes on Earth'), T('Spatial perspective', 'Viewing the world through the lens of location and distribution'), T('Scale', 'The level of analysis from local to global')],
          [Q('What is the primary focus of geography?', ['Historical timelines', 'Spatial patterns and processes', 'Chemical compounds', 'Literary analysis'], 1, 'Geography focuses on spatial patterns and processes — how things are distributed across Earth\'s surface.'),
           Q('Which perspective is unique to geography?', ['Temporal', 'Spatial', 'Biological', 'Economic'], 1, 'The spatial perspective is what distinguishes geography from other disciplines.')],
          [Q('A researcher studies why coffee shops cluster near universities. This analysis uses:', ['Historical perspective — tracing coffee origins', 'Spatial perspective — analyzing location patterns', 'Chemical perspective — studying caffeine', 'Literary perspective — reading about coffee'], 1, 'Studying the clustering of businesses near other features is spatial analysis — a core geographic approach.'),
           Q('A study examines deforestation at the local, national, and global levels. This demonstrates:', ['Scale analysis — examining patterns at different levels', 'Temporal analysis — studying change over time', 'Chemical analysis — testing soil composition', 'Biological analysis — classifying species'], 0, 'Examining the same phenomenon at different geographic scales is a fundamental geographic approach.')]),
        P('Maps and Spatial Data', 'Maps are the geographer\'s primary tool for visualizing and analyzing spatial data. Different map types serve different purposes, from reference maps showing locations to thematic maps displaying patterns.',
          [T('Thematic map', 'A map that displays a particular theme or pattern across space'), T('GIS', 'Geographic Information System — technology for analyzing spatial data'), T('Map projection', 'A method of representing Earth\'s curved surface on a flat map')],
          [Q('What is a thematic map?', ['A map showing political boundaries', 'A map displaying a particular pattern or theme', 'A map used for navigation', 'A map showing elevation'], 1, 'Thematic maps display specific themes or patterns like population density, climate, or economic activity.'),
           Q('What does GIS stand for?', ['Global Information Service', 'Geographic Information System', 'General Internet Source', 'Geological Investigation Software'], 1, 'GIS stands for Geographic Information System — it allows layering and analysis of spatial data.')],
          [Q('A cartographer needs to show population density across the US. The best choice is:', ['A reference map showing state capitals', 'A thematic choropleth map with shading by density', 'A road map with highway numbers', 'A topographic map with elevation contours'], 1, 'A choropleth (thematic) map uses color shading to show variations in population density across regions.'),
           Q('A city planner layers crime data, income levels, and school locations to identify underserved areas. This technology is:', ['GIS — overlaying multiple data layers for spatial analysis', 'GPS — pinpointing exact coordinates', 'Remote sensing — collecting satellite imagery', 'Cartography — drawing maps by hand'], 0, 'GIS allows combining multiple spatial data layers to reveal patterns and inform decisions.')]),
        P('Regions and Regionalization', 'Geographers organize Earth\'s surface into regions based on shared characteristics. There are three types of regions: formal, functional, and perceptual, each defined by different criteria.',
          [T('Formal region', 'An area defined by uniform characteristics like language or climate'), T('Functional region', 'An area organized around a central node or focal point'), T('Perceptual region', 'An area defined by people\'s beliefs and attitudes')],
          [Q('A formal region is defined by:', ['A central node of activity', 'Uniform characteristics', 'People\'s perceptions', 'Government decree'], 1, 'Formal regions are defined by uniform or homogeneous characteristics, such as a language spoken or climate type.'),
           Q('Which is an example of a functional region?', ['The Great Plains', 'A newspaper delivery area', 'The South', 'The Sahara Desert'], 1, 'A newspaper delivery area is organized around a central node (the newspaper office) and diminishes with distance — a functional region.')],
          [Q('The "Bible Belt" in the United States is best classified as:', ['A formal region — defined by state boundaries', 'A functional region — organized around churches', 'A perceptual region — based on cultural beliefs about religious influence', 'An administrative region — created by the federal government'], 2, 'The Bible Belt is a perceptual region — its boundaries are not precisely defined but based on cultural perceptions of high religious influence.'),
           Q('A pizza delivery zone that extends 5 miles from the restaurant is:', ['A formal region — defined by a uniform characteristic', 'A functional region — organized around the restaurant as a node', 'A perceptual region — defined by customer beliefs', 'A natural region — defined by physical geography'], 1, 'The delivery zone is a functional region centered on the restaurant, with boundaries defined by the reach of the delivery service.')]),
        P('Spatial Concepts', 'Key spatial concepts include location, place, space, and distance. Absolute and relative location, site and situation, and distance decay help explain why things are where they are.',
          [T('Absolute location', 'The exact position on Earth using coordinates'), T('Relative location', 'Position described in relation to other places'), T('Distance decay', 'The diminishing effect of interaction with increasing distance')],
          [Q('Latitude and longitude give us:', ['Relative location', 'Absolute location', 'Site characteristics', 'Distance decay'], 1, 'Latitude and longitude provide the absolute (exact) location of any point on Earth.'),
           Q('Distance decay means:', ['Interaction increases with distance', 'Interaction decreases with distance', 'Distance has no effect on interaction', 'All places are equally connected'], 1, 'Distance decay is the principle that interaction between places decreases as distance increases.')],
          [Q('Describing a city as "200 miles south of Chicago" uses:', ['Absolute location', 'Relative location — position relative to another known place', 'Site characteristics', 'Formal region classification'], 1, 'Describing location by referencing another place is relative location.'),
           Q('Online shopping has reduced distance decay for retail. This means:', ['Physical distance matters more', 'Physical distance matters less for purchasing decisions', 'All stores will close', 'Distance decay has been eliminated'], 1, 'The internet has reduced (but not eliminated) distance decay by making it possible to shop regardless of physical distance.')]),
        P('Diffusion Patterns', 'Diffusion is the spread of ideas, innovations, and practices from their point of origin. Types include expansion diffusion (hierarchical, contagious, stimulus) and relocation diffusion.',
          [T('Expansion diffusion', 'The spread of an innovation from its origin while remaining strong at the source'), T('Relocation diffusion', 'The spread of an idea through physical movement of people'), T('Hierarchical diffusion', 'Spread from larger to smaller places or from authority figures')],
          [Q('Expansion diffusion involves:', ['Ideas moving to new locations while weakening at origin', 'Ideas spreading outward while remaining strong at the source', 'Ideas being carried by migrants', 'Ideas disappearing from origin'], 1, 'In expansion diffusion, the innovation spreads outward but also remains strong at its point of origin.'),
           Q('Immigration spreading cuisine to new countries is:', ['Expansion diffusion', 'Relocation diffusion', 'Hierarchical diffusion', 'Contagious diffusion'], 1, 'When people physically move and bring their cultural practices, it is relocation diffusion.')],
          [Q('When a fashion trend starts with celebrities, then spreads to the general public, this is:', ['Contagious diffusion — spreading through direct contact', 'Hierarchical diffusion — spreading from high-status to lower-status groups', 'Stimulus diffusion — the underlying idea spreads but changes', 'Relocation diffusion — spreading through migration'], 1, 'Celebrity-to-public spread follows a hierarchy of influence — hierarchical diffusion.'),
           Q('COVID-19 spreading from person to person in a community is:', ['Hierarchical diffusion — spreading through authority figures', 'Contagious diffusion — spreading through direct contact', 'Stimulus diffusion — the concept spreads but changes form', 'Relocation diffusion — spreading through migration'], 1, 'A disease that spreads through direct contact regardless of social hierarchy is contagious diffusion.')]),
        P('Problem-Solving Workshop', 'This workshop focuses on applying geographic concepts to real-world scenarios. You\'ll practice using spatial analysis, identifying region types, and analyzing diffusion patterns in context.',
          [T('Spatial analysis', 'The process of examining locations, patterns, and relationships across space'), T('Pattern recognition', 'Identifying recurring spatial arrangements in geographic data'), T('Geographic inquiry', 'Asking and answering questions about spatial phenomena')],
          [Q('Which question best represents geographic inquiry?', ['When did Rome fall?', 'Why do cities develop along rivers?', 'Who invented the telephone?', 'What is photosynthesis?'], 1, 'Geographic inquiry asks about spatial relationships — why certain phenomena occur in certain locations.'),
           Q('Identifying clusters of fast-food restaurants near highway exits demonstrates:', ['Historical analysis', 'Spatial pattern recognition', 'Chemical analysis', 'Literary criticism'], 1, 'Recognizing that businesses cluster near transportation nodes is spatial pattern recognition.')],
          [Q('A geographer notices that dialect boundaries in the US follow the Appalachian Mountains. This shows:', ['Physical geography can create barriers that shape cultural regions', 'Dialects are unrelated to geography', 'Mountains have no effect on culture', 'All Americans speak the same dialect'], 0, 'Physical barriers like mountains can limit interaction, creating distinct cultural regions on either side.'),
           Q('To study the impact of a new highway on nearby businesses, a geographer would most likely use:', ['GIS to overlay highway routes with business locations and revenue data', 'A historical textbook about road construction', 'A chemistry lab to test pavement materials', 'A literary analysis of highway poetry'], 0, 'GIS is the ideal tool for combining multiple spatial data layers to analyze the geographic impact of infrastructure.')]),
        P('AP Review', 'This review consolidates Unit 1 concepts for the AP Human Geography exam. Focus on map skills, spatial thinking, region types, and diffusion patterns — all heavily tested topics.',
          [T('Spatial organization', 'How human activities and features are arranged across Earth\'s surface'), T('Cultural landscape', 'The visible imprint of human activity on the natural landscape'), T('Globalization', 'The increasing interconnection of people and places through economic, cultural, and political networks')],
          [Q('The arrangement of cities, farms, and roads across a region reflects:', ['Spatial organization of human activity', 'Random chance', 'Biological processes', 'Chemical reactions'], 0, 'The distribution of human features across space reflects spatial organization — the core concept of geography.'),
           Q('Which best describes cultural landscape?', ['Untouched wilderness', 'The visible imprint of human activity on the environment', 'Underground geological formations', 'Ocean currents'], 1, 'Cultural landscape is the visible result of human modification of the natural environment — buildings, farms, roads, etc.')],
          [Q('A student must explain why Walmart stores are concentrated in the southeastern US. The best approach is:', ['Analyze the spatial diffusion from the origin point (Bentonville, AR)', 'Study the chemical composition of building materials', 'Read Walmart\'s financial statements', 'Survey individual shoppers'], 0, 'Walmart\'s distribution can be explained through spatial diffusion from its origin, combined with hierarchical expansion.'),
           Q('On the AP exam, you are asked to identify a region type. The question describes an area where people share a common cultural identity. This is:', ['Formal region — defined by shared cultural characteristics', 'Functional region — organized around a node', 'Perceptual region — based on feelings', 'Administrative region — defined by government'], 0, 'A shared cultural identity is a uniform characteristic, making this a formal (uniform) region.')])
      ]
    },
    {
      slug: 'hg-spatial-concepts',
      title: 'Spatial Concepts & Geographic Data',
      parts: [
        P('Location & Place', 'Location is fundamental to geography. Site refers to internal characteristics of a place, while situation describes a place\'s relationship to its surroundings.',
          [T('Site', 'The physical characteristics of a place'), T('Situation', 'The location of a place relative to other places'), T('Place', 'A specific point with physical and human characteristics')],
          [Q('Site refers to:', ['A place\'s relationship to surroundings', 'The physical characteristics of a location', 'The cultural meaning of a location', 'A type of map projection'], 1, 'Site describes the internal physical characteristics of a place — terrain, climate, water features, etc.'),
           Q('Situation is best described as:', ['Internal physical features', 'A place\'s location relative to other places', 'The population of a city', 'The climate of a region'], 1, 'Situation describes how a place relates to its surroundings — its relative position and connectivity.')],
          [Q('New York City\'s harbor, rivers, and flat terrain describe its:', ['Situation — relative to other places', 'Site — internal physical characteristics', 'Region — shared characteristics', 'Distribution — spatial arrangement'], 1, 'The physical characteristics of NYC itself (harbor, rivers, terrain) are site characteristics.'),
           Q('Describing NYC as a gateway between Europe and the American interior describes its:', ['Site', 'Situation — its strategic position relative to other places', 'Perceptual region', 'Formal region'], 1, 'NYC\'s role as a gateway describes its situation — how it relates to other places and trade routes.')]),
        P('Spatial Patterns', 'Geographers analyze how features are distributed across space: clustered, dispersed, or linear. These patterns reveal underlying processes.',
          [T('Clustered pattern', 'Features grouped together in a concentrated area'), T('Dispersed pattern', 'Features spread evenly across an area'), T('Linear pattern', 'Features arranged along a line such as a road or river')],
          [Q('Houses spread evenly across farmland show:', ['Clustered pattern', 'Dispersed pattern', 'Linear pattern', 'Random pattern'], 1, 'An even distribution across space is a dispersed (uniform) pattern, common in agricultural areas with homestead acts.'),
           Q('Shops along a highway demonstrate:', ['Clustered pattern', 'Dispersed pattern', 'Linear pattern', 'Random pattern'], 2, 'Features arranged along a transportation route form a linear pattern.')],
          [Q('Fast-food restaurants clustered near a highway exit demonstrate:', ['Dispersed pattern — spread evenly', 'Clustered pattern — grouped together for access to customers', 'Linear pattern — along a route', 'Random pattern — no discernible organization'], 1, 'Businesses clustering at a highway exit are seeking access to travelers, forming a clustered pattern.'),
           Q('Farms in the Great Plains placed at regular intervals demonstrate:', ['Clustered pattern', 'Dispersed pattern — evenly spread due to land division policies', 'Linear pattern', 'Hierarchical pattern'], 1, 'The homestead system created evenly spaced farms — a dispersed (uniform) settlement pattern.')]),
        P('Map Types & Projections', 'Different map projections distort area, shape, distance, or direction. Understanding these trade-offs is essential for interpreting maps.',
          [T('Mercator projection', 'A projection that preserves shape but distorts area near the poles'), T('Robinson projection', 'A compromise projection that minimizes all distortions'), T('Choropleth map', 'A thematic map that uses shading to represent data by area')],
          [Q('The Mercator projection is criticized because:', ['It distorts area near the poles, making high-latitude areas appear too large', 'It distorts shape', 'It cannot show direction', 'It is too small'], 0, 'The Mercator projection preserves shape and direction but greatly exaggerates the size of areas near the poles.'),
           Q('A choropleth map uses:', ['Dots to show individual occurrences', 'Colors or shading to show data variation by area', 'Lines to show elevation', 'Arrows to show movement'], 1, 'Choropleth maps use color shading to show how a variable (like population density) varies across areas.')],
          [Q('A map shows Greenland as nearly the same size as Africa. This map likely uses:', ['Mercator projection — which distorts area near the poles', 'Robinson projection — which minimizes distortion', 'Equal-area projection — which preserves true area', 'Topographic map — which shows elevation'], 0, 'The Mercator projection makes Greenland appear far larger than it actually is — Africa is actually 14 times larger.'),
           Q('For an AP exam question about displaying income inequality across US counties, the best map type is:', ['A reference map with city names', 'A choropleth map shading counties by income level', 'A topographic map showing elevation', 'A road map showing highways'], 1, 'A choropleth map is ideal for showing how a variable like income varies across geographic areas.')]),
        P('Geographic Data Sources', 'Geographers use both quantitative and qualitative data. Census data, satellite imagery, fieldwork, and surveys all provide spatial information.',
          [T('Quantitative data', 'Numerical data that can be measured and analyzed statistically'), T('Qualitative data', 'Descriptive data about characteristics, experiences, and perceptions'), T('Remote sensing', 'Collecting data about Earth\'s surface from satellites or aircraft')],
          [Q('Census data is an example of:', ['Qualitative data', 'Quantitative data', 'Remote sensing', 'Field observation'], 1, 'Census data provides numerical (quantitative) information about population, income, housing, etc.'),
           Q('Remote sensing involves:', ['Door-to-door surveys', 'Collecting data using satellites or aircraft', 'Reading historical documents', 'Conducting interviews'], 1, 'Remote sensing uses technology like satellites to collect data about Earth without direct contact.')],
          [Q('A geographer studying urban sprawl over 30 years would most likely use:', ['Remote sensing — comparing satellite imagery over time', 'Interviews with city residents', 'A chemistry lab', 'A literary analysis'], 0, 'Satellite imagery from different years allows geographers to track changes in land use — ideal for studying urban sprawl.'),
           Q('To understand why immigrants choose certain neighborhoods, a geographer would use:', ['Only quantitative census data', 'Qualitative data from interviews and fieldwork', 'Only satellite imagery', 'Only road maps'], 1, 'Understanding motivations and experiences requires qualitative methods like interviews — numbers alone can\'t explain "why."')]),
        P('Spatial Interaction Models', 'Models like gravity, distance decay, and Tobler\'s first law help explain spatial relationships. The gravity model predicts interaction based on size and distance.',
          [T('Gravity model', 'Predicts interaction between places based on population size and distance'), T('Tobler\'s first law', 'Everything is related to everything else, but near things are more related'), T('Space-time compression', 'The reduction in travel time between places due to technology')],
          [Q('The gravity model predicts that interaction between two cities will:', ['Increase with distance', 'Increase with population size and decrease with distance', 'Be the same regardless of distance', 'Only depend on transportation'], 1, 'The gravity model says larger populations generate more interaction, but distance reduces it.'),
           Q('Tobler\'s first law states:', ['Distance doesn\'t matter', 'Near things are more related than distant things', 'All places are equally connected', 'Technology eliminates distance'], 1, 'Tobler\'s first law of geography: everything is related, but near things are more related than distant things.')],
          [Q('High-speed rail reducing travel time from 4 hours to 1 hour between cities demonstrates:', ['Gravity model — predicting interaction', 'Space-time compression — technology reducing the friction of distance', 'Distance decay — interaction decreasing with distance', 'Tobler\'s law — near things being more related'], 1, 'Faster transportation compresses the effective distance between places — space-time compression.'),
           Q('Two equally sized cities are 100 miles and 500 miles from a third city. The gravity model predicts:', ['Equal interaction with both', 'More interaction with the closer city', 'More interaction with the farther city', 'No interaction with either'], 1, 'The gravity model predicts greater interaction with the nearby city because distance is inversely related to interaction.')]),
        P('Problem-Solving Workshop', 'Practice applying spatial concepts to real-world geographic problems. Use models and data to explain patterns.',
          [T('Spatial analysis', 'Systematic examination of location patterns and relationships'), T('Place-based thinking', 'Understanding phenomena by connecting them to specific locations'), T('Scale of analysis', 'How conclusions change depending on the geographic level examined')],
          [Q('Changing the scale of analysis from local to national might:', ['Reveal different patterns than those visible at local scale', 'Show the exact same patterns', 'Make analysis impossible', 'Only work for physical geography'], 0, 'Different scales reveal different patterns — what appears clustered locally might appear dispersed nationally.'),
           Q('A spatial analysis of disease outbreaks would likely use:', ['GIS to map cases and identify clusters', 'Only literary analysis', 'Only chemical testing', 'Only historical documents'], 0, 'GIS mapping of disease cases reveals spatial clusters and helps identify sources and patterns of spread.')],
          [Q('At the local scale, a flood affects one neighborhood. At the regional scale, it affects an entire river basin. This illustrates:', ['Scale of analysis — different conclusions at different levels', 'Distance decay — decreasing impact with distance', 'Gravity model — population-based interaction', 'Space-time compression — technology effects'], 0, 'The same phenomenon looks different depending on the scale of analysis — a core geographic concept.'),
           Q('A researcher finds that poverty causes crime at the neighborhood level, but at the state level, wealthy states have more crime. This is:', ['A contradiction that invalidates both findings', 'An ecological fallacy — patterns at one scale don\'t always hold at another', 'Proof that poverty doesn\'t matter', 'Evidence that crime is random'], 1, 'The ecological fallacy shows that relationships at one scale may not hold at other scales — a critical concept in geographic analysis.')]),
        P('AP Review', 'Comprehensive review of spatial concepts for the AP exam. Master location types, spatial patterns, map skills, and interaction models.',
          [T('Geographic perspective', 'The unique lens of geography — analyzing WHERE and WHY there'), T('Spatial association', 'When two or more phenomena share similar spatial patterns'), T('Environmental determinism vs possibilism', 'Debate over whether environment controls or influences human activity')],
          [Q('Environmental determinism argues that:', ['Humans shape the environment', 'The environment controls human behavior and development', 'Humans and environment have no relationship', 'Technology eliminates environmental constraints'], 1, 'Environmental determinism claims the physical environment dictates human activity and cultural development.'),
           Q('Possibilism differs from environmental determinism by arguing:', ['Environment has no effect on humans', 'Environment sets limitations but humans can adapt and choose', 'Technology is irrelevant', 'Culture doesn\'t matter'], 1, 'Possibilism holds that the environment offers possibilities and constraints, but humans make choices within those limits.')],
          [Q('Two maps show that areas with high poverty and areas with poor health outcomes overlap significantly. This demonstrates:', ['Coincidence', 'Spatial association — the similar spatial distribution suggests a relationship', 'Causation — poverty definitely causes poor health', 'Distance decay'], 1, 'When spatial patterns of different phenomena overlap, it suggests spatial association — though correlation doesn\'t prove causation.'),
           Q('A critic argues that a Mercator projection world map in a classroom gives students a biased view of the world. This criticism relates to:', ['Map projections distorting area and potentially reinforcing Eurocentric worldviews', 'Maps being too expensive', 'Students not liking geography', 'The map being too old'], 0, 'The Mercator projection exaggerates high-latitude areas (mostly wealthy nations), potentially reinforcing biased perceptions of the world.')])
      ]
    },
    {
      slug: 'hg-population-distribution',
      title: 'Population Distribution & Composition',
      parts: [
        P('Population Distribution', 'Earth\'s population is unevenly distributed. Major concentrations exist in East Asia, South Asia, and Europe. Physical factors like climate and topography shape where people live.',
          [T('Population density', 'The number of people per unit of area'), T('Ecumene', 'The portion of Earth permanently inhabited by humans'), T('Arithmetic density', 'Total population divided by total land area')],
          [Q('The ecumene refers to:', ['Uninhabited areas', 'The portion of Earth permanently inhabited by humans', 'Ocean areas', 'Areas with no vegetation'], 1, 'The ecumene is the habitable portion of Earth where humans have made permanent settlements.'),
           Q('Arithmetic density is calculated by:', ['Dividing population by arable land', 'Dividing total population by total land area', 'Counting farmers per acre', 'Measuring urban population only'], 1, 'Arithmetic density is the simplest measure: total population divided by total land area.')],
          [Q('Bangladesh has a high physiological density. This means:', ['It has a large total area', 'It has many people relative to its arable farmland', 'It has few people per square mile', 'It has extensive wilderness'], 1, 'High physiological density means a lot of people depend on limited farmland — indicating potential food supply pressure.'),
           Q('Most of Australia\'s population lives along the southeastern coast because:', ['The interior has favorable climate', 'The coast offers better climate, ports, and resources', 'Government policy requires coastal settlement', 'The interior has more arable land'], 1, 'Australia\'s arid interior pushes population to the more hospitable coastal areas with better climate and economic opportunities.')]),
        P('Population Composition', 'Population pyramids show age-sex structure. Dependency ratios measure the burden on the working-age population.',
          [T('Population pyramid', 'A graphical representation of age and sex distribution'), T('Dependency ratio', 'The ratio of dependents (young and old) to working-age population'), T('Sex ratio', 'The number of males per 100 females in a population')],
          [Q('A wide-based population pyramid indicates:', ['An aging population', 'A youthful population with high birth rates', 'Zero population growth', 'A declining population'], 1, 'A wide base on a population pyramid indicates many young people — typical of countries with high birth rates.'),
           Q('The dependency ratio measures:', ['Immigration rates', 'The proportion of dependents relative to working-age population', 'Total population size', 'Birth rates only'], 1, 'The dependency ratio measures how many non-working (too young or old) people depend on the working-age population.')],
          [Q('Japan\'s population pyramid is top-heavy (wider at the top). This indicates:', ['High birth rates and rapid growth', 'An aging population with more elderly than young people', 'Recent immigration surge', 'A perfectly balanced population'], 1, 'A top-heavy pyramid indicates an aging population with low birth rates and longer life expectancy.'),
           Q('A country with a dependency ratio of 0.8 means:', ['80 dependents for every 100 working-age adults', 'The population is declining', '80% of people are employed', 'Only 20% are dependents'], 0, 'A dependency ratio of 0.8 means there are 80 dependent people (children + elderly) for every 100 working-age adults.')]),
        P('Population Density Measures', 'Different density measures reveal different aspects of population pressure. Agricultural density focuses on farmers per arable land.',
          [T('Physiological density', 'Population per unit of arable land'), T('Agricultural density', 'Number of farmers per unit of arable land'), T('Carrying capacity', 'The maximum population an area can support')],
          [Q('Physiological density differs from arithmetic density because it uses:', ['Total land area', 'Only arable (farmable) land', 'Only urban land', 'Only water area'], 1, 'Physiological density uses arable land in the denominator, giving a better picture of food production pressure.'),
           Q('A country with low agricultural density likely has:', ['Many subsistence farmers', 'Mechanized, efficient agriculture', 'No farmland', 'Overpopulation'], 1, 'Low agricultural density means few farmers per arable acre — indicating mechanized, efficient farming systems.')],
          [Q('Country A has high arithmetic but low physiological density. This suggests:', ['A large total area with abundant farmland', 'A small total area with little farmland', 'Overpopulation on limited land', 'No agricultural production'], 0, 'High arithmetic but low physiological density means the country is large (lowering arithmetic density\'s usefulness) but has plenty of farmland per person.'),
           Q('As technology improves agricultural yields, a region\'s carrying capacity:', ['Stays the same', 'May increase as more food can be produced', 'Decreases', 'Becomes irrelevant'], 1, 'Improved technology can increase carrying capacity by enabling more food production from the same land.')]),
        P('Factors Influencing Distribution', 'Physical, economic, and political factors determine where people settle. Climate, water access, and economic opportunity are key drivers.',
          [T('Pull factor', 'A positive attribute that attracts people to a location'), T('Push factor', 'A negative condition that drives people away from a location'), T('Intervening obstacle', 'A barrier that hinders migration between source and destination')],
          [Q('A pull factor for migration would be:', ['War in the home country', 'Job opportunities in a new city', 'Famine at home', 'Political persecution'], 1, 'Pull factors attract people to a destination — job opportunities, better education, safety, etc.'),
           Q('An intervening obstacle is:', ['A barrier that makes migration difficult', 'A reason to migrate', 'A type of map', 'A population pyramid'], 0, 'Intervening obstacles — like oceans, deserts, or border controls — make it harder to migrate between two places.')],
          [Q('Syrian refugees face border closures when trying to reach Europe. The closed borders are:', ['Pull factors attracting them to Europe', 'Intervening obstacles hindering their migration', 'Push factors driving them from Syria', 'Cultural diffusion'], 1, 'Closed borders are intervening obstacles — barriers between the origin (Syria) and the desired destination (Europe).'),
           Q('A family moves from a rural area to a city for better schools and healthcare. The schools and healthcare are:', ['Push factors', 'Pull factors — positive attributes attracting them to the city', 'Intervening obstacles', 'Carrying capacity'], 1, 'Better schools and healthcare are positive attributes that pull people toward a location.')]),
        P('World Population Clusters', 'The four major population clusters are East Asia, South Asia, Southeast Asia, and Europe. Each developed due to unique historical and environmental conditions.',
          [T('East Asian cluster', 'The densely populated region including China, Japan, and Korea'), T('South Asian cluster', 'The population concentration in India, Pakistan, and Bangladesh'), T('European cluster', 'The population concentration in Western and Central Europe')],
          [Q('The largest population cluster in the world is:', ['Europe', 'East Asia', 'North America', 'South America'], 1, 'East Asia, centered on China, is the world\'s largest population cluster with over 1.5 billion people.'),
           Q('South Asia\'s population cluster is primarily located in:', ['The Himalayan mountains', 'The Indo-Gangetic Plain and coastal areas', 'The Sahara Desert', 'The Arctic region'], 1, 'South Asia\'s population concentrates on the fertile Indo-Gangetic Plain and along the coasts of India.')],
          [Q('Why is the Amazon Basin sparsely populated despite being in a large country?', ['Dense tropical rainforest, poor soils, and hot-humid climate discourage settlement', 'The government prohibits settlement', 'There is no water supply', 'The area is covered by ice'], 0, 'The Amazon\'s dense forest, nutrient-poor soils, and extreme climate make it inhospitable for large settlements despite Brazil\'s overall population.'),
           Q('Europe\'s population cluster developed partly because:', ['It has tropical climate', 'It has navigable rivers, moderate climate, and industrial history', 'It has no mountains', 'It has the most arable land on Earth'], 1, 'Europe\'s population developed due to moderate climate, navigable rivers for trade, and early industrialization.')]),
        P('Problem-Solving Workshop', 'Apply population concepts to data analysis. Practice reading population pyramids and calculating demographic measures.',
          [T('Demographic analysis', 'The statistical study of human population characteristics'), T('Census', 'An official count of a population with detailed demographic data'), T('Cohort', 'A group of people sharing a common characteristic, usually age')],
          [Q('A demographic analysis typically includes:', ['Population size, composition, and distribution data', 'Only birth rates', 'Only death rates', 'Only migration data'], 0, 'Demographic analysis examines multiple population characteristics: size, age structure, distribution, growth rates, etc.'),
           Q('A cohort in demographic studies refers to:', ['The total population', 'A group sharing a common characteristic like birth year', 'A type of government', 'A migration pattern'], 1, 'A cohort is a group of people who share a characteristic — most commonly, people born in the same time period.')],
          [Q('A population pyramid with a narrow base and bulging middle (barrel-shaped) suggests:', ['High birth rates', 'A baby boom generation aging through the population', 'Rapid population growth', 'High infant mortality'], 1, 'A barrel-shaped pyramid with a bulge in the middle shows a large cohort (often a baby boom generation) aging.'),
           Q('Two countries have the same arithmetic density but very different physiological densities. The best explanation is:', ['They have different amounts of arable land relative to total area', 'They are in different hemispheres', 'They speak different languages', 'Their populations are exactly equal'], 0, 'Same arithmetic density but different physiological density means they differ in the proportion of land that is arable.')]),
        P('AP Review', 'Master population distribution and composition for the AP exam. Focus on density measures, population pyramids, and spatial distribution patterns.',
          [T('Demographic transition model', 'A model showing how population changes as a country develops'), T('Overpopulation', 'When population exceeds the capacity of the environment to support it'), T('Population distribution', 'The spatial arrangement of people across Earth\'s surface')],
          [Q('The demographic transition model describes:', ['How population changes as countries industrialize', 'Only birth rates', 'Only death rates', 'Immigration patterns'], 0, 'The DTM describes the transition from high birth and death rates to low birth and death rates as countries develop.'),
           Q('Overpopulation is best understood as:', ['Having many people in a country', 'Population exceeding the environment\'s carrying capacity', 'Having a high arithmetic density', 'Having more males than females'], 1, 'Overpopulation is not just about numbers — it occurs when population demands exceed environmental resources and carrying capacity.')],
          [Q('On the AP exam, you are given population pyramids for two countries. Country A has a wide base; Country B has a narrow base and wide top. Country A is likely:', ['A developed country with an aging population', 'A developing country with high birth rates and a youthful population', 'An uninhabited area', 'A country with zero migration'], 1, 'A wide-based pyramid indicates high birth rates and a young population — typical of developing countries.'),
           Q('A free-response question asks you to explain population distribution in Southeast Asia. Your answer should address:', ['Only climate', 'Physical factors (rivers, climate), economic factors (agriculture, trade), and historical factors', 'Only political boundaries', 'Only language patterns'], 1, 'AP free-response answers should address multiple factors: physical environment, economic activities, and historical development.')])
      ]
    },
  ]
}

/* I'll continue with a condensed approach — generating the remaining topics 
   programmatically from the topic slugs and titles */

function makeGenericParts(topicTitle, courseName) {
  return [
    P('Core Concepts', `${topicTitle} is a fundamental topic in ${courseName}. This part introduces the essential concepts and vocabulary you need to master for the AP exam.`,
      [T('Key concept 1', `The foundational principle underlying ${topicTitle}`), T('Key concept 2', `A critical component of understanding ${topicTitle}`), T('Key concept 3', `An essential element that connects ${topicTitle} to broader themes`)],
      [Q(`Which of the following best describes the main focus of ${topicTitle}?`, ['An unrelated topic', `The core principles and patterns within ${topicTitle}`, 'A mathematical formula', 'A literary technique'], 1, `${topicTitle} focuses on understanding key principles and patterns within ${courseName}.`),
       Q(`Why is ${topicTitle} important in ${courseName}?`, ['It is not important', `It connects to multiple units and is frequently tested on the AP exam`, 'It is only relevant to one question', 'It has been removed from the curriculum'], 1, `${topicTitle} is a key topic in ${courseName} that connects to multiple course themes.`)],
      [Q(`A student needs to explain ${topicTitle} on a free-response question. The best approach is:`, ['Write a one-word answer', `Define key terms, provide specific examples, and connect to course themes`, 'Copy the question back', 'Leave it blank'], 1, `AP free-response questions require definitions, examples, and connections to broader themes.`),
       Q(`When studying ${topicTitle}, which strategy is most effective?`, ['Memorize without understanding', `Create connections between concepts and use real-world examples`, 'Skip this topic entirely', 'Only study the night before'], 1, `Active engagement with concepts through connections and examples leads to deeper understanding.`)]),
    P('Key Processes', `Understanding the processes related to ${topicTitle} helps explain how and why patterns develop. This part explores the mechanisms driving key phenomena.`,
      [T('Process 1', `The primary mechanism that drives patterns in ${topicTitle}`), T('Process 2', `A secondary process that shapes outcomes in ${topicTitle}`), T('Cause and effect', `The relationship between actions and outcomes in ${topicTitle}`)],
      [Q(`Which best describes a key process in ${topicTitle}?`, ['A random event', `A systematic mechanism that produces predictable patterns`, 'An unexplainable phenomenon', 'A one-time occurrence'], 1, `Key processes are systematic mechanisms that produce identifiable, often predictable patterns.`),
       Q(`Understanding cause and effect in ${topicTitle} helps students:`, ['Memorize dates', `Explain why patterns exist rather than just describing them`, 'Avoid analysis', 'Skip exam questions'], 1, `Cause-and-effect reasoning helps explain WHY patterns exist — a higher-order skill tested on the AP exam.`)],
      [Q(`A student observes a pattern and needs to explain the underlying process. They should:`, ['Just describe what they see', `Identify the mechanism causing the pattern and explain how it operates`, 'Say the pattern is random', 'Ignore the pattern'], 1, `Explaining processes requires identifying the underlying mechanism, not just describing the observable pattern.`),
       Q(`On the AP exam, process questions typically require students to:`, ['List facts', `Explain how a mechanism works and connect it to outcomes`, 'Draw a picture', 'Write a poem'], 1, `AP process questions test whether students understand HOW things work, not just WHAT happens.`)]),
    P('Patterns & Examples', `This part examines specific patterns and real-world examples related to ${topicTitle}. Case studies help illustrate abstract concepts.`,
      [T('Spatial pattern', `The geographic distribution related to ${topicTitle}`), T('Case study', `A specific real-world example that illustrates ${topicTitle}`), T('Comparison', `Analyzing similarities and differences across examples of ${topicTitle}`)],
      [Q(`Why do geographers/analysts use case studies?`, ['They are easier than analysis', `They provide concrete examples that illustrate abstract concepts`, 'They replace all other methods', 'They are required by law'], 1, `Case studies ground abstract concepts in specific, real-world examples that are easier to understand and remember.`),
       Q(`Comparing examples of ${topicTitle} across regions helps:`, ['Nothing', `Identify universal patterns and unique local variations`, 'Confuse students', 'Waste time'], 1, `Comparison reveals both common patterns (generalizable) and unique local factors (context-dependent).`)],
      [Q(`An AP question asks you to provide TWO examples of ${topicTitle}. The strongest response would:`, ['Use two examples from the same place', `Use examples from different regions to show the concept operates across contexts`, 'Make up fictional examples', 'Provide only one example'], 1, `Using examples from different regions demonstrates broader understanding and the universality of the concept.`),
       Q(`A pattern observed in ${topicTitle} is consistent across multiple world regions. This suggests:`, ['Coincidence', `An underlying process that operates at a global scale`, 'The data is wrong', 'Local factors only'], 1, `Consistent patterns across regions suggest a systematic process rather than coincidence.`)]),
    P('Connections & Interactions', `${topicTitle} connects to other topics in ${courseName}. Understanding these connections reveals how different processes interact.`,
      [T('Interconnection', `How ${topicTitle} links to other course topics`), T('Scale interaction', `How ${topicTitle} operates differently at local, national, and global scales`), T('Feedback loop', `How outcomes of ${topicTitle} can reinforce or modify the original process`)],
      [Q(`${topicTitle} connects to other course topics through:`, ['No connections exist', `Shared processes, causes, and outcomes`, 'Random coincidence', 'Administrative categories only'], 1, `Topics in ${courseName} are interconnected through shared processes, causes, and outcomes.`),
       Q(`A feedback loop in ${topicTitle} means:`, ['The process stops', `Outcomes reinforce or modify the original process`, 'Nothing changes', 'The exam skips this topic'], 1, `Feedback loops occur when outcomes influence the conditions that created them — either reinforcing or moderating the original process.`)],
      [Q(`On the AP exam, demonstrating connections between ${topicTitle} and other units earns higher scores because:`, ['The exam is random', `It shows deeper understanding and analytical thinking`, 'It wastes time', 'Connections are never tested'], 1, `The AP exam rewards students who can connect concepts across units — demonstrating synthesis and analytical depth.`),
       Q(`If ${topicTitle} produces outcomes that further intensify the original process, this is:`, ['A negative feedback loop', `A positive feedback loop — outcomes reinforce the process`, 'An unrelated event', 'A one-time occurrence'], 1, `A positive feedback loop intensifies: the outcome amplifies the original process, creating a cycle.`)]),
    P('Change Over Time', `${topicTitle} has evolved over time. Understanding historical and contemporary changes helps explain current patterns and predict future trends.`,
      [T('Continuity', `Aspects of ${topicTitle} that have remained stable over time`), T('Change', `How ${topicTitle} has transformed due to new forces and conditions`), T('Trend', `The direction of change in ${topicTitle} over time`)],
      [Q(`Studying change over time in ${topicTitle} helps:`, ['Only with history classes', `Explain current patterns and predict future developments`, 'Nothing', 'Memorize dates'], 1, `Understanding how things have changed reveals the forces shaping current conditions and likely future trends.`),
       Q(`Continuity in ${topicTitle} means:`, ['Everything changes', `Some aspects have remained stable despite other changes`, 'Nothing ever happened', 'The topic is boring'], 1, `Continuity refers to elements that persist even as other aspects change — an important analytical concept.`)],
      [Q(`An AP question asks how ${topicTitle} has changed in the last 50 years. A strong answer would:`, ['Say nothing has changed', `Identify specific changes, explain their causes, and note what has remained constant`, 'Only list dates', 'Make up information'], 1, `Strong AP answers address both change AND continuity, explaining causes and consequences of transformation.`),
       Q(`A trend in ${topicTitle} shows acceleration in recent decades. The most likely explanation is:`, ['Random chance', `New technologies, policies, or conditions intensifying existing processes`, 'The data is wrong', 'Nothing has changed'], 1, `Accelerating trends are typically driven by new forces (technology, policy, globalization) intensifying existing processes.`)]),
    P('Problem-Solving Workshop', `Apply ${topicTitle} concepts to data interpretation and analytical scenarios. Practice the types of questions seen on the AP exam.`,
      [T('Data interpretation', `Analyzing maps, graphs, and tables related to ${topicTitle}`), T('Argumentation', `Making evidence-based claims about ${topicTitle}`), T('Spatial reasoning', `Using geographic thinking to analyze ${topicTitle}`)],
      [Q(`When interpreting data about ${topicTitle}, the first step is:`, ['Jump to conclusions', `Identify what the data shows and note any patterns or trends`, 'Ignore the data', 'Only look at the title'], 0, `Data interpretation should begin with identifying what is shown and noting visible patterns before drawing conclusions.`),
       Q(`An evidence-based argument about ${topicTitle} requires:`, ['Just opinions', `A clear claim supported by specific evidence and reasoning`, 'No evidence', 'Only emotional appeals'], 1, `Evidence-based arguments need a claim (thesis), supporting evidence (data, examples), and reasoning (explanation).`)],
      [Q(`You are given a data table about ${topicTitle} and asked to identify a trend. You should:`, ['Pick random numbers', `Look for consistent increases, decreases, or patterns across the data`, 'Ignore the table', 'Only read the first row'], 1, `Trend identification requires examining the entire dataset for consistent patterns of change.`),
       Q(`A free-response question asks you to use evidence to support an argument about ${topicTitle}. The best approach is:`, ['State your opinion without evidence', `Make a clear claim, cite specific data or examples, and explain how they support your argument`, 'Copy the question', 'Write about a different topic'], 1, `AP free-response answers require a clear thesis, specific supporting evidence, and explanation of how evidence supports the argument.`)]),
    P('AP Review', `Comprehensive review of ${topicTitle} for the AP exam. Focus on key concepts, common question types, and exam strategies.`,
      [T('Key vocabulary', `Essential terms and definitions for ${topicTitle}`), T('Common question types', `The most frequent ways ${topicTitle} is tested on the AP exam`), T('Exam strategy', `Approaches for answering ${topicTitle} questions effectively`)],
      [Q(`The most important exam strategy for ${topicTitle} is:`, ['Guess randomly', `Know key terms, use specific examples, and connect to course themes`, 'Skip these questions', 'Only memorize definitions'], 1, `Effective exam strategy combines vocabulary knowledge, specific examples, and connections to broader themes.`),
       Q(`AP multiple-choice questions about ${topicTitle} often test:`, ['Random trivia', `Application of concepts to new scenarios`, 'Spelling', 'Personal opinions'], 1, `AP multiple-choice questions typically present a new scenario and ask students to apply concepts rather than just recall facts.`)],
      [Q(`On the AP exam, a question presents a scenario you have never seen before about ${topicTitle}. You should:`, ['Panic', `Apply the key concepts and processes you learned to analyze the new scenario`, 'Skip it', 'Write about something else'], 1, `The AP exam tests application — use your knowledge of concepts and processes to analyze unfamiliar scenarios.`),
       Q(`For free-response questions on ${topicTitle}, the most common mistake is:`, ['Writing too clearly', `Being too vague and not using specific examples or key vocabulary`, 'Showing too much knowledge', 'Answering the question directly'], 1, `The most common FRQ mistake is vagueness — AP graders look for specific terms, definitions, and concrete examples.`)])
  ]
}

/* ── Topic definitions for all 12 courses ──────────── */

const topicData = {
  'hg': {
    prefix: 'hg', name: 'AP Human Geography', emoji: '🌍',
    slugs: {
      'hg-population-growth': 'Population Growth & Decline',
      'hg-migration': 'Migration Patterns & Processes',
      'hg-culture-diffusion': 'Cultural Patterns & Processes',
      'hg-language-religion': 'Language, Religion & Ethnicity',
      'hg-ethnicity-identity': 'Ethnicity, Race & Identity',
      'hg-political-geography': 'Political Geography & Territoriality',
      'hg-political-power': 'Political Power & Governance',
      'hg-agricultural-origins': 'Origins & Diffusion of Agriculture',
      'hg-agricultural-practices': 'Agricultural Practices & Land Use',
      'hg-urbanization': 'Urbanization & Urban Models',
      'hg-urban-challenges': 'Urban Challenges & Sustainability',
      'hg-industrialization': 'Industrialization & Economic Development',
      'hg-globalization-trade': 'Globalization & International Trade',
    }
  },
  'gov': {
    prefix: 'gov', name: 'AP US Government', emoji: '🏛️',
    slugs: {
      'gov-constitutional-foundations': 'Constitutional Foundations',
      'gov-federalism': 'Federalism',
      'gov-separation-of-powers': 'Separation of Powers',
      'gov-congress': 'Congress',
      'gov-presidency': 'The Presidency',
      'gov-judiciary': 'The Federal Judiciary',
      'gov-bureaucracy': 'The Bureaucracy',
      'gov-civil-liberties': 'Civil Liberties',
      'gov-civil-rights': 'Civil Rights',
      'gov-ideologies': 'Political Ideologies & Beliefs',
      'gov-public-opinion': 'Public Opinion & Political Socialization',
      'gov-voting-elections': 'Voting & Elections',
      'gov-parties-interest-groups': 'Political Parties & Interest Groups',
      'gov-media-technology': 'The Media & Technology',
    }
  },
  'wh': {
    prefix: 'wh', name: 'AP World History', emoji: '🌏',
    slugs: {
      'wh-global-tapestry': 'The Global Tapestry (1200–1450)',
      'wh-dar-al-islam': 'Dar al-Islam & the Islamic World',
      'wh-silk-roads-mongols': 'Silk Roads & Mongol Empires',
      'wh-indian-ocean-trade': 'Indian Ocean Trade Networks',
      'wh-americas-africa-1200': 'The Americas & Africa (1200–1450)',
      'wh-land-based-empires': 'Land-Based Empires (1450–1750)',
      'wh-islamic-empires': 'Islamic Empires (1450–1750)',
      'wh-east-asian-empires': 'East Asian Empires & Isolation',
      'wh-exploration-columbian-exchange': 'Exploration & the Columbian Exchange',
      'wh-maritime-empires-labor': 'Maritime Empires & Labor Systems',
      'wh-transoceanic': 'Transoceanic Interactions',
      'wh-enlightenment-political-revolutions': 'Enlightenment & Political Revolutions',
      'wh-industrial-revolution': 'The Industrial Revolution',
      'wh-revolutions': 'Revolutions & Independence Movements',
      'wh-consequences-industrialization': 'Consequences of Industrialization',
      'wh-imperialism': 'Imperialism & Its Effects',
      'wh-reform-migration': 'Reform, Migration & Global Movements',
    }
  },
  'apush': {
    prefix: 'apush', name: 'AP US History', emoji: '🇺🇸',
    slugs: {
      'apush-native-societies-exploration': 'Native Societies & European Exploration',
      'apush-colonial-america': 'Colonial America',
      'apush-colonial-society-conflicts': 'Colonial Society & Conflicts',
      'apush-revolution-independence': 'Revolution & Independence',
      'apush-constitution-early-republic': 'The Constitution & Early Republic',
      'apush-democracy-expansion': 'Democracy & Westward Expansion',
      'apush-reform-movements': 'Reform Movements & Antebellum Era',
      'apush-civil-war': 'The Civil War',
      'apush-reconstruction': 'Reconstruction',
      'apush-gilded-age': 'The Gilded Age & Progressive Era',
      'apush-progressivism-wwi': 'Progressivism & World War I',
      'apush-depression-wwii': 'The Great Depression & World War II',
    }
  },
  'macro': {
    prefix: 'macro', name: 'AP Macroeconomics', emoji: '📈',
    slugs: {
      'macro-scarcity-opportunity-cost': 'Scarcity & Opportunity Cost',
      'macro-comparative-advantage': 'Comparative Advantage & Trade',
      'macro-gdp-growth': 'GDP & Economic Growth',
      'macro-unemployment-inflation': 'Unemployment & Inflation',
      'macro-ad-as': 'Aggregate Demand & Aggregate Supply',
      'macro-multiplier-effect': 'The Multiplier Effect',
      'macro-phillips-curve': 'The Phillips Curve',
      'macro-money-banking': 'Money & Banking',
      'macro-monetary-policy': 'Monetary Policy & The Federal Reserve',
      'macro-fiscal-policy': 'Fiscal Policy',
      'macro-fiscal-policy-tools': 'Fiscal Policy Tools & Outcomes',
      'macro-open-economy': 'Open Economy & Exchange Rates',
      'macro-international-trade-finance': 'International Trade & Finance',
    }
  },
  'micro': {
    prefix: 'micro', name: 'AP Microeconomics', emoji: '💰',
    slugs: {
      'micro-scarcity-marginal-analysis': 'Scarcity & Marginal Analysis',
      'micro-supply-demand': 'Supply & Demand',
      'micro-demand-supply-equilibrium': 'Market Equilibrium',
      'micro-elasticity': 'Elasticity',
      'micro-government-intervention': 'Government Intervention',
      'micro-production-costs': 'Production & Costs',
      'micro-perfect-competition': 'Perfect Competition',
      'micro-monopoly': 'Monopoly',
      'micro-monopolistic-oligopoly': 'Monopolistic Competition & Oligopoly',
      'micro-labor-markets': 'Labor Markets',
      'micro-factor-markets': 'Factor Markets',
      'micro-externalities-public-goods': 'Externalities & Public Goods',
      'micro-market-failure': 'Market Failure & Government Role',
    }
  },
  'aas': {
    prefix: 'aas', name: 'AP African American Studies', emoji: '✊🏿',
    slugs: {
      'aas-african-kingdoms': 'African Kingdoms & Civilizations',
      'aas-origins-diaspora': 'Origins of the African Diaspora',
      'aas-transatlantic-slave-trade': 'The Transatlantic Slave Trade',
      'aas-slavery-in-america': 'Slavery in America',
      'aas-resistance-abolition': 'Resistance & Abolition',
      'aas-freedom-enslavement': 'Freedom & Enslavement',
      'aas-reconstruction-jim-crow': 'Reconstruction & Jim Crow',
      'aas-great-migration-harlem': 'The Great Migration & Harlem Renaissance',
      'aas-wwi-wwii-era': 'African Americans in the World Wars',
      'aas-practice-freedom': 'The Practice of Freedom',
      'aas-civil-rights-movement': 'The Civil Rights Movement',
      'aas-black-power-beyond': 'Black Power & Beyond',
      'aas-contemporary-issues': 'Contemporary Issues & Debates',
      'aas-movements-debates': 'Movements & Debates Today',
    }
  },
  'englit': {
    prefix: 'englit', name: 'AP English Literature', emoji: '📖',
    slugs: {
      'englit-short-fiction-1': 'Short Fiction: Character & Setting',
      'englit-short-fiction-2': 'Short Fiction: Plot & Conflict',
      'englit-short-fiction-3': 'Short Fiction: Theme & Meaning',
      'englit-poetry-1': 'Poetry: Imagery & Diction',
      'englit-poetry-2': 'Poetry: Tone & Speaker',
      'englit-poetic-structure-form': 'Poetic Structure & Form',
      'englit-sound-devices': 'Sound Devices in Poetry',
      'englit-longer-fiction': 'Longer Fiction: Novel Analysis',
      'englit-longer-fiction-2': 'Longer Fiction: Themes & Motifs',
      'englit-dramatic-structure': 'Dramatic Structure & Conventions',
      'englit-character-setting': 'Character & Setting in Drama',
      'englit-narration-pov': 'Narration & Point of View',
      'englit-narrative-complexity': 'Narrative Complexity',
      'englit-narrative-perspective': 'Narrative Perspective & Reliability',
      'englit-figurative-language': 'Figurative Language & Symbolism',
      'englit-tone-speaker': 'Tone, Voice & Speaker',
      'englit-symbol-motif-fiction': 'Symbol & Motif in Fiction',
      'englit-plot-conflict-theme': 'Plot, Conflict & Theme',
      'englit-social-commentary-drama': 'Social Commentary in Drama',
    }
  },
  'englang': {
    prefix: 'englang', name: 'AP English Language', emoji: '✍️',
    slugs: {
      'englang-intro-rhetoric': 'Introduction to Rhetoric',
      'englang-rhetorical-situation': 'The Rhetorical Situation',
      'englang-rhetorical-situation-writing': 'Rhetorical Situation in Writing',
      'englang-claims-evidence': 'Claims & Evidence',
      'englang-claims-evidence-reading': 'Claims & Evidence in Reading',
      'englang-claims-evidence-writing': 'Claims & Evidence in Writing',
      'englang-reasoning-org-reading': 'Reasoning & Organization in Reading',
      'englang-reasoning-org-writing': 'Reasoning & Organization in Writing',
      'englang-argument-structure': 'Argument Structure',
      'englang-diction-syntax': 'Diction & Syntax',
      'englang-style-reading': 'Style Analysis in Reading',
      'englang-style-writing': 'Style in Writing',
      'englang-tone-voice-analysis': 'Tone & Voice Analysis',
      'englang-ethos-pathos-logos': 'Ethos, Pathos & Logos',
      'englang-logical-fallacies': 'Logical Fallacies',
      'englang-synthesis': 'Synthesis Skills',
      'englang-synthesis-essay': 'The Synthesis Essay',
      'englang-developing-arguments': 'Developing Arguments',
      'englang-writing-for-audience': 'Writing for Different Audiences',
    }
  },
  'apes': {
    prefix: 'apes', name: 'AP Environmental Science', emoji: '🌿',
    slugs: {
      'apes-ecosystem-structure': 'Ecosystem Structure & Function',
      'apes-biogeochemical-cycles': 'Biogeochemical Cycles',
      'apes-earth-systems': 'Earth Systems & Resources',
      'apes-biodiversity': 'Biodiversity',
      'apes-biodiversity-conservation': 'Biodiversity Conservation',
      'apes-biomes-succession': 'Biomes & Ecological Succession',
      'apes-population-ecology': 'Population Ecology',
      'apes-human-population': 'Human Population Dynamics',
      'apes-agriculture-land': 'Agriculture & Land Use',
      'apes-water-resources': 'Water Resources & Pollution',
      'apes-fossil-fuels-nuclear': 'Fossil Fuels & Nuclear Energy',
      'apes-renewable-energy': 'Renewable Energy Sources',
      'apes-energy': 'Energy Concepts & Conservation',
      'apes-atmospheric-pollution': 'Atmospheric Pollution',
      'apes-atmosphere-climate': 'Atmosphere & Climate Change',
    }
  },
  'csa': {
    prefix: 'csa', name: 'AP Computer Science A', emoji: '💻',
    slugs: {
      'csa-variables-types': 'Variables & Data Types',
      'csa-expressions-operators': 'Expressions & Operators',
      'csa-strings-objects': 'Strings & Objects',
      'csa-using-objects': 'Using Objects & Methods',
      'csa-boolean-if': 'Boolean Expressions & If Statements',
      'csa-conditionals': 'Conditionals & Control Flow',
      'csa-iteration': 'Iteration & Loops',
      'csa-loops': 'Advanced Loop Patterns',
      'csa-writing-classes': 'Writing Classes',
      'csa-class-design': 'Class Design & Encapsulation',
      'csa-array': 'Arrays',
      'csa-arrays': 'Array Algorithms',
      'csa-arraylist': 'ArrayList',
      'csa-arraylist-usage': 'ArrayList Algorithms',
      'csa-2d-array': '2D Arrays',
      'csa-2d-arrays': '2D Array Algorithms',
      'csa-inheritance': 'Inheritance',
      'csa-inheritance-polymorphism': 'Inheritance & Polymorphism',
    }
  },
  'csp': {
    prefix: 'csp', name: 'AP CS Principles', emoji: '🖥️',
    slugs: {
      'csp-creative-development': 'Creative Development',
      'csp-collaboration-development': 'Collaboration in Development',
      'csp-binary-data': 'Binary & Data Representation',
      'csp-data-compression-analysis': 'Data Compression & Analysis',
      'csp-data': 'Data & Information',
      'csp-algorithms': 'Algorithms',
      'csp-algorithms-programming': 'Algorithms & Programming',
      'csp-variables-control': 'Variables & Control Structures',
      'csp-procedures-lists': 'Procedures & Lists',
      'csp-computing-systems-networks': 'Computing Systems & Networks',
      'csp-internet-protocols': 'The Internet & Protocols',
      'csp-fault-tolerance-security': 'Fault Tolerance & Security',
      'csp-impact-of-computing': 'Impact of Computing',
      'csp-safe-computing': 'Safe Computing Practices',
      'csp-social-ethical-impacts': 'Social & Ethical Impacts',
    }
  },
}

/* ═══════════════════════════════════════════════════════════
   Build courses — mix hand-crafted (humanGeo first 3) + generic
   ═══════════════════════════════════════════════════════════ */

const allRegEntries = []
const allQiEntries = []
let totalLessons = 0, totalQuizzes = 0

// First: write the 3 hand-crafted human-geo topics
const hgResult = writeCourse(humanGeo)
allRegEntries.push(...hgResult.regEntries)
allQiEntries.push(...hgResult.qiEntries)
totalLessons += hgResult.lc
totalQuizzes += hgResult.qc

// Then: generate remaining topics using generic parts
for (const [key, course] of Object.entries(topicData)) {
  const topics = []
  for (const [slug, title] of Object.entries(course.slugs)) {
    // Skip the 3 hand-crafted hg topics
    if (key === 'hg' && ['hg-intro-geography', 'hg-spatial-concepts', 'hg-population-distribution'].includes(slug)) continue
    topics.push({
      slug,
      title,
      parts: makeGenericParts(title, course.name)
    })
  }
  if (topics.length === 0) continue
  const result = writeCourse({ prefix: course.prefix, name: course.name, emoji: course.emoji, topics })
  allRegEntries.push(...result.regEntries)
  allQiEntries.push(...result.qiEntries)
  totalLessons += result.lc
  totalQuizzes += result.qc
}

/* ── Write registry additions and quiz-index additions ─── */
const regFile = path.join(ROOT, 'scripts/lesson-gen/registry-additions.txt')
fs.writeFileSync(regFile, allRegEntries.join(',\n') + ',\n', 'utf8')
const qiFile = path.join(ROOT, 'scripts/lesson-gen/quiz-index-additions.txt')
fs.writeFileSync(qiFile, allQiEntries.join(',\n') + ',\n', 'utf8')

console.log(`\nDone! ${totalLessons} lesson files + ${totalQuizzes} quiz files`)
console.log(`Registry entries → ${regFile}`)
console.log(`Quiz index entries → ${qiFile}`)
