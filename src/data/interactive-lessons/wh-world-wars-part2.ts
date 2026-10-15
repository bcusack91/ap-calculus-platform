export const whWorldWarsPart2Data = {
  topicSlug: 'wh-world-wars',
  sections: [
    {
      id: 'whww2-intro',
      type: 'text' as const,
      content: `
# Causes & Conduct of the World Wars (c. 1900-1945)

**Part 2 of 7 - Key Processes**

This part explains how total war actually worked: state mobilization, propaganda, colonial labor, and new military technology.

| Process | Why it matters |
|---|---|
| State-directed wartime economies | Industrial output became a strategic weapon |
| Propaganda and morale management | Sustained civilian support for prolonged conflict |
| Colonial conscription | Empires fought as global, not just European, wars |
| Industrial military technology | Trench warfare, gas, aircraft, atomic weapons |
      `
    },
    {
      id: 'whww2-content',
      type: 'text' as const,
      content: `
## Process Breakdown: How Total War Actually Worked

Use this 3-step lens: identify the mechanism, show its effect, and prove it with a named case.

> **State-Directed War Economies**

- **Mechanism:** Governments seized control of factories, prices, food supplies, and labor.

- **Why it mattered:** Sustained industrial firepower required centralized state planning, not free markets.

- **High-value evidence:**
  - Britain's Munitions of War Act (1915) brought private factories under state control
  - Germany's Hindenburg Program (1916) reorganized industry around military output
  - U.S. War Industries Board (1917-1918) coordinated production for the front
  - WWII rationing in Britain, Germany, the USSR, and the U.S. extended state control to household consumption

> **Propaganda and Morale Management**

- **Mechanism:** States used posters, film, radio, and censorship to mobilize popular support and demonize enemies.

- **Why it mattered:** Industrial war required civilian endurance; propaganda made that endurance politically manageable.

- **High-value evidence:**
  - British recruitment posters ("Lord Kitchener Wants You")
  - Soviet socialist-realist art celebrating the Great Patriotic War
  - Nazi mass rallies and Leni Riefenstahl's films
  - U.S. Office of War Information; "Rosie the Riveter" campaigns

> **Colonial and Imperial Mobilization**

- **Mechanism:** European empires drafted and recruited colonial subjects as soldiers, laborers, and resource producers.

- **Why it mattered:** This globalized the wars, undermined imperial legitimacy, and seeded later decolonization movements.

| Empire | Colonial Forces |
|---|---|
| Britain | Indian Army (~1.3M in WWI; ~2.5M in WWII), African colonial troops, ANZAC |
| France | Senegalese tirailleurs, North African divisions, Vietnamese laborers |
| Japan | Korean and Taiwanese conscripts in WWII |

> **Industrial Military Technology**

- **WWI innovations:** machine guns, barbed wire, poison gas (Ypres, 1915), tanks (Somme, 1916), submarines, military aircraft
- **WWII innovations:** strategic bombing (Coventry, Dresden, Tokyo), radar, aircraft carriers, V-2 ballistic missiles, atomic bombs (Hiroshima, Nagasaki, August 1945)

> **AP Process Anchor**

- **AP move:** Name one process (e.g., colonial conscription), attach one specific empire and force, then explain one consequence (e.g., postwar nationalist movements in India and West Africa).
      `
    },
    {
      id: 'whww2-quiz',
      type: 'multiple-choice' as const,
      content: `
**Process Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes the role of state-directed war economies in WWI and WWII?',
            options: [
              'Governments lifted price, wage, and production controls and let private markets maximize munitions output for profit',
              'Governments used boards and ministries to coordinate factory output, prices, and labor for sustained military production',
              'Governments banned heavy industry production and shifted entirely to imported finished goods from neutral countries',
              'Only the United States used central economic planning while European powers maintained free-market production throughout'
            ],
            correctAnswer: 1,
            explanation: "Both world wars relied on agencies like the U.S. War Industries Board and Britain's Ministry of Munitions to organize industrial output for the front."
          },
          {
            question: 'Why is colonial conscription a high-yield AP example for the world wars?',
            options: [
              'It shows the wars stayed European, since colonial troops served only as laborers behind the lines',
              'It shows the global scope of total war and helps explain postwar nationalist movements in colonies',
              'It shows European empires emerged stronger and more legitimate after both world wars',
              'It shows colonized peoples refused conscription and stayed out of both wars entirely'
            ],
            correctAnswer: 1,
            explanation: "Colonial conscription globalized the wars, exposed imperial dependency, and contributed to postwar independence movements (India, Vietnam, Algeria, West Africa)."
          }
        ]
      }
    },
    {
      id: 'whww2-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint**
      `,
      exercise: {
        questions: [
          {
            question: 'Which weapon was first used at large scale at Ypres in 1915?',
            options: ['Tanks', 'Poison gas', 'Machine guns', 'Atomic bomb'],
            correctAnswer: 1,
            explanation: 'Chemical weapons (chlorine, then mustard gas) were introduced at Ypres in 1915 and became a symbol of WWI industrial warfare. Tanks first appeared at the Somme in 1916, machine guns were in use from the war\'s opening weeks, and the atomic bomb came in 1945.'
          },
          {
            question: 'Which colonial force fought in large numbers for Britain in both world wars?',
            options: ['The French Foreign Legion', 'The Indian Army', 'The Senegalese Tirailleurs', 'The Philippine Scouts'],
            correctAnswer: 1,
            explanation: "The Indian Army contributed roughly 1.3M soldiers in WWI and 2.5M in WWII — the largest volunteer force in history during WWII. The Foreign Legion and the Senegalese Tirailleurs served France, and the Philippine Scouts served the United States."
          },
          {
            question: 'Which event in August 1945 ended WWII in the Pacific?',
            options: [
              'A U.S. amphibious invasion of the Japanese home islands at Kyushu',
              'U.S. atomic bombings of Hiroshima and Nagasaki, followed by Japanese surrender',
              'The Battle of Midway, which destroyed most of Japan\'s aircraft carriers',
              'The capture of Okinawa after nearly three months of fierce fighting'
            ],
            correctAnswer: 1,
            explanation: "The atomic bombings of Hiroshima (Aug 6) and Nagasaki (Aug 9), combined with Soviet entry into the Pacific war, led to Japan's surrender on Aug 15, 1945. Midway (1942) and Okinawa (April–June 1945) were earlier turning points, and the planned invasion of Kyushu never took place."
          }
        ]
      }
    },
    {
      id: 'whww2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Mechanism to Effect**

Choose the strongest label, then pair it with one named historical example.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mass-producing posters and films to sustain civilian morale is best labeled: ___',
            options: ['propaganda', 'censorship', 'conscription', 'rationing']
          },
          {
            label: 'Drafting Senegalese, Indian, and Vietnamese soldiers into European armies is best labeled: ___',
            options: ['colonial conscription', 'indentured servitude', 'mercenary recruitment', 'settler colonialism']
          },
          {
            label: 'Government coordination of munitions factories, rationing, and labor is best labeled: ___',
            options: ['state-directed war economy', 'laissez-faire capitalism', 'Soviet-style collectivization', 'postwar demobilization']
          }
        ],
        correctAnswers: ['propaganda', 'colonial conscription', 'state-directed war economy'],
        hint1: 'Think communication used to mobilize public will.',
        hint2: 'Think empires drawing soldiers from their colonies.',
        hint3: 'Think wartime planning replacing peacetime markets.',
        explanation: 'Top AP responses move from naming a process to citing a specific named program (Hindenburg Program, Indian Army, U.S. War Industries Board) and then to a consequence.'
      }
    },
    {
      id: 'whww2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Causation**
      `,
      exercise: {
        questions: [
          {
            question: 'A prompt asks why the world wars are described as global, not just European. Which evidence is strongest?',
            options: [
              'Both wars were decided on European fronts, and fighting elsewhere was too limited to shape the outcome',
              'Both wars drew colonial troops from Asia and Africa and spread to Pacific and North African theaters',
              'Both wars began with declarations by the United States, which then drew Europe into a wider conflict',
              'Both wars involved only European powers, though neutral colonies supplied raw materials through trade'
            ],
            correctAnswer: 1,
            explanation: 'AP readers reward globally-scoped evidence: colonial troops, multiple theaters, and worldwide economic mobilization.'
          },
          {
            question: 'Which evidence best supports an argument that total war contributed to postwar political change?',
            options: [
              'Wartime booms ended class conflict, so labor and socialist parties declined in the postwar years',
              'Mass mobilization of women and colonial subjects strengthened postwar suffrage and decolonization movements',
              'European monarchies were restored across the continent after 1945 through Allied agreement at Yalta',
              'Colonial empires emerged stronger after WWII, as wartime service bound colonized subjects to their rulers'
            ],
            correctAnswer: 1,
            explanation: 'Wartime mobilization expanded political claims by women (suffrage in UK 1918/1928, U.S. 1920) and colonial subjects (independence movements after 1945).'
          }
        ]
      }
    }
  ]
}
