#!/usr/bin/env python3
"""
Author all AP African American History lesson files at AP-World-quality.

Generates: src/data/interactive-lessons/aas-{topic}-part{1..7}.ts (98 files)

Structure per part (mirrors AP World Unit 1 Global Tapestry shape):
  - intro text section with named figures / dates / events table
  - "Concept Check" MCQ (2 questions) with topic-specific distractors
  - secondary text section (deeper historical detail)
  - "Applied Recall" input-boxes (3 historical terms)
  - "Match the Concepts" dropdown-select (3 items)
  - "AP-Style Application" MCQ (2 questions, comparison/causation/CCOT)

Part angles (1-7):
  1. Foundations & key concepts
  2. Key processes & mechanisms
  3. Patterns, regions, case studies
  4. Connections & interactions across the diaspora / U.S.
  5. Continuity & change over time
  6. Source/data analysis (primary sources + interpretation)
  7. AP exam strategy & review
"""

from __future__ import annotations
import os, json, textwrap

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT  = os.path.join(ROOT, "src", "data", "interactive-lessons")

# -----------------------------------------------------------------------------
# Per-topic historical data. Each entry has the ingredients reused across parts.
# Keys are kept compact so the generator can produce dense, specific content
# (figures, dates, events, primary sources) without generic placeholder prose.
# -----------------------------------------------------------------------------

T = {}

T["aas-african-kingdoms"] = {
    "export_prefix": "aasAfricanKingdoms",
    "id_prefix": "aasak",
    "title": "African Kingdoms & Civilizations",
    "short": "African Kingdoms",
    "emoji": "👑",
    "era": "c. 700–1600 CE",
    "overview": (
        "Before the transatlantic slave trade, sub-Saharan Africa hosted a series of large, "
        "literate, and commercially sophisticated states — Ghana, Mali, Songhai, Kongo, the "
        "Swahili coast, Great Zimbabwe, and Aksum/Ethiopia — connected by trans-Saharan and "
        "Indian Ocean trade networks."
    ),
    "core_concepts": [
        ("Trans-Saharan trade", "Camel caravans linked West Africa with North Africa, exchanging gold, salt, copper, kola nuts, and enslaved people."),
        ("Islamic scholarship", "Cities like Timbuktu and Djenné became centers of Quranic learning and law (Maliki school)."),
        ("Centralized empires", "Mali and Songhai built tax systems, standing armies, and provincial governors over millions of subjects."),
    ],
    "figures": [
        ("Sundiata Keita", "r. c. 1235–1255", "Founder of the Mali Empire; defeated the Sosso at the Battle of Kirina (1235); preserved in the *Epic of Sundiata*."),
        ("Mansa Musa", "r. 1312–1337", "Mali emperor whose 1324 hajj distributed so much gold it depressed Cairo's currency for a decade; commissioned Djinguereber Mosque at Timbuktu."),
        ("Askia Muhammad I", "r. 1493–1528", "Songhai ruler who centralized administration, performed his own hajj, and elevated Timbuktu's Sankore Madrasa."),
        ("Ibn Battuta", "visited Mali 1352–1354", "Moroccan jurist whose *Rihla* gives an eyewitness account of Mansa Suleyman's court."),
        ("Nzinga Mbemba (Afonso I)", "r. 1509–1542", "King of Kongo who converted to Catholicism, then in 1526 wrote João III of Portugal protesting Portuguese slave-raiding."),
        ("Queen Nzinga of Ndongo & Matamba", "r. 1624–1663", "Diplomat-warrior who resisted Portuguese expansion in Angola for nearly 40 years."),
    ],
    "events": [
        ("c. 300–1076 Ghana Empire", "Controlled the gold–salt trade; sacked by the Almoravids in 1076."),
        ("1235 Battle of Kirina", "Sundiata defeats Sumanguru of Sosso; foundation of Mali."),
        ("1324 Mansa Musa's hajj", "Caravan of ~60,000 attendants and ~12 tons of gold; placed Mali on European maps."),
        ("1464–1492 Sunni Ali", "Built Songhai's military and seized Timbuktu (1468) and Djenné (1473)."),
        ("1591 Battle of Tondibi", "Moroccan musketeers crush Songhai cavalry, ending the empire."),
        ("11th–15th c. Great Zimbabwe", "Stone capital of ~18,000 controlling gold–ivory routes to Sofala."),
        ("c. 800–1500 Swahili city-states", "Kilwa, Mombasa, Mogadishu integrate the East African coast into Indian Ocean trade; Swahili language emerges."),
    ],
    "sources": [
        ("*Epic of Sundiata*", "Oral tradition transmitted by Mande griots; founding narrative of Mali."),
        ("Ibn Battuta, *Rihla* (1355)", "Description of Mansa Suleyman's court, mosque attendance, and royal protocol."),
        ("Afonso I to João III (1526)", "King of Kongo's letter denouncing Portuguese slavers operating in his kingdom."),
        ("*Tarikh al-Sudan* (al-Saʿdi, 17th c.)", "Timbuktu chronicle of Songhai rulers and scholars."),
    ],
    "vocab": [
        ("Mansa", "Title for the emperor of Mali"),
        ("Sankore", "Famous madrasa-mosque complex at Timbuktu"),
        ("Sahel", "Arid grassland belt south of the Sahara linking West African states to North Africa"),
    ],
    "compare_other": ("aas-origins-diaspora", "Origins of the African Diaspora", "later forced migrations dispersed people from these very societies"),
}

T["aas-origins-diaspora"] = {
    "export_prefix": "aasOriginsDiaspora",
    "id_prefix": "aasod",
    "title": "Origins of the African Diaspora",
    "short": "Origins of the Diaspora",
    "emoji": "🌍",
    "era": "c. 1450–1800",
    "overview": (
        "The African diaspora refers to the global dispersal of African-descended peoples — "
        "primarily through the transatlantic slave trade — and the cultural, linguistic, and "
        "religious continuities they preserved across the Americas, Caribbean, and Atlantic Europe."
    ),
    "core_concepts": [
        ("Diaspora", "Dispersed populations linked by shared African origin and ongoing cultural connections."),
        ("Cultural retention", "Survival of African religious, musical, linguistic, and culinary practices in the Americas."),
        ("Creolization", "Blending of African, European, and Indigenous American forms into new languages and cultures."),
    ],
    "figures": [
        ("Olaudah Equiano", "c. 1745–1797", "Igbo-born survivor of the Middle Passage; *The Interesting Narrative* (1789) is a foundational diaspora autobiography."),
        ("Phillis Wheatley", "c. 1753–1784", "Enslaved in Senegambia, sold to a Boston family; first published African American poet (1773)."),
        ("Ottobah Cugoano", "c. 1757–after 1791", "Fante-born abolitionist; *Thoughts and Sentiments on the Evil of Slavery* (1787) attacked the trade from London."),
        ("Boukman Dutty", "d. 1791", "Vodou priest who led the Bois Caïman ceremony that ignited the Haitian Revolution."),
        ("Granny Nanny of the Maroons", "c. 1686–c. 1755", "Asante-descended leader of Jamaica's Windward Maroons against the British."),
    ],
    "events": [
        ("1441 first Portuguese captives to Lisbon", "Beginning of European Atlantic slave trade."),
        ("1500s Portuguese-Kongo slaving", "Trade entangles Central African polities; Afonso I protests."),
        ("1619 Africans arrive at Point Comfort, Virginia", "First recorded enslaved Africans in English North America."),
        ("1655 British seize Jamaica", "Spanish-era enslaved people flee to mountains, establishing maroon communities."),
        ("1739 Treaties with Jamaican Maroons", "British recognize Maroon autonomy after First Maroon War."),
        ("c. 1500–1888 Atlantic slave trade", "~12.5 million Africans embarked; ~10.7 million survived."),
    ],
    "sources": [
        ("Equiano, *The Interesting Narrative* (1789)", "Eyewitness account of Igbo society, capture, and Middle Passage."),
        ("Wheatley, *Poems on Various Subjects* (1773)", "Demonstrates literacy and classical education to challenge proslavery claims."),
        ("Cugoano, *Thoughts and Sentiments* (1787)", "Direct demand for total abolition by an enslaved survivor."),
    ],
    "vocab": [
        ("Maroon", "Self-emancipated person living in autonomous communities outside slavery"),
        ("Creole", "Person or culture born in the Americas blending African, European, and Indigenous elements"),
        ("Yoruba", "West African people whose religious practices became the basis for Santería, Candomblé, and Lucumí"),
    ],
    "compare_other": ("aas-african-kingdoms", "African Kingdoms", "the diaspora preserved memory of these polities"),
}

T["aas-transatlantic-slave-trade"] = {
    "export_prefix": "aasTransatlanticSlaveTrade",
    "id_prefix": "aasts",
    "title": "The Transatlantic Slave Trade",
    "short": "Transatlantic Slave Trade",
    "emoji": "⛓️",
    "era": "c. 1500–1888",
    "overview": (
        "Between 1501 and 1866, an estimated 12.5 million Africans were forcibly embarked on European "
        "ships across the Atlantic. About 10.7 million survived the Middle Passage; only ~388,000 (~3.6%) "
        "disembarked in mainland North America. The trade integrated four continents into a coercive economic system."
    ),
    "core_concepts": [
        ("Triangular trade", "European manufactures → African captives → American plantation goods → Europe."),
        ("Middle Passage", "The Atlantic crossing; mortality averaged ~15%, sometimes much higher."),
        ("Asiento", "Spanish license granting European powers the monopoly to supply enslaved Africans to Spanish colonies."),
    ],
    "figures": [
        ("John Hawkins", "1532–1595", "First English slaver; raids West Africa 1562 with backing of Elizabeth I."),
        ("Royal African Company", "chartered 1672", "English monopoly under James, Duke of York; branded the initials 'DY' on captives."),
        ("Olaudah Equiano", "captured c. 1756", "Describes Bight of Biafra capture, holding pens at Bonny, and the Middle Passage."),
        ("Captain John Newton", "1725–1807", "Slave-ship captain turned abolitionist; wrote 'Amazing Grace' (1772) and *Thoughts upon the Slave Trade* (1788)."),
        ("Thomas Clarkson", "1760–1846", "British abolitionist whose evidence on conditions aboard ships catalyzed the 1807 Abolition Act."),
    ],
    "events": [
        ("1444 first major Portuguese auction at Lagos", "Codifies European commercial trafficking of Africans."),
        ("1518 Spanish asiento authorizes direct African shipments to the Americas", "Bypasses Iberian re-export."),
        ("1619 *White Lion* arrives at Point Comfort, Virginia", "First documented enslaved Africans in English North America."),
        ("1781 *Zong* massacre", "Captain throws 132 enslaved Africans overboard for insurance; galvanizes British abolitionism."),
        ("1807 British Abolition of the Slave Trade Act", "U.S. follows in 1808 (constitutionally permitted then)."),
        ("1820–1860 illegal trade", "British/U.S. patrols intercept ships; Brazil and Cuba continue legal imports until 1850/1867."),
    ],
    "sources": [
        ("Equiano, *Narrative* ch. 2 (1789)", "Most-cited Middle Passage testimony in 18th-century abolition debates."),
        ("Brookes slave-ship diagram (1788)", "Showed 482 Africans packed below decks; mass-printed by Clarkson."),
        ("Trans-Atlantic Slave Trade Database (Voyages.org)", "Modern database of ~36,000 documented voyages used by historians."),
    ],
    "vocab": [
        ("Barracoon", "Coastal holding pen where captives waited for slave ships"),
        ("Factor", "European agent stationed at African coastal forts (e.g., Elmina, Cape Coast)"),
        ("Tight pack", "Loading method maximizing captives per voyage at the cost of higher mortality"),
    ],
    "compare_other": ("aas-slavery-in-america", "Slavery in America", "the trade fed and shaped the North American plantation system"),
}

