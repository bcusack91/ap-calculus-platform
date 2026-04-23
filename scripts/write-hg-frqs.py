#!/usr/bin/env python3
"""
Rewrite src/data/ap-human-geo-frq/questions.ts with substantive,
historically-grounded AP-style prompts mirroring the AAS FRQ gold standard.

Preserves the existing TypeScript interfaces and named exports
(apHumanGeoFRQs, getApHumanGeoFRQs, getLongFRQs, getShortFRQs, generateFullExamFRQs).
"""
from __future__ import annotations
import os, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT  = os.path.join(ROOT, "src", "data", "ap-human-geo-frq", "questions.ts")


def js(s): return json.dumps(s, ensure_ascii=False)


def part(label, prompt, max_pts, rubric_items, sample):
    rubric_lines = ",\n          ".join(
        f"{{ points: {pts}, description: {js(desc)}, keywords: {json.dumps(kw, ensure_ascii=False)} }}"
        for pts, desc, kw in rubric_items
    )
    return (
        f"      {{\n"
        f"        label: {js(label)},\n"
        f"        prompt: {js(prompt)},\n"
        f"        maxPoints: {max_pts},\n"
        f"        rubric: [\n          {rubric_lines}\n        ],\n"
        f"        sampleAnswer: {js(sample)},\n"
        f"      }}"
    )


def frq(id_, type_, unit, title, prompt, parts, total, time, calc=False):
    parts_str = ",\n".join(parts)
    return (
        f"  {{\n"
        f"    id: {js(id_)},\n"
        f"    type: '{type_}' as const,\n"
        f"    unit: {unit},\n"
        f"    title: {js(title)},\n"
        f"    prompt: {js(prompt)},\n"
        f"    parts: [\n{parts_str}\n    ],\n"
        f"    totalPoints: {total},\n"
        f"    timeRecommendation: {js(time)},\n"
        f"    calculatorAllowed: {str(calc).lower()},\n"
        f"  }}"
    )


# ============================================================================
# LONG FRQs — ~25 minutes, 7 points each, 4 parts (a)-(d)
# ============================================================================

LONG_1 = frq(
    "hg-long-1", "long", 2, "Demographic Transition & 21st-Century Migration",
    "Country X reached an annual rate of natural increase of roughly 0.2% by 2020 with a total fertility rate (TFR) of 1.4 (well below replacement of 2.1) and a median age of 47, while simultaneously receiving large numbers of working-age migrants from Country Y, where TFR is 4.5 and median age is 18. Use models, named geographers, and dated examples to address the prompt.",
    [
        part("(a)",
             "Identify which stage of the Demographic Transition Model (DTM) best describes Country X and which stage best describes Country Y, and explain the reasoning using TFR and natural increase.",
             2,
             [
                 (1, "Correctly assigns DTM stages: Country X = Stage 4 or 5; Country Y = Stage 2 (or early 3)",
                     ["Stage 4", "Stage 5", "Stage 2", "Stage 3", "demographic transition", "DTM", "Warren Thompson", "1929"]),
                 (1, "Justifies the assignment using TFR (1.4 vs 4.5), natural increase, and median age",
                     ["below replacement", "2.1", "TFR", "natural increase", "median age", "47", "18", "high CBR", "low CDR"]),
             ],
             "Country X is in DTM Stage 4 (and arguably entering Stage 5): TFR of 1.4 is well below the 2.1 replacement level, natural increase is near zero, and median age is 47 — the classic profile of post-industrial Europe and Japan. Country Y is in Stage 2 (high CBR, falling CDR) — TFR of 4.5 and median age of 18 indicate a youth bulge typical of sub-Saharan Africa today. Warren Thompson's 1929 DTM framework anticipated exactly this divergence between industrialized and industrializing societies."),
        part("(b)",
             "Using ONE of Ernst Ravenstein's Laws of Migration (1885) or Everett Lee's push-pull framework (1966), explain ONE specific reason migrants move from Country Y to Country X.",
             2,
             [
                 (1, "Correctly names a specific Ravenstein Law (1885) or Lee's push-pull factors (1966) and dates it",
                     ["Ravenstein", "1885", "Laws of Migration", "Lee", "1966", "push factor", "pull factor", "intervening obstacle", "step migration"]),
                 (1, "Applies the law to a concrete economic, demographic, or political driver",
                     ["wages", "labor demand", "youth bulge", "unemployment", "remittances", "family reunification", "demographic complementarity"]),
             ],
             "Ravenstein's 1885 observation that 'most migrants move for economic reasons' fits Country Y → Country X directly: Country Y's youth bulge (median age 18) generates excess labor supply, while Country X's aging workforce (median age 47) creates labor demand in care, construction, and agriculture. Lee's 1966 push-pull framework adds that perceived wage differentials (a pull) and unemployment in Y (a push) drive the flow, modulated by intervening obstacles such as visa regimes and Mediterranean or US-Mexico border enforcement."),
        part("(c)",
             "Explain ONE specific demographic or political consequence of below-replacement fertility for Country X, citing a real 2010s–2020s policy response.",
             2,
             [
                 (1, "Identifies a concrete consequence (dependency ratio, pension funding, labor shortage, depopulation of rural regions)",
                     ["dependency ratio", "elderly", "pension", "labor shortage", "depopulation", "shrinking workforce", "old-age dependency"]),
                 (1, "Cites a real, dated pro-natalist or pro-immigration policy (e.g., Hungary 2019 family policy, Japan 2015 'womenomics', Germany 2015 Wir schaffen das, France allocations familiales)",
                     ["Hungary", "2019", "Japan", "2015", "Germany", "Merkel", "Wir schaffen das", "France", "South Korea", "2024"]),
             ],
             "Below-replacement fertility raises the old-age dependency ratio, straining public pensions and producing sectoral labor shortages — Japan's working-age population peaked in 1995 and has since shrunk by over 13 million. Policy responses include Hungary's 2019 lifetime income tax exemption for mothers of four, Germany's 2015 'Wir schaffen das' acceptance of ~1 million Syrian refugees (partly framed as long-term labor supply), and South Korea's 2024 declaration of a national demographic emergency after TFR fell to 0.72 in 2023."),
        part("(d)",
             "Evaluate ONE long-term political or geographic consequence of large-scale 21st-century migration for either Country X or Country Y, using a specific case from 2011–2024.",
             1,
             [
                 (1, "Provides a defensible evaluative claim tied to a dated case (Syrian refugee crisis 2011-, Venezuelan exodus 2015-, US-Mexico border 2014/2019/2023, Brexit 2016, EU-Turkey deal 2016)",
                     ["Syria", "2011", "Venezuela", "2015", "Brexit", "2016", "EU-Turkey", "remittances", "brain drain", "diaspora", "border enforcement"]),
             ],
             "The Syrian civil war (2011–) displaced over 13 million people by 2024 (UNHCR), reshaping European politics: the EU-Turkey deal (March 2016) effectively externalized EU border enforcement, the 2016 Brexit referendum was driven in part by anti-immigration sentiment after Merkel's 2015 admission of ~1 million refugees, and Sweden's Sverigedemokraterna became its second-largest party in 2022 — illustrating Saskia Sassen's argument that 21st-century migration restructures sovereignty itself."),
    ],
    7, "~25 minutes",
)


