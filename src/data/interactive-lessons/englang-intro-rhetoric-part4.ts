export const englangIntroRhetoricPart4Data = {
  topicSlug: 'englang-intro-rhetoric',
  sections: [
    {
      id: 'englangi4-intro',
      type: 'text' as const,
      content: `
# 🗣️ Introduction to Rhetoric

**Part 4 of 7 — Reading Like the Exam: Question Families and Irony**

---

| Section |
|---------|
| 📖 How Section I Reading Questions Work |
| A Five-Step Reading Process |
| Worked Passage: Twain's "Advice to Youth" |
| Reading Irony: When the Words Mean the Opposite |

> 🔑 **Key Concept:** Section I reading questions are not trivia about the passage. Almost every one asks you to explain a **choice**: its purpose, its function in the line of reasoning, or its effect on tone. Knowing the question families tells you what kind of evidence to look for.
`
    },
    {
      id: 'englangi4-families',
      type: 'text' as const,
      content: `
## 📖 How Section I Reading Questions Work

Section I has 45 multiple-choice questions in 1 hour and counts for 45% of the score. Some of them are **reading** questions on nonfiction passages; the rest are **writing** questions that ask how to revise a draft. Reading questions fall into families that match the four big ideas.

| Family | Typical stems | What to look for |
|---|---|---|
| **Rhetorical situation** | "The writer's primary purpose in the passage is to..." / "The passage is most likely intended for an audience that..." | The headnote, the opening, pronouns ("you," "we"), what the writer assumes the audience knows |
| **Claims and evidence** | "The writer's claim in lines... is supported primarily by..." / "The example of... serves to..." | What the sentence is offered as proof of |
| **Reasoning and organization** | "The function of the second paragraph is to..." / "Which best describes the relationship between paragraphs 2 and 3?" | Shifts, turns ("But," "Yet"), how one part sets up the next |
| **Style** | "The writer's use of the word... primarily serves to..." / "The tone of the passage can best be described as..." | Connotation, sentence length and structure, repetition, figurative language |

### Function, Not Content

A **function** question asks what a part of the text **does**, not what it **says**. Compare:

| Content answer (usually wrong) | Function answer (usually right) |
|---|---|
| "describes a factory worker's last day" | "provides a concrete example that gives a human face to the statistics that follow" |
| "lists three rules for children" | "establishes the conventional advice that the speaker will go on to mock" |

> 💡 Function answers often begin with verbs like *introduces, illustrates, qualifies, concedes, transitions, undercuts* or *reinforces*.
`
    },
    {
      id: 'englangi4-process',
      type: 'text' as const,
      content: `
## A Five-Step Reading Process

1. **Read the headnote.** The short italic introduction gives the writer, date and occasion. It is your first evidence about the rhetorical situation.
2. **Read for purpose first.** After the first pass, write a six-word summary of what the writer wants the audience to think or do.
3. **Mark the turns.** Words like *but, yet, however, rather* and shifts in pronoun or tone often signal the most tested moments.
4. **Predict before reading options.** Answer the question in your own words, then find the option that matches.
5. **Eliminate by grain.** Wrong options are often true of a different part of the passage, too broad, too narrow, or too extreme in tone.

## Worked Passage: Twain's "Advice to Youth"

*Headnote: Mark Twain wrote the following talk, "Advice to Youth," around 1882. It was published after his death.*

> Being told I would be expected to talk here, I inquired what sort of a talk I ought to make. They said it should be something suitable to youth—something didactic, instructive, or something in the nature of good advice. Very well. I have a few things in my mind which I have often longed to say for the instruction of the young; for it is in one's tender early years that such things will best take root and be most enduring and most valuable. First, then. I will say to you my young friends—and I say it beseechingly, urgingly—
>
> Always obey your parents, when they are present. This is the best policy in the long run, because if you don't, they will make you. Most parents think they know better than you do, and you can generally make more by humoring that superstition than you can by acting on your own better judgment.
>
> Be respectful to your superiors, if you have any, also to strangers, and sometimes to others.

**Step 2 applied:** Purpose in six words: *mock solemn advice by twisting it.*

**Step 3 applied:** The turns are not marked by "but." They hide in the **qualifiers** that end each maxim: "when they are present," "if you have any," "and sometimes to others."
`
    },
    {
      id: 'englangi4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Apply the Process to Twain** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the first paragraph, the speaker\'s report of what "they said" the talk should be primarily serves to',
            options: [
              'set up conventional expectations that the talk will then subvert',
              'show that the speaker resents being asked to address children',
              'establish the speaker\'s credentials as an experienced teacher',
              'introduce a list of sources the speaker will quote later'
            ],
            correctAnswer: 0,
            explanation: 'The request for something "didactic, instructive" describes the solemn advice an audience would expect, which the maxims that follow then twist. Nothing in the paragraph claims teaching credentials or promises sources, and the tone is playful rather than resentful.'
          },
          {
            question: 'The phrase "when they are present" functions primarily to',
            options: [
              'limit a moral rule so that it depends only on being watched',
              'acknowledge that some parents are absent from their children\'s lives',
              'clarify the conditions under which parents deserve obedience',
              'introduce a serious exception the speaker will defend later'
            ],
            correctAnswer: 0,
            explanation: 'The added clause turns obedience from a duty into a strategy for avoiding punishment, which is the joke. The speaker never develops a serious argument about absent parents or about when obedience is deserved.'
          }
        ]
      }
    },
    {
      id: 'englangi4-irony',
      type: 'text' as const,
      content: `
## Reading Irony: When the Words Mean the Opposite

**Verbal irony** is saying one thing while meaning something different, often the opposite. Twain's talk works by keeping the **form** of moral advice (imperatives, "best policy," "beseechingly, urgingly") while emptying out its **content**.

| Line | Literal form | What it actually does |
|---|---|---|
| "I say it beseechingly, urgingly" | Earnest emphasis | Inflates the build-up so the deflating maxim lands harder |
| "Always obey your parents, when they are present." | A standard moral rule | The qualifier reveals that obedience is about getting caught |
| "humoring that superstition" | Practical advice | Recasts parents' authority as an irrational belief |
| "if you have any... and sometimes to others" | Polite qualifications | Each addition shrinks the rule until it means almost nothing |

### Why Irony Shows Up on the Exam

Irony tests whether you can separate **what a text says** from **what the writer means**. Students who read literally choose options like "The speaker urges young people to obey their parents." Students who read rhetorically see that the target of the satire is the **genre of pious advice** and the adults who dispense it.

> ⚠️ An ironic text still has a serious purpose. Twain is not simply being silly; he is questioning advice that values appearances over genuine judgment.

> 🔑 **AP Connection:** Tone questions on ironic passages often hinge on a pair of words like "mock-serious" or "wryly skeptical." Look for a tone label that captures both the surface (solemn) and the meaning underneath (amused doubt).
`
    },
    {
      id: 'englangi4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Question Family** 🔍

Choose the big idea each Section I stem is testing.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The function of the third paragraph is to..." ___',
            options: ['rhetorical situation', 'claims and evidence', 'reasoning and organization', 'style']
          },
          {
            label: '"The passage is most likely intended for an audience that..." ___',
            options: ['rhetorical situation', 'claims and evidence', 'reasoning and organization', 'style']
          },
          {
            label: '"The writer\'s use of the word \'superstition\' primarily serves to..." ___',
            options: ['rhetorical situation', 'claims and evidence', 'reasoning and organization', 'style']
          },
          {
            label: '"The writer\'s claim in paragraph 2 is supported primarily by..." ___',
            options: ['rhetorical situation', 'claims and evidence', 'reasoning and organization', 'style']
          }
        ],
        correctAnswers: ['reasoning and organization', 'rhetorical situation', 'style', 'claims and evidence'],
        hint1: 'A question about what a paragraph does in the sequence is about organization.',
        hint2: 'Questions about who the text is for concern the situation.',
        hint3: 'A single word\'s effect is a matter of diction; support for a claim is evidence.',
        explanation: 'Paragraph function belongs to reasoning and organization. Intended audience belongs to the rhetorical situation. The effect of one word is style (diction). What supports a claim is claims and evidence.'
      }
    },
    {
      id: 'englangi4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions on the Passage** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The speaker\'s attitude toward conventional advice for the young is best described as',
            options: [
              'earnest approval',
              'amused skepticism',
              'bitter contempt',
              'anxious uncertainty'
            ],
            correctAnswer: 1,
            explanation: 'The speaker keeps the outward form of advice while comically undercutting it, which signals amused doubt. The tone is too light for contempt, and nothing in it is earnest approval or anxiety.'
          },
          {
            question: 'In the second paragraph, the word "superstition" primarily serves to',
            options: [
              'recast parents\' confidence in their wisdom as an unfounded belief',
              'suggest that parents rely on religious teaching to raise children',
              'praise children for rejecting old-fashioned habits of thought',
              'warn that disobedient children will suffer bad luck as a result'
            ],
            correctAnswer: 0,
            explanation: 'Calling parents\' belief that they "know better" a superstition labels it irrational, so the advice to humor it becomes a cynical tactic. The word is used figuratively here, not to describe religion or bad luck.'
          },
          {
            question: 'Which of the following best describes the structure of the sentence "Be respectful to your superiors, if you have any, also to strangers, and sometimes to others"?',
            options: [
              'A rule that grows broader with each phrase until it covers everyone',
              'A rule that each added phrase weakens until little of it is left',
              'A rule that is stated and then defended with a short example',
              'A rule that contrasts the duties owed to superiors and strangers'
            ],
            correctAnswer: 1,
            explanation: 'The qualifiers "if you have any" and "sometimes" chip away at the command, so the sentence collapses as it goes. It does not expand to everyone, offer an example or contrast two groups.'
          }
        ]
      }
    }
  ]
}