T["aas-slavery-in-america"] = {
    "export_prefix": "aasSlaveryInAmerica",
    "id_prefix": "aassia",
    "title": "Slavery in America",
    "short": "Slavery in America",
    "emoji": "🏚️",
    "era": "c. 1619–1865",
    "overview": (
        "Slavery in British North America hardened from a fluid 17th-century labor system into "
        "race-based, hereditary chattel slavery. By 1860, ~4 million enslaved African Americans "
        "produced two-thirds of the world's cotton supply, financing southern wealth and northern industry."
    ),
    "core_concepts": [
        ("Chattel slavery", "Legal status defining humans as inheritable property — distinct from indenture or serfdom."),
        ("Partus sequitur ventrem", "Virginia 1662 law: a child's status follows the mother's, making slavery hereditary."),
        ("Domestic slave trade", "After 1808 ban on imports, ~1 million people forcibly relocated from Upper to Lower South."),
    ],
    "figures": [
        ("Anthony Johnson", "c. 1600–1670", "Angolan-born Virginia free Black who himself owned servants — illustrates pre-1660s fluidity."),
        ("Eli Whitney", "1765–1825", "Cotton gin (1793) made short-staple cotton profitable, expanding slavery into the Deep South."),
        ("Solomon Northup", "1808–c. 1864", "Free Black New Yorker kidnapped into Louisiana slavery; *Twelve Years a Slave* (1853)."),
        ("Harriet Jacobs", "c. 1813–1897", "*Incidents in the Life of a Slave Girl* (1861) — first-person account of sexual exploitation."),
        ("Frederick Douglass", "c. 1818–1895", "*Narrative* (1845) describes Maryland slavery and the path to literacy as resistance."),
    ],
    "events": [
        ("1641 Massachusetts legalizes slavery", "First English colony to do so."),
        ("1662 Virginia partus law", "Slavery becomes hereditary through the mother."),
        ("1705 Virginia Slave Codes", "Comprehensive race-based legal regime; later models for other colonies."),
        ("1793 cotton gin", "Cotton acreage soars from ~10,000 bales (1793) to ~4 million (1860)."),
        ("1808 federal ban on Atlantic slave imports", "Domestic trade replaces Atlantic supply."),
        ("1820 Missouri Compromise", "36°30′ line divides expansion of slavery in the Louisiana Purchase."),
    ],
    "sources": [
        ("Douglass, *Narrative* (1845)", "Argues that literacy is the road to freedom — a reframing of master-slave power."),
        ("Jacobs, *Incidents* (1861)", "Reveals gendered violence largely absent from earlier male-authored narratives."),
        ("Slave Codes of Virginia (1705)", "Codifies racial hierarchy in colonial law."),
    ],
    "vocab": [
        ("Gang labor", "Plantation work organized in supervised groups, common on cotton estates"),
        ("Task system", "Each enslaved person assigned a daily task; common in Lowcountry rice plantations"),
        ("Slave codes", "Colony/state laws defining the legal status and restrictions of enslaved people"),
    ],
    "compare_other": ("aas-resistance-abolition", "Resistance & Abolition", "this oppressive system generated continuous resistance"),
}

T["aas-resistance-abolition"] = {
    "export_prefix": "aasResistanceAbolition",
    "id_prefix": "aasra",
    "title": "Resistance & Abolition",
    "short": "Resistance & Abolition",
    "emoji": "✊",
    "era": "c. 1700–1865",
    "overview": (
        "Enslaved African Americans resisted bondage daily — through work slowdowns, sabotage, "
        "flight, cultural retention, and outright revolt — while a transatlantic abolition movement "
        "of formerly enslaved leaders, Black ministers, and white allies dismantled the trade and, "
        "ultimately, slavery itself."
    ),
    "core_concepts": [
        ("Everyday resistance", "Tool-breaking, feigned illness, slowed work, theft of food, preservation of African names."),
        ("Armed revolt", "Stono (1739), Gabriel's (1800), Vesey (1822), Nat Turner (1831), Haiti (1791)."),
        ("Moral suasion vs political action", "Garrisonian immediatism vs. Liberty/Free Soil/Republican electoral strategies."),
    ],
    "figures": [
        ("Toussaint L'Ouverture", "1743–1803", "Led the Haitian Revolution, the only successful national slave revolt; first Black-led independent state in the Americas (1804)."),
        ("Denmark Vesey", "1767–1822", "Charleston AME founder who organized a planned 1822 uprising; executed before it could be carried out."),
        ("Nat Turner", "1800–1831", "Virginia preacher who led the deadliest U.S. slave revolt (Aug. 1831, ~60 white deaths)."),
        ("Harriet Tubman", "c. 1822–1913", "Conducted ~13 Underground Railroad missions; led the 1863 Combahee River Raid freeing ~750."),
        ("Frederick Douglass", "c. 1818–1895", "Published *The North Star* (1847); broke with Garrison over use of Constitution and politics."),
        ("William Lloyd Garrison", "1805–1879", "Founded *The Liberator* (1831); demanded immediate, uncompensated abolition."),
        ("David Walker", "c. 1796–1830", "*Appeal to the Coloured Citizens of the World* (1829) called for armed resistance."),
        ("Sojourner Truth", "c. 1797–1883", "'Ain't I a Woman?' speech (1851); linked abolition with women's rights."),
    ],
    "events": [
        ("1739 Stono Rebellion (SC)", "~20 white deaths; led to the Negro Act of 1740 restricting movement and literacy."),
        ("1791–1804 Haitian Revolution", "Defeats French, Spanish, and British forces; abolishes slavery and founds Haiti."),
        ("1816 AME Church founded", "Richard Allen leads first independent Black denomination in the U.S."),
        ("1831 Nat Turner Rebellion", "Triggers gag rules and harsher slave codes across the South."),
        ("1850 Fugitive Slave Act", "Forces northern compliance; radicalizes northern opinion."),
        ("1859 John Brown's raid on Harpers Ferry", "Brown plans a guerrilla war against slavery; executed but valorized by abolitionists."),
        ("1863 Emancipation Proclamation", "Frees enslaved people in Confederate-held areas; permits Black enlistment."),
    ],
    "sources": [
        ("Walker's *Appeal* (1829)", "Pamphlet smuggled into the South in sailors' clothing."),
        ("Douglass, 'What to the Slave is the Fourth of July?' (1852)", "Indicts national hypocrisy in plain biblical cadence."),
        ("Confessions of Nat Turner (1831)", "Mediated by Thomas Gray; complex source on revolt motives."),
    ],
    "vocab": [
        ("Underground Railroad", "Network of safe houses guiding escapees north"),
        ("Gradualism", "Strategy favoring step-by-step emancipation, often with compensation"),
        ("Immediatism", "Garrisonian demand for instant, uncompensated abolition"),
    ],
    "compare_other": ("aas-freedom-enslavement", "Freedom & Enslavement", "free Black communities formed the institutional backbone of resistance"),
}

T["aas-freedom-enslavement"] = {
    "export_prefix": "aasFreedomEnslavement",
    "id_prefix": "aasfe",
    "title": "Freedom & Enslavement",
    "short": "Freedom & Enslavement",
    "emoji": "🕊️",
    "era": "c. 1780–1865",
    "overview": (
        "Across the early Republic, free Black communities built churches, schools, mutual-aid "
        "societies, and a self-conscious press, even as federal law (Fugitive Slave Acts, *Dred Scott*) "
        "expanded slavery's reach. The line between 'free' and 'enslaved' was always contingent and racialized."
    ),
    "core_concepts": [
        ("Gradual emancipation in the North", "Pennsylvania (1780), New York (1799), New Jersey (1804) freed enslaved people only by birthdates."),
        ("Manumission", "Owner-granted freedom; often restricted by southern states after 1820s."),
        ("Citizenship contested", "*Dred Scott* (1857) declared people of African descent could never be U.S. citizens."),
    ],
    "figures": [
        ("Richard Allen", "1760–1831", "Founded the African Methodist Episcopal Church (1816); first Black bishop in the U.S."),
        ("Absalom Jones", "1746–1818", "Co-founded Philadelphia's Free African Society (1787); first Black Episcopal priest."),
        ("Prince Hall", "c. 1735–1807", "Founded the first Black Masonic lodge (1784); petitioned Massachusetts to end slavery."),
        ("James Forten", "1766–1842", "Wealthy Philadelphia sailmaker; financier of *The Liberator* and Black conventions."),
        ("Maria W. Stewart", "1803–1879", "First U.S.-born woman to lecture publicly on political topics; Boston, 1832–1833."),
    ],
    "events": [
        ("1780 PA Gradual Abolition Act", "First state emancipation law in the Atlantic world."),
        ("1787 Free African Society", "Black mutual-aid organization in Philadelphia."),
        ("1816 American Colonization Society founded", "Promoted resettlement to Liberia; Black opinion sharply divided."),
        ("1830 first National Negro Convention (Philadelphia)", "Black leaders organize collective political response."),
        ("1850 Fugitive Slave Act", "Federal commissioners paid more for returns than releases; sparks resistance."),
        ("1857 *Dred Scott v. Sandford*", "Taney rules Black people 'have no rights which the white man was bound to respect.'"),
    ],
    "sources": [
        ("Walker, *Appeal* (1829)", "Articulates citizenship and rights claims for free Black Americans."),
        ("Stewart speeches (1832)", "Earliest published political addresses by an American-born woman."),
        ("AME Church *Discipline* (1817)", "Institutional charter of independent Black religious life."),
    ],
    "vocab": [
        ("Manumission", "Legal release from slavery by an enslaver"),
        ("Black Codes", "Restrictive laws targeting free Black people in many states before and after slavery"),
        ("Colonization", "Movement to relocate free Black Americans to Africa, especially Liberia"),
    ],
    "compare_other": ("aas-resistance-abolition", "Resistance & Abolition", "free Black institutions sheltered abolitionist organizing"),
}

