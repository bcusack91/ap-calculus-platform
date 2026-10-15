export const englangReasoningOrgWritingPart4Data = {
  topicSlug: 'englang-reasoning-org-writing',
  sections: [
    {
      id: 'englangr4-intro',
      type: 'text' as const,
      content: `
# 🧱 Reasoning and Organization in Writing

**Part 4 of 7 — Transitions and Coherence**

---

| Section |
|---------|
| 📖 Coherence Inside the Paragraph: Old Before New |
| Bridges Between Paragraphs |
| Revising a Draft for Coherence |

> 🔑 **Key Concept:** Skill **6.B** asks you to *use transitional elements to guide the reader through the line of reasoning*. A transition is not decoration; it is a **claim about how two ideas relate**. "However" claims a contrast, "therefore" claims a consequence, "for example" claims that what follows is an instance. If the claim is false, the transition misleads. Part 1 listed transition words by relationship; this part is about the other tools of coherence (repeated terms, old-before-new order, bridge sentences) and about choosing the transition that tells the truth.
`
    },
    {
      id: 'englangr4-oldnew',
      type: 'text' as const,
      content: `
## 📖 Coherence Inside the Paragraph: Old Before New

Readers follow a paragraph most easily when each sentence **begins with something they already know** and **ends with something new**. The new idea at the end of one sentence becomes the familiar idea at the start of the next.

### Two versions of the same three sentences

> **Hard to follow:** *Franklin kept a small book with a page for each of thirteen virtues. Seeing his faults on paper was humbling. A record that makes failure visible can discourage a learner, many psychologists suggest.*

> **Coherent:** *Franklin kept a small book with a page for each of thirteen virtues. **That book** showed him that he had more faults than he had imagined. **Faults made visible** can discourage a learner, but they also give the learner something specific to fix.*

| Tool | Where it appears in the coherent version |
|---|---|
| **This/that + noun** ("That book") | Points back to the previous sentence without a vague bare "this" |
| **Repeated key term** ("faults") | The new idea of sentence 2 becomes the subject of sentence 3 |
| **Old-before-new order** | Each sentence opens on known information and ends on new information |
| **A logical transition** ("but") | Marks the turn from the cost of the record to its benefit |

### The bare "this" problem

Writers often start a sentence with "This shows..." after a long quotation. "This" could mean the quotation, the writer's choice, or the whole paragraph. Name it: **"This contrast shows..."**, **"This admission shows..."** Naming the antecedent forces you to decide what your commentary is about, which also improves the commentary.

### Mentor contrast: Emerson and Washington

Emerson often sets bold sentences side by side with few connecting words ("Trust thyself: every heart vibrates to that iron string."), leaving readers to supply the links. Washington, addressing a whole nation, announces his turns: "Let me now take a more comprehensive view, and warn you in the most solemn manner against the baneful effects of the spirit of party generally." That sentence tells listeners that the argument is **widening**, from parties built on geography to party spirit in general, before it widens. On a timed essay, write like Washington: an AP reader moving quickly through your essay should never have to supply the link.
`
    },
    {
      id: 'englangr4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the coherent version of the Franklin sentences, what is the main purpose of opening the second sentence with "That book"?',
            options: [
              'To link the sentence to an idea the reader has just met',
              'To vary the length of the sentences in the paragraph',
              'To introduce a new piece of evidence from the Autobiography',
              'To show that the writer has read the Autobiography carefully'
            ],
            correctAnswer: 0,
            explanation: 'Opening on something the reader already knows ties the new sentence to the one before it. The phrase does not change sentence length in any meaningful way, adds no new evidence, and is not there to display the writer\'s reading.'
          },
          {
            question: 'Washington\'s sentence beginning "Let me now take a more comprehensive view" functions as a transition mainly by',
            options: [
              'conceding that his earlier warnings went too far',
              'signaling that the warning is about to broaden',
              'summarizing the benefits of union listed earlier',
              'shifting the address from domestic to foreign affairs'
            ],
            correctAnswer: 1,
            explanation: '"More comprehensive" and "generally" tell listeners that the warning is moving from parties based on geography to party spirit as a whole. The sentence concedes nothing, does not summarize the benefits of union, and stays with domestic politics.'
          }
        ]
      }
    },
    {
      id: 'englangr4-bridges',
      type: 'text' as const,
      content: `
## Bridges Between Paragraphs

The most important transitions in an essay are the **first sentences of body paragraphs**. A bridge topic sentence names the idea just finished and the idea about to begin, and states how they relate.

| Weak opener | Why it fails | Bridge opener (student model) |
|---|---|---|
| "Another reason is that promises matter." | "Another" says only that a second item is coming | "If changing an opinion improves judgment, changing a promise does the opposite: it destroys the trust that made the promise worth having." |
| "Secondly, tracking can be bad." | Announces a number, not a relationship | "The same visibility that keeps a runner going can also turn a bad week into a verdict." |
| "In conclusion, consistency is complicated." | Restates without advancing | "The difference, then, is not between consistency and change but between consistency kept for oneself and consistency kept for others." |

### A test for every body-paragraph opener

Cover the previous paragraph. Could your opener begin **any** paragraph in **any** essay on this topic? If yes ("Another reason is..."), it is not a bridge. A bridge could only follow the paragraph it follows.

### Transitions that tell the wrong truth

| Draft | The logic the writer meant | Revision |
|---|---|---|
| "Franklin tracked his faults. **However**, he improved." | Consequence, not contrast | "Franklin tracked his faults, **and as a result** they diminished." |
| "Emerson praises nonconformity. **Additionally**, he says imitation is suicide." | The second idea explains the first | "Emerson praises nonconformity; **indeed**, he calls imitation suicide." |
| "Washington warned against party spirit. **For example**, Federalists and Republicans were already competing." | The second is a fact in tension with the first, not an instance of it | "Washington warned against party spirit **even though** Federalists and Republicans were already competing for power." |

> 🔑 **AP Connection:** Section I writing questions often ask which transition is best "in context." The test is the same one you use when revising: read the two sentences and name their relationship **before** you look at the choices.
`
    },
    {
      id: 'englangr4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The principle that a sentence should open with familiar information and end with new information is called old before _______.

2) "This shows..." with no noun after "this" is a vague pronoun; the fix is to add a _______ after "this."

