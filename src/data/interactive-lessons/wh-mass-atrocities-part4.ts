export const whMassAtrocitiesPart4Data = {
  topicSlug: 'wh-mass-atrocities',
  sections: [
    {
      id: 'whma4-intro',
      type: 'text' as const,
      content: `
# Mass Atrocities & Resistance in the 20th Century

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| Resistance: armed, spiritual, cultural, and rescue networks |
| Bystanders, perpetrators, and the role of ordinary people |
| The development of human rights law (UDHR, Genocide Convention, Refugee Convention) |
| Postwar tribunals: Nuremberg, Tokyo, ICTY, ICTR, and the 1998 Rome Statute |

> Key idea: Atrocities did not happen in a vacuum. They prompted resistance from the targeted (Warsaw Ghetto Uprising, Sobibor revolt, Tutsi self-defense), action from rescuers (Raoul Wallenberg, Chiune Sugihara, the village of Le Chambon), and a postwar legal architecture intended to make accountability possible. The AP exam expects you to connect mass violence to the human-rights regime that emerged in response.
      `
    },
    {
      id: 'whma4-content',
      type: 'text' as const,
      content: `
## Resistance, Rescue, and the Human-Rights Response

> **Forms of Resistance**

| Type | Example | Significance |
|---|---|---|
| Armed uprising | Warsaw Ghetto Uprising (April–May 1943) | First large urban uprising against Nazi occupation in Europe |
| Camp revolt | Sobibor (Oct 1943), Treblinka (Aug 1943), Auschwitz Sonderkommando (Oct 1944) | Showed that even in death camps inmates organized escape attempts |
| Partisan warfare | Bielski partisans (Belarus, ~1,200 Jews protected) | Fused armed resistance with rescue |
| Spiritual / cultural | Clandestine schools, prayer, music, diaries (Anne Frank, Etty Hillesum) | Preserved identity and memory under conditions designed to erase them |
| Rescue networks | Le Chambon-sur-Lignon (~3,500 Jews sheltered); Wallenberg in Budapest; Sugihara visas | Demonstrated moral choice was possible; modeled "righteous among the nations" |

> **The Bystander Problem**

- Most populations under occupation were neither perpetrators nor active resisters; the historian Raul Hilberg called them "bystanders."
- Local collaboration was crucial in many cases (Vichy France's Vel' d'Hiv roundup, July 1942; Lithuanian and Ukrainian auxiliary units; Hutu civilians who took up machetes in Rwanda).
- Killing on this scale required wide participation, not only orders from a few leaders: local police, auxiliary units, railway and municipal officials, and neighbors who denounced victims or took their property all played a part.

> **Postwar Human Rights Architecture**

| Year | Instrument | What it does |
|---|---|---|
| 1945–46 | Nuremberg Trials (and 1946–48 Tokyo Trials) | Established individual criminal responsibility for "crimes against humanity" |
| 1948 | Universal Declaration of Human Rights (UDHR) | Drafted under Eleanor Roosevelt; declared inherent rights of all persons |
| 1948 | Convention on the Prevention and Punishment of the Crime of Genocide | Created the legal definition still in use today |
| 1951 | Convention Relating to the Status of Refugees | Defined "refugee" and prohibited refoulement (forced return to danger) |
| 1993 | International Criminal Tribunal for the former Yugoslavia (ICTY) | First international war-crimes court since Nuremberg and Tokyo; indicted Bosnian Serb leaders Karadžić and Mladić (1995) and Serbia's Milošević (1999) |
| 1994 | International Criminal Tribunal for Rwanda (ICTR) | Convicted senior officials including PM Jean Kambanda |
| 1998 | Rome Statute | Treaty to create a permanent international criminal court for genocide, crimes against humanity, and war crimes |

> **Where Connections Live**

- Postwar law (Nuremberg → ICTY and ICTR → the 1998 Rome Statute) built directly on the Holocaust experience.
- The Refugee Convention emerged from the displacement of millions in WWII and immediate postwar Europe.
- Rwanda and Srebrenica set off a 1990s debate over "humanitarian intervention": should state sovereignty shield a government that slaughters its own people? NATO's 1999 bombing campaign over Kosovo, launched without UN Security Council approval, put that question to the test.
      `
    },
    {
      id: 'whma4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Resistance and Response**`,
      exercise: {
        questions: [
          {
            question: 'Which event is best understood as the most significant act of armed Jewish resistance against Nazi occupation in WWII?',
            options: [
              'The Warsaw Ghetto Uprising of April–May 1943, in which several hundred fighters held off German forces for nearly a month',
              'The Polish Home Army\'s Warsaw Uprising of August–October 1944, which fought German forces for about two months',
              'The Danish rescue of October 1943, in which fishermen ferried more than 7,000 Jews across the sea to Sweden',
              'The White Rose campaign of 1942–43, in which Munich students distributed leaflets denouncing Nazi crimes'
            ],
            correctAnswer: 0,
            explanation: 'The Warsaw Ghetto Uprising is the canonical AP example of organized armed Jewish resistance under occupation; camp revolts at Sobibor and Treblinka are the secondary examples. The 1944 Warsaw Uprising was a Polish Home Army revolt, the Danish operation was a rescue, and the White Rose was nonviolent German dissent.'
          },
          {
            question: 'Which postwar instrument established individual criminal responsibility for "crimes against humanity" — a doctrine still applied by international tribunals today?',
            options: [
              'The 1919 Treaty of Versailles, whose Article 227 called for trying the Kaiser before a special tribunal',
              'The Nuremberg Trials of 1945–46, which prosecuted Nazi leadership and produced the Nuremberg Principles',
              'The 1945 United Nations Charter, which created the Security Council and the International Court of Justice',
              'The 1948 Universal Declaration of Human Rights, a nonbinding list of rights adopted by the UN'
            ],
            correctAnswer: 1,
            explanation: 'Nuremberg established that individuals — not just states — could be prosecuted for crimes against humanity; the 1945 London Charter set out the legal framework, and its principles still inform the 1998 Rome Statute. The Kaiser was never tried under Versailles, the International Court of Justice hears disputes between states, and the Universal Declaration is not a criminal statute.'
          }
        ]
      }
    },
    {
      id: 'whma4-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — name the right concept**`,
      exercise: {
        questions: [
          {
            prompt: 'The 1948 UN declaration, drafted under Eleanor Roosevelt, that proclaimed inherent rights of all human beings.',
            answer: 'Universal Declaration of Human Rights',
            acceptableAnswers: ['UDHR', 'Universal Declaration of Human Rights'],
            hint: 'Three-letter acronym beginning with U.'
          },
          {
            prompt: 'The Swedish diplomat who issued protective passports to thousands of Hungarian Jews in Budapest in 1944.',
            answer: 'Raoul Wallenberg',
            acceptableAnswers: ['Wallenberg', 'Raoul Wallenberg'],
            hint: 'Issued the famous "Schutzpass" documents.'
          },
          {
            prompt: 'The 1998 treaty that set out a permanent international criminal court to prosecute genocide, crimes against humanity, and war crimes.',
            answer: 'Rome Statute',
            acceptableAnswers: ['Rome Statute', 'the Rome Statute', 'Statute of Rome', 'Rome Treaty'],
            hint: 'Named for the Italian capital where diplomats adopted it.'
          }
        ]
      }
    },
    {
      id: 'whma4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each phenomenon to the human-rights instrument or doctrine that addressed it.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Postwar accountability for senior Nazi leaders was pursued through: ___',
            options: ['the Nuremberg Trials and Principles', 'the 1951 Refugee Convention', 'the UN tribunal for Rwanda (ICTR)', 'the 1998 Rome Statute']
          },
          {
            label: 'The protection of stateless people fleeing persecution after WWII was codified in: ___',
            options: ['the Nuremberg Trials and Principles', 'the 1951 Refugee Convention', 'the UN tribunal for Rwanda (ICTR)', 'the 1998 Rome Statute']
          },
          {
            label: 'In the 1990s, the organizers of the Rwandan genocide were put on trial before: ___',
            options: ['the Nuremberg Trials and Principles', 'the 1951 Refugee Convention', 'the UN tribunal for Rwanda (ICTR)', 'the 1998 Rome Statute']
          }
        ],
        correctAnswers: ['the Nuremberg Trials and Principles', 'the 1951 Refugee Convention', 'the UN tribunal for Rwanda (ICTR)'],
        hint1: 'Each human-rights instrument was a response to a specific 20th-century crisis.',
        hint2: 'The Rome Statute is the distractor here; it planned a permanent court for future crimes, so it could not try the organizers of the 1994 killings.',
        hint3: 'Match the response to the cause: Holocaust → Nuremberg, displaced WWII Europeans → Refugee Convention, Rwanda → the ICTR, set up by the UN Security Council in 1994.',
        explanation: 'The post-1945 human-rights architecture is best understood as a chain of responses to specific atrocities. Naming this causal chain is exactly the kind of "connections" reasoning AP graders reward.'
      }
    },
    {
      id: 'whma4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: 'Which AP-style claim best explains the historical relationship between mass atrocities and the postwar human-rights regime?',
            options: [
              'The human-rights regime grew from Enlightenment philosophy alone, as postwar drafters relied on 18th-century texts rather than recent events',
              'Atrocities shaped human-rights law, from Nuremberg (1945) and the Genocide Convention (1948) to the Rome Statute (1998)',
              'The human-rights regime was built by the League of Nations after the Armenian atrocities (1915–1923) and dissolved along with the League in 1946',
              'The human-rights regime rested on informal moral pressure, since no binding treaty on genocide or refugees was adopted before the 1990s'
            ],
            correctAnswer: 1,
            explanation: 'The chain Holocaust → Nuremberg → UDHR → Genocide Convention → Refugee Convention → ICTY/ICTR → Rome Statute is one of the clearest connection-and-causation arguments in 20th-century history. Use it on the AP.'
          },
          {
            question: 'Which evidence best supports the claim that the Holocaust depended on participation beyond the Nazi leadership?',
            options: [
              'Hitler personally issued every order for the deportation of Jews from each occupied country',
              'French police carried out the July 1942 Vel\' d\'Hiv roundup of Jews in Paris',
              'The death camps were staffed entirely by senior members of the Nazi Party leadership',
              'No local populations in occupied Europe knew of the deportations until after 1945'
            ],
            correctAnswer: 1,
            explanation: 'Vichy French police arrested about 13,000 Jews in the Vel\' d\'Hiv roundup, showing that local officials and auxiliaries made mass deportation possible. Hitler did not personally issue every order, the camps relied on many lower-ranking guards and auxiliaries, and deportations took place in public view.'
          }
        ]
      }
    }
  ]
}
