export const whMaritimeEmpiresLaborPart5Data = {
  topicSlug: 'wh-maritime-empires-labor',
  sections: [
    {
      id: 'whmelf5-intro',
      type: 'text' as const,
      content: `
# ⚓ Maritime Empires & Labor Systems (c. 1600–1900)

**Part 5 of 7 — Labor Systems in Asia and Africa**

---

> 📅 **Time frame:** This part runs from the VOC in the 1600s to forced cultivation in Java (1830–1870) and Indian indentured migration (1838–1916), so much of it is tested in Units 5 and 6 rather than Unit 4.

> 🔑 **Key Concept:** Colonial labor systems extended beyond the Americas into Asia and Africa: the Dutch used forced cultivation in Java, the British imposed indentured labor across the empire, and various forms of coerced labor existed in Mughal India and Ottoman territories. AP questions compare labor systems across regions and evaluate how different empires extracted value from subject populations.
      `
    },
    {
      id: 'whmelf5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Dutch Cultuurstelsel (Culture System) in Java demonstrates which AP principle?',
            options: [
              'Forced production took many forms, as colonial states adapted coercion to local conditions in Asia',
              'Forced production existed only in the Americas, as Asian colonies relied on free peasant markets',
              'Forced production in Java copied Caribbean slavery, as the Dutch shipped enslaved Africans to Asia',
              'Forced production in Java was voluntary, as peasants chose export crops for higher market prices',
            ],
            correctAnswer: 0,
            explanation: 'The Cultuurstelsel (1830-1870), imposed by the Dutch colonial state after the VOC\'s dissolution in 1799, expands AP\'s comparative frame beyond the Americas: colonial labor coercion was not limited to racial chattel slavery. The same structural need (colonial profitability requiring low labor costs) produced different institutional forms depending on context. Java had an existing peasant agriculture that could be coerced into producing export crops; the Caribbean had an indigenous population that had been destroyed and needed a replacement labor force.'
          },
          {
            question: 'The Mughal zamindari system\'s transformation under British East India Company (Permanent Settlement 1793) demonstrates:',
            options: [
              'It turned Mughal revenue collectors with conditional rights into private landowners, weakening peasant claims',
              'It turned private landowners into Mughal revenue collectors with conditional rights, protecting peasants',
              'It created zamindars for the first time, as no Mughal officials had collected land revenue before 1793',
              'It abolished the zamindars entirely, handing land titles to peasant cultivators across Bengal',
            ],
            correctAnswer: 0,
            explanation: 'The Permanent Settlement is an AP-important example of how colonial governments transformed existing institutions to serve colonial interests. Mughal zamindars were hereditary revenue collectors with conditional rights; the British fixed the revenue permanently and made them private landowners, weakening the customary claims of peasant cultivators. This created a landlord class dependent on British legal protection and an increasingly impoverished peasantry.'
          }
        ]
      }
    },
    {
      id: 'whmelf5-content',
      type: 'text' as const,
      content: `
## 📖 Labor Systems in Asia and Africa

> **Dutch Rule in Java (VOC to 1799, then the Dutch colonial state)**

The VOC ruled much of Java from c. 1619 until its dissolution in 1799; the Dutch colonial state that replaced it imposed forced cultivation:

- **Cultuurstelsel (Culture System, 1830-1870):** Required Javanese peasants to devote 1/5 of their land to export crops (coffee, indigo, sugar) for the Dutch colonial government
- Revenue flowed to Netherlands; Javanese peasants suffered repeated famines
- Eduard Douwes Dekker's novel *Max Havelaar* (1860) exposed abuses; contributed to Dutch colonial reform
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
- **Zamindari vs. European feudal systems:** Both created landlord classes extracting from peasant cultivators; different origins (tax farming vs. feudal land grants) but similar social outcomes
      `
    },
    {
      id: 'whmelf5-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Global indentured labor migration after British emancipation (1833) created which long-term consequence?',
            options: [
              'Lasting South Asian and Chinese communities that built new hybrid identities across Britain\'s colonies',
              'Short-lived labor camps that disappeared once most workers returned home at the end of their contracts',
              'Fully assimilated populations that dropped Asian languages and religions within a single generation',
              'European settler communities that replaced Asian workers in the plantations of Trinidad and Fiji',
            ],
            correctAnswer: 0,
            explanation: 'The South Asian diaspora created by indentured labor migration is one of AP\'s important examples of how colonial economic systems created permanent demographic changes: over a million Indian workers were transported to various parts of the British Empire between 1834 and 1917, and most never returned. Their descendants today form the Indian-origin communities in Trinidad, Guyana, Fiji, Mauritius, and South Africa, alongside Chinese communities in Malaysia and the Caribbean — living evidence of colonial labor migration patterns.'
          },
          {
            question: 'Comparing forced cultivation (Java) to plantation slavery (Caribbean) reveals which distinction?',
            options: [
              'Java\'s system skimmed output from existing village society, while Caribbean slavery built a new society',
              'Java\'s system destroyed existing village society, while Caribbean slavery kept native societies intact',
              'Java\'s system paid peasants market wages, while Caribbean slavery paid nothing at all to its workers',
              'Java\'s system produced only food crops for local use, while Caribbean slavery produced crops for export',
            ],
            correctAnswer: 0,
            explanation: 'This comparison demonstrates analytical precision: both systems extracted commodity production from coerced labor, but with different social consequences. Java had a surviving population with intact social structures; the Dutch extracted a portion of existing agricultural production (export crops on part of village land). Caribbean islands had experienced indigenous population collapse; plantation agriculture required constructing entirely new social structures based on enslaved labor. The degree of social disruption differed even when the economic extraction was similar.'
          },
          {
            question: 'What do diverse Asian colonial labor systems (zamindari, forced cultivation, indentured labor) collectively demonstrate?',
            options: [
              'A shared drive to extract value, adapted in each place to existing taxes and farming practices',
              'A shared drive to modernize, as each system replaced older coercion with free wage contracts',
              'A clean break from the Americas, as Asian colonies used none of the coercive methods of the Atlantic world',
              'A purely local origin, as each system grew from Asian custom with no link to European colonial goals',
            ],
            correctAnswer: 0,
            explanation: 'The comparative AP lesson: colonial power structures are flexible and adaptive. The same underlying need (extracting value from subject populations at minimum cost) worked through existing tax structures (zamindari), existing agricultural systems (Java forced cultivation), and post-emancipation labor needs (indentured servitude), just as it produced encomienda and chattel slavery in the Americas. Recognizing this flexibility is a sophisticated AP analytical skill.'
          }
        ]
      }
    },
    {
      id: 'whmelf5-dropdown',
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
      id: 'whmelf5-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP comparison of colonial labor systems in different regions demonstrates which broader principle?',
            options: [
              'Global profit motives drove coercion everywhere, but local contexts shaped the form each system took',
              'Global profit motives produced identical systems everywhere, regardless of local population or politics',
              'Local contexts alone explain each system, with no shared economic force behind colonial coercion',
              'Global profit motives played no part, as local rulers designed each system apart from European demand',
            ],
            correctAnswer: 0,
            explanation: 'This principle — structural forces + contextual variation = specific historical outcomes — is an AP meta-skill. The structural force (colonial profitability through minimized labor costs) was global; the specific outcomes (chattel slavery vs. encomienda vs. forced cultivation vs. zamindari transformation) were shaped by local political, demographic, and cultural contexts. Strong AP analysis holds both levels simultaneously rather than reducing to either pure structural determinism or pure contextualism.'
          },
          {
            question: 'The geographic distribution of colonial labor coercion (Americas, Asia, Africa) demonstrates that:',
            options: [
              'Coercion followed European power onto several continents, wherever commodities were produced for world markets',
              'Coercion was confined to the Americas, where the collapse of native populations made it necessary',
              'Coercion was practiced only by the Spanish and Portuguese, whose Catholic laws permitted slavery',
              'Coercion was milder under European empires than under the Ottoman, Mughal and Qing states',
            ],
            correctAnswer: 0,
            explanation: 'The global scope of colonial labor coercion is an AP macro-theme: the structural need to produce commodities for global markets at profitable prices drove encomienda and mita in the Andes, chattel slavery in the Caribbean and North America (including Protestant British and Dutch colonies), forced cultivation in Java, and indentured labor across the British Empire. Understanding this global scope prevents any single region from being treated as exceptional while others are ignored.'
          }
        ]
      }
    }
  ]
}
