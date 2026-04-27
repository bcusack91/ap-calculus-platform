/**
 * Phase 2/3 content fill for AP Human Geography - Batch 3 (4 topics)
 * Covers: hg-urbanization, hg-urban-challenges,
 *         hg-agricultural-origins, hg-agricultural-practices.
 *
 * Usage:
 *   set -a && source .env.local && set +a && npx tsx prisma/add-human-geography-content-batch3.ts
 */

import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

type ProblemSeed = { order: number; difficulty: Difficulty; question: string; solution: string }
type CardSeed = { front: string; back: string; hint?: string; lessonPart?: number }
type TopicSeed = { textContent: string; problems: ProblemSeed[]; cards: CardSeed[] }

const TOPICS: Record<string, TopicSeed> = {
  'hg-urbanization': {
    textContent: `## Urbanization

**Urbanization** is the process by which an increasing share of a population lives in cities and metropolitan areas. It is one of the strongest geographic patterns of the modern world: in 1800 less than 10% of people lived in cities; today more than 56% do, and the share continues to rise.

### Why Cities Grow

Cities grow through two mechanisms. **Natural increase** occurs when births exceed deaths among urban residents. **Rural-to-urban migration** occurs when people move from countryside to city for work, education, safety, or services. In many developing countries, rural migrants are pushed by mechanized agriculture, land scarcity, climate stress, and lack of opportunity, while cities pull them with factory jobs, informal work, schools, hospitals, and social networks.

Urbanization is closely connected to the **Demographic Transition Model**. Stage 2 and Stage 3 countries often urbanize rapidly because death rates have fallen, populations are young, and industrial or service economies are expanding. Stage 4 and Stage 5 countries are already highly urbanized, so growth shifts from central cities to suburbs, exurbs, and redeveloped inner-city neighborhoods.

### World Cities and Megacities

A **city** is a nucleated settlement with a dense built environment and non-agricultural functions. A **metropolitan area** includes the central city plus surrounding suburbs tied to it by commuting and economic links. A **megacity** has more than 10 million residents. Tokyo, Delhi, Shanghai, Sao Paulo, Mexico City, Cairo, Lagos, Dhaka, and Jakarta are among the largest.

A **world city** (or global city) is important not just because of population, but because it controls global finance, media, culture, politics, and corporate decision-making. New York, London, Tokyo, Paris, Singapore, Hong Kong, Dubai, and Los Angeles function as command centers of the world economy.

### Urban Models

Urban geographers use models to simplify city structure:

- **Concentric zone model** (Burgess): city grows outward in rings from a central business district (CBD): CBD, transition zone, working-class housing, better residences, commuter zone. Based on early 20th-century Chicago.
- **Sector model** (Hoyt): cities grow in wedge-shaped sectors along transportation corridors; wealthy housing often extends outward along desirable rail or road routes.
- **Multiple nuclei model** (Harris and Ullman): modern cities have several centers, such as CBD, airport, university, industrial park, mall, and edge city.
- **Latin American city model**: CBD with a commercial spine and elite residential sector, surrounded by zones of maturity, in-situ accretion, and peripheral squatter settlements.
- **Peripheral model**: suburbs and edge cities linked by beltways, common in U.S. metropolitan regions.

No model is exact, but each highlights how transportation, class, land values, and historical development shape urban space.

### Suburbanization and Edge Cities

**Suburbanization** is the movement of people and economic activity from central cities to surrounding suburbs. In the United States it accelerated after World War II because of highways, cheap mortgages, FHA/VA loans, mass-produced housing (Levittown), and white flight from desegregating urban neighborhoods.

An **edge city** is a concentration of business, shopping, and entertainment outside the traditional CBD, usually near highway interchanges. Tyson's Corner outside Washington, D.C., and Schaumburg outside Chicago are classic examples. Edge cities show that modern metropolitan areas are **polycentric** rather than dominated by a single downtown.

### Urbanization in Developing Regions

In much of Africa, South Asia, and Latin America, urbanization is faster than formal job creation and infrastructure construction. This produces **informal settlements** (favelas in Brazil, barriadas in Peru, bustees in India, shantytowns or squatter settlements elsewhere). These neighborhoods often lack secure land tenure, sewer systems, paved roads, and reliable electricity, but they can also be vibrant communities with strong informal economies.

Urbanization is not simply a problem. Cities concentrate innovation, education, healthcare, markets, and cultural life. Dense settlement can reduce per-capita energy use when cities have transit and compact land use. The challenge is **managed urbanization**: building housing, water systems, transit, schools, and jobs quickly enough to turn migration into opportunity rather than crisis.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Define **urbanization** and distinguish between a **city**, a **metropolitan area**, a **megacity**, and a **world city**.`,
        solution: `**Urbanization** is the process by which an increasing share of a population lives in cities and metropolitan areas.

- **City:** dense nucleated settlement with non-agricultural functions.
- **Metropolitan area:** central city plus surrounding suburbs and commuter zones tied to it economically.
- **Megacity:** city or metro area with more than 10 million residents, such as Tokyo, Delhi, Lagos, or Mexico City.
- **World city/global city:** a command center of the global economy, important for finance, media, culture, government, and corporate control. Examples: New York, London, Tokyo, Paris, Singapore.

The key distinction is that megacity is about SIZE, while world city is about FUNCTION and global influence.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Identify two causes of rapid urban growth in developing countries and two consequences of that growth.`,
        solution: `Two common causes:
1. **Rural-to-urban migration:** people leave villages because of land scarcity, mechanized farming, climate stress, poverty, and lack of schools or hospitals.
2. **Natural increase:** young urban populations have more births than deaths, especially in DTM Stage 2 and Stage 3 countries.

Two consequences:
1. **Informal settlements** grow when housing and infrastructure cannot keep pace. Examples include favelas in Brazil, barriadas in Peru, and bustees in India.
2. **Infrastructure strain** appears in traffic congestion, water shortages, sewer overflows, pollution, and overcrowded schools and clinics.

Urban growth can also create benefits: larger labor markets, innovation, education, and more efficient service delivery if governments plan effectively.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare the **concentric zone**, **sector**, and **multiple nuclei** models of urban structure. What does each model emphasize?`,
        solution: `**Concentric zone model (Burgess):** city grows outward in rings from the CBD. It emphasizes age of development and distance from downtown: CBD, transition zone, working-class housing, better residences, commuter zone. Based on early Chicago.

**Sector model (Hoyt):** city grows in wedge-shaped sectors along transportation routes. It emphasizes the role of rail lines, roads, and corridors in shaping class and land-use patterns. Wealthy residential zones often extend outward along desirable corridors.

**Multiple nuclei model (Harris and Ullman):** city has several nodes rather than one center: CBD, airport, university, industrial park, suburban mall, edge city. It emphasizes modern metropolitan complexity and the fact that different activities cluster around different centers.

All three are simplifications. Burgess fits early industrial cities, Hoyt fits transportation corridors, and multiple nuclei fits modern polycentric metros.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain why **suburbanization** expanded rapidly in the United States after World War II. Include both transportation and policy factors.`,
        solution: `Postwar U.S. suburbanization accelerated because several forces converged:

- **Automobiles and highways:** car ownership made it possible to live farther from downtown jobs. The 1956 Interstate Highway Act made commuting and suburban freight movement easier.
- **Federal mortgage policy:** FHA and VA loans helped millions of white families buy suburban homes with low down payments and long repayment periods.
- **Mass-produced housing:** Levittown-style construction made suburban homes cheap and fast to build.
- **White flight and school concerns:** many white families left central cities as desegregation, racial change, and urban fiscal problems intensified.
- **Cheap land:** farmland at the edge of cities could be converted into subdivisions, shopping centers, and office parks.

The result was a decentralized metropolitan landscape of suburbs, beltways, malls, office parks, and edge cities.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Evaluate the claim that urbanization is both an environmental problem and an environmental solution. Use specific geographic reasoning.`,
        solution: `Urbanization creates environmental problems when it is poorly managed:
- Replacing farmland or wetlands with pavement increases runoff and flooding.
- Vehicle-dependent sprawl increases air pollution and greenhouse-gas emissions.
- Informal settlements may lack sewer systems, producing water pollution and disease risk.
- Urban heat islands raise energy demand and worsen heat-related illness.

But urbanization can also be an environmental solution:
- Dense housing uses less land per person than scattered rural or suburban settlement.
- Public transit, walking, and cycling are viable only when population density is high enough.
- Apartment living often uses less energy per person than detached suburban housing.
- Cities can deliver water, electricity, schools, and healthcare more efficiently per capita.

The key variable is **urban form**. Compact, transit-oriented, mixed-use cities can reduce per-capita environmental impact. Low-density, car-dependent sprawl pushes the opposite direction. So urbanization itself is not automatically good or bad; planning and infrastructure determine the outcome.` },
    ],
    cards: [
      { front: 'Urbanization', back: 'The process by which an increasing share of a population lives in cities and metropolitan areas. Driven by natural increase and rural-to-urban migration.', lessonPart: 1 },
      { front: 'Megacity vs world city', back: 'Megacity = more than 10 million people. World/global city = command center of finance, media, culture, and corporate control. Tokyo is both; Zurich is a world city but not a megacity.', lessonPart: 1 },
      { front: 'Metropolitan area', back: 'A central city plus surrounding suburbs and commuter zones tied to it by jobs, transportation, and economic relationships.', lessonPart: 1 },
      { front: 'Concentric zone model', back: 'Burgess model: city grows outward in rings from the CBD. Based on early 20th-century Chicago.', lessonPart: 2 },
      { front: 'Sector model', back: 'Hoyt model: city grows in wedge-shaped sectors along transportation routes; wealthier housing often extends along desirable corridors.', lessonPart: 2 },
      { front: 'Multiple nuclei model', back: 'Harris and Ullman: modern cities have several centers, such as CBD, airport, university, industrial park, mall, and edge city.', lessonPart: 2 },
      { front: 'Suburbanization', back: 'Movement of people and economic activity from central cities to suburbs. In the U.S. it accelerated after WWII through highways, mortgages, cheap land, and white flight.', lessonPart: 3 },
      { front: 'Edge city', back: 'Concentration of offices, shopping, and entertainment outside the traditional CBD, usually near highway interchanges. Example: Tyson\'s Corner near Washington, D.C.', lessonPart: 3 },
      { front: 'Informal settlement', back: 'Housing built without secure legal title or full infrastructure. Examples: favelas (Brazil), barriadas (Peru), bustees (India), squatter settlements.', lessonPart: 4 },
      { front: 'Managed urbanization', back: 'Urban growth supported by housing, transit, water, schools, sanitation, and jobs. It turns migration into opportunity instead of infrastructure crisis.', lessonPart: 5 },
    ],
  },

  'hg-urban-challenges': {
    textContent: `## Urban Challenges

Cities concentrate opportunity, but they also concentrate problems. Urban geographers study how housing, transportation, inequality, segregation, pollution, and governance shape daily life in metropolitan regions.

### Sprawl and Transportation

**Urban sprawl** is low-density, automobile-dependent expansion at the edge of cities. It is characterized by separated land uses: subdivisions in one place, shopping centers in another, offices in another, and schools or parks elsewhere. This pattern creates long commutes and makes transit difficult because destinations are spread out.

Sprawl has several costs: loss of farmland and habitat, higher infrastructure costs, traffic congestion, air pollution, and social isolation for people who cannot drive. It also encourages **leapfrog development**, where developers skip over vacant land to build farther out, leaving inefficient gaps in the urban fabric.

**Smart growth** tries to counter sprawl through compact development, mixed land uses, walkable streets, transit-oriented development, bike infrastructure, and preservation of open space. Portland, Oregon, is known for an urban growth boundary; Copenhagen is known for transit and cycling; Curitiba, Brazil, for bus rapid transit.

### Segregation, Redlining, and Uneven Development

Urban inequality is spatial. In the United States, **redlining** was the practice of denying mortgages or insurance to neighborhoods considered risky, often because Black, immigrant, or low-income residents lived there. The Home Owners' Loan Corporation maps of the 1930s graded neighborhoods from A to D; D areas were literally colored red.

Redlining, racially restrictive covenants, exclusionary zoning, and discriminatory lending prevented many families from building wealth through homeownership. Their effects persist today: formerly redlined neighborhoods often have lower home values, higher poverty, fewer trees, more heat exposure, and worse health outcomes.

**Blockbusting** occurred when real estate agents encouraged white homeowners to sell cheaply by stoking fear of Black or immigrant neighbors moving in, then resold homes at inflated prices to minority buyers. **White flight** moved population and tax base to suburbs, leaving many central cities with fiscal stress.

### Gentrification

**Gentrification** is the reinvestment and in-migration of wealthier residents into a lower-income urban neighborhood, often leading to rising rents and displacement. It can bring benefits: renovated housing, new businesses, improved services, and lower vacancy. But it can also displace long-time renters, erase local culture, and convert community-serving businesses into boutiques and upscale restaurants.

Examples include Williamsburg in Brooklyn, the Mission District in San Francisco, Shaw in Washington, D.C., and parts of Atlanta, Denver, Austin, and Portland. Gentrification is not just individual preference; it is shaped by transit investment, zoning, real estate capital, and the location of high-wage jobs.

### Environmental Justice

**Environmental justice** examines the unequal distribution of environmental benefits and burdens. Low-income communities and communities of color are more likely to be near highways, industrial facilities, landfills, ports, power plants, and flood-prone land. They often have fewer parks and less tree canopy.

The **urban heat island** effect occurs when pavement and buildings absorb heat, making cities warmer than surrounding rural areas. Within a city, heat is not equal: neighborhoods with fewer trees and more asphalt can be 10-20 degrees Fahrenheit hotter than leafier wealthy areas. This creates higher risk of heat stroke, asthma, and electricity burdens.

### Infrastructure and Governance

Urban governments must provide water, sanitation, transit, policing, schools, emergency services, parks, and affordable housing. Problems arise when cities grow faster than tax revenue, or when political boundaries do not match the metropolitan region. A metro area may have dozens or hundreds of municipalities, each with separate zoning and school districts. This fragmentation can deepen inequality because wealthy suburbs protect tax bases while poor central cities carry more social-service costs.

Successful urban policy often requires regional coordination: transit authorities, housing compacts, water districts, and metropolitan planning organizations. Without coordination, cities can become divided landscapes of opportunity for some and exclusion for others.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Define **urban sprawl** and identify three negative consequences associated with it.`,
        solution: `**Urban sprawl** is low-density, automobile-dependent expansion at the edge of a city or metropolitan area. It usually separates land uses: homes in one zone, stores in another, offices in another.

Three consequences:
1. **Long commutes and congestion** because daily life requires driving.
2. **Loss of farmland, habitat, and open space** as development spreads outward.
3. **Higher infrastructure costs** because roads, water lines, sewers, schools, and emergency services must cover more land per resident.

Other consequences include air pollution, greenhouse-gas emissions, social isolation for non-drivers, and leapfrog development.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `What is **redlining**, and why does it still matter decades after the practice became illegal?`,
        solution: `**Redlining** was the practice of denying mortgages, insurance, or investment to neighborhoods considered risky, often because Black, immigrant, or low-income residents lived there. In the 1930s, federal Home Owners' Loan Corporation maps marked these areas in red.

It still matters because housing wealth compounds across generations. Families excluded from mortgages missed the chance to build equity as home values rose. Formerly redlined neighborhoods often still have:
- lower property values,
- higher poverty,
- fewer trees and parks,
- more heat exposure,
- worse health outcomes,
- lower school funding where schools depend on property taxes.

Redlining became illegal, but its spatial pattern shaped decades of investment and disinvestment.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Evaluate **gentrification** as both a benefit and a problem for urban neighborhoods.`,
        solution: `Gentrification can bring benefits:
- vacant buildings are renovated,
- commercial corridors revive,
- crime may decline,
- tax revenue increases,
- public services and infrastructure may improve.

But it also creates major problems:
- rents and property taxes rise,
- long-time renters can be displaced,
- community-serving stores may be replaced by upscale businesses,
- cultural identity can be erased,
- benefits often flow to landlords and newcomers more than existing residents.

The key policy question is not whether reinvestment is good or bad; reinvestment is usually needed. The question is whether cities protect current residents through affordable housing, tenant protections, community land trusts, inclusionary zoning, and anti-displacement programs.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain **environmental justice** using the example of urban heat islands. Why are heat risks not evenly distributed inside cities?`,
        solution: `**Environmental justice** is the study and policy goal of making sure environmental benefits and burdens are not distributed unfairly by race, income, or political power.

Urban heat islands show the problem clearly. Pavement, dark roofs, and buildings absorb and re-radiate heat, while trees and parks cool neighborhoods through shade and evapotranspiration. Low-income neighborhoods and communities of color often have:
- less tree canopy,
- more asphalt and industrial land,
- more highways and parking lots,
- older housing with weaker insulation or air conditioning,
- residents less able to afford high electricity bills.

As a result, two neighborhoods in the same city can differ by 10-20 degrees Fahrenheit during heat waves. Heat therefore becomes a public-health and equity issue, not just a weather issue.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `A metropolitan region contains one poor central city and many wealthy suburbs with separate zoning and school districts. Explain how **political fragmentation** can deepen urban inequality, and propose two regional policies that could reduce it.`,
        solution: `**Political fragmentation** means the metropolitan region is divided into many separate local governments. Each municipality controls zoning, taxes, schools, and services.

This can deepen inequality because:
- Wealthy suburbs use exclusionary zoning, such as large minimum lot sizes or bans on apartments, to keep low-income residents out.
- Property-tax wealth stays within affluent school districts, while poorer central-city districts face higher needs and lower revenue.
- Transit planning becomes difficult because each suburb can resist routes or density.
- Social-service costs concentrate in the central city while suburban job centers benefit from regional workers.

Two regional policies:
1. **Regional affordable-housing requirements** so every municipality must permit or fund a fair share of affordable units, reducing exclusionary zoning.
2. **Regional tax-base sharing or school-funding equalization** so wealthy suburbs contribute to metro-wide needs instead of keeping all property-tax advantages.

Other strong answers include regional transit authorities, metropolitan planning organizations with real power, urban growth boundaries, and shared climate-resilience planning.` },
    ],
    cards: [
      { front: 'Urban sprawl', back: 'Low-density, automobile-dependent expansion at the city edge. Separates homes, jobs, stores, and schools, creating long commutes and high infrastructure costs.', lessonPart: 1 },
      { front: 'Leapfrog development', back: 'Developers skip over vacant land to build farther out, leaving inefficient gaps and pushing infrastructure farther into rural land.', lessonPart: 1 },
      { front: 'Smart growth', back: 'Planning approach that favors compact development, mixed land use, walkable streets, transit, bike infrastructure, and open-space preservation.', lessonPart: 1 },
      { front: 'Redlining', back: 'Denial of mortgages or insurance to neighborhoods deemed risky, often because Black, immigrant, or low-income residents lived there. 1930s HOLC maps colored these areas red.', lessonPart: 2 },
      { front: 'Blockbusting', back: 'Real estate agents scared white homeowners into selling cheaply, then resold at higher prices to Black or immigrant buyers.', lessonPart: 2 },
      { front: 'White flight', back: 'Movement of white residents and tax base from central cities to suburbs, especially after school desegregation and racial neighborhood change.', lessonPart: 2 },
      { front: 'Gentrification', back: 'Reinvestment and arrival of wealthier residents in lower-income neighborhoods, often raising rents and causing displacement while improving buildings and services.', lessonPart: 3 },
      { front: 'Environmental justice', back: 'The study and policy goal of fair distribution of environmental benefits and burdens across race, income, and political power.', lessonPart: 4 },
      { front: 'Urban heat island', back: 'Cities are warmer than surrounding rural areas because pavement and buildings absorb heat. Within cities, treeless asphalt-heavy neighborhoods are hottest.', lessonPart: 4 },
      { front: 'Political fragmentation', back: 'Metro regions split among many local governments. Separate zoning, tax bases, and school districts can deepen inequality between central cities and suburbs.', lessonPart: 5 },
    ],
  },

  'hg-agricultural-origins': {
    textContent: `## Agricultural Origins

For most of human history, people lived as hunters and gatherers. Agriculture began only about 10,000 to 12,000 years ago, but it transformed population, settlement, technology, social hierarchy, and the environment more than almost any other human innovation.

### The First Agricultural Revolution

The **First Agricultural Revolution**, also called the **Neolithic Revolution**, was the transition from hunting and gathering to farming and herding. It did not happen once. It happened independently in several **agricultural hearths** where local plants and animals could be domesticated.

Major hearths include:

- **Fertile Crescent** (Southwest Asia): wheat, barley, lentils, sheep, goats, cattle. One of the earliest hearths, around 10,000 BCE.
- **East Asia**: rice in the Yangtze River valley; millet in northern China; pigs and chickens.
- **South Asia**: some early rice, cotton, and cattle traditions.
- **Mesoamerica**: maize, beans, squash, peppers, cacao, turkeys. Maize domestication from teosinte was one of the most dramatic crop transformations.
- **Andes**: potatoes, quinoa, llamas, alpacas, guinea pigs.
- **Sub-Saharan Africa**: sorghum, millet, yams, oil palm, coffee in Ethiopia.
- **New Guinea**: taro, bananas, sugarcane.

### Domestication

**Domestication** is the deliberate modification of plants and animals by humans for desired traits. Farmers selected larger seeds, sweeter fruits, non-shattering grain heads, docile animals, more milk, more meat, or better fiber. Over generations, domesticated species became different from their wild ancestors.

Plant domestication created stable food supplies, but it also reduced dietary diversity. Animal domestication provided meat, milk, wool, hides, traction, manure, and transportation. Jared Diamond emphasized that Eurasia had many domesticable large mammals and an east-west axis that allowed crops to spread across similar climates, helping explain why agriculture and state power developed earlier there than in some other regions.

### Diffusion of Agriculture

Agriculture spread by both **relocation diffusion** and **expansion diffusion**. Farmers migrated with their crops and animals, and neighboring hunter-gatherers adopted agricultural practices through contact. Wheat and barley spread from the Fertile Crescent into Europe, North Africa, and South Asia. Rice agriculture spread across East and Southeast Asia. Maize diffused throughout the Americas and then, after the Columbian Exchange, around the world.

The spread of agriculture allowed permanent villages, population growth, food surplus, craft specialization, trade, social classes, states, and eventually cities. But it also increased inequality, warfare over land, epidemic disease from living near animals, and environmental modification.

### Columbian Exchange

After 1492, the **Columbian Exchange** moved crops, animals, diseases, and people between the Eastern and Western Hemispheres. From the Americas came maize, potatoes, sweet potatoes, tomatoes, cacao, tobacco, peanuts, cassava, peppers, and squash. From Afro-Eurasia came wheat, rice, sugarcane, coffee, bananas, horses, cattle, pigs, sheep, goats, and smallpox.

The exchange transformed world agriculture. Potatoes supported population growth in Europe. Maize and cassava became staples in Africa and China. Horses transformed Plains Indian societies. Sugarcane plantations reshaped the Caribbean and Brazil through enslaved labor. Diseases devastated Indigenous populations in the Americas, with mortality in many regions reaching 50-90%.

### Later Agricultural Revolutions

The **Second Agricultural Revolution** (roughly 1700s-1800s in Europe and North America) used crop rotation, enclosure, selective breeding, seed drills, and mechanization to increase output. It helped support urbanization and the Industrial Revolution by feeding larger non-farm populations.

The **Green Revolution** (mid-20th century) introduced high-yield wheat and rice, synthetic fertilizers, pesticides, irrigation, and mechanization to developing countries. It prevented famine in places like India and Mexico, but it also increased dependence on water, fertilizer, and capital, and sometimes widened inequality between farmers who could afford inputs and those who could not.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `What was the **First Agricultural Revolution**, and why is it also called the **Neolithic Revolution**?`,
        solution: `The **First Agricultural Revolution** was the transition from hunting and gathering to farming and herding around 10,000 to 12,000 years ago. It is called the **Neolithic Revolution** because it occurred during the New Stone Age, when people began using polished stone tools, permanent settlements, and domesticated plants and animals.

It was revolutionary because it allowed:
- permanent villages,
- population growth,
- food surplus,
- craft specialization,
- social hierarchy,
- trade,
- states and eventually cities.

It also created new problems: inequality, warfare over land, epidemic disease from animals, and environmental degradation.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Identify four major agricultural hearths and name at least one crop or animal domesticated in each.`,
        solution: `Strong examples include:

- **Fertile Crescent:** wheat, barley, lentils, sheep, goats, cattle.
- **East Asia:** rice in the Yangtze Valley, millet in northern China, pigs, chickens.
- **Mesoamerica:** maize, beans, squash, peppers, cacao, turkeys.
- **Andes:** potatoes, quinoa, llamas, alpacas, guinea pigs.
- **Sub-Saharan Africa:** sorghum, millet, yams, oil palm, coffee in Ethiopia.
- **New Guinea:** taro, bananas, sugarcane.

Agriculture developed independently in several places because each region had different domesticable plants and animals.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain **domestication** and give two plant traits and two animal traits humans selected for.`,
        solution: `**Domestication** is the deliberate modification of plants and animals by humans for desired traits over many generations.

Plant traits selected for:
- larger seeds or fruits,
- sweeter or less bitter taste,
- non-shattering grain heads that keep seeds attached until harvest,
- predictable ripening,
- higher yield.

Animal traits selected for:
- docility and reduced aggression,
- more milk, meat, wool, or eggs,
- ability to breed in captivity,
- strength for traction or transport,
- manageable herd behavior.

Examples: maize was transformed from teosinte into a large-eared crop; wheat was selected for non-shattering grain heads; cattle were selected for meat, milk, and traction; sheep for wool and meat.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Describe the **Columbian Exchange** and explain one positive and one negative consequence of it.`,
        solution: `The **Columbian Exchange** was the transfer of plants, animals, diseases, people, and technologies between the Eastern and Western Hemispheres after 1492.

From the Americas came maize, potatoes, sweet potatoes, tomatoes, cacao, tobacco, peanuts, cassava, peppers, and squash. From Afro-Eurasia came wheat, rice, sugarcane, coffee, bananas, horses, cattle, pigs, sheep, goats, and smallpox.

Positive consequence: New staple crops increased food supply. Potatoes supported European population growth; maize and cassava became important in Africa and China; tomatoes transformed Mediterranean cuisine.

Negative consequence: Old World diseases such as smallpox devastated Indigenous populations in the Americas, with mortality in many regions reaching 50-90%. Plantation crops such as sugarcane also expanded the Atlantic slave trade.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Compare the **Second Agricultural Revolution** and the **Green Revolution**. How did each increase food production, and what social costs did each create?`,
        solution: `**Second Agricultural Revolution (1700s-1800s, Europe/North America):**
- Increased production through crop rotation, enclosure, selective breeding, seed drills, drainage, fertilizers, and mechanization.
- Supported the Industrial Revolution by producing enough food for urban workers and reducing the share of the labor force needed in farming.
- Social costs: enclosure privatized common lands, pushing many peasants into cities; mechanization reduced rural labor demand; wealthier landowners benefited most.

**Green Revolution (mid-20th century, developing world):**
- Increased production through high-yield wheat and rice, synthetic fertilizers, pesticides, irrigation, and mechanization.
- Helped prevent major famines in India, Mexico, Pakistan, and parts of Asia.
- Social costs: farmers needed capital for seeds, fertilizer, pumps, and machinery, so wealthier farmers often benefited more. It increased dependence on irrigation, depleted groundwater, polluted waterways, reduced crop diversity, and sometimes worsened rural inequality.

Both revolutions raised food supply dramatically, but both also shifted power toward farmers and regions able to afford new technology.` },
    ],
    cards: [
      { front: 'First Agricultural Revolution', back: 'Neolithic transition from hunting/gathering to farming/herding around 10,000-12,000 years ago. Enabled permanent villages, surplus, specialization, states, and cities.', lessonPart: 1 },
      { front: 'Agricultural hearth', back: 'Region where agriculture developed independently. Examples: Fertile Crescent, East Asia, Mesoamerica, Andes, Sub-Saharan Africa, New Guinea.', lessonPart: 1 },
      { front: 'Fertile Crescent domesticates', back: 'Wheat, barley, lentils, sheep, goats, cattle. One of the earliest agricultural hearths, around 10,000 BCE.', lessonPart: 1 },
      { front: 'Mesoamerican domesticates', back: 'Maize, beans, squash, peppers, cacao, turkeys. Maize was domesticated from teosinte.', lessonPart: 1 },
      { front: 'Andean domesticates', back: 'Potatoes, quinoa, llamas, alpacas, guinea pigs. Terrace agriculture adapted farming to steep mountain environments.', lessonPart: 1 },
      { front: 'Domestication', back: 'Deliberate human selection of plants and animals for desired traits: larger seeds, sweeter fruit, docility, milk, meat, wool, traction.', lessonPart: 2 },
      { front: 'Agriculture diffusion', back: 'Spread through both relocation diffusion (farmers moving with crops/animals) and expansion diffusion (neighbors adopting practices).', lessonPart: 3 },
      { front: 'Columbian Exchange', back: 'Post-1492 exchange between hemispheres. Americas sent maize, potatoes, tomatoes, cacao; Afro-Eurasia sent wheat, sugarcane, horses, cattle, pigs, smallpox.', lessonPart: 4 },
      { front: 'Second Agricultural Revolution', back: '1700s-1800s Europe/North America: crop rotation, enclosure, selective breeding, seed drills, mechanization. Helped feed Industrial Revolution cities.', lessonPart: 5 },
      { front: 'Green Revolution', back: 'Mid-20th-century high-yield wheat/rice, fertilizer, pesticides, irrigation, mechanization. Prevented famine but increased water use, capital dependence, and inequality.', lessonPart: 5 },
    ],
  },

  'hg-agricultural-practices': {
    textContent: `## Agricultural Practices

Agriculture varies by climate, culture, labor, technology, market access, and land value. Geographers study where different farming systems occur and why they make sense in particular places.

### Subsistence and Commercial Agriculture

**Subsistence agriculture** produces mainly for the farmer's family or local community. It is common in poorer regions where farmers have limited access to capital, mechanization, and global markets. It often uses more human labor per acre and produces lower yields per worker.

**Commercial agriculture** produces crops or animals for sale in markets. It is capital-intensive, mechanized, and often specialized. It dominates in wealthy countries and export-oriented regions.

### Major Agricultural Systems

**Intensive subsistence agriculture** uses high labor inputs on small plots to feed dense populations. It is common in East, South, and Southeast Asia. Wet-rice farming in monsoon Asia is a classic example: fields are leveled into paddies, flooded, transplanted by hand, and harvested with intensive labor.

**Shifting cultivation** occurs in tropical forest regions. Farmers clear a plot by slash-and-burn, farm it for a few years, then move to a new plot when soil fertility declines. It can be sustainable at low population density with long fallow periods, but becomes damaging when population pressure shortens recovery time.

**Pastoral nomadism** is extensive subsistence herding in arid and semi-arid regions, such as the Sahel, Central Asia, and parts of the Middle East. Herds move seasonally to find pasture and water. Modern borders, land privatization, and climate change have made pastoral mobility harder.

**Plantation agriculture** is large-scale commercial farming of tropical export crops, often on land historically controlled by colonial powers. Crops include sugarcane, bananas, coffee, cacao, tea, rubber, palm oil, and cotton. Plantations have deep links to slavery, indentured labor, and unequal land ownership.

**Mixed crop and livestock farming** is common in Europe and the U.S. Midwest. Crops feed animals; animal manure fertilizes fields; farmers sell both crops and animal products. **Dairy farming** is usually near cities because milk is perishable and transportation costs matter.

**Mediterranean agriculture** specializes in grapes, olives, citrus, figs, vegetables, and small livestock in regions with wet winters and dry summers: southern Europe, coastal California, central Chile, South Africa's Cape, and southwestern Australia.

**Grain farming** and **livestock ranching** are extensive commercial systems in areas with lower land costs and large fields or pastures: the U.S. Great Plains, Canadian Prairies, Argentine Pampas, Australian Outback, and parts of Russia and Ukraine.

### Von Thunen Model

Johann Heinrich von Thunen's model explains agricultural land use around a market city. Assuming flat land, equal soil, and one market, farmers choose crops based on land rent, perishability, and transportation cost:

1. **Dairy and market gardening** closest to the city because milk and fresh vegetables are perishable and high-value.
2. **Forest** next because wood is heavy and costly to transport.
3. **Grains and field crops** farther out because they are less perishable and easier to ship.
4. **Ranching/livestock** farthest out because animals can walk to market and need cheap land.

The model is simplified, but its logic still matters: perishable, high-value products locate near markets unless refrigeration, highways, air freight, or global supply chains change the distance-cost relationship.

### Food Systems and Sustainability

Modern agriculture has raised output enormously, but it creates environmental problems: soil erosion, aquifer depletion, fertilizer runoff, pesticide resistance, methane from livestock, deforestation for cattle and palm oil, and loss of biodiversity.

Sustainable approaches include crop rotation, contour plowing, terracing, agroforestry, integrated pest management, precision agriculture, drip irrigation, cover crops, reduced tillage, and local food systems. Organic agriculture avoids most synthetic fertilizers and pesticides, but may require more land if yields are lower.

The central tension is feeding a growing and increasingly affluent population while reducing the environmental footprint of farming. Geography matters because each solution depends on climate, soils, water, markets, and institutions.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Distinguish between **subsistence agriculture** and **commercial agriculture**.`,
        solution: `**Subsistence agriculture** produces mainly for the farmer's household or local community. It usually uses more human labor, less machinery, smaller plots, and limited capital. It is common in poorer regions and in places with weak access to markets.

**Commercial agriculture** produces crops or livestock for sale in regional, national, or global markets. It is usually more mechanized, capital-intensive, specialized, and connected to transportation networks.

The key difference is PURPOSE: subsistence is primarily for direct consumption; commercial agriculture is primarily for profit through market sale.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Identify three major agricultural systems and the regions where they are commonly found.`,
        solution: `Examples:

1. **Intensive subsistence wet-rice farming:** East, South, and Southeast Asia, especially monsoon climates with dense populations.
2. **Shifting cultivation:** tropical forest regions of the Amazon, Congo Basin, Southeast Asia, and New Guinea.
3. **Pastoral nomadism:** arid and semi-arid regions such as the Sahel, Central Asia, and parts of the Middle East.
4. **Plantation agriculture:** tropical export regions in Latin America, the Caribbean, West Africa, and Southeast Asia.
5. **Mediterranean agriculture:** Mediterranean Basin, coastal California, central Chile, Cape South Africa, southwestern Australia.
6. **Grain farming/ranching:** Great Plains, Canadian Prairies, Argentine Pampas, Australian Outback, Ukraine/Russia.

Agricultural systems reflect climate, land value, labor, market access, and historical patterns.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain how the **Von Thunen model** predicts agricultural land use around a market city.`,
        solution: `Von Thunen's model assumes an isolated market city surrounded by flat land with equal soil and no transportation differences except distance. Farmers choose land uses based on land rent, transportation cost, perishability, and value.

From center outward:
1. **Dairy and market gardening** closest because milk and fresh vegetables are perishable and high-value.
2. **Forest** next because wood is heavy and costly to transport.
3. **Grains and field crops** farther out because they are less perishable and easier to ship.
4. **Ranching/livestock** farthest because animals require cheap land and can walk to market.

The model's deeper lesson is that high-value and perishable products can pay for expensive land near markets, while low-value extensive uses need cheaper land farther away.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Why can **shifting cultivation** be sustainable at low population density but damaging at high population density?`,
        solution: `In shifting cultivation, farmers clear a plot, farm it for a few years, then leave it fallow so soil and forest can recover. At **low population density**, fallow periods may last 15-30 years, allowing nutrients, trees, and biodiversity to return. Under those conditions, the system can be sustainable.

At **high population density**, farmers must return to the same plot sooner because more people need land. Fallow periods shorten to 3-5 years or less. Soil fertility does not recover, yields fall, erosion rises, and forest cover declines permanently.

The practice itself is not automatically destructive. The problem is population pressure, land scarcity, logging roads, commercial ranching, and state policies that reduce available fallow land.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Evaluate the environmental tradeoffs of modern commercial agriculture and propose three practices that could make it more sustainable.`,
        solution: `Modern commercial agriculture has major benefits: high yields, abundant food supply, lower labor requirements, and the ability to feed large urban populations. But it also has environmental costs:
- soil erosion from exposed fields,
- aquifer depletion from irrigation,
- fertilizer runoff causing eutrophication and dead zones,
- pesticide resistance and harm to pollinators,
- methane from livestock,
- deforestation for cattle, soy, and palm oil,
- loss of biodiversity through monoculture.

Three sustainability practices:
1. **Crop rotation and cover crops** maintain soil fertility, reduce erosion, and disrupt pests.
2. **Drip irrigation and precision agriculture** reduce water use and apply fertilizer only where needed.
3. **Integrated pest management** uses biological controls and targeted pesticides instead of routine broad spraying.

Other strong answers include agroforestry, terracing, contour plowing, reduced tillage, rotational grazing, and protecting riparian buffers. The best solutions depend on local climate, soils, water availability, and markets.` },
    ],
    cards: [
      { front: 'Subsistence agriculture', back: 'Farming mainly for the farmer\'s family or local community. Labor-intensive, less mechanized, common in poorer regions.', lessonPart: 1 },
      { front: 'Commercial agriculture', back: 'Farming for sale in markets. Capital-intensive, mechanized, specialized, and connected to regional or global supply chains.', lessonPart: 1 },
      { front: 'Intensive subsistence agriculture', back: 'High labor inputs on small plots to feed dense populations. Wet-rice farming in monsoon Asia is the classic example.', lessonPart: 2 },
      { front: 'Shifting cultivation', back: 'Slash-and-burn tropical farming: clear a plot, farm briefly, then move and let land fallow. Sustainable with long fallow periods; damaging when population pressure shortens them.', lessonPart: 2 },
      { front: 'Pastoral nomadism', back: 'Extensive herding in arid/semi-arid regions. Herds move seasonally for pasture and water. Common in Sahel, Central Asia, Middle East.', lessonPart: 2 },
      { front: 'Plantation agriculture', back: 'Large-scale tropical export farming of crops like sugarcane, bananas, coffee, cacao, tea, rubber, palm oil, and cotton. Often rooted in colonial labor systems.', lessonPart: 2 },
      { front: 'Mediterranean agriculture', back: 'Grapes, olives, citrus, figs, vegetables, and small livestock in wet-winter/dry-summer climates: Mediterranean Basin, California, Chile, South Africa, SW Australia.', lessonPart: 3 },
      { front: 'Von Thunen model rings', back: 'Around market city: dairy/market gardening closest, forest, grains/field crops, ranching/livestock farthest. Based on perishability, transport cost, and land rent.', lessonPart: 4 },
      { front: 'Why dairy locates near markets', back: 'Milk is perishable and high-value, so dairy farms can pay higher land rent near cities and reduce spoilage/transport costs.', lessonPart: 4 },
      { front: 'Sustainable agriculture practices', back: 'Crop rotation, cover crops, contour plowing, terracing, agroforestry, integrated pest management, drip irrigation, precision agriculture, reduced tillage.', lessonPart: 5 },
    ],
  },
}

async function main() {
  console.log('=== AP Human Geography content fill - Batch 3 ===\n')

  let topicsHandled = 0
  let totalProblems = 0
  let totalCards = 0
  let textUpdates = 0

  for (const [slug, payload] of Object.entries(TOPICS)) {
    const topic = await prisma.topic.findUnique({ where: { slug } })
    if (!topic) {
      console.log(`Topic not found: ${slug} - skipping`)
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
      console.log(`    text: ${currentLen} -> ${payload.textContent.length} chars`)
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
