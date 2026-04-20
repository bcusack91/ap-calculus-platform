export const whImperialismPart2Data = {
  topicSlug: 'wh-imperialism',
  sections: [
    {
      id: 'whimp2-intro',
      type: 'text' as const,
      content: `
# 🌍 New Imperialism

**Part 2 of 7 — Causes of New Imperialism**

---

> 🔑 **Key Concept:** New Imperialism (c. 1870-1914) was driven by interacting economic, nationalist, and ideological causes. Economically, industrialized nations sought raw materials, markets, and investment opportunities; nationalistically, European powers competed for colonies as status symbols; ideologically, Social Darwinism and the "civilizing mission" provided justification. AP questions ask you to evaluate which cause was most significant.
      `
    },
    {
      id: 'whimp2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'John Hobson\'s analysis of imperialism (1902) differed from Social Darwinist justifications in that:',
            options: [
              'Hobson argued imperialism was a specific economic dysfunction (insufficient domestic purchasing power forcing capital to seek overseas returns) with a specific domestic remedy (higher wages = internal markets sufficient), whereas Social Darwinism claimed imperialism was a natural law of racial competition with no remedy — Hobson\'s analysis was reformist; Social Darwinism was deterministic',
              'Hobson supported imperialism while Social Darwinism opposed it',
              'Both Hobson and Social Darwinism provided justifications for colonial expansion',
              'Hobson argued imperialism was inevitable while Social Darwinism claimed it was avoidable',
            ],
            correctAnswer: 0,
            explanation: 'Hobson\'s materialist critique vs. Social Darwinist naturalization is AP\'s analytical contrast: Hobson said imperialism was not natural or inevitable — it was a consequence of capitalism\'s distribution problem. Fix income inequality; workers have money; domestic markets absorb industrial output; no need for colonial markets. Social Darwinism said the strong dominate the weak by natural law — no reform is possible or desirable. The contrast reveals that colonial ideology was not simply the application of economic interest but a distinct intellectual system that naturalized what Hobson identified as a historically specific economic problem.'
          },
          {
            question: 'The "scramble for Africa" among European powers after 1870 demonstrates which AP principle?',
            options: [
              'Competitive nationalism created self-reinforcing imperial expansion — once one European power moved to acquire African territory, others felt compelled to respond to prevent being excluded, creating a race dynamic where nationalist competition drove colonial expansion beyond what pure economic calculation would have produced',
              'The scramble for Africa was purely economically motivated with no nationalist dimension',
              'African colonization proceeded slowly and cooperatively among European powers',
              'Nationalism played no role in the scramble for Africa — only economic motives mattered',
            ],
            correctAnswer: 0,
            explanation: 'The competitive dynamic of the scramble is AP\'s evidence that nationalism amplified imperialism beyond economic logic: once Britain colonized Egypt (1882), France felt threatened in North Africa; once France moved into West Africa, Germany demanded compensation; once Germany acquired Togoland and Cameroon, Belgium rushed to claim the Congo. Each colonial acquisition by one power triggered reactions from others. Pure economic analysis could not predict this cascading dynamic — only competitive nationalist politics explains the speed and scope of Africa\'s partition.'
          }
        ]
      }
    },
    {
      id: 'whimp2-content',
      type: 'text' as const,
      content: `
## 📖 Causes of New Imperialism

> **Economic Causes**

Industrial capitalism generated specific colonial demands:

- **Raw materials:** British cotton mills needed Egyptian cotton; Belgian rubber factories needed Congolese rubber; steel industries needed iron ore and coal from overseas
- **Markets:** Saturated European markets → sought new markets in Asia and Africa for manufactured goods
- **Investment capital:** European banks sought higher returns than European industries offered; colonial infrastructure (railroads, mines) offered higher returns
- **John Hobson's critique (1902):** Imperialism driven by capitalists seeking profit outlets; could be ended if European workers were paid more → internal markets sufficient

| Economic Motive | Example | Colony |
|----------------|---------|--------|
| Raw materials | Rubber | Congo, Malaya |
| Markets | Textiles | India, China |
| Investment | Railroads | India, Egypt |

> **Nationalist and Political Causes**

- **Competition:** European nations saw colonies as markers of great power status; France competed with Britain; Germany sought colonies to demonstrate new great-power status
- **Strategic:** Naval bases needed to project sea power globally; coaling stations for steamships; Suez Canal control
- **Domino effect:** Once one power colonized a region, competitors feared being excluded → race to colonize

> **Ideological Causes: Social Darwinism and the Civilizing Mission**

- **Social Darwinism:** Applied Darwinian evolution to human societies; "stronger" (European) civilizations would naturally dominate "weaker" ones; colonial conquest was natural law
- **Rudyard Kipling's "White Man\'s Burden" (1899):** Obligation to bring civilization (Christianity, Western law, education) to non-Western peoples; portrayed imperialism as self-sacrifice
- **"Civilizing mission" (mission civilisatrice):** French version; obligation to bring French civilization — language, law, culture — to colonial peoples
- **Reality:** Ideological justifications obscured economic motives; "civilizing" in practice meant forced labor, land seizure, cultural suppression

> **AP Analytical Framework**

All three causes interacted — economic, nationalist, and ideological motives reinforced each other:
- Businessmen lobbied governments (economic → political)
- Governments promoted trade (political → economic)  
- Ideologues justified expansion (ideological → both)
- Success bred success: colonial victories confirmed Social Darwinist claims
      `
    },
    {
      id: 'whimp2-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Rudyard Kipling poem "White Man\'s Burden" (1899) is AP evidence for:',
            options: [
              'The ideological dimension of imperialism — that European colonial expansion was justified through racial paternalism (Europeans as beneficent civilizers of inferior peoples) and portrayed as self-sacrifice rather than exploitation, revealing the gap between colonial rhetoric (civilizing mission) and colonial practice (forced labor, land seizure, cultural destruction)',
              'Kipling\'s poem demonstrates that imperialism was purely economically motivated',
              'The poem was written to oppose imperialism by exposing its costs',
              'Kipling\'s work provides an accurate description of colonial administration',
            ],
            correctAnswer: 0,
            explanation: '"White Man\'s Burden" is AP\'s primary source for colonial ideology: the poem\'s language ("your new-caught, sullen peoples / Half-devil and half-child") reveals the racial assumptions embedded in "civilizing mission" justifications. That Kipling portrays the colonizer as bearing burdens (not extracting profits) inverts the actual economic relationship: colonial powers extracted raw materials and profits while portraying this extraction as charitable improvement. AP\'s lesson: ideology (civilizing mission) served economic and political interests but was presented as altruistic obligation.'
          },
          {
            question: 'Comparing British imperialism in India to Belgian imperialism in the Congo reveals:',
            options: [
              'Both were economically motivated colonial systems but with different administrative methods — British India maintained formal administrative structures, courts, and railroads (while extracting agricultural products and undermining Indian industry); the Belgian Congo under King Leopold II was essentially a private extraction zone where rubber quotas were enforced through mutilation and murder, demonstrating that colonial brutality existed on a spectrum with some systems more violently extractive than others',
              'Both British India and the Belgian Congo were governed with identical methods and outcomes',
              'The Belgian Congo was a model of the civilizing mission while British India was purely extractive',
              'Neither colony had significant economic motives — both were governed for the welfare of colonial subjects',
            ],
            correctAnswer: 0,
            explanation: 'Spectrum of colonial violence is AP\'s analytical nuance: both were exploitative, but the Congo Free State (King Leopold II\'s personal colony) was uniquely brutal — the rubber quota system enforced by severing hands, mass killing estimated at 10 million deaths, systematic terror. British India\'s colonialism included famines caused by British policy (1876-79: 5-10 million deaths), destruction of Indian textile industry, but also railroads, civil service, and legal structures that were eventually used by Indian nationalists. The difference in degree matters for understanding colonial systems.'
          },
          {
            question: 'The economic competition for colonies after 1870 was connected to the First Industrial Revolution\'s completion in Britain because:',
            options: [
              'As Britain\'s first-mover industrial advantage declined and Germany, France, and the United States industrialized, European industrial powers competed for colonial raw materials and markets as a way to maintain economic advantages — creating an imperial version of the same competitive dynamics that drove European nationalism',
              'Industrial competition reduced the desire for colonies since industrial goods could be traded freely',
              'Colonialism preceded industrialization and was unrelated to it',
              'Only Britain sought colonies for industrial reasons while other European powers had no economic motives',
            ],
            correctAnswer: 0,
            explanation: 'Second Industrial Revolution → imperial competition is AP\'s economic causation chain: Britain\'s first-mover advantage in cotton textiles, iron, and steam engines was eroding by the 1870s as Germany led in chemicals and electrical industries. Competition for raw materials (German steel needs iron ore), markets (German industries need to sell beyond saturated European markets), and investment outlets (German banks need higher returns) drove German colonial demands at the Berlin Conference. Industrial competition and colonial competition were the same competition expressed in different arenas.'
          }
        ]
      }
    },
    {
      id: 'whimp2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The 1884-1885 conference where European powers agreed on rules for dividing Africa was ___',
            options: [
            'The Berlin Conference',
            'The Vienna Congress',
            'The Paris Conference',
            'The London Conference',
            ]
          },
          {
            label: 'Herbert Spencer\'s application of Darwin\'s evolutionary theory to human societies and races was ___',
            options: [
            'Social Darwinism',
            'Liberal nationalism',
            'Realpolitik',
            'Manifest Destiny',
            ]
          },
          {
            label: 'John Hobson\'s economic theory that imperialism was caused by insufficient domestic purchasing power was published in ___',
            options: [
            'Imperialism (1902)',
            'The Wealth of Nations (1776)',
            'The Communist Manifesto (1848)',
            'The Origin of Species (1859)',
            ]
          }
        ],
        correctAnswers: [
          'The Berlin Conference',
          'Social Darwinism',
          'Imperialism (1902)',
        ],
        hint1: 'Berlin 1884-85 — European powers — rules for Africa partition — no African leaders present',
        hint2: 'Darwin biological evolution applied to humans and races — stronger civilizations dominate weaker — natural law',
        hint3: 'Hobson 1902 — capitalist underconsumption — colonial markets substitute for domestic — reform remedy',
        explanation: 'The Berlin Conference is the political mechanism of African colonization; Social Darwinism is the ideological justification that naturalized European dominance; and Hobson\'s Imperialism is the contemporaneous economic critique — together they represent the political, ideological, and economic dimensions of New Imperialism that AP expects students to analyze.'
      }
    },
    {
      id: 'whimp2-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Social Darwinism\'s application to imperial expansion reveals which AP principle?',
            options: [
              'Scientific language can be used ideologically to legitimize power relationships — Darwin\'s biological evolution (a scientific theory about natural selection in species) was applied to human societies and racial groups to naturalize European dominance as the inevitable outcome of racial competition rather than the product of specific historical conditions (industrialization, military technology, state organization)',
              'Social Darwinism accurately described the relationship between European and non-European societies',
              'Darwin endorsed the application of his biological theories to human racial competition',
              'Social Darwinism was only used to oppose imperialism, not support it',
            ],
            correctAnswer: 0,
            explanation: 'Ideology naturalizing historical conditions is AP\'s critical analysis of Social Darwinism: European military and economic dominance in the 19th century was the result of specific historical processes (industrial revolution, particular state institutions, geographic advantages) — not inherent racial superiority. Social Darwinism transformed contingent historical dominance into natural law, making it seem permanent and inevitable. This ideological function — converting historical outcomes into natural law — is how Social Darwinism served colonial interests regardless of whether its practitioners believed it sincerely.'
          },
          {
            question: 'For AP, evaluating New Imperialism\'s causes requires recognizing that:',
            options: [
              'Economic, nationalist, and ideological causes were mutually reinforcing rather than competing alternatives — economic interests motivated colonial expansion; nationalist competition amplified it; ideological justifications legitimized it; all three operated simultaneously and could not be cleanly separated, so AP analysis should acknowledge multiple interacting causes while evaluating which were primary drivers in specific contexts',
              'Only one cause (economic) drove New Imperialism — other explanations are incorrect',
              'Ideological causes were the only genuine cause — economics and nationalism were pretexts',
              'All three causes were equally important in all contexts with no variation',
            ],
            correctAnswer: 0,
            explanation: 'Multiple interacting causes is AP\'s analytical standard: Hobson was partly right that economics mattered; Arendt and others were right that nationalism mattered; Said was right that ideology mattered. But no single-cause explanation explains all cases: why did European powers colonize territories that had no economic value (Sahara desert) if only economics mattered? Why did private businessmen lobby governments for colonial protection if nationalism was irrelevant? Why did ideological justifications change over time if they were just post-hoc rationalization? All three causes operated together.'
          }
        ]
      }
    }
  ]
}
