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
              'Formally free contract labor could become nearly as coercive as slavery when penal contracts bound isolated workers to distant estates',
              'Indenture was genuinely free labor, since contract workers could leave their plantations whenever they chose by paying a small fee',
              'Indenture was harsher than slavery in every respect, since contract workers lacked even the minimal legal protections given to the enslaved',
              'Colonial courts strictly enforced contract protections, so planters who mistreated indentured workers were routinely prosecuted',
            ],
            correctAnswer: 0,
            explanation: 'Legal vs. practical freedom is AP\'s analytical framework: the key distinction between slavery and indenture was legal — enslaved people were property; indentured workers were contractors with wages, fixed terms, and (often) return passage. But in Trinidad or Fiji, the practical differences were limited: workers were 5,000 miles from home, spoke different languages, owed money for passage, lived on plantation property, faced criminal penalties for breaching their contracts, worked under overseers with physical enforcement power, and had no practical access to courts controlled by planter interests. Critics who called indenture "a new system of slavery" overstated the case but were not entirely wrong about the practical coercive reality — the legal distinction (contract vs. property) did not eliminate it.'
          },
          {
            question: 'Gandhi\'s development of satyagraha (nonviolent resistance) in South Africa (1893-1914) demonstrates which AP principle?',
            options: [
              'Diaspora communities facing colonial racism forged political techniques later carried home, as Gandhi did with his tested methods after 1915',
              'Gandhi drew satyagraha entirely from Hindu scripture before leaving India in 1893, so South Africa merely gave him a stage on which to preach it',
              'Diaspora activism stayed local, since the Indians of Natal and the Transvaal cut their ties with the Indian National Congress after the 1890s',
              'Failed campaigns can redirect leaders, since Gandhi abandoned nonviolence after his South African defeats and turned to armed resistance',
            ],
            correctAnswer: 0,
            explanation: 'Diaspora as political laboratory is AP\'s causal analysis: Gandhi was a London-trained lawyer hired to manage a commercial contract dispute for an Indian firm in Natal. He encountered discrimination when thrown off a "whites only" train car in Pietermaritzburg (1893). He stayed 21 years, organizing the Natal Indian Congress, leading campaigns against the Asiatic Registration Act, and developing the theory and practice of satyagraha — nonviolent resistance through truth and self-suffering, including civil disobedience and willingness to accept imprisonment. His Indian diaspora community provided the social organization for these campaigns. When he returned to India (1915), he had a fully developed, tested set of organizational and ideological tools. The non-cooperation movement (1920-22), the Salt March (1930), and ultimately independence (1947) all used techniques refined in South Africa.'
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
- Diaspora Chinese funded his Revive China Society (1894) and Tongmenghui (Revolutionary Alliance, 1905); the Kuomintang (Nationalist Party) was founded only in 1912, after the revolution
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
              'Settler societies wrote racial hierarchy into immigration law, presenting Chinese bans as defense of the nation\'s racial makeup',
              'Both laws were purely economic measures, debated in the language of wages and tariffs with no racial reasoning behind them at all',
              'Both laws arose from Qing government requests that the USA and Australia stop Chinese emigration so as to protect China\'s own labor supply',
              'The two policies were unrelated, since Australia and the USA set their immigration rules with no knowledge of each other\'s laws',
            ],
            correctAnswer: 0,
            explanation: 'Racial exclusion policies as Social Darwinism institutionalized is AP\'s analytical synthesis: Chinese immigration to California (Gold Rush, railroad construction) and Australia (gold rushes) created economic competition with white workers. The political response — racial exclusion — used the language of racial "protection" as well as wages: Denis Kearney\'s Workingmen\'s Party of California campaigned under the slogan "The Chinese must go!" and called Chinese immigrants racially "unassimilable"; the Australian Labor Party supported the White Australia Policy as protecting working-class wages AND national racial character, and Australian debates cited the American example. The Qing government did not request these laws. The policies demonstrate that Social Darwinism was not just ideology but policy — translating racial hierarchy theory into immigration law that excluded groups defined as incompatible with national identity.'
          },
          {
            question: 'Chinese diaspora communities\' funding of Sun Yat-sen\'s 1911 Revolution demonstrates:',
            options: [
              'Emigrants abroad kept active political ties to their homeland and used their wealth abroad to fund a revolution against the Qing',
              'The revolution was financed and organized entirely within China, by provincial gentry and New Army officers acting with no outside help',
              'Western governments supplied most of the revolution\'s money, so overseas Chinese donations played only a small symbolic role',
              'Overseas Chinese were barred by host-country laws from sending money home, so they shaped the revolution only through newspapers',
            ],
            correctAnswer: 0,
            explanation: 'Diaspora political agency is AP\'s transnational politics analysis: Sun Yat-sen spent most of the period 1895-1911 organizing among overseas Chinese communities — in Hawaii (where he had family and founded the Revive China Society in 1894), San Francisco, Singapore, and Southeast Asia. His Tongmenghui (Revolutionary Alliance, 1905) relied on overseas Chinese for financial contributions, organizational networks, and ideological support; Western governments did not bankroll it. The overseas Chinese had specific motivations: they had experienced Western democratic institutions (some were American or Australian citizens); they had experienced racial humiliation both from Western discrimination and from Qing dynasty weakness; they wanted a strong Chinese state that could negotiate as an equal. (The Kuomintang, often linked with this funding, was founded only in 1912, after the revolution.)'
          },
          {
            question: 'The "coolie trade" controversy in Peru and Cuba (1850s-1870s) demonstrates the challenge of:',
            options: [
              'Separating voluntary contract migration from trafficking when deceptive recruiting and debt bondage undercut workers\' consent',
              'Recruiting enough workers at all, since Chinese laborers refused contracts to the Americas once the California gold rush drew them away',
              'Satisfying the Qing court, which actively promoted the coolie trade as a way to relieve overpopulation in the southern provinces',
              'Regulating labor abroad without any outside oversight, since no foreign commission ever examined how workers were treated in Cuba',
            ],
            correctAnswer: 0,
            explanation: 'Formal vs. actual conditions in migration is AP\'s analytical challenge: Peruvian and Cuban plantation owners contracted with coolie traders to deliver Chinese workers. Recruiters in Guangdong province used false promises about wages and conditions; some workers were kidnapped; contracts were written in Spanish that workers couldn\'t read and were often signed under duress. On arrival, workers found themselves in debt bondage for passage and tools, working sugar plantations under physical punishment in conditions similar to slavery, with no effective legal recourse. The Qing court opposed the trade, and China\'s Cuba Commission investigation (1874) documented systematic abuse. International pressure eventually forced reform — Macau ended the trade in 1874, and treaties with Peru (1874) and Spain (1877) gave China consular protection for its workers. The controversy forced governments to define the line between free migration and trafficking.'
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
              'Communities actively built religious and educational institutions that carried language and custom from parents to their children',
              'Colonial authorities required Indians to keep separate customs, so cultural preservation was imposed from above rather than chosen',
              'Steady new arrivals from India renewed traditions, so diaspora culture survived mainly through migration rather than local institutions',
              'Communities isolated themselves from colonial economies, so their culture survived because they had little contact with other groups',
            ],
            correctAnswer: 0,
            explanation: 'Active institutional cultural preservation is AP\'s diaspora analysis: the Indian community in Trinidad (concentrated in the sugar belt) built temples and mosques, maintained Hindu festivals (Diwali, Holi), preserved Bhojpuri as a home language, practiced endogamous marriage within caste groups (though caste hierarchies were modified in the diaspora context), and established Hindu and Muslim schools. These were not accidental survival of "traditional" culture but active choices to build institutions — and they persisted after indenture ended (1917-1920) cut off new arrivals, while Indian workers remained part of the colonial plantation economy. The motivations included both positive identity assertion and negative discrimination — Indian workers were denied participation in Trinidadian colonial society, giving them reasons to maintain separate community institutions distinct from both European colonizers and African-descended populations.'
          },
          {
            question: 'For AP, the Chinese and Indian diaspora\'s most significant contribution to 20th-century political history was:',
            options: [
              'Supplying the money and political experience that fed anti-colonial movements at home, as the diaspora careers of Gandhi and Sun Yat-sen show',
              'Shaping host-country politics only, since diaspora leaders such as Gandhi turned away from Indian affairs once they had settled abroad',
              'Backing continued colonial rule, since Chinese and Indian merchants in Singapore and Durban relied on British protection for their trade',
              'Sending remittances home, an economic link that left the anti-colonial movements of Sun Yat-sen and Gandhi largely untouched',
            ],
            correctAnswer: 0,
            explanation: 'Colonial blowback through diaspora is AP\'s synthesis: colonialism dispersed Indian and Chinese populations globally as labor — but these dispersed populations encountered Western political ideas (democracy, nationalism, rights), experienced colonial discrimination firsthand, built organizational capacities, and accumulated financial resources. The diaspora experience radicalized communities who then used their resources and techniques to challenge colonial rule. Gandhi in South Africa → Indian independence; Sun Yat-sen in Hawaii and Singapore → Chinese revolution: the colonial diaspora became a nursery for anti-colonial leadership.'
          }
        ]
      }
    }
  ]
}