T["aas-reconstruction-jim-crow"] = {
    "export_prefix": "aasReconstructionJimCrow",
    "id_prefix": "aasrjc",
    "title": "Reconstruction & Jim Crow",
    "short": "Reconstruction & Jim Crow",
    "emoji": "⚖️",
    "era": "1865–1900",
    "overview": (
        "After emancipation, the Reconstruction Amendments (13th, 14th, 15th) and Freedmen's Bureau "
        "promised citizenship, education, and political participation. The withdrawal of federal "
        "troops in 1877 enabled white-supremacist violence and a regime of legal segregation, "
        "disfranchisement, and convict-lease labor sustained by *Plessy v. Ferguson* (1896)."
    ),
    "core_concepts": [
        ("Reconstruction Amendments", "13th (1865) abolition; 14th (1868) citizenship/equal protection; 15th (1870) Black male suffrage."),
        ("Freedmen's Bureau", "1865–1872 federal agency providing schools, contracts, and legal aid."),
        ("Disfranchisement", "Poll taxes, literacy tests, grandfather clauses, white primaries strip Black voting rights."),
    ],
    "figures": [
        ("Hiram Revels", "1827–1901", "First Black U.S. Senator (MS, 1870); filled Jefferson Davis's former seat."),
        ("Robert Smalls", "1839–1915", "Commandeered the *Planter* (1862); five-term U.S. congressman from SC."),
        ("Frederick Douglass", "c. 1818–1895", "Shifts focus to civil-rights enforcement; U.S. Marshal for D.C., minister to Haiti."),
        ("Ida B. Wells", "1862–1931", "*Southern Horrors* (1892) and *A Red Record* (1895) document lynchings and convict leasing."),
        ("Booker T. Washington", "1856–1915", "Tuskegee (1881); 1895 Atlanta Compromise advocates vocational training and accommodation."),
        ("W. E. B. Du Bois", "1868–1963", "*The Souls of Black Folk* (1903) attacks Washington; co-founder of NAACP (1909)."),
        ("Homer Plessy", "1862–1925", "Plaintiff in *Plessy v. Ferguson*; arrested in New Orleans testing 1890 Louisiana Separate Car Act."),
    ],
    "events": [
        ("1865 Special Field Order 15", "Sherman promises freedmen '40 acres and a mule'; Andrew Johnson rescinds."),
        ("1866 Civil Rights Act / 1868 14th Amendment", "Codify birthright citizenship and equal protection."),
        ("1870 15th Amendment", "Bars race-based denial of male suffrage."),
        ("1877 Compromise", "Hayes withdraws federal troops; Reconstruction ends."),
        ("1890 Mississippi Plan", "Constitutional convention eliminates Black voters via poll tax/literacy test."),
        ("1896 *Plessy v. Ferguson*", "Establishes 'separate but equal'; only Justice Harlan dissents."),
        ("1898 Wilmington insurrection", "White mob overthrows multiracial NC government — only successful U.S. coup."),
    ],
    "sources": [
        ("Wells-Barnett, *Southern Horrors* (1892)", "Statistical and journalistic indictment of lynching."),
        ("Du Bois, *Souls of Black Folk* (1903)", "Coins 'double-consciousness' and the 'color line.'"),
        ("Washington, Atlanta Compromise speech (1895)", "Argues for economic uplift over immediate political confrontation."),
    ],
    "vocab": [
        ("Sharecropping", "Tenant farming arrangement that often produced perpetual debt"),
        ("Black Codes", "1865–66 southern laws restricting Black labor and movement"),
        ("Convict leasing", "States leased prisoners — overwhelmingly Black — to private employers"),
    ],
    "compare_other": ("aas-great-migration-harlem", "Great Migration & Harlem Renaissance", "Jim Crow violence drove the 20th-century migration north"),
}

T["aas-great-migration-harlem"] = {
    "export_prefix": "aasGreatMigrationHarlem",
    "id_prefix": "aasgmh",
    "title": "The Great Migration & Harlem Renaissance",
    "short": "Great Migration & Harlem Renaissance",
    "emoji": "🚆",
    "era": "1910–1940",
    "overview": (
        "Between 1910 and 1970, ~6 million African Americans moved from the rural South to "
        "northern, midwestern, and western cities — fleeing Jim Crow and pulled by industrial labor "
        "demand. In neighborhoods like Harlem, this demographic shift produced an unprecedented "
        "flowering of Black literature, music, theater, and political thought."
    ),
    "core_concepts": [
        ("Push factors", "Lynching, sharecropping debt, boll weevil, disfranchisement."),
        ("Pull factors", "WWI labor demand (immigration cut off 1917), higher wages, voting rights, urban Black institutions."),
        ("New Negro", "Alain Locke's 1925 anthology framing self-confident, modern Black identity."),
    ],
    "figures": [
        ("Robert S. Abbott", "1870–1940", "*Chicago Defender* publisher; promoted northern migration through targeted Pullman porter distribution."),
        ("Marcus Garvey", "1887–1940", "UNIA (founded 1914 in Jamaica, NYC by 1916); 'Back to Africa,' Black Star Line, mass nationalism."),
        ("Alain Locke", "1885–1954", "First Black Rhodes Scholar; editor *The New Negro* (1925)."),
        ("Langston Hughes", "1901–1967", "Jazz-poetry of *The Weary Blues* (1926); 'The Negro Speaks of Rivers' (1921)."),
        ("Zora Neale Hurston", "1891–1960", "*Their Eyes Were Watching God* (1937); folklorist of African diasporic culture."),
        ("Duke Ellington", "1899–1974", "Cotton Club bandleader; refines big-band jazz as serious art."),
        ("Bessie Smith", "1894–1937", "'Empress of the Blues'; era's best-selling Black recording artist."),
        ("Aaron Douglas", "1899–1979", "Painter whose Egyptian-influenced silhouettes defined Harlem Renaissance visual style."),
    ],
    "events": [
        ("1916 first wave of Great Migration intensifies", "Wartime labor need pulls workers north."),
        ("1917 East St. Louis riot", "White mobs attack Black workers; ~100 killed."),
        ("1919 Red Summer", "White-on-Black violence in 25+ cities; Chicago riot kills 38."),
        ("1921 Tulsa Race Massacre", "Greenwood ('Black Wall Street') destroyed; 100–300 killed."),
        ("1925 *The New Negro* published", "Manifesto of Harlem Renaissance."),
        ("1929 Great Depression", "Disproportionate impact on Black workers; renaissance funding collapses."),
    ],
    "sources": [
        ("Locke, *The New Negro* (1925)", "Anthology of essays, fiction, poetry, and visual art."),
        ("Hughes, 'The Negro Artist and the Racial Mountain' (1926)", "Aesthetic manifesto of the renaissance."),
        ("Hurston, *Mules and Men* (1935)", "Ethnographic recording of Black folk culture."),
    ],
    "vocab": [
        ("UNIA", "Universal Negro Improvement Association — Garvey's mass organization"),
        ("Pan-Africanism", "Solidarity across the African diaspora"),
        ("Talented Tenth", "Du Bois's term for the educated Black elite he saw as race leaders"),
    ],
    "compare_other": ("aas-wwi-wwii-era", "WWI & WWII Era", "wartime mobilization continued the migration's economic pull"),
}

T["aas-wwi-wwii-era"] = {
    "export_prefix": "aasWwiWwiiEra",
    "id_prefix": "aasww",
    "title": "African Americans in the World Wars",
    "short": "WWI & WWII Era",
    "emoji": "🪖",
    "era": "1914–1945",
    "overview": (
        "African Americans served in segregated units in both world wars while facing Jim Crow at "
        "home. The contradiction between fighting fascism abroad and racism at home — captured by "
        "the *Pittsburgh Courier*'s 'Double V' campaign — accelerated postwar civil-rights mobilization."
    ),
    "core_concepts": [
        ("Segregated military service", "U.S. armed forces remained legally segregated until Truman's Executive Order 9981 (1948)."),
        ("Double V", "Victory abroad over fascism, victory at home over racism."),
        ("Federal employment opening", "EO 8802 (1941) banned defense-industry discrimination — the first such order since Reconstruction."),
    ],
    "figures": [
        ("369th 'Harlem Hellfighters'", "1917–1919", "Spent 191 days in combat with French Army; awarded the Croix de Guerre."),
        ("A. Philip Randolph", "1889–1979", "Brotherhood of Sleeping Car Porters (1925); 1941 March on Washington Movement pressured FDR into EO 8802."),
        ("James G. Thompson", "1942 letter to *Pittsburgh Courier*", "Coined the 'Double V' campaign."),
        ("Tuskegee Airmen (332nd Fighter Group)", "1941–1946", "Black combat pilots; ~1,500 missions, exemplary bomber-escort record."),
        ("Charles Hamilton Houston", "1895–1950", "WWI veteran, Howard Law dean; architect of NAACP legal strategy against segregation."),
        ("Dorie Miller", "1919–1943", "Pearl Harbor Navy mess attendant who manned anti-aircraft guns; first Black recipient of the Navy Cross."),
    ],
    "events": [
        ("1917 East St. Louis riot", "Anti-Black violence during WWI labor migration."),
        ("1925 Brotherhood of Sleeping Car Porters founded", "First Black-led union recognized by AFL."),
        ("1941 EO 8802 / FEPC created", "Bans defense-industry discrimination."),
        ("1942 CORE founded in Chicago", "Pioneers nonviolent direct action (e.g., 1947 Journey of Reconciliation)."),
        ("1943 Detroit and Harlem riots", "Wartime racial tensions explode."),
        ("1944 *Smith v. Allwright*", "Supreme Court strikes down white primaries in Texas."),
        ("1948 EO 9981", "Truman desegregates U.S. armed forces."),
    ],
    "sources": [
        ("*Pittsburgh Courier* Double V campaign (1942–43)", "Black press leadership of wartime civil-rights agitation."),
        ("Randolph March on Washington Movement memos (1941)", "Threatened mass march pressures FDR."),
        ("Tuskegee Airmen Air Corps records", "Operational data refuting claims about Black combat capacity."),
    ],
    "vocab": [
        ("FEPC", "Fair Employment Practices Committee — created by EO 8802"),
        ("MOWM", "March on Washington Movement (1941)"),
        ("Double V", "Pittsburgh Courier slogan linking domestic and global anti-fascism"),
    ],
    "compare_other": ("aas-civil-rights-movement", "Civil Rights Movement", "wartime gains became the foundation for postwar mass mobilization"),
}

