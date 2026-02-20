export const mcatPsychBehavPart2Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb2-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 2 of 7 — Learning & Memory**

### Classical Conditioning (Pavlov)

| Term | Definition | Example |
|------|-----------|---------|
| UCS (unconditioned stimulus) | Naturally triggers response | Food |
| UCR (unconditioned response) | Natural response | Salivation |
| CS (conditioned stimulus) | Learned trigger | Bell |
| CR (conditioned response) | Learned response | Salivation to bell |

**Key phenomena**: Acquisition, extinction, spontaneous recovery, generalization, discrimination

### Operant Conditioning (Skinner)

| Type | Effect on Behavior | Example |
|------|-------------------|---------|
| Positive reinforcement | Increase (add pleasant) | Treat for good grades |
| Negative reinforcement | Increase (remove unpleasant) | Seatbelt silences alarm |
| Positive punishment | Decrease (add unpleasant) | Speeding ticket |
| Negative punishment | Decrease (remove pleasant) | Phone taken away |

### Memory Types

| Type | Duration | Capacity | Example |
|------|----------|----------|---------|
| Sensory | <1 second (iconic) to ~3-4s (echoic) | Large | Flash of image |
| Short-term/Working | ~30 seconds | 7$\\pm$2 items | Phone number |
| Long-term | Unlimited duration | Unlimited capacity | Life events |`
    },
    {
      id: 'pb2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Learning & Memory** 🎯',
      exercise: {
        questions: [
          {
            question: 'A child stops throwing tantrums when parents consistently ignore the behavior. This is:',
            options: ['Extinction of operant conditioning — removing reinforcement (attention) decreases behavior', 'Classical conditioning', 'Negative reinforcement', 'Positive punishment'],
            correctAnswer: 0,
            explanation: 'The tantrums were maintained by attention (positive reinforcement). When attention is consistently withheld, the behavior extinguishes. This is a common MCAT scenario in behavioral psychology.'
          }
        ]
      }
    },
    {
      id: 'pb2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Classical conditioning: association between stimuli (involuntary responses)
- Operant conditioning: consequences shape behavior (voluntary responses)
- Reinforcement increases behavior; punishment decreases behavior
- Memory: sensory → short-term (7$\\pm$2 items) → long-term`
    }
  ]
};
