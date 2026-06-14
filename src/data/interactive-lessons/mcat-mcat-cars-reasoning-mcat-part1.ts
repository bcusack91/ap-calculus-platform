export const mcatCarsReasonPart1Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr1-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 1 of 7 — Deductive vs. Inductive Reasoning**

### Deductive Reasoning

Starts from general principles → specific conclusions

**If the premises are true, the conclusion MUST be true.**

Example:
- All mammals breathe air. (premise)
- Whales are mammals. (premise)
- Therefore, whales breathe air. (conclusion — guaranteed!)

### Inductive Reasoning

Starts from specific observations → general conclusions

**Even if the premises are true, the conclusion is only PROBABLE.**

Example:
- Every swan I've seen is white. (observation)
- Therefore, all swans are white. (conclusion — could be wrong! Black swans exist.)

### Why This Matters for CARS

- CARS passages often use inductive reasoning — conclusions based on evidence
- Questions may test whether you can identify the type of reasoning
- "Strongest" answers provide deductive certainty; "weakest" answers rely on thin induction`
    },
    {
      id: 'cr1-worked',
      type: 'text' as const,
      content: `### Worked Example — Diagnosing the Reasoning

Read this short argument the way a CARS passage would present it:

> "In the three societies we examined, the spread of literacy preceded a measurable rise in political dissent. We therefore conclude that mass literacy tends to destabilize authoritarian regimes."

**Step 1 — Find the conclusion.** The signal word *therefore* marks it: "mass literacy tends to destabilize authoritarian regimes."

**Step 2 — Find the evidence.** Three observed societies in which literacy came before dissent.

**Step 3 — Classify the reasoning.** The author moves from a small set of specific cases (three societies) to a general claim about regimes broadly. That is **inductive** — the conclusion is *probable*, not *guaranteed*. Notice the hedge word "tends to"; competent authors writing inductively almost always soften the claim.

**Step 4 — Locate the vulnerability.** Because the reasoning is inductive, the argument is only as strong as the sample. Three cases is thin, and the author has shown *sequence* (literacy, then dissent), not *cause*. A CARS question that asks you to weaken this argument will reward an answer that supplies an alternative cause or a counterexample society — not one that nitpicks a definition.

**Takeaway:** Once you label an argument deductive or inductive, you already know *how* it can fail. Deductive arguments fail when a premise is false or the logic is invalid; inductive arguments fail when the sample is unrepresentative or a rival explanation exists.`
    },
    {
      id: 'cr1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Reasoning Types** 🎯`,
      exercise: {
        questions: [
          {
            question: `An author surveys 500 college students and concludes that young adults prefer digital textbooks. This is an example of:`,
            options: [`Inductive reasoning — generalizing from a sample to a broad claim`, `Deductive reasoning from established principles`, `Neither — this is pure observation`, `Circular reasoning`],
            correctAnswer: 0,
            explanation: `The author moves from specific observations (500 students) to a general claim (young adults broadly). This is inductive — the conclusion may be likely but is not guaranteed.`
          },
          {
            question: `"Every member of the committee holds an advanced degree. Dr. Reyes is a member of the committee. Therefore, Dr. Reyes holds an advanced degree." This argument is:`,
            options: [`Deductive and valid — the conclusion follows necessarily from the premises`, `Inductive and probable — based on a limited sample`, `Deductive but invalid — the conclusion does not follow`, `An appeal to authority`],
            correctAnswer: 0,
            explanation: `This is a classic deductive syllogism. If both premises are true, the conclusion cannot be false. Moving from a general rule (every member) to a specific case (Dr. Reyes) with guaranteed certainty is the hallmark of valid deduction.`
          },
          {
            question: `A passage concludes that a deductive argument's conclusion is FALSE. Assuming the argument is logically valid, what must be true?`,
            options: [`At least one of the premises must be false`, `The reasoning must be inductive after all`, `The conclusion must actually be true`, `The argument must contain a fallacy of relevance`],
            correctAnswer: 0,
            explanation: `In a valid deductive argument, true premises guarantee a true conclusion. So if the conclusion is false, validity forces us to conclude that at least one premise must be false. (Validity is about structure; soundness adds the requirement that the premises also be true.)`
          },
          {
            question: `Which feature of an author's language MOST strongly signals that an argument is intended as inductive rather than deductive?`,
            options: [`Hedged, probabilistic wording such as "tends to," "suggests," or "likely"`, `The use of the word "therefore"`, `A numbered list of premises`, `A reference to a historical event`],
            correctAnswer: 0,
            explanation: `Inductive arguments yield probable conclusions, and careful authors mark that uncertainty with qualifiers like "tends to," "suggests," or "likely." "Therefore" merely signals a conclusion and appears in both types, so it does not distinguish them.`
          },
          {
            question: `On CARS, why does correctly classifying an argument as inductive help you answer a "which would most weaken" question?`,
            options: [`It tells you the argument can be undermined by a counterexample or an unrepresentative sample, focusing your search for the best answer`, `It proves the conclusion is false`, `It means any answer choice that mentions the topic will weaken it`, `It guarantees the correct answer uses the word "always"`],
            correctAnswer: 0,
            explanation: `Knowing an argument is inductive tells you HOW it is vulnerable: through a weak or biased sample or a counterexample. This lets you predict the form of the best weakener instead of evaluating four choices blindly. Classification narrows the search.`
          },
          {
            question: `An author writes: "No purely deductive argument can establish a new empirical fact about the world; deduction only unpacks what its premises already contain." The author's point is best understood as a claim that deduction is:`,
            options: [`Truth-preserving but not ampliative — it cannot add information beyond the premises`, `Always weaker than induction`, `A type of logical fallacy`, `Identical to circular reasoning`],
            correctAnswer: 0,
            explanation: `Deduction is "truth-preserving": valid form guarantees the conclusion given the premises, but it is not "ampliative" — it never reaches beyond the content already in the premises. Induction, by contrast, is ampliative (it adds risk and reach) but not truth-preserving.`
          }
        ]
      }
    },
    {
      id: 'cr1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Deductive: general → specific, conclusion is certain if premises true
- Inductive: specific → general, conclusion is probable but not guaranteed
- Most CARS arguments are inductive — evidence-based but not airtight
- Valid + true premises = sound; validity alone only concerns structure
- Identifying reasoning type tells you exactly how an argument can fail`
    }
  ]
};
