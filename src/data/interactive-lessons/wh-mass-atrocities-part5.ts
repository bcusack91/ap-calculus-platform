export const whMassAtrocitiesPart5Data = {
  topicSlug: 'wh-mass-atrocities',
  sections: [
    {
      id: 'whma5-intro',
      type: 'text' as const,
      content: `
# Mass Atrocities & Resistance in the 20th Century

**Part 5 of 7 — Change Over Time**

---

| Section |
|---|
| Continuities across 20th-century atrocities |
| Changes in scale, technology, and media mobilization |
| The shift from impunity to international accountability |
| The emergence of the human-rights frame as a global norm |

> Key idea: Across the 20th century, mass atrocities shared a common structure (ideology + group + crisis + organization) but the methods and the international response changed dramatically. Use this part to draft AP CCOT (continuity and change over time) statements that name BOTH what stayed the same AND what shifted.
      `
    },
    {
      id: 'whma5-content',
      type: 'text' as const,
      content: `
## What Stayed the Same — and What Changed

> **Continuities (1900–2000)**

- Ideology framed a target group as an existential threat
- Crises (war, revolution, regime collapse) suspended legal protections
- Bureaucracies and paramilitary forces organized the killing
- Bystanders outnumbered both perpetrators and resisters
- Survivors faced denial movements long after the violence ended

> **Changes Over Time**

| Dimension | Early 20th c. (Armenia 1915) | Mid 20th c. (Holocaust 1941–45) | Late 20th c. (Rwanda 1994, Bosnia 1995) |
|---|---|---|---|
| Method | Deportation, paramilitary massacres | Industrial death camps, gas chambers, rail logistics | Machetes + radio mobilization; siege warfare + ethnic cleansing |
| Media | State telegraphs, deportation orders | Films, posters, Der Stürmer | Mass radio (RTLM); satellite TV reporting |
| International law | None | Nuremberg principles emerge after the fact | ICTY (1993), ICTR (1994), ICC (2002) operate during/after |
| Scale of awareness | Limited; suppressed by Allied caution | Wartime intelligence; postwar full disclosure | Real-time global news coverage |
| Justice | Perpetrators largely unpunished | Senior leaders prosecuted | Heads of state and ministers prosecuted |

> **The Interwar Hinge**

- 1915–1923: Armenian Genocide largely unpunished. The 1919 Treaty of Sèvres briefly proposed prosecution; the 1923 Treaty of Lausanne dropped it.
- The interwar failure to prosecute foreshadowed the Holocaust. Hitler reportedly said in 1939, "Who, after all, speaks today of the annihilation of the Armenians?"
- This is the AP CCOT pivot: international law's near-absence in 1915 vs. its post-1945 institutionalization.

> **The Post-Cold-War Hinge**

- The end of the Cold War (1989–91) opened space for ad-hoc tribunals (ICTY 1993, ICTR 1994).
- Rwanda and Srebrenica produced the doctrine of Responsibility to Protect (R2P), endorsed at the 2005 UN World Summit.
- But intervention remained selective: Kosovo (1999) yes; Darfur (2003–) limited; Syria (2011–) blocked at the UN Security Council.
      `
    },
    {
      id: 'whma5-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Continuity and Change**`,
      exercise: {
        questions: [
          {
            question: 'Which statement best captures a key change in mass atrocity over the course of the 20th century?',
            options: [
              'Mass atrocities became less deadly across the century because international institutions and human-rights norms eliminated all major outbreaks of state-organized violence after 1945',
              'The dominant method shifted from deportation-and-massacre toward industrial death-camp killing and then toward media-mobilized neighbor violence in different regional contexts',
              'Mass atrocities throughout the century relied exclusively on the same machete-based methods used in 1994 Rwanda, with no significant variation in technology or scale',
              'Mass atrocities of the late century used pre-industrial transportation and communication methods identical to those used by Ottoman authorities during the 1915 deportations'
            ],
            correctAnswer: 1,
            explanation: 'AP CCOT: name a specific shift in method (deportation → industrial → media-mobilized). This is more precise than "they changed."'
          },
          {
            question: 'Which continuity is most clearly visible across the Armenian, Holocaust, and Rwandan cases?',
            options: [
              'A democratically elected legislature directly authorized the killing in advance through open public debate followed by a free and recorded vote of representatives',
              'A regime defined a targeted group as an existential threat, mobilized organized force against that group, and exploited a crisis context to suspend legal protections',
              'An external occupying army arrived from another continent and imposed killings on a population that had no prior history of state-organized communal violence at all',
              'A purely economic policy of resource extraction without any ideological component or organized state apparatus motivated and directed all three of the major killing campaigns'
            ],
            correctAnswer: 1,
            explanation: 'The structural continuity (ideology + targeted group + organized force + crisis context) is the AP-quality answer. Avoid culturally specific or "ancient hatreds" framings.'
          }
        ]
      }
    },
    {
      id: 'whma5-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — name the right concept**`,
      exercise: {
        questions: [
          {
            prompt: 'The 1923 treaty between the Allies and the new Republic of Turkey that dropped the Sèvres provisions on prosecuting Armenian massacres.',
            answer: 'Treaty of Lausanne',
            acceptableAnswers: ['Lausanne', 'Treaty of Lausanne', 'Lausanne Treaty'],
            hint: 'Named for the Swiss city where it was negotiated.'
          },
          {
            prompt: 'The doctrine, endorsed at the 2005 UN World Summit, that the international community has a duty to intervene against mass atrocities when sovereign states fail to protect their populations.',
            answer: 'Responsibility to Protect',
            acceptableAnswers: ['R2P', 'Responsibility to Protect', 'RtoP'],
            hint: 'Three-letter acronym beginning with R.'
          },
          {
            prompt: 'The 1999 NATO intervention in the Federal Republic of Yugoslavia in response to ethnic cleansing of ethnic Albanians by Serb forces.',
            answer: 'Kosovo War',
            acceptableAnswers: ['Kosovo War', 'Kosovo', 'NATO Kosovo intervention', 'Kosovo intervention'],
            hint: 'A southern province of the former Yugoslavia.'
          }
        ]
      }
    },
    {
      id: 'whma5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Identify whether each feature is a 20th-century continuity or a change.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Use of bureaucratic and paramilitary organization to direct killing represents: ___',
            options: ['continuity across the century', 'major change from early to late century', 'discontinuity that reversed the early pattern']
          },
          {
            label: 'The shift from deportation-and-massacre toward industrial death camps and then to media-mobilized neighbor violence represents: ___',
            options: ['continuity across the century', 'major change from early to late century', 'discontinuity that reversed the early pattern']
          },
          {
            label: 'The development of permanent international tribunals (ICTY, ICTR, ICC) compared to interwar impunity represents: ___',
            options: ['continuity across the century', 'major change from early to late century', 'discontinuity that reversed the early pattern']
          }
        ],
        correctAnswers: ['continuity across the century', 'major change from early to late century', 'major change from early to late century'],
        hint1: 'Bureaucratic organization is one of the four structural elements that recurs in every case across the century.',
        hint2: 'Method (camps vs. machetes) and accountability (tribunals vs. impunity) are the two clearest changes across the century.',
        hint3: 'Re-read the change-over-time table — bureaucratic organization is in every column, while method and law shift dramatically.',
        explanation: 'The strongest CCOT thesis names organized force as a continuity AND names method (camps to machetes) and accountability (impunity to tribunals) as the major changes.'
      }
    },
    {
      id: 'whma5-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: 'Which thesis best models a CCOT (continuity and change over time) response on 20th-century mass atrocities?',
            options: [
              'Mass atrocities throughout the 20th century were essentially identical in cause, conduct, and international response, with no significant change between Armenia in 1915 and Rwanda in 1994',
              'Across the 20th century, mass atrocities continued to share a structure of ideology, organized targeting, and crisis context, but the methods evolved from deportation to industrial killing to media-mobilized neighbor violence, and international responses shifted from impunity to ad-hoc and then permanent tribunals',
              'Mass atrocities in the 20th century had no shared causes or features and represent isolated tragedies that historians cannot meaningfully compare across different national contexts',
              'Mass atrocities only became possible in the 20th century after the founding of the League of Nations and immediately stopped occurring once the United Nations was established'
            ],
            correctAnswer: 1,
            explanation: 'CCOT requires naming continuity AND change in a single thesis. The strongest version names structure (continuity), method (change), and law/response (change) together.'
          },
          {
            question: 'Hitler\'s alleged 1939 statement, "Who, after all, speaks today of the annihilation of the Armenians?", is most useful as evidence for which AP-style argument?',
            options: [
              'It demonstrates that the international failure to prosecute the Armenian Genocide created a permissive precedent that emboldened later perpetrators in the Nazi regime',
              'It proves that Hitler had no awareness of any prior 20th-century cases of mass killing or any international legal framework regarding genocide before WWII',
              'It establishes that the Armenian Genocide was meaningfully prosecuted by the Treaty of Sèvres and that all senior Ottoman officials served substantial prison sentences',
              'It shows that the Holocaust began in 1915 and was directed continuously by the same political and ideological leadership that organized the Armenian killings during WWI'
            ],
            correctAnswer: 0,
            explanation: 'The quotation is the canonical evidence for the "impunity emboldens future atrocity" argument and is heavily used in AP comparison and connection responses.'
          }
        ]
      }
    }
  ]
}
