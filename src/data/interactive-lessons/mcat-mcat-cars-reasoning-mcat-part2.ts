export const mcatCarsReasonPart2Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr2-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 2 of 7 — Logical Fallacies**

### Common Fallacies Tested on CARS

| Fallacy | Description | Example |
|---------|-------------|---------|
| **Ad hominem** | Attacking the person, not the argument | "His theory is wrong because he's biased" |
| **Straw man** | Misrepresenting someone's argument to attack it easily | "She wants slight reform" → "She wants to destroy everything" |
| **False dichotomy** | Presenting only 2 options when more exist | "Either we ban it completely or accept all consequences" |
| **Appeal to authority** | Using someone's status instead of evidence | "A celebrity says it works, so it must" |
| **Circular reasoning** | Conclusion restates the premise | "It's true because it's a fact" |
| **Hasty generalization** | Broad conclusion from limited data | "I met two rude people from X, so everyone from X is rude" |
| **Post hoc** | Assuming cause because of timing | "I wore my lucky hat and won, so the hat caused the win" |
| **Slippery slope** | Assuming chain reaction without evidence | "If we allow X, then Y and Z will inevitably follow" |

### On the MCAT

Questions may ask you to identify the flaw in reasoning, either in the passage or in an answer choice.`
    },
    {
      id: 'cr2-worked',
      type: 'text' as const,
      content: `### Worked Example — Naming the Flaw Precisely

CARS rarely asks "is this argument flawed?" Instead it asks you to *name the specific flaw*, and the wrong answers are usually other real fallacies. Precision matters.

> "The senator claims his transit bill will reduce congestion. But he owns shares in a bus manufacturer, so we can dismiss his proposal entirely."

**Identify the move.** The speaker rejects the *proposal* by pointing to the senator's *financial interest* rather than engaging the bill's merits. That is a classic **ad hominem** — specifically the *circumstantial* form, which attacks a person's situation or motive.

**Why not the look-alikes?**
- It is *not* a **straw man**: the speaker has not distorted the bill into a weaker version; the bill is simply ignored.
- It is *not* an **appeal to authority** (that would be accepting a claim *because* of someone's status, the mirror image).
- It is *not* a **false dichotomy**: no forced "either/or" is presented.

**The deeper point.** A conflict of interest is a legitimate reason to *scrutinize* a claim, but it is never by itself a reason to conclude the claim is *false*. The bill might genuinely reduce congestion regardless of who profits. CARS rewards the test-taker who can say: "an argument can use a fallacy and still happen to reach a true conclusion." The fallacy lies in the *inference*, not necessarily in the *verdict*.`
    },
    {
      id: 'cr2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Logical Fallacies** 🎯`,
      exercise: {
        questions: [
          {
            question: `A critic responds to a scientist's climate research by saying, "She receives government funding, so her conclusions cannot be trusted." This is an example of:`,
            options: [`Ad hominem, faulting the researcher rather than the evidence`, `Straw man, distorting her findings into a weaker claim`, `False dichotomy, allowing only complete trust or none at all`, `Post hoc, linking her funding to her results by timing`],
            correctAnswer: 0,
            explanation: `Ad hominem attacks the person rather than addressing the argument's merits. The funding source doesn't automatically invalidate the research findings.`
          },
          {
            question: `An author writes: "Opponents of the new curriculum say we should not adopt it without testing. In other words, they want our children to remain ignorant forever." The author has committed which fallacy?`,
            options: [`Straw man, recasting the opponents' view as extreme`, `Post hoc, confusing sequence with causation`, `Appeal to authority, invoking experts in place of evidence`, `Circular reasoning, assuming what it sets out to prove`],
            correctAnswer: 0,
            explanation: `The opponents asked only for testing before adoption. The author replaces this reasonable request with a grotesque exaggeration ("ignorant forever") and attacks that instead. Misrepresenting a position to knock it down is the straw man fallacy.`
          },
          {
            question: `"Either we permit unlimited free speech on campus, or we descend into censorship and tyranny." The flaw here is best described as:`,
            options: [`False dichotomy, offering only two extreme options`, `Hasty generalization from a few campus cases`, `Ad hominem, dismissing supporters of speech limits`, `Slippery slope, predicting a chain of worsening events`],
            correctAnswer: 0,
            explanation: `The statement forces a choice between two extremes and ignores the many moderate positions (e.g., narrow, content-neutral restrictions). Presenting an artificially limited menu of options is the false dichotomy (false dilemma). It is not a slippery slope, because no chain of intermediate steps is described; the two outcomes are simply posed as the only choices.`
          },
          {
            question: `A passage argues: "Crime fell the year after the city repainted its bridges; clearly, civic beautification deters criminals." Which fallacy is present, and what is the BEST single objection?`,
            options: [`Post hoc; an unmentioned factor could explain the drop`, `Straw man; the author distorts an opposing view`, `Circular reasoning; the conclusion merely restates a premise`, `Appeal to authority; the author relies on an expert improperly`],
            correctAnswer: 0,
            explanation: `"After this, therefore because of this" (post hoc ergo propter hoc) infers cause from mere temporal order. The strongest objection introduces an alternative explanation (e.g., increased policing) rather than disputing the crime statistic itself.`
          },
          {
            question: `Which scenario illustrates a slippery slope fallacy rather than a legitimate causal warning?`,
            options: [`"One retake will lead to endless retakes, then meaningless grades, then the school's collapse"`, `"If we remove the load-bearing wall, the second floor will sag, because engineers have measured the stress"`, `"If the spillway clogs, the reservoir will overflow and flood the valley, as hydrologists' models show"`, `"If smoking rates rise, lung-cancer cases will rise in turn, according to large cohort studies"`],
            correctAnswer: 0,
            explanation: `A slippery slope becomes fallacious when it asserts an inevitable chain of consequences without evidence that each link follows. The wall example is a justified causal chain backed by data; the retake example simply assumes catastrophe with no support for any step.`
          },
          {
            question: `Why is it a mistake to conclude that an argument's CONCLUSION is false merely because the argument contains a logical fallacy?`,
            options: [`A fallacy breaks the support, not necessarily the conclusion's truth`, `A fallacy only matters in deductive arguments, not inductive ones`, `A fallacy converts a deductive argument into an inductive one`, `Identifying a fallacy is itself a fallacy, so the charge cancels out`],
            correctAnswer: 0,
            explanation: `A fallacy undermines the *link* between premises and conclusion, not the conclusion's truth value. Treating "the argument is fallacious, therefore its conclusion is false" as valid is itself an error (the fallacy fallacy). The conclusion must be evaluated on its own evidence.`
          }
        ]
      }
    },
    {
      id: 'cr2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Know the major fallacies — they appear in CARS passages and questions
- Ad hominem, straw man, and false dichotomy are most common
- Name the flaw precisely; wrong answers are often other real fallacies
- The best objection to a post hoc/causal flaw supplies an alternative cause
- An argument can use a fallacy and still reach a true conclusion`
    }
  ]
};
