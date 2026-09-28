export const satExpressionPart7Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei7-intro',
      type: 'text' as const,
      content: `# Expression of Ideas Review

**Part 7 of 7 — Comprehensive Review**

### Quick Decision Guide

| Question Asks About | Look For |
|---|---|
| **Best word/phrase** | Precision, tone match, correct connotation |
| **Logical sequence** | Reference links, transition clues, chronology |
| **Best introduction** | Covers paragraph scope, connects to previous |
| **Best conclusion** | Synthesizes (no new info), looks forward |
| **Relevance (does it belong?)** | Does it support the main point of the text? |
| **Combine sentences** | Preserve meaning, improve flow |
| **Rhetorical synthesis** | Match the stated goal, not just accuracy |

### Common Mistakes on Expression Questions

1. **Choosing "sounds sophisticated" over "fits the passage"** — An answer can be well-written but wrong if it doesn't match the tone or purpose
2. **Ignoring the stated goal** on synthesis questions — Read the goal twice
3. **Adding information that's interesting but off-topic** — Every sentence must serve the paragraph
4. **Choosing the longest option** — Longer ≠ better; often the trap

### Test Day Checklist ✅

Before choosing your answer on any Expression question:
- [ ] Does it match the passage's tone?
- [ ] Is it the most precise option?
- [ ] Does it accomplish the stated goal?
- [ ] Would removing it weaken the paragraph?
- [ ] Is it the most concise correct option?`
    },
    {
      id: 'ei7-quiz',
      type: 'multiple-choice' as const,
      content: '**Expression of Ideas Final Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage about marine conservation uses formal language throughout. Which sentence best fits at the end of a paragraph about coral bleaching? "The implications of a 2°C ocean temperature rise _____."',
            options: ['could prove catastrophic for reefs that shelter a quarter of ocean species', 'would be really bad for all the fish and stuff that live near the coral', 'might possibly maybe cause some kind of issues for ocean life in general', 'are worrisome, concerning, and deeply troubling to scientists worldwide'],
            correctAnswer: 0,
            explanation: 'The "could prove catastrophic" option is formal and specific (reefs, a quarter of marine species). The "fish and stuff" option is informal, the "might possibly maybe" option piles up redundant hedges, and the "worrisome, concerning" option is redundant ("worrisome," "concerning," and "deeply troubling" all mean the same thing).'
          },
          {
            question: 'When asked "Which choice most effectively accomplishes the goal?" the key word is:',
            options: ['"Goal," since the right choice must achieve that specific aim', '"Effectively," since the best choice uses the most elegant prose', '"Choice," since every option has to be compared before deciding', '"Most," since the best choice includes the most information'],
            correctAnswer: 0,
            explanation: 'The stated goal is the deciding factor. All choices will be grammatically correct and use information from the notes. Only one actually accomplishes the specific goal asked for.'
          }
        ]
      }    },
    {
      id: 'ei7-text2',
      type: 'text' as const,
      content: `## Deep Dive: Expression of Ideas Master Class

### Worked Example 1: Rhetorical Synthesis (Notes Questions)

| Step | Action |
|---|---|
| **Notes** | • Solar panels cost \\$20,000 average • Payback period is 7-10 years • Reduce electricity bills by 50-70% • Government tax credit covers 30% of cost |
| **Goal** | "emphasize the financial accessibility of solar panels" |
| **Evaluate A** | "Solar panels cost \\$20,000 on average." → States cost but doesn't emphasize accessibility ❌ |
| **Evaluate B** | "With a 30% tax credit reducing the upfront cost, solar panels pay for themselves within 7-10 years through 50-70% lower electricity bills." → Shows affordability mechanisms ✅ |
| **Evaluate C** | "Solar panels reduce electricity bills." → Too vague ❌ |
| **Evaluate D** | "The average payback period is 7-10 years." → One fact, doesn't emphasize accessibility ❌ |

### Worked Example 2: Quick-Classify the Question Type

| Question Phrasing | Type | Strategy |
|---|---|---|
| "Which choice most effectively…" | Rhetorical goal | Read the goal, match to the choice that achieves it |
| "Which choice best introduces…" | Introduction | Choose the one that previews the paragraph scope |
| "Which choice best concludes…" | Conclusion | No new info; synthesize main point |
| "Which choice most logically completes the text?" | Logical completion | Follow the text's reasoning to its conclusion |
| "The writer wants to emphasize…" | Emphasis | Match the stated emphasis |
| "Which choice uses the most precise…" | Word choice | Specific > vague, match tone |

### Expression of Ideas Decision Flowchart

| First Ask | Then Ask | Final Decision |
|---|---|---|
| Does the question state a goal? | → Match the goal exactly | Choose the option that achieves the stated purpose |
| Is it about logical order? | → Check referential links | Pronouns follow antecedents, examples follow claims |
| Is it about relevance? | → Does it support the main point? | Keep what supports it; reject off-topic or repetitive choices |
| Is it about word choice? | → Match tone + precision | Eliminate informal, over-specific, and wrong-connotation options |`
    },
    {
      id: 'ei7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Expression of Ideas Final Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'Notes: A study found that students who slept 8+ hours scored 15% higher. A study also found sleep-deprived students had 30% more errors. Goal: "emphasize the negative impact of insufficient sleep."',
            options: ['Students who lacked sleep made 30% more errors than well-rested peers.', 'Students who slept eight or more hours scored 15% higher on exams.', 'Two studies examined how sleep relates to students\' academic performance.', 'Students who get enough sleep tend to perform better on their exams.'],
            correctAnswer: 0,
            explanation: 'The goal is to emphasize the NEGATIVE impact of too little sleep. Only the 30%-more-errors sentence puts the students who lacked sleep and their worse results front and center. The eight-hours sentence and the enough-sleep sentence frame the finding positively (the benefit of sleep), and the two-studies sentence names no result at all.'
          },
          {
            question: 'A paragraph about ocean acidification contains this sentence: "Many marine biologists enjoy scuba diving as a hobby." Should the writer keep it?',
            options: ['No, because a hobby is unrelated to the topic', 'Yes, because it gives context about marine biologists', 'Yes, because it makes the paragraph more relatable', 'No, because it is too short to add any real value'],
            correctAnswer: 0,
            explanation: 'Marine biologists\' hobbies are irrelevant to a paragraph about ocean acidification. Even though it\'s about marine biologists (who study acidification), their personal hobbies don\'t support the topic.'
          },
          {
            question: 'Which skill is MOST important for Expression of Ideas questions overall?',
            options: ['Reading and matching the stated goal or purpose', 'Knowing as much advanced vocabulary as possible', 'Memorizing every grammar and punctuation rule', 'Choosing the most sophisticated-sounding option'],
            correctAnswer: 0,
            explanation: 'Expression of Ideas questions almost always include a stated purpose: "emphasize," "introduce," "conclude," "combine." Reading and matching that goal is the single most important skill.'
          }
        ]
      }
    },
    {
      id: 'ei7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Expression of Ideas Final Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"Which choice most effectively accomplishes the goal?" → Focus on [the stated goal|the most detailed answer|grammar alone|the most formal answer]',
          'Off-topic but interesting sentence = [delete|keep|expand|move]',
          'Combining sentences must preserve [meaning and emphasis|every original word|complexity|length]',
          'The most common Expression question type involves [matching a stated purpose|defining vocabulary|fixing punctuation|counting words]'
        ],
        correctAnswers: ['the stated goal', 'delete', 'meaning and emphasis', 'matching a stated purpose'],
        hint1: 'The goal in the question stem decides the answer.',
        hint2: 'Unity > entertainment value.',
        hint3: 'Changing emphasis = changing meaning.',
        explanation: 'The stated goal is always the deciding factor. Off-topic = delete. Combining must preserve emphasis. Most Expression Qs ask you to match a rhetorical purpose.'
      }
    },
    {
      id: 'ei7-summary',
      type: 'text' as const,
      content: `## Full Topic Summary: Expression of Ideas

| Part | Topic | Core Skill |
|---|---|---|
| 1 | Word Choice | Precision, tone, connotation |
| 2 | Organization | Logical sequence and reference links |
| 3 | Intros & Conclusions | Preview scope, synthesize (no new info) |
| 4 | Synthesis | Combine sentences preserving meaning |
| 5 | Style & Tone | Match register, consistency |
| 6 | Cohesion & Unity | Every sentence supports the topic |
| 7 | Review | Match the stated goal/purpose |

### Top 3 SAT Expression Rules
1. **Read the goal** — it determines the correct answer
2. **Match the tone** — wrong register = wrong answer
3. **Stay on topic** — every sentence must serve the paragraph

🎉 *Expression of Ideas complete!*`    }
  ]
};