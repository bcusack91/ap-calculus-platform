import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-test-day-strategy-section-specific-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is the key strategy difference for CARS vs. science sections?`]: {
    question: r`A CARS passage argues for an economic theory that a student, an economics major, knows from his courses to be outdated. A question asks which statement the author would most likely agree with. How should he answer?`,
    options: [
      r`From his coursework, since current knowledge outranks the passage`,
      r`From a blend of both, choosing the most balanced of the options`,
      r`From the author's argument as written, setting his coursework aside`,
      r`From a random guess, since an outdated passage makes it unfair`,
    ],
    correctAnswer: 2,
    explanation: r`CARS rewards close reading and uses zero outside knowledge, so the answer comes from what the author wrote. Bringing in coursework, alone or blended with the passage, is the habit that works in the science sections and fails here. The question is fair because it asks about the author's view, not about what is true.`,
  },
  [r`How should you approach Chem/Phys passages?`]: {
    question: r`A passage states that a pendulum's period is $T = 2\pi\sqrt{L/g}$. A question asks what happens to the period when the length L is made 4 times longer. Which line of reasoning is correct and fastest?`,
    options: [
      r`T depends on √L, and √4 = 2, so the period doubles`,
      r`T depends on L, and 4/1 = 4, so the period quadruples`,
      r`T depends on 1/√L, and 1/√4 = ½, so the period halves`,
      r`T depends on L/g, and L cancels, so the period is unchanged`,
    ],
    correctAnswer: 0,
    explanation: r`Many of these questions are ratio reasoning: find the relationship, here T proportional to √L, and scale it, so 4 times the length gives √4 = 2 times the period. Quadrupling drops the square root, and halving inverts the relationship. Nothing cancels L, so the period cannot stay the same.`,
  },
  [r`What makes Psych/Soc distinctive?`]: {
    question: r`Reviewing a Psych/Soc practice section, a student finds she understood every scenario she missed. Each time, she chose a near-synonym, such as one named theory when the scenario matched a different one. What does this pattern show about the section?`,
    options: [
      r`Multi-step calculations and unit handling carry most of the weight`,
      r`Graph reading and experimental controls carry most of the weight`,
      r`Reading speed and stamina over long passages carry most of the weight`,
      r`Precise definitions and named theories carry most of the weight`,
    ],
    correctAnswer: 3,
    explanation: r`Psych/Soc is heavily terminology-driven, so knowing roughly what a term means is not enough when a near-synonym sits beside it. Her misses came from imprecise definitions and mixed-up theories, not from calculation, data reading or pace. Those other skills matter more in sections built on equations and data.`,
  },
  [r`What is the most efficient Bio/Biochem approach?`]: {
    question: r`A passage describes an enzyme that converts fructose 6-phosphate to fructose 1,6-bisphosphate, then gives a table of its activity with a newly made compound, "X". What is the most efficient way to handle the questions?`,
    options: [
      r`Skip the pathway and answer every question from the table alone`,
      r`Recognise the glycolysis step, then read X's effect from the table`,
      r`Recall X's effect from memory, then check which pathway it fits`,
      r`List every reaction of metabolism first, then return to the table`,
    ],
    correctAnswer: 1,
    explanation: r`The efficient approach is to recognise the pathway being described, here a step of glycolysis, and then take the specifics from the passage data. Skipping the pathway throws away the framework that makes the table meaningful. Compound X is new, so there is nothing to recall, and listing all of metabolism wastes time.`,
  },
  [r`How much math is required on the MCAT?`]: {
    question: r`With no calculator, a student must evaluate $\dfrac{(3.1 \times 10^{-3})(1.9 \times 10^{5})}{4.1 \times 10^{2}}$. Rounding each number to one digit, which estimate is closest?`,
    options: [
      r`About 0.15`,
      r`About 15`,
      r`About 150`,
      r`About 1.5`,
    ],
    correctAnswer: 3,
    explanation: r`Round to (3 × 10⁻³)(2 × 10⁵)/(4 × 10²). The top is 6 × 10², and 6 × 10² divided by 4 × 10² is 1.5. The other answers have the right digits but a power of ten off, which comes from mishandling the exponents: −3 + 5 − 2 = 0.`,
  },
  [r`Which section benefits most from flashcards?`]: {
    question: r`A student can fit in 30 minutes of flashcards a day and wants to spend them on the section where flashcards pay off most. Which section should get them, and why?`,
    options: [
      r`Psych/Soc, for its large vocabulary of discrete terms and theorists`,
      r`CARS, for its large number of dense passages to read closely`,
      r`Chem/Phys, for its ratio reasoning and mental approximation`,
      r`Bio/Biochem, for its passages of experimental data to interpret`,
    ],
    correctAnswer: 0,
    explanation: r`Flashcards suit discrete facts, and Psych/Soc has the largest vocabulary of separate terms and theorists. CARS uses no outside knowledge, so there is little to put on a card. Ratio reasoning in Chem/Phys and data interpretation in Bio/Biochem are skills built by working problems and passages, not by recalling cards.`,
  },
  [r`Why is content review alone insufficient?`]: {
    question: r`A student has read her notes for every chapter three times and can recite the facts, yet her practice scores have not moved in a month. Which change is most likely to raise them?`,
    options: [
      r`Reading the notes a fourth time, more slowly and with a highlighter`,
      r`Working practice passages that apply the content to new scenarios`,
      r`Copying the notes out by hand so that the facts stick more firmly`,
      r`Switching to a longer textbook that covers each chapter in more detail`,
    ],
    correctAnswer: 1,
    explanation: r`The exam tests application of content to new scenarios, so practice passages matter more than re-reading. She already knows the facts, so a fourth reading or copying the notes adds little. A longer textbook is more content review, which is the thing that has stopped helping.`,
  },
  [r`How should you handle experiment-based science passages?`]: {
    question: r`A passage describes mice given 0, 5 or 10 mg of a drug each day, with tumour size measured after four weeks. Before reading the questions, a student sorts out the design. Which summary is correct?`,
    options: [
      r`Tumour size is independent, drug dose is dependent, and 0 mg is the control`,
      r`Drug dose is independent, tumour size is the control, and 10 mg is dependent`,
      r`Drug dose is independent, tumour size is dependent, and 0 mg is the control`,
      r`Tumour size is independent, drug dose is the control, and 5 mg is dependent`,
    ],
    correctAnswer: 2,
    explanation: r`The researchers set the dose, so it is the independent variable; tumour size is what they measure, so it is the dependent variable; and the 0 mg group is the control for comparison. Swapping dose and tumour size reverses cause and effect. A dose group cannot be a dependent variable, and a measured outcome is not a control.`,
  },
}
