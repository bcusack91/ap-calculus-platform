export const lessonData = {
  topicSlug: 'sat-command-evidence-core-skills',
  sections: [
    {
      id: 'evid-core-p2-recap',
      type: 'text' as const,
      content: `# Command of Evidence: Practice

**Part 2 of 2 — Run the Steps**

### The steps

1. **Underline the claim.** Find the sentence that says what someone is trying to prove. It is usually right there in the question.
2. **Say what would prove it.** Before reading the choices, finish this sentence: "To believe this, I would need to see ______."
3. **Check each choice for topic match.** Does it talk about the same thing as the claim? If not, cross it out right away.
4. **Pick the one that settles it**, not the one that just sits nearby.

### The wrong answers almost always look like this

- **Off topic** — a true fact about the wrong thing. The claim is about cost; the choice is about history.
- **Too vague** — "many people are interested." Interest is not proof.
- **Backwards** — it actually argues against the claim.

### A quick word on strong versus weak

Some evidence carries more weight than other evidence.

- **Strong:** measured data, results from a study, direct quotes or actions from the text.
- **Weak:** one person's story, a feeling, an emotional appeal with no facts behind it.

One person's experience is not nothing — but a study of two thousand people beats it.

### One more term

A **counterexample** is a fact that works *against* a claim. If a question asks what would weaken or challenge an argument, you are hunting for a counterexample instead. Same skill, opposite direction.`
    },
    {
      id: 'evid-core-p2-q1',
      type: 'quiz' as const,
      question: `A city planner claims that the new streetlights on Oak Avenue have made evening walking safer. Which finding, if true, would most directly support that claim?`,
      options: [
        `The new streetlights use less electricity than the old ones.`,
        `Reported nighttime accidents on Oak Avenue fell by half in the year after the lights were installed.`,
        `Residents describe the new lights as attractive.`,
        `Oak Avenue is the oldest street in the city.`
      ],
      correctAnswer: 1,
      explanation: `The claim is about safety in the evening, so the evidence has to measure something about nighttime safety. Reported nighttime accidents falling by half after installation speaks to exactly that. Using less electricity is a fact about energy cost, which is a different subject from whether people are safer.`
    },
    {
      id: 'evid-core-p2-q2',
      type: 'quiz' as const,
      question: `Which of the following is the weakest form of evidence for a claim?`,
      options: [
        `Results from a carefully run experiment`,
        `Data gathered from a large survey`,
        `A direct quotation from the passage`,
        `An emotional appeal with no facts behind it`
      ],
      correctAnswer: 3,
      explanation: `An emotional appeal with no facts behind it is the weakest, because it asks you to feel something rather than showing you anything you can check. Evidence gets its strength from being verifiable — someone else could look and confirm it. Experiment results, survey data, and direct quotations can all be checked, which is what makes them stronger.`
    },
    {
      id: 'evid-core-p2-q3',
      type: 'quiz' as const,
      question: `A question asks which finding would most WEAKEN a researcher's claim that a tutoring program raises test scores. What are you looking for?`,
      options: [
        `The choice with the largest numbers in it`,
        `The choice that repeats the researcher's claim`,
        `A finding that argues against the claim, such as tutored students scoring no higher than untutored students`,
        `Any detail about how the tutoring program is run`
      ],
      correctAnswer: 2,
      explanation: `A weaken question asks for a counterexample — a finding that pushes against the claim. Tutored students scoring no higher than untutored students does that directly, because the claim says tutoring raises scores. A choice that repeats the claim would strengthen it instead, which is the opposite of what the question asks for.`
    },
    {
      id: 'evid-core-p2-q4',
      type: 'quiz' as const,
      question: `A student wants to show that a character in a story is generous. Which is the best kind of textual evidence to cite?`,
      options: [
        `A specific action or line of dialogue in which the character gives something away`,
        `A description of the weather in the opening paragraph`,
        `The reader's own sense that the character seems nice`,
        `The total number of pages the character appears on`
      ],
      correctAnswer: 0,
      explanation: `To show a character trait, cite what the character actually does or says, so a specific action or line of dialogue showing the character giving something away is the right kind of evidence. It comes straight from the text and it demonstrates the exact trait being claimed. The reader's personal sense of the character is a feeling rather than something in the text, so it cannot serve as textual evidence.`
    }
  ]
}
