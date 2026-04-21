export const whMassAtrocitiesPart6Data = {
  topicSlug: 'wh-mass-atrocities',
  sections: [
    {
      id: 'whma6-intro',
      type: 'text' as const,
      content: `
# Mass Atrocities & Resistance in the 20th Century

**Part 6 of 7 — Problem-Solving Workshop**

---

| Section |
|---|
| Working with primary documents (UDHR, Wannsee Protocol, RTLM transcripts) |
| Building evidence-based arguments for AP short-answer (SAQ) and long-essay (LEQ) |
| Sourcing: who wrote it, when, why, and for whom |
| Common AP traps to avoid in atrocity essays |

> Key idea: AP graders reward arguments that move from documents to claims with explicit reasoning. This part trains you to handle the kinds of sources you will see on the exam — declarations, perpetrator memos, survivor testimony, court rulings — and to translate them into thesis-driven writing.
      `
    },
    {
      id: 'whma6-content',
      type: 'text' as const,
      content: `
## From Evidence to Argument

> **Sourcing Checklist (HIPP)**

Use this on every primary document.

- **H**istorical context: What is happening at the moment of writing?
- **I**ntended audience: Who is the writer addressing?
- **P**urpose: What does the writer want the audience to do or believe?
- **P**oint of view: Who is the author, and what bias or position do they bring?

> **Document Bank: AP-Style Sources**

| Source | Date | What it shows |
|---|---|---|
| Universal Declaration of Human Rights | 1948 | Postwar global consensus on inherent rights |
| Wannsee Protocol | 1942 | Bureaucratic coordination of the Final Solution |
| RTLM radio transcripts | 1994 | Media incitement of genocide |
| Anne Frank's diary | 1942–44 | Lived experience of Jewish hiding under Nazi occupation |
| Elie Wiesel's Night | 1958 | Survivor testimony from Auschwitz and Buchenwald |
| Telford Taylor's opening Nuremberg statement | 1945 | Establishing legal accountability for crimes against humanity |

> **Building an SAQ Response**

A typical SAQ asks you to: (a) identify a development, (b) explain a cause or effect, and (c) connect it to a broader process. Aim for 2–4 sentences per part.

Example prompt: "Explain ONE way the Holocaust shaped the postwar human-rights regime."

Strong response model:
- (a) Identify: The Holocaust directly shaped the 1948 UN Convention on the Prevention and Punishment of the Crime of Genocide.
- (b) Explain: Polish-Jewish lawyer Raphael Lemkin coined "genocide" in 1944 in response to the Holocaust and the earlier Armenian case, and he led the campaign for the Convention.
- (c) Connect: The Convention became the legal foundation for later prosecutions at the ICTR (Rwanda) and ICTY (Bosnia), demonstrating that the postwar human-rights regime built directly on the Holocaust experience.

> **Common AP Traps**

| Trap | Why it loses points | Better move |
|---|---|---|
| Calling violence "ancient hatred" | Evades structural causation | Name ideology, organization, crisis |
| "Hitler was evil" framing | Reduces history to one personality | Name the Nazi state apparatus and its bureaucracy |
| Ignoring victim agency | Erases resistance and rescue | Cite Warsaw Ghetto Uprising, Wallenberg, Le Chambon |
| Treating documents as transparent | Misses sourcing | Apply HIPP to every primary source you use |
      `
    },
    {
      id: 'whma6-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Sourcing and Argument**`,
      exercise: {
        questions: [
          {
            question: 'A student includes the Wannsee Protocol of January 1942 as primary evidence in an AP essay. Which use of HIPP sourcing is the most analytically powerful?',
            options: [
              'Note that the document is in German and was therefore not legally binding under any contemporary international agreement applying to wartime atrocities',
              'Note that the protocol was a closed bureaucratic memo intended for senior SS and ministry officials, used to coordinate logistics, and treats mass killing as routine administrative business',
              'Note that the document was made public in 1947 and therefore has no relevance to understanding the policy formation that occurred between 1933 and 1945 in Germany',
              'Note that the document was authored by Reinhard Heydrich and therefore expresses only one personal opinion not representative of the broader Nazi state apparatus or its leadership'
            ],
            correctAnswer: 1,
            explanation: 'The strongest use of HIPP names audience (senior officials), purpose (coordination of logistics), and point of view (the bureaucratic register that treats killing as administration). This earns the sourcing point on the LEQ rubric.'
          },
          {
            question: 'Which short-answer move is most likely to earn the "explain" point on a prompt about the connection between the Holocaust and the postwar human-rights regime?',
            options: [
              'Restate the prompt back to the reader and provide a list of dates without naming any specific institution, treaty, or causal mechanism connecting them',
              'Identify Lemkin\'s coining of "genocide" (1944) and explicitly link it to the 1948 UN Genocide Convention as the direct institutional outcome of the Holocaust experience',
              'Argue that postwar human-rights law had no relationship to the Holocaust and emerged independently from 18th-century Enlightenment philosophy without reference to recent events',
              'Discuss the personal biography of Adolf Hitler in detail without naming any postwar legal instrument or human-rights organization that emerged in response to the war'
            ],
            correctAnswer: 1,
            explanation: 'AP "explain" prompts reward a named mechanism. Lemkin → 1948 Convention is the canonical Holocaust-to-law causal chain.'
          }
        ]
      }
    },
    {
      id: 'whma6-input',
      type: 'input-boxes' as const,
      content: `**Document Sprint — name the right source**`,
      exercise: {
        questions: [
          {
            prompt: 'The 1948 declaration drafted under Eleanor Roosevelt that proclaimed inherent and equal rights for all human beings.',
            answer: 'Universal Declaration of Human Rights',
            acceptableAnswers: ['UDHR', 'Universal Declaration of Human Rights'],
            hint: 'A foundational postwar UN document.'
          },
          {
            prompt: 'The Holocaust survivor memoir, originally published in 1958 in Yiddish and later in French and English, by a Romanian-born survivor of Auschwitz and Buchenwald.',
            answer: 'Night',
            acceptableAnswers: ['Night', 'Night by Elie Wiesel', 'Elie Wiesel Night'],
            hint: 'A short title; one English word.'
          },
          {
            prompt: 'The 1942 bureaucratic record of the meeting at which senior Nazi officials coordinated the implementation of the Final Solution.',
            answer: 'Wannsee Protocol',
            acceptableAnswers: ['Wannsee Protocol', 'Wannsee', 'Wannsee Conference Protocol'],
            hint: 'Named for the Berlin suburb where the meeting was held.'
          }
        ]
      }
    },
    {
      id: 'whma6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each AP analytical move to the document that best supports it.**`,
      exercise: {
        dropdowns: [
          {
            label: 'To document bureaucratic coordination of the Final Solution, the strongest source is: ___',
            options: ['the Wannsee Protocol (1942)', 'RTLM radio transcripts (1994)', "Anne Frank's diary (1942–44)", 'the Universal Declaration of Human Rights (1948)']
          },
          {
            label: 'To document the use of mass media to incite genocide, the strongest source is: ___',
            options: ['the Wannsee Protocol (1942)', 'RTLM radio transcripts (1994)', "Anne Frank's diary (1942–44)", 'the Universal Declaration of Human Rights (1948)']
          },
          {
            label: 'To document the postwar global commitment to inherent rights of all persons, the strongest source is: ___',
            options: ['the Wannsee Protocol (1942)', 'RTLM radio transcripts (1994)', "Anne Frank's diary (1942–24)", 'the Universal Declaration of Human Rights (1948)']
          }
        ],
        correctAnswers: ['the Wannsee Protocol (1942)', 'RTLM radio transcripts (1994)', 'the Universal Declaration of Human Rights (1948)'],
        hint1: 'Match each prompt to the source whose author and audience directly serve the analytical claim.',
        hint2: "Anne Frank's diary is the distractor here; it is best used for lived experience, not bureaucracy or law.",
        hint3: 'Read the prompt verb: "bureaucratic coordination," "mass media incitement," "global commitment to rights" — each maps to a specific document type.',
        explanation: 'Strong document-based writing matches the source to the claim. Bureaucratic coordination → administrative memo. Media incitement → broadcast transcript. Global rights commitment → multilateral declaration. Personal testimony (Anne Frank) is for lived-experience prompts.'
      }
    },
    {
      id: 'whma6-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Working with Sources**`,
      exercise: {
        questions: [
          {
            question: 'A student uses RTLM radio transcripts as evidence in an essay on the Rwandan Genocide. Which use of HIPP earns the sourcing point on the LEQ rubric?',
            options: [
              'Note that radio is a popular form of communication in many countries and was used widely in Africa during the late twentieth century without specifying audience or purpose',
              'Note that RTLM was a Hutu Power station broadcast in Kinyarwanda directly to civilians, naming individual Tutsi targets in real time, with the explicit purpose of mobilizing neighbor-on-neighbor killing',
              'Note that the transcripts are incomplete because some broadcasts were lost, which means the source has no analytical value at all for understanding the role of media incitement in the genocide',
              'Note that RTLM ceased broadcasting in 1994 and therefore cannot be used as evidence about the role of media in mobilizing perpetrators during the Rwandan Genocide'
            ],
            correctAnswer: 1,
            explanation: 'Strong HIPP sourcing names audience (Kinyarwanda-speaking civilians), purpose (mobilizing killing), and point of view (Hutu Power station). This is the move that earns the LEQ sourcing point.'
          },
          {
            question: 'Which AP-style argument is best supported by combining survivor testimony (Wiesel\'s Night) with the legal record (Nuremberg trials)?',
            options: [
              'The two sources together prove that the Holocaust never occurred and that postwar legal proceedings were entirely fabricated by Allied prosecutors after WWII',
              'The two sources together connect lived victim experience to the postwar legal architecture, showing that survivor testimony and bureaucratic evidence jointly underwrote the Nuremberg Principles',
              'The two sources are unrelated and cannot be combined in an AP-style argument because one is a memoir and the other is a court transcript with no shared analytical relevance',
              'The two sources together prove that perpetrators were always prosecuted immediately and that no senior Nazi escaped trial in any postwar Allied jurisdiction'
            ],
            correctAnswer: 1,
            explanation: 'Combining different source types (survivor + legal record) to support a single thesis is the kind of synthesis that earns complexity points on the AP LEQ.'
          }
        ]
      }
    }
  ]
}
