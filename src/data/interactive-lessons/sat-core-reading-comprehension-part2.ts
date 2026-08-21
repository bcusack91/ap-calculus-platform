export const lessonData = {
  topicSlug: 'sat-reading-comprehension-core-skills',
  sections: [
    {
      id: 'read-core-p2-recap',
      type: 'text' as const,
      content: `# Reading Comprehension: Practice

**Part 2 of 2 — Run the Steps**

### The steps

1. **Read the question stem first.** Knowing whether you need the main idea, the structure, or supporting evidence changes how you read.
2. **Read the passage once, all the way through.** These are short. Do not stop to reread every line.
3. **Say the point in your own words.** One sentence, plain language, before you look at the choices.
4. **Check every choice against the passage.** The right answer is the one the text actually backs up.
5. **Pick and move on.** Lingering rarely changes a correct answer into a better one.

### Turn words are free hints

| Word | What follows |
| --- | --- |
| but, however, yet, although | a turn — the opposite direction |
| for example, in fact, such as | support for what was just said |
| therefore, so, as a result | a conclusion drawn from what came before |
| unlike, while, by contrast | a comparison between two things |

### The three wrong-answer shapes

- **Too big** — goes further than the passage does. Watch for *all*, *never*, *the only*, *proves*.
- **Too small** — true, but it covers just one sentence.
- **Not there** — sounds sensible, but the passage never says it.

### Answer from the page

If the passage disagrees with what you already know about a topic, the passage wins. You are being asked what this text says, not what is true in general.`
    },
    {
      id: 'read-core-p2-q1',
      type: 'quiz' as const,
      question: `Most people picture a desert as hot sand, but the largest desert on Earth is Antarctica. A desert is defined by how little precipitation it receives, not by its temperature, and parts of Antarctica have gone without measurable snowfall for two million years.

Which choice best states the main idea of the text?`,
      options: [
        `Antarctica is colder than any other place on Earth.`,
        `Snowfall is difficult for scientists to measure accurately.`,
        `Deserts are defined by low precipitation, which is why Antarctica qualifies as the largest one.`,
        `Sand covers most of the world's desert regions.`
      ],
      correctAnswer: 2,
      explanation: `Both sentences work together to correct an assumption: the passage says deserts are defined by precipitation rather than heat, which is what makes Antarctica a desert. The choice stating that definition and naming Antarctica as the largest desert covers the whole passage. The choice about sand describes the picture the passage says is mistaken, so it is backwards.`
    },
    {
      id: 'read-core-p2-q2',
      type: 'quiz' as const,
      question: `The octopus has three hearts. Two pump blood through the gills, while the third pumps it to the rest of the body. That third heart stops beating whenever the animal swims, which may be one reason octopuses usually prefer to crawl along the seafloor.

According to the text, why might octopuses prefer crawling to swimming?`,
      options: [
        `Swimming stops the heart that supplies the rest of the body.`,
        `Crawling allows them to find food more quickly.`,
        `Their gills work only when they are still.`,
        `They have poor eyesight in open water.`
      ],
      correctAnswer: 0,
      explanation: `The last sentence gives the reason directly: the third heart, the one that pumps blood to the rest of the body, stops beating when the octopus swims, and the passage links that to the preference for crawling. Finding food faster sounds plausible, but the passage never mentions food at all, so it cannot be the answer.`
    },
    {
      id: 'read-core-p2-q3',
      type: 'quiz' as const,
      question: `A researcher claims that letting middle schools start an hour later improves student attendance. Which finding, if true, would most directly support that claim?`,
      options: [
        `Later start times are popular with students and parents alike.`,
        `Teenagers naturally fall asleep later than younger children do.`,
        `Later-starting schools spend more on transportation.`,
        `Schools that moved to a later start recorded 25 percent fewer absences the following year.`
      ],
      correctAnswer: 3,
      explanation: `The claim is about attendance, so the supporting evidence has to count students showing up. Schools recording 25 percent fewer absences after moving to a later start measures exactly that. The fact that later start times are popular measures how people feel about the change, which is a different thing from whether attendance actually improved.`
    },
    {
      id: 'read-core-p2-q4',
      type: 'quiz' as const,
      question: `You are on a main idea question. One answer choice says the passage "proves that all bridges built before 1950 are unsafe," but the passage only described problems found in three specific bridges. Why should you rule that choice out?`,
      options: [
        `Because main idea answers are never about safety.`,
        `Because the choice goes further than the passage does — three bridges cannot support a claim about all of them.`,
        `Because correct answers never contain the word "all."`,
        `Because the passage mentioned a year, which makes it a detail question.`
      ],
      correctAnswer: 1,
      explanation: `The passage described three bridges, and the choice claims something about every bridge built before 1950, so the choice reaches well beyond what the text supports. Answers that stretch past the evidence are a common wrong-answer shape, and words like "all," "never," and "proves" are worth a second look for that reason. Those words are not automatically wrong, though — what matters is whether the passage actually backs them up.`
    }
  ]
}
