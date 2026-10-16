export const whMaritimeEmpiresLaborPart3Data = {
  topicSlug: 'wh-maritime-empires-labor',
  sections: [
    {
      id: 'whmelf3-intro',
      type: 'text' as const,
      content: `
# ⚓ Maritime Empires & Labor Systems (c. 1450–1750, and after 1833)

**Part 3 of 7 — Colonial Labor Systems: Coercion and Exploitation**

---

> 📅 **Time frame:** Encomienda, mita and chattel slavery belong to c. 1450–1750. The indentured labor at the end of this part came after British emancipation (1833) and is tested with Unit 6 migration.

> 🔑 **Key Concept:** Colonial labor systems — encomienda, mita, debt peonage, chattel slavery, and indentured servitude — were the mechanisms through which colonial economies extracted value from human bodies. AP questions compare these systems, evaluate their racial and legal dimensions, and connect labor coercion to global commodity production.
      `
    },
    {
      id: 'whmelf3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The progressive racialization of chattel slavery in colonial Americas (African descent = enslaved status) was significant because:',
            options: [
              'It made slavery a permanent, inherited status tied to African ancestry rather than to capture or debt',
              'It made slavery a temporary status tied to religion, ending once enslaved Africans were baptized',
              'It made slavery a legal category open to any group, applied equally to Europeans and Africans',
              'It made slavery a matter of private custom, with colonial courts refusing to define who could be enslaved',
            ],
            correctAnswer: 0,
            explanation: 'The racialization of slavery in the Americas was a specific historical development, not a timeless feature of slavery: it turned a legal category into a racial one, creating a permanent, heritable status that made race the primary determinant of legal standing. Early colonial Spanish law enslaved both indigenous peoples and Africans; over time, legal reforms extended protections to indigenous peoples while stripping Africans of legal personhood. Laws such as Virginia\'s 1662 statute (enslaved status heritable through the mother, later built into the 1705 slave codes) and the rule that baptism did not bring freedom created the legal infrastructure of racial hierarchy that would persist after emancipation.'
          },
          {
            question: 'Indentured servitude (replacing chattel slavery after British emancipation 1833) was significant because:',
            options: [
              'Nominally free contract labor could be made nearly as coercive as the system before it',
              'Contract labor brought fair wages and land to most workers once their terms of service ended',
              'Contract labor drew mainly on European migrants, as Asian workers were barred from British colonies',
              'Contract labor ended within a decade of 1833, as planters switched to machines for cane cutting',
            ],
            correctAnswer: 0,
            explanation: 'Indentured servitude after emancipation is an AP-important continuity: fixed-term contracts, deceptive recruitment, brutal conditions, and rarely honored promises of land showed that colonial economies could adapt to abolition while maintaining exploitative labor extraction. Indenture to the Caribbean, Mauritius, Fiji and elsewhere lasted into the early 20th century (Indian indenture ended in 1917). Abolishing one legal form of coercion doesn\'t necessarily end exploitation; it often produces new institutional forms that serve the same economic function.'
          }
        ]
      }
    },
    {
      id: 'whmelf3-content',
      type: 'text' as const,
      content: `
## 📖 Colonial Labor Systems

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
- By 17th century: indigenous peoples' legal status improved (New Laws 1542); African slavery expanded
- Race as justification: African descent became legally synonymous with enslavement in many colonial codes
- "Slave codes" (e.g., Virginia's 1662 law, later built into the 1705 code): defined enslaved status as heritable through the mother
- Racial lines hardened: African descent became presumptive evidence of enslaved status in many jurisdictions (the later US "one drop rule," which classed anyone with any African ancestry as Black, came only in the 19th–20th centuries)

> **Indentured Servitude**

After British emancipation (1833), indentured servitude replaced slave labor on some plantations:

- Primarily recruited from India, China, West Africa to British Caribbean and other colonies
- Fixed-term contracts (typically 5 years); promised freedom and sometimes land afterward
- Conditions often as brutal as slavery; contracts rarely honored completely
- British Indian indentured laborers: ~1.5 million sent to Trinidad, Guyana, Fiji, Mauritius 1838-1916
- Created South Asian diaspora communities across the British Empire

> **AP Comparison Anchor**

- **Encomienda vs. feudal serfdom:** Both bound workers to land/overlords with limited legal recourse; encomienda specifically denied rights based on indigenous status
- **Chattel slavery vs. earlier slavery forms:** Ancient/medieval slavery was not uniformly racial; American chattel slavery's racial basis was more systematic and heritable
      `
    },
    {
      id: 'whmelf3-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Virginia\'s 1662 law defining enslaved status as heritable through the mother (later built into the 1705 Slave Codes) demonstrates:',
            options: [
              'How colonial lawmakers designed the law so enslaved women\'s children stayed enslaved regardless of their fathers',
              'How colonial lawmakers copied English common law, under which a child took the father\'s status',
              'How colonial lawmakers mainly sought to protect enslaved families by keeping enslaved mothers and children together',
              'How colonial lawmakers mainly addressed free people of color, defining their rights to own property',
            ],
            correctAnswer: 0,
            explanation: 'The "partus sequitur ventrem" rule (status follows the womb) was a deliberate legal construction that maximized the value of enslaved women to enslavers: every child born of an enslaved mother became the enslaver\'s property regardless of the father. Virginia borrowed the principle from Roman slave law and broke with English common law (under which a child took the father\'s status), specifically to prevent the children of enslaver-enslaved relationships from being free. Understanding this as deliberate legal engineering — not natural custom — is key AP analysis.'
          },
          {
            question: 'Comparing colonial debt peonage to feudal serfdom reveals:',
            options: [
              'Both tied workers down, but peonage used unpayable debt where labor was nominally free',
              'Both tied workers down, and both rested on the same legal codes inherited from medieval Spanish law',
              'Both tied workers down only loosely, and differed mainly in the crops grown and the size of the estates',
              'Peonage was strictly voluntary, while serfdom was imposed by law and enforced by royal armies',
            ],
            correctAnswer: 0,
            explanation: 'The comparison between feudal serfdom and debt peonage demonstrates an AP pattern: feudal peasants were legally bound to the land, while peons were bound by debts impossible to repay. When formal coercive labor systems are abolished, new institutional forms often emerge to serve the same economic function. Debt peonage was the hacienda system\'s solution to indigenous peoples\' nominal legal freedom after the encomienda declined — advancing wages, goods, or tools against future labor, then manipulating accounts to ensure the debt could never be repaid.'
          },
          {
            question: 'What do the multiple forms of coerced colonial labor (slavery, encomienda, mita, debt peonage, indentured servitude) collectively demonstrate?',
            options: [
              'That colonial export economies depended on coercion, as wages that could attract free workers would erase profits',
              'That colonial export economies used coercion only briefly, during labor shortages after epidemics',
              'That colonial export economies grew more humane over time, as each new labor system improved the workers\' conditions',
              'That colonial export economies ran mainly on free wage labor, with coercion limited to a few mines',
            ],
            correctAnswer: 0,
            explanation: 'This structural point is essential for AP: colonial plantation and mining economies were not accidentally exploitative — they were structurally dependent on coercion. The profit margins on sugar, tobacco, cotton, and silver depended on paying workers as little as possible, which required legal mechanisms to prevent workers from leaving for better conditions. When one coercive mechanism was abolished, another was invented. Coercion was structural, not incidental — which is why abolition required political struggle rather than just moral persuasion.'
          }
        ]
      }
    },
    {
      id: 'whmelf3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The Portuguese Indian Ocean empire of trading posts and armed ships was the ___',
            options: ['Estado da India', 'British East India Company', 'Dutch VOC', 'Mughal Empire']
          },
          {
            label: 'The Spanish colonial labor system granting individuals rights to indigenous workers was the ___',
            options: ['Encomienda', 'Millet system', 'Devshirme', 'Zamindari system']
          },
          {
            label: 'The labor system where workers were bound to land through impossible-to-repay debts was ___',
            options: ['Debt peonage', 'Indentured servitude', 'Mit\'a labor', 'Chattel slavery']
          }
        ],
        correctAnswers: ['Estado da India', 'Encomienda', 'Debt peonage'],
        hint1: 'Portuguese Indian Ocean trading-post empire — armed ships charging protection fees',
        hint2: 'Spanish colonial labor grant — individual colonists — indigenous workers',
        hint3: 'Bound labor through unpayable debt — hacienda system — ongoing coercion',
        explanation: 'The Estado da India was the Portuguese model of empire: not territorial control but commercial monopoly enforced by armed ships. The encomienda gave individual Spanish colonists direct rights to indigenous labor. Debt peonage was the long-term mechanism that kept workers bound to haciendas long after encomienda was officially abolished.'
      }
    },
    {
      id: 'whmelf3-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP comparison between European colonial labor systems and pre-colonial indigenous labor extraction (e.g., Aztec tribute, Inca mit\'a) reveals:',
            options: [
              'Colonial systems kept the burdens but dropped many reciprocal duties of earlier tribute',
              'Colonial systems kept the reciprocal duties of earlier tribute and added wages, making labor less coercive',
              'Colonial systems replaced tribute with free markets, so forced labor ended soon after the conquest',
              'Colonial systems copied Aztec and Inca rules exactly, so workers saw no change in their burdens',
            ],
            correctAnswer: 0,
            explanation: 'This comparison demonstrates AP sophistication by recognizing gradations of coercion: Aztec tribute and Inca mit\'a involved real extraction from subject peoples, but within cultural frameworks that included reciprocal obligations (redistribution, ceremony, state feeding of workers). Spanish encomienda and mita stripped many of these reciprocal elements while maintaining (and intensifying) the extraction. This doesn\'t romanticize pre-colonial systems — but it does recognize that colonial labor often represented a qualitative worsening of existing exploitation.'
          },
          {
            question: 'For AP analysis, why is it historically important to distinguish between different forms of coerced labor (chattel slavery vs. indentured servitude vs. debt peonage)?',
            options: [
              'Different legal forms of coercion left different legacies, from racial stigma to new diasporas',
              'Different legal forms of coercion were identical in practice, so the labels matter little',
              'Different legal forms of coercion matter only to legal historians, not to social history',
              'Different legal forms of coercion all ended at the same time, with the abolition acts of the 1830s',
            ],
            correctAnswer: 0,
            explanation: 'AP rewards the analytical move of asking "why does this distinction matter?" Chattel slavery\'s racialization created heritable racial stigmas; debt peonage maintained class-based exploitation within nominally free labor markets; indentured servitude created new ethnic diaspora communities. These forms also ended at very different times (peonage and indenture outlasted British abolition by decades). Treating all coercion as identical erases these distinctions — and AP historical analysis requires precision about how specific institutional forms shaped specific historical outcomes.'
          }
        ]
      }
    }
  ]
}
