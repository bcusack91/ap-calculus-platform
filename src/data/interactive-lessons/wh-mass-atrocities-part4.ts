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
| Postwar tribunals: Nuremberg, Tokyo, ICTR, ICTY, ICC |

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
- Historians ask why ordinary people participated. Christopher Browning's Ordinary Men (1992) argues that situational factors — peer pressure, deference to authority, the routinization of killing — explain participation more than ideology alone.

> **Postwar Human Rights Architecture**

| Year | Instrument | What it does |
|---|---|---|
| 1945–46 | Nuremberg Trials (and 1946–48 Tokyo Trials) | Established individual criminal responsibility for "crimes against humanity" |
| 1948 | Universal Declaration of Human Rights (UDHR) | Drafted under Eleanor Roosevelt; declared inherent rights of all persons |
| 1948 | Convention on the Prevention and Punishment of the Crime of Genocide | Created the legal definition still in use today |
| 1951 | Convention Relating to the Status of Refugees | Defined "refugee" and prohibited refoulement (forced return to danger) |
| 1993 | International Criminal Tribunal for the former Yugoslavia (ICTY) | Tried Bosnian and Serbian leaders; convicted Karadžić, Mladić |
| 1994 | International Criminal Tribunal for Rwanda (ICTR) | Convicted senior officials including PM Jean Kambanda |
| 1998 | Rome Statute → 2002 International Criminal Court (ICC) | Permanent court for genocide, crimes against humanity, war crimes |

> **Where Connections Live**

- Postwar law (Nuremberg → ICC) directly built on the Holocaust experience.
- The Refugee Convention emerged from the displacement of millions in WWII and immediate postwar Europe.
- The doctrine of "Responsibility to Protect" (R2P, adopted by UN summit 2005) was a direct response to Rwanda and Srebrenica.
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
              'The Warsaw Ghetto Uprising of April–May 1943, in which a few hundred fighters held off German forces for nearly a month',
              'The 1939 invasion of Poland by Wehrmacht units that triggered the start of the Second World War in early September of that year',
              'The June 1944 Allied D-Day landings on the beaches of Normandy that opened the western front in occupied France against Germany',
              'The 1942 Wannsee Conference outside Berlin where senior SS officials coordinated the bureaucracy of the Final Solution policy'
            ],
            correctAnswer: 0,
            explanation: 'The Warsaw Ghetto Uprising is the canonical AP example of organized armed Jewish resistance under occupation. Camp revolts at Sobibor and Treblinka are the secondary examples.'
          },
          {
            question: 'Which postwar instrument established individual criminal responsibility for "crimes against humanity" — a doctrine still applied by international tribunals today?',
            options: [
              'The 1648 Treaties of Westphalia ending the Thirty Years War in central Europe and codifying state sovereignty',
              'The Nuremberg Trials of 1945–46, which prosecuted Nazi leadership and produced the Nuremberg Principles',
              'The 1815 Congress of Vienna that redrew the European political map after the Napoleonic Wars and the fall of Napoleon',
              'The 1815 Final Act of Vienna, which abolished the Atlantic slave trade among signatory European powers and their colonies'
            ],
            correctAnswer: 1,
            explanation: 'Nuremberg established that individuals — not just states — could be prosecuted for crimes against humanity. The 1945 London Charter created the legal framework that the ICC still relies on.'
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
            prompt: 'The 2002 permanent international court created by the Rome Statute to prosecute genocide, crimes against humanity, and war crimes.',
            answer: 'International Criminal Court',
            acceptableAnswers: ['ICC', 'International Criminal Court'],
            hint: 'Three-letter acronym; based in The Hague.'
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
            options: ['the Nuremberg Trials and Principles', 'the 1951 Refugee Convention', 'the doctrine of Responsibility to Protect (R2P)', 'the Rome Statute and the permanent ICC']
          },
          {
            label: 'The protection of stateless people fleeing persecution after WWII was codified in: ___',
            options: ['the Nuremberg Trials and Principles', 'the 1951 Refugee Convention', 'the doctrine of Responsibility to Protect (R2P)', 'the Rome Statute and the permanent ICC']
          },
          {
            label: 'The post-Rwanda commitment to international intervention against ongoing atrocities was articulated as: ___',
            options: ['the Nuremberg Trials and Principles', 'the 1951 Refugee Convention', 'the doctrine of Responsibility to Protect (R2P)', 'the Rome Statute and the permanent ICC']
          }
        ],
        correctAnswers: ['the Nuremberg Trials and Principles', 'the 1951 Refugee Convention', 'the doctrine of Responsibility to Protect (R2P)'],
        hint1: 'Each human-rights instrument was a response to a specific 20th-century crisis.',
        hint2: 'The Rome Statute is the distractor here; it created the permanent ICC, which is broader than any one of the three rows above.',
        hint3: 'Match the response to the cause: Holocaust → Nuremberg, displaced WWII Europeans → Refugee Convention, Rwanda/Srebrenica → R2P.',
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
              'The postwar human-rights regime emerged independently of any mass atrocities and was based purely on 18th-century Enlightenment philosophy without reference to recent events',
              'Mass atrocities of the 20th century directly shaped the legal architecture of human rights, from Nuremberg (1945) to the Genocide Convention (1948), the Refugee Convention (1951), and ultimately the ICC (2002)',
              'The postwar human-rights regime was created by the League of Nations in 1920 in direct response to the Armenian Genocide and was subsequently dissolved in 1946 with the dissolution of the League itself',
              'The postwar human-rights regime had no significant institutional foundation and operated entirely as informal moral pressure exerted by individual national governments without any treaty basis'
            ],
            correctAnswer: 1,
            explanation: 'The chain Holocaust → Nuremberg → UDHR → Genocide Convention → Refugee Convention → ICTR/ICTY → ICC is one of the clearest connection-and-causation arguments in 20th-century history. Use it on the AP.'
          },
          {
            question: 'Christopher Browning\'s Ordinary Men argues that situational factors — peer pressure, deference to authority, routinization — explain why ordinary Germans participated in killing. Which counter-argument or refinement is the most historically supported?',
            options: [
              'Browning\'s argument applies only to Reserve Police Battalion 101 and cannot be extended to any other context of perpetrator behavior in the 20th century at all',
              'Daniel Goldhagen\'s response (Hitler\'s Willing Executioners) emphasizes the role of long-standing eliminationist anti-Semitism in German culture as a necessary motivating ideology',
              'Browning\'s argument was definitively disproved by archival research of the 1990s and is no longer used in scholarly discussion of perpetrator behavior in the modern period',
              'Browning\'s argument shows that ideology was wholly irrelevant in the Holocaust because all Germans were forced to participate against their personal will or risk immediate execution'
            ],
            correctAnswer: 1,
            explanation: 'The Browning–Goldhagen debate is the standard AP-level historiographical debate on perpetrators. Knowing both sides — situational and ideological — earns the complexity point.'
          }
        ]
      }
    }
  ]
}
