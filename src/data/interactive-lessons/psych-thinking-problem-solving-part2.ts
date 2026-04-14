export const psychThinkingPart2Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think2-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Thinking & Problem Solving

**Part 2 of 7 — Problem-Solving Strategies**

How do we solve problems? We have two main approaches — slow-and-sure algorithms, and fast-but-risky heuristics. Understanding when each leads us astray is essential for the AP exam.

### Key Definitions

| Term | Definition |
|------|-----------|
| **Algorithm** | A step-by-step procedure that GUARANTEES a solution if followed correctly (but can be slow) |
| **Heuristic** | A mental shortcut that is fast and usually effective, but can lead to systematic errors |
| **Insight** | A sudden "aha!" realization of a solution — the answer appears all at once, not gradually |
| **Fixation** | The inability to see a problem from a new angle — being "stuck" on one approach |
| **Mental set** | A type of fixation: tendency to use a strategy that worked before, even when a better approach exists |
| **Functional fixedness** | A type of fixation: inability to see an object's use beyond its typical function |

### Algorithm vs. Heuristic

| | Algorithm | Heuristic |
|--|----------|-----------|
| **Speed** | SLOW — methodical, exhaustive | FAST — quick mental shortcut |
| **Accuracy** | GUARANTEED to find solution (if one exists) | Usually correct, but can lead to errors |
| **Effort** | High — requires systematic processing | Low — automatic, intuitive |
| **Example** | Trying every possible combination on a lock | Recalling which combinations you've used before |
| **Example** | Solving anagrams by testing every letter arrangement | Looking for common word patterns first |
| **When to use** | When accuracy is critical and time allows | When speed matters and approximate answer is acceptable |

> **Key insight:** Heuristics are NOT "bad thinking." They evolved because they're efficient and usually correct. But they create SYSTEMATIC errors (biases) that the AP exam loves to test.

### Types of Fixation

