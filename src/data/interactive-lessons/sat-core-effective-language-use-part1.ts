export const lessonData = {
  topicSlug: 'sat-effective-language-use-core-skills',
  sections: [
    {
      id: 'elu-core-p1-intro',
      type: 'text' as const,
      content: `# Word Choice: The Basics

**Part 1 of 2 — Shorter Wins**

Some SAT questions give you four choices that all mean roughly the same thing. Nothing is misspelled. Nothing is ungrammatical. The question asks which choice says it **most concisely** — which means saying the same thing in the fewest words.

The answer is the shortest choice that still keeps every piece of the meaning.

### Look at a real pair

> **Wordy:** Due to the fact that the wind was too strong, the race ended up being canceled.
>
> **Concise:** The race was canceled because the wind was too strong.

Both sentences tell you the same two facts: the race was canceled, and strong wind was the reason. The second one does it with fewer words, so it is the better choice.

### What got cut

- *Due to the fact that* → **because**. Five words doing one word's job.
- *ended up being canceled* → **was canceled**. "Ended up being" adds nothing.

### Repeated words

Some phrases say the same thing twice. Once you notice them, they are easy to spot:

- *free gift* (a gift is already free)
- *combined together* (combining is already putting things together)
- *the reason is because* (pick one)
- *past history* (history is already past)
- *in the year 1937* → *in 1937*

### Why the SAT tests this

Extra words do not make writing sound smarter. They make the reader work harder to find the point. A shorter sentence that keeps all the information is clearer.

### Your move

1. Read all four choices.
2. Cross out any choice that leaves out a piece of the meaning.
3. Of the ones that are left, pick the shortest.

Being suspicious of the longest choice is a good habit here. On a concise-writing question, the longest answer is usually the wrong one.`
    },
    {
      id: 'elu-core-p1-q1',
      type: 'quiz' as const,
      question: 'Which choice states the idea most concisely without leaving anything out?',
      options: [
        'The reason the race was canceled was because of the fact that the wind was too strong.',
        'Due to the fact that the wind was strong, the race ended up being canceled.',
        'The race was canceled because the wind was too strong.',
        'The race, on account of strong wind conditions, was a race that got canceled.'
      ],
      correctAnswer: 2,
      explanation: '"The race was canceled because the wind was too strong" is correct. It keeps both facts — the cancellation and the reason — and states them in the fewest words. The word "because" does the whole job of naming the cause. The other three choices carry the same two facts but pad them with phrases like "due to the fact that" and "ended up being," which add length without adding meaning.'
    },
    {
      id: 'elu-core-p1-q2',
      type: 'quiz' as const,
      question: 'Which phrase says the same thing twice?',
      options: [
        'free gift',
        'new bicycle',
        'early morning',
        'cold winter'
      ],
      correctAnswer: 0,
      explanation: '"Free gift" says the same thing twice. A gift is something given without charge, so "free" repeats information the word "gift" already carries, and "gift" alone says it all. In the other three phrases the first word adds something real: a bicycle can be new or used, a morning can be early or late, and a winter can be cold or mild.'
    },
    {
      id: 'elu-core-p1-q3',
      type: 'quiz' as const,
      question: 'Which choice expresses the idea most concisely?',
      options: [
        'The coach, who is the person who trains the athletes, gave a short speech.',
        'The coach gave a short speech.',
        'The coach gave a speech that was short in length.',
        'What the coach did was give a speech that was short.'
      ],
      correctAnswer: 1,
      explanation: '"The coach gave a short speech" is correct. It states who acted, what they did, and that the speech was short — the complete meaning in five words. The other choices say the same thing while stretching it out with phrases like "that was short in length" and "what the coach did was," neither of which adds new information.'
    },
    {
      id: 'elu-core-p1-q4',
      type: 'quiz' as const,
      question: 'Why does the SAT reward the shorter choice on a conciseness question?',
      options: [
        'Shorter answers are always correct on every SAT question.',
        'Short sentences sound more formal.',
        'Long sentences break grammar rules.',
        'Extra words that repeat information make the point harder to find.'
      ],
      correctAnswer: 3,
      explanation: 'Extra words that repeat information make the point harder to find, and that is what conciseness questions are testing. The goal is clear writing, so the choice that delivers the full meaning with no repeated words wins. Long sentences are not against any grammar rule, and shortness only decides the answer when the question asks about being concise.'
    }
  ]
}