T["aas-practice-freedom"] = {
    "export_prefix": "aasPracticeFreedom",
    "id_prefix": "aaspf",
    "title": "The Practice of Freedom",
    "short": "Practice of Freedom",
    "emoji": "🤝",
    "era": "c. 1830–1950",
    "overview": (
        "Black Americans built an entire counter-public — churches, HBCUs, fraternal orders, "
        "newspapers, sororities, banks, baseball leagues, and women's clubs — that sustained "
        "community life and trained generations of activists, intellectuals, and leaders."
    ),
    "core_concepts": [
        ("Black church", "AME (1816), AMEZ (1821), National Baptist (1895) — institutional bedrock of Black civic life."),
        ("HBCUs", "Howard (1867), Fisk (1866), Spelman (1881), Morehouse (1867), Tuskegee (1881)."),
        ("Black press", "*Freedom's Journal* (1827), *Chicago Defender* (1905), *Pittsburgh Courier* (1907)."),
    ],
    "figures": [
        ("Mary McLeod Bethune", "1875–1955", "Founded Bethune-Cookman (1904); FDR's 'Black Cabinet' coordinator; founded NCNW (1935)."),
        ("Ida B. Wells", "1862–1931", "Anti-lynching crusader; co-founder NAACP (1909); suffragist."),
        ("Madam C. J. Walker", "1867–1919", "First Black woman millionaire; built haircare empire and trained ~40,000 Black women agents."),
        ("Carter G. Woodson", "1875–1950", "Founded ASNLH (1915) and 'Negro History Week' (1926; later Black History Month)."),
        ("Charles Hamilton Houston", "1895–1950", "Howard Law dean; mentored Thurgood Marshall; designed NAACP legal strategy."),
        ("Rube Foster", "1879–1930", "Founded the Negro National League (1920) — first sustainable Black professional sports league."),
    ],
    "events": [
        ("1881 Tuskegee Institute founded", "Vocational education model under Booker T. Washington."),
        ("1896 NACW founded", "National Association of Colored Women — 'Lifting as We Climb.'"),
        ("1909 NAACP founded", "Du Bois, Wells, Mary White Ovington."),
        ("1915 ASNLH founded", "Carter Woodson institutionalizes Black historical scholarship."),
        ("1920 Negro National League begins play", "Rube Foster's professional baseball circuit."),
        ("1935 NCNW founded", "Bethune unites Black women's organizations."),
    ],
    "sources": [
        ("Wells, *Crusade for Justice* (autobiography, pub. 1970)", "Anti-lynching organizing memoir."),
        ("Woodson, *The Mis-Education of the Negro* (1933)", "Critique of curriculum that erases Black history."),
        ("*Pittsburgh Courier* archives", "Largest-circulation Black weekly of the early 20th c."),
    ],
    "vocab": [
        ("HBCU", "Historically Black College or University"),
        ("Mutual aid", "Cooperative provision of insurance, burial, and welfare"),
        ("ASNLH", "Association for the Study of Negro Life and History"),
    ],
    "compare_other": ("aas-civil-rights-movement", "Civil Rights Movement", "these institutions were the staging grounds for the postwar movement"),
}

T["aas-civil-rights-movement"] = {
    "export_prefix": "aasCivilRightsMovement",
    "id_prefix": "aascrm",
    "title": "The Civil Rights Movement",
    "short": "Civil Rights Movement",
    "emoji": "🗽",
    "era": "1954–1968",
    "overview": (
        "From *Brown v. Board* (1954) through the Civil Rights Act (1964) and Voting Rights Act "
        "(1965), a generation of organizers, lawyers, students, and ordinary people dismantled "
        "de jure segregation through litigation, mass nonviolent direct action, voter registration, "
        "and federal legislation."
    ),
    "core_concepts": [
        ("Legal strategy", "NAACP LDF litigation campaign building toward *Brown v. Board* (1954)."),
        ("Nonviolent direct action", "Boycotts, sit-ins, freedom rides, marches under Gandhian/Christian discipline."),
        ("Federal enforcement", "1957 and 1964 Civil Rights Acts; 1965 Voting Rights Act with Section 5 preclearance."),
    ],
    "figures": [
        ("Thurgood Marshall", "1908–1993", "Chief NAACP LDF counsel in *Brown*; first Black Supreme Court Justice (1967)."),
        ("Rosa Parks", "1913–2005", "Trained NAACP secretary whose Dec. 1, 1955 arrest sparked the Montgomery Bus Boycott."),
        ("Martin Luther King Jr.", "1929–1968", "Co-founded SCLC (1957); 'Letter from Birmingham Jail' (1963); Nobel Peace Prize (1964)."),
        ("Ella Baker", "1903–1986", "SCLC and SNCC organizer; bottom-up, decentralized leadership philosophy."),
        ("John Lewis", "1940–2020", "SNCC chair; led Selma marchers across the Edmund Pettus Bridge (Bloody Sunday, 1965)."),
        ("Fannie Lou Hamer", "1917–1977", "MFDP vice-chair; 1964 DNC testimony exposed Mississippi Democratic exclusion."),
        ("Bayard Rustin", "1912–1987", "Lead organizer of the 1963 March on Washington; Quaker pacifist and openly gay strategist."),
        ("Diane Nash", "b. 1938", "Nashville student movement leader; coordinated the 1961 Freedom Rides after CORE paused."),
    ],
    "events": [
        ("1954 *Brown v. Board of Education*", "Unanimous decision overturns *Plessy* in public schools."),
        ("1955–1956 Montgomery Bus Boycott", "381 days; ends with *Browder v. Gayle* desegregating Montgomery buses."),
        ("1957 Little Rock Nine", "Eisenhower federalizes Arkansas Guard to enforce school integration."),
        ("1960 Greensboro sit-ins", "Spread to 55 cities in 13 states; SNCC founded April 1960."),
        ("1961 Freedom Rides", "CORE/SNCC test interstate-bus desegregation; mob violence in Anniston, AL."),
        ("1963 Birmingham campaign", "Bull Connor's fire hoses on children televised; King's 'Letter from Birmingham Jail.'"),
        ("Aug. 1963 March on Washington", "~250,000 attend; King's 'I Have a Dream' speech."),
        ("1964 Civil Rights Act", "Bans discrimination in public accommodations and employment; Title VII."),
        ("1965 Selma–Montgomery marches → Voting Rights Act", "VRA Section 5 preclearance protects southern Black voting until *Shelby County v. Holder* (2013)."),
    ],
    "sources": [
        ("King, 'Letter from Birmingham Jail' (1963)", "Defends nonviolent direct action against white-moderate critics."),
        ("Hamer, 1964 DNC Credentials Committee testimony", "Nationally televised account of Mississippi violence."),
        ("Selma–Montgomery footage (1965)", "'Bloody Sunday' images shift national opinion toward VRA."),
    ],
    "vocab": [
        ("SCLC", "Southern Christian Leadership Conference (1957)"),
        ("SNCC", "Student Nonviolent Coordinating Committee (1960)"),
        ("MFDP", "Mississippi Freedom Democratic Party (1964)"),
    ],
    "compare_other": ("aas-black-power-beyond", "Black Power & Beyond", "by 1966 a younger generation challenged integrationist strategy"),
}

T["aas-black-power-beyond"] = {
    "export_prefix": "aasBlackPowerBeyond",
    "id_prefix": "aasbpb",
    "title": "Black Power & Beyond",
    "short": "Black Power & Beyond",
    "emoji": "✊🏿",
    "era": "1965–1980",
    "overview": (
        "After 1965, frustration with the pace of change and persistent northern racism produced "
        "Black Power: a constellation of nationalist, socialist, cultural, and pan-African movements "
        "that emphasized self-determination, community control, and Black aesthetic and intellectual autonomy."
    ),
    "core_concepts": [
        ("Black Power", "Stokely Carmichael's June 1966 Greenwood, MS rally — slogan reframes the movement."),
        ("Community survival programs", "Black Panther Free Breakfast, free clinics, sickle-cell screening."),
        ("Black Arts Movement", "Cultural arm of Black Power — Amiri Baraka, Sonia Sanchez, Larry Neal."),
    ],
    "figures": [
        ("Malcolm X", "1925–1965", "Nation of Islam minister; founded OAAU (1964); pilgrimage to Mecca shifts toward internationalism; assassinated Feb. 21, 1965."),
        ("Stokely Carmichael / Kwame Ture", "1941–1998", "SNCC chair; coined 'Black Power' (1966); All-African People's Revolutionary Party."),
        ("Huey P. Newton", "1942–1989", "Co-founded Black Panther Party with Bobby Seale (Oakland, Oct. 1966)."),
        ("Angela Davis", "b. 1944", "UCLA philosopher fired for Communist Party membership; 1972 acquittal galvanizes prison-abolition organizing."),
        ("Fred Hampton", "1948–1969", "Illinois BPP chair; built the original Rainbow Coalition; killed in FBI/Chicago police raid Dec. 4, 1969."),
        ("Shirley Chisholm", "1924–2005", "First Black woman in Congress (NY-12, 1969); 1972 presidential campaign."),
        ("Maulana Karenga", "b. 1941", "US Organization; founded Kwanzaa (1966)."),
        ("Amiri Baraka", "1934–2014", "*Black Magic* (1969); defined Black Arts aesthetics."),
    ],
    "events": [
        ("1965 Watts uprising", "34 deaths; signals northern urban unrest."),
        ("1966 Black Panther Party founded", "Ten-Point Program demands housing, employment, justice."),
        ("1968 Olympic Project for Human Rights", "Smith and Carlos raise gloved fists in Mexico City."),
        ("1969 Free Breakfast Program", "BPP feeds tens of thousands of children before Federal School Breakfast Program expanded."),
        ("1971 Attica uprising", "Prison rebellion — Black Power and prisoners' rights converge."),
        ("1972 Gary Black Political Convention", "~10,000 delegates draft a National Black Political Agenda."),
    ],
    "sources": [
        ("Black Panther Ten-Point Program (1966)", "Programmatic statement of Black Power demands."),
        ("Carmichael & Hamilton, *Black Power* (1967)", "Defines institutional racism."),
        ("Davis, *Women, Race & Class* (1981)", "Synthesizes Black feminism, Marxism, and abolitionism."),
    ],
    "vocab": [
        ("BPP", "Black Panther Party"),
        ("OAAU", "Organization of Afro-American Unity (Malcolm X, 1964)"),
        ("COINTELPRO", "FBI counterintelligence program (1956–1971) targeting Black activists"),
    ],
    "compare_other": ("aas-civil-rights-movement", "Civil Rights Movement", "Black Power both extended and critiqued integrationist strategy"),
}

