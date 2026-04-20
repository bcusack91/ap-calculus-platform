#!/usr/bin/env python3
"""Write wh-indian-ocean-trade parts 2-7."""
import os

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    'src', 'data', 'interactive-lessons')

def w(filename, content):
    with open(os.path.join(base, filename), 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

SLUG = 'wh-indian-ocean-trade'
TITLE = 'Indian Ocean Trade Networks'
EMOJI = '🌊'

def make_file(pnum, id_pre, subtitle, key_concept, content_body, questions):
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
    return f"""export const whIndianOceanTradePart{pnum}Data = {{
  topicSlug: '{SLUG}',
  sections: [
    {{
      id: '{id_pre}-intro',
      type: 'text' as const,
      content: `
# {EMOJI} {TITLE}

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
            label: 'The seasonal reversing winds that enabled regular Indian Ocean navigation were the ___',
            options: ['Monsoon winds', 'Trade winds', 'Jet stream', 'Doldrums']
          }},
          {{
            label: 'The East African coastal city-states that blended Bantu and Arab/Islamic culture were the ___',
            options: ['Swahili city-states', 'Aztec city-states', 'Mongol khanates', 'Indian Ocean sultanates']
          }},
          {{
            label: 'The Chinese admiral who led 7 massive expeditions into the Indian Ocean c. 1405-1433 was ___',
            options: ['Zheng He', 'Kublai Khan', 'Vasco da Gama', 'Henry the Navigator']
          }}
        ],
        correctAnswers: ['Monsoon winds', 'Swahili city-states', 'Zheng He'],
        hint1: 'Seasonal wind patterns — reversal twice per year — enabled regular navigation',
        hint2: 'East African ports — Kilwa, Mombasa — Islamic + Bantu cultural synthesis',
        hint3: 'Chinese Muslim admiral — 62 ships — 7 expeditions — discontinued after 1433',
        explanation: 'Monsoon winds were the technological foundation of Indian Ocean commerce — they made regular, predictable navigation possible across enormous distances. The Swahili city-states are the model of how Indian Ocean trade produced cultural synthesis in East Africa. Zheng He\'s voyages demonstrate Chinese maritime capability and the political decision to discontinue it — one of history\'s most consequential non-events.'
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

parts = [
    (2, 'whiot2', 'Monsoon Winds and Indian Ocean Geography',
     'Indian Ocean trade was enabled by a unique geographic feature: predictable monsoon winds that reverse direction seasonally, allowing merchants to sail to their destination in one season and return in the next. AP questions focus on how geography enabled commerce and which peoples participated in this trade network before European arrival.',
     '''## 📖 Monsoon Winds and Indian Ocean Geography

> **The Monsoon Wind System**

The Indian Ocean\'s unique geography is the foundation of its trade:

| Season | Wind Direction | Navigation |
|--------|---------------|-----------|
| **Summer (April-September)** | Southwest to Northeast | Ships sail from East Africa/Arabia to India/SE Asia |
| **Winter (October-March)** | Northeast to Southwest | Ships return from India/SE Asia to East Africa/Arabia |

This predictable reversal was known by c. 1st century CE; merchants planned voyages around seasonal wind patterns.

> **Who Traded in the Indian Ocean?**

The Indian Ocean was a multi-civilizational commercial space before European arrival:

- **Arab merchants:** Connected Persian Gulf, Red Sea, and East African coasts; dhow ships (lateen sails)
- **Indian merchants:** Gujarat (northwest India) dominant; traded cotton textiles for spices and gold
- **Malay merchants:** Controlled Southeast Asian spice islands (Malacca Strait chokepoint)
- **East African Swahili cities:** Supplied gold, ivory, enslaved people from African interior
- **Chinese merchants:** Trading junks; Chinese porcelain found across the Indian Ocean world

> **Key Trading Cities and Chokepoints**

- **Hormuz:** Persian Gulf entry; controlled by various powers; gateway to Middle East
- **Aden:** Red Sea entry; Yemen; connection to Mediterranean via overland Egypt
- **Malacca:** Strait between Malay Peninsula and Sumatra; controlled SE Asian spice routes
- **Calicut (Kozhikode):** Major Indian port; where da Gama arrived 1498
- **Kilwa Kisiwani:** Major Swahili city; controlled Zimbabwe gold exports

> **AP Comparison Anchor**

- **Indian Ocean vs. Silk Road:** Both were multi-civilizational trade networks; Indian Ocean carried bulkier, higher-volume goods (cotton, spices); Silk Road carried luxury overland goods; both transmitted religion, technology, culture alongside commodities
- **Indian Ocean vs. Atlantic trade:** Indian Ocean was voluntary commercial exchange among roughly equal participants; Atlantic trade involved European military coercion and forced labor — fundamentally different commercial character''',
     [
        {'q': 'The monsoon wind system\'s significance for Indian Ocean trade was:',
         'correct': 'Predictable seasonal wind reversals made regular, reliable navigation across the Indian Ocean possible without the advanced navigational technology Europeans developed for the Atlantic — merchants could plan voyages, contract goods, and build commercial relationships knowing ships would arrive and return on a regular seasonal schedule',
         'others': ['Monsoon winds made Indian Ocean navigation impossible due to unpredictable storms', 'Only Chinese sailors understood monsoon navigation; other peoples could not use the winds', 'Monsoon winds only affected navigation in the Red Sea with no impact on the broader Indian Ocean'],
         'exp': 'The monsoon system is why the Indian Ocean was a commercially sophisticated network for centuries before European arrival. The predictability — not just the winds themselves — made commercial relationships possible: merchants could commit to contracts, build credit relationships, and establish permanent trading networks because they knew ships would arrive roughly on schedule. This reliability was as important as the wind direction itself.'},
        {'q': 'The Indian Ocean\'s multi-civilizational character before European arrival demonstrates:',
         'correct': 'That long-distance commerce was not a European invention — Arab, Indian, Malay, Chinese, and East African merchants had built sophisticated commercial networks spanning thousands of miles centuries before Vasco da Gama\'s arrival, challenging Eurocentric narratives that portray global trade as something Europeans created',
         'others': ['The Indian Ocean was commercially isolated before European arrival in the late 15th century', 'Only Chinese merchants participated in Indian Ocean commerce before European arrival', 'Indian Ocean trade was primarily political rather than commercial before Europeans arrived'],
         'exp': 'The pre-European Indian Ocean is one of AP\'s most important counter-narratives: da Gama didn\'t "open" Indian Ocean trade — he arrived at the edge of a sophisticated commercial network that had been operating for centuries. The goods he sought (spices, textiles) were already moving through established networks. European arrival disrupted but did not create these networks — a crucial distinction for accurate historical analysis.'},
        {'q': 'Why was the Malacca Strait strategically significant for Indian Ocean trade?',
         'correct': 'The Malacca Strait was a narrow chokepoint between the Malay Peninsula and Sumatra through which virtually all maritime trade between the Indian Ocean and the South China Sea had to pass — controlling it meant controlling the flow of Southeast Asian spices (nutmeg, cloves, pepper) to both Indian and Chinese markets',
         'others': ['Malacca was significant only as a military base with no commercial importance', 'The Malacca Strait was too shallow for commercial navigation until Europeans dredged it', 'Malacca\'s significance was primarily religious rather than commercial'],
         'exp': 'Malacca\'s strategic importance explains why the Portuguese made it their first major Asian conquest (1511): controlling the strait meant inserting Portuguese military force into the single chokepoint through which Southeast Asian spice trade had to flow. The Sultanate of Malacca (founded c. 1400) had grown rich by providing services to passing merchants — safety, exchange facilities, translation. Portuguese conquest disrupted this multicultural commercial hub and pushed trade through alternative routes.'},
        {'q': 'The presence of Chinese porcelain in archaeological sites across the Indian Ocean world (East Africa, Southeast Asia, India) demonstrates:',
         'correct': 'That Chinese manufactured goods were major commodities in the Indian Ocean trade network — Chinese porcelain was valued for its quality and durability throughout Asia and East Africa, and its distribution across multiple regions demonstrates the geographic reach of Chinese commercial networks before and during the early modern period',
         'others': ['Chinese porcelain was only used in China with no export trade', 'Porcelain trade was unimportant compared to spice trade', 'Chinese porcelain reached East Africa only through European intermediaries'],
         'exp': 'Archaeological distribution of Chinese porcelain is one of history\'s most elegant proofs of long-distance trade connections: Chinese blue-and-white ceramics (distinctive manufacturing technique) found in coastal East Africa, South Asia, and Southeast Asia prove commercial contact that predated written records. At Great Zimbabwe (landlocked Zimbabwe), Chinese porcelain pieces demonstrate that the gold trade connected southern African interior to Indian Ocean coastal networks, which connected to Chinese manufacturing.'},
        {'q': 'Comparing the Indian Ocean and Silk Road trade networks reveals:',
         'correct': 'Both were multi-civilizational networks transmitting goods, religions, technologies, and cultural practices across long distances, but the Indian Ocean moved higher volumes of bulkier goods (cotton textiles, spices, ceramics) by sea at lower cost per unit, while the Silk Road moved lower volumes of higher-value luxury goods overland with multiple intermediary markups',
         'others': ['The two networks were completely separate with no connection points', 'The Silk Road carried higher volumes than the Indian Ocean due to its overland advantages', 'Both networks were operated exclusively by Chinese merchants'],
         'exp': 'The comparison between Indian Ocean and Silk Road networks demonstrates that different technologies (maritime vs. overland) produce different commercial characteristics: sea transport is cheaper per unit for bulk goods; overland transport is only economically viable for goods with high value-to-weight ratios. Both networks transmitted religion and culture alongside commodities — Islam spread along both; Buddhism spread along the Silk Road; Hinduism and Islam spread along Indian Ocean routes — but their commercial profiles differed significantly.'},
        {'q': 'An AP comparison of Indian Ocean trade and Atlantic triangle trade reveals which fundamental difference?',
         'correct': 'The pre-European Indian Ocean trade was characterized by roughly voluntary commercial exchange among multiple roughly equal participants (Arab, Indian, Malay, Chinese, East African merchants) without a single dominant power imposing the terms of trade, while the Atlantic triangle trade was characterized by European military coercion and the forced transport of enslaved Africans — demonstrating that trade networks can be organized on very different principles',
         'others': ['Both the Indian Ocean and Atlantic trade were equally coercive and exploitative', 'The Indian Ocean trade was more exploitative than the Atlantic trade', 'Atlantic trade was fully voluntary with no coercive elements'],
         'exp': 'This comparison is AP-important because it challenges the assumption that "global trade" always involves European dominance. The pre-European Indian Ocean was genuinely polycentric — no single power dominated — and organized around roughly voluntary commercial relationships. European arrival (Portuguese cartaz system) introduced coercive elements into an existing voluntary system. The Atlantic trade was coercive from its origins. These different organizational principles produced different consequences for the peoples involved.'},
        {'q': 'The geographic distribution of Indian Ocean trade participants (Arab, Indian, Malay, Chinese, Swahili) demonstrates which AP principle?',
         'correct': 'Geographic proximity to trading routes and production of valued commodities (not political power or cultural sophistication) determined who participated in pre-European Indian Ocean trade, demonstrating that long-distance commercial networks emerge organically from geographic and economic complementarities rather than requiring a single organizing state',
         'others': ['Only politically powerful states could participate in Indian Ocean trade', 'Geographic proximity was irrelevant; only cultural sophistication determined participation', 'Indian Ocean trade required a single dominant power to organize and enforce commercial relations'],
         'exp': 'The absence of a single hegemonic power in the pre-European Indian Ocean is a key AP point: the network functioned without a Rome or a China imposing order. Instead, complementary specializations (Indian cotton + Southeast Asian spices + East African gold + Chinese manufactured goods) created mutual commercial interests that sustained the network. This self-organizing commercial polycentric model contrasts with the coercive European trading-post empire model that was later imposed.'}
     ]
    ),
    (3, 'whiot3', 'Major Trading Civilizations of the Indian Ocean',
     'Arab, Indian, Malay, and Chinese merchants were the major participants in Indian Ocean trade c. 1000-1500. AP questions focus on what each civilization contributed to the network, how Islam spread through trade, and how the Indian Ocean differed from the Atlantic trade in its organization and character.',
     '''## 📖 Major Trading Civilizations

> **Arab Merchants and Islamic Networks**

Arab merchants dominated the western Indian Ocean and connected it to the Mediterranean:

- **Dhow ships:** Lateen-sailed boats; sewn (not nailed) construction; highly maneuverable in shallow waters
- **Commercial innovation:** Letters of credit (suftaja) and partnership contracts (mudaraba) enabled trade without carrying cash
- **Islam spread through trade:** Conversion of Swahili coast merchants, Malay and Indonesian rulers — demonstrating how commerce transmits religion
- **Key ports:** Aden (Yemen), Hormuz (Persian Gulf), Mogadishu (East Africa)

> **Indian Merchants: Gujarat Dominance**

Indian merchants, especially from Gujarat (northwest India), were the Indian Ocean\'s most extensive traders:

- Specialized in cotton textiles — highest-demand Indian Ocean commodity
- Trading diaspora communities established across Indian Ocean: East Africa, SE Asia, Persian Gulf
- Hindu, Muslim, and Jain Indian merchants all participated
- Financing mechanisms: hundis (bills of exchange) enabled long-distance credit

> **Malay World: Southeast Asian Spices**

Southeast Asian maritime culture controlled the most valuable commodities:

- **Spices:** Nutmeg (Banda Islands), cloves (Maluku/Moluccas), pepper (Java, Sumatra) — extremely high European demand
- **Malacca Sultanate (c. 1400):** Became major entrepôt; controlled strait; multicultural trading community
- **Cultural synthesis:** Malay adoption of Islam; Sanskrit and Arabic influences; "Malay World" culture

> **Chinese Maritime Trade**

Chinese merchants and state-sponsored expeditions participated in Indian Ocean commerce:

- Chinese junks traded across Southeast Asia to Indian Ocean
- **Zheng He\'s voyages (1405-1433):** 7 expeditions; 62 ships; visited Persian Gulf, Arabian Peninsula, East Africa
- Discontinued after 1433 (political/Confucian opposition) — China retreated from maritime expansion
- Chinese porcelain, silk exported; gold, spices, exotic animals imported

> **AP Comparison Anchor**

- **Arab vs. Indian merchants:** Both used commercial innovations (letters of credit) and diaspora trading communities; Arab merchants more closely connected Islam and commerce; Indian merchants were more economically diverse (Hindu, Muslim, Jain)
- **Chinese withdrawal vs. European expansion:** Same era, opposite decisions — China discontinued maritime expansion while Europe intensified it, producing divergent global consequences''',
     [
        {'q': 'The spread of Islam throughout the Indian Ocean world (East Africa, Southeast Asia) demonstrates:',
         'correct': 'How commercial networks transmit religious beliefs: Arab and Indian Muslim merchants brought Islamic practice to trading ports, local rulers adopted Islam to facilitate commercial relationships with Muslim merchant networks, and Islamic law (providing common legal framework for contracts across ethnic groups) offered practical commercial advantages alongside spiritual appeals',
         'others': ['Islam spread through the Indian Ocean exclusively through military conquest', 'Only religious missionaries (not merchants) spread Islam through the Indian Ocean world', 'Islam spread in the Indian Ocean world with no connection to commercial networks'],
         'exp': 'The commercial mechanism of Islamic spread is AP-essential: Indian Ocean Islam was "traders\' Islam" — it spread along commercial routes rather than through conquest. The Malay world adoption of Islam followed commercial logic: Muslim merchant networks offered access to credit, legal frameworks (Islamic commercial law), and trading partnerships unavailable to non-Muslim merchants. This commercial path of Islamization produced a different character of Islamic practice (more syncretic, less strictly sharia-based) than conquest Islamization.'},
        {'q': 'The Indian Ocean\'s sophisticated commercial infrastructure (letters of credit, partnership contracts, diaspora communities) demonstrates:',
         'correct': 'That medieval Asian commercial systems developed sophisticated financial instruments centuries before European capitalism — suftaja (letters of credit), mudaraba (partnership contracts), and hundi (bills of exchange) all enabled large-scale long-distance commerce without transporting physical currency, solving the same problems European banking would address later',
         'others': ['Asian commercial systems were primitive and had no financial sophistication before European contact', 'Letters of credit and partnership contracts were European inventions adopted by Asian merchants', 'Indian Ocean commerce was conducted exclusively through barter with no financial instruments'],
         'exp': 'Medieval Islamic and Indian commercial innovation is AP\'s counter-narrative to "European commercial superiority": suftaja (letters of credit enabling payment without cash transfer), mudaraba (silent partnership contracts enabling investment without direct involvement), and trading diaspora communities providing trust networks across cultures were all sophisticated solutions to the same commercial problems European banking later addressed. Understanding these non-European commercial innovations is essential for accurate AP World History.'},
        {'q': 'The Malacca Sultanate\'s adoption of Islam (c. 1400) was primarily motivated by:',
         'correct': 'Commercial advantages — adoption of Islam by Malacca\'s ruler provided access to Muslim merchant networks (Arab, Indian) and the legal/commercial framework of Islamic law, enabling Malacca to become a more attractive entrepôt for the Muslim merchants who dominated Indian Ocean trade',
         'others': ['Pure religious conviction with no commercial motivation', 'Military pressure from Arab Muslim armies requiring conversion', 'Islam was indigenous to Southeast Asia with no external influence needed'],
         'exp': 'Malacca\'s conversion demonstrates that religious conversion in pre-modern world often had practical commercial dimensions: adopting Islam connected Malacca to the Muslim merchant networks (Arab and Indian Muslim merchants) that dominated Indian Ocean commerce, provided a common legal framework for commercial disputes, and made Muslim merchants more likely to choose Malacca as their trading hub. This doesn\'t mean the religious conversion was insincere — it means commercial incentives and religious change were not separate.'},
        {'q': 'Chinese junks trading in Southeast Asia and the Indian Ocean, combined with Chinese porcelain found in archaeological sites across the region, demonstrates:',
         'correct': 'That China was a significant participant in Indian Ocean commerce through both state-sponsored expeditions (Zheng He) and private merchant trading networks — producing goods (porcelain, silk) that were valued throughout the Indian Ocean world and consuming goods (spices, exotic animals) that demonstrated Chinese involvement in long-distance commerce',
         'others': ['China was isolated from Indian Ocean trade before European contact', 'Chinese participation in Indian Ocean trade was limited to Zheng He\'s official voyages', 'Chinese porcelain was only manufactured for domestic consumption'],
         'exp': 'Chinese participation in Indian Ocean commerce had multiple dimensions: official state expeditions (Zheng He) represented imperial display of power; private Chinese merchant networks continued trading in Southeast Asia even after official expeditions were discontinued. The archaeological distribution of Chinese porcelain — from East Africa to Southeast Asia to India — demonstrates the geographic extent of Chinese commercial networks that existed independent of official imperial sponsorship.'},
        {'q': 'The contrast between China\'s discontinuation of Zheng He\'s voyages (1433) and Portugal\'s continuation of African coastal exploration at the same time demonstrates:',
         'correct': 'That political decisions, not technological capability or commercial opportunity, determined which civilizations extended global reach — Chinese ships were technologically superior to Portuguese vessels; the commercial opportunities were real; but Chinese political decisions (Confucian opposition to maritime commerce, shift of imperial attention to northern threats) discontinued exploration while European political decisions sustained and intensified it',
         'others': ['China discontinued exploration because its ships were technologically inferior to European vessels', 'China had no commercial interest in the Indian Ocean world', 'European exploration continued for purely religious rather than commercial reasons'],
         'exp': 'This is AP World History\'s most important counterfactual: Chinese maritime capability exceeded European capability in 1433 when Zheng He\'s voyages ended. The Chinese decision to discontinue was political (Confucian bureaucratic opposition to maritime merchants, shift of imperial attention to Mongol threats in the north, cost of maintaining the fleet). The European decision to continue was also political (commercial competition between Portugal and Spain, royal patronage of exploration). Technology doesn\'t determine history — decisions do.'},
        {'q': 'Comparing Arab merchant commercial practices (suftaja, mudaraba) to European merchant capitalism reveals:',
         'correct': 'Arab commercial practices anticipated many features of European capitalism by several centuries — letters of credit, silent partnerships, and diaspora trading networks all solve the fundamental problems of long-distance commerce (trust across distances, capital pooling, risk sharing) — suggesting that commercial sophistication developed independently in multiple cultural contexts rather than being a distinctly European contribution',
         'others': ['Arab commercial practices were primitive compared to European capitalism', 'European merchants borrowed all their commercial innovations directly from Arab merchants', 'Arab and European commercial systems were entirely independent with no connections'],
         'exp': 'This comparison demonstrates AP\'s importance of recognizing parallel commercial development: the problems of long-distance commerce (how to trust distant partners; how to transfer value without moving cash; how to pool capital) produced similar institutional solutions in multiple cultural contexts. Arab mudaraba partnerships and European commenda contracts were essentially the same institution developed independently. This demonstrates that "capitalism" is not distinctly European — complex commercial systems emerge wherever long-distance trade creates the demand for them.'},
        {'q': 'For AP, the most significant feature of the pre-European Indian Ocean trade network was:',
         'correct': 'Its polycentric, voluntary character — multiple civilizations (Arab, Indian, Malay, Chinese, East African) participated as roughly equal commercial actors without a single dominant hegemon imposing terms, creating a resilient, self-organizing commercial network that functioned effectively for centuries without European organizational models or military enforcement',
         'others': ['The pre-European Indian Ocean was dominated by a single hegemonic power controlling all trade', 'The network was primitive and commercially unsophisticated until European arrival', 'The Indian Ocean trade was conducted primarily through violence rather than voluntary exchange'],
         'exp': 'The polycentric Indian Ocean trade model is AP\'s alternative to the "trade requires hegemony" assumption. The network functioned — and functioned sophisticatedly — without a dominant power because complementary specializations (Indian cotton, Southeast Asian spices, East African gold, Chinese porcelain) created mutual dependence. European arrival (Portuguese cartaz system) tried to impose hegemonic control, partially succeeded, but never fully replaced the existing network — the complementarities that made the network work were stronger than any single power\'s ability to dominate it.'}
     ]
    ),
    (4, 'whiot4', 'Zheng He\'s Voyages and Chinese Maritime Power',
     'Chinese Admiral Zheng He led 7 massive expeditions into the Indian Ocean (1405-1433), reaching the Persian Gulf, Arabian Peninsula, and East Africa with fleets of up to 317 ships. AP questions focus on the voyages\' purpose, their discontinuation after 1433, and what the Chinese withdrawal demonstrates about political decisions and global history.',
     '''## 📖 Zheng He\'s Voyages

> **The Voyages: Scale and Scope**

| Feature | Details |
|---------|---------|
| **Commander** | Zheng He — Muslim Chinese eunuch admiral of the Imperial Court |
| **Period** | 1405-1433 (7 expeditions) |
| **Fleet size** | Up to 317 ships; largest individual ships ~400 feet (baochuan "treasure ships") |
| **Geographic reach** | Southeast Asia, India, Persian Gulf, Arabia, East Africa |
| **Purpose** | Tribute collection, diplomatic display, demonstration of Chinese power |

> **Purpose and Character**

Zheng He\'s voyages were NOT primarily commercial:

- **Tribute system:** Visited foreign rulers and received tribute (recognition of Chinese imperial authority)
- **Diplomatic display:** Demonstrated Chinese power and sophistication to foreign rulers
- **Gift exchange:** Brought Chinese goods (silk, porcelain); returned with exotic animals (giraffes presented as qilin/unicorns), ambassadors, exotic goods
- **NOT conquest:** Zheng He did not colonize or establish territorial control; he established diplomatic relationships

> **Why They Were Discontinued**

After the Yongle Emperor\'s death (1424), the voyages were scaled back and finally stopped after 1433:

- **Confucian opposition:** Scholar-bureaucrats saw maritime trade and overseas engagement as un-Confucian; "barbarian" goods not worth the cost
- **Cost:** Maintaining enormous fleets was expensive; Confucian officials preferred investment in agricultural stability
- **Northern threats:** Mongolian pressure on northern borders required military resources; maritime power seemed less urgent
- **Institutional shift:** Yongle Emperor (who sponsored voyages) succeeded by less interested emperors; eunuch faction (Zheng He\'s patrons) lost political influence

> **AP Comparison Anchor**

- **Zheng He vs. Portuguese exploration:** Same era; opposite decisions; Chinese ships were larger and more capable; European exploration led to colonization; Chinese exploration was discontinued — demonstrates that technology ≠ historical destiny
- **Chinese haijin (maritime prohibitions):** China periodically banned private maritime trade, limiting Chinese commercial expansion and eventually ceding maritime commerce leadership to other powers''',
     [
        {'q': 'Zheng He\'s voyages differed from European exploration most fundamentally in that:',
         'correct': 'Zheng He\'s expeditions were diplomatic tribute missions designed to demonstrate Chinese imperial power and receive acknowledgment of Chinese authority, while European exploration was driven by commercial profit motives and led to territorial conquest and colonization — different purposes producing different consequences',
         'others': ['Zheng He\'s ships were smaller and less capable than contemporary Portuguese vessels', 'Both Zheng He and European explorers had identical commercial and colonial goals', 'Zheng He colonized territories while European explorers only established trade posts'],
         'exp': 'The purpose distinction is the key AP difference: Zheng He brought Chinese goods as gifts and took home tribute and exotic animals (as symbols of imperial reach), not commercial profit; he established diplomatic acknowledgment of Chinese superiority, not trade posts or colonies. European exploration was driven by commercial profit and led to territorial control and coercive labor systems. Different purposes → different methods → different consequences.'},
        {'q': 'The discontinuation of Zheng He\'s voyages after 1433 demonstrates which AP principle?',
         'correct': 'Political and institutional factors, not technological or commercial conditions, determine whether capabilities are used or abandoned — China had the technological capability to continue and expand maritime exploration but Confucian officials\' political opposition to maritime commerce, combined with the death of the sponsoring emperor, resulted in the deliberate abandonment of a technology that could have made China the dominant global maritime power',
         'others': ['China discontinued the voyages because its ships were technologically inferior and unsustainable', 'The voyages ended because all potential trading partners had been visited', 'China\'s isolation from global trade was geographically determined rather than politically chosen'],
         'exp': 'This is one of AP World History\'s most important points: the discontinuation of Chinese maritime exploration was a POLITICAL CHOICE, not a technological or geographic inevitability. Chinese ships in 1433 were larger and more capable than Portuguese ships of the same era. The choice to discontinue was made by Confucian officials who saw maritime commerce as un-Confucian and expensive. The divergence between Chinese retreat and European expansion from the same starting point demonstrates that political decisions, not technology, determine global power trajectories.'},
        {'q': 'Confucian opposition to maritime trade and exploration was based primarily on:',
         'correct': 'The Confucian value system\'s prioritization of agricultural production and social stability over commerce — merchants and commercial activity were ranked lowest in the Confucian social hierarchy, and overseas engagement was seen as both wasteful of resources better devoted to agricultural stability and potentially destabilizing to the social order',
         'others': ['Confucian scholars opposed exploration because they believed the ocean was spiritually dangerous', 'The opposition was purely economic — officials thought exploration was unprofitable', 'Confucian officials supported exploration but opposed the specific methods Zheng He used'],
         'exp': 'Confucian social hierarchy (scholars → farmers → artisans → merchants) structurally devalued commercial activity. Maritime trade expansion benefited the eunuch faction (which sponsored Zheng He) and merchant interests — both groups Confucian officials opposed. The opposition to maritime exploration was not simply about the ocean — it was about which social groups (merchants, eunuchs) would benefit from expansion and which (scholar-officials, agriculturalists) would lose relative power and resources.'},
        {'q': 'Comparing the scale of Zheng He\'s fleet (317 ships, largest ~400 feet) to contemporary Portuguese vessels (1-10 ships, ~70-90 feet each) demonstrates:',
         'correct': 'That Chinese maritime technology in the early 15th century significantly exceeded European capability — making the Chinese decision to discontinue maritime expansion even more historically significant, since China had superior means to extend global reach but chose not to, while Portugal with inferior technology pursued expansion with world-historical consequences',
         'others': ['Portuguese ships were actually larger and more capable than Chinese vessels', 'Both fleets were approximately equal in size and capability', 'Fleet size is irrelevant to understanding the historical significance of either expedition'],
         'exp': 'The scale comparison exists to make a specific AP analytical point: when we ask "why did Europe rather than China colonize the world?" the answer is NOT "European technological superiority." Chinese maritime technology was clearly superior. The answer is political and institutional — China made a deliberate political choice to retreat from maritime expansion; European states made political choices to intensify it. Technology created opportunity; politics determined whether the opportunity was seized.'},
        {'q': 'Zheng He\'s voyages reached East Africa (modern Kenya, Tanzania) in the 1420s, decades before Vasco da Gama arrived at East African ports. What does this demonstrate for AP?',
         'correct': 'That East African Swahili coast civilizations were already integrated into global commercial and diplomatic networks centered on the Indian Ocean before European arrival — da Gama arrived at the edge of a sophisticated existing commercial world, not a previously isolated region',
         'others': ['Zheng He\'s arrival in East Africa was the first contact between Africa and any non-African civilization', 'East African civilizations had no commercial activity before Zheng He\'s arrival', 'Zheng He\'s visit to East Africa established a Chinese colonial empire in Africa'],
         'exp': 'This point directly connects to the broader AP narrative about pre-European Indian Ocean commerce: when da Gama arrived at Malindi (Kenya) in 1498, he encountered an existing commercial civilization integrated into Indian Ocean networks for centuries, that had hosted Chinese fleets decades earlier, and that was commercially more sophisticated than his small Portuguese fleet. European "discovery" of East Africa was discovery of somewhere that was already well-connected to the rest of the world.'},
        {'q': 'The contrast between China\'s haijin (maritime prohibition policies) and European expansion demonstrates which AP theme?',
         'correct': 'State policies can decisively accelerate or retard historical processes that technology and commercial opportunity make possible — China\'s periodic bans on private maritime trade ceded maritime commerce to other powers; European states\' active sponsorship of exploration accelerated it; demonstrating that political will, not just capability, shapes historical trajectories',
         'others': ['Maritime prohibitions had no impact on Chinese commercial development', 'European states also had maritime prohibition policies similar to China\'s', 'Technology alone, not state policy, determines maritime commercial success'],
         'exp': 'Chinese maritime prohibition policy (haijin) is AP\'s clearest example of how states can retard development that private actors would otherwise pursue. When China periodically banned maritime trade (as it did in the 15th-16th centuries), Chinese merchants continued trading illegally or through Southeast Asian intermediaries — demonstrating both the commercial demand and the state\'s ability to partially suppress it. The comparison to active European state sponsorship of exploration shows opposite ends of the state policy spectrum.'},
        {'q': 'For AP, the most important significance of Zheng He\'s voyages is:',
         'correct': 'They demonstrate that Chinese maritime capability significantly exceeded European capability in the early 15th century, making the subsequent divergence — China withdrawing from maritime expansion while Europe extended it — a product of political choices rather than technological or geographic necessity, challenging any deterministic narrative of European global dominance',
         'others': ['The voyages are significant because they were the first maritime expeditions in history', 'Zheng He\'s voyages are primarily significant as examples of Chinese commercial expansion', 'The voyages demonstrate that China was always inferior to Europe in maritime technology'],
         'exp': 'The meta-significance of Zheng He for AP: his voyages undermine any argument that European global dominance was technologically or geographically inevitable. In 1405-1433, China had larger ships, larger fleets, and was exploring farther than any European state. The divergence that followed was politically constructed — China\'s political withdrawal and Europe\'s political investment in exploration — not a natural expression of inherent capabilities. AP rewards arguments that recognize historical contingency against historical inevitability.'}
     ]
    ),
    (5, 'whiot5', 'Portuguese Entry and Disruption of Indian Ocean Trade',
     'Vasco da Gama\'s arrival in the Indian Ocean (1498) and the subsequent Portuguese Estado da India attempted to insert European military force into existing commercial networks. AP questions evaluate whether the Portuguese "disrupted" or "transformed" Indian Ocean trade and compare Portuguese methods to Chinese methods in the same region.',
     '''## 📖 Portuguese Entry into the Indian Ocean

> **Vasco da Gama\'s First Voyage (1498)**

Da Gama\'s arrival at Calicut (Kozhikode, India) revealed both Portuguese opportunity and limitations:

- Portuguese carried cheap trade goods appropriate for West Africa but not valued in India
- Indian merchants offered to trade only for gold and silver — not European manufactures
- Portuguese were militarily aggressive; fired on Indian ships to establish presence
- Da Gama returned to Portugal with spices worth 60x the voyage cost despite poor trading relationships

> **Estado da India: The Portuguese Commercial Empire**

Portugal built a trading-post empire using military force:

| Element | Details |
|---------|---------|
| **Cartaz system** | Required Indian Ocean ships to carry Portuguese "passes"; pay protection fee or be attacked |
| **Key fortresses** | Goa (1510), Malacca (1511), Hormuz (1515), Aden (attempted, failed) |
| **Method** | Patrol Indian Ocean sea routes; attack ships without cartaz; tax trade passing through controlled ports |
| **Revenue** | Charged 6-10% of cargo value for cartaz |

> **Limits of Portuguese Power**

Portugal\'s disruption of Indian Ocean trade was real but incomplete:

- **Never controlled Red Sea or Persian Gulf fully:** Aden resisted Portuguese conquest; spice trade through Ottoman-controlled routes continued
- **Could not stop private trade:** Enormous ocean meant many ships evaded Portuguese patrols
- **Indian Ocean merchants adapted:** Shifted routes, bribed officials, traded covertly
- **Population constraint:** Portugal had only ~1-2 million people; could not administer vast territories
- **Replaced by Dutch/British:** By 17th century, Dutch VOC and British East India Company took over

> **AP Comparison Anchor**

- **Portuguese vs. Zheng He:** Both entered Indian Ocean from Asia\'s edges; Zheng He came for tribute/diplomacy; Portuguese came for commercial profit via military coercion; fundamentally different goals and methods
- **Portuguese "disruption" vs. "transformation":** Trade continued; spice trade volume actually increased in 16th century; Portuguese redirected some trade through their own routes but did not stop trade''',
     [
        {'q': 'The Portuguese cartaz system\'s most significant feature was:',
         'correct': 'It inserted military coercion into an existing voluntary commercial system — requiring merchants who had traded freely for centuries to pay protection fees backed by threats of violence, transforming a commercial relationship into a protection racket and introducing European colonial logic into the Indian Ocean',
         'others': ['The cartaz system provided genuine protection from piracy that merchants valued', 'Merchants willingly paid cartaz fees because they were commercially advantageous', 'The cartaz system was limited to Portuguese-flagged ships and did not affect other merchants'],
         'exp': 'The cartaz is the moment when the Indian Ocean\'s voluntary commercial character changes: before Portuguese arrival, merchants paid for goods, services, and harbor fees in a commercial relationship; after Portuguese arrival, merchants paid for permission to continue trading they had done freely before — backed by violence if they refused. This transformation of commercial relationship into protection racket is the defining feature of early European involvement in Asian commerce.'},
        {'q': 'Portuguese conquest of Malacca (1511) was strategically significant because:',
         'correct': 'Malacca controlled the strait through which virtually all Southeast Asian spice trade had to pass — controlling it meant inserting Portuguese military force into the single chokepoint of the most valuable trade routes in the Indian Ocean, redirecting spice revenue through Portuguese-controlled channels',
         'others': ['Malacca was captured because it was a major military base threatening Portuguese operations', 'Malacca\'s conquest had no commercial significance — it was purely strategic', 'Malacca was unimportant to spice trade before Portuguese conquest'],
         'exp': 'The Malacca conquest follows Portuguese strategic logic: find the chokepoints of existing trade routes and place military force at those points. The Malacca Strait was the bottleneck through which nutmeg, cloves, and pepper from the Moluccas had to pass to reach Indian and Chinese markets. Controlling it meant extracting revenue from the most valuable commodity flows in the Indian Ocean. The fall of Malacca, however, dispersed the multicultural merchant community and pushed trade through alternative routes — demonstrating the limits of chokepoint strategy.'},
        {'q': 'The limits of Portuguese power in the Indian Ocean (inability to control Red Sea, Aden, Persian Gulf) demonstrate:',
         'correct': 'A small European state with ~1-2 million people could insert military force into key chokepoints and extract significant revenue from existing trade, but could not replace or fully control an enormous commercial network sustained by multiple powerful civilizations — Portuguese power was real but always partial and contested',
         'others': ['Portugal succeeded in completely monopolizing all Indian Ocean trade by 1550', 'Portuguese limitations were purely technological — better ships would have allowed complete control', 'Portugal voluntarily chose not to control the Red Sea and Persian Gulf routes'],
         'exp': 'Portuguese power\'s limits are as important as its reach: Aden (Red Sea entry) resisted Portuguese conquest; the Persian Gulf remained contested; Ottoman control of Egypt enabled continued Mediterranean spice trade alongside Portuguese routes. The Indian Ocean was simply too large and its commercial networks too resilient for a state of 1-2 million people to control. This lesson — that colonial coercion is always partial and generates resistance — is an AP meta-theme.'},
        {'q': 'Indian Ocean trade volume actually increased in the 16th century despite Portuguese disruption. What does this demonstrate?',
         'correct': 'Portuguese disruption rerouted some trade through Portuguese-controlled channels and added protection fees as costs, but the underlying commercial demand (European and Asian appetite for spices, textiles, and luxury goods) was strong enough that total trade continued growing despite new extraction costs — demonstrating that commercial demand can overwhelm coercive attempts to restrict trade',
         'others': ['Total Indian Ocean trade declined permanently after Portuguese arrival', 'Portuguese monopoly completely replaced all non-European merchants in the Indian Ocean', 'The volume increase means Portuguese arrival had no negative impact on any participants'],
         'exp': 'This nuance is important for AP: Portuguese "disruption" did not destroy Indian Ocean commerce — it imposed additional costs (protection fees, rerouting costs) on existing commercial flows while redirecting some revenue to Portuguese coffers. Arab, Indian, and Malay merchants adapted, found alternative routes, and continued trading. The underlying commercial complementarities (Indian cotton for Southeast Asian spices) were stronger than Portuguese military power. "Disruption" was real but incomplete.'},
        {'q': 'Comparing da Gama\'s arrival in India to Zheng He\'s earlier visits to Indian Ocean ports reveals:',
         'correct': 'Both arrived at the same commercial civilization with enormous disparities in fleet size (Chinese fleet vastly larger), but with opposite goals: Zheng He sought diplomatic acknowledgment within existing commercial relationships; da Gama sought commercial profit through military coercion that would transform existing relationships — the methods were as different as the outcomes they produced',
         'others': ['Both da Gama and Zheng He had identical commercial and diplomatic goals', 'Zheng He\'s fleet was smaller than da Gama\'s and less capable', 'Indian Ocean merchants responded identically to both Chinese and Portuguese arrival'],
         'exp': 'This comparison directly addresses AP\'s central counterfactual about Chinese and European Indian Ocean engagement. Zheng He came with more ships, larger ships, and more resources — but with tribute mission goals that reinforced existing relationships. Da Gama came with fewer, smaller ships — but with commercial coercion goals that transformed existing relationships. The different goals, not the different capabilities, explain the different historical consequences.'},
        {'q': 'Dutch and English East India Companies replacing Portuguese Estado da India in the 17th century demonstrates:',
         'correct': 'Colonial commercial competition among European states was as significant as competition between Europeans and Asians — the Portuguese were displaced from Indian Ocean dominance not by Asian resistance but by more efficiently organized Dutch and English joint-stock companies, demonstrating that European colonial systems competed with each other as well as with their Asian targets',
         'others': ['Indian Ocean Asian merchants successfully expelled all European powers by 1600', 'Portuguese power in the Indian Ocean lasted until the 19th century', 'Dutch and English companies adopted completely different methods from the Portuguese Estado da India'],
         'exp': 'The Portuguese-Dutch-British succession in the Indian Ocean demonstrates intra-European colonial competition: the Dutch VOC and British East India Company used joint-stock financing (private capital pooling rather than state financing) and more efficient administrative models to outcompete the Portuguese Estado da India. The Asian merchants they were competing with and extracting from were largely unchanged — the change was in which European power extracted revenue from them.'},
        {'q': 'For AP, which argument best evaluates Portuguese impact on Indian Ocean trade?',
         'correct': 'Portuguese entry into the Indian Ocean partially disrupted but did not transform the network\'s fundamental character: the cartaz system added coercive extraction costs and rerouted some trade through Portuguese-controlled ports, but the underlying commercial complementarities (Asian goods, multiple commercial civilizations) continued functioning; the most significant long-term change was establishing the model of European coercive extraction that Dutch and British East India Companies would later intensify',
         'others': ['Portuguese arrival completely destroyed the pre-existing Indian Ocean trade network', 'Portuguese arrival had no significant impact on Indian Ocean commercial patterns', 'Portuguese arrival improved Indian Ocean trade by introducing more efficient commercial methods'],
         'exp': 'Nuanced evaluation is the AP goal: not "Portuguese destroyed trade" (trade volume increased) and not "Portuguese had no impact" (cartaz coercion was real; chokepoint control redirected revenue). The accurate assessment is "partial disruption with lasting consequence" — the consequence being the establishment of European coercive commercial presence as a permanent feature of Indian Ocean trade that would be intensified by later European powers. This is the foundation of the colonial trading empires of the 17th-19th centuries.'}
     ]
    ),
    (6, 'whiot6', 'Indian Ocean Trade\'s Cultural Consequences',
     'Indian Ocean trade transmitted not just goods but religions (Islam, Hinduism, Buddhism), languages, technologies, and cultural practices across Africa, the Middle East, South Asia, and Southeast Asia for centuries. AP questions evaluate the cultural consequences of this commerce and how trade-based cultural exchange differed from conquest-based cultural change.',
     '''## 📖 Cultural Consequences of Indian Ocean Trade

> **Islam Spreading Through Trade**

| Region | How Islam Arrived | When |
|--------|-----------------|------|
| **Southeast Asia** | Arab and Indian Muslim merchants; adoption by rulers for commercial advantages | c. 11th-16th centuries |
| **East Africa (Swahili)** | Arab merchants settling in coastal ports; intermarriage | c. 9th-12th centuries |
| **India** | Pre-existing; Arab trade connections reinforced Islamic presence in coastal India | Ongoing |
| **Malabar Coast (SW India)** | Arab merchants settled; created Muslim community (Mappila/Moplah) | c. 8th century CE |

> **Hinduism and Buddhism in Southeast Asia**

Before Islam, Indian cultural influence shaped Southeast Asian civilizations:

- **Sanskrit:** Spread to Southeast Asia via Indian merchants and Brahmin priests hired by local rulers
- **Hinduism:** Angkor Wat (Cambodia) built as Hindu temple complex (12th century) before Buddhist conversion
- **Buddhism:** Theravada Buddhism spread from Sri Lanka and mainland India to mainland Southeast Asia; Mahayana via China to East Asia
- **"Indianization" of Southeast Asia:** Local rulers adopted Indian court culture, Hindu/Buddhist religion, Sanskrit writing as prestige markers

> **Material Culture Exchange**

Trade transmitted technologies and goods that transformed cultures:

- **Cotton textiles:** Indian cotton spread clothing technology across Indian Ocean world
- **New food crops:** Southeast Asian spices → global cuisine; Southeast Asian bananas, taro → East Africa
- **Technologies:** Iron-smelting, boat-building techniques, agricultural methods
- **Languages:** Arabic loanwords in Swahili (50%+ vocabulary); Sanskrit loanwords across Southeast Asian languages

> **AP Comparison Anchor**

- **Indian Ocean cultural exchange vs. Silk Road cultural exchange:** Both transmitted Buddhism, Islam, technology; Indian Ocean was more diffuse (multiple vectors: merchants, intermarriage, diplomatic exchange); Silk Road more focused on luxury goods with cultural transmission as secondary effect
- **Trade-based vs. conquest-based cultural change:** Indian Ocean trade produced more syncretic, voluntary cultural change; Mongol conquest or Spanish colonialism produced more forced cultural disruption''',
     [
        {'q': 'The "Indianization" of Southeast Asia (adoption of Sanskrit, Hinduism, Buddhist practices by Southeast Asian rulers) demonstrates:',
         'correct': 'How prestige-seeking local elites can voluntarily adopt elements of culturally sophisticated trading partners\' civilization when doing so provides political legitimacy, commercial access, and administrative tools — Indian cultural influence in Southeast Asia was adopted by local rulers as a resource, not imposed by Indian military conquest',
         'others': ['Indian culture spread to Southeast Asia through military conquest', 'Southeast Asian rulers adopted Indian culture with no agency or choice', 'Hinduism and Buddhism spread to Southeast Asia without any commercial connections'],
         'exp': 'The voluntary character of Indianization is AP-essential: Indian merchants and Brahmin priests hired by local rulers transmitted Sanskrit, Hindu ritual, and Buddhist practice to Southeast Asian courts. Local rulers adopted these cultural elements because they provided prestige (Hindu/Buddhist kingship ideology justified royal power), administrative tools (Sanskrit writing), and commercial connections (Hindu/Buddhist merchant networks). This was cultural exchange driven by local elite agency, not colonial imposition.'},
        {'q': 'The Swahili language\'s linguistic character (Bantu grammar + Arabic vocabulary) demonstrates:',
         'correct': 'How trade-contact cultural exchange produces new hybrid languages and identities: the Bantu-speaking East African coastal populations retained their grammatical structures (foundational identity) while adopting Arabic vocabulary (the language of commercial partners and religious practice), creating a new language that reflected both cultural foundations',
         'others': ['Swahili was created by Arab colonizers who eliminated the Bantu language', 'Arabic completely replaced Bantu languages along the East African coast', 'Swahili is simply a dialect of Arabic with no Bantu elements'],
         'exp': 'Swahili\'s hybrid linguistic character is a model of trade-contact cultural synthesis: Bantu grammar (the language of the indigenous population) + Arabic vocabulary (the language of Islamic commercial partners) = a new language that is neither simply Bantu nor simply Arabic. This pattern — indigenous structural foundation + commercial-partner vocabulary — is characteristic of how languages evolve through trade contact. It demonstrates that cultural exchange is rarely one-sided replacement but more often selective synthesis.'},
        {'q': 'Angkor Wat (Cambodia), built as a Hindu temple complex in the 12th century before the region\'s conversion to Buddhism, demonstrates:',
         'correct': 'The layered character of religious change through Indian Ocean trade — multiple waves of Indian cultural influence (Hindu followed by Buddhist) reached Southeast Asia sequentially, each leaving traces in architectural and cultural forms, producing syncretic traditions that combined elements of both rather than completely replacing each other',
         'others': ['Angkor Wat demonstrates that Buddhism preceded Hinduism in Southeast Asia', 'Indian military conquest imposed Hinduism on Cambodia', 'Angkor Wat\'s Hindu character was coincidental with no connection to Indian Ocean trade'],
         'exp': 'Angkor Wat\'s religious history — Hindu temple complex (12th century) → Buddhist complex (conversion c. 14th century) — illustrates the layered character of Southeast Asian religious history: Hinduism came first through Indian Ocean contacts; Theravada Buddhism came later. The complex\'s physical structures preserve both religious layers simultaneously, as subsequent kings added Buddhist imagery to the existing Hindu structure rather than destroying it. This preservation of layers is characteristic of trade-contact cultural change.'},
        {'q': 'The spread of Southeast Asian food crops (bananas, taro, yams) to East Africa via Indian Ocean trade demonstrates:',
         'correct': 'That Indian Ocean trade transmitted agricultural knowledge and crops alongside commercial goods, fundamentally changing African food systems — Southeast Asian crops adapted to tropical African conditions, spread inland from coastal trading ports, and became staples in the African interior centuries before European contact',
         'others': ['East African agriculture was independent of Indian Ocean trade with no outside plant imports', 'Southeast Asian crops reached East Africa only after European colonial introduction', 'Food crop exchange was a minor consequence of Indian Ocean trade compared to spice trade'],
         'exp': 'The agricultural dimension of Indian Ocean cultural exchange is often underemphasized but historically significant: Southeast Asian crops (bananas, taro) adapted extremely well to tropical African conditions and spread inland from coastal trading centers, becoming nutritional staples across East and Central Africa. This plant exchange preceded the Columbian Exchange by centuries and demonstrates that Indian Ocean trade transformed African agricultural systems long before European contact.'},
        {'q': 'Trade-based cultural change (Indian Ocean) compared to conquest-based cultural change (Mongol conquest, Spanish colonialism) reveals:',
         'correct': 'Trade-based cultural exchange typically produced more syncretic, voluntary outcomes — local peoples selectively adopted elements of trading partners\' cultures while maintaining indigenous foundations — while conquest-based change involved more forced transformation, systematic destruction of existing cultural practices, and imposition of conquerors\' cultural norms',
         'others': ['Trade-based and conquest-based cultural change had identical outcomes', 'Conquest-based cultural change was always more respectful of indigenous cultures than trade-based change', 'Trade-based cultural exchange always involved the complete replacement of indigenous cultures'],
         'exp': 'The trade vs. conquest distinction is AP\'s key framework for analyzing cultural change mechanisms. Indian Ocean trade produced Swahili culture (Bantu + Arabic synthesis), Hindu-Buddhist-then-Islamic Southeast Asian cultures, and Mappila Muslim communities (Arab + Indian synthesis) — all voluntary syntheses reflecting local agency. Spanish colonialism produced forced conversion, systematic destruction of indigenous religious practices, and the casta system. Both are "cultural exchange" — but fundamentally different in character, agency, and outcome.'},
        {'q': 'For AP, comparing Islamic spread through Indian Ocean trade (Southeast Asia, East Africa) to Islamic spread through military conquest (Middle East, Central Asia) reveals:',
         'correct': 'Islam adapted to different spreading mechanisms: trade-diffused Islam (Southeast Asia, Swahili coast) was more syncretic and accommodating of pre-existing practices (Hindu-Islamic hybrid cultures in Java; African communal traditions in Swahili Islam) while conquest-diffused Islam was sometimes more orthodox in its imposition, demonstrating that the same religion produces different local expressions depending on how it arrives',
         'others': ['Islam spread identically regardless of whether it arrived through trade or conquest', 'Trade-diffused Islam was always more orthodox than conquest-diffused Islam', 'Islam spread through the Indian Ocean only through conquest, not through trade'],
         'exp': 'The comparison between trade-Islam and conquest-Islam is an AP sophistication point: Indonesian Islam (arrived via trade) is generally more syncretic and less strictly orthodox than Arabian or Egyptian Islam (homeland); Swahili Islam blended African communal practices with Islamic devotional practice. This doesn\'t mean trade-Islam is "better" — it means the mechanism of transmission shapes the form of the religion that develops. Understanding how context shapes religious expression demonstrates AP analytical sophistication.'},
        {'q': 'An AP question asks: "How did Indian Ocean trade transform cultural practices across the connected regions?" Which response demonstrates the strongest analysis?',
         'correct': 'Indian Ocean trade transformed cultural practices through multiple mechanisms: religions (Islam, Hinduism, Buddhism) spread along commercial networks; languages adopted vocabulary from trading partners (Swahili); architectural styles spread through cultural adoption (Angkor Wat); and agricultural practices changed through crop diffusion — producing a set of interconnected but distinct syncretic cultures around the Indian Ocean rim that were neither purely indigenous nor purely imported',
         'others': ['Indian Ocean trade replaced all indigenous cultures with a uniform commercial culture', 'Trade had no significant cultural consequences — only commercial exchange occurred', 'Cultural transformation only happened in one direction — from India to its trading partners'],
         'exp': 'Full AP credit: multiple specific mechanisms (religion, language, architecture, agriculture), specific evidence (Swahili, Angkor Wat, crop diffusion), the multi-directional character (not one-way from India), and the synthesis outcome (distinct syncretic cultures rather than uniform replacement). AP rewards analysis that identifies mechanisms, uses specific evidence, and recognizes complexity rather than describing cultural change as a simple, uniform process.'}
     ]
    ),
    (7, 'whiot7', 'AP Review and Exam Mastery',
     'Indian Ocean trade content appears in AP MCQ, SAQ, LEQ, and DBQ questions focusing on trade network structure, cultural consequences, Portuguese disruption, and comparison with other trade networks (Silk Road, Atlantic). Mastering specific evidence and comparative frameworks is essential for high AP scores.',
     '''## 📖 AP Review: Indian Ocean Trade Networks

> **Must-Know Vocabulary**

- **Monsoon winds** — Seasonal reversing winds enabling predictable Indian Ocean navigation
- **Dhow** — Arab sailing ship with lateen sails; backbone of western Indian Ocean trade
- **Cartaz** — Portuguese protection pass; Indian Ocean ships required to pay fee or be attacked
- **Estado da India** — Portuguese Indian Ocean trading-post empire
- **Swahili city-states** — East African coastal trading cities; Kilwa, Mombasa, Sofala; Bantu + Arab/Islamic culture
- **Zheng He** — Chinese Muslim admiral; led 7 Indian Ocean expeditions 1405-1433; discontinued after 1433
- **Malacca Sultanate** — Major Southeast Asian entrepôt; adopted Islam c. 1400; Portuguese conquered 1511
- **Suftaja** — Arab letter of credit enabling long-distance trade without carrying cash
- **Mudaraba** — Arab silent partnership contract enabling investment in trading ventures
- **Indianization** — Southeast Asian adoption of Indian court culture, religion, and Sanskrit

> **Common AP Prompt Patterns**

- **Comparison:** Compare Indian Ocean and Silk Road trade networks c. 1200-1450
- **Causation:** What factors enabled and sustained Indian Ocean trade before European arrival?
- **CCOT:** How did Indian Ocean trade networks change c. 1450-1750 with European entry?
- **Evaluation:** Evaluate the extent to which Portuguese arrival disrupted Indian Ocean trade
- **Complexity:** How did Indian Ocean trade produce cultural change in East Africa, Southeast Asia, and India?

> **AP Comparison Quick Reference**

| Feature | Indian Ocean (pre-1500) | Silk Road | Atlantic (post-1492) |
|---------|------------------------|-----------|---------------------|
| Participants | Arab, Indian, Malay, Chinese, Swahili | Chinese, Central Asian, Persian, European | European, African, American |
| Organization | Polycentric; voluntary | Multiple intermediaries | European-dominated; coercive |
| Primary goods | Cotton, spices, gold, porcelain | Silk, horses, glassware | Silver, sugar, enslaved people |
| Cultural transmission | Islam, Hinduism, Buddhism, languages | Buddhism, Islam, technology | Christianity (forced), crop exchange |
| Labor character | Free merchant sailors | Caravan traders | Enslaved laborers (Atlantic) |''',
     [
        {'q': 'An AP SAQ asks: "Briefly explain ONE way that Indian Ocean trade promoted cultural change." Which response earns full credit?',
         'correct': 'Arab Muslim merchants\' settlement in Indian Ocean trading ports spread Islam to East Africa and Southeast Asia — local rulers converted to facilitate commercial relationships with Muslim merchant networks, creating new Islamic communities (Swahili coast, Malay world) that blended Islamic practice with indigenous cultural traditions in a trade-driven form of religious syncretism',
         'others': ['Listing multiple ways without developing any single one with evidence and reasoning', 'Describing commercial exchange without connecting it to cultural change', 'Arguing Islam spread only through military conquest with no trade mechanism'],
         'exp': 'Full SAQ credit: claim (Arab merchants spread Islam) + evidence (Swahili coast, Malay world) + reasoning (commercial incentive → conversion + syncretism). One specific mechanism developed thoroughly with evidence. The response also adds analytical depth by noting the syncretic character of trade-Islam, demonstrating understanding beyond simple cause-and-effect.'},
        {'q': 'For an AP LEQ comparing Indian Ocean and Silk Road trade networks, which thesis earns the highest score?',
         'correct': 'Both the Indian Ocean and Silk Road trade networks transmitted goods, religions, and technologies across vast distances from c. 600-1450, but their different organizational structures produced different cultural consequences: the Indian Ocean\'s maritime polycentric character created syncretic cultures through sustained mercantile contact; the Silk Road\'s overland caravan character moved fewer and more expensive goods with less sustained cultural interaction, making Buddhism\'s spread along the Silk Road more deliberate (missionaries) while Indian Ocean Islam spread more organically through commercial contact',
         'others': ['Both networks were identical in goods, organization, and cultural consequences', 'The Silk Road transmitted more goods than the Indian Ocean with greater cultural impact', 'The two networks were completely separate with no overlap or connection'],
         'exp': 'This thesis earns full AP credit: acknowledges both similarity (goods, religion, technology transmission) and meaningful difference (organizational structure, cultural mechanism), explains the cause of the difference (maritime polycentric vs. overland caravan), and uses specific evidence (Buddhism via Silk Road missionaries; Islam via Indian Ocean merchants). AP comparison theses should explain WHY differences exist, not just identify them.'},
        {'q': 'A DBQ document from a 14th-century Arab merchant describes Indian Ocean trade routes. What is the most sophisticated sourcing analysis?',
         'correct': 'An Arab merchant writing in the 14th century had direct commercial experience of Indian Ocean routes (source of specific geographic and commercial knowledge) but also commercial interests that would shape which routes and which participants he emphasized — his account reveals both the objective features of the network and the perspective of one of its Arab participants, who might underestimate or fail to mention the roles of Indian, Malay, or Chinese merchants',
         'others': ['An Arab merchant\'s account is completely objective because merchants have no political interests', 'The account is worthless because Arab merchants were biased in favor of Arab commerce', 'Sourcing analysis is unnecessary for medieval commercial documents'],
         'exp': 'Sophisticated sourcing identifies both what the document reveals (direct commercial knowledge from participation) and what it might obscure (the perspectives and roles of non-Arab participants). An Arab merchant writing about "his" trade routes might naturally center Arab commercial practices and underrepresent the roles of Indian Gujarati merchants, Malay sailors, or Chinese junks. The document is both valuable evidence AND shaped by its author\'s perspective — both dimensions earn AP credit.'},
        {'q': 'For AP analysis, the most significant comparison between Indian Ocean trade and Atlantic trade is:',
         'correct': 'The Indian Ocean trade was organized around voluntary commercial exchange among multiple roughly equal participants without a single hegemonic power, while the Atlantic trade was structured around European military coercion and forced African labor — demonstrating that "global trade" can be organized on fundamentally different principles with fundamentally different human consequences',
         'others': ['Both networks were equally coercive and exploitative', 'The Atlantic trade was more voluntary than the Indian Ocean trade', 'The two networks are too different to compare meaningfully'],
         'exp': 'This comparison is AP\'s most important point about the two trade networks: they were not just "big" and "bigger" versions of the same thing but fundamentally different organizational structures. Indian Ocean: polycentric, voluntary, multiple participants. Atlantic: European-dominated, coercive, built on forced labor. The comparison demonstrates that "trade" and "exchange" are not inherently exploitative — the Atlantic trade\'s exploitation was a specific historical construction, not an inevitable feature of commerce.'},
        {'q': 'What does Zheng He\'s withdrawal combined with Portuguese expansion during the same period (1430s-1490s) demonstrate for AP?',
         'correct': 'The same global commercial opportunity (Indian Ocean spice and luxury trade) was available to both Chinese and Portuguese states simultaneously, but opposite political decisions (China withdrawing; Portugal intensifying exploration) produced opposite outcomes — demonstrating that historical change is contingent on political choices, not predetermined by geography, technology, or commercial conditions alone',
         'others': ['Chinese withdrawal was economically rational while Portuguese expansion was irrational', 'The two developments were entirely unrelated with no meaningful connection', 'Geography predetermined that Europe rather than China would dominate Indian Ocean trade'],
         'exp': 'This comparison is the ultimate argument for historical contingency in AP World History: no geographic or technological determinism explains why Europe rather than China dominated the Indian Ocean in the 16th century. The explanation is political: China made a political decision to withdraw; European states made political decisions to invest in exploration. The same commercial opportunities, different political responses, different historical outcomes. AP rewards arguments that recognize this contingency.'},
        {'q': 'An AP CCOT on Indian Ocean trade c. 1450-1750 should identify which as the most significant change?',
         'correct': 'The most significant change was the insertion of European military coercion (Portuguese cartaz system, Dutch and British East India Companies) into a previously voluntary commercial network — transforming the organizational character of Indian Ocean trade from polycentric voluntary exchange to partially European-dominated coercive extraction, while the underlying commercial demand and many Asian commercial networks continued functioning',
         'others': ['Indian Ocean trade ceased entirely with European arrival', 'The most significant change was the introduction of new commodities that the network had never previously carried', 'There was no significant change — Indian Ocean trade was identical before and after European arrival'],
         'exp': 'CCOT analysis requires identifying the most historically significant change (not just any change): the insertion of coercive European commercial power into an existing voluntary network is the transformative change because it established the model for colonial commercial empire that would intensify over the next three centuries. The continuity — Asian merchants, monsoon navigation, same commodities — is also important: European coercion was imposed on top of existing networks, not instead of them.'},
        {'q': 'Which AP principle is most powerfully demonstrated by studying Indian Ocean trade networks from c. 1000-1750?',
         'correct': 'Long-distance commerce produces cultural transformation — the same networks that moved cotton, spices, and porcelain across the Indian Ocean also transmitted Islam, Hinduism, Buddhism, agricultural crops, languages, and architectural forms, demonstrating that trade and culture are inseparable: commercial contact is always also cultural contact, and commercial networks are always also cultural networks',
         'others': ['Trade and culture are completely separate phenomena with no connection', 'Cultural change only occurs through military conquest, not through trade', 'The Indian Ocean is too geographically specific to demonstrate any broader historical principles'],
         'exp': 'The meta-lesson of Indian Ocean trade: the artificial distinction between "commercial history" and "cultural history" is historically misleading. The same dhows that carried Indian cotton also carried Arab merchants who married into East African communities and introduced Islamic practice. The same Gujarati merchants who traded cloth in Southeast Asia also introduced Hindu temple architecture. Commerce and culture moved together because merchants were human beings, not cargo — and human contact always involves cultural exchange alongside commercial exchange.'}
     ]
    ),
]

for pnum, id_pre, subtitle, key_concept, content_body, questions in parts:
    w(f'{SLUG}-part{pnum}.ts', make_file(pnum, id_pre, subtitle, key_concept, content_body, questions))

print("All Indian Ocean trade parts done!")
