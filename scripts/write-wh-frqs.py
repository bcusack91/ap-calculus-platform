#!/usr/bin/env python3
"""
Rewrite src/data/ap-world-history-frq/questions.ts with substantive,
historically-grounded AP-World-style prompts spanning all 9 units.

Preserves existing TypeScript interfaces and named exports
(apWorldHistoryFRQs, getApWorldHistoryFRQs, getLongFRQs, getShortFRQs,
generateFullExamFRQs).
"""
from __future__ import annotations
import os, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT  = os.path.join(ROOT, "src", "data", "ap-world-history-frq", "questions.ts")


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
# LONG FRQs — DBQ/LEQ-style, ~25 minutes, 7 points each
# Coverage: Units 1–2, 3–4, 5–6, 7–9
# ============================================================================

LONG_1 = frq(
    "wh-long-1", "long", 2, "Afro-Eurasian Networks of Exchange, 1200–1450",
    "Evaluate the extent to which trans-regional exchange networks (Silk Roads, Indian Ocean, trans-Saharan) transformed states and societies in Afro-Eurasia between c. 1200 and c. 1450. Use specific figures, places, and primary sources.",
    [
        part("(a)",
             "Identify ONE specific feature of a 1200–1450 trans-regional network and explain how it depended on a named state or institution.",
             2,
             [
                 (1, "Names a specific network feature (caravanserai, junk ships, dhows, monsoon winds, Yam relay, Pax Mongolica, gold–salt trade)",
                     ["caravanserai", "junk", "dhow", "monsoon", "Yam", "Pax Mongolica", "gold", "salt", "trans-Saharan", "Silk Roads", "Indian Ocean", "Swahili"]),
                 (1, "Ties the feature to a named state/institution that enabled it",
                     ["Mongol", "Yuan", "Mali", "Mansa Musa", "Delhi Sultanate", "Song", "Ming", "Hongwu", "Zheng He", "Swahili Coast", "Kilwa", "Venice"]),
             ],
             "The Mongol Yam relay — postal stations every 25–30 miles staffed with horses and provisions — depended on the Pax Mongolica unifying Eurasia under Chinggis Khan's successors after 1206. By the time of Marco Polo's travels (c. 1271–1295) the Yam allowed merchants and envoys to traverse the Silk Roads in safety, dramatically lowering transaction costs across the world's largest contiguous land empire."),
        part("(b)",
             "Use ONE specific primary source from this period (e.g., Ibn Battuta's Rihla, Marco Polo's Travels, the Catalan Atlas of 1375, or Ibn Khaldun's Muqaddimah) to support a claim about Afro-Eurasian connectivity.",
             2,
             [
                 (1, "Names a specific source by author/title and dates it to within the period",
                     ["Ibn Battuta", "Rihla", "1352", "1354", "Marco Polo", "Travels", "1295", "Catalan Atlas", "1375", "Ibn Khaldun", "Muqaddimah", "1377"]),
                 (1, "Uses HAPP (historical situation, audience, purpose, point of view) to support a claim",
                     ["audience", "purpose", "perspective", "Maliki", "Islamic", "Venetian", "according to", "argues", "reveals"]),
             ],
             "Ibn Battuta's Rihla (1352–1354) describes Mansa Suleyman's Mali court — Friday mosque attendance, safe trans-Saharan caravans, and gold abundance. Because Ibn Battuta was a Maliki jurist writing for an educated Islamic audience, his praise of Mali's adherence to Islamic law is especially credible as evidence that West Africa was deeply integrated into the Dar al-Islam by the mid-14th century."),
        part("(c)",
             "Explain ONE specific way that disease or technology diffused along these networks reshaped Afro-Eurasia between 1200 and 1450.",
             2,
             [
                 (1, "Identifies a specific diffusion (Black Death 1347–1351, gunpowder, paper, lateen sail, magnetic compass, sternpost rudder, cotton textiles)",
                     ["Black Death", "1347", "1351", "Yersinia pestis", "gunpowder", "paper", "lateen", "compass", "sternpost", "cotton"]),
                 (1, "Explains the mechanism and a specific consequence",
                     ["because", "led to", "killed", "30%", "labor shortage", "wages rose", "feudal", "decline", "transformation"]),
             ],
             "The Black Death (Yersinia pestis) traveled from Inner Asia along Silk Road caravans and Genoese galleys, killing roughly one-third of Europe's population between 1347 and 1351. The resulting labor shortage raised real wages, weakened serfdom in Western Europe (Statute of Labourers 1351 attempted to cap wages), and helped unravel the manorial economy — a structural transformation that pre-dated and enabled later commercial expansion."),
        part("(d)",
             "Evaluate which had the larger transformative effect on Afro-Eurasia by 1450: trans-regional exchange networks, OR the rise of new and revived states (Mali, Delhi Sultanate, Yuan/Ming, Ottomans). Defend your position.",
             1,
             [
                 (1, "Takes a defensible position with two specific pieces of evidence",
                     ["because", "Pax Mongolica", "Mansa Musa", "1324", "Hongwu", "1368", "Zheng He", "1405", "Constantinople", "1453", "long-term"]),
             ],
             "Networks had the larger effect: even powerful states (Yuan after 1271, Mali under Mansa Musa, Mamluk Egypt) depended on the Pax Mongolica's open routes for tax revenue, military recruitment, and prestige. When the Mongol Empire fragmented after 1294, Eurasian land trade contracted, the Black Death spread along its remaining arteries, and the resulting fiscal crises (Yuan collapse 1368) helped produce the very state transformations of 1368–1450 — meaning networks shaped states more than the reverse."),
    ],
    7, "~25 minutes",
)

