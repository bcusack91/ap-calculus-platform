export const whWorldWarsPart4Data = {
  topicSlug: 'wh-world-wars',
  sections: [
    {
      id: 'whww4-intro',
      type: 'text' as const,
      content: `
# Causes & Conduct of the World Wars (c. 1900-1945)

**Part 4 of 7 - Connections & Interactions**

This part focuses on how the wars connected to economic systems, ideological movements, and global empires — and how those connections produced cascading effects.
      `
    },
    {
      id: 'whww4-content',
      type: 'text' as const,
      content: `
## Interconnected Systems

> **War, Debt, and the Global Economy**

- **Pattern:** Total war reshaped the world's financial system and contributed to the Great Depression.
- Britain and France borrowed heavily from the United States during WWI, shifting global financial leadership to New York
- Germany was assigned 132 billion gold marks in reparations under the Treaty of Versailles (1919)
- The Dawes Plan (1924) and Young Plan (1929) restructured German payments via U.S. loans
- When U.S. credit collapsed in 1929, the entire reparations-loan cycle unraveled, deepening the Depression in Europe

> **Ideology and Mass Politics**

- **Pattern:** Postwar instability radicalized politics across Europe and Asia.
- Russia: WWI exhaustion enabled the Bolshevik Revolution (October 1917), creating the world's first communist state
- Italy: Mussolini's March on Rome (1922) installed Europe's first fascist regime
- Germany: Hitler became chancellor in January 1933 amid Depression-driven collapse of Weimar democracy
- Japan: Militarist factions seized control in the 1930s, invading Manchuria (1931) and China proper (1937)

> **Empire, Mobilization, and Decolonization**

- **Pattern:** Wartime promises and colonial sacrifices undermined imperial legitimacy.
- WWI: Britain promised Arabs an independent state (Hussein-McMahon, 1915) and the Balfour Declaration (1917) promised Jews a homeland in Palestine — contradictory pledges that shaped the Middle East
- Indian National Congress: leaders like Gandhi cited wartime contributions to demand self-rule
- French West Africa and Indochina: colonial veterans returned with new political consciousness
- After WWII, India (1947), Indonesia (1949), and dozens of African states gained independence within two decades

> **The Atlantic Alliance and the Cold War Origins**

- **Pattern:** Allied wartime cooperation set the stage for postwar superpower rivalry.
- Atlantic Charter (1941): U.S.-British statement of war aims emphasizing self-determination and free trade
- Tehran (1943), Yalta (Feb 1945), Potsdam (July 1945) conferences divided postwar spheres of influence
- Soviet occupation of Eastern Europe and U.S. atomic monopoly hardened the postwar split

> **AP Connection Anchor**

- **Strong synthesis claim:** The two world wars connected industrial economic systems, mass political ideologies, and colonial empires so tightly that wartime decisions in Europe directly shaped political possibilities in Asia, Africa, and the Americas.
      `
    },
    {
      id: 'whww4-quiz',
      type: 'multiple-choice' as const,
      content: `
**Connection Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which connection between WWI and the Great Depression is most accurate?',
            options: [
              'The two were entirely unrelated economic events with no shared causes, financial institutions, or chain of consequences',
              'War debts, German reparations, and U.S. lending created a financial chain that collapsed when American credit dried up in 1929',
              'The Depression preceded and caused WWI through tariff wars and competitive currency devaluations across Europe in 1913',
              'German reparations were never assessed or collected by the Allied powers because Germany refused to sign Versailles in 1919'
            ],
            correctAnswer: 1,
            explanation: 'AP causation tightly links WWI debts and reparations through U.S. loans (Dawes/Young Plans) to Depression-era collapse.'
          },
          {
            question: 'Which is the strongest example of how WWI undermined imperial legitimacy?',
            options: [
              'European empires expanded freely after the war with no organized resistance from any colonized population in Asia or Africa',
              'Britain made contradictory wartime promises to Arabs and Zionists, and Indian leaders cited wartime sacrifices to demand self-rule',
              'Colonial subjects refused to participate in either world war and remained politically uninvolved throughout the interwar period',
              'No European empire lost any territory or political authority over its colonial possessions during or after the First World War'
            ],
            correctAnswer: 1,
            explanation: 'Wartime contradictions (Hussein-McMahon vs. Balfour) and colonial mobilization fueled postwar nationalist movements across Asia and Africa.'
          }
        ]
      }
    },
    {
      id: 'whww4-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint**
      `,
      exercise: {
        questions: [
          {
            question: 'Which 1917 revolution was made possible by WWI exhaustion?',
            options: ['French Revolution', 'Bolshevik Revolution', 'Cuban Revolution', 'Iranian Revolution'],
            correctAnswer: 1,
            explanation: "Russia's collapse on the Eastern Front and food shortages enabled the Bolshevik seizure of power in October 1917."
          },
          {
            question: 'Which 1941 document expressed Allied war aims including self-determination?',
            options: ['Treaty of Versailles', 'Atlantic Charter', 'Yalta Communique', 'Twelve Points'],
            correctAnswer: 1,
            explanation: 'The Atlantic Charter (Aug 1941), signed by Roosevelt and Churchill, became a foundation for the U.N. and decolonization claims.'
          },
          {
            question: 'Which contradictory British wartime pledges shaped the modern Middle East?',
            options: [
              'Sykes-Picot Agreement and the Treaty of Sevres',
              'Hussein-McMahon Correspondence and the Balfour Declaration',
              'Atlantic Charter and the Marshall Plan',
              'Twelve Points and the Locarno Treaties'
            ],
            correctAnswer: 1,
            explanation: 'The Hussein-McMahon Correspondence (1915) promised Arab independence; the Balfour Declaration (1917) promised a Jewish homeland in Palestine.'
          }
        ]
      }
    },
    {
      id: 'whww4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Connection to Outcome**

Pick the strongest causal link in each row, then justify your choice in one AP-style sentence.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'WWI debt and reparations cycles most directly contributed to: ___',
            options: ['the Great Depression', 'the consolidation of European empires', 'a new era of stable global free trade', 'a return to the prewar gold standard']
          },
          {
            label: 'Postwar Russian collapse and Bolshevik seizure of power most directly produced: ___',
            options: ["the world's first communist state", 'a restored tsarist constitutional monarchy', 'a German-led Eastern European federation', 'a Western-style parliamentary republic']
          },
          {
            label: 'Indian, African, and Vietnamese wartime contributions most directly fueled: ___',
            options: ['postwar decolonization movements', 'the consolidation of European empires after 1945', 'a return to feudal landholding patterns', 'the spread of Confucian governance ideals']
          }
        ],
        correctAnswers: ['the Great Depression', "the world's first communist state", 'postwar decolonization movements'],
        hint1: 'Follow the money from war debts to 1929.',
        hint2: 'Think Lenin, October 1917, and the USSR.',
        hint3: 'Think Gandhi, Ho Chi Minh, and postwar independence.',
        explanation: "Top AP responses don't just define connections — they trace cause -> mechanism -> historical consequence with named cases."
      }
    },
    {
      id: 'whww4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Synthesis**
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best synthesizes how the world wars reshaped the international order?',
            options: [
              'The wars had no significant effect on the structure of the international order, the balance of power, or the colonial system',
              'The wars destroyed older European empires, accelerated U.S. and Soviet superpower status, gave rise to international institutions (League, U.N.), and seeded global decolonization',
              'The wars restored 18th-century absolute monarchies across continental Europe through Allied diplomatic agreements at Versailles and Yalta',
              'The wars eliminated all ideological conflict and produced a stable democratic peace among the major industrial powers worldwide'
            ],
            correctAnswer: 1,
            explanation: 'A strong synthesis names imperial collapse, superpower rise, institution building, and decolonization as interlocking outcomes.'
          },
          {
            question: 'A student claims wartime decisions in Europe had no impact on Asia or Africa. Which evidence best refutes this?',
            options: [
              'European powers operated entirely within metropolitan European borders throughout both wars without any colonial mobilization',
              'Colonial conscription, contradictory wartime pledges (e.g., Balfour, Hussein-McMahon), and the Atlantic Charter all directly shaped postwar political movements outside Europe',
              'Colonial subjects had no awareness of either European conflict or its political implications for their territories or governance',
              'African and Asian states remained politically untouched by European decolonization debates throughout the entire postwar period'
            ],
            correctAnswer: 1,
            explanation: 'AP synthesis requires showing how European wartime choices produced political consequences in Asia, Africa, and the Middle East.'
          }
        ]
      }
    }
  ]
}
