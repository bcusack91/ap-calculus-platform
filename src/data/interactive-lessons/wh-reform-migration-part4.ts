export const whReformMigrationPart4Data = {
  topicSlug: 'wh-reform-migration',
  sections: [
    {
      id: 'whrm4-intro',
      type: 'text' as const,
      content: `
# ✊ Reform and Migration

**Part 4 of 7 — Abolition Movements and Their Global Spread**

---

> 🔑 **Key Concept:** The abolition of the Atlantic slave trade and slavery itself (1807-1888) was achieved through a combination of enslaved people's resistance, religious and moral reform movements, economic arguments, and political organization. AP questions analyze the multiple causes of abolition, compare abolition processes in different countries, and evaluate the extent to which abolition actually improved the lives of formerly enslaved people.
      `
    },
    {
      id: 'whrm4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Haitian Revolution (1791-1804) had what impact on the abolition movement?',
            options: [
              'It simultaneously accelerated abolition (by demonstrating that enslaved people would revolt and that slave-based colonial systems were ultimately unsustainable) and complicated abolition politics (by terrifying slaveholders who feared similar revolts in their own colonies and therefore resisted emancipation, fearing that free Black populations would follow the Haitian example) — its dual impact reflects the revolution\'s status as both proof of slavery\'s instability and warning of revolutionary consequences',
              'The Haitian Revolution only accelerated abolition with no negative political consequences',
              'The Haitian Revolution had no impact on abolition debates elsewhere',
              'The Haitian Revolution convinced slaveholders to voluntarily emancipate their enslaved workers',
            ],
            correctAnswer: 0,
            explanation: 'Dual causation of revolutionary impact is AP\'s analytical standard: British abolitionists used the Haitian Revolution as evidence that slavery was unstable — if slaves in Saint-Domingue could overthrow French colonial rule, British Caribbean colonies faced similar risks. Better to voluntarily emancipate than face violent revolution. But American slaveholders drew the opposite lesson: Haitian-style revolution made emancipation dangerous — free Black populations were a revolutionary threat. Brazil\'s Dom Pedro II cited the Haitian example as an argument for gradual (not immediate) abolition to prevent social disruption. The same historical event produced opposite political conclusions in different contexts.'
          },
          {
            question: 'William Wilberforce\'s religious argument for abolition (slavery is sinful; all humans equal before God) was effective in Britain because:',
            options: [
              'The religious argument operated within Britain\'s specific cultural context — the Evangelical revival (Methodism, Quakerism) had created large communities of religiously motivated middle-class Britons who responded to moral arguments and were politically mobilized through churches; the argument also spoke to British national identity as a Protestant Christian nation with a moral mission, making opposition to slavery a patriotic as well as religious duty',
              'Religious arguments were effective everywhere equally regardless of cultural context',
              'The religious argument was secondary — economic arguments drove British abolition',
              'Wilberforce\'s argument worked without religious mobilization or institutional church support',
            ],
            correctAnswer: 0,
            explanation: 'Cultural context shapes argument effectiveness is AP\'s rhetorical analysis: the same religious anti-slavery argument that was effective in Britain (where Evangelical Protestantism was a mass political force) was less effective in Catholic Brazil or Cuba (where the Church was more integrated with colonial elites) or in the American South (where evangelical Christianity was used to defend slavery through Biblical citations). The effectiveness of abolition arguments depended on the specific religious, cultural, and political context in which they were deployed — there was no universally effective argument.'
          }
        ]
      }
    },
    {
      id: 'whrm4-content',
      type: 'text' as const,
      content: `
## 📖 Abolition Movements

> **Timeline of Abolition**

| Event | Date | Country |
|-------|------|---------|
| British slave trade abolished | 1807 | Britain |
| Slave trade abolished | 1808 | USA (constitutional deadline) |
| Slavery abolished in British Empire | 1833 | Britain |
| Slavery abolished | 1848 | France |
| Slavery abolished | 1863 | USA (Emancipation Proclamation) |
| Slavery abolished | 1865 | USA (13th Amendment) |
| Slavery abolished in Cuba | 1886 | Spain |
| Slavery abolished in Brazil | 1888 | Brazil (last in Americas) |

> **Causes of British Abolition**

- **Religious argument (Quakers, Methodists, Evangelicals):** Slavery sinful; all humans equal before God; William Wilberforce led Parliament campaign
- **Natural rights argument (Enlightenment):** All humans have natural rights; slavery violates fundamental rights
- **Economic argument (Adam Smith):** Free labor is more efficient than slave labor; slavery is economically irrational
- **Enslaved people's resistance:** Haitian Revolution (1791-1804); slave rebellions across Caribbean; daily resistance; runaways
- **Humanitarian sentiment:** Growing middle-class moral consciousness; sugar boycotts; abolition pamphlets

> **The Haitian Revolution's Role**

- **Saint-Domingue (Haiti):** Most profitable colony in the world; 500,000 enslaved people; produced 40% of Europe's sugar
- **1791:** Boukman's Bois Caïman ceremony; slave rebellion began
- **1804:** Haiti declared independence — first Black republic; first successful slave revolution
- **Impact on abolition:** Terrified slaveholders (proved slaves would fight); inspired abolitionists; demonstrated enslaved people's capacity for self-governance
- **Brazil and USA:** Fear of Haitian-style revolution influenced slaveholder politics — accelerated AND delayed abolition in different contexts

> **Emancipation's Limits**

After legal abolition, formerly enslaved people faced:
- **Apprenticeship systems:** Required to continue working for former masters for fixed periods (British: 6 years)
- **Black codes / Jim Crow:** Legal restrictions on movement, voting, economic activity
- **Sharecropping:** Economic dependence on former masters for land; debt peonage
- **Racial violence:** Lynching in USA; planters' terror in Brazil and Caribbean
- **AP conclusion:** Legal freedom ≠ substantive freedom; abolition was a necessary but insufficient condition for genuine liberation
      `
    },
    {
      id: 'whrm4-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The British Slavery Abolition Act (1833) included a £20 million compensation payment to slaveholders (not to enslaved people) because:',
            options: [
              'British political and legal culture treated enslaved people as property of slaveholders — abolishing slavery without compensation would have violated property rights and been constitutionally equivalent to government confiscation, which British law protected; the compensation reflects how deeply embedded the concept of human beings as legal property was in British colonial law, even as moral arguments against slavery were succeeding',
              'Compensation was paid to enslaved people as reparations for their suffering',
              'The compensation requirement demonstrated that abolitionists controlled Parliament completely',
              'The £20 million reflected the market value of goods produced by enslaved people',
            ],
            correctAnswer: 0,
            explanation: 'Property law framework constraining abolition is AP\'s legal analysis: enslaved people were legally the property of their owners — registered, insured, mortgaged, inherited, and sold as property. When Parliament abolished slavery, it was legally required to compensate owners for the loss of their property (just as government would compensate any property owner for compulsory purchase). The £20 million (equivalent to about £16 billion today) was paid to approximately 46,000 slaveholders. Enslaved people received nothing except the "benefit" of freedom (and were required to continue as "apprentices" for 6 years). The legal framework that defined them as property left them with no claim to compensation.'
          },
          {
            question: 'Sharecropping and debt peonage systems that emerged after the US Civil War demonstrate:',
            options: [
              'Legal emancipation did not automatically produce economic freedom when formerly enslaved people had no land, capital, or alternative employment — without land redistribution ("40 acres and a mule"), freed people were economically dependent on former masters who controlled land, agricultural credit, and marketing, enabling the re-establishment of coercive labor relationships through debt and legal enforcement rather than legal ownership',
              'Economic freedom automatically followed from legal emancipation',
              'Former slaveholders voluntarily provided fair wages and land to their former workers',
              'Sharecropping systems were equally beneficial to both landlords and tenant farmers',
            ],
            correctAnswer: 0,
            explanation: 'Economic power perpetuating coercion after legal liberation is AP\'s post-abolition analysis: legal freedom without economic independence is incomplete freedom. In the American South: freed Black men and women needed land to farm, seed to plant, and tools to work. Former masters had all three. The sharecrop arrangement (farm the land, split the harvest with the landlord) seemed equitable but embedded debt: landlords provided inputs at inflated prices, charged interest, and controlled the weighing and pricing of cotton. Tenants were perpetually in debt. Debt peonage laws then criminalized debt — allowing re-enslavement of debtors under criminal justice. Legal freedom was real but insufficient without economic independence.'
          },
          {
            question: 'Comparing the abolition of slavery in Brazil (1888) and the USA (1865) reveals:',
            options: [
              'Both achieved legal abolition under pressure from multiple forces (enslaved people\'s resistance, international moral pressure, economic arguments) but through different paths — the USA required a devastating civil war that killed 620,000 people before destroying slavery as a political institution; Brazil achieved gradual legal abolition over decades (1850 slave trade ban → 1871 free womb law → 1885 sexagenarian law → 1888 Golden Law) under political pressure from enslaved people\'s resistance and international criticism, without equivalent civil war',
              'Both countries used identical abolition processes with no significant differences',
              'Brazil abolished slavery before the USA because Brazil had stronger abolitionist movements',
              'The USA abolished slavery peacefully through legislative compromise while Brazil required revolution',
            ],
            correctAnswer: 0,
            explanation: 'Comparative abolition pathways is AP\'s process analysis: both countries ultimately abolished slavery under comparable pressures (enslaved resistance; economic modernization arguments; international pressure after British abolition), but the political path differed significantly. The USA\'s slaveholder class was politically entrenched in a federal system that gave it veto power over federal legislation — only the Civil War broke that veto. Brazil\'s monarchical system allowed gradual reform from above; the 1888 Golden Law was signed by Princess Isabel in the Emperor\'s absence, without the mobilization that a federal democratic system would have required. Political structure shaped abolition pathway.'
          }
        ]
      }
    },
    {
      id: 'whrm4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The first successful slave revolution, creating the first Black republic (1804), which both inspired abolitionists and terrified slaveholders, was ___',
            options: [
            'The Haitian Revolution',
            'The Jamaican Rebellion',
            'The American Revolution',
            'The Cuban Revolution',
            ]
          },
          {
            label: 'The Brazilian law (1888) that abolished slavery — the last in the Americas — was ___',
            options: [
            'The Golden Law (Lei Áurea)',
            'The Free Womb Law',
            'The Emancipation Decree',
            'The Abolition Act',
            ]
          },
          {
            label: 'The post-Civil War American laws restricting freed Black people\'s movement, employment, and rights to recreate coercive labor conditions were ___',
            options: [
            'Black codes',
            'Jim Crow laws',
            'Reconstruction amendments',
            'Vagrancy statutes',
            ]
          }
        ],
        correctAnswers: [
          'The Haitian Revolution',
          'The Golden Law (Lei Áurea)',
          'Black codes',
        ],
        hint1: 'Haiti 1791-1804 — Saint-Domingue — Boukman — Toussaint Louverture — first Black republic — terrified slaveholders — inspired abolitionists dual impact',
        hint2: 'Brazil 1888 — Princess Isabel — Golden Law Lei Áurea — last Americas — gradual process 1850 trade ban 1871 free womb 1885 sexagenarian then 1888',
        hint3: 'USA post-Civil War South — vagrancy laws — laborer registration — pass systems — criminalized contract violations — convict leasing — 13th Amendment loophole',
        explanation: 'The Haitian Revolution demonstrates how enslaved people\'s resistance shaped abolition politics; the Golden Law demonstrates the endpoint of Brazil\'s gradual abolition process; and Black codes demonstrate how legal abolition was undermined by legislative workarounds — together they show that abolition was a contested, incomplete process with significant gaps between legal and substantive freedom.'
      }
    },
    {
      id: 'whrm4-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Black codes enacted in Southern states after the Civil War demonstrate:',
            options: [
              'Former slaveholders used legislative power to recreate conditions of coercive labor as close to slavery as possible within the constraints of the 13th Amendment — by restricting Black people\'s ability to leave their employers (vagrancy laws), limiting occupational choices (laborer registration requirements), controlling movement (pass systems), and criminalizing minor contract violations (allowing arrest and convict leasing), Black codes converted legal freedom into practical semi-slavery',
              'Black codes were enacted to expand Black political rights after emancipation',
              'Southern states fully accepted the 13th Amendment and made no attempt to restrict freed people\'s rights',
              'Black codes were temporary measures that were quickly repealed without lasting effect',
            ],
            correctAnswer: 0,
            explanation: 'Legal workarounds for re-enslavement is AP\'s Reconstruction analysis: the 13th Amendment abolished slavery "except as punishment for crime" — immediately recognized as a loophole by Southern legislatures. Black codes criminalized vagrancy (being unemployed or without labor contracts), petty theft, and contract violations. Arrested Black men and women were leased to planters, railroads, and mines as convict laborers — paid nothing, physically punished, unable to leave. This convict lease system persisted into the 20th century in some Southern states. Black codes demonstrate that legal abolition was a necessary but insufficient condition for freedom without political power, economic independence, and equal enforcement of law.'
          },
          {
            question: 'For AP, the global abolition movement\'s most significant historical legacy was:',
            options: [
              'Establishing the moral and political precedent that universal human rights transcend economic property interests and national sovereignty — the abolitionist argument that human beings cannot be legally owned regardless of economic consequences or legal tradition created a framework that subsequent human rights movements (women\'s suffrage, decolonization, civil rights) used as their moral foundation, making abolition the first successful global human rights campaign',
              'Abolition had no lasting moral or political legacy beyond the immediate end of chattel slavery',
              'The abolition movement was primarily economic — it had no human rights dimension',
              'Abolition\'s legacy was only significant in the Americas with no global influence',
            ],
            correctAnswer: 0,
            explanation: 'First human rights campaign is AP\'s synthesis: the abolition movement established several political precedents that subsequent movements built on: that moral arguments can overcome economic interests; that international pressure on national governments is legitimate; that individuals have standing to advocate for the rights of people they have never met; that universal human dignity limits what legal systems can authorize. The 20th-century Universal Declaration of Human Rights (1948) drew on abolitionist moral framework. Gandhi drew on both Indian philosophy and abolitionist moral precedent. The civil rights movement explicitly connected to abolitionist history. Abolition created the template for global human rights activism.'
          }
        ]
      }
    }
  ]
}
