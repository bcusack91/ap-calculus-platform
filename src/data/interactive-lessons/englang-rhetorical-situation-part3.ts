export const englangRhetoricalSituationPart3Data = {
  topicSlug: 'englang-rhetorical-situation',
  sections: [
    {
      id: 'englangr3-intro',
      type: 'text' as const,
      content: `
# 🎯 The Rhetorical Situation (Reading)

**Part 3 of 7 — Case Studies: Two Texts from 1776**

---

| Section |
|---------|
| 📖 Case 1: The Declaration of Independence |
| Case 2: Thomas Paine, *The American Crisis* |
| Same Year, Same Cause, Different Situations |
| AP Connection: Explaining a Choice Through the Situation |

> 🔑 **Key Concept:** Two texts can share a cause and a year yet answer very different situations. The Declaration of Independence explains a decision to the world; Paine's *Crisis* steadies frightened soldiers and citizens. Their choices differ because their audiences and exigences differ.
`
    },
    {
      id: 'englangr3-declaration',
      type: 'text' as const,
      content: `
## 📖 Case 1: The Declaration of Independence (July 4, 1776)

> When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.
>
> — The Declaration of Independence, adopted by the Continental Congress, July 4, 1776

| Component | Analysis |
|---|---|
| **Exigence** | Congress had voted on July 2 to declare independence; the decision now had to be announced and justified |
| **Audience** | Colonists, the British government and, as the opening says, "mankind": the "powers of the earth," including potential allies such as France |
| **Purpose** | To justify separation as lawful and necessary so that colonists would support it and foreign powers could treat the new states as a legitimate nation |
| **Context** | More than a year of fighting; a colonial public still divided over a full break with Britain |

### How the Opening Sentence Answers the Situation

| Choice | Effect for this audience |
|---|---|
| "the Course of human events" | Frames independence as part of the general pattern of history, not a local rebellion |
| "one people... another" | Treats Americans and Britons as two separate peoples, which assumes the conclusion the document will argue |
| "the Laws of Nature and of Nature's God" | Grounds the right to independence in a law above the British Crown, one that any nation could recognize |
| "a decent respect to the opinions of mankind requires" | Presents the document as a courtesy owed to the world, casting Congress as reasonable rather than reckless |

Later the Declaration introduces its list of grievances with the words "let Facts be submitted to a candid world." The phrase names the audience a second time: impartial outside observers who will judge by evidence.
`
    },
    {
      id: 'englangr3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The phrase "a decent respect to the opinions of mankind requires that they should declare the causes" primarily serves to',
            options: [
              'present the document as an explanation owed to an international audience',
              'apologize to the British people for the violence of the past year',
              'suggest that the colonists will reconsider if the world disagrees',
              'remind colonists that their own opinions about the war are divided'
            ],
            correctAnswer: 0,
            explanation: 'By saying respect for mankind "requires" a declaration of causes, Congress frames the text as a justification addressed to the world. It does not apologize, offer to reconsider or address internal division.'
          },
          {
            question: 'Why does the appeal to "the Laws of Nature and of Nature\'s God" suit the Declaration\'s situation?',
            options: [
              'It invokes an authority higher than the British Crown',
              'It shows that Congress was composed of religious leaders',
              'It avoids offending colonists who still respect British law',
              'It signals that the document is meant for clergy above all'
            ],
            correctAnswer: 0,
            explanation: 'Colonists breaking with the Crown could not appeal to British law, so they appealed to a natural law above it that any nation might accept. The phrase does not describe Congress\'s membership or single out clergy.'
          }
        ]
      }
    },
    {
      id: 'englangr3-paine',
      type: 'text' as const,
      content: `
## Case 2: Thomas Paine, *The American Crisis* (December 1776)

By December 1776 the situation had changed sharply. Washington's army had been driven out of New York and had retreated across New Jersey into Pennsylvania. Many soldiers' enlistments would expire at the end of the year. Paine, who was traveling with the army, published the first *Crisis* essay that month. According to a long-standing tradition, Washington had it read aloud to his troops.

> These are the times that try men's souls. The summer soldier and the sunshine patriot will, in this crisis, shrink from the service of their country; but he that stands by it now, deserves the love and thanks of man and woman. Tyranny, like hell, is not easily conquered; yet we have this consolation with us, that the harder the conflict, the more glorious the triumph.
>
> — Thomas Paine, *The American Crisis*, No. 1 (December 1776)

| Component | Analysis |
|---|---|
| **Exigence** | Military defeats, a long retreat and the coming end of enlistments |
| **Audience** | Discouraged soldiers and wavering civilian patriots |
| **Purpose** | To shame desertion, honor those who stay and turn hardship into a reason to keep fighting |

### How the Choices Answer the Situation

| Choice | Effect |
|---|---|
| A short, declarative opening sentence | Names the crisis directly and makes the present moment the test |
| "summer soldier and the sunshine patriot" | Alliteration mocks those who serve only in easy times, making desertion shameful |
| "but he that stands by it now" | Contrasts the deserter with the steadfast; "now" ties honor to this exact moment |
| "Tyranny, like hell, is not easily conquered" | A simile that admits difficulty while casting the enemy as evil |
| "the harder the conflict, the more glorious the triumph" | A balanced structure that converts suffering into a promise of greater glory |

Notice that Paine **admits** the hardship rather than hiding it. For an audience living through defeat, denial would ring false; reframing hardship as the price of glory is more persuasive.
`
    },
    {
      id: 'englangr3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Choice to the Situation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Paine\'s "summer soldier and the sunshine patriot" responds most directly to ___',
            options: ['expiring enlistments and desertion', 'foreign doubts about legitimacy', 'divided opinion in Parliament', 'the Laws of Nature']
          },
          {
            label: 'The Declaration\'s "candid world" names an audience of ___',
            options: ['impartial outside observers', 'Continental Army soldiers', 'British members of Parliament', 'colonial newspaper editors']
          },
          {
            label: 'Paine\'s admission that tyranny "is not easily conquered" works because the audience ___',
            options: ['had already lived through defeats', 'had never fought the British', 'expected a quick victory soon', 'distrusted all printed essays']
          }
        ],
        correctAnswers: ['expiring enlistments and desertion', 'impartial outside observers', 'had already lived through defeats'],
        hint1: 'Who is a "summer soldier"? Someone who leaves when service gets hard.',
        hint2: '"Candid" here means fair and unbiased.',
        hint3: 'An audience that has been retreating for months would not believe promises of ease.',
        explanation: 'The summer soldier image targets those tempted to leave as enlistments ran out. A "candid world" is an impartial audience of outside nations and observers. Admitting difficulty is credible to people who have already suffered defeats.'
      }
    },
    {
      id: 'englangr3-compare',
      type: 'text' as const,
      content: `
## Same Year, Same Cause, Different Situations

| | Declaration (July 1776) | *The American Crisis* (December 1776) |
|---|---|---|
| **Exigence** | A decision to separate that must be justified | A military crisis that threatens the army's survival |
| **Primary audience** | The world and the colonial public | Soldiers and wavering patriots |
| **Purpose** | Legitimize independence | Sustain the will to fight |
| **Voice** | Impersonal, formal, legalistic ("one people," "the causes") | Personal, urgent, moral ("these are the times," "he that stands by it now") |
| **Key strategy** | Universal principles and a list of "Facts" | Shame, honor and the promise of triumph |

Neither voice is "better." Each fits its situation. An impersonal list of grievances would not hold an army together in December, and Paine's fiery aphorisms would not persuade a European court that the colonies were a responsible nation.

> 🔑 **AP Connection:** When a Section I question asks why a writer made a choice, the right answer usually connects the choice to a **specific** feature of the situation. Options that describe the choice accurately but tie it to the wrong audience or purpose are common distractors.
`
    },
    {
      id: 'englangr3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In Paine\'s passage, the word "now" in "he that stands by it now" primarily serves to',
            options: [
              'link honor to staying during this particular moment of hardship',
              'suggest that the army\'s difficulties will soon come to an end',
              'contrast the American cause with the earlier British victories',
              'indicate that the writer is reporting events as they occur'
            ],
            correctAnswer: 0,
            explanation: '"Now" makes loyalty during the present crisis the measure of honor, which answers a situation in which soldiers were deciding whether to leave. It promises no quick end and does not narrate events.'
          },
          {
            question: 'Which statement best explains why the Declaration and Paine\'s essay differ in voice?',
            options: [
              'Paine was a professional writer and Congress was not',
              'They answer separate exigences for separate audiences',
              'The Declaration was written before the war had begun',
              'Paine wrote for readers in Britain and Congress did not'
            ],
            correctAnswer: 1,
            explanation: 'The Declaration justifies a decision to the world, while the Crisis rallies discouraged soldiers; each voice suits its own situation. Fighting had begun in 1775, and Paine wrote for Americans, not Britons.'
          },
          {
            question: 'Paine\'s sentence "the harder the conflict, the more glorious the triumph" is best described as',
            options: [
              'a concession that the cause may be lost',
              'a balanced claim that recasts suffering as gain',
              'a factual prediction based on military records',
              'a quotation from the Declaration of Independence'
            ],
            correctAnswer: 1,
            explanation: 'The paired comparatives tie greater hardship to greater glory, so the audience\'s suffering becomes a sign of future triumph. It concedes no defeat, cites no records and does not quote the Declaration.'
          }
        ]
      }
    }
  ]
}
