/**
 * Phase 2/3 content fill for AP Human Geography — Batch 2 (5 topics)
 * Covers: hg-population-growth, hg-migration, hg-culture-diffusion,
 *         hg-language-religion, hg-political-geography.
 *
 * Usage:
 *   set -a && source .env.local && set +a && npx tsx prisma/add-human-geography-content-batch2.ts
 */

import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

type ProblemSeed = { order: number; difficulty: Difficulty; question: string; solution: string }
type CardSeed = { front: string; back: string; hint?: string; lessonPart?: number }
type TopicSeed = { textContent: string; problems: ProblemSeed[]; cards: CardSeed[] }

const TOPICS: Record<string, TopicSeed> = {
  // ──────────────────────────────────────────────────────────────────
  'hg-population-growth': {
    textContent: `## Population Growth and the Demographic Transition

Why are some countries growing rapidly while others are shrinking? The answer lies in two simple but powerful concepts: **birth rates** and **death rates**, and how they change as a society develops.

### Key Demographic Measures

- **Crude Birth Rate (CBR)** — annual live births per 1,000 people. Niger ~46; Japan ~6.
- **Crude Death Rate (CDR)** — annual deaths per 1,000 people. Lesotho ~14; Qatar ~2 (very young population).
- **Rate of Natural Increase (RNI)** — (CBR − CDR) ÷ 10, expressed as a percentage. Excludes migration. RNI of 1% means a population doubles in ~70 years.
- **Total Fertility Rate (TFR)** — average number of children a woman is expected to bear in her lifetime. **2.1 is replacement level** in developed countries (slightly higher in countries with high infant mortality).
- **Infant Mortality Rate (IMR)** — deaths under age 1 per 1,000 live births. A sensitive indicator of overall development.
- **Doubling time** — years to double a population. Approximated by **70 ÷ growth rate (%)**. A 2% RNI doubles in 35 years; a 1% RNI doubles in 70.

### The Demographic Transition Model (DTM)

The DTM describes how birth and death rates change as a country industrializes. It has **four classic stages** (with a contested fifth):

**Stage 1 — High stationary.** High CBR (~40), high CDR (~40). Slow growth. Pre-industrial; characterized hunter-gatherer and early agricultural societies. **No country today is in Stage 1.**

**Stage 2 — Early expanding.** CDR drops sharply (better food supply, sanitation, medicine — especially after the **Industrial Revolution** ~1750 in Europe and the **medical revolution** ~1950 in the developing world). CBR remains high. RAPID population growth. *Examples today:* Niger, Mali, Afghanistan, much of sub-Saharan Africa.

**Stage 3 — Late expanding.** CBR begins to decline as society urbanizes, women gain education and enter the workforce, and contraception becomes available. CDR continues to fall slowly. Growth slows. *Examples:* India, Mexico, Brazil, Indonesia.

**Stage 4 — Low stationary.** Both CBR and CDR are low (~10 each). Population stable. *Examples:* United States, Australia, France, China.

**Stage 5 (proposed) — Declining.** CBR falls BELOW CDR. Population shrinks unless replenished by immigration. *Examples:* Japan, Italy, Germany, South Korea, Russia.

### The Epidemiologic Transition

Paralleling the DTM, the **epidemiologic transition** describes how the leading causes of death shift:

- **Stage 1:** infectious & parasitic diseases (plague, smallpox, cholera).
- **Stage 2:** receding pandemics — improved sanitation reduces infectious deaths.
- **Stage 3 & 4:** degenerative & "human-created" diseases dominate (heart disease, cancer, stroke, diabetes).
- **Stage 5 (proposed):** re-emergence of infectious diseases (antibiotic resistance, COVID-19, novel zoonotic diseases) and lifestyle diseases.

### Population Pyramids

A **population pyramid** is a bar chart showing the age-sex distribution of a population. The **shape** reveals the demographic stage:

- **Wide base, narrow top** (true pyramid) — Stage 2 country with high birth rates and short life expectancy. *Example:* Nigeria.
- **Narrowing base** (cone or bell) — Stage 3 country, fertility declining. *Example:* Mexico.
- **Column** (rectangular) — Stage 4 country, stable. *Example:* United States.
- **Inverted pyramid** (top-heavy) — Stage 5, aging population. *Example:* Japan, Italy.

The **dependency ratio** = (population under 15 + population over 64) ÷ working-age population × 100. High youth dependency strains schools and food supply; high elderly dependency strains pensions and healthcare.

### Malthus and Critics

In 1798 **Thomas Malthus** argued that population grows GEOMETRICALLY (1, 2, 4, 8...) while food supply grows ARITHMETICALLY (1, 2, 3, 4...) — leading inevitably to famine, disease, or war. Critics (including Ester Boserup) argue the opposite: population pressure drives technological innovation that EXPANDS food supply (the Green Revolution proved this). **Neo-Malthusians** worry about water, climate, and resource limits that technology may not be able to overcome.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Define **Crude Birth Rate (CBR)**, **Crude Death Rate (CDR)**, and **Total Fertility Rate (TFR)**. What TFR represents replacement level in a developed country, and why is it not exactly 2.0?`,
        solution: `- **Crude Birth Rate (CBR):** annual live births per 1,000 people in a population.
- **Crude Death Rate (CDR):** annual deaths per 1,000 people in a population.
- **Total Fertility Rate (TFR):** the average number of children a woman is expected to bear during her lifetime, given current age-specific fertility rates.

**Replacement-level TFR ≈ 2.1** in developed countries (slightly higher in less-developed ones).

It is not exactly 2.0 because:
1. Each couple needs 2 children to replace themselves (one for each parent).
2. The extra ~0.1 accounts for children who die BEFORE reaching reproductive age (infant and child mortality), and for the slight imbalance in the sex ratio at birth (slightly more boys than girls are born).

In countries with HIGH infant mortality, replacement level can be 2.5 or higher. In Niger or Afghanistan, even with falling fertility, the population continues to grow because TFR (~6) is well above replacement.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Describe each of the **five stages of the Demographic Transition Model (DTM)** in terms of birth rates, death rates, and population growth. Give a contemporary example country for stages 2 through 5.`,
        solution: `**Stage 1 — High stationary.** High CBR, high CDR, slow growth. Pre-industrial. NO country is in Stage 1 today.

**Stage 2 — Early expanding.** CDR drops sharply (sanitation, medicine, food supply); CBR remains high. RAPID growth. *Example:* Niger, Mali, Afghanistan.

**Stage 3 — Late expanding.** CBR begins to decline (urbanization, women's education, contraception). CDR low. Growth slows. *Example:* India, Mexico, Brazil.

**Stage 4 — Low stationary.** Both CBR and CDR low (~10 each). Stable population. *Example:* United States, France, China.

**Stage 5 (proposed) — Declining.** CBR FALLS BELOW CDR. Population shrinks unless immigration compensates. *Example:* Japan, Italy, Germany, South Korea.

The DTM was developed from the European experience and may not perfectly fit every country, but it captures the broad pattern of demographic change accompanying industrialization and modernization.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `A country has a Crude Birth Rate of 28 and a Crude Death Rate of 8. Calculate its **Rate of Natural Increase (RNI)** and its approximate **doubling time**. Which DTM stage is this country most likely in, and what social and economic conditions typically accompany this stage?`,
        solution: `**Step 1 — RNI calculation:**
$$\\text{RNI} = \\frac{\\text{CBR} - \\text{CDR}}{10} = \\frac{28 - 8}{10} = 2.0\\%$$

**Step 2 — Doubling time** (rule of 70):
$$\\text{Doubling time} \\approx \\frac{70}{\\text{RNI}} = \\frac{70}{2.0} = 35 \\text{ years}$$

**Step 3 — DTM stage:** A CBR of 28 is moderately high, and a CDR of 8 is low — this is classic **Stage 3 (late expanding)**. Death rates have fallen because of sanitation and medicine, but birth rates have only begun to decline.

**Typical accompanying conditions:**
- Active **urbanization** — people moving from rural areas to cities for industrial and service jobs.
- **Female education and workforce participation** beginning to rise, which is the strongest predictor of fertility decline.
- Spread of **contraception** and family-planning services.
- Decline in **agricultural employment** — children become an economic cost rather than a farm-labor asset.
- A "**youth bulge**" — large cohort of young adults that can drive economic growth (the "demographic dividend") but also create unemployment pressure if jobs do not appear.

*Real-world example:* Mexico in the 1980s–90s, India in the 2000s–10s, Indonesia today.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare and contrast a **Stage 2** population pyramid and a **Stage 5** population pyramid. What does each shape reveal about the country's current and future challenges?`,
        solution: `**Stage 2 pyramid — wide base, narrow top (true pyramid):**
- Each age cohort is smaller than the one below it because high fertility produces large young cohorts and high death rates thin out older cohorts.
- *Example:* Nigeria, Niger, Afghanistan.

**Current challenges:** schools overwhelmed by young students; food and water supply strained; high youth dependency ratio; unemployment among young adults if the economy cannot absorb them ("youth bulge"). High maternal and infant mortality.

**Future challenges:** if fertility remains high, exponential growth will multiply these pressures; if fertility falls quickly, the country may capture a "**demographic dividend**" of a large working-age population with fewer dependents.

**Stage 5 pyramid — top-heavy (inverted):**
- Each younger cohort is SMALLER than the one above it because fertility has fallen below replacement and people are living longer.
- *Example:* Japan, Italy, South Korea, Germany.

**Current challenges:** elderly-dependency ratio is high; pension and healthcare systems strained; shrinking workforce; declining tax base; rural villages emptying as young people migrate to cities.

**Future challenges:** the workforce will continue to shrink; immigration may be politically necessary but socially controversial; technology and automation will be needed to maintain productivity. Japan now has more adult diapers sold than baby diapers.

**Contrast in policy:** Stage 2 countries focus on family planning, women's education, and reducing infant mortality. Stage 5 countries pursue PRO-NATALIST policies (Hungary's tax breaks, France's family allowances, South Korea's cash bonuses) and consider expanded immigration.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `**Thomas Malthus** (1798) predicted that population growth would inevitably outstrip food supply, leading to famine, disease, and war. Evaluate Malthus's argument in light of the past 200 years of evidence. Why have **neo-Malthusians** revived parts of his thesis in the 21st century, and how do critics like **Ester Boserup** respond?`,
        solution: `**Malthus's original argument:** Population grows GEOMETRICALLY (1, 2, 4, 8, 16…) while food production grows ARITHMETICALLY (1, 2, 3, 4, 5…). Eventually population must outrun food, producing "positive checks" (famine, disease, war) and "preventive checks" (later marriage, abstinence) that drag population back to subsistence levels.

**Why Malthus was largely WRONG over the past 200 years:**
1. **Industrial Revolution** dramatically increased agricultural productivity through mechanization, fertilizers, and selective breeding.
2. **Green Revolution** (1940s–70s) introduced high-yield wheat and rice varieties, irrigation, and synthetic fertilizers — India and Mexico went from famine-prone to food-exporting nations.
3. **Demographic transition** — fertility fell on its own as countries developed, without the catastrophic "checks" Malthus predicted.
4. **Globalization of food markets** — places with food shortages can import; places with surpluses export.

**Ester Boserup's counter-argument (1965):** Population pressure DRIVES innovation. When land becomes scarce, farmers intensify — they invent new tools, plant more frequently, irrigate, terrace hillsides. Necessity is the mother of invention. Far from being a problem, population growth has historically STIMULATED agricultural progress.

**Why neo-Malthusians have revived the thesis:**
- **Climate change** threatens to reduce arable land, shift rainfall patterns, and stress water supplies in ways that may be hard for technology to overcome.
- **Aquifer depletion** (Ogallala in the U.S., aquifers under Beijing and Delhi) means that current irrigation is mining "fossil water" that will not be replenished.
- **Soil degradation, deforestation, and biodiversity loss** are reducing the long-term productive base.
- **Limits on synthetic fertilizers** — phosphorus (mined from finite deposits) may peak this century.
- The 2007–08 global food crisis showed how rapidly food prices can spike under speculative pressure.

**Modern synthesis:** Boserup was largely RIGHT about the past — innovation has so far stayed ahead of population. But neo-Malthusians warn that we cannot assume past trends continue indefinitely; ecological limits are real even if their timing is uncertain. The debate now centers on whether **technology + falling fertility** (the demographic transition has reduced predicted peak global population from earlier estimates of 11–12 billion to ~10 billion or less) can keep us within safe planetary boundaries.` },
    ],
    cards: [
      { front: 'Crude Birth Rate (CBR)', back: 'Annual live births per 1,000 people in a population. Niger ~46; Japan ~6.', lessonPart: 1 },
      { front: 'Crude Death Rate (CDR)', back: 'Annual deaths per 1,000 people. Counterintuitively, very young populations (Qatar) have low CDR while aging populations (Japan, Italy) have higher CDR.', lessonPart: 1 },
      { front: 'Rate of Natural Increase (RNI)', back: '(CBR − CDR) ÷ 10, expressed as %. Excludes migration. RNI of 1% doubles a population in ~70 years.', lessonPart: 1 },
      { front: 'Total Fertility Rate (TFR) — replacement level', back: 'Average number of children per woman over her lifetime. Replacement ≈ 2.1 in developed countries (the extra 0.1 accounts for childhood mortality and the slight male/female birth imbalance).', lessonPart: 1 },
      { front: 'Doubling time formula', back: 'Approximate doubling time (years) = 70 ÷ RNI(%). RNI of 2% → doubles in 35 years; RNI of 1% → doubles in 70 years.', lessonPart: 2 },
      { front: 'DTM Stage 2 — Early Expanding', back: 'CDR drops sharply (sanitation, medicine, food); CBR stays high. RAPID growth. Examples: Niger, Mali, Afghanistan.', lessonPart: 3 },
      { front: 'DTM Stage 4 vs Stage 5', back: 'Stage 4: CBR ≈ CDR ≈ 10, stable population (US, France). Stage 5: CBR falls BELOW CDR, population shrinks (Japan, Italy, S. Korea).', lessonPart: 3 },
      { front: 'Population pyramid shapes', back: 'Wide base / narrow top = Stage 2 (Nigeria). Narrowing base = Stage 3 (Mexico). Rectangular column = Stage 4 (US). Top-heavy/inverted = Stage 5 (Japan).', lessonPart: 4 },
      { front: 'Dependency ratio', back: '(Pop under 15 + pop over 64) ÷ working-age pop × 100. High youth dependency strains schools/food; high elderly dependency strains pensions/healthcare.', lessonPart: 4 },
      { front: 'Malthus vs Boserup', back: 'Malthus (1798): population grows geometrically, food arithmetically → famine. Boserup (1965): population pressure DRIVES agricultural innovation. Neo-Malthusians today worry about climate, water, and ecological limits.', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'hg-migration': {
    textContent: `## Migration

**Migration** is a permanent move to a new location. It reshapes both the origin and destination — economically, culturally, and politically. Geographers distinguish between **emigration** (leaving) and **immigration** (entering), and between **internal migration** (within a country) and **international migration** (across borders).

### Push and Pull Factors

**Ravenstein's Laws of Migration** (1885) and modern theory identify factors that PUSH people from origin and PULL them to destination:

- **Economic** — job opportunities, wages, poverty, unemployment. The single most common driver. Mexicans to the U.S., Filipinos to the Gulf, Eastern Europeans to Western Europe.
- **Political** — war, persecution, lack of freedom, dictatorship. Syrians fleeing civil war (post-2011); Afghans after the Taliban takeover (2021); Venezuelans fleeing Maduro\'s government.
- **Environmental** — drought, flood, hurricane, sea-level rise, desertification. Hurricane Katrina displaced ~1 million from the Gulf Coast; Pacific island nations face existential threats from rising seas.
- **Cultural** — religious or ethnic persecution; family reunification; pursuit of education. Jewish migration to Israel under the Law of Return; Rohingya from Myanmar to Bangladesh.

### Types of Migration

- **Voluntary migration** — by choice, usually for economic or lifestyle reasons.
- **Forced migration** — coerced by violence, slavery, or government action. The **Atlantic slave trade** forcibly transported ~12 million Africans to the Americas (1500s–1800s); the **Trail of Tears** (1830s) forced Cherokee and other Southeastern tribes from their homelands.
- **Internal migration** — within a country. Includes the U.S. **Great Migration** of African Americans from the rural South to Northern cities (~6 million, 1916–1970), the ongoing rural-to-urban migration in China, and seasonal labor migration.
- **Step migration** — moving in stages (rural village → small town → regional city → capital).
- **Chain migration** — migrants follow relatives and friends, creating immigrant clusters at the destination (Cubans in Miami, Vietnamese in Orange County, Somalis in Minneapolis).
- **Transhumance** — seasonal movement of livestock between summer and winter pastures (still practiced in the Alps, the Andes, and East African pastoral cultures).

### Refugees and Asylum

Under the 1951 Refugee Convention, a **refugee** is someone outside their country of origin who has a well-founded fear of persecution based on race, religion, nationality, political opinion, or membership in a particular social group.

- **Internally displaced persons (IDPs)** — forced from their homes but still inside their country (e.g., Syrians displaced within Syria). Currently ~70 million worldwide, more than refugees.
- **Asylum seekers** — people who have applied for refugee status but whose claim has not yet been decided.

The largest refugee-producing countries in the 2020s have been Syria, Ukraine, Afghanistan, South Sudan, and Myanmar. The largest hosting countries include Turkey, Iran, Pakistan, Uganda, and Germany.

### Migration Patterns and Effects

- **Brain drain** — emigration of highly educated workers from poorer countries (doctors, engineers, scientists). Roughly 1 in 9 doctors trained in sub-Saharan Africa now works in the OECD. Critics argue it strips developing countries of human capital; defenders point to **remittances** sent home.
- **Remittances** — money migrants send home. In 2022, low- and middle-income countries received over $620 billion in remittances — far more than foreign aid. For some countries (Tonga, Tajikistan, Lebanon), remittances exceed 25% of GDP.
- **Guest workers** — temporary labor migrants. Germany invited Turkish guest workers (Gastarbeiter) in the 1960s; the Gulf States employ millions of South Asian workers (UAE, Qatar, Saudi Arabia).
- **Counter-migration** — return migration when conditions change (Mexicans returning home after the 2008 U.S. recession; Brain GAIN as overseas Chinese and Indians return).

### Government Policy

Governments shape migration through:
- **Quotas** — annual numerical limits (the U.S. Immigration Act of 1924 set quotas favoring Northern Europeans; eliminated in 1965).
- **Selective admission** — point systems favoring skilled workers (Canada, Australia).
- **Family reunification** vs **employment-based** preferences.
- **Border enforcement** — walls, surveillance, deportation.
- **Refugee resettlement** — annual admissions ceilings.

The politics of migration have become increasingly contested in the 21st century, with debates over national identity, economic impact, security, and humanitarian obligation.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Define **push factor** and **pull factor**, and give two examples of each from contemporary international migration.`,
        solution: `- **Push factor:** A condition at the ORIGIN that drives a person to leave. *Examples:* civil war in Syria; gang violence in Honduras; lack of jobs in rural Mexico; political persecution in Venezuela; drought in the Sahel.

- **Pull factor:** A condition at the DESTINATION that attracts migrants. *Examples:* high wages in the United States or Germany; political freedom in Western democracies; family already established at the destination (chain migration); educational opportunity at universities; safety and rule of law.

Most migration is driven by a COMBINATION of push and pull factors. A Honduran migrant may be pushed by gang violence AND pulled by the prospect of joining family in Texas. A Filipino nurse may be pushed by limited career opportunities AND pulled by demand for healthcare workers in Saudi Arabia or Canada.

Geographers also distinguish **intervening obstacles** (deserts, oceans, hostile borders, language barriers) and **intervening opportunities** (a city closer than the original destination that offers jobs).` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Distinguish between a **refugee**, an **asylum seeker**, and an **internally displaced person (IDP)**.`,
        solution: `- **Refugee:** A person OUTSIDE their country of origin who has a well-founded fear of persecution based on race, religion, nationality, political opinion, or membership in a particular social group, and who has been formally recognized as such (1951 Refugee Convention). Refugees have crossed an international border. *Example:* a Syrian who fled to Turkey and was registered with UNHCR.

- **Asylum seeker:** A person who has applied for refugee status but whose claim has not yet been adjudicated. They may be recognized as refugees, granted lesser protection, or denied. *Example:* a Venezuelan who applies for asylum at the U.S. southern border.

- **Internally displaced person (IDP):** A person forced from their home but who remains INSIDE their own country. IDPs do not have international legal protection in the same way refugees do, because they have not crossed a border. *Example:* a Syrian who fled Aleppo for Damascus during the civil war; an Iraqi displaced from Mosul during the war against ISIS.

Globally, IDPs (~70+ million) outnumber refugees (~35 million). Together they make up the world\'s "forcibly displaced" population, which has reached record highs in the 2020s.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain **chain migration** and describe how it has shaped specific immigrant communities in the United States. Why does chain migration produce **clustering** at the destination?`,
        solution: `**Chain migration** occurs when migrants from a particular village, region, or ethnic group follow EARLIER migrants from the same place — using their relatives and friends as a network for information, lodging, jobs, and emotional support.

**How it works:**
1. A few "**pioneer migrants**" arrive at a destination (often by chance or by being drawn by a specific employer).
2. They write home with information about jobs, housing, and conditions.
3. They sponsor relatives, lend money, and provide a place to stay during the new arrivals\' first weeks.
4. Over time, a **cluster** forms at the destination — an "ethnic enclave" — that further attracts new migrants from the same source area.

**Why this produces clustering:**
- **Information costs** are lower in a cluster — finding an apartment, a job, or a doctor is easier when neighbors share your language and experiences.
- **Cultural institutions** (churches, mosques, grocery stores, restaurants, language schools) require a critical mass of customers.
- **Trust networks** — early migrants vouch for new ones with employers and landlords.
- **Mutual aid** — informal lending circles, child care, language interpretation.

**U.S. examples:**
- **Cubans in Miami** — initial waves after the 1959 revolution established a community that drew successive Cuban arrivals; now the largest Cuban population outside Cuba.
- **Vietnamese in Orange County, CA ("Little Saigon")** — fall of Saigon (1975) brought initial refugees; chain migration built one of the largest Vietnamese diasporas.
- **Somalis in Minneapolis–St. Paul** — refugee resettlement in the 1990s seeded a community that continues to attract Somali secondary migration.
- **Hmong in Wisconsin and Minnesota** — also refugee-origin clusters.
- **Bangladeshis in NYC, Mexicans in Chicago, Salvadorans in DC area** — all showing the same pattern.

Chain migration is the rule, not the exception, in immigrant settlement worldwide. It explains why immigrant communities are so geographically uneven — concentrated in specific cities and neighborhoods rather than evenly distributed.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain the **U.S. Great Migration** (~1916–1970): who moved, why, and what were its long-term effects on American demography, politics, and culture?`,
        solution: `**The Great Migration** was the relocation of ~6 MILLION African Americans from the rural South to cities in the Northeast, Midwest, and West between roughly 1916 and 1970. It is one of the largest internal migrations in U.S. history and reshaped the nation.

**Who moved:** African Americans, predominantly from the rural Deep South — Mississippi, Alabama, Georgia, Louisiana, Texas, the Carolinas. Often young adults seeking work, with extended families following through chain migration.

**Why they moved (push factors at origin):**
- **Jim Crow segregation** — legalized racial discrimination in the South.
- **Lynching and racial violence** — especially intense from the 1890s through the 1930s.
- **Sharecropping debt peonage** — economic exploitation of Black agricultural labor.
- **Boll weevil infestation** (1910s–1920s) — devastated cotton agriculture.

**Pull factors at destination:**
- **WWI and WWII labor shortages** — Northern factories needed workers as European immigration was cut off (WWI) and as wartime production surged.
- **Higher wages** — industrial jobs in Detroit (auto), Chicago (meatpacking, steel), Pittsburgh (steel), New York (garment), Cleveland, Philadelphia paid multiples of what Southern agricultural labor paid.
- **Voting rights** — Black migrants could vote in the North.
- **Better schools and (relatively) less violent racial conditions.**

**Long-term effects:**
1. **Demographic transformation:** In 1900, ~90% of Black Americans lived in the South; by 1970, roughly half lived outside it. Cities like Detroit, Chicago, and Newark became majority Black or near-majority Black by the 1970s–80s.

2. **Political realignment:** Black voters in Northern cities became a key Democratic constituency, especially after FDR\'s New Deal. This contributed to the eventual realignment of Southern white voters toward the Republican Party in the 1960s–70s.

3. **Cultural flowering:** the **Harlem Renaissance** (1920s), the rise of **Chicago blues**, **Detroit Motown**, and the foundations of jazz, R&B, and hip-hop — all rooted in Northern Black urban communities.

4. **Civil Rights Movement** drew strength from Northern political power and media coverage even as it focused on Southern segregation.

5. **Urban housing patterns:** redlining, restrictive covenants, and racial segregation shaped Northern cities into highly segregated metro areas — a legacy that persists today.

6. **Reverse migration since 1970** — beginning in the 1970s and accelerating since, many African Americans (especially middle-class professionals) have moved BACK to the South, particularly to Atlanta, Houston, Charlotte, and Dallas. This is sometimes called the **New Great Migration**.

The Great Migration is a textbook case of how internal migration can permanently restructure a nation\'s demography, economy, politics, and culture.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Evaluate the costs and benefits of **brain drain** for both the sending country and the receiving country. Why has the term "brain CIRCULATION" become more common than "brain drain" in recent scholarship?`,
        solution: `**Brain drain** = the emigration of highly educated, highly skilled workers (doctors, engineers, scientists, IT specialists, academics) from less-developed countries to wealthier ones.

**Costs to SENDING country:**
- Loss of human capital trained at PUBLIC EXPENSE — countries effectively subsidize the labor markets of richer nations.
- Healthcare crises: roughly 1 in 9 doctors trained in sub-Saharan Africa works in the OECD. Malawi has trained hundreds of doctors; many practice in the UK or U.S. Local hospitals are understaffed.
- "**Care drain**" — emigration of nurses, teachers, and caregivers strains social services.
- Reduced innovation capacity, fewer university teachers, weakened entrepreneurial class.

**Benefits to SENDING country:**
- **Remittances** — migrant workers send back over $620 billion annually to low- and middle-income countries (more than total foreign aid). For some economies (Tonga, Tajikistan, Honduras, Lebanon, Nepal), remittances exceed 20–30% of GDP.
- **Knowledge transfer** — migrants share expertise with home-country networks; many start businesses or invest in their countries of origin.
- **Diaspora networks** — overseas migrants become trade and investment links (the Indian and Chinese diasporas are major facilitators of foreign investment in their home countries).
- **"Brain gain on return"** — when migrants return after years abroad, they bring skills, capital, and contacts.

**Costs and benefits to RECEIVING country:**
- **Benefits:** fills labor gaps in healthcare, IT, science; immigrants founded ~25% of new U.S. businesses (Google, Tesla, Pfizer, Moderna all have immigrant founders or co-founders); mitigates the Stage 5 demographic decline.
- **Costs:** wage suppression in some sectors; political backlash when immigration is perceived as too rapid; integration challenges.

**Why "brain CIRCULATION" rather than "brain drain":**
The traditional brain-drain model treated migration as ONE-WAY and PERMANENT. Recent decades have shown that migration is increasingly CIRCULAR:
- Many migrants RETURN to their home countries (especially Indians and Chinese coming back from Silicon Valley to Bangalore and Shenzhen).
- Migrants maintain TRANSNATIONAL ties — investing in, advising, and funding home-country institutions while abroad.
- Some operate "ASTRONAUT" lifestyles, splitting time between two countries (Taiwanese-American executives between San Francisco and Taipei).
- TECHNOLOGY (video conferencing, cheap travel) has made geographic separation less of a barrier.

The "brain circulation" framing recognizes that the costs of migration to sending countries are real, but so are the long-term benefits — provided that home countries develop the institutions and economic conditions to attract their diaspora back. India\'s IT sector, China\'s tech industry, and Israel\'s startup ecosystem all benefited enormously from returning émigrés.

**Bottom line:** Brain drain still hurts countries that cannot retain or attract back their émigrés (much of sub-Saharan Africa, Haiti). Brain circulation is the optimistic outcome for countries that succeed in capturing the second half of the cycle.` },
    ],
    cards: [
      { front: 'Push factor vs pull factor', back: 'Push = condition at origin driving people away (war, poverty, persecution). Pull = condition at destination attracting people (jobs, freedom, family). Most migration involves both.', lessonPart: 1 },
      { front: 'Refugee (1951 definition)', back: 'A person outside their country of origin with a well-founded fear of persecution based on race, religion, nationality, political opinion, or membership in a particular social group.', lessonPart: 2 },
      { front: 'IDP (internally displaced person)', back: 'Forced from home but still inside their own country (e.g., Syrians displaced within Syria). ~70+ million worldwide — MORE than refugees. No international legal protection equivalent to refugee status.', lessonPart: 2 },
      { front: 'Voluntary vs forced migration', back: 'Voluntary = by choice (usually economic). Forced = coerced by violence, slavery, or government action. Examples of forced: Atlantic slave trade (~12 million), Trail of Tears (1830s).', lessonPart: 2 },
      { front: 'Chain migration', back: 'Migrants follow earlier migrants from the same village/group, creating ethnic clusters at the destination (Cubans in Miami, Vietnamese in Orange County, Somalis in Minneapolis).', lessonPart: 3 },
      { front: 'Step migration', back: 'Migration in stages: rural village → small town → regional city → capital city → international destination. Common in developing-country urbanization.', lessonPart: 3 },
      { front: 'Transhumance', back: 'Seasonal migration of livestock and herders between summer and winter pastures. Still practiced in the Alps, the Andes, and East African pastoral cultures.', lessonPart: 3 },
      { front: 'U.S. Great Migration', back: '~6 million African Americans moved from the rural South to Northern, Midwestern, and Western cities (1916–1970). Driven by Jim Crow, lynching, and economic exploitation; pulled by industrial jobs and voting rights.', lessonPart: 4 },
      { front: 'Brain drain vs brain circulation', back: 'Brain drain: emigration of skilled workers (doctors, engineers) from poor to rich countries. Brain CIRCULATION: modern recognition that migration is often circular — return migration, transnational ties, and remittances offset losses.', lessonPart: 5 },
      { front: 'Remittances', back: 'Money migrants send home to families. Over $620 billion/year to low- and middle-income countries — far more than foreign aid. Exceeds 20–30% of GDP in Tonga, Tajikistan, Lebanon, Nepal.', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'hg-culture-diffusion': {
    textContent: `## Cultural Diffusion

**Cultural diffusion** is the process by which cultural elements — ideas, technologies, languages, religions, foods, music — spread across space from their place of origin to other regions. Few cultural traits arose in only one place; most of what we think of as "ours" was borrowed and adapted.

### Hearths of Culture

A **culture hearth** is a place where a cultural trait (or a whole civilization) ORIGINATES before spreading. The classic ancient hearths include:

- **Mesopotamia** (Tigris–Euphrates) — writing (cuneiform), the wheel, irrigation, codified law (Hammurabi).
- **Nile Valley** — pyramids, hieroglyphics, monumental architecture.
- **Indus Valley** (Harappa, Mohenjo-Daro) — urban planning, drainage systems.
- **Huang He / Yellow River** — early Chinese civilization, silk, paper, gunpowder.
- **Mesoamerica** (Olmec, Maya, Aztec) — corn (maize), zero in mathematics, sophisticated calendars.
- **Andes** (Norte Chico, Inca) — terrace agriculture, potatoes, llama domestication.

Modern cultural hearths continue to emerge — **Hollywood** for film, **Silicon Valley** for digital technology, **Bollywood** for South Asian film, **K-pop** in Seoul, **Nigerian Nollywood** for African cinema.

### Types of Diffusion

**1. Relocation diffusion** — the cultural trait moves with PEOPLE who migrate. The trait may largely DISAPPEAR from its place of origin if the migrants take all the carriers.
- *Examples:* Spanish language brought to the Americas; African religions and music brought to the Caribbean and Brazil; Chinese cuisine carried by the Chinese diaspora to virtually every country.

**2. Expansion diffusion** — the trait spreads OUTWARD from a source while remaining strong AT the source. Three subtypes:

- **Contagious diffusion** — spreads through DIRECT CONTACT, affecting nearly everyone in proximity. Like an infectious disease spreading person-to-person, or a viral video sweeping social media. *Examples:* Islam spread through Arabia in the 7th century; the COVID-19 virus globally; TikTok dance trends.

- **Hierarchical diffusion** — spreads through a HIERARCHY of nodes (large cities → smaller cities → towns → rural areas), or from leaders to followers. *Examples:* fashion trends originating in Paris/Milan/New York and spreading down to provincial cities; hip-hop spreading from New York to Los Angeles to mid-sized cities to suburban America; AIDS spread first in major U.S. cities before reaching smaller towns; high-end smartphones reaching wealthy markets first before becoming universal.

- **Stimulus diffusion** — the underlying IDEA spreads but is MODIFIED to fit local conditions. The core concept survives; the specific form changes.
  - *McDonald\'s* in India serves a McAloo Tikki (potato burger) and no beef out of respect for Hindu practice.
  - *Korean BBQ* in the U.S. has been adapted with broader American palates.
  - *Buddhism* moved from India to East Asia and absorbed local practices, becoming Chan/Zen in China and Japan, very different from Theravada Buddhism in Southeast Asia.

### Distance Decay and Time-Space Convergence

**Distance decay** means cultural diffusion WEAKENS with distance. McDonald\'s saturated nearby U.S. cities before spreading to Asia; Hollywood films are dominant in nearby Latin America before reaching distant markets.

**Time-space convergence** is the SHRINKING of relative distance through transportation and communication improvements. Diffusion that once took centuries (the spread of Christianity from the Mediterranean to Northern Europe took 700+ years) now takes months or days (a TikTok dance, a meme).

### Globalization and Cultural Convergence

The modern era is characterized by extremely RAPID diffusion driven by:
- The internet and social media (Instagram, TikTok, YouTube, Twitter/X).
- Global brands (Coca-Cola, Apple, Nike, Disney, McDonald\'s, Starbucks).
- Mass tourism and international migration.
- English as a global lingua franca.

This produces **cultural convergence** — the homogenization of certain cultural traits worldwide (similar shopping malls, similar fast food, similar music charts). Critics decry this as **cultural imperialism** — the imposition of dominant (often Western, often American) culture on others.

But globalization also produces **cultural divergence** and **glocalization** — local adaptation that makes global trends fit local taste. K-pop took American pop conventions and reshaped them through Korean training systems and aesthetics; reggaeton blends Caribbean, African, and American influences; Mexican pop draws on global trends while remaining distinctively Mexican.

### Folk vs Popular Culture

- **Folk culture** — traditional practices passed down through generations, often spatially CLUSTERED in particular regions, slow to change. *Examples:* Amish quilting, traditional Hmong storytelling, regional Italian dialects, indigenous foodways.
- **Popular (or pop) culture** — widely shared, rapidly changing, often industrially produced and marketed. *Examples:* mainstream pop music, fast food, professional sports, mass-market fashion.

Pop culture spreads primarily through HIERARCHICAL DIFFUSION (industry → consumers worldwide); folk culture spreads primarily through RELOCATION DIFFUSION (carried by migrants).

The distinction is increasingly blurred: pop culture commercializes folk elements (yoga, taco trucks, K-pop), and folk traditions adapt to mass media.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Distinguish between **relocation diffusion** and **expansion diffusion**, and give an example of each.`,
        solution: `- **Relocation diffusion:** The cultural trait moves WITH PEOPLE who migrate. The trait may diminish or disappear at its original source as carriers leave. *Examples:*
  - Spanish language carried from Spain to the Americas by Spanish colonizers.
  - African religious traditions and rhythms carried to the Caribbean and Brazil by enslaved Africans.
  - Buddhism carried from India to China by traveling monks and merchants along the Silk Road.
  - Chinese cuisine carried by the Chinese diaspora to almost every country on earth.

- **Expansion diffusion:** The trait spreads OUTWARD from a source while the source RETAINS it. The carriers do not have to migrate; the idea spreads through communication, contact, or hierarchy. *Examples:*
  - Islam spreading through Arabia and beyond from its 7th-century origin in Mecca.
  - Christianity spreading from its Mediterranean origin throughout Europe over centuries.
  - The internet and social-media culture spreading from Silicon Valley worldwide.
  - English language spreading globally as a lingua franca.

The KEY DIFFERENCE: in relocation diffusion, the carriers physically move; in expansion diffusion, the carriers stay put while the idea travels.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Identify the **three subtypes of expansion diffusion** and give a clear example of each.`,
        solution: `**1. Contagious diffusion** — spreads through DIRECT CONTACT, affecting nearly everyone in proximity. Modeled on infectious disease.
- *Examples:* COVID-19 spreading person-to-person; viral TikTok dance trends sweeping middle schools; Islam spreading through the Arabian Peninsula in the 7th century where almost everyone in proximity converted.

**2. Hierarchical diffusion** — spreads through a HIERARCHY of nodes (large cities → smaller cities → towns), or from leaders to followers.
- *Examples:* fashion trends originating in Paris/Milan/New York and rippling outward to provincial cities; hip-hop spreading from New York to Los Angeles to smaller markets to suburban America; high-end smartphones reaching wealthy nations first; HIV/AIDS spreading first in major U.S. cities before reaching smaller communities.

**3. Stimulus diffusion** — the UNDERLYING IDEA spreads but is MODIFIED to fit local conditions. The core concept survives; the specific form is adapted.
- *Examples:* McDonald\'s in India serves the McAloo Tikki (potato burger) and no beef, respecting Hindu practice; Buddhism reaching China and developing into Chan/Zen, which differs from Indian Theravada; Korean BBQ adapted for American palates; Christianity in Latin America blending with indigenous practices (Day of the Dead, Virgin of Guadalupe).

The three subtypes can OVERLAP in any given case. McDonald\'s globally has elements of hierarchical (large cities first), contagious (everyone in proximity gets a McDonald\'s), and stimulus diffusion (menu adapted by country) all at once.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `What is a **culture hearth**? Identify three ancient culture hearths and one modern culture hearth, and describe a major innovation that diffused outward from each.`,
        solution: `A **culture hearth** is a place where a particular cultural trait, technology, religion, or whole civilization ORIGINATES before diffusing to other regions. Hearths are typically associated with sustained agricultural surplus, dense populations, urban centers, and complex social organization.

**Three ancient culture hearths:**

1. **Mesopotamia** (Tigris–Euphrates rivers, modern Iraq):
   - Innovations: cuneiform writing (~3200 BCE), the wheel, irrigation agriculture, codified law (Code of Hammurabi), mathematical and astronomical knowledge.
   - Diffused via trade and conquest throughout the Near East and beyond.

2. **Mesoamerica** (modern Mexico and Central America — Olmec, Maya, Aztec):
   - Innovations: domestication of MAIZE (corn), the concept of ZERO in mathematics, sophisticated calendars (Maya Long Count), monumental architecture, chocolate.
   - Maize diffused throughout the Americas and after 1492 became a global staple crop.

3. **Huang He / Yellow River Valley** (China):
   - Innovations: SILK production, PAPER (~100 CE), GUNPOWDER (~9th century), the magnetic compass, porcelain, woodblock printing.
   - Diffused via the Silk Road to the Middle East and Europe over many centuries.

**One modern culture hearth — Silicon Valley** (San Francisco Bay Area, California):
- Innovations: the personal computer, the modern internet, smartphones, social media, search engines, cloud computing, electric vehicles (Tesla), space-launch industry (SpaceX).
- Diffuses globally within months or years through global supply chains, tech-industry hiring, and venture-capital networks.

Other plausible answers include: Nile Valley (pyramids, hieroglyphics, monumental architecture); Indus Valley (urban planning, drainage); Andes (potato, terrace agriculture); Hollywood (film); Bollywood (South Asian film); Seoul (K-pop); Nashville (country music); Detroit (automobile mass production, Motown).` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare **folk culture** and **popular culture**. How does each typically spread (which type of diffusion), and why are they becoming harder to separate in the 21st century?`,
        solution: `**Folk culture:**
- Traditional practices, beliefs, foods, music, crafts passed down through generations.
- Spatially CLUSTERED in particular regions, communities, or ethnic groups.
- Slow to change; often tied to local environment, religion, and language.
- Usually NOT commercially produced.
- *Examples:* Amish quilting, Appalachian bluegrass, Hmong story cloths, Navajo weaving, traditional Italian regional cuisines, Andean weaving and pan-pipe music, folk medicine practices.

**Spreads primarily through RELOCATION DIFFUSION:** when members of a folk culture migrate, they carry their traditions with them — Hmong textiles in Minnesota, Amish communities expanding from Pennsylvania to Ohio, Indiana, Wisconsin.

**Popular (pop) culture:**
- Widely shared, RAPIDLY changing, INDUSTRIALLY produced and globally marketed.
- Spatially WIDESPREAD — often spans the entire developed world or globe.
- Mediated through mass media — TV, film, recorded music, internet.
- Driven by commerce, advertising, and corporate brands.
- *Examples:* Top-40 pop music, Hollywood films, fast-food franchises, professional sports leagues, mass-market clothing brands, video games, social media trends.

**Spreads primarily through HIERARCHICAL DIFFUSION:** from corporate "industry" centers (Hollywood, Silicon Valley, Seoul, London) to global cities, then to smaller cities, then to small towns. Increasingly also CONTAGIOUS via social media (a TikTok trend can saturate a generation in days).

**Why the distinction is BLURRING in the 21st century:**

1. **Commercialization of folk elements:** Yoga went from a Hindu spiritual practice to a billion-dollar global wellness industry. Tacos, sushi, ramen, and Thai food are now international fast-food categories. Folk crafts (Mexican textiles, Andean weaving) sold worldwide via Etsy and tourist markets.

2. **Folk traditions adapting to mass media:** Bluegrass musicians upload to YouTube; traditional Hmong storytellers create podcasts; Indigenous artists use Instagram to reach global audiences.

3. **Pop culture borrowing from folk:** K-pop incorporates traditional Korean instruments; Hollywood films draw on indigenous mythology; Taylor Swift\'s "folklore" album branded itself with folk aesthetics.

4. **"GLOCALIZATION":** McDonald\'s, Starbucks, and other global brands ADAPT their menus locally — global pop with folk elements.

5. **Cultural appropriation debates:** the line between respectful borrowing and exploitation becomes a political and ethical issue precisely because folk and pop have collided.

The contemporary cultural landscape is best understood not as folk-vs-pop but as a CONTINUUM with hybrid forms (e.g., "Americana" music, "fusion" cuisines, "neo-traditional" crafts) occupying the middle ground.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Critics describe globalization as producing **cultural homogenization** or even **cultural imperialism**. Defenders argue that **glocalization** preserves local distinctiveness. Evaluate both views with specific examples. What is the actual evidence in the 21st century?`,
        solution: `**The cultural-homogenization / cultural-imperialism critique:**

Critics (Naomi Klein, Benjamin Barber, Edward Said) argue that globalization spreads a DOMINANT (mostly Western, mostly American) culture that displaces local traditions. Evidence:

- **Brand uniformity:** McDonald\'s in 100+ countries; Starbucks in 80+; Coca-Cola, Nike, Apple effectively universal. Walking through shopping malls in Bangkok, Buenos Aires, and Berlin yields a similar visual experience.
- **English dominance:** ~1.5 billion speakers; the lingua franca of business, science, aviation, and the internet. Of ~7,000 living languages, ~40% are endangered, partly under pressure from global languages.
- **Hollywood\'s share** of global box office; American TV streamed via Netflix worldwide.
- **"McDonaldization"** (sociologist George Ritzer): rationalization, standardization, and predictability replacing distinctive local experiences.
- **Cultural imperialism critique:** Western culture comes attached to Western advertising and consumerism, which reshape values (individualism, materialism) in ways that displace traditional ones.

**The glocalization / cultural-divergence defense:**

Defenders (Roland Robertson, Pankaj Ghemawat, Tyler Cowen) argue that LOCAL ADAPTATION is far more powerful than uniformity:

- **McDonald\'s adapts** in every market: McAloo Tikki in India (no beef), Teriyaki Burger in Japan, McSpaghetti in the Philippines, Croque McDo in France. The Big Mac is more variable globally than its branding suggests.
- **K-pop and Bollywood** are MASSIVE non-Western pop industries. K-pop (BTS, BLACKPINK) tops American charts; India produces more films per year than Hollywood.
- **Reggaeton, Afrobeats, Latin pop** have become global powerhouses — culture flowing from the periphery to the center.
- **Local cuisines REVIVED:** the slow-food movement, regional cuisines becoming global trends (Korean food, Peruvian food, Levantine food). NOT homogenization.
- **Religious and linguistic vitality:** Pentecostal Christianity is growing fastest in the Global South in distinctive forms; Spanish is gaining speakers (~600 million) faster than English in many places.
- **"Glocalization":** global trends adapted to fit local conditions. K-pop is American pop conventions reshaped by Korean training systems and aesthetics. Mexican pop draws on global trends while remaining distinctively Mexican. Japanese baseball, Indian cricket — sports were globalized but reshaped locally.

**Actual evidence in the 21st century:**

The balance leans toward **GLOCALIZATION over homogenization**:
- Cultural production is becoming MORE multipolar. A decade ago, U.S. media dominated Latin American screens; today, Mexican, Brazilian, and Argentine streaming series compete.
- Non-English content is the FASTEST-GROWING segment on Netflix (Squid Game, Money Heist, Lupin all crossing over to global audiences).
- Local fast-food brands (Jollibee in the Philippines, Bambi Snacks in Mexico) compete successfully with global chains.
- Smaller languages (Welsh, Catalan, Hawaiian, Māori, Hebrew, Quechua) are being REVIVED through technology and policy, even as some indigenous languages disappear.

**However, the homogenization critique is not wrong about everything:**
- A few thousand languages WILL be lost this century — irreplaceable cultural loss.
- Global brands\' dominance in advertising and infrastructure is real.
- Western consumerist values DO travel with the brands and shape aspirations.
- Regional cuisines and crafts get squeezed by industrially produced alternatives.

**Synthesis:** Globalization produces BOTH convergence and divergence simultaneously. Some practices (smartphones, English in business, streaming services) become global; others (cuisines, music genres, fashion subcultures) PROLIFERATE in distinctive local forms. The 21st-century reality is more textured than either the homogenization critique or the glocalization defense alone captures — a global cultural ecosystem that is more interconnected AND more diverse than ever before.` },
    ],
    cards: [
      { front: 'Culture hearth', back: 'A place where a cultural trait, religion, technology, or civilization originates before spreading. Ancient: Mesopotamia, Nile, Indus, Huang He, Mesoamerica, Andes. Modern: Silicon Valley, Hollywood, Seoul (K-pop).', lessonPart: 1 },
      { front: 'Relocation diffusion', back: 'Cultural trait moves with people who migrate. The trait may fade at origin. Examples: Spanish to the Americas; African religions/music to the Caribbean; Chinese cuisine via the diaspora.', lessonPart: 2 },
      { front: 'Expansion diffusion (3 subtypes)', back: 'Trait spreads outward while source retains it. Three subtypes: Contagious (direct contact), Hierarchical (through nodes), Stimulus (idea adapted to local conditions).', lessonPart: 2 },
      { front: 'Contagious diffusion', back: 'Spreads through direct contact, affecting nearly everyone in proximity. Examples: infectious disease (COVID), viral TikTok trends, Islam spreading through 7th-century Arabia.', lessonPart: 2 },
      { front: 'Hierarchical diffusion', back: 'Spreads through a hierarchy of nodes — large cities → smaller cities → towns. Examples: fashion from Paris/Milan; hip-hop from NYC to LA to smaller cities; smartphones to wealthy markets first.', lessonPart: 2 },
      { front: 'Stimulus diffusion', back: 'Underlying idea spreads but is modified for local conditions. Examples: McDonald\'s McAloo Tikki in India; Buddhism becoming Chan/Zen in China and Japan; Korean BBQ adapted for U.S. taste.', lessonPart: 2 },
      { front: 'Distance decay (cultural)', back: 'Cultural diffusion weakens with distance. McDonald\'s saturated nearby U.S. cities before going to Asia; Hollywood is more dominant in Latin America than in distant markets.', lessonPart: 3 },
      { front: 'Time-space convergence', back: 'Shrinking of relative distance through transportation and communication improvements. Diffusion that once took centuries (Christianity to Northern Europe ~700 years) now takes days (TikTok trends).', lessonPart: 3 },
      { front: 'Folk vs popular culture', back: 'Folk = traditional, clustered, slow-changing (Amish quilts, Hmong storytelling); spreads via relocation. Popular = industrial, widespread, fast-changing (pop music, fast food); spreads via hierarchical diffusion.', lessonPart: 4 },
      { front: 'Glocalization vs cultural imperialism', back: 'Cultural imperialism: global brands and English homogenize local cultures. Glocalization: global trends are adapted locally (K-pop, McDonald\'s menus by country, regional cuisines reviving). Reality is BOTH simultaneously.', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'hg-language-religion': {
    textContent: `## Language and Religion

Language and religion are the two most powerful expressions of cultural identity. They shape how people think, what communities they belong to, where they live, and how they interact with others. Geographers study where languages and religions are spoken, how they spread, and where they come into conflict.

### Language Families and Distribution

A **language family** is a group of related languages that descended from a common ancestor (a **proto-language**). The world\'s major language families:

- **Indo-European** — the largest family, spoken by ~3 billion people. Includes:
  - *Germanic* branch (English, German, Dutch, Swedish).
  - *Romance* branch (Spanish, Portuguese, French, Italian, Romanian) — descended from Latin.
  - *Slavic* branch (Russian, Polish, Czech, Ukrainian, Serbian).
  - *Indo-Iranian* branch (Hindi, Urdu, Bengali, Persian, Punjabi).
- **Sino-Tibetan** — Mandarin Chinese (~1.1 billion native speakers), Cantonese, Tibetan, Burmese.
- **Afro-Asiatic** — Arabic, Hebrew, Amharic, Hausa.
- **Niger-Congo** — Bantu languages of central and southern Africa (Swahili, Zulu, Yoruba, Igbo).
- **Austronesian** — Malay, Indonesian, Tagalog, Hawaiian, Maori.
- **Dravidian** — Tamil, Telugu, Kannada, Malayalam (southern India).
- **Japonic** (Japanese), **Koreanic** (Korean), **Turkic** (Turkish, Uzbek, Kazakh).

**Pidgin and creole languages** form when speakers of different languages must communicate — a pidgin is a simplified contact language; a **creole** is a pidgin that has become a community\'s native language. Examples: Haitian Creole (French-based), Tok Pisin (English-based, Papua New Guinea), Bislama (Vanuatu).

**Lingua francas** are languages used widely as a common tongue between groups with different native languages. **English** is the dominant global lingua franca; **Swahili** in East Africa; **Hindi-Urdu** in much of South Asia; **French** in West Africa; **Mandarin** in China and increasingly in East Asia.

**Endangered and dying languages:** roughly 40% of the world\'s ~7,000 languages are endangered. A language dies on average every two weeks. Indigenous and minority languages are most at risk; revitalization movements (Hawaiian, Welsh, Māori, Hebrew) show that decline can sometimes be reversed.

### Universalizing vs Ethnic Religions

Geographers distinguish two basic types of religion:

**Universalizing religions** — actively seek converts; have a recognized founder; appeal to all people regardless of background; have spread widely.
- **Christianity** (~2.4 billion followers; largest religion). Founded by Jesus of Nazareth (~30 CE); diffused via Roman Empire, missionaries, colonial expansion. Branches: Roman Catholicism (~1.3 billion), Protestantism (~900 million), Eastern Orthodoxy (~260 million).
- **Islam** (~1.9 billion; fastest-growing religion). Founded by Muhammad in Arabia (610 CE); diffused via military conquest, trade, and missionaries. Branches: Sunni (~85%), Shia (~15%, concentrated in Iran, Iraq, Lebanon, Bahrain).
- **Buddhism** (~500 million). Founded by Siddhartha Gautama in India (~500 BCE); diffused into East and Southeast Asia. Branches: Theravada (Sri Lanka, Thailand, Myanmar), Mahayana (China, Korea, Japan, Vietnam), Vajrayana (Tibet, Mongolia).

**Ethnic religions** — closely tied to a particular ethnic group, place, or culture; do not actively seek converts; identity is largely inherited.
- **Hinduism** (~1.2 billion) — concentrated in India and Nepal; world\'s third-largest religion. Includes diverse traditions; key concepts: dharma, karma, samsara, moksha; major deities Brahma, Vishnu, Shiva.
- **Judaism** (~15 million) — religion of the Jewish people; concentrated in Israel and the U.S. Includes Orthodox, Conservative, Reform, and other movements.
- **Sikhism** (~30 million) — primarily in Punjab; founded by Guru Nanak (~1500 CE); often considered "ethnic" though it accepts converts.
- **Shinto** — indigenous religion of Japan; coexists with Buddhism.
- **Indigenous religions** — countless local traditions among indigenous peoples worldwide.

### Sacred Sites and Cultural Landscapes

Religions create distinctive **cultural landscapes**:

- **Mecca** (Islam) — Muhammad\'s birthplace; site of the Kaaba; destination of the **Hajj** pilgrimage required of able Muslims at least once.
- **Jerusalem** — sacred to Judaism (Western Wall, Temple Mount), Christianity (Church of the Holy Sepulchre), AND Islam (Al-Aqsa Mosque, Dome of the Rock). Source of long-standing conflict.
- **Bodh Gaya** (Buddhism) — where the Buddha attained enlightenment.
- **Varanasi** (Hinduism) — sacred city on the Ganges; Hindus seek to die or be cremated there.
- **Vatican City** — center of Roman Catholicism; world\'s smallest sovereign state.

Architectural landmarks include cathedrals, mosques (with minarets), pagodas, temples, synagogues, and Hindu mandirs. **Cemeteries and burial practices** vary enormously: Christians and Muslims bury their dead; Hindus cremate; Tibetan Buddhists practice "sky burial"; Zoroastrians historically used "towers of silence."

### Religious Conflict and Geography

Religious differences contribute to many of the world\'s persistent conflicts:
- **Sunni-Shia** divisions in the Middle East (Saudi Arabia vs. Iran; tensions in Iraq, Yemen, Bahrain, Lebanon).
- **Hindu-Muslim** tensions in South Asia (1947 Partition of India and Pakistan; ongoing tensions over Kashmir).
- **Israeli-Palestinian** conflict, with strong religious components for both sides.
- **Northern Ireland** ("The Troubles") — Catholic vs Protestant communities, 1969–1998.
- **Buddhist-Muslim** tensions in Myanmar (Rohingya crisis).
- **Christian-Muslim** tensions in parts of Nigeria and the Sahel.

Religious geography also shapes peaceful but distinctive communities — the **Bible Belt** of the U.S. South; the **Mormon culture region** centered on Utah; the **Latin Mass Catholic** revival regions; predominantly Buddhist Southeast Asia; the Islamic crescent stretching from Morocco to Indonesia.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Define **language family**. Identify the world\'s largest language family and three of its branches, with example languages from each.`,
        solution: `A **language family** is a group of related languages that descended from a common ancestor language (a "proto-language") through the gradual processes of historical change, divergence, and migration. Linguists identify family membership through systematic correspondences in vocabulary, grammar, and sound patterns.

The world\'s **largest language family** is **Indo-European**, spoken by approximately 3 BILLION people across Europe, the Americas, and large parts of Asia. It includes hundreds of languages descended from a hypothesized "Proto-Indo-European" spoken roughly 5,000–6,000 years ago, possibly in the Eurasian steppe.

**Three Indo-European branches with example languages:**

1. **Germanic branch** — descended from a Proto-Germanic ancestor. Includes:
   - English (~1.5 billion total speakers, including L2)
   - German (~135 million)
   - Dutch (~30 million)
   - Swedish, Norwegian, Danish, Icelandic
   - Yiddish

2. **Romance branch** — descended from VULGAR LATIN, the spoken Latin of the Roman Empire. Includes:
   - Spanish (~600 million)
   - Portuguese (~270 million)
   - French (~310 million)
   - Italian (~67 million)
   - Romanian (~25 million)

3. **Indo-Iranian branch** — the largest Indo-European branch by speakers. Includes:
   - Hindi-Urdu (~600 million; same spoken language with different scripts)
   - Bengali (~270 million)
   - Persian / Farsi (~110 million)
   - Punjabi (~125 million)
   - Pashto, Kurdish, Sindhi.

Other major Indo-European branches include **Slavic** (Russian, Polish, Czech, Ukrainian, Serbian) and **Celtic** (Irish, Welsh, Scottish Gaelic, Breton).` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Distinguish between a **universalizing religion** and an **ethnic religion**. Give two examples of each.`,
        solution: `**Universalizing religion:**
- Actively seeks CONVERTS from any background.
- Usually has a recognized FOUNDER (Jesus, Muhammad, Buddha).
- Has spread WIDELY beyond its place of origin.
- Membership is by belief and practice, not birth.

**Examples:**
- **Christianity** (~2.4 billion) — founded by Jesus; spread by Paul\'s missionary journeys, Roman state adoption (313 CE), and centuries of European missionary activity worldwide.
- **Islam** (~1.9 billion) — founded by Muhammad in Mecca (610 CE); spread by Arab conquest, trade routes (East Africa, Southeast Asia), and missionary activity.
- **Buddhism** (~500 million) — founded by Siddhartha Gautama in India (~500 BCE); spread along trade routes throughout East and Southeast Asia.

**Ethnic religion:**
- Closely tied to a particular ETHNIC GROUP, PLACE, or CULTURE.
- Does NOT actively seek converts.
- Identity is largely INHERITED — you are born into it.
- Generally remains in or near its place of origin.

**Examples:**
- **Hinduism** (~1.2 billion) — concentrated in INDIA and Nepal; world\'s third-largest religion; deeply tied to Indian culture, languages, and history.
- **Judaism** (~15 million) — religion of the JEWISH PEOPLE; concentrated in Israel and the U.S. (with diaspora communities worldwide).
- **Shinto** — indigenous religion of JAPAN; coexists with Buddhism.
- Various **indigenous religions** — Native American traditions, African traditional religions, Australian Aboriginal religions.

**Note:** the universalizing/ethnic distinction is not perfectly clean — Sikhism (~30 million), founded in Punjab, accepts converts but is largely tied to Punjabi identity; Bahá\'í is universalizing; Zoroastrianism is largely ethnic but historically had universalizing periods.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare the **diffusion patterns** of Christianity, Islam, and Buddhism. What types of diffusion did each primarily use, and how did each end up with its current geographic distribution?`,
        solution: `**Christianity** (~2.4 billion, world\'s largest):
- **Origin hearth:** Jerusalem and the Eastern Mediterranean (~30 CE).
- **Initial spread:** CONTAGIOUS diffusion among Jewish communities, then HIERARCHICAL when Roman Emperor Constantine converted (~313 CE) and Christianity became the imperial religion. Top-down spread throughout the Roman Empire.
- **Secondary spread:** RELOCATION diffusion via European migrants — Spanish/Portuguese to the Americas, English/French to North America, English to Australia/New Zealand, all colonial powers to their territories.
- **Missionary expansion:** EXPANSION diffusion in Africa, East Asia, Latin America during European colonialism (1500s–1900s).
- **Current distribution:** dominant in Europe, the Americas, sub-Saharan Africa, the Philippines, parts of East Asia. ~33% of the world.

**Islam** (~1.9 billion, fastest-growing):
- **Origin hearth:** Mecca and Medina, Arabian Peninsula (610 CE).
- **Initial spread:** CONTAGIOUS through Arabian Peninsula in Muhammad\'s lifetime (most of Arabia converted within ~25 years).
- **Massive secondary spread:** HIERARCHICAL/military — the Arab conquests (632–750 CE) carried Islam from Spain to the Indus River within a century. Top-down conversion of conquered populations.
- **Trade routes:** EXPANSION via Indian Ocean and trans-Saharan trade routes spread Islam to East Africa (Swahili coast), West Africa (Mali, Songhai), Southeast Asia (Indonesia, Malaysia).
- **Current distribution:** continuous belt from Morocco through North Africa, the Middle East, Central Asia, South Asia (Pakistan, Bangladesh, Indian Muslims), and Southeast Asia (Indonesia is the world\'s largest Muslim-majority country). ~25% of the world.

**Buddhism** (~500 million):
- **Origin hearth:** northeastern India (~500 BCE).
- **Initial spread:** EXPANSION diffusion via patronage of Indian emperor Ashoka (~250 BCE), who sent missionaries throughout South Asia.
- **Northern spread:** RELOCATION via Silk Road traders carried Mahayana Buddhism into Central Asia, China, then Korea and Japan.
- **Southern spread:** EXPANSION into Sri Lanka and Southeast Asia (Theravada in Thailand, Myanmar, Cambodia, Laos).
- **Largely DECLINED in India** — its origin point — by ~1200 CE under pressure from Hindu revival and Muslim conquest.
- **Current distribution:** dominant in mainland Southeast Asia, large minorities in East Asia. ~7% of the world.

**Key contrast:** Christianity and Islam expanded through both EXPANSION diffusion (especially top-down hierarchical) AND RELOCATION (colonial migrations). Buddhism\'s spread was almost entirely peaceful expansion via missionaries and traders, and it largely lost its Indian heartland.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Why is **Jerusalem** considered sacred to three different religions, and what does its contested status reveal about the political consequences of overlapping sacred geography?`,
        solution: `**Jerusalem** is sacred to **Judaism, Christianity, and Islam** — the three Abrahamic faiths that share roots in the same Near Eastern tradition.

**Sacred to JUDAISM:**
- Site of King David\'s capital and the **First Temple** (~960 BCE) and **Second Temple** (~516 BCE – 70 CE).
- The **Western Wall (Kotel)** is the last remnant of the Second Temple\'s retaining wall — Judaism\'s most sacred site.
- The **Temple Mount** is where the temples stood; Orthodox Jews do not enter the Mount itself out of religious caution about its holiness.
- Jerusalem appears throughout the Hebrew Bible as the spiritual center of Jewish life.

**Sacred to CHRISTIANITY:**
- **Site of Jesus\'s crucifixion, burial, and resurrection** (~30 CE) — the events at the heart of the Christian gospel.
- The **Church of the Holy Sepulchre** (built 4th century CE) marks the traditional sites of Calvary and the empty tomb.
- The **Via Dolorosa** ("Way of Sorrows") traces Jesus\'s path to crucifixion.
- Jerusalem is a major pilgrimage destination for Christians worldwide.

**Sacred to ISLAM:**
- Jerusalem (Al-Quds, "the Holy") is the THIRD-HOLIEST city in Islam after Mecca and Medina.
- The **Al-Aqsa Mosque** stands on the Temple Mount (Haram al-Sharif, "Noble Sanctuary").
- The **Dome of the Rock** marks the spot where Muslims believe Muhammad ascended to heaven during his Night Journey (Isra and Mi\'raj).
- Muslims originally faced Jerusalem in prayer before the qibla was changed to Mecca.

**The political consequences:**

The Temple Mount / Haram al-Sharif is THE SAME PHYSICAL SPACE for all three traditions. The Western Wall sits literally beneath the platform on which the Al-Aqsa Mosque and Dome of the Rock stand. This makes the site doubly contested — Jews venerating the Wall are praying at the foundation of the platform Muslims venerate above.

**Resulting conflicts:**
- **Israeli-Palestinian conflict:** the status of Jerusalem — particularly the Old City and the Temple Mount — is one of the most intractable issues. Israel claims a "united Jerusalem" as its eternal capital; Palestinians claim East Jerusalem (including the Old City) as the capital of a future state.
- **U.S. embassy controversy:** in 2018 the Trump administration moved the U.S. embassy from Tel Aviv to Jerusalem, recognizing Jerusalem as Israel\'s capital — a move applauded by Israelis and condemned by most Palestinians, Arabs, and many Europeans.
- **Status quo on the Temple Mount:** since 1967, Jordan has retained custodianship of the Muslim holy sites; only Muslims may worship there, while Jews may visit but not pray (a status quo that has come under pressure repeatedly, leading to violence).
- **Recurring violence:** the Second Intifada (2000) was sparked by Ariel Sharon\'s controversial visit to the Temple Mount; recurring incidents at Al-Aqsa have triggered larger conflicts (Hamas\'s 2023 attacks were named the "Al-Aqsa Flood" operation).

**Geographic lesson:** Jerusalem demonstrates that **sacred geography cannot easily be partitioned**. When three religions place their holiest or among-their-holiest sites in the SAME physical space, no political compromise feels adequate to the believers of any faith. This is why the Israeli-Palestinian conflict has resisted technical solutions for decades: it is partly a sacred-geography problem, not just a political or territorial one.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Roughly **40% of the world\'s ~7,000 languages are endangered**. Why are minority languages dying so rapidly, and what factors determine whether a language can be successfully **revitalized**?`,
        solution: `**Why minority languages are dying so rapidly:**

1. **Globalization and lingua francas.** English, Mandarin, Spanish, Hindi-Urdu, French, and Arabic dominate education, commerce, government, science, and the internet. Speakers of minority languages must learn a major language to participate in the modern economy, then often abandon their first language for their children.

2. **Mass schooling in dominant languages.** When governments mandate education in a national language, indigenous and minority languages get pushed out of formal use. Generations grow up literate only in the dominant language.

3. **Migration and urbanization.** When rural speakers move to cities, they encounter dominant-language environments and often raise their children in the city language. The intergenerational chain of transmission breaks.

4. **Mass media.** TV, radio, internet, and now social media in dominant languages provide constant immersion that minority languages cannot match in content production.

5. **Stigma and discrimination.** Many minority languages were historically MOCKED, BANNED, or PUNISHED. Native American children punished for speaking their languages in U.S. and Canadian boarding schools; Welsh "Not" tags in 19th-century Welsh schools; Catalan and Basque suppressed under Franco. The trauma damaged transmission for generations.

6. **Demographic shifts.** Many minority languages have very small speaker populations (a few hundred to a few thousand). Even modest assimilation rates can extinguish them within a generation or two. Of ~7,000 languages, ~2,500 have fewer than 1,000 speakers.

7. **Economic incentives.** Parents make rational calculations: a child fluent in English (or Mandarin, or Spanish) will have more economic opportunities than one fluent in Quechua (or Welsh, or Hawaiian). When minority languages confer little economic advantage, they decline.

**A language dies on average every TWO WEEKS** worldwide. UNESCO estimates that 50–90% of currently spoken languages may be extinct or moribund by 2100.

**Factors that determine successful REVITALIZATION:**

1. **Strong intergenerational transmission.** The MOST IMPORTANT factor: do parents speak the language to their children at home? If transmission breaks for one generation, recovery is enormously difficult.

2. **State support and official status.** Languages with government backing — Welsh in Wales, Hebrew in Israel, Hawaiian in Hawai\'i, Māori in New Zealand, Irish in Ireland — have institutional resources that purely community efforts lack. Bilingual education, bilingual signage, public-broadcasting requirements all matter.

3. **Immersion education.** Hawaiian "language nest" preschools (PŪNANA LEO), Māori "kōhanga reo," Welsh-medium schools, French-immersion in Canada — IMMERSION beats classroom instruction by orders of magnitude for producing fluent speakers.

4. **Cultural prestige.** When the language carries cultural pride and identity, young people choose to learn it. Welsh and Māori have benefited from cultural-revival movements that made the language COOL.

5. **Religious and ceremonial role.** Languages used in religious worship (Hebrew, Coptic, Sanskrit historically) tend to be preserved more reliably than purely secular ones.

6. **Economic value.** Tourism, government employment requirements, broadcasting careers — anything that gives the language a market value increases retention.

7. **Media presence.** TV channels in Māori, Welsh, Catalan, Basque; YouTube content in indigenous languages; smartphone apps; Wikipedia editions all help normalize the language in modern life.

8. **Critical mass of speakers.** Languages with millions of speakers (Catalan ~10 million, Basque ~750k, Welsh ~880k) can sustain themselves more easily than those with hundreds or thousands.

9. **Geographic concentration.** Languages whose speakers are concentrated in a region (Welsh in Wales, Catalan in Catalonia, Hebrew in Israel) survive better than those scattered (most indigenous languages of the Americas and Australia).

**SUCCESS STORIES:**
- **Hebrew** — went from a religious-only "dead" language to a thriving native tongue of ~9 million Israelis since the late 19th century. Probably the most dramatic revival ever.
- **Welsh** — speakers grew from ~500k (1991) to ~880k (2021) thanks to the Welsh Language Act, Welsh-medium schools, and the BBC Wales/S4C broadcaster.
- **Māori** — recovered from near-extinction through immersion preschools and official-language status (1987).
- **Hawaiian** — went from ~2,000 native speakers to ~25,000+ thanks to immersion schools.

**Continuing struggles:**
- Most indigenous languages of the Americas, Australia, and Siberia.
- Many smaller European languages (Sami, Karelian, Cornish).
- Hundreds of African and Pacific languages with only elderly speakers remaining.

The pattern is clear: language survival depends on **POLITICAL WILL, INSTITUTIONAL SUPPORT, IMMERSION EDUCATION, and intergenerational TRANSMISSION**. Without those, even celebrated cultural identity is not enough to save a language from displacement by global lingua francas.` },
    ],
    cards: [
      { front: 'Language family', back: 'Group of related languages descended from a common ancestor (proto-language). Largest is Indo-European (~3 billion speakers).', lessonPart: 1 },
      { front: 'Indo-European branches', back: 'Germanic (English, German, Swedish), Romance (Spanish, French, Italian — from Latin), Slavic (Russian, Polish), Indo-Iranian (Hindi-Urdu, Bengali, Persian), Celtic (Irish, Welsh).', lessonPart: 1 },
      { front: 'Lingua franca', back: 'A language used widely as a common tongue between groups with different native languages. English globally; Swahili in East Africa; French in West Africa; Mandarin in East Asia.', lessonPart: 1 },
      { front: 'Pidgin vs creole', back: 'Pidgin = simplified contact language used between speakers of different languages. Creole = pidgin that has become a community\'s NATIVE language (Haitian Creole, Tok Pisin in Papua New Guinea).', lessonPart: 2 },
      { front: 'Universalizing religion', back: 'Actively seeks converts; has a founder; appeals to all people. Christianity (~2.4B), Islam (~1.9B, fastest-growing), Buddhism (~500M).', lessonPart: 3 },
      { front: 'Ethnic religion', back: 'Tied to a particular ethnic group, place, or culture; does not actively seek converts. Hinduism (~1.2B, India), Judaism (~15M), Shinto (Japan), indigenous religions.', lessonPart: 3 },
      { front: 'Christianity branches', back: 'Roman Catholicism (~1.3B, centered in Vatican), Protestantism (~900M, post-1517 Reformation), Eastern Orthodoxy (~260M, Russia/Greece/Eastern Europe).', lessonPart: 3 },
      { front: 'Islam: Sunni vs Shia', back: 'Sunni ~85% (most of the Muslim world). Shia ~15%, concentrated in Iran, Iraq, Bahrain, Lebanon. Split originated in 7th-century dispute over succession to Muhammad.', lessonPart: 3 },
      { front: 'Jerusalem — three religions', back: 'Sacred to Judaism (Western Wall, Temple Mount), Christianity (Church of the Holy Sepulchre — crucifixion site), and Islam (Al-Aqsa Mosque, Dome of the Rock — third-holiest city). Source of long-running conflict.', lessonPart: 4 },
      { front: 'Endangered languages', back: '~40% of ~7,000 living languages are endangered; one dies every ~2 weeks. Revitalization requires: intergenerational transmission, state support, immersion education, cultural prestige (success: Hebrew, Welsh, Māori, Hawaiian).', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'hg-political-geography': {
    textContent: `## Political Geography

Political geography studies how POLITICAL POWER is organized in space — how borders are drawn, how states function, why they form and fall apart, and how political units interact. Every map of the world is also a political document.

### State, Nation, Nation-State

These three terms are often confused but have precise geographic meanings:

- **State** — an INDEPENDENT political unit with a defined territory, a permanent population, a functioning government, and the capacity to engage in foreign relations (recognized internationally). The world has ~195 sovereign states. *Examples:* France, Brazil, Japan, Nigeria. Note: in U.S. usage, "state" can also mean a sub-national unit (Texas, California), but in international political geography "state" = sovereign country.

- **Nation** — a CULTURAL group with shared identity (language, religion, ethnicity, history) who often want their own state. *Examples:* Kurds (~30 million, no state), Catalans (in Spain), Basques (Spain/France), Quebecois (Canada), Tibetans (China), Palestinians.

- **Nation-state** — when a NATION and a STATE coincide; the political boundaries match the cultural-ethnic group. Few states are pure nation-states; most are MULTI-NATIONAL. *Closest examples:* Japan (~98% ethnic Japanese), Iceland, Portugal, Korea (each Korea internally homogeneous though divided).

- **Multinational state** — contains MULTIPLE nations within its borders. *Examples:* United Kingdom (English, Scottish, Welsh, Northern Irish), Belgium (Flemish and Walloon), Switzerland (German, French, Italian, Romansh), Canada (English-speaking, French-speaking Quebec, Indigenous), India (hundreds of linguistic and ethnic groups), Russia, China.

- **Stateless nation** — a nation WITHOUT its own state. Largest examples: Kurds (~30 million, divided across Turkey, Syria, Iraq, Iran); Palestinians; Roma (Romani people of Europe); historically the Jewish people before 1948; Tibetans; Uyghurs.

### Sovereignty and Recognition

**Sovereignty** is the supreme authority of a state over its territory. International recognition matters: Taiwan operates independently but is recognized by only ~12 states because most countries follow the People\'s Republic of China\'s "One China" policy. Kosovo declared independence in 2008 but is recognized by ~100 of 193 UN member states.

### Boundary Types

Geographers classify boundaries by HOW THEY WERE DRAWN:

- **Antecedent boundary** — drawn BEFORE the cultural landscape developed in the area. *Example:* the U.S.-Canada border along the 49th parallel through largely empty land in 1818.

- **Subsequent boundary** — drawn THROUGH a developed cultural landscape, accommodating existing groups. *Example:* the border between Northern Ireland and the Republic of Ireland (1921), drawn to follow Protestant/Catholic population distributions.

- **Superimposed boundary** — drawn by an outside power, often IGNORING existing cultural groups. *Example:* most African borders drawn by European colonial powers at the 1884–85 **Berlin Conference**, splitting ethnic groups (e.g., the Ewe across Ghana and Togo) and forcing rivals together (Hutu and Tutsi in Rwanda; Sudan; Nigeria).

- **Relict boundary** — no longer functions as a political boundary but its EFFECTS remain visible. *Example:* the former East-West Germany border; the boundary of the former British Raj in South Asia.

- **Geometric boundary** — straight lines drawn by mathematics (latitude, longitude). Common in colonial Africa and the American West.

- **Physical boundary** — follows natural features (rivers, mountains, deserts). Rio Grande between U.S. and Mexico; Pyrenees between France and Spain; Andes between Chile and Argentina.

### Shapes of States

The SHAPE of a state affects its governance, communication, and defense:

- **Compact state** — roughly circular; short distance from center to any border. Easy to govern, defend, and unify. *Examples:* Poland, France, Uruguay.

- **Elongated (attenuated) state** — long and narrow; difficult to govern; transportation challenging. *Examples:* Chile (4,300 km long), Norway, Vietnam, Italy.

- **Prorupted state** — mostly compact but with a long extension. *Examples:* Thailand (Malay Peninsula extension), Namibia (Caprivi Strip), Afghanistan (Wakhan Corridor — created to keep British India and Russia from sharing a border).

- **Fragmented state** — composed of separate pieces. *Examples:* Indonesia (~17,000 islands), Philippines (~7,600), Japan, U.S. (with Alaska and Hawaii).

- **Perforated state** — completely surrounds another state. *Examples:* South Africa surrounds Lesotho; Italy surrounds Vatican City and San Marino.

- **Landlocked state** — no direct ocean access. ~44 countries. *Examples:* Switzerland, Mongolia, Bolivia, Paraguay, Ethiopia, Mali, Uganda. Landlocked countries often face economic disadvantages, depending on neighbors for port access.

### Centripetal vs Centrifugal Forces

States are held together by **centripetal forces** (binding people to the state) and pulled apart by **centrifugal forces** (dividing the state):

**Centripetal forces:**
- Shared NATIONAL IDENTITY, language, religion, history.
- Strong CENTRAL government and rule of law.
- External THREATS that unify (e.g., U.S. unity in WWII).
- Economic prosperity that benefits all regions.
- Symbols (flag, national anthem, founding myths).

**Centrifugal forces:**
- ETHNIC, religious, or linguistic divisions.
- Economic INEQUALITY between regions.
- Weak or corrupt central government.
- Geographic FRAGMENTATION or remote regions.
- External support for separatist movements.

When centrifugal forces dominate, states can fragment. Recent examples:
- **Yugoslavia** broke into 7 states in the 1990s (Slovenia, Croatia, Bosnia, Serbia, Montenegro, Macedonia/N. Macedonia, Kosovo).
- **Soviet Union** dissolved into 15 independent republics in 1991.
- **Sudan** split into Sudan and South Sudan in 2011.
- **Czechoslovakia** peacefully separated into Czech Republic and Slovakia in 1993 ("Velvet Divorce").

Active **separatist movements** today include Catalan independence (Spain), Scottish independence (UK), Quebec sovereignty (Canada — diminished but persistent), Kurdish autonomy (Turkey/Syria/Iraq), Tibetan and Uyghur movements (China), West Papua (Indonesia).`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Distinguish between a **state**, a **nation**, and a **nation-state**, and give a clear example of each.`,
        solution: `- **State** = an INDEPENDENT political unit with a defined territory, a permanent population, a functioning government, and the capacity to engage in foreign relations (recognized internationally as a sovereign country). There are about 195 of them. *Examples:* France, Brazil, Nigeria, Japan.

- **Nation** = a CULTURAL GROUP with shared identity — language, religion, ethnicity, history — who often want their own political state. A nation may or may not have its own state. *Examples:* the Kurds (~30 million, divided across Turkey, Syria, Iraq, Iran — a "stateless nation"); Catalans (in Spain); Basques (in Spain and France); the Palestinians.

- **Nation-state** = a state in which the POLITICAL BOUNDARIES of the state COINCIDE with the cultural-ethnic boundaries of a nation — one nation, one state. True nation-states are RARE; most modern states are multi-national. *Closest examples:* Japan (~98% ethnic Japanese, sharing language, religion, and history), Iceland, Portugal, North and South Korea (each internally homogeneous though the nation is divided).

**Why this matters:** The mismatch between nations and states is one of the largest sources of political conflict in the world. Stateless nations (Kurds, Palestinians, Tibetans) seek statehood; multinational states (USSR, Yugoslavia, Sudan) sometimes break apart along national lines.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Define each of the following boundary types and give an example: **antecedent**, **subsequent**, **superimposed**, **relict**.`,
        solution: `- **Antecedent boundary:** Drawn BEFORE the cultural landscape developed significantly in the area. The boundary preceded settlement and shaped the development that followed. *Example:* the U.S.-Canada border along the 49th parallel west of the Lake of the Woods, drawn in 1818 through largely empty land that was then settled afterward according to the new boundary.

- **Subsequent boundary:** Drawn AFTER and THROUGH a developed cultural landscape, attempting to ACCOMMODATE existing cultural, ethnic, religious, or linguistic groups. *Example:* the border between Northern Ireland and the Republic of Ireland (1921), drawn to follow the Protestant/Catholic population distribution and create a Protestant majority in Northern Ireland.

- **Superimposed boundary:** Drawn by an OUTSIDE POWER, often IGNORING the existing cultural landscape. Frequently produces conflict because cultural groups are split or hostile groups forced together. *Example:* most AFRICAN borders drawn by European colonial powers at the 1884–85 BERLIN CONFERENCE — they split the Ewe across Ghana and Togo, the Yoruba across Nigeria/Benin/Togo, and forced rivals like the Hutu and Tutsi together inside Rwanda. The borders inherited at independence in the 1960s have been a source of conflict ever since.

- **Relict boundary:** A boundary that NO LONGER FUNCTIONS as a political boundary, but whose effects remain VISIBLE in the cultural, economic, or built landscape. *Example:* the former EAST-WEST GERMANY border (1949–1990) — even though political reunification happened in 1990, decades of separate development left differences in architecture, infrastructure, voting patterns, and economic conditions that are still visible today. Other examples: the former British Raj boundary in South Asia; Hadrian\'s Wall in Britain.

A fifth common type, **GEOMETRIC** boundary, follows mathematical lines (latitude, longitude) — common in colonial Africa and the American West. **PHYSICAL** boundaries follow natural features (rivers, mountains).` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `How does the **SHAPE** of a state affect its governance, defense, and economic integration? Give one example each of a compact, elongated, fragmented, and landlocked state and discuss the geographic challenges each faces.`,
        solution: `**Compact state — example: Poland.**
- Roughly circular shape; short distance from center to any border.
- *Advantages:* Easy to govern; communication and transportation efficient; relatively easy to defend (short borders for the area enclosed); easier to create a unified national identity.
- *Challenges:* Fewer.
- Other examples: France, Uruguay, Hungary, Kenya.

**Elongated state — example: Chile.**
- Long and narrow shape (Chile stretches ~4,300 km / 2,700 miles north-south but is only ~180 km / 110 miles wide on average).
- *Challenges:* Internal transportation is expensive; far-flung regions feel disconnected from the capital; difficult to defend along long borders; climate varies dramatically along the length (Atacama Desert in the north, glaciers in the south); regional economies and cultures diverge.
- *Advantages:* Access to multiple ecosystems and resources; long coastline for ports.
- Other examples: Norway, Vietnam, Italy, the Gambia.

**Fragmented state — example: Indonesia.**
- Composed of separate pieces, often islands. Indonesia has ~17,000 islands, of which ~6,000 are inhabited.
- *Challenges:* Communication and transportation between pieces is expensive (relies on shipping and aviation); separatist movements emerge in distant regions (West Papua, formerly East Timor which became independent in 2002); cultural unity is difficult; defending all pieces strains the military.
- *Advantages:* Maritime trade access; diverse resources and ecosystems.
- Other examples: Philippines (~7,600 islands), Japan, the United States (with Alaska and Hawaii separated from the contiguous 48).

**Landlocked state — example: Bolivia.**
- No direct access to the ocean. Bolivia famously LOST its Pacific coast in the War of the Pacific (1879–1883) to Chile and has sought ocean access ever since.
- *Challenges:* Must depend on neighboring countries for port access (huge economic disadvantage — landlocked countries on average have 30–50% lower trade); shipping costs higher; vulnerable to political tensions with neighbors that control transit routes.
- *Advantages:* Defended on all sides by other countries (potentially) — though this depends on who those neighbors are.
- Other examples: ~44 landlocked countries total, including Switzerland (relatively prosperous because of central European location), Mongolia, Paraguay, Ethiopia, Mali, Uganda. Many of the world\'s poorest countries are landlocked, particularly in Africa.

**General principle:** Compact states have the FEWEST geographic challenges; elongated, fragmented, and landlocked states face structural disadvantages that good policy and infrastructure can mitigate but cannot eliminate. Switzerland\'s success despite being landlocked demonstrates that geography is destiny only PROBABILISTICALLY — institutions and policy matter enormously.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain the difference between **centripetal** and **centrifugal** forces. List three of each, and use them to explain why **Yugoslavia** broke apart in the 1990s.`,
        solution: `**Centripetal forces** — forces that BIND people to a state and unify it (think "centripetal = center-seeking"). Examples:
1. **Shared national identity** — common language, religion, ethnicity, history. Iceland (uniformly Icelandic) holds together easily.
2. **Strong central government and rule of law** — legitimate institutions provide order and services that bind citizens to the state.
3. **External threats** — perceived danger from outside unifies internal divisions (the U.S. during WWII).
4. **Economic prosperity** — shared rising living standards make secession unappealing.
5. **National symbols** — flag, anthem, founding myths, civic education.
6. **Common transportation/communication infrastructure** — physically connects regions.

**Centrifugal forces** — forces that DIVIDE a state and push it apart (think "centrifugal = fleeing the center"). Examples:
1. **Ethnic, religious, or linguistic divisions** — internal cleavages that compete with national identity.
2. **Economic inequality between regions** — wealthier regions resent subsidizing poorer ones (Catalonia in Spain, Lombardy in Italy).
3. **Weak or corrupt central government** — citizens lose faith in national institutions.
4. **Geographic fragmentation** — distant regions feel disconnected.
5. **External support for separatist movements.**
6. **Historical grievances** — memories of past oppression, conquest, or persecution.

**Why YUGOSLAVIA broke apart (1991–2008):**

Yugoslavia (1918–2003) was a textbook MULTINATIONAL STATE comprising six constituent republics — Slovenia, Croatia, Bosnia-Herzegovina, Serbia, Montenegro, and Macedonia — and over a dozen ethnic and religious groups (Serbs, Croats, Bosniaks, Slovenes, Macedonians, Montenegrins, Albanians, Hungarians, etc.). It was held together by extraordinarily powerful CENTRIPETAL FORCES under Marshal **Tito** (1945–1980):
- Strong central authority and the Communist Party.
- Federal structure that gave each republic a sense of autonomy.
- Tito\'s personal charisma and the unifying memory of the WWII Partisan struggle.
- Economic growth in the 1960s–70s.
- "Brotherhood and unity" national ideology suppressing ethnic identification.

After Tito\'s death (1980), CENTRIFUGAL FORCES began to dominate:

1. **ETHNIC AND RELIGIOUS DIVISIONS** that had been suppressed re-emerged powerfully. Slovenes (Catholic, German-influenced, prosperous), Croats (Catholic), Serbs (Orthodox), Bosniaks (Muslim), and Albanians (Muslim) all began to identify FIRST by ethnicity, second by Yugoslav citizenship.

2. **ECONOMIC INEQUALITY** between republics — Slovenia and Croatia were prosperous and resented funding poorer southern republics; Serbia\'s leaders meanwhile asserted Serbian dominance over the federation.

3. **WEAK CENTRAL LEADERSHIP** — Tito\'s successor structure was a rotating presidency that lacked his unifying authority. **Slobodan Milošević** in Serbia exploited Serbian nationalism to consolidate power, alarming non-Serb republics.

4. **HISTORICAL GRIEVANCES** — memories of WWII atrocities (Croatian Ustaše killings of Serbs; Serbian Chetnik killings of Muslims and Croats) were revived and weaponized by nationalist politicians.

5. **EXTERNAL CHANGES** — the collapse of communism across Eastern Europe (1989–91) removed the ideological glue and emboldened nationalist movements.

6. **SECESSION AND WAR** — Slovenia and Croatia declared independence in 1991, followed by Bosnia (1992) and Macedonia (1991). The wars that followed (Croatian War 1991–95; Bosnian War 1992–95; Kosovo War 1998–99) killed an estimated 130,000+ people and produced the worst atrocities in Europe since WWII (Srebrenica massacre 1995, ethnic cleansing throughout Bosnia).

Final result: by 2008, Yugoslavia had become SEVEN independent states (Slovenia, Croatia, Bosnia-Herzegovina, Serbia, Montenegro, North Macedonia, Kosovo). Centrifugal forces — ethnic, religious, economic, historical — overwhelmed the centripetal bonds that Tito had maintained for 35 years.

**Lesson:** Centripetal and centrifugal forces are in CONSTANT TENSION in every multinational state. When centrifugal forces dominate, even apparently stable states can fragment quickly.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Compare the cases of **South Sudan** (independence 2011) and **Catalonia** (referendum 2017, independence not achieved). Why did one succeed and the other fail? What does this reveal about the political geography of secession in the 21st century?`,
        solution: `**South Sudan — successful secession (July 9, 2011):**

Sudan after independence (1956) inherited an arbitrary, superimposed colonial border that united the Arab-Muslim NORTH and the African-Christian/animist SOUTH in a single state. The two regions had:
- DIFFERENT ETHNICITIES — Arab vs. Black African groups (Dinka, Nuer, etc.).
- DIFFERENT RELIGIONS — Muslim vs. Christian/animist.
- DIFFERENT COLONIAL EXPERIENCES — the British administered the South separately.
- DIFFERENT ECONOMIC INTERESTS — most oil reserves are in the South, but pipelines and refineries in the North.

**Two devastating civil wars** (1955–1972, 1983–2005) killed an estimated 2 MILLION people. After the second war, the **Comprehensive Peace Agreement (2005)** granted the South autonomy and a referendum on independence after six years.

In the 2011 referendum, **98.83% voted for independence**. Key factors that ENABLED success:
1. **Treaty-recognized right to vote** on independence — secession was AGREED in advance by both sides.
2. **International support** — the U.S., UN, and African Union all endorsed the process.
3. **Sudanese government acquiesced** (under intense international pressure) rather than fight a third war.
4. **Clear territorial boundaries** existed (the autonomous region\'s lines).
5. **Overwhelming popular support** within the seceding territory.

South Sudan became the world\'s newest UN member state on July 14, 2011. (It has subsequently descended into its own civil war — independence solved one problem and created others.)

**Catalonia — failed secession attempt (October 1, 2017):**

Catalonia is an autonomous region of Spain with its own LANGUAGE (Catalan), distinct CULTURE, history of independence (medieval Crown of Aragon), and ~7.5 million people including ~16% of Spain\'s GDP.

Catalan nationalism intensified after the 2008 financial crisis (resentment that wealthier Catalonia was subsidizing poorer regions) and after the Spanish Constitutional Court struck down parts of a 2006 statute giving Catalonia greater autonomy.

On October 1, 2017, the Catalan regional government held an INDEPENDENCE REFERENDUM ruled illegal by Spain. Spanish national police suppressed polling stations using force, injuring over 1,000 people. Of votes cast, 92% were for independence — but turnout was only ~43% because most opponents BOYCOTTED the illegal vote. On October 27, the Catalan parliament declared independence.

Spain responded by:
1. **Suspending Catalan autonomy** under Article 155 of the Spanish Constitution.
2. **Arresting and prosecuting** Catalan leaders (Carles Puigdemont fled to Belgium).
3. **Calling regional elections** that produced no decisive resolution.
4. **Refusing to negotiate** terms of independence.

**International response:** the European Union explicitly REFUSED to recognize Catalan independence and supported Spanish constitutional order. NO COUNTRY recognized Catalonia.

**Why Catalonia failed:**
1. **Spanish constitutional opposition** — the central state actively REFUSED to permit secession.
2. **No prior agreement** for a legal referendum — unlike South Sudan, secession was not pre-approved.
3. **No international support** — the EU prioritized state stability and refused to intervene.
4. **Internal division** — only ~50% of Catalans supported independence; many wanted greater autonomy but not full secession.
5. **No willingness to use force** — neither side fought a war to settle the question.

**What does this reveal about 21st-century secession?**

1. **CONSENT MATTERS — both internal and external.** South Sudan\'s independence was negotiated and internationally sanctioned. Catalonia\'s was unilateral and rejected.

2. **STATES DON\'T LOSE TERRITORY VOLUNTARILY** — when a state actively opposes secession, secession only succeeds through war (Bangladesh from Pakistan 1971), state collapse (Yugoslavia, USSR), or international intervention (Kosovo from Serbia, partially recognized).

3. **INTERNATIONAL RECOGNITION IS NEARLY DETERMINATIVE** — the EU\'s refusal to recognize Catalonia made secession unworkable. South Sudan\'s recognition by the UN, AU, and Western powers made it a fact.

4. **THE INTERNATIONAL ORDER FAVORS STABLE BORDERS.** The post-1945 international system has a strong PRESUMPTION against altering borders, codified in the UN Charter and African Union\'s respect for colonial boundaries. Secession is permitted only in exceptional cases (clear self-determination claim, prior agreement, state collapse).

5. **REFERENDA ALONE ARE NOT ENOUGH.** A vote without legal authorization or international support is a political statement, not a legal act of independence.

6. **DEMOCRATIC STATES ARE NOT IMMUNE** to secessionist pressures (UK with Scotland, Spain with Catalonia, Canada with Quebec, Belgium with Flanders), but their constitutional and democratic processes generally CONTAIN such pressures rather than producing breakup.

**Other recent cases:** Crimea (2014) was annexed by Russia after a referendum widely viewed as illegitimate; only Russia and a handful of allies recognize Russian sovereignty. East Timor achieved independence (2002) through a UN-supervised process after Indonesian withdrawal. Kosovo (2008) is recognized by ~100 of 193 UN member states — partial success.

**Conclusion:** In the 21st century, successful secession requires a RARE COMBINATION of internal popular support, the parent state\'s consent (or its collapse), and international recognition. South Sudan had all three; Catalonia had only the first.` },
    ],
    cards: [
      { front: 'State (in international political geography)', back: 'An independent political unit with defined territory, permanent population, functioning government, and capacity for foreign relations. Internationally recognized as a sovereign country. ~195 in the world.', lessonPart: 1 },
      { front: 'Nation', back: 'A cultural group with shared identity (language, religion, ethnicity, history) who often want their own state. Examples: Kurds (~30M, no state), Catalans, Tibetans, Palestinians.', lessonPart: 1 },
      { front: 'Nation-state vs multinational state', back: 'Nation-state: state boundaries match a single nation\'s cultural boundaries (Japan ~98% ethnic Japanese; Iceland; Korea). Multinational: contains multiple nations (UK, Belgium, Switzerland, Canada, India, Russia).', lessonPart: 1 },
      { front: 'Stateless nation', back: 'A nation without its own state. Largest: Kurds (~30M divided across Turkey/Syria/Iraq/Iran). Others: Palestinians, Roma, Tibetans, Uyghurs. Historical: Jewish people before 1948.', lessonPart: 1 },
      { front: 'Antecedent vs subsequent boundary', back: 'Antecedent = drawn BEFORE the cultural landscape developed (US-Canada 49th parallel, 1818). Subsequent = drawn AFTER through developed landscape, accommodating groups (N. Ireland-Republic of Ireland, 1921).', lessonPart: 2 },
      { front: 'Superimposed boundary', back: 'Drawn by an outside power, often ignoring existing cultural groups. Most African borders from 1884–85 Berlin Conference split ethnic groups (Ewe, Yoruba) and forced rivals together (Hutu/Tutsi in Rwanda).', lessonPart: 2 },
      { front: 'Relict boundary', back: 'No longer functions as a political boundary but its effects remain visible in the cultural/built landscape. Example: former East-West Germany border (1949-1990) still visible in architecture, voting patterns, economy.', lessonPart: 2 },
      { front: 'State shapes', back: 'Compact (Poland — easy to govern). Elongated (Chile — hard to integrate). Prorupted (Thailand). Fragmented (Indonesia, Philippines). Perforated (South Africa around Lesotho). Landlocked (Bolivia, Switzerland).', lessonPart: 3 },
      { front: 'Centripetal vs centrifugal forces', back: 'Centripetal: bind a state together (shared identity, central government, external threats, prosperity). Centrifugal: pull a state apart (ethnic/religious divisions, economic inequality, weak government).', lessonPart: 4 },
      { front: 'Yugoslavia breakup (1991–2008)', back: 'Tito (d. 1980) held it together via authoritarian unity. After his death, ethnic/religious divisions, economic inequality, weak successors, and historical grievances overwhelmed centripetal forces. Result: 7 states, 130k+ deaths.', lessonPart: 5 },
    ],
  },
}

async function main() {
  console.log('=== AP Human Geography content fill — Batch 2 ===\n')

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
