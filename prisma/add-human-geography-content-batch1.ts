/**
 * Phase 2/3 content fill for AP Human Geography — Batch 1 (3 topics)
 * Covers: hg-spatial-concepts, hg-intro-geography, hg-population-distribution.
 *
 * Usage:
 *   set -a && source .env.local && set +a && npx tsx prisma/add-human-geography-content-batch1.ts
 */

import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

type ProblemSeed = { order: number; difficulty: Difficulty; question: string; solution: string }
type CardSeed = { front: string; back: string; hint?: string; lessonPart?: number }
type TopicSeed = { textContent: string; problems: ProblemSeed[]; cards: CardSeed[] }

const TOPICS: Record<string, TopicSeed> = {
  // ──────────────────────────────────────────────────────────────────
  'hg-intro-geography': {
    textContent: `## Introduction to Human Geography

**Human geography** is the study of how human activity is distributed across the earth\'s surface and how people interact with their environment. It asks the fundamental geographic questions: **WHERE** are things located, **WHY** are they there, and **WHAT** are the consequences?

### What Geographers Do

Geography is built on the **five themes** developed by the National Council for Geographic Education:

1. **Location** — Where is it? Two types:
   - **Absolute location** — exact coordinates (latitude/longitude) or street address.
   - **Relative location** — position in relation to other places (e.g., "Chicago is at the southern tip of Lake Michigan").

2. **Place** — What makes a location distinctive? Includes physical features (mountains, climate) and human features (language, religion, architecture).

3. **Human-Environment Interaction** — How do humans modify their environment, depend on it, and adapt to it? (Irrigating deserts, building dams, urban sprawl, climate adaptation.)

4. **Movement** — How do people, goods, and ideas move across space? Migration, trade, communication, diffusion of culture.

5. **Region** — How can we group places that share characteristics? Three types:
   - **Formal (uniform) region** — defined by a common attribute (e.g., the "Corn Belt" — high corn production).
   - **Functional (nodal) region** — organized around a node (e.g., a metropolitan area centered on a downtown).
   - **Perceptual (vernacular) region** — defined by people\'s mental maps (e.g., "the South" or "the Middle East").

### Tools of the Geographer

- **Maps** — the geographer\'s primary tool. Different **map projections** distort space differently:
  - **Mercator** — preserves shape and direction; massively distorts size near the poles. Greenland appears as large as Africa (it is actually 14× smaller).
  - **Robinson** — compromise projection; minimizes overall distortion.
  - **Gall-Peters (equal-area)** — preserves area accurately but distorts shape.
  - **Conic / azimuthal** — special-purpose projections.
- **Geographic Information Systems (GIS)** — software that layers and analyzes spatial data (e.g., overlaying population, transportation, and elevation).
- **Remote sensing** — collecting data from satellites and aircraft (Landsat imagery, weather satellites).
- **Global Positioning System (GPS)** — satellite-based location and navigation.
- **Field observation, surveys, and census data** — primary data sources for human-geographic research.

### Scale and Spatial Analysis

**Scale** has two meanings in geography:
- **Cartographic scale** — the ratio of map distance to real distance (a 1:24,000 map shows 1 unit on map = 24,000 units on the ground).
- **Scale of analysis** — the level at which geographers study a phenomenon (local, regional, national, global). Patterns visible at one scale may disappear at another.

**Spatial concepts** geographers use:
- **Distribution** — the arrangement of features in space (clustered, dispersed, linear, random).
- **Density** — number of features per unit area.
- **Pattern** — the geometric arrangement (e.g., grid pattern of streets in Manhattan).
- **Distance decay** — interaction declines with increasing distance ("near things are more related than distant things").

### Why It Matters

Human geography helps explain why some places thrive while others struggle, why cultures develop where they do, why migration flows along certain corridors, and how human activity is reshaping the planet. It is foundational to understanding politics, economics, demography, and environmental policy in the 21st century.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Identify the **five themes of geography** and give a one-sentence description of each.`,
        solution: `1. **Location** — Where is it? Includes both absolute location (coordinates) and relative location (position in relation to other places).
2. **Place** — What makes a location distinctive? Includes physical features (climate, terrain) and human features (language, religion, architecture).
3. **Human-Environment Interaction** — How do humans modify, depend on, and adapt to their environment?
4. **Movement** — How do people, goods, and ideas move across space (migration, trade, diffusion)?
5. **Region** — How can we group places that share characteristics into formal, functional, or perceptual regions?` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Distinguish between a **formal region**, a **functional region**, and a **perceptual region**, and give an example of each.`,
        solution: `- **Formal (uniform) region** — defined by ONE OR MORE COMMON ATTRIBUTES that are uniform across the area. *Example:* the "Corn Belt" of the U.S. Midwest, defined by a high concentration of corn production. Other examples: francophone Canada, the European Union, the Sahara Desert.

- **Functional (nodal) region** — organized around a CENTRAL POINT (node) and defined by interactions or flows from that node. *Example:* a metropolitan area centered on a downtown business district; a newspaper\'s circulation area; a cell-phone tower\'s coverage zone; a school district.

- **Perceptual (vernacular) region** — defined by PEOPLE\'S MENTAL MAPS or shared cultural identity, with no precise boundaries. *Example:* "the South," "the Middle East," "Silicon Valley," "the Bible Belt." Different people may include or exclude different areas.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare the **Mercator** and **Gall-Peters** map projections. What does each preserve, and what does each distort? Why does the choice of projection matter politically?`,
        solution: `**Mercator projection (1569):**
- **Preserves:** shape (locally) and direction — invented for navigation, so any straight line on the map is a constant compass bearing.
- **Distorts:** SIZE, especially as you approach the poles. Greenland appears as large as Africa, though Africa is actually 14× larger. Antarctica looks like a vast continent stretched across the bottom.

**Gall-Peters projection (1855, popularized 1973):**
- **Preserves:** AREA — every region appears in its true relative size. Africa, South America, and South Asia look much larger relative to Europe and North America.
- **Distorts:** SHAPE — landmasses appear stretched and distorted, particularly near the equator and poles.

**Political significance:** The Mercator projection, by EXAGGERATING the size of high-latitude regions (Europe, North America, Russia) and shrinking equatorial regions (Africa, South America, India), reinforces a Eurocentric worldview. Critics argue this contributes to perceptions of African and Latin American countries as "small" or unimportant. The Gall-Peters projection was promoted in the 1970s–80s as a corrective, particularly by aid organizations seeking to give a more accurate visual representation of the developing world. Some school districts (Boston in 2017) replaced Mercator maps with Gall-Peters in classrooms.

**No projection is perfect** — flattening a sphere onto a plane always distorts something. Modern compromise projections (Robinson, Winkel Tripel) try to minimize ALL kinds of distortion at the cost of being perfectly accurate at none.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain what a **Geographic Information System (GIS)** is and give two examples of how GIS is used in real-world decision-making.`,
        solution: `A **Geographic Information System (GIS)** is computer software that captures, stores, ANALYZES, and displays geographically referenced data — typically by layering multiple datasets (population, transportation, land use, elevation, soil, etc.) on top of each other so spatial relationships can be examined.

A GIS combines: (1) a base map; (2) attribute data (numerical or categorical information about features); and (3) tools for spatial analysis (overlay, buffering, network analysis, suitability modeling).

**Two real-world examples (any of the following):**

1. **Public health and epidemiology.** Mapping disease outbreaks (COVID, opioid overdoses, malaria) helps identify hotspots, trace transmission corridors, and target interventions. CDC and WHO use GIS for outbreak surveillance and resource allocation.

2. **Urban planning.** City planners use GIS to evaluate proposed development sites, model traffic flow, plan bus and bike routes, identify food deserts, and decide where to locate new schools, hospitals, or fire stations.

3. **Emergency management.** During wildfires, hurricanes, or earthquakes, GIS overlays evacuation zones, road closures, shelter locations, and population density to guide first responders and protect vulnerable residents.

4. **Retail site selection.** Companies like Starbucks, Walmart, and CVS use GIS to identify optimal store locations based on demographics, traffic patterns, competition, and population density.

5. **Environmental management.** Tracking deforestation, monitoring water quality, modeling climate-change impacts on coastal cities, planning protected-area networks.

GIS has become essential to the modern practice of geography and is used by governments, corporations, NGOs, and researchers worldwide.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Geographers say that **patterns visible at one scale may disappear at another**. Explain what "scale of analysis" means and give a specific example showing how a geographic phenomenon looks different at the local vs. national vs. global scale.`,
        solution: `**Scale of analysis** is the LEVEL at which a geographer studies a phenomenon — local (neighborhood/city), regional (state/province), national, or global. Choosing the right scale matters because patterns visible at one scale can DISAPPEAR or REVERSE at another. This is sometimes called the **modifiable areal unit problem (MAUP)** — how you draw the lines around your data changes the patterns you see.

**Example: Income inequality and racial segregation in the United States**

- **Global scale:** The United States ranks as a HIGH-INCOME country with one of the world\'s highest per-capita GDPs. From the global scale, the U.S. looks like a uniformly prosperous nation.

- **National scale:** Significant variation appears across regions. The Northeast and West Coast are wealthier than the South and Appalachia. State-level poverty rates range from ~7% (New Hampshire) to ~19% (Mississippi). The U.S. begins to look like a country of unequal regions.

- **State or metropolitan scale:** Within a single state, sharp divides appear. California has Silicon Valley\'s extreme wealth alongside Central Valley poverty. New York State has Manhattan finance and rural Appalachian poverty in the Southern Tier.

- **City or neighborhood scale:** Within a single city, racial and economic segregation can be EXTREME. Chicago\'s North Side (predominantly white, wealthy) sits a few miles from the South and West Sides (predominantly Black, lower income, with some areas in deep poverty). Census tracts a mile apart can have life-expectancy differences of 20+ years.

**Implication:** Policy that looks adequate at the national scale ("America is wealthy") can completely miss the geographic concentration of poverty visible only at finer scales. Effective policy requires choosing the appropriate scale of analysis — and recognizing that conclusions drawn at one scale may be wrong at another. Geographers call this awareness "scale sensitivity."` },
    ],
    cards: [
      { front: 'Human geography — definition', back: 'The study of how human activity is distributed across the earth\'s surface and how people interact with their environment. Asks where, why, and with what consequences.', lessonPart: 1 },
      { front: 'Five themes of geography', back: 'Location, Place, Human-Environment Interaction, Movement, Region. Developed by the National Council for Geographic Education.', lessonPart: 1 },
      { front: 'Absolute vs relative location', back: 'Absolute = exact coordinates (lat/long) or street address. Relative = position in relation to other places ("Chicago is at the southern tip of Lake Michigan").', lessonPart: 2 },
      { front: 'Formal (uniform) region', back: 'Defined by one or more attributes that are uniform across the area. Example: the Corn Belt (high corn production), francophone Canada, the European Union.', lessonPart: 2 },
      { front: 'Functional (nodal) region', back: 'Organized around a central point (node) and defined by interactions or flows from that node. Example: a metropolitan area centered on a downtown; a newspaper circulation area.', lessonPart: 2 },
      { front: 'Perceptual (vernacular) region', back: 'Defined by people\'s mental maps and shared cultural identity, with no precise boundaries. Example: "the South," "the Middle East," "Silicon Valley."', lessonPart: 2 },
      { front: 'Mercator projection', back: 'Preserves shape and direction (good for navigation); massively distorts SIZE near the poles. Greenland appears as large as Africa though Africa is 14× larger.', lessonPart: 3 },
      { front: 'Gall-Peters (equal-area) projection', back: 'Preserves AREA accurately but distorts shape. Promoted in the 1970s as a corrective to the Eurocentric Mercator projection.', lessonPart: 3 },
      { front: 'Geographic Information System (GIS)', back: 'Computer software that captures, stores, analyzes, and displays geographically referenced data by layering multiple datasets (population, roads, land use). Used in public health, urban planning, emergency management, retail.', lessonPart: 4 },
      { front: 'Scale of analysis', back: 'The level at which a geographer studies a phenomenon (local, regional, national, global). Patterns visible at one scale may disappear or reverse at another (modifiable areal unit problem).', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'hg-spatial-concepts': {
    textContent: `## Spatial Concepts

Spatial concepts are the **vocabulary** geographers use to describe how features are arranged on the earth\'s surface and how they relate to one another. Mastering these concepts is essential for analyzing any geographic pattern — from the spread of a disease to the location of cities.

### Distribution

**Distribution** describes the ARRANGEMENT of features in space. Three main characteristics:

- **Density** — the number of features per unit area.
  - *Arithmetic density:* total population ÷ total land area (Bangladesh ~3,400 people/sq mi vs. Mongolia ~6).
  - *Physiological density:* population ÷ ARABLE land. A better measure of pressure on agricultural resources (Egypt has high physiological density because most of its land is desert).
  - *Agricultural density:* number of farmers ÷ arable land. Higher in less-developed agricultural systems (more farmers per acre).
- **Concentration** — how clustered or dispersed features are.
  - *Clustered* — features grouped close together (houses in a village).
  - *Dispersed* — features spread far apart (farmsteads on the Great Plains).
- **Pattern** — the geometric arrangement.
  - *Linear* — along a road, river, or coast.
  - *Centralized* — around a central point (a town center).
  - *Random* — no obvious organization.
  - *Grid* — orthogonal arrangement (Manhattan streets, Midwestern townships).

### Distance and Distance Decay

**Distance decay** is the principle that **interaction declines as distance increases**. Phone calls between two cities, migration flows, trade volumes, and the spread of cultural traits all decrease with distance.

Two related concepts:
- **Friction of distance** — the effort or cost required to overcome distance (time, money, fuel).
- **Time-space compression** — modern transportation and communication have effectively SHRUNK the world. A trip that took weeks by sailing ship now takes hours by plane; messages are now instant. The friction of distance has decreased dramatically.

### Site and Situation

- **Site** — the PHYSICAL CHARACTERISTICS of a place itself (terrain, water, climate, soil). New Orleans\'s site: low-lying delta land vulnerable to flooding.
- **Situation** — the location RELATIVE TO OTHER PLACES (proximity to ports, trade routes, resources, markets). New Orleans\'s situation: at the mouth of the Mississippi River system, gateway to the entire interior of the U.S.

Cities often thrive because of strong situation even when their site is poor (New Orleans), or struggle when their site is favorable but their situation is weak (isolated mountain towns).

### Diffusion

**Diffusion** is the SPREAD of a phenomenon (idea, innovation, disease, language) across space. Two main types:

1. **Relocation diffusion** — the phenomenon moves with PEOPLE who migrate. Example: African religions and music brought to the Americas by enslaved Africans; Spanish brought to the New World by Spanish colonizers.

2. **Expansion diffusion** — the phenomenon spreads outward FROM a source while the source retains it. Three subtypes:
   - **Contagious diffusion** — spreads through direct contact, affecting nearly everyone in proximity (an infectious disease, a viral video).
   - **Hierarchical diffusion** — spreads through a hierarchy (cities → smaller cities → towns → rural areas). Fashion trends, hip-hop music, technology adoption.
   - **Stimulus diffusion** — the underlying idea spreads but is modified to fit local conditions. McDonald\'s in India serves vegetarian items to fit Hindu dietary restrictions.

### Spatial Interaction

**Spatial interaction** is the movement of people, goods, capital, and information between places. Four factors influence it (Edward Ullman):
- **Complementarity** — places must offer what each other needs (Saudi Arabia exports oil; Japan needs energy imports).
- **Transferability** — the cost of overcoming distance must be low enough to make exchange profitable. Refrigeration and containerization made global food trade transferable.
- **Intervening opportunity** — a closer alternative can disrupt longer-distance flows. A worker may not migrate from rural Mississippi to California if Atlanta offers comparable opportunities closer to home.
- **Distance decay** — as discussed above.

### Why It Matters

Spatial concepts give us tools to describe and explain WHY things are arranged as they are on the earth\'s surface — and how those arrangements change over time. Every later HG topic — population, culture, agriculture, urban systems, industry — builds on these foundations.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Distinguish between **arithmetic density**, **physiological density**, and **agricultural density**. Which is the best indicator of pressure on a country\'s food-producing capacity?`,
        solution: `- **Arithmetic density** = total population ÷ total land area. The simplest measure; used in casual comparisons. Bangladesh has ~3,400 people/sq mi; Mongolia ~6.

- **Physiological density** = total population ÷ ARABLE (farmable) land. Counts only land that can grow crops. Egypt has very high physiological density because most of its land is desert — only the Nile Valley is arable.

- **Agricultural density** = number of FARMERS ÷ arable land. High in less-developed agricultural systems (lots of subsistence farmers per acre); low in developed countries (mechanized farms with few workers per acre). India has very high agricultural density; the U.S. and Canada very low.

**Best indicator of pressure on food-producing capacity:** **PHYSIOLOGICAL DENSITY**. It directly compares the number of people who must be fed to the amount of land available to feed them. A country with high physiological density (Egypt, Netherlands, Japan) faces pressure either to import food or to intensify agriculture. Arithmetic density can be misleading — Canada\'s arithmetic density is very low, but most Canadians live in a narrow band along the U.S. border.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Define **distance decay** and **time-space compression**. Are they consistent with each other or in tension?`,
        solution: `- **Distance decay** is the principle that INTERACTION DECLINES AS DISTANCE INCREASES. Phone calls, migration flows, trade volumes, and cultural diffusion all decrease as the distance between two places grows. Captured in Tobler\'s First Law of Geography: "everything is related to everything else, but near things are more related than distant things."

- **Time-space compression** is the historical process by which modern transportation and communication technologies have effectively SHRUNK the world. A trip that once took weeks by sailing ship now takes hours by plane; messages once requiring months of postal delivery are now instant via email or text.

**Are they in tension or consistent?**

They are NOT in tension — they are COMPLEMENTARY. Time-space compression has WEAKENED distance decay over time. Long-distance interactions (trade, migration, communication) have grown enormously because the FRICTION of distance (time, cost, effort) has decreased. Distance still matters — it costs more to ship from China to the U.S. than within the U.S. — but distance matters LESS than it once did.

**However**, distance decay still operates: people are more likely to call their next-door neighbor than someone in another country; immigrants tend to come from culturally proximate places; goods are more likely to move within trade blocs than across them. Distance is no longer prohibitive but it is still a friction.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Distinguish between **site** and **situation** in geography. Use a city of your choice to explain how each contributed to its development.`,
        solution: `- **Site** = the PHYSICAL CHARACTERISTICS of the place itself: terrain, soil, water availability, climate, defensibility.
- **Situation** = the LOCATION RELATIVE TO OTHER PLACES: proximity to trade routes, neighboring cities, resources, ports, transportation networks.

**Example: New York City.**

*Site:* Manhattan is a small rocky island at the mouth of the Hudson River. The site has both ADVANTAGES (deep natural harbor, defensible river-island, bedrock that supports skyscrapers) and CHALLENGES (limited land, expensive construction, vulnerability to coastal flooding, Hurricane Sandy impacts).

*Situation:* New York\'s situation is exceptional. It sits at the mouth of the Hudson River, which (via the Erie Canal opened in 1825) connects to the Great Lakes and the entire interior of North America. It faces the Atlantic and is the closest major U.S. port to Europe. Its situation made it the dominant U.S. trading port in the 19th century, the gateway for European immigration, and the financial capital of the country.

**Lesson:** New York would not have become a global city based on site alone; without its situational advantages — connecting Atlantic shipping with the North American interior — it would be just another small island town. Many cities thrive because of strong situation despite poor site (New Orleans, on flood-prone delta land but at the mouth of the Mississippi system); others struggle despite favorable site (isolated mountain towns with rich soil but no transportation links).

**Other valid city examples:** Chicago (site: portage between Great Lakes and Mississippi system; situation: gateway to the West); Singapore (site: small swampy island; situation: strategic strait between Indian and Pacific Oceans).` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain the difference between **contagious diffusion** and **hierarchical diffusion**. Give a real-world example of each.`,
        solution: `Both are types of **expansion diffusion** — a phenomenon spreads outward from a source while the source retains it.

**Contagious diffusion:** spreads through DIRECT CONTACT, affecting nearly everyone in proximity to the source. Like a contagious disease, it moves person-to-person regardless of social hierarchy. *Example:* an INFECTIOUS DISEASE — COVID-19 spread through respiratory contact, infecting people in any community where the virus was introduced. Viral social-media trends also spread contagiously — millions of people share the same TikTok dance or meme regardless of their social rank.

**Hierarchical diffusion:** spreads through a HIERARCHY OF PLACES OR PEOPLE, typically from large cities or high-status individuals down to smaller places or lower-status groups. The phenomenon JUMPS over intervening areas. *Example:* HIP-HOP MUSIC originated in the Bronx in the 1970s, then diffused first to other major U.S. cities (Los Angeles, Atlanta, Houston), then to mid-size cities, and only later to small towns and rural areas. Fashion trends typically flow from Paris/Milan/New York fashion weeks down through major cities to mall stores in small towns. Smartphones first appeared in wealthy global cities and progressively diffused down the urban hierarchy.

**Difference in pattern:** Contagious diffusion produces an EXPANDING CIRCLE outward from the source. Hierarchical diffusion produces a JUMPING pattern that follows the hierarchy of cities, often skipping rural areas in between.

**Real-world note:** A single phenomenon can show BOTH patterns simultaneously. COVID-19 spread hierarchically across the world (jumping from Wuhan to other major airports first) AND contagiously within each city it reached.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Edward Ullman identified four factors that influence **spatial interaction**: complementarity, transferability, intervening opportunity, and distance decay. Apply these four factors to explain why MEXICO is a major source of agricultural exports to the United States.`,
        solution: `**Spatial interaction** = movement of people, goods, capital, and information between places. Ullman\'s four factors all favor strong U.S.-Mexico agricultural trade:

1. **Complementarity** — places must offer what each other needs.
   - Mexico\'s warm climate and long growing season produce winter fruits and vegetables (tomatoes, avocados, berries, peppers) that the U.S. cannot produce in its winter months. The U.S. has high consumer demand for fresh produce year-round.
   - Mexican producers also have access to abundant low-cost labor for labor-intensive horticultural crops.
   - The U.S. exports corn, wheat, dairy, and meat back to Mexico — a complementary two-way agricultural trade.

2. **Transferability** — the cost of overcoming distance must be low enough.
   - Mexico shares a 2,000-mile land border with the U.S., enabling truck shipment of fresh produce within 1–3 days.
   - Refrigerated trucking, containerization, and modern packing technology let perishable produce travel without spoilage.
   - The USMCA (formerly NAFTA) eliminated most tariffs and standardized inspection procedures, dramatically lowering trade costs.

3. **Intervening opportunity** — a closer alternative could disrupt the flow, but few exist.
   - Domestic U.S. production (California, Florida, Arizona) provides some competition, but not enough to meet winter demand.
   - Other Latin American producers (Guatemala, Chile, Peru) DO supply the U.S. — but Mexico\'s closer location gives it cost and freshness advantages.
   - Canadian winter produce is essentially nonexistent (cold climate); Caribbean nations are smaller producers.
   - Mexico\'s geographic proximity makes it the natural intervening opportunity that captures most U.S. winter-produce demand BEFORE more distant alternatives can compete.

4. **Distance decay** — interaction declines with distance.
   - Mexico\'s adjacency means low transport costs, fast delivery, and strong commercial relationships built up over decades.
   - More distant alternatives (Chile, Peru, China) face higher distance decay — longer shipping times, higher fuel costs, more spoilage risk, weaker commercial networks.

**Synthesis:** All four factors align powerfully in favor of Mexico-U.S. agricultural trade. The result is that Mexico has become the LARGEST source of U.S. fresh produce imports, supplying roughly 70% of U.S. fresh tomato imports, 90% of avocados, and majorities of fresh berries, peppers, and cucumbers in winter months. Trade tensions or border disruptions (as during 2019 tariff threats) create immediate price spikes in U.S. supermarkets — a vivid demonstration of how strong this spatial interaction has become.` },
    ],
    cards: [
      { front: 'Distribution', back: 'The arrangement of features in space. Three components: density (how many per unit area), concentration (clustered vs dispersed), pattern (geometric arrangement — linear, grid, random).', lessonPart: 1 },
      { front: 'Arithmetic vs physiological density', back: 'Arithmetic = total population ÷ total land area. Physiological = total population ÷ arable land. Physiological is a better indicator of pressure on food-producing capacity (Egypt has very high physiological density).', lessonPart: 2 },
      { front: 'Distance decay', back: 'Interaction declines as distance increases. Captured in Tobler\'s First Law of Geography: "near things are more related than distant things." Applies to migration, trade, communication, cultural diffusion.', lessonPart: 3 },
      { front: 'Time-space compression', back: 'Modern transportation and communication have effectively shrunk the world. Trips that took weeks by ship now take hours by plane; messages are now instant. Has weakened (but not eliminated) distance decay.', lessonPart: 3 },
      { front: 'Site vs situation', back: 'Site = physical characteristics of the place itself (terrain, water, climate). Situation = location relative to other places (proximity to ports, trade routes). New Orleans has poor site but excellent situation.', lessonPart: 4 },
      { front: 'Relocation diffusion', back: 'A phenomenon spreads as PEOPLE migrate carrying it with them. Example: African religions and music brought to the Americas by enslaved Africans; Spanish brought to the New World by Spanish colonizers.', lessonPart: 5 },
      { front: 'Contagious diffusion', back: 'Type of expansion diffusion. Spreads through direct contact, affecting nearly everyone in proximity, regardless of social hierarchy. Example: an infectious disease like COVID-19 or a viral video.', lessonPart: 5 },
      { front: 'Hierarchical diffusion', back: 'Type of expansion diffusion. Spreads through a hierarchy of places (large cities → smaller cities → towns → rural). Example: hip-hop music, fashion trends, smartphone adoption.', lessonPart: 5 },
      { front: 'Stimulus diffusion', back: 'Type of expansion diffusion. The underlying idea spreads but is modified to fit local conditions. Example: McDonald\'s in India serves vegetarian items to fit Hindu dietary restrictions.', lessonPart: 5 },
      { front: 'Ullman\'s four factors of spatial interaction', back: 'Complementarity (places offer what each needs), Transferability (cost of overcoming distance is low enough), Intervening opportunity (closer alternative disrupts longer flows), Distance decay.', lessonPart: 6 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'hg-population-distribution': {
    textContent: `## Population Distribution

The world\'s 8+ billion people are distributed VERY UNEVENLY across the earth\'s surface. Roughly **two-thirds of humanity lives on less than 10% of the land**, clustered in a handful of dense regions. Understanding WHERE people live — and WHY — is foundational to human geography.

### Where People Live: The Four Major Population Clusters

Most of the world\'s population is concentrated in four large clusters:

1. **East Asia** (~1.6 billion) — China, Japan, the Koreas. Concentrated along the Pacific coast and major river valleys (Yangtze, Yellow Rivers).
2. **South Asia** (~1.9 billion) — India, Pakistan, Bangladesh. Concentrated along the Indo-Gangetic Plain and coastal areas.
3. **Europe** (~750 million) — densest in the band from England through the Low Countries, Germany, and into northern Italy.
4. **Northeastern North America** (~200 million) — Boston-Washington corridor and the Great Lakes region.

These clusters share certain features: **fertile soils, temperate climates, access to water, lowlands suitable for agriculture or industry**, and (in Europe and North America) historical centers of industrialization.

### Where People DON\'T Live: Sparsely Populated Areas

Geographers identify four categories of inhospitable land:

1. **Dry lands (deserts)** — Sahara, Arabian Peninsula, Gobi, Australian Outback. Insufficient water for traditional agriculture.
2. **Wet lands (tropical rainforests)** — Amazon, Congo, Indonesia. Heavy rainfall, leached soils, dense vegetation, and disease pressure historically deterred dense settlement.
3. **Cold lands (polar and subpolar regions)** — northern Canada, Siberia, Antarctica, Greenland. Short growing seasons, frozen ground (permafrost), extreme cold.
4. **High lands (mountains)** — Himalayas, Andes, Rockies. Steep terrain, thin air, cold climate, poor soils.

Together these regions cover most of the earth\'s surface but contain only a small fraction of its population.

### Measuring Population Distribution

- **Arithmetic density** — total population ÷ total land area. The simplest measure but misleading when much land is uninhabitable (Canada has very low arithmetic density but most Canadians live in a narrow southern band).
- **Physiological density** — population ÷ ARABLE land. A better measure of pressure on agricultural resources. Egypt has high physiological density because most of its land is desert.
- **Agricultural density** — number of farmers ÷ arable land. High in less-developed countries with subsistence farming; low in developed countries with mechanized agriculture.

### Population Pyramids

A **population pyramid** is a bar chart showing the age and sex distribution of a population. Different pyramid shapes reveal different demographic stages:

- **Wide base, narrow top (pyramid shape)** — high birth rate, high death rate, young population. Typical of less-developed countries (Niger, Afghanistan).
- **Even bars (rectangular shape)** — low birth rate, low death rate, balanced age structure. Typical of developed countries (United States, France).
- **Inverted pyramid (narrow base)** — birth rate has fallen below death rate, aging population, shrinking workforce. Japan, Italy, South Korea, Germany.

### Why Population Distribution Matters

Population distribution affects:
- **Resource pressure** — densely populated regions require intensive agriculture, water management, and infrastructure.
- **Political power** — the U.S. House of Representatives is allocated by population, giving high-density states more representation; democratic governance reflects population geography.
- **Economic development** — large markets attract investment; concentrated populations can support specialized industries and services.
- **Environmental impact** — densely populated regions consume more local resources and produce more concentrated waste.
- **Vulnerability to natural disasters** — densely populated coastal areas face heightened risk from sea-level rise, storms, and tsunamis.

### Trends in Population Distribution

- **Continuing rural-to-urban migration.** As of 2007, more than half of the world\'s population lives in cities — projected to reach 68% by 2050.
- **Coastal concentration.** ~40% of humanity lives within 100 km of a coast.
- **Megacity growth.** 33 cities now exceed 10 million population (Tokyo, Delhi, Shanghai, São Paulo, Mexico City, Cairo, Mumbai, Beijing). Most are in the developing world.
- **Aging in developed countries.** Developed countries face shrinking and aging populations; some (Japan, Italy, South Korea) are experiencing actual population decline.
- **Africa\'s rising share.** Sub-Saharan Africa has the world\'s highest fertility rates and is projected to contain 1 in 4 people by 2050.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Identify the four major population clusters of the world and the principal physical/geographic features they share.`,
        solution: `1. **East Asia** (~1.6 billion) — China, Japan, the Koreas. Concentrated along the Pacific coast and major river valleys (Yangtze, Yellow Rivers).
2. **South Asia** (~1.9 billion) — India, Pakistan, Bangladesh. Concentrated along the Indo-Gangetic Plain and major rivers (Ganges, Indus).
3. **Europe** (~750 million) — densest from England through the Low Countries, Germany, into northern Italy.
4. **Northeastern North America** (~200 million) — the Boston-Washington corridor and the Great Lakes region.

**Common features:**
- **Fertile soils** suitable for intensive agriculture.
- **Temperate climates** with adequate rainfall and growing seasons.
- **Lowlands** that support both agriculture and dense settlement.
- **Access to water** — major rivers (for transportation, irrigation, drinking) and ocean coasts (for trade).
- **Historical centers of agricultural civilization** (East and South Asia) and industrialization (Europe and North America), which produced economic growth that supported high population densities.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Identify the four major types of land that are SPARSELY populated and explain why each deters dense settlement.`,
        solution: `1. **Dry lands (deserts)** — Sahara, Arabian Peninsula, Gobi, Australian Outback. **Insufficient water for traditional agriculture**; without irrigation, only nomadic herding and oasis agriculture are possible. Modern technology (desalination, drip irrigation) has allowed some desert cities (Dubai, Riyadh, Phoenix) to grow, but at high cost.

2. **Wet lands (tropical rainforests)** — Amazon, Congo, Indonesia. **Heavy rainfall leaches nutrients from soils**, leaving thin and infertile topsoil. Dense vegetation makes clearing difficult; tropical diseases (malaria, yellow fever) historically deterred settlement. Once forest is cleared, soil productivity collapses within a few years.

3. **Cold lands (polar and subpolar)** — northern Canada, Siberia, Antarctica, Greenland. **Short growing seasons** (sometimes none); frozen ground (permafrost) prevents foundations from settling and makes drainage impossible; extreme cold limits outdoor activity for much of the year.

4. **High lands (mountains)** — Himalayas, Andes, Rockies. **Steep terrain** prevents large-scale agriculture and makes transportation difficult; thin air at high altitudes reduces oxygen and growing-season warmth; soils are typically thin and rocky; landslides and avalanches add hazards.

**Together:** these four "ecumene" exclusion zones cover most of the earth\'s surface but contain only a small fraction of its population. Modern technology has reduced (not eliminated) some of these constraints — but the geographic pattern of population concentration remains very stable.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `A country has 100 million people, 500,000 square kilometers of total land area, and 100,000 square kilometers of arable land. Calculate its **arithmetic density** and **physiological density**, and explain what each tells us about the country.`,
        solution: `**Arithmetic density** = total population ÷ total land area.
$$\\text{Arithmetic density} = \\frac{100{,}000{,}000 \\text{ people}}{500{,}000 \\text{ km}^2} = 200 \\text{ people per km}^2$$

**Physiological density** = total population ÷ arable land.
$$\\text{Physiological density} = \\frac{100{,}000{,}000 \\text{ people}}{100{,}000 \\text{ km}^2} = 1{,}000 \\text{ people per km}^2$$

**Interpretation:**
- The **arithmetic density** (200/km²) is moderate — roughly comparable to Italy or Pakistan. From this number alone, the country looks reasonably populated but not extraordinarily dense.
- The **physiological density** (1,000/km²) is very HIGH — comparable to Egypt or Bangladesh. It tells us that:
  - Only **20% of the country\'s land is arable** (the rest may be desert, mountain, forest, or otherwise unsuitable for agriculture).
  - Each square kilometer of farmland must support **5× as many people** as the arithmetic measure suggests.
  - The country faces SIGNIFICANT PRESSURE on its agricultural capacity. It likely needs to import food, intensify agricultural practices (irrigation, fertilizers, multiple crops per year), or accept high vulnerability to drought and crop failures.

**Lesson:** Arithmetic density alone can mask the true demographic pressure on resources. Physiological density is a much better indicator of food security challenges. Egypt is the textbook example: arithmetic density is moderate, but with 96% of its land in desert, its physiological density is among the highest in the world.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare the population pyramids of a typical **less-developed country** (e.g., Niger) and a typical **developed country** (e.g., Japan). What does each shape tell us about the country\'s demographic situation and likely future?`,
        solution: `**Less-developed country (Niger):**
- **Shape:** Wide base, rapidly narrowing toward the top — a classic PYRAMID.
- **Indicates:** HIGH BIRTH RATE (large young cohorts), HIGH DEATH RATE (few elderly survivors), VERY YOUNG population (median age in Niger is ~15).
- **Implications:**
  - Rapid population growth — far more births than deaths each year.
  - Large dependent young population requires substantial investment in schools, child healthcare, and (eventually) job creation.
  - HIGH DEPENDENCY RATIO — many children depend on each working-age adult.
  - Likely future: continued rapid growth for decades unless fertility falls; demographic transition still in early stages.

**Developed country (Japan):**
- **Shape:** Narrow base, expanding bars in middle ages, even WIDER at older ages — INVERTED pyramid.
- **Indicates:** VERY LOW BIRTH RATE (small young cohorts), LOW DEATH RATE, HIGHLY AGED population (median age in Japan is ~49).
- **Implications:**
  - Population is SHRINKING (Japan\'s population has been declining since 2010).
  - Large elderly population requires extensive pension, healthcare, and elder-care services.
  - HIGH DEPENDENCY RATIO — but driven by elderly dependents rather than young.
  - Shrinking working-age population creates labor shortages and strains pension systems.
  - Likely future: continuing population decline and aging absent significant immigration or sharp fertility increase.

**Policy implications differ sharply:**
- Niger needs to invest in family planning, female education, and economic development to manage growth.
- Japan needs to address labor shortages (immigration? automation?), reform pension systems, and adapt to a shrinking population.

**General lesson:** Population pyramids are a vivid graphical representation of a country\'s demographic stage and its likely demographic trajectory over the next 50 years.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `By 2050, sub-Saharan Africa is projected to contain roughly 1 in 4 of the world\'s people, while Europe and East Asia (especially China, Japan, and Korea) are projected to age and shrink. Discuss THREE major geographic, political, or economic consequences of this projected redistribution of the world\'s population.`,
        solution: `Three major consequences:

1. **Migration pressure from Africa to Europe and beyond.**
   - With Africa\'s population growing while Europe\'s shrinks (and ages), economic and demographic incentives to migrate northward will strengthen. Europe\'s aging workforce will need labor; Africa\'s growing youth bulge will face limited domestic job markets.
   - Likely effects: continued strong migration flows across the Mediterranean and through the Sahara; political conflict over migration policy in European countries; rise of anti-immigrant populism (already visible since 2015); potential humanitarian crises if migration is suppressed without economic alternatives.
   - More positive scenario: managed labor migration could simultaneously address European labor shortages and African unemployment, but requires politically difficult cooperation.

2. **Shifting global economic and political power.**
   - China\'s population peaked around 2022 and is now declining; India has surpassed China as the world\'s most populous country. Africa\'s economic weight will rise as its labor force grows; Europe\'s and East Asia\'s relative weight will fall.
   - Potential outcomes: African nations could collectively become a major economic bloc; African voices in international institutions (UN, WTO, climate negotiations) will demand greater representation; markets and investors will shift attention toward African consumers.
   - China\'s aging will challenge its growth model, which has relied on a young, expanding workforce. China is now wrestling with the consequences of decades of one-child policy: a shrinking working-age population must support a growing elderly population, slowing growth and straining social services.

3. **Climate and resource pressures.**
   - A larger African population will increase demand for food, water, and energy in regions already stressed by climate change. Sub-Saharan Africa is highly vulnerable to droughts, floods, and desertification — the effects of which will worsen with climate change. This raises serious questions about food security, water access, and habitability of certain regions.
   - On the other hand, per-capita emissions in Africa remain very low; the continent\'s growing population will not, by itself, cause proportional growth in emissions unless development pathways follow Western fossil-fuel-intensive models. African nations have an opportunity to "leapfrog" to renewable energy.
   - For shrinking developed countries, the challenges are different: maintaining economic activity with a smaller workforce, supporting elderly populations, repurposing infrastructure built for larger populations.

**Synthesis:** The 21st century will see a redistribution of humanity unprecedented in modern history. The geographic, economic, and political consequences will reshape global affairs — and the policy choices that countries make in the next 25 years (on migration, education, climate, economic cooperation) will determine whether this transition is managed peacefully and prosperously or generates conflict and humanitarian crisis.` },
    ],
    cards: [
      { front: 'Four major world population clusters', back: 'East Asia (~1.6B), South Asia (~1.9B), Europe (~750M), Northeastern North America (~200M). Concentrated in fertile, temperate, lowland areas with access to water.', lessonPart: 1 },
      { front: 'Four types of sparsely populated lands', back: 'Dry (deserts), wet (tropical rainforests), cold (polar/subpolar), high (mountains). Each presents different barriers to dense settlement.', lessonPart: 2 },
      { front: 'Why are deserts sparsely populated?', back: 'Insufficient water for traditional agriculture. Modern technology (desalination, irrigation) has allowed some desert cities to grow, but at high cost. Sahara, Arabian Peninsula, Gobi, Australian Outback.', lessonPart: 2 },
      { front: 'Why are tropical rainforests sparsely populated?', back: 'Heavy rainfall leaches soil nutrients, leaving thin and infertile topsoil. Dense vegetation; tropical diseases (malaria); rapid soil collapse after clearing. Amazon, Congo, Indonesia.', lessonPart: 2 },
      { front: 'Arithmetic density', back: 'Total population ÷ total land area. The simplest density measure but can be misleading when much land is uninhabitable (e.g., Canada).', lessonPart: 3 },
      { front: 'Physiological density', back: 'Total population ÷ arable land. A better indicator of pressure on agricultural resources. Egypt has very high physiological density because most of its land is desert.', lessonPart: 3 },
      { front: 'Population pyramid — wide base shape', back: 'Wide base, narrowing rapidly toward the top. Indicates high birth rate, high death rate, very young population. Typical of less-developed countries (Niger, Afghanistan).', lessonPart: 4 },
      { front: 'Population pyramid — inverted shape', back: 'Narrow base, wider middle and top. Indicates very low birth rate, low death rate, aging and shrinking population. Typical of Japan, Italy, South Korea, Germany.', lessonPart: 4 },
      { front: 'Megacity', back: 'A city with more than 10 million population. 33 megacities exist today; most are in the developing world (Tokyo, Delhi, Shanghai, São Paulo, Mexico City, Cairo, Mumbai, Beijing).', lessonPart: 5 },
      { front: 'Africa\'s projected demographic shift', back: 'Sub-Saharan Africa has the world\'s highest fertility rates and is projected to contain ~1 in 4 of the world\'s people by 2050. Major implications for migration, labor, climate, and global power balance.', lessonPart: 5 },
    ],
  },
}