LONG_2 = frq(
    "wh-long-2", "long", 4, "Land-Based and Maritime Empires, 1450–1750",
    "Compare the methods of consolidation, legitimation, and economic organization of TWO empires from the period 1450–1750 (e.g., Ming/Qing China, Ottoman, Mughal, Safavid, Spanish, Russian, Tokugawa). Use specific figures, institutions, and sources.",
    [
        part("(a)",
             "Identify ONE specific institution by which a named land-based empire consolidated power between 1450 and 1750.",
             2,
             [
                 (1, "Names a specific institution (devshirme, janissaries, mansabdari, zamindari, jizya, tax-farming, boyar service, Eight Banners, Manchu queue, Romanov mestnichestvo abolition)",
                     ["devshirme", "janissaries", "mansabdari", "zamindari", "jizya", "tax farming", "Eight Banners", "Manchu", "queue", "boyar", "mestnichestvo"]),
                 (1, "Ties the institution to a specific ruler/state and explains its function",
                     ["Mehmed II", "1453", "Suleiman", "Akbar", "1556", "1605", "Aurangzeb", "Kangxi", "Peter the Great", "1682", "1725", "centralization", "loyalty"]),
             ],
             "The Ottoman devshirme — a periodic levy of Christian boys from the Balkans converted, trained in Topkapı, and placed in the janissary corps or palace administration — produced a slave-elite directly loyal to the sultan rather than to provincial families. Institutionalized under Murad II and central to Mehmed II's 1453 conquest of Constantinople, the system bypassed the Turkish landed aristocracy and gave the dynasty a meritocratic, dependent ruling class through the 17th century."),
        part("(b)",
             "Use ONE specific primary source from this period (e.g., the Akbarnama (1590s), Matteo Ricci's journals (1583–1610), the 1602 VOC charter, or the Zheng He stelae (1431)) to support a claim about empire-building or commerce.",
             2,
             [
                 (1, "Names the source, author, and dates",
                     ["Akbarnama", "Abu'l Fazl", "1590", "Matteo Ricci", "Jesuit", "1583", "1610", "VOC", "1602", "Zheng He", "Liujiagang", "stele", "1431"]),
                 (1, "Uses HAPP to support a claim",
                     ["audience", "purpose", "perspective", "court chronicle", "patronage", "joint stock", "shareholders", "tribute"]),
             ],
             "The 1602 charter of the Dutch East India Company (VOC), granted by the States-General of the Dutch Republic, gave a single joint-stock corporation a 21-year monopoly on Asian trade plus the sovereign powers to wage war, mint coin, and sign treaties. Because the charter was issued to maximize Dutch returns against Portuguese competitors, it documents the early-modern fusion of state sovereignty and corporate finance that distinguished Northwest European maritime empires from their land-based contemporaries."),
        part("(c)",
             "Explain ONE specific way the Columbian Exchange or the silver trade reshaped one of the empires you identified.",
             2,
             [
                 (1, "Names a specific mechanism (Potosí silver after 1545, Manila galleon 1565–1815, single-whip tax 1581, price revolution, Atlantic plantation complex, smallpox depopulation)",
                     ["Potosí", "1545", "Manila galleon", "1565", "single whip", "1581", "Zhang Juzheng", "price revolution", "smallpox", "Columbian Exchange"]),
                 (1, "Explains the mechanism and consequence",
                     ["because", "demanded silver", "fiscal", "inflation", "depopulation", "encomienda", "mita", "labor"]),
             ],
             "The Ming single-whip reform (一條鞭法) of 1581 under Grand Secretary Zhang Juzheng required tax payments in silver, generating a structural Chinese demand met largely by Spanish American Potosí (post-1545) and Japanese Iwami silver shipped via the Manila galleon (1565–1815). This monetary integration tied Ming fiscal stability to Atlantic mining; the 17th-century 'silver crisis' contributed materially to the Ming collapse in 1644."),
        part("(d)",
             "Evaluate which method of legitimation — religion, dynastic marriage, monumental architecture, or bureaucratic merit — was MOST important for one of the empires you identified.",
             1,
             [
                 (1, "Takes a defensible position with two specific pieces of evidence",
                     ["because", "examination", "Confucian", "Süleymaniye", "Taj Mahal", "1632", "1648", "din-i ilahi", "Akbar", "long-term"]),
             ],
             "For Mughal India, religious accommodation was the most important legitimating tool: Akbar's abolition of jizya (1564), his sulh-i kull (universal toleration), and the syncretic din-i ilahi (1582) enabled the dynasty to govern a Hindu-majority population through Rajput alliances. When Aurangzeb reversed this policy in the 1670s — reimposing jizya and demolishing temples — Mughal authority over the Deccan and Rajasthan eroded within a generation."),
    ],
    7, "~25 minutes",
)

