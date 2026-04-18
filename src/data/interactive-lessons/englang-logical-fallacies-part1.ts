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

## What Is a Logical Fallacy?

A **logical fallacy** is an error in reasoning that weakens an argument, even if the claim itself might be true.

Fallacy detection is crucial for AP reading and writing:
- In reading: evaluate argument quality
- In writing: avoid weak reasoning in your own essays

---

## Common AP Fallacies

| Fallacy | Definition | Example |
|--------|------------|---------|
| **Ad hominem** | Attacks person instead of argument | "Do not trust her climate plan; she is not even from this town." |
| **Straw man** | Misrepresents opponent's view to make it easier to attack | "My opponent wants bike lanes, so he wants to ban cars entirely." |
| **False dilemma** | Presents only two options when more exist | "Either cut all taxes or destroy the economy." |
| **Hasty generalization** | Draws broad conclusion from too little evidence | "Two students cheated, so the school has no integrity." |
| **Slippery slope** | Claims one step inevitably leads to extreme outcome | "If we allow late work, soon no deadlines will exist." |
| **Post hoc** | Assumes sequence implies causation | "I wore lucky socks and we won, so socks caused victory." |
| **Circular reasoning** | Claim is "proven" by restating itself | "The law is fair because it is just." |
| **Appeal to popularity** | Claims true/good because many people believe it | "Millions use it, so it must be safe." |

> 🔑 Identifying a fallacy does not automatically disprove the entire claim, but it DOES expose weakness in the argument's logic.
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
            question: '"Either we ban phones in schools or students will never learn anything." Which fallacy is this?',
            options: [
              'Ad hominem',
              'False dilemma',
              'Post hoc',
              'Circular reasoning'
            ],
            correctAnswer: 1,
            explanation: 'This statement presents only two extreme options and ignores possible middle-ground solutions (limited use policies, structured classroom rules, etc.). That is a false dilemma.'
          },
          {
            question: "\"My opponent's education policy is wrong because he failed algebra in high school.\" This is:",
            options: [
              'Straw man',
              'Ad hominem',
              'Appeal to popularity',
              'Hasty generalization'
            ],
            correctAnswer: 1,
            explanation: 'The statement attacks the person-s character/history instead of addressing the policy argument itself. That is ad hominem reasoning.'
          }
        ]
      }
    },
    {
      id: 'ellf1-content',
      type: 'text' as const,
      content: `
## Fallacies in AP Passages

### Why Writers Use Fallacies
- Emotional impact may distract from weak evidence
- Simplified framing can persuade quickly
- Audience bias may reward familiar but faulty logic

### How to Analyze Fallacies Effectively

| Weak Analysis | Strong Analysis |
|--------------|-----------------|
| "The author uses a fallacy." | "By framing the issue as only two options, the writer creates a false dilemma that ignores viable compromises, weakening logical credibility." |
| "This is bad logic." | "The ad hominem attack shifts focus from policy evidence to personal insult, which may energize supporters but undermines rational persuasion." |

### Distinguish Rhetorical Force from Logical Validity
A passage may be rhetorically powerful and logically flawed at the same time.

Example:
- Powerful emotional appeal to protect children
- But uses hasty generalization from one isolated incident

Your job: evaluate both rhetorical effectiveness and reasoning quality.

## Avoiding Fallacies in Your Writing
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

1) Attacking a person instead of addressing their argument is _______ hominem.

2) Assuming that because one event follows another, the first caused the second is a _______ hoc fallacy.

3) Presenting only two extreme options when others exist is a false _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['ad', 'post', 'dilemma'],
        hint1: 'Latin phrase starts with "ad."',
        hint2: 'Latin phrase starts with "post."',
        hint3: 'Two choices only, falsely.',
        explanation: 'Ad hominem attacks person. Post hoc confuses sequence with causation. False dilemma reduces options to extremes.'
      }
    },
    {
      id: 'ellf1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Fallacy** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"If we allow one extension, deadlines will disappear forever."',
            options: ['Slippery slope', 'Circular reasoning', 'Appeal to popularity', 'Ad hominem']
          },
          {
            label: '"Three athletes from that city were rude; everyone there is rude."',
            options: ['Hasty generalization', 'False dilemma', 'Post hoc', 'Straw man']
          },
          {
            label: '"You want to regulate social media ads, so you want to censor all speech."',
            options: ['Straw man', 'Ad hominem', 'Appeal to authority', 'Circular reasoning']
          }
        ],
        correctAnswers: ['Slippery slope', 'Hasty generalization', 'Straw man'],
        hint1: 'Predicts extreme chain reaction.',
        hint2: 'Too few examples for broad claim.',
        hint3: 'Distorts opponent position.',
        explanation: 'Extreme inevitability = slippery slope. Few examples to broad claim = hasty generalization. Misrepresentation = straw man.'
      }
    },
    {
      id: 'ellf1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Logical Fallacies

- Name the fallacy and explain the specific reasoning flaw
- Connect flaw to argumentative consequence (credibility, logic, fairness)
- Do not over-label: ensure the fallacy truly fits
- In essays, avoid fallacies in your own reasoning chain
- Differentiate rhetorical intensity from logical validity
- Fallacy-aware analysis can raise sophistication in rhetorical commentary
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
              'Valid causal claim due to chronological order',
              'Post hoc fallacy: temporal sequence alone does not establish causation',
              'Ad hominem fallacy',
              'Appeal to popularity'
            ],
            correctAnswer: 1,
            explanation: 'The argument assumes causation from sequence only. Many confounding variables could explain crime changes. Without controlled evidence, causal inference is invalid.'
          },
          {
            question: 'Which revision best fixes a false dilemma?',
            options: [
              'Make language more emotional',
              'Acknowledge multiple alternatives and evaluate tradeoffs',
              'Add a personal insult',
              'Repeat the binary more strongly'
            ],
            correctAnswer: 1,
            explanation: 'False dilemmas collapse complexity into two options. Fixing them requires presenting plausible additional options and reasoning through comparative merits.'
          }
        ]
      }
    }
  ]
};
