export const englangLogicalFallaciesPart1Data = {
  topicSlug: 'englang-logical-fallacies',
  sections: [
    {
      id: 'ellf1-intro',
      type: 'text' as const,
      content: `
# ⚠️ Logical Fallacies

**Part 1 of 7 — Identifying Flawed Reasoning in Arguments**

---

## What Is Flawed Reasoning?

Every argument promises that its **support** gives you a reason to accept its **claim**. Reasoning is flawed when that promise breaks: the support may be true, and the claim may even be true, but the step from one to the other does not hold. The CED puts it this way: "Flaws in a line of reasoning may render an argument specious or illogical" (REO-1.F).

Spotting flawed reasoning matters in both halves of the exam:
- In reading: evaluate how well a writer's support reaches the claim
- In writing: keep your own line of reasoning sound

> The exam never asks you to name a fallacy. It asks what is wrong with a line of reasoning and which revision would fix it, so learn to describe each flaw in plain words.

---

## Common Ways Reasoning Breaks

| What goes wrong | Example | The question that exposes it |
|--------|------------|---------|
| **Attacks the person instead of the argument** | "Do not trust her climate plan; she is not even from this town." | Does the point about the person bear on the claim? |
| **Misstates the opponent's view to make it easier to attack** | "My opponent wants bike lanes, so he wants to ban cars entirely." | Would the opponent accept this summary of their view? |
| **Offers only two options when more exist** | "Either cut all taxes or destroy the economy." | What other options are there? |
| **Generalizes from too few cases** | "Two students cheated, so the school has no integrity." | How many cases, and are they typical? |
| **Predicts an extreme chain of results without supporting each step** | "If we allow late work, soon no deadlines will exist." | Is each link in the chain supported? |
| **Assumes that what came first caused what came next** | "I wore lucky socks and we won, so socks caused victory." | What else could explain the result? |
| **Uses the claim as its own support** | "The law is fair because it is just." | Does the support say anything the claim does not? |
| **Treats popularity as proof** | "Millions use it, so it must be safe." | Is the question what people believe, or what is true? |

Many of these flaws have traditional names (ad hominem, straw man, false dilemma, post hoc) that you may meet in your reading; the right-hand column is what you actually use.

> 🔑 Exposing a flaw does not automatically disprove the claim, but it DOES show that this support fails to establish it.
      `
    },
    {
      id: 'ellf1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '"Either we ban phones in schools or students will never learn anything." What is the main flaw in this reasoning?',
            options: [
              'It attacks the people who oppose a phone ban instead of their reasons',
              'It offers only two outcomes when other phone policies are possible',
              'It assumes phones caused a decline in learning because they came first',
              'It supports the claim about phones by simply restating that claim'
            ],
            correctAnswer: 1,
            explanation: 'The statement presents only two extreme outcomes and ignores middle-ground policies such as limited use or classroom rules. It does not attack opponents, make a before-and-after causal argument, or restate its own claim as support.'
          },
          {
            question: '"My opponent\'s education policy is wrong because he failed algebra in high school." The reasoning is weak chiefly because it',
            options: [
              'misstates the policy so that it is easier to reject',
              'judges the policy by the man\'s past, not its merits',
              'predicts that the policy will lead to a disaster',
              'treats the policy\'s low popularity as proof'
            ],
            correctAnswer: 1,
            explanation: 'A high-school grade says nothing about whether the policy would work, so the speaker has turned from the argument to the person. The statement does not describe the policy at all, predicts no chain of results, and says nothing about popularity.'
          }
        ]
      }
    },
    {
      id: 'ellf1-content',
      type: 'text' as const,
      content: `
## Flawed Reasoning in AP Passages

### Why Writers Use Flawed Reasoning
- Emotional impact may distract from weak evidence
- Simplified framing can persuade quickly
- Audience bias may reward familiar but faulty logic

### How to Analyze Flawed Reasoning Effectively

| Weak Analysis | Strong Analysis |
|--------------|-----------------|
| "The author uses a fallacy." | "By framing the issue as only two options, the writer ignores workable compromises, which weakens the argument's logical credibility." |
| "This is bad logic." | "Turning from the policy evidence to a personal insult may energize supporters, but it leaves the policy argument unanswered." |

Notice that the strong versions never depend on a label. Each one says **what** the writer does and **why** that move fails to support the claim.

### Distinguish Rhetorical Force from Logical Validity
A passage may be rhetorically powerful and logically flawed at the same time.

Example:
- Powerful emotional appeal to protect children
- But a broad conclusion drawn from one isolated incident

Your job: evaluate both rhetorical effectiveness and reasoning quality.

## Avoiding Flawed Reasoning in Your Writing
1. Represent opposing views accurately
2. Avoid absolute binaries unless truly exhaustive
3. Differentiate correlation from causation
4. Use representative evidence
5. Critique ideas, not people
      `
    },
    {
      id: 'ellf1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) "I wore my lucky socks and we won." The reasoning assumes that because one event came first, it _______ the second.

2) "Either cut all taxes or destroy the economy" offers only _______ options when others exist.

