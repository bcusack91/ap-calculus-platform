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
              'Hobson treated imperialism as a fixable flaw of capitalism caused by underconsumption at home, while Social Darwinism called it a natural law of racial struggle',
              'Hobson defended imperialism as a necessary outlet for surplus capital, while Social Darwinists opposed expansion as a costly drain on the strongest European nations',
              'Hobson and the Social Darwinists agreed that expansion was natural, but Hobson argued it should be regulated by international treaty rather than left to competing states',
              'Hobson blamed imperialism mainly on racial ideology spread by the popular press, while Social Darwinists explained it as a search for profitable overseas investment',
            ],
            correctAnswer: 0,
            explanation: 'Hobson\'s materialist critique vs. Social Darwinist naturalization is AP\'s analytical contrast: Hobson said imperialism was not natural or inevitable — it was a consequence of capitalism\'s distribution problem. Fix income inequality; workers have money; domestic markets absorb industrial output; no need for colonial markets. Social Darwinism said the strong dominate the weak by natural law — no reform is possible or desirable. The contrast reveals that colonial ideology was not simply the application of economic interest but a distinct intellectual system that naturalized what Hobson identified as a historically specific economic problem.'
          },
          {
            question: 'The "scramble for Africa" among European powers after 1870 demonstrates which AP principle?',
            options: [
              'Competitive nationalism made expansion self-reinforcing as each power\'s claims pushed rivals to grab territory before being shut out, beyond what profit alone justified',
              'Free-trade economics drove a steady expansion in which European powers cooperated to open African markets, so territorial claims simply followed trade agreements',
              'Humanitarian anti-slavery campaigns drove expansion, since European publics demanded intervention and governments annexed territory chiefly to end slave raiding in the interior',
              'African military weakness alone set the pace, so European powers advanced only where local resistance had already collapsed from internal wars',
            ],
            correctAnswer: 0,
            explanation: 'The competitive dynamic of the scramble is AP\'s evidence that nationalism amplified imperialism beyond economic logic. Britain\'s occupation of Egypt in 1882 alarmed France, which pressed harder in West Africa; Germany then claimed Togoland, Cameroon, and South West Africa in 1884; Leopold II of Belgium won recognition of his Congo claim at Berlin in 1885. Each acquisition by one power triggered reactions from others. Anti-slavery rhetoric was used as a justification, but it did not set the pace. Pure economic analysis could not predict this cascading dynamic; competitive nationalist politics explains the speed and scope of Africa\'s partition.'
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
              'Colonial ideology, since the poem cast conquest as a selfless duty to civilize supposedly inferior peoples while masking the forced labor and extraction that colonial rule involved',
              'Anti-imperialist satire, since Kipling wrote it to mock American leaders for taking the Philippines and to warn readers about the human costs of overseas empire',
              'Economic motives for empire, since the poem openly urged Americans to seize the Philippines for its sugar plantations and its harbors for the trade with China',
              'Colonial administration in practice, since Kipling drew on years as a British district official in India to describe accurately how colonial officers governed',
            ],
            correctAnswer: 0,
            explanation: '"The White Man\'s Burden" is AP\'s primary source for colonial ideology. Written to urge the United States to take up rule over the Philippines, the poem\'s language ("your new-caught, sullen peoples / Half-devil and half-child") reveals the racial assumptions embedded in "civilizing mission" justifications. It never mentions profit. Portraying the colonizer as bearing burdens rather than extracting wealth inverts the actual economic relationship. Kipling worked in India as a journalist, not as an administrator. AP\'s lesson: ideology (civilizing mission) served economic and political interests but was presented as altruistic obligation.'
          },
          {
            question: 'Comparing British imperialism in India to Belgian imperialism in the Congo reveals:',
            options: [
              'Both were extractive, but British India operated through a bureaucratic state and legal system while Leopold\'s Congo was a private rubber zone run by terror',
              'Both were governed in nearly identical ways, because Belgium copied British Indian law and its civil service model when the Belgian state took the Congo from Leopold',
              'British India was the more violent of the two, because missionaries in Leopold\'s Congo held enough authority to check the worst abuses of rubber collection',
              'Both were held mainly for strategy rather than profit, with India guarding the sea routes to Asia and the Congo blocking French expansion',
            ],
            correctAnswer: 0,
            explanation: 'Spectrum of colonial violence is AP\'s analytical nuance: both were exploitative, but the Congo Free State (King Leopold II\'s personal colony) was uniquely brutal — the rubber quota system enforced by severing hands, mass killing estimated at 10 million deaths, systematic terror. British India\'s colonialism included famines caused by British policy (1876-79: 5-10 million deaths), destruction of Indian textile industry, but also railroads, civil service, and legal structures that were eventually used by Indian nationalists. The difference in degree matters for understanding colonial systems.'
          },
          {
            question: 'The economic competition for colonies after 1870 was connected to the First Industrial Revolution\'s completion in Britain because:',
            options: [
              'As rival nations industrialized and Britain\'s early lead faded, industrial powers competed for colonial raw materials and markets to protect their position',
              'As Britain\'s industries matured, free trade made formal colonies unnecessary, so industrial competition actually slowed imperial expansion until well after the year 1900',
              'Industrialization came after the main colonial conquests, so new imperialism was a leftover of mercantilism rather than a product of competing industrial economies',
              'Only Britain sought colonies for industrial reasons, while Germany and France pursued overseas territory purely for prestige and had no economic motive for expanding',
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
            label: 'The ideology, associated with Herbert Spencer, that applied evolutionary "survival of the fittest" ideas to human societies and races was ___',
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
              'Scientific language could be used ideologically, as a theory about species was stretched to human races to make European dominance look natural rather than historically produced',
              'Science could correct imperial prejudice, as evolutionary research showed all human populations shared a common ancestry and so undermined racial hierarchy',
              'Darwin himself designed the theory to justify empire, as Origin of Species argued that European nations were destined to replace the peoples they colonized',
              'Ideas had little effect on policy, as Social Darwinism circulated only among academics and was never cited by politicians or officials to justify expansion',
            ],
            correctAnswer: 0,
            explanation: 'Ideology naturalizing historical conditions is AP\'s critical analysis of Social Darwinism: European military and economic dominance in the 19th century was the result of specific historical processes (industrialization, military technology, state organization) rather than inherent racial superiority. Social Darwinism, popularized by Herbert Spencer and others, transformed contingent historical dominance into natural law, making it seem permanent and inevitable. Darwin\'s Origin of Species dealt with plants and animals, not empires, and Social Darwinist arguments were widely used by politicians and colonial publicists.'
          },
          {
            question: 'For AP, evaluating New Imperialism\'s causes requires recognizing that:',
            options: [
              'Economic interest and national rivalry reinforced ideological justification, so strong analysis weighs which motive mattered most in each case instead of treating them as rivals',
              'Economic motives alone drove expansion, so nationalist and ideological explanations should be treated as later inventions by historians rather than as real causes of empire',
              'Ideology was the only genuine cause, since economic and nationalist arguments were pretexts invented to win parliamentary votes for colonial spending',
              'All three motives carried exactly equal weight in every region, so analysis should avoid ranking causes or comparing their relative importance across the colonies of each empire',
            ],
            correctAnswer: 0,
            explanation: 'Multiple interacting causes is AP\'s analytical standard: Hobson was partly right that economics mattered; Arendt and others were right that nationalism mattered; Said was right that ideology mattered. But no single-cause explanation explains all cases: why did European powers colonize territories that had no economic value (Sahara desert) if only economics mattered? Why did private businessmen lobby governments for colonial protection if nationalism was irrelevant? Why did ideological justifications change over time if they were just post-hoc rationalization? All three causes operated together.'
          }
        ]
      }
    }
  ]
}
