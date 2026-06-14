export const mcatCarsReasonPart4Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr4-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 4 of 7 — Strengthening & Weakening Arguments**

### How to Strengthen an Argument

Add evidence/premises that make the conclusion MORE likely.
- Provides supporting data
- Eliminates alternative explanations
- Reinforces an assumption

### How to Weaken an Argument

Add evidence/premises that make the conclusion LESS likely.
- Provides contradicting data
- Introduces alternative explanations
- Undermines an assumption

### The Process

1. **Identify the argument's conclusion**
2. **Identify the evidence/reasoning**
3. **Find the gap** (assumption) between evidence and conclusion
4. **The best strengthener bridges that gap; the best weakener widens it**

### MCAT Example

Argument: "City X reduced crime by installing more streetlights."

- **Strengthener**: "Cities with similar demographics that didn't install lights saw no crime reduction" (eliminates alternative explanation)
- **Weakener**: "City X also hired 200 new police officers during the same period" (introduces alternative explanation)`
    },
    {
      id: 'cr4-worked',
      type: 'text' as const,
      content: `### Worked Example — Ranking Four Weakeners

CARS weaken questions are almost never "find the only relevant choice." They are "find the *most* damaging choice among several plausible ones." You must rank.

> "A study found that employees who take a midday walk report higher productivity. The company concludes that mandating midday walks will raise output."

**Conclusion:** mandating walks → higher output. **Gap:** the study shows a *correlation among self-selected walkers*; the conclusion assumes *causation that will hold when walking is imposed on everyone*.

Now rank candidate weakeners:

**(A)** "Employees who already feel energetic are the ones who choose to walk." — Attacks the causal direction (self-selection). Strong: it offers a rival explanation for the correlation.

**(B)** "Productivity was self-reported rather than objectively measured." — Attacks the *measure*. Real but weaker; it questions the data quality, not the central causal leap.

**(C)** "Some employees prefer to walk in the morning." — Nearly irrelevant to whether mandated midday walks raise output.

**(D)** "When a pilot program mandated walks, average output did not change." — **Directly tests the actual conclusion** under the actual intervention. This is the strongest: it targets the precise claim (mandating walks raises output) with a result about mandating walks.

**Ranking:** D > A > B > C. The lesson: the best weakener strikes the *exact conclusion as stated*, especially the move from a self-selected correlation to a forced-intervention prediction. An answer that attacks a side issue (the measure, a scheduling preference) loses to one that hits the causal core.`
    },
    {
      id: 'cr4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Strengthen/Weaken** 🎯`,
      exercise: {
        questions: [
          {
            question: `An author argues that meditation reduces anxiety based on a study where meditators reported less anxiety than non-meditators. Which would MOST weaken this argument?`,
            options: [`People who choose to meditate may have been less anxious to begin with (self-selection bias)`, `Meditation has existed for thousands of years`, `Some meditators also exercise regularly`, `Anxiety can be measured in multiple ways`],
            correctAnswer: 0,
            explanation: `Self-selection bias provides an alternative explanation: the correlation may not be causal. Less anxious people might simply be more likely to try meditation. This directly undermines the argument's core assumption of causation.`
          },
          {
            question: `Argument: "Country A's literacy rate rose after it increased education spending; therefore the spending caused the rise." Which finding would MOST strengthen this causal claim?`,
            options: [`Comparable countries that did NOT increase spending saw no comparable rise in literacy over the same period`, `Country A has a long cultural history of valuing books`, `Education spending is popular with voters`, `Literacy is difficult to define precisely`],
            correctAnswer: 0,
            explanation: `A controlled comparison that holds other factors roughly constant and isolates the spending variable is the strongest support for causation. By ruling out the possibility that literacy would have risen anyway, it closes the main alternative explanation.`
          },
          {
            question: `A study claims a drug works because patients improved after taking it. The single most powerful design feature that would strengthen the causal conclusion is:`,
            options: [`A randomized control group given a placebo that did NOT improve`, `A larger sample of patients who all received the drug`, `Testimonials from patients who felt better`, `Endorsement by a famous physician`],
            correctAnswer: 0,
            explanation: `Without a control group, improvement could reflect the placebo effect or natural recovery. A randomized placebo control that fails to improve isolates the drug as the cause. Simply enlarging a single-arm sample does not address the missing comparison.`
          },
          {
            question: `Among four answer choices to a "which most weakens" question, which feature usually identifies the BEST weakener?`,
            options: [`It introduces a plausible alternative explanation for the observed result, directly challenging the causal claim`, `It uses the most forceful, absolute language`, `It is the longest and most detailed choice`, `It repeats a fact already stated in the passage`],
            correctAnswer: 0,
            explanation: `The strongest weakener attacks the inference from evidence to conclusion, typically by supplying a rival cause. Length, forcefulness, or restating known facts do not weaken an argument; a credible alternative explanation does.`
          },
          {
            question: `Argument: "Schools with longer recess have happier students, so lengthening recess will make students happier." Which choice, if true, would MOST weaken it?`,
            options: [`Schools that lengthened recess as an experiment saw no change in student happiness`, `Recess is enjoyable for most children`, `Happiness can be assessed with surveys`, `Some schools have indoor recess`],
            correctAnswer: 0,
            explanation: `A direct experimental result showing that actually lengthening recess produced no happiness gain attacks the precise causal prediction. It is far more damaging than choices about the pleasantness of recess, measurement methods, or recess location, which leave the causal leap intact.`
          },
          {
            question: `Why is "the data were collected by a researcher with a financial interest in the result" generally a WEAKER weakener than "a controlled replication failed to reproduce the result"?`,
            options: [`A conflict of interest only raises suspicion about bias, whereas a failed replication directly attacks whether the effect is real`, `Conflicts of interest are never relevant on the MCAT`, `Failed replications are easier to ignore`, `The two are logically identical`],
            correctAnswer: 0,
            explanation: `A conflict of interest is an ad-hominem-adjacent concern: it suggests possible bias but does not show the conclusion is false. A failed controlled replication is direct empirical evidence against the effect itself, so it strikes the conclusion more decisively.`
          }
        ]
      }
    },
    {
      id: 'cr4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- To strengthen: support assumptions, eliminate alternatives, add confirming evidence
- To weaken: undermine assumptions, introduce alternatives, add contradicting evidence
- Always identify the CONCLUSION and the GAP first
- Best weakeners supply a rival cause or hit the exact conclusion as stated
- Rank choices — pick the one that strikes the causal core, not a side issue`
    }
  ]
};
