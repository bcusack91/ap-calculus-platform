export const englangLogicalFallaciesPart2Data = {
  topicSlug: 'englang-logical-fallacies',
  sections: [
    {
      id: 'englangl2-intro',
      type: 'text' as const,
      content: `
# ⚠️ Logical Fallacies

**Part 2 of 7 — Three Ways Reasoning Breaks, and the Legitimate Moves Fallacies Imitate**

---

| Section |
|---------|
| What Every Argument Promises |
| Family 1: The Support Is Not Relevant |
| Family 2: The Support Is Not Enough |
| Family 3: The Argument Assumes What It Needs |
| The Look-Alike Test |

> 🔑 **Key Concept:** The AP English Language exam never asks you to name a fallacy. It asks you to **evaluate a line of reasoning** (skill 5.A), to judge whether evidence is **relevant and sufficient** for a claim (3.A–3.C), and to build sound reasoning in your own essays (4.A–4.C, 6.A). Textbook names for fallacies are at most shorthand for a specific way support fails to reach a claim; what earns credit is explaining the failure in plain words.
`
    },
    {
      id: 'englangl2-relevance',
      type: 'text' as const,
      content: `
## What Every Argument Promises

Every argument makes the same basic promise: **this support gives you a reason to accept this claim.** Flawed reasoning is a place where that promise is broken. Part 1 introduced eight common ways it breaks. This part sorts them, and several more, into three families according to **how** the promise breaks:

| Family | The question it fails | Quick test |
|---|---|---|
| **Relevance** | Does the support bear on the claim at all? | Could the support be true and the claim still be false for unrelated reasons? |
| **Sufficiency** | Is there enough of the right kind of support? | How many cases, chosen how, and were other explanations ruled out? |
| **Presumption and structure** | Does the argument quietly assume its conclusion, or depend on a shaky form? | Remove the loaded word or the forced choice. Does the argument still stand? |

Each family also has a **legitimate look-alike**: a sound move that resembles the flaw on the surface. Telling them apart is the real skill, and it is the one Section I questions reward.

## Family 1: The Support Is Not Relevant

All examples below are hypothetical.

| What goes wrong | Example | Legitimate look-alike |
|---|---|---|
| **Attacks the arguer's character** instead of the argument | "Ignore the mayor's housing plan; she was rude to reporters last week." | Questioning credibility when the claim **rests on the speaker's own testimony** or judgment, such as a witness with a financial stake |
| **Dismisses a claim because the arguer does not live by it** | "You say I should exercise, but you never do." | Noting hypocrisy is relevant to the speaker's **sincerity**, not to whether the advice is true |
| **Treats wide belief as proof** | "Most parents think the test is useful, so it must measure learning." | Popularity is evidence when the question **is about** opinion, such as what voters want |
| **Treats age as proof of value** | "We have always graded this way, so it is the best way." | A practice that has been **tested and compared** over time has a record that counts as evidence |
| **Cites someone outside their expertise** | "A famous quarterback says this vaccine is unsafe." | A genuine expert speaking **within the field**, especially when other experts agree |
| **Shifts to a different issue that sounds related** | "Why worry about the river's pollution when so many people lack jobs?" | Connecting two issues is fine if the writer **argues** the connection rather than swapping one for the other |

Notice the pattern in the last column. The same surface move (mentioning a person, citing many people, citing an authority) can be sound or unsound. What decides it is whether the move gives a **reason that bears on the claim**.
`
    },
    {
      id: 'englangl2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A senator claims that a farm chemical is safe. A critic responds: "The senator\'s campaign is funded by the chemical\'s maker, so his safety data should be checked by an independent lab before we rely on it." The critic\'s reasoning is best described as',
            options: [
              'a personal attack, since it raises the senator\'s donors instead of his argument',
              'a fair credibility point, since it asks for the data to be tested rather than rejected',
              'a change of subject, since campaign money is a separate matter from the chemical\'s safety',
              'a charge of hypocrisy, since it says the senator fails to follow his own advice'
            ],
            correctAnswer: 1,
            explanation: 'A financial stake is relevant when we are asked to trust someone\'s data, and the critic calls for independent testing rather than dismissing the claim. It would become a personal attack only if the donors were offered as proof that the chemical is unsafe; it does not change the subject or accuse the senator of hypocrisy.'
          },
          {
            question: '"Ms. Ruiz says our town should recycle more, but she drives a huge truck, so her argument is worthless." The main flaw in this reasoning is that',
            options: [
              'her own habits bear on her sincerity, not on whether recycling helps',
              'it draws a broad conclusion from a single example of her behavior',
              'it assumes the very conclusion about recycling that it sets out to prove',
              'it misstates what Ms. Ruiz claimed so that her view is easier to attack'
            ],
            correctAnswer: 0,
            explanation: 'The speaker dismisses the advice because of the adviser\'s own habits, but even if Ms. Ruiz is inconsistent, the case for recycling stands or falls on its own evidence. The speaker is not generalizing about a group, assuming the conclusion, or distorting her position; he is changing the subject from the argument to the arguer.'
          }
        ]
      }
    },
    {
      id: 'englangl2-evidence',
      type: 'text' as const,
      content: `
## Family 2: The Support Is Not Enough

Here the support is relevant, but it cannot carry the weight the claim puts on it.

| What goes wrong | Example | What sound support would add |
|---|---|---|
| **Too few cases** for a broad claim | "Two of my friends hated the new schedule, so students reject it." | More cases, gathered systematically |
| **An unrepresentative sample**: many cases, but chosen in a way that skews the result | "An online poll of the gaming club shows students want a later start time." | A sample that matches the group the claim is about |
| **One vivid story** set against broad data | "My grandfather never wore a seatbelt and lived to ninety." | Data on many people, not one memorable exception |
| **Sequence taken as cause** | "Test scores rose the year we bought new desks, so the desks raised scores." | A mechanism, plus other explanations ruled out |
| **Correlation taken as cause**: two things occur together, so one is said to cause the other | "Students who eat breakfast earn higher grades, so breakfast raises grades." | A check for a **third factor** (here, perhaps family routines or income) |

The legitimate look-alike for this whole family is **inductive reasoning done well**. All generalizations go from some cases to more cases; that is how evidence works. The question is never "Did the writer generalize?" but "Are the cases **enough** and **representative**, and is the claim **qualified** to match them?" A writer who says "many students in our survey" instead of "all students" may have fixed the problem with one word (skill 3.C).

## Family 3: The Argument Assumes What It Needs

These arguments may look complete, but something in their structure does the persuading that evidence should do.

| What goes wrong | Example | Legitimate look-alike |
|---|---|---|
| **A premise already assumes the conclusion**, often inside a loaded word | "This unfair tax should be repealed because it is unjust." | Defining a term openly, then arguing that the case fits the definition |
| **Only two options** offered when more exist | "Either we close the library or we raise taxes." | A real either-or, when the writer shows the other options are closed |
| **A chain of consequences with unsupported links** | "Allow phones at lunch, and soon no one will learn anything." | A **causal chain** in which each link is supported by evidence |
| **A key word shifts meaning** midway | "Everyone has a right to free speech, so it is right for me to say anything." | Using a word consistently, or flagging a second sense |
| **A weak analogy**: the two things are alike in ways that do not matter to the conclusion | "A school is like a business, so it should cut any class that loses money." | An analogy in which the shared feature is **the one the conclusion depends on** |

Part 1's misstated opposing view fits here too: the arguer builds a weaker version of the opposing view and refutes that, so the argument presumes a position no one holds.

> 🔑 **AP Connection:** An unsupported chain of consequences and a reasoned causal chain have the same shape: A leads to B leads to C. The difference is whether each "leads to" is **supported**. When you evaluate one, check the links one at a time and name the weakest.
`
    },
    {
      id: 'englangl2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) "You say I should exercise, but you never do." The speaker's habits bear on her sincerity, not on whether the advice is _______.

2) "Everyone has a right to free speech, so it is right for me to say anything." The argument fails because the word "right" changes its _______ partway through.