| Type | Definition | Classic Example |
|------|-----------|----------------|
| **Mental set** | Applying a previously successful strategy even when it's no longer optimal | A student who solves every math problem algebraically, even when graphing would be faster |
| **Functional fixedness** | Seeing objects only in terms of their usual function | Duncker's candle problem: failing to see a box of tacks as a "shelf" because it's "a container for tacks" |
      `
    },
    {
      id: 'think2-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student tries to unscramble the letters OCHPS by systematically testing every possible arrangement until finding the word. The student is using:',
            options: [
              'A heuristic — a mental shortcut for fast problem-solving',
              'An algorithm — a systematic step-by-step procedure guaranteed to find the solution',
              'Insight — a sudden realization of the answer',
              'Functional fixedness — seeing only one use for the letters'
            ],
            correctAnswer: 1,
            explanation: 'Testing every possible arrangement is an algorithm — a systematic, exhaustive procedure that GUARANTEES finding the solution (if one exists). It\'s slow but reliable. If the student instead looked for common letter patterns (like "ch" or "sh") to narrow down possibilities, that would be a heuristic — faster but not guaranteed. The answer, by the way, is "CHOPS."'
          },
          {
            question: 'In Duncker\'s candle problem, participants are given a candle, a box of tacks, and matches, and asked to attach the candle to the wall so wax doesn\'t drip on the table. Most fail because they can\'t see the tack box as a shelf. This failure is called:',
            options: [
              'Mental set — applying a previously successful strategy',
              'Insight — a sudden realization of the solution',
              'Functional fixedness — inability to perceive a new use for a familiar object',
              'The availability heuristic — judging by ease of recall'
            ],
            correctAnswer: 2,
            explanation: 'Functional fixedness: participants see the box only as a "container for tacks" and can\'t reconceive it as a "shelf" to hold the candle. The solution is to empty the box, tack it to the wall as a platform, and place the candle on it. When the tacks are presented OUTSIDE the box (reducing the "container" association), more participants solve it — confirming that the fixation is on the box\'s function, not its physical properties.'
          }
        ]
      }
    },
    {
      id: 'think2-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Insight Problem Solving

**Insight** is a sudden, complete understanding of a problem's solution that appears to come "out of nowhere." Unlike algorithms (gradual progress) or heuristics (quick shortcuts), insight is all-or-nothing.

**Characteristics of Insight:**

| Feature | Detail |
|---------|--------|
| **Sudden** | Solution appears all at once — no gradual progress |
| **Complete** | Once you "see it," the solution is fully formed |
| **Accompanied by "aha!" feeling** | Emotional component — certainty that you've found the answer |
| **Brain activity** | Associated with burst of activity in right temporal lobe (anterior superior temporal gyrus) |
| **Impasse usually precedes it** | You feel stuck, then suddenly see the answer |

**The Nine-Dot Problem:**
Connect all 9 dots (arranged in a 3×3 grid) with 4 straight lines without lifting your pen. Most people fail because they assume the lines must stay WITHIN the grid boundary — but the solution requires extending lines BEYOND the dots. This is the origin of the phrase "think outside the box."

### Problem-Solving Obstacles

| Obstacle | Definition | Example |
|----------|-----------|---------|
| **Functional fixedness** | Can't see new uses for familiar objects | Can't use a shoe as a hammer |
| **Mental set** | Stuck on one approach | Always using multiplication when division would work |
| **Confirmation bias** | Only seeking evidence that supports current approach | Testing only cases that confirm your hypothesis |
| **Unnecessary constraints** | Adding rules that don't actually exist | Assuming lines must stay within the 9-dot grid |

### Duncker's Candle Problem in Detail

| Phase | What Happens |
|-------|-------------|
| **Setup** | Candle, box of tacks, matches — attach candle to wall so wax won't drip |
| **Common (failed) attempts** | Try to tack the candle directly to the wall; melt the candle to the wall |
| **Solution** | Empty the box, tack the box to the wall as a shelf, place candle on box |
| **Why people fail** | Functional fixedness — the box is seen as a "tack container," not a potential platform |
| **Manipulation** | When tacks are presented OUTSIDE the box, success rates increase dramatically |

> **AP Connection:** Functional fixedness and mental set are the most frequently tested problem-solving obstacles. Both are forms of FIXATION — being stuck because of prior experience or assumptions. The key distinction: mental set = stuck on a STRATEGY; functional fixedness = stuck on an OBJECT'S function.
      `
    },
    {
      id: 'think2-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'An ___ guarantees a solution by testing every possibility systematically', answer: 'algorithm' },
          { label: 'Functional ___ is seeing an object only in terms of its typical use', answer: 'fixedness' },
          { label: 'A sudden "aha!" realization of a solution is called ___', answer: 'insight' }
        ]
      }
    },
    {
      id: 'think2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Problem-Solving Approach** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A chess computer evaluating every possible move before selecting the best one', options: ['Algorithm', 'Heuristic', 'Insight', 'Functional fixedness'] },
          { label: 'A chess grandmaster who "just knows" the right move based on pattern recognition', options: ['Heuristic', 'Algorithm', 'Mental set', 'Fixation'] },
          { label: 'A mathematician who wakes up at 3 AM with the solution to a problem she\'d been stuck on for weeks', options: ['Insight', 'Algorithm', 'Heuristic', 'Functional fixedness'] }
        ],
        correctAnswers: ['Algorithm', 'Heuristic', 'Insight'],
        hint1: 'The computer is exhaustively checking every possibility — systematic and guaranteed.',
        hint2: 'Pattern recognition is a mental shortcut — fast and usually effective, but not exhaustive.',
        hint3: 'Solution appeared suddenly after a period of being stuck — the hallmark of insight.',
        explanation: 'Computer = algorithm (exhaustive, guaranteed). Grandmaster = heuristic (pattern-based shortcut, fast). Mathematician = insight (sudden solution after impasse, "aha!" moment).'
      }
    },
    {
      id: 'think2-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Problem-Solving Questions

**Common Misconceptions:**

| Misconception | Correction |
|--------------|-----------|
| Heuristics are always wrong | Heuristics are usually RIGHT — they just create systematic errors in specific situations |
| Algorithms are always better | Algorithms are impractical for complex problems (chess has 10^120 possible games) |
| Insight = guessing | Insight involves unconscious processing that suddenly becomes conscious — it's not random |
| Mental set = functional fixedness | Both are fixation, but: mental set = stuck on STRATEGY; functional fixedness = stuck on OBJECT function |

**Quick Decision Guide:**
- Systematic step-by-step, guaranteed answer → **Algorithm**
- Quick mental shortcut, usually right → **Heuristic**
- Sudden "aha!" realization → **Insight**
- Can't think of a new approach → **Mental set**
- Can't see a new use for an object → **Functional fixedness**

> **AP Tip:** Duncker's candle problem is the go-to example of functional fixedness. The nine-dot problem illustrates unnecessary constraints. Both show how prior experience can INHIBIT problem solving.
      `
    },
    {
      id: 'think2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A mechanic who always fixes engine problems in the same order — checking spark plugs first, then fuel lines, then timing — even when the symptoms clearly point to a different component, is MOST demonstrating:',
            options: [
              'Functional fixedness — seeing tools only in terms of their usual function',
              'Mental set — applying a previously successful strategy even when another approach would be better',
              'Insight — having a sudden realization about the engine',
              'An algorithm — systematically checking every component'
            ],
            correctAnswer: 1,
            explanation: 'The mechanic is stuck on a STRATEGY (specific diagnostic order) that has worked before, even when the current situation calls for a different approach. This is mental set — a fixation on a previously successful method. If the mechanic couldn\'t think of using a wrench as a hammer, THAT would be functional fixedness (stuck on an object\'s function). The distinction is strategy vs. object.'
          },
          {
            question: 'During a camping trip, a group needs to open a can of food but has no can opener. One person suddenly realizes they can use a flat rock to scrape along the can\'s rim. This solution MOST involves:',
            options: [
              'Overcoming functional fixedness — seeing a rock\'s use beyond its typical function',
              'Using an algorithm — testing every possible tool systematically',
              'Applying a mental set — using a strategy that worked before',
              'Using the availability heuristic — recalling similar situations'
            ],
            correctAnswer: 0,
            explanation: 'The person overcame functional fixedness by seeing a rock not just as a "rock" (something you throw or stack) but as a tool for scraping/opening. This is the opposite of what Duncker\'s participants did — they COULDN\'T see the tack box as a shelf. Here, the person successfully reconceptualized a familiar object for a novel use. The "sudden realization" also suggests an element of insight.'
          }
        ]
      }
    }
  ]
}
