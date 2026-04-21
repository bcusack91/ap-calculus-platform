export const whMassAtrocitiesPart1Data = {
  topicSlug: 'wh-mass-atrocities',
  sections: [
    {
      id: 'whma1-intro',
      type: 'text' as const,
      content: `
# Mass Atrocities & Resistance in the 20th Century

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| Defining genocide and mass atrocity |
| State ideology, group identity, and dehumanization |
| Patterns across the Armenian Genocide, the Holocaust, and the Cambodian Genocide |
| AP causation and comparison framing |

> Key idea: Mass atrocities in the 20th century were not random outbursts of violence. They followed identifiable patterns — a state with a totalizing ideology, a targeted group framed as an existential threat, a wartime or crisis context that suspended legal protections, and bureaucracies that organized killing as policy. The AP exam expects you to identify these structural causes and to compare cases (Armenia 1915, the Holocaust 1941–45, Cambodia 1975–79, Rwanda 1994) using shared analytical categories.
      `
    },
    {
      id: 'whma1-content',
      type: 'text' as const,
      content: `
## The Core Picture: Fast AP Framework

Use this structure when writing: name the regime, name the targeted group, identify the ideological frame, and connect to a specific event or policy.

> **Defining Genocide (UN Convention, 1948)**

- Acts "committed with intent to destroy, in whole or in part, a national, ethnical, racial or religious group"
- Includes killing, causing serious bodily or mental harm, deliberately inflicting destructive conditions, preventing births, and forcibly transferring children
- Term coined by Raphael Lemkin (1944) in response to the Holocaust and the earlier Armenian case

> **Mass Atrocities Beyond Genocide**

| Category | Definition | Example |
|---|---|---|
| Genocide | Targeted destruction of a group | Holocaust, Rwanda 1994 |
| Crimes against humanity | Widespread or systematic attack on civilians | Cambodia 1975–79 |
| War crimes | Violations of the laws of war | Nanjing Massacre 1937 |
| Ethnic cleansing | Forced removal of a group from a territory | Bosnia 1992–95 |

> **The Common Structural Pattern**

1. **Totalizing ideology** — racial nationalism (Nazi Germany), agrarian Marxism (Khmer Rouge), Hutu Power (Rwanda)
2. **Constructed enemy group** — Armenians as Ottoman "fifth column," Jews as the Nazi "racial enemy," urban "new people" in Cambodia, Tutsi as "cockroaches" in Rwanda
3. **Crisis context** — WWI for Armenia, WWII for the Holocaust, the U.S. bombing aftermath and civil war for Cambodia, the Habyarimana assassination for Rwanda
4. **Bureaucratic organization** — special killing units (Einsatzgruppen), camps, planning ministries, identity registration, propaganda media

- **Key takeaway:** When you write about a 20th-century atrocity, name all four elements together. A thesis that names ideology + group + crisis + organization will outscore one that names only the killings.
      `
    },
    {
      id: 'whma1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Defining the Field**`,
      exercise: {
        questions: [
          {
            question: 'Which combination best captures the AP definition of genocide as established by the 1948 UN Convention?',
            options: [
              'Any act of large-scale violence committed during a war between two sovereign states regardless of which group is being targeted',
              'Acts committed with intent to destroy, in whole or in part, a national, ethnic, racial, or religious group',
              'A spontaneous outbreak of communal violence between neighbors that occurs without any state planning or organization',
              'Any government policy that produces a high number of civilian casualties during a counter-insurgency campaign'
            ],
            correctAnswer: 1,
            explanation: 'The 1948 UN Convention requires intent and identifies the four protected categories. Memorize this phrasing — many AP MCQs hinge on the words "intent" and "in whole or in part."'
          },
          {
            question: 'Which set of structural conditions appears across the Armenian Genocide, the Holocaust, and the Rwandan Genocide?',
            options: [
              'A democratic government, a free press, an independent judiciary, and an active international peacekeeping force on the ground',
              'A totalizing ideology, a constructed enemy group, a wartime or political crisis, and a bureaucratic apparatus that organized killing as policy',
              'A foreign occupying army, a long-running famine, the absence of any organized military forces, and unanimous international intervention',
              'A purely economic crisis, a single charismatic leader, no use of mass media, and a complete absence of any ideological justification offered'
            ],
            correctAnswer: 1,
            explanation: 'These four elements (ideology + targeted group + crisis + organization) are the AP comparison framework. Use them as your skeleton for any short-answer or essay on mass atrocity.'
          }
        ]
      }
    },
    {
      id: 'whma1-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — name the right concept**`,
      exercise: {
        questions: [
          {
            prompt: 'The Polish-Jewish lawyer who coined the term "genocide" in 1944 and pushed for its adoption by the United Nations.',
            answer: 'Raphael Lemkin',
            acceptableAnswers: ['Lemkin', 'Raphael Lemkin'],
            hint: 'He combined the Greek "genos" (race/tribe) with Latin "cide" (killing).'
          },
          {
            prompt: 'The 1948 international agreement that legally defined genocide and obligated signatory states to prevent and punish it.',
            answer: 'Genocide Convention',
            acceptableAnswers: ['UN Genocide Convention', 'Genocide Convention', 'Convention on the Prevention and Punishment of the Crime of Genocide'],
            hint: 'A UN agreement adopted three years after the end of WWII.'
          },
          {
            prompt: 'The Nazi mobile killing units that murdered roughly 1.5 million people, mostly Jews, on the Eastern Front in 1941–42.',
            answer: 'Einsatzgruppen',
            acceptableAnswers: ['Einsatzgruppen', 'Einsatzgruppe'],
            hint: 'German for "deployment groups."'
          }
        ]
      }
    },
    {
      id: 'whma1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each historical event to the structural element it best illustrates.**`,
      exercise: {
        dropdowns: [
          {
            label: 'The Nazi 1935 Nuremberg Laws stripping Jewish citizenship are evidence of: ___',
            options: ['legalized dehumanization', 'wartime crisis trigger', 'bureaucratic killing infrastructure', 'spontaneous communal violence']
          },
          {
            label: 'The 1915 Ottoman wartime fear of Russian invasion through Armenian territory is evidence of: ___',
            options: ['legalized dehumanization', 'wartime crisis trigger', 'bureaucratic killing infrastructure', 'spontaneous communal violence']
          },
          {
            label: 'The Khmer Rouge S-21 prison and its meticulous photographic and confession records are evidence of: ___',
            options: ['legalized dehumanization', 'wartime crisis trigger', 'bureaucratic killing infrastructure', 'spontaneous communal violence']
          }
        ],
        correctAnswers: ['legalized dehumanization', 'wartime crisis trigger', 'bureaucratic killing infrastructure'],
        hint1: 'Each item maps to one of the four structural elements introduced in the table above.',
        hint2: 'Look for what the example proves: a law (legal status), a war fear (crisis), or a recordkeeping system (bureaucracy).',
        hint3: 'Re-read the four-element list: ideology, constructed group, crisis, organization. Pick the closest match for each.',
        explanation: 'Every modern mass atrocity uses some combination of these four elements. The Nuremberg Laws turned dehumanization into law; the Russian-invasion fear created the Ottoman crisis frame in 1915; S-21 illustrates how the Khmer Rouge built a state apparatus for killing.'
      }
    },
    {
      id: 'whma1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "A historian writes: \"Twentieth-century genocides cannot be explained by hatred alone.\" Which response would most strengthen the historian's claim with AP-quality reasoning?",
            options: [
              'Mass atrocities are simply the result of long-standing ethnic hostilities that build up over generations until communities erupt into violence on their own',
              'Mass atrocities require a totalizing ideology, an organized state apparatus, and a crisis context that allows leaders to mobilize hatred into systematic killing policy',
              'Mass atrocities only occur when foreign powers intervene militarily and impose new political boundaries on previously stable multi-ethnic societies in transition',
              'Mass atrocities are random tragedies that historians cannot meaningfully explain because the motives of perpetrators are too individual and too varied to generalize'
            ],
            correctAnswer: 1,
            explanation: 'The strongest AP response moves beyond emotion ("hatred") to structural causation. Naming ideology + organization + crisis is the move that earns the complexity point.'
          },
          {
            question: 'Which comparison best illustrates that the AP comparison skill requires shared analytical categories rather than just listing two events?',
            options: [
              'The Armenian Genocide happened in 1915 and the Holocaust happened in the 1940s, so they are different events that occurred in different decades and regions',
              'Both the Armenian Genocide and the Holocaust used wartime crisis to justify mass deportation and killing of a religious or ethnic minority defined as a security threat',
              'The Armenian Genocide involved Turks and Armenians while the Holocaust involved Germans and Jews, so each case has its own particular national identities',
              'The Holocaust killed more people than the Armenian Genocide so the two cases cannot really be compared using the same analytical categories or framework'
            ],
            correctAnswer: 1,
            explanation: 'AP comparison rewards shared categories: wartime crisis, security framing, mass deportation, targeted minority. Lists of differences without analytical frame do not score the complexity point.'
          }
        ]
      }
    }
  ]
}
