export const englangClaimsEvidenceReadingPart5Data = {
  topicSlug: 'englang-claims-evidence-reading',
  sections: [
    {
      id: 'englangc5-intro',
      type: 'text' as const,
      content: `
# 📖 Claims and Evidence in Reading

**Part 5 of 7 — Misreadings and Traps: Tone, Voiced Claims and Wrong Answers**

---

| Section |
|---------|
| 📖 Close Reading: Abigail Adams, "Remember the Ladies," 1776 |
| The Anatomy of a Wrong Answer |
| Six Misconceptions About Claims and Evidence |

> 🔑 **Key Concept:** Most wrong answers on claims-and-evidence questions are not random. They come from a short list of predictable misreadings: taking a joke literally, taking a serious point as a joke, mistaking a concession or a quoted view for the writer's own, and choosing an answer that is true but too broad, too narrow or too strong. Learn the patterns and you can eliminate choices with confidence.
`
    },
    {
      id: 'englangc5-adams',
      type: 'text' as const,
      content: `
## 📖 Close Reading: Abigail Adams, "Remember the Ladies," 1776

### The Situation

| Component | Details |
|---|---|
| **Writer** | Abigail Adams, managing the family farm and household in Braintree, Massachusetts |
| **Audience** | Her husband, John Adams, a delegate to the Continental Congress in Philadelphia |
| **Occasion** | A private letter of March 31, 1776, months before the Declaration of Independence |
| **Context** | Congress was moving toward independence and the colonies would soon write new laws; under existing law a married woman's property and legal identity were largely absorbed into her husband's |

### The Passage

The text keeps Adams's original spelling.

> I long to hear that you have declared an independancy -- and by the way in the new Code of Laws which I suppose it will be necessary for you to make I desire you would Remember the Ladies, and be more generous and favourable to them than your ancestors. Do not put such unlimited power into the hands of the Husbands. Remember all Men would be tyrants if they could. If perticuliar care and attention is not paid to the Laidies we are determined to foment a Rebelion, and will not hold ourselves bound by any Laws in which we have no voice, or Representation.
>
> That your Sex are Naturally Tyrannical is a Truth so thoroughly established as to admit of no dispute, but such of you as wish to be happy willingly give up the harsh title of Master for the more tender and endearing one of Friend.
>
> — Abigail Adams to John Adams, March 31, 1776

### Sorting the Statements

| Statement | What kind of claim it is | How seriously to take it |
|---|---|---|
| "Remember the Ladies... be more generous and favourable to them" | **Policy claim**: the request the letter makes | Serious |
| "Do not put such unlimited power into the hands of the Husbands." | **Policy claim**, narrowed: limit unlimited power | Serious |
| "Remember all Men would be tyrants if they could." | **General claim** offered as a reason | Playfully overstated, but it supports the serious request |
| "we are determined to foment a Rebelion" | **Mock threat** | Teasing exaggeration; no rebellion was planned |
| "no voice, or Representation" | **Analogy** to the colonists' own complaint against Parliament | Serious underneath the joke: it turns John's political principles back on him |
| "such of you as wish to be happy... Friend" | **Concession** that some husbands already behave well | Softens the charge and flatters her reader |

### Why the Tone Matters

The letter mixes humor and seriousness, and a reader who sees only one of them misreads it. Read literally, the "Rebelion" is a threat of revolt. Read as pure banter, the letter asks for nothing. The strongest reading holds both: the playful exaggeration makes a **real request** easy to hear between spouses, and the borrowed language of "Representation" quietly argues that the principle John is fighting for applies to women too.

John Adams's reply of April 14, 1776, shows how the request was received: "As to your extraordinary Code of Laws, I cannot but laugh." He heard the joke and dismissed the point, which is exactly the misreading the exam wants you to avoid.
`
    },
    {
      id: 'englangc5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Adams\'s statement that women "will not hold ourselves bound by any Laws in which we have no voice, or Representation" is most significant because it',
            options: [
              'announces that the women of Braintree have organized a protest',
              'applies the colonists\' own argument against Parliament to women',
              'concedes that women have no interest in the laws of the new nation',
              'reports a law that Congress had already passed regarding marriage'
            ],
            correctAnswer: 1,
            explanation: 'The phrase echoes the colonial objection to laws made without representation, so the joke carries a serious argument from John\'s own principles. No protest had been organized, the letter does not concede women\'s indifference, and no such law had been passed.'
          },
          {
            question: 'The tone of the passage is best described as',
            options: [
              'playful yet earnest',
              'bitter and accusing',
              'neutral and factual',
              'pleading and fearful'
            ],
            correctAnswer: 0,
            explanation: 'The mock threat and the "Truth so thoroughly established" are teasing, but the request to limit husbands\' power is meant seriously. The letter is too affectionate to be bitter, too opinionated to be neutral, and too confident to be fearful.'
          }
        ]
      }
    },
    {
      id: 'englangc5-anatomy',
      type: 'text' as const,
      content: `
## The Anatomy of a Wrong Answer

### Six Distractor Patterns

| Pattern | What it does | How to catch it |
|---|---|---|
| **Too broad** | States more than the passage claims | Look for words like *all*, *every*, *always* that the writer did not use |
| **Too narrow** | Names one detail as if it were the whole point | Ask whether it covers the whole passage or one sentence |
| **Wrong strength** | Right direction, wrong force: "demands" for "suggests," "condemns" for "warns" | Compare verbs to the writer's own |
| **Half right** | First half accurate, second half invented or reversed | Read every word of the choice, especially after *and* or *because* |
| **Literal for figurative** | Treats irony, hyperbole or a joke as a plain statement | Check the tone first |
| **True but irrelevant** | Accurate about the passage, but does not answer the question asked | Reread the stem: function, purpose or claim? |

### A Worked Example

**Question:** Which choice best states the main claim of Adams's passage?

| Choice | Verdict |
|---|---|
| Women in the colonies intend to start an armed rebellion against Congress. | **Literal for figurative.** The "Rebelion" is a teasing threat |
| All men are tyrants and cannot be trusted with any power over women. | **Too broad and too strong.** She says men "would be" tyrants if they could, and she concedes that wise husbands choose to be friends |
| The new laws should limit husbands' unlimited power over their wives. | **Correct.** It states her request at her strength: "unlimited power" is the target |
| Abigail Adams wanted to hear that Congress had declared independence. | **True but too narrow.** Her first clause says so, but it is not the claim the letter argues |

Notice that the correct answer is not the most dramatic one, and it is not the one closest to the first sentence. It is the one that matches the writer's **request** at the writer's **strength**.
`
    },
    {
      id: 'englangc5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Trap** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For a question about Roosevelt\'s position, the choice "Roosevelt condemns the press for exposing corruption" is ___',
            options: ['wrong strength', 'too narrow', 'true but irrelevant', 'correct']
          },
          {
            label: 'For a question about the main idea of Johnson\'s Passage 1, the choice "A college degree does not prove literacy" is ___',
            options: ['too narrow', 'too broad', 'wrong strength', 'correct']
          },
          {
            label: 'Reading "we are determined to foment a Rebelion" as a plan for armed revolt is an error of ___',
            options: ['literal for figurative', 'too narrow', 'half right', 'true but irrelevant']
          }
        ],
        correctAnswers: ['wrong strength', 'too narrow', 'literal for figurative'],
        hint1: 'Roosevelt warns and sets conditions; he does not condemn.',
        hint2: 'The degree example is one detail among several barriers.',
        hint3: 'The tone of the line is teasing.',
        explanation: 'Calling Roosevelt\'s qualified approval condemnation overstates it. One registrar example is too narrow to be Johnson\'s main idea. Taking Adams\'s mock threat as a real plan reads figurative language literally.'
      }
    },
    {
      id: 'englangc5-misconceptions',
      type: 'text' as const,
      content: `
## Six Misconceptions About Claims and Evidence

| Misconception | Correction |
|---|---|
| "The thesis is the first sentence." | Theses are often delayed until after a concession or story (Eisenhower, Part 2) |
| "The most emotional sentence is the main claim." | Vivid lines are often evidence or concession; Roosevelt's Bunyan image is not his thesis |
| "A quoted view is the writer's view." | Writers quote opponents in order to answer them. Ask who is speaking and whether the writer agrees |
| "A question cannot be a claim." | A rhetorical question often asserts its implied answer |
| "Evidence means statistics." | Examples, analogies, anecdotes, allusions and shared principles all count; Johnson's strongest evidence was a scenario |
| "A qualified claim is a weak claim." | Qualification makes a claim more precise and harder to refute; Roosevelt's conditions are his point |

### Who Is Speaking?

Watch for phrases that signal a **voiced** view rather than the writer's own: *It is often said that...*, *Critics insist...*, *Some will object...*, *We are told...*. The sentences that follow usually present a position the writer is about to concede, rebut or refute. A Section I question that asks what "the writer believes" will often include that voiced position as a distractor.

> 🔑 **AP Connection:** Before answering any claims question, settle three things: **tone** (serious, ironic, playful), **voice** (the writer or someone the writer is answering) and **strength** (how far the writer commits). Most traps fail one of those three checks.
`
    },
    {
      id: 'englangc5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The final sentence of Adams\'s passage, beginning "That your Sex are Naturally Tyrannical," functions primarily to',
            options: [
              'withdraw the request she has made for new laws',
              'tease men and exempt kind husbands',
              'prove with evidence that every man is a tyrant',
              'introduce the subject of the Declaration of Independence'
            ],
            correctAnswer: 1,
            explanation: 'The mock certainty of "a Truth so thoroughly established" teases, and the "but" clause grants that husbands who want to be happy choose to be friends rather than masters. She keeps her request, offers no proof, and the letter predates the Declaration.'
          },
          {
            question: 'A passage contains the sentence, "We are told that the new highway will bring prosperity to every town along its route." A student concludes that the writer supports the highway. The student has most likely',
            options: [
              'correctly identified the passage\'s thesis',
              'taken a reported claim as the author\'s own',
              'taken a literal statement as figurative',
              'mistaken a statistic for an anecdote'
            ],
            correctAnswer: 1,
            explanation: '"We are told" signals a claim made by others, which the writer is likely about to question. Nothing indicates the sentence is the writer\'s own position, and it is neither figurative nor statistical.'
          },
          {
            question: 'Which choice best describes how Adams supports her request that husbands\' power be limited?',
            options: [
              'She cites legal cases of cruelty that came before courts in Massachusetts.',
              'She quotes earlier writers who had defended the rights of married women.',
              'She turns the principle of representation that John defends back on him.',
              'She lists the property rights that married women had lost under the law.'
            ],
            correctAnswer: 2,
            explanation: 'Her strongest support is the analogy to the colonists\' complaint about laws made without a voice. The passage cites no cases, quotes no earlier writers and lists no specific legal rights.'
          }
        ]
      }
    }
  ]
};
