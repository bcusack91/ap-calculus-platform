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
- **Srebrenica massacre (July 1995):** ~8,000 Bosniak men and boys killed by Bosnian Serb forces in a UN-declared "safe area." The UN's Yugoslavia tribunal (ICTY) indicted Karadžić and Mladić for genocide in 1995, and in 2001 it convicted the Bosnian Serb general Radislav Krstić of genocide for Srebrenica.
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
              'The use of industrial death camps with rail transport, modeled on the system the Nazis built in occupied Poland',
              'The speed and decentralized neighbor-on-neighbor violence, mobilized by radio rather than run mainly by a central bureaucracy',
              'The absence of any political organization, since the killing arose spontaneously without direction from party or state leaders',
              'The absence of colonial-era ethnic categories, since Belgian rule had never classified Rwandans as Hutu or Tutsi'
            ],
            correctAnswer: 1,
            explanation: 'Rwanda is studied as proof that low-tech tools (machetes) plus mass radio mobilization (RTLM) can produce one of the fastest genocides in history. The killing model differs from Holocaust industrial logistics; Hutu Power leaders organized it, and Belgian identity cards had hardened the Hutu/Tutsi categories.'
          },
          {
            question: 'The Srebrenica massacre is significant as a legal precedent because:',
            options: [
              'It was the first atrocity prosecuted in the national courts of a state involved in the underlying conflict',
              'The UN\'s Yugoslavia tribunal (ICTY) ruled it genocide under the 1948 Convention in 2001, extending postwar accountability',
              'It was the first atrocity ever tried by an international tribunal (the ICTY), since no such court had existed before the 1990s',
              'It showed UN safe areas worked, since Dutch peacekeepers protected the town\'s Bosniak men and boys until NATO airstrikes finally ended the siege'
            ],
            correctAnswer: 1,
            explanation: 'Srebrenica forced an international tribunal to apply the strict UN genocide definition to a European event: the ICTY indicted Karadžić and Mladić in 1995 and in 2001 convicted the Bosnian Serb general Radislav Krstić of genocide. Nuremberg had tried individuals internationally fifty years earlier, and the Dutch peacekeepers did not prevent the killing of about 8,000 Bosniak men and boys.'
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
              'Atrocities were identical in cause, method, and outcome from Armenia in 1915 to Bosnia in 1995, since each relied on deportation marches',
              'Atrocities shared ideology, organized targeting, and crisis, but methods shifted from deportation to industrial killing to media-driven neighbor violence',
              'No common structure linked the atrocities, since each was a local outburst of ethnic hatred with methods and causes unique to its region',
              'Atrocities became steadily more industrial, since each later case copied the Nazi death camps and rail logistics more efficiently'
            ],
            correctAnswer: 1,
            explanation: 'The strongest thesis names BOTH continuity (ideology, organized targeting) AND change (deportation → industrial → media-mobilized). This is the AP CCOT/comparison structure.'
          },
          {
            question: 'A student argues: "The Rwandan Genocide proves that international institutions failed in the post-Cold-War era." Which evidence most directly supports the claim?',
            options: [
              'The UN cut its peacekeeping mission in Rwanda as the killings began, and U.S. officials avoided the word "genocide" for weeks',
              'The UN Security Council quickly expanded its Rwanda force to several thousand troops in April 1994, and the killing ended within days',
              'International observers knew nothing of the genocide until it ended, because militias had cut all outside communications',
              'The Organization of African Unity\'s standing intervention force deployed to Kigali as the killings began, under a charter adopted years earlier'
            ],
            correctAnswer: 0,
            explanation: 'The UNAMIR drawdown (Security Council Resolution 912, April 1994) and the U.S. delay until June in using the legal term "genocide" are the canonical examples of international failure in 1994. Africa had no standing intervention force in 1994 (the Organization of African Unity had no army of its own), and the ICTR (November 1994) was created after the fact.'
          }
        ]
      }
    }
  ]
}
