import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Human Geography FRQs.
 * Format mirrors the official CB AP Human Geography exam:
 *   FRQ 1 — no stimulus, 7 parts (A–G), 7 pts
 *   FRQ 2 — one stimulus (map/chart), 7 parts (A–G), 7 pts
 *   FRQ 3 — two stimuli (paired maps), 7 parts (A–G), 7 pts
 *
 * Each part is graded on a 1-point rubric. We model these as SAQItems
 * with 7 parts so the existing FullLengthPracticeExam component can
 * render the rubric checklist after the student submits.
 */

export const FRQS: SAQItem[] = [
  /* ---------- FRQ 1 — NO STIMULUS ---------- */
  {
    type: 'saq',
    topic: 'unit-2-population-migration',
    prompt:
      'FRQ 1 (No Stimulus). Migration is shaped by both push factors and pull factors.\n\n' +
      'Use your knowledge of human geography to answer parts A–G.',
    parts: [
      {
        letter: 'A',
        question: 'Define the term "push factor" as it relates to human migration.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Accurate definition of push factor',
            description:
              'A condition or circumstance in the place of origin that compels or encourages people to leave (e.g., war, persecution, unemployment, environmental disaster, famine).',
          },
        ],
      },
      {
        letter: 'B',
        question: 'Identify ONE specific environmental push factor that has driven 21st-century migration.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — Specific environmental push factor',
            description:
              'Acceptable: drought (e.g., the Sahel, Syrian pre-war drought 2006–2010); sea-level rise (e.g., Pacific island nations like Tuvalu and Kiribati); hurricanes/typhoons (e.g., 2005 Hurricane Katrina, 2013 Typhoon Haiyan); desertification; flooding from monsoonal change in Bangladesh.',
          },
        ],
      },
      {
        letter: 'C',
        question:
          'Explain how ONE specific economic pull factor influences contemporary international migration patterns.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Economic pull factor explained with mechanism',
            description:
              'Must NAME a pull factor (higher wages, more job opportunities in a specific industry, remittance economies, guest-worker programs) AND explain how it pulls migrants — e.g., higher U.S. construction wages drawing workers from Central America; Gulf-state demand for South Asian construction labor.',
          },
        ],
      },
      {
        letter: 'D',
        question:
          'Describe ONE political or legal barrier that restricts international migration in the 21st century.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — Political/legal barrier described',
            description:
              'Acceptable: visa quotas; physical border walls/fences (U.S.–Mexico, EU–Turkey); refusal of refugee status; mandatory work permits; Brexit ending EU free movement to the UK; Schengen suspensions; deportation programs.',
          },
        ],
      },
      {
        letter: 'E',
        question:
          'Explain ONE specific way remittances sent home by international migrants affect the economy of the country of origin.',
        rubric: [
          {
            id: 'e1',
            label: '1 pt — Remittance impact on origin country',
            description:
              'Acceptable: remittances make up 20%+ of GDP in countries like Tonga, Tajikistan, and Nepal, financing household consumption and small-business investment; can reduce poverty but also produce dependence and labor shortages in sending villages. Must SHOW the link.',
          },
        ],
      },
      {
        letter: 'F',
        question:
          'Explain ONE specific demographic effect that long-term, large-scale immigration has had on a destination country.',
        rubric: [
          {
            id: 'f1',
            label: '1 pt — Demographic effect on destination country',
            description:
              'Acceptable: slowing of population aging (immigration sustains labor force in low-fertility EU/Japan/Canada); diversification of language and ethnicity (Toronto, London); pressure on urban housing supply; reduction of dependency ratio. Must SHOW the demographic mechanism.',
          },
        ],
      },
      {
        letter: 'G',
        question:
          'Explain ONE specific way that gender shapes international migration patterns or experiences in the 21st century.',
        rubric: [
          {
            id: 'g1',
            label: '1 pt — Gendered dimension of migration explained',
            description:
              'Acceptable: feminization of migration in domestic and care-work sectors (Filipina domestic workers in Hong Kong, Saudi Arabia, Italy); gendered vulnerability to trafficking; remittances from women migrants disproportionately spent on children\'s health/education in origin household; men dominating long-distance labor migration in some sending societies (per Ravenstein\'s laws).',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) A push factor is a condition in a person\'s home region that drives them to leave — for example, armed conflict, persecution, or lack of jobs.\n\n' +
      '(B) Drought in the Sahel has pushed agricultural workers out of countries like Mali and Niger toward coastal West African cities and toward Europe.\n\n' +
      '(C) Higher wages in U.S. construction and agriculture pull migrants from Mexico and Central America: a day laborer can earn several times as much in the U.S. as at home, and the wage differential — combined with established migrant networks — is a leading economic pull factor.\n\n' +
      '(D) U.S. visa quotas (and the H-2A guest-worker program ceiling) restrict legal entry, so prospective migrants either wait years, enter on temporary visas, or attempt unauthorized crossings.\n\n' +
      '(E) Remittances make up roughly a quarter of GDP in countries like Tajikistan and Tonga; they fund household consumption, school fees, and small-business investment, reducing poverty but also making the economy vulnerable when destination-country wages fall.\n\n' +
      '(F) Immigration has slowed population aging in Canada and Germany. Without sustained immigration, both countries\' working-age populations would shrink — immigrants help maintain the tax base supporting pensions and health care.\n\n' +
      '(G) Migration is increasingly female. Filipina domestic workers in Hong Kong and the Gulf send remittances that are disproportionately invested in children\'s schooling — a gendered pattern that reshapes both family structures in the Philippines and the labor markets of receiving cities.',
  },

  /* ---------- FRQ 2 — ONE STIMULUS (URBAN MODEL) ---------- */
  {
    type: 'saq',
    topic: 'unit-6-cities-urban',
    prompt:
      'FRQ 2 (One Stimulus). Refer to the description of the urban land-use model below.\n\n' +
      'Stimulus (described): A simplified diagram of the GRIFFIN–FORD Latin American city model. The model shows: a central business district (CBD) at the city center; a high-quality "elite spine" of upper-class residences extending outward from the CBD; a market sector containing traditional shops; a zone of in situ accretion (working-class, gradually improving neighborhoods); a ring of "disamenity" with informal squatter settlements (favelas/barriadas) on the periphery; and a "periferico" ring road encircling the city.',
    parts: [
      {
        letter: 'A',
        question: 'Identify the geographer(s) most associated with developing the urban model shown in the stimulus.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Identifies Griffin and Ford',
            description: 'Larry Ford and Ernst Griffin (sometimes "Griffin–Ford"). Naming either or both earns the point.',
          },
        ],
      },
      {
        letter: 'B',
        question:
          'Describe ONE specific way the spatial pattern shown in the model differs from the classic concentric-zone (Burgess) model of North American cities.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — Specific difference from Burgess model',
            description:
              'Acceptable: in Burgess, low-income residents are near the CBD and wealth increases outward; in the Latin American model, the wealthy live along an elite spine extending from the CBD and the poorest residents live on the periphery in squatter settlements — the reverse pattern.',
          },
        ],
      },
      {
        letter: 'C',
        question:
          'Explain ONE specific historical or cultural reason why the elite spine extends outward from the CBD in many Latin American cities.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Historical/cultural explanation of elite spine',
            description:
              'Acceptable: colonial Spanish urban design (Laws of the Indies) placed the most prestigious buildings near the central plaza; modern infrastructure investment (boulevards, transit, hospitals) extends along the historic main avenue; elites have invested in keeping residences close to amenity-rich corridors and away from low-income peripheries.',
          },
        ],
      },
      {
        letter: 'D',
        question:
          'Identify ONE specific Latin American city that illustrates the model shown in the stimulus.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — Specific city',
            description: 'Acceptable: Mexico City; São Paulo; Rio de Janeiro; Buenos Aires; Bogotá; Lima; Santiago; Caracas.',
          },
        ],
      },
      {
        letter: 'E',
        question:
          'Explain ONE specific challenge that the squatter settlements (favelas/barriadas) shown on the periphery pose for municipal governments.',
        rubric: [
          {
            id: 'e1',
            label: '1 pt — Challenge of informal settlements explained',
            description:
              'Acceptable: providing water, electricity, sewerage, and policing in unplanned settlements is expensive; settlements often occupy unstable hillsides vulnerable to landslides; difficulty of formal land titling; informal economy reduces tax base; risk of disease outbreaks. Must SHOW the link to municipal governance.',
          },
        ],
      },
      {
        letter: 'F',
        question:
          'Describe ONE specific government policy that has been used in Latin American cities to address conditions in informal settlements.',
        rubric: [
          {
            id: 'f1',
            label: '1 pt — Specific policy on informal settlements',
            description:
              'Acceptable: regularization/titling programs (Peru\'s COFOPRI; Brazil\'s "Minha Casa Minha Vida"); slum upgrading (Rio favela cable cars and police pacification units); subsidized housing programs; water and electricity legalization; Medellín\'s integrated public-transport investments connecting comunas to the CBD.',
          },
        ],
      },
      {
        letter: 'G',
        question:
          'Explain ONE specific way urban land-use models like the one shown in the stimulus are useful for studying cities, even when individual cities do not match the model exactly.',
        rubric: [
          {
            id: 'g1',
            label: '1 pt — Use of models despite imperfection',
            description:
              'Acceptable: models simplify complex urban form so spatial patterns can be compared across cities and across regions; they provide a baseline against which deviations (e.g., gentrification reversing a periphery–center wealth gradient) can be identified; they help students and planners predict where new infrastructure or housing pressure may emerge.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) The model is the Griffin–Ford Latin American city model.\n\n' +
      '(B) In the Burgess concentric-zone model, low-income residents live closest to the CBD and wealth rises outward; the Latin American model reverses this — the wealthy occupy the elite spine near the CBD and the poorest residents live in informal settlements on the urban periphery.\n\n' +
      '(C) Spanish colonial urban planning under the Laws of the Indies placed the cathedral, government buildings, and elite residences around the central plaza, and modern infrastructure investment (paved boulevards, hospitals, universities) has continued along the historic central spine, reinforcing elite residence near the CBD.\n\n' +
      '(D) Mexico City exemplifies the model, with elite residence along the Reforma corridor and extensive informal settlements (e.g., Iztapalapa) on the periphery.\n\n' +
      '(E) Squatter settlements complicate municipal service provision: residents often lack legal land titles, so the city cannot easily run water lines or sewerage to the settlement, and unplanned hillside construction is vulnerable to landslides — both raising the cost and political difficulty of providing services.\n\n' +
      '(F) Medellín, Colombia, has invested in cable cars (the Metrocable) and library-parks linking peripheral comunas to the central transit network — a slum-upgrading and public-transport policy that improves access to jobs without displacing residents.\n\n' +
      '(G) Models like Griffin–Ford are useful as baselines: even when an individual city like Buenos Aires only partially fits, the model lets planners and students compare spatial patterns of wealth, identify where the model is being reversed (e.g., gentrification of central areas), and predict where infrastructure pressure will appear.',
  },

  /* ---------- FRQ 3 — TWO STIMULI (PAIRED MAPS) ---------- */
  {
    type: 'saq',
    topic: 'unit-7-industrial-economic',
    prompt:
      'FRQ 3 (Two Stimuli). Refer to the descriptions of the two maps below.\n\n' +
      'Map A (described): A choropleth world map shaded by Human Development Index (HDI). Western Europe, Canada, the United States, Japan, South Korea, Australia, and New Zealand are in the highest HDI category. Most of sub-Saharan Africa is in the lowest HDI category. Latin America and most of Asia are in middle categories.\n\n' +
      'Map B (described): A choropleth world map shaded by Total Fertility Rate (TFR). Most of sub-Saharan Africa is shaded with TFR ≥ 4.5 children per woman. Western Europe, Japan, and South Korea are shaded with TFR < 1.6. The United States, China, and most of Latin America are shaded with TFR between 1.6 and 2.4.',
    parts: [
      {
        letter: 'A',
        question: 'Define the Human Development Index (HDI).',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Accurate definition of HDI',
            description:
              'A composite index combining life expectancy at birth, education (mean and expected years of schooling), and gross national income per capita to measure development beyond GDP alone.',
          },
        ],
      },
      {
        letter: 'B',
        question: 'Identify the relationship between HDI (Map A) and Total Fertility Rate (Map B) shown across the two maps.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — Identifies inverse / negative relationship',
            description:
              'Higher HDI is associated with lower TFR, and lower HDI with higher TFR — a strong inverse relationship across the two maps.',
          },
        ],
      },
      {
        letter: 'C',
        question:
          'Explain ONE specific reason why countries with higher HDI tend to have lower fertility rates.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Reason higher HDI → lower fertility',
            description:
              'Acceptable: higher female educational attainment delays marriage and childbearing; higher labor-force participation by women raises the opportunity cost of children; widespread access to contraception and family planning; lower infant mortality reduces the need for many children; urbanization and shift away from agriculture reduces the economic value of children; high cost of raising children in service economies.',
          },
        ],
      },
      {
        letter: 'D',
        question:
          'Describe ONE specific demographic challenge that countries shown in Map B with TFR below 1.6 will most likely face within the next several decades.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — Specific challenge of sub-replacement fertility',
            description:
              'Acceptable: shrinking working-age population straining pension systems and elder care; rising old-age dependency ratio; labor shortages in sectors like care work and agriculture; declining school enrollments; political pressure to expand immigration. Must NAME a specific challenge.',
          },
        ],
      },
      {
        letter: 'E',
        question:
          'Describe ONE specific demographic challenge that countries shown in Map B with TFR ≥ 4.5 will most likely face within the next several decades.',
        rubric: [
          {
            id: 'e1',
            label: '1 pt — Specific challenge of high fertility',
            description:
              'Acceptable: youth bulge straining primary education and entry-level labor markets; pressure on health-care and food systems; rapid urban growth and informal-settlement expansion; high rates of youth unemployment that can produce political instability.',
          },
        ],
      },
      {
        letter: 'F',
        question:
          'Explain ONE specific way governments in countries with very low fertility have attempted to raise birth rates.',
        rubric: [
          {
            id: 'f1',
            label: '1 pt — Specific pronatalist policy',
            description:
              'Acceptable: cash "baby bonuses" and child allowances (Hungary, Russia, South Korea); subsidized childcare and parental leave (France, Sweden); tax incentives for larger families; subsidized fertility treatments; immigration relaxation as an indirect demographic strategy. Must NAME the policy and link it to raising fertility.',
          },
        ],
      },
      {
        letter: 'G',
        question:
          'Explain ONE specific limitation of using HDI alone as a measure of a country\'s level of development.',
        rubric: [
          {
            id: 'g1',
            label: '1 pt — Specific limitation of HDI',
            description:
              'Acceptable: HDI does not measure inequality within a country (a country may have a high HDI but enormous wealth disparities — addressed in part by the Inequality-adjusted HDI); ignores environmental sustainability; ignores political freedom and gender equity (addressed in part by GII); averages mask regional differences within a country; uses GNI per capita that does not reflect cost of living without PPP adjustment.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) HDI is a composite index combining life expectancy at birth, education (mean and expected years of schooling), and gross national income per capita.\n\n' +
      '(B) The two maps show a strong inverse relationship — countries with high HDI (Western Europe, Japan, South Korea) have low TFR, while countries with low HDI (sub-Saharan Africa) have high TFR.\n\n' +
      '(C) Higher female educational attainment in high-HDI countries delays marriage and childbearing, and the opportunity cost of leaving the labor force to raise children is far greater for women with higher earnings, reducing TFR.\n\n' +
      '(D) Japan and South Korea face shrinking working-age populations and a rising old-age dependency ratio, straining pensions and care systems and contributing to a labor shortage in elder care and agriculture.\n\n' +
      '(E) Countries in sub-Saharan Africa with TFR ≥ 4.5 face a youth bulge that strains primary schools, entry-level labor markets, and food systems — and contributes to rapid urban growth in informal settlements.\n\n' +
      '(F) Hungary offers tax exemptions and cash incentives to mothers of four or more children and subsidizes loans that are forgiven on the birth of additional children — an explicitly pronatalist policy aimed at raising the country\'s low TFR.\n\n' +
      '(G) HDI does not measure inequality within a country: South Africa has a relatively high HDI but among the world\'s most unequal income distributions, so the national HDI hides large internal disparities. The Inequality-adjusted HDI was developed to address this limitation.',
  },
]