T["aas-contemporary-issues"] = {
    "export_prefix": "aasContemporaryIssues",
    "id_prefix": "aasci",
    "title": "Contemporary Issues & Debates",
    "short": "Contemporary Issues",
    "emoji": "⚡",
    "era": "1980–present",
    "overview": (
        "From the War on Drugs and mass incarceration through Obama's election, Black Lives Matter, "
        "and the 1619 Project, contemporary African American history has been shaped by the persistence "
        "of structural inequality alongside unprecedented political and cultural visibility."
    ),
    "core_concepts": [
        ("Mass incarceration", "U.S. prison population rose from ~300,000 (1972) to ~2.3 million (2008); Black men incarcerated at 5–6× white rate."),
        ("Color-blind racism", "Post-Civil Rights ideology that ignores structural inequality (Eduardo Bonilla-Silva)."),
        ("Movement for Black Lives", "Decentralized network founded 2013; broadens civil-rights agenda to police violence, abolition, intersectionality."),
    ],
    "figures": [
        ("Jesse Jackson", "b. 1941", "1984 and 1988 Democratic presidential campaigns; Rainbow Coalition."),
        ("Toni Morrison", "1931–2019", "Nobel Prize 1993; *Beloved* (1987) reframes American memory of slavery."),
        ("Cornel West", "b. 1953", "*Race Matters* (1993); Black prophetic Christian intellectual."),
        ("Barack Obama", "b. 1961", "First Black U.S. president (2009–2017)."),
        ("Patrisse Cullors, Alicia Garza, Opal Tometi", "founded BLM 2013", "Following the acquittal of Trayvon Martin's killer."),
        ("Michelle Alexander", "b. 1967", "*The New Jim Crow* (2010) maps mass incarceration onto post-Reconstruction racial control."),
        ("Ta-Nehisi Coates", "b. 1975", "'The Case for Reparations' (Atlantic, 2014); *Between the World and Me* (2015)."),
        ("Stacey Abrams", "b. 1973", "Voter-mobilization architect (Fair Fight); reshapes Georgia 2020/2022 elections."),
    ],
    "events": [
        ("1986 Anti-Drug Abuse Act", "100:1 crack/powder cocaine sentencing disparity."),
        ("1992 LA Uprising", "After Rodney King verdict; ~63 deaths."),
        ("1994 Crime Bill", "Three-strikes mandatory minimums; truth-in-sentencing grants."),
        ("2008 Obama elected", "First Black U.S. president."),
        ("2013 *Shelby County v. Holder*", "Strikes VRA Section 5 preclearance formula."),
        ("2014 Ferguson uprising", "Following Michael Brown's death; BLM moves into national spotlight."),
        ("2019 *1619 Project* (Hannah-Jones)", "Reframes American founding around slavery; provokes curriculum debates."),
        ("2020 George Floyd protests", "~15–26 million Americans participate — likely largest U.S. protest movement ever."),
    ],
    "sources": [
        ("Alexander, *The New Jim Crow* (2010)", "Argues mass incarceration is a racial caste system."),
        ("Coates, 'The Case for Reparations' (2014)", "Frames housing discrimination and HOLC redlining as theft."),
        ("BLM founding statement (2013)", "Centers Black queer and women's lives within the movement."),
    ],
    "vocab": [
        ("Mass incarceration", "Historic expansion of U.S. imprisonment since the 1970s, racially disparate"),
        ("Redlining", "1930s federal HOLC maps that denied mortgages in Black neighborhoods"),
        ("Reparations", "Material redress for slavery and successor injustices"),
    ],
    "compare_other": ("aas-movements-debates", "Movements & Debates", "contemporary debates extend long-running questions of strategy and identity"),
}

T["aas-movements-debates"] = {
    "export_prefix": "aasMovementsDebates",
    "id_prefix": "aasmd",
    "title": "Movements & Debates",
    "short": "Movements & Debates",
    "emoji": "💬",
    "era": "1850–present",
    "overview": (
        "Across more than 150 years, African American thought has grappled with enduring questions: "
        "integration vs. separatism, gradualism vs. immediatism, civil rights vs. human rights, race "
        "alone vs. intersectional analysis. These debates have shaped strategy, art, and political "
        "alignments from Frederick Douglass through bell hooks and the Movement for Black Lives."
    ),
    "core_concepts": [
        ("Integration vs. separatism", "Douglass vs. Delany; King vs. Malcolm X; NAACP vs. Nation of Islam."),
        ("Intersectionality", "Crenshaw (1989) — overlapping race, gender, and class generate distinct experiences of inequality."),
        ("Pan-Africanism", "Du Bois congresses (1900–1945); Garvey UNIA; Kwame Nkrumah; Black Power's African turn."),
    ],
    "figures": [
        ("Frederick Douglass vs. Martin Delany", "19th c.", "Moral suasion / integration vs. emigration / Black nationalism."),
        ("Booker T. Washington vs. W. E. B. Du Bois", "1895–1915", "Vocational uplift vs. liberal arts and political agitation."),
        ("Combahee River Collective", "founded 1974", "Black lesbian feminist statement (1977) defines identity politics."),
        ("Audre Lorde", "1934–1992", "*Sister Outsider* (1984); 'master's tools' essay; foundational to intersectional thought."),
        ("Kimberlé Crenshaw", "b. 1959", "Coined 'intersectionality' (1989); critical race theory founder."),
        ("bell hooks", "1952–2021", "*Ain't I a Woman* (1981); critiques feminism's racial blind spots."),
        ("Bayard Rustin", "1912–1987", "Argued for cross-racial coalition politics in 'From Protest to Politics' (1965)."),
        ("Octavia Butler", "1947–2006", "Afrofuturist novelist; *Kindred* (1979), *Parable of the Sower* (1993)."),
    ],
    "events": [
        ("1895 Atlanta Compromise vs. 1903 *Souls of Black Folk*", "Public Washington–Du Bois split."),
        ("1919 Pan-African Congress (Paris)", "Du Bois petitions Versailles."),
        ("1955 Bandung Conference", "Asian–African solidarity reframes civil rights as anti-colonial."),
        ("1977 Combahee River Collective Statement", "Foundational Black feminist manifesto."),
        ("1989 Crenshaw, 'Demarginalizing the Intersection'", "Introduces 'intersectionality' to law journals."),
        ("2014 Coates 'Reparations'", "Revives policy debate; HR 40 study commission re-introduced."),
    ],
    "sources": [
        ("Combahee River Collective Statement (1977)", "Defines identity politics from a Black lesbian socialist standpoint."),
        ("Crenshaw, 'Demarginalizing the Intersection' (1989)", "Origin of 'intersectionality' as legal-academic term."),
        ("Coates, 'The Case for Reparations' (2014)", "Synthesis of housing discrimination, mass incarceration, and historical theft."),
    ],
    "vocab": [
        ("Intersectionality", "Analytic framework for overlapping systems of oppression"),
        ("Pan-Africanism", "Solidarity across the African diaspora"),
        ("Afrofuturism", "Aesthetic linking African diaspora culture with science fiction and technology"),
    ],
    "compare_other": ("aas-contemporary-issues", "Contemporary Issues", "today's policy debates continue these long-running arguments"),
}

# Sanity: 14 topics
assert len(T) == 14, f"Expected 14 topics, got {len(T)}"

# -----------------------------------------------------------------------------
# Lesson part templates
# Each part has its own focus angle + uses topic-specific data heavily.
# -----------------------------------------------------------------------------

PART_FOCUSES = {
    1: ("Foundations & Key Concepts", "Foundations"),
    2: ("Key Processes & Mechanisms", "Key Processes"),
    3: ("Patterns, Regions & Case Studies", "Patterns & Examples"),
    4: ("Connections Across the Diaspora", "Connections & Interactions"),
    5: ("Continuity & Change Over Time", "Change Over Time"),
    6: ("Source & Evidence Workshop", "Source Workshop"),
    7: ("AP Exam Strategy & Review", "AP Review"),
}

def md_table_figures(t):
    rows = "\n".join(f"| **{n}** | {d} | {note} |" for n, d, note in t["figures"][:5])
    return f"| Figure | Dates | Why they matter |\n|---|---|---|\n{rows}"

def md_table_events(t, n_first=0, n_last=None):
    items = t["events"][n_first:n_last]
    rows = "\n".join(f"| **{e}** | {desc} |" for e, desc in items)
    return f"| Event | Significance |\n|---|---|\n{rows}"

def md_concepts(t):
    rows = "\n".join(f"| **{c}** | {d} |" for c, d in t["core_concepts"])
    return f"| Core concept | What it refers to |\n|---|---|\n{rows}"

def md_sources(t):
    rows = "\n".join(f"- **{s}** — {d}" for s, d in t["sources"])
    return rows

def js_str(value: str) -> str:
    """JSON-encode a string for safe embedding in TS source (handles backticks/quotes/escapes)."""
    return json.dumps(value, ensure_ascii=False)

# -----------------------------------------------------------------------------
# Section builders. Each returns a dict with 'id','type','content', optional 'exercise'.
# -----------------------------------------------------------------------------

def section_text(sec_id, content):
    return {"id": sec_id, "type": "text", "content": content}

def section_mc(sec_id, label, questions):
    return {"id": sec_id, "type": "multiple-choice",
            "content": label,
            "exercise": {"questions": questions}}

def section_input(sec_id, prompt, answers, hints, expl):
    return {"id": sec_id, "type": "input-boxes",
            "content": prompt,
            "exercise": {
                "boxes": len(answers),
                "correctAnswers": answers,
                "hint1": hints[0], "hint2": hints[1], "hint3": hints[2],
                "explanation": expl,
            }}

def section_dropdown(sec_id, label, dropdowns, correct, hints, expl):
    return {"id": sec_id, "type": "dropdown-select",
            "content": label,
            "exercise": {
                "dropdowns": dropdowns,
                "correctAnswers": correct,
                "hint1": hints[0], "hint2": hints[1], "hint3": hints[2],
                "explanation": expl,
            }}

# -----------------------------------------------------------------------------
# Per-part content builders. Each returns the list of sections for that part.
# All builders produce ~6 sections matching WH lesson shape.
# -----------------------------------------------------------------------------

