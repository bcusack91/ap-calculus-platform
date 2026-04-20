#!/usr/bin/env python3
"""Write wh-maritime-empires-labor parts 2-7."""
import os

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    'src', 'data', 'interactive-lessons')

def w(filename, content):
    with open(os.path.join(base, filename), 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

def make_file(export_var, slug, pnum, id_pre, emoji, title, subtitle, key_concept, content_body, questions):
    def mc(qd):
        opts = [qd['correct']] + qd['others'][:3]
        opts_lines = '\n'.join([f"              '{o}'," for o in opts])
        return f"""          {{
            question: '{qd['q']}',
            options: [
{opts_lines}
            ],
            correctAnswer: 0,
            explanation: '{qd['exp']}'
          }}"""
    q = questions
    return f"""export const {export_var} = {{
  topicSlug: '{slug}',
  sections: [
    {{
      id: '{id_pre}-intro',
      type: 'text' as const,
      content: `
# {emoji} {title}

**Part {pnum} of 7 — {subtitle}**

---

> 🔑 **Key Concept:** {key_concept}
      \`
    }},
    {{
      id: '{id_pre}-quiz1',
      type: 'multiple-choice' as const,
      content: \`**Concept Check** 🎯\`,
      exercise: {{
        questions: [
{mc(q[0])},
{mc(q[1])}
        ]
      }}
    }},
    {{
      id: '{id_pre}-content',
      type: 'text' as const,
      content: \`
{content_body}
      \`
    }},
    {{
      id: '{id_pre}-input',
      type: 'multiple-choice' as const,
      content: \`**Applied Recall: 3-Question Sprint** 🎯\`,
      exercise: {{
        questions: [
{mc(q[2])},
{mc(q[3])},
{mc(q[4])}
        ]
      }}
    }},
    {{
      id: '{id_pre}-dropdown',
      type: 'dropdown-select' as const,
      content: \`**Match the Idea: Evidence to Claim**\`,
      exercise: {{
        dropdowns: [
          {{
            label: 'The Portuguese Indian Ocean empire of trading posts and armed ships was the ___',
            options: ['Estado da India', 'British East India Company', 'Dutch VOC', 'Mughal Empire']
          }},
          {{
            label: 'The Spanish colonial labor system granting individuals rights to indigenous workers was the ___',
            options: ['Encomienda', 'Millet system', 'Devshirme', 'Zamindari system']
          }},
          {{
            label: 'The labor system where workers were bound to land through impossible-to-repay debts was ___',
            options: ['Debt peonage', 'Indentured servitude', 'Mit\'a labor', 'Chattel slavery']
          }}
        ],
        correctAnswers: ['Estado da India', 'Encomienda', 'Debt peonage'],
        hint1: 'Portuguese Indian Ocean trading-post empire — armed ships charging protection fees',
        hint2: 'Spanish colonial labor grant — individual colonists — indigenous workers',
        hint3: 'Bound labor through unpayable debt — hacienda system — ongoing coercion',
        explanation: 'The Estado da India was the Portuguese model of empire: not territorial control but commercial monopoly enforced by armed ships. The encomienda gave individual Spanish colonists direct rights to indigenous labor. Debt peonage was the long-term mechanism that kept workers bound to haciendas long after encomienda was officially abolished.'
      }}
    }},
    {{
      id: '{id_pre}-applied',
      type: 'multiple-choice' as const,
      content: \`**AP-Style Application** 🎯\`,
      exercise: {{
        questions: [
{mc(q[5])},
{mc(q[6])}
        ]
      }}
    }}
  ]
}}
"""

SLUG = 'wh-maritime-empires-labor'
TITLE = 'Maritime Empires & Labor Systems (c. 1450–1750)'
EMOJI = '⚓'

parts = [
    (2, 'whmelf2', 'Portuguese and Spanish Maritime Empires',
     'The Portuguese Estado da India (Indian Ocean trading-post empire) and Spanish territorial empire in the Americas represent two different models of early modern empire-building. AP questions compare these models, evaluate their labor systems, and connect colonial extraction to global commerce.',
     '''## 📖 Portuguese and Spanish Maritime Empires

> **Two Models of Empire**

| Feature | Portuguese Estado da India | Spanish Territorial Empire |
|---------|---------------------------|---------------------------|
| Geography | Indian Ocean, West Africa, Brazil | Americas (Caribbean, Mexico, Peru) |
| Method | Trading posts + armed ships | Conquest + territorial settlement |
| Labor | Enslaved Africans (Brazil), existing trade networks (Asia) | Encomienda, mita, debt peonage |
| Key commodity | Spices, gold (Africa), sugar (Brazil) | Silver (Potosí), sugar (Caribbean) |

> **Estado da India: Portuguese Indian Ocean Empire**

The Portuguese inserted themselves into existing Indian Ocean trade:

- **Method:** Built fortified trading posts (feitorias) at key ports — Goa (India), Malacca (SE Asia), Hormuz (Persian Gulf)
- **Revenue:** Charged "cartaz" (protection fees) to Indian Ocean merchants — pay or be attacked
- **Scope:** Never controlled the interior; controlled choke points of sea routes
- **Result:** Redirected some Asian luxury trade through Portuguese-controlled routes; overall disrupted but did not replace existing Indian Ocean commerce

> **Spanish Territorial Empire**

Spain built the first large territorial empire outside Europe:

- **Conquest:** Hernán Cortés (Aztec, 1521), Francisco Pizarro (Inca, 1533)
- **Territory:** New Spain (Mexico, Central America) + Viceroyalty of Peru (South America)
- **Governance:** Viceroys appointed by Spanish Crown; audiencias (courts) for legal disputes
- **Wealth:** Silver extraction from Potosí (Bolivia) and Zacatecas (Mexico) was the primary goal

> **AP Comparison Anchor**

- **Portuguese vs. Spanish empire:** trading-post vs. territorial models reflect different geographic opportunities (existing Indian Ocean commerce vs. new American territories) and different resource types (spices/gold vs. silver/land)
- **Both empires relied on coerced labor** — Portuguese in Brazil used enslaved Africans; Spanish used encomienda/mita/hacienda systems''',
     [
        {'q': 'The Portuguese Estado da India differed from the Spanish American empire primarily in that:',
         'correct': 'Portugal built a network of fortified trading posts at key Indian Ocean chokepoints, extracting revenue by charging protection fees to existing merchants, rather than conquering and settling large territories as Spain did in the Americas',
         'others': ['Portugal conquered large territorial empires throughout Asia while Spain built trading posts', 'The two empires had identical approaches to colonial governance', 'Portugal relied primarily on indigenous labor while Spain used enslaved Africans'],
         'exp': 'The trading-post vs. territorial distinction is the key AP comparison between Portuguese and Spanish empires. Estado da India was efficient for a small country (Portugal had ~1-2 million people): it extracted revenue from existing commerce without the enormous cost of territorial administration. Spain\'s territorial model required much larger investments in governance but also generated greater long-term economic control.'},
        {'q': 'The Portuguese cartaz system (requiring Indian Ocean merchants to purchase protection passes) demonstrates:',
         'correct': 'How superior naval technology could be used to impose protection fees on existing commercial networks — the cartaz system was essentially organized extortion backed by Portuguese cannon power, redirecting some profit from Indian Ocean trade into Portuguese coffers without replacing the underlying commercial system',
         'others': ['The cartaz system was a voluntary insurance program welcomed by Indian Ocean merchants', 'Portuguese naval power eliminated all competition in the Indian Ocean', 'The cartaz system benefited Indian Ocean merchants by reducing piracy'],
         'exp': 'The cartaz is a model AP example of how power asymmetry (military technology advantage) can extract profit from existing economic systems without creating new ones. Indian Ocean merchants continued to trade — they simply had to pay Portuguese protection fees or face attack. Portuguese disruption of Indian Ocean commerce was real but partial: the existing commercial networks (Arab, Indian, Malay) survived and adapted, ultimately reasserting themselves as Portuguese power declined.'},
        {'q': 'Why did Portugal choose the trading-post model while Spain built territorial colonies?',
         'correct': 'Different geographic circumstances produced different strategies: Portugal encountered densely populated, commercially sophisticated Asian civilizations with existing trade networks that could not be easily conquered; Spain encountered American civilizations already weakened by disease that could be conquered and administered as territories',
         'others': ['Portugal\'s military was stronger than Spain\'s, allowing it to avoid territorial conquest', 'Spain chose territorial empire because it was more profitable in all circumstances', 'The two empires made identical strategic choices for identical reasons'],
         'exp': 'This explanation demonstrates AP analytical sophistication: neither empire simply "chose" its model — they responded rationally to their specific circumstances. The Mughal Empire was militarily formidable; Portugal lacked the manpower to conquer India. The Aztec and Inca empires were devastated by disease and could be conquered by small Spanish forces. Geographic and demographic contexts shaped imperial strategies.'},
        {'q': 'Spanish governance of the Americas through viceroys and audiencias demonstrates:',
         'correct': 'A layered colonial administration where the Crown attempted to maintain direct control by appointing peninsular Spaniards as viceroys, while audiencias (courts) served both administrative and legal functions — but the system\'s remoteness from Spain and the power of local landholders (criollos) meant that royal authority was often diluted in practice',
         'others': ['Spanish colonial governance gave complete autonomy to local populations', 'The viceroyalty system gave colonial administrators absolute power with no oversight from Spain', 'Spanish governance was identical to indigenous governance systems it replaced'],
         'exp': 'The gap between formal colonial governance structures and actual power is an AP meta-theme: on paper, viceroys represented the Crown\'s absolute authority; in practice, the enormous distances, communication delays (months for messages to travel from Spain), and entrenched power of local elites meant that colonial governance was always a negotiation between Crown authority and local interest. This gap helps explain why criollo elites could eventually lead independence movements.'},
        {'q': 'Comparing Portuguese Estado da India to the later British East India Company reveals:',
         'correct': 'Both operated as armed trading organizations extracting profit from Asian commerce, but the British East India Company eventually evolved from trading-post empire to territorial control (especially after 1757 Battle of Plassey) while the Portuguese remained primarily a trading-post empire — demonstrating different trajectories even within similar imperial forms',
         'others': ['The British East India Company and Estado da India were identical in every respect', 'The British East India Company was entirely different with no similarities to Portuguese empire', 'Neither organization ever exercised military power in their commercial activities'],
         'exp': 'Comparing Portuguese and British Indian Ocean empire demonstrates how similar institutional forms can evolve in different directions. Both started as armed trading organizations; the Portuguese remained primarily coastal and commercial; the British Company expanded inland to become a territorial empire that eventually governed all of India. The difference reflects changing power balances: Britain\'s greater industrial/military power in the 18th-19th centuries enabled what Portugal\'s 16th-17th century power could not.'},
        {'q': 'An AP comparison of Portuguese and Spanish colonial systems would most accurately conclude:',
         'correct': 'Both empires extracted wealth from colonized regions through combinations of commercial coercion and forced labor, but their different methods (Portuguese trading-post extraction vs. Spanish territorial extraction via encomienda/mita) reflected different opportunities and produced different long-term social structures in their respective colonial zones',
         'others': ['Portuguese colonialism was entirely beneficial while Spanish was entirely exploitative', 'Both empires had identical labor systems and governance structures', 'The Portuguese empire was more extensive and powerful than the Spanish in every respect'],
         'exp': 'This comparison earns AP credit by: (1) acknowledging similarity (both extracted wealth through coercion), (2) identifying meaningful difference (methods of extraction), (3) explaining why they differed (different opportunities/contexts), and (4) connecting to consequences (different social structures). AP comparison analysis should always explain WHY differences exist, not just describe them.'},
        {'q': 'The Treaty of Tordesillas (1494) dividing the world between Spain and Portugal demonstrates the limits of European colonial power because:',
         'correct': 'Spain and Portugal could divide the non-European world between themselves on paper, but other European powers (England, France, Netherlands) simply ignored the treaty — demonstrating that claims of sovereignty require enforcement capability to be meaningful, and that early modern colonial power was always contested and provisional',
         'others': ['The treaty successfully prevented all other European powers from colonial expansion', 'All European powers respected the Tordesillas line throughout the colonial period', 'The treaty demonstrated that European nations worked cooperatively on colonial governance'],
         'exp': 'The Tordesillas treaty illustrates the gap between claimed and actual colonial authority. England, France, and the Netherlands all established colonies in violation of the Tordesillas line (English settlements in North America; French Caribbean islands; Dutch East India Company). The treaty reveals that colonial sovereignty was a legal claim backed by force — and when the force was insufficient, the claim was meaningless.'}
     ]
    ),
    (3, 'whmelf3', 'Colonial Labor Systems: Coercion and Exploitation',
     'Colonial labor systems — encomienda, mita, debt peonage, chattel slavery, and indentured servitude — were the mechanisms through which colonial economies extracted value from human bodies. AP questions compare these systems, evaluate their racial and legal dimensions, and connect labor coercion to global commodity production.',
     '''## 📖 Colonial Labor Systems

> **Spectrum of Coerced Labor**

| System | Legal Status | Racial Basis | Duration |
|--------|-------------|-------------|---------|
| **Chattel slavery** | Worker = property; no legal rights | Increasingly racial (African = enslaved) | Lifetime; heritable |
| **Encomienda** | Worker has theoretical rights; grant to colonist | Not strictly racial; indigenous category | Limited in theory; extended in practice |
| **Mita (colonial)** | Rotating labor draft; nominal wage | Indigenous category | Temporary per person; permanent as system |
| **Debt peonage** | Worker bound by debt | Often racial/ethnic; indigenous, mestizo | As long as debt exists (often permanent) |
| **Indentured servitude** | Contract labor; legal rights after term | Race-neutral in theory; racial in practice | Fixed term (usually 4-7 years) |

> **Chattel Slavery: Racialization of Labor**

Chattel slavery in the Americas was progressively racialized:

- Early colonial period: both indigenous peoples and Africans were enslaved
- By 17th century: indigenous peoples\' legal status improved (New Laws 1542); African slavery expanded
- Race as justification: African descent became legally synonymous with enslavement in many colonial codes
- "Slave codes" (e.g., Virginia 1705): defined enslaved status as heritable through the mother
- One drop rule emerged: any African ancestry = enslaved status in many jurisdictions

> **Indentured Servitude**

After British emancipation (1833), indentured servitude replaced slave labor on some plantations:

- Primarily recruited from India, China, West Africa to British Caribbean and other colonies
- Fixed-term contracts (typically 5 years); promised freedom and sometimes land afterward
- Conditions often as brutal as slavery; contracts rarely honored completely
- British Indian indentured laborers: ~1.5 million sent to Trinidad, Guyana, Fiji, Mauritius 1838-1916
- Created South Asian diaspora communities across the British Empire

> **AP Comparison Anchor**

- **Encomienda vs. feudal serfdom:** Both bound workers to land/overlords with limited legal recourse; encomienda specifically denied rights based on indigenous status
- **Chattel slavery vs. earlier slavery forms:** Ancient/medieval slavery was not uniformly racial; American chattel slavery\'s racial basis was more systematic and heritable''',
     [
        {'q': 'The progressive racialization of chattel slavery in colonial Americas (African descent = enslaved status) was significant because:',
         'correct': 'It transformed slavery from a legal category (anyone could be enslaved) into a racial category (only African-descended people could be enslaved), creating a permanent, heritable status that was independent of individual conduct or circumstance — making race the primary determinant of legal standing in colonial societies',
         'others': ['Chattel slavery in the Americas was always racial from the very beginning with no evolution', 'The racialization of slavery had no impact on colonial legal systems', 'African slavery was identical in its racial basis to slavery in ancient Rome'],
         'exp': 'The racialization of slavery in the Americas was a specific historical development, not a timeless feature of slavery. Early colonial Spanish law enslaved both indigenous peoples and Africans; over time, legal reforms extended protections to indigenous peoples while simultaneously stripping Africans of all legal personhood. The development of racial slave codes (Virginia 1705: enslaved status heritable through the mother) created the legal infrastructure of racial hierarchy that would persist after emancipation.'},
        {'q': 'Indentured servitude (replacing chattel slavery after British emancipation 1833) was significant because:',
         'correct': 'It demonstrated that formally "free" contract labor could be structured to be nearly as coercive as chattel slavery — fixed-term contracts, deceptive recruitment, brutal conditions, and rarely honored promises of land showed that colonial economies could adapt to abolition while maintaining exploitative labor extraction',
         'others': ['Indentured servitude was a humane alternative that genuinely improved workers\' conditions', 'Indentured contracts were always honored completely and transparently', 'Indentured servitude had no racial or ethnic dimension in British colonial practice'],
         'exp': 'Indentured servitude after emancipation is an AP-important continuity: when slavery ended, the same plantation economies that had used enslaved labor needed a replacement. Indentured servitude provided it — same basic coercion, different legal form. AP analysis should recognize that abolishing one legal form of coercion doesn\'t necessarily end exploitation; it often produces new institutional forms that serve the same economic function.'},
        {'q': 'The Virginia Slave Codes (1705) defining enslaved status as heritable through the mother demonstrates:',
         'correct': 'How colonial legislatures deliberately constructed legal categories to maximize exploitation: by making enslaved status heritable through the mother (partus sequitur ventrem), children of enslaved women were automatically enslaved regardless of their father\'s status — ensuring that sexual exploitation of enslaved women by enslavers generated more enslaved people rather than free mixed-race children',
         'others': ['The Virginia Slave Codes primarily addressed the rights of free people of color', 'Heritable slave status through the mother followed Roman legal tradition and had no specific colonial motivation', 'The codes were primarily intended to protect enslaved people\'s legal rights'],
         'exp': 'The "partus sequitur ventrem" rule (status follows the womb) is a deliberate legal construction that maximized the value of enslaved women to enslavers: every child born of an enslaved mother increased the enslaver\'s property regardless of the father. This replaced Roman law (which followed the father\'s status) specifically to prevent the children of enslaver-enslaved relationships from being free. Understanding this as deliberate legal engineering — not natural custom — is key AP analysis.'},
        {'q': 'Comparing colonial debt peonage to feudal serfdom reveals:',
         'correct': 'Both systems bound workers to land or employers through mechanisms that made escape nearly impossible (feudal peasants were legally bound to the land; peons were bound by debts impossible to repay), but debt peonage emerged in a nominally free labor context as a way to recreate coercion after formal serfdom/slavery was legally abolished',
         'others': ['Debt peonage and feudal serfdom were identical institutions with no meaningful differences', 'Debt peonage was strictly voluntary while feudal serfdom was coercive', 'Neither system restricted workers\' freedom of movement in any way'],
         'exp': 'The comparison between feudal serfdom and debt peonage demonstrates an AP pattern: when formal coercive labor systems are abolished, new institutional forms often emerge to serve the same economic function. Debt peonage was the hacienda system\'s solution to indigenous peoples\' nominal legal freedom after encomienda was abolished — advancing wages, goods, or tools against future labor, then manipulating accounts to ensure the debt could never be repaid.'},
        {'q': 'What do the multiple forms of coerced colonial labor (slavery, encomienda, mita, debt peonage, indentured servitude) collectively demonstrate?',
         'correct': 'That colonial economies were fundamentally dependent on non-market labor coercion — they could not function with fully free labor markets because the wages necessary to attract voluntary workers would eliminate the profit margins that made colonial commodity production profitable; coercion was structural, not incidental',
         'others': ['Coerced labor was only used occasionally when voluntary workers were unavailable', 'Colonial economies were primarily based on free market labor with no coercive elements', 'Different forms of coerced labor represented progressive improvement in workers\' conditions'],
         'exp': 'This structural point is essential for AP: colonial plantation and mining economies were not accidentally exploitative — they were structurally dependent on coercion. The profit margins on sugar, tobacco, cotton, and silver depended on paying workers as little as possible, which required legal mechanisms to prevent workers from leaving for better conditions. When one coercive mechanism was abolished, another was invented. This structural dependency on coercion is why abolition required political struggle rather than just moral persuasion.'},
        {'q': 'An AP comparison between European colonial labor systems and pre-colonial indigenous labor extraction (e.g., Aztec tribute, Inca mit\'a) reveals:',
         'correct': 'While both pre-colonial and colonial systems extracted labor from subject peoples, colonial labor systems were often more brutal and arbitrary because they lacked the cultural legitimacy and reciprocal obligations (Aztec tribute included state redistribution; Inca mit\'a included state feeding of workers) that pre-colonial tributary systems embedded in social relationships',
         'others': ['Pre-colonial and colonial labor systems were identical in their coercive character', 'Pre-colonial labor systems were always more brutal than colonial systems', 'Colonial labor systems were always more efficient than pre-colonial equivalents'],
         'exp': 'This comparison demonstrates AP sophistication by recognizing gradations of coercion: Aztec tribute and Inca mit\'a involved real extraction from subject peoples, but within cultural frameworks that included reciprocal obligations (redistribution, ceremony, state feeding of workers). Spanish encomienda stripped these reciprocal elements while maintaining (and intensifying) the extraction. This doesn\'t romanticize pre-colonial systems — but it does recognize that colonial labor often represented a qualitative worsening of existing exploitation.'},
        {'q': 'For AP analysis, why is it historically important to distinguish between different forms of coerced labor (chattel slavery vs. indentured servitude vs. debt peonage)?',
         'correct': 'Because different legal forms of coercion produced different long-term social outcomes: chattel slavery\'s racialization created heritable racial stigmas; debt peonage maintained class-based exploitation within nominally free labor markets; indentured servitude created new ethnic diaspora communities — understanding these distinctions reveals how exploitation adapted to different legal contexts',
         'others': ['All forms of coerced labor are legally identical with no meaningful distinctions', 'Distinguishing between labor forms is only relevant for legal history, not AP World History', 'The differences between labor forms are too minor to affect historical analysis'],
         'exp': 'AP rewards the analytical move of asking "why does this distinction matter?" Different legal forms of coercion matter because they produced different demographic consequences (racial categories, diaspora communities), different political legacies (anti-slavery vs. anti-colonial movements), and different post-colonial social structures. Treating all coercion as identical erases these distinctions — and AP historical analysis requires precision about how specific institutional forms shaped specific historical outcomes.'}
     ]
    ),
    (4, 'whmelf4', 'The Atlantic Slave Trade',
     'The transatlantic slave trade (c. 1500-1888) transported approximately 12.5 million enslaved Africans from West and Central Africa to the Americas, with ~2 million dying during the Middle Passage. AP questions focus on the scale, causes, African dimensions of the trade, resistance, and long-term consequences for Africa, the Americas, and global commerce.',
     '''## 📖 The Atlantic Slave Trade

> **Scale and Scope**

| Feature | Details |
|---------|---------|
| **Total enslaved** | ~12.5 million transported, 1500-1900 |
| **Deaths in transit** | ~2 million (15-20% Middle Passage mortality) |
| **Peak period** | 18th century; ~6 million transported in 1700s |
| **Destinations** | Brazil 46%, Caribbean 43%, North America 4%, other 7% |
| **Origins** | West Africa (Senegambia, Gold Coast, Bight of Benin, Bight of Biafra), Central Africa (Kongo) |

> **Causes and African Dimensions**

The Atlantic slave trade required African participation:

- African kingdoms sold enslaved captives to European traders at the coast
- European demand for enslaved people transformed internal African warfare — wars fought partly to generate enslaved captives for sale
- **Dahomey, Ashanti, Oyo** became powerful partly because they supplied the slave trade and received firearms in return
- Firearms from the slave trade enabled more African warfare → more captives → more slaves — a destructive cycle
- African elites profited from the trade; ordinary African people bore its costs (enslavement, societal disruption)

> **The Middle Passage**

The Atlantic crossing was catastrophic:

- Ships packed enslaved people in "tight pack" formations — 1.5 sq ft per person in some cases
- Mortality from disease (dysentery, smallpox), dehydration, suicide, violence
- Enslaved people were sometimes thrown overboard alive if they became ill (to collect insurance)
- Zong massacre (1781): British captain threw 132 enslaved Africans overboard; insurance case became abolitionist cause

> **Resistance**

Enslaved peoples resisted at every stage:

- **Shipboard revolts:** Hundreds documented; Amistad (1839) most famous
- **Maroon communities:** Quilombo dos Palmares (Brazil), Jamaican Maroons, Surinamese Maroons
- **Cultural retention:** Music, religion, language elements survived
- **Daily resistance:** Sabotage, work slowdowns, feigned illness

> **AP Comparison Anchor**

- **Atlantic slave trade vs. Indian Ocean slave trade:** Both moved enslaved peoples; Indian Ocean trade was smaller and less racially defined; Atlantic trade was larger, more systematic, and increasingly racialized
- **Long-term African consequences:** Population loss, political destabilization, economic disruption that contributed to African vulnerability to 19th-century colonialism''',
     [
        {'q': 'The Atlantic slave trade\'s most historically significant feature for AP analysis was:',
         'correct': 'Its extraordinary scale (12.5 million people over four centuries) combined with its systematic racialization (African descent = enslaved) created a new form of slavery categorically different from earlier historical slavery — the foundation of racial hierarchy in the Americas that persisted long after legal emancipation',
         'others': ['The slave trade was historically insignificant because it ended in the 19th century', 'The Atlantic slave trade was identical in character to ancient Mediterranean slavery', 'Slavery had always been racial before the Atlantic trade began'],
         'exp': 'The Atlantic slave trade\'s novelty is not slavery itself (which existed in many societies) but its racialization and scale. Ancient Mediterranean, Islamic, and African slavery all included people of many ethnic backgrounds; American chattel slavery progressively defined "enslaved" as synonymous with "African-descended." This racial definition — and its legal institutionalization — created uniquely lasting consequences.'},
        {'q': 'African kingdoms\' participation in the Atlantic slave trade demonstrates which AP complexity?',
         'correct': 'The slave trade was a product of African-European commercial relationships in which some African political elites (Dahomey, Ashanti, Oyo) profited by selling captives to European traders, while the majority of African peoples bore the costs as victims of increased warfare and enslavement — demonstrating that colonial economic systems created internal divisions within colonized/traded societies',
         'others': ['African peoples unanimously resisted the slave trade without any African participation', 'African kingdom participation means the slave trade was mutually beneficial and non-coercive', 'European traders had no African partners and simply raided African coasts for enslaved people'],
         'exp': 'The African dimension of the slave trade is a model AP complexity point: it challenges both the "innocent victims only" narrative (some African elites did profit) and the "mutual benefit" narrative (ordinary African people did not benefit; they were the victims). Understanding how the slave trade created internal African divisions — elites profiting while others suffered — is essential for understanding both the trade\'s operation and its long-term consequences for African society.'},
        {'q': 'The Zong massacre (1781) — in which enslaved Africans were thrown overboard so their enslaver could collect insurance — is historically significant for AP because:',
         'correct': 'It revealed the logical extreme of chattel slavery\'s legal framework: if enslaved people were property, they could be destroyed to collect insurance like any other cargo — a revelation that strengthened abolitionist arguments by demonstrating the moral bankruptcy of the system\'s own legal logic',
         'others': ['The Zong massacre was a minor incident with no historical significance', 'The massacre demonstrated that enslaved people had legal rights that were violated', 'Insurance companies supported the massacre as a standard business practice'],
         'exp': 'The Zong case became an abolitionist cause célèbre because it forced British courts and public opinion to confront the legal logic of chattel slavery: if enslaved people were property, the captain\'s action was legally defensible. British abolitionist Granville Sharp used the case to argue that the slave trade was incompatible with any legal system treating enslaved people as human. The case demonstrates how extreme cases can illuminate the systemic logic of unjust institutions.'},
        {'q': 'Resistance to the Atlantic slave trade (shipboard revolts, maroon communities, daily resistance) demonstrates:',
         'correct': 'Enslaved peoples were not passive victims but active agents who resisted enslavement in every available form — from spectacular shipboard revolts to everyday sabotage — demonstrating that the system required constant violence and surveillance to maintain, not just initial coercion',
         'others': ['Enslaved peoples generally accepted their condition without significant resistance', 'Only armed rebellion counts as meaningful resistance to slavery', 'Maroon communities were too small to have any historical significance'],
         'exp': 'The spectrum of resistance is AP\'s corrective to the "passive victim" narrative: individual survival strategies (feigning illness, working slowly), cultural retention (preserving African music and religious practices within slavery), maroon community formation, and armed revolt all represent forms of resistance across a spectrum of danger and effectiveness. The fact that plantation owners invested enormous resources in surveillance, pass systems, and brutal punishment demonstrates that they understood resistance was constant.'},
        {'q': 'The long-term consequences of the Atlantic slave trade for West and Central Africa included:',
         'correct': 'Demographic loss (millions of mostly young adults removed from the population), political destabilization (warfare to generate enslaved captives disrupted state structures), economic distortion (economies oriented toward slave-trading rather than production), and increased vulnerability to 19th-century European colonialism resulting from weakened political and demographic capacity',
         'others': ['The slave trade had no lasting impact on African societies', 'West African societies became stronger and more unified as a result of the slave trade', 'Demographic loss had no political or economic consequences for African states'],
         'exp': 'The long-term consequences for Africa are often underemphasized in AP but are essential for understanding 19th-century African colonialism: the Atlantic slave trade over four centuries removed millions of mostly young adults (the most productive demographic), distorted African political economies toward slave-raiding rather than agricultural production, introduced European firearms that intensified internal warfare, and left many West African states weakened at precisely the moment when European colonial ambitions expanded.'},
        {'q': 'Comparing the Atlantic slave trade to the Indian Ocean slave trade reveals:',
         'correct': 'Both moved enslaved people across long distances, but the Atlantic trade was far larger in scale (~12.5 million vs. ~3 million for Indian Ocean over comparable periods), more systematically racialized (African descent = enslaved in Atlantic; Indian Ocean slavery included diverse ethnic groups), and more destructive of origin societies',
         'others': ['The Indian Ocean slave trade was larger than the Atlantic trade', 'Both slave trades were identical in their racial basis and scale', 'The Indian Ocean trade was more racially defined than the Atlantic trade'],
         'exp': 'The comparison reveals what was unique about the Atlantic trade: its industrialized scale and systematic racialization. Indian Ocean slavery existed within a broader commercial context and included enslaved people from many ethnic backgrounds (East Africans, Central Asians, South Asians) without creating a single racial category. The Atlantic trade\'s specific racialization — and its legal institutionalization through slave codes — was a distinctive feature of American colonial capitalism.'},
        {'q': 'An AP LEQ asks: "Evaluate the extent to which economic factors explain the development and expansion of the Atlantic slave trade." Which argument earns the highest score?',
         'correct': 'Economic factors were primary but not sole drivers of the Atlantic slave trade: plantation profitability (sugar, tobacco, cotton demand) created the economic incentive; the legal construction of racial slavery reduced costs by making slavery heritable; and African political economies contributed to the trade by supplying captives — but ideological factors (racial hierarchy, Christian mission justifications) also enabled a system that pure economic rationality alone would not explain, since exploiting free labor is rarely actually economically "rational" — the profitability depended on the prior construction of a legal system denying enslaved people\'s humanity',
         'others': ['Economic factors alone explain the slave trade with no ideological dimension', 'The slave trade had no economic rationale and was purely ideological', 'Economic factors are irrelevant to understanding the slave trade'],
         'exp': 'This argument earns full AP complexity by: (1) affirming economic factors as primary, (2) complicating the economic argument (profitability depended on prior legal construction of slavery), (3) identifying non-economic factors (racial ideology, Christian justifications), and (4) demonstrating that the two dimensions were intertwined (economic incentive + ideological enablement = the actual historical system). AP rewards arguments that transcend simple monocausal explanations.'}
     ]
    ),
    (5, 'whmelf5', 'Labor Systems in Asia and Africa',
     'Colonial labor systems extended beyond the Americas into Asia and Africa: the VOC used forced cultivation in Java, the British imposed indentured labor across the empire, and various forms of coerced labor existed in Mughal India and Ottoman territories. AP questions compare labor systems across regions and evaluate how different empires extracted value from subject populations.',
     '''## 📖 Labor Systems in Asia and Africa

> **Dutch East India Company (VOC) in Java**

The Dutch colonial system in Java (c. 1619-1799) imposed forced cultivation:

- **Cultuurstelsel (Culture System, 1830-1870):** Required Javanese peasants to devote 1/5 of their land to export crops (coffee, indigo, sugar) for the Dutch colonial government
- Revenue flowed to Netherlands; Javanese peasants suffered repeated famines
- Eduard Douwes Dekker\'s novel *Max Havelaar* (1860) exposed abuses; contributed to Dutch colonial reform
- Forced cultivation shows that colonial labor coercion was not limited to the Americas or to racial chattel slavery

> **Mughal India: Zamindari System**

Mughal tax farmers extracted revenue from peasant cultivators:

- **Zamindar:** Tax collector/landlord who held rights to collect land revenue from peasants
- Zamindars kept a portion; rest went to the Mughal state
- Under British East India Company, Permanent Settlement (1793) made zamindars private landowners — peasants became tenants
- Transformed a revenue extraction system into a system of permanent landlord-tenant hierarchy

> **Global Indentured Labor Migration**

After British emancipation (1833), indentured servitude moved labor across the empire:

- Indian workers to Trinidad, Guyana, Fiji, Mauritius, South Africa
- Chinese workers to British Caribbean, Southeast Asia, California (via different mechanisms)
- ~1.5 million Indian indentured laborers sent abroad 1838-1916
- Created South Asian diaspora communities across the British Empire

> **AP Comparison Anchor**

- **Forced cultivation (Java) vs. plantation slavery (Caribbean):** Both extracted commodity production from coerced labor; Java system maintained local social structures while extracting a portion; Caribbean slavery destroyed social structures entirely
- **Zamindari vs. European feudal systems:** Both created landlord classes extracting from peasant cultivators; different origins (tax farming vs. feudal land grants) but similar social outcomes''',
     [
        {'q': 'The Dutch Cultuurstelsel (Culture System) in Java demonstrates which AP principle?',
         'correct': 'Colonial labor coercion was not limited to racial chattel slavery in the Americas — European colonial powers imposed various forms of forced production across Asia, demonstrating that the structural need to extract value from subject populations produced multiple institutional forms of coercion adapted to different local contexts',
         'others': ['The Cultuurstelsel was a voluntary market system with no coercive elements', 'Colonial labor coercion only existed in the Americas with slavery', 'The Dutch system in Java was identical to British plantation slavery in the Caribbean'],
         'exp': 'The Cultuurstelsel expands AP\'s comparative frame beyond the Americas: the same structural need (colonial profitability requiring low labor costs) produced different institutional forms depending on context. Java had an existing peasant agriculture that could be coerced into producing export crops; the Caribbean had an indigenous population that had been eliminated and needed a replacement labor force. Same structural need; different institutional solution.'},
        {'q': 'The Mughal zamindari system\'s transformation under British East India Company (Permanent Settlement 1793) demonstrates:',
         'correct': 'How colonial rule transformed existing revenue-extraction systems into permanent property regimes: the Mughal zamindars were revenue collectors with conditional rights; the British Permanent Settlement made them private landowners with permanent rights, dispossessing peasant cultivators of any claim to land they had farmed for generations',
         'others': ['The Permanent Settlement improved conditions for Javanese peasant cultivators', 'The zamindari system was invented by the British with no Mughal precedent', 'The Permanent Settlement had no impact on Indian agrarian social structures'],
         'exp': 'The Permanent Settlement is an AP-important example of how colonial governments transformed existing institutions in ways that served colonial interests rather than preserving indigenous systems. By converting the conditional rights of Mughal tax farmers into permanent private property rights, the British created a landlord class dependent on British legal protection — and simultaneously created a dispossessed peasantry that would become increasingly impoverished and resentful, contributing to 19th-century Indian famines and eventually nationalist movements.'},
        {'q': 'Global indentured labor migration after British emancipation (1833) created which long-term consequence?',
         'correct': 'Permanent South Asian and Chinese diaspora communities across the British Empire (Trinidad, Guyana, Fiji, Mauritius, South Africa, Malaysia) — creating multicultural societies that maintained connections to Asian origin cultures while developing new hybrid identities in the contexts of British colonial society',
         'others': ['Indentured workers all returned to their home countries after completing contracts', 'Indentured labor migration had no lasting demographic impact on receiving societies', 'Indentured workers integrated fully into British colonial society with no cultural distinctiveness'],
         'exp': 'The South Asian diaspora created by indentured labor migration is one of AP\'s important examples of how colonial economic systems created permanent demographic changes: approximately 1.5 million Indian workers transported to various parts of the British Empire over 80 years, and the majority never returned. Their descendants today form the Indian-origin communities in Trinidad, Guyana, Fiji, Mauritius, and South Africa — living evidence of colonial labor migration patterns.'},
        {'q': 'Comparing forced cultivation (Java) to plantation slavery (Caribbean) reveals which distinction?',
         'correct': 'Both extracted commodity production through labor coercion, but Java\'s system maintained existing Javanese social structures while extracting a portion of their output, while Caribbean plantation slavery destroyed indigenous social structures and replaced them with an entirely new coerced labor system — the degree of social disruption differed even when the economic extraction was similar',
         'others': ['Both systems were identical in their effects on local social structures', 'Caribbean slavery was less disruptive than Javanese forced cultivation', 'Forced cultivation is always more brutal than plantation slavery in all cases'],
         'exp': 'This comparison demonstrates analytical precision: both systems extracted commodity production from coerced labor, but through fundamentally different mechanisms with different social consequences. Java had a surviving population with intact social structures; the Dutch extracted a portion of existing agricultural production. Caribbean islands had experienced indigenous population collapse; plantation agriculture required constructing entirely new social structures based on enslaved labor. "Colonial coercion" encompasses very different social realities.'},
        {'q': 'What do diverse Asian colonial labor systems (zamindari, forced cultivation, indentured labor) collectively demonstrate?',
         'correct': 'That colonial extraction was structurally similar across regions — all required extracting labor value from subject populations — but adapted to local conditions: existing tax structures (zamindari), existing agricultural systems (Java forced cultivation), or post-emancipation labor needs (indentured servitude), demonstrating colonial flexibility in maintaining exploitation across different institutional contexts',
         'others': ['Asian colonial labor systems were unique with no connection to American colonial labor patterns', 'Colonial labor systems in Asia were always more humane than those in the Americas', 'Different colonial labor systems across Asia had no structural similarities'],
         'exp': 'The comparative AP lesson: colonial power structures are flexible and adaptive. The same underlying need (extracting value from subject populations at minimum cost) produced encomienda in Spanish Americas, chattel slavery in Caribbean plantations, forced cultivation in Java, zamindari transformation in India, and indentured servitude post-emancipation. Recognizing this flexibility — how colonial systems adapted to different contexts while maintaining exploitation — is a sophisticated AP analytical skill.'},
        {'q': 'An AP comparison of colonial labor systems in different regions demonstrates which broader principle?',
         'correct': 'Economic imperatives (colonial profitability through minimized labor costs) drove the development of coercive labor systems globally, but the specific institutional form each system took was shaped by local political, demographic, and cultural contexts — demonstrating that structural economic forces and contextual variation both matter for historical explanation',
         'others': ['All colonial labor systems were identical regardless of local context', 'Local contexts fully explain labor system variation with no underlying structural similarities', 'Colonial labor systems developed independently with no connection to global economic forces'],
         'exp': 'This principle — structural forces + contextual variation = specific historical outcomes — is an AP meta-skill. The structural force (colonial need for cheap labor) was global; the specific outcomes (chattel slavery vs. encomienda vs. forced cultivation vs. zamindari transformation) were contextually specific. Strong AP analysis holds both levels simultaneously rather than reducing to either pure structural determinism ("capitalism always produces slavery") or pure contextualism ("each situation was unique").'},
        {'q': 'The geographic distribution of colonial labor coercion (Americas, Asia, Africa) demonstrates that:',
         'correct': 'Labor coercion was a global phenomenon of the early modern colonial period, not limited to any specific region or racial pairing — the structural need to produce commodities for global markets at profitable prices drove the development of coercive labor systems wherever European colonial power extended, affecting indigenous peoples on multiple continents',
         'others': ['Colonial labor coercion was limited to the Americas and had no Asian or African dimensions', 'Labor coercion was only practiced by Spanish and Portuguese empires', 'European colonial labor coercion was uniquely limited compared to non-European empires'],
         'exp': 'The global scope of colonial labor coercion is an AP macro-theme: the same structural force (commodity production for global markets) drove encomienda in the Andes, chattel slavery in the Caribbean, forced cultivation in Java, zamindari transformation in India, and indentured labor across the British Empire. Understanding this global scope prevents any single region from being treated as exceptional while others are ignored — a requirement for AP World History\'s global comparative framework.'}
     ]
    ),
    (6, 'whmelf6', 'Resistance, Reform, and the End of the Slave Trade',
     'Abolition of the Atlantic slave trade and chattel slavery (c. 1807-1888) resulted from multiple forces: enslaved peoples\' resistance, religious and Enlightenment-inspired humanitarian arguments, economic critiques, and changing political conditions. AP questions evaluate the relative importance of these factors and connect abolition to broader 18th-19th century reform movements.',
     '''## 📖 Resistance, Reform, and Abolition

> **Abolitionist Movements**

| Country | Key Event | Key Figures |
|---------|-----------|------------|
| **Britain** | Slave trade banned 1807; slavery abolished 1833 | William Wilberforce, Olaudah Equiano, Granville Sharp |
| **France** | Abolished during Revolution 1794; restored by Napoleon 1802; abolished 1848 | Victor Schoelcher |
| **United States** | Slave trade banned 1808; slavery abolished 1865 (Civil War) | Frederick Douglass, Harriet Tubman, William Lloyd Garrison |
| **Brazil** | Last to abolish; Golden Law 1888 | Princess Isabel |

> **Why Abolition Happened: Multiple Causes**

Abolition resulted from converging factors:

1. **Enslaved peoples\' resistance:** Haitian Revolution (1791-1804) demonstrated that enslaved peoples would fight for freedom with or without European support; constant resistance made slavery costly to maintain
2. **Humanitarian argument:** British Quakers and evangelicals (Wilberforce) used Christian moral arguments; published firsthand accounts (Equiano\'s *Interesting Narrative*, 1789)
3. **Enlightenment ideology:** Natural rights philosophy challenged idea that some humans could be property
4. **Economic critique:** Adam Smith argued free labor was more productive than enslaved labor; industrialization reduced need for plantation labor in Britain
5. **Political context:** Haitian Revolution demonstrated the explosive potential of slavery; fear of further revolt motivated some gradual reform

> **Haitian Revolution (1791-1804)**

The only successful large-scale slave revolt:

- Triggered by French Revolution\'s rhetoric of liberty
- Toussaint L\'Ouverture: former enslaved person; military genius; declared Haiti independent 1804
- Haiti became the first Black republic and first Caribbean nation to achieve independence
- Deeply frightened slaveholders across the Americas; contributed to heightened slave codes in US South

> **AP Comparison Anchor**

- **British abolition vs. American:** Both used moral arguments; Britain abolished through parliamentary reform; America required a civil war — difference in political structure
- **Abolition vs. emancipation:** Banning the TRADE (1807/1808) and abolishing SLAVERY (1833/1865) were separate events decades apart — legal trade ended; slavery itself continued for decades''',
     [
        {'q': 'The Haitian Revolution (1791-1804) was historically significant because:',
         'correct': 'It was the only successful large-scale slave revolt in the Americas — creating the first Black republic and first Caribbean independent nation — while also demonstrating that enslaved peoples were capable of sophisticated political and military organization that could defeat European armies, transforming how slaveholders and abolitionists across the Americas understood the risks and possibilities of slavery',
         'others': ['The Haitian Revolution had no impact on slavery elsewhere in the Americas', 'Haiti achieved independence through peaceful negotiation rather than armed revolt', 'The revolution was led by free people of color with no enslaved people involvement'],
         'exp': 'The Haitian Revolution\'s dual significance: (1) it terrified slaveholders across the Americas into tightening control (US strengthened slave codes after 1804); (2) it inspired enslaved peoples and abolitionists by demonstrating that freedom could be won by force. The revolution\'s leader, Toussaint L\'Ouverture, was a former enslaved person who defeated Spanish, British, and French armies — a fact that fundamentally challenged European assumptions about African peoples\' capabilities.'},
        {'q': 'Olaudah Equiano\'s firsthand account of his enslavement (*The Interesting Narrative*, 1789) contributed to British abolition primarily because:',
         'correct': 'It provided British readers with a specific, human narrative of the slave trade\'s brutality from the perspective of an enslaved person with intellectual authority — making the abstract suffering of distant enslaved Africans personally real to British audiences and undermining the dehumanizing representations that slave traders used to justify the trade',
         'others': ['Equiano\'s account was ignored by British audiences and had no impact on abolition', 'British abolition was driven entirely by economic arguments with no humanitarian dimension', 'Firsthand accounts from enslaved people were not considered credible by British readers'],
         'exp': 'Equiano\'s narrative demonstrates the power of testimony: abstract arguments about "natural rights" were less persuasive to 18th-century British audiences than a specific, articulate account from an enslaved person who had experienced the trade firsthand. The narrative was a bestseller that went through 9 editions in Equiano\'s lifetime — demonstrating that humanitarian abolitionism required emotional as well as intellectual persuasion. This is also why slave owners worked to suppress similar accounts and deny enslaved people literacy.'},
        {'q': 'The distinction between banning the slave trade (Britain 1807) and abolishing slavery (Britain 1833) demonstrates:',
         'correct': 'Abolition was a gradual political process in which different constituencies supported different reforms: merchants and humanitarian reformers could agree on ending the TRADE (which also protected existing enslaved property values) while agreeing on abolishing SLAVERY required dealing with plantation owners\' compensation claims and the economic disruption of emancipation',
         'others': ['Banning the slave trade automatically abolished slavery in the same legislation', 'British abolition was a single decisive legislative act with no gradual dimension', 'The distinction between the trade and slavery itself had no political significance'],
         'exp': 'The gradual character of British abolition demonstrates that even moral reform operates within political constraints: the 1807 abolition of the trade kept existing enslaved populations enslaved while ending new importation; the 1833 Emancipation Act freed enslaved people but provided £20 million compensation to slaveholders (not to enslaved people) and required a "apprenticeship" period of continued unpaid labor until 1838. Understanding abolition as a political process with competing interests is more historically accurate than treating it as a moral triumph.'},
        {'q': 'The economic argument against slavery (Adam Smith\'s claim that free labor is more productive) was historically significant because:',
         'correct': 'It added an economic rationale to moral/humanitarian arguments for abolition, making abolitionism appealing to British manufacturing interests who needed consumers with purchasing power rather than enslaved workers with no wages — demonstrating that abolition was a convergence of moral and material interests, not purely moral reform',
         'others': ['The economic argument for abolition was irrelevant because abolition was purely moral', 'Adam Smith argued that slavery was economically beneficial and should be maintained', 'British manufacturers had no interest in whether slavery continued or ended'],
         'exp': 'The economic argument for abolition demonstrates AP complexity: moral reform and economic interest aligned in early 19th-century Britain. British industrialists producing manufactured goods needed consumers with purchasing power; enslaved workers had no wages to spend on British goods. Free labor — even poorly paid — created a consumer class that slavery could not. This doesn\'t mean abolition was purely economic (moral arguments were real and powerful), but it does mean that abolition became more politically viable when economic and moral interests converged.'},
        {'q': 'Why did Brazilian slavery persist until 1888 — decades after British and US abolition?',
         'correct': 'Brazil\'s plantation economy was more thoroughly dependent on enslaved labor (46% of all Atlantic slave trade arrivals went to Brazil) and lacked the political forces that drove British and American abolition: no strong evangelical abolition movement, no civil war, and coffee/sugar production continued to demand cheap labor until the late 19th century',
         'others': ['Brazil abolished slavery before Britain and the United States', 'Brazilian slavery persisted because Brazilian enslaved people accepted their condition without resistance', 'Brazil\'s small enslaved population made abolition less economically significant than in other regions'],
         'exp': 'Brazilian abolition\'s lateness demonstrates that the pace of abolition was driven by structural economic and political factors, not moral progress alone. Brazil received more enslaved Africans than any other destination (46% of the total trade); its coffee and sugar plantations were the most valuable in the world; and it lacked the strong abolitionist movement and civil war that forced emancipation in Britain and the US. The Golden Law (1888) came only when both demographic change (gradual mortality of enslaved generation) and political pressure (including from recently freed people joining abolitionist cause) made it unavoidable.'},
        {'q': 'Comparing the causes of British abolition and American abolition reveals:',
         'correct': 'Both resulted from converging moral arguments, enslaved peoples\' resistance, and changing economic conditions, but different political structures produced different paths: British parliamentary reform through lobbying and humanitarian coalitions; American abolition required a civil war because slaveholder political power was embedded in the Constitution (3/5 compromise, Senate representation) in ways that blocked parliamentary reform',
         'others': ['British and American abolition had identical causes and processes', 'American abolition preceded British abolition', 'Political structure had no impact on the pace or method of abolition'],
         'exp': 'This comparison demonstrates that the same underlying forces (moral arguments + enslaved resistance + economic change) produced different political outcomes because of different institutional contexts. Britain\'s parliamentary system allowed a moral coalition to build legislative majorities. The US Constitution\'s compromises gave slaveholding states political power disproportionate to their population, blocking reform until the balance of power was broken by secession and civil war. Institutional context shapes how structural forces play out politically.'},
        {'q': 'For AP, the abolition of slavery is most accurately characterized as:',
         'correct': 'A global, multi-generational process driven by converging forces — enslaved peoples\' resistance, humanitarian and Enlightenment ideologies, changing economic interests, and political reform movements — that unfolded at different paces in different societies depending on each society\'s specific economic dependence on slave labor and political structure',
         'others': ['A sudden moral awakening that happened simultaneously in all Western societies', 'A purely economic reform with no moral or humanitarian dimension', 'An event that occurred only once, in Britain in 1833, with no global context'],
         'exp': 'The AP meta-lesson on abolition: it was not a single event but a global process lasting from the late 18th century to the late 19th century, driven by multiple converging forces, and unfolding at different paces in different societies. This multi-causal, comparative perspective — rather than a simple "good triumphed over evil" narrative — is what AP World History rewards. Understanding the structural conditions that accelerated or delayed abolition in different contexts is the analytical task.'}
     ]
    ),
    (7, 'whmelf7', 'AP Review and Exam Mastery',
     'Maritime empires and labor systems content appears heavily in AP MCQ, SAQ, and LEQ questions. Key themes: comparing colonial labor systems, evaluating the causes and consequences of the Atlantic slave trade, and connecting colonial economies to global commercial networks. Mastering vocabulary and causal chains enables high AP scores.',
     '''## 📖 AP Review: Maritime Empires & Labor Systems

> **Must-Know Vocabulary**

- **Estado da India** — Portuguese Indian Ocean trading-post empire; charged cartaz (protection fees)
- **Encomienda** — Spanish colonial labor grant; colonist had rights to indigenous labor
- **Mita (colonial)** — Forced labor draft for silver mines; Inca mit\'a repurposed by Spanish
- **Chattel slavery** — Legal ownership of persons; heritable; increasingly racialized (African-descended = enslaved)
- **Debt peonage** — Workers bound by unpayable debts; continued after formal slavery/encomienda abolished
- **Indentured servitude** — Fixed-term contract labor; used after British emancipation 1833 for plantation replacements
- **Haitian Revolution (1791-1804)** — Only successful large-scale slave revolt; first Black republic; Toussaint L\'Ouverture
- **Cultuurstelsel** — Dutch forced cultivation system in Java; required 1/5 of land for export crops
- **Zamindari system** — Mughal tax farmers; made permanent landlords by British Permanent Settlement 1793
- **Middle Passage** — Atlantic crossing of slave ships; 15-20% mortality; 12.5M total transported

> **Common AP Prompt Patterns**

- **Comparison:** How did Spanish encomienda and chattel slavery differ as labor systems?
- **Causation:** What caused the expansion of the Atlantic slave trade in the 17th-18th centuries?
- **CCOT:** How did colonial labor systems change c. 1450-1750?
- **Evaluation:** What factors contributed to the abolition of the slave trade and slavery?
- **Complexity:** How did enslaved peoples resist their condition? How did resistance affect the slave trade?

> **AP Causal Chain: Labor Systems**

Disease → indigenous population collapse → labor shortage → encomienda inadequate for plantation crops → African enslaved labor demanded → Atlantic slave trade expands → 12.5M enslaved Africans → plantation economies (sugar, tobacco, cotton) → triangle trade → global commodity economy → industrial demand for free labor → abolition movements → emancipation (Britain 1833, US 1865, Brazil 1888)

> **AP Comparison Quick Reference**

| Labor System | Who Was Coerced | Legal Status | Key Region | Replaced By |
|-------------|----------------|-------------|-----------|------------|
| Encomienda | Indigenous | Theoretically free; coerced | Spanish Americas | Repartimiento, then debt peonage |
| Chattel slavery | Enslaved Africans | Property; no rights | Caribbean, Brazil, US South | Indentured servitude (British) |
| Mita (colonial) | Indigenous | Labor draft; nominal wage | Peru/Bolivia | Abolished 1812 |
| Debt peonage | Indigenous/mestizo | Nominally free; bound by debt | Spanish Americas | Persisted post-independence |
| Indentured servitude | South Asian, Chinese | Contract worker; legal rights post-term | British Empire | Voluntary labor markets |''',
     [
        {'q': 'An AP SAQ asks: "Briefly explain ONE difference between chattel slavery and indentured servitude." Which response earns full credit?',
         'correct': 'Chattel slavery was permanent and heritable — enslaved people were legal property with no rights, and their children inherited enslaved status; indentured servitude was a fixed-term contract (typically 4-7 years) after which workers were legally free, though conditions were often brutal and contracts frequently violated in practice',
         'others': ['Listing multiple differences without developing any single one with evidence', 'Arguing both systems were identical with no meaningful differences', 'Describing only the similarities without addressing the actual difference asked'],
         'exp': 'Full SAQ credit requires: claim (one clear difference) + evidence (specific features of each system) + implicit reasoning (this difference matters because...). The response identifies the key structural difference (permanent/heritable vs. fixed-term/contractual) with sufficient specific detail. SAQ responses that try to cover everything typically score less well than those that develop ONE point thoroughly with evidence.'},
        {'q': 'For an AP LEQ evaluating the causes of the Atlantic slave trade\'s expansion, which thesis earns the highest score?',
         'correct': 'The Atlantic slave trade\'s 17th-18th century expansion resulted from converging structural factors: plantation crop demand (sugar, tobacco, cotton) created economic incentive; indigenous labor collapse created supply-side necessity; Portuguese slave-trading networks made supply available; and the legal construction of racial slavery reduced long-term costs by making enslaved status heritable — no single factor is sufficient; the convergence of all four explains the trade\'s specific scale and character',
         'others': ['European racial hatred alone explains the slave trade\'s expansion', 'Economic incentives alone explain the slave trade with no other factors', 'The Atlantic slave trade expanded entirely due to African selling of captives'],
         'exp': 'This thesis earns full AP credit: it identifies multiple causes, explains the mechanism of each, uses specific evidence (plantation crops, indigenous collapse, Portuguese networks, racial heredity), and argues for convergence rather than single-cause explanation. AP LEQ theses should make an argument about WHAT explains the historical phenomenon and WHY the explanation is accurate — not just list factors.'},
        {'q': 'An AP DBQ includes a document from a British abolitionist and a document from a plantation owner both discussing slavery in 1800. What is the most sophisticated comparison of these documents\' perspectives?',
         'correct': 'Both documents address the same phenomenon (slavery) from perspectives shaped by their authors\' economic relationships to the institution: the abolitionist\'s perspective is shaped by moral and religious commitment to human equality; the plantation owner\'s by economic dependence on enslaved labor and the legal/ideological framework of racial hierarchy — neither is "objective," but both reveal real aspects of how the institution was understood by different constituencies',
         'others': ['The abolitionist\'s document is completely reliable while the plantation owner\'s is worthless', 'Both documents are equally unreliable because both authors had personal interests', 'The plantation owner\'s document should be dismissed because slavery was wrong'],
         'exp': 'Sophisticated DBQ document comparison avoids both naive objectivity (assuming one document is simply "true") and nihilism (assuming all documents are equally unreliable). The abolitionist document reveals how humanitarian arguments were constructed; the plantation document reveals the ideological justifications slaveholders used. Both tell us something real about the period; both are shaped by their authors\' positions. AP rewards analysis that uses documents as evidence of both their subject matter AND their historical context.'},
        {'q': 'The most important AP lesson from studying maritime empires and labor systems is:',
         'correct': 'That early modern global commerce was structurally dependent on human exploitation — the profits that drove European maritime expansion, the commodities that created global trade networks, and the silver that connected regional economies all rested on coerced labor of indigenous Americans, enslaved Africans, and colonized Asian peoples — making "globalization" and "exploitation" inseparable features of this period',
         'others': ['Maritime expansion and labor coercion were unrelated phenomena that happened simultaneously by coincidence', 'Global commerce was beneficial for all participants in the early modern period', 'Labor coercion was a minor feature of early modern global trade that can be separated from the commercial story'],
         'exp': 'The AP meta-lesson: early modern globalization was inseparable from human exploitation. This is not a moral judgment that makes the history "bad" — it is a factual description of the structural relationships that made the system function. Silver flowed to China because Potosí\'s miners were coerced; sugar fed European consumers because Caribbean enslaved laborers had no wages; spices reached European markets because Portuguese cannons enforced payment of protection fees. Understanding these structural connections is required for accurate AP historical analysis.'},
        {'q': 'Which AP comparison best demonstrates the relationship between colonial labor systems and global trade networks?',
         'correct': 'Colonial labor systems (encomienda, chattel slavery, forced cultivation) were the production mechanisms of global commodity chains: Potosí mita labor produced the silver that flowed to China; Caribbean plantation slavery produced the sugar consumed in Europe; Javanese forced cultivation produced the coffee exported to Dutch markets — demonstrating that global trade networks were not simply commercial exchanges but were structured by coercive labor relations at the point of production',
         'others': ['Global trade networks and labor systems were entirely independent phenomena', 'All global commodity trade relied on fully free labor markets with no coercion', 'Labor coercion was more significant than commercial exchange in this period'],
         'exp': 'This comparison demonstrates AP\'s most important analytical connection for this period: global trade networks were not abstract commercial phenomena but were concretely embodied in specific labor relationships. The global economy was built on the bodies of coerced workers. Tracing the connection from labor system to commodity to trade route to consumption demonstrates the analytical skill AP World History most rewards: connecting specific evidence to broader structural patterns across multiple regions and periods.'},
        {'q': 'For an AP CCOT on colonial labor systems c. 1450-1750, which argument best identifies the most significant change?',
         'correct': 'The most significant change was the progressive racialization of coerced labor: early colonial systems (encomienda) used indigenous political categories and maintained theoretical legal rights; by 1700, chattel slavery had made African descent legally synonymous with enslaved status, heritable and permanent — transforming labor coercion from a political category into a racial one that would shape American societies for centuries',
         'others': ['Colonial labor systems were static throughout the period with no significant changes', 'The most significant change was the replacement of all coerced labor with free market wages', 'Labor systems became progressively less coercive throughout the colonial period'],
         'exp': 'The racialization of labor coercion is the most historically significant change for CCOT analysis because it had the longest-lasting consequences: early colonial systems were coercive but not permanently racial; by 1700, racial chattel slavery had created legal categories that shaped American societies into the 20th century. CCOT arguments should identify changes with lasting consequences, not just any change — and the shift from politically-defined to racially-defined labor exploitation fits this criterion perfectly.'},
        {'q': 'An AP question asks whether free trade or coerced labor better explains early modern global commercial expansion. Which argument earns the most credit?',
         'correct': 'Both free trade and coerced labor were essential and interconnected features of early modern global commerce: free trade mechanisms (joint-stock companies, international commercial law, currency exchange) organized the commercial networks, but those networks were profitably only because coerced labor (slavery, encomienda, forced cultivation) minimized production costs — the "free" commercial system rested on fundamentally unfree labor, making the distinction analytically misleading',
         'others': ['Free trade principles alone explain early modern commercial expansion', 'Coerced labor alone explains early modern commercial expansion', 'Free trade and coerced labor were mutually exclusive phenomena that cannot be analyzed together'],
         'exp': 'This argument earns AP complexity credit by refusing the false choice: the question\'s framing implies "either/or" but the historical reality was "both/and" — and the two were structurally interconnected rather than separate. The commercial networks of the Dutch VOC and British East India Company operated according to free trade principles; their profitability depended on coerced production of commodities. Identifying this structural connection and refusing the false dichotomy is the AP sophistication move.'}
     ]
    ),
]

for pnum, id_pre, subtitle, key_concept, content_body, questions in parts:
    export_var = f'whMaritimeEmpiresLaborPart{pnum}Data'
    w(f'{SLUG}-part{pnum}.ts', make_file(export_var, SLUG, pnum, id_pre, EMOJI, TITLE, subtitle, key_concept, content_body, questions))

print("All maritime empires/labor parts done!")