LONG_2 = frq(
    "hg-long-2", "long", 3, "Cultural Diffusion, Language & Religion",
    "Use specific named geographers, dated diffusion events, and primary linguistic or religious examples to address the prompt below on cultural geography between roughly 1500 and the present.",
    [
        part("(a)",
             "Define the four types of cultural diffusion in Torsten Hägerstrand's framework (1953) — relocation, contagious, hierarchical, and stimulus — and provide ONE concrete historical example of each.",
             2,
             [
                 (1, "Correctly defines all four types tied to Hägerstrand (1953)",
                     ["Hägerstrand", "1953", "relocation", "contagious", "hierarchical", "stimulus", "expansion diffusion"]),
                 (1, "Provides a concrete example for at least three of the four types",
                     ["Bantu migration", "COVID-19", "fast food", "K-pop", "Hinduism", "Buddhism", "Christianity", "TikTok", "global cities"]),
             ],
             "Torsten Hägerstrand's 1953 *Innovation Diffusion as a Spatial Process* distinguishes: (1) relocation diffusion — Bantu speakers carrying language and ironworking from West Africa across central/southern Africa c. 1000 BCE–500 CE; (2) contagious — COVID-19's person-to-person spread from Wuhan in late 2019; (3) hierarchical — McDonald's expansion from US cities to global cities (Tokyo 1971, Moscow 1990) before reaching smaller cities; and (4) stimulus — the underlying fast-food concept adapting locally (McSpicy Paneer in India 1996, McArabia in the Middle East 2003) rather than the original menu spreading unchanged."),
        part("(b)",
             "Using ONE specific religion's historical diffusion (Islam, Christianity, Buddhism, or Hinduism), explain how its spatial pattern combines two or more of Hägerstrand's diffusion types.",
             2,
             [
                 (1, "Names the religion's hearth, dates of expansion, and at least one primary route or event",
                     ["Mecca", "622", "Hijra", "Jerusalem", "Rome", "Constantine", "313", "Bodh Gaya", "Indus Valley", "Silk Road", "missionaries"]),
                 (1, "Explicitly identifies the diffusion types operating (relocation + contagious, hierarchical + stimulus, etc.)",
                     ["relocation", "contagious", "hierarchical", "stimulus", "syncretism", "creolization", "missionaries", "trade networks"]),
             ],
             "Islam diffused from its hearth in Mecca after Muhammad's 622 Hijra to Medina through a combination of: (1) contagious diffusion across the Arabian peninsula by 632; (2) hierarchical/relocation diffusion via Umayyad and Abbasid conquest reaching Damascus (661), Córdoba (756), and Baghdad (762); (3) relocation via trans-Saharan trade carrying Islam to the Mali Empire by Mansa Musa's 1324 hajj; and (4) stimulus diffusion in Southeast Asia, where Islam syncretized with prior Hindu-Buddhist traditions in the 13th–16th-century Sultanates of Malacca and Aceh."),
        part("(c)",
             "Explain ONE process of language change discussed by AP HG sources (e.g., creolization, lingua franca formation, language extinction), citing a specific named language and date.",
             2,
             [
                 (1, "Names a specific named language process and concrete language",
                     ["lingua franca", "English", "creolization", "Haitian Creole", "1804", "Tok Pisin", "Swahili", "language extinction", "endangered languages"]),
                 (1, "Cites a quantitative or institutional fact (UNESCO endangered list, EF EPI, Singapore 1965 bilingual policy)",
                     ["UNESCO", "Atlas of Languages", "endangered", "Singapore", "1965", "Lee Kuan Yew", "EU 1993", "lingua franca"]),
             ],
             "English became the dominant 20th–21st-century lingua franca through hierarchical diffusion via the British Empire and post-WWII US economic primacy: Singapore's 1965 bilingual education policy under Lee Kuan Yew designated English as the working language alongside mother tongues, and the EU has used English as its de facto working language since 1993 even after Brexit. Meanwhile, UNESCO's *Atlas of the World's Languages in Danger* lists ~2,500 languages as endangered, with one language disappearing roughly every two weeks — Mati Ke (Australia) and Eyak (Alaska, last fluent speaker died 2008) are documented losses."),
        part("(d)",
             "Evaluate the claim that globalization produces cultural homogenization. Use a specific case from the 2000s–2020s.",
             1,
             [
                 (1, "Provides a defensible evaluative claim with a dated case engaging both homogenization (Ritzer, McDonaldization 1993) AND glocalization or hybridity (Robertson 1995)",
                     ["Ritzer", "1993", "McDonaldization", "Robertson", "1995", "glocalization", "K-pop", "BTS", "TikTok", "Bollywood", "hybridity", "Appadurai"]),
             ],
             "George Ritzer's *McDonaldization of Society* (1993) argued that efficiency, calculability, predictability, and control spread globally with US franchises, but Roland Robertson's 1995 concept of glocalization and Arjun Appadurai's 1996 *Modernity at Large* show simultaneous local adaptation and reverse flows: K-pop's global rise (BTS topping the Billboard Hot 100 in 2020), Bollywood's $2.7 billion 2023 box office, and TikTok's transformation from Beijing-based ByteDance to a US cultural force after 2018 all show that 21st-century cultural geography is better described as hybridization than one-way Americanization."),
    ],
    7, "~25 minutes",
)