LONG_3 = frq(
    "wh-long-3", "long", 6, "Revolutions, Industrialization, and Imperialism, 1750–1900",
    "Analyze the relationship between Atlantic-world revolutions (1775–1825), industrialization (post-1780s), and the new imperialism (1870s–1914). Use specific figures, dated events, and primary sources.",
    [
        part("(a)",
             "Identify ONE specific Atlantic revolution (1775–1825) and explain ONE outcome that shaped 19th-century politics.",
             2,
             [
                 (1, "Names a specific revolution and dates it (American 1776; French 1789; Haitian 1791–1804; Latin American 1810–1825)",
                     ["American", "1776", "French", "1789", "1799", "Haitian", "1791", "1804", "Toussaint", "Louverture", "Dessalines", "Bolívar", "1821", "Hidalgo", "1810"]),
                 (1, "Identifies a specific 19th-century outcome",
                     ["abolition", "1807", "1833", "1865", "1888", "constitutional", "republicanism", "creole", "caudillo", "British abolition", "Brazil", "Gran Colombia"]),
             ],
             "The Haitian Revolution (1791–1804), led by Toussaint Louverture and completed by Jean-Jacques Dessalines, produced the first independent nation founded by formerly enslaved people and the second republic in the Americas. Its 1801 constitution abolished slavery in Saint-Domingue, terrified Atlantic slaveholding regimes, and helped persuade Britain to abolish the slave trade in 1807 and France to sell Louisiana to the United States in 1803."),
        part("(b)",
             "Use ONE specific primary source from this period (e.g., the Declaration of the Rights of Man (1789), Olaudah Equiano's Narrative (1789), Adam Smith's Wealth of Nations (1776), Karl Marx and Friedrich Engels's Communist Manifesto (1848), or Rudyard Kipling's 'White Man's Burden' (1899)) to support a claim about ideology or political economy.",
             2,
             [
                 (1, "Names a specific source, author, and date",
                     ["Declaration of the Rights of Man", "1789", "Equiano", "Narrative", "Smith", "Wealth of Nations", "1776", "Marx", "Engels", "Communist Manifesto", "1848", "Kipling", "White Man's Burden", "1899"]),
                 (1, "Uses HAPP to support a claim",
                     ["audience", "purpose", "perspective", "British", "abolition", "industrial", "bourgeois", "proletariat", "civilizing mission"]),
             ],
             "Marx and Engels's Communist Manifesto (February 1848), commissioned by the Communist League and published weeks before the February Revolution in France, argued that 'all history is the history of class struggle' and called on industrial proletarians to seize the means of production. Its appearance amid the 1848 European revolutions documents how new socialist ideologies were direct responses to the social dislocations of post-1780s industrial capitalism."),
        part("(c)",
             "Explain ONE specific way industrialization between 1780 and 1900 enabled the 'New Imperialism' of the 1870s–1914.",
             2,
             [
                 (1, "Names a specific industrial enabler (steamships, breech-loading rifles, Maxim gun 1884, telegraph, quinine, Suez Canal 1869, railroads)",
                     ["steamship", "Maxim gun", "1884", "telegraph", "quinine", "Suez", "1869", "railroad", "breech loading", "Krupp"]),
                 (1, "Connects the technology to a specific imperial event",
                     ["Berlin Conference", "1884", "Omdurman", "1898", "Sepoy", "1857", "Opium War", "1839", "1842", "Treaty of Nanjing", "scramble for Africa"]),
             ],
             "The Maxim gun, patented in 1884, fired roughly 600 rounds per minute and was decisive at Omdurman (1898), where Anglo-Egyptian forces killed about 11,000 Mahdist soldiers while losing fewer than 50 of their own. Combined with quinine prophylaxis (which made interior Africa survivable for Europeans after the 1850s), the Maxim gun helped translate the Berlin Conference's 1884–85 paper partition of Africa into actual territorial control by 1900."),
        part("(d)",
             "Evaluate the claim that 19th-century industrialization produced more revolutionary CHANGE than CONTINUITY in Afro-Eurasia and the Americas. Defend your position.",
             1,
             [
                 (1, "Takes a defensible position with two specific pieces of evidence",
                     ["because", "Meiji", "1868", "Tanzimat", "1839", "1876", "Self-Strengthening", "Boxer", "1900", "indentured", "abolition", "long-term"]),
             ],
             "Industrialization produced more change than continuity even in non-industrial regions: the Tanzimat reforms (1839–1876), the Meiji Restoration (1868), and the Qing Self-Strengthening Movement (1861–1895) all explicitly restructured millennia-old institutions in response to industrial pressure. While agrarian life for many remained recognizable in 1900, the global political and military hierarchy of 1900 was unrecognizable to anyone living in 1750."),
    ],
    7, "~25 minutes",
)

