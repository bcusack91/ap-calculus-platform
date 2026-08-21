export const lessonData = {
  topicSlug: 'sat-vocabulary-context-core-skills',
  sections: [
    {
      id: 'vocab-core-p1-intro',
      type: 'text' as const,
      content: `# Vocab in Context: The Basics

**Part 1 of 2 — One Skill, One Idea**

Some SAT questions take a word out of a short paragraph and leave a blank. Your job is to put the right word back.

Here is the good news: **you do not have to already know the word.** The paragraph tells you what belongs there. You are matching a word to a meaning the sentences hand you.

### The one move: find the clue

Every one of these paragraphs contains a **clue** — the part that explains or describes the blank. It is usually right next to the blank, often after a colon or a semicolon, or in the very next sentence.

Read the clue. Say the answer in **your own everyday words**. Then look for the option that means about the same thing.

### Worked example

> Reviews of the diner were ______. Customers said the food arrived cold and the wait was over an hour.

Step 1 — Find the clue. The second sentence is the clue: cold food, long waits.

Step 2 — Say it plainly. People did not like it. The reviews were **bad**.

Step 3 — Match. If the options were *glowing, negative, mixed, brief*, the answer is **negative**, because negative means unfavorable — bad. "Glowing" means very positive, which is the opposite of what the clue describes.

That is the whole skill. Clue → your own word → match.

### One shortcut that helps a lot

Before you look at the choices, decide if the blank is a **good word** or a **bad word**. Just a plus sign or a minus sign in your head. That alone knocks out half the choices most of the time.`
    },
    {
      id: 'vocab-core-p1-q1',
      type: 'quiz' as const,
      question: `Marcus was ______ about the class trip to the aquarium. He talked about it every day for a month and packed his backpack a full week early.

Which choice completes the text with the most logical and precise word?`,
      options: [
        `worried`,
        `excited`,
        `confused`,
        `disappointed`
      ],
      correctAnswer: 1,
      explanation: `The clue is the second sentence: he talked about the trip every day and packed a week early. That describes someone who is really looking forward to something, so the blank needs a positive word. "Excited" means eager and full of energy about something coming up, which matches exactly. "Worried," "confused," and "disappointed" are all negative words, and nothing in the sentence shows anything going wrong.`
    },
    {
      id: 'vocab-core-p1-q2',
      type: 'quiz' as const,
      question: `The assembly instructions that came with the desk were ______: every step was numbered, and each one was written in a short, plain sentence.

Which choice completes the text with the most logical and precise word?`,
      options: [
        `clear`,
        `missing`,
        `expensive`,
        `confusing`
      ],
      correctAnswer: 0,
      explanation: `The colon is a signal that the clue comes next, and it does: numbered steps written in short, plain sentences. Instructions like that are easy to follow, so "clear" is the answer — clear means easy to understand. "Confusing" is the opposite of what the clue describes, and "missing" and "expensive" do not connect to anything in the sentence.`
    },
    {
      id: 'vocab-core-p1-q3',
      type: 'quiz' as const,
      question: `For years the old theater sat empty and boarded up. Last spring a group of neighbors ______ the building, repairing the roof, repainting the walls, and reopening the doors to the public.

Which choice completes the text with the most logical and precise word?`,
      options: [
        `abandoned`,
        `sold`,
        `criticized`,
        `restored`
      ],
      correctAnswer: 3,
      explanation: `The clue is the list at the end of the sentence: repairing the roof, repainting the walls, and reopening the doors. All three are acts of fixing something up. "Restored" means brought back to good condition, which is precisely what that list describes. "Abandoned" would mean leaving it alone, which contradicts the repairs.`
    },
    {
      id: 'vocab-core-p1-q4',
      type: 'quiz' as const,
      question: `Scientists had long assumed the cave held nothing of interest. A survey completed last year, however, ______ hundreds of painted handprints on the back wall.

Which choice completes the text with the most logical and precise word?`,
      options: [
        `hid`,
        `erased`,
        `revealed`,
        `predicted`
      ],
      correctAnswer: 2,
      explanation: `The word "however" tells you the second sentence goes against the first. Scientists thought the cave was empty, so the survey must have shown that it was not. "Revealed" means made something known that was not known before, and that is what the survey did with the handprints. "Hid" and "erased" would mean the handprints went away, which is backward.`
    }
  ]
}
