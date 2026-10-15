export const englangReasoningOrgWritingPart7Data = {
  topicSlug: 'englang-reasoning-org-writing',
  sections: [
    {
      id: 'englangr7-intro',
      type: 'text' as const,
      content: `
# 🧱 Reasoning and Organization in Writing

**Part 7 of 7 — Review: Planning, Developing and Connecting an Argument**

---

| Section |
|---------|
| 📖 Skills Map and Key Terms |
| A Revision Pass You Can Run in Three Minutes |
| Mixed Practice: One Draft, Every Skill |

> 🔑 **Key Concept:** The three writing skills in this unit work as one process. You **plan** a line of reasoning in which each claim needs the one before it (6.A). You **develop** each claim with the method its logic calls for (6.C). You **connect** the claims so the reader sees the logic without having to supply it (6.B). Commentary runs through all three: inside each paragraph it explains the evidence, and at each paragraph's end it carries the line forward.
`
    },
    {
      id: 'englangr7-map',
      type: 'text' as const,
      content: `
## 📖 Skills Map and Key Terms

| Skill | The question to ask yourself | Tools from this unit | Where it was taught |
|---|---|---|---|
| **6.A** Line of reasoning and commentary | Does each claim depend on or build on the one before? | "Because, but, so" check; four orders; exit sentences | Parts 2 and 5 |
| **6.B** Transitional elements | Does every link tell the truth about how two ideas relate? | Old before new; this + noun; bridge topic sentences | Part 4 |
| **6.C** Methods of development | Does the paragraph's method fit the logic of its claim? | Claim-shape table: definition, cause and effect, comparison, narration, division, exemplification | Part 3 |

### Key terms

| Term | Meaning |
|---|---|
| **Line of reasoning** | A sequence of claims in which each one does work the next needs |
| **Building (climactic) order** | Claims arranged so the most important comes last, as in Washington's list ending on "that very liberty" |
| **Dependency order** | A claim is placed after the claim it relies on |
| **Method of development** | The shape of thinking in a paragraph (definition, comparison, narration, and so on) |
| **Bridge topic sentence** | A paragraph opener that names the previous idea, the new idea, and their relationship |
| **Old before new** | Each sentence begins with known information and ends with new information |
| **Exit sentence** | The final commentary sentence of a paragraph, which states what it established and points ahead |
| **Tested thesis** | A structure in which each paragraph puts the thesis under pressure and it survives in sharper form, one route toward Row C |

### The mentor texts, in one line each

- **Washington, Farewell Address (1796):** builds to the value his audience prizes most, and announces his turns ("Let me now take a more comprehensive view").
- **Emerson, "Self-Reliance" (1841):** defines by holding back the term ("— that is genius"), and offers bold claims, like "To be great is to be misunderstood," that a strong essay can test rather than simply accept.
- **Franklin, *Autobiography*:** narration that argues (the Whitefield collection), and a writing drill, scrambling notes and restoring their order, that he says was meant "to teach me method in the arrangement of thoughts."
`
    },
    {
      id: 'englangr7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student plans three claims that can be presented in any order without loss. Which skill most needs work?',
            options: [
              'Building a line of reasoning',
              'Choosing a method of development for each claim',
              'Selecting transitions that tell the truth',
              'Writing a thesis that is defensible'
            ],
            correctAnswer: 0,
            explanation: 'Claims that can be freely reordered are a list, so the plan lacks a line of reasoning (6.A). Methods and transitions develop and connect claims that are already linked, and the problem described is not about whether the thesis is defensible.'
          },
          {
            question: 'Which writer\'s move is the best model for a student essay\'s bridge topic sentence?',
            options: [
              'Emerson\'s bold, unconnected aphorisms',
              'Washington announcing a wider view',
              'Franklin listing his thirteen virtues',
              'Emerson\'s list of misunderstood men'
            ],
            correctAnswer: 1,
            explanation: 'Washington\'s "Let me now take a more comprehensive view" tells listeners how the next section relates to the last, which is what a bridge does. Emerson\'s aphorisms leave links unstated, and the two lists are evidence rather than transitions.'
          },
          {
            question: 'A paragraph claims that "school uniforms reduce bullying because they hide differences in family income." Which development best fits the logic of this claim?',
            options: [
              'A definition of bullying followed by examples of its forms',
              'A step-by-step account of how hiding wealth gaps cuts one cause of bullying',
              'A story about a student\'s first day wearing a new uniform',
              'A division of uniform policies into strict and relaxed kinds'
            ],
            correctAnswer: 1,
            explanation: 'The claim is causal, so the paragraph should trace each link from hidden income differences to less bullying. A definition, a first-day story, or a classification of policies would not show the cause working.'
          }
        ]
      }
    },
    {
      id: 'englangr7-pass',
      type: 'text' as const,
      content: `
## A Revision Pass You Can Run in Three Minutes

Save the last few minutes of each essay for a revision pass. You will not have time to rewrite, but you can fix the places where a reader loses the line.

| Minute | Check | Quick fix |
|---|---|---|
| **1** | Read only the first sentence of each body paragraph. Does each name how it relates to the previous one? | Add a bridge clause: "If X is true, then..." / "The same pressure that... also..." |
| **2** | Find every bare "This" or "It" that starts a sentence after evidence. | Add a noun: "This contrast," "This admission" |
| **3** | Read the last sentence of each body paragraph. Does it explain, or merely restate? | Add one clause that states what the paragraph established |

### Before the essay: a planning checklist

\`\`\`
[ ] Position stated in one sentence, with a qualification if I mean one
[ ] Claims written as fragments, each with "but" / "so" / "because" to the next
[ ] Order chosen on purpose: building, dependency, concession first, narrow to broad
[ ] One method named for each claim: narration, comparison, cause, definition...
[ ] One sentence of planned commentary per claim
[ ] (Synthesis) at least three sources assigned to specific claims
\`\`\`

The checklist takes about four minutes. It is the reason the other thirty-five can go to commentary instead of deciding what to say next.
`
    },
    {
      id: 'englangr7-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The skill number for using transitional elements to guide the reader is 6._______.

2) A plan in which claim 2 can be argued only after claim 1 is accepted uses _______ order.