LONG_4 = frq(
    "wh-long-4", "long", 8, "World Wars, Cold War, Decolonization, and Globalization, 1900–Present",
    "Analyze how 20th-century global conflict and decolonization reshaped political and economic order between 1914 and 2010. Use specific figures, dated events, and primary sources.",
    [
        part("(a)",
             "Identify ONE specific way the Treaty of Versailles (1919) or the post-WWII settlement (1945) reshaped the global political order.",
             2,
             [
                 (1, "Names a specific provision/event (Article 231 war guilt; mandate system; League of Nations; Bretton Woods 1944; UN Charter 1945; Yalta/Potsdam 1945; Marshall Plan 1948)",
                     ["Versailles", "1919", "Article 231", "war guilt", "mandate", "League of Nations", "Bretton Woods", "1944", "UN Charter", "1945", "Yalta", "Potsdam", "Marshall Plan", "1948"]),
                 (1, "Explains the consequence",
                     ["reparations", "Weimar", "hyperinflation", "1923", "Hitler", "1933", "containment", "Truman Doctrine", "1947", "decolonization"]),
             ],
             "The mandate system created at the 1919 Paris Peace Conference and administered by the League of Nations transferred former Ottoman and German territories — including Palestine, Iraq, Syria, Cameroon, and Tanganyika — to Britain and France under the fiction of trusteeship. By repackaging colonial expansion in the language of self-determination, the mandates discredited the League among colonized peoples and produced the political boundaries (e.g., Sykes–Picot 1916 ratified) that still define the post-Ottoman Middle East."),
        part("(b)",
             "Use ONE specific primary source from this period (e.g., Wilson's Fourteen Points (1918), Mao's 'On New Democracy' (1940), the 1945 UN Charter, the 1955 Bandung Final Communiqué, or Gorbachev's 1988 UN speech) to support a claim about 20th-century ideology.",
             2,
             [
                 (1, "Names the source, author, and date",
                     ["Wilson", "Fourteen Points", "1918", "Mao", "New Democracy", "1940", "UN Charter", "1945", "Bandung", "1955", "Gorbachev", "1988"]),
                 (1, "Uses HAPP to support a claim",
                     ["audience", "purpose", "perspective", "self-determination", "non-aligned", "decolonization", "post-Stalin"]),
             ],
             "The Final Communiqué of the 1955 Bandung Conference, signed by 29 newly independent African and Asian states (representing about half the world's population), committed signatories to mutual respect of sovereignty, non-aggression, and economic cooperation outside both Cold War blocs. Issued one year after Dien Bien Phu (1954) and during the Algerian War, it crystallized the Non-Aligned Movement and gave decolonizing states a collective diplomatic platform that pre-dated the formal 1961 NAM founding in Belgrade."),
        part("(c)",
             "Explain ONE specific cause of decolonization between 1945 and 1975 beyond the weakness of European powers after WWII.",
             2,
             [
                 (1, "Names a specific cause (anticolonial movements, Cold War leverage, UN Resolution 1514 (1960), Algerian War 1954–62, Indian independence 1947, Vietnam, Atlantic Charter 1941)",
                     ["Atlantic Charter", "1941", "Indian independence", "1947", "Nehru", "Gandhi", "Algerian War", "1954", "1962", "FLN", "Resolution 1514", "1960", "Ho Chi Minh", "Dien Bien Phu", "1954"]),
                 (1, "Explains the mechanism",
                     ["because", "self-determination", "guerrilla", "United States", "Soviet support", "international pressure", "moral"]),
             ],
             "The 1941 Atlantic Charter — signed by Roosevelt and Churchill — committed the Allies to 'the right of all peoples to choose the form of government under which they will live.' Indian and African nationalists invoked this clause throughout the war (Gandhi's Quit India movement began August 1942), making it diplomatically costly for postwar Britain to deny independence: India 1947, Ghana 1957, Nigeria 1960, and 17 African nations in the 1960 'Year of Africa' all followed."),
        part("(d)",
             "Evaluate the claim that the period 1989–2010 represents the END of one global order and the start of another, OR a CONTINUATION of trends already visible by the mid-20th century. Defend your position.",
             1,
             [
                 (1, "Takes a defensible position with two specific pieces of evidence",
                     ["because", "Berlin Wall", "1989", "Soviet collapse", "1991", "WTO", "1995", "September 11", "2001", "2008", "long-term"]),
             ],
             "1989–2010 represents continuation more than rupture: economic globalization, U.S. military primacy, and the dollar-centered Bretton Woods system all dated from the late 1940s. The collapse of the Soviet Union (1991) and the founding of the WTO (1995) accelerated existing trends rather than creating new ones; even 9/11 (2001) and the 2008 financial crisis fit within frameworks (asymmetric warfare, deregulated capital flows) already established in the 1970s and 1980s."),
    ],
    7, "~25 minutes",
)

