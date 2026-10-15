export const whMassAtrocitiesPart2Data = {
  topicSlug: 'wh-mass-atrocities',
  sections: [
    {
      id: 'whma2-intro',
      type: 'text' as const,
      content: `
# Mass Atrocities & Resistance in the 20th Century

**Part 2 of 7 — Key Processes**

---

| Section |
|---|
| The cumulative process: from prejudice to extermination |
| The Armenian Genocide (1915–23) |
| The Holocaust: from persecution to industrialized killing (1933–45) |
| The Cambodian Genocide and Year Zero (1975–79) |

> Key idea: Genocides do not begin with killing. They unfold through stages — discrimination, legal exclusion, ghettoization or deportation, and finally extermination. The AP exam rewards students who can sequence these stages and identify the specific policies that mark each transition.
      `
    },
    {
      id: 'whma2-content',
      type: 'text' as const,
      content: `
## The Stages and the Cases

> **Stages of Genocide (Stanton model, simplified)**

| Stage | What it looks like | Holocaust example |
|---|---|---|
| Classification | "Us" vs. "them" categories | Aryan / Jew |
| Symbolization | Identifiers, names, badges | Yellow star (1939–41) |
| Discrimination | Loss of civil rights | Nuremberg Laws (1935) |
| Dehumanization | Propaganda comparing target to vermin | Der Stürmer cartoons |
| Organization | Special units and bureaucracies | SS, Einsatzgruppen, Reich Security Main Office |
| Polarization | Banning intermarriage, contact | Nuremberg blood-protection law |
| Preparation | Deportation logistics, lists | Wannsee Conference (Jan 1942) |
| Extermination | Mass killing | Death camps, 1942–45 |
| Denial | Postwar erasure of evidence | Holocaust denial movements |

> **The Armenian Genocide (1915–23)**

- **Regime:** Ottoman Empire under the Committee of Union and Progress (Young Turks)
- **Crisis:** WWI defeat at Sarikamish (Jan 1915); Armenian Christians framed as a Russian-aligned fifth column
- **Trigger event:** April 24, 1915 — arrest and execution of Armenian intellectuals in Istanbul (now Armenian Genocide Remembrance Day)
- **Method:** Mass deportations across the Syrian desert; massacres by paramilitary units (Special Organization)
- **Death toll:** Roughly 1–1.5 million Armenians; Assyrian and Greek Christian communities also targeted
- **AP relevance:** First widely recognized genocide of the modern industrial era; key precedent Lemkin cited when coining "genocide"

> **The Holocaust (1933–45)**

- **Regime:** Nazi Germany; ideology of racial nationalism (Nazism)
- **Stages:**
  - 1933–35: legal exclusion (Civil Service Law, Nuremberg Laws)
  - 1938: state-organized violence (Kristallnacht, Nov 9–10)
  - 1939–41: ghettoization in occupied Poland (Warsaw, Łódź)
  - 1941: mass shootings on the Eastern Front by Einsatzgruppen (Babi Yar, Sep 1941, ~33,000 killed in two days)
  - 1942–45: industrialized killing in death camps (Auschwitz-Birkenau, Treblinka, Sobibor); Wannsee Conference (Jan 1942) coordinated bureaucratic implementation
- **Death toll:** ~6 million Jews; an additional ~5 million from other groups (Roma, disabled people, Soviet POWs, Polish civilians, political prisoners, gay men)
- **AP relevance:** Defines the modern category of "industrialized" or "bureaucratic" genocide

> **The Cambodian Genocide (1975–79)**

- **Regime:** Khmer Rouge under Pol Pot; ideology of agrarian Marxism and "Year Zero"
- **Targets:** Urban "new people," ethnic Vietnamese, Cham Muslims, Buddhist monks, ethnic Chinese, perceived intellectuals (people wearing glasses, speaking foreign languages)
- **Methods:** Forced evacuation of Phnom Penh (April 1975); rural labor camps; the S-21 prison; the Killing Fields
- **Death toll:** ~1.7 million (about a quarter of the population)
- **AP relevance:** Shows that genocide can target political/class categories as well as ethnic ones; complicates the strict UN definition
      `
    },
    {
      id: 'whma2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Stages and Cases**`,
      exercise: {
        questions: [
          {
            question: 'Which sequence best describes the cumulative path that scholars use to analyze the Holocaust?',
            options: [
              'Death camps opened first (1933), followed by ghettoization (1936), the Nuremberg Laws (1938), and finally the Wannsee Conference (1945)',
              'Legal exclusion (1933–35), then organized violence (1938), ghettoization (1939–41), mass shootings (1941), and death camps (1942–45)',
              'Mass shootings began first (1935), then legal exclusion (1938), then deportation to camps (1940), and finally ghettoization (1943–45)',
              'Wannsee (1942) began the process, followed by legal exclusion (1943) and then ghettos and camps (1944–45)'
            ],
            correctAnswer: 1,
            explanation: 'The cumulative model is the AP framework: legal exclusion (the 1933 civil-service law and the 1935 Nuremberg Laws), then organized violence (Kristallnacht, 1938), then ghettoization, then mass shootings behind the Eastern Front, then death camps. Wannsee was a coordination meeting, not the beginning.'
          },
          {
            question: 'Which feature distinguishes the Cambodian case from the Armenian and Holocaust cases under the strict UN definition of genocide?',
            options: [
              'The Cambodian regime targeted political and class categories such as "new people," not only ethnic, religious, or national groups',
              'The Khmer Rouge killed mainly foreign soldiers in border wars with Vietnam, so few Cambodian civilians were among its victims',
              'The Khmer Rouge targeted only the Cham Muslim minority, making it a purely religious case like the Armenian Genocide',
              'The Khmer Rouge used gas chambers, rail deportations, and death camps copied from Nazi practice, making it an industrial case like the Holocaust'
            ],
            correctAnswer: 0,
            explanation: 'The UN Convention names national, ethnic, racial, and religious groups but not political/class categories. Cambodia is therefore often labeled "crimes against humanity" or "auto-genocide" under strict legal definitions, while still being studied as a genocide in historical scholarship.'
          }
        ]
      }
    },
    {
      id: 'whma2-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — name the right concept**`,
      exercise: {
        questions: [
          {
            prompt: 'The January 1942 conference outside Berlin where Nazi officials coordinated the bureaucratic implementation of the "Final Solution."',
            answer: 'Wannsee Conference',
            acceptableAnswers: ['Wannsee', 'Wannsee Conference'],
            hint: 'Named for the Berlin suburb where senior SS and ministry officials met.'
          },
          {
            prompt: 'The April 1915 arrest and execution of Armenian intellectuals in Istanbul, now commemorated as the start of the Armenian Genocide.',
            answer: 'April 24, 1915',
            acceptableAnswers: ['April 24 1915', 'April 24, 1915', 'Red Sunday', 'Armenian Genocide Remembrance Day'],
            hint: 'A specific spring date in the second year of WWI.'
          },
          {
            prompt: 'The Khmer Rouge prison in Phnom Penh, formerly a school, where roughly 14,000 prisoners were tortured and only a handful survived.',
            answer: 'S-21',
            acceptableAnswers: ['S-21', 'Tuol Sleng', 'S21'],
            hint: 'A two-character code beginning with the letter "S."'
          }
        ]
      }
    },
    {
      id: 'whma2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each case to the ideology that organized the killing.**`,
      exercise: {
        dropdowns: [
          {
            label: 'The Armenian Genocide of 1915 was framed by Ottoman leaders through: ___',
            options: ['Turkish nationalism and wartime security ideology', 'Nazi racial nationalism', 'Khmer Rouge agrarian Marxism', 'Hutu Power ethnic nationalism']
          },
          {
            label: 'The Holocaust was framed by Nazi leaders through: ___',
            options: ['Turkish nationalism and wartime security ideology', 'Nazi racial nationalism', 'Khmer Rouge agrarian Marxism', 'Hutu Power ethnic nationalism']
          },
          {
            label: 'The Cambodian Genocide was framed by Pol Pot through: ___',
            options: ['Turkish nationalism and wartime security ideology', 'Nazi racial nationalism', 'Khmer Rouge agrarian Marxism', 'Hutu Power ethnic nationalism']
          }
        ],
        correctAnswers: ['Turkish nationalism and wartime security ideology', 'Nazi racial nationalism', 'Khmer Rouge agrarian Marxism'],
        hint1: 'Match each regime to its specific ideological label, not just to "nationalism" generically.',
        hint2: 'Only one ideology centered on rural revolution and the rejection of all city life.',
        hint3: 'The Hutu Power option is a distractor for now — it appears in Part 3, not here.',
        explanation: 'Each genocide carried its own ideological signature: pan-Turkic security nationalism in 1915, Nazi racial science in the 1940s, agrarian Maoist purity under the Khmer Rouge. AP comparison essays should name the specific ideology, not just "extremism."'
      }
    },
    {
      id: 'whma2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: 'Which element best explains why scholars describe the Holocaust as an "industrialized" genocide compared with the Armenian case?',
            options: [
              'The Holocaust relied mainly on forced marches, starvation, and exposure, the same methods Ottoman authorities used against Armenians',
              'The Holocaust used railways, gas chambers, punch-card census data, and an SS bureaucracy to systematize killing across Europe',
              'The Holocaust was carried out mostly by local mobs acting on their own initiative, without central planning or record keeping',
              'The Holocaust took place mostly in factories inside Germany\'s industrial heartland rather than in occupied territory'
            ],
            correctAnswer: 1,
            explanation: 'Industrialization in this context means rail logistics, factory-style killing facilities, data systems, and bureaucratic chain of command — features that distinguished WWII-era killing from earlier deportation-based atrocities.'
          },
          {
            question: 'Which AP-style explanation best accounts for why the same regime can target multiple groups during a single genocidal episode?',
            options: [
              'Regimes target one group at a time and turn to another only after the first campaign is complete and attention fades',
              'Totalizing ideologies define a broad "internal enemy" that can include ethnic, religious, political, and class groups at once',
              'Targeting several groups reflects bureaucratic confusion, as lower officials misread orders aimed at one group',
              'Targeting several groups shows locals were settling personal, family, and land disputes, not following state policy'
            ],
            correctAnswer: 1,
            explanation: 'Totalizing ideologies are inclusive in their hatred. The Nazis targeted Jews, Roma, disabled people, Soviet POWs, and political opponents under the same "racial-political enemy" frame. The Khmer Rouge targeted "new people," ethnic minorities, and Buddhist clergy together.'
          }
        ]
      }
    }
  ]
}