def part1(t):
    p = t["id_prefix"]
    intro = (
        f"# {t['emoji']} {t['title']} ({t['era']})\n\n"
        f"**Part 1 of 7 — Foundations & Key Concepts**\n\n---\n\n"
        f"### Why this unit matters\n\n"
        f"{t['overview']}\n\n"
        f"### Core concepts\n\n{md_concepts(t)}\n\n"
        f"> 🔑 **Key Concept:** AP African American History rewards arguments that combine "
        f"specific evidence (named figures, dates, primary sources) with claims about causation, "
        f"continuity, and change.\n"
    )
    sec_intro = section_text(f"{p}1-intro", intro)

    fig = t["figures"]
    sec_figs = section_text(f"{p}1-figures",
        f"## 📖 Key Figures of {t['short']}\n\n"
        f"{md_table_figures(t)}\n\n"
        f"> ⚠️ **AP Alert:** Strong responses cite specific figures by name and date — "
        f"e.g., '{fig[0][0]} ({fig[0][1]})' rather than 'a famous leader.'"
    )

    q1 = {
        "question": f"Which statement BEST captures why {t['short']} is foundational to AP African American History?",
        "options": [
            t["overview"],
            f"{t['short']} is primarily a literary movement with no political implications.",
            f"{t['short']} only matters to one decade and rarely appears on the AP exam.",
            f"{t['short']} is studied to memorize dates without analyzing causes.",
        ],
        "correctAnswer": 0,
        "explanation": f"AP rewards students who can articulate why {t['short']} matters in the broader course narrative, not just describe it.",
    }
    q2 = {
        "question": f"{fig[0][0]} ({fig[0][1]}) is significant in this unit primarily because:",
        "options": [
            fig[0][2],
            f"{fig[0][0]} opposed every form of African American institution building.",
            f"{fig[0][0]} lived after the events of {t['short']} ended.",
            f"{fig[0][0]} is mentioned only in passing on the AP exam.",
        ],
        "correctAnswer": 0,
        "explanation": f"{fig[0][0]} is one of the central named figures the AP exam expects students to deploy when writing about {t['short']}.",
    }
    sec_q1 = section_mc(f"{p}1-quiz1", "**Concept Check** 🎯", [q1, q2])

    sec_q2 = section_text(f"{p}1-context",
        f"## Historical Context\n\n"
        f"{md_table_events(t, 0, 3)}\n\n"
        f"### Primary sources to know\n\n{md_sources(t)}\n"
    )

    vocab = t["vocab"]
    sec_input = section_input(f"{p}1-input",
        "**Applied Recall** ✍️\n\n"
        "Use the exact historical term:\n\n"
        f"1) {vocab[0][1]}\n\n"
        f"2) {vocab[1][1]}\n\n"
        f"3) {vocab[2][1]}\n",
        [vocab[0][0], vocab[1][0], vocab[2][0]],
        [f"Concept 1: {vocab[0][0][0]}…", f"Concept 2: {vocab[1][0][0]}…", f"Concept 3: {vocab[2][0][0]}…"],
        f"{vocab[0][0]}, {vocab[1][0]}, and {vocab[2][0]} are core vocabulary for {t['short']}.",
    )

    cc = t["core_concepts"]
    sec_dd = section_dropdown(f"{p}1-dropdown",
        "**Match the Concepts** 🔍",
        [
            {"label": f"{cc[0][0]} is best described as ___", "options": [cc[0][1], cc[1][1], cc[2][1], "An unrelated modern policy debate"]},
            {"label": f"{cc[1][0]} is best described as ___", "options": [cc[1][1], cc[0][1], cc[2][1], "A 21st-century technology trend"]},
            {"label": f"{cc[2][0]} is best described as ___", "options": [cc[2][1], cc[0][1], cc[1][1], "An economic theory unrelated to this period"]},
        ],
        [cc[0][1], cc[1][1], cc[2][1]],
        ["Definition tracks the concept name closely.",
         "Match the language used in primary sources.",
         "Use the historical, not the modern, definition."],
        f"All three are foundational concepts the AP exam expects you to define and apply within {t['short']}.",
    )

    appq1 = {
        "question": f"A historian argues that {t['short']} is essential for understanding African American history. Which evidence BEST supports the claim?",
        "options": [
            f"{fig[0][0]} ({fig[0][1]}) — {fig[0][2]}",
            f"A 21st-century pop song references {t['short']} without historical context.",
            f"{t['short']} is unrelated to broader trends in U.S. or Atlantic history.",
            "There are no primary sources for this period.",
        ],
        "correctAnswer": 0,
        "explanation": "Strong AP arguments cite specific historical actors and dates, not anachronistic or vague references.",
    }
    appq2 = {
        "question": f"Which statement most accurately describes the historical context of {t['short']}?",
        "options": [
            t["overview"],
            f"{t['short']} occurred entirely outside any global or transregional context.",
            f"{t['short']} produced no documentary evidence and is impossible to study.",
            f"{t['short']} only appears on AP optional questions.",
        ],
        "correctAnswer": 0,
        "explanation": "AP rewards contextualization — placing the topic within larger historical processes.",
    }
    sec_app = section_mc(f"{p}1-applied", "**AP-Style Application** 🎯", [appq1, appq2])

    return [sec_intro, sec_figs, sec_q1, sec_q2, sec_input, sec_dd, sec_app]


def part2(t):
    p = t["id_prefix"]
    cc = t["core_concepts"]
    fig = t["figures"]
    intro = (
        f"# {t['emoji']} {t['title']}\n\n"
        f"**Part 2 of 7 — Key Processes & Mechanisms**\n\n---\n\n"
        f"## What drove {t['short']}?\n\n"
        f"This part focuses on the *mechanisms* — the systematic processes that produced the "
        f"patterns historians describe.\n\n"
        f"{md_concepts(t)}\n"
    )
    sec_intro = section_text(f"{p}2-intro", intro)

    sec_proc = section_text(f"{p}2-process",
        f"## Mechanisms in action\n\n"
        f"{md_table_events(t, 0, 4)}\n\n"
        f"### Causal chains\n\n"
        f"AP responses on {t['short']} should make causation explicit. A strong sentence might be:\n\n"
        f"> Because {cc[0][0].lower()} intensified, communities responded by {cc[2][0].lower()}, "
        f"which in turn produced {cc[1][0].lower()}.\n"
    )

    q1 = {
        "question": f"Which BEST describes a primary mechanism shaping {t['short']}?",
        "options": [cc[0][1], "An unrelated technological invention from a different century.",
                    "Pure coincidence with no identifiable cause.",
                    "A modern political slogan with no historical content."],
        "correctAnswer": 0,
        "explanation": f"{cc[0][0]} is the central mechanism the AP exam expects students to explain.",
    }
    q2 = {
        "question": f"{fig[1][0]}'s career illustrates which historical mechanism?",
        "options": [fig[1][2],
                    f"{fig[1][0]} had no impact on {t['short']}.",
                    "An entirely modern policy debate.",
                    "A purely literary aesthetic."],
        "correctAnswer": 0,
        "explanation": f"AP rewards specific causal claims tied to named figures.",
    }
    sec_q = section_mc(f"{p}2-quiz", "**Concept Check** 🎯", [q1, q2])

    sec_input = section_input(f"{p}2-input",
        "**Applied Recall** ✍️\n\n"
        f"1) Which figure ({fig[0][1]}) is associated with {t['short']}?\n\n"
        f"2) Which figure ({fig[1][1]}) shaped this mechanism?\n\n"
        f"3) Which figure ({fig[2][1]}) extended it?\n",
        [fig[0][0], fig[1][0], fig[2][0]],
        [f"Hint: {fig[0][1]}", f"Hint: {fig[1][1]}", f"Hint: {fig[2][1]}"],
        "Naming specific figures is essential for high-scoring AP responses.",
    )

    sec_dd = section_dropdown(f"{p}2-dropdown",
        "**Trace the Mechanism** 🔍",
        [
            {"label": f"The mechanism most strongly associated with {fig[0][0]} is ___", "options": [fig[0][2], fig[1][2], fig[2][2], "Unrelated to this unit"]},
            {"label": f"The mechanism most strongly associated with {fig[1][0]} is ___", "options": [fig[1][2], fig[0][2], fig[2][2], "Unrelated to this unit"]},
            {"label": f"The mechanism most strongly associated with {fig[2][0]} is ___", "options": [fig[2][2], fig[0][2], fig[1][2], "Unrelated to this unit"]},
        ],
        [fig[0][2], fig[1][2], fig[2][2]],
        ["Match the figure's actual contribution.", "Use the dates as a guide.", "Stay within the historical period."],
        "Each figure is associated with a distinct mechanism within the unit.",
    )

    appq = {
        "question": f"A student argues that {t['short']} happened spontaneously. The strongest counter-argument is:",
        "options": [
            f"Identifying specific actors and processes — e.g., {fig[0][0]} ({fig[0][1]}) — that drove the change.",
            "Insisting that historians cannot know causes.",
            "Citing only events from outside this period.",
            "Memorizing dates without analyzing them.",
        ],
        "correctAnswer": 0,
        "explanation": "Historical causation requires named actors, dated events, and articulated mechanisms.",
    }
    appq2 = {
        "question": f"Which mechanism is MOST closely linked to {cc[1][0]}?",
        "options": [cc[1][1], cc[0][1], cc[2][1], "A cause from a different historical era."],
        "correctAnswer": 0,
        "explanation": f"{cc[1][0]} has its own historical mechanism distinct from related concepts.",
    }
    sec_app = section_mc(f"{p}2-applied", "**AP-Style Application** 🎯", [appq, appq2])

    return [sec_intro, sec_proc, sec_q, sec_input, sec_dd, sec_app]


def part3(t):
    p = t["id_prefix"]
    ev = t["events"]
    intro = (
        f"# {t['emoji']} {t['title']}\n\n"
        f"**Part 3 of 7 — Patterns, Regions & Case Studies**\n\n---\n\n"
        f"## Specific cases — not abstractions\n\n"
        f"{md_table_events(t)}\n"
    )
    sec_intro = section_text(f"{p}3-intro", intro)

    sec_cases = section_text(f"{p}3-cases",
        f"## Comparing cases\n\n"
        f"AP comparison prompts ask you to identify a specific similarity AND difference between "
        f"cases. For {t['short']}, useful comparisons include:\n\n"
        f"- {ev[0][0]} vs. {ev[1][0]}\n- {ev[1][0]} vs. {ev[2][0]}\n"
        f"- {ev[2][0]} vs. {ev[-1][0]}\n\n"
        f"### Strong comparison sentence\n\n"
        f"> Both {ev[0][0]} and {ev[1][0]} involved {t['core_concepts'][0][0].lower()}, "
        f"but they differed in the specific actors and consequences involved.\n"
    )

    q1 = {
        "question": f"Which case BEST illustrates a pattern central to {t['short']}?",
        "options": [f"{ev[0][0]} — {ev[0][1]}",
                    "An unrelated event from another century.",
                    "A purely fictional event.",
                    "An anecdote with no documentary support."],
        "correctAnswer": 0,
        "explanation": "Use historically attested events to illustrate patterns.",
    }
    q2 = {
        "question": f"A comparison of {ev[0][0]} and {ev[1][0]} is most useful because:",
        "options": [
            "Both cases let students see common patterns and unique local differences in concrete historical detail.",
            "Both events occurred in identical contexts and produced identical outcomes.",
            "Comparison is irrelevant to AP scoring.",
            "Neither event left primary sources for historians.",
        ],
        "correctAnswer": 0,
        "explanation": "AP comparison rewards specific similarities and differences with named cases.",
    }
    sec_q = section_mc(f"{p}3-quiz", "**Concept Check** 🎯", [q1, q2])

    fig = t["figures"]
    sec_input = section_input(f"{p}3-input",
        "**Applied Recall** ✍️\n\n"
        f"1) Name the event: {ev[0][1][:80]}…\n\n"
        f"2) Name the event: {ev[1][1][:80]}…\n\n"
        f"3) Name the event: {ev[2][1][:80]}…\n",
        [ev[0][0], ev[1][0], ev[2][0]],
        [f"Hint: {ev[0][0].split()[0]}", f"Hint: {ev[1][0].split()[0]}", f"Hint: {ev[2][0].split()[0]}"],
        "Naming specific events anchors AP arguments in evidence.",
    )

    sec_dd = section_dropdown(f"{p}3-dropdown",
        "**Match Cases to Patterns** 🔍",
        [
            {"label": f"The case most central to {t['core_concepts'][0][0]} is ___", "options": [ev[0][0], ev[1][0], ev[2][0], "An unrelated 21st-century news story"]},
            {"label": f"The case most central to {t['core_concepts'][1][0]} is ___", "options": [ev[1][0], ev[0][0], ev[2][0], "An unrelated 21st-century news story"]},
            {"label": f"The case most central to {t['core_concepts'][2][0]} is ___", "options": [ev[2][0], ev[0][0], ev[1][0], "An unrelated 21st-century news story"]},
        ],
        [ev[0][0], ev[1][0], ev[2][0]],
        ["Use chronology to disambiguate.", "Match the event to the concept it best illustrates.", "Stay inside the unit's date range."],
        "Each event is paired with the concept it most directly illustrates.",
    )

    appq = {
        "question": f"Using one specific case from {t['short']}, which sentence is the BEST AP comparison move?",
        "options": [
            f"Both {ev[0][0]} and {ev[1][0]} reveal {t['core_concepts'][0][0].lower()}, but they differ in actors and outcomes.",
            "Both events were fictional and produced no consequences.",
            "These events are too old to compare meaningfully.",
            "Comparison is unimportant in AP rubrics.",
        ],
        "correctAnswer": 0,
        "explanation": "AP comparison combines a specific shared pattern with a specific difference.",
    }
    appq2 = {
        "question": f"{fig[0][0]}'s role in {t['short']} is best illustrated by which event?",
        "options": [
            f"{ev[0][0]} — {ev[0][1]}",
            "An unrelated event in a different century.",
            "A purely literary publication unconnected to politics.",
            "An event before the figure was born.",
        ],
        "correctAnswer": 0,
        "explanation": "Tie figures to dated events for high-scoring AP arguments.",
    }
    sec_app = section_mc(f"{p}3-applied", "**AP-Style Application** 🎯", [appq, appq2])

    return [sec_intro, sec_cases, sec_q, sec_input, sec_dd, sec_app]


