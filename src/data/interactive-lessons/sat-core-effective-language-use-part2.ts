export const lessonData = {
  topicSlug: 'sat-effective-language-use-core-skills',
  sections: [
    {
      id: 'elu-core-p2-recap',
      type: 'text' as const,
      content: `# Word Choice: Practice

**Part 2 of 2 — Precise Words and Notes Questions**

### Quick recap: the precise word

On a "most logical and precise word" question, match the clue in the text on three things:

- **Detail** — *whispered* is quiet; *announced* is to a group.
- **Strength** — *limited* is weaker than *banned*.
- **Feeling** — *careful with money* is positive; *stingy* is negative.

### Notes questions

Some questions show you a student's bullet-point notes and a goal, like:

> The student wants to give the year the bridge **opened** and note that it is **still in use**.

Then four sentences follow. Every one of them is true, because each one comes from the notes. The right answer is the one that does **exactly what the goal asks**. A sentence can be perfectly true and still be wrong if it covers only half of the goal.

### Common goals and what they require

- **"Emphasize a similarity"** between two things → the choice must name **both** things and show what they share (*both*, *like*, *also*).
- **"Emphasize a difference"** → the choice must name **both** things and show how they are unlike (*while*, *but*, *unlike*).
- **"Give the year… and note that…"** → the choice must include **every** piece the goal lists.
- **"Introduce X to an audience unfamiliar with it"** → the choice must say **what X is**, not just its name.

### Handle these in three steps

1. **Read the goal first**, before the notes. Underline each thing it asks for. Often there are two.
2. **Check each choice against the goal.** Does it include every piece?
3. **Cross out any choice that misses one.** True but incomplete is still wrong.

Ignore how impressive a choice sounds, and do not pick a choice just because it uses the most notes. Only the goal decides.

### Your checklist

1. Precise word → find the clue, say your own word (with its strength), then match.
2. Cross out words that are too strong, too weak, or carry the wrong feel.
3. Notes question → list what the goal asks for, then keep only the choice that covers all of it.
4. Similarity or difference goal → the answer must mention **both** things.`
    },
    {
      id: 'elu-core-p2-q1',
      type: 'quiz' as const,
      question: `The storm did not destroy the garden, but it ______ the young tomato plants: several stems bent sideways, although every plant survived.

Which choice completes the text with the most logical and precise word?`,
      options: [
        'destroyed',
        'damaged',
        'protected',
        'strengthened'
      ],
      correctAnswer: 1,
      explanation: '"Damaged" is correct. The clue after the colon says stems bent sideways but every plant survived. That is harm, but not total harm, and "damaged" means harmed without being ruined. "Destroyed" is too strong, since the plants survived and the text says the garden was not destroyed. "Protected" and "strengthened" go the wrong direction, because bent stems show the storm hurt the plants.'
    },
    {
      id: 'elu-core-p2-q2',
      type: 'quiz' as const,
      question: 'While researching a topic, a student has taken the following notes:\n\n• Honeybees use a "waggle dance" to show other bees where food is.\n• Some ant species leave scent trails that lead other ants to food.\n• A honeybee hive can hold tens of thousands of bees.\n• Both insects share what they learn about food with the rest of their colony.\n\nThe student wants to emphasize a similarity between honeybees and ants. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      options: [
        'Honeybees use a "waggle dance" to show where food is, but some ants leave scent trails.',
        'Honeybees live together in large hives, which can hold tens of thousands of bees.',
        'Honeybees and some ants both tell the rest of their colony where food can be found.',
        'Some species of ants leave scent trails that lead other ants in the colony to food.'
      ],
      correctAnswer: 2,
      explanation: 'The goal is a similarity, so the answer must mention both insects and show something they share. Only the choice saying that honeybees and some ants both tell their colony where food is does that. The waggle-dance choice mentions both insects, but it shows how they differ. The hive choice is only about honeybees, and the scent-trail choice is only about ants, so neither can show a similarity.'
    },
    {
      id: 'elu-core-p2-q3',
      type: 'quiz' as const,
      question: 'While researching a topic, a student has taken the following notes:\n\n• A local bridge opened in 1932.\n• It is named for the town\'s first mayor.\n• It still carries traffic today.\n\nThe student wants to give the year the bridge opened and note that it is still in use. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      options: [
        'The bridge, which is named for the town\'s first mayor, opened in 1932.',
        'The bridge, named for the town\'s first mayor, still carries traffic today.',
        'The bridge, a well-known town landmark, is named for the town\'s first mayor.',
        'The bridge, which first opened in 1932, is still carrying traffic today.'
      ],
      correctAnswer: 3,
      explanation: 'The goal asks for two things: the year the bridge opened and the fact that it is still in use. Only the choice saying the bridge first opened in 1932 and is still carrying traffic today gives both. The mayor-and-1932 choice leaves out that the bridge is still used, the mayor-and-traffic choice leaves out the year, and the landmark choice gives neither, so none of them accomplishes the whole goal.'
    },
    {
      id: 'elu-core-p2-q4',
      type: 'quiz' as const,
      question: 'A notes question asks for the choice that "emphasizes a contrast" between two painters. What must the correct choice do?',
      options: [
        'Name both painters and show one way that their work is unlike.',
        'Describe one painter in as much detail as the notes allow.',
        'Name both painters and list every fact the notes give about each.',
        'Name both painters and show one way that their work is alike.'
      ],
      correctAnswer: 0,
      explanation: 'A contrast is a difference between two things, so the correct choice has to name both painters and show how their work differs. Describing only one painter cannot show a contrast, no matter how detailed it is. Listing every fact about both painters still never says how they differ, and using the most facts is not the goal. Showing what the two painters share is a similarity, which is the opposite of what the question asks for.'
    }
  ]
}