LONG_3 = frq(
    "hg-long-3", "long", 4, "Political Geography: Devolution & Supranationalism",
    "The post-1945 political map has been shaped by two opposing forces: supranational integration (EU, ASEAN, NATO) and devolutionary pressures within established states (Scotland, Catalonia, Quebec, Kurdistan). Use named theorists, dated events, and primary documents to address the prompt below.",
    [
        part("(a)",
             "Define state, nation, and nation-state, and identify ONE example each of: (i) a multinational state, and (ii) a stateless nation, citing real cases.",
             2,
             [
                 (1, "Correctly distinguishes state (sovereign territory), nation (cultural group), nation-state (alignment of the two)",
                     ["state", "nation", "nation-state", "sovereignty", "Westphalia", "1648", "Friedrich Ratzel", "1897"]),
                 (1, "Names a real multinational state (UK, Canada, Belgium, Russia, Spain) and a real stateless nation (Kurds, Palestinians, Catalans, Tibetans, Basques)",
                     ["multinational", "United Kingdom", "Belgium", "Canada", "Spain", "stateless", "Kurds", "Palestinians", "Catalans", "Basques", "Tibetans"]),
             ],
             "A *state* is a sovereign political unit with defined borders (the Westphalian model after 1648); a *nation* is a culturally cohesive group with shared identity; a *nation-state* aligns the two (Iceland, Japan, post-1991 Slovenia approach this ideal). The United Kingdom is a multinational state encompassing English, Scottish, Welsh, and Northern Irish nations; the Kurds (~30 million across Turkey, Iraq, Iran, and Syria) are the largest stateless nation, denied a homeland after the 1923 Treaty of Lausanne replaced the 1920 Treaty of Sèvres."),
        part("(b)",
             "Using ONE specific case from 2014–2024, explain how devolutionary pressures have reshaped a state. Identify the specific institutional outcome (referendum result, devolved powers, secession attempt).",
             2,
             [
                 (1, "Names a specific dated case: Scotland indyref (Sept 18, 2014), Brexit (June 23, 2016), Catalonia (Oct 1, 2017), South Sudan (July 2011), Quebec (1995)",
                     ["Scotland", "2014", "indyref", "Brexit", "2016", "Catalonia", "2017", "South Sudan", "2011", "Quebec", "1995"]),
                 (1, "Explains the institutional outcome: result, devolved powers, response by central government",
                     ["result", "55%", "Article 50", "puigdemont", "155", "self-determination", "asymmetric devolution", "Holyrood"]),
             ],
             "Scotland held an independence referendum on September 18, 2014, with No winning 55.3% to 44.7%; a key driver was asymmetric devolution since the 1998 Scotland Act created the Scottish Parliament at Holyrood. The June 23, 2016 Brexit referendum then produced a 62%–38% Remain vote in Scotland against the UK-wide 52%–48% Leave, reigniting independence demands. Catalonia's October 1, 2017 referendum (declared illegal by Spain's Constitutional Court) and Carles Puigdemont's October 27 declaration of independence triggered Article 155 direct rule by Madrid — illustrating how devolutionary pressure can be contained as well as accommodated."),
        part("(c)",
             "Explain ONE function of a major supranational organization (EU, ASEAN, NATO, AU, USMCA), using a dated treaty or action.",
             2,
             [
                 (1, "Names the supranational organization, founding date, and a specific treaty/action",
                     ["EU", "Maastricht", "1993", "ASEAN", "1967", "NATO", "1949", "AU", "2002", "USMCA", "2020", "African Continental Free Trade Area", "AfCFTA", "2021"]),
                 (1, "Explains the function: economic integration, defense, mobility, monetary union, dispute resolution",
                     ["customs union", "single market", "Article 5", "monetary union", "euro", "1999", "free movement", "Schengen", "1995", "AfCFTA"]),
             ],
             "The European Union was created by the Maastricht Treaty (signed February 7, 1992; in force November 1, 1993), establishing the single market's four freedoms (goods, services, capital, labor), the euro (1999, physical currency 2002), and the Schengen Area (1995). NATO's collective-defense Article 5 has been invoked once — after the September 11, 2001 attacks. ASEAN (founded August 8, 1967 in Bangkok) has expanded from 5 to 10 members and operates the ASEAN Economic Community (2015). The African Continental Free Trade Area (AfCFTA) entered force January 1, 2021 with 54 of 55 AU member states."),
        part("(d)",
             "Evaluate the claim that supranationalism and devolution are opposite forces. Use ONE case to defend a more nuanced position.",
             1,
             [
                 (1, "Provides a defensible nuanced claim citing a case where they reinforce each other (e.g., EU enabling Scottish independence aspirations, Catalonia within EU, devolution + EU regional funding)",
                     ["EU regional policy", "Scotland EU", "Catalonia", "regional autonomy", "subsidiarity", "Maastricht", "Committee of the Regions", "structural funds"]),
             ],
             "The two forces are often complementary rather than opposed: the EU's principle of subsidiarity (Maastricht, 1993) and Committee of the Regions deliberately empower sub-state governments, and the EU's structural and cohesion funds bypass national capitals to invest directly in regions like Catalonia, Wales, and Lombardy. Scottish independence campaigners in 2014 explicitly framed independence as 'independence within Europe' — a 'sovereignty pooling' that would substitute EU membership for UK union. Brexit (2016) disrupted this pattern by removing the EU 'cushion,' and post-2016 Scottish nationalism has had to argue independence with no automatic EU re-entry."),
    ],
    7, "~25 minutes",
)


