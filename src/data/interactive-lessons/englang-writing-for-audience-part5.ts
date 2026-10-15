export const englangWritingForAudiencePart5Data = {
  topicSlug: 'englang-writing-for-audience',
  sections: [
    {
      id: 'englangw5-intro',
      type: 'text' as const,
      content: `
# 👥 Writing for Audience

**Part 5 of 7 — One Argument, Three Audiences: Adapting Your Own Writing**

---

| Section |
|---------|
| The Core Argument |
| Three Readers, Three Profiles |
| Three Versions of the Same Paragraph |
| What Changed and What Did Not |
| Misconceptions About Writing for Audience |

> 🔑 **Key Concept:** Parts 2–4 watched Lincoln, Washington, Joseph, and Stanton adapt to one audience each. In your own writing, and in Section I questions about a student's draft, you often have to do the reverse: hold one argument steady and fit it to different readers. This part revises a single student argument for three audiences and then corrects six common mistaken beliefs about what audience adaptation means.
`
    },
    {
      id: 'englangw5-core',
      type: 'text' as const,
      content: `
## The Core Argument

*Student argument written for this lesson. The figures are invented for practice.*

| Element | Content |
|---|---|
| **Claim** | The district should keep each high school library open until 7 p.m. on weekdays. |
| **Evidence 1** | In a district survey, 41% of students said they have no quiet place to study at home. |
| **Evidence 2** | During a one-semester pilot at Eastview High, an average of 58 students used the library each evening, and the share of pilot users missing homework fell from 22% to 13%. |
| **Evidence 3** | Staffing the extra hours with one librarian and one aide costs about \\$36,000 per school per year. |
| **Known objections** | Cost; students out after dark; whether students will actually come |

The claim and the facts are fixed. Everything below is about **selection, order, emphasis, and diction**.

## Three Readers, Three Profiles

| | School board | Fellow students | Skeptical parents |
|---|---|---|---|
| **What they value** | Responsible spending; measurable results; avoiding liability | Freedom; time with friends; a reason to bother | Safety; supervision; their child's grades |
| **What they need before agreeing** | Cost, a plan, and proof it works | A picture of why the library would be worth their evening | Assurance about supervision and getting home |
| **Likely resistance** | "We can't afford it." | "The library is boring." | "I don't want my kid out at night." |
| **Evidence to lead with** | The pilot's homework result and the cost | Who used the pilot and what they did there | Staffing and the pilot's safety record |
| **Register** | Formal, concise, numbers up front | Plain and direct, addressed to "you" | Respectful, concrete, calm |

The profiles come before the drafting. As Lincoln's address showed, the move follows from the diagnosis.
`
    },
    {
      id: 'englangw5-versions',
      type: 'text' as const,
      content: `
## Three Versions of the Same Paragraph

### For the school board (an excerpt from a written proposal)

> Last spring's pilot at Eastview High answers the board's first question: does the program work? Among students who used the evening library, the rate of missing homework fell from 22% to 13% in one semester. Extending the program would cost about \\$36,000 per school per year, roughly the cost of one long-term substitute. We ask the board to fund a one-year expansion to two more schools, with the same measures reported back in June.

**Moves:** results first, because the board's question is "does it work?"; cost stated plainly and compared with a familiar budget line; the request scaled to a trial the board can evaluate (a qualified ask, skill 4.C).

### For fellow students (an excerpt from a school newspaper column)

> You know the problem: the kitchen table is loud, the bedroom has a phone in it, and the coffee shop wants you to buy something every hour. Last spring, about sixty Eastview students a night found another option, a library that stayed open until seven. They did homework, ran study groups for chemistry, and printed things without begging a teacher. If the board expands the program, show up the first week. Empty tables are the fastest way to lose it.

**Moves:** opens with the reader's own experience; describes what students did, not test scores; the call to action asks for the one thing peers can give, attendance; diction is plain but not slangy.

### For skeptical parents (an excerpt from a letter to the PTA newsletter)

> Many parents have asked a fair question: who is watching our children at 6:30 on a weeknight? In the Eastview pilot, a certified librarian and a trained aide were present every evening, students signed in and out, and the school reported no safety incidents during the semester. The library closes at seven, and a late bus leaves at 7:10 for students who do not have a ride. Parents of pilot students also saw homework completion improve.

**Moves:** the parents' concern is named first and called "fair" (concession without surrender); supervision and sign-out procedures lead; the academic result comes last, as a bonus rather than the main argument, because safety is what these readers need settled first.
`
    },
    {
      id: 'englangw5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why does the version for the school board end by asking for a one-year expansion to two schools rather than for every school at once?',
            options: [
              'A small trial is easier for a cautious board to approve and judge.',
              'The writer has privately decided that most schools do not need the program.',
              'District rules forbid any board from funding programs at every school.',
              'The pilot data showed that the program worked only at Eastview High.'
            ],
            correctAnswer: 0,
            explanation: 'Scaling the request to a measurable trial answers the board\'s values of responsible spending and proof, without changing the claim that libraries should stay open. Nothing suggests a private change of mind, a district rule, or data limited to one school.'
          },
          {
            question: 'In the version for fellow students, the writer describes study groups and printing instead of the homework statistic. This choice reflects the peers\' need for',
            options: [
              'proof that the program will save the district money',
              'a picture of what an evening there is like',
              'assurance that adults will supervise every room',
              'a formal case they could present to the board'
            ],
            correctAnswer: 1,
            explanation: 'Students resist with "the library is boring," so a concrete picture of how peers used the space answers that resistance. Cost and supervision are the board\'s and parents\' concerns, and the column asks students to attend, not to argue before the board.'
          },
          {
            question: 'The parents\' version places the homework result last. The most likely reason is that',
            options: [
              'the writer doubts that the homework figures are accurate',
              'the newsletter limited the length of every letter it printed',
              'parents care less about grades than school board members do',
              'these readers must have safety settled before benefits matter'
            ],
            correctAnswer: 3,
            explanation: 'The profile shows that safety is the parents\' first need, so the writer settles it before offering the academic benefit as a bonus. The writer still trusts the figure, the parents\' profile lists grades as a value, and no length rule is mentioned.'
          }
        ]
      }
    },
    {
      id: 'englangw5-fixed',
      type: 'text' as const,
      content: `
## What Changed and What Did Not

| Changed across versions | Stayed the same |
|---|---|
| Which evidence leads | The claim: libraries open until 7 p.m. |
| Order of points | Every number: 41%, 58 students, 22% to 13%, \\$36,000 |
| Which objection is answered first | The honest scope of the evidence (one school, one semester) |
| Register and diction ("we ask the board" vs. "show up the first week") | The writer's actual recommendation |
| The call to action (fund, attend, support) | |

### Where adaptation would become dishonest

- Telling parents the library is "supervised by teachers" when the staff is a librarian and an aide.
- Telling the board the pilot "proved" success district-wide when it ran at one school for one semester.
- Telling students the program is "basically a hangout" to make it sound fun.

Each of these changes a **fact** to suit a reader. The honest versions above change only emphasis and order. That line is what Part 1 called ethical adaptation, and it is also practical: a reader who catches one distorted fact stops trusting the others.
`
    },
    {
      id: 'englangw5-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The reader a text is chiefly written for is its _______ audience.

2) A reader who will also see the text, though it is not mainly addressed to them, belongs to a _______ audience.

