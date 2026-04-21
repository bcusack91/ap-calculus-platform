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
              'The two wars were identical in cause, conduct, and consequence with no meaningful differences in scale, ideology, or postwar outcome',
              'Both were total wars that mobilized industrial economies and colonial empires, but WWII was more ideologically polarized, more devastating to civilians, and produced a more constructive postwar order',
              'WWII was less destructive than WWI in every dimension including casualties, ideological intensity, geographic scope, and postwar political change',
              'Neither war involved colonial troops, strategic bombing of civilian targets, or the creation of any major postwar international institution'
            ],
            correctAnswer: 1,
            explanation: 'Strong AP comparison theses name shared structural features and meaningful differences in scope, ideology, and outcome.'
          },
          {
            question: 'Which is the strongest causation argument for the outbreak of WWII?',
            options: [
              'Versailles grievances alone made WWII inevitable from the moment the treaty was signed at the Hall of Mirrors in June 1919',
              'Versailles grievances, the Great Depression, the failure of collective security, and Axis expansion together produced WWII; no single factor is sufficient',
              'WWII was an unforeseeable accident with no structural causes or identifiable diplomatic warning signs in the years before 1939',
              'WWII was caused entirely by Soviet expansion in Eastern Europe following the Molotov-Ribbentrop Pact and the invasion of Finland'
            ],
            correctAnswer: 1,
            explanation: 'AP causation rewards multi-factor explanations that name structural conditions and aggressive policies together.'
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
            options: ['Atlantic Charter', 'Treaty of Versailles', 'Magna Carta', 'Twelve Points'],
            correctAnswer: 0,
            explanation: 'The Atlantic Charter (Aug 1941) committed Allied powers to postwar self-determination and free trade.'
          },
          {
            question: 'Which postwar institution succeeded the failed League of Nations after WWII?',
            options: ['NATO', 'United Nations', 'European Union', 'Warsaw Pact'],
            correctAnswer: 1,
            explanation: 'The United Nations (1945) replaced the League of Nations as the primary postwar collective-security institution.'
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
              'Both world wars relied on industrial mass production, state-directed economies, and colonial empires for sustained mobilization',
              'Neither world war involved any industrial production, state economic planning, or significant material mobilization beyond local levies',
              'Both world wars used only feudal levy systems and small volunteer professional armies under hereditary aristocratic command',
              'Both world wars avoided any state economic planning and relied entirely on private market production for munitions and equipment'
            ],
            correctAnswer: 0,
            explanation: 'It is precise, accurate, and directly responsive to a continuity question on industrial mobilization.'
          },
          {
            question: 'Which sentence best shows strong AP reasoning after citing the Munich Agreement (1938)?',
            options: [
              'This evidence matters because it shows that the policy of appeasement, by rewarding aggression, encouraged further German expansion and is a key cause of the outbreak of WWII in 1939',
              'This evidence has no broader significance for understanding the diplomatic origins of WWII or the development of interwar foreign policy',
              'This evidence proves that WWII began in 1914 with the assassination of Archduke Franz Ferdinand by a Bosnian-Serb nationalist',
              'This evidence shows that the League of Nations was effective at preventing aggression throughout the interwar period before 1939'
            ],
            correctAnswer: 0,
            explanation: 'The sentence explicitly links the source to a broader causation argument with named consequences.'
          }
        ]
      }
    }
  ]
}
