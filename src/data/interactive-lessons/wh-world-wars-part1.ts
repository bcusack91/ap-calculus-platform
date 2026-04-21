export const whWorldWarsPart1Data = {
  topicSlug: 'wh-world-wars',
  sections: [
    {
      id: 'whww1-intro',
      type: 'text' as const,
      content: `
# Causes & Conduct of the World Wars (c. 1900-1945)

**Part 1 of 7 - Core Concepts**

---

| Section |
|---|
| Shifting global power after 1900 |
| Long-term and immediate causes of WWI |
| Total war as a new kind of conflict |
| AP causation themes |

> Key idea: Two world wars were not random shocks. They emerged from a combination of long-term structural pressures (alliances, militarism, imperial competition, nationalism) and short-term triggers (Sarajevo 1914, German invasion of Poland 1939). The AP exam expects you to separate background causes from immediate causes and to explain how 19th-century industrial empires made 20th-century total war possible.
      `
    },
    {
      id: 'whww1-content',
      type: 'text' as const,
      content: `
## The Core Picture: Fast AP Framework

Use this structure when writing: name the long-term cause, attach a specific empire/state, and connect it to a wartime outcome.

> **Shifting Global Power Around 1900**

- **Pattern:** Older land empires (Ottoman, Qing, Russian) weakened while newly industrialized states (Germany, Japan, United States) gained relative power.

- Ottoman Empire: lost territory in the Balkans; called the "sick man of Europe"
- Qing China: weakened by Opium Wars, Taiping Rebellion, and Boxer Rebellion (1899-1901)
- Russia: humiliated by Japan in the Russo-Japanese War (1904-1905), exposing imperial fragility
- Japan: emerged as Asia's first industrial great power after Meiji reforms
- Germany: unified in 1871; rapidly industrialized; sought "a place in the sun"

> **Long-Term Causes of WWI ("MAIN")**

| Cause | Concrete Example |
|---|---|
| **M**ilitarism | Anglo-German naval race (Dreadnought, 1906); Schlieffen Plan |
| **A**lliances | Triple Entente (Britain, France, Russia) vs. Triple Alliance (Germany, Austria-Hungary, Italy) |
| **I**mperialism | Competition over Morocco (1905, 1911), Africa, and Ottoman lands |
| **N**ationalism | Pan-Slavism in Balkans; Serbian nationalism vs. Austro-Hungarian rule |

> **Immediate Trigger: June-August 1914**

- Assassination of Archduke Franz Ferdinand in Sarajevo (June 28, 1914) by Gavrilo Princip
- Austria-Hungary's ultimatum to Serbia activated alliance commitments
- Within six weeks: Russia mobilized, Germany invaded Belgium, Britain entered the war

> **Total War: A New Kind of Conflict**

- **Definition:** Mobilization of entire societies, economies, and colonial empires for sustained industrial warfare.
- Civilian factories converted to munitions production
- Governments rationed food, conscripted millions, and used propaganda to sustain morale
- Colonial troops (Indian Army, French Senegalese tirailleurs, ANZAC forces) fought on European fronts

> **AP Causation Anchor**

- **Strong thesis model:** The First World War resulted not from the assassination alone but from a structural combination of imperial rivalry, militarized alliance systems, and nationalist tensions in the Balkans, all amplified by industrial capacity for sustained warfare.
      `
    },
    {
      id: 'whww1-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Which factor most directly explains why the assassination of Franz Ferdinand in 1914 escalated into a continental war?',
            options: [
              'A failed mediation effort by the League of Nations and its associated peace commissions',
              'The interlocking alliance system pulled major powers into the conflict within weeks',
              'Ongoing decolonization across British and French Africa had paralyzed European diplomatic channels',
              'Germany was already engaged in a separate naval war against the United States in the Atlantic'
            ],
            correctAnswer: 1,
            explanation: 'The Triple Entente and Triple Alliance commitments meant a Balkan crisis activated mobilization across Europe within roughly six weeks.'
          },
          {
            question: 'Which development best supports the claim that global power was shifting before 1914?',
            options: [
              'The Qing dynasty modernized its navy and successfully repelled European interventions in coastal China',
              "Japan's victory over Russia in 1905 demonstrated that an Asian industrial state could defeat a European empire",
              'The Ottoman Empire reconquered the Balkans and consolidated control over the eastern Mediterranean shipping lanes',
              'Britain abandoned its naval supremacy and ceded control of the seas to a unified German imperial fleet'
            ],
            correctAnswer: 1,
            explanation: 'The Russo-Japanese War (1904-1905) showcased the rise of Japan and the relative decline of older imperial powers.'
          }
        ]
      }
    },
    {
      id: 'whww1-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint**
      `,
      exercise: {
        questions: [
          {
            question: 'Which acronym summarizes the long-term causes of WWI?',
            options: ['NATO', 'MAIN', 'OPEC', 'EFTA'],
            correctAnswer: 1,
            explanation: 'MAIN stands for Militarism, Alliances, Imperialism, and Nationalism — the standard AP framework for WWI causation.'
          },
          {
            question: 'Which empire was widely called the "sick man of Europe" in this period?',
            options: ['British Empire', 'Ottoman Empire', 'German Empire', 'Russian Empire'],
            correctAnswer: 1,
            explanation: 'The Ottoman Empire, weakened by territorial losses in the Balkans, was nicknamed the "sick man of Europe."'
          },
          {
            question: 'Which best defines total war?',
            options: [
              'A conflict fought primarily by small professional armies operating under aristocratic command structures',
              'A war that mobilizes entire societies, economies, and colonial empires for sustained industrial conflict',
              'A conflict limited to naval engagements between rival imperial fleets in the open ocean',
              'A conflict fought entirely outside the borders of the participating states with no civilian impact'
            ],
            correctAnswer: 1,
            explanation: 'Total war involves full societal mobilization — economy, civilians, propaganda, and colonial labor — not just battlefield armies.'
          }
        ]
      }
    },
    {
      id: 'whww1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Cause to Evidence**

Choose the best label, then state one piece of supporting evidence out loud.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Anglo-German naval race and Schlieffen Plan are evidence of: ___',
            options: ['militarism', 'pacifism', 'isolationism', 'liberal democracy']
          },
          {
            label: 'Pan-Slavism and Serbian opposition to Austro-Hungarian rule are evidence of: ___',
            options: ['nationalism', 'mercantilism', 'feudalism', 'monasticism']
          },
          {
            label: 'European competition over Morocco and Ottoman territories is evidence of: ___',
            options: ['imperialism', 'free trade', 'religious tolerance', 'agrarian reform']
          }
        ],
        correctAnswers: ['militarism', 'nationalism', 'imperialism'],
        hint1: 'Think arms buildup and military planning.',
        hint2: 'Think identity-based political movements in the Balkans.',
        hint3: 'Think competition over overseas territory and resources.',
        explanation: 'Strong AP causation responses pair each MAIN cause with a specific named example, not just a definition.'
      }
    },
    {
      id: 'whww1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application**
      `,
      exercise: {
        questions: [
          {
            question: 'A student argues that WWI was caused solely by the Sarajevo assassination. Which evidence best refutes this?',
            options: [
              "Austria-Hungary's ultimatum to Serbia in July 1914 was the first diplomatic incident between the two states in decades",
              'The pre-existing alliance system, naval arms race, and imperial rivalries had set conditions for general war well before 1914',
              'Russia and Germany had signed a binding non-aggression treaty in 1913 that should have prevented their mobilization',
              'The United States declared war on Germany within days of the Sarajevo assassination and triggered Allied mobilization'
            ],
            correctAnswer: 1,
            explanation: 'Strong refutations of "trigger-only" explanations cite the structural causes (MAIN) that made the trigger consequential.'
          },
          {
            question: 'Which thesis best fits an LEQ on the causes of WWI?',
            options: [
              'WWI resulted from a single isolated act of terrorism by a Bosnian-Serb nationalist student in late June 1914',
              'WWI emerged from long-term militarism, alliances, imperial competition, and nationalism, with the Sarajevo crisis serving as the immediate trigger',
              'WWI was caused entirely by an economic collapse and a wave of currency devaluations across Europe in early 1914',
              'WWI began because the United Nations failed to enforce its collective-security guarantees against Austrian aggression'
            ],
            correctAnswer: 1,
            explanation: 'AP readers reward theses that distinguish long-term structural causes from immediate triggers.'
          }
        ]
      }
    }
  ]
}