async function main() {
  console.log('=== AP Human Geography content fill — Batch 1 ===\n')
  let topicsHandled = 0
  let totalProblems = 0
  let totalCards = 0
  let textUpdates = 0

  for (const [slug, payload] of Object.entries(TOPICS)) {
    const topic = await prisma.topic.findUnique({ where: { slug } })
    if (!topic) {
      console.log(`✗ Topic not found: ${slug} — skipping`)
      continue
    }
    console.log(`• ${slug}`)

    const currentLen = (topic.textContent ?? '').length
    if (currentLen < 1500) {
      await prisma.topic.update({
        where: { id: topic.id },
        data: { textContent: payload.textContent },
      })
      textUpdates++
      console.log(`    text: ${currentLen} → ${payload.textContent.length} chars`)
    } else {
      console.log(`    text: ${currentLen} chars (kept; already adequate)`)
    }

    const existingProblems = await prisma.exampleProblem.findMany({
      where: { topicId: topic.id },
      select: { order: true },
    })
    const usedOrders = new Set(existingProblems.map(p => p.order))
    let nextOrder = (existingProblems.length > 0 ? Math.max(...existingProblems.map(p => p.order)) : 0) + 1
    const problemRows = payload.problems.map(p => {
      const order = usedOrders.has(p.order) ? nextOrder++ : p.order
      usedOrders.add(order)
      return {
        topicId: topic.id,
        order,
        difficulty: p.difficulty,
        question: p.question,
        solution: p.solution,
      }
    })
    if (problemRows.length > 0) {
      const result = await prisma.exampleProblem.createMany({ data: problemRows })
      totalProblems += result.count
      console.log(`    + ${result.count} problems`)
    }

    const existingFronts = new Set(
      (await prisma.flashcard.findMany({ where: { topicId: topic.id }, select: { front: true } }))
        .map(c => c.front)
    )
    const newCards = payload.cards
      .filter(c => !existingFronts.has(c.front))
      .map(c => ({
        topicId: topic.id,
        front: c.front,
        back: c.back,
        hint: c.hint ?? null,
        lessonPart: c.lessonPart ?? null,
      }))
    if (newCards.length > 0) {
      const result = await prisma.flashcard.createMany({ data: newCards })
      totalCards += result.count
      console.log(`    + ${result.count} flashcards`)
    }

    topicsHandled++
  }

  console.log(`\n=== Done. ${topicsHandled} topics. Text updates: ${textUpdates}. Problems: ${totalProblems}. Flashcards: ${totalCards}. ===`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
