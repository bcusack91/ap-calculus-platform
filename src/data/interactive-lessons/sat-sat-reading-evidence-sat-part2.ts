export const satReadingEvidencePart2Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're2-intro',
      type: 'text' as const,
      content: `# Command of Evidence: Textual

**Part 2 of 7 — Finding Evidence in the Text**

"Command of Evidence" questions ask you to identify which part of a passage **supports** a given claim or conclusion. These are among the most common SAT Reading question types.

### Two Main Types

**Type 1: "Which choice provides the best evidence for the answer to the previous question?"**
- These are paired with another question
- Strategy: Answer the first question, THEN find the quote that supports your answer

**Type 2: "Which quotation from the passage most effectively illustrates the claim?"**
- You're given a claim and must find the matching evidence
- Strategy: Read each quote and ask "Does this directly support the stated claim?"

### The Evidence Must Be DIRECT

The correct quote must **directly** support the claim—not just be related to the same topic.

**Claim:** "The author suggests that early childhood education has long-term economic benefits."

| Quote | Verdict |
|---|---|
| "Children who attended preschool earned 25% more by age 40" | ✅ Direct economic evidence |
| "Early education fosters social development" | ❌ Related topic, but not about economics |
| "The program cost \\$8,000 per student" | ❌ About cost, not about benefits |

### SAT Trap ⚠️

Trap answers are quotes that mention the same topic as the claim but don't actually **support** it. Just because a quote discusses the same subject doesn't mean it's evidence for the specific claim.`
    },
    {
      id: 're2-quiz',
      type: 'multiple-choice' as const,
      content: '**Evidence Identification Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Claim: "The author argues that social media has fundamentally altered how people form political opinions." Which quote best supports this claim?',
            options: ['"A 2023 survey found that 68% of adults under 30 cited social media as their primary source of political news, compared to just 12% who relied on newspapers"', '"Social media companies have faced increasing scrutiny from lawmakers concerned about data privacy"', '"The first social media platform launched in 2003 and quickly gained millions of users"', '"Political advertising spending on social media reached \\$3 billion in 2024"'],
            correctAnswer: 0,
            explanation: 'The claim is about HOW people form political opinions. The survey data showing 68% get political news from social media directly supports this fundamental change. The other options discuss related topics (regulation, history, spending) but don\'t address opinion formation.'
          },
          {
            question: 'When answering a paired evidence question, what is the most efficient approach?',
            options: ['Answer the first question using the passage, then match your answer to one of the evidence quotes', 'Read all four evidence quotes first, then answer the first question', 'Skip the first question and only answer the evidence question', 'Choose the longest quote as evidence'],
            correctAnswer: 0,
            explanation: 'The most efficient method is to answer the comprehension question first based on the passage, then find the quote that directly supports your answer. Working backwards from quotes is less efficient and more error-prone.'
          },
          {
            question: 'A passage argues that wolves reintroduced to Yellowstone improved the entire ecosystem. Which evidence would be WEAKEST support for this claim?',
            options: ['"Wolf populations grew from 31 to 94 in the first five years"', '"Elk herds moved away from riverbanks, allowing vegetation to regrow along streams"', '"The return of wolves led to a measurable increase in songbird populations"', '"Beaver colonies expanded as riverside willow trees recovered"'],
            correctAnswer: 0,
            explanation: 'Wolf population growth describes what happened to the wolves, not how they improved the ecosystem. The other quotes show direct cascading ecological benefits—vegetation regrowth, songbird increase, beaver expansion.'
          }
        ]
      }    },
    {
      id: 're2-text2',
      type: 'text' as const,
      content: `## Deep Dive: Evidence Matching Mastery

### Worked Example 1: Direct vs. Indirect Evidence

**Claim:** "Exercise improves academic performance."

| Quote | Direct or Indirect? | Verdict |
|---|---|---|
| "Students who exercised daily scored 15% higher on math tests" | Direct — links exercise to scores | ✅ Best evidence |
| "Exercise increases blood flow to the brain" | Indirect — mechanism, not academic outcome | ❌ Related, but not direct evidence |
| "Many students enjoy playing sports after school" | Neither — about enjoyment, not performance | ❌ Same topic, wrong focus |
| "High-performing students tend to have better sleep habits" | Neither — about sleep, not exercise | ❌ Different variable entirely |

### Worked Example 2: Paired Evidence Question Strategy

| Step | Action |
|---|---|
| 1. Read Q1 | "The author suggests that remote work increases productivity. Which claim does the passage support?" |
| 2. Answer Q1 from passage | Your answer: "Remote workers complete 13% more tasks per day" |
| 3. Read Q2 | "Which quote best supports the answer to Q1?" |
| 4. Match | Find the quote that mentions remote workers and task completion |
| 5. Result | The quote about "13% more tasks" directly supports your Q1 answer ✅ |

### Evidence Evaluation Checklist

| Ask yourself ↓ | If YES | If NO |
|---|---|---|
| Does the quote mention the specific topic of the claim? | Keep considering | Eliminate ❌ |
| Does it SUPPORT the claim (not just relate to it)? | Keep considering | Eliminate ❌ |
| Is the support DIRECT (data, clear statement)? | ✅ Strong candidate | Check others |
| Could it support a DIFFERENT claim instead? | Eliminate ❌ | ✅ Match confirmed |`
    },
    {
      id: 're2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Evidence Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'Claim: "Deforestation is the primary driver of species extinction in the Amazon." Which quote is BEST evidence?',
            options: ['"Between 2000-2020, deforestation destroyed habitats for an estimated 10,000 species in the Amazon basin"', '"The Amazon rainforest covers approximately 5.5 million square kilometers"', '"Climate change also threatens biodiversity worldwide"', '"Brazil has implemented new logging regulations in recent years"'],
            correctAnswer: 0,
            explanation: 'The claim is about deforestation driving extinction. Only A directly links deforestation to species impact (10,000 species affected). B is geography. C mentions a different threat. D discusses policy, not extinction.'
          },
          {
            question: 'When evaluating evidence quotes, the biggest mistake students make is:',
            options: ['Choosing a quote on the same TOPIC that doesn\'t actually SUPPORT the specific claim', 'Spending too long reading each quote', 'Always choosing the longest quote', 'Ignoring transition words in quotes'],
            correctAnswer: 0,
            explanation: 'Same-topic-different-support is the #1 trap. A quote about the Amazon doesn\'t automatically support a claim about Amazon deforestation. The evidence must support the SPECIFIC claim, not just be related.'
          },
          {
            question: 'Claim: "Bilingual children show enhanced executive function." Which is the WEAKEST evidence?',
            options: ['"Bilingual children learn two languages from birth"', '"Bilingual 5-year-olds outperformed monolinguals on task-switching tests by 23%"', '"MRI scans showed increased gray matter in bilingual children\'s prefrontal cortex"', '"Bilingual children scored higher on standardized measures of cognitive flexibility"'],
            correctAnswer: 0,
            explanation: 'Quote A defines what bilingual means — it says nothing about executive function. Quotes B, C, and D all provide direct evidence of enhanced cognitive ability. A is true but doesn\'t support the claim.'
          }
        ]
      }
    },
    {
      id: 're2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Evidence Matching Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'Best evidence is [direct support for the specific claim|any quote about the topic|the longest quote|the first quote in the passage]',
          'For paired Q1-Q2 evidence questions: answer [Q1 first, then match evidence|Q2 first|both simultaneously|whichever is easier]',
          'A quote on the same topic but supporting a different claim is [a trap answer|correct|partially correct|irrelevant]',
          'Evidence must support the [specific claim|general topic|author\'s background|passage title]'
        ],
        correctAnswers: ['direct support for the specific claim', 'Q1 first, then match evidence', 'a trap answer', 'specific claim'],
        hint1: 'Direct > indirect > same topic but wrong claim.',
        hint2: 'Answer the comprehension question first, then find matching evidence.',
        hint3: 'Same topic ≠ same claim.',
        explanation: 'Best evidence directly supports the specific claim. Answer Q1 first, then match. Same-topic quotes are traps if they don\'t support the exact claim. Always match evidence to the specific claim.'
      }
    },
    {
      id: 're2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Strategy | Detail |
|---|---|
| Evidence must be | DIRECT support for the SPECIFIC claim |
| Biggest trap | Same topic, wrong claim |
| Paired questions | Answer Q1 first → find matching quote |
| Elimination | Does it mention the claim's topic? Does it support or just relate? |

*Next: Inference & Implied Meaning →*`    }
  ]
};