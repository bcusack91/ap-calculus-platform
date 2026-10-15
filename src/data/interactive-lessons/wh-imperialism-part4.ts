export const whImperialismPart4Data = {
  topicSlug: 'wh-imperialism',
  sections: [
    {
      id: 'whimp4-intro',
      type: 'text' as const,
      content: `
# 🌍 New Imperialism

**Part 4 of 7 — British India: Crown Rule and Nationalist Response**

---

> 🔑 **Key Concept:** British India (1858-1947) was the largest and most complex colonial empire in world history. AP questions focus on the transition from East India Company rule to British Crown rule (after the 1857 Sepoy Mutiny), the economic exploitation of India, the role of Western education in producing Indian nationalists, and the Indian National Congress as a model of anti-colonial political organization.
      `
    },
    {
      id: 'whimp4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Macaulay Minute on Education (1835) created which AP-recognized "colonial contradiction"?',
            options: [
              'Schooling meant to produce Westernized Indian clerks for the Raj instead turned out nationalists who used liberal ideas of rights and representation against British rule',
              'English-language schooling was rejected by Indian elites, who kept sending their sons to Sanskrit and Persian schools and so blocked the policy\'s spread',
              'Western education stayed politically neutral, since it trained Indians only in accounting and engineering and avoided British history and political theory',
              'The policy united Hindus and Muslims behind British rule, since a shared English curriculum erased the religious divisions that had fueled the 1857 revolt',
            ],
            correctAnswer: 0,
            explanation: 'The education contradiction is AP\'s most important mechanism connecting colonialism to nationalism: Macaulay explicitly wanted Indians who were "English in taste, opinions, morals, and intellect" — he succeeded in educating Indians in English political thought; he failed to predict that Indians would apply English political thought to their own situation. Indian National Congress founders (lawyers, doctors, academics) used British liberal political theory to argue that British rule in India was illegitimate by British principles. This is the same mechanism as Indian nationalists using English courts to challenge British policy.'
          },
          {
            question: 'Dadabhai Naoroji\'s "drain of wealth" theory demonstrates:',
            options: [
              'Colonialism involved systematic economic extraction, as Home Charges and other payments to Britain transferred Indian revenue abroad and deepened poverty at home',
              'British rule had made India poorer only temporarily, since the railroads and canals financed by British investors were expected to repay the drain within a generation',
              'India\'s poverty came from its precolonial past, since Mughal taxation had already exhausted the economy before the East India Company arrived',
              'The drain applied only to the East India Company era, since the shift to Crown rule in 1858 ended all transfers of Indian revenue to Britain',
            ],
            correctAnswer: 0,
            explanation: 'The drain of wealth is AP\'s economic analysis framework for colonialism: Naoroji calculated (with British government statistics) that a significant portion of India\'s national income was transferred annually to Britain through Home Charges, pensions for British administrators, interest on loans, and trade policies that disadvantaged Indian industry. This is not simply trade (which produces mutual benefits) but systematic extraction — using political power to structure economic relationships advantageously. The theory connects political colonialism to economic underdevelopment.'
          }
        ]
      }
    },
    {
      id: 'whimp4-content',
      type: 'text' as const,
      content: `
## 📖 British India

> **The East India Company to Crown Rule Transition**

- **Before 1858:** British East India Company governed India as a trading and administrative enterprise; Company armies; Company courts
- **Sepoy Mutiny (1857):** Indian soldiers in Company army revolted; complex causes including cartridge controversy (greased with cow/pig fat, offensive to Hindus and Muslims), land annexation, missionary activity
- **Aftermath:** British Parliament abolished the East India Company; India came under direct British Crown rule (Queen Victoria, "Empress of India") — Government of India Act 1858
- **New apparatus:** Indian Civil Service; professional bureaucracy; predominantly British at top; Indians in subordinate positions

> **Economic Exploitation of India**

The British Raj structured India's economy to serve British interests:

| British Policy | Indian Impact |
|---------------|--------------|
| **Deindustrialization** | British manufactured goods flooded India; Indian textile industry destroyed; Manchester cotton mills replaced Indian artisans |
| **Cash crop agriculture** | Forced indigo, cotton, opium cultivation for export; diverted from food production |
| **"Drain of wealth"** | Indian revenues paid for British administration costs, pensions, wars; Indian nationalists estimated billions extracted |
| **Railroads** | Served British economic interests (exporting resources) more than Indian development needs |

> **The "Drain of Wealth" Theory**

Dadabhai Naoroji (1901) calculated that Britain systematically transferred Indian wealth to Britain:
- India paid for British administration, military costs, "Home Charges"
- These were not reinvested in India but sent to Britain
- **AP significance:** Demonstrates that colonialism involved systematic economic extraction, not just political control

> **Western Education: The Colonial Contradiction**

- British policy (Macaulay's Minute on Education, 1835): Educate Indian elite in English language and Western knowledge → "Indian in blood and color, but English in taste, opinions, morals, and intellect"
- **Unintended consequence:** Western education gave Indian elites access to Enlightenment ideas (natural rights, self-determination, representative government) that they applied to oppose British colonial rule
- Indian National Congress founders: largely Western-educated lawyers and professionals

> **Indian National Congress (1885)**

- Founded 1885 by Indian lawyers, professionals, and British colonial official A.O. Hume
- Initially: loyal opposition; demanded greater Indian representation in civil service; petitions to Parliament
- Adopted British political language: applied British constitutional principles to argue for Indian self-governance
- Later: Bal Gangadhar Tilak demanded "Swaraj" (self-rule) as "birthright"; mass politics began
      `
    },
    {
      id: 'whimp4-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The 1857 Sepoy Mutiny\'s complex causes (cartridge controversy, land annexation, missionary activity) demonstrate:',
            options: [
              'Colonial rule built up grievances across many communities until the cartridge dispute sparked a revolt that combined religious, economic and cultural anger',
              'A single grievance can trigger mass revolt, since the greased cartridges alone explain why both soldiers and civilians rose against the East India Company in 1857',
              'Spontaneous revolts lack deeper causes, since the uprising began without any accumulated resentment and faded once the British withdrew the new Enfield cartridges',
              'Military mutinies stay confined to the army, since only sepoys took part while peasants, landholders and princes remained loyal to the East India Company throughout',
            ],
            correctAnswer: 0,
            explanation: 'Multiple simultaneous grievances is AP\'s analysis of the Mutiny: the cartridge controversy (new Enfield rifles\' cartridges allegedly greased with beef and pork fat — offensive to both Hindus and Muslims) was the immediate trigger, but accumulated grievances (Doctrine of Lapse land annexation; missionary activity threatening traditional religion; economic disruption) created the kindling. Singular cause analysis misses how colonial systems accumulate grievances across different communities until a triggering event produces combined resistance. AP rewards multi-causal analysis.'
          },
          {
            question: 'The shift from East India Company rule to British Crown rule (1858) paradoxically increased the intensity of colonial control because:',
            options: [
              'Crown rule replaced a trading company with a bureaucratic state whose civil service, law codes and census reached deeper into Indian society than Company rule had',
              'The Crown reduced extraction and gave Indians elected majorities in the provincial councils, which loosened British control over the countryside',
              'The transfer was purely symbolic, since the same Company officials kept governing under the same laws and no new institutions were created after 1858',
              'Company rule had been the more thorough system, since the Company\'s private army and tax farms reached every village while the Crown governed only the major cities',
            ],
            correctAnswer: 0,
            explanation: 'Transition to more thorough colonialism is AP\'s paradox of the Mutiny\'s consequence: the Company was a commercial enterprise that governed India as an extension of trade; the Crown built a systematic colonial state. The Indian Civil Service was reorganized under a Secretary of State and Viceroy, the Indian Penal Code (1860) codified law, and all-India censuses began in the 1870s. Railroad building, begun under the Company in 1853, expanded rapidly to move troops and export raw materials. The Raj was more invasive culturally (English education expanded), more systematically extractive, and more professionally administered. Indians did not gain elected majorities in provincial councils until the 1919 and 1935 reforms.'
          },
          {
            question: 'The Indian National Congress\'s (1885-1900s) strategy of using British political language demonstrates which AP principle?',
            options: [
              'Colonized elites could turn the colonizer\'s stated values against colonial rule, forcing officials either to extend British rights to India or to admit those rights were not universal',
              'Using British political language showed that Congress had abandoned any goal of self-government and sought only admission for Indians to the British Parliament',
              'Constitutional arguments failed entirely, since British officials ignored Congress petitions and never expanded Indian representation before independence',
              'Congress rejected British political concepts and relied on indigenous institutions such as caste councils to argue for an independent Hindu state',
            ],
            correctAnswer: 0,
            explanation: 'The legitimacy trap created by constitutional arguments is AP\'s framework: British constitutional tradition emphasized that subjects had rights before law, that representative government was legitimate government, that taxation without representation was tyranny. Indian nationalists said: "You claim these principles; apply them to India." British officials who refused faced the charge of hypocrisy; those who partially conceded expanded Indian rights, as in the Morley-Minto reforms (1909) and the Government of India Acts of 1919 and 1935. Either way, the constitutional strategy advanced Indian nationalism while forcing British officials into defensive positions.'
          }
        ]
      }
    },
    {
      id: 'whimp4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The 1858 act that transferred governance of India from the East India Company to the British Crown was ___',
            options: [
            'The Government of India Act',
            'The Sepoy Reorganization Act',
            'The British India Charter',
            'The Colonial Governance Act',
            ]
          },
          {
            label: 'The Indian economic nationalist who developed the "drain of wealth" theory about colonial extraction was ___',
            options: [
            'Dadabhai Naoroji',
            'Bal Gangadhar Tilak',
            'A.O. Hume',
            'Gopal Krishna Gokhale',
            ]
          },
          {
            label: 'Thomas Macaulay\'s 1835 policy that shaped colonial education in India was ___',
            options: [
            'The Macaulay Minute on Education',
            'The Indian Education Charter',
            'The Calcutta Education Policy',
            'The English Language Act',
            ]
          }
        ],
        correctAnswers: [
          'The Government of India Act',
          'Dadabhai Naoroji',
          'The Macaulay Minute on Education',
        ],
        hint1: '1858 — abolished East India Company — direct Crown rule — Queen Victoria Empress of India',
        hint2: 'Indian nationalist — calculated billions extracted — Home Charges — drain of wealth — published 1901',
        hint3: 'Macaulay 1835 — English education — Indian elite culturally Westernized — unintended anti-colonial consequence',
        explanation: 'The Government of India Act is the political transition mechanism; Naoroji is the economic analysis of colonial extraction; and the Macaulay Minute is the cultural policy that unintentionally produced anti-colonial nationalists — together they demonstrate the political, economic, and cultural dimensions of British India that AP expects students to analyze.'
      }
    },
    {
      id: 'whimp4-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Comparing British colonial policy in India to French policy in Algeria reveals:',
            options: [
              'Both were extractive but differed in form, as Britain ruled India through officials and allied princes while France made Algeria a settler colony annexed to France',
              'Both relied mainly on European settlers, since Britain encouraged mass British settlement in India just as France promoted the migration of French farmers into Algeria',
              'Neither had a significant settler population, since both Britain and France governed through small corps of officials and discouraged European migration to the colony',
              'France ruled Algeria more indirectly than Britain ruled India, since Algerian tribal leaders kept their authority while Britain abolished the princely states after 1858',
            ],
            correctAnswer: 0,
            explanation: 'Colonial policy comparison reveals different decolonization paths. Britain ruled most of India directly through the Indian Civil Service but governed about a third of it indirectly through more than 500 allied princely states, and it claimed to be preparing India for eventual self-government; India\'s independence (1947) came through political negotiation. France declared Algeria part of France and encouraged large-scale European settlement; Algeria\'s brutal independence war (1954-1962) reflected that claim and the settler population\'s resistance to independence. Different colonial theories produced different independence paths. AP rewards this kind of policy-to-outcome analysis.'
          },
          {
            question: 'For AP, British India\'s most significant contribution to world history was:',
            options: [
              'The gap between British liberal ideals and colonial practice fueled a nationalism whose Gandhian mass civil disobedience became a model for anticolonial movements elsewhere',
              'British investment brought India broad economic development, and the industrial base inherited at independence was colonial rule\'s most important legacy',
              'The railroad network was British India\'s main legacy, since it united the subcontinent physically and made later political movements unnecessary',
              'Indian independence had little influence abroad, since African and Asian nationalists modeled their movements on the Russian Revolution rather than on India\'s long nonviolent struggle',
            ],
            correctAnswer: 0,
            explanation: 'The global template function of Indian nationalism is AP\'s synthesis: the Indian National Congress\'s methods (legal advocacy, constitutional argument, political party organization) and later Gandhian methods (mass civil disobedience, noncooperation) were studied and adapted by anti-colonial movements globally — African National Congress in South Africa, independence movements in West Africa, civil rights movements in the United States. The Indian experience demonstrated that colonial authority could be challenged through organized mass politics, providing a model that shaped 20th-century liberation globally.'
          }
        ]
      }
    }
  ]
}
