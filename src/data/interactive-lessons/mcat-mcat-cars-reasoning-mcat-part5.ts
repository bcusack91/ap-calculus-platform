export const mcatCarsReasonPart5Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr5-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 5 of 7 — Analogies & Parallel Reasoning**

### Analogy Questions

"Which situation is most analogous to the one described in the passage?"

### How Analogies Work

An analogy maps the **relationship structure** from one domain to another.

**Passage**: A government restricted media during a crisis, which the author criticizes as undermining democracy.

**Good analogy**: A company silencing employee feedback during a reorganization, criticized as undermining participation.

**Why it works**: Both involve authority figures suppressing information during disruption with negative consequences for participation/democracy.

### How to Evaluate Analogies

1. **Identify the abstract structure** of the passage's argument
2. Strip away surface details (topic, characters, setting)
3. Match the **relationship pattern**, not the surface features
4. The best analogy preserves the logical structure

### Common Traps

- **Surface similarity only**: Same topic but different logical relationship
- **Partial match**: Matches some elements but not the critical one
- **Reversed relationship**: Same elements but in opposite roles`
    },
    {
      id: 'cr5-worked',
      type: 'text' as const,
      content: `### Worked Example — Abstracting the Structure

The trap in analogy questions is that the *most topically similar* answer is usually wrong. The correct answer matches the *relationship*, not the subject matter.

> "A central bank lowered interest rates to spur growth, but the move mainly inflated asset prices for those who already owned assets, widening inequality. The author treats this as a cautionary case: an intervention aimed at a broad public good that disproportionately benefits the already-advantaged."

**Step 1 — Strip to a skeleton.** Remove "central bank," "interest rates," "assets." The abstract structure is:

> *An action intended to help everyone instead funnels its benefits to those who were already best-off, worsening a gap.*

**Step 2 — Test each candidate against the skeleton, not the topic.**
- "Another central bank raised rates to fight inflation." — Same topic (monetary policy) but the *structure* is different: there is no "broad good captured by the advantaged." **Surface-match trap.**
- "A scholarship fund for all students was claimed mostly by wealthy families who could navigate the application, widening the opportunity gap." — Different topic (education), but the skeleton matches *exactly*: broad-benefit program → captured by the already-advantaged → gap widens. **Correct.**
- "A toll was added to a bridge, and traffic fell." — Unrelated structure.

**Step 3 — Watch for the reversed relationship.** A choice describing a program that *successfully helped the disadvantaged* uses the same nouns (policy, inequality) but runs the relationship backward — a classic distractor.

**Takeaway:** Convert the passage into a one-sentence template with the specifics deleted, then ask which option fits the *template*. Topic overlap is a lure; structural identity is the target.`
    },
    {
      id: 'cr5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Analogies** 🎯`,
      exercise: {
        questions: [
          {
            question: `A passage describes how an invasive species outcompeted native plants because it grew faster and used more resources. Which is the best analogy?`,
            options: [`A large retailer driving small businesses out by offering lower prices through greater buying power`, `A student studying harder and earning better grades`, `A drought killing all plants equally`, `Two athletes competing fairly in a race`],
            correctAnswer: 0,
            explanation: `The key structure: an entity with a resource advantage displaces a weaker entity. The large retailer (invasive species) outcompetes small businesses (native plants) through resource advantage (buying power/growth rate).`
          },
          {
            question: `A passage argues that a critic who never created art has no standing to judge artists. The deep structure is "one who has not done X cannot evaluate X." Which situation is most analogous?`,
            options: [`Claiming a food reviewer who cannot cook has no right to critique restaurants`, `Claiming a chef should taste a dish before serving it`, `Claiming critics and artists often disagree`, `Claiming art is purely subjective`],
            correctAnswer: 0,
            explanation: `The abstract pattern is "lack of first-hand practice disqualifies one from evaluating." The food reviewer who cannot cook mirrors the non-artist critic precisely. The chef option reverses the relationship (it is about the doer, not the evaluator).`
          },
          {
            question: `In an analogy question, the answer choice that shares the passage's TOPIC but not its logical relationship is best described as:`,
            options: [`A surface-similarity trap — tempting because of subject overlap but structurally mismatched`, `The correct answer, since topic match is what matters`, `An out-of-scope choice`, `A circular argument`],
            correctAnswer: 0,
            explanation: `Analogy questions reward structural correspondence, not subject-matter overlap. A choice that merely shares the topic while reversing or omitting the key relationship is the surface-similarity trap — the most common wrong answer on these items.`
          },
          {
            question: `Passage structure: "A short-term subsidy created long-term dependence, so the cure worsened the disease." Which option preserves this exact relationship?`,
            options: [`Prescribing a painkiller that relieves symptoms briefly but creates an addiction that is worse than the original pain`, `Prescribing antibiotics that fully cure an infection`, `A subsidy that successfully ended a famine`, `A patient who recovers without any treatment`],
            correctAnswer: 0,
            explanation: `The template is "a remedy produces a worse long-term problem than it solved." The painkiller-to-addiction case matches it directly. The antibiotics and successful-subsidy options describe remedies that work, reversing the relationship.`
          },
          {
            question: `Which step should come FIRST when answering a CARS analogy question efficiently?`,
            options: [`Reduce the passage scenario to an abstract one-sentence relationship with the specifics removed`, `Pick the choice with the most words in common with the passage`, `Eliminate the longest answer choice`, `Look up the topic in outside knowledge`],
            correctAnswer: 0,
            explanation: `Abstracting the relationship first gives you a template to test each option against, which neutralizes surface-similarity traps. Matching shared words or judging by length ignores logical structure, the very thing the question tests.`
          },
          {
            question: `An analogy choice uses the same actors as the passage but swaps which one holds power (e.g., the suppressed party becomes the suppressor). This choice exhibits:`,
            options: [`A reversed-relationship trap — correct elements arranged in the wrong roles`, `A perfect structural match`, `An appeal to authority`, `A hasty generalization`],
            correctAnswer: 0,
            explanation: `When the same elements appear but their roles are flipped, the logical relationship is inverted, so the analogy fails despite the familiar cast. Recognizing reversed relationships prevents you from being fooled by superficially matching elements.`
          }
        ]
      }
    },
    {
      id: 'cr5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Analogies match STRUCTURE, not surface features
- Strip the scenario to a one-sentence template, then test each option
- Topic overlap is a lure; structural identity is the target
- Watch for traps: surface-only matches and reversed relationships
- Good analogies preserve the relationship between key elements`
    }
  ]
};