def part4(t):
    p = t["id_prefix"]
    other_slug, other_title, link = t["compare_other"]
    intro = (
        f"# {t['emoji']} {t['title']}\n\n"
        f"**Part 4 of 7 — Connections Across the Diaspora**\n\n---\n\n"
        f"## How {t['short']} connects to other units\n\n"
        f"{t['short']} does not stand alone. Strong AP responses connect it to **{other_title}**, "
        f"because {link}.\n\n"
        f"### Connection table\n\n"
        f"| Linked unit | Type of connection | Example |\n|---|---|---|\n"
        f"| {other_title} | Causal / continuity | {link.capitalize()}. |\n"
        f"| Atlantic / global context | Comparison | Parallel processes elsewhere in the African diaspora. |\n"
        f"| U.S. political history | Synthesis | Federal law (e.g., constitutional amendments) shapes outcomes. |\n"
    )
    sec_intro = section_text(f"{p}4-intro", intro)

    sec_links = section_text(f"{p}4-links",
        f"## Specific cross-unit connections\n\n"
        f"{md_table_events(t, 0, 3)}\n\n"
        f"Each event above interacts with **{other_title}** — either as cause, consequence, or parallel."
    )

    q1 = {
        "question": f"How does {t['short']} BEST connect to {other_title}?",
        "options": [
            f"{link.capitalize()}.",
            f"{t['short']} and {other_title} are completely unrelated topics.",
            "Connections between units are not tested on the AP exam.",
            "AP rubrics reward isolated facts over connections.",
        ],
        "correctAnswer": 0,
        "explanation": "AP synthesis prompts ask students to articulate how units interact.",
    }
    q2 = {
        "question": "A 'feedback loop' across units means:",
        "options": [
            "Outcomes of one process reinforce or modify the conditions that produced it.",
            "Two unrelated facts placed next to each other.",
            "A modern policy with no historical relevance.",
            "Memorizing additional vocabulary words.",
        ],
        "correctAnswer": 0,
        "explanation": "Feedback loops are a recurring AP analytical move.",
    }
    sec_q = section_mc(f"{p}4-quiz", "**Concept Check** 🎯", [q1, q2])

    fig = t["figures"]
    sec_input = section_input(f"{p}4-input",
        "**Applied Recall** ✍️\n\n"
        f"1) Which figure connects {t['short']} most directly to {other_title}?\n\n"
        "2) What is the analytical term for outcomes reinforcing their own causes?\n\n"
        "3) What is the AP term for combining evidence from multiple units?\n",
        [fig[0][0], "feedback loop", "synthesis"],
        [f"Hint: {fig[0][1]}", "Hint: a 'loop' of cause and effect", "Hint: 'synth___'"],
        "Naming a connecting figure, identifying feedback, and synthesizing units are all explicit AP scoring moves.",
    )

    sec_dd = section_dropdown(f"{p}4-dropdown",
        "**Map the Connections** 🔍",
        [
            {"label": f"{t['short']} most directly causes ___", "options": [other_title, "An unrelated 21st-century event", "A pre-modern European war", "A purely cultural festival"]},
            {"label": "A 'feedback loop' is ___", "options": ["Outcomes that reinforce their own causes", "A failed argument", "An anachronism", "A primary source"]},
            {"label": "AP 'synthesis' refers to ___", "options": ["Combining evidence across units to support a claim", "Memorizing dates only", "Avoiding all comparison", "Citing one example without analysis"]},
        ],
        [other_title, "Outcomes that reinforce their own causes", "Combining evidence across units to support a claim"],
        ["Map cause to consequence.", "'Loop' implies feedback.", "Synthesis = bringing units together."],
        "Connecting units is a high-leverage AP skill rewarded across MCQ, SAQ, and LEQ.",
    )

    appq = {
        "question": f"A student writes: '{t['short']} had no effect on {other_title}.' The best AP correction is:",
        "options": [
            f"Show specific connections — {link} — to demonstrate causal interaction.",
            "Insist there are no connections in U.S. history.",
            "Cite only events outside the unit.",
            "Replace the claim with a personal opinion.",
        ],
        "correctAnswer": 0,
        "explanation": "AP synthesis demands explicit, specific connections backed by evidence.",
    }
    appq2 = {
        "question": "The strongest AP synthesis move uses:",
        "options": [
            "Specific evidence from at least two units to support a single, defensible claim.",
            "One vague generalization across centuries.",
            "Multiple unrelated personal opinions.",
            "A list of names without explanation.",
        ],
        "correctAnswer": 0,
        "explanation": "AP rubrics consistently reward specificity + cross-unit synthesis.",
    }
    sec_app = section_mc(f"{p}4-applied", "**AP-Style Application** 🎯", [appq, appq2])

    return [sec_intro, sec_links, sec_q, sec_input, sec_dd, sec_app]


def part5(t):
    p = t["id_prefix"]
    ev = t["events"]
    cc = t["core_concepts"]
    intro = (
        f"# {t['emoji']} {t['title']}\n\n"
        f"**Part 5 of 7 — Continuity & Change Over Time**\n\n---\n\n"
        f"## Tracing {t['short']} through {t['era']}\n\n"
        f"AP CCOT (Continuity and Change Over Time) prompts ask: *what changed, what stayed the "
        f"same, and what drove the change?*\n\n"
        f"| Period | What changed | What persisted |\n|---|---|---|\n"
        f"| Early period | New institutions emerge | African cultural retentions persist |\n"
        f"| Middle period | Mechanisms of {cc[0][0].lower()} expand | {cc[2][0]} continues |\n"
        f"| Late period | Outcomes shift due to external pressure | Structural features endure |\n"
    )
    sec_intro = section_text(f"{p}5-intro", intro)

    sec_change = section_text(f"{p}5-change",
        f"## Specific moments of change\n\n"
        f"{md_table_events(t, -3, None)}\n\n"
        f"### Strong CCOT sentence\n\n"
        f"> Although {cc[0][0].lower()} continued throughout {t['era']}, the events of "
        f"{ev[-1][0]} marked a decisive shift in how Black communities engaged with it."
    )

    q1 = {
        "question": f"Which best describes continuity within {t['short']}?",
        "options": [
            f"Aspects such as {cc[2][0].lower()} persisted even as other features changed.",
            "Nothing about this topic ever changed.",
            "Continuity is irrelevant to AP scoring.",
            "Only the most recent decade matters.",
        ],
        "correctAnswer": 0,
        "explanation": "Continuity = elements that persist across change — a key AP analytical category.",
    }
    q2 = {
        "question": f"Which event marks a decisive change within {t['short']}?",
        "options": [
            f"{ev[-1][0]} — {ev[-1][1]}",
            "An anecdote with no historical impact.",
            "A 21st-century news headline unrelated to the period.",
            "A purely literary aesthetic with no political effect.",
        ],
        "correctAnswer": 0,
        "explanation": "Specific dated events anchor change-over-time arguments.",
    }
    sec_q = section_mc(f"{p}5-quiz", "**Concept Check** 🎯", [q1, q2])

    sec_input = section_input(f"{p}5-input",
        "**Applied Recall** ✍️\n\n"
        f"1) An aspect of {t['short']} that persisted: ___\n\n"
        f"2) An event that marked decisive change: ___\n\n"
        "3) The AP analytical category for tracking these together: ___\n",
        [cc[2][0], ev[-1][0], "continuity and change"],
        [f"Hint: {cc[2][1][:50]}…", f"Hint: {ev[-1][1][:50]}…", "Hint: AP CCOT"],
        "AP CCOT prompts demand both continuity and change with specific evidence.",
    )

    sec_dd = section_dropdown(f"{p}5-dropdown",
        "**Continuity vs Change** 🔍",
        [
            {"label": "Continuity in this unit is best illustrated by ___", "options": [cc[2][0], ev[-1][0], "An unrelated modern slogan", "A topic from a different course"]},
            {"label": "Change in this unit is best illustrated by ___", "options": [ev[-1][0], cc[2][0], "An anecdote with no date", "An unrelated personal opinion"]},
            {"label": "An AP CCOT response should ___", "options": ["Identify both continuities and changes with specific evidence", "Pick only one without analysis", "Avoid using dates", "Replace evidence with opinion"]},
        ],
        [cc[2][0], ev[-1][0], "Identify both continuities and changes with specific evidence"],
        ["Continuity = persistence.", "Change = decisive shift, named event.", "CCOT requires both halves."],
        "AP CCOT prompts always require both continuity and change with explicit evidence.",
    )

    appq = {
        "question": f"Which CCOT thesis is strongest?",
        "options": [
            f"Although {cc[2][0].lower()} continued, {ev[-1][0]} marked a decisive change in {t['short']}.",
            "Nothing changed and nothing stayed the same.",
            "Change is impossible to identify in history.",
            "AP rubrics do not reward CCOT analysis.",
        ],
        "correctAnswer": 0,
        "explanation": "Strong CCOT theses pair specific continuities with specific changes.",
    }
    appq2 = {
        "question": "Which evidence move is most valuable in a CCOT response?",
        "options": [
            "Naming a specific dated event AND a continuity within the same paragraph.",
            "Listing dates without analysis.",
            "Replacing evidence with a moral judgment.",
            "Citing only post-2010 news stories.",
        ],
        "correctAnswer": 0,
        "explanation": "AP CCOT scoring rewards paired specificity.",
    }
    sec_app = section_mc(f"{p}5-applied", "**AP-Style Application** 🎯", [appq, appq2])

    return [sec_intro, sec_change, sec_q, sec_input, sec_dd, sec_app]