LONG_4 = frq(
    "hg-long-4", "long", 6, "Urbanization, Urban Models & 21st-Century Megacities",
    "Use the urban models of Burgess (1925), Hoyt (1939), Harris–Ullman (1945), Griffin–Ford (1980), and Joel Garreau (1991), together with named megacities and dated examples, to address the prompt below.",
    [
        part("(a)",
             "Identify and briefly describe THREE classic North American urban models, naming the geographer and date for each.",
             2,
             [
                 (1, "Names two of: Burgess concentric zone (1925), Hoyt sector (1939), Harris-Ullman multiple nuclei (1945), Garreau edge city (1991)",
                     ["Burgess", "1925", "concentric zone", "Hoyt", "1939", "sector", "Harris", "Ullman", "1945", "multiple nuclei", "Garreau", "1991", "edge city"]),
                 (1, "Names a third model and identifies its core spatial logic",
                     ["CBD", "transportation corridors", "wedges", "polynuclear", "highway interchange", "automobile"]),
             ],
             "Ernest Burgess's 1925 concentric zone model (Chicago School) describes rings of land use radiating outward from the CBD: CBD, transition zone, working-class housing, middle-class housing, commuter zone. Homer Hoyt's 1939 sector model — based on FHA mortgage data — replaces rings with wedge-shaped sectors aligned to transportation corridors, so wealthy neighborhoods extend outward as a sector rather than a ring. Chauncy Harris and Edward Ullman's 1945 multiple-nuclei model accounts for polynuclear cities like Los Angeles where heavy industry, retail, and high-end housing each form their own nuclei. Joel Garreau's 1991 *Edge City* identifies post-1980 suburban activity centers (Tysons Corner, Schaumburg) clustered around highway interchanges — the post-automobile reorganization of US urban form."),
        part("(b)",
             "Using ONE specific Latin American or East Asian megacity, apply the Griffin–Ford (1980) Latin American city model OR a named alternative model and explain ONE pattern it captures.",
             2,
             [
                 (1, "Identifies the model (Griffin-Ford 1980 Latin American city; McGee 1967 Southeast Asian city; sub-Saharan African city model) and a named city",
                     ["Griffin", "Ford", "1980", "Latin American", "McGee", "1967", "Southeast Asian", "Mexico City", "São Paulo", "Mumbai", "Lagos", "Manila", "Jakarta"]),
                 (1, "Explains a specific pattern: spine, disamenity sector, squatter ring, primate city, port-oriented commercial zone",
                     ["spine", "elite sector", "disamenity", "squatter", "favela", "barrio", "ring of poverty", "primate city", "informal settlements"]),
             ],
             "Griffin and Ford's 1980 Latin American city model (refined by Larry Ford in 1996) shows São Paulo and Mexico City with a dual CBD (traditional + modern), a wealthy 'spine' of high-end housing extending outward from the CBD along major boulevards, and a peripheral ring of squatter settlements (favelas in Brazil, colonias in Mexico) reversing the Burgess pattern in which the urban poor live closest to the center. Disamenity sectors — physically dangerous, often unserviced — house the most marginalized populations (e.g., Rio's hillside favelas like Rocinha, with ~70,000–100,000 residents)."),
        part("(c)",
             "Explain ONE specific challenge facing 21st-century megacities, citing a named city and a dated example or statistic.",
             2,
             [
                 (1, "Identifies a specific challenge: housing/informal settlements, transportation, environmental, climate, water, sanitation, governance",
                     ["informal settlements", "Lagos", "Mumbai", "Dharavi", "transportation", "air pollution", "PM2.5", "water scarcity", "Cape Town Day Zero", "2018", "climate vulnerability"]),
                 (1, "Cites a specific dated case or quantitative figure (UN-Habitat, AQI, Day Zero, sea-level)",
                     ["UN-Habitat", "1 billion slum dwellers", "Cape Town", "2018", "Day Zero", "Jakarta", "sinking", "relocate", "2024 Nusantara", "Delhi AQI"]),
             ],
             "Cape Town faced 'Day Zero' on April 12, 2018 (later postponed) when its dam levels fell to 13.5% during a multi-year drought, requiring residents to limit consumption to 50 liters per person per day. Jakarta is sinking 25 cm/year in northern districts, prompting Indonesia's 2019 announcement and 2022 legislation to relocate the capital to Nusantara on Borneo by 2024. Delhi's PM2.5 levels routinely exceed 300 µg/m³ in winter (vs. WHO guideline of 5), and UN-Habitat estimates ~1 billion people live in informal settlements globally — Mumbai's Dharavi alone houses ~700,000–1 million on roughly 2.4 km²."),
        part("(d)",
             "Evaluate the relevance of Wallerstein's World Systems Theory (1974) for understanding the relationship between core, semi-peripheral, and peripheral cities in the 21st century.",
             1,
             [
                 (1, "Provides a defensible claim engaging Wallerstein (1974) and naming both core (NYC, London, Tokyo) and semi-periphery/periphery cities; bonus for engaging Saskia Sassen's *Global City* (1991) or Friedmann's world city hypothesis (1986)",
                     ["Wallerstein", "1974", "World Systems", "core", "semi-periphery", "periphery", "Sassen", "1991", "Global City", "Friedmann", "1986", "Shanghai", "Mumbai", "Lagos"]),
             ],
             "Immanuel Wallerstein's *The Modern World-System* (1974) framed cores as nodes of high-value production and peripheries as suppliers of raw labor and materials; Saskia Sassen's *The Global City* (1991) updated this for finance, identifying NYC, London, and Tokyo as command-and-control nodes for the global economy. The framework still illuminates 21st-century urban hierarchy — Lagos and Dhaka serve as labor reservoirs feeding garment supply chains for H&M and Zara (Rana Plaza collapse, April 24, 2013, killed 1,134 garment workers in Bangladesh) — but oversimplifies the rise of semi-peripheral mega-cities like Shanghai, Bengaluru, and São Paulo, which now host both core-tier financial services and peripheral informal settlements within a single metropolitan area."),
    ],
    7, "~25 minutes",
)


