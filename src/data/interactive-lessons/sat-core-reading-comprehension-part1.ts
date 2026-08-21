export const lessonData = {
  topicSlug: 'sat-reading-comprehension-core-skills',
  sections: [
    {
      id: 'read-core-p1-intro',
      type: 'text' as const,
      content: `# Reading Comprehension: The Basics

**Part 1 of 2 — One Skill, One Idea**

Every reading passage on the SAT is short — usually five sentences or fewer. That is a real advantage. You can read the whole thing.

Three question types cover most of what you will see:

1. **Main idea** — what is the passage mostly about?
2. **Structure** — how is the passage put together?
3. **Support** — which fact would back up the claim?

### Main idea: cover every sentence

The main idea is the point the whole passage adds up to. A choice that matches only one sentence is too small. A choice that talks about something the passage never mentions is out, even if it sounds true.

### Structure: watch the turn

Structure questions ask about the *shape* of the passage, not its facts. Most short passages follow one of a few shapes:

- **Common belief, then evidence against it** — signaled by *it is widely believed... but*, *many assume... however*.
- **Claim, then examples that support it** — signaled by *for example*, *in fact*, *such as*.
- **Two things compared** — signaled by *unlike*, *while*, *by contrast*.

Find the turn word and the shape usually names itself.

### Worked example

> It is widely believed that goldfish remember things for only a few seconds. But researchers trained goldfish to push a lever for food, and the fish still performed the task correctly five months later.

The passage starts with what people believe, then the word **But** turns, then it gives a study that shows the belief is wrong. So the structure is: **it challenges a common assumption by presenting evidence against it.**

The main idea, meanwhile, is that goldfish memory lasts far longer than people assume.

### Support: match the claim

For support questions, find the claim, then pick the choice that speaks to that exact claim — same subject, and it settles the question.`
    },
    {
      id: 'read-core-p1-q1',
      type: 'quiz' as const,
      question: `Although the Arctic tern weighs about as much as a small apple, it makes the longest migration of any animal on Earth, flying from the Arctic to Antarctica and back each year — roughly 70,000 kilometers. Researchers tracking tagged birds found that some individuals cover this distance every year for more than thirty years.

Which choice best states the main idea of the text?`,
      options: [
        `The Arctic tern is the smallest seabird in the world.`,
        `Researchers prefer tagging birds to observing them directly.`,
        `Antarctica has more bird species than the Arctic does.`,
        `Despite its small size, the Arctic tern makes the longest annual migration of any animal.`
      ],
      correctAnswer: 3,
      explanation: `The main idea has to cover both sentences, and both are about one bird traveling an extraordinary distance despite being tiny. The choice about the tern making the longest annual migration despite its small size captures that whole point. The claim that the tern is the smallest seabird is never stated — the passage compares its weight to an apple, which is not the same thing.`
    },
    {
      id: 'read-core-p1-q2',
      type: 'quiz' as const,
      question: `For decades, gardeners were told to add sand to clay soil to loosen it. Recent trials at two agricultural stations found the opposite: mixing small amounts of sand into heavy clay produced a denser, harder soil, closer to concrete than to good garden ground.

Which choice best describes the overall structure of the text?`,
      options: [
        `It lists the steps of a process in the order they occur.`,
        `It compares two crops and recommends one of them.`,
        `It presents a long-held piece of advice, then gives research that contradicts it.`,
        `It describes a problem and then proposes a detailed solution.`
      ],
      correctAnswer: 2,
      explanation: `Sentence one gives advice gardeners followed for decades, and sentence two says recent trials found the opposite, so the passage sets up a belief and then knocks it down with research. That is the structure described by the choice about long-held advice contradicted by research. No steps of a process are listed anywhere, so the process choice does not match the shape of the text.`
    },
    {
      id: 'read-core-p1-q3',
      type: 'quiz' as const,
      question: `A neighborhood group argues that the new after-school program has helped students keep up with their homework. Which finding, if true, would most directly support that argument?`,
      options: [
        `Students enrolled in the program turned in 40 percent more completed assignments than they had the year before.`,
        `The program is held in the school gymnasium three afternoons a week.`,
        `The program was started by a former teacher who lives nearby.`,
        `Parents say they are glad the program exists.`
      ],
      correctAnswer: 0,
      explanation: `The argument is specifically about homework, so the evidence needs to measure homework. Students turning in 40 percent more completed assignments than the previous year speaks directly to that. Where and when the program meets is background information about the program, and it says nothing about whether homework improved.`
    },
    {
      id: 'read-core-p1-q4',
      type: 'quiz' as const,
      question: `While reading a passage, you notice the word "however" at the start of the third sentence. What does that word tell you?`,
      options: [
        `The third sentence will repeat the second sentence in different words.`,
        `The third sentence will turn against what came before it.`,
        `The third sentence will give an example of the second sentence.`,
        `The third sentence will end the passage.`
      ],
      correctAnswer: 1,
      explanation: `"However" is a turn word, so it signals that what follows goes against what came before. Spotting it tells you the passage is about to change direction, which is often exactly where the main point lives. It does not mean repetition or an example — words like "in fact" and "for instance" do that job instead.`
    }
  ]
}
