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
              'The 1940 German blitzkrieg through the Ardennes that produced French surrender within roughly six weeks of fighting',
              'The 1916 battles of the Somme and Verdun, where massive casualties produced minimal territorial change',
              'The 1945 atomic bombings of Hiroshima and Nagasaki that ended large-scale Pacific combat in a matter of days',
              'The 1905 Russo-Japanese naval engagement at Tsushima that decisively destroyed the Russian Baltic Fleet'
            ],
            correctAnswer: 1,
            explanation: 'Somme and Verdun are the canonical AP examples of attritional industrial warfare with enormous casualties and little movement.'
          },
          {
            question: 'Which event most clearly illustrates the erosion of the civilian-combatant distinction in WWII?',
            options: [
              'The Treaty of Versailles and its associated reparations, war-guilt clause, and territorial provisions of June 1919',
              'Strategic bombing campaigns including the London Blitz, Dresden, Tokyo, and Hiroshima',
              'The signing of the Atlantic Charter by Roosevelt and Churchill aboard a warship off Newfoundland in August 1941',
              'The Locarno Treaties of 1925, which formally confirmed the western borders of Germany with France and Belgium'
            ],
            correctAnswer: 1,
            explanation: "WWII strategic bombing deliberately targeted civilian population and industrial centers, marking total war's full erosion of front/home distinctions."
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
            options: ['United Nations', 'League of Nations', 'NATO', 'Warsaw Pact'],
            correctAnswer: 1,
            explanation: 'The League of Nations was created by the Treaty of Versailles (1919) and began operating in 1920; the U.N. came after WWII.'
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
            options: ['wartime mobilization of women', 'feudal serfdom', 'agrarian collectivization', 'guild monopolies']
          },
          {
            label: 'The Allied bombings of Dresden and Tokyo are evidence of: ___',
            options: ['strategic bombing of civilian centers', 'limited dynastic warfare', 'religious crusade', 'naval cavalry doctrine']
          },
          {
            label: 'The collapse of the Ottoman, Russian, and Austro-Hungarian empires after WWI is evidence of: ___',
            options: ['postwar political restructuring', 'imperial reconsolidation', 'feudal fragmentation', 'industrial revolution']
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
              'WWI and WWII were essentially identical conflicts with the same causes, technologies, ideological framing, and territorial outcomes',
              'Both were total wars that mobilized industrial economies and colonial empires, but WWII was more ideologically polarized and produced far greater civilian casualties through strategic bombing and genocide',
              'WWI was more destructive than WWII in every dimension including casualties, geographic scope, ideological intensity, and postwar political consequences',
              'Neither war involved colonial troops, strategic bombing of civilian centers, or the creation of any major postwar international institution'
            ],
            correctAnswer: 1,
            explanation: 'A strong AP comparison thesis names a similarity (total war, colonial mobilization) and a meaningful difference (ideological polarization, civilian targeting, scale).'
          },
          {
            question: "Which continuity is strongest across both world wars?",
            options: [
              'Use of long-bow infantry and pike formations as the dominant combat force on the major land battlefields',
              'Mass mobilization of state economies and colonial empires for sustained industrial warfare',
              'Reliance on horse cavalry charges as the decisive arm in the major land battles of both world wars',
              'Strict avoidance of civilian and industrial targets through full adherence to Hague treaty provisions on warfare'
            ],
            correctAnswer: 1,
            explanation: 'Industrial total war — state-directed economies plus colonial mobilization — is the defining continuity across both world wars.'
          }
        ]
      }
    }
  ]
}
