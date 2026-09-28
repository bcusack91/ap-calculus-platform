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

**Type 1: "Which quotation from the text most effectively illustrates the claim?"**
- You're given a claim and must find the matching quote
- Strategy: Restate the claim in your own words, then ask of each quote "Does this directly show that?"

**Type 2: "Which finding, if true, would most directly support the researcher's hypothesis?"**
- You're given a hypothesis and four possible results
- Strategy: Predict what result the hypothesis requires, then find the finding that matches it

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
            options: ['"In a 2023 survey, 68% of adults under 30 named social media as their primary source of political news"', '"Social media companies have faced growing scrutiny from lawmakers concerned about how user data is stored"', '"The first major social media platform launched in 2003 and gained millions of users within two years"', '"Political campaigns spent over \\$3 billion on social media advertising during the 2024 election cycle"'],
            correctAnswer: 0,
            explanation: 'The claim is about HOW people form political opinions. The survey showing that 68% of young adults get their political news mainly from social media speaks directly to where opinions are formed. The other quotes discuss related topics (regulation, history, ad spending) but say nothing about how people form their views; spending shows what campaigns did, not how audiences changed.'
          },
          {
            question: 'A question asks which quotation most effectively illustrates a claim. What is the most reliable first step?',
            options: ['Restate the claim in your own words, then test each quote against it', 'Pick the quote that repeats the most words from the claim itself', 'Read all four quotes first, then decide what the claim really means to say', 'Choose the quote that contains the most specific numbers or data'],
            correctAnswer: 0,
            explanation: 'Pinning down exactly what the claim says gives you a standard to test each quote against. Word-matching is the classic trap (a quote can echo the claim and still not support it), deciding the claim\'s meaning from the quotes lets the choices steer you, and data-heavy quotes can be off-target.'
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

### Worked Example 2: "Which Finding Would Support" Strategy

| Step | Action |
|---|---|
| 1. Read the hypothesis | "A researcher hypothesizes that remote work increases productivity." |
| 2. Predict | The hypothesis needs a result showing remote workers get MORE done |
| 3. Read the question | "Which finding, if true, would most directly support the hypothesis?" |
| 4. Match | Find the finding that compares remote and office workers' output |
| 5. Result | "Remote workers completed 13% more tasks per day than office workers" directly supports it ✅ |

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
            options: ['"Habitat loss from deforestation accounts for most documented species extinctions in the Amazon"', '"The Amazon rainforest covers roughly 5.5 million square kilometers across nine countries"', '"Climate change also threatens species with extinction across tropical forests worldwide"', '"Brazil has tightened its logging rules, and deforestation has slowed in some recent years"'],
            correctAnswer: 0,
            explanation: 'The claim is that deforestation is the PRIMARY driver of extinction. Only the habitat-loss quote ties deforestation to extinctions and ranks it first ("most documented extinctions"). The 5.5-million-square-kilometers quote is geography. The climate-change quote names a different threat. The logging-rules quote discusses policy and clearing rates, not extinction.'
          },
          {
            question: 'According to this lesson, which trap catches the most students on evidence questions?',
            options: ['Choosing a quote on the right topic that does not support the claim', 'Rereading every quote twice and running out of time in the module', 'Choosing the longest quote simply because it looks the most thorough', 'Ignoring the transition words that open each of the quotes'],
            correctAnswer: 0,
            explanation: 'Same-topic-different-support is the #1 trap. A quote about the Amazon doesn\'t automatically support a claim about Amazon deforestation. The evidence must support the SPECIFIC claim, not just be related.'
          },
          {
            question: 'Claim: "Bilingual children show enhanced executive function." Which is the WEAKEST evidence?',
            options: ['"Most bilingual children in the study had heard two languages at home from birth"', '"Bilingual 5-year-olds outperformed monolinguals on task-switching tests by 23%"', '"MRI scans showed increased gray matter in bilingual children\'s prefrontal cortex"', '"Bilingual children scored higher on standardized measures of cognitive flexibility"'],
            correctAnswer: 0,
            explanation: 'The heard-two-languages-since-birth quote describes the children\'s background; it says nothing about executive function. The task-switching, MRI, and cognitive-flexibility quotes all provide evidence of enhanced cognitive ability. The background quote may be true, but it doesn\'t support the claim.'
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
          'For "which finding would support the hypothesis" questions, first [predict the result the hypothesis needs|reread the whole passage|pick the most detailed finding|find the most recent finding]',
          'A quote on the same topic but supporting a different claim is [a trap answer|correct|partially correct|irrelevant]',
          'Evidence must support the [specific claim|general topic|author\'s background|passage title]'
        ],
        correctAnswers: ['direct support for the specific claim', 'predict the result the hypothesis needs', 'a trap answer', 'specific claim'],
        hint1: 'Direct > indirect > same topic but wrong claim.',
        hint2: 'Know what result would confirm the hypothesis before you read the findings.',
        hint3: 'Same topic ≠ same claim.',
        explanation: 'Best evidence directly supports the specific claim. For hypothesis questions, predict the needed result first, then match. Same-topic quotes are traps if they don\'t support the exact claim. Always match evidence to the specific claim.'
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
| Hypothesis questions | Predict the result the hypothesis needs → find the matching finding |
| Elimination | Does it mention the claim's topic? Does it support or just relate? |

*Next: Inference & Implied Meaning →*`    }
  ]
};