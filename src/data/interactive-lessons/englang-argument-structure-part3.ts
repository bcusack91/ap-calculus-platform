export const englangArgumentStructurePart3Data = {
  topicSlug: 'englang-argument-structure',
  sections: [
    {
      id: 'englanga3-intro',
      type: 'text' as const,
      content: `
# 🏗️ Argument Structure

**Part 3 of 7 — Toulmin Analysis: Franklin's Closing Speech to the Constitutional Convention, 1787**

---

| Section |
|---------|
| Finding the Warrant |
| 📖 The Situation: Philadelphia, September 17, 1787 |
| Mapping Franklin's Speech onto the Toulmin Model |
| Reading for Assumptions on the Exam |

> 🔑 **Key Concept:** Classical arrangement (Part 2) describes the **order** of an argument. The Toulmin model, named for the philosopher Stephen Toulmin (*The Uses of Argument*, 1958), describes its **logic**: what has to be true for the evidence to support the claim. Skill 3.A asks you to explain how claims and evidence work together, and skill 3.C asks how claims are qualified. Toulmin gives you vocabulary for both.
`
    },
    {
      id: 'englanga3-warrant',
      type: 'text' as const,
      content: `
## Finding the Warrant

Part 1 introduced the six Toulmin terms. Toulmin's own word for evidence was **grounds** (or data), and that is the term used here.

| Term | The question it answers |
|---|---|
| **Claim** | What is the writer asking us to accept? |
| **Grounds** | What facts, examples, or reasons are offered? |
| **Warrant** | Why do these grounds lead to this claim? |
| **Backing** | Why should we accept the warrant? |
| **Qualifier** | How strongly, and how widely, is the claim made? |
| **Rebuttal** | Under what conditions would the claim not hold? |

### The Bridge Test

The warrant is the step most often left unstated, so you have to reconstruct it. Put the grounds and the claim into one sentence and ask **what general rule makes the "so" legitimate**.

> Grounds: The bridge on Route 9 failed its last two inspections. **So** claim: The county should close it until it is repaired.
>
> Warrant: A structure that fails safety inspections should not carry traffic.

If the audience rejects the warrant, the argument fails no matter how good the grounds are. A reader who believes inspections are unreliable will not be moved by two failed inspections.

### Common Kinds of Warrant

| Warrant type | General rule it relies on | Example |
|---|---|---|
| **Principle** | A shared value applies to this case | "Everyone deserves a fair hearing, so the accused should speak." |
| **Authority** | This source knows | "The surgeon general warns against it, so we should avoid it." |
| **Analogy** | What is true of X is true of a similar Y | "Rationing water worked in the last drought, so it will work in this one." |
| **Cause** | X produces Y | "Later start times increase sleep, so they will improve attendance." |
| **Sign** | X indicates Y | "Applications are falling, so the program is losing appeal." |

Naming the type helps you **test** the warrant. An analogy warrant invites the question "are the cases really alike?" A causal warrant invites "is there another cause?"
`
    },
    {
      id: 'englanga3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '"Our town\'s library circulation fell by half after the reading room closed, so reopening the room will bring readers back." Which unstated warrant does this argument rely on?',
            options: [
              'Libraries are a public good worth funding.',
              'Circulation figures were recorded accurately.',
              'The closing caused the decline in circulation.',
              'Readers prefer quiet rooms to reading at home.'
            ],
            correctAnswer: 2,
            explanation: 'The claim treats reopening the room as a cure, which works only if the closing caused the decline. Accurate records are part of the grounds, the public-good value is not needed for this inference, and room preferences are one possible explanation the argument never states.'
          },
          {
            question: 'An argument reasons that because a curfew reduced vandalism in a nearby city, it will reduce vandalism here. The best way to test its warrant is to ask whether',
            options: [
              'the two cities are alike in the ways that matter',
              'vandalism is a serious problem in either city',
              'the speaker has lived in both of the cities',
              'curfews are popular with voters in the region'
            ],
            correctAnswer: 0,
            explanation: 'This is an analogy warrant, so its strength depends on whether the cases are relevantly similar. Seriousness, the speaker\'s residence, and popularity do not bear on whether the nearby result will transfer.'
          }
        ]
      }
    },
    {
      id: 'englanga3-situation',
      type: 'text' as const,
      content: `
## 📖 The Situation: Philadelphia, September 17, 1787

| Component | Details |
|---|---|
| **Writer** | Benjamin Franklin, 81, the oldest delegate; his written speech was read aloud for him by James Wilson of Pennsylvania |
| **Occasion** | The last day of the Constitutional Convention, before the delegates signed the finished document |
| **Exigence** | Several delegates still objected to the Constitution, and some had said they would not sign |
| **Audience** | The delegates, especially the holdouts |
| **Purpose** | To persuade every delegate present to sign, so the document would go to the states with the appearance of unanimity |

Franklin did not win everyone. Three delegates who were present, Edmund Randolph, George Mason, and Elbridge Gerry, refused to sign. The speech is still a model of how to argue for something you only partly support.

The text below follows James Madison's notes of the Convention.

> Mr. President:—I confess that there are several parts of this Constitution which I do not at present approve, but I am not sure I shall never approve them. For, having lived long, I have experienced many instances of being obliged, by better information or fuller consideration, to change opinions, even on important subjects, which I once thought right, but found to be otherwise. It is therefore that, the older I grow, the more apt I am to doubt my own judgment, and to pay more respect to the judgment of others.
>
> ...In these sentiments, sir, I agree to this Constitution, with all its faults, if they are such; because I think a general government necessary for us, and there is no form of government, but what may be a blessing to the people if well administered; and believe further, that this is likely to be well administered for a course of years, and can only end in despotism, as other forms have done before it, when the people shall become so corrupted as to need despotic government, being incapable of any other. I doubt, too, whether any other Convention we can obtain may be able to make a better Constitution. For, when you assemble a number of men to have the advantage of their joint wisdom, you inevitably assemble with those men all their prejudices, their passions, their errors of opinion, their local interests, and their selfish views. From such an assembly can a perfect production be expected?
>
> — Benjamin Franklin, speech to the Constitutional Convention, September 17, 1787
`
    },
    {
      id: 'englanga3-map',
      type: 'text' as const,
      content: `
## Mapping Franklin's Speech onto the Toulmin Model

| Toulmin part | Franklin's text |
|---|---|
| **Claim** | "I agree to this Constitution" and, by the end, every objector should "put his name to this instrument" |
| **Grounds** | "a general government necessary for us"; the plan "is likely to be well administered for a course of years"; no other convention is likely to "make a better Constitution" |
| **Warrant** | When a necessary plan is the best that can be obtained, we should accept it despite its faults |
| **Backing** | Any assembly brings "all their prejudices, their passions, their errors of opinion," so perfection is impossible; his long experience of changing his mind shows that present objections may be mistaken |
| **Qualifier** | "with all its faults, if they are such"; "likely"; "for a course of years"; later, "I am not sure, that it is not the best" |
| **Rebuttal** | It "can only end in despotism... when the people shall become so corrupted as to need despotic government" |

### Three Things the Map Reveals

**1. The opening is backing, not confession.** Franklin begins by admitting he disapproves of "several parts." That admission looks like a weakness, but it does structural work: his story of changing his mind is the backing for a second warrant, that a delegate's present objections might be wrong. He invites the holdouts to apply the same humility to themselves.

**2. The qualifiers make the claim harder to attack.** "If they are such" turns the faults into possible faults. "Likely" and "for a course of years" stop short of promising permanence. A holdout cannot answer "this Constitution is not perfect," because Franklin never said it was.

**3. The rebuttal is built into the claim.** Franklin names the condition under which the government will fail, and places it in the people's corruption rather than in the document. The rebuttal concedes a limit while shifting responsibility for that limit away from the Constitution.

### The Rhetorical Question as Warrant

"From such an assembly can a perfect production be expected?" The question carries the warrant **without stating it**. Every listener supplies the answer "no," and in doing so accepts the general rule that imperfection is no reason to reject the plan. A rhetorical question that invites the audience to supply a warrant is a common Section I target.
`
    },
    {
      id: 'englanga3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In the Toulmin model, the general rule that connects grounds to a claim is the _______.

2) Words such as "likely" and "for a course of years" that limit the strength of a claim are _______.