3) A paragraph opener that names the previous idea and the new idea and states how they relate is a _______ topic sentence.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['B', 'dependency', 'bridge'],
        hint1: '6.A is reasoning, 6.C is methods.',
        hint2: 'One claim depends on another.',
        hint3: 'It spans the gap between two paragraphs.',
        explanation: 'Skill 6.B covers transitional elements; dependency order puts a claim after the claim it relies on; and a bridge topic sentence links the previous paragraph to the new one.'
      }
    },
    {
      id: 'englangr7-mixed',
      type: 'text' as const,
      content: `
## Mixed Practice: One Draft, Every Skill

*The following is a draft of a body paragraph a student wrote for an argument essay. (The draft is invented for practice.)*

**Prompt (AP style, not released):** In his Farewell Address (1796), Washington urged Americans to "promote then, as an object of primary importance, institutions for the general diffusion of knowledge." Argue your position on whether public libraries remain such an institution today.

> *(1) Another reason is that libraries are important. (2) Many people use libraries. (3) My town's library lends laptops and hotspots to anyone with a card, and last year it reported that its hotspots were checked out almost every day of the year. (4) However, people without home internet can apply for jobs and finish homework. (5) This shows that libraries matter.*

| Sentence | Problem | Skill |
|---|---|---|
| (1) | "Another reason" names no relationship, and "important" makes no arguable claim | 6.A, 6.B |
| (2) | General; adds nothing the specific evidence in (3) does not | 6.C |
| (4) | "However" claims a contrast; the logic is consequence | 6.B |
| (5) | Bare "This," and commentary that restates instead of explaining | 6.A |

### Revised paragraph

> *(1) If Washington valued institutions that spread knowledge, the library's most important collection today may be its connection to the internet rather than its books. (2) My town's library lends laptops and hotspots to anyone with a card, and last year it reported that its hotspots were checked out almost every day of the year. (3) **That demand** comes from residents for whom the library is the only route online, so a lent hotspot becomes the means of applying for a job or finishing an assignment. (4) **In this sense**, the library still does what Washington asked: it diffuses knowledge to people who could not otherwise reach it, only now the knowledge travels through a signal instead of a shelf.*
`
    },
    {
      id: 'englangr7-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Use the library draft and revision above.
      `,
      exercise: {
        questions: [
          {
            question: 'Which change between the draft and the revision does the most to create a line of reasoning?',
            options: [
              'The revision cuts the general sentence "Many people use libraries"',
              'The revision\'s opening claim ties the library to Washington\'s idea',
              'The revision adds the bold phrase "That demand" to sentence 3',
              'The revision keeps the same evidence about laptops and hotspots'
            ],
            correctAnswer: 1,
            explanation: 'The new opening makes an arguable claim connected to the prompt\'s source, which the evidence and commentary then develop. Cutting a general sentence and adding a named antecedent help, but they serve the claim; keeping the evidence changes nothing.'
          },
          {
            question: 'In the draft, which revision of sentence 4 best corrects its transition?',
            options: [
              'However, without home internet, people can apply for jobs.',
              'As a result, people without home internet can apply for jobs.',
              'For example, people without home internet can apply for jobs.',
              'Similarly, people without home internet can apply for jobs.'
            ],
            correctAnswer: 1,
            explanation: 'Lending hotspots makes job applications possible for people without internet, so the relationship is cause and effect. "However" claims a contrast, "For example" an instance, and "Similarly" a likeness that the sentences do not have.'
          },
          {
            question: 'Revised sentence 4 begins "In this sense." The phrase works mainly to',
            options: [
              'apply the paragraph\'s evidence to the claim in the prompt',
              'introduce a counterargument about public libraries',
              'signal a shift from libraries to the internet in general',
              'add a final statistic about the use of hotspots'
            ],
            correctAnswer: 0,
            explanation: 'The phrase tells the reader that the commentary is about to interpret the hotspot evidence in light of Washington\'s call to diffuse knowledge. No counterargument or statistic follows, and the paragraph stays focused on libraries.'
          },
          {
            question: 'Which method of development does the revised paragraph mainly use?',
            options: [
              'Definition of a library',
              'Narration of a visit',
              'Cause and effect',
              'Division into types'
            ],
            correctAnswer: 2,
            explanation: 'The paragraph traces how lending hotspots leads to job applications and finished assignments, which is cause and effect. It neither defines a library, tells the story of a visit, nor sorts libraries into types.'
          }
        ]
      }
    }
  ]
}
