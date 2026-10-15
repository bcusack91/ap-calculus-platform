export const englangClaimsEvidenceReadingPart6Data = {
  topicSlug: 'englang-claims-evidence-reading',
  sections: [
    {
      id: 'englangc6-intro',
      type: 'text' as const,
      content: `
# 📖 Claims and Evidence in Reading

**Part 6 of 7 — Exam Practice: A Du Bois Passage Set and a Scored Paragraph**

---

| Section |
|---------|
| 📖 The Passage: Du Bois, "Of Mr. Booker T. Washington and Others," 1903 |
| Section I Questions, Set 1 |
| Worked Elimination: A Qualification Question |
| Section I Questions, Set 2 |
| From Reading to Writing: A Scored Rhetorical Analysis Paragraph |

> 🔑 **Key Concept:** Section I gives you 45 questions in 60 minutes across five sets, with 23 to 25 reading questions and four answer choices each. Reading questions about claims and evidence ask you to find the thesis, explain what a piece of evidence supports, and notice how claims are qualified. The same reading skills supply the commentary for Question 2, the rhetorical analysis essay.
`
    },
    {
      id: 'englangc6-passage',
      type: 'text' as const,
      content: `
## 📖 The Passage: Du Bois, "Of Mr. Booker T. Washington and Others," 1903

**Situation:** W. E. B. Du Bois, a Harvard-trained historian and sociologist, published this essay as the third chapter of *The Souls of Black Folk* (1903). Booker T. Washington, founder of the Tuskegee Institute, was then the most influential Black leader in the United States. In an 1895 address in Atlanta he had urged Black Southerners to focus on industrial training and economic progress rather than on political agitation. Du Bois's audience included white and Black readers, many of whom admired Washington.

**A note on language:** Du Bois uses the word *Negro*, standard in 1903, and British spellings such as *programme* and *criticise*. The passage is quoted as published.

> **[1]** Easily the most striking thing in the history of the American Negro since 1876 is the ascendancy of Mr. Booker T. Washington. It began at the time when war memories and ideals were rapidly passing; a day of astonishing commercial development was dawning; a sense of doubt and hesitation overtook the freedmen's sons, -- then it was that his leading began.
>
> **[2]** It startled the nation to hear a Negro advocating such a programme after many decades of bitter complaint; it startled and won the applause of the South, it interested and won the admiration of the North; and after a confused murmur of protest, it silenced if it did not convert the Negroes themselves.
>
> **[3]** One hesitates, therefore, to criticise a life which, beginning with so little, has done so much. And yet the time is come when one may speak in all sincerity and utter courtesy of the mistakes and shortcomings of Mr. Washington's career, as well as of his triumphs, without being thought captious or envious, and without forgetting that it is easier to do ill than well in the world.
>
> **[4]** Mr. Washington distinctly asks that black people give up, at least for the present, three things, -- First, political power, Second, insistence on civil rights, Third, higher education of Negro youth, -- and concentrate all their energies on industrial education, the accumulation of wealth, and the conciliation of the South. . . . As a result of this tender of the palm-branch, what has been the return? In these years there have occurred: 1. The disfranchisement of the Negro. 2. The legal creation of a distinct status of civil inferiority for the Negro. 3. The steady withdrawal of aid from institutions for the higher training of the Negro. These movements are not, to be sure, direct results of Mr. Washington's teachings; but his propaganda has, without a shadow of doubt, helped their speedier accomplishment.
>
> **[5]** The question then comes: Is it possible, and probable, that nine millions of men can make effective progress in economic lines if they are deprived of political rights, made a servile caste, and allowed only the most meagre chance for developing their exceptional men? If history and reason give any distinct answer to these questions, it is an emphatic No.
>
> — W. E. B. Du Bois, *The Souls of Black Folk*, 1903

**Glossary:** *captious*, inclined to find fault over trifles; *tender of the palm-branch*, an offer of peace; *disfranchisement*, removal of the right to vote.
`
    },
    {
      id: 'englangc6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Section I Questions, Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In paragraph 2, the sequence "it startled the nation... won the applause of the South... won the admiration of the North... silenced if it did not convert the Negroes themselves" primarily serves to',
            options: [
              'show varied reactions, ending with the least complete acceptance',
              'prove that every region and group of Americans supported the program equally',
              'suggest that Washington deliberately misled his Northern admirers',
              'show that Black Americans were the first group to embrace the program'
            ],
            correctAnswer: 0,
            explanation: 'Each clause names a group and its response, and the last one, "silenced if it did not convert," marks Black Americans\' acceptance as the least complete. The sequence shows differences rather than equal support, it accuses Washington of no deception, and it places Black acceptance last.'
          },
          {
            question: 'The first sentence of paragraph 3 ("One hesitates, therefore...") functions as',
            options: [
              'the thesis',
              'a concession',
              'an anecdote',
              'a definition'
            ],
            correctAnswer: 1,
            explanation: 'Du Bois grants Washington\'s achievement before "And yet" introduces the criticism, which is the work of a concession. The sentence does not state his overall position, tell a story or define a term.'
          },
          {
            question: 'The phrase "without being thought captious or envious" is best understood as',
            options: [
              'an admission that the writer\'s criticism springs from personal rivalry',
              'a reply in advance to readers who might question the writer\'s motives',
              'a description of how Washington\'s supporters had treated other critics',
              'a claim that Washington\'s career contains no genuine shortcomings'
            ],
            correctAnswer: 1,
            explanation: 'Du Bois anticipates that criticizing an admired leader will be dismissed as petty or jealous, and he answers that charge before it is made. He denies rivalry rather than admitting it, describes no one else\'s treatment, and goes on to name shortcomings.'
          },
          {
            question: 'The numbered items in paragraph 4 serve mainly as evidence that',
            options: [
              'Washington personally campaigned for disfranchisement laws',
              'industrial education had failed to produce any economic gains',
              'conciliation had been met with losses rather than rewards',
              'higher education was the most important of the three demands'
            ],
            correctAnswer: 2,
            explanation: 'Du Bois asks what "the return" for the "palm-branch" has been and answers with three losses, so the list supports the claim that conciliation was not rewarded. He explicitly denies that Washington caused these losses directly, and he makes no claim about economic gains or about ranking the three demands.'
          }
        ]
      }
    },
    {
      id: 'englangc6-walkthrough',
      type: 'text' as const,
      content: `
## Worked Elimination: A Qualification Question

**Question:** In the final sentence of paragraph 4, the writer qualifies his claim about Washington's responsibility by

| Choice | Reasoning | Verdict |
|---|---|---|
| asserting that Washington's teachings directly caused all three losses | The sentence says the opposite: "not, to be sure, direct results" | Eliminate: reversed |
| distinguishing between causing the losses and hastening them | "not... direct results" denies direct cause; "helped their speedier accomplishment" claims a contributing role | **Keep** |
| conceding that Washington bears no responsibility at all for the losses | "without a shadow of doubt, helped" assigns real responsibility | Eliminate: too strong a concession |
| shifting the blame for the losses entirely to Northern readers | No Northern readers are mentioned in the sentence | Eliminate: not in the text |

### What the Walk-Through Shows

1. **Read the whole sentence.** The first clause alone ("not... direct results") would make the third choice look right. The "but" clause reverses its force.
2. **Name the type of qualification.** This is a limit on a **causal** claim: Du Bois shrinks "Washington caused this" to "Washington's message sped it along." The smaller claim is easier to defend, and the phrase "without a shadow of doubt" shows he is fully committed to the smaller version.
3. **Match the strength.** The correct choice keeps both halves: a denial and an assertion.

> 🔑 **AP Connection:** Writers often qualify a claim precisely where an opponent would attack it. Du Bois's critics would object that Washington did not pass disfranchisement laws, and the qualification answers that objection before it can be raised.
`
    },
    {
      id: 'englangc6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Section I Questions, Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The question in paragraph 5 ("Is it possible, and probable...") primarily functions to',
            options: [
              'admit uncertainty',
              'invite a fixed answer',
              'shift the topic',
              'quote an opponent'
            ],
            correctAnswer: 1,
            explanation: 'Du Bois frames the question so that "history and reason" can give only one answer, which he then supplies: "an emphatic No." He is not uncertain, he stays on Washington\'s program, and the question is his own.'
          },
          {
            question: 'Which statement best expresses the central claim of the passage?',
            options: [
              'Washington\'s rise is the most striking event in Black American history since 1876.',
              'Black Americans cannot advance economically if they give up their rights and schooling.',
              'Washington should be honored for a career that began with little and accomplished a great deal.',
              'The South welcomed Washington\'s program because it promised peace between the races.'
            ],
            correctAnswer: 1,
            explanation: 'The passage builds toward the "emphatic No": economic progress is not possible without the three things Washington asked Black Americans to give up. Washington\'s ascendancy and achievements are context and concession, and the South\'s welcome is one detail of the reception.'
          },
          {
            question: 'Paragraph 1\'s description of the period, "war memories and ideals were rapidly passing" and "a day of astonishing commercial development was dawning," contributes to the argument chiefly by',
            options: [
              'explaining why a program focused on wealth and conciliation found ready listeners',
              'proving that Washington\'s program caused the decline of Civil War ideals',
              'praising the commercial growth of the period as the true source of Black progress',
              'establishing that the writer witnessed the events he describes'
            ],
            correctAnswer: 0,
            explanation: 'A nation forgetting the war\'s ideals and absorbed in commerce was ready to welcome a program of industry and accommodation, which helps explain Washington\'s rise. Du Bois does not blame Washington for the fading of those ideals, credit commerce with progress, or claim to be an eyewitness.'
          }
        ]
      }
    },
    {
      id: 'englangc6-model',
      type: 'text' as const,
      content: `
## From Reading to Writing: A Scored Rhetorical Analysis Paragraph

**Prompt (Question 2 style):** Read the passage carefully. Write an essay that analyzes the rhetorical choices Du Bois makes to criticize Washington's program to readers who admire Washington.

**Student thesis (Row A, 1 point):** *Writing for readers who revere Washington, Du Bois first honors his rise and promises a courteous critique, then lets the record of what conciliation has cost speak for him, so that his final "emphatic No" sounds less like an attack on a man than a conclusion forced by history.*

The thesis earns Row A because it is **defensible**, it **analyzes choices** rather than summarizing, and it names the **purpose** and **audience** the choices serve. It also previews the line of reasoning: honor, then evidence, then conclusion.

### Student Model: Row B, 4 level

> **(1)** Having earned his readers' patience, Du Bois lets the evidence carry the criticism by turning a question into a ledger. **(2)** He asks what "the return" has been for Washington's "tender of the palm-branch," and the answer arrives as a numbered list: disfranchisement, "a distinct status of civil inferiority," and "the steady withdrawal of aid" from higher education. **(3)** The image of the palm branch casts Washington's program as a peace offering, so the list reads as the other side's reply, and each item takes back one of the very things Washington asked Black Americans to give up: political power, civil rights and higher education. **(4)** Numbering the losses makes them look like entries in an account rather than complaints, which suits readers who might dismiss an angry critic but cannot dismiss a record. **(5)** Du Bois then refuses to overstate his case, admitting these were "not, to be sure, direct results" of Washington's teaching, and that restraint is strategic: by conceding what an admirer would object to, he makes his remaining charge, that the program "helped their speedier accomplishment," harder to reject. **(6)** The ledger leaves readers to draw the conclusion Du Bois will soon state outright: conciliation has been answered with loss.

| Sentence | Role | Why it earns credit |
|---|---|---|
| 1 | Claim | Names a choice (presenting evidence as a ledger) and links it to the thesis's "record" |
| 2 | Specific evidence | Brief, accurate quotations, embedded in the student's own sentence |
| 3 | Commentary | Explains how the palm-branch image and the matching list work together |
| 4 | Commentary tied to audience | Explains **why** this form suits readers who admire Washington |
| 5 | Evidence and commentary | Analyzes the qualification as a strategic choice, not a weakness |
| 6 | Link to line of reasoning | Connects the paragraph to the "emphatic No" the thesis promised |

### What Row B Rewards Here

The paragraph does not stop at naming devices ("Du Bois uses a list"). Every piece of evidence is followed by an explanation of what it does **for this audience**. That consistent commentary is the difference between a 3 and a 4.

### Toward Row C

The rhetorical analysis sophistication point rewards a **complex understanding of the rhetorical situation**, for example by explaining the significance of the writer's choices given the situation, or by exploring tensions in the passage, and it must be evident across the essay. This paragraph points that way: it recognizes the tension between Du Bois's respect for Washington and his rejection of Washington's program, and it reads the qualification in sentence 5 as a response to the audience's likely objection. An essay that sustained this awareness throughout would be a strong candidate for the point.
`
    },
    {
      id: 'englangc6-quiz3',
      type: 'multiple-choice' as const,
      content: `
**Rubric Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which revision of the student\'s sentence 4 would most weaken the paragraph\'s Row B performance?',
            options: [
              'The numbered list gives the passage a clear organization.',
              'The numbers make each loss feel like a fact on record.',
              'Numbering the losses lets them read as an account, not a grievance.',
              'The list form suits readers who distrust angry critics.'
            ],
            correctAnswer: 0,
            explanation: 'Saying the list gives the passage "a clear organization" names the device without explaining what it does for the audience or the argument. The other versions keep the link between the numbered form and the reader\'s response.'
          },
          {
            question: 'Why does the student\'s thesis earn the Row A point while "Du Bois uses concession, a list and a rhetorical question in his essay" would not?',
            options: [
              'It mentions more devices than the alternative thesis mentions.',
              'It makes a defensible claim about how choices serve a purpose.',
              'It quotes the passage directly within the thesis statement.',
              'It is longer and so gives the reader a fuller preview.'
            ],
            correctAnswer: 1,
            explanation: 'A rhetorical analysis thesis must analyze the writer\'s choices, and the student\'s thesis explains how the choices serve Du Bois\'s purpose with his audience. The alternative only lists devices, and Row A does not reward quotation, the number of devices or length.'
          }
        ]
      }
    }
  ]
};
