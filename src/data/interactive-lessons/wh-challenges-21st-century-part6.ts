export const whChallenges21stCenturyPart6Data = {
  topicSlug: 'wh-challenges-21st-century',
  sections: [
    {
      id: 'whc6-intro',
      type: 'text' as const,
      content: `
# Challenges of the 21st Century

**Part 6 of 7 — Problem-Solving Workshop**

---

| Section |
|---|
| HIPP for documents about global challenges |
| Document bank: the Universal Declaration of Human Rights, Silent Spring, the Brundtland Report, the Alma-Ata Declaration |
| AP SAQ structure for these prompts |
| Common AP traps to avoid |

> Key idea: Documents about disease, the environment and human rights each come from a position: a coalition of governments, a scientist, an international commission, a global health conference. Sourcing that position with HIPP (historical situation, intended audience, purpose, point of view) is the highest-value move on these prompts.
      `
    },
    {
      id: 'whc6-content',
      type: 'text' as const,
      content: `
## HIPP for Documents About Global Challenges

| Letter | Question | Application |
|---|---|---|
| **H**istorical situation | What was happening when this was produced? | Just after World War II? During the Cold War? After the Cold War ended? |
| **I**ntended audience | Who was this for? | Governments? The general public? A UN body? Fellow activists? |
| **P**urpose | What was the author trying to do? | Set a standard? Warn the public? Shape policy? Win support for a movement? |
| **P**oint of view | What position is the author writing from? | A coalition of states? A scientist? An international commission? A grassroots leader? |

## Document Bank

> **1. Universal Declaration of Human Rights, Article 1 (UN General Assembly, 1948)**
> "All human beings are born free and equal in dignity and rights."

- **HIPP:** Adopted three years after World War II and the Holocaust; intended audience is the world's governments and peoples; purpose is to set a common standard of rights; point of view is a coalition of UN member states, drafted by a committee chaired by Eleanor Roosevelt. It was a declaration, not a binding treaty.

> **2. Rachel Carson, Silent Spring (1962)**
> "Over increasingly large areas of the United States, spring now comes unheralded by the return of the birds, and the early mornings are strangely silent where once they were filled with the beauty of bird song."

- **HIPP:** Written by a marine biologist who had worked for the U.S. Fish and Wildlife Service, during the postwar boom in chemical pesticides such as DDT; intended audience is the American reading public; purpose is to warn that pesticides were poisoning wildlife and people; point of view is a scientist writing for non-scientists, attacked at the time by chemical companies.
      `
    },
    {
      id: 'whc6-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Sourcing the first two documents**`,
      exercise: {
        questions: [
          {
            question: 'Which historical situation is most important for sourcing the Universal Declaration of Human Rights (1948)?',
            options: [
              'The end of the Cold War, which let former Soviet states join the UN',
              'The aftermath of World War II and the Holocaust',
              'The 1918 influenza pandemic and the founding of the League of Nations',
              'The oil shocks of the 1970s and the debt crisis in Latin America'
            ],
            correctAnswer: 1,
            explanation: 'The Declaration was drafted in direct response to the atrocities of World War II, including the Holocaust, and to the founding of the UN in 1945. The Cold War ended decades later, and the influenza pandemic and the oil shocks belong to other periods.'
          },
          {
            question: 'Rachel Carson wrote Silent Spring for general readers rather than for other scientists. How does this intended audience shape the excerpt?',
            options: [
              'It relies on statistical tables and laboratory data that only specialists could follow',
              'It uses a vivid image of mornings without birdsong to make the danger of pesticides felt',
              'It is written as a legal brief addressed to a judge in a case against a chemical firm',
              'It is phrased as a treaty text that member states could sign and ratify'
            ],
            correctAnswer: 1,
            explanation: 'Writing for the public, Carson used an emotional image of springs without birdsong to make pesticide damage concrete. The excerpt contains no data tables, is not a legal brief, and is not treaty language.'
          }
        ]
      }
    },
    {
      id: 'whc6-docs2',
      type: 'text' as const,
      content: `
> **3. World Commission on Environment and Development, Our Common Future (the Brundtland Report, 1987)**
> "Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs."

- **HIPP:** A UN commission chaired by Norwegian prime minister Gro Harlem Brundtland; intended audience is governments and international agencies; purpose is to reconcile economic growth in poorer countries with environmental protection; point of view is a body of officials from both rich and developing countries seeking a compromise. Its idea of "sustainable development" shaped the 1992 Rio Earth Summit.

> **4. Declaration of Alma-Ata, Article I (International Conference on Primary Health Care, 1978)**
> "The Conference strongly reaffirms that health, which is a state of complete physical, mental and social wellbeing, and not merely the absence of disease or infirmity, is a fundamental human right..."

- **HIPP:** Adopted in 1978 at a conference in Alma-Ata (Soviet Kazakhstan) organized by the World Health Organization and UNICEF, a year after the last naturally occurring case of smallpox; intended audience is the world's governments and health workers; purpose is to commit states to "Health for All by the Year 2000" through basic primary care rather than only big hospitals; point of view is delegations from 134 governments, many of them newly independent states, so the text states broad goals that rich and poor countries alike could sign. Like the Universal Declaration, it set goals but did not bind states or fund them.

## AP SAQ Structure (3 parts)

- **A. Identify** a specific development (for example, the spread of HIV/AIDS)
- **B. Explain** how it tested an institution or produced an outcome (for example, the UN launched UNAIDS in 1996)
- **C. Explain** a continuity, a contrast, or a limitation (for example, treatment stayed out of reach for most patients in poor countries in 2001)

## Common AP Traps

| Trap | Why it costs points |
|---|---|
| Treating globalization and global challenges as opposites | Many challenges (epidemics, emissions, networked terrorism) spread through the links globalization built |
| Writing about events after 2001 as evidence | The SAQs and DBQ cover 1200–2001; use pre-2001 cases |
| Quoting a document without sourcing it | The sourcing point requires HIPP |
| Treating all environmental movements as Western | Chipko (India) and the Green Belt Movement (Kenya) began in the global South |
      `
    },
    {
      id: 'whc6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each fact to the HIPP element it most directly supports.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Knowing the Brundtland commission included officials from both rich and developing countries is most useful for: ___',
            options: ['historical situation', 'intended audience', 'purpose', 'point of view']
          },
          {
            label: 'Knowing Silent Spring appeared during the postwar boom in pesticide use is most useful for: ___',
            options: ['historical situation', 'intended audience', 'purpose', 'point of view']
          },
          {
            label: 'Knowing the Universal Declaration aimed to set a common standard of rights for all nations is most useful for: ___',
            options: ['historical situation', 'intended audience', 'purpose', 'point of view']
          }
        ],
        correctAnswers: ['point of view', 'historical situation', 'purpose'],
        hint1: 'Who wrote it, and from what position?',
        hint2: 'What was happening when the book appeared?',
        hint3: 'What was the document trying to accomplish?',
        explanation: 'The commission\'s membership reveals its point of view; the pesticide boom is the historical situation; setting a common standard is the Declaration\'s purpose.'
      }
    },
    {
      id: 'whc6-model',
      type: 'text' as const,
      content: `
## Model SAQ Response

**Prompt:** Identify ONE global challenge of the late twentieth century, and explain how it tested an international institution.

> **Response:** HIV/AIDS spread worldwide after 1981 and hit sub-Saharan Africa hardest, killing millions of adults in their working years. It tested the UN system because no single agency could coordinate prevention, research and treatment, so the UN launched UNAIDS in 1996. Even so, by 2001 antiretroviral drugs reached few patients in poor countries, showing the limits of international action.

- **Why it scores:** It names a specific challenge with a date, a specific institution, and a specific outcome, then adds a limitation. A response that only says HIV/AIDS "was a serious global problem" earns no "explain" credit.
      `
    },
    {
      id: 'whc6-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Sourcing and argument**`,
      exercise: {
        questions: [
          {
            question: 'The Alma-Ata Declaration was adopted by delegations from 134 governments at a 1978 conference organized by the WHO and UNICEF. How does this point of view shape the document?',
            options: [
              'It is one doctor\'s private memoir, so it records her own patients rather than any shared policy',
              'It sets broad goals like health as a human right that many states could accept',
              'It is a binding treaty, so it fined any member state that failed to vaccinate its whole population',
              'It reflects only British colonial health policy, since the delegates met in London under the Crown'
            ],
            correctAnswer: 1,
            explanation: 'A text negotiated among many governments tends to state broad, widely acceptable principles, such as health as a fundamental human right and the goal of "Health for All by the Year 2000." It was not a personal memoir, it imposed no fines or binding duties, and it was adopted in Alma-Ata in the Soviet Union, not in London.'
          },
          {
            question: 'Which example best shows a global challenge spreading through the links that globalization built?',
            options: [
              'Smallpox eradicated by a vaccination campaign that the WHO coordinated',
              'HIV/AIDS carried along air routes and migration networks to every continent',
              'Chipko villagers in India hugging trees to stop commercial logging',
              'The Universal Declaration of Human Rights adopted by the UN in 1948'
            ],
            correctAnswer: 1,
            explanation: 'HIV/AIDS spread along the travel and migration networks of an integrated world, which shows that globalization and global challenges were linked rather than opposed. Smallpox eradication is a success of cooperation, Chipko is a local protest, and the Declaration is a rights document.'
          }
        ]
      }
    }
  ]
}