# ============================================================================
# SHORT FRQs — source/data-based, ~12 minutes, 4 points each
# ============================================================================

SHORT_1 = frq(
    "wh-short-1", "short", 2, "Source: Ibn Battuta's Rihla on Mali (1352–1354)",
    "The following is from Ibn Battuta's *Rihla*, describing Mansa Suleyman's Mali in 1352–1354.\n\n"
    "> 'The Negroes possess some admirable qualities. They are seldom unjust, and have a greater abhorrence of injustice than any other people. … Their sultan shows no mercy to anyone who is guilty of the least act of it. There is complete security in their country.'",
    [
        part("(a)",
             "Identify ONE specific historical context (1200–1450) that shaped Mali's prominence at the time of Ibn Battuta's visit.",
             1,
             [(1, "Names a specific context (Mansa Musa's 1324 hajj, gold–salt trade, Timbuktu scholarship, trans-Saharan caravan network)",
                  ["Mansa Musa", "1324", "hajj", "gold", "salt", "Timbuktu", "Sankore", "Djinguereber", "trans-Saharan", "Catalan Atlas", "1375"])],
             "By 1352 Mali had been the dominant West African state for over a century: Mansa Musa's 1324 hajj had distributed so much gold that, according to al-Umari, prices in Cairo were depressed for over a decade, and Mansa Musa appeared on the 1375 Catalan Atlas as a king holding a gold nugget."),
        part("(b)",
             "Identify the audience of Ibn Battuta's *Rihla* and ONE rhetorical strategy he uses in this passage.",
             1,
             [(1, "Identifies an Islamic/Maliki jurist audience and a strategy (comparison to Mediterranean Islamic norms, praise framed as adherence to sharia)",
                  ["Maliki", "Islamic", "audience", "purpose", "comparison", "sharia", "praise", "court chronicle"])],
             "Ibn Battuta dictated the *Rihla* in Fez to Ibn Juzayy at the court of the Marinid sultan Abu 'Inan, for an educated Maliki Sunni audience. He frames Mali through Mediterranean Islamic norms — security on the roads, mosque attendance, sultan's justice — to argue that Mali deserves a place in the Dar al-Islam alongside Cairo and Damascus."),
        part("(c)",
             "Explain ONE specific way this source illustrates the integration of West Africa into Afro-Eurasian networks.",
             1,
             [(1, "Identifies a specific integration (Islam adoption among elites, Arabic literacy, gold flows to Mediterranean)",
                  ["Islam", "Arabic", "literacy", "gold", "Mediterranean", "Mamluk", "trans-Saharan", "Wangara"])],
             "The very fact that Ibn Battuta — a Moroccan jurist — could travel safely to Mali and converse with its court in Arabic shows the depth of West African integration: Mali's elites had adopted Sunni Islam, sent caravans of gold north across the Sahara to Mamluk Egypt, and patronized Arabic-language scholarship at Timbuktu."),
        part("(d)",
             "Identify ONE limitation of using Ibn Battuta's account as evidence about pre-1450 West Africa.",
             1,
             [(1, "Identifies a valid limitation (foreign Islamic perspective, written 1355 from memory, ignores non-Muslim communities)",
                  ["foreign", "outsider", "memory", "1355", "non-Muslim", "rural", "perspective", "limit"])],
             "Ibn Battuta is a foreign, urban, male, Muslim elite observer dictating from memory in 1355. He spends little time on rural and non-Muslim Mande communities, women's roles, and pre-Islamic religious practice that recent oral and archaeological scholarship (e.g., Conrad's Sundiata work) has reconstructed."),
    ],
    4, "~12 minutes",
)

