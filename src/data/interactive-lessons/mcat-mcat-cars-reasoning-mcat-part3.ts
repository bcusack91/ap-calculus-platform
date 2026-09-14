export const mcatCarsReasonPart3Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr3-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 3 of 7 — Assumptions & Implicit Reasoning**

### What is an Assumption?

An assumption is an UNSTATED premise that must be true for the argument to work.

**Example:**
- Argument: "Students who take AP classes get into better colleges."
- Unstated assumption: AP classes are a significant factor in admissions (not just correlation).

### Finding Assumptions on CARS

Ask yourself: **"What must be true for this conclusion to follow from this evidence?"**

### The Negation Test

To check if something is a necessary assumption:
1. Negate the statement
2. If the argument falls apart → it was a necessary assumption
3. If the argument still works → it was NOT a necessary assumption

**Example:**
- Argument: "Organic food is healthier because it has no pesticides."
- Test: "What if absence of pesticides doesn't make food healthier?" → Argument collapses!
- Therefore, "no pesticides = healthier" is a necessary assumption.

### CARS Questions About Assumptions

- "The author's argument assumes which of the following?"
- "Which is a necessary condition for the author's conclusion?"
- "The argument depends on the assumption that..."`
    },
    {
      id: 'cr3-worked',
      type: 'text' as const,
      content: `### Worked Example — Running the Negation Test

The negation test is the single most reliable tool for assumption questions. Here is how to apply it under time pressure.

> "The museum's new evening hours caused attendance to rise, since the only change made this season was the extended schedule."

**Conclusion:** the evening hours *caused* the attendance increase.
**Stated evidence:** the schedule was the *only* change.

**Candidate assumption A:** "The rise was not caused entirely by some outside factor."

Negate it: *"The rise WAS caused entirely by some outside factor"* (a popular new exhibit, a citywide tourism surge, free transit). Then the evening hours account for none of the increase, and the claim that they caused it **collapses**. So A is a **necessary assumption**. Good answer.

**Candidate assumption B:** "No outside factor contributed anything at all to the rise."

Negate it: *"Some outside factor contributed part of the rise."* The argument can still stand — the evening hours could have caused the rest of the increase. So B is **not necessary**. It would *strengthen* the argument by ruling out every rival contribution, but the argument does not require it. Trap: B sounds like A, but it demands far more than the argument needs.

**Candidate assumption C:** "The museum advertised the new hours widely."

Negate it: *"The museum did not advertise the new hours."* The argument can still stand — people might have discovered the hours by other means, and the conclusion (the hours caused the rise) is untouched. So C is **not necessary** either. It might make the conclusion more plausible, but the question asked for a required assumption. Trap.

**The discipline:** Negate the choice and ask, "Does the argument now fall apart?" If yes → necessary assumption. If the argument survives the negation → reject the choice, no matter how relevant it sounds. Sufficient-but-not-necessary statements are the most common wrong answers on these items.`
    },
    {
      id: 'cr3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Assumptions** 🎯`,
      exercise: {
        questions: [
          {
            question: `An author argues that teaching students chess improves their math skills because chess requires logical thinking. An assumption of this argument is:`,
            options: [`Logic practiced in chess carries over to math`, `Most students enjoy chess enough to practice it`, `Math depends more on logic than on memorization`, `Chess is a harder logical task than math`],
            correctAnswer: 0,
            explanation: `The argument assumes that practicing logical thinking in one domain (chess) improves it in another (math). If skills don't transfer between domains, the argument fails. Use the negation test to verify.`
          },
          {
            question: `Argument: "The new highway will cut commute times, so it will improve workers' quality of life." Which is a NECESSARY assumption?`,
            options: [`Shorter commutes improve workers' quality of life`, `The highway is the cheapest project that would cut commutes`, `All of the affected workers commute to their jobs by car`, `Quality of life can be measured precisely enough to compare`],
            correctAnswer: 0,
            explanation: `The conclusion jumps from "shorter commutes" to "better quality of life." That bridge requires that shorter commutes actually improve quality of life. Negate it — "shorter commutes do not improve quality of life" — and the conclusion no longer follows. The other choices are not required.`
          },
          {
            question: `Apply the negation test. Argument: "Since the clinic adopted electronic records, billing errors dropped; therefore electronic records reduce billing errors." A proposed assumption is "The drop was not caused entirely by new billing staff hired at the same time." Negating this assumption shows it is:`,
            options: [`Necessary, since the staff would then explain the whole drop`, `Not necessary, since the records still preceded the drop`, `Not necessary, since staffing is unrelated to billing errors`, `Necessary, since it restates the argument's conclusion`],
            correctAnswer: 0,
            explanation: `Negate the statement: "The drop WAS caused entirely by new billing staff hired at the same time." Then the electronic records account for none of the drop, so the timing no longer supports the conclusion that they reduce billing errors, and the argument collapses. Because negating it destroys the argument, the statement is a necessary assumption. The records preceding the drop cannot save the argument once another cause explains all of it, staffing plainly can affect billing errors, and the statement is about a rival cause rather than a restatement of the conclusion.`
          },
          {
            question: `Which statement best distinguishes a NECESSARY assumption from a SUFFICIENT strengthener on CARS?`,
            options: [`Negating the assumption breaks the argument; negating a strengthener does not`, `They are two names for the same kind of premise`, `A necessary assumption always appears explicitly in the passage`, `A strengthener is tested by negation; an assumption is not`],
            correctAnswer: 0,
            explanation: `Assumption questions demand a premise the argument cannot do without — confirmed when its negation breaks the argument. A strengthener merely improves the case; the argument can still stand if the strengthener is false. Mistaking a helpful strengthener for a required assumption is a classic trap.`
          },
          {
            question: `Author: "This poem must have been written after 1850, because it references the telegraph." This argument depends on the unstated assumption that:`,
            options: [`This poem's telegraph reference could not predate 1850 or be a later addition`, `The poet personally sent or received a telegraph message`, `Poets of that period routinely wrote about new inventions of their day`, `The poem was published soon after it was first composed`],
            correctAnswer: 0,
            explanation: `The dating inference assumes the telegraph reference genuinely fixes the composition date — i.e., the technology postdates 1850 and the reference was not inserted anachronistically or in a later revision. Negate that link and the conclusion about the date no longer follows.`
          },
          {
            question: `A passage argues a policy "will succeed because similar policies succeeded in Denmark." Identifying the hidden assumption most helps you answer which related question type?`,
            options: [`An analogy question about whether Denmark's conditions apply here`, `A vocabulary-in-context question about the word "succeed"`, `A tone question about the author's confidence in the policy`, `A detail question about what the Danish policy included`],
            correctAnswer: 0,
            explanation: `The argument assumes the two settings are relevantly similar so the Danish result transfers. Surfacing that assumption is exactly what analogy and "would this also apply" questions test — they hinge on whether the conditions that made the policy work in Denmark are present elsewhere.`
          }
        ]
      }
    },
    {
      id: 'cr3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Assumptions are unstated premises the argument depends on
- Ask: "What must be true for this conclusion to follow?"
- Negation test: negate it — if the argument breaks, it's necessary
- Necessary assumption ≠ sufficient strengthener (a common trap)
- Assumption questions are among the most common on CARS`
    }
  ]
};
