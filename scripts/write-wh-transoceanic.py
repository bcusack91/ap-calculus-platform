#!/usr/bin/env python3
"""Write wh-transoceanic parts 2-7."""
import os

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    'src', 'data', 'interactive-lessons')

def w(filename, content):
    with open(os.path.join(base, filename), 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

SLUG = 'wh-transoceanic'
EXPORT = 'whTransoceanicPart'

def mc(qd):
    opts = [qd['correct']] + qd['others'][:3]
    lines = '\n'.join([f"              '{o}'," for o in opts])
    return f"""          {{
            question: '{qd['q']}',
            options: [
{lines}
            ],
            correctAnswer: 0,
            explanation: '{qd['exp']}'
          }}"""

def dd_block(label, opts):
    lines = '\n'.join([f"            '{o}'," for o in opts])
    return f"""          {{
            label: '{label}',
            options: [
{lines}
            ]
          }}"""

def make(pnum, id_pre, subtitle, key, body, qs, dl, do_, dc, hints, dexp):
    dd_str = ',\n'.join([dd_block(dl[i], do_[i]) for i in range(3)])
    corr = '\n'.join([f"          '{c}'," for c in dc])
    return f"""export const {EXPORT}{pnum}Data = {{
  topicSlug: '{SLUG}',
  sections: [
    {{
      id: '{id_pre}-intro',
      type: 'text' as const,
      content: `
# 🌍 Transoceanic Interconnections

**Part {pnum} of 7 — {subtitle}**

---

> 🔑 **Key Concept:** {key}
      `
    }},
    {{
      id: '{id_pre}-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {{
        questions: [
{mc(qs[0])},
{mc(qs[1])}
        ]
      }}
    }},
    {{
      id: '{id_pre}-content',
      type: 'text' as const,
      content: `
{body}
      `
    }},
    {{
      id: '{id_pre}-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {{
        questions: [
{mc(qs[2])},
{mc(qs[3])},
{mc(qs[4])}
        ]
      }}
    }},
    {{
      id: '{id_pre}-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {{
        dropdowns: [
{dd_str}
        ],
        correctAnswers: [
{corr}
        ],
        hint1: '{hints[0]}',
        hint2: '{hints[1]}',
        hint3: '{hints[2]}',
        explanation: '{dexp}'
      }}
    }},
    {{
      id: '{id_pre}-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {{
        questions: [
{mc(qs[5])},
{mc(qs[6])}
        ]
      }}
    }}
  ]
}}
"""

parts = [
    dict(pnum=2, id_pre='whtrans2',
         subtitle='Steam-Powered Transportation: Railroads and Steamships',
         key='Steam-powered transportation (railroads 1825+; steamships 1820s+) shrank the effective size of the world by dramatically reducing travel time and costs, enabling mass migration, commodity trade, military deployment, and imperial expansion at unprecedented scale. AP questions analyze how transportation technology changed global economic integration, compare its effects on different world regions, and evaluate the relationship between transportation and imperialism.',
         body='''## 📖 Steam-Powered Transportation

> **The Railroad Revolution**

| Period | Development | Global Impact |
|--------|-----------|--------------|
| **1825** | First steam railway (Stockton-Darlington, Britain) | Proof of concept |
| **1830s-1850s** | British railroad network built | Connected industrial regions; reduced freight costs 90% |
| **1850s-1880s** | Continental European, American railroads | Transcontinental USA (1869); integrated national markets |
| **1860s-1900** | Colonial railroads | British India (66,000 km by 1900); Africa; Latin America; opened interiors to extraction |

> **The Steamship Revolution**

- **1807:** Robert Fulton\'s Clermont — first commercial steam-powered riverboat (Hudson River)
- **1838:** First steam-powered Atlantic crossing (SS Sirius; SS Great Western)
- **1870s-1880s:** Compound steam engine + steel hulls dramatically reduced coal consumption
- **Result:** Steamships more reliable than sailing ships; faster; larger cargo capacity; not dependent on winds
- **Suez Canal (1869):** Combined with steamships to cut Europe-Asia shipping time by 40%

> **Economic Consequences of Transportation**

- **Freight cost collapse:** Railroad and steamship together reduced long-distance freight costs by 80-90% (1850-1900)
- **Commodity price integration:** Wheat prices in Chicago and Liverpool converged; global commodity markets emerged
- **Mass migration:** Cheap steamship passage made mass emigration economically viable for poor emigrants
- **Refrigerated shipping (1880s):** Allowed meat, dairy, and fruit to be shipped globally — Australian beef in British markets; Argentine mutton; New Zealand lamb

> **Transportation and Imperialism**

- **Military deployment:** Armies could be moved rapidly by railroad and steamship to suppress revolts or conquer territories
- **Economic extraction:** African and Asian interior resources accessible via railroads built specifically for export
- **Administrative control:** Colonial officials could be deployed and recalled quickly; news traveled fast
- **AP consequence:** Transportation technology was not neutral — it was built to serve imperial economic and political interests, which shaped its geographic pattern (railroads to ports for export, not cross-country for internal development)''',
         qs=[
             {'q': 'The completion of the transcontinental railroad (USA, 1869) and its connection to the transcontinental telegraph (1861) demonstrates:',
              'correct': 'Transportation and communication technologies together produced a new kind of integrated national economy — the railroad moved goods and people across the continent in days rather than months, while the telegraph transmitted price information instantaneously, enabling commodity markets to integrate (Chicago grain prices reflecting New York demand in real time) and coordinated business operations at continental scale for the first time',
              'others': ['The transcontinental railroad and telegraph had separate effects with no economic interaction', 'The transcontinental railroad was primarily a military achievement with no economic significance', 'Telegraph communication made railroads economically unnecessary by substituting for physical transportation'],
              'exp': 'Technology synergy producing economic integration is AP\'s analytical framework: neither technology alone produced integrated national markets — the railroad could move goods but couldn\'t coordinate supply and demand across distances; the telegraph could communicate prices but couldn\'t move goods. Together they enabled the modern commodity market: merchants in Chicago could receive New York wheat prices by telegraph, ship grain by railroad, and coordinate transactions over hundreds of miles in hours. The result was price convergence (commodity prices in different cities becoming similar) — evidence of market integration that would have been impossible without both technologies.'},
             {'q': 'Colonial railroads in British India and Africa were built in a geographic pattern (to ports, not across regions) that demonstrates:',
              'correct': 'Colonial transportation infrastructure was designed to serve imperial economic extraction rather than colonial economic development — railroads connected resource-producing interiors to coastal export ports, moving raw materials outward for metropolitan manufacturing; they did not connect colonial regions to each other or build the internal market integration that industrial economies required, leaving a geographic infrastructure legacy that continued to shape economic patterns after independence',
              'others': ['Colonial railroads were designed to promote internal colonial economic development', 'The geographic pattern of colonial railroads was determined by geography with no economic motivation', 'Colonial railroads connected colonial regions to each other as their primary purpose'],
              'exp': 'Colonial infrastructure pattern is AP\'s economic geography analysis: a map of British India\'s railroad network (66,000 km by 1900) shows lines radiating from port cities (Bombay, Calcutta, Madras) into agricultural and mineral-producing interiors. There were few east-west connections between inland regions. This pattern was not accidental — railroads were built to move cotton from the Deccan to Bombay for export to British mills; coal from Bengal to Calcutta; wheat from Punjab to Karachi. The pattern maximized export extraction but did not build the internal market connections that would have supported Indian industrial development. Post-independence development economists identified colonial railroad geography as a structural obstacle to economic integration.'},
             {'q': 'Refrigerated shipping (reefer technology, 1880s) demonstrates which type of consequence of transportation technology?',
              'correct': 'One technological innovation can generate economic specialization patterns in previously marginal regions — refrigeration allowed Australia, New Zealand, and Argentina (which had land and climate for cattle and sheep but were too distant from European markets for fresh meat to survive the voyage) to develop major export livestock industries, transforming their economies and land use patterns in ways that would have been impossible without the specific combination of refrigeration and steamship',
              'others': ['Refrigerated shipping had no impact on agricultural production patterns — food was always traded globally', 'Refrigeration only affected European food production with no global economic consequences', 'The technology had only nutritional consequences with no economic or geographic dimensions'],
              'exp': 'Technology enabling economic geography specialization is AP\'s analytical point: before refrigerated shipping, distance from European markets prevented most Southern Hemisphere producers from exporting perishables. The first successful refrigerated meat shipment from Australia to Britain (1880) opened markets: British consumers got cheaper meat; Australian, New Zealand, and Argentine ranchers had global markets; British agricultural producers faced competition. New Zealand\'s entire export economy (lamb, butter, cheese) was built on refrigerated shipping. This is AP\'s example of how technological innovation can transform economic geography by removing physical constraints.'},
             {'q': 'The 80-90% reduction in long-distance freight costs (1850-1900) produced which global economic consequence?',
              'correct': 'The collapse of transportation costs integrated previously separate regional commodity markets into a single global market — wheat prices in Chicago, Buenos Aires, and Odessa began to converge (as cheaper shipping allowed global price arbitrage); Indian cotton competed with American cotton in British mills; Argentine beef competed with British beef in London — demonstrating that transportation cost reduction, not political decisions, was the primary driver of late 19th-century economic globalization',
              'others': ['Freight cost reduction had no impact on global commodity price relationships', 'Lower transportation costs only benefited rich nations that controlled shipping', 'The freight cost reduction was too small to affect trade volumes or commodity prices'],
              'exp': 'Price convergence as evidence of globalization is AP\'s economic measurement: economic historians measure economic integration by price convergence — if Chicago and Liverpool wheat prices are moving together, it means global wheat arbitrage is occurring (traders buying where wheat is cheap, shipping to where it is expensive, until prices equalize). Studies show remarkable price convergence in grains, cotton, and other commodities between 1850 and 1914 — precisely tracking the railroad and steamship revolution. This is evidence that late 19th-century globalization was a real economic phenomenon driven by transportation technology, not just trade policy.'},
             {'q': 'Mass emigration from Europe to the Americas (1850-1914) being enabled by cheap steamship passage demonstrates:',
              'correct': 'Transportation cost reduction can unlock demographic processes that existed in potential but could not occur without affordable transportation infrastructure — the same push factors (Irish famine, Italian poverty, Russian pogroms) existed before steamships but migration was limited by prohibitive costs; when steamship passage fell to levels affordable for poor emigrants, the potential energy of push factors was released as actual migration at massive scale',
              'others': ['Push factors alone, without cheap transportation, would have produced the same migration volume', 'Steamship technology had no role in European mass emigration — it was purely driven by conditions in Europe', 'Only wealthy Europeans could afford steamship passage — mass emigration consisted only of middle-class emigrants'],
              'exp': 'Technology unlocking demographic potential is AP\'s mechanism: sailing ship passage from Europe to America cost the equivalent of several months\' wages for an agricultural laborer — effectively prohibitive for most of the poor. Third-class (steerage) steamship passage by the 1880s had fallen to about £3-5 (2-3 weeks\' wages). This cost reduction transformed emigration from an option available only to those with some capital into an option accessible to the very poor. The timing of European mass emigration (1870s onwards) precisely tracks the steamship cost reduction, demonstrating that technological cost reduction was the proximate enabler of demographic movement.'},
             {'q': 'The British railway network\'s role in industrialization demonstrates which causal relationship?',
              'correct': 'Transportation infrastructure both enables and is enabled by industrialization in a mutually reinforcing process — railroads required iron rails, steam engines, and coal (demanding industrial production); railroads then reduced freight costs for iron, coal, and manufactured goods (stimulating further industrial production and geographic specialization); the railroad was simultaneously a product of early industrialization and a cause of further industrialization',
              'others': ['Railroads were built after industrialization was complete with no role in industrial development', 'Industrial production was entirely dependent on railroads — industrialization could not have occurred without them', 'The relationship between railroads and industrialization was one-directional with no feedback effects'],
              'exp': 'Mutual reinforcement between technology and economy is AP\'s systems analysis: early British railroads (1825-1840) used enormous quantities of iron rails, coal for engines, timber for sleepers, and bricks for tunnels and stations — creating massive demand for industrial products and mining. The railroad industry itself became a major industrial employer. Then operating railroads reduced freight costs for iron ore, coal, and manufactured goods — enabling geographic industrial specialization (coal mining regions; iron-producing regions; manufacturing cities) that would have been impossible with high freight costs. This mutual reinforcement is why the railroad has been called the "general purpose technology" of the 19th century.'},
             {'q': 'For AP, the steamship and railroad revolution\'s most significant consequence for global history was:',
              'correct': 'It created the material infrastructure for the first genuine global economy — by reducing long-distance transportation costs by 80-90%, it enabled commodity trade, mass migration, and imperial expansion at scales that integrated diverse world regions into a single economic system for the first time, producing the economic interdependence that characterized the late 19th-century world and whose disruption during WWI and the Depression (1914-1940) had catastrophic consequences',
              'others': ['The transportation revolution\'s most significant consequence was military — it only mattered for moving armies', 'The transportation revolution benefited only industrial nations with no impact on agricultural or colonial regions', 'The most significant consequence was cultural — transportation spread European culture to other regions'],
              'exp': 'Material basis for global economic integration is AP\'s synthesis: the late 19th-century global economy (sometimes called "the first globalization") was not simply a political or commercial phenomenon — it was made possible by specific technological developments that reduced the physical costs of moving goods and people. This material basis is why economic historians can date globalization precisely (1870s-1914) and explain its collapse: WWI disrupted shipping routes; interwar tariffs reversed trade policy; Depression reduced incomes that had bought imported goods. The transportation infrastructure remained, but the political and economic conditions for using it were destroyed. AP requires connecting the material (technology) to the political economy (globalization) to the history (consequences).'}
         ],
         dl=['The 1869 completion of the first transcontinental railroad in the United States was the ___',
             'The first successful steam-powered Atlantic crossing (1838), demonstrating oceanic steam navigation was commercially viable, was the ___',
             'The 1880s technology that allowed perishable food (meat, dairy) to be shipped globally in refrigerated ships was ___'],
         do_=[['Union Pacific-Central Pacific transcontinental railroad', 'Baltimore and Ohio Railroad', 'Erie Canal connection', 'Great Northern Railway'],
              ['SS Great Western crossing', 'Clermont Hudson River voyage', 'Titanic maiden voyage', 'Savannah experimental crossing'],
              ['Refrigerated shipping (reefer technology)', 'Canning technology', 'Salt preservation shipping', 'Freeze-drying technology']],
         dc=['Union Pacific-Central Pacific transcontinental railroad', 'SS Great Western crossing', 'Refrigerated shipping (reefer technology)'],
         hints=['USA 1869 — Union Pacific west from Omaha — Central Pacific east from Sacramento — Promontory Summit Utah — transcontinental connection — market integration', 'SS Great Western 1838 — Isambard Brunel designed — Bristol to New York — 15 days — proved steam Atlantic viable — alongside SS Sirius same day', 'Reefer 1880s — first Australia-Britain refrigerated meat shipment 1880 — NZ lamb butter — Argentina beef — Southern Hemisphere export agriculture enabled'],
         dexp='The transcontinental railroad demonstrates how transportation integrated continental markets; the SS Great Western demonstrates the proof-of-concept moment for oceanic steam navigation; and refrigerated shipping demonstrates how technology unlocked previously impossible economic geography specializations — together they show the transformative economic consequences of transportation technology.'
    ),
    dict(pnum=3, id_pre='whtrans3',
         subtitle='Telegraph and Global Communications',
         key='The electric telegraph (1840s) and submarine telegraph cables (1850s-1860s) created the world\'s first real-time global communication network, enabling instantaneous transmission of commercial, political, and military information across continents and oceans. AP questions analyze how communication technology changed business, imperialism, and journalism, and evaluate the telegraph\'s role in creating an "information economy."',
         body='''## 📖 Telegraph and Global Communications

> **Telegraph Technology Timeline**

| Date | Development | Significance |
|------|------------|-------------|
| **1837** | Cooke and Wheatstone (Britain); Morse (USA) telegraph patents | Electromagnetic signal transmission demonstrated |
| **1844** | First long-distance telegraph (Washington D.C. to Baltimore) | "What hath God wrought" — practical demonstrated |
| **1851** | First submarine cable (Britain to France) | International communication |
| **1858** | First transatlantic cable (failed after 3 weeks) | Atlantic communication briefly achieved |
| **1866** | Permanent transatlantic cable (Cyrus Field; SS Great Eastern) | Britain-USA real-time communication |
| **1870** | London-Bombay cable (via Red Sea) | Empire real-time communication |
| **1902** | All-British telegraph route completed | Worldwide British Empire network |

> **Economic Consequences of the Telegraph**

- **Commodity markets:** Price information transmitted instantly → global price arbitrage → commodity price convergence
- **Business coordination:** Corporate headquarters could manage distant branches in real time
- **Banking:** Credit authorization, currency transfers, financial crises transmitted globally
- **Insurance:** Marine insurance companies could receive news of shipwrecks rapidly
- **News agencies:** Reuters (founded 1851) and Associated Press used telegraph to transmit news globally

> **Imperial Consequences**

- **Military command:** London could send orders to colonial armies and receive reports instantly
- **Information superiority:** British intelligence received news of colonial events before colonial competitors
- **"The empire of the cable":** Britain controlled strategic points (Gibraltar, Malta, Aden, Singapore) that all cables passed through — Britain could monitor all global telegraph traffic
- **Cut cables in war:** Britain cut German submarine cables within hours of WWI beginning (1914) — severing German global communications

> **Social and Cultural Consequences**

- **Newspapers:** War correspondents could file stories from battlefields; public followed distant events in real time
- **Crimean War (1853-56):** First war covered by telegraph journalists — transformed public awareness of war
- **Time zones:** Telegraph required standardized time for network coordination → Greenwich Mean Time adopted globally
- **Diplomatic crises:** News spread faster than diplomacy could react — creating pressure for rapid decisions

> **The "Information Economy" Begins**

The telegraph was the first technology where information itself (not goods) was the product being transmitted — pioneering:
- Information transmission networks with nodes and connections
- Information as a commodity with commercial value
- Information asymmetry between those with telegraph access and those without
- The architecture (hub-and-spoke networks) that would later characterize telephone, internet, and satellite systems''',
         qs=[
             {'q': 'The permanent transatlantic telegraph cable (1866) changed British-American commercial relations by:',
              'correct': 'Enabling instantaneous transmission of commodity prices, exchange rates, and commercial instructions between London and New York, transforming what had been a weeks-long process of commercial correspondence into real-time market integration — cotton prices in Liverpool could immediately reflect American harvest news; banking transactions that previously required weeks of letter exchange could be completed in minutes',
              'others': ['The transatlantic cable had no commercial significance — it was only used for diplomatic communication', 'The cable made physical shipping unnecessary — goods were transmitted electronically', 'The commercial consequences of the cable were limited because only governments could afford to use it'],
              'exp': 'Real-time commercial information enabling market integration is AP\'s economic analysis: before the transatlantic cable, commercial news traveled at sailing speed (2-3 weeks across the Atlantic). A merchant in London who learned of a cotton crop failure in the American South could buy cotton on the London market before the news reached other merchants — information asymmetry created trading profits. The cable eliminated this geographic information advantage and created genuinely integrated markets. The first commercial use of the 1866 cable was transmitting prices — commodity, currency, and financial market information that had immediate commercial value.'},
             {'q': 'Britain\'s control of submarine cable chokepoints (Gibraltar, Malta, Aden, Singapore) was strategically significant because:',
              'correct': 'All submarine cables passed through British-controlled geographic nodes, giving Britain the ability to monitor global telegraph traffic, intercept commercial and diplomatic communications of other powers, and cut enemy cables immediately upon war — demonstrating that information infrastructure is a form of power that can be weaponized, as Britain demonstrated by cutting German cables on the first day of WWI (1914)',
              'others': ['Cable control was purely commercial with no military or diplomatic significance', 'All major powers equally controlled submarine cable infrastructure with Britain having no advantage', 'The British cable network was controlled by private companies with no government access to communications'],
              'exp': 'Information infrastructure as imperial power is AP\'s geopolitical analysis: the 1902 completion of the "All-Red Route" (entirely British-controlled telegraph route around the world) was explicitly designed to ensure that British global communications could not be interrupted by cable cutting. When WWI began (August 4, 1914), Britain\'s first military action was cutting the five German transatlantic cables — forcing Germany to use radio (which Britain could intercept) or neutral American cables (which Britain could influence). The 1917 Zimmermann Telegram (Germany\'s secret message to Mexico proposing an alliance) was intercepted by Britain through this cable intelligence network and used to bring the USA into WWI. Information control was decisive.'},
             {'q': 'The telegraph\'s requirement for standardized time zones demonstrates:',
              'correct': 'Complex technical networks require standardized conventions that override local practices — operating a telegraph network across hundreds of cities required that all stations agree on what time it was, forcing the adoption of standardized time zones; previously each city set its own "local solar time," which varied slightly from neighboring cities; telegraph coordination made this variation operationally impossible, driving the adoption of Greenwich Mean Time and standardized time zones that restructured daily life globally',
              'others': ['Time zones existed before the telegraph and were already standardized globally', 'The telegraph had no relationship to time standardization — each country independently adopted time zones', 'Standardized time was adopted for astronomical reasons with no connection to telecommunications'],
              'exp': 'Technical network requirements driving social standardization is AP\'s technology-society analysis: before railroads and telegraphs, American cities each kept their own local solar time (noon when the sun was highest). When Pennsylvania Railroad operated dozens of stations, trains ran on "Philadelphia time" in Pennsylvania but "Pittsburgh time" at other stations — producing scheduling chaos. When telegraph networks needed to coordinate time-stamped messages across thousands of miles, local time variations made coordination impossible. The US adopted four standardized time zones in 1883 (railroad time); the International Meridian Conference (1884) established Greenwich Mean Time globally. A purely operational telegraph requirement restructured how humanity experienced time.'},
             {'q': 'War correspondents using the telegraph (beginning with the Crimean War, 1853-56) transformed public experience of war by:',
              'correct': 'Creating the first real-time mass-audience experience of distant warfare — readers in London could follow daily battlefield events in the Crimea; the telegraph eliminated the weeks-long delay between events and their reporting, creating a new form of public engagement with conflict and generating public pressure on governments to respond to news as it broke, fundamentally changing the political dynamics of military decision-making',
              'others': ['War correspondents had no impact on public opinion — governments controlled all war news', 'Real-time war reporting had existed since the invention of the printing press', 'The telegraph was too unreliable for war correspondence — most news still traveled by ship'],
              'exp': 'Real-time journalism changing democratic politics is AP\'s media-history analysis: the Crimean War was the first conflict where a mass reading public followed events through daily newspaper reports transmitted by telegraph. William Howard Russell\'s dispatches to The Times (London) describing inadequate medical care and military mismanagement created public scandal that contributed to the fall of the Aberdeen government. Florence Nightingale\'s nursing mission was partly a response to public pressure generated by Russell\'s reports. This is the first modern example of "media shaping war policy" — a pattern that would continue through Vietnam (TV news), Iraq (internet), and beyond.'},
             {'q': 'Reuters news agency\'s founding (1851) and use of submarine cables demonstrates:',
              'correct': 'Information itself became a commercial commodity in the telegraph age — Reuters collected news from around the world and sold it to newspapers and financial institutions, demonstrating that information transmission had exchange value independent of the physical goods it described; this created the commercial model of the news industry (collecting, processing, and selling information) that all modern media organizations operate on',
              'others': ['Reuters was a government agency with no commercial purpose', 'Reuters only transmitted diplomatic communications — commercial news was transmitted by private companies', 'The news agency model was invented before the telegraph — Reuters simply adapted an existing business model'],
              'exp': 'Information as commodity is AP\'s media economy analysis: Paul Julius Reuter initially used carrier pigeons between Brussels and Aachen to provide faster stock market information than competing news services — immediately before the telegraph arrived. He then pivoted to submarine cables, establishing a network that collected financial and political news from global capitals and sold subscriptions to newspapers and banks. The Reuters model demonstrated that information could be commercially produced and sold like any other commodity — creating the "information economy" architecture that telegraph, then telephone, then internet all built on. Information asymmetry (having information others don\'t have) creates commercial value.'},
             {'q': 'The comparison between the telegraph network (1850s-1900s) and the internet (1990s-present) reveals:',
              'correct': 'Both followed similar patterns of development: initial military/government funding → commercial adoption → dramatic cost reduction → mass access → economic transformation → concerns about surveillance and political control; and both created similar geopolitical dynamics where controlling network infrastructure (cable chokepoints; internet exchange points) provides intelligence advantages and the ability to exclude others from communications',
              'others': ['The telegraph and internet have no meaningful similarities — they are entirely different technologies with different consequences', 'The telegraph had no military dimension unlike the internet', 'The internet was designed to prevent the kind of chokepoint control that the telegraph demonstrated'],
              'exp': 'Historical pattern recognition across different technologies is AP\'s synthesis: the telegraph\'s development arc — government-funded R&D (Morse received US government support); commercial adoption (Western Union); cost reduction (prices fell 90% 1844-1870); mass use (thousands of offices); economic transformation (commodity markets, news agencies); surveillance concerns (governments monitored telegraph traffic) — was reproduced by the internet 150 years later. The geopolitical dynamics were also similar: just as Britain\'s cable control gave it intelligence advantages, the USA\'s dominance of internet infrastructure (root servers, major platforms, undersea cables) creates similar advantages. AP rewards this kind of cross-period pattern recognition.'},
             {'q': 'For AP, the telegraph\'s most significant contribution to global history was:',
              'correct': 'Creating the conceptual and technical prototype for all subsequent global information networks — the telegraph was the first system where information (not goods or people) was the product transmitted, and the architecture it developed (nodes, cables, protocols, commercial information services) provided the template that telephone, radio, and internet networks all followed; the telegraph era can be seen as the origin point of the "information age"',
              'others': ['The telegraph\'s most significant contribution was economic — it only mattered for commodity market integration', 'The telegraph was most significant militarily — its only lasting consequence was in military communications', 'The telegraph had no lasting institutional legacy — all its functions were replaced without continuity by new technologies'],
              'exp': 'Prototype for information age infrastructure is AP\'s long-term synthesis: the telegraph established several things that all subsequent communication networks built on: (1) the commercial model of information as a commodity with exchange value; (2) the geopolitical dynamics of network infrastructure control; (3) the social experience of real-time distant communication; (4) the hub-and-spoke network architecture; (5) the international regulatory frameworks (International Telegraph Union, 1865 — oldest surviving international organization) for managing shared communication infrastructure. When the telephone, radio, and internet emerged, they plugged into existing telegraph infrastructure, business models, and regulatory frameworks. The telegraph\'s legacy is in the architecture of all subsequent communication systems.'}
         ],
         dl=['The 1866 permanent submarine telegraph cable connecting Britain and North America, laid by the SS Great Eastern, was ___',
             'The British news agency (founded 1851) that used submarine cables to collect and sell global news as a commercial commodity was ___',
             'The 1865 international organization to regulate global telegraph networks, the oldest surviving international organization, was ___'],
         do_=[['The permanent transatlantic cable (Atlantic Telegraph Company)', 'The Pacific Telegraph Cable', 'The Imperial Cable Route', 'The Anglo-American Cable'],
              ['Reuters', 'Associated Press', 'The Times of London', 'Agence Havas'],
              ['International Telegraph Union', 'Universal Postal Union', 'International Meridian Conference', 'League of Nations Telecommunications Division']],
         dc=['The permanent transatlantic cable (Atlantic Telegraph Company)', 'Reuters', 'International Telegraph Union'],
         hints=['1866 — Cyrus Field — SS Great Eastern — Atlantic cable permanent — London New York real time — after 1858 failure', 'Reuters 1851 — Paul Julius Reuter — Brussels Aachen pigeons then cables — financial news to banks newspapers — information as commodity', 'ITU 1865 — International Telegraph Union Paris — oldest surviving international organization — telegraph standardization protocols — today ITU still exists UN specialized agency'],
         dexp='The permanent transatlantic cable demonstrates the material infrastructure of global real-time communication; Reuters demonstrates how information became a commercial commodity in the telegraph age; and the International Telegraph Union demonstrates how global communication networks required international regulatory frameworks — together they show the technological, economic, and institutional dimensions of the telegraph revolution.'
    ),
    dict(pnum=4, id_pre='whtrans4',
         subtitle='The Suez and Panama Canals',
         key='The Suez Canal (1869) and Panama Canal (1914) were the two greatest engineering achievements of the 19th and early 20th centuries, transforming global shipping routes and demonstrating the intersection of engineering ambition, financial capital, imperial power, and labor exploitation. AP questions analyze the canals\' economic and strategic consequences, compare their construction and governance, and evaluate their role in reshaping global power relationships.',
         body='''## 📖 The Suez and Panama Canals

> **The Suez Canal (1869)**

| Aspect | Details |
|--------|---------|
| **Builder** | Ferdinand de Lesseps (Compagnie Universelle du Canal Maritime de Suez) |
| **Length** | 193 km (120 miles) connecting Mediterranean to Red Sea |
| **Labor** | Initially forced Egyptian labor (corvée); later paid workers; ~30,000 workers; ~120,000 died from disease and accidents |
| **Cost** | 433 million francs; Egyptian government heavily indebted |
| **Opened** | November 17, 1869 |
| **Effect** | Reduced Europe-India voyage from 20,000 km (around Africa) to 12,000 km — 40% reduction |

> **British Control of the Suez Canal**

- **1875:** Egypt bankrupt; Khedive Ismail sold his 44% shares to Britain (Disraeli government, £4 million)
- **1882:** Britain occupied Egypt militarily — partly to secure canal
- **Strategic significance:** Canal was lifeline of British Empire — India, Australia, East Asia accessible quickly
- **1956 Suez Crisis:** Egypt\'s Nasser nationalized the canal → Britain and France invaded → USA forced withdrawal → demonstrated end of British imperial power

> **The Panama Canal (1914)**

| Aspect | French Attempt (1881-1889) | American Construction (1904-1914) |
|--------|--------------------------|----------------------------------|
| **Leadership** | Ferdinand de Lesseps | Colonel George Goethals |
| **Key challenge** | Underestimated engineering; disease (malaria, yellow fever) | Disease control (Gorgas eliminated malaria/yellow fever first) |
| **Deaths** | ~22,000 | ~5,600 (mostly disease) |
| **Outcome** | Failure; bankruptcy | Success; opened August 1914 |
| **Method** | Sea-level canal (like Suez) | Lock system (elevation change required) |

> **Strategic Consequences**

- **Suez:** British Royal Navy could move between Atlantic/Mediterranean and Indian Ocean in days instead of weeks
- **Panama:** US Navy could move between Atlantic and Pacific in days instead of weeks (previously: 14,000 km around South America)
- **US dominance in Americas:** Panama Canal cemented US ability to project naval power to both coasts simultaneously
- **AP connection:** Both canals demonstrate that engineering projects have geopolitical consequences — whoever controls the canal controls the trade route''',
         qs=[
             {'q': 'Britain\'s 1875 purchase of Suez Canal shares from the Egyptian Khedive demonstrates:',
              'correct': 'Egypt\'s financial dependence on European capital (accumulated through construction debts and extravagant royal spending) created vulnerability to loss of strategic assets — the bankrupt Khedive\'s sale of canal shares to Disraeli\'s government transformed what had been a commercially owned canal into a British strategic asset, demonstrating how debt-driven financial dependency can translate into loss of political sovereignty over strategic infrastructure',
              'others': ['The purchase was purely commercial with no strategic motivation', 'Britain bought the shares to help Egypt financially with no interest in controlling the canal', 'The canal shares had no strategic value — Britain purchased them as a financial investment only'],
              'exp': 'Financial dependency → strategic asset transfer is AP\'s mechanism: Egypt borrowed heavily to finance the Suez Canal construction and Khedive Ismail\'s modernization program (railways, telegraphs, cotton production). By 1875, Egypt was spending 60% of government revenue on debt service. The Khedive needed immediate cash. Disraeli\'s government (learning of the opportunity through Lionel de Rothschild) borrowed £4 million from the Rothschilds and purchased the 44% stake within days — without Parliamentary approval. The strategic motivation was explicit: Disraeli wrote to Queen Victoria that the canal was "the highway to India." Financial crisis created the opportunity; strategic calculation drove the purchase.'},
             {'q': 'The French Panama Canal failure (1881-1889) and American success (1904-1914) demonstrates:',
              'correct': 'Medical science was the decisive factor — the French attempt failed not from engineering error but from failure to control malaria and yellow fever (both mosquito-borne diseases not yet understood as such), which killed ~22,000 workers; American success required first eliminating the disease environment through mosquito control campaigns (Dr. William Gorgas, applying Walter Reed\'s yellow fever research), demonstrating that 20th-century engineering projects in tropical environments required medical science as a prerequisite',
              'others': ['The French failed because their engineering design was wrong — de Lesseps chose the wrong canal route', 'Disease was a minor factor — the French failure was primarily due to financial mismanagement', 'Both the French and American projects faced identical disease challenges with the same outcomes'],
              'exp': 'Disease control as prerequisite for engineering achievement is AP\'s scientific-historical analysis: de Lesseps had succeeded at Suez (a desert canal with minimal disease) and attempted to use the same sea-level design in Panama. The Isthmus of Panama was one of the world\'s most disease-endemic environments. Workers died at rates of 200+ per month from malaria and yellow fever. De Lesseps refused to believe disease was the main obstacle until the project collapsed financially. The USA (having experienced Cuba\'s disease problems in the Spanish-American War) required Walter Reed\'s 1900 yellow fever research → Gorgas\'s mosquito eradication program → two years of disease control before construction began in earnest. Medical science enabled engineering.'},
             {'q': 'The labor force for the Panama Canal construction (1904-1914) reveals which AP pattern of global labor migration?',
              'correct': 'Imperial construction projects recruited workers from colonial and semi-colonial regions on unequal terms — Panama Canal workers were primarily Barbadian and other Caribbean Black workers (lowest wages; most dangerous work), with smaller numbers of Spanish and Italian workers (higher wages; skilled work), and American white workers (management and most skilled positions; highest wages; better housing) — reproducing colonial racial hierarchy within a single construction project',
              'others': ['The Panama Canal was built entirely by American workers with no international labor recruitment', 'Workers of all origins received identical wages and conditions on the Panama Canal', 'Caribbean workers were recruited because they were the most skilled laborers — wage differences reflected skill only'],
              'exp': 'Racial labor hierarchy on imperial projects is AP\'s political economy analysis: the Panama Canal Zone implemented a racially stratified labor system called the "gold roll" (white American workers paid in gold = higher wages; better housing; superior facilities) and "silver roll" (Black Caribbean workers paid in silver = lower wages; segregated housing; inferior facilities). Approximately 31,000 West Indian workers (predominantly Barbadian) did the most dangerous excavation work in the Culebra Cut. The racial pay scale meant a Barbadian laborer earned 10 cents/hour while an American laborer doing comparable work earned 44 cents/hour. The canal was built on colonial racial labor hierarchy that reflected the broader imperial context.'},
             {'q': 'The 1956 Suez Crisis (Egypt\'s Nasser nationalized the canal; Britain and France invaded; USA forced withdrawal) demonstrates:',
              'correct': 'The shift from British-French to American global dominance after WWII — the canal nationalization gave Britain and France an opportunity to reassert imperial power, but American refusal to support their intervention (and threat of financial sanctions) forced humiliating withdrawal, demonstrating that the USA (concerned about Soviet alignment of Arab states) had replaced Britain as the dominant Western power capable of determining outcomes in formerly British imperial spheres',
              'others': ['The Suez Crisis demonstrated continued British imperial strength', 'American support was the decisive factor that enabled British success at Suez', 'The Suez Crisis had no significance for global power relationships'],
              'exp': '1956 as British imperial decline marker is AP\'s periodization: Gamal Abdel Nasser nationalized the canal (July 1956) to fund the Aswan Dam after the USA withdrew its financing offer. Britain and France conspired with Israel to create a pretext for military intervention (Israel attacked Egypt; Britain and France demanded both sides withdraw; Egyptian refusal gave pretext for Anglo-French invasion). The USA (Eisenhower) was furious — this was not the Cold War framework; it threatened to drive Egypt into Soviet alignment. The USA threatened to withhold IMF loans from Britain (which was experiencing a currency crisis), forcing Britain to call a ceasefire. Prime Minister Eden resigned. The Suez Crisis marks the definitive end of British independent great-power status.'},
             {'q': 'Comparing the Suez Canal (1869) and Panama Canal (1914) reveals which common pattern?',
              'correct': 'Both canals were built in contexts where the constructing power\'s relationship to the host territory was structurally unequal — France/Britain controlled Egypt financially and politically when Suez was built; the USA created the Republic of Panama in 1903 by supporting Panamanian separation from Colombia, then negotiated the Canal Zone treaty with the new government it had just created — demonstrating that major infrastructure projects in the 19th-early 20th century required control over host territory, often through financial dependency or direct territorial control',
              'others': ['Both canals were built in contexts of genuine partnership between engineering firms and fully sovereign host nations', 'The two canals were entirely different in their political contexts with no comparable patterns', 'The host nations retained full control over both canals from construction through operation'],
              'exp': 'Infrastructure and sovereignty is AP\'s political economy comparison: Egypt was formally independent (though an Ottoman vassal) when Suez construction began, but French and British financial penetration meant Egyptian sovereignty was nominal. Panama did not exist as a state until Teddy Roosevelt supported Panamanian separation from Colombia in 1903 — specifically to get a more favorable canal treaty. The Canal Zone then became effectively a US territory. In both cases, the engineering project required political control over the host territory — demonstrating that 19th-early 20th century infrastructure imperialism required territorial or financial control, not just commercial negotiation.'},
             {'q': 'The Suez Canal\'s strategic significance to the British Empire was that it:',
              'correct': 'Reduced the distance between Britain and India from 20,000 km (around Africa) to 12,000 km — cutting travel time by 40% and making India accessible in weeks rather than months; this transformed the strategic calculus of governing India (troops could be deployed rapidly; administrators rotated regularly; cotton and manufactured goods traded efficiently), explaining why Britain\'s 1882 military occupation of Egypt was primarily motivated by canal security',
              'others': ['The canal had only commercial significance — it had no strategic or military importance', 'The Suez Canal was primarily important for connecting Australia to Britain rather than India', 'The canal reduced travel time to India by 90% — from years to weeks'],
              'exp': 'Canal geometry is AP\'s strategic geography: the Cape of Good Hope route from Britain to Bombay was approximately 19,000 km. The Suez route was approximately 11,000 km — a 42% reduction. At 10-12 knots (typical steamship speed), this meant the difference between 65 and 38 days of sailing. For military deployment: a brigade of troops could reach India in 5-6 weeks instead of 9-10 weeks. For trade: cotton textile shipment times dropped; manufactured goods could be exported more cheaply to Asian markets. The Suez Canal was the physical expression of British imperial power over the "lifeline of empire" — which is why its nationalization in 1956 was experienced as existential by Britain\'s imperial politicians.'},
             {'q': 'For AP, the Suez and Panama canals\' most significant historical legacy was:',
              'correct': 'Demonstrating that major engineering infrastructure projects are simultaneously technological, economic, political, and social achievements whose construction and operation embed power relationships — both canals required imperial political control over host territories, used racially stratified labor systems, served great-power strategic interests, and generated political conflicts (Suez 1956; Panama treaties 1977-1999) whose resolution marked shifts in global power relationships',
              'others': ['The canals were purely engineering achievements with no political or social dimensions', 'Their legacy was only economic — they had no political or strategic significance beyond shipping cost reduction', 'The canals\' legacy was negative — they caused more economic harm than benefit through their construction costs'],
              'exp': 'Infrastructure as political-economic-social system is AP\'s synthesis: AP history analysis treats infrastructure as embedded in social and political contexts rather than as neutral technology. The Suez Canal is not just a shorter shipping route — it is the physical expression of British imperial power, Egyptian financial dependency, French engineering ambition, and colonial labor exploitation. The Panama Canal is not just a connection between oceans — it is American imperial expansion (creating Panama), racial labor hierarchy, tropical disease control enabling construction, and Cold War politics (1977 Carter-Torrijos treaty returning canal to Panama). Understanding either canal requires all these dimensions, not just the engineering.'}
         ],
         dl=['The French engineer who designed and built the Suez Canal (1869) and later failed at Panama was ___',
             'The American medical officer whose mosquito eradication campaign made Panama Canal construction possible was ___',
             'The Egyptian leader who nationalized the Suez Canal in 1956, triggering the Suez Crisis and demonstrating Britain\'s imperial decline, was ___'],
         do_=[['Ferdinand de Lesseps', 'Isambard Kingdom Brunel', 'George Goethals', 'John Stevens'],
              ['William Gorgas', 'Walter Reed', 'Ronald Ross', 'Carlos Finlay'],
              ['Gamal Abdel Nasser', 'King Farouk', 'Anwar Sadat', 'Mohammed Naguib']],
         dc=['Ferdinand de Lesseps', 'William Gorgas', 'Gamal Abdel Nasser'],
         hints=['De Lesseps — Suez 1869 success — then Panama 1881-1889 failure — disease underestimated — French bankruptcy — Compagnie Universelle', 'Gorgas — US Army surgeon — applied Reed yellow fever research — mosquito eradication Panama Zone — disease eliminated before major construction — 1904-1906', 'Nasser Egypt 1956 — nationalized Suez Canal — fund Aswan Dam — British French invasion — USA forced withdrawal — Eisenhower — British imperial decline marker'],
         dexp='De Lesseps connects Suez success to Panama failure and demonstrates the human agency dimension of canal history; Gorgas demonstrates how medical science was the prerequisite for tropical engineering success; and Nasser demonstrates how the canal\'s geopolitical significance outlasted British imperialism and became the site of the definitive test of post-WWII power relationships — together they show the full historical arc of canal history from construction to decolonization.'
    ),
    dict(pnum=5, id_pre='whtrans5',
         subtitle='Global Commodity Chains and Trade Integration',
         key='The late 19th century saw the emergence of genuinely global commodity chains — from cotton fields in Egypt and India, to British mills, to consumers across the world — enabled by transportation and communication technology. AP questions analyze how global commodity chains integrated diverse world regions into a single economic system, created economic dependencies, and distributed benefits and costs unevenly.',
         body='''## 📖 Global Commodity Chains

> **What Is a Commodity Chain?**

A commodity chain traces a product from raw material extraction through production, processing, and sale to the final consumer:

**Cotton commodity chain (c. 1880):**
1. **Growing:** Egypt, India, USA (slave then sharecrop labor)
2. **Shipping:** Steamship to Liverpool or Manchester
3. **Processing:** Lancashire textile mills (steam-powered)
4. **Distribution:** Global export through merchant networks
5. **Consumption:** British domestic market + global export (India, China, Africa, Latin America)

> **Key Global Commodity Chains**

| Commodity | Production Region | Processing | Markets |
|-----------|-----------------|-----------|--------|
| **Cotton** | American South, Egypt, India | Lancashire mills | Global |
| **Rubber** | Congo, Amazon, Malaya | European and US factories | Global (tires, industry) |
| **Sugar** | Caribbean, Brazil, Cuba | Refineries | Atlantic |
| **Wheat** | USA, Argentina, Russia | Mills | Global (urban consumers) |
| **Tea** | India, Ceylon | Blending/packaging | British Empire + global |
| **Coffee** | Brazil, Central America | Roasting/packaging | Atlantic + global |
| **Copper** | Chile, Congo | Smelting | Industrial (electrical) |
| **Cocoa** | West Africa (Gold Coast) | European chocolate factories | Global |

> **The Division of Labor: Core and Periphery**

- **Core regions (industrialized):** Process raw materials; add value through manufacturing; export finished goods; receive higher prices
- **Peripheral regions (colonial/agricultural):** Export raw materials; receive lower prices; import more expensive finished goods; limited manufacturing
- **Result:** Terms of trade consistently favored core (industrialized) over periphery (raw material producers)

> **Economic Dependency**

Many colonial and semi-colonial regions became dependent on one or two export commodities:
- **Ceylon (Sri Lanka):** Tea mono-culture
- **Cuba:** Sugar mono-culture
- **Malaya:** Rubber and tin
- **Gold Coast (Ghana):** Cocoa
- **Chile:** Copper and nitrates

**Risk of mono-culture:**
- Price volatility → economic instability
- No domestic diversification → no industrial development
- Economic control in hands of foreign buyers who set prices

> **Fair vs. Unfair Trade**

The global commodity system was not a free market of equals:
- **Commodity prices** were set in London, New York, and Amsterdam markets
- **Colonial producers** had no bargaining power to influence prices
- **Colonial governments** served export interests, not producer welfare
- **Profit distribution:** Most value added (processing, distribution, retailing) occurred in core countries''',
         qs=[
             {'q': 'The cotton commodity chain connecting Egyptian and Indian cotton fields to Lancashire mills demonstrates:',
              'correct': 'Industrial capitalism created global economic integration by connecting raw material producers in agricultural peripheries to processing industries in industrial cores through transportation and commercial networks — but this integration was hierarchical rather than equal, with value-added processing concentrated in the industrial core while raw material producers received prices set by core-country commodity markets, distributing the benefits of global trade unequally',
              'others': ['The cotton commodity chain was an equal partnership with benefits equally distributed between producing and processing regions', 'Lancashire mills sourced cotton exclusively from within Britain with no global commodity chain', 'Cotton prices were determined by producing regions with no influence from industrial-country commodity markets'],
              'exp': 'Hierarchical integration in commodity chains is AP\'s world-systems analysis: the cotton commodity chain was global but asymmetrically structured. Egyptian farmers grew long-staple cotton under pressure from British-influenced Egyptian government policy; prices were set in Liverpool cotton exchange; Egyptian farmers received whatever the market price was (they had no market power); Lancashire mills bought cheap raw cotton and sold expensive textiles. The value added in the chain (spinning, weaving, dyeing, finishing) occurred in Lancashire; the raw cotton production occurred in Egypt and India. This geographic distribution of value-added activity is what made industrial nations rich and cotton-producing nations poor — even though both participated in the same global commodity system.'},
             {'q': 'Mono-culture dependency (one-commodity export economies) in colonial regions created economic vulnerability because:',
              'correct': 'Single-commodity economies were exposed to global price volatility with no economic buffer — when global rubber prices collapsed (1912-1913, as plantation rubber replaced wild rubber), the Amazon rubber boom ended catastrophically; when Cuban sugar prices fell, Cuban planters were ruined; when Chilean nitrate prices collapsed (synthetic nitrates, 1913), the Chilean economy contracted — demonstrating that diversification is the key to economic resilience and that mono-culture structures colonial economies for boom-bust cycles',
              'others': ['Single-commodity economies were more resilient than diversified economies because they could specialize efficiently', 'Commodity price collapses were rare and had minimal economic impact on producing regions', 'Colonial governments prevented economic harm from commodity price volatility through effective regulation'],
              'exp': 'Mono-culture vulnerability is AP\'s development economics framework: the Amazon rubber boom (1850s-1912) transformed Manaus into an improbably wealthy jungle city (famous opera house, imported Italian marble) through rubber exports to global tire and industrial markets. British plantations in Malaya (started from Amazon seeds) produced rubber more cheaply than wild Amazon rubber by 1912 — Amazon boom ended within years; Manaus\'s wealth evaporated; workers who had migrated to the Amazon for rubber jobs were stranded. The boom-bust cycle was structural, not accidental: mono-culture economies have no alternative economic activity when their single export becomes unprofitable. Colonial structures created mono-culture; post-colonial development economists identified it as a cause of underdevelopment.'},
             {'q': 'The creation of tea production in British India (1840s onwards, displacing Chinese tea dominance) demonstrates:',
              'correct': 'Imperial power could deliberately reshape global commodity chains to serve metropolitan economic interests — Britain imported Chinese tea (paying with silver or opium), creating a trade deficit problem; when British botanists stole tea plants from China and established Assam and Ceylon plantations, Britain created a tea supply it controlled, could expand or contract, and profited from at multiple levels (plantation ownership; shipping; retail) — demonstrating that commodity chain creation was an exercise of imperial economic power',
              'others': ['Indian tea production arose spontaneously without British imperial intervention', 'The British government had no interest in controlling tea supply — it was purely a private commercial development', 'Chinese tea remained dominant throughout the 19th century — Indian tea never competed effectively'],
              'exp': 'Imperial commodity chain creation is AP\'s analysis: the East India Company\'s trade with China required purchasing Chinese tea (China set prices; refused most European goods). The only acceptable Chinese payment was silver or opium (producing the Opium Wars). Robert Fortune (botanist) disguised himself as a Chinese merchant (1848-1851) and illegally exported Chinese tea plants and manufacturing knowledge. British planters established Assam tea gardens using indentured Indian labor; within decades, Indian tea competed with Chinese tea on price and quality. By 1900, Indian tea exports exceeded Chinese. Britain had remade the global tea commodity chain to serve British imperial economic interests.'},
             {'q': 'The terms of trade consistently favoring industrial exporters over agricultural/raw material exporters demonstrates:',
              'correct': 'The prices of manufactured goods relative to raw materials systematically increased over the late 19th century — a ton of cotton textiles could buy progressively more raw cotton, more wheat, more rubber over time; this means that raw material producers had to export increasing quantities of their commodities to purchase the same quantity of manufactured goods, representing a structural transfer of purchasing power from periphery to core that compounded over decades',
              'others': ['Terms of trade were neutral — raw material and manufactured good prices moved together with no systematic advantage', 'Terms of trade favored agricultural producers because food was more essential than manufactured goods', 'The concept of terms of trade is irrelevant to 19th-century global economic history'],
              'exp': 'Terms of trade as mechanism of wealth transfer is AP\'s economics analysis: the Prebisch-Singer thesis (developed 1950) argued that raw material prices decline relative to manufactured goods prices over time, systematically transferring income from commodity-producing periphery to industrial core. Even if a developing country exports more copper each year, if copper prices are falling and manufactured import prices are rising, the country grows poorer in real purchasing power terms. 19th-century data generally supports this: British terms of trade improved significantly 1870-1914 (British manufactured exports could buy more imported food and raw materials over time). The Prebisch-Singer thesis became the economic foundation for 20th-century development economics and argues that the global trade system structurally disadvantages commodity producers.'},
             {'q': 'The rubber commodity chain from the Congo Free State (Leopold II, 1885-1908) demonstrates an extreme case of which economic pattern?',
              'correct': 'Resource extraction through forced labor and terror can produce short-term commodity surpluses for export but destroys the human capital, social organization, and political stability required for long-term development — Congo\'s rubber was extracted through systematic violence (hostage-taking, hand-cutting, massacre) that killed an estimated 10 million Congolese; while Leopold II accumulated personal wealth, Congo\'s population, agriculture, and social structures were devastated, producing long-term underdevelopment',
              'others': ['The Congo rubber system was comparable in its labor conditions to other colonial rubber production systems', 'Congo rubber extraction was voluntary and Congolese workers benefited economically from participating', 'The Congo system produced positive long-term development outcomes for the Congolese population'],
              'exp': 'Extreme extraction destroying development capacity is AP\'s analysis of Congo atrocities: Leopold II\'s Congo Free State was nominally a humanitarian project (the Berlin Conference 1884 authorized it as a "civilization mission"). In practice it was systematic organized looting: Congolese men were forced to meet rubber quotas; failure to meet quotas resulted in severing of hands, killing of family members, or hostage-taking. Roger Casement\'s 1904 report and E.D. Morel\'s Congo Reform Association campaign created international pressure that forced Leopold to transfer Congo to Belgian state control (1908). The Congo case is AP\'s extreme example of extraction without development — pure exploitation that destroyed human capital while extracting commodities.'},
             {'q': 'Comparing the organization of sugar production in Cuba (plantation-based, enslaved/wage labor) and wheat production in Argentina (small family farms, immigrant labor) reveals:',
              'correct': 'The same position in the global commodity chain (agricultural raw material exporter) can generate very different social structures depending on the crop\'s technical requirements — sugar requires large-scale plantation organization because it must be processed immediately after harvest (requiring on-site mills); wheat can be produced efficiently on small family farms because it stores and can be transported to centralized mills; these technical differences shaped whether immigrant-populated family farm economies or enslaved/indentured plantation economies developed',
              'others': ['Sugar and wheat production used identical labor systems in all contexts', 'Climate was the only factor determining social structure in agricultural production', 'Both crops were equally amenable to small-farm and plantation production'],
              'exp': 'Technical crop requirements shaping social structure is AP\'s comparative agricultural economics: the Caribbean and Brazilian sugar plantation system was determined by more than racial ideology or simple exploitation. Sugar cane must be crushed and processed within 24-48 hours of cutting before fermentation destroys sucrose content. This required co-location of cane fields and sugar mills, which required large capital investment, which required large-scale production, which required concentrated labor. The plantation system was technically optimal for sugar. Wheat, by contrast, can be stored for months and transported to distant mills — small family farms are economically competitive. Argentine and American wheat farming developed on family farms; Caribbean sugar farming developed on plantations. Technical requirements shaped labor systems.'},
             {'q': 'For AP, the late 19th-century emergence of global commodity chains\'s most significant long-term consequence was:',
              'correct': 'Creating the economic structural dependencies between developed and developing worlds that persist into the 21st century — regions organized as raw material exporters for industrial-core processing developed economic structures (mono-culture agriculture; extraction industries; weak manufacturing) that were resistant to transformation even after political independence, because the infrastructure, capital, skills, and market relationships all pointed toward continued commodity export rather than industrial development',
              'others': ['Global commodity chains produced uniform economic development across all world regions', 'The commodity chain structure was temporary — all regions quickly developed industrial manufacturing', 'The legacy of global commodity chains was only economic with no social or political dimensions'],
              'exp': 'Path dependency of colonial economic structures is AP\'s long-term analysis: when Ghana became independent (1957), its economy still depended overwhelmingly on cocoa exports — infrastructure (roads, ports), capital (cocoa marketing boards), skills (cocoa farming), and market relationships (to British and Dutch chocolate companies) all pointed toward continued cocoa export. Kwame Nkrumah\'s industrialization attempts (Volta River hydroelectric project) were expensive and limited in success because 60 years of colonial cocoa-export orientation had created path-dependent economic structures difficult to transform. The same pattern applies to rubber in Malaysia, copper in Zambia, nitrates in Chile. Commodity chain creation by colonialism created long-lasting structural economic legacies.'}
         ],
         dl=['The economic analysis showing that raw material prices decline relative to manufactured good prices over time, systematically transferring income from commodity-exporting periphery to industrial core, was the ___',
             'The Belgian king who organized the Congo Free State as a personal extraction enterprise, using forced labor and terror to harvest rubber, was ___',
             'The economist\'s term for economies dependent on one or two export commodities and vulnerable to price volatility was ___'],
         do_=[['Prebisch-Singer thesis', 'Comparative advantage theory', 'Mercantilism', 'Free trade theory'],
              ['Leopold II', 'Leopold I', 'Albert I', 'Baudouin I'],
              ['Mono-culture dependency', 'Import substitution', 'Export-led growth', 'Colonial extraction']],
         dc=['Prebisch-Singer thesis', 'Leopold II', 'Mono-culture dependency'],
         hints=['Prebisch-Singer 1950 — raw material prices fall relative to manufactured goods — terms of trade deteriorate for commodity exporters — development economics foundation', 'Leopold II Belgium — Congo Free State 1885-1908 — personal ownership — rubber quotas — hand cutting — 10 million deaths — Casement Morel reform campaign', 'Mono-culture — one crop economy — vulnerable to price collapse — no diversification — Amazon rubber Cuba sugar Ceylon tea Ghana cocoa — development economics problem'],
         dexp='The Prebisch-Singer thesis provides the economic analytical framework for understanding why commodity-exporting structures disadvantage peripheral economies; Leopold II demonstrates the extreme extractive end of colonial commodity chains; and mono-culture dependency explains the structural economic vulnerability that colonial commodity chains created — together they show the economic, political, and developmental dimensions of global commodity chain organization.'
    ),
    dict(pnum=6, id_pre='whtrans6',
         subtitle='Environmental and Demographic Consequences of Global Connectivity',
         key='Transoceanic connectivity produced environmental consequences through species transfer (both beneficial and harmful), resource extraction at unprecedented scale, and the spread of diseases that devastated previously isolated populations. AP questions analyze how increased global connectivity altered biological and ecological systems, compare these consequences in different world regions, and evaluate the long-term environmental legacy of 19th-century global integration.',
         body='''## 📖 Environmental Consequences of Connectivity

> **The Second Columbian Exchange**

The 19th century saw a second major wave of global species transfer:

| Direction | Transfer | Consequence |
|----------|---------|------------|
| **Europe → Americas** | Cattle, horses, sheep (intensified); grain crops; European weeds | Land use transformation; native ecosystem disruption |
| **Americas → Europe** | Guano (fertilizer); rubber; cinchona bark (quinine) | Agricultural intensification; industrial materials; malaria treatment |
| **Asia → Americas** | Sugar cane (intensified); rice; tea | Plantation monoculture; labor migration |
| **Americas → World** | Potato, maize (since 1500s; now global staple) | Population growth support globally |

> **Guano and Agricultural Intensification**

- **Peruvian guano:** Seabird excrement accumulated on Chincha Islands; richest natural fertilizer known
- **1840s-1870s:** Guano boom — shipped globally to fertilize European and American fields
- **Chinese "coolies":** Forced/coerced Chinese workers extracted guano in horrific conditions
- **Depletion:** By 1870s, guano deposits exhausted; created demand for artificial nitrogen fixation
- **Consequence:** Led directly to Haber-Bosch process (1909) — synthetic ammonia fertilizer that enabled 20th-century population growth

> **Rubber and Forest Destruction**

- **Amazon rubber boom:** Wild rubber extraction required tapping wild trees over huge areas; did not require deforestation
- **BUT:** Demand for agricultural land, railroad ties, and logging devastated forests globally
- **Deforestation rates:** British India lost 40% of forest cover during colonial period; Brazil\'s Atlantic forest reduced to 10%

> **Disease Transfer and Population Consequences**

- **Pacific Islands:** Polynesian and Melanesian populations devastated by introduced diseases (measles, influenza) after European contact intensified post-1800; some islands lost 50-90% of population within decades
- **Hawaii:** 400,000 indigenous Hawaiians (1778) → 70,000 (1853) → 40,000 (1900) — primarily disease
- **Australian Aborigines:** 750,000 (1788) → 93,000 (1900) — disease, violence, and dispossession
- **Pattern:** Every region newly integrated into global connectivity faced devastating disease introduction

> **Mineral Extraction and Environmental Transformation**

- **Chilean nitrate mining:** Northern Chile\'s desert landscape transformed by nitrate extraction camps
- **South African gold and diamond mining:** Massive environmental disruption; tailings piles; water pollution
- **Pennsylvania oil (1859, Drake\'s well):** First commercial oil well — beginning of petroleum age; environmental transformation
- **AP consequence:** Industrial resource extraction transformed landscapes that are still evident today''',
         qs=[
             {'q': 'The depletion of Peruvian guano deposits (1840s-1870s) leading to demand for synthetic fertilizers demonstrates:',
              'correct': 'Natural resource extraction at industrial scale can exhaust finite reserves rapidly, creating economic crises that drive technological innovation — the guano boom extracted millions of tons of accumulated seabird deposits in decades; when depletion threatened the fertilizer supply that European and American agriculture depended on, it created the economic demand that drove Fritz Haber\'s nitrogen fixation research, producing the Haber-Bosch process (1909) that now feeds roughly half the world\'s population',
              'others': ['Guano deposits were renewable and could not be depleted by industrial extraction', 'The exhaustion of guano had no consequences for food production — other fertilizer sources were immediately available', 'Synthetic fertilizer research had no connection to guano depletion — it was motivated by purely scientific curiosity'],
              'exp': 'Resource depletion → technological innovation is AP\'s resource economics chain: guano\'s value came from its high nitrogen and phosphorus content — perfect fertilizer for intensive European and American agriculture. Peruvian guano extraction from the Chincha Islands peaked at 200,000 tons/year in the 1850s; by 1870s, deposits were visibly declining; the Peruvian government\'s guano-export economy collapsed. The "fertilizer problem" — how to maintain food production without guano — drove agricultural chemistry. Justus von Liebig (plant nutrition science), then Haber and Bosch (nitrogen fixation) responded to the practical economic problem of fertilizer shortage. The Haber-Bosch process now produces 50% of the nitrogen in the proteins of living humans — possibly the most consequential industrial innovation in history.'},
             {'q': 'The demographic collapse of Pacific Island populations after intensified European contact (post-1800) demonstrates:',
              'correct': 'Populations with no prior exposure to Old World diseases remained catastrophically vulnerable to introduced pathogens even centuries after the initial Columbian Exchange — Pacific Island populations that had escaped early contact had maintained no disease exposure and therefore no immunity; when 19th-century intensified contact (whalers, missionaries, traders) introduced measles, influenza, and other diseases, mortality rates of 50-90% occurred within decades, demonstrating that geographic isolation had maintained biological vulnerability',
              'others': ['Pacific Island populations were immune to Old World diseases because of their genetic makeup', 'The demographic collapse was primarily caused by colonial violence, not disease', 'Pacific Island populations experienced similar disease patterns to the rest of the world with no extraordinary mortality'],
              'exp': 'Disease and geographic isolation is AP\'s epidemiological analysis: the Columbian Exchange (1492 onwards) devastated American populations that had no immunity to Old World diseases. Pacific Islands had even greater geographic isolation — most had been settled by Polynesian navigators 1,000-3,000 years ago with no subsequent contact with disease pools of the Americas, Europe, Asia, or Africa. When whalers, missionaries, and traders intensified Pacific contact in the early 19th century, they introduced multiple diseases simultaneously into virgin soil populations. Hawaii lost 90% of its indigenous population within 120 years of Cook\'s arrival (1778). The Marquesas Islands lost ~95% of their pre-contact population. Geographic isolation maintained vulnerability, and intensified connectivity eliminated it catastrophically.'},
             {'q': 'Comparing the environmental consequences of industrialization in Britain (urban pollution) and in colonial territories (extraction and deforestation) reveals:',
              'correct': 'Industrialization created different but interconnected environmental consequences in core and peripheral regions — British cities experienced air and water pollution from coal-burning factories (environmental costs borne locally by industrial workers); colonial territories experienced deforestation, soil depletion, and landscape transformation from resource extraction (environmental costs borne by colonial populations while economic benefits accrued to metropolitan economies) — demonstrating that the global industrial system distributed environmental costs to the politically weakest populations',
              'others': ['Environmental consequences of industrialization were identical in all world regions', 'Colonial territories experienced no environmental consequences — only industrial nations suffered environmental damage', 'Metropolitan and colonial environmental consequences were equally costly and equally distributed'],
              'exp': 'Environmental inequality between core and periphery is AP\'s environmental justice analysis: the same global industrial system produced different environmental consequences in different places. London had cholera from untreated sewage; Manchester had air pollution from textile mills — costs borne by British working-class populations who could, over time, organize politically for environmental regulation (Public Health Act 1848; Clean Air Act 1956). Congo deforestation; Indian forest clearing; Amazon rubber extraction; Chilean nitrate dust — costs borne by colonial populations who had no political power to demand environmental protection. The asymmetry was systematic: core industrial pollution generated political pressure for regulation; colonial extraction faced no comparable political constraint.'},
             {'q': 'The Drake Well (Pennsylvania, 1859) — first commercial oil well — marks the beginning of the petroleum age. For AP, its most significant consequence was:',
              'correct': 'It initiated the fossil fuel energy regime that still powers the global economy and now threatens climate stability — by demonstrating that petroleum could be extracted commercially and used to power industrial machinery (initially kerosene for lighting; then internal combustion engines), Drake\'s well began the substitution of fossil fuels for biological energy sources (wood, animal power, human labor) that produced both industrial productivity gains and the carbon accumulation driving 21st-century climate change',
              'others': ['Drake\'s Well had only local economic consequences with no global environmental significance', 'The petroleum age began in the 20th century — Drake\'s Well was a minor curiosity with no lasting consequences', 'Petroleum extraction had no connection to climate change — its environmental consequences were purely local pollution'],
              'exp': 'Industrial fossil fuel regime as long-term environmental consequence is AP\'s temporal synthesis: Drake\'s Well (1859) initiated the Standard Oil era; Rockefeller\'s monopoly; the internal combustion engine (1885); Model T Ford (1908); global petroleum industry. The fossil fuel substitution for biological energy sources was the material foundation of both industrial productivity growth and carbon accumulation. AP students must connect 19th-century technological beginnings to 21st-century consequences — the oil Drake extracted in 1859 was not burned then (it was used for kerosene lighting initially), but the fossil fuel economy it inaugurated has now produced the atmospheric CO2 accumulation that is the central environmental challenge of the 21st century.'},
             {'q': 'The global spread of the European rabbit (introduced to Australia 1859) and other invasive species demonstrates:',
              'correct': 'Increased global connectivity dramatically accelerated the pace of intentional and unintentional species introductions, producing ecological transformations that could not be reversed — rabbits introduced to Australia for hunting sport rapidly colonized the continent, caused massive agricultural damage, contributed to extinction of native species, and defied all control efforts; similar patterns occurred with European starlings in North America, cane toads in Australia, and hundreds of other invasive species introduced during the global connectivity era',
              'others': ['Introduced species consistently integrate harmlessly into native ecosystems with no ecological disruption', 'The problem of invasive species only occurred in Australia — other regions were unaffected', 'Invasive species could always be controlled through available technologies without long-term consequences'],
              'exp': 'Biological globalization as irreversible ecological change is AP\'s environmental analysis: Thomas Austin introduced 24 European rabbits to his Victoria estate (1859) for sport hunting. Without European predators (foxes had not yet been introduced), rabbits spread at 80 miles per year; by 1890 there were an estimated 200 million rabbits; by 1920, billions. They overgrazed pastures, collapsed riverbanks, contributed to extinction of native marsupials and plants. Control attempts (fencing, poison, myxomatosis, calicivirus) have managed but never eliminated rabbits. The pattern — intentional or accidental introduction; rapid spread; ecological disruption; irreversible establishment — was repeated globally during the connectivity era.'},
             {'q': 'The Haber-Bosch process (1909) for synthetic nitrogen fixation, developed partly in response to guano depletion, demonstrates:',
              'correct': 'Industrial chemistry can substitute for natural resource limits but at the cost of environmental externalities — Haber-Bosch produces synthetic ammonia fertilizer that has enabled global population growth to 8 billion people; but it uses enormous quantities of natural gas; the resulting nitrogen fertilizer application runs off into waterways causing eutrophication and dead zones; demonstrating that technological solutions to resource constraints often create new environmental problems of comparable scale',
              'others': ['The Haber-Bosch process had no environmental consequences — it was a purely beneficial innovation', 'Haber-Bosch was a minor process with no significant impact on global food production', 'The process solved the nitrogen problem without creating any new environmental challenges'],
              'exp': 'Technological solution creating new environmental problems is AP\'s innovation-consequence framework: without Haber-Bosch nitrogen fertilizer, the planet cannot support its current 8 billion population (estimates suggest 4 billion maximum without synthetic nitrogen). But Haber-Bosch requires natural gas (fossil fuel) as hydrogen source (contributing to climate change); fertilizer runoff causes algal blooms, oxygen depletion, and dead zones in rivers and oceans (Gulf of Mexico dead zone, Baltic Sea dead zone, Great Barrier Reef damage). The solution to the guano/nitrogen problem created a new set of environmental problems at global scale — a recurring pattern in industrial technological history.'},
             {'q': 'For AP, the environmental consequences of 19th-century transoceanic connectivity\'s most significant long-term legacy was:',
              'correct': 'The acceleration of species introductions, resource extraction, and fossil fuel adoption that together created the conditions for the 21st-century environmental crisis — the connectivity era established the global economic patterns (commodity extraction from periphery; industrial processing in core; fossil fuel energy; agricultural intensification) and biological transformations (invasive species; deforestation; soil depletion) that define the current Anthropocene epoch of human-dominant environmental change',
              'others': ['Environmental consequences of connectivity resolved themselves naturally within a generation with no lasting effects', 'The environmental consequences were minor compared to the economic benefits of global connectivity', 'Environmental impacts were confined to specific regions with no global integrated consequences'],
              'exp': 'Connectivity era as Anthropocene foundation is AP\'s synthesis: the concept of the "Anthropocene" (geological epoch defined by human impact on Earth systems) is often dated to the Industrial Revolution — but the transoceanic connectivity of the 19th century was the mechanism by which industrial impacts became truly global rather than local. Coal burning in Britain became global atmospheric change through scale; species introductions became global ecological change through transportation networks; fertilizer agriculture became global nitrogen cycle disruption through commodity chains. The connectivity that enabled economic globalization simultaneously enabled environmental globalization — turning local industrial impacts into planetary-scale consequences.'}
         ],
         dl=['The Peruvian seabird excrement fertilizer that powered European agricultural intensification (1840s-1870s) until depletion was ___',
             'The 1909 industrial process for producing synthetic nitrogen fertilizer from atmospheric nitrogen and natural gas, enabling modern agricultural intensification, was ___',
             'The 1859 Pennsylvania drilling that initiated commercial petroleum extraction and the fossil fuel economy was ___'],
         do_=[['Peruvian guano', 'Chilean nitrates', 'Bone meal fertilizer', 'Potash fertilizer'],
              ['Haber-Bosch process', 'Leblanc process', 'Bessemer process', 'Solvay process'],
              ['Drake\'s Well', 'Rockefeller\'s first well', 'Spindletop gusher', 'The Pennsylvania oil boom']],
         dc=['Peruvian guano', 'Haber-Bosch process', "Drake's Well"],
         hints=['Peruvian Chincha Islands — seabird excrement — high nitrogen phosphorus — 1840s-1870s boom — Chinese coolie workers — depleted by 1870s — fertilizer crisis', 'Haber-Bosch 1909 — Fritz Haber Carl Bosch — BASF Germany — atmospheric nitrogen + natural gas → ammonia — fertilizer — feeds half world — also WWI explosives', 'Pennsylvania 1859 — Edwin Drake — Titusville — first commercial oil well — kerosene then petroleum economy — Standard Oil Rockefeller — petroleum age beginning'],
         dexp='Peruvian guano demonstrates both the resource extraction pattern and the depletion crisis that drove technological innovation; the Haber-Bosch process demonstrates how resource constraints drove industrial chemistry with both beneficial (food production) and environmental (nitrogen pollution) consequences; and Drake\'s Well marks the beginning of the fossil fuel economy whose environmental consequences define the 21st century — together they show the long-term environmental arc from connectivity-era extraction to present challenges.'
    ),
    dict(pnum=7, id_pre='whtrans7',
         subtitle='AP Review and Exam Mastery',
         key='Transoceanic interconnections content spans AP\'s c. 1750-1900 and c. 1900-present periods. Key exam themes include evaluating how transportation and communication technology drove economic globalization, analyzing the unequal distribution of benefits and costs in global commodity chains, comparing canal construction and its geopolitical consequences, and assessing the environmental legacies of connectivity.',
         body='''## 📖 AP Review: Transoceanic Interconnections

> **Must-Know Vocabulary**

- **Commodity chain** — Sequence of production from raw material to consumer; AP context: global chains connecting colonial extraction to industrial processing
- **Terms of trade** — Ratio of export to import prices; declined for commodity producers relative to manufactured goods over 19th century
- **Mono-culture dependency** — Economic reliance on single commodity export; creates vulnerability to price volatility
- **Guano** — Peruvian seabird fertilizer; drove agricultural intensification; depletion triggered synthetic fertilizer research
- **Haber-Bosch process** — 1909 synthetic nitrogen fixation; enabled 20th-century population growth; also creates nitrogen pollution
- **Core-periphery model** — Industrial cores process and profit; agricultural/resource peripheries extract and receive lower prices
- **Refrigerated shipping** — 1880s technology enabling perishable food export from Southern Hemisphere; transformed agricultural geography
- **Suez Canal** — 1869; reduced Europe-India shipping by 40%; British control after 1875; nationalization crisis 1956
- **Panama Canal** — 1914; required disease control before construction; racially stratified labor; US geopolitical dominance in Americas
- **Satyagraha** — Gandhi\'s nonviolent resistance; developed in South Africa for Indian diaspora campaigns

> **AP Comparison Quick Reference: Transportation Technology**

| Technology | Date | Primary Effect | Geopolitical Consequence |
|-----------|------|--------------|------------------------|
| Steamship | 1838+ | Atlantic crossing: weeks, not months | Mass migration; global commodity trade |
| Railroad | 1825+ | Interior regions accessible | Colonial extraction; national market integration |
| Suez Canal | 1869 | Europe-Asia route shortened 40% | British India connection; strategic chokepoint |
| Submarine telegraph | 1866+ | Real-time global communication | Information imperialism; commodity market integration |
| Refrigerated shipping | 1880s | Perishables globally traded | Southern Hemisphere agricultural export economies |
| Panama Canal | 1914 | Atlantic-Pacific connection | US naval power; American hemisphere dominance |

> **Key Comparisons for AP Exams**

- **Suez vs. Panama construction:** Both required host territory control; both used racially stratified labor; both served great-power strategic interests
- **Railroad effects in Britain vs. India:** Integration of national markets vs. extraction of colonial resources — same technology, different geographic pattern of infrastructure
- **Telegraph vs. Internet:** Similar development arc; similar geopolitical dynamics; similar commercial information economy''',
         qs=[
             {'q': 'An AP SAQ asks: "Briefly explain ONE way transportation technology changed global economic integration in the period c. 1800-1900." Which earns full credit?',
              'correct': 'Steamship and railroad together reduced long-distance freight costs by 80-90% between 1850 and 1900, creating the first genuinely integrated global commodity markets — wheat prices in Chicago and Liverpool converged as transportation cost arbitrage became possible; commodity producers in Argentina, India, and Australia could now compete in European markets that had previously been accessible only to local producers, demonstrating that technological cost reduction was the primary driver of late 19th-century economic globalization',
              'others': ['Transportation improved travel comfort for wealthy individuals — its economic effects were minimal', 'Transportation technology had only military consequences with no economic integration effects', 'Economic integration required political decisions about trade policy — transportation technology was irrelevant'],
              'exp': 'SAQ full credit: specific claim (freight cost reduction of 80-90%) + specific evidence (Chicago-Liverpool wheat price convergence; global commodity market creation) + reasoning (explains the mechanism: cost reduction enabled global price arbitrage that integrated previously separate markets). The answer demonstrates the AP analytical standard — not just "transportation improved" but specifically how and why cost reduction → market integration → economic globalization with evidence of the actual price convergence that demonstrates integration occurred.'},
             {'q': 'For an AP LEQ on global economic integration, which thesis demonstrates the highest analytical level?',
              'correct': 'Global economic integration in the period c. 1750-1900 created unprecedented interconnections but distributed benefits and costs unequally — industrial core nations (Britain, then USA, Germany) captured value-added processing of global commodity chains while peripheral colonial regions supplied raw materials at declining relative prices, demonstrating that integration and inequality are not contradictions but mutually constitutive: the same transportation and communication networks that integrated world regions into a single economic system also organized that system hierarchically',
              'others': ['Global economic integration uniformly benefited all participating regions', 'Economic integration was prevented by colonialism — genuine integration only occurred after decolonization', 'Integration was simply the natural result of geographic proximity — no analytical explanation is required'],
              'exp': 'Sophisticated inequality-within-integration thesis is AP\'s highest LEQ standard: the best thesis must simultaneously acknowledge the reality of integration (global commodity markets were real; prices did converge) AND analyze its hierarchical structure (value-added processing concentrated in industrial cores; terms of trade favored industrial nations). The insight that "integration and inequality are mutually constitutive" — that the same networks that connected the world also organized the hierarchical distribution of benefits — is the analytical level that AP rewards with complexity points. It goes beyond "good and bad aspects" to identify how integration itself was structured to produce inequality.'},
             {'q': 'The AP DBQ includes a document from a British railroad engineer in India (c. 1875) describing Indian railroad construction as "civilizing" for India. Proper sourcing analyzes:',
              'correct': 'The engineer\'s point of view (British professional benefiting from imperial contracts), purpose (likely a report or memoir justifying colonial infrastructure investment), and historical situation (period of peak British confidence in "civilizing mission" ideology; railroad construction was central to British India\'s integration into global economy) — together suggesting the document would emphasize benefits to India while omitting the railroad\'s primary function of serving British economic extraction, the unequal treatment of Indian vs. British workers, and Indian nationalist critiques of railroad finance',
              'others': ['British engineers writing about Indian railroads were completely objective with no ideological dimension', 'The civilizing mission language is reliable evidence that British railroads genuinely benefited India', 'Documents from this period require no contextual sourcing — they should be taken at face value'],
              'exp': 'Ideology-embedded sourcing is AP\'s DBQ standard: the British railway engineer\'s "civilizing" language reflects both sincere belief and ideological function. Many British engineers genuinely believed they were bringing progress to India. But "civilizing mission" ideology also served the function of making British extraction appear altruistic — obscuring that Indian railroad finance was paid by Indian taxation while returns flowed to British shareholders. The Indian nationalist critique (Dadabhai Naoroji\'s "drain of wealth" argument) would see the same railroad as an extraction mechanism. The AP student should recognize that the engineer\'s document is evidence both of how British professionals understood their work AND of the ideological framework (civilizing mission) that obscured extraction from view.'},
             {'q': 'Comparing the Suez Canal\'s geopolitical significance in 1869 vs. 1956 demonstrates which AP principle?',
              'correct': 'The same infrastructure can have opposite geopolitical meanings in different political eras — in 1869, the Suez Canal was evidence of European industrial and financial power (France and Britain controlling the key route to Asia); in 1956, its nationalization was evidence of post-colonial nationalist assertion and the shift from British to American hegemony; the canal itself did not change, but the political context transformed its meaning from imperial symbol to anti-colonial victory to Cold War flashpoint',
              'others': ['The Suez Canal had identical geopolitical significance in both 1869 and 1956', 'The canal\'s geopolitical significance was entirely determined by its engineering characteristics with no political dimension', 'The 1956 Suez Crisis had no connection to the canal\'s 1869 construction and original political context'],
              'exp': 'Same infrastructure, different political meaning is AP\'s temporal analysis: the Suez Canal was built as an expression of European financial and engineering power over Egypt. By 1956, the post-WWII world had changed: Egypt was independent; Arab nationalism was asserting sovereignty over colonial-era arrangements; the USA had replaced Britain as the dominant Western power; and the Cold War was determining how the USA evaluated all regional conflicts (Nasser must not be driven into Soviet alignment). Nasser\'s nationalization used the canal to assert Egyptian sovereignty over what most Egyptians correctly saw as a colonial-era imposition. The British and French saw this as imperial humiliation; the USA saw it as a Cold War problem to be managed differently. Same canal, three completely different political readings.'},
             {'q': 'The Prebisch-Singer thesis (raw material prices decline relative to manufactured goods) as applied to 19th-century global commodity chains suggests:',
              'correct': 'The structure of global commodity chains systematically transferred wealth from peripheral raw material producers to industrial core processors — even as total global trade volumes grew and colonial economies produced more commodities, the real purchasing power of those commodities (relative to manufactured goods) declined, meaning colonial producers grew relatively poorer even within an expanding global economy; this structural dynamic explains why economic growth did not automatically produce development in colonial regions',
              'others': ['Growing commodity export volumes automatically produce economic development in exporting regions', 'The Prebisch-Singer thesis only applies to 20th-century trade relationships with no 19th-century relevance', 'Industrial nations and commodity producers experienced identical terms of trade trends over the 19th century'],
              'exp': 'Structural vs. cyclical analysis is AP\'s economic sophistication: the Prebisch-Singer thesis provides a structural (not cyclical) explanation of underdevelopment — it\'s not that commodity prices occasionally drop (cyclical) but that they systematically decline relative to manufactured goods over long periods (structural). This means that a colonial economy producing more cotton, more rubber, or more wheat might still become relatively poorer because the purchasing power of those commodities is declining. Growing export volumes do not produce development if the terms of exchange are structured against you. This is why development economists in the 1950s (Prebisch, Singer, Myrdal) argued that free trade in its actual historical operation produced divergence (rich countries getting richer; poor countries getting relatively poorer) rather than the convergence that free trade theory predicts.'},
             {'q': 'The environmental consequences of transoceanic connectivity (species introductions, resource extraction, fossil fuel adoption) demonstrate which AP analytical principle about the relationship between economic development and environmental change?',
              'correct': 'Environmental consequences of economic activity are often displaced in both space and time — 19th-century British consumers benefited from cheap cotton, rubber, and sugar without experiencing the environmental costs of cotton soil depletion, Congo deforestation, or Caribbean mono-culture in their own environment; and fossil fuel adoption in the 19th century has its most catastrophic environmental consequences in the 21st century, demonstrating that economic development systematically externalized environmental costs to other places and future generations',
              'others': ['Environmental consequences of economic activity are always experienced locally by those who cause them', 'The environmental consequences of industrialization were fully addressed by public health measures in the 19th century', 'Transoceanic connectivity had no significant environmental consequences — only economic ones'],
              'exp': 'Environmental cost displacement across space and time is AP\'s sustainability framework: when British textile workers bought cheap cotton shirts, the environmental costs (Egyptian soil depletion; Indian water use; American soil exhaustion) were experienced in other places. When Victorian coal was burned, the atmospheric CO2 consequences were experienced globally and in the future. This displacement of environmental costs — to colonial territories, to future generations, to global commons (atmosphere, oceans) — is what made industrial development appear more profitable than it actually was when full environmental costs are included. AP requires understanding that seemingly separate economic and environmental histories are connected through this mechanism of cost displacement.'},
             {'q': 'For AP synthesis, what does transoceanic interconnections history from c. 1800 to the present demonstrate about the relationship between technology, economics, and power?',
              'correct': 'Technology is not neutral — each major transportation and communication technology (steamship, railroad, telegraph, canals) was developed, deployed, and governed in ways that reflected and reinforced existing power relationships; industrial nations used technological advantages to build commodity chains that extracted value from colonial peripheries; but the same technologies also enabled the transnational connections (Pan-Africanism, Indian diaspora, Chinese nationalism) that eventually challenged imperial power — demonstrating that technologies create both new forms of domination and new resources for resistance',
              'others': ['Technology is neutral — its consequences are entirely determined by how people choose to use it', 'Transportation and communication technologies automatically distributed their benefits equally to all world regions', 'Technologies developed by imperial powers could not be used to challenge imperial power'],
              'exp': 'Technology as both domination tool and resistance resource is AP\'s final synthesis: railroads were built to extract colonial resources — but they also moved nationalist newspapers and political organizers. Telegraphs were built to command colonial armies — but they also transmitted Pan-African Congress communiqués and Indian nationalist press. Steamships transported colonial troops — but they also transported Garvey\'s UNIA organizers and Gandhi from South Africa to India. The same infrastructure serves multiple purposes, and the purposes change as power relationships shift. AP\'s most sophisticated synthesis recognizes that the technologies of imperial domination also became the technologies of anti-colonial resistance — the same networks that integrated the world for exploitation also created the transnational connections that produced liberation movements.'}
         ],
         dl=['The economic model analyzing the relationship between industrial core regions (processing; value-added manufacturing) and agricultural peripheral regions (raw material extraction) was ___',
             'The 1869 canal that reduced the Europe-to-India shipping distance by 40% and became the strategic lifeline of the British Empire was ___',
             'The 1909 industrial process for synthetic nitrogen fixation that enabled modern agricultural intensification and now feeds roughly half the world\'s population was ___'],
         do_=[['The core-periphery model', 'Comparative advantage theory', 'Free trade theory', 'Import substitution theory'],
              ['The Suez Canal', 'The Panama Canal', 'The Corinth Canal', 'The Kiel Canal'],
              ['Haber-Bosch process', 'Bessemer process', 'Solvay process', 'Leblanc process']],
         dc=['The core-periphery model', 'The Suez Canal', 'Haber-Bosch process'],
         hints=['Core-periphery — industrial cores process manufacture profit — agricultural peripheries extract export receive lower prices — commodity chains — terms of trade — structural inequality', 'Suez 1869 — de Lesseps — Mediterranean to Red Sea — 193 km — 40% shorter Europe-India — Britain bought shares 1875 — occupied Egypt 1882 — lifeline of empire', 'Haber-Bosch 1909 — Fritz Haber Carl Bosch — synthetic ammonia from nitrogen gas — fertilizer revolution — 8 billion people — nitrogen pollution consequence'],
         dexp='The core-periphery model provides the analytical framework for understanding how global commodity chains distributed benefits unequally; the Suez Canal demonstrates the most strategically significant infrastructure achievement of the 19th century and its geopolitical consequences; and the Haber-Bosch process demonstrates how resource depletion drove technological innovation with both productive and environmental consequences — together they represent the core analytical vocabulary AP requires for transoceanic interconnections.'
    ),
]

for p in parts:
    content = make(p['pnum'], p['id_pre'], p['subtitle'], p['key'],
                   p['body'], p['qs'], p['dl'], p['do_'], p['dc'],
                   p['hints'], p['dexp'])
    # Fix missing closing braces for last question in qs
    lines_out = content.split('\n')
    fixed_lines = []
    for i, line in enumerate(lines_out):
        stripped = line.rstrip()
        if i < len(lines_out)-1:
            next_line = lines_out[i+1].rstrip()
            if "'exp':" in line and next_line.strip() == '],':
                if not stripped.endswith("'}"):
                    if stripped.endswith("'"):
                        line = line.rstrip('\n') + '}\n'
        fixed_lines.append(line)
    content = '\n'.join(fixed_lines)
    w(f"{SLUG}-part{p['pnum']}.ts", content)

print("All transoceanic parts done!")
