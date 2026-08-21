export const lessonData = {
  topicSlug: 'sat-vocabulary-context-core-skills',
  sections: [
    {
      id: 'vocab-core-p2-recap',
      type: 'text' as const,
      content: `# Vocab in Context: Practice

**Part 2 of 2 — Run the Steps**

You already know the move. Here it is as a short checklist you can run on any of these questions.

### The checklist

1. **Cover the choices.** Read the paragraph first. The choices can pull you off track before you know what you are looking for.
2. **Find the clue.** Look right after a colon or semicolon, or in the sentence next door. That is where the explanation usually sits.
3. **Plus or minus?** Decide whether the blank should be a good word or a bad word. Write a small + or − next to the blank if that helps.
4. **Say your own word.** Fill the blank with plain everyday language — "bad," "grew fast," "made clear." Your word does not have to be fancy.
5. **Match, then check the rest.** Find the choice closest to your word. Read your choice back into the sentence to be sure it sounds right.

### Two signal words worth knowing

- **but, however, although, yet** — the next part goes the *opposite* direction.
- **because, since, for example, in fact** — the next part goes the *same* direction, and usually explains.

Those little words are free information. Circle them.

### If you do not know a word in the choices

That happens to everyone. Cross out the ones you *do* know that clearly do not fit, then pick from what is left. A confident guess between two choices is a good outcome.`
    },
    {
      id: 'vocab-core-p2-q1',
      type: 'quiz' as const,
      question: `The city council's vote on the new bike lane was ______. Fourteen members voted yes, and not a single member voted no.

Which choice completes the text with the most logical and precise word?`,
      options: [
        `close`,
        `delayed`,
        `unanimous`,
        `secret`
      ],
      correctAnswer: 2,
      explanation: `The clue is the count in the second sentence: fourteen yes votes and zero no votes. That means everyone agreed. "Unanimous" means agreed on by every single person, which fits the numbers exactly. "Close" would describe a vote where the two sides were nearly even, and here one side got every vote.`
    },
    {
      id: 'vocab-core-p2-q2',
      type: 'quiz' as const,
      question: `Chef Dolores Vega is known for her ______ menu, which places Korean stews, Mexican salsas, and French pastries side by side on the same page.

Which choice completes the text with the most logical and precise word?`,
      options: [
        `plain`,
        `repetitive`,
        `traditional`,
        `varied`
      ],
      correctAnswer: 3,
      explanation: `The clue is the list of dishes: Korean stews, Mexican salsas, and French pastries. Those come from three different food traditions, so the menu covers a wide range. "Varied" means made up of many different kinds, which is what the list shows. "Repetitive" would mean the same thing over and over, the opposite of three different cuisines.`
    },
    {
      id: 'vocab-core-p2-q3',
      type: 'quiz' as const,
      question: `The first drafts of the report were long and hard to follow, but the final version was noticeably more ______.

Which choice completes the text with the most logical and precise word?`,
      options: [
        `concise`,
        `detailed`,
        `complicated`,
        `lengthy`
      ],
      correctAnswer: 0,
      explanation: `The word "but" signals a turn, so the final version must be the opposite of the drafts, which were long and hard to follow. "Concise" means short and to the point, the opposite of long and hard to follow. "Lengthy" and "complicated" repeat the problem with the drafts instead of reversing it.`
    },
    {
      id: 'vocab-core-p2-q4',
      type: 'quiz' as const,
      question: `Rainfall in the valley has been unusually low for three straight years. The shortage has ______ the strain on local farms, several of which have already cut back on planting.

Which choice completes the text with the most logical and precise word?`,
      options: [
        `eased`,
        `worsened`,
        `explained`,
        `measured`
      ],
      correctAnswer: 1,
      explanation: `The clue comes after the blank: farms are already cutting back on planting, so things are getting harder, not easier. "Worsened" means made a bad situation worse, which matches farms scaling back. "Eased" would mean the pressure went down, and the farms cutting back shows the opposite.`
    }
  ]
}