3) Granting the parents' "fair question" before answering it is a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['primary', 'secondary', 'concession'],
        hint1: 'The first or main audience.',
        hint2: 'The second, less direct audience.',
        hint3: 'Granting a point before answering it.',
        explanation: 'Writers often address a primary audience while knowing a secondary audience will read too; granting a fair point before answering it is a concession.'
      }
    },
    {
      id: 'englangw5-misconceptions',
      type: 'text' as const,
      content: `
## Misconceptions About Writing for Audience

| Misconception | Correction | Evidence from Parts 2–4 |
|---|---|---|
| **"Adapting to a resistant audience means softening the claim."** | Adaptation changes how firmness is aimed, not whether it exists. | Washington "spurn[ed]" the anonymous advice outright while treating the officers with respect. |
| **"The more concessions, the more reasonable you sound."** | Concede what the audience already knows to be true; extra concessions only weaken the case. | Washington conceded one thing, that Congress was slow, because every officer knew it. |
| **"With a hostile reader, avoid the disputed point."** | An unspoken objection still shapes the reading. Naming it lets you answer it. | Joseph named the "wild animal" stereotype in his fourth sentence. |
| **"Being friendly means praising the audience."** | Lincoln's word was "sincere." Praise the reader can see through looks like a motive, the very problem he diagnosed. | Lincoln claimed no superiority ("spared more by the absence of appetite") rather than flattering his hearers. |
| **"Every text has one audience."** | Many texts have a primary and a secondary audience, and good writers keep both in mind. | Washington spoke to the officers, but their resolutions asked him to write to the President of Congress, so the proceedings would reach Congress too. |
| **"Audience matters only in the argument essay."** | In rhetorical analysis, explaining a choice **in light of its audience** is the core of strong commentary; in synthesis, your reader is an informed person who has seen the same sources. | Every Row B commentary sentence in Parts 2–4 links a choice to what the audience believed or needed. |

### A quick self-check for your own drafts

1. Can I name my reader's **likely resistance** in one sentence?
2. Does my first paragraph answer the need that resistance comes from?
3. Did I concede only what this reader already believes?
4. Would every fact survive being read by a different audience?
`
    },
    {
      id: 'englangw5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writing to a skeptical town council adds five concessions to every paragraph "to sound balanced." What is the main problem with this revision?',
            options: [
              'Concessions make any letter to public officials sound unsure of itself.',
              'Balanced writing is a feature of synthesis essays rather than of letters.',
              'The council will think the student is copying a model essay too closely.',
              'Concessions the council does not hold weaken the case and add no trust.'
            ],
            correctAnswer: 3,
            explanation: 'A concession earns credibility when it grants something the reader already believes; piling on concessions the reader never raised only shrinks the claim. Concessions can suit officials when chosen well, the copying worry is beside the point, and balance is not limited to synthesis essays.'
          },
          {
            question: 'Which revision of the parents\' letter changes a fact rather than an emphasis?',
            options: [
              'Moving the homework result from the last sentence to the first',
              'Calling the parents\' worry "a fair question" before answering it',
              'Saying that teachers supervise the library at night',
              'Mentioning the late bus before the sign-out procedure'
            ],
            correctAnswer: 2,
            explanation: 'The staff is a librarian and an aide, so "supervised by teachers" is false, which crosses from adaptation into distortion. Reordering points or calling a concern fair changes emphasis and tone while keeping every fact intact.'
          },
          {
            question: 'Which statement best describes the relationship between Lincoln\'s "sincere friend" principle and flattery?',
            options: [
              'Flattery is the principle\'s main technique for winning over a crowd.',
              'Flattery can create the very suspicion of motive the principle avoids.',
              'Flattery is the right choice when a writer\'s audience is sympathetic.',
              'Flattery was what Lincoln most admired in the Washingtonian speakers.'
            ],
            correctAnswer: 1,
            explanation: 'Lincoln\'s address argues that audiences tune out speakers whose motives look self-serving, and praise the reader can see through creates exactly that suspicion. He praised the Washingtonians for having no motive to suspect, not for flattering anyone.'
          }
        ]
      }
    }
  ]
};