def part6(t):
    p = t["id_prefix"]
    src = t["sources"]
    intro = (
        f"# {t['emoji']} {t['title']}\n\n"
        f"**Part 6 of 7 — Source & Evidence Workshop**\n\n---\n\n"
        f"## Working with primary sources for {t['short']}\n\n"
        f"AP DBQ-style work expects students to identify a source's *purpose, audience, point of view, "
        f"and historical situation* — and to use that analysis to support a claim.\n\n"
        f"### Primary sources for this unit\n\n{md_sources(t)}\n"
    )
    sec_intro = section_text(f"{p}6-intro", intro)

    sec_workshop = section_text(f"{p}6-workshop",
        f"## Source-analysis workshop\n\n"
        f"For each source, ask:\n"
        f"1. **Who** is the author? What is their position relative to events?\n"
        f"2. **When** was it produced? Before, during, or after the events described?\n"
        f"3. **For whom** was it written? Audience shapes argument.\n"
        f"4. **What** does it claim? What does it leave out?\n\n"
        f"### Worked example\n\n"
        f"> *{src[0][0]}* — {src[0][1]} A strong AP citation reads: 'According to "
        f"{src[0][0]}, …' followed by an inference about authorial purpose."
    )

    q1 = {
        "question": f"What makes {src[0][0]} a strong source for studying {t['short']}?",
        "options": [
            src[0][1],
            "It was published in 2024 with no link to the period.",
            "It is fictional and includes no historical content.",
            "It is unsigned and undated.",
        ],
        "correctAnswer": 0,
        "explanation": "Provenance, date, and authorial position determine source value.",
    }
    q2 = {
        "question": "When using a primary source on the AP exam, you should:",
        "options": [
            "Identify author/date/audience and tie the source to a specific claim.",
            "Quote the source verbatim without analysis.",
            "Ignore the author's position.",
            "Treat the source as neutral and unbiased.",
        ],
        "correctAnswer": 0,
        "explanation": "AP source-use rewards explicit attribution and analytical framing.",
    }
    sec_q = section_mc(f"{p}6-quiz", "**Concept Check** 🎯", [q1, q2])

    sec_input = section_input(f"{p}6-input",
        "**Applied Recall** ✍️\n\n"
        f"1) Name the source: {src[0][1][:60]}…\n\n"
        f"2) Name the source: {src[1][1][:60]}…\n\n"
        f"3) Name the source: {src[2][1][:60]}…\n",
        [src[0][0].replace("*", ""), src[1][0].replace("*", ""), src[2][0].replace("*", "")],
        [f"Hint: {src[0][0]}", f"Hint: {src[1][0]}", f"Hint: {src[2][0]}"],
        "Naming primary sources by author/title is essential for AP DBQ scoring.",
    )

    sec_dd = section_dropdown(f"{p}6-dropdown",
        "**Match Sources to Their Function** 🔍",
        [
            {"label": f"{src[0][0]} — purpose ___", "options": [src[0][1], src[1][1], src[2][1], "Unrelated to this unit"]},
            {"label": f"{src[1][0]} — purpose ___", "options": [src[1][1], src[0][1], src[2][1], "Unrelated to this unit"]},
            {"label": f"{src[2][0]} — purpose ___", "options": [src[2][1], src[0][1], src[1][1], "Unrelated to this unit"]},
        ],
        [src[0][1], src[1][1], src[2][1]],
        ["Match the source to its actual function.", "Date and audience matter.", "Pick the description matching the title."],
        "Each source plays a distinct evidentiary role within the unit.",
    )

    appq = {
        "question": f"A strong AP citation of {src[0][0]} reads:",
        "options": [
            f"'According to {src[0][0]}, …' followed by inference about purpose and historical situation.",
            "A direct quote with no attribution.",
            "A loose paraphrase that hides the source's identity.",
            "An anachronistic reading that ignores the date.",
        ],
        "correctAnswer": 0,
        "explanation": "Attribution + sourcing analysis is the AP scoring standard.",
    }
    appq2 = {
        "question": "Which source-analysis move earns the AP 'sourcing' point?",
        "options": [
            "Identifying author, audience, purpose, OR historical situation — and using it to support a claim.",
            "Quoting verbatim with no analysis.",
            "Ignoring the source's date.",
            "Citing only 21st-century opinion pieces.",
        ],
        "correctAnswer": 0,
        "explanation": "AP DBQ rubrics explicitly reward sourcing analysis tied to claims.",
    }
    sec_app = section_mc(f"{p}6-applied", "**AP-Style Application** 🎯", [appq, appq2])

    return [sec_intro, sec_workshop, sec_q, sec_input, sec_dd, sec_app]


def part7(t):
    p = t["id_prefix"]
    cc = t["core_concepts"]
    fig = t["figures"]
    ev = t["events"]
    src = t["sources"]
    intro = (
        f"# {t['emoji']} {t['title']}\n\n"
        f"**Part 7 of 7 — AP Exam Strategy & Review**\n\n---\n\n"
        f"## What the AP exam expects on {t['short']}\n\n"
        f"### Multiple choice\n\n"
        f"- Stimulus-based questions citing a primary source — apply contextualization.\n"
        f"- Comparison and CCOT prompts — recall specific dated events.\n"
        f"- Synthesis prompts — connect to {t['compare_other'][1]}.\n\n"
        f"### Short Answer & Essay\n\n"
        f"- Name **two** specific figures, **two** specific events, and **one** primary source.\n"
        f"- State a clear, defensible thesis and tie evidence to claim.\n"
        f"- Acknowledge regional, gender, or class differences when relevant.\n"
    )
    sec_intro = section_text(f"{p}7-intro", intro)

    sec_review = section_text(f"{p}7-review",
        f"## Master review for {t['short']}\n\n"
        f"### Concepts to define on demand\n\n{md_concepts(t)}\n\n"
        f"### Figures to deploy\n\n{md_table_figures(t)}\n\n"
        f"### Events to cite\n\n{md_table_events(t, 0, 5)}\n\n"
        f"### Sources to attribute\n\n{md_sources(t)}\n"
    )

    q1 = {
        "question": "A high-scoring AP response on this unit will:",
        "options": [
            "Combine a clear thesis with named figures, dated events, and at least one primary source.",
            "Memorize dates with no analysis.",
            "Use only 21st-century examples to discuss earlier periods.",
            "Avoid citing sources.",
        ],
        "correctAnswer": 0,
        "explanation": "AP rubrics consistently reward specificity, sourcing, and clear analytical structure.",
    }
    q2 = {
        "question": f"Which is the BEST one-sentence thesis for an essay on {t['short']}?",
        "options": [
            f"During {t['era']}, {cc[0][0].lower()} reshaped Black life — visible in {ev[0][0]} and {fig[0][0]}'s career — even as {cc[2][0].lower()} persisted.",
            f"{t['short']} was important.",
            f"Nothing changed during {t['era']}.",
            f"{t['short']} cannot be analyzed.",
        ],
        "correctAnswer": 0,
        "explanation": "Strong theses combine a defensible claim with specific evidence and acknowledge complexity.",
    }
    sec_q = section_mc(f"{p}7-quiz", "**Concept Check** 🎯", [q1, q2])

    sec_input = section_input(f"{p}7-input",
        "**Applied Recall** ✍️\n\n"
        "Name one figure, one event, and one primary source you would deploy in an essay on this unit:\n\n"
        f"1) Figure: ___\n\n2) Event: ___\n\n3) Source: ___\n",
        [fig[0][0], ev[0][0], src[0][0].replace("*", "")],
        [f"Hint: {fig[0][1]}", f"Hint: {ev[0][1][:40]}…", f"Hint: {src[0][1][:40]}…"],
        "Always pre-load one figure, one event, and one primary source for each AP unit.",
    )

    sec_dd = section_dropdown(f"{p}7-dropdown",
        "**Match the AP Skill to the Move** 🔍",
        [
            {"label": "Contextualization is best demonstrated by ___", "options": ["Placing the topic within larger historical processes (e.g., the Atlantic World, post-Reconstruction politics).", "Citing only one date with no context.", "Replacing evidence with opinion.", "Using only 21st-century examples for older periods."]},
            {"label": "Causation is best demonstrated by ___", "options": ["Identifying a specific cause and its specific consequence with named actors.", "A vague slogan.", "An anecdote without analysis.", "A list of names with no explanation."]},
            {"label": "CCOT is best demonstrated by ___", "options": ["Pairing a specific continuity with a specific change, both supported with evidence.", "Choosing only continuity OR only change.", "Avoiding dates.", "Replacing evidence with personal preference."]},
        ],
        [
            "Placing the topic within larger historical processes (e.g., the Atlantic World, post-Reconstruction politics).",
            "Identifying a specific cause and its specific consequence with named actors.",
            "Pairing a specific continuity with a specific change, both supported with evidence.",
        ],
        ["Contextualization = larger frame.", "Causation = cause + consequence.", "CCOT = both halves with evidence."],
        "These are the highest-leverage AP skills tested across MCQ, SAQ, LEQ, and DBQ.",
    )

    appq = {
        "question": f"You are writing an SAQ on {t['short']}. The strongest opening sentence is:",
        "options": [
            f"Within {t['era']}, {fig[0][0]} ({fig[0][1]}) advanced {cc[0][0].lower()} — visible in {ev[0][0]} — even as {cc[2][0].lower()} continued.",
            f"{t['short']} happened.",
            "There is nothing to say about this topic.",
            "Modern social media debates are the best evidence.",
        ],
        "correctAnswer": 0,
        "explanation": "Strong AP openings combine date, figure, mechanism, event, and continuity in a single sentence.",
    }
    appq2 = {
        "question": "Which closing move strengthens an LEQ on this unit?",
        "options": [
            f"Synthesizing the topic with {t['compare_other'][1]} via a specific shared cause or consequence.",
            "Repeating the prompt verbatim.",
            "Adding a moral judgment with no evidence.",
            "Listing topics not assigned in the prompt.",
        ],
        "correctAnswer": 0,
        "explanation": "AP synthesis moves earn extra rubric points by connecting units.",
    }
    sec_app = section_mc(f"{p}7-applied", "**AP-Style Application** 🎯", [appq, appq2])

    return [sec_intro, sec_review, sec_q, sec_input, sec_dd, sec_app]


PART_BUILDERS = {1: part1, 2: part2, 3: part3, 4: part4, 5: part5, 6: part6, 7: part7}

# -----------------------------------------------------------------------------
# Emit a TS file from sections
# -----------------------------------------------------------------------------

def emit_section(s):
    base = (
        f"    {{\n"
        f"      id: {js_str(s['id'])},\n"
        f"      type: '{s['type']}' as const,\n"
        f"      content: {js_str(s['content'])}"
    )
    if "exercise" in s:
        ex = json.dumps(s["exercise"], ensure_ascii=False, indent=2)
        # Re-indent for nesting
        ex = "\n".join(("      " + line) if line else line for line in ex.splitlines())
        base += f",\n      exercise: {ex.lstrip()}"
    base += "\n    }"
    return base

def emit_part(t, part_idx):
    sections = PART_BUILDERS[part_idx](t)
    body = ",\n".join(emit_section(s) for s in sections)
    export_name = f"{t['export_prefix']}Part{part_idx}Data"
    slug = next(k for k, v in T.items() if v is t)
    return (
        f"// AUTO-GENERATED by scripts/write-aas-all.py — do not edit by hand.\n"
        f"export const {export_name} = {{\n"
        f"  topicSlug: {js_str(slug)},\n"
        f"  sections: [\n{body}\n  ]\n"
        f"}}\n"
    )

def main():
    written = 0
    for slug, topic in T.items():
        for i in range(1, 8):
            path = os.path.join(OUT, f"{slug}-part{i}.ts")
            with open(path, "w", encoding="utf-8") as f:
                f.write(emit_part(topic, i))
            written += 1
    print(f"Wrote {written} lesson files for {len(T)} AAS topics.")

if __name__ == "__main__":
    main()
