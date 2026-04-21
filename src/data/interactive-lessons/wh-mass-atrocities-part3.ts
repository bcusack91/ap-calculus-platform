export const whMassAtrocitiesPart3Data = {
  topicSlug: 'wh-mass-atrocities',
  sections: [
    {
      id: 'whma3-intro',
      type: 'text' as const,
      content: `
# Mass Atrocities & Resistance in the 20th Century

**Part 3 of 7 — Patterns & Examples**

---

| Section |
|---|
| The Rwandan Genocide and the failure of UN response (1994) |
| The Bosnian War and ethnic cleansing (1992–95) |
| Soviet and Maoist state violence as comparable cases |
| Patterns: media propaganda, neighbor-on-neighbor violence, postwar tribunals |

> Key idea: After WWII the international community pledged "never again," but late-20th-century atrocities in Rwanda and the Balkans showed how state collapse, ethnic mobilization through media, and international inaction allowed genocide to recur. The AP exam asks you to compare these later cases to earlier ones and to explain both continuities (ideology, dehumanization) and changes (faster pace, media-driven mobilization, post-Cold-War tribunal response).
      `
    },
    {
      id: 'whma3-content',
      type: 'text' as const,
      content: `
## The Patterns That Repeat — and the Ones That Change

> **The Rwandan Genocide (April–July 1994)**

- **Background:** Belgian colonial rule (1916–62) had hardened Hutu/Tutsi categories, issuing identity cards by ethnicity. The 1959 "Hutu Revolution" pushed many Tutsi into exile.
- **Trigger:** April 6, 1994 — President Juvénal Habyarimana's plane shot down over Kigali.
- **Method:** Within hours, Hutu militias (the Interahamwe) began coordinated killings of Tutsi and moderate Hutu, encouraged by Radio Télévision Libre des Mille Collines (RTLM), which broadcast names and locations of targets.
- **Speed and scale:** Roughly 800,000 killed in 100 days — among the fastest rates of killing in modern history.
- **Method note:** Carried out largely by neighbors using machetes, not by industrial means. Demonstrated that low-tech genocide is possible when the state organizes and propaganda mobilizes.
- **International response:** The UN Assistance Mission for Rwanda (UNAMIR) was withdrawn rather than reinforced. The U.S. avoided the word "genocide" until June.

> **The Bosnian War and Srebrenica (1992–95)**

- **Background:** Yugoslavia's collapse after 1991. Bosnian Serb forces under Radovan Karadžić and Ratko Mladić sought a "Greater Serbia" carved from Bosnia.
- **Method:** "Ethnic cleansing" — forced expulsion of Bosniak (Bosnian Muslim) and Croat populations, mass rape used as a weapon, siege of Sarajevo (1992–96, the longest in modern history).
- **Srebrenica massacre (July 1995):** ~8,000 Bosniak men and boys killed by Bosnian Serb forces in a UN-declared "safe area" — judicially recognized as genocide by the ICTY (2004) and ICJ (2007).
- **Aftermath:** NATO airstrikes (1995); the Dayton Accords ended the war but froze ethnic divisions into the Bosnian state structure.

> **Comparable State Violence: Soviet and Maoist Cases**

- **Soviet collectivization and the Holodomor (1932–33):** Stalin-era grain requisition policies caused famine in Ukraine; ~3.9 million deaths. Recognized as a genocide by Ukraine and many Western governments; debated under the strict UN definition because intent is contested.
- **The Great Leap Forward (1958–62):** Mao Zedong's forced industrialization and collectivization caused famine killing tens of millions (estimates 15–55 million). Generally classified as state-induced famine and crime against humanity rather than genocide.
- **The Cultural Revolution (1966–76):** Mass political violence, denunciations, Red Guard attacks on "class enemies," intellectuals, and ethnic minorities (including in Tibet). Hundreds of thousands to over 1 million deaths.

> **Patterns That Repeat**

| Element | 1915 Armenia | 1940s Holocaust | 1994 Rwanda | 1990s Bosnia |
|---|---|---|---|---|
| Crisis trigger | WWI defeats | WWII invasion | Habyarimana plane | Yugoslav collapse |
| Ideological frame | Pan-Turkic nationalism | Racial nationalism | Hutu Power | Greater Serbia |
| Media role | State telegraphs, deportation orders | Films, posters, Der Stürmer | RTLM radio | TV propaganda, war reporting |
| Method | Deportation + paramilitary | Industrial camps + shootings | Machete + neighbor violence | Camps, siege, mass rape |
| International action | None | Tribunals after 1945 | Failure, then ICTR (1994) | NATO 1995, ICTY (1993) |
      `
    },
    {
      id: 'whma3-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Patterns Across Cases**`,
      exercise: {
        questions: [
          {
            question: 'Which feature most clearly distinguishes the Rwandan Genocide from earlier 20th-century cases of mass killing?',
            options: [
              'The use of an industrial death-camp system designed to produce killings on a factory scale across central Africa',
              'The speed and decentralized neighbor-on-neighbor character of the violence, mobilized by radio rather than carried out primarily by a centralized military bureaucracy',
              'The total absence of any ideological or political organization providing direction and instructions to the perpetrators of the killings',
              'The complete absence of any prior colonial categorization of ethnic groups before the violence began across the country'
            ],
            correctAnswer: 1,
            explanation: 'Rwanda is studied as proof that low-tech tools (machetes) plus mass radio mobilization (RTLM) can produce one of the fastest genocides in history. The killing model differs from Holocaust industrial logistics.'
          },
          {
            question: 'The Srebrenica massacre is significant as a legal precedent because:',
            options: [
              'It was the first 20th-century atrocity prosecuted in the courts of any sovereign state involved in the underlying conflict',
              'International courts (ICTY 2004, ICJ 2007) ruled it constituted genocide under the 1948 Convention, expanding postwar accountability',
              'It involved no targeting of any identifiable group and is now classified as a routine combat operation by international tribunals',
              'It demonstrated that the international community will always intervene immediately to protect any UN-declared safe area from armed attack'
            ],
            correctAnswer: 1,
            explanation: 'Srebrenica forced international tribunals to apply the strict UN genocide definition to a European event in the 1990s, and produced major war-crimes convictions including Mladić (2017) and Karadžić (2016).'
          }
        ]
      }
    },
    {
      id: 'whma3-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — name the right concept**`,
      exercise: {
        questions: [
          {
            prompt: 'The Rwandan radio station that broadcast names and locations of Tutsi targets during the 1994 genocide.',
            answer: 'RTLM',
            acceptableAnswers: ['RTLM', 'Radio Télévision Libre des Mille Collines', 'Radio Television Libre des Mille Collines'],
            hint: 'A four-letter French acronym beginning with R.'
          },
          {
            prompt: 'The 1995 mass killing of roughly 8,000 Bosniak men and boys in a UN-declared "safe area" by Bosnian Serb forces.',
            answer: 'Srebrenica massacre',
            acceptableAnswers: ['Srebrenica massacre', 'Srebrenica', 'Srebrenica Genocide'],
            hint: 'Named for an eastern Bosnian town.'
          },
          {
            prompt: 'The 1932–33 Soviet famine in Ukraine caused by forced grain requisitioning, recognized by Ukraine as a genocide.',
            answer: 'Holodomor',
            acceptableAnswers: ['Holodomor'],
            hint: 'Ukrainian word meaning "death by hunger."'
          }
        ]
      }
    },
    {
      id: 'whma3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each case to its most distinctive feature in the comparison.**`,
      exercise: {
        dropdowns: [
          {
            label: 'The Holocaust is most distinctive among 20th-century genocides for its: ___',
            options: ['industrial-scale death camp system', 'machete-based neighbor violence', 'state-induced agricultural famine', 'siege warfare and mass rape']
          },
          {
            label: 'The Rwandan Genocide is most distinctive for its: ___',
            options: ['industrial-scale death camp system', 'machete-based neighbor violence', 'state-induced agricultural famine', 'siege warfare and mass rape']
          },
          {
            label: 'The Bosnian War is most distinctive for its: ___',
            options: ['industrial-scale death camp system', 'machete-based neighbor violence', 'state-induced agricultural famine', 'siege warfare and mass rape']
          }
        ],
        correctAnswers: ['industrial-scale death camp system', 'machete-based neighbor violence', 'siege warfare and mass rape'],
        hint1: 'Each case has a signature method that AP graders expect you to name.',
        hint2: 'The Holodomor is the famine option, which is not used in any of the three rows above.',
        hint3: 'Match the method to the case you most associate with: railways and chambers, machetes and radio, or sieges and camps.',
        explanation: 'Naming the method precisely is what earns AP comparison points. Saying "they were all violent" is filler. Saying "industrial camps vs. machete-driven neighbor violence vs. siege warfare and ethnic cleansing" is comparison.'
      }
    },
    {
      id: 'whma3-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: 'Which thesis best supports a comparison essay that asks how 20th-century mass atrocities both repeated and changed across the century?',
            options: [
              'The 20th-century atrocities were all identical events with the same causes, methods, and consequences in every case from Armenia in 1915 to Bosnia in 1995',
              'Mass atrocities across the century shared a common structure of ideology, organized targeting, and crisis context, but the methods evolved from deportation-and-massacre toward industrial killing and then mass-mobilized neighbor violence enabled by media',
              'Mass atrocities had no shared structural features and were random local outbursts that historians cannot meaningfully compare across different decades or regions',
              'Mass atrocities only became possible after the United Nations was founded in 1945 and modern bureaucracies emerged in postwar Europe and decolonizing states'
            ],
            correctAnswer: 1,
            explanation: 'The strongest thesis names BOTH continuity (ideology, organized targeting) AND change (deportation → industrial → media-mobilized). This is the AP CCOT/comparison structure.'
          },
          {
            question: 'A student argues: "The Rwandan Genocide proves that international institutions failed in the post-Cold-War era." Which evidence most directly supports the claim?',
            options: [
              'The UN Assistance Mission for Rwanda was reduced rather than reinforced as the killings began, and the U.S. State Department avoided the word "genocide" until June 1994',
              'The UN intervened immediately with overwhelming military force in early April 1994 and ended the violence within several days using a coalition of African and European peacekeepers',
              'No international body had any awareness of events in Rwanda during the killings because all communication infrastructure was destroyed before April 1994 by the militias',
              'The international community had already established a permanent intervention force exclusively for African genocides under the African Union charter long before 1994'
            ],
            correctAnswer: 0,
            explanation: 'The UNAMIR drawdown and the U.S. delay in using the legal term "genocide" are the canonical examples of international failure in 1994. The ICTR (1994) was created after the fact.'
          }
        ]
      }
    }
  ]
}