# ============================================================================
# SHORT FRQs — ~12 minutes, 4 points each, 4 parts (a)-(d), 1 pt each
# ============================================================================

SHORT_1 = frq(
    "hg-short-1", "short", 1, "Maps, Projections & Geospatial Technologies",
    "Maps and geospatial technologies are tools as well as arguments. Use named projections, scales, and dated technologies to address the prompt.",
    [
        part("(a)",
             "Identify the major distortion of the Mercator projection (1569) and explain why it persists in Web Mercator (used by Google Maps since 2005).",
             1,
             [
                 (1, "Names Gerardus Mercator (1569), area distortion at high latitudes, and Web Mercator's preservation of local angles for navigation/zoom",
                     ["Mercator", "1569", "area distortion", "Greenland", "Africa", "conformal", "Web Mercator", "Google Maps", "2005", "navigation"])
             ],
             "Gerardus Mercator's 1569 cylindrical projection preserves angles (conformal) at the cost of dramatically inflating areas at high latitudes — Greenland appears similar in size to Africa, though Africa is ~14× larger. Web Mercator (used by Google Maps since 2005, Bing, OpenStreetMap) inherits this distortion because conformality keeps north-up and preserves local angles, which is what users expect for navigation and what makes seamless zooming work."),
        part("(b)",
             "Distinguish between absolute, relative, and cognitive distance, giving ONE concrete example of each.",
             1,
             [
                 (1, "Defines all three with a concrete example for each",
                     ["absolute distance", "relative", "cognitive", "mental map", "kilometers", "travel time", "perception", "Lynch", "1960"])
             ],
             "Absolute distance is measured in fixed units — Manhattan to JFK is ~26 km. Relative distance changes with context — that same 26 km is ~50 minutes by AirTrain+subway but ~25 minutes by helicopter, so relative distance shrinks with technology. Cognitive distance is perceived — Kevin Lynch's *The Image of the City* (1960) showed that residents systematically distort distances based on familiarity and emotional salience, often overestimating distances to unfamiliar areas."),
        part("(c)",
             "Explain ONE use of GIS (Geographic Information Systems) in 21st-century policy or business decision-making.",
             1,
             [
                 (1, "Names GIS (or a specific platform like ArcGIS, QGIS) and a concrete dated application (epidemiology, retail siting, redistricting, climate adaptation)",
                     ["GIS", "ArcGIS", "Esri", "epidemiology", "Snow", "1854", "retail", "site selection", "redistricting", "John Snow", "COVID-19", "Johns Hopkins", "2020"])
             ],
             "GIS underlay the Johns Hopkins COVID-19 dashboard (launched January 22, 2020) that aggregated case counts globally — built on Esri's ArcGIS platform — illustrating GIS's role in real-time public-health decision-making. The technique extends John Snow's 1854 Broad Street pump map (often credited as proto-GIS) to layered, real-time, queryable spatial analysis used in everything from Starbucks site selection to post-2020 redistricting."),
        part("(d)",
             "Identify ONE limitation or critique of GIS and remote sensing as decision-making tools.",
             1,
             [
                 (1, "Names a specific limitation: data bias, surveillance, MAUP, digital divide, ecological fallacy",
                     ["MAUP", "modifiable areal unit", "ecological fallacy", "digital divide", "surveillance", "redlining", "data bias", "Openshaw", "1984"])
             ],
             "GIS is vulnerable to the Modifiable Areal Unit Problem (MAUP), formalized by Stan Openshaw in 1984: the same point data aggregated to different boundaries (census tracts vs. ZIP codes vs. police precincts) can yield contradictory statistical conclusions — a critical issue in racial/ethnic analysis, redlining studies, and gerrymandering. Critical GIS scholars (e.g., Nadine Schuurman) also point to data-collection bias: areas with weaker digital infrastructure (rural Sub-Saharan Africa, refugee camps) are systematically under-mapped, reproducing colonial cartographic silences."),
    ],
    4, "~12 minutes",
)