3) "Franklin tracked his faults. However, he improved." The transition should signal a consequence, not a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['new', 'noun', 'contrast'],
        hint1: 'The opposite of old.',
        hint2: '"This contrast," "this admission."',
        hint3: '"However" signals this relationship.',
        explanation: 'Old-before-new order links sentences; naming the antecedent with "this" plus a noun removes ambiguity; and "however" falsely claims a contrast where the logic is cause and effect.'
      }
    },
    {
      id: 'englangr4-revision',
      type: 'text' as const,
      content: `
## Revising a Draft for Coherence

**Prompt (AP style, not released):** Argue your position on Emerson's claim that "Whoso would be a man, must be a nonconformist."

### Draft body paragraph

> *(1) Nonconformity can be valuable. (2) Many inventors were ridiculed at first. (3) Also, people who follow the crowd do not always end up happy. (4) However, some rules exist for good reasons, like traffic laws. (5) This shows Emerson is partly right.*

| Sentence | Coherence problem |
|---|---|
| (1) to (2) | No link: why does ridicule of inventors show value? |
| (3) | "Also" joins an idea about happiness to an idea about invention, which are different claims |
| (4) | "However" is right, but the paragraph never explains which rules deserve obedience |
| (5) | Bare "This": shows what? |

### Revised paragraph

> *(1) Nonconformity is valuable when the crowd is wrong about something that can be tested. (2) Inventors are the clearest case: a new design is mocked until it works, and the mockery ends because the result can be checked. (3) **That test** is what separates useful nonconformity from mere contrariness. (4) **By the same standard**, a driver who ignores traffic laws is not a nonconformist in Emerson's sense, because the reason for the rule, keeping strangers alive at an intersection, passes every test. (5) **This distinction** shows that Emerson is right about conformity of judgment, not conformity of conduct: a person should think for himself, and then obey the rules whose reasons survive that thinking.*

| What changed | Coherence tool |
|---|---|
| (1) states a condition ("when the crowd is wrong about something that can be tested") | A precise claim gives later sentences something to connect to |
| (3) "That test" | This/that + noun, picking up "can be checked" |
| (4) "By the same standard" | A transition that names the logic: applying a criterion |
| (5) "This distinction" | Named antecedent, and commentary that returns to the thesis |

The revised paragraph is barely longer than the draft. The gain is not more words; it is that every sentence now **says how it relates** to the sentence before it.
`
    },
    {
      id: 'englangr4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Transition That Tells the Truth** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Franklin compared his rewrites with the originals. ___, he found his faults and corrected them.',
            options: ['In this way', 'By contrast', 'For instance', 'Nevertheless']
          },
          {
            label: 'Emerson calls imitation suicide. ___, Franklin taught himself to write by imitating essays.',
            options: ['In this way', 'By contrast', 'For instance', 'Therefore']
          },
          {
            label: 'Washington urged Americans to value the union. ___, he warned against parties formed along geographic lines.',
            options: ['For this reason', 'By contrast', 'For instance', 'Nevertheless']
          }
        ],
        correctAnswers: ['In this way', 'By contrast', 'For this reason'],
        hint1: 'The comparison is how he found the faults.',
        hint2: 'One writer condemns what the other practiced.',
        hint3: 'The warning follows from valuing the union.',
        explanation: 'Comparing his work with the model is the means by which Franklin found his faults, so "In this way" fits. Emerson and Franklin take opposite views of imitation, which calls for "By contrast." Washington\'s warning against geographic parties follows from his concern for union, so "For this reason" fits.'
      }
    },
    {
      id: 'englangr4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

Use the nonconformity draft and revision above.
      `,
      exercise: {
        questions: [
          {
            question: 'In the draft, why is "Also" a poor transition at the start of sentence 3?',
            options: [
              'It is too informal for any academic essay',
              'It treats a new claim as more of the same',
              'It should appear at the end of the sentence',
              'It repeats a transition already used earlier'
            ],
            correctAnswer: 1,
            explanation: 'Sentence 3 shifts from invention to happiness, a different claim, but "Also" presents it as one more example of the same point. Formality is not the problem, moving the word would not fix the logic, and no earlier sentence uses "also."'
          },
          {
            question: 'Which revision of draft sentence 5 ("This shows Emerson is partly right.") best improves coherence?',
            options: [
              'In conclusion, Emerson is partly right about this.',
              'This distinction shows what kind of conformity Emerson is right to reject.',
              'All of this shows that Emerson is partly right and partly wrong.',
              'This shows Emerson is right, at least partly, in some ways.'
            ],
            correctAnswer: 1,
            explanation: 'Naming the antecedent ("This distinction") and saying what it shows ties the sentence to the paragraph\'s reasoning. The other choices keep the vague reference or add a signpost without saying which part of Emerson\'s claim holds.'
          },
          {
            question: 'Revised sentence 4 opens with "By the same standard." The phrase is effective mainly because it',
            options: [
              'introduces traffic laws as a new topic',
              'applies the testing criterion to a new case',
              'concedes that Emerson is wrong about inventors',
              'repeats the claim of sentence 1 for emphasis'
            ],
            correctAnswer: 1,
            explanation: 'The phrase tells the reader that the testing standard from sentences 1 through 3 is now being applied to a different case, traffic laws. It does more than introduce a topic, it concedes nothing about inventors, and it extends rather than repeats the claim.'
          }
        ]
      }
    }
  ]
}
