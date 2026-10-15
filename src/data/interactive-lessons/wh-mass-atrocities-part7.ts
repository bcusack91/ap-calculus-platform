export const whMassAtrocitiesPart7Data = {
  topicSlug: 'wh-mass-atrocities',
  sections: [
    {
      id: 'whma7-intro',
      type: 'text' as const,
      content: `
# Mass Atrocities & Resistance in the 20th Century

**Part 7 of 7 — AP Review**

---

| Section |
|---|
| High-yield terms and dates |
| Prompt-type recognition |
| Comparison and CCOT frameworks for atrocity essays |
| Quick-reference tables for the exam |

> Key idea: This is your high-yield review for any AP question on 20th-century mass atrocity. Use it the night before the exam: the dates, the actors, the legal instruments, and the analytical moves that consistently score well.
      `
    },
    {
      id: 'whma7-content',
      type: 'text' as const,
      content: `
## High-Yield AP Review

> **Dates and Actors to Memorize**

| Year | Event | What it represents |
|---|---|---|
| 1915 | Armenian Genocide begins (April 24) | Modern industrial-era genocide; CUP/Young Turk regime |
| 1933 | Hitler becomes German Chancellor | Beginning of Nazi legal exclusion of Jews |
| 1935 | Nuremberg Laws | Legalized racial discrimination |
| 1938 | Kristallnacht (Nov 9–10) | State-organized violence against Jews |
| 1942 | Wannsee Conference (Jan) | Bureaucratic coordination of the Final Solution |
| 1945 | Liberation of Auschwitz (Jan); WWII ends | Holocaust death toll ~6 million Jews |
| 1945–46 | Nuremberg Trials | First prosecution of crimes against humanity |
| 1948 | UDHR; Genocide Convention | Postwar human-rights regime founded |
| 1975–79 | Cambodian Genocide; Khmer Rouge | "Year Zero"; ~1.7 million dead |
| 1992–95 | Bosnian War; Srebrenica (1995) | Ethnic cleansing; ICTY established 1993 |
| 1994 | Rwandan Genocide (Apr–Jul) | ~800,000 dead in 100 days; ICTR established |
| 2002 | International Criminal Court begins | Permanent international prosecution body |
| 2005 | UN World Summit endorses R2P | Doctrine of international responsibility |

> **Comparison Framework (use on every comparison prompt)**

For each case, identify:
1. Regime and ideology (e.g., Nazi racial nationalism, Hutu Power, Khmer Rouge agrarian Marxism)
2. Targeted group and how it was constructed (Jews as racial enemy, Tutsi as "cockroaches," urban "new people")
3. Crisis context (WWII, post-Habyarimana plane crash, Vietnam-supported civil war)
4. Method (industrial camps, machetes + radio, evacuation + labor camps)
5. International response (Nuremberg, ICTR, ECCC tribunal in Cambodia)

> **CCOT Framework (use on every change-over-time prompt)**

Continuities:
- Structural pattern (ideology + group + crisis + organization)
- Bystander majority outnumbering perpetrators and resisters
- Postwar denial movements

Changes:
- Method: deportation → industrial → media-mobilized
- Media: telegrams → film/print → radio → satellite TV
- Law: impunity → Nuremberg → ad-hoc tribunals → permanent ICC
- Norms: state sovereignty absolute → R2P doctrine

> **AP Skills Vocabulary**

- **Causation**: explain why an event happened (multi-causal preferred)
- **Comparison**: shared analytical categories across cases
- **Continuity & change over time (CCOT)**: name BOTH what stayed and what shifted
- **Contextualization**: situate the event in a broader process
- **Sourcing (HIPP)**: historical context, intended audience, purpose, point of view
      `
    },
    {
      id: 'whma7-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — High-Yield Recall**`,
      exercise: {
        questions: [
          {
            question: 'Which combination correctly pairs a 20th-century atrocity with the international legal body created to prosecute it?',
            options: [
              'The Holocaust → International Criminal Tribunal for Rwanda (ICTR); the Armenian Genocide → International Criminal Court (ICC)',
              'The Rwandan Genocide → International Criminal Tribunal for Rwanda (ICTR); the Bosnian War → International Criminal Tribunal for the former Yugoslavia (ICTY)',
              'The Armenian Genocide → International Criminal Court (ICC), founded in 2002 by the Rome Statute for general international prosecution of genocide and war crimes',
              'The Cambodian Genocide → Nuremberg Trials, held in 1945 and 1946 in postwar Germany to prosecute the senior leadership of the Khmer Rouge under Pol Pot'
            ],
            correctAnswer: 1,
            explanation: 'ICTR for Rwanda (1994) and ICTY for the former Yugoslavia (1993) are the canonical post-Cold-War ad-hoc tribunals.'
          },
          {
            question: 'Which response best explains the historical significance of Raphael Lemkin\'s 1944 coining of the term "genocide"?',
            options: [
              'It established the term in popular journalism in the early twentieth century but had no impact on international law during or after the Second World War',
              'It provided a legal vocabulary that directly shaped the 1948 UN Genocide Convention and the postwar architecture of human-rights prosecution',
              'It was rejected by the United Nations, and the word genocide never entered any binding international agreement in the postwar period',
              'It applied only to Nazi crimes against Jews, so later tribunals had to invent new legal terms for Rwanda, Bosnia, and Cambodia'
            ],
            correctAnswer: 1,
            explanation: 'Lemkin\'s coining → 1948 Convention → modern tribunals is the canonical legal-history chain. This is high-yield AP knowledge.'
          }
        ]
      }
    },
    {
      id: 'whma7-input',
      type: 'input-boxes' as const,
      content: `**Date and Actor Sprint**`,
      exercise: {
        questions: [
          {
            prompt: 'The year the UN Convention on the Prevention and Punishment of the Crime of Genocide was adopted.',
            answer: '1948',
            acceptableAnswers: ['1948'],
            hint: 'Same year as the UDHR.'
          },
          {
            prompt: 'The Bosnian Serb general convicted in 2017 by the ICTY for the Srebrenica genocide and other atrocities.',
            answer: 'Ratko Mladić',
            acceptableAnswers: ['Mladić', 'Mladic', 'Ratko Mladić', 'Ratko Mladic'],
            hint: 'Commander of the Army of Republika Srpska during the Bosnian War.'
          },
          {
            prompt: 'The Khmer Rouge leader (born Saloth Sâr) whose regime caused approximately 1.7 million deaths between 1975 and 1979.',
            answer: 'Pol Pot',
            acceptableAnswers: ['Pol Pot', 'Saloth Sâr', 'Saloth Sar'],
            hint: 'Two-syllable revolutionary alias.'
          }
        ]
      }
    },
    {
      id: 'whma7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each AP prompt verb to the correct historical thinking skill.**`,
      exercise: {
        dropdowns: [
          {
            label: '"Compare the methods of killing in the Holocaust and the Rwandan Genocide" tests: ___',
            options: ['comparison', 'causation', 'continuity and change over time', 'contextualization']
          },
          {
            label: '"Explain ONE cause of the failure of international response in Rwanda" tests: ___',
            options: ['comparison', 'causation', 'continuity and change over time', 'contextualization']
          },
          {
            label: '"Explain the extent to which 20th-century mass atrocities both repeated and changed" tests: ___',
            options: ['comparison', 'causation', 'continuity and change over time', 'contextualization']
          }
        ],
        correctAnswers: ['comparison', 'causation', 'continuity and change over time'],
        hint1: 'Each prompt verb maps to a specific AP historical thinking skill — read the verb first.',
        hint2: '"Compare" → comparison; "Explain ONE cause" → causation; "extent to which … repeated and changed" → CCOT.',
        hint3: 'Contextualization is the distractor here; all three rows above ask for a different skill.',
        explanation: 'Recognizing the prompt verb is the fastest way to choose the right essay structure. All four answer choices are real AP historical thinking skills, so re-read the verb carefully.'
      }
    },
    {
      id: 'whma7-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Putting It All Together**`,
      exercise: {
        questions: [
          {
            question: 'Which thesis would most likely earn the complexity point on a long-essay prompt about the relationship between mass atrocities and the development of international law in the 20th century?',
            options: [
              'International law owed nothing to mass atrocities and developed from Enlightenment philosophy alone, without any reference to the actual state violence of the 20th century',
              'Armenia drew little legal response, but the Holocaust produced Nuremberg and the Genocide Convention, then the ICTY, ICTR, and ICC, though enforcement stayed selective',
              'International law was fully formed before 1900, and a single permanent court tried every senior perpetrator of genocide in Armenia, Cambodia, and Rwanda',
              'International law has never responded to mass atrocity effectively, since no postwar tribunal or treaty has ever led to the conviction of any senior official for genocide'
            ],
            correctAnswer: 1,
            explanation: 'Complexity is earned by acknowledging both the institutional achievement (Nuremberg → ICC chain) AND the continuing tension (selective enforcement, sovereignty vs. accountability). This is the AP "qualified" thesis.'
          },
          {
            question: 'A student writes: "The Rwandan Genocide proves that low-tech killing can be as devastating as industrial killing." Which evidence MOST DIRECTLY supports the claim?',
            options: [
              'RTLM radio mobilized Hutu civilians who killed mainly with machetes, causing roughly 800,000 deaths in about 100 days',
              'Rwanda\'s killers relied on industrial death camps with rail logistics and gas chambers, copying the methods of the Nazi state',
              'Rwanda\'s death toll was smaller than that of any other 20th-century genocide, showing that low-tech killing has limited reach',
              'Rwanda\'s violence arose from spontaneous neighbor disputes, with no organized state, militia, or media mobilization behind it'
            ],
            correctAnswer: 0,
            explanation: 'The 800,000 / 100 days figure with RTLM + machete method is the canonical evidence for the "low-tech can equal industrial-scale" claim. This is high-yield evidence for AP.'
          }
        ]
      }
    }
  ]
}