SHORT_2 = frq(
    "hg-short-2", "short", 5, "Agricultural Origins, Von Thünen & the Green Revolution",
    "Agricultural geography combines deep historical hearths, classical location theory, and 20th-century technological revolutions. Use named theorists, dated revolutions, and primary cases.",
    [
        part("(a)",
             "Identify TWO major agricultural hearths and the principal crops domesticated in each, citing approximate dates.",
             1,
             [
                 (1, "Names two hearths with crops and dates: Fertile Crescent (wheat, barley c. 9000 BCE), Mesoamerica (maize c. 7000 BCE), East Asia (rice c. 8000 BCE), Andean (potato), West Africa (sorghum, yam)",
                     ["Fertile Crescent", "wheat", "barley", "9000 BCE", "Mesoamerica", "maize", "7000 BCE", "Yangtze", "rice", "Andes", "potato", "Sauer", "1952"])
             ],
             "Carl Sauer's *Agricultural Origins and Dispersals* (1952) identified multiple independent hearths: the Fertile Crescent domesticated wheat and barley c. 9000 BCE; Mesoamerica domesticated maize c. 7000 BCE and squash slightly earlier; East Asia (Yangtze valley) domesticated rice c. 8000 BCE; the Andes domesticated potato c. 7000 BCE; and West Africa domesticated sorghum, pearl millet, and yams c. 3000 BCE."),
        part("(b)",
             "Explain Johann Heinrich von Thünen's 1826 model and identify ONE assumption that limits its applicability today.",
             1,
             [
                 (1, "Correctly explains von Thünen's *Der Isolierte Staat* (1826) concentric rings (market gardening/dairy → forest → grains → ranching) and a key assumption (isotropic plain, single market, transport cost proportional to distance)",
                     ["von Thünen", "1826", "Isolierte Staat", "isolated state", "market gardening", "dairy", "grain", "ranching", "isotropic", "transport cost"])
             ],
             "Johann Heinrich von Thünen's 1826 *Der Isolierte Staat* derived a concentric ring model in which land use depends on transport cost to a single central market: market gardening and dairy (perishable, high-value) closest in, then forest, then grains, then extensive ranching at the periphery. The model assumes an isotropic plain with uniform fertility, a single market, and transport cost proportional to distance — assumptions broken by 20th-century refrigerated shipping, air freight (Kenya cut flowers flown to Amsterdam daily), and global agricultural supply chains, though the underlying logic still appears at metropolitan scale (truck farming in NJ vs. cattle ranching in Wyoming)."),
        part("(c)",
             "Explain ONE major change brought by the Green Revolution (c. 1940s–1970s), naming a specific scientist or institution.",
             1,
             [
                 (1, "Identifies Norman Borlaug, IR8 rice (IRRI 1966), or CIMMYT, and a measurable yield/food-security change",
                     ["Borlaug", "1970", "Nobel Peace Prize", "IRRI", "1966", "IR8", "miracle rice", "CIMMYT", "Mexico", "India", "Punjab", "yield", "high-yield variety", "HYV"])
             ],
             "Norman Borlaug's high-yield semi-dwarf wheat — developed at CIMMYT in Mexico in the 1940s–60s — and IRRI's 1966 release of IR8 'miracle rice' in the Philippines doubled or tripled cereal yields in India, Pakistan, the Philippines, and Mexico. India's wheat production rose from 12 million tonnes (1965) to 20 million tonnes (1970), helping avert famine forecasts; Borlaug received the Nobel Peace Prize in 1970, sometimes credited with saving over a billion lives — though critics note rising chemical-input costs, groundwater depletion in Punjab, and concentration of benefits among larger farmers."),
        part("(d)",
             "Identify ONE critique of the Green Revolution articulated by 21st-century geographers or food-systems scholars.",
             1,
             [
                 (1, "Names a critique with a specific source: Vandana Shiva (*Violence of the Green Revolution*, 1991), groundwater depletion, agribusiness consolidation, biodiversity loss, indebtedness",
                     ["Shiva", "1991", "Violence of the Green Revolution", "Punjab", "groundwater", "biodiversity", "monoculture", "indebtedness", "Bt cotton", "agribusiness"])
             ],
             "Vandana Shiva's *The Violence of the Green Revolution* (1991) argued that high-yield-variety packages bundled seeds with chemical fertilizers, irrigation, and credit — concentrating agricultural power in agribusiness and indebting smallholders. Documented effects include groundwater depletion in Punjab (water tables falling >50 cm/year in parts of the state), erosion of crop-genetic diversity (India lost an estimated 90% of traditional rice varieties), and waves of farmer suicides linked to indebtedness from Bt cotton inputs after 2002 — even as aggregate yields rose."),
    ],
    4, "~12 minutes",
)


