/**
 * Rewrites all 36 APUSH template files (12 topics × parts 1-3) with real historical content.
 * Run: node scripts/rewrite-apush-templates.mjs
 */
import { writeFileSync } from 'fs';
import { join } from 'path';

const LESSONS_DIR = 'src/data/interactive-lessons';

// ─── Topic definitions with real APUSH content ───────────────────────────────

const topics = [
  {
    slug: 'apush-native-societies-exploration',
    varPrefix: 'apushNativeSocietiesExploration',
    idPrefix: 'apushnat',
    parts: [
      {
        // Part 1: Native American Societies Before Contact
        sections: [
          {
            id: 'intro', type: 'text',
            content: `## Native American Societies Before European Contact\n\nBefore Europeans arrived in the Americas, hundreds of diverse Native American societies had developed complex civilizations adapted to their environments.\n\n| Region | Peoples | Key Features |\n|---|---|---|\n| **Southwest** | Pueblo (Ancestral Puebloan) | Multi-story adobe dwellings, irrigation agriculture, corn/beans/squash |\n| **Eastern Woodlands** | Iroquois Confederacy (Haudenosaunee) | Longhouses, matrilineal kinship, Great Law of Peace |\n| **Great Plains** | Lakota, Cheyenne, Comanche | Semi-nomadic, bison hunting, tipi communities |\n| **Pacific Northwest** | Chinook, Tlingit | Salmon fishing, potlatch ceremonies, totem poles |\n| **Mississippi Valley** | Cahokia (Mississippian) | Largest pre-Columbian city north of Mexico (~20,000 people), massive earthen mounds |\n\nThese societies were **NOT** primitive or static. Cahokia (near modern-day St. Louis) had a population rivaling contemporary London. The Iroquois Confederacy's democratic governance structure influenced the framers of the U.S. Constitution.`
          },
          {
            id: 'quiz1', type: 'multiple-choice',
            content: '### Check Your Understanding',
            questions: [
              {
                question: 'Which Native American society built the largest pre-Columbian city north of Mexico?',
                options: ['The Iroquois Confederacy at Onondaga', 'The Mississippian culture at Cahokia', 'The Pueblo people at Mesa Verde', 'The Chinook along the Columbia River'],
                correctAnswer: 1,
                explanation: 'Cahokia, a Mississippian settlement near modern St. Louis, had a population of approximately 20,000 people at its peak around 1100 CE, making it the largest pre-Columbian city north of Mexico.'
              },
              {
                question: 'The Iroquois Confederacy was notable for which of the following political innovations?',
                options: ['A hereditary monarchy passed through the male line', 'A confederal system with democratic elements and the Great Law of Peace', 'A theocratic government led by religious specialists', 'A military dictatorship organized around warfare'],
                correctAnswer: 1,
                explanation: 'The Haudenosaunee (Iroquois) Confederacy united five (later six) nations under the Great Law of Peace, which established democratic governance principles including representative councils and consensus-based decision-making.'
              },
              {
                question: 'How did the environment most directly shape Native American societies in the Pacific Northwest?',
                options: ['Arid conditions required extensive irrigation systems for agriculture', 'Abundant salmon runs supported permanent settlements without agriculture', 'Flat grasslands encouraged nomadic hunting of large mammals', 'Mountainous terrain isolated communities and prevented trade networks'],
                correctAnswer: 1,
                explanation: 'The Pacific Northwest\'s abundant salmon runs and coastal resources allowed peoples like the Chinook and Tlingit to establish permanent settlements and develop complex social hierarchies without relying on agriculture.'
              }
            ]
          },
          {
            id: 'content', type: 'text',
            content: `### European Motivations for Exploration\n\nStarting in the late 1400s, European nations began exploring the Americas, driven by interconnected motivations often summarized as **"God, Gold, and Glory"**:\n\n- **Economic motives**: Finding a western sea route to Asian trade (spices, silk), exploiting New World resources (gold, silver, furs)\n- **Religious motives**: Spreading Christianity; competition between Catholic Spain/Portugal and Protestant England/Netherlands\n- **Political motives**: National prestige, territorial expansion, competition among European powers\n\n**Key explorations:**\n- **1492** — Columbus reaches the Caribbean, believing he found a route to Asia\n- **1519–1521** — Cortés conquers the Aztec Empire\n- **1532** — Pizarro conquers the Inca Empire\n- **1607** — Jamestown: first permanent English settlement\n- **1608** — Champlain founds Quebec for France`
          },
          {
            id: 'input', type: 'input-boxes',
            content: `### Key Dates and Events\n\n**1)** In what year did Columbus first reach the Caribbean?\n\n**2)** What is the name of the first permanent English settlement in North America (founded 1607)?\n\n**3)** The three motivations for European exploration are often summarized as "God, Gold, and ___"`,
            boxes: 3,
            correctAnswers: ['1492', 'Jamestown', 'Glory'],
            hint1: 'Think about the late 15th century',
            hint2: 'Named after King James I of England',
            hint3: 'This word relates to national prestige and fame',
            explanation: 'Columbus reached the Caribbean in 1492. Jamestown, Virginia (1607) was the first permanent English settlement. "God, Gold, and Glory" summarizes European motivations: religious conversion, wealth, and national prestige.'
          },
          {
            id: 'dropdown', type: 'dropdown-select',
            content: '### Match the Explorer to Their Achievement',
            dropdowns: [
              { label: 'Conquered the Aztec Empire (1519-1521)', options: ['Columbus', 'Cortés', 'Pizarro', 'Champlain'] },
              { label: 'Founded Quebec for France (1608)', options: ['Columbus', 'Cortés', 'Pizarro', 'Champlain'] },
              { label: 'Conquered the Inca Empire (1532)', options: ['Columbus', 'Cortés', 'Pizarro', 'Champlain'] }
            ],
            correctAnswers: ['Cortés', 'Champlain', 'Pizarro'],
            hint1: 'This Spanish conquistador allied with Tlaxcala against the Aztecs',
            hint2: 'This French explorer established a fur trading post along the St. Lawrence River',
            hint3: 'This Spanish conquistador captured Atahualpa',
            explanation: 'Hernán Cortés conquered the Aztec Empire (1519-1521), Samuel de Champlain founded Quebec (1608), and Francisco Pizarro conquered the Inca Empire (1532).'
          },
          {
            id: 'strategy', type: 'text',
            content: `### The Columbian Exchange\n\nColumbus's voyages initiated the **Columbian Exchange** — a massive transfer of plants, animals, diseases, and ideas between the Eastern and Western hemispheres.\n\n| From Americas → Europe/Africa/Asia | From Europe/Africa/Asia → Americas |\n|---|---|\n| Corn (maize), potatoes, tomatoes | Wheat, rice, sugarcane |\n| Tobacco, cacao (chocolate) | Horses, cattle, pigs, sheep |\n| Squash, beans, peppers | Smallpox, measles, influenza |\n| Turkey | Coffee |\n\n**The devastating impact of disease**: European diseases (especially smallpox) killed an estimated **90% of the indigenous population** in many areas. This demographic catastrophe — not military superiority — was the primary reason small groups of Europeans could conquer vast empires.`
          },
          {
            id: 'exit', type: 'multiple-choice',
            content: '### Exit Quiz',
            questions: [
              {
                question: 'What was the MOST significant factor enabling small numbers of Spanish conquistadors to conquer large Native American empires?',
                options: ['Superior military technology including cannons and steel armor', 'The devastating impact of European diseases on indigenous populations', 'Alliances with rival indigenous groups who opposed the empires', 'The religious motivation and zeal of the conquistadors'],
                correctAnswer: 1,
                explanation: 'While all factors played a role, epidemic diseases like smallpox killed an estimated 90% of indigenous populations in many areas. This massive demographic collapse was the primary factor enabling European conquest — far more than any military advantage.'
              },
              {
                question: 'Which of the following was transferred from the Americas to Europe as part of the Columbian Exchange?',
                options: ['Horses and cattle', 'Wheat and sugarcane', 'Potatoes and corn (maize)', 'Smallpox and measles'],
                correctAnswer: 2,
                explanation: 'Potatoes and corn (maize) were New World crops that transformed European agriculture and diets after being brought across the Atlantic. Horses, wheat, sugarcane, and diseases traveled in the opposite direction — from Europe to the Americas.'
              }
            ]
          }
        ]
      },
      {
        // Part 2: Spanish, French, and Dutch Colonization
        sections: [
          {
            id: 'intro', type: 'text',
            content: `## Comparing European Colonial Strategies\n\nDifferent European powers established very different types of colonies in the Americas, shaped by their goals, resources, and relationships with Native peoples.\n\n| Colonial Power | Primary Goals | Relationship with Natives | Settlement Pattern |\n|---|---|---|---|\n| **Spain** | Gold, silver, converting Natives to Catholicism | Encomienda system (forced labor), intermarriage (mestizo culture) | Large territorial claims, mission system, haciendas |\n| **France** | Fur trade | Most cooperative: trade alliances, intermarriage, small settlements | Trading posts and forts, minimal land displacement |\n| **Netherlands** | Fur trade, commercial profit | Trade-based, purchased Manhattan (1626) | New Amsterdam (later New York), patroon estates |\n| **England** | Land for settlement, religious freedom, commercial ventures | Most adversarial: displacement, separate communities | Permanent family settlements, self-governing colonies |\n\n**Key concept**: The AP exam frequently asks you to **compare** colonial strategies. Remember: Spain focused on extraction and conversion, France on trade alliances, the Dutch on commerce, and England on permanent agricultural settlement.`
          },
          {
            id: 'quiz1', type: 'multiple-choice',
            content: '### Check Your Understanding',
            questions: [
              {
                question: 'Which European colonial power had the MOST cooperative relationship with Native American peoples?',
                options: ['Spain, through the mission system and intermarriage', 'France, through fur trade alliances and small settlements', 'England, through negotiated treaties and shared governance', 'The Netherlands, through commercial contracts and land purchases'],
                correctAnswer: 1,
                explanation: 'France maintained the most cooperative relationships with Native Americans because their fur trade economy required Native participation as trappers and trading partners. French settlements were small, they often intermarried with Native peoples, and they generally did not seek to displace Native communities from their lands.'
              },
              {
                question: 'The Spanish encomienda system is best described as:',
                options: ['A democratic council of Spanish settlers and Native leaders', 'A system granting colonists the right to force Native labor in exchange for "protection"', 'A network of Catholic missions designed to educate Native children', 'A series of trade agreements between Spain and the Aztec Empire'],
                correctAnswer: 1,
                explanation: 'The encomienda system granted Spanish colonists (encomenderos) the right to extract forced labor from Native Americans in exchange for supposed protection and Christian instruction. In practice, it was a brutal system of exploitation that devastated Native populations.'
              },
              {
                question: 'English colonization in North America was distinctive primarily because it:',
                options: ['Relied heavily on the fur trade with Native Americans', 'Established permanent family-based agricultural settlements', 'Created extensive intermarriage between colonists and Natives', 'Focused on extracting gold and silver for the Crown'],
                correctAnswer: 1,
                explanation: 'Unlike Spain (extraction), France (fur trade), or the Netherlands (commerce), England sent families to establish permanent agricultural settlements. This created the greatest pressure on Native lands and led to the most adversarial relationships with Native peoples.'
              }
            ]
          },
          {
            id: 'content', type: 'text',
            content: `### The Spanish Colonial System in Detail\n\nSpain created the most extensive colonial empire in the Americas, but its labor systems were deeply exploitative:\n\n**Encomienda System** (1500s)\n- Spanish settlers (encomenderos) received grants to extract labor from Native peoples\n- Natives were forced to work mines, farms, and construction projects\n- Bartolomé de Las Casas, a Spanish priest, documented the abuses and advocated for reform\n\n**The Casta System**\n- Spain developed a complex racial hierarchy in its colonies:\n  - **Peninsulares**: Born in Spain (highest status)\n  - **Criollos (Creoles)**: Spanish descent, born in Americas\n  - **Mestizos**: Mixed Spanish and Native heritage\n  - **Indigenous/Enslaved Africans**: Lowest status\n\n**The Mission System**\n- Franciscan and Jesuit missions spread across the Southwest and California\n- Goals: Convert Natives to Catholicism, create loyal Spanish subjects\n- Impact: Disrupted Native cultures, introduced European agriculture, caused devastating epidemics`
          },
          {
            id: 'input', type: 'input-boxes',
            content: `### Key Terms\n\n**1)** What was the name of the Spanish priest who documented abuses of Native peoples and advocated for reform?\n\n**2)** What term describes people of mixed Spanish and Native American heritage in the Spanish colonial casta system?\n\n**3)** What was the Dutch name for their settlement that would later become New York?`,
            boxes: 3,
            correctAnswers: ['Las Casas', 'Mestizo', 'New Amsterdam'],
            hint1: 'Bartolomé de ___',
            hint2: 'Comes from the Spanish word for "mixed"',
            hint3: 'Named after a city in the Netherlands',
            explanation: 'Bartolomé de Las Casas documented Spanish abuses and advocated for Native rights. Mestizo described people of mixed Spanish-Native heritage in the casta system. New Amsterdam was the Dutch settlement on Manhattan, later renamed New York after English takeover in 1664.'
          },
          {
            id: 'dropdown', type: 'dropdown-select',
            content: '### Match the Colonial Power to Its Strategy',
            dropdowns: [
              { label: 'Used the encomienda system for forced labor', options: ['Spain', 'France', 'England', 'Netherlands'] },
              { label: 'Focused primarily on fur trade alliances with Natives', options: ['Spain', 'France', 'England', 'Netherlands'] },
              { label: 'Established permanent agricultural family settlements', options: ['Spain', 'France', 'England', 'Netherlands'] },
              { label: 'Focused on commercial profit through patroon estates', options: ['Spain', 'France', 'England', 'Netherlands'] }
            ],
            correctAnswers: ['Spain', 'France', 'England', 'Netherlands'],
            hint1: 'This Catholic power wanted gold, silver, and converts',
            hint2: 'This power maintained the most cooperative Native relationships',
            hint3: 'This power sent the most families to settle permanently',
            explanation: 'Spain used the encomienda system for forced labor; France focused on fur trade alliances; England established permanent agricultural settlements; and the Netherlands focused on commercial ventures through patroon estates and trading posts.'
          },
          {
            id: 'exit', type: 'multiple-choice',
            content: '### Exit Quiz',
            questions: [
              {
                question: 'A key difference between French and English colonization was that:',
                options: ['The French sought to convert Natives to Protestantism while the English were Catholic', 'The French established small trading posts while the English built large permanent settlements', 'The French brought enslaved Africans while the English relied entirely on indentured servants', 'The French claimed only coastal areas while the English pushed into the interior'],
                correctAnswer: 1,
                explanation: 'France established small fur trading posts and forts (Quebec, Montreal) with relatively few settlers, while England sent large numbers of families to create permanent agricultural communities. This fundamental difference shaped their relationships with Native peoples and the long-term impact on Native lands.'
              },
              {
                question: 'The Spanish casta system ranked colonial society primarily by:',
                options: ['Wealth and land ownership', 'Race and place of birth', 'Religious devotion and church membership', 'Military rank and service'],
                correctAnswer: 1,
                explanation: 'The casta system was a racial hierarchy. Peninsulares (born in Spain) ranked highest, followed by criollos (Spanish descent born in Americas), mestizos (mixed heritage), and indigenous/enslaved peoples at the bottom. Place of birth and racial background determined social status.'
              }
            ]
          }
        ]
      },
      {
        // Part 3: Consequences of Contact & Labor Systems
        sections: [
          {
            id: 'intro', type: 'text',
            content: `## Consequences of European Contact\n\nThe encounter between European and Native American peoples produced lasting consequences that reshaped both hemispheres.\n\n### Demographic Catastrophe\n\nThe most devastating consequence was the massive population decline of Native Americans due to European diseases:\n\n| Disease | Impact |\n|---|---|\n| **Smallpox** | Killed millions across the Americas; mortality rate of 30-90% in unexposed populations |\n| **Measles** | Devastating to populations with no prior exposure |\n| **Influenza** | Spread rapidly through Native communities |\n\n**Estimated population decline**: From approximately **50-100 million** in the pre-contact Americas to roughly **5-10 million** by 1600 — a decline of up to **90%** in some regions.\n\nThis demographic collapse had cascading effects:\n- Opened land for European settlement\n- Weakened Native military resistance\n- Created labor shortages that led to the Atlantic slave trade`
          },
          {
            id: 'quiz1', type: 'multiple-choice',
            content: '### Check Your Understanding',
            questions: [
              {
                question: 'The massive decline in Native American populations after European contact was PRIMARILY caused by:',
                options: ['Warfare with better-armed European armies', 'Introduction of European diseases to which Natives had no immunity', 'Enslavement and forced labor under the encomienda system', 'Famine resulting from the disruption of Native agricultural practices'],
                correctAnswer: 1,
                explanation: 'While warfare, enslavement, and famine all contributed, epidemic diseases — especially smallpox — were responsible for the vast majority of Native American deaths. Populations with no prior exposure had mortality rates of 30-90% during outbreaks.'
              },
              {
                question: 'How did the demographic collapse of Native American populations contribute to the growth of the Atlantic slave trade?',
                options: ['Fewer Native warriors meant Africans were needed as soldiers', 'European powers wanted to punish Africa for trading with Native rivals', 'The death of Native laborers created a demand for alternative sources of forced labor', 'African slaves were more willing to convert to Christianity than Native Americans'],
                correctAnswer: 2,
                explanation: 'As millions of Native Americans died from European diseases, colonial economies (sugar plantations, mines, tobacco farms) faced severe labor shortages. Colonizers turned to enslaved Africans as an alternative labor source, fueling the transatlantic slave trade.'
              }
            ]
          },
          {
            id: 'content', type: 'text',
            content: `### Labor Systems in the Colonies\n\nColonial economies relied on various forms of coerced and semi-free labor:\n\n**Enslaved African Labor**\n- The transatlantic slave trade brought an estimated **12.5 million** Africans to the Americas (1500s-1800s)\n- The **Middle Passage**: brutal transatlantic voyage with mortality rates of 15-20%\n- Chattel slavery: enslaved people were treated as property, a status passed to children\n- Concentrated in plantation agriculture: sugar (Caribbean), tobacco (Virginia), rice (South Carolina)\n\n**Indentured Servitude**\n- Contract labor: typically 4-7 years of work in exchange for passage to America\n- Common in the Chesapeake colonies (Virginia, Maryland) in the 1600s\n- After completing indenture, servants were technically free but often landless\n- Declined as African slavery expanded in the late 1600s\n\n**Headright System**\n- Virginia/Maryland policy: 50 acres of land granted for each person whose passage was paid\n- Encouraged both immigration and the importation of indentured servants\n- Concentrated land in the hands of wealthy planters who could afford many passages`
          },
          {
            id: 'input', type: 'input-boxes',
            content: `### Key Numbers and Terms\n\n**1)** Approximately how many Africans were brought to the Americas through the transatlantic slave trade? (answer in millions, e.g. "12.5 million")\n\n**2)** What was the term for the brutal transatlantic voyage enslaved Africans endured?\n\n**3)** Under the headright system, how many acres were granted per person whose passage was paid?`,
            boxes: 3,
            correctAnswers: ['12.5 million', 'Middle Passage', '50'],
            hint1: 'Between 10 and 15 million',
            hint2: 'The "middle" part of the triangular trade route',
            hint3: 'A round number of acres',
            explanation: 'An estimated 12.5 million Africans were forcibly transported to the Americas. The Middle Passage refers to the transatlantic leg of the triangular trade. The headright system granted 50 acres per person, incentivizing the importation of laborers.'
          },
          {
            id: 'dropdown', type: 'dropdown-select',
            content: '### Match the Labor System to Its Description',
            dropdowns: [
              { label: 'Workers contracted for 4-7 years in exchange for passage to America', options: ['Indentured servitude', 'Chattel slavery', 'Encomienda', 'Headright system'] },
              { label: 'Enslaved people treated as inheritable property', options: ['Indentured servitude', 'Chattel slavery', 'Encomienda', 'Headright system'] },
              { label: '50 acres granted for each person whose passage was paid', options: ['Indentured servitude', 'Chattel slavery', 'Encomienda', 'Headright system'] }
            ],
            correctAnswers: ['Indentured servitude', 'Chattel slavery', 'Headright system'],
            hint1: 'These workers eventually earned their freedom',
            hint2: 'This system was hereditary and permanent',
            hint3: 'This policy distributed land in Virginia and Maryland',
            explanation: 'Indentured servants worked 4-7 years for passage and then were freed. Chattel slavery treated humans as permanent, inheritable property. The headright system granted 50 acres per person to encourage settlement.'
          },
          {
            id: 'exit', type: 'multiple-choice',
            content: '### Exit Quiz',
            questions: [
              {
                question: 'Which of the following best explains why indentured servitude declined in the Chesapeake colonies during the late 1600s?',
                options: ['England passed laws prohibiting emigration to the colonies', 'Planters increasingly turned to enslaved African labor as a permanent, inheritable workforce', 'Indentured servants gained political power and voted to end the system', 'The headright system was abolished by the Crown'],
                correctAnswer: 1,
                explanation: 'As conditions in England improved (reducing the supply of willing indentured servants) and colonial elites sought a more permanent, controllable labor force, planters increasingly turned to enslaved Africans. Unlike indentured servitude, chattel slavery was permanent and hereditary, giving planters a perpetual workforce.'
              },
              {
                question: 'The headright system most directly contributed to:',
                options: ['The development of democratic self-governance in the colonies', 'The concentration of land and wealth among a planter elite', 'The peaceful coexistence of colonists and Native Americans', 'The growth of small, independent family farms throughout Virginia'],
                correctAnswer: 1,
                explanation: 'The headright system granted 50 acres per person whose passage was paid. Wealthy planters who could afford to pay for many servants\' passages accumulated vast estates, concentrating land ownership and creating a powerful planter aristocracy in the Chesapeake region.'
              }
            ]
          }
        ]
      }
    ]
  },

  {
    slug: 'apush-colonial-america',
    varPrefix: 'apushColonialAmerica',
    idPrefix: 'apushcol',
    parts: [
      {
        sections: [
          { id: 'intro', type: 'text', content: `## The Founding of the English Colonies\n\nEngland established 13 colonies along the Atlantic coast, each with distinct origins, economies, and social structures.\n\n| Colony Type | Examples | Founded For | Economy |\n|---|---|---|---|\n| **Corporate/Joint-Stock** | Virginia (1607), Plymouth (1620) | Profit (Virginia), religious freedom (Plymouth) | Tobacco, mixed farming |\n| **Proprietary** | Pennsylvania (1681), Maryland (1634) | Granted to individuals by the king | Grain, trade, tobacco |\n| **Royal** | Massachusetts (converted 1691), Georgia (1733) | Crown-controlled for imperial interests | Varied |\n\n### The Chesapeake vs. New England\n\n**Chesapeake (Virginia, Maryland)**:\n- Motivated by **profit**: tobacco became the cash crop ("brown gold")\n- Mostly young, single men — high mortality, gender imbalance\n- Social hierarchy: planter elite → small farmers → indentured servants → enslaved Africans\n- Jamestown (1607) nearly failed: the "starving time" of 1609-10\n\n**New England (Massachusetts, Connecticut, Rhode Island, New Hampshire)**:\n- Motivated by **religion**: Puritan "city upon a hill" (John Winthrop)\n- Family-based migration — more balanced demographics, longer lifespans\n- Town-meeting democracy, emphasis on education (Harvard, 1636)\n- Economy: fishing, shipbuilding, small-scale farming, trade` },
          { id: 'quiz1', type: 'multiple-choice', content: '### Check Your Understanding', questions: [
            { question: 'Which best explains the key difference between Chesapeake and New England colonial societies?', options: ['The Chesapeake colonies were founded for profit while New England was founded for religious purposes', 'The Chesapeake colonies were French while New England colonies were English', 'The Chesapeake colonies practiced democracy while New England was autocratic', 'The Chesapeake colonies had colder climates while New England was subtropical'], correctAnswer: 0, explanation: 'The Chesapeake region (Virginia, Maryland) was founded primarily for economic profit — especially tobacco cultivation — while New England colonies were founded primarily by Puritans seeking religious freedom and the ability to practice their faith.' },
            { question: 'John Winthrop\'s "city upon a hill" sermon reflected which colonial aspiration?', options: ['Building the wealthiest trading port in the New World', 'Creating a model Puritan community as an example to the world', 'Establishing military forts to defend against Spanish invasion', 'Founding a colony based on complete religious tolerance for all faiths'], correctAnswer: 1, explanation: 'Winthrop\'s 1630 sermon envisioned Massachusetts Bay as a "city upon a hill" — a model Christian community that would serve as an example for the world. This reflected Puritan aspirations for moral and religious leadership.' },
            { question: 'The "starving time" in Jamestown (1609-1610) resulted primarily from:', options: ['A severe drought that destroyed all tobacco crops', 'Colonists\' lack of practical survival skills and poor relations with the Powhatan', 'An embargo imposed by the English Crown on all shipments', 'A devastating smallpox outbreak among the settlers'], correctAnswer: 1, explanation: 'Many early Jamestown settlers were gentlemen unaccustomed to manual labor. Combined with deteriorating relations with the Powhatan Confederacy (which cut off food supplies) and poor planning, the winter of 1609-10 killed roughly 80% of the colonists.' }
          ] },
          { id: 'content', type: 'text', content: `### The Middle Colonies and the Southern Colonies\n\n**Middle Colonies (New York, New Jersey, Pennsylvania, Delaware)**:\n- **Most diverse** region: Dutch, Swedish, English, German, Scots-Irish settlers\n- Pennsylvania founded by **William Penn** (1681) — Quaker colony with religious tolerance\n- **Breadbasket colonies**: wheat, grain, livestock\n- Major port cities: Philadelphia, New York\n\n**Southern Colonies (Virginia, Maryland, Carolinas, Georgia)**:\n- **Plantation economy**: tobacco (Virginia/Maryland), rice and indigo (South Carolina)\n- Relied heavily on **enslaved African labor**, especially after 1680s\n- Large landowners dominated politics and society\n- Georgia (1733): last colony founded, originally as a buffer against Spanish Florida and a haven for debtors` },
          { id: 'input', type: 'input-boxes', content: `### Key Facts\n\n**1)** Who founded Pennsylvania as a Quaker colony in 1681?\n\n**2)** What was the primary cash crop of the Chesapeake colonies?\n\n**3)** What was the last of the 13 colonies to be founded, in 1733?`, boxes: 3, correctAnswers: ['William Penn', 'Tobacco', 'Georgia'], hint1: 'His last name relates to the colony\'s name', hint2: 'Sometimes called "brown gold"', hint3: 'Named after King George II', explanation: 'William Penn founded Pennsylvania as a Quaker haven for religious tolerance. Tobacco was the Chesapeake\'s dominant cash crop. Georgia, founded in 1733, was the last of the original 13 colonies.' },
          { id: 'dropdown', type: 'dropdown-select', content: '### Match the Region to Its Characteristics', dropdowns: [
            { label: 'Known as the "breadbasket" colonies for wheat production', options: ['New England', 'Middle Colonies', 'Chesapeake', 'Deep South'] },
            { label: 'Economy based on tobacco and indentured servitude', options: ['New England', 'Middle Colonies', 'Chesapeake', 'Deep South'] },
            { label: 'Town-meeting democracy and emphasis on education', options: ['New England', 'Middle Colonies', 'Chesapeake', 'Deep South'] },
            { label: 'Rice and indigo plantations relying on enslaved labor', options: ['New England', 'Middle Colonies', 'Chesapeake', 'Deep South'] }
          ], correctAnswers: ['Middle Colonies', 'Chesapeake', 'New England', 'Deep South'], hint1: 'Pennsylvania, New York, New Jersey, Delaware', hint2: 'Virginia and Maryland', hint3: 'Massachusetts, Connecticut, Rhode Island', explanation: 'The Middle Colonies were the breadbasket; the Chesapeake grew tobacco; New England practiced town-meeting democracy; the Deep South (Carolinas/Georgia) developed rice and indigo plantations.' },
          { id: 'exit', type: 'multiple-choice', content: '### Exit Quiz', questions: [
            { question: 'Which colonial region exhibited the GREATEST ethnic and religious diversity?', options: ['New England, due to its policy of welcoming all Protestant sects', 'The Middle Colonies, with Dutch, German, Scots-Irish, and English settlers', 'The Chesapeake, which attracted settlers from across Europe', 'The Deep South, due to the diverse origins of enslaved Africans'], correctAnswer: 1, explanation: 'The Middle Colonies — especially Pennsylvania and New York — attracted the most diverse European settler population, including Dutch, German, Scots-Irish, Swedish, and English immigrants, with varying religious backgrounds from Quaker to Lutheran to Reformed.' },
            { question: 'The shift from indentured servitude to enslaved African labor in Virginia was driven primarily by:', options: ['A royal decree from King Charles II mandating the use of African slaves', 'Improving conditions in England which reduced the supply of willing servants, combined with planters\' desire for a permanent labor force', 'Native Americans\' refusal to trade with colonists who used indentured labor', 'The discovery that Africans were immune to all New World diseases'], correctAnswer: 1, explanation: 'As England\'s economy improved in the late 1600s, fewer people were desperate enough to indenture themselves. Meanwhile, planters preferred enslaved workers because slavery was permanent, hereditary, and gave them complete control over their labor force.' }
          ] }
        ]
      },
      {
        sections: [
          { id: 'intro', type: 'text', content: `## Colonial Economies and Trade\n\n### Mercantilism and the Navigation Acts\n\nEngland's economic relationship with its colonies was governed by **mercantilism** — the theory that a nation's wealth depended on accumulating gold/silver and maintaining a favorable balance of trade.\n\n**Key principles:**\n- Colonies exist to benefit the mother country\n- Colonies should export raw materials to England and import English manufactured goods\n- Trade should be restricted to English ships\n\n**The Navigation Acts (1651-1673)**:\n- Required colonial goods to be shipped on English or colonial ships\n- Certain "enumerated goods" (tobacco, sugar, indigo) could only be sold to England\n- European goods destined for the colonies had to pass through English ports first\n\n**Impact**: The Navigation Acts benefited some colonists (shipbuilders, tobacco planters with guaranteed markets) but angered others (merchants who wanted to trade freely with the Dutch and French). Widespread **smuggling** became common, and England's lax enforcement — called **salutary neglect** — allowed colonists to develop habits of self-governance.` },
          { id: 'quiz1', type: 'multiple-choice', content: '### Check Your Understanding', questions: [
            { question: 'Under the mercantilist system, the primary purpose of England\'s American colonies was to:', options: ['Serve as destinations for English religious dissenters', 'Provide raw materials and markets for English manufactured goods', 'Act as military outposts to counter Spanish expansion', 'Develop independent manufacturing economies'], correctAnswer: 1, explanation: 'Mercantilism viewed colonies as economic tools for the mother country. Colonies were expected to supply raw materials (tobacco, timber, furs) to England and purchase English manufactured goods in return, keeping wealth flowing to the Crown.' },
            { question: 'Salutary neglect refers to England\'s policy of:', options: ['Actively enforcing strict trade regulations on colonial merchants', 'Loosely enforcing trade laws, allowing colonists significant self-governance', 'Neglecting to provide military protection for frontier settlements', 'Deliberately impoverishing the colonies through heavy taxation'], correctAnswer: 1, explanation: 'Salutary neglect was England\'s informal policy of lax enforcement of trade regulations. This "beneficial neglect" allowed colonial economies to grow and colonists to develop traditions of self-governance — which later made them resistant to stricter British control after 1763.' }
          ] },
          { id: 'content', type: 'text', content: `### The Atlantic Economy and Triangular Trade\n\nColonial commerce operated within a complex Atlantic trading network often described as **triangular trade**:\n\n**Route 1 (most common representation):**\n1. **England → Africa**: Manufactured goods (textiles, iron, firearms)\n2. **Africa → Americas**: Enslaved Africans (the Middle Passage)\n3. **Americas → England**: Raw materials (sugar, tobacco, cotton, lumber)\n\n**New England's Role:**\n- New England merchants played a key role by trading rum to Africa for enslaved people, transporting them to the Caribbean, and bringing back molasses to distill into more rum\n- This created enormous wealth for New England port cities like Boston, Newport, and Salem\n\n### Colonial Social Structure\n\nBy the mid-1700s, colonial society had developed distinct hierarchies:\n\n| Class | Description |\n|---|---|\n| **Gentry/Planter Elite** | Large landowners, merchants; dominated colonial legislatures |\n| **Middling Sort** | Small farmers, artisans, shopkeepers; growing class |\n| **Lower Sort** | Laborers, sailors, tenant farmers |\n| **Indentured Servants** | Contract laborers working off passage debt |\n| **Enslaved Africans** | No rights; treated as property; ~20% of colonial population by 1770 |` },
          { id: 'input', type: 'input-boxes', content: `### Key Terms\n\n**1)** What economic theory held that a nation\'s wealth depended on accumulating gold/silver and a favorable balance of trade?\n\n**2)** What were the trade laws requiring colonial goods to be shipped on English ships called?\n\n**3)** What term described England\'s lax enforcement of trade regulations, allowing colonial self-governance?`, boxes: 3, correctAnswers: ['Mercantilism', 'Navigation Acts', 'Salutary neglect'], hint1: 'Comes from "merchant"', hint2: 'These "Acts" concerned shipping and commerce', hint3: 'Two words: a positive-sounding adjective + a word meaning inattention', explanation: 'Mercantilism was the dominant economic theory. The Navigation Acts (1651-1673) regulated colonial trade. Salutary neglect described England\'s lax enforcement that inadvertently fostered colonial independence.' },
          { id: 'dropdown', type: 'dropdown-select', content: '### Match the Trade Route', dropdowns: [
            { label: 'Manufactured goods shipped from England to the African coast', options: ['Leg 1: England → Africa', 'Leg 2: Africa → Americas', 'Leg 3: Americas → England'] },
            { label: 'Enslaved Africans transported across the Atlantic (Middle Passage)', options: ['Leg 1: England → Africa', 'Leg 2: Africa → Americas', 'Leg 3: Americas → England'] },
            { label: 'Raw materials (tobacco, sugar, cotton) shipped to England', options: ['Leg 1: England → Africa', 'Leg 2: Africa → Americas', 'Leg 3: Americas → England'] }
          ], correctAnswers: ['Leg 1: England → Africa', 'Leg 2: Africa → Americas', 'Leg 3: Americas → England'], hint1: 'England exported what it manufactured', hint2: 'The most horrific leg of the journey', hint3: 'Colonies exported what they grew', explanation: 'The triangular trade moved manufactured goods to Africa, enslaved Africans to the Americas (the Middle Passage), and raw materials back to England.' },
          { id: 'exit', type: 'multiple-choice', content: '### Exit Quiz', questions: [
            { question: 'Which of the following was a long-term consequence of England\'s policy of salutary neglect?', options: ['Colonial economies became entirely dependent on English manufactured goods', 'Colonists developed traditions of self-governance that made them resist later British controls', 'The colonies became unable to function without direct English supervision', 'Colonial merchants abandoned smuggling and complied fully with trade laws'], correctAnswer: 1, explanation: 'Decades of salutary neglect allowed colonists to run their own legislatures, trade with whoever they wanted, and develop habits of self-governance. When Britain tried to reassert control after 1763 (with taxes and enforcement), colonists resisted — having grown accustomed to autonomy.' },
            { question: 'By 1770, enslaved Africans made up approximately what proportion of the colonial population?', options: ['About 5% — slavery was rare outside the Caribbean', 'About 20% — a significant minority concentrated in the South', 'About 50% — enslaved people outnumbered free colonists', 'About 75% — the colonial economy was almost entirely slave-based'], correctAnswer: 1, explanation: 'By 1770, enslaved Africans constituted roughly 20% of the total colonial population, though the proportion was much higher in certain areas — particularly South Carolina, where enslaved people outnumbered free whites.' }
          ] }
        ]
      },
      {
        sections: [
          { id: 'intro', type: 'text', content: `## Colonial Political Development\n\n### Self-Governance Traditions\n\nEnglish colonists brought traditions of self-governance and gradually expanded them in the New World:\n\n| Document/Institution | Year | Significance |\n|---|---|---|\n| **Virginia House of Burgesses** | 1619 | First elected legislative assembly in English America |\n| **Mayflower Compact** | 1620 | Plymouth colonists agreed to govern by majority rule — an early social contract |\n| **Fundamental Orders of Connecticut** | 1639 | Often called the first written constitution in America |\n| **Town Meetings** | 1630s+ | Direct democracy in New England towns |\n| **Colonial Assemblies** | Various | Every colony eventually had its own elected legislature |\n\n**Key AP Concept**: Colonial self-governance developed in part because of salutary neglect, geographic distance from London, and the practical necessity of local decision-making.` },
          { id: 'quiz1', type: 'multiple-choice', content: '### Check Your Understanding', questions: [
            { question: 'The Mayflower Compact is historically significant because it:', options: ['Established the first Anglican church in the New World', 'Represented an early agreement to self-govern through majority rule', 'Guaranteed individual rights including freedom of religion', 'Created the first formal alliance between colonists and Native Americans'], correctAnswer: 1, explanation: 'The Mayflower Compact (1620) was signed by Pilgrims before landing, agreeing to create a government based on the consent of the governed and majority rule. It represented an early example of a social contract in American history.' },
            { question: 'The Virginia House of Burgesses (1619) was significant as the:', options: ['First colonial court to try cases of witchcraft', 'First elected legislative assembly in English America', 'First body to declare independence from England', 'First institution to outlaw the slave trade'], correctAnswer: 1, explanation: 'Established in 1619, the House of Burgesses was the first representative legislature in English America. It set a precedent for elected self-governance that spread to all 13 colonies.' }
          ] },
          { id: 'content', type: 'text', content: `### Religious Diversity and Conflict\n\nReligion shaped colonial development in profound ways:\n\n**Puritanism in New England**\n- Massachusetts Bay Colony: "city upon a hill" — a model Puritan community\n- Strict moral codes enforced by law; church membership required for voting\n- **Dissenters were expelled**: Roger Williams (founded Rhode Island, 1636) argued for separation of church and state; Anne Hutchinson challenged Puritan ministers' authority\n\n**The Great Awakening (1730s-1740s)**\n- A massive religious revival that swept the colonies\n- Key preachers: **Jonathan Edwards** ("Sinners in the Hands of an Angry God"), **George Whitefield** (drew enormous crowds)\n- Impact on colonial society:\n  - Challenged established religious authorities\n  - Created new denominations (Baptists, Methodists)\n  - Democratized religion — ordinary people could have a direct relationship with God\n  - United colonists across regional boundaries for the first time\n  - **AP Connection**: The Great Awakening is often cited as a precursor to revolutionary ideas about individual rights and challenging authority` },
          { id: 'input', type: 'input-boxes', content: `### Key Figures\n\n**1)** Who was expelled from Massachusetts and founded Rhode Island on principles of religious freedom and separation of church and state?\n\n**2)** What was the name of the massive religious revival that swept through the colonies in the 1730s-1740s?\n\n**3)** Who preached the famous sermon "Sinners in the Hands of an Angry God"?`, boxes: 3, correctAnswers: ['Roger Williams', 'Great Awakening', 'Jonathan Edwards'], hint1: 'He also advocated for fair treatment of Native Americans', hint2: 'Two words: an adjective meaning large + a word meaning spiritual revival', hint3: 'Not George Whitefield — the other key preacher', explanation: 'Roger Williams founded Rhode Island after being expelled from Massachusetts. The Great Awakening (1730s-1740s) was a massive religious revival. Jonathan Edwards preached "Sinners in the Hands of an Angry God," emphasizing divine wrath and the need for repentance.' },
          { id: 'dropdown', type: 'dropdown-select', content: '### Match the Document/Event to Its Significance', dropdowns: [
            { label: 'First elected legislature in English America', options: ['Mayflower Compact', 'House of Burgesses', 'Fundamental Orders of CT', 'Great Awakening'] },
            { label: 'Early social contract based on majority rule', options: ['Mayflower Compact', 'House of Burgesses', 'Fundamental Orders of CT', 'Great Awakening'] },
            { label: 'Challenged established religious authorities and united colonists', options: ['Mayflower Compact', 'House of Burgesses', 'Fundamental Orders of CT', 'Great Awakening'] }
          ], correctAnswers: ['House of Burgesses', 'Mayflower Compact', 'Great Awakening'], hint1: 'Virginia, 1619', hint2: 'Plymouth, 1620', hint3: '1730s-1740s religious revival', explanation: 'The House of Burgesses (1619) was the first legislature. The Mayflower Compact (1620) was an early social contract. The Great Awakening (1730s-1740s) challenged religious authorities and united colonists.' },
          { id: 'exit', type: 'multiple-choice', content: '### Exit Quiz', questions: [
            { question: 'The Great Awakening of the 1730s-1740s contributed to the American Revolution by:', options: ['Establishing the Catholic Church as the dominant colonial religion', 'Encouraging colonists to question authority and think of themselves as a unified people', 'Creating a colonial army trained by itinerant preachers', 'Convincing the British Parliament to grant the colonies religious autonomy'], correctAnswer: 1, explanation: 'The Great Awakening taught colonists that they could challenge established authorities (religious leaders) and have a direct relationship with God. This spirit of questioning authority, combined with the shared experience uniting colonists across colonies, laid groundwork for revolutionary thinking.' },
            { question: 'Roger Williams and Anne Hutchinson were both expelled from Massachusetts for:', options: ['Practicing Catholicism in a Puritan colony', 'Challenging Puritan religious orthodoxy and authorities', 'Refusing to pay colonial taxes', 'Advocating for armed rebellion against the English Crown'], correctAnswer: 1, explanation: 'Williams argued for separation of church and state and fair treatment of Natives. Hutchinson challenged the authority of Puritan ministers with her theological interpretations. Both were expelled for dissenting from the strict Puritan orthodoxy of Massachusetts Bay.' }
          ] }
        ]
      }
    ]
  },

  {
    slug: 'apush-colonial-society-conflicts',
    varPrefix: 'apushColonialSocietyConflicts',
    idPrefix: 'apushcsc',
    parts: [
      {
        sections: [
          { id: 'intro', type: 'text', content: `## Colonial Society and Conflicts\n\n### Bacon\'s Rebellion (1676)\n\nOne of the most important events in colonial Virginia — it exposed class tensions and accelerated the shift to enslaved African labor.\n\n**Background and Causes:**\n- Frontier farmers (many former indentured servants) wanted to expand westward into Native territory\n- Governor William Berkeley refused to authorize attacks on Natives — he profited from the fur trade\n- **Nathaniel Bacon** rallied frontiersmen and attacked both Natives and the colonial government\n\n**What happened:**\n1. Bacon organized unauthorized militia attacks on Native villages\n2. He marched on Jamestown and burned it to the ground\n3. Bacon died of dysentery; the rebellion collapsed\n4. Berkeley executed 23 rebels\n\n**Why it matters for the AP exam:**\n- Exposed tensions between **wealthy coastal elites** and **poor frontier settlers**\n- Showed that armed poor whites (many former indentured servants) were dangerous to the social order\n- **Accelerated the transition to enslaved African labor**: Elites realized enslaved Africans could never become armed, land-hungry freemen demanding political rights` },
          { id: 'quiz1', type: 'multiple-choice', content: '### Check Your Understanding', questions: [
            { question: 'Bacon\'s Rebellion is most significant in AP US History because it:', options: ['Led to the immediate abolition of slavery in Virginia', 'Demonstrated class tensions and accelerated the shift from indentured servitude to African slavery', 'Established the first democratic government in Virginia', 'Resulted in a major peace treaty between colonists and Native Americans'], correctAnswer: 1, explanation: 'Bacon\'s Rebellion revealed dangerous class tensions between wealthy elites and poor freemen. In response, Virginia\'s planter class increasingly turned to enslaved Africans — who, unlike freed indentured servants, could never demand land, vote, or rebel as armed citizens.' },
            { question: 'Which groups were in conflict during Bacon\'s Rebellion?', options: ['English colonists vs. French settlers over territorial claims', 'Poor frontier farmers vs. the wealthy colonial elite and the colonial governor', 'Puritan ministers vs. colonial legislatures over religious policy', 'Enslaved Africans vs. plantation owners in a major slave revolt'], correctAnswer: 1, explanation: 'Bacon\'s Rebellion pitted poor frontier farmers (many former indentured servants who wanted Native land) against Governor Berkeley and the wealthy coastal elite who controlled Virginia\'s government and profited from existing trade relationships.' }
          ] },
          { id: 'content', type: 'text', content: `### The Salem Witch Trials (1692)\n\nThe Salem witch trials are a window into the anxieties of colonial New England society.\n\n**What happened:**\n- In Salem Village, Massachusetts, several young girls accused neighbors of witchcraft\n- Over 200 people were accused; 20 were executed (19 hanged, 1 pressed to death)\n- The accused were disproportionately **women**, particularly those who were economically independent, outspoken, or socially marginal\n\n**Underlying causes:**\n- Tensions between commercial Salem Town and agricultural Salem Village\n- Frontier anxiety: recent Native American attacks (King William\'s War)\n- Religious anxiety: Puritan society feared its moral standards were declining\n- Gender dynamics: women who defied social norms were targeted\n\n**AP Significance**: The trials illustrate how social stress, religious fervor, and gender roles intersected in colonial society. They also represent the dangers of **mass hysteria** and the breakdown of due process.\n\n### King Philip\'s War (1675-1678)\n\n- **Most destructive conflict** in colonial New England (per capita, deadlier than the Civil War for New England)\n- Wampanoag leader **Metacom** (called "King Philip" by the English) united Native groups against English expansion\n- Result: Natives devastated; English destroyed 12 towns\n- Ended major Native resistance in New England` },
          { id: 'input', type: 'input-boxes', content: `### Key Details\n\n**1)** In what year did Bacon\'s Rebellion take place?\n\n**2)** In what colony/town did the witch trials of 1692 occur?\n\n**3)** What was the Native American name of the leader the English called "King Philip"?`, boxes: 3, correctAnswers: ['1676', 'Salem', 'Metacom'], hint1: 'Late 1600s, during the reign of Charles II', hint2: 'A village in Massachusetts', hint3: 'Starts with M — he was a Wampanoag leader', explanation: 'Bacon\'s Rebellion was in 1676. The Salem witch trials occurred in Salem, Massachusetts in 1692. Metacom (King Philip) was the Wampanoag leader who organized Native resistance against English expansion.' },
          { id: 'dropdown', type: 'dropdown-select', content: '### Match the Event to Its Significance', dropdowns: [
            { label: 'Accelerated the shift from indentured servitude to African slavery', options: ['Bacon\'s Rebellion', 'Salem Witch Trials', 'King Philip\'s War', 'Great Awakening'] },
            { label: 'Illustrated the intersection of social stress, gender roles, and religious anxiety', options: ['Bacon\'s Rebellion', 'Salem Witch Trials', 'King Philip\'s War', 'Great Awakening'] },
            { label: 'Ended major Native American resistance in New England', options: ['Bacon\'s Rebellion', 'Salem Witch Trials', 'King Philip\'s War', 'Great Awakening'] }
          ], correctAnswers: ['Bacon\'s Rebellion', 'Salem Witch Trials', 'King Philip\'s War'], hint1: 'Virginia, 1676', hint2: 'Massachusetts, 1692', hint3: '1675-1678, Metacom/King Philip', explanation: 'Bacon\'s Rebellion accelerated the shift to slavery. The Salem witch trials reflected social anxieties. King Philip\'s War devastated Native resistance in New England.' },
          { id: 'exit', type: 'multiple-choice', content: '### Exit Quiz', questions: [
            { question: 'The Salem witch trials most directly reflected tensions related to:', options: ['Conflict between English and French colonial powers', 'Social anxieties including gender roles, religious decline, and frontier warfare', 'Disputes over land between Native Americans and colonial governments', 'Economic competition between Northern and Southern colonies'], correctAnswer: 1, explanation: 'The Salem trials were fueled by multiple anxieties: fears of Native attacks on the frontier (King William\'s War), concerns about declining Puritan moral standards, tensions between agricultural and commercial communities, and gender dynamics targeting women who defied social norms.' },
            { question: 'After Bacon\'s Rebellion, Virginia\'s planter elite increasingly turned to enslaved African labor rather than indentured servants because:', options: ['African slaves were more skilled agricultural workers than European servants', 'Enslaved Africans could never become armed freemen demanding land and political rights', 'The English Crown mandated the use of African labor in all tobacco colonies', 'Indentured servants were banned from the colonies by Parliament'], correctAnswer: 1, explanation: 'The key insight from Bacon\'s Rebellion was that freed indentured servants became a dangerous, landless class who could unite and rebel. Enslaved Africans, by contrast, were permanently unfree and could never become the kind of armed, politically demanding freemen who had followed Bacon.' }
          ] }
        ]
      },
      {
        sections: [
          { id: 'intro', type: 'text', content: `## The French and Indian War (1754-1763)\n\n### Causes and Context\n\nThe French and Indian War was the North American theater of the global **Seven Years\' War** — and it fundamentally transformed Britain\'s relationship with its colonies.\n\n**Background:**\n- Both Britain and France claimed the Ohio River Valley\n- France built a chain of forts connecting Canada to Louisiana\n- **George Washington** (age 21) was sent to demand the French withdraw — they refused\n- Washington\'s skirmish at Fort Necessity (1754) helped spark the war\n\n**Key events:**\n- **Albany Plan of Union (1754)**: Benjamin Franklin proposed colonial unity for defense — rejected by all colonies and the Crown, but foreshadowed later cooperation\n- **1755-1757**: Britain suffered early defeats — French and Native allies dominated the frontier\n- **1758-1763**: William Pitt invested massive resources; British captured Quebec (1759), Montreal (1760)\n- **Treaty of Paris (1763)**: France ceded Canada and all territory east of the Mississippi to Britain; Spain ceded Florida` },
          { id: 'quiz1', type: 'multiple-choice', content: '### Check Your Understanding', questions: [
            { question: 'The Albany Plan of Union (1754) is historically significant because it:', options: ['Successfully united all thirteen colonies under a single military command', 'Was the first major proposal for colonial unity, foreshadowing later revolutionary cooperation', 'Established a permanent alliance between British colonies and the Iroquois Confederacy', 'Created the first colonial tax to fund frontier defense'], correctAnswer: 1, explanation: 'Although the Albany Plan was rejected by every colony and the Crown, Benjamin Franklin\'s proposal was the first significant attempt at colonial unity. Its failure showed that colonists were not yet ready to cooperate — but the idea of union would resurface during the Revolution.' },
            { question: 'The Treaty of Paris (1763) changed North American geography by:', options: ['Giving France control of all territory west of the Mississippi River', 'Eliminating France as a major power in North America and expanding British territory dramatically', 'Establishing the Mississippi River as the permanent border between British and Spanish claims', 'Returning all conquered territory to its pre-war owners'], correctAnswer: 1, explanation: 'The Treaty of Paris (1763) gave Britain all French territory east of the Mississippi plus Canada, and Spain ceded Florida. France was effectively eliminated as a North American colonial power, and Britain controlled most of eastern North America.' }
          ] },
          { id: 'content', type: 'text', content: `### Consequences of the French and Indian War\n\nThe war\'s aftermath set the stage for the American Revolution:\n\n**1. Massive British War Debt**\n- The war doubled Britain\'s national debt\n- Parliament decided the colonies should help pay — leading to new taxes\n\n**2. End of Salutary Neglect**\n- Britain began strictly enforcing trade laws and imposing new regulations\n- The contrast with decades of self-governance infuriated colonists\n\n**3. Proclamation of 1763**\n- Forbade colonial settlement west of the Appalachian Mountains\n- Intended to reduce conflicts with Natives (and the cost of frontier defense)\n- Colonists were furious — many had fought the war specifically to gain access to western lands\n\n**4. Changed Colonial Attitudes**\n- Colonists gained military experience and confidence fighting alongside (and without) British regulars\n- The removal of the French threat meant colonists no longer needed British military protection\n- Native Americans lost their ability to play European powers against each other\n\n**AP Key Concept**: The French and Indian War was the **turning point** that ended Britain\'s salutary neglect and began the chain of events leading to revolution.` },
          { id: 'input', type: 'input-boxes', content: `### Key Terms and Events\n\n**1)** What 1763 proclamation forbade colonial settlement west of the Appalachian Mountains?\n\n**2)** Who proposed the Albany Plan of Union in 1754?\n\n**3)** What battle in 1759 effectively decided the French and Indian War when the British captured this Canadian city?`, boxes: 3, correctAnswers: ['Proclamation of 1763', 'Benjamin Franklin', 'Quebec'], hint1: 'Named after the year it was issued', hint2: 'Polymath, inventor, diplomat, Founding Father', hint3: 'Capital of New France on the St. Lawrence River', explanation: 'The Proclamation of 1763 banned western settlement. Benjamin Franklin proposed the Albany Plan of Union. The Battle of Quebec (1759) was the turning point when British forces captured the capital of New France.' },
          { id: 'dropdown', type: 'dropdown-select', content: '### Match the Consequence to Its Effect', dropdowns: [
            { label: 'Led Parliament to impose new taxes on the colonies', options: ['Massive war debt', 'Proclamation of 1763', 'End of salutary neglect', 'Removal of French threat'] },
            { label: 'Angered colonists who wanted western land', options: ['Massive war debt', 'Proclamation of 1763', 'End of salutary neglect', 'Removal of French threat'] },
            { label: 'Meant colonists no longer needed British military protection', options: ['Massive war debt', 'Proclamation of 1763', 'End of salutary neglect', 'Removal of French threat'] }
          ], correctAnswers: ['Massive war debt', 'Proclamation of 1763', 'Removal of French threat'], hint1: 'Britain needed revenue after an expensive global war', hint2: 'Banned settlement beyond the Appalachians', hint3: 'With France gone, why keep British troops?', explanation: 'War debt drove new taxation. The Proclamation of 1763 blocked western expansion. With France eliminated, colonists questioned the need for British military presence.' },
          { id: 'exit', type: 'multiple-choice', content: '### Exit Quiz', questions: [
            { question: 'The French and Indian War is considered a turning point in American history primarily because it:', options: ['Established permanent peace between colonists and Native Americans', 'Led Britain to end salutary neglect and impose new controls that provoked colonial resistance', 'Gave France control of the Mississippi River Valley', 'United all thirteen colonies behind the Albany Plan of Union'], correctAnswer: 1, explanation: 'The war\'s massive cost prompted Britain to end decades of salutary neglect and begin taxing/regulating the colonies directly. This dramatic shift — from benign neglect to active control — created the colonial grievances that led to revolution.' },
            { question: 'For Native Americans, the most significant consequence of the French and Indian War was that:', options: ['They gained formal recognition of their sovereignty from Britain', 'They lost the ability to play European powers against each other for favorable terms', 'They were invited to participate in colonial legislatures as equals', 'They successfully negotiated permanent territorial boundaries with Britain'], correctAnswer: 1, explanation: 'Before 1763, Native Americans could negotiate with both Britain and France, playing them against each other for better trade terms and territorial protections. With France eliminated, Natives faced a single, expansionist British colonial power with no counterbalance.' }
          ] }
        ]
      },
      {
        sections: [
          { id: 'intro', type: 'text', content: `## Slavery and Race in Colonial America\n\n### The Development of Racial Slavery\n\nThe institution of racial slavery evolved gradually in the English colonies, hardening into law over the 1600s.\n\n**Timeline of key developments:**\n\n| Year | Event |\n|---|---|\n| **1619** | First Africans arrive in Virginia — status unclear (some treated as indentured servants) |\n| **1640** | John Punch case: an African servant is sentenced to lifelong servitude while white companions receive shorter terms |\n| **1662** | Virginia law: a child\'s status follows the mother (*partus sequitur ventrem*) — children of enslaved women are automatically enslaved |\n| **1676** | Bacon\'s Rebellion: poor whites and blacks united, alarming elites |\n| **1691** | Virginia bans interracial marriage |\n| **1705** | Virginia Slave Codes: comprehensive laws defining enslaved people as property |\n\n**Key AP insight**: Racial slavery was not inevitable — it was **constructed** through specific laws and economic choices over nearly a century. The sharp racial line between "white" and "black" was created partly to **prevent the kind of interracial lower-class unity** seen in Bacon\'s Rebellion.` },
          { id: 'quiz1', type: 'multiple-choice', content: '### Check Your Understanding', questions: [
            { question: 'The Virginia law of 1662 establishing that a child\'s status followed the mother\'s status was significant because it:', options: ['Granted freedom to all children born in Virginia regardless of race', 'Ensured that children of enslaved women would be born into slavery, making slavery hereditary', 'Required mothers to educate their children in Puritan religious practices', 'Established equal inheritance rights for children of all racial backgrounds'], correctAnswer: 1, explanation: 'The 1662 law (partus sequitur ventrem) made slavery hereditary through the mother. This meant slave owners could increase their enslaved workforce through reproduction, and children born of enslaved women — including those fathered by white men — were automatically enslaved.' },
            { question: 'Bacon\'s Rebellion contributed to the hardening of racial slavery because:', options: ['Bacon himself was an enslaved African who led a slave revolt', 'The rebellion showed elites that a unified lower class of poor whites and blacks was dangerous', 'The British Crown required all colonies to adopt racial slavery after 1676', 'Native Americans demanded that colonists stop using indentured European servants'], correctAnswer: 1, explanation: 'During Bacon\'s Rebellion, poor whites and blacks fought together against the colonial elite. This alarmed Virginia\'s planter class, who responded by creating sharper racial distinctions — giving poor whites higher status than blacks to prevent future cross-racial alliances.' }
          ] },
          { id: 'content', type: 'text', content: `### Regional Variations in Slavery\n\nSlavery looked very different across the colonies:\n\n**The Chesapeake (Virginia, Maryland)**\n- Tobacco plantations: enslaved workers cultivated, harvested, and processed tobacco\n- Relatively smaller plantations (20-50 enslaved people)\n- By 1750, natural reproduction sustained the enslaved population (unlike the Caribbean)\n\n**The Lowcountry (South Carolina, Georgia)**\n- Rice cultivation: the **task system** gave enslaved workers more autonomy\n- **Stono Rebellion (1739)**: largest slave uprising in colonial America — ~80 enslaved people marched toward Spanish Florida\n- African cultural retention was strongest here (Gullah/Geechee culture)\n- Enslaved people often outnumbered whites 2:1\n\n**The North**\n- Slavery existed but on a smaller scale: domestic servants, skilled artisans, dock workers\n- Northern merchants profited enormously from the slave trade and slave-produced goods\n- Gradual abolition began in the North after the Revolution\n\n**Resistance and Agency**\n- Enslaved people were not passive victims — they resisted through:\n  - Work slowdowns and sabotage\n  - Running away (some to Spanish Florida or Native communities)\n  - Maintaining African cultural practices, languages, and religions\n  - Organized revolts (Stono Rebellion, 1739)` },
          { id: 'input', type: 'input-boxes', content: `### Key Events and Terms\n\n**1)** What was the name of the largest slave uprising in colonial America (1739, South Carolina)?\n\n**2)** What year were the first Africans brought to Virginia?\n\n**3)** What labor system in the Lowcountry gave enslaved workers autonomy after completing assigned work?`, boxes: 3, correctAnswers: ['Stono Rebellion', '1619', 'Task system'], hint1: 'Named after the Stono River where it began', hint2: 'Same year as the first meeting of the House of Burgesses', hint3: 'Workers had a daily "___" to complete, after which their time was their own', explanation: 'The Stono Rebellion (1739) in South Carolina was the largest colonial slave revolt. The first Africans arrived in Virginia in 1619. The task system assigned daily tasks; once completed, enslaved workers had relative autonomy.' },
          { id: 'dropdown', type: 'dropdown-select', content: '### Match the Region to Its Characteristics of Slavery', dropdowns: [
            { label: 'Rice cultivation, task system, strongest African cultural retention', options: ['Chesapeake', 'Lowcountry', 'Northern colonies'] },
            { label: 'Tobacco plantations, smaller scale, natural population growth by 1750', options: ['Chesapeake', 'Lowcountry', 'Northern colonies'] },
            { label: 'Domestic servants and skilled artisans, merchants profited from slave trade', options: ['Chesapeake', 'Lowcountry', 'Northern colonies'] }
          ], correctAnswers: ['Lowcountry', 'Chesapeake', 'Northern colonies'], hint1: 'South Carolina and Georgia', hint2: 'Virginia and Maryland', hint3: 'Slavery on a smaller scale but merchants benefited', explanation: 'The Lowcountry (SC/GA) featured rice cultivation and the task system with strong African cultural retention. The Chesapeake relied on tobacco with smaller plantations. Northern colonies had smaller-scale slavery but profited from the slave trade.' },
          { id: 'exit', type: 'multiple-choice', content: '### Exit Quiz', questions: [
            { question: 'The transition from indentured servitude to racial slavery in Virginia was driven by all of the following EXCEPT:', options: ['Improving economic conditions in England that reduced the supply of willing servants', 'A royal decree from King Charles II mandating racial slavery in all tobacco colonies', 'Elites\' desire for a permanent, inheritable labor force after Bacon\'s Rebellion', 'The adoption of laws like partus sequitur ventrem that made slavery hereditary'], correctAnswer: 1, explanation: 'There was no royal decree mandating slavery. The shift was driven by economic factors (fewer willing servants), social fears (Bacon\'s Rebellion showed dangers of a free lower class), and legal changes (hereditary slavery laws). The transition was gradual and driven by colonial elites, not imposed by the Crown.' },
            { question: 'The Stono Rebellion (1739) most directly resulted in:', options: ['The gradual abolition of slavery in South Carolina', 'Stricter slave codes and harsher restrictions on enslaved people\'s movements', 'A treaty between enslaved Africans and colonial authorities', 'The end of the transatlantic slave trade to the Southern colonies'], correctAnswer: 1, explanation: 'After the Stono Rebellion, South Carolina passed the Negro Act of 1740, imposing much harsher restrictions: prohibiting enslaved people from learning to read, assembling in groups, growing their own food, or earning money. The colony also temporarily halted slave imports.' }
          ] }
        ]
      }
    ]
  }
];

