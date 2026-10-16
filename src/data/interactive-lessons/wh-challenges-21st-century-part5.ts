export const whChallenges21stCenturyPart5Data = {
  topicSlug: 'wh-challenges-21st-century',
  sections: [
    {
      id: 'whc5-intro',
      type: 'text' as const,
      content: `
# Challenges of the 21st Century

**Part 5 of 7 — Change Over Time**

---

| Section |
|---|
| Three phases, 1900–2001 |
| The world after the Cold War, 1991–2001 |
| What happened to the post-1945 institutions |
| What stayed the same and what changed |

> Key idea: Continuity-and-change prompts on global challenges are won by students who divide the century into clear phases and name what stayed the same across them. The phase scheme below runs from 1900 to 2001, the end point of the exam's short-answer and document-based questions.
      `
    },
    {
      id: 'whc5-content',
      type: 'text' as const,
      content: `
## Phase 1 (1900–1945): Total War, Pandemic and a Weak League

| Feature | Description |
|---|---|
| Disease | The 1918 influenza pandemic kills tens of millions; antibiotics arrive only in the 1940s |
| Environment | Industrial smoke and mining treated as the price of progress; few laws limit pollution |
| Institutions | The League of Nations (1920) lacks enforcement power and fails to stop aggression in the 1930s |
| Rights | Women win the vote in some states (United States 1920, Brazil 1932, Turkey 1934); colonial rule still covers much of Asia and Africa |

## Phase 2 (1945–1991): The UN System and the Cold War

| Feature | Description |
|---|---|
| Institutions | The United Nations (1945), the WHO (1948) and the Universal Declaration of Human Rights (1948) |
| Disease | Vaccines and antibiotics spread; smallpox is eradicated (1980); HIV/AIDS emerges (1981) |
| Environment | Rachel Carson's Silent Spring (1962), the UN Stockholm conference (1972), the Montreal Protocol (1987) |
| Security | The superpower nuclear standoff dominates; decolonization creates dozens of new states |

## Phase 3 (1991–2001): One Superpower and Deeper Integration

| Feature | Description |
|---|---|
| Power | The Soviet Union dissolves in 1991, leaving the United States as the only superpower |
| Economy | The WTO (1995), NAFTA (1994) and the spread of the internet deepen integration; China joins the WTO in 2001 |
| Environment | The Rio Earth Summit (1992) and the Kyoto Protocol (1997) bring climate change into treaties |
| Violence | Genocide in Rwanda (1994) and Bosnia; al-Qaeda's attacks on U.S. embassies (1998) and on September 11, 2001 |
      `
    },
    {
      id: 'whc5-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Phases**`,
      exercise: {
        questions: [
          {
            question: 'Which term best describes the distribution of world power between the Soviet collapse in 1991 and 2001?',
            options: [
              'Bipolar, with two evenly matched superpower blocs',
              'Multipolar, with many roughly equal great powers and no leader',
              'Unipolar, with the United States as the only superpower',
              'A joint order led by China and a recovered Russia'
            ],
            correctAnswer: 2,
            explanation: 'With the Soviet Union gone, the United States was the only superpower, spending more on defense than the next several countries combined. The bipolar order had ended, no group of equal powers balanced the United States, and China and Russia were not leading a rival order.'
          },
          {
            question: 'Which development most clearly marks the break between Phase 1 (1900–1945) and Phase 2 (1945–1991) in how states organized cooperation?',
            options: [
              'The founding of the League of Nations in 1920, which the United States refused to join',
              'The creation of the United Nations and agencies such as the WHO after World War II',
              'The 1997 Kyoto Protocol, which set binding emissions limits for developed countries',
              'The 1994 Zapatista uprising in Mexico on the day NAFTA took effect'
            ],
            correctAnswer: 1,
            explanation: 'The UN system created after 1945 (the UN itself, the WHO, and later bodies such as the UN Environment Programme) gave states standing institutions for cooperation that the League had lacked. The League belongs to Phase 1, and Kyoto and the Zapatistas belong to Phase 3.'
          }
        ]
      }
    },
    {
      id: 'whc5-institutions',
      type: 'text' as const,
      content: `
## What Happened to the Post-1945 Institutions After 1991

KC-6.3.II.A: "New international organizations, including the United Nations, formed with the stated goal of maintaining world peace and facilitating international cooperation." After the Cold War, these institutions did not disappear. They were tested, expanded and supplemented.

| Institution | 1991–2001 record |
|---|---|
| UN peacekeeping | Missions multiplied in the early 1990s, but the UN failed to stop genocide in Rwanda (1994) and at Srebrenica (1995) |
| International tribunals | The UN set up courts for the former Yugoslavia (1993) and Rwanda (1994); the 1998 Rome Statute created a permanent International Criminal Court |
| WTO | Replaced GATT in 1995 with binding dispute settlement |
| NATO | Survived the end of the Soviet threat and admitted Poland, Hungary and the Czech Republic in 1999 |
| UNAIDS | Began operating in 1996 to coordinate the global response to HIV/AIDS |
| G-20 | A forum of finance ministers formed in 1999 after the Asian financial crisis |
      `
    },
    {
      id: 'whc5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each development to its phase.**`,
      exercise: {
        dropdowns: [
          {
            label: 'The League of Nations fails to stop Italy\'s invasion of Ethiopia: ___',
            options: ['Phase 1 (1900–45)', 'Phase 2 (1945–91)', 'Phase 3 (1991–2001)']
          },
          {
            label: 'The WHO\'s vaccination campaign ends smallpox: ___',
            options: ['Phase 1 (1900–45)', 'Phase 2 (1945–91)', 'Phase 3 (1991–2001)']
          },
          {
            label: 'The UN creates a tribunal to try genocide in Rwanda: ___',
            options: ['Phase 1 (1900–45)', 'Phase 2 (1945–91)', 'Phase 3 (1991–2001)']
          }
        ],
        correctAnswers: ['Phase 1 (1900–45)', 'Phase 2 (1945–91)', 'Phase 3 (1991–2001)'],
        hint1: 'Italy invaded Ethiopia in 1935.',
        hint2: 'The WHO declared smallpox eradicated in 1980.',
        hint3: 'The Rwandan genocide took place in 1994.',
        explanation: 'Ethiopia (1935) shows the weak League of Phase 1; smallpox eradication (1980) shows the UN system of Phase 2; the Rwanda tribunal (1994) shows the expanded but uneven institutions of Phase 3.'
      }
    },
    {
      id: 'whc5-ccot',
      type: 'text' as const,
      content: `
## Continuities and Changes, 1900–2001

| Continuity | Evidence |
|---|---|
| New epidemics kept emerging | 1918 influenza → Ebola (1976) → HIV/AIDS (1981) |
| Diseases of poverty persisted | Malaria, tuberculosis and cholera in poor regions throughout |
| States remained the main actors | Even treaties on global problems depended on national ratification (Kyoto) |
| Gaps between rich and poor regions | Narrowed in East Asia but persisted in much of Africa |

| Change | From → To |
|---|---|
| International cooperation | A weak League with no enforcement → a UN system with permanent agencies, courts and trade rules |
| Environmental awareness | Pollution as the price of progress → treaties on ozone (1987) and climate (1992, 1997) |
| Medicine | No antibiotics in 1918 → vaccines, antibiotics and smallpox eradication |
| Security threats | Wars between states → wars inside states and attacks by non-state networks |

- **Key takeaway:** A strong thesis names one continuity and one change and connects them: international institutions grew far stronger after 1945, yet new epidemics and environmental damage kept outrunning what those institutions could do.
      `
    },
    {
      id: 'whc5-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — CCOT writing**`,
      exercise: {
        questions: [
          {
            question: 'How did NATO and the UN fare in the decade after the Cold War ended?',
            options: [
              'They dissolved together with the Soviet Union in 1991',
              'They survived and took on new tasks alongside newer bodies',
              'They were replaced by new bodies led by China and India',
              'They merged into a single world government run from UN headquarters'
            ],
            correctAnswer: 1,
            explanation: 'NATO admitted new members in 1999, and the UN expanded peacekeeping and set up tribunals for Yugoslavia and Rwanda, while new bodies such as the WTO and UNAIDS were added alongside them. Neither dissolved or was replaced, and no world government emerged.'
          },
          {
            question: 'Which thesis best demonstrates continuity-and-change reasoning about disease between 1900 and 2001?',
            options: [
              'Vaccines and antibiotics ended smallpox and extended lives, yet new epidemics kept emerging and diseases of poverty persisted',
              'Disease changed little between 1900 and 2001, since medicine made no real progress against any illness in any region of the world',
              'Medicine ended the threat of infectious disease by 1980, so epidemics ceased to affect human populations anywhere after that date',
              'Disease mattered only in the early 1900s, and the 1918 influenza was the last epidemic to cause major social disruption anywhere'
            ],
            correctAnswer: 0,
            explanation: 'The thesis pairs a change (vaccines, antibiotics, smallpox eradication) with continuities (new epidemics, persistent diseases of poverty). The other options deny the change or deny the continuity.'
          }
        ]
      }
    }
  ]
}