3) Franklin's account of changing his opinions over a long life supports his warrant, so in Toulmin's terms it is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['warrant', 'qualifiers', 'backing'],
        hint1: 'The bridge that makes the "so" legitimate.',
        hint2: 'Toulmin\'s term for words that set how strongly a claim is made (plural).',
        hint3: 'The support for the warrant itself, not for the claim.',
        explanation: 'The warrant links grounds to claim, qualifiers limit the claim, and backing supports the warrant.'
      }
    },
    {
      id: 'englanga3-exam',
      type: 'text' as const,
      content: `
## Reading for Assumptions on the Exam

The College Board does not require you to use Toulmin's vocabulary, but Section I questions test the same thinking. Watch for stems like these.

| Stem | What it is really asking |
|---|---|
| "The argument in the passage assumes that..." | Name the unstated warrant |
| "The writer qualifies the claim by..." | Find the qualifier or the rebuttal |
| "Which of the following, if true, would most weaken the argument?" | Attack the warrant or the grounds |
| "The rhetorical question in line X primarily serves to..." | Often: invite the reader to supply a warrant |

### Worked Example: The Closing Appeal

Later in the speech Franklin argues for signing unanimously.

> Much of the strength and efficiency of any government, in procuring and securing happiness to the people, depends on opinion—on the general opinion of the goodness of the government, as well as of the wisdom and integrity of its governors.

| Toulmin part | Content |
|---|---|
| Claim | Delegates should keep their objections private and recommend the Constitution "heartily and unanimously" |
| Grounds | Publicizing objections could prevent the Constitution "being generally received" |
| Warrant (stated here) | A government's strength depends on the public's opinion of it |
| What a weakening answer would attack | The warrant: for example, evidence that open debate about a constitution's faults makes the public trust it more, not less |

Notice that this warrant is **stated**, which is unusual. Franklin states it because his audience might not share it. Delegates trained to speak their minds needed to be told why silence served the public.

> 🔑 **AP Connection:** In a rhetorical analysis essay, explaining a warrant is strong commentary. "Franklin's admission that he has often changed his mind does more than show modesty; it teaches the holdouts that their own certainty may be the error" explains how a choice works on the audience, which is what Row B rewards.
`
    },
    {
      id: 'englanga3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Franklin\'s argument that delegates should sign despite their objections assumes that',
            options: [
              'a flawed but necessary plan is better than no plan at all',
              'the public will not learn of the delegates\' private objections',
              'the states will ratify the Constitution without debating it',
              'a second convention would produce a more democratic plan'
            ],
            correctAnswer: 0,
            explanation: 'His grounds are that a general government is necessary and no better constitution is obtainable, which leads to signing only if an imperfect necessary plan beats having none. He urges secrecy rather than assuming it, says nothing about ratification without debate, and doubts a second convention would do better.'
          },
          {
            question: 'The phrase "with all its faults, if they are such" functions primarily to',
            options: [
              'deny that the Constitution has any real faults at all',
              'list the objections that the holdouts have already raised',
              'grant possible flaws and then question them',
              'suggest that the delegates should amend the document first'
            ],
            correctAnswer: 2,
            explanation: 'Franklin grants the faults and then questions them in the same breath, which keeps his own judgment open in the way he asks of others. He neither denies all faults nor lists them, and he does not propose amending the document before signing.'
          },
          {
            question: 'Which discovery, if true, would most weaken the warrant behind Franklin\'s appeal for unanimity?',
            options: [
              'Several delegates who signed later voiced doubts in private letters.',
              'Public trust in a government rarely depends on how it was adopted.',
              'Franklin had changed his own mind about the plan several times.',
              'The Convention had met in Philadelphia for nearly four months.'
            ],
            correctAnswer: 1,
            explanation: 'Franklin\'s appeal assumes that a unanimous adoption shapes public opinion, on which, he says, a government\'s strength depends. Evidence that public trust rarely depends on how a government was adopted breaks that link, while private doubts, his own changes of mind, and the length of the Convention leave it intact.'
          }
        ]
      }
    }
  ]
};
