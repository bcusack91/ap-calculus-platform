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
      }
    }
  ]
};