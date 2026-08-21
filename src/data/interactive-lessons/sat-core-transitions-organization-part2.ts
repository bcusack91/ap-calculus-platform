export const lessonData = {
  topicSlug: 'sat-transitions-organization-core-skills',
  sections: [
    {
      id: 'trans-core-p2-recap',
      type: 'text' as const,
      content: `# Transitions and Organization: Practice

**Part 2 of 2 — Two More Families, Plus Order**

Part 1 covered adding, contrast, cause/effect, and example. Two more groups show up often.

**5. Sequence** — puts steps in order.
*first, next, then, later, finally, subsequently*

**6. Conclusion** — wraps things up.
*in conclusion, ultimately, in short, all things considered*

### Organization questions

Some questions do not ask for a word. They ask **where a sentence belongs**. The clue is almost always a word inside the sentence that points backward.

> Dr. Reyes studied desert soil for twenty years. **She** then tested six samples from the canyon floor.

The word "She" points back to a name. So the sentence with "She" has to come **after** the sentence that names Dr. Reyes. If it came first, the reader would not know who "she" is.

Look for these pointing-back words: **she, he, it, they, this, that, these, those**. Whatever they point to must already have been said.

The same idea applies to a definition: if a sentence explains what a term means, it goes **before** the sentence that uses that term in a new way.

### Your checklist for transitions

1. Cover the blank and the answer choices.
2. Say the sentence before the blank in your own words.
3. Say the sentence after the blank in your own words.
4. Same direction, or opposite?
5. Same direction → adding, cause/effect, example, sequence, or conclusion. Opposite → contrast.
6. Now look at the choices and pick the one that matches.

### Your checklist for organization

1. Find pointing-back words (*she, it, this, they*).
2. Find what they point to.
3. The sentence with the pointing-back word goes after the sentence that introduces the thing.`
    },
    {
      id: 'trans-core-p2-q1',
      type: 'quiz' as const,
      question: 'Which set contains contrast transitions?',
      options: [
        'first, next, then, finally',
        'therefore, so, as a result',
        'for example, for instance, such as',
        'however, on the other hand, nevertheless'
      ],
      correctAnswer: 3,
      explanation: '"However, on the other hand, nevertheless" are contrast transitions. Each one signals that the next sentence turns and goes the opposite direction from the one before it. The other three sets are real transition families with different jobs: putting things in order, showing a result, and giving a specific case.'
    },
    {
      id: 'trans-core-p2-q2',
      type: 'quiz' as const,
      question: '______ the campers gathered firewood. Next, they cleared a flat space for the tent.\n\nWhich choice completes the text with the most logical transition?',
      options: [
        'Therefore,',
        'First,',
        'However,',
        'For example,'
      ],
      correctAnswer: 1,
      explanation: '"First" is correct. The second sentence begins with "Next," which tells you these sentences are steps in an order. A step that comes before "Next" is the first step, so a sequence transition is what belongs in the blank. The other choices would signal a result, a turn, or an example, and none of them fits a list of steps.'
    },
    {
      id: 'trans-core-p2-q3',
      type: 'quiz' as const,
      question: 'A writer has finished making an argument and wants the last sentence to sum it all up. Which transition fits a concluding sentence?',
      options: [
        'Meanwhile,',
        'For instance,',
        'In conclusion,',
        'On the other hand,'
      ],
      correctAnswer: 2,
      explanation: '"In conclusion" is correct. Conclusion transitions tell the reader that the writer is wrapping up and stating the final point, which is exactly what a summing-up sentence does. Other phrases in this family include "ultimately," "in short," and "all things considered." The other choices announce something happening at the same time, a specific example, or a turn to the opposite side, so none of them signals a wrap-up.'
    },
    {
      id: 'trans-core-p2-q4',
      type: 'quiz' as const,
      question: 'A paragraph contains this sentence: "She then tested six samples from the canyon floor." Another sentence reads: "Dr. Reyes studied desert soil for twenty years."\n\nWhere should the sentence about Dr. Reyes go?',
      options: [
        'Before the sentence that starts with "She," because "She" points back to that name',
        'After the sentence that starts with "She," to explain who was tested',
        'At the very end of the essay',
        'It should be deleted'
      ],
      correctAnswer: 0,
      explanation: 'The sentence naming Dr. Reyes goes first. The word "She" is a pointing-back word, and a reader can only understand it if the person has already been named. Putting the name first gives "She" something to point to. The sentence is not repeating information or wandering off topic, so there is no reason to move it to the end or cut it.'
    }
  ]
}
