export const whReformMigrationPart3Data = {
  topicSlug: 'wh-reform-migration',
  sections: [
    {
      id: 'whrm3-intro',
      type: 'text' as const,
      content: `
# ✊ Reform and Migration

**Part 3 of 7 — Chinese and Indian Diaspora Under Imperialism**

---

> 🔑 **Key Concept:** Chinese and Indian migration under the imperial labor system created diaspora communities across Southeast Asia, the Americas, Africa, and the Pacific. Unlike most European migration, these migrations occurred within frameworks of colonial coercion and racial discrimination. AP questions compare voluntary and coerced migration, analyze diaspora community formation under discrimination, and evaluate anti-colonial political movements that emerged from diaspora communities.
      `
    },
    {
      id: 'whrm3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The conditions of Indian indentured labor in British colonies after 1833 demonstrated:',
            options: [
              'That formally free contract labor could function as a system of practical coercion comparable to slavery when laborers were isolated on distant plantations, legally bound by contracts they could not breach without criminal penalties, paid wages below subsistence level in company stores, and had no effective means of appeal to authorities who were effectively controlled by plantation owners — the legal distinction (contract vs. property) did not eliminate the practical coercive reality',
              'Indentured labor was genuinely free — workers could leave plantations at any time',
              'Conditions in indentured labor were uniformly better than slavery in every respect',
              'The legal protections in indenture contracts were effectively enforced by colonial governments',
            ],
            correctAnswer: 0,
            explanation: 'Legal vs. practical freedom is AP\'s analytical framework: the key distinction between slavery and indenture was legal — enslaved people were property; indentured workers were contractors. But in Trinidad or Fiji, the practical differences were limited: workers were 5,000 miles from home, spoke different languages, owed money for passage, lived on plantation property, worked under overseers with physical enforcement power, and had no practical access to courts. Contemporary abolitionists who called indenture "a new system of slavery" were exaggerating for rhetorical purposes but were not entirely wrong about the practical coercive reality.'
          },
          {
            question: 'Gandhi\'s development of satyagraha (nonviolent resistance) in South Africa (1893-1914) demonstrates which AP principle?',
            options: [
              'Diaspora communities facing colonial racial discrimination developed anti-colonial political techniques that were then exported back to home countries — Gandhi\'s South African experience provided the practical context for testing nonviolent mass resistance; his Indian diaspora community provided the social organization for campaigns; and the techniques he developed (non-cooperation, civil disobedience, willingness to accept imprisonment) were directly transferred to Indian independence campaigns after 1915',
              'Gandhi developed satyagraha entirely from reading Indian philosophical texts with no connection to South African experience',
              'Diaspora communities had no political influence on home country independence movements',
              'Gandhi\'s South African campaigns were unsuccessful and he learned nothing from them',
            ],
            correctAnswer: 0,
            explanation: 'Diaspora as political laboratory is AP\'s causal analysis: Gandhi was a London-trained lawyer hired to manage a commercial contract dispute in Natal. He encountered discrimination when thrown off a "whites only" train car in Pietermaritzburg (1893). He stayed 21 years, organizing the Natal Indian Congress, leading campaigns against the Asiatic Registration Act, and developing the theory and practice of satyagraha — nonviolent resistance through truth and self-suffering. When he returned to India (1915), he had a fully developed, tested set of organizational and ideological tools. The Salt March (1930), non-cooperation movement (1920-22), and ultimately independence (1947) all used techniques refined in South Africa.'
          }
        ]
      }
    },
    {
      id: 'whrm3-content',
      type: 'text' as const,
      content: `
## 📖 Chinese and Indian Diaspora

> **Indian Indentured Labor Diaspora**

After Britain abolished slavery in 1833, plantation owners in tropical colonies needed labor:

| Destination | Years Active | Numbers | Main Sending Region |
|------------|------------|---------|-------------------|
| **Trinidad** | 1838-1917 | ~144,000 | Uttar Pradesh, Bihar |
| **British Guiana** | 1838-1917 | ~239,000 | Uttar Pradesh, Bihar |
| **Natal (S. Africa)** | 1860-1911 | ~152,000 | South India (Tamil) |
| **Fiji** | 1879-1916 | ~61,000 | North India |
| **Mauritius** | 1835-1910 | ~453,000 | Various |
| **East Africa** | 1896-1901 | ~32,000 | Punjab (railroad labor) |

> **Chinese Migration Patterns**

| Destination | Context | Numbers | Legal Status |
|------------|---------|---------|-------------|
| **Southeast Asia** | Voluntary trading/merchant communities | Millions | Various |
| **California** | Gold Rush (1849); railroad construction | ~300,000 | Restricted (Exclusion Act 1882) |
| **Australia** | Gold rushes; then restricted | ~50,000 | Excluded (White Australia Policy 1901) |
| **Caribbean** | Contract labor on plantations and railroads | ~100,000 | Contract laborers |
| **Latin America** | Peru and Cuba: plantation labor | ~200,000 | Contract laborers (often coercive) |

> **The Coolie Trade Controversy**

- "Coolie" was a derogatory term for Chinese and Indian contract laborers
- **Peru and Cuba:** Chinese contract labor under conditions that were essentially slavery
- Workers were deceived about conditions; contracts violated; physical punishment used
- International pressure eventually restricted the worst abuses

> **Gandhi in South Africa (1893-1914)**

- Mohandas Gandhi went to South Africa as a lawyer for Indian business community
- Encountered systematic racial discrimination against Indians (separate registration; movement restrictions; disenfranchisement)
- Developed **satyagraha** (truth-force / nonviolent resistance) tactics in South Africa
- Organized Indian community campaigns; led successful resistance campaigns
- Returned to India (1915) with tactics that would ultimately end British colonial rule
- **AP significance:** Diaspora community → political technique development → revolutionary consequence in home country

> **Chinese Diaspora Political Consequences**

- **Sun Yat-sen** built his revolutionary network in Chinese diaspora communities
- Diaspora Chinese funded Kuomintang (Nationalist Party) revolutionary movement
- 1911 Revolution that ended Qing Dynasty partly funded by overseas Chinese
- Diaspora experience with Western democracy influenced revolutionary ideology
      `
    },
    {
      id: 'whrm3-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Chinese Exclusion Act (USA 1882) and White Australia Policy (1901) demonstrate:',
            options: [
              'Settler-colonial societies applied racial hierarchy to immigration restriction when Chinese economic competition threatened white working-class wages — both policies used the language of racial "protection" (protecting the racial character of the nation) rather than purely economic language, demonstrating how Social Darwinist racial ideology was institutionalized in immigration law to exclude specific groups defined as racially incompatible with national identity',
              'Both policies were purely economic with no racial ideological dimension',
              'Chinese immigrants supported both exclusion policies as inconsistent with their own interests',
              'The two policies were unrelated — the USA and Australia made their decisions independently without reference to each other',
            ],
            correctAnswer: 0,
            explanation: 'Racial exclusion policies as Social Darwinism institutionalized is AP\'s analytical synthesis: Chinese immigration to California (Gold Rush, railroad construction) and Australia (gold rushes) created economic competition with white workers. The political response — racial exclusion — used Social Darwinist language: Frederick Cheap (California politician) argued Chinese were racially "unassimilable"; Australian Labor Party supported White Australia Policy as protecting working-class wages AND national racial character. The policies demonstrate that Social Darwinism was not just ideology but policy — translating racial hierarchy theory into immigration law.'
          },
          {
            question: 'Chinese diaspora communities\' funding of Sun Yat-sen\'s 1911 Revolution demonstrates:',
            options: [
              'Diaspora communities maintained active political connections with home countries and used diaspora economic resources to fund revolutionary political change — overseas Chinese in Southeast Asia, Hawaii, and California who had experienced both Western democratic institutions and colonial racial discrimination had political motivations (Chinese national humiliation under Qing; desire for a Chinese state that could resist foreign domination) and financial capacity to fund a revolution they could not personally participate in',
              'The 1911 Revolution was entirely funded and organized by people living within China with no diaspora involvement',
              'Diaspora communities were indifferent to Chinese political developments',
              'Foreign governments funded the 1911 Revolution — overseas Chinese had no financial role',
            ],
            correctAnswer: 0,
            explanation: 'Diaspora political agency is AP\'s transnational politics analysis: Sun Yat-sen spent most of the period 1895-1911 organizing among overseas Chinese communities — in Hawaii (where he had family), San Francisco, Singapore, and Southeast Asia. His Tongmenghui (Revolutionary Alliance) relied on overseas Chinese for financial contributions, organizational networks, and ideological support. The overseas Chinese had specific motivations: they had experienced Western democratic institutions (some were American or Australian citizens); they had experienced racial humiliation both from Western discrimination and from Qing dynasty weakness; they wanted a strong Chinese state that could negotiate as an equal.'
          },
          {
            question: 'The "coolie trade" controversy in Peru and Cuba (1850s-1870s) demonstrates the challenge of:',
            options: [
              'Distinguishing between voluntary contract migration and coerced labor trafficking when recruitment involved deception (false promises about conditions), contracts were signed under duress, physical punishment was used to enforce labor, and workers had no effective legal recourse — the formal legal category (free contract labor) did not accurately describe the actual conditions, requiring international pressure and eventual abolition of the system',
              'The coolie trade was genuinely voluntary — workers understood and consented to all conditions',
              'China and India actively supported the coolie trade as beneficial to their emigrant workers',
              'The international community had no ability to investigate or regulate colonial labor conditions',
            ],
            correctAnswer: 0,
            explanation: 'Formal vs. actual conditions in migration is AP\'s analytical challenge: Peruvian and Cuban plantation owners contracted with coolie traders to deliver Chinese workers. Recruiters in Guangdong province used false promises about wages and conditions; some workers were kidnapped; contracts were written in Spanish or Portuguese that workers couldn\'t read. On arrival, workers found themselves in debt bondage for passage and tools, working sugar plantations in conditions similar to slavery. China\'s investigation (1874) documented systematic abuse. International pressure eventually forced reform — the Peking Convention (1874) gave China inspection rights. The controversy forced governments to define the line between free migration and trafficking.'
          }
        ]
      }
    },
    {
      id: 'whrm3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The South African colony that brought Indian indentured workers (1860-1911) to work sugar plantations, where Gandhi later organized resistance, was ___',
            options: [
            'Natal',
            'Cape Colony',
            'Rhodesia',
            'Transvaal',
            ]
          },
          {
            label: 'Gandhi\'s political technique of nonviolent mass resistance through truth-force, developed in South Africa, was ___',
            options: [
            'Satyagraha',
            'Ahimsa',
            'Swaraj',
            'Dharma',
            ]
          },
          {
            label: 'Sun Yat-sen\'s revolutionary organization, funded largely by overseas Chinese diaspora, that organized the 1911 Chinese Revolution was ___',
            options: [
            'Tongmenghui (Revolutionary Alliance)',
            'Kuomintang',
            'Boxer Society',
            'Triad Society',
            ]
          }
        ],
        correctAnswers: [
          'Natal',
          'Satyagraha',
          'Tongmenghui (Revolutionary Alliance)',
        ],
        hint1: 'Natal South Africa — 1860-1911 — 152,000 Indian workers — sugar plantations — Gandhi 1893 arrived lawyer — Indian community organized',
        hint2: 'Gandhi South Africa — truth force — nonviolent resistance — civil disobedience — willingness to accept imprisonment — satyagraha — transferred to India 1915',
        hint3: 'Sun Yat-sen — 1905 organization — overseas Chinese funded — Honolulu San Francisco Singapore networks — 1911 Revolution Qing overthrow',
        explanation: 'Natal demonstrates the colonial geography of Indian indentured labor; satyagraha demonstrates the political technique that diaspora experience generated; and the Tongmenghui demonstrates how diaspora financial and organizational resources funded revolutionary change in China — together they show how imperial diaspora communities became anti-colonial political agents.'
      }
    },
    {
      id: 'whrm3-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Indian diaspora communities in Trinidad, South Africa, and Fiji maintained distinct cultural identities over generations because:',
            options: [
              'Community institutions — temples, mosques, Hindi schools, Bhojpuri language maintenance, religious festivals, endogamous marriage practices — created social infrastructure that preserved cultural practices across generations even in distant colonial contexts, demonstrating that cultural preservation is not passive survival but active institutional creation by communities with strong motivations to maintain identity markers that distinguished them from both European colonizers and African or Pacific Island populations',
              'Indian diaspora communities immediately assimilated to local colonial cultures with no cultural preservation',
              'Cultural preservation occurred without any institutional infrastructure — it was purely private',
              'Indian communities in different colonial territories maintained identical cultural practices with no adaptation',
            ],
            correctAnswer: 0,
            explanation: 'Active institutional cultural preservation is AP\'s diaspora analysis: the Indian community in Trinidad (concentrated in the sugar belt) built temples, maintained Hindu festivals (Diwali, Holi), preserved Bhojpuri as a home language, practiced endogamous marriage within caste groups (though caste hierarchies were modified in the diaspora context), and established Hindu and Muslim schools. These were not accidental survival of "traditional" culture but active choices to build institutions. The motivations included both positive identity assertion and negative discrimination — Indian workers were denied participation in Trinidadian colonial society, giving them reasons to maintain separate community institutions.'
          },
          {
            question: 'For AP, the Chinese and Indian diaspora\'s most significant contribution to 20th-century political history was:',
            options: [
              'Providing the organizational infrastructure, financial resources, and political experience that enabled anti-colonial independence movements in both China and India — Gandhi\'s satyagraha technique was developed in South Africa; Sun Yat-sen\'s revolutionary network was built in diaspora communities; demonstrating that colonialism\'s dispersal of colonial populations could generate anti-colonial political resources that then returned to challenge the colonial order itself',
              'The diaspora had no significant political impact — independence movements were entirely domestic',
              'Diaspora communities universally supported continued colonial rule',
              'The diaspora\'s only significance was economic remittances with no political dimension',
            ],
            correctAnswer: 0,
            explanation: 'Colonial blowback through diaspora is AP\'s synthesis: colonialism dispersed Indian and Chinese populations globally as labor — but these dispersed populations encountered Western political ideas (democracy, nationalism, rights), experienced colonial discrimination firsthand, built organizational capacities, and accumulated financial resources. The diaspora experience radicalized communities who then used their resources and techniques to challenge colonial rule. Gandhi in South Africa → Indian independence; Sun Yat-sen in Hawaii and Singapore → Chinese revolution: the colonial diaspora became a nursery for anti-colonial leadership.'
          }
        ]
      }
    }
  ]
}