SHORT_2 = frq(
    "wh-short-2", "short", 5, "Source: Adam Smith, *The Wealth of Nations* (1776)",
    "The following is from Adam Smith's *An Inquiry into the Nature and Causes of the Wealth of Nations* (1776).\n\n"
    "> 'It is not from the benevolence of the butcher, the brewer, or the baker, that we expect our dinner, but from their regard to their own interest. … He intends only his own gain, and he is in this, as in many other cases, led by an invisible hand to promote an end which was no part of his intention.'",
    [
        part("(a)",
             "Identify the historical context for the publication of *The Wealth of Nations* in 1776.",
             1,
             [(1, "Names a context (mercantilism, 7 Years' War 1756-63, early British industrialization, American Revolution 1776)",
                  ["mercantilism", "Seven Years' War", "1756", "1763", "industrialization", "Watt", "1769", "American Revolution", "1776"])],
             "Smith published in 1776 — the same year as American independence — into a Britain still organized around mercantilist policies (Navigation Acts, chartered monopolies like the East India Company), but increasingly transformed by early industrial innovations such as Watt's improved steam engine (patented 1769) and Arkwright's water frame (1769)."),
        part("(b)",
             "Identify Smith's intended audience and ONE rhetorical strategy he uses in the passage.",
             1,
             [(1, "Identifies a literate British political-economic audience and a strategy (everyday analogy, naturalistic metaphor)",
                  ["British", "Parliament", "political economy", "audience", "everyday", "analogy", "invisible hand", "metaphor"])],
             "Smith addressed Britain's literate political and commercial classes, including MPs debating colonial policy. By grounding abstract market theory in the everyday image of a butcher, brewer, and baker, and by personifying market coordination as an 'invisible hand,' he made laissez-faire principles intuitively persuasive against entrenched mercantilist arguments."),
        part("(c)",
             "Explain ONE way Smith's argument here challenged 18th-century mercantilist political economy.",
             1,
             [(1, "Identifies a challenge to mercantilism (rejection of bullionism, free trade, critique of monopolies/East India Co.)",
                  ["mercantilism", "bullion", "free trade", "monopoly", "East India Company", "Navigation Acts", "self interest"])],
             "Smith argued that wealth lay in productive labor and exchange, not in stockpiled bullion, and explicitly attacked chartered monopolies — including the East India Company — as wasteful. This directly undermined the mercantilist case for the Navigation Acts and the colonial monopoly system that had structured the Atlantic economy since the 1650s."),
        part("(d)",
             "Identify ONE limitation of using *The Wealth of Nations* as evidence about how 18th-century economies actually worked.",
             1,
             [(1, "Identifies a valid limitation (prescriptive theory, ignores enslaved labor and colonial coercion)",
                  ["prescriptive", "normative", "theory", "slavery", "colonial", "coerced", "Atlantic", "limit"])],
             "Smith's text is normative as much as descriptive: it argues for an idealized free-market order while underplaying the coerced labor — chattel slavery in the Atlantic plantation complex, encomienda and mita in the Andes — on which 18th-century British prosperity actually depended."),
    ],
    4, "~12 minutes",
)

