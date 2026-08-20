export const lessonData = {
  topicSlug: 'sat-reading-comprehension-advanced',
  sections: [
    {
      id: 'advrc2-intro',
      type: 'text' as const,
      content: `# Reading Comprehension: Traps & Speed

**Part 2 of 3 — The Engineering Behind the Distractors**

At 700+, you're no longer fooled by off-topic answers. The remaining traps are directional — they get the passage's *content* right and its *vector* wrong.

### Trap 1: The Reversed Target
A passage that criticizes historians for mocking an inventor contains criticism, an inventor, and mockery. The trap answer says the singled-out sentence "criticizes the inventor." Same nouns, opposite direction. Defense: for every function question, name the sentence's **target** aloud before reading choices — *who* is being challenged here?

### Trap 2: The Concession Read as Surrender
"That may be defensible." "The biology is not in doubt." "The doubling may be real." Each grants a point in order to sharpen the attack that follows. The trap says the author "withdraws the criticism" or "agrees with the standard view." Defense: check the next sentence. If it begins "What it is not..." / "Its role, however..." — the concession was tactical.

### Trap 3: The Denial Overshoot (cross-text)
Hard Text 2s accept Text 1's numbers and dispute the inference. Any choice with "denying that," "disputing the reported," "arguing that no..." is a coin with almost no upside — eliminate it first unless Text 2 explicitly contradicts the data.

### Trap 4: The Committed Near-Miss (cross-text)
Text 2 lists three co-occurring changes and says the record "cannot say which mattered." The trap answer has Text 2 champion one of the three as "the true cause." It's seductive because that confound is genuinely in Text 2 — but *naming* a factor is not *ranking* it, and refusing to rank was Text 2's whole point. The correct answer preserves the refusal.

### Trap 5: The Promoted Subordinate Clause (structure)
Structure answers must weight the passage the way the passage weights itself. A criticism mentioned in a final subordinate clause ("a choice for which it has been criticized as evasive") is not what the passage "presents and then rebuts." Defense: map the beats in order and check the answer's verbs against them — presents, rejects, locates; not defends, proves, urges.

### Speed protocol
Function questions: read the sentence, then its **neighbors**, and answer from the three-sentence window — the whole passage rarely changes the verdict. Cross-text: read Text 2's last sentence first; it nearly always states the response's exact shape.`
    },
    {
      id: 'advrc2-q1',
      type: 'quiz' as const,
      question: `In hard paired-passage items, which wrong-answer pattern should you eliminate first, before detailed analysis?`,
      options: [
        'Choices in which Text 2 accepts part of Text 1\'s claim, since partial agreement is rare',
        'Choices that mention a measurement or study design, since those are distractor topics',
        'Choices in which Text 2 offers a qualification, since qualifications are too weak to be answers',
        'Choices in which Text 2 "denies" or "disputes" Text 1\'s reported result, since hard cross-text items almost always have Text 2 accept the data and challenge the inference drawn from it'
      ],
      correctAnswer: 3,
      explanation: `The denial overshoot is the most reliably wrong pattern at this level: hard Text 2s are engineered to concede the numbers ("The biomass recovered," "The equipment is indeed unnecessary," "The zone's clock improved") and to relocate the dispute to what the numbers mean, measure, or omit. A "denies the result" choice contradicts that concession, so it dies on a single quoted sentence. Choices A and C describe the anatomy of *correct* answers — partial acceptance plus qualification is exactly the accept-and-narrow shape. Choice B eliminates by topic, which is backwards: measurement and design are usually where the real response lives, and topic-based elimination is the habit hard items exist to punish.`
    },
    {
      id: 'advrc2-q2',
      type: 'quiz' as const,
      question: `Text 2 of a paired item lists three changes a school district made at once — later start times, shorter bus routes, and afternoon athletics — and concludes that the attendance record "cannot say which of the three mattered, or in what mixture." A distractor reads: "Text 2's author would argue that shorter bus routes were the true cause of the attendance gains." Why is this distractor wrong despite citing a detail genuinely found in Text 2?`,
      options: [
        'Because the bus routes are mentioned only in Text 1',
        'Because it commits Text 2 to ranking one confound as the cause, when Text 2\'s stated position is that the evidence cannot rank them',
        'Because Text 2 denies that attendance improved at all',
        'Because shorter bus routes could not plausibly affect attendance'
      ],
      correctAnswer: 1,
      explanation: `This is the committed near-miss. Its lure is authenticity — the bus routes really are Text 2's detail, so the choice survives the "is it in the passage?" check. What it fails is the commitment check: Text 2's thesis is agnosticism ("cannot say which... or in what mixture"), and an answer that picks a winner asserts precisely what Text 2 declines to assert. The correct answer to such items always preserves the refusal ("the changes were confounded, so the gains cannot be attributed to any one"). Choice A is factually wrong in the scenario given. Choice C is the denial overshoot — a different trap, and one Text 2's acceptance of the gains rules out. Choice D argues plausibility, which is irrelevant: the question is what Text 2 *would say*, not what is true about buses.`
    },
    {
      id: 'advrc2-q3',
      type: 'quiz' as const,
      question: `A passage reports that commentators have long ridiculed a 1962 forecast that computers would remain too costly for home use, then pivots: "The ridicule is easy," and closes by defending the forecaster's reasoning as sound for the facts of 1962. A function question about "The ridicule is easy" draws many answers claiming the sentence "criticizes the forecaster's failure of vision." What did those test-takers miss?`,
      options: [
        'That the sentence is purely descriptive and criticizes no one',
        'That "easy" is a term of praise, signaling the author\'s approval of the ridicule',
        'That the sentence\'s criticism targets the commentators doing the ridiculing — the passage defends the forecaster, so the popular answer reverses the direction of the attack',
        'That the passage is about the cost of computers rather than about forecasting'
      ],
      correctAnswer: 2,
      explanation: `Reversed target. The sentence contains criticism, and the passage contains a forecaster — the trap solders them together. But the pivot's dismissiveness ("easy" = cheap, unearned) is aimed at the *ridicule*, and everything after it builds the forecaster's defense: the criticism and its target run in opposite directions from the popular answer. The test-takers answered from the nouns in the window instead of naming the target first. Choice A launders the sentence into neutrality; a three-word pivot like this is never idle description — brevity is what marks it as a verdict. Choice B inverts the connotation of "easy," which in this construction belittles the act as unearned rather than endorsing it. Choice D retreats to subject matter, which no function question is asking about.`
    }
  ]
}
