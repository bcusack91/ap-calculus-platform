export const hgPoliticalGeographyPart6Data = {
  topicSlug: 'hg-political-geography',
  sections: [
    {
      id: 'hgpoliti6-intro',
      type: 'text' as const,
      content: `
# 🌍 Political Geography & Boundaries

**Part 6 of 7 — AP Exam Practice: Devolution and Supranational Data**

---

| Section |
|---------|
| 📖 Stimulus 1: Independence Referendums |
| Stimulus 2: EU and NATO Membership Over Time |
| FRQ Practice with Model Answers |

> 🔑 **Key Concept:** Political geography questions often hand you a table of votes or memberships and ask you to **describe** a pattern, **explain** the process behind it, and judge **the degree to which** it changes state sovereignty. Read the numbers first, name the concept, then connect it to a process and a consequence at a stated scale.
`
    },
    {
      id: 'hgpoliti6-stimulus1',
      type: 'text' as const,
      content: `
## 📖 Stimulus 1: Independence Referendums

"Yes" means a vote for independence or sovereignty; percentages are of valid votes, rounded to one decimal place.

| Region (state) | Year | Yes | No | Turnout | Legal status |
|---|---|---|---|---|---|
| **Quebec** (Canada) | 1980 | 40.4% | 59.6% | 85.6% | Held by Quebec's government |
| **Quebec** (Canada) | 1995 | 49.4% | 50.6% | 93.5% | Held by Quebec's government |
| **Scotland** (UK) | 2014 | 44.7% | 55.3% | 84.6% | Agreed in advance with the UK government |
| **Catalonia** (Spain) | 2017 | about 90% (as reported by the Catalan government) | — | about 43% | Suspended and then ruled illegal by Spain's Constitutional Court; many opponents did not vote |

### Reading the Table Before the Questions
- **Quebec** moved from a clear No (a 19-point margin) to a near tie (about 1 point) in 15 years.
- **Scotland** voted No by about 11 points, on high turnout, in a vote both governments accepted.
- **Catalonia's** reported Yes share looks overwhelming, but turnout was under half and the vote had no legal standing, so it shows the strength of the independence side, not the views of all Catalans.

> 🔑 **AP Connection:** A stimulus table has **limits**. Ask who voted, whether the vote was legal, and what the numbers leave out before you draw a conclusion.
`
    },
    {
      id: 'hgpoliti6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 1.
      `,
      exercise: {
        questions: [
          {
            question: 'Which conclusion is best supported by Stimulus 1?',
            options: [
              'Quebec\'s Yes share grew from 1980 to 1995',
              'Scotland\'s result was closer than Quebec\'s 1995 vote',
              'Turnout fell steadily from 1980 to 2014',
              'Most voters in all three chose independence'
            ],
            correctAnswer: 0,
            explanation: 'Quebec\'s Yes share rose from 40.4 to 49.4 percent between its two votes. Scotland\'s 11-point margin was far wider than Quebec\'s 1-point margin in 1995, turnout rose to 93.5 percent before falling, and No won every legal vote in the table.'
          },
          {
            question: 'Why should the 2017 Catalan result be used with caution as evidence of public opinion?',
            options: [
              'Many opponents did not vote',
              'It was held before Spain allowed any regional autonomy',
              'Spain\'s national government organized and counted it',
              'Only residents born outside Catalonia took part'
            ],
            correctAnswer: 0,
            explanation: 'With turnout around 43 percent and many opponents staying home because the vote had been ruled illegal, the reported Yes share mostly reflects supporters. Spain had granted Catalonia autonomy decades earlier, the Catalan government, not Madrid, organized the vote, and voting was not limited by birthplace.'
          },
          {
            question: 'Scotland voted No in 2014 but still has its own parliament. This shows that devolution:',
            options: [
              'can give real powers to a region that remains inside the state',
              'is a step that usually ends in full independence',
              'is limited to federal states such as Canada',
              'begins once an independence referendum succeeds'
            ],
            correctAnswer: 0,
            explanation: 'Scotland has had a parliament with powers over areas such as education and health since 1999 while remaining part of the UK, so devolution and independence are different outcomes. Most devolved regions never become independent, the UK is unitary rather than federal, and Scotland\'s devolution came 15 years before the independence vote.'
          }
        ]
      }
    },
    {
      id: 'hgpoliti6-stimulus2',
      type: 'text' as const,
      content: `
## Stimulus 2: EU and NATO Membership Over Time

| Year | EU members (European Communities before 1993) | NATO members | What changed |
|---|---|---|---|
| Founding | 6 (1957) | 12 (1949) | Western European cooperation; NATO also includes the US and Canada |
| 1990 | 12 | 16 | End of the Cold War; Germany reunified |
| 2004 | 25 | 26 | Ten states join the EU, eight of them former communist states; seven join NATO, including Estonia, Latvia and Lithuania |
| 2024 | 27 | 32 | The UK leaves the EU (2020); Finland (2023) and Sweden (2024) join NATO after Russia's 2022 invasion of Ukraine |

**Described as a map:** shading the members in 1990 and again in 2024 would show both organizations spreading **east**, from Western Europe into the former Soviet bloc, until NATO members border Russia along the Baltic states and the full length of Finland's eastern border. The UK drops out of the EU shading but stays in NATO's.
`
    },
    {
      id: 'hgpoliti6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** Using Stimulus 1, what was the margin between No and Yes in Quebec's 1995 referendum, in percentage points? (Enter a decimal number.)

**2)** Using Stimulus 2, how many members did NATO add, net, between 1990 and 2024?

**3)** Using Stimulus 2, how many members did the EU add between 1990 and 2004?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.2', '16', '13'],
        hint1: 'Subtract the Yes share from the No share: 50.6 − 49.4.',
        hint2: '32 − 16.',
        hint3: '25 − 12. (Three joined in 1995 and ten in 2004.)',
        explanation: '1) 50.6 − 49.4 = 1.2 percentage points, close to a tie. 2) 32 − 16 = 16, so NATO doubled in size after the Cold War. 3) 25 − 12 = 13: Austria, Finland and Sweden in 1995, then ten more in 2004.'
      }
    },
    {
      id: 'hgpoliti6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 2.
      `,
      exercise: {
        questions: [
          {
            question: 'Which change shown in Stimulus 2 best reflects the end of the Cold War?',
            options: [
              'NATO and EU membership spread into former Soviet-bloc states',
              'NATO shrank as Western states left the alliance',
              'The EU added its six founding members in 2004',
              'Western European states left NATO to join the European Union instead'
            ],
            correctAnswer: 0,
            explanation: 'Once the Soviet bloc broke apart, former communist states such as Poland and the Baltic states joined both organizations, which is why both grew sharply by 2004. NATO grew rather than shrank, the founding six joined in 1957, and EU members did not leave NATO.'
          },
          {
            question: 'Finland and Sweden joined NATO in 2023 and 2024, after Russia invaded Ukraine in 2022. This best illustrates which reason for supranationalism?',
            options: [
              'A shared military threat',
              'A wish for one currency',
              'Pressure to devolve power',
              'Demand for free trade'
            ],
            correctAnswer: 0,
            explanation: 'Both states had stayed outside NATO for decades and joined when a nearby war raised fears for their own security; military alliances are one reason the CED gives for supranationalism. NATO has no currency or trade role, and joining an alliance moves power upward, not down to regions.'
          }
        ]
      }
    },
    {
      id: 'hgpoliti6-frq',
      type: 'text' as const,
      content: `
## FRQ Practice with Model Answers

This prompt uses both stimuli, like the third question on the exam. Try each part before reading the model.

**A. Using Stimulus 1, identify the referendum with the closest result.**
> *Model:* Quebec in 1995, where No won 50.6 percent to 49.4 percent.

**B. Define devolution, using Scotland as an example.**
> *Model:* Devolution is the transfer of power from a central government to a regional government; the UK gave Scotland its own parliament in 1999 with powers over areas such as education and health, while Scotland stayed in the UK.

**C. Explain one economic factor that can encourage devolution, using Catalonia.**
> *Model:* Catalonia produces about one-fifth of Spain's GDP with about one-sixth of its people, so many Catalans believe they pay more in taxes than they receive in spending, which strengthens support for more self-government or independence.

**D. Explain one limitation of the 2017 Catalan data in Stimulus 1.**
> *Model:* Because the vote was ruled illegal and turnout was only about 43 percent, many opponents did not vote, so the 90 percent Yes figure overstates support for independence among all Catalans.

**E. Using Stimulus 2, describe the change in NATO membership between 1990 and 2024.**
> *Model:* NATO doubled from 16 to 32 members, expanding east into former communist states of Central and Eastern Europe and, most recently, to Finland and Sweden.

**F. Explain how EU membership limits the sovereignty of a member state.**
> *Model:* EU members must follow EU law and apply one common external tariff, so a national government cannot set its own trade policy toward outside countries, a power it would otherwise hold alone.

**G. Explain the degree to which devolution and supranationalism both weaken the central government of a state.**
> *Model:* To a large degree, both move power away from the national capital: devolution moves it **down** to regions such as Scotland, and supranationalism moves it **up** to bodies such as the EU, which the UK had joined. But the effect is limited, because the central government usually keeps the final say: the UK Parliament can change devolved powers, and the UK left the EU in 2020, showing that pooled sovereignty can be taken back.

### Why These Answers Score
- **Identify** answers are short and exact (A).
- **Explain** answers link a cause to an effect with *because* or *so* (C, D, F).
- **Degree** answers state how much **and** give a limit (G).
- Each uses **evidence from the stimuli**: 50.6 vs. 49.4, 43 percent turnout, 16 to 32 members.
`
    }
  ]
};
