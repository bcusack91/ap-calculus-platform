import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
/**
 * Phase 2/3 content fill for AP Human Geography - Batch 4 (final 4 topics)
 * Covers: hg-ethnicity-identity, hg-political-power,
 *         hg-industrialization-development, hg-globalization-trade.
 *
 * Usage:
 *   set -a && source .env.local && set +a && npx tsx prisma/add-human-geography-content-batch4.ts
 */

import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

type ProblemSeed = { order: number; difficulty: Difficulty; question: string; solution: string }
type CardSeed = { front: string; back: string; hint?: string; lessonPart?: number }
type TopicSeed = { textContent: string; problems: ProblemSeed[]; cards: CardSeed[] }

const TOPICS: Record<string, TopicSeed> = {
  'hg-ethnicity-identity': {
    textContent: `## Ethnicity and Identity

**Ethnicity** is a shared cultural identity based on ancestry, language, religion, history, homeland, or customs. It is not the same as race. Race is a socially constructed classification often based on perceived physical traits; ethnicity is usually rooted in shared culture and group memory. Both categories are powerful because societies treat them as meaningful, even when their boundaries are historically fluid.

### Ethnic Identity and Place

Ethnic identity is strongly geographic. Groups often connect identity to a homeland, sacred landscape, neighborhood, or diaspora network. Armenians identify with Armenia and Mount Ararat even though many live in diaspora communities. Jewish identity long connected to Jerusalem and Israel even before the state of Israel existed. Indigenous peoples often define identity through relationships to specific lands, rivers, burial grounds, and treaty territories.

**Ethnic enclaves** are neighborhoods or regions where a particular ethnic group is concentrated. Examples include Chinatown in San Francisco, Little Havana in Miami, Koreatown in Los Angeles, and Somali neighborhoods in Minneapolis. Enclaves can protect language, religion, foodways, social networks, and small businesses, especially for immigrants. They can also result from discrimination, exclusionary housing markets, or segregation.

A **diaspora** is the dispersion of a people from an original homeland, often with continuing emotional, cultural, or political ties to that homeland. Major diasporas include Jewish, Armenian, African, Irish, Indian, Chinese, Palestinian, and Lebanese diasporas.

### Assimilation, Acculturation, and Multiculturalism

**Assimilation** is the process by which a minority group adopts the culture of a dominant group, often losing distinctive language or customs over generations. The classic U.S. "melting pot" image emphasizes assimilation.

**Acculturation** means adopting some traits of another culture while keeping a distinct identity. A Mexican American family might speak English at work and school while maintaining Spanish, Catholic traditions, and Mexican foodways at home.

**Multiculturalism** is a policy or social ideal that recognizes and supports multiple cultural identities within one state. Canada officially adopted multiculturalism in 1971. Critics argue it can weaken national unity; supporters argue it reduces forced assimilation and allows shared citizenship without cultural erasure.

### Ethnic Conflict

Ethnic conflict often emerges when identity overlaps with territory, resources, political power, or historical grievances. It is rarely caused by "ancient hatred" alone. Political leaders can mobilize ethnic identity when states are weak, economic stress rises, or borders place rival groups inside one state.

Examples:
- **Rwanda**: Hutu extremists killed about 800,000 Tutsi and moderate Hutu in 1994. Belgian colonial rule had hardened Hutu/Tutsi categories through identity cards and unequal treatment.
- **Former Yugoslavia**: Serb, Croat, Bosniak, Albanian, and other identities became politically explosive after Tito's death and the collapse of communism.
- **Sri Lanka**: tensions between Sinhalese Buddhists and Tamil Hindus contributed to civil war from 1983 to 2009.
- **Myanmar**: Rohingya Muslims have faced exclusion, violence, and forced migration from a Buddhist-majority state.

### Ethnic Cleansing and Genocide

**Ethnic cleansing** is the forced removal of an ethnic group from a territory. It can include intimidation, deportation, destruction of homes, sexual violence, and massacre. The term became widely used during the Bosnian War in the 1990s.

**Genocide** is the intentional attempt to destroy, in whole or in part, a national, ethnic, racial, or religious group. The Holocaust, Armenian Genocide, Rwandan Genocide, Cambodian Genocide, and mass atrocities in Darfur are central examples. Genocide is not spontaneous. It usually involves classification, propaganda, dehumanization, organization, polarization, preparation, persecution, extermination, and denial.

### Identity in a Global World

Globalization can weaken some identities through language shift, migration, and popular culture. It can also strengthen identity by giving diasporas tools to stay connected. Social media, cheap flights, remittances, and transnational politics allow migrants to live across multiple cultural worlds. Modern identity is often layered: a person can be Kurdish, Muslim, German citizen, Berlin resident, and European all at once. Human geography studies how these layers are produced in space.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Distinguish between **race** and **ethnicity** in human geography.`,
        solution: `**Race** is a socially constructed classification usually based on perceived physical traits such as skin color, hair texture, or facial features. It has no clear biological boundaries, but it has powerful social and political effects because societies use it to distribute privilege, exclusion, and identity.

**Ethnicity** is a shared cultural identity based on ancestry, language, religion, customs, history, or homeland. Examples include Kurds, Basques, Armenians, Han Chinese, Yoruba, Hmong, and Irish Americans.

The key difference is that race is usually tied to perceived physical difference, while ethnicity is tied to shared culture and group history. Both are socially constructed, historically changing, and geographically important.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Define **ethnic enclave** and **diaspora**, and give an example of each.`,
        solution: `An **ethnic enclave** is a neighborhood or area where one ethnic group is concentrated and where cultural institutions, businesses, language, and social networks support that group. Examples include Little Havana in Miami, Chinatown in San Francisco, Koreatown in Los Angeles, and Somali neighborhoods in Minneapolis.

A **diaspora** is the dispersion of a people from an original homeland, often while maintaining cultural, emotional, religious, or political ties to that homeland. Examples include Jewish, Armenian, African, Indian, Chinese, Palestinian, Irish, and Lebanese diasporas.

Enclaves are local concentrations; diasporas are global or regional dispersions.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare **assimilation**, **acculturation**, and **multiculturalism** as ways ethnic groups interact with a dominant society.`,
        solution: `**Assimilation** occurs when a minority group adopts the dominant culture and may lose its distinctive language, customs, or identity over generations. Example: many European immigrant groups in the United States shifted from Italian, Polish, or German to English and became broadly "white ethnic" Americans.

**Acculturation** occurs when a group adopts some traits of another culture while retaining a distinct identity. Example: Mexican Americans may use English in school or work while maintaining Spanish, Catholic traditions, and Mexican foodways at home.

**Multiculturalism** is a social policy or ideal that supports multiple cultural identities within one state. Canada officially supports multiculturalism, encouraging shared citizenship without requiring total cultural assimilation.

Assimilation emphasizes sameness, acculturation emphasizes selective adaptation, and multiculturalism emphasizes recognized diversity.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Why are ethnic conflicts usually more than simple "ancient hatreds"? Use Rwanda or Yugoslavia as an example.`,
        solution: `Ethnic conflicts are often described as ancient hatreds, but that explanation is too simple. Ethnic identity becomes violent when it overlaps with political power, territory, resources, weak institutions, propaganda, fear, and historical grievances.

**Rwanda example:** Hutu and Tutsi identities existed before colonization, but Belgian colonial rule hardened them through identity cards and favoritism toward Tutsi elites. After independence, power shifted, economic stress grew, and extremist leaders used radio propaganda to dehumanize Tutsi people. The 1994 genocide was organized by political and military actors, not an automatic eruption of ancient conflict.

**Yugoslavia example:** Serbs, Croats, Bosniaks, Slovenes, Albanians, and others lived inside one multinational state. Under Tito, a strong central government suppressed nationalism. After his death and the collapse of communism, weak institutions, economic inequality, nationalist leaders, and revived historical memories produced war.

The broader lesson: ethnicity becomes dangerous when leaders and institutions turn identity into a tool for power.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Compare **ethnic cleansing** and **genocide**. Why can ethnic cleansing become genocidal, and why is denial often part of the process?`,
        solution: `**Ethnic cleansing** is the forced removal of an ethnic group from a territory. It aims to make an area ethnically homogeneous through intimidation, deportation, destruction of homes, sexual violence, detention, and sometimes massacre. The term became widely used during the Bosnian War.

**Genocide** is the intentional attempt to destroy, in whole or in part, a national, ethnic, racial, or religious group. It is defined by intent to destroy the group, not only by the number killed.

Ethnic cleansing can become genocidal when removal turns into destruction: when people cannot flee, when deportation is combined with mass killing, or when leaders decide the group must be eliminated rather than displaced. Srebrenica in 1995 is a key example: Bosnian Serb forces killed more than 8,000 Bosniak men and boys after capturing an area they intended to cleanse.

Denial is common because perpetrators seek to avoid punishment, preserve legitimacy, and rewrite history. Denial can include hiding mass graves, claiming deaths were wartime accidents, blaming victims, or describing genocide as self-defense. This is why documentation, courts, memorials, and survivor testimony matter geographically and politically.` },
    ],
    cards: [
      { front: 'Ethnicity', back: 'Shared cultural identity based on ancestry, language, religion, customs, history, or homeland. Distinct from race, which is usually based on perceived physical traits.', lessonPart: 1 },
      { front: 'Race as social construct', back: 'Race has no clear biological boundaries, but it has powerful social effects because societies use racial categories to distribute privilege, exclusion, and identity.', lessonPart: 1 },
      { front: 'Ethnic enclave', back: 'Neighborhood or area where an ethnic group is concentrated, supporting language, businesses, worship, foodways, and social networks. Examples: Chinatown, Little Havana, Koreatown.', lessonPart: 2 },
      { front: 'Diaspora', back: 'Dispersion of a people from a homeland while maintaining cultural, religious, emotional, or political ties. Examples: Jewish, Armenian, African, Indian, Chinese, Palestinian diasporas.', lessonPart: 2 },
      { front: 'Assimilation', back: 'Minority group adopts dominant culture and may lose distinctive language or customs over generations. Classic "melting pot" idea.', lessonPart: 3 },
      { front: 'Acculturation', back: 'Adopting some traits of another culture while maintaining a distinct identity. Selective adaptation rather than full assimilation.', lessonPart: 3 },
      { front: 'Multiculturalism', back: 'Policy or social ideal that recognizes multiple cultural identities within one state. Canada officially adopted multiculturalism in 1971.', lessonPart: 3 },
      { front: 'Ethnic cleansing', back: 'Forced removal of an ethnic group from a territory through intimidation, deportation, destruction, violence, or massacre. Term widely used in Bosnia in the 1990s.', lessonPart: 4 },
      { front: 'Genocide', back: 'Intentional attempt to destroy, in whole or in part, a national, ethnic, racial, or religious group. Examples: Holocaust, Armenian Genocide, Rwanda, Cambodia, Darfur.', lessonPart: 4 },
      { front: 'Layered identity', back: 'Modern identity can operate at multiple scales at once: ethnic, religious, national, regional, urban, and global. Example: Kurdish, Muslim, German citizen, Berlin resident, European.', lessonPart: 5 },
    ],
  },

  'hg-political-power': {
    textContent: `## Political Power and Geopolitics

Political power is the ability to shape decisions, control territory, allocate resources, and influence behavior. In human geography, power is always spatial: it operates through borders, capitals, voting districts, military bases, infrastructure, trade routes, prisons, schools, and surveillance systems.

### States and Territoriality

The modern world is organized mainly into **sovereign states**. A state claims control over territory, population, laws, and borders. **Territoriality** is the attempt by individuals or groups to control space. States practice territoriality through border posts, passports, taxation, policing, zoning, cadastral maps, and military defense.

**Sovereignty** means supreme authority over a territory. In practice, sovereignty is uneven. A strong state can enforce laws across its territory; a weak state may control the capital but not rural regions. Failed or fragile states, such as Somalia during parts of the 1990s and 2000s, show how political geography changes when central authority collapses.

### Forms of Government

A **unitary state** concentrates power in the national government. Local governments may exist, but their authority is granted by the center. France and Japan are classic examples. Unitary systems can make policy consistent and efficient, but they may alienate regions with strong local identities.

A **federal state** divides power constitutionally between national and subnational governments. The United States, Canada, Germany, India, Brazil, Mexico, Nigeria, and Australia are federal. Federalism can manage diversity across large territories, but it can also create policy fragmentation and conflict between levels of government.

**Devolution** is the transfer of power from a central government to regional governments. It can reduce separatist pressure by giving regions autonomy, as in Scotland, Wales, and Northern Ireland. But it can also strengthen regional identity and increase demands for independence, as in Catalonia or Scotland.

### Electoral Geography

Political power is also shaped through voting systems and district boundaries. **Gerrymandering** is drawing electoral districts to advantage one party or group. Two common techniques are:

- **Packing**: concentrating opposition voters into a few districts so they win those districts overwhelmingly but waste votes.
- **Cracking**: splitting opposition voters across many districts so they cannot form a majority anywhere.

Gerrymandering can produce legislatures that do not reflect the statewide popular vote. It can also weaken minority representation or, in some cases, create majority-minority districts intended to comply with voting-rights law.

### Geopolitical Theories

Geopolitics studies how geography shapes international power. Classic theories include:

- **Mackinder's Heartland Theory** (1904): whoever controls Eastern Europe controls the Heartland; whoever controls the Heartland controls the World-Island; whoever controls the World-Island controls the world. It reflected fears that railroads would let a land power dominate Eurasia.
- **Spykman's Rimland Theory** (1942): power depends on controlling the coastal fringes of Eurasia, not the interior. This influenced Cold War containment, including NATO, alliances with Japan and South Korea, and U.S. interest in the Middle East.
- **Mahan's sea power theory**: naval power, merchant shipping, and control of chokepoints are central to global influence.

Modern geopolitics also focuses on energy pipelines, rare earth minerals, cyber infrastructure, undersea cables, migration routes, climate change, and strategic chokepoints such as the Strait of Hormuz, Suez Canal, Panama Canal, Bab el-Mandeb, and Malacca Strait.

### Hard Power, Soft Power, and Smart Power

**Hard power** uses coercion: military force, sanctions, threats, and economic pressure. **Soft power** uses attraction: culture, values, diplomacy, education, aid, media, and international legitimacy. The United States exercises soft power through universities, Hollywood, technology companies, music, and democratic ideals. South Korea has gained soft power through K-pop, film, television, and technology. China invests in infrastructure, Confucius Institutes, media, and diplomacy to expand influence.

**Smart power** combines hard and soft power. A state may use military alliances, trade agreements, development aid, cultural diplomacy, and technology standards together.

### Power Beyond the State

Political power is no longer held only by states. Multinational corporations shape labor markets, data, tax policy, and supply chains. NGOs influence human rights and environmental policy. Intergovernmental organizations such as the United Nations, European Union, World Trade Organization, NATO, African Union, and IMF shape rules states must respond to. Cities also exercise power through climate networks, sanctuary policies, and economic competition.

Human geography asks: who controls space, who benefits, who is excluded, and how do maps and institutions make power look natural?`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Distinguish between a **unitary state** and a **federal state**, and give two examples of each.`,
        solution: `A **unitary state** concentrates power in the national government. Local governments may exist, but their authority comes from the center. Examples: France, Japan, China, and the United Kingdom in many functions.

A **federal state** divides power constitutionally between national and subnational governments such as states, provinces, or cantons. Examples: United States, Canada, Germany, India, Brazil, Mexico, Nigeria, and Australia.

Unitary systems can be efficient and uniform. Federal systems can manage large territories and cultural diversity, but may create conflicts between national and regional governments.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Define **sovereignty** and **territoriality** in political geography.`,
        solution: `**Sovereignty** is the supreme authority of a state over its territory and population. A sovereign state can make laws, tax people, defend borders, and conduct foreign relations.

**Territoriality** is the attempt by individuals, groups, or states to control space. States express territoriality through borders, passports, military patrols, police districts, zoning, property records, and maps.

Sovereignty is the legal-political claim; territoriality is the spatial practice of enforcing control.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain **gerrymandering** and distinguish between **packing** and **cracking**.`,
        solution: `**Gerrymandering** is the drawing of electoral district boundaries to advantage a party, group, or incumbent.

**Packing** concentrates opposition voters into a small number of districts. They win those districts by huge margins, but their votes are "wasted" because they have fewer voters left to compete elsewhere.

**Cracking** splits opposition voters across many districts so they cannot form a majority in any one district.

Example: If a city has many voters from Party A and suburbs have more Party B voters, a mapmaker can pack Party A voters into one urban district or crack the city into several suburban-majority districts. Either strategy can change representation without changing any voters' preferences.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare **Mackinder's Heartland Theory** and **Spykman's Rimland Theory**. How did these theories influence Cold War strategy?`,
        solution: `**Mackinder's Heartland Theory** argued that control of Eastern Europe and the interior of Eurasia, the "Heartland," could allow a land power to dominate the World-Island of Europe, Asia, and Africa. It reflected fear that railroads would overcome the historic advantage of sea power.

**Spykman's Rimland Theory** argued that the coastal fringes of Eurasia mattered more than the interior. Whoever controlled the Rimland could contain the Heartland and dominate global power.

During the Cold War, U.S. strategy looked more like Spykman than Mackinder. The United States built alliances around the Soviet periphery: NATO in Western Europe, alliances with Turkey, Iran before 1979, Japan, South Korea, Taiwan, and later relationships in Southeast Asia and the Middle East. This was the geography of **containment**: keep Soviet power inside the Eurasian interior by holding the Rimland.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Evaluate the claim that modern political power is less state-centered than it was in the 20th century. Use examples of non-state actors and intergovernmental organizations.`,
        solution: `The claim is partly true. States remain the most powerful actors because they control territory, military force, citizenship, courts, and taxation. However, modern power is less purely state-centered because many decisions are shaped by actors above, below, and outside the state.

**Multinational corporations** shape supply chains, wages, data, and tax policy. Apple, Google, Shell, Toyota, and Amazon can influence where jobs locate and how governments regulate technology or energy.

**Intergovernmental organizations** create rules states must respond to. The WTO shapes trade disputes; the IMF influences fiscal policy through loans; NATO organizes military strategy; the European Union directly regulates agriculture, migration, trade, currency for eurozone members, and environmental standards.

**NGOs and advocacy networks** influence human rights, climate policy, refugee protection, and public health. Amnesty International, Greenpeace, Doctors Without Borders, and the Red Cross can shape agendas even without sovereignty.

**Cities and regions** also act globally through climate networks, economic development, port policy, and migration policy.

So the best answer is not that states have disappeared, but that sovereignty is more networked. States still matter most, but they operate inside webs of corporations, organizations, treaties, cities, and technologies that constrain and amplify state power.` },
    ],
    cards: [
      { front: 'Political power', back: 'Ability to shape decisions, control territory, allocate resources, and influence behavior. In geography, power operates through borders, districts, infrastructure, maps, and institutions.', lessonPart: 1 },
      { front: 'Sovereignty', back: 'Supreme authority of a state over its territory and population. Includes lawmaking, taxation, border control, and foreign relations.', lessonPart: 1 },
      { front: 'Territoriality', back: 'Attempt to control space. States practice it through borders, passports, policing, zoning, cadastral maps, and military defense.', lessonPart: 1 },
      { front: 'Unitary state', back: 'Power concentrated in the national government; local authority comes from the center. Examples: France, Japan.', lessonPart: 2 },
      { front: 'Federal state', back: 'Power divided constitutionally between national and regional governments. Examples: United States, Canada, Germany, India, Brazil, Nigeria.', lessonPart: 2 },
      { front: 'Devolution', back: 'Transfer of power from central government to regional governments. Can reduce separatism or strengthen regional identity. Examples: Scotland, Wales, Catalonia.', lessonPart: 2 },
      { front: 'Gerrymandering', back: 'Drawing electoral districts to advantage a party or group. Packing concentrates opponents; cracking splits them across districts.', lessonPart: 3 },
      { front: 'Heartland Theory', back: 'Mackinder: control Eastern Europe and the Eurasian Heartland to control the World-Island. Emphasized land power.', lessonPart: 4 },
      { front: 'Rimland Theory', back: 'Spykman: control the coastal fringes of Eurasia to contain the Heartland. Influenced Cold War containment alliances.', lessonPart: 4 },
      { front: 'Hard vs soft power', back: 'Hard power uses coercion: military force, sanctions, threats. Soft power uses attraction: culture, values, diplomacy, education, aid, legitimacy.', lessonPart: 5 },
    ],
  },

  'hg-industrialization-development': {
    textContent: `## Industrialization and Development

**Industrialization** is the shift from an economy based mainly on agriculture and raw materials to one based on manufacturing, mechanization, wage labor, and eventually services. **Development** is broader: it refers to improvements in standard of living, health, education, income, technology, rights, and opportunity.

### Industrial Revolution

The first Industrial Revolution began in Great Britain in the late 1700s. Britain had coal, iron, navigable rivers, ports, colonies, capital, a growing labor force, and political institutions favorable to property and investment. Textile manufacturing, the steam engine, railroads, and iron production transformed the economy.

Industrialization spread by diffusion to Belgium, France, Germany, the United States, Japan, and later Russia. It created cities, factories, railroads, pollution, wage labor, labor unions, and huge increases in output. It also produced harsh working conditions, child labor, urban crowding, and class conflict.

Later industrialization took different forms. Japan used state-led modernization during the Meiji era. The Soviet Union used central planning and forced industrialization. South Korea and Taiwan used export-oriented industrialization after World War II. China combined state direction, special economic zones, foreign investment, and export manufacturing after 1978.

### Measures of Development

No single statistic captures development. Common measures include:

- **GDP**: total value of goods and services produced in a country.
- **GNI per capita**: income earned by residents divided by population, often adjusted by purchasing power parity.
- **HDI**: Human Development Index, combining life expectancy, education, and income.
- **Gini coefficient**: income inequality, from 0 (perfect equality) to 1 (perfect inequality).
- **Infant mortality rate**, **literacy rate**, **life expectancy**, **access to clean water**, and **gender indicators**.

A country can have high GDP but poor equality or weak health outcomes. Oil-rich states may have high income but limited political freedom or gender equality. HDI is useful because it includes human well-being, not just economic output.

### Development Theories

**Rostow's Stages of Economic Growth** proposes five stages: traditional society, preconditions for takeoff, takeoff, drive to maturity, and age of high mass consumption. It is a modernization theory: poorer countries can follow the path of earlier industrializers by building infrastructure, investment, and industry. Critics argue it is too Eurocentric and ignores colonialism, unequal trade, and environmental limits.

**Dependency theory** argues that underdevelopment is produced by unequal relationships between wealthy core countries and poorer peripheral countries. Colonies exported raw materials and imported finished goods, creating dependency. Even after independence, debt, trade rules, multinational corporations, and commodity markets can keep peripheral states dependent.

**World-systems theory** divides the global economy into **core**, **semi-periphery**, and **periphery**. Core states have high-skill, high-profit production. Peripheral states provide raw materials and cheap labor. Semi-peripheral states, such as Brazil, Mexico, India, Turkey, and South Africa, occupy an intermediate position and may industrialize unevenly.

### Industrial Location and Global Shifts

Industrial location depends on labor, markets, transportation, energy, raw materials, land costs, government policy, and agglomeration. Early steel industries located near coal and iron ore. Modern electronics may locate near skilled labor, ports, airports, suppliers, and favorable policy.

**Deindustrialization** is the decline of manufacturing employment in older industrial regions, such as the U.S. Rust Belt, northern England, and parts of Germany. Causes include automation, global competition, outsourcing, and shifts to services. Deindustrialization can produce unemployment, population loss, abandoned factories, and political resentment.

**Newly industrialized countries** (NICs) such as South Korea, Taiwan, Singapore, and later China moved rapidly into manufacturing exports. Many used export processing zones, state investment, education, infrastructure, and integration into global supply chains.

### Development Challenges

Development is uneven inside countries as well as between them. Core cities may prosper while rural regions lag. Export industries may generate wealth while informal workers remain poor. Gender inequality, corruption, weak institutions, conflict, debt, climate vulnerability, and poor infrastructure can block development.

Sustainable development seeks to improve human well-being without exhausting ecological systems. It asks countries to grow while limiting carbon emissions, protecting water, adapting to climate change, and sharing benefits broadly.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Distinguish between **industrialization** and **development**.`,
        solution: `**Industrialization** is the economic shift from agriculture and raw-material extraction toward manufacturing, mechanization, wage labor, factories, and later advanced services.

**Development** is broader. It refers to improvements in human well-being, including income, life expectancy, education, clean water, gender equality, technology, safety, political rights, and opportunity.

A country can industrialize without broad development if factory growth produces pollution, inequality, low wages, or weak social services. Development asks whether people's lives actually improve, not just whether output rises.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `What is the **Human Development Index (HDI)**, and why is it often more useful than GDP alone?`,
        solution: `The **Human Development Index (HDI)** is a composite measure of development that combines:
1. life expectancy,
2. education, and
3. income per person.

It is often more useful than GDP alone because GDP measures total economic output, not how well people live. A country may have high GDP because of oil or finance but still have poor health outcomes, weak schools, inequality, or limited opportunity. HDI includes income but also captures health and education, which are central to human well-being.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare **Rostow's modernization theory** with **dependency theory**. What does each say causes development or underdevelopment?`,
        solution: `**Rostow's modernization theory** argues that countries move through stages of growth: traditional society, preconditions for takeoff, takeoff, drive to maturity, and high mass consumption. Development comes from investment, infrastructure, industrialization, technology, and integration into modern markets. Poor countries can follow the path of earlier industrializers.

**Dependency theory** argues that underdevelopment is not simply an early stage. It is produced by unequal global relationships between wealthy core countries and poorer peripheral countries. Colonies and peripheral states export raw materials and cheap labor while importing expensive finished goods, creating dependency.

The key difference: Rostow sees development as an internal process of modernization; dependency theory sees underdevelopment as an external relationship created by colonialism, trade, debt, and global capitalism.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain **core**, **semi-periphery**, and **periphery** in world-systems theory. Give examples.`,
        solution: `World-systems theory divides the global economy into three zones:

- **Core:** wealthy, powerful states with high-skill, high-profit production, advanced technology, strong institutions, and control over finance and trade. Examples: United States, Germany, Japan, France, United Kingdom.
- **Periphery:** poorer states that often export raw materials, agricultural goods, and cheap labor while depending on imported finished goods or foreign investment. Examples vary, but may include Haiti, Mali, Niger, or parts of the Democratic Republic of Congo.
- **Semi-periphery:** intermediate states that have some industrial capacity and regional power but also contain poverty and dependency. Examples: Brazil, Mexico, India, Turkey, South Africa, Indonesia, China historically during its industrial rise.

The model emphasizes that development is relational: core prosperity is linked to the labor, resources, and markets of the periphery and semi-periphery.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Evaluate the costs and benefits of **export-oriented industrialization** for newly industrialized countries.`,
        solution: `**Export-oriented industrialization** means building industries to produce goods for global markets, often using low labor costs, foreign investment, export processing zones, and state-supported infrastructure.

Benefits:
- creates manufacturing jobs,
- earns foreign exchange,
- transfers technology and management skills,
- builds infrastructure such as ports and roads,
- can move countries into higher-value industries over time,
- helped South Korea, Taiwan, Singapore, and China grow rapidly.

Costs:
- workers may face low wages, long hours, and weak labor protections,
- economies become vulnerable to global recessions and demand shifts,
- profits may flow to multinational corporations,
- pollution and resource use can be severe,
- regions outside export zones may be left behind,
- countries can get stuck in low-value assembly rather than moving to design and innovation.

The best outcomes occur when states use export growth to invest in education, technology, domestic firms, labor standards, and movement up the value chain. South Korea and Taiwan did this more successfully than many countries that remained dependent on low-wage assembly.` },
    ],
    cards: [
      { front: 'Industrialization', back: 'Shift from agriculture/raw materials toward manufacturing, mechanization, wage labor, factories, and eventually services.', lessonPart: 1 },
      { front: 'Development', back: 'Broad improvement in standard of living: income, health, education, water, technology, rights, gender equality, and opportunity.', lessonPart: 1 },
      { front: 'First Industrial Revolution', back: 'Began in Britain in late 1700s. Coal, iron, ports, capital, labor, colonies, steam engines, textiles, railroads, and factories transformed production.', lessonPart: 1 },
      { front: 'HDI', back: 'Human Development Index combines life expectancy, education, and income. More human-centered than GDP alone.', lessonPart: 2 },
      { front: 'Gini coefficient', back: 'Measure of income inequality from 0 (perfect equality) to 1 (perfect inequality). Shows distribution, not total wealth.', lessonPart: 2 },
      { front: 'Rostow stages', back: 'Modernization model: traditional society, preconditions for takeoff, takeoff, drive to maturity, age of high mass consumption.', lessonPart: 3 },
      { front: 'Dependency theory', back: 'Underdevelopment is produced by unequal relationships between wealthy core countries and poorer peripheral countries through colonialism, trade, debt, and corporations.', lessonPart: 3 },
      { front: 'World-systems theory', back: 'Global economy divided into core, semi-periphery, and periphery. Development is relational, not isolated within each country.', lessonPart: 3 },
      { front: 'Deindustrialization', back: 'Decline of manufacturing employment in older industrial regions due to automation, outsourcing, global competition, and shift to services. Example: U.S. Rust Belt.', lessonPart: 4 },
      { front: 'Export-oriented industrialization', back: 'Growth strategy based on producing manufactured goods for global markets. Used by South Korea, Taiwan, Singapore, China; can create jobs but also labor and environmental costs.', lessonPart: 5 },
    ],
  },

  'hg-globalization-trade': {
    textContent: `## Globalization and Trade

**Globalization** is the increasing interconnectedness of the world through flows of goods, capital, people, information, technology, culture, and disease. It is not new, but the speed, scale, and intensity of global connections have expanded dramatically since the late 20th century.

### Why Globalization Accelerated

Several forces accelerated globalization:

- **Containerization**: standardized shipping containers lowered transport costs and made global supply chains reliable.
- **Jet aircraft and highways**: faster movement of people and high-value goods.
- **Telecommunications and the internet**: instant coordination of production, finance, design, and customer service across continents.
- **Trade liberalization**: lower tariffs and fewer quotas through the World Trade Organization, regional trade agreements, and national reforms.
- **Multinational corporations**: firms organized production across many countries to reduce costs and reach markets.
- **Financial deregulation**: capital can move quickly among stock markets, currencies, banks, and investment sites.

### Comparative Advantage and Trade

Trade is often explained through **comparative advantage**: countries benefit by specializing in goods they can produce at lower opportunity cost and trading for others. Bangladesh exports garments because of low labor costs and dense supplier networks. Brazil exports soybeans, iron ore, beef, and aircraft. Germany exports machinery and automobiles. Saudi Arabia exports oil.

But trade patterns are not natural or neutral. They reflect colonial history, infrastructure, subsidies, labor laws, currency values, corporate strategy, and political power. Former colonies often still export raw materials while importing higher-value finished goods.

### Global Supply Chains

A **global supply chain** divides production across many places. A smartphone may be designed in California, use chips from Taiwan or South Korea, rare earths from China, cobalt from the Democratic Republic of Congo, assembly in China or Vietnam, and consumers worldwide.

This system lowers prices and increases specialization, but it also creates vulnerabilities. The COVID-19 pandemic exposed dependence on distant suppliers for masks, semiconductors, medicines, and shipping capacity. Geopolitical conflict has pushed some firms toward **reshoring**, **nearshoring**, or **friend-shoring**: moving production home, closer to home, or to politically allied countries.

### Trade Organizations and Agreements

The **World Trade Organization (WTO)** sets trade rules and adjudicates disputes among member states. Regional agreements reduce barriers among groups of countries. Examples include **USMCA** (United States-Mexico-Canada Agreement, successor to NAFTA), the **European Union single market**, **ASEAN**, **Mercosur**, and the **African Continental Free Trade Area**.

Trade blocs can increase efficiency and investment, but they also shift jobs and bargaining power. NAFTA/USMCA helped integrate North American manufacturing, especially automobiles, but also contributed to job losses in some U.S. manufacturing communities and labor exploitation in some Mexican border factories.

### Winners and Losers

Globalization creates uneven outcomes. Consumers often benefit from cheaper goods. Export industries gain markets. Migrants send remittances. Cities connected to finance, technology, ports, and universities often thrive.

But some workers lose jobs to outsourcing or automation. Small farmers may face competition from subsidized imports. Countries dependent on one commodity can suffer when prices fall. Cultural industries may be overwhelmed by dominant global media. Environmental burdens may be shifted to countries with weaker regulation.

### Globalization Debates

Supporters argue globalization reduces poverty, spreads technology, lowers prices, increases choice, and makes war less likely by linking economies. Hundreds of millions of people in China, India, Vietnam, Bangladesh, and elsewhere moved out of extreme poverty during the era of global integration.

Critics argue globalization increases inequality, weakens labor protections, empowers multinational corporations, undermines local culture, and intensifies environmental damage. They also argue that global rules often reflect the interests of wealthy core countries.

The future may be less hyper-globalized than the 1990s and 2000s. Climate change, pandemics, trade wars, nationalism, automation, and security concerns are encouraging more regional supply chains and strategic industrial policy. Human geography focuses on where connections are dense, where they are weak, who benefits from them, and who bears the costs.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Define **globalization** and identify three forces that accelerated it in the late 20th century.`,
        solution: `**Globalization** is the increasing interconnectedness of the world through flows of goods, capital, people, information, technology, culture, and disease.

Three forces that accelerated it:
1. **Containerization**, which reduced shipping costs and made global supply chains reliable.
2. **Telecommunications and the internet**, which allow instant coordination of finance, design, production, and services.
3. **Trade liberalization**, including lower tariffs, fewer quotas, WTO rules, and regional trade agreements.

Other forces include jet aircraft, multinational corporations, financial deregulation, and improved logistics.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `What is **comparative advantage**, and why is it an incomplete explanation for real-world trade patterns?`,
        solution: `**Comparative advantage** means countries benefit by specializing in goods they can produce at lower opportunity cost and trading for others.

It is useful because it explains why trade can benefit both sides even if one country is more efficient at producing everything.

It is incomplete because real-world trade is shaped by more than efficiency: colonial history, infrastructure, subsidies, tariffs, exchange rates, labor laws, environmental rules, corporate strategy, state policy, and power. A country may export raw materials not because that is its natural destiny, but because colonial rule built railroads and ports to extract those goods and discouraged local manufacturing.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain how a **global supply chain** works using the example of a smartphone or automobile.`,
        solution: `A **global supply chain** divides production across many countries so each place performs a specialized task.

Smartphone example:
- design and software may be based in California,
- advanced chips may come from Taiwan or South Korea,
- rare earth minerals may be processed in China,
- cobalt for batteries may come from the Democratic Republic of Congo,
- screens and memory may come from East Asian suppliers,
- assembly may happen in China, Vietnam, or India,
- marketing and sales happen worldwide.

This lowers costs and allows firms to use specialized suppliers, but it creates vulnerability. A pandemic, port closure, war, export control, or semiconductor shortage in one place can disrupt production everywhere.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare **reshoring**, **nearshoring**, and **friend-shoring** as responses to fragile global supply chains.`,
        solution: `**Reshoring** means moving production back to the home country. Example: a U.S. firm returning semiconductor or medical-supply production to the United States.

**Nearshoring** means moving production closer to the home market to reduce transport risk and improve speed. Example: U.S. companies moving some manufacturing from East Asia to Mexico.

**Friend-shoring** means moving production to politically allied or trusted countries, even if they are not the cheapest. Example: sourcing critical minerals or chips from allies to reduce dependence on geopolitical rivals.

All three respond to the same problem: highly efficient global supply chains can be fragile when pandemics, wars, trade disputes, or shipping disruptions occur.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Evaluate whether globalization has reduced or increased inequality. Make a nuanced argument using both global and local scales.`,
        solution: `At the **global scale**, globalization has helped reduce inequality between some countries. China, India, Vietnam, Bangladesh, and others used export growth, investment, and global markets to reduce extreme poverty for hundreds of millions of people. Consumers worldwide also gained access to cheaper goods.

At the **national and local scales**, globalization often increased inequality. Workers in old manufacturing regions lost jobs to outsourcing and automation. High-skill workers in finance, technology, logistics, and global cities gained income. Port cities, university cities, and corporate centers often thrived, while rural regions and single-industry towns declined.

At the **worker scale**, global supply chains created jobs in garment factories and electronics assembly, but often with low wages, long hours, weak unions, and unsafe conditions. At the **environmental scale**, pollution may be shifted to countries with weaker regulation.

So globalization has done both. It reduced extreme poverty and narrowed some gaps between countries, while increasing inequality within many countries and creating new spatial divisions between connected and disconnected regions. The answer depends on scale of analysis.` },
    ],
    cards: [
      { front: 'Globalization', back: 'Increasing interconnectedness of the world through flows of goods, capital, people, information, technology, culture, and disease.', lessonPart: 1 },
      { front: 'Containerization', back: 'Standardized shipping containers lowered transport costs, sped loading, reduced theft, and made global supply chains reliable.', lessonPart: 1 },
      { front: 'Comparative advantage', back: 'Countries benefit by specializing in goods they produce at lower opportunity cost and trading for others. Useful but incomplete because power and history shape trade.', lessonPart: 2 },
      { front: 'Global supply chain', back: 'Production divided across many countries. Example: smartphone design in California, chips in Taiwan/Korea, minerals from Congo/China, assembly in China/Vietnam, consumers worldwide.', lessonPart: 3 },
      { front: 'WTO', back: 'World Trade Organization sets trade rules and adjudicates disputes among member states.', lessonPart: 4 },
      { front: 'USMCA', back: 'United States-Mexico-Canada Agreement, successor to NAFTA. Integrates North American trade, especially automobiles and agriculture.', lessonPart: 4 },
      { front: 'Reshoring', back: 'Moving production back to the home country to reduce supply-chain risk or support domestic industry.', lessonPart: 5 },
      { front: 'Nearshoring', back: 'Moving production closer to the home market. Example: U.S. firms shifting some manufacturing from East Asia to Mexico.', lessonPart: 5 },
      { front: 'Friend-shoring', back: 'Moving production to politically allied or trusted countries to reduce dependence on geopolitical rivals.', lessonPart: 5 },
      { front: 'Globalization and scale', back: 'Globalization may reduce inequality between some countries while increasing inequality within countries between global cities and disconnected regions.', lessonPart: 5 },
    ],
  },
}

async function main() {
  console.log('=== AP Human Geography content fill - Batch 4 ===\n')

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
    console.log(`* ${slug}`)

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