SHORT_3 = frq(
    "hg-short-3", "short", 2, "Population Theory: Malthus, Boserup & 21st-Century Policies",
    "Use named theorists, dated policies, and quantitative population data to address the prompt below on population dynamics.",
    [
        part("(a)",
             "Summarize Thomas Malthus's argument in *An Essay on the Principle of Population* (1798) and explain its core prediction.",
             1,
             [
                 (1, "Correctly summarizes Malthus 1798: population grows geometrically, food arithmetically, leading to checks (positive: famine/war/disease; preventive: moral restraint)",
                     ["Malthus", "1798", "Essay on the Principle of Population", "geometric", "arithmetic", "positive checks", "preventive checks", "famine", "moral restraint"])
             ],
             "Thomas Malthus's *Essay on the Principle of Population* (1798) argued that population, unchecked, grows geometrically (1, 2, 4, 8) while food supply grows arithmetically (1, 2, 3, 4), so population must be held in check by either 'positive checks' (famine, disease, war) or 'preventive checks' (delayed marriage, moral restraint). His core prediction was that population would always tend to outrun the food supply unless deliberately checked."),
        part("(b)",
             "Explain how Ester Boserup's *The Conditions of Agricultural Growth* (1965) inverted Malthus's logic.",
             1,
             [
                 (1, "Correctly summarizes Boserup 1965: population pressure drives agricultural intensification rather than collapse",
                     ["Boserup", "1965", "Conditions of Agricultural Growth", "intensification", "population pressure", "innovation", "shortened fallow", "induced intensification"])
             ],
             "Ester Boserup's 1965 *The Conditions of Agricultural Growth* inverted Malthus by arguing that population pressure is the *cause* of agricultural intensification rather than a consequence to be checked: as densities rise, societies shorten fallow periods, adopt the plow, irrigate, and innovate, raising carrying capacity. The Green Revolution (Borlaug 1940s–70s) is often cited as Boserupian — induced intensification responding to demographic pressure rather than collapsing under it."),
        part("(c)",
             "Identify ONE major anti-natalist or pro-natalist national policy of the late 20th or 21st century, citing the country, dates, and specific mechanism.",
             1,
             [
                 (1, "Names a specific policy: China One-Child (1979–2015, replaced by Two-Child 2016, Three-Child 2021), India sterilization (1975-77 Emergency), Hungary 2019 family policy, Japan 2015 'womenomics', Singapore 'Stop at Two' (1972) → 'Have Three or More' (1987)",
                     ["China", "One-Child", "1979", "2015", "Two-Child", "2016", "Three-Child", "2021", "Singapore", "Stop at Two", "1972", "Hungary", "2019", "Japan", "Iran", "1989"])
             ],
             "China's One-Child Policy (1979–2015) used economic penalties, mandatory IUDs, and forced sterilizations/abortions to lower TFR; it was relaxed to a Two-Child Policy in 2016 and a Three-Child Policy in May 2021 after the 2020 census revealed TFR had fallen to ~1.3. Estimated 'missing women' from sex-selective abortion under the policy total 30+ million. Singapore conducted the opposite reversal — its 1972 'Stop at Two' campaign (with disincentives for third children) was reversed in 1987 to 'Have Three or More if you can afford it' once TFR fell below replacement."),
        part("(d)",
             "Evaluate whether Malthus's framework remains useful for analyzing 21st-century food security.",
             1,
             [
                 (1, "Provides a defensible evaluative claim citing both Malthusian-resonant (climate-driven yield decline, Sahel) and Boserupian (continued productivity growth) evidence",
                     ["climate change", "Sahel", "FAO", "food insecurity", "Boserupian", "agricultural innovation", "yield growth", "Lancet Planetary Health"])
             ],
             "Malthus's framework remains partially useful: the FAO's 2023 *State of Food Security* report estimated 735 million people undernourished in 2022 — a Malthusian-feeling statistic, with Sahel and Yemen showing classic 'positive checks' from drought and conflict. But Boserupian intensification still dominates the aggregate — global per-capita food production has risen since 1961 even as population tripled, and the IPCC AR6 (2023) projects climate-driven yield risks chiefly through *changes in production patterns* (which Boserupians can adapt to) rather than absolute resource exhaustion. The most defensible position is that Malthusian dynamics operate locally and shorter-term, while Boserupian dynamics dominate at the aggregate, longer-term scale."),
    ],
    4, "~12 minutes",
)


