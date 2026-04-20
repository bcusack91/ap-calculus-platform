export const whRevolutionsPart5Data = {
  topicSlug: 'wh-revolutions',
  sections: [
    {
      id: 'whrv5-intro',
      type: 'text' as const,
      content: `
# ⚔️ Revolutions and Independence Movements

**Part 5 of 7 — The Meiji Restoration and Japanese Modernization**

---

> 🔑 **Key Concept:** The Meiji Restoration (1868) was Japan's response to the Western colonial threat — a carefully managed revolution from above that abolished feudalism, centralized power in the emperor, and deliberately industrialized Japan using Western models while preserving Japanese political and cultural identity. AP questions compare Meiji Japan to other modernization attempts and evaluate why Japan succeeded while others were colonized.
      `
    },
    {
      id: 'whrv5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Meiji slogan "Western Knowledge, Japanese Spirit" (wakon yosai) represented:',
            options: [
              'The deliberate strategy of adopting Western technology, institutions, and organization while preserving Japanese cultural identity and emperor-centered political order — allowing Japan to industrialize and militarize using proven Western methods without the cultural colonization that had accompanied Western dominance elsewhere',
              'Complete replacement of Japanese culture with Western culture as the path to modernization',
              'Rejection of all Western influence while attempting independent technological development',
              'Cultural exchange with no specific political or military purpose',
            ],
            correctAnswer: 0,
            explanation: 'Selective Westernization is Japan\'s strategy distinguishing it from both complete colonial subjugation (accepting Western cultural dominance) and complete resistance (refusing to adapt to new military realities). The selectivity was deliberate: adopt German military organization, British naval technology, French legal codes, American education models — but maintain emperor loyalty, Japanese social hierarchy, and cultural practices. This selectivity is what made Meiji Japan different from both Western colonies and failed modernization attempts.'
          },
          {
            question: 'Japan\'s defeat of Russia in the Russo-Japanese War (1904-05) demonstrated:',
            options: [
              'That Asian nations could defeat European military powers through industrialization and military modernization — the first Asian defeat of a European great power in modern history, shocking European assumptions of racial and civilizational superiority and inspiring independence movements across Asia and Africa who saw in Japan proof that Western power was not invincible',
              'The Russian defeat was due to technological problems unrelated to Japanese military strength',
              'The Russo-Japanese War demonstrated Japanese weakness, not strength',
              'The war had no significant international impact outside Russia and Japan',
            ],
            correctAnswer: 0,
            explanation: 'The Russo-Japanese War\'s global impact is AP\'s evidence for the war\'s significance: the defeat electrified the non-Western world. W.E.B. Du Bois noted the war\'s significance for African Americans; Indian nationalists drew inspiration; anti-colonial movements across Asia pointed to Japan as proof that European military dominance was not permanent or inevitable. The war\'s significance exceeded its direct military consequences — it demonstrated the possibility of non-Western modernization success at the highest level (defeating a great power).'
          }
        ]
      }
    },
    {
      id: 'whrv5-content',
      type: 'text' as const,
      content: `
## 📖 The Meiji Restoration

> **Context: The Perry Crisis (1853-1854)**

- Commodore Matthew Perry arrived in Tokyo Bay with "Black Ships" (steam-powered warships) and demanded Japan open to trade
- Japan's feudal Tokugawa Shogunate had no military capability to resist American steam warships
- The "unequal treaties" forced on Japan (similar to those on China) demonstrated Japan's vulnerability
- **Response:** Samurai reformers overthrew the Shogunate (1868) and restored Emperor Meiji; "Restore the Emperor, Expel the Barbarians"
- Eventually became: "Strengthen the country, Enrich the military" — through Westernization

> **Meiji Reforms: Institutional Change**

| Area | Old Feudal System | Meiji Reform |
|------|-----------------|-------------|
| **Political** | Shogunate; regional domains (han) | Centralized imperial government; prefectures |
| **Social** | Hereditary samurai class | Equality of social classes; abolished samurai privileges |
| **Military** | Samurai armies | Modern conscript army; German model; modern navy; British model |
| **Economic** | Agrarian feudalism | State-directed industrialization; railroads; factories; zaibatsu |
| **Education** | Limited; Confucian; elite | Universal education; Western science; technical training |
| **Legal** | Feudal law | Western-style legal codes (French and German models) |

> **Meiji Modernization Strategy: "Western Knowledge, Japanese Spirit"**

The formula: selectively adopt Western technology and institutions while preserving Japanese cultural identity:

- **Sent scholars abroad:** Iwakura Mission (1871-1873) studied Western government, law, industry, military
- **Invited foreign experts:** 3,000+ foreign advisors (yatoi) in Japan teaching Western technology
- **Adapted rather than copied:** German military model + British naval model + French legal model + American education model
- **Preserved emperor ideology:** Modernization implemented through loyalty to emperor; tradition preserved

> **Results**

- **Sino-Japanese War (1894-95):** Japan defeated China — demonstrated successful modernization
- **Russo-Japanese War (1904-05):** Japan defeated Russia — first Asian defeat of a European power in modern era; shocked world
- **Global significance:** Proved that Asian nations could industrialize and achieve military parity with Europe without losing cultural identity

> **AP Comparison Anchor**

- **Japan vs. China:** Both faced Western colonial pressure; Japan chose selective Westernization; China's Self-Strengthening Movement was partial and failed; China was colonized; Japan was not
- **Japan vs. Ottoman Empire:** Both attempted "defensive modernization" (adopting Western technology to resist Western domination); Japan succeeded; Ottoman Empire partially succeeded but ultimately dismembered after WWI
      `
    },
    {
      id: 'whrv5-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Comparing Meiji Japan to Qing China\'s "Self-Strengthening Movement" reveals:',
            options: [
              'Both faced Western colonial pressure and attempted defensive modernization, but Japan\'s response was more comprehensive (abolishing feudalism, restructuring all institutions, universal education, conscript army) while China\'s Self-Strengthening Movement was partial (adopting Western weapons without restructuring political and social institutions) — Japan succeeded; China was progressively colonized',
              'Both Japan and China were equally successful in resisting Western colonization',
              'China\'s Self-Strengthening Movement was more comprehensive than Japan\'s Meiji reforms',
              'Japan and China faced identical situations and made identical responses',
            ],
            correctAnswer: 0,
            explanation: 'The Japan-China comparison is AP\'s most instructive contrast in 19th-century Asian responses to Western pressure: China\'s Self-Strengthening Movement (1860s-1890s) attempted to adopt Western military technology while preserving the Confucian social and political order — "Chinese learning for essential principles, Western learning for practical application." But partial modernization (modern weapons + unreformed Confucian bureaucracy + feudal social structure) proved insufficient; Japan\'s defeat of China in 1894-95 demonstrated the difference between selective surface modernization and comprehensive institutional transformation.'
          },
          {
            question: 'The abolition of the samurai class during Meiji restoration demonstrates which AP principle?',
            options: [
              'Revolutionary change can be implemented from above by established authority — the Meiji government abolished the samurai class (their own social base) because modernization required a modern conscript army rather than a hereditary warrior class, demonstrating that deliberate institutional transformation can override established social interests when survival of the state is the overriding goal',
              'The samurai class voluntarily surrendered its privileges without state pressure',
              'The samurai abolition caused no political resistance or conflict',
              'Preserving traditional social classes was compatible with successful Meiji modernization',
            ],
            correctAnswer: 0,
            explanation: 'Abolishing the samurai is the clearest evidence that Meiji reformers were willing to destroy their own social class to achieve modernization: the reformers who led the Meiji Restoration were themselves samurai — they abolished samurai privileges, ended sword-carrying rights, and created a conscript army that made samurai military skills obsolete. The Satsuma Rebellion (1877), led by samurai resisting their abolition, was defeated by the new conscript army — demonstrating that the new institutions had supplanted the old social order. This willingness to sacrifice class privilege for state modernization distinguished Japan from China.'
          },
          {
            question: 'The Iwakura Mission (1871-1873), which sent Japanese officials to study Western governments, laws, and industries, demonstrates:',
            options: [
              'The Meiji government\'s systematic approach to selective Westernization — rather than copying a single Western model, Japanese officials studied American, British, French, German, and Russian institutions and adopted the best-suited elements of each (German military organization, British navy, French law, American education) — producing a synthesized modernization rather than imitation of any single Western nation',
              'Japan copied the British model entirely for all its institutions',
              'The Iwakura Mission concluded that Western models were inappropriate for Japan',
              'Japanese modernization occurred without studying Western institutions — Japan developed independently',
            ],
            correctAnswer: 0,
            explanation: 'The synthesis approach of the Iwakura Mission is Japan\'s distinctive modernization strategy: German military organization (admired for its professionalism and recent victory over France in 1870-71); British naval model (most advanced naval power); French legal codes (most sophisticated continental legal system); American education system (pragmatic and practical). This eclectic synthesis — taking the best of multiple models rather than imitating one — reflects the Meiji reformers\' sophisticated comparative analysis of Western institutions.'
          }
        ]
      }
    },
    {
      id: 'whrv5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The Japanese mission (1871-1873) that studied Western governments and institutions was ___',
            options: [
            'The Iwakura Mission',
            'The Perry Mission',
            'The Tokugawa Mission',
            'The Samurai Mission',
            ]
          },
          {
            label: 'Japan\'s defeat of this European power in 1904-05 shocked the world and inspired Asian independence movements ___',
            options: [
            'Russia',
            'Britain',
            'France',
            'Germany',
            ]
          },
          {
            label: 'The Meiji formula of adopting Western technology while preserving Japanese culture was called ___',
            options: [
            'Wakon yosai (Western knowledge, Japanese spirit)',
            'Realpolitik',
            'Social Darwinism',
            'Selective borrowing',
            ]
          }
        ],
        correctAnswers: [
          'The Iwakura Mission',
          'Russia',
          'Wakon yosai (Western knowledge, Japanese spirit)',
        ],
        hint1: '1871-1873 — Japanese officials — studied USA Britain France Germany Russia — selective adoption',
        hint2: 'Russo-Japanese War 1904-05 — first Asian defeat of European great power — shocked world',
        hint3: 'Japanese formula — adopt Western technology institutions — preserve Japanese cultural identity and emperor',
        explanation: 'The Iwakura Mission demonstrates the systematic, selective approach to Westernization; the defeat of Russia demonstrates the successful outcome of that approach; and wakon yosai is the philosophical formula that explains how Japan maintained cultural identity while achieving Western-level modernization — together they explain why Japan succeeded where other non-Western modernization attempts failed.'
      }
    },
    {
      id: 'whrv5-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Comparing Japan\'s Meiji modernization to Latin American independence movements reveals:',
            options: [
              'Both selectively adopted Western models (Japan: Western technology and institutions; Latin America: Enlightenment political theory) but Japan\'s adoption was more comprehensive and internally directed, while Latin American modernization was shaped by continued economic dependency on Western markets — Japan achieved political and economic independence; Latin American nations achieved political independence but maintained economic dependency',
              'Both Japan and Latin America achieved identical types of independence from Western powers',
              'Latin American modernization was more successful than Japanese modernization',
              'Both chose identical paths avoiding all Western influence',
            ],
            correctAnswer: 0,
            explanation: 'The selective adoption comparison reveals different outcomes: Japan\'s selective Westernization aimed explicitly at military and economic independence from Western power; Latin American independence adopted Western political rhetoric while their economies became more deeply integrated into Western (British) commercial networks as raw material suppliers. The different outcomes — Japan avoided colonization; Latin America maintained economic dependency — reflect these different modernization strategies and demonstrate that political independence and economic independence are different achievements.'
          },
          {
            question: 'For AP, the Meiji Restoration\'s most significant contribution to world history was:',
            options: [
              'It demonstrated that non-Western nations could successfully industrialize and achieve military parity with Western powers while preserving cultural identity — providing the first empirical evidence that Western industrial power was not invincible and that the 19th century\'s colonial order was historically contingent rather than permanent',
              'Meiji Japan\'s significance was limited to East Asian regional history',
              'The Meiji Restoration demonstrated that Westernization required complete cultural replacement',
              'Japan\'s significance was purely military with no broader implications for colonial relations',
            ],
            correctAnswer: 0,
            explanation: 'The demonstration effect of Meiji Japan is AP\'s synthesis: by defeating Russia in 1905, Japan proved that Western military dominance was not due to inherent racial or civilizational superiority but to industrialization, organization, and technology — all of which could be acquired. This proof of concept was enormously consequential: it inspired independence movements across Asia and Africa, challenged Social Darwinist ideologies of permanent Western superiority, and demonstrated that the colonial order established in the 19th century was not the final arrangement of global power.'
          }
        ]
      }
    }
  ]
}
