export const whWorldWarsPart7Data = {
  topicSlug: 'wh-world-wars',
  sections: [
    {
      id: 'whww7-intro',
      type: 'text' as const,
      content: `
# Causes & Conduct of the World Wars (c. 1900-1945)

**Part 7 of 7 - AP Review**

Final review: high-yield terms, likely prompts, and exam strategy.
      `
    },
    {
      id: 'whww7-content',
      type: 'text' as const,
      content: `
## High-Yield AP Review

> **Terms You Should Use Precisely**

- MAIN causes (Militarism, Alliances, Imperialism, Nationalism)
- Total war
- Treaty of Versailles; Article 231 (war guilt); reparations
- League of Nations; United Nations
- Dawes Plan; Young Plan
- Bolshevik Revolution (October 1917)
- Fascism; Nazism; Lebensraum; Greater East Asia Co-Prosperity Sphere
- Munich Agreement (1938); appeasement
- Blitzkrieg; strategic bombing; atomic weapons
- Atlantic Charter (1941); Yalta; Potsdam
- Colonial conscription (Indian Army, Senegalese tirailleurs)

> **Common AP Prompt Types**

1) **Causation:** Long-term and immediate causes of WWI; causes of WWII
2) **Comparison:** WWI vs. WWII (combat, civilian impact, postwar order)
3) **CCOT:** From 1914 to 1945, what changed and what continued in industrial warfare?
4) **Contextualization:** Place the wars within broader 20th-century globalization, decolonization, and ideological conflict

> **High-Yield Comparison Frameworks**

| Comparison | Key Move |
|---|---|
| WWI causes vs. WWII causes | WWI = MAIN + Sarajevo; WWII = Versailles grievances + Depression + appeasement + Axis expansion |
| Combat in WWI vs. WWII | Trench attrition vs. mobile/air/atomic warfare |
| Postwar order 1919 vs. 1945 | Punitive (Versailles) vs. reconstructive (Marshall Plan, U.N.) |
| Empire in 1914 vs. 1945 | Globally dominant European empires vs. legitimacy crisis and rapid decolonization |

> **AP Strategy Anchor**

- **Strategy move:** Lead with a clear thesis that distinguishes long-term from immediate causes.
- **Evidence move:** Use one precise named example (Schlieffen Plan, Article 231, Munich, Hiroshima).
- **Reasoning move:** Explain why the example proves the claim and connect to a broader 20th-century pattern (industrialization, ideology, decolonization).

> **Common Pitfalls to Avoid**

- Treating WWI and WWII as identical conflicts (they share total war, but differ sharply in ideology, scope, and postwar order)
- Blaming WWII solely on Versailles (always include the Depression and the failure of collective security)
- Forgetting the Pacific theater and colonial mobilization (the wars were truly global, not just European)
      `
    },
    {
      id: 'whww7-quiz',
      type: 'multiple-choice' as const,
      content: `
**Mastery Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which thesis is strongest for a comparison prompt on WWI and WWII?',
            options: [
              'Both were total wars, but WWI was deadlier for civilians, since the 1918 flu and famine outstripped WWII\'s bombing and genocide',
              'Both were total wars that mobilized industrial economies and colonies, but WWII was more ideological and more devastating to civilians',
              'WWI was as ideological as WWII, because fascism and communism already divided the two alliance blocs before 1914',
              'Both were limited wars fought by professional armies, but WWII was larger in scale because more nations joined the fighting'
            ],
            correctAnswer: 1,
            explanation: 'Strong AP comparison theses name shared structural features and meaningful differences in scope, ideology, and outcome.'
          },
          {
            question: 'Which is the strongest causation argument for the outbreak of WWII?',
            options: [
              'Germany\'s Versailles grievances alone made WWII inevitable from the moment it signed the treaty in 1919',
              'Versailles grievances, the Depression, failed collective security, and Axis expansion together produced WWII',
              'WWII was an unforeseeable accident, since no crises, warnings, or treaty violations came before 1939',
              'Soviet expansion alone caused WWII, as the Nazi-Soviet Pact led Britain and France to declare war'
            ],
            correctAnswer: 1,
            explanation: 'AP causation rewards multi-factor explanations that name structural conditions and aggressive policies together; no single factor is sufficient.'
          }
        ]
      }
    },
    {
      id: 'whww7-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint**
      `,
      exercise: {
        questions: [
          {
            question: 'Which acronym summarizes long-term causes of WWI?',
            options: ['MAIN', 'NATO', 'OPEC', 'NAFTA'],
            correctAnswer: 0,
            explanation: 'MAIN (Militarism, Alliances, Imperialism, Nationalism) is the standard AP framework for long-term WWI causation.'
          },
          {
            question: 'Which 1941 document outlined Allied war aims including self-determination?',
            options: ['Atlantic Charter', 'Treaty of Versailles', 'Balfour Declaration', 'Fourteen Points'],
            correctAnswer: 0,
            explanation: 'The Atlantic Charter (Aug 1941) committed Allied powers to postwar self-determination and free trade. The Balfour Declaration (1917) and the Fourteen Points (1918) date from WWI.'
          },
          {
            question: 'Which postwar institution succeeded the failed League of Nations after WWII?',
            options: ['NATO', 'United Nations', 'Association of Southeast Asian Nations', 'Warsaw Pact'],
            correctAnswer: 1,
            explanation: 'The United Nations (1945) replaced the League of Nations as the primary postwar collective-security institution. ASEAN (1967) is a regional association, and NATO and the Warsaw Pact were Cold War military alliances.'
          }
        ]
      }
    },
    {
      id: 'whww7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Prompt Type to Strategy**

Identify the prompt type first, then select evidence that directly matches that task.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A prompt asking "what caused the world wars" is mainly testing: ___',
            options: ['causation', 'comparison', 'continuity and change over time', 'periodization']
          },
          {
            label: 'A prompt asking "compare WWI and WWII combat doctrine" is mainly testing: ___',
            options: ['comparison', 'causation', 'contextualization', 'continuity and change over time']
          },
          {
            label: 'A prompt asking what changed in industrial warfare from 1914 to 1945 is mainly testing: ___',
            options: ['continuity and change over time', 'causation', 'comparison', 'contextualization']
          }
        ],
        correctAnswers: ['causation', 'comparison', 'continuity and change over time'],
        hint1: 'Look for "why/how" mechanism language.',
        hint2: 'Look for explicit "similarities and differences" framing.',
        hint3: 'Look for what persists versus what shifts across decades.',
        explanation: 'Prompt-type recognition is a scoring advantage because it lets you choose the right evidence and reasoning structure immediately. All four answer choices are real AP historical thinking skills, so read the prompt verb carefully.'
      }
    },
    {
      id: 'whww7-applied',
      type: 'multiple-choice' as const,
      content: `
**Final AP Application**
      `,
      exercise: {
        questions: [
          {
            question: 'Which short claim is best for an SAQ asking one continuity in industrial warfare from 1914 to 1945?',
            options: [
              'Both world wars relied on industrial mass production, state-directed economies, and colonial empires',
              'Both world wars were won mainly by naval blockade, as the Allies starved the Central and Axis powers of food, fuel, and industrial inputs',
              'Both world wars relied on volunteer armies, as major powers avoided conscription to preserve public support for the war',
              'Both world wars relied on private markets for munitions, as governments left production decisions to independent firms'
            ],
            correctAnswer: 0,
            explanation: 'It is precise, accurate, and directly responsive to a continuity question on industrial mobilization.'
          },
          {
            question: 'Which sentence best shows strong AP reasoning after citing the Munich Agreement (1938)?',
            options: [
              'This matters because appeasement rewarded aggression and encouraged the German expansion that led to war',
              'This matters because Munich shows Britain and France were ready to fight in 1938 but were held back by the League',
              'This matters because Munich shows the Soviet Union and Germany had already agreed to divide Poland between them',
              'This matters because Munich shows the League of Nations was effective at stopping aggression throughout the 1930s'
            ],
            correctAnswer: 0,
            explanation: 'The sentence explicitly links the source to a broader causation argument with named consequences. The Nazi-Soviet Pact that divided Poland came in August 1939, nearly a year after Munich.'
          }
        ]
      }
    }
  ]
}
