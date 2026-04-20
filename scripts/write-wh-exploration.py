#!/usr/bin/env python3
"""Write wh-exploration-columbian-exchange parts 2-7."""
import os, textwrap

base = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    'src', 'data', 'interactive-lessons')

def w(filename, content):
    with open(os.path.join(base, filename), 'w') as f:
        f.write(content)
    print(f"✓ {filename}")

def make_file(pnum, id_pre, subtitle, key_concept, content_body, questions):
    """questions: list of 7 dicts with keys: q, correct, others (list of 3), exp"""
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
    return f"""export const whExplorationColumbianExchangePart{pnum}Data = {{
  topicSlug: 'wh-exploration-columbian-exchange',
  sections: [
    {{
      id: '{id_pre}-intro',
      type: 'text' as const,
      content: `
# 🚢 Age of Exploration & the Columbian Exchange

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
            label: 'The Portuguese ship innovation with lateen sails enabling Atlantic exploration was the ___',
            options: ['Caravel', 'Galleon', 'Dhow', 'Junk']
          }},
          {{
            label: 'The Spanish colonial labor grant giving colonists rights to indigenous workers was the ___',
            options: ['Encomienda', 'Millet system', 'Mansabdar system', 'Devshirme']
          }},
          {{
            label: 'The Pacific trade route connecting American silver to Chinese silk markets was the ___',
            options: ['Manila Galleon trade', 'Triangle trade', 'Indian Ocean trade', 'Silk Road']
          }}
        ],
        correctAnswers: ['Caravel', 'Encomienda', 'Manila Galleon trade'],
        hint1: 'Portuguese ship — lateen sails — could sail against the wind',
        hint2: 'Spanish colonial labor system — grant to colonists — de facto forced labor',
        hint3: 'Pacific silver route — Acapulco to Manila — American silver for Asian goods',
        explanation: 'The caravel enabled systematic Atlantic and coastal African exploration by Portugal. The encomienda was the primary mechanism of Spanish colonial labor extraction from indigenous peoples. The Manila Galleon trade completed global commercial connectivity by linking the Atlantic and Pacific systems through the silver-for-silk exchange.'
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
    (2, 'whex2', 'European Maritime Exploration: Causes and Methods',
     'Portuguese and Spanish maritime exploration c. 1415-1522 was driven by commercial motivation (bypassing Ottoman trade routes to access Asian luxury goods), enabled by new ship technology (caravel with lateen sails), and sustained by competitive state sponsorship. AP questions focus on WHY exploration happened and HOW technology made it possible.',
     '''## 📖 European Maritime Exploration

> **Causes of European Exploration**

| Cause | Details |
|-------|---------|
| **Commercial motivation** | Desire for direct trade with Asia; avoid Ottoman tolls on eastern routes |
| **Technology** | Caravel (lateen sails); magnetic compass; astrolabe (latitude measurement) |
| **State competition** | Portugal vs. Spain competing for overseas wealth and prestige |
| **Religious motivation** | Spreading Christianity; finding Prester John (mythical Christian king) |

> **Portuguese Exploration Timeline**

- **Prince Henry the Navigator (c. 1415-1460):** Organized systematic annual African coastal exploration
- **Bartolomeu Dias (1488):** Rounded Cape of Good Hope; proved sea route to Indian Ocean possible
- **Vasco da Gama (1498):** First European to reach India by sea; returned with spices worth 60x voyage cost
- **Magellan/Elcano (1519-1522):** First circumnavigation under Spanish flag

> **Key Technology: The Caravel**

- Shallow-draft ship with lateen (triangular) sails
- Could sail INTO the wind — unlike square-rigged ships
- Essential for exploring African coast and returning home against prevailing winds
- Combined with magnetic compass (Chinese origin, Silk Road diffusion) and astrolabe

> **AP Comparison: Zheng He vs. European Exploration**

| Feature | Zheng He (China, 1405-1433) | European Exploration (1415+) |
|---------|---------------------------|------------------------------|
| Ship size | Enormous (400+ feet) | Smaller caravel (70-90 feet) |
| Scope | Indian Ocean, East Africa | Atlantic, then global |
| Continuation | Discontinued after 1433 | Continued to colonization |
| Key question | Why did China stop? | Why did Europe continue? |''',
     [
        {'q': 'What was the primary commercial motivation for European maritime exploration c. 1450-1520?',
         'correct': 'Desire for direct sea routes to Asian spice and luxury goods markets, bypassing Ottoman-controlled overland routes where high tolls reduced European merchant profit margins',
         'others': ['Pure curiosity with no commercial dimension', 'A desire to spread European culture to other continents', 'Military strategy to attack Asian civilizations from the sea'],
         'exp': 'The commercial motivation for exploration is essential AP knowledge. Spices (pepper, cinnamon, nutmeg) were enormously valuable in Europe — preserving food and demonstrating wealth. Vasco da Gama\'s first Indian voyage returned with spices worth 60x the expedition cost. This extraordinary profit potential drove continued state investment in exploration.'},
        {'q': 'The caravel\'s most important innovation for exploration was:',
         'correct': 'Its lateen (triangular) sails that allowed sailing into the wind, enabling Portuguese ships to explore the African coast and return home against prevailing winds — something older square-rigged ships could not do',
         'others': ['Its enormous size that could carry more cargo than any previous ship', 'Its steam-powered engines that replaced reliance on wind', 'Its military weaponry that allowed defeating all opposing navies'],
         'exp': 'The caravel\'s lateen sail is the key technological innovation enabling Atlantic exploration. Square-rigged ships could sail with the wind but not against it — making return voyages along the African coast impossible with existing technology. The caravel transformed coastal exploration from a one-way trip to a round trip, enabling systematic accumulation of geographic knowledge.'},
        {'q': 'Portugal\'s systematic annual exploration of the African coast (c. 1415-1488) demonstrates:',
         'correct': 'How state-sponsored, systematic accumulation of geographic knowledge — each voyage building on the previous one — eventually solved the problem of finding a sea route to Asia that individual merchant ventures could not have solved alone',
         'others': ['Portuguese exploration was entirely accidental with no systematic planning', 'Portugal reached India without any prior African coastal exploration', 'State sponsorship had no impact on the pace of exploration'],
         'exp': 'Portugal\'s institutional approach to exploration is uniquely significant: Prince Henry organized an exploration school, accumulated geographic knowledge across decades, and sponsored annual voyages that incrementally extended knowledge of the African coast. This systematic approach — not individual genius — explains why Portugal solved the Cape route problem.'},
        {'q': 'The comparison between Zheng He\'s voyages (1405-1433) and European exploration demonstrates:',
         'correct': 'Both demonstrated remarkable maritime capability, but China\'s decision to discontinue exploration after 1433 (due to Confucian bureaucratic opposition to maritime trade and shifting imperial priorities to northern land threats) while European states continued shows that technology alone does not determine historical outcomes — political and institutional decisions matter equally',
         'others': ['Zheng He\'s ships were inferior to European vessels in every respect', 'China had no interest in foreign peoples or goods', 'European and Chinese exploration were identical in their goals and consequences'],
         'exp': 'The Zheng He vs. European exploration comparison is one of AP World History\'s most important questions: Chinese ships were LARGER and more sophisticated; Zheng He reached Africa 70 years before da Gama. The DIFFERENCE is what each civilization did with this capability. China discontinued; Europe continued to colonization. This demonstrates that political/institutional factors (not just technology) determine which civilizations extend their power globally.'},
        {'q': 'Bartolomeu Dias\'s 1488 rounding of the Cape of Good Hope was historically significant because:',
         'correct': 'It proved that a sea route from Europe to the Indian Ocean was possible, transforming African coastal exploration from incremental progress to a specific achievable goal — directly enabling Vasco da Gama\'s 1498 voyage to India that initiated direct European participation in Indian Ocean trade',
         'others': ['Dias was the first European to reach India', 'The Cape of Good Hope had no significance for trade routes', 'Dias\'s voyage preceded any Portuguese exploration of the African coast'],
         'exp': 'Dias\'s voyage is the "proof of concept" that unlocked the Indian Ocean route: before 1488, Portuguese explorers didn\'t know if Africa ended or extended infinitely south. After 1488, the question was no longer "can we get there?" but "who will complete the route?" Da Gama\'s 1498 voyage followed the path Dias proved was possible.'},
        {'q': 'An AP comparison between Portuguese and Spanish exploration strategies best supports which argument?',
         'correct': 'Portugal focused on establishing trading post networks along existing sea routes (Indian Ocean, African coast) to redirect existing Asian trade through Portuguese-controlled ports, while Spain focused on conquering and colonizing new territories in the Americas — different strategies reflecting different geographic starting points and commercial opportunities',
         'others': ['Portugal and Spain had identical exploration strategies', 'Spain established trading posts while Portugal colonized territories', 'Neither Portugal nor Spain had any strategic plan for exploration'],
         'exp': 'This distinction is AP-important: Portuguese Estado da India worked by inserting Portuguese military force into existing Indian Ocean commercial networks, charging protection fees. Spanish colonialism worked by controlling land and indigenous/enslaved labor in the Americas. Both were extractive, but through fundamentally different mechanisms — trading-post empire vs. territorial colonialism — reflecting different resource environments.'},
        {'q': 'For AP purposes, the Treaty of Tordesillas (1494) dividing the non-European world between Spain and Portugal most significantly demonstrates:',
         'correct': 'European states\' claim of authority to divide the world based on papal sanction — treating non-Christian peoples as without legitimate sovereignty over their own territories, establishing the ideological framework that justified colonial appropriation globally',
         'others': ['The Treaty required consultation with indigenous peoples before land claims', 'Papal authority over non-Christian lands was recognized under existing international law', 'The treaty had no real consequences for either Spanish or Portuguese exploration'],
         'exp': 'The Tordesillas ideology is the foundation of the "Doctrine of Discovery" — the legal fiction that non-Christian peoples lacked legitimate sovereignty. This ideology, not just military force, was the intellectual basis for European colonial land claims. AP questions about colonialism\'s ideological foundations require understanding that colonial appropriation was justified by a coherent (if morally reprehensible) legal and theological framework.'}
     ]
    ),
    (3, 'whex3', 'The Columbian Exchange: Crops, Diseases, and Populations',
     'The Columbian Exchange (after 1492) transferred plants, animals, diseases, and peoples between the Americas and the Old World. AP questions focus on the devastating demographic consequences for Native Americans (50-90% mortality from disease), the agricultural transformation of Old World populations (new crops), and the long-term global demographic effects.',
     '''## 📖 The Columbian Exchange

> **What Was Transferred**

| Direction | Items |
|-----------|-------|
| **Old World → Americas** | Horses, cattle, pigs, wheat, rice, sugar cane, smallpox, measles, influenza |
| **Americas → Old World** | Maize (corn), potatoes, tomatoes, chocolate, tobacco, peppers, rubber |

> **Demographic Catastrophe in the Americas**

The most immediate consequence was disaster for Native Americans:

- Estimates: 50-90% of indigenous American populations died within a century of contact
- Mexico: ~25 million in 1519 → ~1 million by 1600
- Caribbean indigenous peoples virtually eliminated within decades
- Mechanism: No prior exposure = no acquired immunity to Old World diseases
- Consequence of labor shortage → demand for enslaved African labor → Atlantic slave trade

> **Agricultural Transformation of the Old World**

New World crops transformed Old World agriculture:

- **Potatoes:** Grew in poor, wet soils unsuitable for grain; fed European peasants; enabled Irish, Polish, German population growth
- **Maize:** High-calorie, storable; spread across Europe, Africa, Asia; enabled population growth
- **Tomatoes:** Transformed Mediterranean diets after initial suspicion
- **Long-term:** New World crops contributed to Old World population growth c. 1600-1800

> **AP Comparison Anchor**

- **Columbian Exchange vs. Black Death:** Both massive demographic events; Black Death → Old World population decline; Columbian Exchange → catastrophic New World decline AND eventual Old World growth from new crops
- **Why the Americas?:** Eurasian disease pool was larger and older (more domesticated animals = more disease evolution); Americas had no comparable disease reservoir''',
     [
        {'q': 'The most devastating consequence of the Columbian Exchange for Native American populations was:',
         'correct': 'Catastrophic mortality from Old World diseases (smallpox, measles) against populations with no acquired immunity — reducing some indigenous populations by 50-90% within a century of European contact, the largest demographic catastrophe in human history',
         'others': ['A rapid increase in Native American populations due to new food sources from the Old World', 'Disease affected only small isolated communities with minimal impact on large empires', 'Population decline was equally severe in Europe as in the Americas'],
         'exp': 'Native American demographic collapse is perhaps the most important demographic event in world history: 50-90% mortality in a century represents a loss of life unprecedented in scale. Mexico\'s population fell from ~25 million in 1519 to ~1 million by 1600. This created the labor shortage that drove demand for enslaved Africans and fundamentally altered the demographic composition of the Americas.'},
        {'q': 'New World crops (potatoes, maize) transformed Old World populations primarily because:',
         'correct': 'They grew in soils and climates unsuitable for traditional European grains, expanding the total food-producing land area and caloric output — enabling population growth in previously marginal agricultural regions of Europe, Africa, and Asia',
         'others': ['New World crops were immediately adopted as luxury foods for the wealthy only', 'Old World populations declined because they preferred New World crops over traditional foods', 'Only tomatoes had any lasting impact on Old World diets'],
         'exp': 'The demographic consequence of New World crops reaching the Old World is as important as the collapse in the Americas, just in the opposite direction. The potato\'s ability to grow in rocky Irish, Polish, and Andean-style soils enabled population doubling in previously food-insecure regions. Maize spread across Africa, enabling population growth. These agricultural changes drove Old World demographic expansion.'},
        {'q': 'The causal chain connecting the Columbian Exchange to the Atlantic slave trade demonstrates which AP skill?',
         'correct': 'Historical causation: disease caused indigenous labor shortage → colonial demand for replacement labor → existing African slave-trading networks → enslaved Africans as the "solution" → Atlantic slave trade expansion from hundreds to millions per century',
         'others': ['The Columbian Exchange and slave trade were completely unrelated phenomena', 'Enslaved Africans were brought to the Americas before indigenous populations declined', 'Disease had no connection to labor demand in colonial Americas'],
         'exp': 'The causal chain is essential AP knowledge: (1) European diseases arrive → (2) indigenous populations collapse → (3) colonial labor shortage → (4) demand for replacement labor → (5) existing African slave trade networks → (6) Atlantic slave trade expands. AP questions about causation reward tracing these chains rather than treating the slave trade as simply "caused by European greed" without structural explanation.'},
        {'q': 'Why did Old World peoples have more devastating diseases to transmit to the Americas than vice versa?',
         'correct': 'Eurasia\'s longer history of dense agricultural settlement with domesticated animals (cattle, pigs, horses, chickens) created a larger disease pool — many human epidemics (smallpox, measles, influenza) evolved from animal diseases; the Americas had fewer domesticated animals and therefore a smaller disease reservoir',
         'others': ['European peoples were biologically superior and thus naturally more disease-resistant', 'The Americas had no diseases because their populations were too small to sustain epidemics', 'Disease transmission was equally devastating in both directions'],
         'exp': 'The biological explanation for asymmetric disease impact is crucial for AP: most devastating human diseases evolved from domesticated animal diseases (zoonotic diseases). Eurasia\'s longer history with cattle, pigs, and chickens meant more evolved human pathogens. The Americas had fewer large domesticated animals (llamas, dogs, turkeys) and therefore a smaller disease evolutionary reservoir. This structural difference, not racial superiority, explains the asymmetric mortality.'},
        {'q': 'What does the Columbian Exchange demonstrate about "unintended consequences" in historical analysis?',
         'correct': 'Columbus\'s 1492 voyage was intended to find a sea route to Asia; the exchange of crops, animals, and diseases that reshaped global demographics was an unintended byproduct of commercial motivation, demonstrating that major historical transformations frequently result from the unforeseen consequences of intentional actions',
         'others': ['The Columbian Exchange was planned in advance with full knowledge of its consequences', 'Historical actors always anticipate the consequences of their actions accurately', 'Unintended consequences are never historically significant'],
         'exp': 'The Columbian Exchange is the AP\'s premier example of unintended consequences: Columbus died believing he had reached Asia. The consequences — indigenous death, potato-fed European population growth, Atlantic slave trade — were orders of magnitude more significant than his original commercial goal. AP complexity points come from recognizing when historical significance was unintended and from tracing the non-linear paths from cause to consequence.'},
        {'q': 'For an AP LEQ evaluating the Columbian Exchange\'s consequences, which complexity argument earns the highest score?',
         'correct': 'The Columbian Exchange had fundamentally different consequences for different peoples simultaneously: while New World crops were beginning to increase Old World food security and population, disease was catastrophically reducing Native American populations by 50-90% — the same exchange was catastrophic for some and ultimately beneficial for others, demonstrating that historical processes have uneven and sometimes contradictory effects',
         'others': ['The exchange was uniformly beneficial for all peoples who participated in it', 'The exchange was uniformly catastrophic for all peoples who encountered it', 'Only the crop transfer mattered; disease effects were too small to be historically significant'],
         'exp': 'Complexity means accurately representing that historical events have different effects on different groups simultaneously. The same Columbian Exchange → potatoes feeding European peasants AND smallpox killing Native Americans at the same time. AP complexity is not about being "balanced" artificially — it\'s about accurately representing historical reality, which is almost always uneven and contradictory across different groups.'},
        {'q': 'Comparing the Columbian Exchange to the Black Death (1347-1353), which analysis is most sophisticated?',
         'correct': 'Both demonstrate how disease transmission via exchange networks produces catastrophic demographic consequences, but in opposite regional directions: the Black Death reduced Old World populations by 30-50%; the Columbian Exchange reduced New World populations by 50-90% while beginning to increase Old World populations through new food crops — the same mechanism (disease via exchange networks) produced regionally opposite demographic outcomes',
         'others': ['The two events were too different to compare meaningfully', 'Only the Black Death involved significant disease transmission via trade networks', 'The Columbian Exchange and Black Death had identical consequences globally'],
         'exp': 'This cross-period comparison demonstrates analytical sophistication: same mechanism (disease via trade/exchange networks) + different contexts (Old World disease pool hitting immunologically naive Americas; new crops flowing to Old World) = regionally opposite demographic outcomes. AP rewards arguments that use comparison to generate broader principles about how historical mechanisms play out differently in different contexts.'}
     ]
    ),
    (4, 'whex4', 'Spanish and Portuguese Colonial Systems',
     'Spanish and Portuguese colonial empires c. 1500-1750 created new extractive institutions: encomienda (forced indigenous labor), the plantation system (enslaved African labor), and the extraction economy (silver, sugar). AP questions compare Spanish and Portuguese models, evaluate colonial racial hierarchies, and connect colonial labor to global economic patterns.',
     '''## 📖 Spanish and Portuguese Colonial Systems

> **Spanish Labor Systems**

| System | Period | Mechanism |
|--------|--------|-----------|
| **Encomienda** | 1500s-1542 | Grant of indigenous labor to Spanish colonist; nominal obligation to Christianize |
| **Repartimiento** | After 1542 | Labor draft replacing encomienda; nominal wage; still coercive |
| **Mita (colonial)** | 1570s-1812 | Forced labor draft for Potosí silver mines; Inca mit\'a repurposed by Spanish |
| **Debt peonage** | Ongoing | Hacienda workers bound by debt impossible to repay |

> **Potosí: The Engine of Spanish Colonial Wealth**

- Located in modern Bolivia; world\'s largest silver mine c. 1545-1650
- Millions of indigenous and enslaved African workers; catastrophic mortality
- Silver caused European price revolution (inflation from massive silver influx into money supply)
- Silver flow: Potosí → Spain → China (for silk/porcelain) — demonstrating global commercial integration

> **Colonial Racial Hierarchy: The Casta System**

Spanish colonial society organized legally by race:
- **Peninsulares** (Spain-born) > **Criollos** (Americas-born Spanish) > **Mestizos** > **Mulatos** > **Indigenous** > **Enslaved Africans**

> **Portuguese Brazil and Plantation System**

- Sugar plantation economy in Brazil from 1530s
- Enslaved African labor replaced indigenous workers (who died from disease or fled inland)
- Brazil: largest sugar producer globally by 1600
- Plantation model: monoculture + enslaved labor = profits + social rigidity

> **AP Comparison Anchor**

- **Encomienda vs. Aztec tributary system:** Both extracted labor/goods from subordinate peoples; Aztec system kept local rulers; Spanish encomienda gave individual colonists direct rights to indigenous workers
- **Potosí silver → global economy:** Links Spanish colonialism to Chinese trade and European price revolution''',
     [
        {'q': 'The Spanish encomienda system\'s most significant feature was:',
         'correct': 'It granted individual Spanish colonists the right to extract labor and tribute from indigenous peoples, creating a system of coercive extraction that was functionally similar to slavery despite its legal framing as mutual obligation — the colonist owed Christianization and protection; indigenous workers owed labor',
         'others': ['It gave indigenous peoples equal legal rights with Spanish colonists', 'It was a purely voluntary labor market with wage compensation', 'It had no connection to the Catholic Church or religious conversion'],
         'exp': 'The encomienda\'s legal fiction mattered to the Church (which could intervene on behalf of indigenous people as "commended" to Spanish care — the basis for Las Casas\'s advocacy) but not to the daily reality of forced labor. Understanding the gap between legal form and lived reality is essential for AP analysis of colonial labor systems.'},
        {'q': 'Potosí silver\'s most significant global consequence was:',
         'correct': 'The massive influx of New World silver caused European price inflation (the "price revolution") while simultaneously flowing to China to pay for luxury goods — demonstrating that colonial extraction in one region (Peru) could destabilize monetary systems in another (Europe) and fuel commodity trade with a third (China)',
         'others': ['Potosí silver only circulated within the Spanish Empire with no global impact', 'Silver caused deflation in Europe by increasing the money supply appropriately', 'Chinese demand for silver was insignificant compared to European consumption'],
         'exp': 'The Potosí-to-China silver circuit is a model AP global commerce example: Spanish colonial extraction → European money supply inflation → silver flows east to China (where Single Whip Tax Reform required silver tax payment) → Chinese state receives tax revenue; Chinese silk and porcelain flow west. This demonstrates that "global economy" was already a reality by 1600, not just a 20th-century phenomenon.'},
        {'q': 'The casta system\'s significance for AP analysis is that it:',
         'correct': 'Created a legally codified racial hierarchy assigning social status, legal rights, and economic opportunities based on perceived racial identity — establishing race as a primary organizing principle of colonial societies that would shape Latin American social stratification for centuries after independence',
         'others': ['The casta system was immediately dismantled after Spanish colonial rule ended', 'Race had no legal significance in Spanish colonial society', 'The casta system gave indigenous people equal legal standing to Spanish colonists'],
         'exp': 'The casta system\'s longevity is its key AP significance: racial categories established in the 16th century shaped Latin American social stratification into the 20th century and beyond. The system also produced constant social negotiation — racial categories blurred in practice, documents were falsified, and people sought to "pass" as higher categories. Understanding the casta system is essential for understanding Latin American social history.'},
        {'q': 'The transition from encomienda to plantation slavery in the Americas demonstrates:',
         'correct': 'How colonial labor systems adapted to changing conditions: indigenous population collapse reduced encomienda viability, while expanding sugar/tobacco/cotton demand created incentive for a more reliable, legally unprotected labor force — leading to systematic expansion of African chattel slavery',
         'others': ['The transition occurred because indigenous peoples voluntarily left the encomienda system', 'Plantation slavery predated the encomienda in the Americas', 'Legal reforms eliminated all forced labor in colonial Americas by 1600'],
         'exp': 'The labor system transition follows a clear causal chain: disease → indigenous population decline → labor shortage → encomienda insufficient for expanding plantation crops → African enslavement as the "solution." This chain explains how the Atlantic slave trade went from an existing but limited practice to a massive, industrialized system of human trafficking. Understanding the structural causes is more AP-useful than moral condemnation alone.'},
        {'q': 'Bartolomé de las Casas\'s advocacy against indigenous exploitation demonstrates which AP complexity?',
         'correct': 'Colonial systems could produce internal critics who challenged the system\'s moral foundations — Las Casas opposed indigenous exploitation using Christian moral arguments — while still operating within colonial logic: he initially suggested enslaved Africans as a labor alternative, demonstrating that reformers often reproduce systemic inequalities while challenging specific manifestations',
         'others': ['Las Casas fully rejected all forms of coerced labor from the beginning', 'No one within the colonial system ever criticized indigenous exploitation', 'Las Casas was primarily an economic administrator with no humanitarian concerns'],
         'exp': 'Las Casas is AP\'s model of "internal critique within a colonial system." He opposed indigenous exploitation using the same Christian theology the colonial system used to justify itself — demonstrating that ideological frameworks can produce internal contradictions. His initial suggestion of African enslavement as an alternative (later recanted) shows that reformers operate within historical contexts that limit their imagination even while pushing its boundaries.'},
        {'q': 'An AP comparison between Spanish encomienda and Aztec tributary systems best reveals:',
         'correct': 'While both extracted labor and goods from subordinate peoples, the Aztec system maintained local rulers and extracted tribute through established political channels, while the encomienda gave individual Spanish colonists direct rights to indigenous workers — the Spanish system was more personally exploitative and less politically mediated than the Aztec model it replaced',
         'others': ['Both systems were identical in their exploitation of subject peoples', 'The Aztec system was more exploitative than the encomienda', 'Neither system involved any coercion of subject peoples'],
         'exp': 'This comparison demonstrates AP analytical sophistication by going beyond "both extracted resources" to identify the structural difference: Aztec tribute maintained political intermediaries (local rulers) with established relationships; encomienda gave individual Spaniards direct, personal exploitation rights over indigenous workers without political intermediation. This made the encomienda more arbitrary and personally brutal in practice.'},
        {'q': 'For AP purposes, which statement best characterizes the role of race in constructing colonial labor systems?',
         'correct': 'Colonial labor systems were increasingly racialized over time: early Spanish exploitation used existing political categories (tributary relationships), but as those broke down and African slavery expanded, racial categories (casta system) were elaborated to legally encode exploitation — race became the mechanism for determining who was subject to which forms of coercive labor',
         'others': ['Race played no role in determining who was subjected to colonial labor exploitation', 'Colonial labor systems were purely economic with no racial dimension', 'Racial categories in colonial Americas were established before European contact'],
         'exp': 'The racialization of colonial labor is an AP meta-theme: early colonial exploitation used indigenous political structures (encomienda built on existing tributary relationships); as those eroded, legal racial categories (casta system) were developed to formalize who could be enslaved, who was subject to labor drafts, and who had legal protections. Understanding this process of racialization — how race was constructed to justify exploitation — is essential for AP analysis of colonial societies.'}
     ]
    ),
    (5, 'whex5', 'The Atlantic World and Global Trade Networks',
     'European exploration created new global trade networks: the Atlantic triangle trade (European goods → African enslaved people → American commodities), the Manila Galleon trade (connecting Americas to Asia via Pacific), and the global commodity economy (silver, sugar, tobacco). AP questions connect these networks and evaluate their human costs.',
     '''## 📖 The Atlantic World and Global Trade Networks

> **The Triangle Trade**

Three-legged Atlantic circuit:

1. **Europe → Africa:** Manufactured goods (textiles, metal, guns) exchanged for enslaved people
2. **Africa → Americas (Middle Passage):** Enslaved Africans transported to plantation colonies
3. **Americas → Europe:** Colonial commodities (sugar, tobacco, cotton) produced by enslaved labor

**Scale of the Atlantic slave trade:**
- Approximately 12.5 million Africans enslaved and transported, 1500-1900
- ~2 million died during Middle Passage (15-20% mortality)
- Destination: Brazil (46%), Caribbean (43%), North America (4%), other Americas (7%)

> **Manila Galleon Trade (1565-1815)**

Pacific circuit completing global commercial connectivity:

- Silver from Mexico/Peru → Manila (Philippines)
- Manila → silver exchanged for Chinese silk, porcelain, Southeast Asian spices
- Return: luxury goods → Acapulco → Americas and Spain
- Chinese demand (Single Whip Tax Reform required silver for taxes) drove the trade

> **Commodity Crops in Global Demand**

| Crop | Colonial Producer | European Consumer Impact |
|------|-----------------|------------------------|
| Sugar | Brazil, Caribbean | Sweetened food; rum production; massive demand |
| Tobacco | Virginia, Caribbean | Created new consumption habits; "luxury" → mass product |
| Cotton | Americas (later South) | Industrial Revolution textile demand |
| Coffee | Caribbean, Brazil | European café culture; replaced ale as breakfast drink |

> **AP Comparison Anchor**

- **Triangle trade vs. Indian Ocean trade:** Both moved commodities; Indian Ocean moved free merchants; triangle trade moved enslaved peoples — different power structures, different human costs
- **Global commodity chains as AP macro-theme:** colonial extraction → European consumption → global inequality''',
     [
        {'q': 'The Middle Passage\'s significance for AP analysis is:',
         'correct': 'It represents one of history\'s largest forced migrations — approximately 12.5 million Africans transported over four centuries, with ~2 million dying during transport — demonstrating that early modern globalization was built on systematic human trafficking and coerced labor rather than purely voluntary commercial exchange',
         'others': ['The Middle Passage was a minor element of the Atlantic trade with few people involved', 'The Middle Passage was a voluntary migration of African workers seeking employment', 'The human cost of the slave trade was too small to affect global economic analysis'],
         'exp': 'The scale and human cost of the Middle Passage is essential AP knowledge: 12.5 million people over 400 years; 15-20% mortality during the crossing alone. AP analysis of early modern globalization must include this human cost to accurately characterize the economic system being described. "Commercial networks" that rest on forced labor are structurally different from voluntary trade — and that structural difference has consequences that extend to the present.'},
        {'q': 'The Manila Galleon trade\'s historical significance was:',
         'correct': 'It completed the first truly global commercial network by connecting the Atlantic (European-American-African) and Pacific/Asian trade systems — American silver paid for Chinese luxury goods, meaning a Peruvian silver miner\'s labor was connected to a Chinese bureaucrat\'s taxes and a European merchant\'s consumption in a single economic circuit',
         'others': ['The Manila Galleon trade was purely a military supply route with no commercial significance', 'The trade only moved small quantities of goods with no significant economic impact', 'Chinese demand for silver had no impact on the Manila Galleon trade\'s volume or continuation'],
         'exp': 'The Manila Galleon trade is the AP\'s signal that global economic integration was already a reality by 1565 — not just the 20th century. The circuit: Potosí silver (forced indigenous labor) → Spain → Manila → China (silk, porcelain) → back to Spain and Americas. Every link is documented; every link involved coercion at the production end and luxury consumption at the European end. Understanding this circuit as genuinely global, not just regional, is key AP knowledge.'},
        {'q': 'How did sugar plantation systems transform Caribbean societies?',
         'correct': 'Sugar monoculture and enslaved labor created societies with extreme racial hierarchy (small white planter minority over enslaved black majority), ecological transformation (deforestation, soil depletion), and economic dependence on a single export crop — creating structural vulnerabilities that shaped Caribbean societies for centuries after emancipation',
         'others': ['Sugar plantations created economically diversified, egalitarian Caribbean societies', 'The Caribbean had no plantation agriculture before European contact', 'Plantation societies had equal legal rights for all inhabitants regardless of race'],
         'exp': 'The plantation complex\'s consequences extend far beyond the colonial period: the racial hierarchy (white minority owning enslaved black majority), monoculture economic dependence (vulnerability to price collapses), and environmental degradation (soil depletion requiring constant new land) created structural problems that shaped Caribbean and Brazilian development into the 20th century. Understanding plantation societies\' structural characteristics is essential for AP analysis.'},
        {'q': 'European demand for sugar and tobacco demonstrates which broader AP principle?',
         'correct': 'Commodity demand in one region (European sweet tooth, tobacco habit) can transform entire ecosystems and social systems in another region (Caribbean forests cleared for sugar; indigenous peoples replaced by enslaved Africans) — demonstrating that global trade creates environmental and social consequences far removed from the consuming society',
         'others': ['Commodity demand only affects the region where the goods are produced', 'Sugar cultivation had no environmental consequences in the Caribbean', 'European consumption patterns had no impact on Caribbean demographic change'],
         'exp': 'The sugar-Caribbean connection is a model AP commodity chain analysis: European demand (driven by coffee-house culture and desire to sweeten increasingly available tea and coffee) created economic incentives; those incentives drove forest clearance, indigenous population displacement, and enslaved African importation. The European consumer was disconnected from the production process — a structural feature of early modern globalization that continues to characterize global supply chains.'},
        {'q': 'Which AP principle best explains why the Atlantic slave trade expanded enormously in the 17th-18th centuries?',
         'correct': 'The convergence of profitable plantation crop demand (sugar, tobacco, cotton), available slave-trading networks in Africa, the legal framework of chattel slavery reducing costs, and the inability to coerce sufficient European laborers to work under plantation conditions created structural incentives that made enslaved African labor the economically "rational" choice within a deeply irrational moral system',
         'others': ['The slave trade expanded due to European racial hatred with no economic dimension', 'African peoples voluntarily entered the slave trade as sellers with no coercion', 'The slave trade expanded because enslaved African labor was more productive than other forms of labor in all contexts'],
         'exp': 'AP analysis of the slave trade requires holding multiple truths simultaneously: the trade was driven by economic incentives (plantation profitability) that made it "rational" within the system\'s moral logic; it required the deliberate construction of legal categories (chattel slavery, racialization) that denied the humanity of enslaved people; and it was embedded in and enabled by African political economies that included slavery as an existing institution. None of these truths cancels the others.'},
        {'q': 'An AP LEQ asks: "Evaluate the extent to which European exploration transformed global trade networks c. 1450-1750." Which thesis earns the highest score?',
         'correct': 'European exploration fundamentally transformed global trade networks by creating the first genuinely global commercial circuits — connecting previously separate Atlantic, Pacific, and Indian Ocean systems through silver, enslaved labor, and commodity crops — while simultaneously intensifying human exploitation on a global scale through colonial labor systems, demonstrating that commercial integration and human suffering were inseparable features of early modern globalization',
         'others': ['European exploration had no impact on existing global trade networks', 'Exploration only affected European domestic economies with no global dimension', 'Global trade networks were already complete before European exploration with nothing to transform'],
         'exp': 'This thesis earns full AP credit: it answers "the extent" question (fundamentally transformed), provides specific evidence (silver, enslaved labor, commodity crops), identifies the mechanism (connecting previously separate systems), and adds complexity (commercial integration and human exploitation were inseparable). The last point — that globalization and exploitation were not separate phenomena but aspects of the same process — is the kind of complexity that distinguishes top AP responses.'},
        {'q': 'The Atlantic triangle trade\'s most historically significant long-term consequence was:',
         'correct': 'The creation of a racialized African diaspora in the Americas — transplanted millions of Africans from diverse cultures and languages into a single category ("Black") defined by legal enslavement, creating new Afro-Atlantic cultures that profoundly shaped American music, religion, food, and social structures while establishing racial hierarchies that persisted for centuries after emancipation',
         'others': ['The triangle trade had no lasting demographic consequences for the Americas', 'The slave trade primarily affected Europe rather than the Americas', 'All enslaved Africans were repatriated to Africa after emancipation with no lasting cultural impact'],
         'exp': 'The AP significance of the Atlantic slave trade extends beyond the colonial period: the African diaspora created new cultural forms (Afro-Caribbean music and religion, African American culture) that transformed the Americas while maintaining connections to African roots. The racialization of slavery — creating "Black" as a legal/social category meaning "enslaved or descended from enslaved" — established racial hierarchies that structured American societies for centuries. Understanding these long-term cultural and social consequences is essential for AP World History\'s modern period content.'}
     ]
    ),
    (6, 'whex6', 'Cultural Transformations and Resistance',
     'European exploration brought Christianity to the Americas and Africa, creating syncretic religious traditions and disrupting indigenous religious systems. AP questions evaluate the role of missionaries, the creation of syncretic cultures (Our Lady of Guadalupe, Santería), how indigenous peoples resisted cultural imposition, and how colonized peoples shaped colonial culture.',
     '''## 📖 Cultural Transformations and Resistance

> **Christianity and Colonial Culture**

Spanish and Portuguese colonialism was explicitly tied to religious conversion:

- **Papal donation (1494, Tordesillas):** Pope divided non-Christian world between Spain and Portugal
- **Mission system:** Franciscan, Dominican, and Jesuit missionaries established missions
- **Forced conversion:** Baptism required; indigenous religious practices suppressed (publicly)
- **Cultural destruction:** Aztec codices burned; Mayan texts destroyed; indigenous oral traditions disrupted

> **Religious Syncretism: Resistance Through Adaptation**

| Syncretic Tradition | Elements Combined | Significance |
|--------------------|------------------|-------------|
| **Our Lady of Guadalupe** | Catholic Virgin Mary + Aztec goddess Tonantzin (same hilltop) | Appeared to indigenous Juan Diego 1531; became central Mexican identity symbol |
| **Santería** | Yoruba (West African) orishas + Catholic saints | Cuban religious syncretism; survived slavery through Catholic camouflage |
| **Candomblé** | West African religions + Catholicism | Brazilian Afro-Catholic syncretism |
| **Day of the Dead** | Catholic All Saints Day + Aztec ancestral veneration | Combines Catholic timing with pre-Columbian death beliefs |

> **Forms of Colonial Resistance**

Colonized peoples resisted through multiple strategies:

- **Armed rebellion:** Pueblo Revolt 1680 (New Mexico); Maroon communities in Jamaica, Brazil, Suriname
- **Syncretism:** Preserving indigenous/African beliefs within Catholic forms
- **Language retention:** Indigenous languages survived; Spanish imposed on top but did not eliminate
- **Oral tradition:** Stories, histories maintained outside written record
- **Maroon communities:** Escaped enslaved peoples established free communities in mountains/forests

> **AP Comparison Anchor**

- **Syncretism in Americas vs. Swahili culture:** Both demonstrate selective cultural incorporation rather than complete replacement
- **Mission system vs. Islamic scholarship in West Africa:** Both used religious institutions to extend political and cultural influence through trade networks''',
     [
        {'q': 'Religious syncretism in colonial Latin America (Our Lady of Guadalupe, Santería) demonstrates:',
         'correct': 'Indigenous and African peoples actively negotiated cultural change by incorporating their own spiritual traditions within acceptable Catholic forms — neither completely resisting nor completely accepting European religious imposition, but creating hybrid practices that preserved indigenous meaning while using Catholic symbols as protective camouflage',
         'others': ['Colonized peoples passively accepted all Catholic teaching with no resistance', 'Syncretism represents the complete replacement of indigenous beliefs by Catholicism', 'The Catholic Church actively designed and encouraged syncretic practices'],
         'exp': 'Syncretism is AP\'s key concept for understanding cultural change under colonialism. The Our Lady of Guadalupe apparition (1531, just 10 years after the conquest) at the site of an Aztec goddess\'s temple demonstrates that indigenous peoples found ways to maintain spiritual connections to their own traditions within Catholic frameworks. This was neither pure resistance nor pure acceptance — it was creative adaptation under conditions of coercion.'},
        {'q': 'Maroon communities (escaped enslaved peoples in Jamaica, Brazil, Suriname) were historically significant because:',
         'correct': 'They demonstrated that enslaved peoples could and did resist and escape colonial bondage, establishing free communities that preserved African cultural traditions, negotiated for legal recognition, and served as a constant challenge to the ideological claim that enslavement was natural or accepted',
         'others': ['Maroon communities were small and had no impact on colonial society', 'Maroon communities maintained friendly relations with slave-holding colonies', 'No enslaved peoples ever successfully escaped colonial labor systems'],
         'exp': 'Maroon communities are AP\'s evidence that enslaved peoples were not passive victims but active resisters. Quilombo dos Palmares in Brazil lasted nearly a century (1605-1694) with 20,000+ inhabitants; Jamaican Maroons negotiated treaties with the British (1739) giving them legal autonomy in exchange for no longer sheltering newly escaped slaves. These communities demonstrate both the possibility of resistance and its limits within colonial power structures.'},
        {'q': 'The Catholic mission system\'s dual role in Spanish colonial governance was:',
         'correct': 'Missions served both religious purposes (converting indigenous peoples, satisfying papal mandate, providing moral justification for colonialism) and political ones (concentrating dispersed indigenous populations in supervised communities where labor could be extracted and compliance with Spanish authority enforced)',
         'others': ['Missions were purely religious with no political function', 'Missions protected indigenous peoples from colonial exploitation', 'Missions were established for purely economic rather than religious purposes'],
         'exp': 'The mission system\'s political function is key: missions reduced the cost of controlling dispersed indigenous populations by concentrating them in supervised communities where priests enforced compliance with Spanish authority without military salary costs. The religious and political functions were inseparable — conversion created subjects; concentration enabled control; labor obligations funded the mission and colonial economy. This dual function explains why both the Crown and the Church supported the mission system.'},
        {'q': 'The destruction of Aztec codices and Mayan texts by Spanish missionaries demonstrates:',
         'correct': 'Colonial cultural domination required active destruction of indigenous knowledge systems — burning codices was not incidental vandalism but deliberate policy to eliminate the intellectual foundations of indigenous religion, history, and governance, making cultural resistance more difficult by destroying the sources of indigenous historical memory',
         'others': ['Spanish missionaries preserved all indigenous texts for scholarly study', 'The destruction of codices had no impact on indigenous cultural continuity', 'Only military conquest, not cultural destruction, characterized Spanish colonialism'],
         'exp': 'The deliberate destruction of indigenous written records is an important AP point about the scope of colonial cultural violence: the few surviving Aztec and Mayan texts (the codices that weren\'t burned) are among the most valuable historical documents in existence precisely because colonial policy systematically destroyed the rest. Bishop Diego de Landa burned dozens of Mayan codices in 1562 — later writing a detailed account of Mayan culture he had helped destroy.'},
        {'q': 'An AP question asks: "Evaluate the extent to which colonized peoples maintained cultural autonomy under European colonialism c. 1500-1750." Which response demonstrates the best reasoning?',
         'correct': 'While European colonialism used both coercion (forced conversion, cultural destruction) and structural power (legal systems, mission concentration) to suppress indigenous and African cultures, colonized peoples maintained significant cultural autonomy through syncretism (preserving beliefs within Catholic forms), language retention, oral tradition, and physical resistance (maroon communities) — suggesting substantial continuity underneath apparent cultural transformation',
         'others': ['Colonized peoples maintained complete cultural autonomy with no changes under colonialism', 'Colonized peoples lost all cultural distinctiveness within one generation of European contact', 'Only military resistance counts as meaningful cultural preservation'],
         'exp': 'This response earns full AP credit by acknowledging both dimensions: the real power of colonial cultural coercion AND the real agency of colonized peoples in maintaining cultural practices. "Cultural autonomy" was never complete (colonial power was real and coercive) and was never entirely lost (syncretism, language retention, and maroon communities demonstrate continuous resistance). The nuanced position — partial preservation through active resistance — is the historically accurate and AP-rewarded answer.'},
        {'q': 'Comparing the cultural consequences of Spanish colonialism in Mesoamerica to Portuguese colonialism in Brazil reveals:',
         'correct': 'Both colonial systems imposed Catholicism and European culture through missions and legal coercion, but different demographic balances (large surviving indigenous population in Mesoamerica; indigenous collapse + African majority in Brazil) produced different syncretic traditions: Mesoamerican syncretism blended Catholic and indigenous traditions; Brazilian syncretism blended Catholic and West African traditions',
         'others': ['Spanish and Portuguese colonial systems had identical cultural consequences', 'Syncretic traditions developed only in Mesoamerica and not in Brazil', 'Colonial cultural imposition was always complete with no indigenous or African cultural survival'],
         'exp': 'This comparison demonstrates AP sophistication by connecting structural conditions (different demographic balances) to cultural outcomes (different syncretic traditions). The demographic reason for the difference: Mesoamerica retained larger surviving indigenous populations who could maintain and transmit indigenous traditions; Brazil\'s indigenous population largely collapsed, and the enslaved African majority created a demographic foundation for African-derived rather than indigenous-derived syncretic practices. Explaining WHY differences exist is always more valuable in AP analysis than just noting them.'},
        {'q': 'What does the emergence of Creole identities (criollos) in Spanish colonial Americas demonstrate about cultural change under colonialism?',
         'correct': 'Colonialism produced new cultural identities that were neither simply "European" nor "indigenous" but distinctly colonial — criollos (American-born Spaniards) developed loyalties to their birth continent that distinguished them from peninsular Spaniards, eventually providing the social foundation for Latin American independence movements in the early 19th century',
         'others': ['Criollos had identical identities and interests to peninsular Spaniards in Spain', 'Colonial-born Europeans never developed distinct cultural identities separate from European-born colonists', 'Cultural identity in colonial Americas was fixed and unchanging throughout the colonial period'],
         'exp': 'The emergence of criollo identity is AP\'s bridge between colonial culture and Latin American independence: criollos born in the Americas developed attachments to their birth regions, resentment of peninsular Spaniards\' political privileges, and eventually a sense of "American" identity distinct from Spanish identity. Simón Bolívar and other independence leaders were criollos — their colonial identities were essential to their revolutionary nationalism. Understanding how colonialism created new hybrid identities is essential for AP analysis of both the colonial and independence periods.'}
     ]
    ),
    (7, 'whex7', 'AP Review and Exam Mastery',
     'Exploration and Columbian Exchange content appears in MCQ, SAQ, LEQ, and DBQ questions. Key prompt types: causes of European exploration, consequences of the Columbian Exchange for different groups, comparison of colonial labor systems, and how global trade networks transformed c. 1450-1750. Mastering specific evidence and causal chains is essential for AP success.',
     '''## 📖 AP Review: Exploration & Columbian Exchange

> **Must-Know Vocabulary**

- **Columbian Exchange** — Exchange of crops, animals, diseases, peoples between Americas and Old World after 1492
- **Caravel** — Portuguese ship with lateen sails; enabled Atlantic and coastal exploration
- **Encomienda** — Spanish grant of indigenous labor to colonists; coercive labor system
- **Mita (colonial)** — Forced labor draft for Potosí silver mines; Spanish repurposing of Inca mit\'a
- **Casta system** — Spanish colonial racial hierarchy; legal status determined by racial identity
- **Potosí** — Bolivian silver mine; largest in colonial world; drove global silver circulation
- **Manila Galleon** — Pacific silver-for-silk trade route; connected Americas and Asia
- **Triangle trade** — Atlantic three-legged circuit: European goods → African enslaved people → American commodities
- **Syncretism** — Cultural blending; e.g., Our Lady of Guadalupe, Santería, Candomblé
- **Maroon communities** — Free communities of escaped enslaved peoples; Quilombo dos Palmares (Brazil), Jamaican Maroons

> **Common AP Prompt Patterns**

- **Causation:** Why did European states invest in maritime exploration c. 1450-1550?
- **Evaluation:** What were the most significant consequences of the Columbian Exchange?
- **Comparison:** Compare Spanish and Portuguese colonial models c. 1500-1750
- **CCOT:** How did global trade networks change c. 1450-1750?
- **Complexity:** How did the Columbian Exchange\'s consequences differ for different peoples?

> **AP Causal Chain to Memorize**

Ottoman trade route control → European commercial motivation → caravel technology + state sponsorship → Portuguese African coast exploration → Vasco da Gama India 1498 → Columbus Americas 1492 → Columbian Exchange → disease + indigenous collapse → labor shortage → enslaved African labor → Atlantic slave trade → global commodity economy (silver, sugar, tobacco) → Manila Galleon → Chinese demand for silver → first global economy c. 1600

> **AP Comparison Table**

| Feature | Spanish Colonial System | Portuguese Colonial System |
|---------|------------------------|---------------------------|
| Primary geography | Americas | Africa, Asia, Brazil |
| Labor system | Encomienda, mita, hacienda | Plantation (Brazil), trading posts (Asia) |
| Key commodity | Silver (Potosí) | Spices, sugar |
| Indigenous relations | Direct control, casta system | Trading partnerships (Asia); plantation (Brazil) |
| Religious mission | Massive conversion effort | Less systematic outside Brazil |''',
     [
        {'q': 'An AP SAQ asks: "Briefly explain ONE cause of European maritime exploration c. 1450-1550." Which response earns full credit?',
         'correct': 'European merchants\' desire to access Asian spice and luxury goods markets without paying Ottoman tolls on overland routes motivated Portuguese investment in African coastal exploration (seeking an ocean route to India via the Cape of Good Hope) — demonstrating that commercial motivation was a primary driver of systematic exploration',
         'others': ['Listing all possible causes without explaining any single one in depth', 'Arguing only religious motivation explains European exploration without connecting to commercial factors', 'Describing exploration outcomes without explaining what caused the exploration to occur'],
         'exp': 'Full SAQ credit requires: claim (desire to bypass Ottoman tolls) + evidence (Portuguese Cape route exploration) + reasoning (commercial motivation drove systematic state investment). The response answers ONE cause specifically rather than trying to list everything — focused, evidenced, reasoned. SAQ responses that try to cover everything typically earn less credit than those that develop ONE cause thoroughly.'},
        {'q': 'For an AP LEQ about the Columbian Exchange\'s consequences, which complexity argument earns the highest score?',
         'correct': 'The Columbian Exchange had fundamentally different consequences for different peoples simultaneously: while New World crops were beginning to increase Old World food security and population, disease was catastrophically reducing Native American populations by 50-90% — demonstrating that historical processes have uneven and contradictory effects on different groups at the same time',
         'others': ['The exchange was uniformly beneficial for all peoples who participated in it', 'The exchange was uniformly catastrophic for all peoples who encountered it', 'Only one type of consequence (crop exchange OR disease) was significant'],
         'exp': 'AP complexity is not about being artificially "balanced" — it\'s about accurately representing historical reality. The same Columbian Exchange → potatoes feeding European peasants AND smallpox killing Native Americans simultaneously. Identifying these contradictory, simultaneous effects on different groups demonstrates that you understand how historical processes actually work: unevenly, with winners and losers, and with consequences that vary dramatically depending on where you are standing.'},
        {'q': 'An AP DBQ includes a document from a Spanish Dominican friar describing indigenous suffering under the encomienda. The most sophisticated sourcing analysis would:',
         'correct': 'Note that the friar\'s religious vocation gave him direct access to indigenous communities (credibility from proximity) while his reform agenda (advocating for New Laws limiting encomienda) shaped his emphasis on suffering rather than other aspects of the system — making the document both valuable evidence of conditions and a product of a specific advocacy purpose',
         'others': ['Dismiss the document entirely because the friar had a religious agenda', 'Accept the document as completely objective because friars were neutral observers', 'Ignore the author\'s purpose and focus only on the document\'s factual content'],
         'exp': 'Sophisticated AP sourcing holds two truths simultaneously: the document has real evidentiary value (the friar witnessed conditions others didn\'t document) AND its content reflects a specific agenda (advocacy for indigenous protection). "Having an agenda" doesn\'t mean "making things up" — it means the document\'s framing, emphasis, and selection reflect the author\'s purpose. Both the value and the limitation are worth noting. AP DBQ sourcing earns credit by explaining HOW the source\'s context affects what it tells us and what it omits.'},
        {'q': 'An AP question asks you to compare the Columbian Exchange to the Black Death as historical demographic events. Which argument is most sophisticated?',
         'correct': 'Both demonstrate how disease transmission via exchange networks produces catastrophic demographic consequences, but in opposite regional directions: the Black Death reduced Old World populations by 30-50%; the Columbian Exchange simultaneously reduced New World populations by 50-90% while beginning to increase Old World populations via new food crops — the same mechanism (disease via exchange) produced regionally opposite outcomes',
         'others': ['The two events are too different chronologically to compare meaningfully', 'Only the Black Death involved significant disease transmission via trade networks', 'The Columbian Exchange and Black Death had identical global demographic consequences'],
         'exp': 'This cross-period comparison demonstrates analytical sophistication: same mechanism (disease via exchange networks) + different contexts (immunologically naive Americas; new food crops flowing to Old World simultaneously) = regionally opposite demographic outcomes. AP rewards arguments that use comparison to generate a broader principle (how exchange networks transmit disease) and then show how the same principle operates differently in different historical contexts.'},
        {'q': 'What is the most significant AP skill demonstrated by analyzing how American silver connected Peru, Spain, and China in a single economic circuit?',
         'correct': 'Tracing global commodity chains across regional boundaries demonstrates that "world history" by 1600 involved genuine global economic integration — a Peruvian indigenous miner\'s forced labor, a Spanish merchant\'s commercial calculation, and a Chinese official\'s tax policy were all parts of a single interconnected system, not three separate regional stories',
         'others': ['This analysis only demonstrates knowledge of Spanish colonial history', 'Global economic connections are only relevant for modern (post-1900) history', 'Analyzing commodity chains requires only economic knowledge with no social dimension'],
         'exp': 'The Potosí-Manila-China silver circuit is AP\'s proof that global history existed before the 20th century. Understanding this requires crossing the boundaries between Latin American history, European colonial history, and Chinese institutional history — which is exactly what AP World History\'s "world" framing demands. The ability to trace connections across regions, periods, and social groups is the core AP World History analytical skill.'},
        {'q': 'For an AP comparison between indigenous labor systems and African slavery in colonial Americas, which argument best demonstrates complexity?',
         'correct': 'Both were coercive labor systems serving colonial extraction, but they differed in their legal status (enslaved Africans were chattel with no legal personhood; indigenous workers under mita/encomienda had theoretically defined legal rights, however violated in practice), racial basis (African slavery was increasingly racial; indigenous labor was political-tributary), and demographic trajectory (indigenous populations declined; African populations in the Americas grew)',
         'others': ['Indigenous labor systems and African slavery were identical in every respect', 'African slavery was always more brutal than any form of indigenous coerced labor', 'Both systems had equal legal protections for workers'],
         'exp': 'This comparison earns complexity credit by identifying meaningful structural differences within a broader similarity (both were coercive): the legal distinction (chattel vs. tributary); the racial basis (African slavery became increasingly racial while indigenous coercion maintained political-tributary framing); and the demographic difference (indigenous decline vs. African growth in the Americas). These structural differences had different long-term consequences — and AP rewards recognizing that.'},
        {'q': 'The most important AP lesson from studying European exploration and the Columbian Exchange is:',
         'correct': 'That the same historical process (European commercial expansion) simultaneously created European wealth, devastated indigenous American populations, built African diaspora communities through forced migration, and transformed Old World agriculture — demonstrating that major historical transformations are never simple stories of progress or decline but involve multiple simultaneous, contradictory outcomes for different peoples',
         'others': ['European exploration was a simple story of European progress and civilization-spreading', 'The Columbian Exchange was purely negative with no beneficial consequences for anyone', 'World history after 1492 is too complex to analyze with the AP framework'],
         'exp': 'The meta-lesson of the Age of Exploration for AP is that the same historical process has radically different meanings depending on where you\'re standing: European commercial prosperity; Native American demographic catastrophe; African diaspora creation; Old World agricultural transformation. This multi-perspective framing — asking "beneficial for whom? catastrophic for whom?" — is the analytical stance AP World History rewards across all periods and topics.'}
     ]
    ),
]

for pnum, id_pre, subtitle, key_concept, content_body, questions in parts:
    w(f'wh-exploration-columbian-exchange-part{pnum}.ts', make_file(pnum, id_pre, subtitle, key_concept, content_body, questions))

print("All exploration parts done!")
