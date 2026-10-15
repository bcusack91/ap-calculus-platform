export const whWorldWarsPart3Data = {
  topicSlug: 'wh-world-wars',
  sections: [
    {
      id: 'whww3-intro',
      type: 'text' as const,
      content: `
# Causes & Conduct of the World Wars (c. 1900-1945)

**Part 3 of 7 - Patterns & Examples**

AP World rewards pattern detection backed by named evidence. This part trains you to recognize recurring features of 20th-century industrial warfare and to attach a specific case to each.
      `
    },
    {
      id: 'whww3-content',
      type: 'text' as const,
      content: `
## Recurring Patterns of 20th-Century Total War

> **Stalemate and Attrition**

- **Pattern:** Industrial defensive technology (machine guns, artillery, barbed wire) outpaced offensive doctrine, producing prolonged stalemates.
- WWI Western Front: trench lines from the English Channel to Switzerland; battles of the Somme (1916, ~1M casualties) and Verdun (1916, ~700K casualties)
- Eastern Front: more mobile but equally lethal; Russia suffered ~1.7M military deaths

> **Civilian Targeting and Strategic Bombing**

- **Pattern:** Industrial war erased the distinction between front line and home front.
- WWI: German U-boat campaign (Lusitania, 1915) attacked civilian shipping
- WWII: London Blitz (1940-41), Allied bombing of Hamburg (1943) and Dresden (1945), U.S. firebombing of Tokyo (March 1945), atomic bombs (August 1945)

> **Ideologically-Driven War Aims**

- **Pattern:** WWII especially was framed in ideological terms — fascism vs. liberal democracy vs. communism.
- Nazi Germany pursued *Lebensraum* and racial conquest in Eastern Europe
- Imperial Japan invoked the "Greater East Asia Co-Prosperity Sphere" to justify expansion
- Allied powers framed the war as a defense of democracy and (later) human rights

> **Mobilization of Women**

- **Pattern:** Wartime labor shortages drew women into industrial and military roles previously closed to them.
- WWI: British "munitionettes" produced shells; American women entered factories and clerical work
- WWII: Soviet women served in combat (snipers, pilots — e.g., the "Night Witches"); 6M U.S. women entered wartime production ("Rosie the Riveter")

> **Postwar Political Restructuring**

- **Pattern:** Each world war redrew political maps and created new international institutions.
- Post-WWI: collapse of Ottoman, Russian, German, and Austro-Hungarian empires; League of Nations (1920)
- Post-WWII: division of Germany; United Nations (1945); start of decolonization in Asia and Africa

> **AP Pattern Anchor**

- **AP move:** Name the pattern, attach one specific battle or event, then explain its broader consequence.
      `
    },
    {
      id: 'whww3-quiz',
      type: 'multiple-choice' as const,
      content: `
**Pattern Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which example best illustrates stalemate and attrition warfare in WWI?',
            options: [
              'The 1940 German blitzkrieg through the Ardennes that forced a French surrender in about six weeks',
              'The 1916 battles of the Somme and Verdun, where massive casualties produced minimal territorial change',
              'The 1914 First Battle of the Marne, which halted the German advance on Paris within a week',
              'The 1905 naval battle at Tsushima, where Japan destroyed most of Russia\'s Baltic Fleet'
            ],
            correctAnswer: 1,
            explanation: 'Somme and Verdun are the canonical AP examples of attritional industrial warfare with enormous casualties and little movement. The Marne was a war of movement that came just before the trenches settled in, and blitzkrieg and Tsushima were decisive, fast results.'
          },
          {
            question: 'Which event most clearly illustrates the erosion of the civilian-combatant distinction in WWII?',
            options: [
              'Naval battles at Midway, the Coral Sea, and Leyte Gulf, fought between carrier fleets far from cities',
              'Strategic bombing campaigns including the London Blitz, Dresden, Tokyo, and Hiroshima',
              'Tank battles such as Kursk and El Alamein, fought by armored armies across open country',
              'The Atlantic Charter and the Yalta talks, where Allied leaders planned the postwar order'
            ],
            correctAnswer: 1,
            explanation: "WWII strategic bombing deliberately targeted civilian population and industrial centers, marking total war's full erosion of front/home distinctions. Naval and tank battles were fought between armed forces, and the Atlantic Charter and Yalta were diplomacy."
          }
        ]
      }
    },
    {
      id: 'whww3-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint**
      `,
      exercise: {
        questions: [
          {
            question: 'Which two 1916 battles illustrate WWI attritional warfare?',
            options: ['Somme and Verdun', 'Stalingrad and Kursk', 'Tsushima and Mukden', 'Marne and Ypres'],
            correctAnswer: 0,
            explanation: 'Somme (~1M casualties) and Verdun (~700K casualties) in 1916 are the standard AP examples of attritional total war.'
          },
          {
            question: 'Which Nazi concept justified eastward racial conquest?',
            options: ['Manifest Destiny', 'Lebensraum', 'Bushido', 'Mandate of Heaven'],
            correctAnswer: 1,
            explanation: 'Lebensraum ("living space") was the Nazi ideology used to justify invasion and ethnic cleansing in Eastern Europe.'
          },
          {
            question: 'Which postwar international body emerged from WWI?',
            options: ['United Nations', 'League of Nations', 'Concert of Europe', 'Warsaw Pact'],
            correctAnswer: 1,
            explanation: 'The League of Nations was created by the Treaty of Versailles (1919) and began operating in 1920; the U.N. came after WWII, the Concert of Europe followed the Napoleonic Wars, and the Warsaw Pact dates from 1955.'
          }
        ]
      }
    },
    {
      id: 'whww3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Pattern to Evidence**

Pick the strongest pattern label, then connect it to one named historical example.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'British "munitionettes" and U.S. "Rosie the Riveter" are evidence of: ___',
            options: ['wartime mobilization of women', 'the women\'s suffrage campaign', 'colonial labor recruitment', 'postwar demobilization of labor']
          },
          {
            label: 'The Allied bombings of Dresden and Tokyo are evidence of: ___',
            options: ['strategic bombing of civilian centers', 'trench warfare on the Western Front', 'blitzkrieg strikes on enemy front lines', 'naval blockade of enemy ports']
          },
          {
            label: 'The collapse of the Ottoman, Russian, and Austro-Hungarian empires after WWI is evidence of: ___',
            options: ['postwar political restructuring', 'postwar imperial reconsolidation', 'colonial expansion overseas', 'economic globalization']
          }
        ],
        correctAnswers: ['wartime mobilization of women', 'strategic bombing of civilian centers', 'postwar political restructuring'],
        hint1: 'Think labor shortages reshaping gender roles.',
        hint2: 'Think air power deliberately targeting urban populations.',
        hint3: 'Think imperial collapse and new state formation after 1918.',
        explanation: 'High-scoring AP responses pair each pattern with a named case (Dresden, Rosie the Riveter, League of Nations) rather than a generic claim.'
      }
    },
    {
      id: 'whww3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Comparison**
      `,
      exercise: {
        questions: [
          {
            question: 'Which thesis best fits a comparison prompt on WWI and WWII?',
            options: [
              'Each was a total war, but WWI was deadlier for civilians because trench warfare spread disease into cities',
              'Both were total wars fought with industrial and colonial resources, but WWII was more ideological and far deadlier for civilians',
              'WWI was as ideological as WWII, since fascism and communism already divided the two alliance blocs in 1914',
              'Both wars stemmed mainly from colonial rivalry in Africa, so their causes, conduct, and outcomes were essentially the same'
            ],
            correctAnswer: 1,
            explanation: 'A strong AP comparison thesis names a similarity (total war, colonial mobilization) and a meaningful difference (ideological polarization, civilian targeting, scale). Fascism did not exist in 1914, and WWII killed far more civilians than WWI.'
          },
          {
            question: "Which continuity is strongest across both world wars?",
            options: [
              'Reliance on trench stalemate as the dominant form of fighting on every major front',
              'Mass mobilization of state economies and colonial empires for sustained industrial warfare',
              'Reliance on horse cavalry as the decisive arm in the major land battles of both wars',
              'Restraint toward civilian targets under the Hague rules on the conduct of warfare'
            ],
            correctAnswer: 1,
            explanation: 'Industrial total war — state-directed economies plus colonial mobilization — is the defining continuity across both world wars.'
          }
        ]
      }
    }
  ]
}
