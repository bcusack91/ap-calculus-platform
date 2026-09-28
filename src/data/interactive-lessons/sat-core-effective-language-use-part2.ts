export const lessonData = {
  topicSlug: 'sat-effective-language-use-core-skills',
  sections: [
    {
      id: 'elu-core-p2-recap',
      type: 'text' as const,
      content: `# Word Choice: Practice

**Part 2 of 2 — Precise Words and Notes Questions**

### One strong verb beats a phrase

Wordy writing often turns a verb into a longer phrase. Turn it back:

- *did a review of* → **reviewed**
- *made a decision* → **decided**
- *gave an explanation of* → **explained**
- *is able to* → **can**

Each fix keeps the exact same meaning in one word.

### Notes questions

Some questions show you a student's bullet-point notes and a goal, like:

> The student wants to say **when** the bridge opened **and** that it is **still in use**.

Then four sentences follow. The right answer is the one that hits **every part of the goal**. A sentence can be perfectly true and still be wrong if it covers only half of what the goal asked for.

Handle these in three steps:

1. **Read the goal twice.** Underline each thing it asks for. Often there are two.
2. **Check each choice against the goal.** Does it include both things?
3. **Cross out any choice that misses one.** True but incomplete is still wrong.

Ignore how impressive a choice sounds. Only the goal decides.

### Your checklist

1. Conciseness question → pick the shortest choice that keeps all the meaning.
2. Watch for repeated ideas (*free gift*, *combined together*, *in the year 1937*).
3. Turn stretched-out phrases back into one verb (*made a decision* → *decided*).
4. Notes question → list what the goal asks for, then keep only the choice that covers all of it.`
    },
    {
      id: 'elu-core-p2-q1',
      type: 'quiz' as const,
      question: 'Which choice completes the sentence most concisely?\n\n"Before publishing the study, the scientist ______ the data one last time."',
      options: [
        'did a review of',
        'reviewed',
        'saw',
        'carried out a reviewing process on'
      ],
      correctAnswer: 1,
      explanation: '"Reviewed" is correct. It is a single verb that carries the entire meaning of looking over the data, and nothing is lost by using it. Two of the other choices stretch that same verb into a phrase of several words, which adds length without adding information. "Saw" is shorter, but it changes the meaning: glancing at data is not the same as reviewing it.'
    },
    {
      id: 'elu-core-p2-q2',
      type: 'quiz' as const,
      question: 'Which revision removes the repeated idea?\n\n"The two designs are similar and alike."',
      options: [
        'The two designs are similar and also alike.',
        'The two designs differ.',
        'The two designs are similar.',
        'The two designs are alike in a way that is similar.'
      ],
      correctAnswer: 2,
      explanation: '"The two designs are similar" is correct. "Similar" and "alike" mean the same thing, so keeping one of them says everything the original sentence said. Two other choices keep both words, one even adding "also." "The two designs differ" is shorter, but it removes the repetition by reversing the meaning.'
    },
    {
      id: 'elu-core-p2-q3',
      type: 'quiz' as const,
      question: 'A student is writing about a local bridge and wants to give the year it opened AND note that it is still used today.\n\nNotes:\n• Opened in 1932\n• Named for the town\'s first mayor\n• Still carries traffic today\n\nWhich choice best accomplishes the student\'s goal?',
      options: [
        'The bridge, which is named for the town\'s first mayor, opened in 1932.',
        'The bridge, named for the town\'s first mayor, still carries traffic today.',
        'The bridge, a well-known town landmark, is named for the town\'s first mayor.',
        'The bridge, which first opened in 1932, is still carrying traffic today.'
      ],
      correctAnswer: 3,
      explanation: '"The bridge, which first opened in 1932, is still carrying traffic today" is correct. The goal asks for two things — the year it opened and the fact that it is still in use — and this is the only choice that gives both. The other three choices are clear sentences, but the mayor-and-1932 choice omits that the bridge is still used, the mayor-and-traffic choice omits the year, and the landmark choice gives neither, so none accomplishes the whole goal.'
    },
    {
      id: 'elu-core-p2-q4',
      type: 'quiz' as const,
      question: 'What is the first thing to do on a question that asks for the most concise choice?',
      options: [
        'Find the choices that keep the full meaning, then pick the shortest among them.',
        'Pick the longest choice, since it gives the reader the most detail and support.',
        'Pick the choice with the most advanced vocabulary, since it sounds most formal.',
        'Pick the shortest choice right away, even if it leaves out part of the meaning.'
      ],
      correctAnswer: 0,
      explanation: 'Start by checking which choices keep the full meaning, then take the shortest of those. Both halves matter: a choice that drops part of the meaning is wrong no matter how short it is, and among choices that say everything, the shortest is the one the question is asking for. That is why grabbing the shortest choice right away fails, and length or vocabulary level on their own tell you nothing.'
    }
  ]
}