SHORT_4 = frq(
    "hg-short-4", "short", 7, "Industry, Development & Global Supply Chains",
    "Use named theorists, dated treaties, and specific corporate/industrial cases to address the prompt below on industrial geography and global development.",
    [
        part("(a)",
             "Summarize Walt Rostow's *The Stages of Economic Growth* (1960) and identify ONE major critique.",
             1,
             [
                 (1, "Correctly summarizes Rostow's five stages (traditional → preconditions → take-off → drive to maturity → high mass consumption) and a critique (Eurocentric, linear, ignores colonial context — André Gunder Frank 1966; dependency theory)",
                     ["Rostow", "1960", "Stages of Economic Growth", "take-off", "high mass consumption", "Eurocentric", "Frank", "1966", "dependency theory", "Wallerstein", "1974"])
             ],
             "Walt Rostow's 1960 *The Stages of Economic Growth: A Non-Communist Manifesto* posited a linear progression — traditional society → preconditions for take-off → take-off → drive to maturity → high mass consumption — and used Britain (1780s take-off), the US (1840s), and Japan (1880s) as exemplars. André Gunder Frank's 1966 *The Development of Underdevelopment* and Wallerstein's 1974 *Modern World-System* critique Rostow as Eurocentric and ahistorical, arguing that 'underdevelopment' is *produced* by core–periphery exploitation rather than a stage every country independently passes through."),
        part("(b)",
             "Explain Alfred Weber's least-cost theory of industrial location (1909) and identify ONE assumption that limits its applicability today.",
             1,
             [
                 (1, "Correctly summarizes Weber 1909: location minimizes transport, labor, and agglomeration costs; ONE limiting assumption (perfect competition, fixed input locations, ignores environmental regulation, just-in-time)",
                     ["Weber", "1909", "least cost", "transport", "labor", "agglomeration", "weight-losing", "weight-gaining", "footloose", "just-in-time"])
             ],
             "Alfred Weber's 1909 *Theory of the Location of Industries* sought to identify the location that minimizes transport + labor costs, modified by agglomeration economies; weight-losing industries (steel, sawmills) locate near raw materials, weight-gaining (bottling) near markets. Today, however, footloose industries (semiconductors, software) and just-in-time supply chains (Toyota Production System, 1970s) make labor cost, regulation, and corporate-tax arbitrage often more decisive than physical transport — TSMC's 2020–24 global plant siting decisions in Arizona, Kumamoto, and Dresden were driven primarily by geopolitics and subsidies (CHIPS Act 2022), not transport minimization."),
        part("(c)",
             "Explain ONE specific 21st-century example of new international division of labor or global supply-chain restructuring.",
             1,
             [
                 (1, "Names a specific case with date: NAFTA (Jan 1, 1994) → USMCA (July 1, 2020), maquiladoras, China WTO accession (Dec 11, 2001), Bangladesh garment industry, Rana Plaza collapse (Apr 24, 2013), CHIPS Act (Aug 2022), reshoring",
                     ["NAFTA", "1994", "USMCA", "2020", "maquiladoras", "China", "WTO", "2001", "Bangladesh", "Rana Plaza", "2013", "1134", "CHIPS Act", "2022", "reshoring", "friend-shoring"])
             ],
             "China's December 11, 2001 accession to the WTO accelerated the New International Division of Labor — by 2010 China had become the world's largest manufacturer, with electronics, textiles, and assembly concentrated in Pearl River and Yangtze River Deltas. Bangladesh's garment industry (~$47 billion in 2022 exports, second only to China) employs ~4 million workers, primarily women — and the April 24, 2013 Rana Plaza collapse killed 1,134 garment workers, leading to the Accord on Fire and Building Safety (May 2013) signed by H&M, Zara, and Primark. Post-2020 'friend-shoring' (Yellen, April 2022) and the CHIPS and Science Act (signed August 9, 2022) signal renewed geopolitical reshaping of supply chains."),
        part("(d)",
             "Identify ONE measure of human development beyond GDP and explain why it matters.",
             1,
             [
                 (1, "Names HDI (UNDP 1990, Mahbub ul Haq + Amartya Sen), Gender Development Index, Multidimensional Poverty Index, or Gini coefficient and explains its purpose",
                     ["HDI", "Human Development Index", "UNDP", "1990", "Mahbub ul Haq", "Amartya Sen", "GDI", "Gender Inequality Index", "MPI", "Gini", "purchasing power parity"])
             ],
             "The Human Development Index (HDI), introduced by the UNDP in its first *Human Development Report* (1990) under Mahbub ul Haq's leadership and informed by Amartya Sen's capability approach, combines life expectancy, education (mean and expected years of schooling), and GNI per capita (PPP) into a 0–1 scale. It matters because GDP can rise alongside high inequality, child mortality, or short life expectancy — Equatorial Guinea ranked among Africa's highest GDP-per-capita states in the 2010s but had an HDI ranking of ~145, a divergence that pure GDP would obscure."),
    ],
    4, "~12 minutes",
)


HEADER = '''/**
 * AP Human Geography — FRQ Practice Question Pool
 * AUTO-GENERATED by scripts/write-hg-frqs.py
 *
 * Format mirrors College Board AP Human Geography exam: long source/data prompts (~25 min, 7 pts)
 * and shorter source/data prompts (~12 min, 4 pts), each with 4 parts (a)–(d).
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

export interface HumanGeoFRQ {
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

'''

FOOTER = '''

export const apHumanGeoFRQs: HumanGeoFRQ[] = [...longFRQs, ...shortFRQs]

export function getApHumanGeoFRQs(): HumanGeoFRQ[] {
  return apHumanGeoFRQs
}

export function getLongFRQs(): HumanGeoFRQ[] {
  return longFRQs
}

export function getShortFRQs(): HumanGeoFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(): {
  long: HumanGeoFRQ[]
  short: HumanGeoFRQ[]
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
    totalTime: '75 min',
  }
}
'''


def main():
    long_block  = "const longFRQs: HumanGeoFRQ[] = [\n"  + ",\n".join([LONG_1, LONG_2, LONG_3, LONG_4])     + "\n]\n"
    short_block = "const shortFRQs: HumanGeoFRQ[] = [\n" + ",\n".join([SHORT_1, SHORT_2, SHORT_3, SHORT_4]) + "\n]\n"
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(HEADER + long_block + "\n" + short_block + FOOTER)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