3) Polling only the gaming club to describe the whole student body relies on an unrepresentative _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['true', 'meaning', 'sample'],
        hint1: 'Hypocrisy tells you about the speaker, not about whether exercise is good advice.',
        hint2: 'A legal right and being "right" (correct) are two different senses of one word.',
        hint3: 'The group of people actually surveyed.',
        explanation: 'Pointing to the adviser\'s own habits turns from the claim to the speaker\'s consistency, the free-speech argument trades on two senses of "right," and an unrepresentative sample skews the evidence before any reasoning begins.'
      }
    },
    {
      id: 'englangl2-test',
      type: 'text' as const,
      content: `
## The Look-Alike Test

When a move looks suspicious, run four checks before you call it flawed.

| Check | Ask | If the answer is no |
|---|---|---|
| **Relevance** | Does this support bear on the truth of the claim, or only on something nearby (the speaker, the crowd, the past)? | Relevance failure |
| **Sufficiency** | Are there enough cases, chosen fairly, for a claim this broad? | Sufficiency failure, or a claim that needs qualifying |
| **Links** | Is each step from cause to effect supported, and have other causes been ruled out? | A causal leap or an unsupported chain |
| **Alternatives and terms** | Are the options really limited to these, and does each key word keep one meaning? | Missing options or a shifting term |

### From Label to Explanation

A label alone earns little. Turn it into an explanation with this pattern:

> The writer moves from **[support]** to **[claim]**, but that step requires **[unstated assumption]**, which **[is false / is unsupported / ignores X]**.

| Label only | Explanation |
|---|---|
| "This is a false analogy." | "The writer moves from the fact that businesses cut unprofitable products to the claim that schools should cut unprofitable classes, but that step requires schools to exist to make money, which ignores their public purpose." |
| "This is post hoc." | "The writer moves from rising scores after the desk purchase to the claim that desks caused the rise, but that step requires ruling out the new reading program that began the same year." |

The second column is what skill 5.A means by evaluating a line of reasoning. It names the gap precisely, so a reader can see how the argument would have to change to close it.
`
    },
    {
      id: 'englangl2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '"Students who take music lessons earn higher math scores than students who do not, so the school should require music lessons to raise math scores." Which question most directly exposes the weakness in this reasoning?',
            options: [
              'Do students who choose lessons differ in ways that also affect scores?',
              'Are music lessons a more popular way to raise scores than tutoring?',
              'Have the people who make this argument ever studied music themselves?',
              'Would required lessons cost students more than hiring math tutors?'
            ],
            correctAnswer: 0,
            explanation: 'The argument treats a correlation as a cause, so the key question is whether a third factor, such as family support, explains both the lessons and the scores. Whether lessons are popular and what the arguers studied are irrelevant, and cost is a fair policy concern that does not touch the causal claim.'
          },
          {
            question: 'Which argument presents a causal chain that is reasoned rather than a string of unsupported leaps?',
            options: [
              'Raising parking fees will drive shoppers away, close every store, and leave downtown empty for good.',
              'Raising parking fees may send some shoppers to the mall, as it did in two nearby towns.',
              'Raising parking fees is the first step toward charging residents for every public service they use.',
              'Raising parking fees will anger drivers, and angry drivers will soon vote out the entire town council.'
            ],
            correctAnswer: 1,
            explanation: 'This version makes a limited prediction ("some shoppers") and supports its link with evidence from comparable towns. The others string together consequences that grow more extreme without support for each step.'
          },
          {
            question: '"A national government is like a household: a family that keeps borrowing goes broke, so the government should never borrow." The analogy is weakest because',
            options: [
              'it appeals to readers\' feelings about family life instead of to facts about the economy',
              'the two differ in the feature the conclusion rests on, such as how debts get repaid',
              'it compares two things that have no features of any kind in common with each other',
              'it assumes that most readers already agree that the government spends far too much'
            ],
            correctAnswer: 1,
            explanation: 'An analogy holds only if the compared things share the feature the conclusion rests on, and a government\'s lifespan and ways of raising money differ from a family\'s in exactly the respect that matters here. The comparison does share some features with households, and its main problem is not emotion or an assumed agreement about spending.'
          }
        ]
      }
    }
  ]
};