SHORT_3 = frq(
    "wh-short-3", "short", 7, "Source: Wilson's Fourteen Points (January 8, 1918)",
    "The following is from President Woodrow Wilson's address to the U.S. Congress, January 8, 1918.\n\n"
    "> 'V. A free, open-minded, and absolutely impartial adjustment of all colonial claims, based upon a strict observance of the principle that … the interests of the populations concerned must have equal weight with the equitable claims of the government whose title is to be determined.'\n\n"
    "> 'XIV. A general association of nations must be formed under specific covenants for the purpose of affording mutual guarantees of political independence and territorial integrity to great and small states alike.'",
    [
        part("(a)",
             "Identify ONE specific historical context for Wilson's January 1918 address.",
             1,
             [(1, "Names a context (Russian Revolution Nov 1917, Brest-Litovsk negotiations, Allied war aims debate, U.S. entry April 1917, secret treaties published)",
                  ["Russian Revolution", "1917", "Brest-Litovsk", "secret treaties", "Bolsheviks", "Sykes-Picot", "1916", "U.S. entry", "April 1917"])],
             "Wilson spoke two months after the Bolshevik Revolution (November 1917) and as Lenin's regime was publishing the Allies' secret treaties (Sykes–Picot 1916, Treaty of London 1915). The Fourteen Points were partly a counter-narrative — reframing Allied war aims around principle rather than imperial spoils."),
        part("(b)",
             "Identify the intended audience and ONE rhetorical strategy Wilson uses.",
             1,
             [(1, "Identifies multiple audiences (American public, Allies, Central Powers, colonized peoples) and a strategy (universalism, principles vs. interests)",
                  ["audience", "Allies", "Central Powers", "colonized", "American public", "principle", "self-determination", "universal"])],
             "Wilson addressed Congress but spoke past it to several audiences: the American public, the Allied governments, the Central Powers (offering negotiated peace), and — crucially — colonized peoples. By framing the war in universalist principles such as self-determination, he sought to outflank both German propaganda and the Bolshevik appeal."),
        part("(c)",
             "Explain ONE way the actual postwar settlement (1919–1923) departed from the principles Wilson articulated here.",
             1,
             [(1, "Identifies a specific departure (mandate system; Article 231; rejection of racial equality clause; U.S. Senate rejecting League 1919-20)",
                  ["mandate", "Article 231", "war guilt", "Sykes-Picot", "racial equality", "Japan", "Senate", "rejected League", "1919"])],
             "The actual settlement created the mandate system that handed former Ottoman and German colonies to Britain and France rather than recognizing self-determination, and the U.S. Senate rejected ratification of the Versailles Treaty (1919–1920), keeping the United States out of the League of Nations Wilson had designed."),
        part("(d)",
             "Identify ONE limitation of treating the Fourteen Points as a guide to U.S. policy intentions in 1918.",
             1,
             [(1, "Identifies a valid limitation (rhetorical/wartime, no congressional buy-in, racial limits in U.S. policy and at Paris)",
                  ["rhetoric", "wartime", "Congress", "racial", "Jim Crow", "rejected", "limit", "domestic"])],
             "The Fourteen Points were a wartime presidential statement, not codified U.S. policy: they had no congressional endorsement, were undermined by U.S. domestic racial policy (Jim Crow), and were narrowed at Paris by Wilson himself when he opposed the Japanese delegation's racial equality clause."),
    ],
    4, "~12 minutes",
)

