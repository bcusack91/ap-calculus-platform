export const lessonData = {
  topicSlug: 'sat-central-ideas-details-core-skills',
  sections: [
    {
      id: 'central-core-p2-recap',
      type: 'text' as const,
      content: `# Central Ideas: Practice

**Part 2 of 2 — Run the Steps**

### The steps

1. **Read the question first.** Find out whether it wants the big point or one specific fact before you read the passage.
2. **Read the passage once, normally.** These paragraphs are short. One careful pass is enough.
3. **If it is a central idea question**, say the point in your own words in one short sentence before looking at the choices.
4. **If it is a detail question**, go back and put your finger on the line. The answer is in the text.
5. **Test each choice against the passage.** A choice must be supported by the words on the page — not by what you already know about the topic.

### Where the main idea usually hides

Most short passages announce the point in the **first sentence** or the **last sentence**. The middle is usually examples and support. That is not a rule you can lean on blindly, but it is a good place to start looking.

### The three wrong-answer shapes

- **Too small** — true, but it only covers one sentence. Common on central idea questions.
- **Not in the text** — sounds reasonable, maybe even true in real life, but the passage never says it.
- **Backwards** — takes something the passage says and flips it.

### One rule that saves points

Answer only from the passage. If you know a lot about sharks and the passage says something different about sharks, the passage wins.`
    },
    {
      id: 'central-core-p2-q1',
      type: 'quiz' as const,
      question: `Read the passage:

"Night shifts do more than make workers tired. Studies of nurses, pilots, and factory workers find that people on long-term night schedules report more digestive trouble, higher blood pressure, and more difficulty sleeping even on their days off. Researchers link these effects to a body clock that never fully adjusts."

Which detail from the passage supports the idea that night-shift effects last beyond the work hours?`,
      options: [
        `Night shifts make workers tired.`,
        `Workers report difficulty sleeping even on their days off.`,
        `Nurses, pilots, and factory workers were studied.`,
        `Researchers study the human body clock.`
      ],
      correctAnswer: 1,
      explanation: `The claim is that the effects reach past the work hours, so you need the line about time away from work. The passage says workers have trouble sleeping even on their days off, which is exactly that. The list of job types tells you who was studied, not how long the effects last.`
    },
    {
      id: 'central-core-p2-q2',
      type: 'quiz' as const,
      question: `Read the passage:

"Bamboo is one of the fastest-growing plants on Earth, with some species adding more than a meter a day. Because it regrows so quickly after cutting, builders have begun using it in place of slower-growing hardwood. A bamboo stand can be harvested every few years, while a hardwood forest may need decades."

What is the central idea of this passage?`,
      options: [
        `Bamboo can grow more than a meter in a single day.`,
        `Hardwood forests take decades to mature.`,
        `Bamboo is difficult to harvest without special tools.`,
        `Bamboo's fast regrowth makes it a practical alternative to hardwood for builders.`
      ],
      correctAnswer: 3,
      explanation: `The roof has to cover all three sentences: fast growth, builders using it instead of hardwood, and the harvest comparison. The choice about fast regrowth making bamboo a practical alternative for builders covers every part of that. The meter-a-day fact is true but too small — it is the evidence, not the point.`
    },
    {
      id: 'central-core-p2-q3',
      type: 'quiz' as const,
      question: `Read the passage:

"When a wildfire moves through a lodgepole pine forest, it does not end the forest's life. The heat melts the resin sealing the pine cones, which then open and drop their seeds onto freshly cleared, ash-rich ground. Seedlings often appear within a single season."

According to the passage, what causes lodgepole pine cones to open?`,
      options: [
        `Heat from a wildfire melts the resin that seals the cones.`,
        `Heavy rain washes the resin away.`,
        `Animals break the cones open while feeding.`,
        `The cones open on a fixed schedule each spring.`
      ],
      correctAnswer: 0,
      explanation: `This is a detail question, so locate the line. Sentence two says the heat melts the resin sealing the cones, and then the cones open — heat from the fire is the cause. Rain and animals are never mentioned in the passage, so neither can be the answer no matter how reasonable they sound.`
    },
    {
      id: 'central-core-p2-q4',
      type: 'quiz' as const,
      question: `You are answering a central idea question. One choice states a fact that appears in the passage but matches only the second sentence. What should you do with that choice?`,
      options: [
        `Choose it, because anything stated in the passage is correct.`,
        `Choose it, because specific facts make the strongest main ideas.`,
        `Rule it out, because a central idea must cover the whole passage, not one sentence.`,
        `Rule it out, because facts can never appear in a correct answer choice.`
      ],
      correctAnswer: 2,
      explanation: `A central idea has to sit over the entire passage like a roof, so a choice that matches only one sentence is too small and should be ruled out. Being true is not enough on this question type — the answer also has to be big enough. That same fact could easily be the right answer on a detail question, which is why reading the question first matters.`
    }
  ]
}
