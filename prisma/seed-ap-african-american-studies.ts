import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP African American Studies course, categories, and topics...')

  const course = await prisma.course.upsert({
    where: { slug: 'ap-african-american-studies' },
    update: {},
    create: {
      slug: 'ap-african-american-studies',
      name: 'AP African American Studies',
      icon: '✊',
      description: 'Explore the history, culture, politics, and contributions of African Americans from origins to the present.',
      order: 24,
      color: 'yellow',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: Origins of the African Diaspora ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'aas-origins-diaspora' },
    update: {},
    create: {
      slug: 'aas-origins-diaspora',
      name: 'Origins of the African Diaspora',
      description: 'African civilizations, the transatlantic slave trade, and the African diaspora',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Origins of the African Diaspora')

  const africanKingdomsTextContent = `# African Kingdoms & Civilizations (c. 800-1600)

This topic examines the political, economic, and cultural sophistication of West, Central, East, and Southern African societies before and during early European contact.

## Why This Topic Matters on AP AAS

- It anchors the course's first unit by showing African societies as agents of their own history, not as passive backdrops to later enslavement.
- It supports source analysis, contextualization, and continuity/change prompts.
- It gives you the precolonial baseline needed to assess the disruption caused by the transatlantic slave trade.

## 1) West African Empires: State Power Through Trade

- The Empire of Ghana (c. 700-1240), the Mali Empire (c. 1235-1600), and the Songhai Empire (c. 1430-1591) controlled trans-Saharan routes that exchanged gold, salt, copper, and enslaved people.
- Centralized rulers used taxation on trade caravans to fund armies, courts, and large royal households.
- Cities such as Djenne and Timbuktu became hubs of commerce, scholarship, and Islamic learning.

### Mansa Musa and the Visibility of African Wealth

- Mansa Musa's pilgrimage to Mecca (1324) projected Mali's wealth across Afro-Eurasia and placed West Africa on European world maps (the Catalan Atlas, 1375).
- The episode is a useful AP example of how Africa was integrated into global networks long before the Atlantic system.

## 2) Centers of Scholarship and Faith

- Timbuktu's Sankore complex hosted scholars in law, theology, mathematics, and astronomy.
- Manuscript traditions preserved African intellectual production, refuting later claims of African intellectual absence.
- Islam blended with Indigenous African religious practices, producing distinctly African Muslim cultures.

## 3) East African and Southern African States

### Swahili Coast City-States

- Kilwa, Mombasa, and Mogadishu thrived on Indian Ocean trade, exchanging gold, ivory, and enslaved people for textiles, porcelain, and spices.
- Swahili emerged as a Bantu language shaped by Arabic vocabulary, illustrating cosmopolitan exchange.

### Great Zimbabwe

- Stone enclosures built without mortar (c. 1100-1450) demonstrate centralized authority, skilled labor, and long-distance trade reach.
- Cattle wealth and gold export sustained elite power.

## 4) The Kingdom of Kongo and Central Africa

- Kongo (c. 1390-1914) had elected rulers (manikongo), an organized bureaucracy, and metallurgical industries.
- Early diplomatic and Christian exchange with Portugal (from the 1480s) preceded the slave trade's destabilizing pressure.
- This case is a strong AP example for short-term cooperation collapsing into long-term coerced extraction.

## 5) Core AP Patterns

| Pattern | African Evidence | AP Skill Connection |
|---|---|---|
| State capacity | Mali tax system; Songhai standing army; Kongo bureaucracy | Causation and contextualization |
| Long-distance trade | Trans-Saharan gold/salt; Indian Ocean Swahili networks | Comparison and continuity/change |
| Cultural production | Timbuktu manuscripts; Great Zimbabwe stonework; Kongo Christianity | Source analysis |

## 6) High-Yield Terms

- Trans-Saharan trade
- Mansa Musa
- Timbuktu / Sankore
- Swahili coast / Kilwa
- Great Zimbabwe
- Manikongo (Kongo)

## 7) AP Writing Tips

1. Use specific empire names with approximate dates rather than generic "African societies."
2. For comparison prompts, contrast African state structures with one Eurasian or American case.
3. Frame trade as a two-way exchange of goods and ideas, not a one-directional gift from outsiders.

## Quick Check

- Why is Mansa Musa's pilgrimage useful evidence about African integration into global networks?
- How did Timbuktu function as both a commercial and an intellectual center?
- What does Great Zimbabwe demonstrate about precolonial political organization in Southern Africa?`

  await prisma.topic.upsert({
    where: { slug: 'aas-african-kingdoms' },
    update: {
      title: 'African Kingdoms & Civilizations',
      description: 'West African empires (Ghana, Mali, Songhai), East African city-states, art, scholarship, and trade networks',
      textContent: africanKingdomsTextContent,
    },
    create: {
      slug: 'aas-african-kingdoms',
      title: 'African Kingdoms & Civilizations',
      description: 'West African empires (Ghana, Mali, Songhai), East African city-states, art, scholarship, and trade networks',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: africanKingdomsTextContent,
    },
  })

  const transatlanticSlaveTradeTextContent = `# The Transatlantic Slave Trade (c. 1500-1808)

This topic examines how African, European, and American actors built the largest forced migration in modern history and how that system reshaped four continents.

## Why This Topic Matters on AP AAS

- It is the structural foundation of the African diaspora in the Americas.
- It links to causation, comparison, and continuity/change prompts in nearly every later unit.
- It models the AAS approach: combining demographic data, primary sources, and lived experience.

## 1) Scale and Geography

- An estimated 12.5 million Africans were forcibly embarked between 1501 and 1866; about 10.7 million survived the Middle Passage.
- The largest receiving regions were Brazil (about 46%) and the Caribbean (about 40%); only about 4% landed directly in mainland North America.
- Major embarkation regions included Senegambia, the Bight of Biafra, West Central Africa (Kongo and Angola), and the Gold Coast.

## 2) The Middle Passage

- Voyages across the Atlantic typically lasted six to twelve weeks.
- Mortality averaged around 15% but spiked higher on disease-prone routes.
- Captives were chained below deck, fed minimally, and exposed to violence, dysentery, and respiratory illness.
- Resistance occurred onboard: hunger strikes, suicide, and shipboard insurrections such as the Amistad (1839).

## 3) The Triangular Trade and the Atlantic Economy

- European manufactured goods (textiles, firearms, alcohol) moved south to African coastal markets.
- Enslaved Africans were transported west to the Americas to grow sugar, tobacco, rice, and cotton.
- Plantation commodities flowed back to European ports, generating capital that financed shipbuilding, banking, and early industry.

### African Coastal States and the Trade

- Coastal states such as Dahomey, Asante, and Kongo were both shaped by and shaped the trade.
- European demand for captives intensified warfare, kidnapping, and political destabilization in many regions.
- This is a critical AP point: African societies were participants in unequal terms, not architects of the system.

## 4) Demographic and Cultural Consequences

- West and Central Africa lost millions of working-age people, distorting age and sex ratios for generations.
- New African-descended populations and creole cultures emerged in the Americas (Gullah, Afro-Cuban, Afro-Brazilian).
- African religious systems blended with Christianity and Indigenous practices to form Vodou, Santeria, Candomble, and Black Christian traditions.

## 5) Core AP Patterns

| Pattern | Evidence | AP Skill Connection |
|---|---|---|
| Forced migration | 12.5 million embarked; 10.7 million survived | Quantitative source analysis |
| Atlantic system | Triangle of goods, captives, commodities | Causation |
| Cultural retention | Gullah language; Afro-Atlantic religions | Continuity and change over time |

## 6) High-Yield Terms

- Middle Passage
- Triangular trade
- Bight of Biafra / Senegambia / Angola
- Asiento system
- Slave Coast
- Creolization

## 7) AP Writing Tips

1. Use approximate population numbers when claims allow ("about 12.5 million") rather than vague "many."
2. Frame African coastal states as constrained participants, not equal partners.
3. Always pair a Middle Passage statistic with at least one cultural or demographic consequence.

## Quick Check

- Why did Brazil and the Caribbean receive more enslaved Africans than mainland North America?
- How did European demand reshape political dynamics on the African coast?
- What is one cultural form whose creation depended on the survival of Africans through the Middle Passage?`

  await prisma.topic.upsert({
    where: { slug: 'aas-transatlantic-slave-trade' },
    update: {
      title: 'The Transatlantic Slave Trade',
      description: 'Origins, the Middle Passage, triangular trade, resistance, and the impact on African societies',
      textContent: transatlanticSlaveTradeTextContent,
    },
    create: {
      slug: 'aas-transatlantic-slave-trade',
      title: 'The Transatlantic Slave Trade',
      description: 'Origins, the Middle Passage, triangular trade, resistance, and the impact on African societies',
      order: 2,
      categoryId: unit1.id,
      isPremium: false,
      textContent: transatlanticSlaveTradeTextContent,
    },
  })

  // ─── Unit 2: Freedom, Enslavement & Resistance ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'aas-freedom-enslavement' },
    update: {},
    create: {
      slug: 'aas-freedom-enslavement',
      name: 'Freedom, Enslavement & Resistance',
      description: 'Slavery in America, resistance, abolition, and free Black communities',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Freedom, Enslavement & Resistance')

  const slaveryInAmericaTextContent = `# Slavery in America (c. 1619-1865)

This topic examines how chattel slavery in British North America and the United States was constructed by law, sustained by economy, and contested by the daily lives of enslaved people.

## Why This Topic Matters on AP AAS

- Chattel slavery is the social structure against which Black politics, culture, and resistance defined themselves for over two centuries.
- It is foundational for causation prompts about race, citizenship, and the Civil War.
- The AP CED expects you to read enslaved people as historical actors, not only as victims.

## 1) Building a Racial Slave System

- Early Virginia (1619-1660s) blurred lines between indentured servitude and lifelong bondage.
- Colonial slave codes (Virginia 1662, 1705) made enslavement hereditary through the mother and stripped legal personhood.
- Bacon's Rebellion (1676) accelerated planter elites' shift toward racialized lifetime slavery.
- By 1750, slavery was a continent-wide institution with regional variations.

## 2) Regional Systems of Bondage

### The Chesapeake (Virginia, Maryland)

- Tobacco-driven plantations; smaller average enslaved holdings.
- Higher rates of natural reproduction allowed an enslaved population that grew internally.

### The Lowcountry (South Carolina, Georgia)

- Rice and indigo plantations with brutal mortality and high African import rates.
- Concentrated populations supported the persistence of African cultural forms (Gullah).

### The Antebellum Cotton South

- After the cotton gin (1793) and Louisiana Purchase (1803), cotton plantations expanded across the Deep South.
- The internal slave trade tore enslaved families apart, moving roughly 1 million people from the Upper to the Lower South between 1790 and 1860.

## 3) The Lives Enslaved People Built

- Family formation persisted despite legal denial: enslaved people maintained kin networks, named children for relatives, and resisted forced separations.
- African-rooted religious practice blended with evangelical Protestantism, producing the spirituals tradition and independent Black congregations.
- Enslaved people developed economies of their own: provision grounds, hiring out, and limited cash savings.

## 4) Mechanisms of Control and Resistance

| Control | Resistance |
|---|---|
| Slave codes; pass laws; patrols | Running away; truancy; sabotage |
| Whipping; sexual violence; sale | Religious community; secret literacy |
| Surveillance by overseers and patrollers | Rebellion (Stono 1739; Vesey 1822; Turner 1831) |

## 5) The Economic Centrality of Slavery

- By 1860, enslaved people were the largest single asset in the U.S. economy, valued above railroads and manufacturing combined.
- Northern textile mills, banks, and insurance firms profited from cotton produced by enslaved labor.
- This makes slavery a national, not regional, institution and is central to AP causation arguments about the Civil War.

## 6) High-Yield Terms

- Chattel slavery
- Slave codes (Virginia 1705)
- Internal slave trade
- Gullah / Lowcountry
- Spirituals
- Provision grounds

## 7) AP Writing Tips

1. Use the term "enslaved people" rather than "slaves" to center their humanity.
2. For causation prompts, connect the cotton boom (1793 onward) to the expansion and political defense of slavery.
3. When citing resistance, balance dramatic revolts with everyday acts of survival and family-building.

## Quick Check

- How did legal definitions in colonial Virginia shape the racial character of slavery?
- Why did the cotton gin transform both the economy and the geography of slavery?
- What evidence shows that enslaved people built durable cultural and family lives despite the legal system?`

  await prisma.topic.upsert({
    where: { slug: 'aas-slavery-in-america' },
    update: {
      title: 'Slavery in America',
      description: 'Chattel slavery, plantation system, enslaved peoples culture, family, religion, and the slave codes',
      textContent: slaveryInAmericaTextContent,
    },
    create: {
      slug: 'aas-slavery-in-america',
      title: 'Slavery in America',
      description: 'Chattel slavery, plantation system, enslaved peoples culture, family, religion, and the slave codes',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: slaveryInAmericaTextContent,
    },
  })

  const resistanceAbolitionTextContent = `# Resistance & Abolition (c. 1700-1865)

This topic examines how enslaved and free Black people, alongside white allies, built movements that destabilized slavery and ultimately ended it in the United States.

## Why This Topic Matters on AP AAS

- It demonstrates Black political agency long before formal citizenship.
- It supports causation prompts about the Civil War and continuity prompts about Black activism.
- It introduces the AP skill of analyzing primary sources from Black writers, orators, and organizers.

## 1) Forms of Resistance Inside Slavery

- Everyday resistance included tool breakage, work slowdowns, feigned illness, and theft of food.
- Truancy and short-term escape were widespread strategies for negotiating treatment.
- Long-term flight, often via the Underground Railroad, produced thousands of self-emancipations annually by the 1850s.

### Major Armed Revolts

| Event | Date | Significance |
|---|---|---|
| Stono Rebellion (SC) | 1739 | Largest colonial-era revolt; led to the Negro Act of 1740 |
| Gabriel's Conspiracy (VA) | 1800 | Planned urban uprising; foiled before launch |
| Denmark Vesey Plot (SC) | 1822 | Free Black church-based plot; triggered crackdown on Black congregations |
| Nat Turner's Rebellion (VA) | 1831 | Killed about 60 white people; provoked harsh slave codes across the South |

## 2) Free Black Communities

- By 1860, about 488,000 free Black people lived in the United States, roughly half in the South.
- Free Black communities founded mutual aid societies, churches (Bethel AME 1794), and schools (Prince Hall Masons 1784).
- Free Black activism produced early Black newspapers (Freedom's Journal, 1827) and the early national convention movement (1830).

## 3) The Black Abolitionist Movement

- Frederick Douglass: formerly enslaved orator, editor of The North Star, and author of three autobiographies who provided firsthand testimony of slavery's brutality.
- Harriet Tubman: Underground Railroad conductor and Union scout who guided about 70 people to freedom and led the Combahee River Raid (1863).
- Sojourner Truth: itinerant preacher who linked abolition with women's rights ("Ain't I a Woman?", 1851).
- David Walker: author of the militant Appeal (1829), which urged enslaved people to claim freedom by any means.

## 4) White Allies and Political Abolitionism

- William Lloyd Garrison launched The Liberator (1831), demanding immediate emancipation.
- The American Anti-Slavery Society (1833) coordinated petitioning, lecture tours, and printing.
- Political abolitionism shaped the Liberty Party (1840), Free Soil Party (1848), and ultimately the Republican Party (1854).

## 5) Core AP Patterns

| Pattern | Evidence | AP Skill Connection |
|---|---|---|
| Black-led leadership | Douglass, Tubman, Truth, Walker | Source analysis |
| Institution building | AME church; Black press; conventions | Continuity and change |
| Radical-moderate spectrum | Walker's Appeal vs Garrisonian moral suasion | Comparison |

## 6) High-Yield Terms

- Underground Railroad
- The North Star
- Bethel AME Church
- Black convention movement
- Walker's Appeal
- Fugitive Slave Act (1850)

## 7) AP Writing Tips

1. Lead with Black-led action; treat white allies as supporters rather than originators.
2. Pair an armed revolt with a print or institutional example to show resistance was not only violent.
3. For causation prompts about emancipation, connect Black abolitionism to Republican electoral politics.

## Quick Check

- Why did the Vesey and Turner episodes provoke especially harsh legal responses?
- How did free Black communities support enslaved people through institutions and the press?
- Which two Black abolitionists best illustrate the range of strategies in the movement?`

  await prisma.topic.upsert({
    where: { slug: 'aas-resistance-abolition' },
    update: {
      title: 'Resistance & Abolition',
      description: 'Slave revolts, the Underground Railroad, Frederick Douglass, Harriet Tubman, and the abolitionist movement',
      textContent: resistanceAbolitionTextContent,
    },
    create: {
      slug: 'aas-resistance-abolition',
      title: 'Resistance & Abolition',
      description: 'Slave revolts, the Underground Railroad, Frederick Douglass, Harriet Tubman, and the abolitionist movement',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: resistanceAbolitionTextContent,
    },
  })

  // ─── Unit 3: The Practice of Freedom ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'aas-practice-freedom' },
    update: {},
    create: {
      slug: 'aas-practice-freedom',
      name: 'The Practice of Freedom',
      description: 'Reconstruction, Jim Crow, the Great Migration, and the Harlem Renaissance',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: The Practice of Freedom')

  const reconstructionJimCrowTextContent = `# Reconstruction & Jim Crow (1865-1915)

This topic examines how African Americans pursued and defended freedom after emancipation, and how white-led political and racial violence narrowed those gains by the early twentieth century.

## Why This Topic Matters on AP AAS

- It introduces the constitutional framework (Thirteenth, Fourteenth, Fifteenth Amendments) that still anchors civil rights litigation.
- It supports continuity-and-change analysis between emancipation and the modern movement.
- It tests your ability to read political failure not as inevitable but as actively constructed.

## 1) The Reconstruction Amendments

| Amendment | Year | Key Provision |
|---|---|---|
| Thirteenth | 1865 | Abolished slavery and involuntary servitude except as criminal punishment |
| Fourteenth | 1868 | Birthright citizenship; equal protection; due process |
| Fifteenth | 1870 | Prohibited race-based denial of the vote |

- The "punishment exception" in the Thirteenth Amendment foreshadowed convict leasing.
- The Fourteenth Amendment's equal protection clause became the basis of twentieth-century civil rights cases.

## 2) Black Political Power During Reconstruction

- About 2,000 Black men held public office between 1865 and 1877, including senators (Hiram Revels, Blanche Bruce) and 16 House members.
- Black voters created Republican majorities in several Southern states, supporting public schools, expanded voting rights, and infrastructure.
- The Freedmen's Bureau (1865-1872) provided schools, labor contracts, and limited legal aid for formerly enslaved people.

## 3) Building Black Institutions

- Historically Black colleges and universities (Howard, Fisk, Hampton) were founded in this era.
- Black churches grew rapidly as centers of education, mutual aid, and political organization.
- Black newspapers and fraternal orders multiplied, creating durable networks that survived Reconstruction's collapse.

## 4) The Construction of Jim Crow

### Political and Legal Tools

- Poll taxes, literacy tests, grandfather clauses, and white primaries disenfranchised most Black voters by 1900.
- Plessy v. Ferguson (1896) constitutionalized "separate but equal" for public facilities.
- Convict leasing reintroduced forced Black labor through criminal codes targeting Black men.

### Racial Violence

- Lynchings averaged more than one per week in the 1890s; Ida B. Wells documented and challenged the practice in Southern Horrors (1892).
- White-led massacres in places like Wilmington (1898), East St. Louis (1917), and Tulsa (1921) destroyed Black political and economic power.

## 5) Core AP Patterns

| Pattern | Evidence | AP Skill Connection |
|---|---|---|
| Constitutional change | Reconstruction Amendments | Causation |
| Backlash and reversal | Compromise of 1877; Plessy 1896 | Continuity and change |
| Black institution-building | HBCUs; Black press; AME church | Source analysis |

## 6) High-Yield Terms

- Freedmen's Bureau
- Black Codes
- Compromise of 1877
- Plessy v. Ferguson
- Convict leasing
- Ida B. Wells

## 7) AP Writing Tips

1. Frame Jim Crow as a political construction, not a natural outcome of the South.
2. For causation prompts, connect the end of federal occupation (1877) to the rise of disenfranchisement laws.
3. Always pair Plessy with at least one mechanism of disenfranchisement (poll tax, literacy test, white primary).

## Quick Check

- Why was the Fourteenth Amendment so consequential beyond the Reconstruction era?
- How did the end of federal occupation in 1877 enable the construction of Jim Crow?
- What evidence demonstrates that Black political and institutional life continued despite Jim Crow?`

  await prisma.topic.upsert({
    where: { slug: 'aas-reconstruction-jim-crow' },
    update: {
      title: 'Reconstruction & Jim Crow',
      description: '13th-15th Amendments, Black political participation during Reconstruction, rise of Jim Crow, and Plessy v. Ferguson',
      textContent: reconstructionJimCrowTextContent,
    },
    create: {
      slug: 'aas-reconstruction-jim-crow',
      title: 'Reconstruction & Jim Crow',
      description: '13th-15th Amendments, Black political participation during Reconstruction, rise of Jim Crow, and Plessy v. Ferguson',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: reconstructionJimCrowTextContent,
    },
  })

  const greatMigrationHarlemTextContent = `# The Great Migration & Harlem Renaissance (c. 1910-1940)

This topic examines how the largest internal migration in U.S. history reshaped Black life and gave rise to a transformative cultural movement in northern cities.

## Why This Topic Matters on AP AAS

- It connects economic geography to cultural production and political organizing.
- It supports continuity/change prompts about Black freedom across emancipation and the twentieth century.
- It tests primary source analysis using Harlem Renaissance literature, art, and music.

## 1) Push and Pull Factors of the Great Migration

| Push Factors (South) | Pull Factors (North/West) |
|---|---|
| Sharecropping debt and crop failure | Industrial wartime jobs (1914-1918, 1941-1945) |
| Lynching and racial terror | Higher wages and more consistent pay |
| Disenfranchisement and Jim Crow law | Voting rights and active Black politics |
| Boll weevil destruction of cotton (1910s) | Black newspapers (Chicago Defender) recruited migrants |

- Roughly 6 million African Americans moved north and west between 1910 and 1970, in two waves (1910-1940; 1940-1970).
- Major destinations: Chicago, New York, Detroit, Cleveland, Philadelphia, and Los Angeles.

## 2) Northern Cities Transformed

- Black populations of Chicago and Detroit grew more than tenfold between 1910 and 1940.
- Restrictive covenants and redlining concentrated Black residents in segregated neighborhoods (the South Side, Harlem, Bronzeville).
- Black-owned businesses, fraternal orders, and churches built dense civic infrastructure in these neighborhoods.

## 3) The Harlem Renaissance

### Literature and Thought

- Langston Hughes, Zora Neale Hurston, Claude McKay, and Jean Toomer used poetry, novels, and folklore to articulate modern Black identity.
- W.E.B. Du Bois (The Crisis) framed art as both aesthetic and political work.
- Alain Locke's anthology The New Negro (1925) launched the movement as a public phenomenon.

### Music and Performance

- Jazz spread from New Orleans to Chicago to New York, becoming the dominant urban sound.
- Duke Ellington at the Cotton Club, Louis Armstrong's Hot Five and Hot Seven recordings, and Bessie Smith's blues defined the era.
- Black musical theater and dance reshaped American popular performance.

### Visual Art

- Aaron Douglas's murals and Augusta Savage's sculpture used African motifs to argue for Black artistic heritage.

## 4) Political Movements of the Era

- The NAACP (founded 1909) pursued anti-lynching legislation and legal challenges to segregation.
- Marcus Garvey's UNIA (founded 1914) attracted millions with a Black-nationalist program of self-help, separatism, and Pan-Africanism.
- A. Philip Randolph organized the Brotherhood of Sleeping Car Porters (1925), the first Black-led union recognized under federal labor law.

## 5) Core AP Patterns

| Pattern | Evidence | AP Skill Connection |
|---|---|---|
| Demographic transformation | 6 million migrants, two waves | Quantitative analysis |
| Cultural assertion | Hughes, Hurston, Ellington, Douglas | Source analysis |
| Organized politics | NAACP litigation; UNIA mass mobilization; Randolph union | Comparison |

## 6) High-Yield Terms

- Sharecropping
- Chicago Defender
- Restrictive covenants / redlining
- The New Negro (1925)
- UNIA
- Brotherhood of Sleeping Car Porters

## 7) AP Writing Tips

1. Treat migration and cultural production as causally linked: northern cities provided the audience and infrastructure for the Renaissance.
2. Distinguish the NAACP's legal strategy from Garvey's mass-membership Black nationalism for comparison prompts.
3. Cite at least one specific Harlem Renaissance figure with their medium (Hughes-poetry, Ellington-jazz) when analyzing primary sources.

## Quick Check

- Why did the boll weevil and World War I both accelerate Black migration north?
- How did segregation in northern cities both constrain and concentrate Black cultural and political life?
- What does the contrast between Du Bois and Garvey reveal about debates over Black strategy in the 1920s?`

  await prisma.topic.upsert({
    where: { slug: 'aas-great-migration-harlem' },
    update: {
      title: 'The Great Migration & Harlem Renaissance',
      description: 'Push/pull factors of the Great Migration, the Harlem Renaissance, jazz, literature, and Black intellectual thought',
      textContent: greatMigrationHarlemTextContent,
    },
    create: {
      slug: 'aas-great-migration-harlem',
      title: 'The Great Migration & Harlem Renaissance',
      description: 'Push/pull factors of the Great Migration, the Harlem Renaissance, jazz, literature, and Black intellectual thought',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: greatMigrationHarlemTextContent,
    },
  })

  const wwiWwiiEraTextContent = `# African Americans in the World Wars Era (1914-1945)

This topic examines how African Americans used military service and wartime mobilization to expand demands for citizenship at home and abroad.

## Why This Topic Matters on AP AAS

- It bridges Reconstruction-era unfinished business with the postwar civil rights movement.
- It supports causation prompts linking wartime service to political and legal change.
- It introduces the international dimension of Black freedom struggles (Pan-Africanism, anticolonialism).

## 1) World War I and the Postwar Backlash

- About 380,000 Black Americans served in WWI, though most in segregated labor units.
- The 369th Infantry Regiment (Harlem Hellfighters) fought under French command and earned the Croix de Guerre.
- Returning Black veterans faced the Red Summer of 1919: at least 25 anti-Black riots and a wave of lynchings.
- The Pan-African Congress (Paris, 1919), led by W.E.B. Du Bois, linked Black American demands to global anticolonial struggle.

## 2) The Interwar Foundation

- The NAACP's anti-lynching campaign produced the Dyer Bill (passed House 1922; killed by Senate filibuster).
- Black workers built unions in steel, meatpacking, and Pullman service despite AFL exclusion.
- Mary McLeod Bethune's Black Cabinet advised FDR on race issues during the New Deal.
- The Great Depression hit Black workers first and hardest; New Deal programs were administered with discriminatory effects.

## 3) World War II and the Double V Campaign

- About 1.2 million Black Americans served in WWII, still in mostly segregated units.
- The Tuskegee Airmen flew over 1,500 missions in Europe and demonstrated Black aviator competence.
- The 761st Tank Battalion served under Patton in 183 days of continuous combat.
- The Pittsburgh Courier launched the Double V campaign in 1942: victory over fascism abroad and racism at home.

## 4) Wartime Federal Pressure

- A. Philip Randolph's threatened March on Washington (1941) forced FDR to issue Executive Order 8802, banning racial discrimination in defense industries and creating the Fair Employment Practices Committee.
- Smith v. Allwright (1944) ended the white primary in Texas and weakened Southern disenfranchisement.
- Executive Order 9981 (1948, Truman) desegregated the U.S. armed forces.

## 5) Core AP Patterns

| Pattern | Evidence | AP Skill Connection |
|---|---|---|
| Military service as leverage | 369th Infantry; Tuskegee Airmen; 761st Tank Battalion | Causation |
| Wartime federal action | EO 8802; FEPC; EO 9981 | Continuity and change |
| International framing | Pan-African Congress; Double V | Contextualization |

## 6) High-Yield Terms

- Harlem Hellfighters (369th Infantry)
- Red Summer (1919)
- Tuskegee Airmen
- Double V campaign
- Executive Order 8802
- Smith v. Allwright (1944)

## 7) AP Writing Tips

1. Link Black military service to specific federal actions (EO 8802, EO 9981) when arguing causation.
2. Frame the Red Summer as evidence that wartime gains provoked white backlash, not as a one-off event.
3. For continuity prompts, treat the Double V campaign as a precursor to the postwar civil rights movement, not a separate moment.

## Quick Check

- Why did Black participation in WWI lead to both new political organizing and severe racial violence at home?
- How did A. Philip Randolph use the threat of mass mobilization to extract a wartime concession?
- What does the Double V slogan reveal about how Black Americans framed WWII?`

  await prisma.topic.upsert({
    where: { slug: 'aas-wwi-wwii-era' },
    update: {
      title: 'African Americans in the World Wars Era',
      description: 'Black soldiers in WWI/WWII, Double V campaign, A. Philip Randolph, desegregation of the military',
      textContent: wwiWwiiEraTextContent,
    },
    create: {
      slug: 'aas-wwi-wwii-era',
      title: 'African Americans in the World Wars Era',
      description: 'Black soldiers in WWI/WWII, Double V campaign, A. Philip Randolph, desegregation of the military',
      order: 3,
      categoryId: unit3.id,
      isPremium: false,
      textContent: wwiWwiiEraTextContent,
    },
  })

  // ─── Unit 4: Movements & Debates ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'aas-movements-debates' },
    update: {},
    create: {
      slug: 'aas-movements-debates',
      name: 'Movements & Debates',
      description: 'Civil Rights Movement, Black Power, and contemporary African American life',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Movements & Debates')

  const civilRightsMovementTextContent = `# The Civil Rights Movement (1945-1968)

This topic examines how a coordinated movement of Black-led organizations, churches, and federal allies dismantled de jure segregation in the United States.

## Why This Topic Matters on AP AAS

- It is the central case study for analyzing how social movements convert pressure into law.
- It supports causation prompts about the Civil Rights Act (1964) and the Voting Rights Act (1965).
- It models how the AP CED treats organizing, legal strategy, media, and federal power as interlocking variables.

## 1) Foundations: Postwar Legal and Political Pressure

- Smith v. Allwright (1944) ended the white primary in Texas.
- Shelley v. Kraemer (1948) made racially restrictive housing covenants unenforceable.
- Truman's Executive Order 9981 (1948) desegregated the military.
- The NAACP Legal Defense Fund, led by Charles Hamilton Houston and Thurgood Marshall, developed a long-term litigation strategy targeting segregated education.

## 2) Brown and Massive Resistance

- Brown v. Board of Education (1954) declared "separate but equal" unconstitutional in public schools.
- Brown II (1955) ordered desegregation "with all deliberate speed," allowing extensive Southern delay.
- The Southern Manifesto (1956), signed by 101 members of Congress, pledged resistance.
- Federal troops enforced the integration of Little Rock Central High School (1957).

## 3) Mass Direct Action

| Action | Year | Significance |
|---|---|---|
| Montgomery Bus Boycott | 1955-1956 | Rosa Parks's arrest; 381-day boycott; launched MLK |
| Greensboro sit-ins | 1960 | Sparked SNCC formation and lunch counter desegregation |
| Freedom Rides | 1961 | CORE and SNCC tested federal interstate travel rulings |
| March on Washington | 1963 | 250,000 attendees; "I Have a Dream" speech |
| Selma to Montgomery | 1965 | "Bloody Sunday"; pressured passage of Voting Rights Act |

## 4) Key Organizations

- Southern Christian Leadership Conference (SCLC, 1957): Black church-based, coordinated by MLK.
- Student Nonviolent Coordinating Committee (SNCC, 1960): student-led, emphasized grassroots organizing in the rural South.
- Congress of Racial Equality (CORE, 1942): pioneered nonviolent direct action and led the Freedom Rides.
- NAACP: anchored the legal strategy.

## 5) Federal Legislation

- Civil Rights Act of 1964: banned discrimination in public accommodations, employment, and federally funded programs; created the EEOC.
- Voting Rights Act of 1965: banned literacy tests; authorized federal oversight of registration in covered jurisdictions.
- Fair Housing Act of 1968: banned racial discrimination in housing sales and rentals.

## 6) Core AP Patterns

| Pattern | Evidence | AP Skill Connection |
|---|---|---|
| Legal strategy converts to mass action | Brown 1954 to bus boycott 1955 | Causation |
| Movement-media-federal triangle | Birmingham 1963; Selma 1965 | Contextualization |
| Coalition organizations with distinct roles | SCLC vs SNCC vs CORE vs NAACP | Comparison |

## 7) High-Yield Terms

- Brown v. Board of Education (1954)
- Montgomery Bus Boycott
- SCLC, SNCC, CORE, NAACP
- "Letter from Birmingham Jail"
- Civil Rights Act of 1964
- Voting Rights Act of 1965

## 8) AP Writing Tips

1. For causation prompts, connect a specific campaign (Birmingham, Selma) to a specific law (CRA, VRA).
2. Distinguish organizational strategies in comparison prompts: SCLC (church-based, charismatic) vs SNCC (decentralized, student-led) vs NAACP (litigation).
3. Cite media and federal response as part of the mechanism, not as a backdrop.

## Quick Check

- Why was Brown v. Board of Education insufficient on its own to desegregate schools?
- How did the Birmingham and Selma campaigns produce specific federal legislation?
- What distinguishes SNCC's organizing model from the SCLC's, and why does that matter?`

  await prisma.topic.upsert({
    where: { slug: 'aas-civil-rights-movement' },
    update: {
      title: 'The Civil Rights Movement',
      description: 'Brown v. Board, Montgomery Bus Boycott, sit-ins, Freedom Rides, March on Washington, and key legislation',
      textContent: civilRightsMovementTextContent,
    },
    create: {
      slug: 'aas-civil-rights-movement',
      title: 'The Civil Rights Movement',
      description: 'Brown v. Board, Montgomery Bus Boycott, sit-ins, Freedom Rides, March on Washington, and key legislation',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: civilRightsMovementTextContent,
    },
  })

  const blackPowerBeyondTextContent = `# Black Power & Beyond (1965-1980)

This topic examines how Black activists, artists, and politicians redefined the meaning of liberation after the legal victories of the civil rights era.

## Why This Topic Matters on AP AAS

- It corrects the common misreading that the movement ended in 1965.
- It supports comparison prompts contrasting integrationist and Black nationalist frameworks.
- It introduces cultural politics (the Black Arts Movement) as a serious AP analytic category.

## 1) Roots and Catalysts

- Frustration with the slow pace of school and housing desegregation drove activists toward more militant frameworks.
- The Watts uprising (1965), six days after the Voting Rights Act passed, exposed Northern de facto segregation, police violence, and economic exclusion.
- Stokely Carmichael's call for "Black Power" during the Meredith March Against Fear (1966) named a new orientation.

## 2) Malcolm X and the Nation of Islam

- Malcolm X rose within the Nation of Islam (NOI), articulating Black self-defense, separatism, and Islamic discipline.
- His 1964 break with the NOI followed his hajj to Mecca and produced a more international, multiracial framework.
- His autobiography (with Alex Haley, published 1965) became a foundational Black political text.
- Malcolm X was assassinated in February 1965.

## 3) The Black Panther Party

- Founded in Oakland (1966) by Huey Newton and Bobby Seale.
- The Ten-Point Program demanded employment, housing, education, an end to police brutality, and self-determination.
- Survival programs included free breakfast for children, health clinics, and legal aid.
- COINTELPRO (FBI counterintelligence program) targeted Panthers with infiltration, raids, and lethal force, including the killing of Fred Hampton (1969).

## 4) The Black Arts Movement and Cultural Politics

- Amiri Baraka, Sonia Sanchez, Nikki Giovanni, and Larry Neal articulated a Black cultural nationalism.
- Black studies departments emerged at San Francisco State (1968) and spread nationally after sustained student protest.
- The 1968 Olympics saw Tommie Smith and John Carlos raise gloved fists, internationalizing Black Power symbolism.

## 5) Electoral and Institutional Gains

- The Congressional Black Caucus formed in 1971, eventually becoming a significant legislative bloc.
- Black mayors won major cities: Carl Stokes (Cleveland 1967), Richard Hatcher (Gary 1967), Maynard Jackson (Atlanta 1973), Coleman Young (Detroit 1974).
- Shirley Chisholm became the first Black woman elected to Congress (1968) and ran for president (1972).
- Court-ordered busing and Title IX expanded Black access to schools and higher education.

## 6) Core AP Patterns

| Pattern | Evidence | AP Skill Connection |
|---|---|---|
| Beyond integration | Watts 1965; Black Power 1966 | Causation |
| Service plus militancy | Panther survival programs and armed self-defense | Comparison |
| Culture as political work | Black Arts Movement; Black studies | Source analysis |
| Electoral consolidation | Congressional Black Caucus; Black mayors | Continuity and change |

## 7) High-Yield Terms

- Black Power (1966)
- Nation of Islam
- Black Panther Party / Ten-Point Program
- COINTELPRO
- Black Arts Movement
- Congressional Black Caucus

## 8) AP Writing Tips

1. Treat Black Power as a political reorientation, not as the abandonment of nonviolence.
2. Pair Panther militancy with Panther survival programs to capture the movement's actual scope.
3. For comparison prompts, contrast the legislative goals of the CBC with the cultural goals of the Black Arts Movement.

## Quick Check

- Why did Northern uprisings such as Watts (1965) reframe what counted as a civil rights issue?
- How did the Black Panther Party combine survival programs with armed self-defense?
- What does the rise of Black mayors and the Congressional Black Caucus suggest about the long-term effects of voting rights enforcement?`

  await prisma.topic.upsert({
    where: { slug: 'aas-black-power-beyond' },
    update: {
      title: 'Black Power & Beyond',
      description: 'Malcolm X, the Black Panther Party, Black Arts Movement, affirmative action, and political representation',
      textContent: blackPowerBeyondTextContent,
    },
    create: {
      slug: 'aas-black-power-beyond',
      title: 'Black Power & Beyond',
      description: 'Malcolm X, the Black Panther Party, Black Arts Movement, affirmative action, and political representation',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: blackPowerBeyondTextContent,
    },
  })

  const contemporaryIssuesTextContent = `# Contemporary African American Life (1980-Present)

This topic examines how Black Americans have navigated mass incarceration, economic restructuring, cultural production, and renewed protest movements over the past four decades.

## Why This Topic Matters on AP AAS

- It anchors the course in the present, where most students experience the ongoing significance of African American Studies.
- It supports continuity-and-change prompts comparing the civil rights era to the present.
- It tests your ability to use contemporary primary sources (BLM statements, hip-hop lyrics, court rulings) with the same rigor as historical sources.

## 1) The Carceral Turn (1980s-1990s)

- The federal "war on drugs" (Reagan, 1982) and the 1994 Crime Bill expanded sentencing, policing, and prison construction.
- The 100-to-1 crack-to-powder cocaine sentencing disparity (1986) drove racially uneven incarceration.
- The U.S. prison population quadrupled between 1980 and 2010; Black men made up roughly 40% of the prison population while comprising about 13% of the male population.
- Michelle Alexander's The New Jim Crow (2010) framed mass incarceration as a system of racialized social control.

## 2) Economic Restructuring

- Deindustrialization in the 1970s and 1980s eliminated stable manufacturing jobs that had anchored Black urban communities.
- The racial wealth gap persisted: by 2020, median white household wealth was roughly eight times median Black household wealth.
- Black entrepreneurship and the Black middle class expanded significantly, even as concentrated poverty deepened in segregated neighborhoods.

## 3) Cultural Production and Influence

- Hip-hop emerged in the South Bronx in the 1970s and became the dominant U.S. popular music form by the 2000s.
- Black film and television (Spike Lee, Ava DuVernay, Jordan Peele, Shonda Rhimes, Issa Rae) reshaped mainstream media.
- Toni Morrison's Nobel Prize in Literature (1993) and Colson Whitehead's two Pulitzers anchored Black literary recognition.
- Beyonce, Kendrick Lamar, and Solange used commercial platforms for explicitly political work.

## 4) Twenty-First-Century Protest Movements

- Black Lives Matter began in 2013 after the acquittal of Trayvon Martin's killer; it expanded after Michael Brown (Ferguson 2014) and Eric Garner (Staten Island 2014).
- The 2020 protests after the murder of George Floyd were among the largest in U.S. history; an estimated 15-26 million people participated.
- Movements connected policing to housing, healthcare, schools, and labor through an intersectional lens.

## 5) Intersectionality and Contemporary Theory

- Kimberle Crenshaw's "intersectionality" (1989) names how race, gender, class, and other identities compound discrimination and shape activism.
- The Combahee River Collective Statement (1977) is a foundational Black feminist text that students should read in primary form.
- Contemporary scholarship (Saidiya Hartman, Imani Perry) builds on Black feminist and critical race traditions.

## 6) Political Milestones and Ongoing Debates

- The election of Barack Obama (2008, 2012) was a historical first that did not resolve structural racism.
- The election of Kamala Harris as Vice President (2020) extended representational milestones.
- Reparations debates resurfaced in legislative form (H.R. 40) and at the municipal level (Evanston, Illinois 2021).
- Voting rights remain contested through Shelby County v. Holder (2013) and ongoing redistricting and voter ID litigation.

## 7) Core AP Patterns

| Pattern | Evidence | AP Skill Connection |
|---|---|---|
| Carceral expansion | War on Drugs; 1994 Crime Bill; sentencing disparities | Causation |
| Cultural authority | Hip-hop; Black film/TV; Morrison Nobel | Source analysis |
| New movement repertoires | BLM 2013; 2020 protests | Continuity and change |
| Intersectional analysis | Crenshaw 1989; Combahee 1977 | Contextualization |

## 8) High-Yield Terms

- Mass incarceration
- The New Jim Crow
- Hip-hop as Black cultural form
- Black Lives Matter
- Intersectionality (Crenshaw)
- Shelby County v. Holder
- Reparations (H.R. 40)

## 9) AP Writing Tips

1. Use precise dates for contemporary events (BLM 2013; Floyd 2020) the same way you would for the civil rights era.
2. Treat hip-hop and Black film as legitimate primary sources, not as illustrations.
3. For continuity-and-change prompts, compare the carceral turn to Jim Crow as forms of racialized control rather than equating them.

## Quick Check

- How did federal drug and sentencing policy in the 1980s and 1990s reshape Black community life?
- Why does Crenshaw's intersectionality framework still organize contemporary Black political analysis?
- What evidence shows that the protests of 2013-2020 represent a distinct movement repertoire from the 1960s civil rights era?`

  await prisma.topic.upsert({
    where: { slug: 'aas-contemporary-issues' },
    update: {
      title: 'Contemporary African American Life',
      description: 'Mass incarceration, Black Lives Matter, cultural influence, intersectionality, and ongoing struggles for equity',
      textContent: contemporaryIssuesTextContent,
    },
    create: {
      slug: 'aas-contemporary-issues',
      title: 'Contemporary African American Life',
      description: 'Mass incarceration, Black Lives Matter, cultural influence, intersectionality, and ongoing struggles for equity',
      order: 3,
      categoryId: unit4.id,
      isPremium: false,
      textContent: contemporaryIssuesTextContent,
    },
  })

  console.log('\n🎉 AP African American Studies seeding complete!')
  console.log('  📚 4 categories, 10 topics created (CED-aligned, rich textContent)')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