SHORT_4 = frq(
    "wh-short-4", "short", 8, "Data: Decolonization and UN Membership, 1945–1980",
    "Use the data below to address the prompt.\n\n"
    "**UN member states by region (year of independence in parentheses):**\n\n"
    "- 1945: 51 founding members (4 African, 9 Asian, including India 1947 admitted later).\n"
    "- 1955: 76 members. New Asian states: Indonesia (1949), Israel (1948), Burma (1948), Sri Lanka (1948), Cambodia/Laos/Vietnam (1953–54).\n"
    "- 1960: 99 members. The 'Year of Africa' added 17 newly independent African states (Nigeria, Senegal, Mali, Madagascar, Cameroon, etc.).\n"
    "- 1980: 154 members. Subsequent independence waves include Algeria (1962), Kenya (1963), Mozambique/Angola (1975), Zimbabwe (1980).",
    [
        part("(a)",
             "Identify ONE specific cause of the rapid post-1945 expansion of UN membership.",
             1,
             [(1, "Names a cause (post-WWII European weakness, anticolonial movements, Atlantic Charter 1941, UN Resolution 1514 (1960))",
                  ["post war", "European weakness", "anticolonial", "Atlantic Charter", "1941", "Resolution 1514", "1960", "self-determination"])],
             "Post-WWII European weakness — combined with the 1941 Atlantic Charter's commitment to self-determination and UN General Assembly Resolution 1514 (1960), which declared colonialism a violation of human rights — made it diplomatically costly for European empires to refuse independence to organized anticolonial movements."),
        part("(b)",
             "Identify ONE specific decolonization movement between 1945 and 1980 and name its principal leader(s).",
             1,
             [(1, "Names a specific movement and leader(s) (Indian Congress — Nehru/Gandhi 1947; FLN — Ben Bella 1962; Ghana — Nkrumah 1957; FRELIMO — Machel 1975; ZANU — Mugabe 1980; Vietminh — Ho Chi Minh)",
                  ["Indian National Congress", "Nehru", "Gandhi", "1947", "FLN", "1954", "1962", "Ben Bella", "Nkrumah", "1957", "Ghana", "FRELIMO", "Machel", "1975", "Ho Chi Minh", "Vietminh"])],
             "Algeria's National Liberation Front (FLN), founded 1954, fought an eight-year war against France that ended with the Évian Accords and Algerian independence in July 1962 under Ahmed Ben Bella; the conflict killed an estimated 300,000 to 1.5 million Algerians."),
        part("(c)",
             "Explain ONE specific way decolonization between 1945 and 1980 was shaped by the Cold War.",
             1,
             [(1, "Identifies a Cold War mechanism (superpower competition for newly independent states, NAM 1961, proxy wars in Vietnam/Angola/Congo, U.S. & Soviet aid)",
                  ["Cold War", "non-aligned", "Bandung", "1955", "NAM", "1961", "Vietnam", "Angola", "Congo", "Lumumba", "Soviet aid", "U.S. aid"])],
             "Both superpowers competed for influence among newly independent states, supplying arms and aid: Soviet support for the MPLA in Angola from 1975 and U.S. support for UNITA produced a proxy war that lasted until 2002. The 1955 Bandung Conference and 1961 founding of the Non-Aligned Movement were direct responses to this superpower courtship."),
        part("(d)",
             "Identify ONE long-term political or economic consequence of mid-20th-century decolonization visible by 1980.",
             1,
             [(1, "Identifies a long-term consequence (NIEO 1974, OPEC oil embargo 1973, civil wars over arbitrary borders, G-77, neocolonial economic ties)",
                  ["NIEO", "1974", "OPEC", "1973", "embargo", "G-77", "1964", "civil war", "borders", "neocolonial", "structural adjustment"])],
             "The 1973 OPEC oil embargo and the 1974 UN Declaration on the Establishment of a New International Economic Order (NIEO), promoted by the G-77, represented a coordinated attempt by newly independent states to leverage UN majorities and resource control to renegotiate their place in the global economy — a structural shift visible only because decolonization had multiplied the number of voting states from 51 in 1945 to 154 by 1980."),
    ],
    4, "~12 minutes",
)


HEADER = '''/**
 * AP World History — FRQ Practice Question Pool
 * AUTO-GENERATED by scripts/write-wh-frqs.py
 *
 * Format mirrors College Board AP World History exam: long source-/scenario-based prompts
 * (~25 min, 7 pts) and shorter source/data prompts (~12 min, 4 pts).
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

export interface WorldHistoryFRQ {
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

export const apWorldHistoryFRQs: WorldHistoryFRQ[] = [...longFRQs, ...shortFRQs]

export function getApWorldHistoryFRQs(): WorldHistoryFRQ[] {
  return apWorldHistoryFRQs
}

export function getLongFRQs(): WorldHistoryFRQ[] {
  return longFRQs
}

export function getShortFRQs(): WorldHistoryFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(): {
  long: WorldHistoryFRQ[]
  short: WorldHistoryFRQ[]
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
    totalTime: '100 min',
  }
}
'''


def main():
    long_block = "const longFRQs: WorldHistoryFRQ[] = [\n" + ",\n".join([LONG_1, LONG_2, LONG_3, LONG_4]) + "\n]\n"
    short_block = "const shortFRQs: WorldHistoryFRQ[] = [\n" + ",\n".join([SHORT_1, SHORT_2, SHORT_3, SHORT_4]) + "\n]\n"
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(HEADER + long_block + "\n" + short_block + FOOTER)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