3) "Two students cheated, so the school has no integrity" draws a broad conclusion from too _______ cases.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['caused', 'two', 'few'],
        hint1: 'Coming first is being treated as making something happen.',
        hint2: 'Count the choices the speaker allows.',
        hint3: 'The opposite of "many."',
        explanation: 'The socks argument treats "came before" as "caused." The tax argument offers two options when many policies are possible. The cheating argument judges a whole school by too few cases.'
      }
    },
    {
      id: 'ellf1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**What Is Wrong With This Reasoning?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"If we allow one extension, deadlines will disappear forever."',
            options: ['It uses its own claim as the support for that claim', 'It treats the popularity of an idea as proof', 'It jumps to an extreme result without support', 'It attacks a person instead of the argument']
          },
          {
            label: '"Three athletes from that city were rude; everyone there is rude."',
            options: ['It offers only two options when more exist', 'It assumes the earlier event caused the later one', 'It generalizes about a group from too few cases', 'It misstates what an opponent actually said']
          },
          {
            label: '"You want to regulate social media ads, so you want to censor all speech."',
            options: ['It attacks the person instead of the argument', 'It misstates the opponent\'s view to attack it', 'It cites someone outside their expertise', 'It uses its own claim as the support for that claim']
          }
        ],
        correctAnswers: ['It jumps to an extreme result without support', 'It generalizes about a group from too few cases', 'It misstates the opponent\'s view to attack it'],
        hint1: 'One extension leads straight to "forever." What is missing between those points?',
        hint2: 'Three people are used to judge a whole city.',
        hint3: 'Regulating ads is not the same as censoring all speech.',
        explanation: 'The extension argument jumps to an extreme outcome with no support for the steps between. The city argument judges everyone from three cases. The ad argument replaces the opponent\'s actual position with a far more extreme one that is easier to reject.'
      }
    },
    {
      id: 'ellf1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Flawed Reasoning

- Describe the specific flaw: what the support is, what the claim is, and why the step between them fails
- Connect the flaw to its argumentative consequence (credibility, logic, fairness)
- Do not over-diagnose: make sure the flaw is really there before you point to it
- In essays, check your own reasoning chain for the same flaws
- Differentiate rhetorical intensity from logical validity
- Precise evaluation of reasoning can raise the sophistication of your rhetorical commentary
      `
    },
    {
      id: 'ellf1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A speech claims: "Crime rose after bike lanes were installed, so bike lanes cause crime." Which evaluation is strongest?',
            options: [
              'A sound causal claim, since the rise in crime came after the lanes',
              'A weak causal claim, since coming first does not prove causing',
              'A personal attack, since it targets cyclists rather than their ideas',
              'An extreme prediction, since it says crime will keep rising for good'
            ],
            correctAnswer: 1,
            explanation: 'The argument infers causation from sequence alone; many other changes could explain the rise in crime, and none has been ruled out. The speech attacks no person and predicts nothing about the future, and coming after the lanes is exactly what fails to prove a cause.'
          },
          {
            question: 'A writer argues that the town must choose between closing the pool and raising taxes, though other options exist. Which revision best fixes this reasoning?',
            options: [
              'Make the two options sound more emotionally vivid',
              'Acknowledge other options and weigh their tradeoffs',
              'Attack the credibility of people who disagree',
              'Restate the two options more forcefully'
            ],
            correctAnswer: 1,
            explanation: 'The flaw is forcing a complex choice into two options. Fixing it means presenting the plausible alternatives (cutting other costs, raising fees, seeking grants) and reasoning through their merits. Vivid language, attacks, and forceful restatement leave the two-option frame in place.'
          }
        ]
      }
    }
  ]
};