// I'll add the remaining 10 topics in a continuation. First let me write the generation logic.

// Helper to format a section into TypeScript
function sectionToTS(section, prefix, partNum) {
  const fullId = `${prefix}${partNum}-${section.id}`;
  
  if (section.type === 'text') {
    return `    {
      id: '${fullId}',
      type: 'text' as const,
      content: ${JSON.stringify(section.content)}
    }`;
  }
  
  if (section.type === 'multiple-choice') {
    const qs = section.questions.map(q => `        {
          question: ${JSON.stringify(q.question)},
          options: ${JSON.stringify(q.options)},
          correctAnswer: ${q.correctAnswer},
          explanation: ${JSON.stringify(q.explanation)}
        }`).join(',\n');
    return `    {
      id: '${fullId}',
      type: 'multiple-choice' as const,
      content: ${JSON.stringify(section.content)},
      exercise: {
        questions: [
${qs}
        ]
      }
    }`;
  }
  
  if (section.type === 'input-boxes') {
    return `    {
      id: '${fullId}',
      type: 'input-boxes' as const,
      content: ${JSON.stringify(section.content)},
      exercise: {
        boxes: ${section.boxes},
        correctAnswers: ${JSON.stringify(section.correctAnswers)},
        hint1: ${JSON.stringify(section.hint1)},
        hint2: ${JSON.stringify(section.hint2)},
        hint3: ${JSON.stringify(section.hint3)},
        explanation: ${JSON.stringify(section.explanation)}
      }
    }`;
  }
  
  if (section.type === 'dropdown-select') {
    const dds = section.dropdowns.map(d => `          { label: ${JSON.stringify(d.label)}, options: ${JSON.stringify(d.options)} }`).join(',\n');
    return `    {
      id: '${fullId}',
      type: 'dropdown-select' as const,
      content: ${JSON.stringify(section.content)},
      exercise: {
        dropdowns: [
${dds}
        ],
        correctAnswers: ${JSON.stringify(section.correctAnswers)},
        hint1: ${JSON.stringify(section.hint1)},
        hint2: ${JSON.stringify(section.hint2)},
        hint3: ${JSON.stringify(section.hint3)},
        explanation: ${JSON.stringify(section.explanation)}
      }
    }`;
  }
  
  return '    // Unknown section type';
}

function generateFile(topic, partIndex) {
  const partNum = partIndex + 1;
  const varName = `${topic.varPrefix}Part${partNum}Data`;
  const part = topic.parts[partIndex];
  
  const sectionsTS = part.sections.map(s => sectionToTS(s, topic.idPrefix, partNum)).join(',\n');
  
  return `export const ${varName} = {
  topicSlug: '${topic.slug}',
  sections: [
${sectionsTS}
  ]
};
`;
}

// Generate and write files
let count = 0;
for (const topic of topics) {
  for (let i = 0; i < topic.parts.length; i++) {
    const partNum = i + 1;
    const filename = `${topic.slug}-part${partNum}.ts`;
    const filepath = join(LESSONS_DIR, filename);
    const content = generateFile(topic, i);
    writeFileSync(filepath, content, 'utf8');
    count++;
    console.log(`✅ Wrote ${filename}`);
  }
}

console.log(`\nDone! Wrote ${count} files.`);
