export const whWorldWarsPart5Data = {
  topicSlug: 'wh-world-wars',
  sections: [
    {
      id: 'whww5-intro',
      type: 'text' as const,
      content: `
# Causes & Conduct of the World Wars (c. 1900-1945)

**Part 5 of 7 - Change Over Time**

This part tracks continuity and change from 1914 through the interwar period and into 1945, with attention to how unresolved tensions from WWI helped produce WWII.
      `
    },
    {
      id: 'whww5-content',
      type: 'text' as const,
      content: `
## Continuity and Change Framework

> **Continuities Across Both World Wars**

- **Pattern:** The structural foundations of total war persisted from 1914 through 1945.
- Industrial mass production fueling military scale (artillery, aircraft, vehicles)
- Mobilization of colonial empires and overseas resources
- State-directed war economies and propaganda systems
- Aspiration to international institutions for collective security (League 1920, U.N. 1945)

> **Changes from WWI to WWII**

- **Pattern:** Lessons (and grievances) from WWI reshaped how WWII was fought, justified, and concluded.

| Dimension | WWI (1914-1918) | WWII (1939-1945) |
|---|---|---|
| Combat doctrine | Trench stalemate; attritional offensives | Mobile warfare (blitzkrieg, armored thrusts, carrier air power) |
| Civilian targeting | Limited (U-boat campaigns; some bombing) | Systematic strategic bombing; genocide; atomic weapons |
| Ideological framing | Dynastic alliances + nationalism | Fascism vs. liberal democracy vs. communism |
| Postwar order | Punitive (Treaty of Versailles, reparations) | Reconstruction (Marshall Plan), U.N., war crimes tribunals |
| Global scope | Mostly European front + colonies | Truly global: Europe, Pacific, North Africa, Asia, Atlantic |

> **The Interwar Hinge: Why WWII Followed WWI**

- **Versailles grievances:** "war guilt clause" (Article 231) and 132 billion gold marks in reparations fueled German nationalist resentment
- **Failure of collective security:** The League of Nations could not stop Japan in Manchuria (1931), Italy in Ethiopia (1935), or Germany's remilitarization of the Rhineland (1936)
- **Great Depression:** Mass unemployment radicalized politics; Hitler took power in 1933 amid economic collapse
- **Appeasement:** Munich Agreement (1938) ceded Sudetenland to Germany without resistance, encouraging further expansion
- **Pacific tensions:** Japanese militarism, the invasion of China (1937), and the U.S. oil embargo (1941) led to Pearl Harbor (Dec 7, 1941)

> **AP CCOT Anchor**

- **AP move:** In LEQ/SAQ answers, pair one continuity (industrial mobilization) with one specific change (atomic weapons; ideological warfare; civilian targeting), then explain a cause (failure of Versailles; Depression; appeasement).
      `
    },
    {
      id: 'whww5-quiz',
      type: 'multiple-choice' as const,
      content: `
**Continuity/Change Check**
      `,
      exercise: {
        questions: [
          {
            question: "Which is the strongest example of change from WWI to WWII?",
            options: [
              'Both wars were fought mainly from fixed trench lines, with little change in tactics or weapons',
              'WWI featured trench stalemate while WWII featured mobile warfare, strategic bombing, and atomic weapons',
              'WWII was fought only in Europe and North Africa, while WWI had already spread to Asia, Africa, and the Pacific',
              'WWII ended without new international bodies, unlike WWI, which had created the League'
            ],
            correctAnswer: 1,
            explanation: 'AP CCOT rewards specific contrasts: trench warfare versus blitzkrieg/strategic bombing/atomic weapons. WWII was more global than WWI, and it produced the United Nations.'
          },
          {
            question: 'Which is the strongest example of continuity across both world wars?',
            options: [
              'Reliance on small volunteer armies, with conscription avoided by all the major powers',
              'Mass mobilization of state economies and colonial empires for sustained industrial warfare',
              'Reliance on trench stalemate as the dominant form of fighting on every major front',
              'Full press freedom in every combatant state, as governments avoided organized wartime propaganda'
            ],
            correctAnswer: 1,
            explanation: 'Industrial total war — state economies plus colonial empires plus propaganda — is the defining continuity from 1914 through 1945.'
          }
        ]
      }
    },
    {
      id: 'whww5-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint**
      `,
      exercise: {
        questions: [
          {
            question: 'Which 1938 agreement ceded the Sudetenland to Nazi Germany without resistance?',
            options: ['Treaty of Versailles', 'Munich Agreement', 'Anglo-German Naval Agreement', 'Locarno Treaties'],
            correctAnswer: 1,
            explanation: 'The Munich Agreement (Sept 1938) is the textbook example of appeasement and is closely tied to the outbreak of WWII. The 1935 Anglo-German Naval Agreement concerned fleet sizes, not territory.'
          },
          {
            question: 'Which Versailles clause assigned formal responsibility for WWI to Germany?',
            options: ['Article 231, the "war guilt" clause', 'Article 10, the League security pledge', 'Article 42, the Rhineland demilitarization clause', 'The Fourteen Points'],
            correctAnswer: 0,
            explanation: 'Article 231 of the Treaty of Versailles assigned war guilt to Germany and justified reparations. Article 10 of the League Covenant pledged collective security, Articles 42–44 demilitarized the Rhineland, and the Fourteen Points was Wilson\'s 1918 peace plan.'
          },
          {
            question: 'Which event in December 1941 brought the United States into WWII?',
            options: ['German sinking of the liner Lusitania', 'German invasion of the Soviet Union', 'Japanese attack on Pearl Harbor', 'Soviet entry into the war against Japan'],
            correctAnswer: 2,
            explanation: 'The Japanese attack on Pearl Harbor on Dec 7, 1941 led the U.S. to declare war on Japan; Germany declared war on the U.S. on Dec 11, 1941. The Lusitania sank in 1915, Germany invaded the USSR in June 1941, and the USSR entered the Pacific war in August 1945.'
          }
        ]
      }
    },
    {
      id: 'whww5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Continuity or Change**

Label each statement, then justify your choice with one piece of named evidence.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mass mobilization of colonial soldiers across both world wars is best labeled: ___',
            options: ['continuity', 'change', 'causation', 'comparison']
          },
          {
            label: 'The shift from trench warfare to blitzkrieg and atomic weapons is best labeled: ___',
            options: ['change', 'continuity', 'causation', 'comparison']
          },
          {
            label: 'The replacement of the punitive Versailles model with the U.N. and Marshall Plan reconstruction is best labeled: ___',
            options: ['change in postwar order', 'continuity of postwar order', 'cause of the Cold War split', 'contrast across regions']
          }
        ],
        correctAnswers: ['continuity', 'change', 'change in postwar order'],
        hint1: 'Indian Army in WWI and WWII; Senegalese tirailleurs in both.',
        hint2: 'Compare Verdun 1916 to the bombing of Hiroshima 1945.',
        hint3: 'Compare Versailles reparations to the Marshall Plan and U.N.',
        explanation: 'Strong CCOT responses label the category and prove it with specific, accurate evidence.'
      }
    },
    {
      id: 'whww5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style CCOT**
      `,
      exercise: {
        questions: [
          {
            question: 'Which thesis best answers a CCOT prompt on the world wars?',
            options: [
              'Both wars relied on trench warfare, but WWII ended with a harsher peace settlement than Versailles had imposed',
              'Both wars relied on industrial and colonial mobilization, but WWII widened civilian targeting and built a sturdier postwar order',
              'WWI introduced total war, but WWII returned to limited war fought mainly by professional armies away from cities',
              'Both wars were fought for the same ideological goals, so the League of Nations and United Nations were nearly identical'
            ],
            correctAnswer: 1,
            explanation: 'A strong AP CCOT thesis names a continuity (industrial mobilization), a clear change (civilian targeting, ideological framing), and a postwar consequence such as the U.N. and the Marshall Plan.'
          },
          {
            question: 'Which is the best causal explanation for the outbreak of WWII?',
            options: [
              'Germany\'s Versailles grievances alone made war certain, since it planned revenge from the moment it signed in 1919',
              'Versailles grievances, the Great Depression, failed collective security, and Axis expansion combined to produce the war',
              'The Great Depression alone caused the war, because economic collapse forced every major power to seek new markets',
              'Soviet expansion caused the war, as the Nazi-Soviet Pact, the Baltic occupations, and the Finnish war pushed Britain and France to fight'
            ],
            correctAnswer: 1,
            explanation: 'AP causation prefers multi-factor explanations: Versailles, Depression, League failure, and Axis expansion (Germany, Italy, Japan) together produced WWII. Britain and France declared war over the German invasion of Poland, not over Finland.'
          }
        ]
      }
    }
  ]
}
